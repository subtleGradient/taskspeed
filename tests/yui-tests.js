window.tests = {
	
	"make" : function(){
		var ul;
		for ( var i = 0; i < 250; i++ ) {
			ul = document.createElement('ul');
			YAHOO.util.Dom.addClass(ul, 'fromcode');
			YAHOO.util.Dom.setAttribute(ul, 'id', 'setid'+i);
			document.body.appendChild(ul);
			ul.innerHTML = '<li>one</li><li>two</li><li>three</li>';
		}
		return YAHOO.util.Selector.query('ul.fromcode').length;
	},
	
	"indexof" : function(){
		// @TODO this is ugly :-o
		var target, uls, index;
		for ( var i = 0; i < 20; i++ ) {
			target = YAHOO.util.Dom.get('setid150');
			uls = YAHOO.util.Selector.query('ul');
			index = 0;
			for ( var j = 0; j < uls.length; j++ ) {
				if ( uls[j] === target ) {
					index = j;
					break;
				}
			}
		}
		return index;
	},
	
	"bind" : function(){
		var lis = YAHOO.util.Selector.query('ul > li');
		YAHOO.util.Event.addListener(lis, 'click', function(){});
		return lis.length;
	},
	
	"attr" : function(){
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('ul'), function(el){
			return YAHOO.util.Dom.getAttribute(el, 'id');
		}).length;
	},
	
	"bindattr" : function(){
		// @TODO See if we can speed this one up
		var lis = YAHOO.util.Selector.query('ul > li');
		YAHOO.util.Event.addListener(lis, 'mouseover', function(){});
		YAHOO.util.Dom.batch(lis, function(li){ YAHOO.util.Dom.setAttribute(li, 'rel', 'touched'); });
		YAHOO.util.Event.removeListener(lis, 'mouseover');
		return lis.length;
	},

	"table": function(){
		var table;
		for ( var i = 0; i < 40; i++ ) {
			table = document.createElement('table');
			YAHOO.util.Dom.addClass(table, 'madetable');
			document.body.appendChild(table);
			table.innerHTML = '<tr><td>first</td></tr>';
			YAHOO.util.Dom.insertBefore(document.createElement('td'), YAHOO.util.Selector.query('td', table, true));
		}
		return YAHOO.util.Selector.query('tr td').length;
	},
	
	"addanchor" : function(){
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('.fromcode > li'), function(li){
			li.innerHTML = '<a href="http://example.com">link</a>';
		}).length;
	},

	"append" : function(){
		var div;
		for ( var i = 0; i < 500; i++ ) {
			div = document.createElement('div');
			YAHOO.util.Dom.setAttribute(div, 'rel', 'foo2');
			document.body.appendChild(div);
		}
		return YAHOO.util.Selector.query("div[rel^='foo2']").length;
	},
	
	"addclass-odd" : function(){
		// using ':nth-child(even)' because others start counting at 0
		var divs = YAHOO.util.Selector.query('div'),
			odds = YAHOO.util.Selector.filter(divs, ':nth-child(even)');
		YAHOO.util.Dom.addClass(divs, 'added');
		YAHOO.util.Dom.addClass(odds, 'odd');
		return odds.length;
	},
	
	"style": function(){
		var nodes = YAHOO.util.Dom.getElementsByClassName('added');
        YAHOO.util.Dom.setStyle(nodes, 'background-color', '#ededed');
        YAHOO.util.Dom.setStyle(nodes, 'color', '#fff');
		return nodes.length;
	},
	
	"removeclass": function(){
		var nodes = YAHOO.util.Dom.getElementsByClassName('added');
		YAHOO.util.Dom.removeClass(nodes, 'added');
		return nodes.length;
	},
	
	"sethtml": function(){
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('div'), function(div){
			div.innerHTML = '<p>new content</p>';
		}).length;
	},
	
	"insertbefore" : function(){
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('.fromcode a'), function(a){
			var p = document.createElement('p');
			p.innerHTML = 'A Link';
			YAHOO.util.Dom.insertBefore(p,a);
		}).length;
	},
	
	"insertafter" : function(){
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('.fromcode a'), function(a){
			var p = document.createElement('p');
			p.innerHTML = 'After Link';
			YAHOO.util.Dom.insertAfter(p,a);
		}).length;
	},
	
	"destroy": function(){ 
		return YAHOO.util.Dom.batch(YAHOO.util.Selector.query('.fromcode'), function(n){
			n.parentNode.removeChild(n);
		}).length;
	},
	
	"finale": function(){
		document.body.innerHTML = ''; // Same as other library's empty methods
		return YAHOO.util.Selector.query('body *').length;
	}
	
};
