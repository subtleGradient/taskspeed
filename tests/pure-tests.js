// TaskSpeed, the DOM way by WebReflection
window.tests = {

    "make": function(){
        for(var
            body = document.body,
            ul = document.createElement("ul"),
            li = document.createElement("li"),
            i = 0,
            fromcode;
            i < 250; ++i
        ){
            fromcode    = ul.cloneNode(true);
            fromcode.id = "setid" + i;
            fromcode.className = "fromcode";
            fromcode.appendChild(li.cloneNode(true)).appendChild(document.createTextNode("one"));
            fromcode.appendChild(li.cloneNode(true)).appendChild(document.createTextNode("two"));
            fromcode.appendChild(li.cloneNode(true)).appendChild(document.createTextNode("three"));
            body.appendChild(fromcode);
        };
        return  utility.getSimple.call(body, "ul.fromcode").length;
    },

    "indexof" : function(){
        for(var body = document.body, index = -1, i = 0; i < 20; ++i)
            index   = utility.indexOf.call(body.getElementsByTagName("ul"), document.getElementById("setid150"));
        return  index;
    },

    "bind" : function(){
        for(var callback = function(){}, li = document.body.getElementsByTagName("li"), length = li.length, i = 0, total = 0, node; i < length; ++i){
            node = li[i];
            if(node.parentNode.nodeName == "UL"){
                ++total;
                utility.addEventListener.call(node, "click", callback, false);
            };
        };
        return  total;
    },

    "attr" : function(){
        for(var result = [], ul = document.body.getElementsByTagName("ul"), length = ul.length, i = 0; i < length; ++i)
            result[i] = ul[i].id;
        return  result.length;
    },

    "bindattr" : function(){
        for(var callback = function(){}, li = document.body.getElementsByTagName("li"), length = li.length, i = 0, total = 0, node; i < length; ++i){
            node = li[i];
            if(node.parentNode.nodeName == "UL"){
                ++total;
                utility.addEventListener.call(node, "mouseover", callback, false);
                node.setAttribute("rel", "touched");
                utility.removeEventListener.call(node, "mouseover", callback, false);
            };
        };
        return  total;
    },

    "table": function(){
        for(var
            body    = document.body,
            table   = document.createElement("table").appendChild(document.createElement("tbody")).parentNode,
            tr      = document.createElement("tr"),
            td      = document.createElement("td"),
            length  = 40,
            i = 0,
            madetable,
            cell;
            i < length; ++i
        ){
            madetable = table.cloneNode(true);
            madetable.className = "madetable";
            cell = body.appendChild(madetable).firstChild.appendChild(tr.cloneNode(true)).appendChild(td.cloneNode(true));
            cell.appendChild(document.createTextNode("first"));
            cell.parentNode.insertBefore(td.cloneNode(true), cell);
        };
        tr = body.getElementsByTagName("tr");
        length = tr.length;
        i = 0;
        for(var total = 0; i < length; ++i)
            total += tr[i].getElementsByTagName("td").length;
        return  total;
    },

    "addanchor" : function(){
        var a = document.createElement("a");
        a.setAttribute("href", "http://example.com");
        a.appendChild(document.createTextNode("link"));
        for(var ul = utility.getSimple.call(document.body, "ul.fromcode"), length = ul.length, i = 0, total = 0, childNodes, j, len, node; i < length; ++i){
            childNodes = ul[i].childNodes;
            j   = 0;
            len = childNodes.length;
            while(j < len){
                node = childNodes[j];
                if(node.nodeName === "LI"){
                    ++total;
                    node.appendChild(a.cloneNode(true));
                };
                ++j;
            };
        };
        return  total;
    },

    "append": function(){
        for(var div = document.createElement("div"), body = document.body, i = 0, node; i < 500; ++i){
            node = div.cloneNode(true);
            node.setAttribute("rel", "foo2");
            body.appendChild(node);
        };
        for(var div = body.getElementsByTagName("div"), length = div.length, i = 0, total = 0; i < length; ++i)
            total += div[i].getAttribute("rel") === "foo2";
        return  total;
    },

    "addclass-odd" : function(){
        for(var div = document.body.getElementsByTagName("div"), length = div.length, i = 0, total = 0; i < length; ++i)
            total += i % 2 ? !!(div[i].className += " added odd") : !(div[i].className += " added");
        return  total;
    },

    "style" : function(){
        for(var div = utility.getSimple.call(document.body, "div.added"), length = div.length, i = 0, style; i < length; ++i){
            style = div[i].style;
            style.backgroundColor = "#ededed";
            style.color = "#fff";
        };
        return  length;
    },

    "removeclass" : function(){
        for(var re = /\s*\badded\b/g, div = utility.getSimple.call(document.body, "div.added"), length = div.length, i = 0, node; i < length; ++i){
            node = div[i];
            node.className = node.className.replace(re, "");
        };
        return  length;
    },

    "sethtml": function(){
        for(var div = document.body.getElementsByTagName("div"), length = div.length, i = 0; i < length; ++i)
            div.innerHTML = "<p>new content</p>";
        return  div.length;
    },

    "insertbefore" : function(){
        for(var p = document.createElement("p"), ul = utility.getSimple.call(document.body, "ul.fromcode"), length = ul.length, i = 0, total = 0; i < length; ++i){
            for(var a = ul[i].getElementsByTagName("a"), len = a.length, j = 0, node; j < len; ++j){
                ++total;
                node    = a[j];
                node.parentNode.insertBefore(p.cloneNode(true).appendChild(document.createTextNode("A Link")).parentNode, node);
            };                
        };
        return  total;
    },

    "insertafter" : function(){
        for(var p = document.createElement("p"), ul = utility.getSimple.call(document.body, "ul.fromcode"), length = ul.length, i = 0, total = 0; i < length; ++i){
            for(var a = ul[i].getElementsByTagName("a"), len = a.length, j = 0, node; j < len; ++j){
                ++total;
                node    = a[j];
                node.parentNode.appendChild(p.cloneNode(true).appendChild(document.createTextNode("After Link")).parentNode);
            };                
        };
        return  total;
    },

    "destroy": function(){
        var result  = utility.getSimple.call(document.body, "ul.fromcode"),
            length  = result.length,
            i       = 0,
            node;
        while(i < length){
            node = result[i++];
            node.parentNode.removeChild(node);
        };
        return  length;
    },

    "finale": function(){
        var body = document.body;
        while(body.firstChild)
            body.removeChild(body.firstChild);
        return  body.getElementsByTagName("*").length;
    }

};