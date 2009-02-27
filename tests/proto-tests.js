window.tests = {  
	"make" : function(){
		var fromcode;
		for (var i = 0; i < 250; i++) {
			
			fromcode = new Element('ul').addClassName('fromcode').writeAttribute('id','setid'+i);
			$(document.body).insert(fromcode);
			$w('one two three').each( function(word){
				fromcode.insert(new Element('li').update(word));
			});
		}
		return $$('ul.fromcode').length;
	},
	
	"indexof" : function(){
		var index, node;
		for (var i = 0; i < 20; i++) {
			
			node = $('setid150');
			index = $$('ul').indexOf(node);
		}
		return index;
	},
	
	"bind" : function(){
		return $$('ul > li').invoke('observe', 'click', Prototype.emptyFunction).length;
	},
	
	"attr" : function(){
		return $$('ul').pluck('id').length;
	},
	
	"bindattr" : function(){
		var LIs = $$('ul > li');
		
		LIs.each( function(li) {
			li.observe('mouseover', Prototype.emptyFunction);
			li.writeAttribute('rel', 'touched');
			li.stopObserving('mouseover', Prototype.emptyFunction);
		});
		
		return LIs.length;  
	},
	
	"table": function(){
		var table, tr;
		for (var i = 0; i < 40; i++) {
			
			$(document.body).insert(
				new Element('table', { 'class': 'madetable' })
					.insert(
						new Element('tr')
							.insert(new Element('td'))
							.insert({ top: new Element('td') })
					)
			);
		}
		return $$('tr td').length;
	},
	
	"addanchor" : function(){
		var LIs = $$('.fromcode > li');
		
		LIs.each( function(li) {
			li.insert(new Element('a', { href: 'http://example.com' }).update('link'));
		});
		
		return LIs.length;  
	},
	
	"alt-add" : function(){
		return $$(".fromcode > li").invoke('insert', "<a href='http://example.com'>link2</a>").length;
	},
	
	"create" : function(){
		for (var i = 0; i < 500; i++) {
			
			$(document.body).insert(new Element('div', { rel: 'foo' }).update('test'));
		}
		return $$("[rel^='foo']").length;
	},
	
	"append" : function(){
		for (var i = 0; i < 500; i++) {
			
			$(document.body).insert(new Element('div', { rel: 'foo2' }));
		}
		return $$("[rel^='foo2']").length;
	},
	
	"addclass-odd" : function(){
		var divs = $$('div'), oddDivs = [];
		
		divs.each(function(div, index) {
			div.addClassName('added');
			if (index % 2 === 1) {
				div.addClassName('odd');
				oddDivs.push(div);
			}
		});
		
		return oddDivs.length;
	},
	
	"style": function(){
		var nodes = $$('.added');
		
		nodes.invoke('setStyle', {
			backgroundColor: '#ededed',
			color: '#fff'
		});
		
		return nodes.length;
	},
	
	"confirm-added" : function(){
		return $$('div.added').length;
	},
	
	"removeclass": function(){
		return $$('.added').invoke('removeClassName', 'added').length;
	},
	
	"sethtml": function(){
		return $$('div').invoke('update', "<p>new content</p>").length;
	},
	
	"sethtml-alt" : function(){
		return $$('.odd').select( function(node, i) { return i % 50 === 0; }).invoke("update", "<p>alt content</p>").length;  
	},
	
	"insertbefore" : function(){
		var anchors = $$('.fromcode a');
		
		anchors.each( function(anchor) {
			anchor.insert({ before: new Element('p').update("A Link") });
		});
		
		return anchors.length;  
	},
	
	"insertafter" : function(){
		var anchors = $$(".fromcode a");
		
		anchors.each( function(anchor) {
			anchor.insert({ after: new Element('p').update("After Link") });
		});
		
		return $$(".fromcode a + p").length;
	},
	
	destroy: function(){
		return $$(".fromcode").each(Element.remove).length;
	},
	
	finale: function(){
		$(document.body).descendants().each(Element.remove);
		
		return $$("body *").length;
	}
	
};
