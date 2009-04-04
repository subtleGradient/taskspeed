window.tests = {
	
	"make" : function(){
		var Element = qx.bom.Element;
		var Attribute = qx.bom.element.Attribute;

		for (var i=0; i<250; i++)
		{
			var el = Element.create("ul", {
				"class": "fromcode",
				"html" : "<li>one</li><li>two</li><li>three</li>",
				"id" : "setid" + i
			});
			document.body.appendChild(el);
		}
		return qx.bom.Selector.query("ul.fromcode").length;
	},
	
	"indexof" : function(){  
		var Collection = qx.bom.Collection;
		var Selector = qx.bom.Selector;
		var n;
		for(var i = 0; i < 20; i++){
			n = Collection.query("ul").indexOf( Selector.query("#setid150")[0] );
		}
		return n;
	},
	
	"bind" : function(){
	  return qx.bom.Collection.query("ul > li").addListener("click", function() {}).length;
	},
	
	"attr" : function(){
		var elements = qx.bom.Selector.query("ul").map(function(el) {return el.id});
		return elements.length;
	},
	
	"bindattr" : function(){
		var Attribute = qx.bom.element.Attribute;
		var Element = qx.bom.Element;
		
		var callback = function() {};
		
		var elements = qx.bom.Collection.query("ul > li");
		for (var i=0; i<elements.length; i++) {
			var element = elements[i];
			Element.addListener(element, "mouseover", callback);
			Attribute.set(element, "rel", "touched");
			Element.removeListener(element, "mouseover", callback);
		}
		return elements.length;
	},

	"table": function(){
		var Element = qx.bom.Element;
		var Attribute = qx.bom.element.Attribute;
		var Collection = qx.bom.Collection;
		
		for (var i=0; i<40; i++)
		{
		  var table = Collection.html('<table class="madetable"></table>');
		  document.body.appendChild(table[0]);
		  
		  table.append("<tr><td>first</td></tr>")
		    .find("tr")
		    .prepend("<td>before</td>")
		}
		
		return qx.bom.Selector.query("tr td").length;
	},
	
	"addanchor" : function(){
		return qx.bom.Collection.query(".fromcode > li").append("<a href='http://example.com'>link</a>").length;
	},

	"append" : function(){
		var Element = qx.bom.Element;
		var Attribute = qx.bom.element.Attribute;

		for (var i=0; i<500; i++)
		{
			var el = Element.create("div", {
				"rel": "foo",
				"text" : "test"
			});
			document.body.appendChild(el);
		}
		return qx.bom.Selector.query("[rel^='foo']").length;
	},
	
	"addclass-odd" : function(){
		return qx.bom.Collection.query("div").addClass("added").filter(function(n, i) {
			return i % 2 === 1
		}).addClass("odd").length;
	},
	
	"style": function(){
		return qx.bom.Collection.query(".added").setStyles({ backgroundColor:"#ededed", color:"#fff" }).length;
	},
	
	"removeclass": function(){
		return qx.bom.Collection.query(".added").removeClass("added").length;
	},
	
	"sethtml": function(){
		return qx.bom.Collection.query("div").setAttribute("html", "<p>new content</p>").length;
	},
	
	"insertbefore" : function(){
		return qx.bom.Collection.query(".fromcode a").before("<p>A Link</p>").length;
	},
	
	"insertafter" : function(){
		return qx.bom.Collection.query(".fromcode a").after("<p>After Link</p>").length;
	},
	
	"destroy": function(){ 
		return qx.bom.Collection.query(".fromcode").remove().length;
	},
	
	"finale": function(){
		qx.bom.Element.empty(document.body);
		return qx.bom.Selector.query("body *").length;
	}
	
};
