<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" debug="true">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	
	<script type="text/javascript" src="../frameworks/<?php echo $_GET['include']; ?>"></script>
	<script type="text/javascript" src="../tests/<?php echo $_GET['function'] ?>-tests.js"></script>
	
	<script type="text/javascript">
				
		function test(selector){
			var code = tests[selector];// && (tests[selector].toSource || tests[selector].toString)();
			try {
				var start = new Date();
				var elements = tests[selector] ? tests[selector]() : -1;
				var end = new Date();
				return {'time': Math.round(end - start), 'found': elements, 'code':code };
			} catch(err){
				var end = new Date();
				if (elements == undefined) elements = {length: -1};
				return ({'time': Math.round(end - start), 'found': elements, 'error': err, 'code':code });
			}
		}
	
	</script>
	
</head>

<body>
	
	<?php include('../template.html');?>

</body>
</html>