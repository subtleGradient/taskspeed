var utility = {
    // essential stuff for TaskSpeed test by WebReflection
    // Mit Style License
    addEventListener:document.addEventListener?
        function(name, callback, bool){
            this.addEventListener(name, callback, bool);
        }:
        function(name, callback, bool){
            this.attachEvent("on" + name, callback);
        }
    ,
    getSimple:function(selector){
        for(var
            split   = selector.split("."),
            result  = [],
            re      = new RegExp("\\b" + split[1] + "\\b"),
            list    = this.getElementsByTagName(split[0] || "*"),
            length  = list.length,
            i       = 0,
            j       = 0,
            node;
            i < length; ++i
        ){
            node = list[i];
            if(re.test(node.className))
                result[j++] = node;
        };
        return  result;
    },
    indexOf:Array.prototype.indexOf || function(value){
        var i = 0, length = this.length;
        while(i < length){
            if(this[i] === value)
                return i;
            ++i;
        };
        return -1;
    },
    removeEventListener:document.removeEventListener?
        function(name, callback, bool){
            this.removeEventListener(name, callback, bool);
        }:
        function(name, callback, bool){
            this.detachEvent("on" + name, callback);
        }
};