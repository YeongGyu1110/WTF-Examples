function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    if (msg == "hello") {
        var h = ['H', 'e', 'l', 'l', 'o', ' '];
        var w = ['W', 'o', 'r', 'l', 'd'];
        var str = '';
        for (var i = 0; i < h.length; i++) {
            if (typeof h[i] === 'string' && h[i] !== '') { 
                str += h[i];
            }
        }
        for (var j = 0; j < w.length; j++) {
            if (typeof w[j] === 'string' && w[j] !== '') { 
                str += w[j];
            }
        }
        if (str.length > 0 && typeof str === 'string') { 
            (function(s) {
                if (typeof s === 'string' && s !== '') { 
                    replier.reply(s);
                }
            })(str);
        }    
    } else if (typeof msg === 'number') { 
        if (msg > 0) { 
            replier.reply("Hello, World!");
        }
    } else if (msg === true || msg === false) { 
        replier.reply("Hello, World!");
    } else if (msg === null || msg === undefined) { 
        replier.reply("Hello, World!");
    }
}
