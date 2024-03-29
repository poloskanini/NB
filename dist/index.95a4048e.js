function SplitText(s, e) {
    function t(s) {
        if ("object" == typeof s && null !== s) {
            var e = {};
            for(var i in s)e[i] = t(s[i]);
            return e;
        }
        return s;
    }
    function i(s, e) {
        return new RegExp("(\\s|^)" + e + "(\\s|$)").test(s.className);
    }
    function o(s, e) {
        i(s, e) || (s.className += " " + e);
    }
    function r(s) {
        var s = s, e = 0, t = 0, i = 0, o = 0;
        if (s.offsetParent) {
            do s.offsetParent && (s.offsetParent, document.getElementsByTagName("html")[0]), e += s.offsetTop, t += s.offsetParent ? s.offsetParent.scrollTop : 0, i += s.offsetLeft, o += s.offsetParent ? s.offsetParent.scrollLeft : 0;
            while (s = s.offsetParent);
            return [
                i - o,
                e - t
            ];
        }
    }
    function n(s, e) {
        var t = "<div style='display:inline-block;'>", i = "</div>";
        s.innerHTML = t + s.innerHTML.replaceAll(" ", i + " " + t) + i;
        for(var n = s.querySelectorAll("div"), l = 0; l < n.length; l++){
            if (void 0 !== e.vars.wordsClass && "undefined" != e.vars.wordsClass && o(n[l], e.vars.wordsClass.replaceAll("++", l + 1)), null !== e.vars.position) {
                if ("absolute" == e.vars.position) n[l].toBe = {
                    top: n[l].offsetTop,
                    left: n[l].offsetLeft
                }, n[l].style.position = "relative";
                else if ("fixed" == e.vars.position) {
                    var a = r(n[l]);
                    n[l].toBe = {
                        top: a[1],
                        left: a[0]
                    }, n[l].style.position = "relative";
                } else n[l].style.position = e.vars.position;
            }
            y.words.push(n[l]);
        }
    }
    function l(s, e) {
        var t = "<div style='display:inline-block;'>", i = "</div>", n = s.innerHTML.match(/(&\w+;)/g);
        s.innerHTML = t + s.innerHTML.replace(/&\w+;/g, "ህ").split("").join(i + t) + i;
        for(var l = s.querySelectorAll("div"), a = 0; a < l.length; a++){
            if (void 0 !== e.vars.charsClass && "undefined" != e.vars.charsClass) {
                var h = e.vars.charsClass.replaceAll("++", a + 1);
                h = a != l.length - 1 ? h.replaceAll("**", l[a].innerHTML + l[a + 1].innerHTML) : h.replaceAll("**", ""), o(l[a], h);
            }
            if (null !== e.vars.position) {
                if ("absolute" == e.vars.position) l[a].toBe = {
                    top: l[a].offsetTop,
                    left: l[a].offsetLeft
                }, l[a].style.position = "relative";
                else if ("fixed" == e.vars.position) {
                    var f = r(l[a]);
                    l[a].toBe = {
                        top: f[1],
                        left: f[0]
                    }, l[a].style.position = "relative";
                } else l[a].style.position = e.vars.position;
            }
            "ህ" == l[a].innerHTML && (l[a].innerHTML = n[0], n.splice(0, 1)), y.chars.push(l[a]);
        }
    }
    String.prototype.replaceAll = function(s, e) {
        var t = this;
        return t.split(s).join(e);
    };
    var s = s || [], a = {
        type: "chars,words,lines",
        charsClass: void 0,
        linesClass: void 0,
        wordsClass: void 0,
        position: "relative"
    };
    this.HTMLobjects = [], this.vars = {}, this.originalHTML = [], this.lines = [], this.words = [], this.chars = [], Array.isArray(s) || (s = [
        s
    ]);
    for(var h = 0; h < s.length; h++){
        if (1 == s[h].nodeType && this.HTMLobjects.push(s[h]), window.jQuery && s[h] && (s[h] instanceof jQuery || s[h].constructor.prototype.jquery)) for(var f = 0; f < s[h].length; f++)1 == s[h][f].nodeType && this.HTMLobjects.push(s[h][f]);
        if ("string" == typeof s[h]) {
            elements = document.querySelectorAll(s[h]);
            for(var f = 0; f < elements.length; f++)1 == elements[f].nodeType && this.HTMLobjects.push(elements[f]);
        }
    }
    if (e && "object" == typeof e && null !== e) {
        if (e.type && "string" == typeof e.type) {
            e.type = e.type.split(",");
            for(var p = [
                "chars",
                "words",
                "lines"
            ], v = [], h = 0; h < e.type.length; h++)-1 != p.indexOf(e.type[h].toLowerCase()) && -1 == v.indexOf(e.type[h].toLowerCase()) ? v.push(e.type[h].toLowerCase()) : console.error(e.type[h] + "is not a valid type");
            0 == v.length ? this.vars.type = a.type : this.vars.type = v.join(",");
        } else this.vars.type = a.type;
        this.vars.charsClass = e.charsClass && "string" == typeof e.charsClass ? e.charsClass : a.charsClass, this.vars.wordsClass = e.wordsClass && "string" == typeof e.wordsClass ? e.wordsClass : a.wordsClass, this.vars.linesClass = e.linesClass && "string" == typeof e.linesClass ? e.linesClass : a.linesClass;
        var c = [
            "absolute",
            "relative",
            "static",
            "fixed",
            "inherit",
            "initial",
            null
        ];
        this.vars.position = e.position && -1 != c.indexOf(e.position) ? e.position : a.position;
    } else this.vars = t(a);
    for(var h = 0; h < this.HTMLobjects.length; h++)this.originalHTML[h] = this.HTMLobjects[h].innerHTML;
    this.revert = function() {
        for(var s = 0; s < this.HTMLobjects.length; s++)this.HTMLobjects[s].innerHTML = this.originalHTML[s];
    };
    this.vars.type = this.vars.type.split(",");
    for(var h = 0; h < this.HTMLobjects.length; h++){
        var d = this.HTMLobjects[h];
        d.innerHTML = d.innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
        var y = {
            lines: [],
            words: [],
            chars: []
        };
        if (-1 != this.vars.type.indexOf("lines")) {
            var g = d.innerHTML, u = g.split(" "), w = [];
            d.innerHTML = u[0];
            for(var T = d.offsetHeight, f = 1; f < u.length; f++)d.innerHTML = d.innerHTML + " " + u[f], d.offsetHeight > T && (T = d.offsetHeight, w.push(d.innerHTML.length - (u[f].length + 1)));
            w.push(d.innerHTML.length), d.innerHTML = "";
            for(var f = 0; f < w.length; f++){
                var L = 0 == f ? 0 : w[f - 1] + 1, H = f == w.length - 1 ? g.length : w[f], M = document.createElement("div");
                if (M.style.display = "block", void 0 !== this.vars.linesClass && "undefined" != this.vars.linesClass && (this["class"] = this.vars.linesClass.replace("++", f + 1)), M.innerHTML = g.substring(L, H), d.appendChild(M), null !== this.vars.position) {
                    if ("absolute" == this.vars.position) M.toBe = {
                        top: M.offsetTop,
                        left: M.offsetLeft
                    }, M.style.position = "relative";
                    else if ("fixed" == this.vars.position) {
                        var C = r(M);
                        M.toBe = {
                            top: C[1],
                            left: C[0]
                        }, M.style.position = "relative";
                    } else M.style.position = this.vars.position;
                }
                y.lines.push(M);
            }
        }
        if (-1 != this.vars.type.indexOf("words")) {
            if (-1 != this.vars.type.indexOf("lines")) for(var f = 0; f < y.lines.length; f++)n(y.lines[f], this);
            else n(d, this);
        }
        if (-1 != this.vars.type.indexOf("chars")) {
            if (-1 != this.vars.type.indexOf("words")) for(var f = 0; f < y.words.length; f++)l(y.words[f], this);
            else if (-1 != this.vars.type.indexOf("lines")) for(var f = 0; f < y.lines.length; f++)l(y.lines[f], this);
            else l(d, this);
        }
        if ("absolute" == this.vars.position || "fixed" == this.vars.position) {
            for(var f = y.chars.length - 1; f >= 0; f--)y.chars[f].style.width = y.chars[f].offsetWidth + "px", y.chars[f].style.height = y.chars[f].offsetHeight + "px", y.chars[f].style.left = y.chars[f].toBe.left + "px", y.chars[f].style.top = y.chars[f].toBe.top + "px";
            for(var f = y.words.length - 1; f >= 0; f--)y.words[f].style.width = y.words[f].offsetWidth + "px", y.words[f].style.height = y.words[f].offsetHeight + "px", y.words[f].style.left = y.words[f].toBe.left + "px", y.words[f].style.top = y.words[f].toBe.top + "px";
            for(var f = y.lines.length - 1; f >= 0; f--)y.lines[f].style.width = y.lines[f].offsetWidth + "px", y.lines[f].style.height = y.lines[f].offsetHeight + "px", y.lines[f].style.left = y.lines[f].toBe.left + "px", y.lines[f].style.top = y.lines[f].toBe.top + "px";
            for(var f = y.chars.length - 1; f >= 0; f--)y.chars[f].style.position = this.vars.position;
            for(var f = y.words.length - 1; f >= 0; f--)y.words[f].style.position = this.vars.position;
            for(var f = y.lines.length - 1; f >= 0; f--)y.lines[f].style.position = this.vars.position;
        }
        this.lines = this.lines.concat(y.lines), this.words = this.words.concat(y.words), this.chars = this.chars.concat(y.chars);
    }
}

//# sourceMappingURL=index.95a4048e.js.map
