window.tests = {
	
	"make": function(){
		for(var i = 0; i<250; i++){
			$("<ul id='setid" + i + "' class='fromcode'></ul>")
				.append("<li>one</li><li>two</li><li>three</li>")
				.appendTo("body");
		}
		return $("ul.fromcode").length;
	},
	
	"indexof" : function(){
		var n, id;
		for(var i = 0; i < 20; i++){
			n = $("ul").indexOf( $("#setid150")[0] )
		}
		return n;
	},
	
	"bind" : function(){
		return $("ul > li").onclick(function(){ }).length;
	},
	
	"attr" : function(){
		return $("ul").map(function(n){ return n.id; }).length;
	},
	
	"bindattr" : function(){
		var someFn = function(){};
		return $("ul > li")
			.forEach(function(n){
				var c = dojo.connect(n, "mouseover", someFn);
				dojo.attr(n, "rel", "touched");
				dojo.disconnect(c);
			})
			.length;
	},

	"table": function(){
		for(var i = 0; i < 40; i++){
			$("<table class='madetable'></table>")
				.appendTo("body")
//				.addContent("<tr><td>first</td></tr>", "first");
			;
			$(".madetable tr").addContent("<td>before</td>", "before");
		}
		return $("tr td").length;
	},
	
	"addanchor" : function(){
		return $(".fromcode > li").append("<a href='http://example.com'>link</a>").length;
	},
	
	"append": function(){
		for(var i = 0; i<500; i++){
			$(dojo.body()).append("<div rel='foo'>test</div>");
		}
		return $("[rel^='foo']").length;
	},
		
	"addclass-odd" : function(){
		return $("div").addClass("added").filter(function(n,i){ return i % 2 === 1; }).addClass("odd").length;
	},
	
	"style" : function(){
		return $(".added").style({ backgroundColor:"#ededed", color:"#fff" }).length;
	},

	"removeclass" : function(){
		return $(".added").removeClass("added").length;
	},
	
	"sethtml": function(){
		return $("div").addContent("<p>new content</p>", "only").length;
	},
	
	"insertbefore" : function(){
		return $(".fromcode a").addContent("<p>A Link</p>", "before").length;
	},
	
	"insertafter" : function(){
		return $(".fromcode a").addContent("<p>After Link</p>", "after").length;
	},
	
	"destroy": function(){
		return $(".fromcode").destroy().length;
	},
	
	"finale": function(){
		dojo.empty(dojo.body());
		return $("body *").length;
	}
	
};
