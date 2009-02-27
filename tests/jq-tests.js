window.tests = {
	
	"make": function(){
		for(var i = 0; i<250; i++){
			$("<ul id='setid" + i + "' class='fromcode'></ul>")
				.appendTo("body")
				.append("<li>one</li><li>two</li><li>three</li>");
		}
		return $("ul.fromcode").length;
	},
	
	"indexof" : function(){
		var n, id;
		for(var i = 0; i < 20; i++){
			id = $("#setid150");
			n = $("ul").index(id)
		}
		return n;
	},
	
	"bind" : function(){
		return $("ul > li").bind("click", function(){ }).length;
	},
	
	"attr" : function(){
		return $("ul").map(function(){ return $(this).attr("id") }).length;
	},
	
	"bindattr" : function(){
		return $("ul > li")
			.bind("mouseover", function(){ })
			.attr("rel", "jq")
			.unbind("mouseover")
			.length;
	},
	
	"addanchor" : function(){
		return $(".fromcode > li").append("<a href='http://example.com'>link</a>").length;
	},
	
	"alt-add" : function(){
		return $(".fromcode > li").each(function(){
			$("<a href='http://example.com'>link2</a>").appendTo(this);
		}).length;
	},
	
	"create": function(){
		for(var i = 0; i<500; i++){
			$("body").append("<div rel='foo'>test</div>");
		}
		return $("[rel^='foo']").length;
	},
	
	"append" : function(){
		for(var i = 0; i<500; i++){
			$("<div rel='foo2'>test2</div>").appendTo("body");
		}
		return $("div[rel^='foo2']").length;
	},
	
	"addclass-odd" : function(){
		return $("div").addClass("added").filter(":odd").addClass("odd").length;
	},
	
	
	"style" : function(){
		return $(".added").css({ backgroundColor:"#ededed", color:"#fff" }).length;
	},

	"confirm-added" : function(){
		return $("div.added").length;
	},
	
	"removeclass" : function(){
		return $(".added").removeClass("added").length;
	},
	
	"table": function(){
		for(var i = 0; i < 40; i++){
			$("<table class='madetable'></table>")
				.appendTo("body")
				.html("<tr><td>first</td></tr>")
				.find("tr").prepend("<td>before</td>");
		}
		return $("tr td").length;
	},
	
	"sethtml": function(){
		return $("div").each(function(){
			this.innerHTML = "<p>jquery's new content</p>";
		}).length;	
	},
	
	"sethtml-alt" : function(){
		// only reducing this because .html can't handle 5000 either
		return $(".odd").map(function(i){
			return i % 50 === 0 ? this : null;
		}).length;
	},
	
	"insertbefore" : function(){
		return $(".fromcode a").before($("<p>A Link</p>")).length;
	},
	
	"insertafter" : function(){
		return $(".fromcode a").after($("<p>After Link</p>")).length;
	},
	
	destroy: function(){
		return $(".fromcode").remove().length;
	},
	
	finale: function(){
		$("body").empty();
		return $("body *").length;
	}
	
}