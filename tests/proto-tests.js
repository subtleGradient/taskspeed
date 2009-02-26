window.tests = {
	
	"make" : function(){
		for(var i = 0; i<250; i++){
			var n = new Element("ul", {
				"class":"fromcode",
				id: "setid" + i
			});
			n.update("<li>one</li><li>two</li><li>three</li>");
		}
		return $$("ul.fromcode").length;
	},
	
	"indexof" : function(){
		for(var i = 0; i < 20; i++){
  			var id = $("setid150");
  			n = $$("ul").indexOf(id);
  		}
		return n; 
	},
	
	"bind" : function(){
		return $$("ul > li").each(function(n){
			n.observe("click", function(){ });
		}).length;
	},
	
	"attr" : function(){
//		return $$("ul").attr("id").length;
	},
	
	"bindattr" : function(){
//  	return $$("ul > li").forEach(function(n){
//  		var c = dojo.connect(n, "onmouseover", function(){ });
//  		dojo.attr(n, "rel", "dj");
//  		dojo.disconnect(c);
//  	}).length;
	},

	"table": function(){
//		for(var i = 0; i < 40; i++){
//			var n = dojo.create("table", { "class":"madetable" }, dojo.body());
//			var row = dojo.place("<tr><td>first</td></tr>", n);
//			dojo.place("<td>before</td>", row, "first");
//		}
//		return $$("tr td").length;
	},
	
	"addanchor" : function(){
//		return $$(".fromcode > li").addContent("<a href='http://example.com'>link</a>").length;
	},

	"alt-add" : function(){
//		return $$(".fromcode > li").forEach(function(n){
//			dojo.place("<a href='http://example.com'>link2</a>", n);
//		}).length;
	},
	
	"create" : function(){
//  	for(var i = 0; i<500; i++){
//  		dojo.create("div", { innerHTML:"dojotest", rel:"bar" }, dojo.body());
//  	}
//  	return $$("[rel^='bar']").length;
	},
	
	"append" : function(){
//  	for(var i = 0; i<500; i++){
//  		dojo.attr(dojo.place("<div>dojotest2</div>", dojo.body()), "rel", "bar2");
//  	}
//  	return $$("div[rel^='bar2']").length;
	},
	
	"addclass-odd" : function(){
//  	return $$("div").addClass("added").filter(function(n,i){
//  		return i % 2 === 1
//  	}).addClass("odd").length;
	},
	
	"style": function(){
//		return $$(".added").style({ backgroundColor:"#ededed", color:"#fff" }).length;
	},
	
	"confirm-added" : function(){
//		return $$("div.added").length;
	},
	
	"removeclass": function(){
//		return $$(".added").removeClass("added").length;
	},
	
	"sethtml": function(){
//		return $$("div").forEach(function(n){
//			n.innerHTML = "<p>new content</p>";
//		}).length;
	},
	
	"sethtml-alt" : function(){
//		return $$(".odd").filter(function(n,i){
//			return i % 50 === 0;
//		}).forEach(function(n){
//			n.innerHTML = "<p>alt content</p>"
//		}).length;
	},
	
	"insertbefore" : function(){
//		return $$(".fromcode a").addContent("<p>A Link</p>", "before").length;
	},
	
	"insertafter" : function(){
//		$$(".fromcode a").addContent("<p>After Link</p>", "after");
//		return $$(".fromcode a + p").length;
	},
	
	destroy: function(){ 
		return $$(".fromcode").remove().length;
	},
	
	finale: function(){
		$$("body > *").remove();
		return $$("body *").length; 
	}
	
}