window.tests = {
	
	"make" : function(){
		for(i=0; i<250; i++){
			var n = dojo.doc.createElement('ul');
			dojo.addClass(n, "fromcode");
			n.id = "setid" + i;
			dojo.body().appendChild(n);
			n.innerHTML = "<li>one</li><li>two</li><li>three</li>"
		}
		return dojo.query("ul.fromcode").length;
	},
	
	"indexof" : function(){
		var n;
		for(var i = 0; i < 20; i++){
			n = dojo.query("ul").indexOf( dojo.byId("setid150") );
		}
		return n;
	},
	
	"bind" : function(){
		return dojo.query("ul > li").onclick(function(){}).length;
	},
	
	"attr" : function(){
		return dojo.query("ul").attr("id").length;
	},
	
	"bindattr" : function(){
		var someFn = function(){};
		return dojo.query("ul > li").forEach(function(n){
			var c = dojo.connect(n, "mouseover", someFn);
			dojo.attr(n, "rel", "touched");
			dojo.disconnect(c);
		}).length;
	},

	"table": function(){
		for(var i = 0; i < 40; i++){
			var t = dojo.doc.createElement("table");
			dojo.addClass(t, "madetable");
			dojo.body().appendChild(t);
			var tr = t.appendChild(dojo.doc.createElement('tr'));
			tr.appendChild(dojo.doc.createElement('td')).innerHTML = "first";
			dojo.place(dojo.doc.createElement('td'), tr, "first");
		}
		return dojo.query("tr td").length;
	},
	
	"addanchor" : function(){
		return dojo.query(".fromcode li").addContent("<a href='http://example.com'>link</a>").length;
	},

	"append" : function(){
		for(var i = 0; i<500; i++){
			var d = dojo.doc.createElement("div");
			dojo.attr(d, "rel", "foo2");
			dojo.body().appendChild(d);
		}
		return dojo.query("div[rel^='foo2']").length;
	},
	
	"addclass-odd" : function(){
		return dojo.query("div")
			.addClass("added")
			.filter(function(n,i){ return i % 2 === 1 })
			.addClass("odd")
			.length;
	},
	
	"style": function(){
		return dojo.query(".added")
			.style({
				backgroundColor:"#ededed",
				color:"#fff"
			})
			.length;
	},
	
	"removeclass": function(){
		return dojo.query(".added").removeClass("added").length;
	},
	
	"sethtml": function(){
		return dojo.query("div").forEach(function(n){
			n.innerHTML = "<p>new content</p>"
		}).length;
	},
	
	"insertbefore" : function(){
		return dojo.query(".fromcode a").forEach(function(n){
			var c = dojo.doc.createElement("p"); 
			c.innerHTML = "Before Link";
			dojo.place(c, n, "before");
		}).length;
	},
	
	"insertafter" : function(){
		return dojo.query(".fromcode a").forEach(function(n){
			var c = dojo.doc.createElement("p"); 
			c.innerHTML = "after Link";
			dojo.place(c, n, "after");
		}).length;
	},
	
	"destroy": function(){ 
		return dojo.query(".fromcode").forEach(dojo._destroyElement).length;
	},
	
	"finale": function(){
		dojo.query("body *").forEach(dojo._destroyElement);
		return dojo.query("body *").length;
	}
	
};
