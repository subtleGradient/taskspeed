<?php
	// call php data.php > results.json to get an up-to-date local copy of a the 
	// "master" results. Or adjust the save-results endpoint in slickspeed.js,
	// and use that as the $data url.
	
	// this is the "master" collected data. Adjust for your own purposes.
	$data = file("http://dante.dojotoolkit.org/taskspeed/results.dat");

	$results = array();	
	foreach($data as $line){
		// wow, really?
		$d = json_decode(stripslashes(unserialize($line)));
		$results[] = $d;
	}

	$total_tests = count($results);
	
	// the results by browser
	$byBrowser = getBaseData($results);
	$uas = array_keys($byBrowser["browsers"]);
	
	$counts = array();
	$perbrowser = array();
	
	foreach($uas as $browser){
		// just to see how good of coverage each browser got
		$tests = $byBrowser["browsers"][$browser]["tests"];
		$counts[$browser] = count($tests);
		
		if(!is_array($perbrowser[$browser])){
			$perbrowser[$browser] = array();
		}
		
		foreach($tests as $test){
			foreach($test as $library => $score){
				if(!is_array($perbrowser[$browser][$library])){
					$perbrowser[$browser][$library] = array();
					$perbrowser[$browser][$library]['total'] = 0;
					$perbrowser[$browser][$library]['average'] = 0;
				}
				$perbrowser[$browser][$library]['total'] += $score;
			}
		}
	}
	
	foreach($perbrowser as $browser => $libs){
		foreach($libs as $lib => $part){
			$perbrowser[$browser][$lib]['average'] = $part['total'] / $counts[$browser];
		}
	}

	$out = array(
		"counts" => $counts,
		"byBrowser" => $perbrowser,
		"everything" => $byBrowser
	);

	print json_encode($out);
	
	function getBaseData($data){
		
		$ret = array();
		$totals = array();
		$averages = array();
		$libs = array();
		
		foreach($data as $item){
			
			// find out which browser this test was run in.
			$ua = get_browser($item -> ua, true);
			$b = $ua["browser"] . " " . $ua["version"];
			
			$scores = $item -> scores;
			
			// build up the array
			if(!is_array($ret[$b])){
				$ret[$b] = array();
				if(!is_array($ret[$b]["tests"])){
					$ret[$b]["tests"] = array();
				}
			}
			
			// do a cumulative count for each library across all browsers
			foreach($scores as $library => $score){
				if(!in_array($library, $libs)){
					$libs[] = $library;
				}
				if(empty($totals[$library])){
					$totals[$library] = 0;
					$averages[$library] = 0;
				}
				$totals[$library] += $score;
			}
			
			// stash the full results for each browser test
			$ret[$b]['tests'][] = $scores;
		}
		
		// reduce the totals to averages
		foreach($totals as $lib => $total){
			$averages[$lib] = $totals[$lib] / count($data);
		}
		
		// give back the "sorted" data
		return array(
			"browsers" => $ret,
			"totals" => $totals,
			"averages" => $averages,
			"libraries" => $libs
		);
	}

?>