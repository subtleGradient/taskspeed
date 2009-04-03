
window.tests = {
	
	"make" : function(){	
		var ul, i;
		for ( i = 0; i < 250; i++ ) {
			ul = Y.Node.create('<ul></ul>');
			ul.addClass('fromcode');
			ul.set('id', 'setid'+i).set('innerHTML', '<li>one</li><li>two</li><li>three</li>');
			Y.get('body').appendChild(ul);
		}
		return Y.all('ul.fromcode').size();
	},
	
	"indexof" : function(){
		var target, item, index, i;
		for ( i = 0; i < 20; i++ ) {
			item = 0;
			index = 0;
			target = Y.get('#setid150');
			Y.all('ul').each(function(n){
				if ( n.compareTo(target) ) {
					index = item;
				}
				item ++;
			});
		}
		return index;
	},
	
	"bind" : function(){
		return Y.all('ul > li').on('click', function(){}).length;
	},
	
	"attr" : function(){
		return Y.all('ul').get('id').length;
	},
	
	"bindattr" : function(){
		var nodes = Y.all('ul > li');
		nodes.on('mouseover', function(){});
		nodes.set('rel', 'touched');
		nodes.detach('mouseover');
		return nodes.size();
	},

	"table": function(){
		// in a 40-iteration for loop:
		//		create a table with the class "madetable", and append it to the DOM
		//		add a row with one cell to the table. the cell content should be "first"
		//		add a new cell before the first cell in the row.
		//
		//	return the length of the query "tr td"
		var table, i;
		for ( i = 0; i < 40; i++ ) {
			table = Y.Node.create('<table class="madetable"></table>');
			Y.get('body').appendChild(table);
			table.set('innerHTML', '<tr><td>first</td></tr>');
			table.query('td').get('parentNode').insertBefore(Y.Node.create('<td></td>'));
		}
		return Y.all('tr td').size();
	},
	
	"addanchor" : function(){
		return Y.all('.fromcode > li').set('innerHTML', '<a href="http://example.com">link</a>').length;
	},

	"append" : function(){
		//	in a 500 iteration loop:
		//		create a new <div> with the same critera as 'create'
		//			- NOTE: rel needs to be == "foo2"
		//		then append to body element (no caching)
		//		
		//	return then length of the matches from the selector "div[rel^='foo2']" 
		for ( var i = 0; i < 500; i++ ) {
			Y.get('body').appendChild(Y.Node.create('<div rel="foo2"></div>'));
		}
		return Y.all("div[rel^='foo2']").size();
	},
	
	"addclass-odd" : function(){
		// locate all div elements on the page
		//	add the class "added" to those divs
		//	add the class "odd" to the odd divs in the selection
		//
		// return the lenght of the odd found divs
		var divs = Y.all('div');
		divs.addClass('added');
		return divs.filter(':nth-child(even)').addClass('odd').length;
	},
	
	"style": function(){
		return Y.all('.added').setStyles({ 'background-color':'#ededed', 'color':'#fff' }).length;
	},
	
	"removeclass": function(){
		return Y.all('.added').removeClass('added').length;
	},
	
	"sethtml": function(){
		return Y.all('div').set('innerHTML', '<p>new content</p>').length;
	},
	
	"insertbefore" : function(){
		//	find all anchors in the class "fromcode" (.fromcode a)
		//		add a <p> element in the dom before the matched anchors
		//			- the content should equal "A Link"
		//		
		//	return the length of the found anchors.
		return Y.all('.fromcode a').insertBefore(Y.Node.create('<p>A Link</p>')).length;
	},
	
	"insertafter" : function(){
		return Y.all('.fromcode a').appendChild(Y.Node.create('<p>After Link</p>')).length;
	},
	
	"destroy": function(){ 
		var nodes = Y.all('.fromcode');
		nodes.each(function(node){
			node.get('parentNode').removeChild(node);
		});
		return nodes.size();
	},
	
	"finale": function(){
		// empty the body element of all elements
		//
		// return the length of the query "body *"
		var body = Y.get('body');
		while ( body.get('firstChild') ) {
			body.removeChild(body.get('firstChild'));
		}
		return Y.all('body *').size();
	}
	
};
