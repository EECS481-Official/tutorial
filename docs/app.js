! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    (function(e) {
        "use strict";

        function t(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            var t = e.forward;
            t()
        }

        function o(e) {
            var t = e.back;
            t()
        }
        var i = n(256),
            a = n(422),
            s = t(a),
            l = n(430),
            u = t(l),
            c = n(431),
            d = t(c),
            p = n(433),
            f = t(p),
            h = n(435),
            m = t(h),
            g = n(436),
            v = (t(g), n(437)),
            y = t(v),
            b = n(438),
            x = t(b);
        (0, i.use)(d["default"], {
            left: o,
            right: r,
            "alt+pageup": o,
            "alt+pagedown": r
        }), (0, i.use)(f["default"]), (0, i.use)(m["default"]), (0, i.use)(x["default"]), (0, i.present)({
            masterLayout: s["default"],
            slideLayout: u["default"],
            references: y["default"],
            slides: e
        })
    }).call(t, n(1))
}, function(e, t, n) {
    "use strict";
    e.exports = [n(2), n(196), n(197), n(198), n(232), n(234), n(235), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(248), n(251), n(252), n(253), n(255)]
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r, e.exports = {
        options: {
            title: "Using this Tutorial",
            chapter: "Introduction"
        },
        content: 'Welcome to the Teach Access Tutorial! This resource is part of the Teach Access Initiative, and provides best practices for making accessible mobile and web apps. This tutorial currently provides basic training for developers and designers, with more disciplines to come! If you are new to accessibility, you\'ve come to the right place - the following material will help you get a solid footing on accessibility via hands-on exercises and useful reference guides. Follow the instructions below for using and interacting with the tutorial.\n\n1. You can use the left and right arrow keys to navigate through the slides.\n\n2. Each slide has some core concepts, code samples, and one or more exercises. After you complete an exercise,\nuse the verify button to check whether your solution is correct.\n\n3. You can also verify the code sample output using VoiceOver - Apple\'s built-in screen reader (other screen readers work too). Here are some instructions for navigating with VoiceOver:\n    * <kbd>cmd</kbd> + <kbd>F5</kbd> turns VoiceOver on/off\n    * <kbd>tab</kbd> navigates to an interactive element\n    * <kbd>ctrl</kbd> + <kbd>opt</kbd> + <kbd>right arrow</kbd> (repeatedly) \n    navigates to the next element\n    * <kbd>ctrl</kbd> + <kbd>opt</kbd> + <kbd>cmd</kbd> + <kbd>h</kbd> \n    (repeatedly) navigates by headings\n    <br/><br/>\n\n4. When verifying with VoiceOver, use Chrome on a Mac for the best experience. However, the "Verify" button provided after each exercise will work with any browser/OS combination.\n\n5. ARIA stands for Accessible Rich Internet Applications, a W3C standard for \n   building accessible user interfaces on the web.\n\nHappy learning! <i class="fa fa-smile-o"><i class="accessible_elem">Smiley Icon</i></i>\n',
        pathHash: "e22b2aea3081574248d2aa2d59f3ea09",
        contentConverter: r
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        var t = e.references,
            n = {};
        for (var r in t) {
            var o = t[r];
            "object" !== ("undefined" == typeof o ? "undefined" : (0, u["default"])(o)) && (o = {
                href: o
            }), n[k.utils.normalizeReference(r)] = o
        }
        return n
    }

    function i(e, t) {
        var n = _.get(e);
        return n || (n = C(e, t), _.set(e, n)), f["default"].createElement("div", {
            dangerouslySetInnerHTML: {
                __html: n
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(4),
        s = r(a),
        l = n(42),
        u = r(l),
        c = n(77),
        d = r(c);
    t["default"] = i;
    var p = n(96),
        f = r(p),
        h = n(125),
        m = r(h),
        g = n(193),
        v = r(g),
        y = n(194),
        b = r(y),
        x = n(195),
        w = r(x),
        k = (0, m["default"])({
            html: !0,
            tables: !0,
            typographer: !0,
            highlight: function(e, t) {
                return t ? v["default"].highlightAuto(e, [t]).value : v["default"].highlightAuto(e).value
            }
        }).use(b["default"]).use(w["default"]),
        _ = new d["default"],
        C = function(e, t) {
            var n = o(t.config),
                r = t.config["markdown-converter"];
            return r && r(k), (C = function(e, t) {
                return k.render(e, (0, s["default"])({
                    references: n
                }, t))
            })(e, t)
        }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(5),
        i = r(o);
    t["default"] = i["default"] || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
}, function(e, t, n) {
    e.exports = {
        "default": n(6),
        __esModule: !0
    }
}, function(e, t, n) {
    n(7), e.exports = n(10).Object.assign
}, function(e, t, n) {
    var r = n(8);
    r(r.S + r.F, "Object", {
        assign: n(23)
    })
}, function(e, t, n) {
    var r = n(9),
        o = n(10),
        i = n(11),
        a = n(13),
        s = "prototype",
        l = function(e, t, n) {
            var u, c, d, p = e & l.F,
                f = e & l.G,
                h = e & l.S,
                m = e & l.P,
                g = e & l.B,
                v = e & l.W,
                y = f ? o : o[t] || (o[t] = {}),
                b = y[s],
                x = f ? r : h ? r[t] : (r[t] || {})[s];
            f && (n = t);
            for (u in n) c = !p && x && void 0 !== x[u], c && u in y || (d = c ? x[u] : n[u], y[u] = f && "function" != typeof x[u] ? n[u] : g && c ? i(d, r) : v && x[u] == d ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t[s] = e[s], t
            }(d) : m && "function" == typeof d ? i(Function.call, d) : d, m && ((y.virtual || (y.virtual = {}))[u] = d, e & l.R && b && !b[u] && a(b, u, d)))
        };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t) {
    var n = e.exports = {
        version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    var r = n(12);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, n) {
    var r = n(14),
        o = n(22);
    e.exports = n(18) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    var r = n(15),
        o = n(17),
        i = n(21),
        a = Object.defineProperty;
    t.f = n(18) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return a(e, t, n)
        } catch (s) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    var r = n(16);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, n) {
    e.exports = !n(18) && !n(19)(function() {
        return 7 != Object.defineProperty(n(20)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    e.exports = !n(19)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (t) {
            return !0
        }
    }
}, function(e, t, n) {
    var r = n(16),
        o = n(9).document,
        i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}, function(e, t, n) {
    var r = n(16);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(24),
        o = n(39),
        i = n(40),
        a = n(41),
        s = n(28),
        l = Object.assign;
    e.exports = !l || n(19)(function() {
        var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e
        }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = a(e), l = arguments.length, u = 1, c = o.f, d = i.f; l > u;)
            for (var p, f = s(arguments[u++]), h = c ? r(f).concat(c(f)) : r(f), m = h.length, g = 0; m > g;) d.call(f, p = h[g++]) && (n[p] = f[p]);
        return n
    } : l
}, function(e, t, n) {
    var r = n(25),
        o = n(38);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}, function(e, t, n) {
    var r = n(26),
        o = n(27),
        i = n(31)(!1),
        a = n(35)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = o(e),
            l = 0,
            u = [];
        for (n in s) n != a && r(s, n) && u.push(n);
        for (; t.length > l;) r(s, n = t[l++]) && (~i(u, n) || u.push(n));
        return u
    }
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    var r = n(28),
        o = n(30);
    e.exports = function(e) {
        return r(o(e))
    }
}, function(e, t, n) {
    var r = n(29);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    var r = n(27),
        o = n(32),
        i = n(34);
    e.exports = function(e) {
        return function(t, n, a) {
            var s, l = r(t),
                u = o(l.length),
                c = i(a, u);
            if (e && n != n) {
                for (; u > c;)
                    if (s = l[c++], s != s) return !0
            } else
                for (; u > c; c++)
                    if ((e || c in l) && l[c] === n) return e || c || 0; return !e && -1
        }
    }
}, function(e, t, n) {
    var r = n(33),
        o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function(e, t, n) {
    var r = n(33),
        o = Math.max,
        i = Math.min;
    e.exports = function(e, t) {
        return e = r(e), e < 0 ? o(e + t, 0) : i(e, t)
    }
}, function(e, t, n) {
    var r = n(36)("keys"),
        o = n(37);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e))
    }
}, function(e, t, n) {
    var r = n(9),
        o = "__core-js_shared__",
        i = r[o] || (r[o] = {});
    e.exports = function(e) {
        return i[e] || (i[e] = {})
    }
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
    var r = n(30);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(43),
        i = r(o),
        a = n(63),
        s = r(a),
        l = "function" == typeof s["default"] && "symbol" == typeof i["default"] ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof s["default"] && e.constructor === s["default"] ? "symbol" : typeof e
        };
    t["default"] = "function" == typeof s["default"] && "symbol" === l(i["default"]) ? function(e) {
        return "undefined" == typeof e ? "undefined" : l(e)
    } : function(e) {
        return e && "function" == typeof s["default"] && e.constructor === s["default"] ? "symbol" : "undefined" == typeof e ? "undefined" : l(e)
    }
}, function(e, t, n) {
    e.exports = {
        "default": n(44),
        __esModule: !0
    }
}, function(e, t, n) {
    n(45), n(58), e.exports = n(62).f("iterator")
}, function(e, t, n) {
    "use strict";
    var r = n(46)(!0);
    n(47)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    var r = n(33),
        o = n(30);
    e.exports = function(e) {
        return function(t, n) {
            var i, a, s = String(o(t)),
                l = r(n),
                u = s.length;
            return l < 0 || l >= u ? e ? "" : void 0 : (i = s.charCodeAt(l), i < 55296 || i > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : (i - 55296 << 10) + (a - 56320) + 65536)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(48),
        o = n(8),
        i = n(49),
        a = n(13),
        s = n(26),
        l = n(50),
        u = n(51),
        c = n(55),
        d = n(57),
        p = n(56)("iterator"),
        f = !([].keys && "next" in [].keys()),
        h = "@@iterator",
        m = "keys",
        g = "values",
        v = function() {
            return this
        };
    e.exports = function(e, t, n, y, b, x, w) {
        u(n, t, y);
        var k, _, C, E = function(e) {
                if (!f && e in M) return M[e];
                switch (e) {
                    case m:
                        return function() {
                            return new n(this, e)
                        };
                    case g:
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            S = t + " Iterator",
            T = b == g,
            A = !1,
            M = e.prototype,
            L = M[p] || M[h] || b && M[b],
            N = L || E(b),
            D = b ? T ? E("entries") : N : void 0,
            I = "Array" == t ? M.entries || L : L;
        if (I && (C = d(I.call(new e)), C !== Object.prototype && (c(C, S, !0), r || s(C, p) || a(C, p, v))), T && L && L.name !== g && (A = !0, N = function() {
                return L.call(this)
            }), r && !w || !f && !A && M[p] || a(M, p, N), l[t] = N, l[S] = v, b)
            if (k = {
                    values: T ? N : E(g),
                    keys: x ? N : E(m),
                    entries: D
                }, w)
                for (_ in k) _ in M || i(M, _, k[_]);
            else o(o.P + o.F * (f || A), t, k);
        return k
    }
}, function(e, t) {
    e.exports = !0
}, function(e, t, n) {
    e.exports = n(13)
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    "use strict";
    var r = n(52),
        o = n(22),
        i = n(55),
        a = {};
    n(13)(a, n(56)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = r(a, {
            next: o(1, n)
        }), i(e, t + " Iterator")
    }
}, function(e, t, n) {
    var r = n(15),
        o = n(53),
        i = n(38),
        a = n(35)("IE_PROTO"),
        s = function() {},
        l = "prototype",
        u = function() {
            var e, t = n(20)("iframe"),
                r = i.length,
                o = "<",
                a = ">";
            for (t.style.display = "none", n(54).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(o + "script" + a + "document.F=Object" + o + "/script" + a), e.close(), u = e.F; r--;) delete u[l][i[r]];
            return u()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s[l] = r(e), n = new s, s[l] = null, n[a] = e) : n = u(), void 0 === t ? n : o(n, t)
    }
}, function(e, t, n) {
    var r = n(14),
        o = n(15),
        i = n(24);
    e.exports = n(18) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var n, a = i(t), s = a.length, l = 0; s > l;) r.f(e, n = a[l++], t[n]);
        return e
    }
}, function(e, t, n) {
    e.exports = n(9).document && document.documentElement
}, function(e, t, n) {
    var r = n(14).f,
        o = n(26),
        i = n(56)("toStringTag");
    e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    var r = n(36)("wks"),
        o = n(37),
        i = n(9).Symbol,
        a = "function" == typeof i,
        s = e.exports = function(e) {
            return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
        };
    s.store = r
}, function(e, t, n) {
    var r = n(26),
        o = n(41),
        i = n(35)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function(e, t, n) {
    n(59);
    for (var r = n(9), o = n(13), i = n(50), a = n(56)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
        var u = s[l],
            c = r[u],
            d = c && c.prototype;
        d && !d[a] && o(d, a, u), i[u] = i.Array
    }
}, function(e, t, n) {
    "use strict";
    var r = n(60),
        o = n(61),
        i = n(50),
        a = n(27);
    e.exports = n(47)(Array, "Array", function(e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(e, t) {
    e.exports = function() {}
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    t.f = n(56)
}, function(e, t, n) {
    e.exports = {
        "default": n(64),
        __esModule: !0
    }
}, function(e, t, n) {
    n(65), n(74), n(75), n(76), e.exports = n(10).Symbol
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        o = n(26),
        i = n(18),
        a = n(8),
        s = n(49),
        l = n(66).KEY,
        u = n(19),
        c = n(36),
        d = n(55),
        p = n(37),
        f = n(56),
        h = n(62),
        m = n(67),
        g = n(68),
        v = n(69),
        y = n(70),
        b = n(15),
        x = n(27),
        w = n(21),
        k = n(22),
        _ = n(52),
        C = n(71),
        E = n(73),
        S = n(14),
        T = n(24),
        A = E.f,
        M = S.f,
        L = C.f,
        N = r.Symbol,
        D = r.JSON,
        I = D && D.stringify,
        O = "prototype",
        P = f("_hidden"),
        R = f("toPrimitive"),
        F = {}.propertyIsEnumerable,
        z = c("symbol-registry"),
        W = c("symbols"),
        B = c("op-symbols"),
        q = Object[O],
        H = "function" == typeof N,
        U = r.QObject,
        j = !U || !U[O] || !U[O].findChild,
        V = i && u(function() {
            return 7 != _(M({}, "a", {
                get: function() {
                    return M(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var r = A(q, t);
            r && delete q[t], M(e, t, n), r && e !== q && M(q, t, r)
        } : M,
        K = function(e) {
            var t = W[e] = _(N[O]);
            return t._k = e, t
        },
        G = H && "symbol" == typeof N.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof N
        },
        Y = function(e, t, n) {
            return e === q && Y(B, t, n), b(e), t = w(t, !0), b(n), o(W, t) ? (n.enumerable ? (o(e, P) && e[P][t] && (e[P][t] = !1), n = _(n, {
                enumerable: k(0, !1)
            })) : (o(e, P) || M(e, P, k(1, {})), e[P][t] = !0), V(e, t, n)) : M(e, t, n)
        },
        $ = function(e, t) {
            b(e);
            for (var n, r = v(t = x(t)), o = 0, i = r.length; i > o;) Y(e, n = r[o++], t[n]);
            return e
        },
        Z = function(e, t) {
            return void 0 === t ? _(e) : $(_(e), t)
        },
        X = function(e) {
            var t = F.call(this, e = w(e, !0));
            return !(this === q && o(W, e) && !o(B, e)) && (!(t || !o(this, e) || !o(W, e) || o(this, P) && this[P][e]) || t)
        },
        Q = function(e, t) {
            if (e = x(e), t = w(t, !0), e !== q || !o(W, t) || o(B, t)) {
                var n = A(e, t);
                return !n || !o(W, t) || o(e, P) && e[P][t] || (n.enumerable = !0), n
            }
        },
        J = function(e) {
            for (var t, n = L(x(e)), r = [], i = 0; n.length > i;) o(W, t = n[i++]) || t == P || t == l || r.push(t);
            return r
        },
        ee = function(e) {
            for (var t, n = e === q, r = L(n ? B : x(e)), i = [], a = 0; r.length > a;) !o(W, t = r[a++]) || n && !o(q, t) || i.push(W[t]);
            return i
        };
    H || (N = function() {
        if (this instanceof N) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
                this === q && t.call(B, n), o(this, P) && o(this[P], e) && (this[P][e] = !1), V(this, e, k(1, n))
            };
        return i && j && V(q, e, {
            configurable: !0,
            set: t
        }), K(e)
    }, s(N[O], "toString", function() {
        return this._k
    }), E.f = Q, S.f = Y, n(72).f = C.f = J, n(40).f = X, n(39).f = ee, i && !n(48) && s(q, "propertyIsEnumerable", X, !0), h.f = function(e) {
        return K(f(e))
    }), a(a.G + a.W + a.F * !H, {
        Symbol: N
    });
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) f(te[ne++]);
    for (var te = T(f.store), ne = 0; te.length > ne;) m(te[ne++]);
    a(a.S + a.F * !H, "Symbol", {
        "for": function(e) {
            return o(z, e += "") ? z[e] : z[e] = N(e)
        },
        keyFor: function(e) {
            if (G(e)) return g(z, e);
            throw TypeError(e + " is not a symbol!")
        },
        useSetter: function() {
            j = !0
        },
        useSimple: function() {
            j = !1
        }
    }), a(a.S + a.F * !H, "Object", {
        create: Z,
        defineProperty: Y,
        defineProperties: $,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: J,
        getOwnPropertySymbols: ee
    }), D && a(a.S + a.F * (!H || u(function() {
        var e = N();
        return "[null]" != I([e]) || "{}" != I({
            a: e
        }) || "{}" != I(Object(e))
    })), "JSON", {
        stringify: function(e) {
            if (void 0 !== e && !G(e)) {
                for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
                return t = r[1], "function" == typeof t && (n = t), !n && y(t) || (t = function(e, t) {
                    if (n && (t = n.call(this, e, t)), !G(t)) return t
                }), r[1] = t, I.apply(D, r)
            }
        }
    }), N[O][R] || n(13)(N[O], R, N[O].valueOf), d(N, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
}, function(e, t, n) {
    var r = n(37)("meta"),
        o = n(16),
        i = n(26),
        a = n(14).f,
        s = 0,
        l = Object.isExtensible || function() {
            return !0
        },
        u = !n(19)(function() {
            return l(Object.preventExtensions({}))
        }),
        c = function(e) {
            a(e, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        d = function(e, t) {
            if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, r)) {
                if (!l(e)) return "F";
                if (!t) return "E";
                c(e)
            }
            return e[r].i
        },
        p = function(e, t) {
            if (!i(e, r)) {
                if (!l(e)) return !0;
                if (!t) return !1;
                c(e)
            }
            return e[r].w
        },
        f = function(e) {
            return u && h.NEED && l(e) && !i(e, r) && c(e), e
        },
        h = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: d,
            getWeak: p,
            onFreeze: f
        }
}, function(e, t, n) {
    var r = n(9),
        o = n(10),
        i = n(48),
        a = n(62),
        s = n(14).f;
    e.exports = function(e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {
            value: a.f(e)
        })
    }
}, function(e, t, n) {
    var r = n(24),
        o = n(27);
    e.exports = function(e, t) {
        for (var n, i = o(e), a = r(i), s = a.length, l = 0; s > l;)
            if (i[n = a[l++]] === t) return n
    }
}, function(e, t, n) {
    var r = n(24),
        o = n(39),
        i = n(40);
    e.exports = function(e) {
        var t = r(e),
            n = o.f;
        if (n)
            for (var a, s = n(e), l = i.f, u = 0; s.length > u;) l.call(e, a = s[u++]) && t.push(a);
        return t
    }
}, function(e, t, n) {
    var r = n(29);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}, function(e, t, n) {
    var r = n(27),
        o = n(72).f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function(e) {
            try {
                return o(e)
            } catch (t) {
                return a.slice()
            }
        };
    e.exports.f = function(e) {
        return a && "[object Window]" == i.call(e) ? s(e) : o(r(e))
    }
}, function(e, t, n) {
    var r = n(25),
        o = n(38).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, o)
    }
}, function(e, t, n) {
    var r = n(40),
        o = n(22),
        i = n(27),
        a = n(21),
        s = n(26),
        l = n(17),
        u = Object.getOwnPropertyDescriptor;
    t.f = n(18) ? u : function(e, t) {
        if (e = i(e), t = a(t, !0), l) try {
            return u(e, t)
        } catch (n) {}
        if (s(e, t)) return o(!r.f.call(e, t), e[t])
    }
}, function(e, t) {}, function(e, t, n) {
    n(67)("asyncIterator")
}, function(e, t, n) {
    n(67)("observable")
}, function(e, t, n) {
    e.exports = {
        "default": n(78),
        __esModule: !0
    }
}, function(e, t, n) {
    n(74), n(45), n(58), n(79), n(93), e.exports = n(10).Map
}, function(e, t, n) {
    "use strict";
    var r = n(80);
    e.exports = n(89)("Map", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(e) {
            var t = r.getEntry(this, e);
            return t && t.v
        },
        set: function(e, t) {
            return r.def(this, 0 === e ? 0 : e, t)
        }
    }, r, !0)
}, function(e, t, n) {
    "use strict";
    var r = n(14).f,
        o = n(52),
        i = n(81),
        a = n(11),
        s = n(82),
        l = n(30),
        u = n(83),
        c = n(47),
        d = n(61),
        p = n(88),
        f = n(18),
        h = n(66).fastKey,
        m = f ? "_s" : "size",
        g = function(e, t) {
            var n, r = h(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        };
    e.exports = {
        getConstructor: function(e, t, n, c) {
            var d = e(function(e, r) {
                s(e, d, t, "_i"), e._i = o(null), e._f = void 0, e._l = void 0, e[m] = 0, void 0 != r && u(r, n, e[c], e)
            });
            return i(d.prototype, {
                clear: function() {
                    for (var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                    e._f = e._l = void 0, e[m] = 0
                },
                "delete": function(e) {
                    var t = this,
                        n = g(t, e);
                    if (n) {
                        var r = n.n,
                            o = n.p;
                        delete t._i[n.i], n.r = !0, o && (o.n = r), r && (r.p = o), t._f == n && (t._f = r), t._l == n && (t._l = o), t[m]--
                    }
                    return !!n
                },
                forEach: function(e) {
                    s(this, d, "forEach");
                    for (var t, n = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                        for (n(t.v, t.k, this); t && t.r;) t = t.p
                },
                has: function(e) {
                    return !!g(this, e)
                }
            }), f && r(d.prototype, "size", {
                get: function() {
                    return l(this[m])
                }
            }), d
        },
        def: function(e, t, n) {
            var r, o, i = g(e, t);
            return i ? i.v = n : (e._l = i = {
                i: o = h(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = i), r && (r.n = i), e[m]++, "F" !== o && (e._i[o] = i)), e
        },
        getEntry: g,
        setStrong: function(e, t, n) {
            c(e, t, function(e, t) {
                this._t = e, this._k = t, this._l = void 0
            }, function() {
                for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? d(0, n.k) : "values" == t ? d(0, n.v) : d(0, [n.k, n.v]) : (e._t = void 0, d(1))
            }, n ? "entries" : "values", !n, !0), p(t)
        }
    }
}, function(e, t, n) {
    var r = n(13);
    e.exports = function(e, t, n) {
        for (var o in t) n && e[o] ? e[o] = t[o] : r(e, o, t[o]);
        return e
    }
}, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function(e, t, n) {
    var r = n(11),
        o = n(84),
        i = n(85),
        a = n(15),
        s = n(32),
        l = n(86),
        u = {},
        c = {},
        t = e.exports = function(e, t, n, d, p) {
            var f, h, m, g, v = p ? function() {
                    return e
                } : l(e),
                y = r(n, d, t ? 2 : 1),
                b = 0;
            if ("function" != typeof v) throw TypeError(e + " is not iterable!");
            if (i(v)) {
                for (f = s(e.length); f > b; b++)
                    if (g = t ? y(a(h = e[b])[0], h[1]) : y(e[b]), g === u || g === c) return g
            } else
                for (m = v.call(e); !(h = m.next()).done;)
                    if (g = o(m, y, h.value, t), g === u || g === c) return g
        };
    t.BREAK = u, t.RETURN = c
}, function(e, t, n) {
    var r = n(15);
    e.exports = function(e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (i) {
            var a = e["return"];
            throw void 0 !== a && r(a.call(e)), i
        }
    }
}, function(e, t, n) {
    var r = n(50),
        o = n(56)("iterator"),
        i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}, function(e, t, n) {
    var r = n(87),
        o = n(56)("iterator"),
        i = n(50);
    e.exports = n(10).getIteratorMethod = function(e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)]
    }
}, function(e, t, n) {
    var r = n(29),
        o = n(56)("toStringTag"),
        i = "Arguments" == r(function() {
            return arguments
        }()),
        a = function(e, t) {
            try {
                return e[t]
            } catch (n) {}
        };
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = a(t = Object(e), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        o = n(10),
        i = n(14),
        a = n(18),
        s = n(56)("species");
    e.exports = function(e) {
        var t = "function" == typeof o[e] ? o[e] : r[e];
        a && t && !t[s] && i.f(t, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        o = n(8),
        i = n(66),
        a = n(19),
        s = n(13),
        l = n(81),
        u = n(83),
        c = n(82),
        d = n(16),
        p = n(55),
        f = n(14).f,
        h = n(90)(0),
        m = n(18);
    e.exports = function(e, t, n, g, v, y) {
        var b = r[e],
            x = b,
            w = v ? "set" : "add",
            k = x && x.prototype,
            _ = {};
        return m && "function" == typeof x && (y || k.forEach && !a(function() {
            (new x).entries().next()
        })) ? (x = t(function(t, n) {
            c(t, x, e, "_c"), t._c = new b, void 0 != n && u(n, v, t[w], t)
        }), h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
            var t = "add" == e || "set" == e;
            e in k && (!y || "clear" != e) && s(x.prototype, e, function(n, r) {
                if (c(this, x, e), !t && y && !d(n)) return "get" == e && void 0;
                var o = this._c[e](0 === n ? 0 : n, r);
                return t ? this : o
            })
        }), "size" in k && f(x.prototype, "size", {
            get: function() {
                return this._c.size
            }
        })) : (x = g.getConstructor(t, e, v, w), l(x.prototype, n), i.NEED = !0), p(x, e), _[e] = x, o(o.G + o.W + o.F, _), y || g.setStrong(x, e, v), x
    }
}, function(e, t, n) {
    var r = n(11),
        o = n(28),
        i = n(41),
        a = n(32),
        s = n(91);
    e.exports = function(e, t) {
        var n = 1 == e,
            l = 2 == e,
            u = 3 == e,
            c = 4 == e,
            d = 6 == e,
            p = 5 == e || d,
            f = t || s;
        return function(t, s, h) {
            for (var m, g, v = i(t), y = o(v), b = r(s, h, 3), x = a(y.length), w = 0, k = n ? f(t, x) : l ? f(t, 0) : void 0; x > w; w++)
                if ((p || w in y) && (m = y[w], g = b(m, w, v), e))
                    if (n) k[w] = g;
                    else if (g) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return m;
                case 6:
                    return w;
                case 2:
                    k.push(m)
            } else if (c) return !1;
            return d ? -1 : u || c ? c : k
        }
    }
}, function(e, t, n) {
    var r = n(92);
    e.exports = function(e, t) {
        return new(r(e))(t)
    }
}, function(e, t, n) {
    var r = n(16),
        o = n(70),
        i = n(56)("species");
    e.exports = function(e) {
        var t;
        return o(e) && (t = e.constructor, "function" != typeof t || t !== Array && !o(t.prototype) || (t = void 0), r(t) && (t = t[i], null === t && (t = void 0))), void 0 === t ? Array : t
    }
}, function(e, t, n) {
    var r = n(8);
    r(r.P + r.R, "Map", {
        toJSON: n(94)("Map")
    })
}, function(e, t, n) {
    var r = n(87),
        o = n(95);
    e.exports = function(e) {
        return function() {
            if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
            return o(this)
        }
    }
}, function(e, t, n) {
    var r = n(83);
    e.exports = function(e, t) {
        var n = [];
        return r(e, !1, n.push, n, t), n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(97)
}, function(e, t, n) {
    "use strict";
    var r = n(98),
        o = n(99),
        i = n(111),
        a = n(114),
        s = n(115),
        l = n(120),
        u = n(103),
        c = n(121),
        d = n(123),
        p = n(124),
        f = (n(105), u.createElement),
        h = u.createFactory,
        m = u.cloneElement,
        g = r,
        v = {
            Children: {
                map: o.map,
                forEach: o.forEach,
                count: o.count,
                toArray: o.toArray,
                only: p
            },
            Component: i,
            PureComponent: a,
            createElement: f,
            cloneElement: m,
            isValidElement: u.isValidElement,
            PropTypes: c,
            createClass: s.createClass,
            createFactory: h,
            createMixin: function(e) {
                return e
            },
            DOM: l,
            version: d,
            __spread: g
        };
    e.exports = v
}, function(e, t) {
    "use strict";

    function n(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }

    function r() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            var r = Object.getOwnPropertyNames(t).map(function(e) {
                return t[e]
            });
            if ("0123456789" !== r.join("")) return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                o[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
        } catch (i) {
            return !1
        }
    }
    var o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
    e.exports = r() ? Object.assign : function(e, t) {
        for (var r, a, s = n(e), l = 1; l < arguments.length; l++) {
            r = Object(arguments[l]);
            for (var u in r) o.call(r, u) && (s[u] = r[u]);
            if (Object.getOwnPropertySymbols) {
                a = Object.getOwnPropertySymbols(r);
                for (var c = 0; c < a.length; c++) i.call(r, a[c]) && (s[a[c]] = r[a[c]])
            }
        }
        return s
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return ("" + e).replace(x, "$&/")
    }

    function o(e, t) {
        this.func = e, this.context = t, this.count = 0
    }

    function i(e, t, n) {
        var r = e.func,
            o = e.context;
        r.call(o, t, e.count++)
    }

    function a(e, t, n) {
        if (null == e) return e;
        var r = o.getPooled(t, n);
        v(e, i, r), o.release(r)
    }

    function s(e, t, n, r) {
        this.result = e, this.keyPrefix = t, this.func = n, this.context = r, this.count = 0
    }

    function l(e, t, n) {
        var o = e.result,
            i = e.keyPrefix,
            a = e.func,
            s = e.context,
            l = a.call(s, t, e.count++);
        Array.isArray(l) ? u(l, o, n, g.thatReturnsArgument) : null != l && (m.isValidElement(l) && (l = m.cloneAndReplaceKey(l, i + (!l.key || t && t.key === l.key ? "" : r(l.key) + "/") + n)), o.push(l))
    }

    function u(e, t, n, o, i) {
        var a = "";
        null != n && (a = r(n) + "/");
        var u = s.getPooled(t, a, o, i);
        v(e, l, u), s.release(u)
    }

    function c(e, t, n) {
        if (null == e) return e;
        var r = [];
        return u(e, r, null, t, n), r
    }

    function d(e, t, n) {
        return null
    }

    function p(e, t) {
        return v(e, d, null)
    }

    function f(e) {
        var t = [];
        return u(e, t, null, g.thatReturnsArgument), t
    }
    var h = n(100),
        m = n(103),
        g = n(106),
        v = n(108),
        y = h.twoArgumentPooler,
        b = h.fourArgumentPooler,
        x = /\/+/g;
    o.prototype.destructor = function() {
        this.func = null, this.context = null, this.count = 0
    }, h.addPoolingTo(o, y), s.prototype.destructor = function() {
        this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
    }, h.addPoolingTo(s, b);
    var w = {
        forEach: a,
        map: c,
        mapIntoWithKeyPrefixInternal: u,
        count: p,
        toArray: f
    };
    e.exports = w
}, function(e, t, n) {
    "use strict";
    var r = n(101),
        o = (n(102), function(e) {
            var t = this;
            if (t.instancePool.length) {
                var n = t.instancePool.pop();
                return t.call(n, e), n
            }
            return new t(e)
        }),
        i = function(e, t) {
            var n = this;
            if (n.instancePool.length) {
                var r = n.instancePool.pop();
                return n.call(r, e, t), r
            }
            return new n(e, t)
        },
        a = function(e, t, n) {
            var r = this;
            if (r.instancePool.length) {
                var o = r.instancePool.pop();
                return r.call(o, e, t, n), o
            }
            return new r(e, t, n)
        },
        s = function(e, t, n, r) {
            var o = this;
            if (o.instancePool.length) {
                var i = o.instancePool.pop();
                return o.call(i, e, t, n, r), i
            }
            return new o(e, t, n, r)
        },
        l = function(e, t, n, r, o) {
            var i = this;
            if (i.instancePool.length) {
                var a = i.instancePool.pop();
                return i.call(a, e, t, n, r, o), a
            }
            return new i(e, t, n, r, o)
        },
        u = function(e) {
            var t = this;
            e instanceof t ? void 0 : r("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
        },
        c = 10,
        d = o,
        p = function(e, t) {
            var n = e;
            return n.instancePool = [], n.getPooled = t || d, n.poolSize || (n.poolSize = c), n.release = u, n
        },
        f = {
            addPoolingTo: p,
            oneArgumentPooler: o,
            twoArgumentPooler: i,
            threeArgumentPooler: a,
            fourArgumentPooler: s,
            fiveArgumentPooler: l
        };
    e.exports = f
}, function(e, t) {
    "use strict";

    function n(e) {
        for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        var o = new Error(n);
        throw o.name = "Invariant Violation", o.framesToPop = 1, o
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r, o, i, a, s) {
        if (!e) {
            var l;
            if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var u = [n, r, o, i, a, s],
                    c = 0;
                l = new Error(t.replace(/%s/g, function() {
                    return u[c++]
                })), l.name = "Invariant Violation"
            }
            throw l.framesToPop = 1, l
        }
    }
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return void 0 !== e.ref
    }

    function o(e) {
        return void 0 !== e.key
    }
    var i = n(98),
        a = n(104),
        s = (n(105), n(107), Object.prototype.hasOwnProperty),
        l = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
        u = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        },
        c = function(e, t, n, r, o, i, a) {
            var s = {
                $$typeof: l,
                type: e,
                key: t,
                ref: n,
                props: a,
                _owner: i
            };
            return s
        };
    c.createElement = function(e, t, n) {
        var i, l = {},
            d = null,
            p = null,
            f = null,
            h = null;
        if (null != t) {
            r(t) && (p = t.ref), o(t) && (d = "" + t.key), f = void 0 === t.__self ? null : t.__self, h = void 0 === t.__source ? null : t.__source;
            for (i in t) s.call(t, i) && !u.hasOwnProperty(i) && (l[i] = t[i])
        }
        var m = arguments.length - 2;
        if (1 === m) l.children = n;
        else if (m > 1) {
            for (var g = Array(m), v = 0; v < m; v++) g[v] = arguments[v + 2];
            l.children = g
        }
        if (e && e.defaultProps) {
            var y = e.defaultProps;
            for (i in y) void 0 === l[i] && (l[i] = y[i])
        }
        return c(e, d, p, f, h, a.current, l)
    }, c.createFactory = function(e) {
        var t = c.createElement.bind(null, e);
        return t.type = e, t
    }, c.cloneAndReplaceKey = function(e, t) {
        var n = c(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n
    }, c.cloneElement = function(e, t, n) {
        var l, d = i({}, e.props),
            p = e.key,
            f = e.ref,
            h = e._self,
            m = e._source,
            g = e._owner;
        if (null != t) {
            r(t) && (f = t.ref, g = a.current), o(t) && (p = "" + t.key);
            var v;
            e.type && e.type.defaultProps && (v = e.type.defaultProps);
            for (l in t) s.call(t, l) && !u.hasOwnProperty(l) && (void 0 === t[l] && void 0 !== v ? d[l] = v[l] : d[l] = t[l])
        }
        var y = arguments.length - 2;
        if (1 === y) d.children = n;
        else if (y > 1) {
            for (var b = Array(y), x = 0; x < y; x++) b[x] = arguments[x + 2];
            d.children = b
        }
        return c(e.type, p, f, h, m, g, d)
    }, c.isValidElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === l
    }, c.REACT_ELEMENT_TYPE = l, e.exports = c
}, function(e, t) {
    "use strict";
    var n = {
        current: null
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(106),
        o = r;
    e.exports = o
}, function(e, t) {
    "use strict";

    function n(e) {
        return function() {
            return e
        }
    }
    var r = function() {};
    r.thatReturns = n, r.thatReturnsFalse = n(!1), r.thatReturnsTrue = n(!0), r.thatReturnsNull = n(null), r.thatReturnsThis = function() {
        return this
    }, r.thatReturnsArgument = function(e) {
        return e
    }, e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = !1;
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return e && "object" == typeof e && null != e.key ? u.escape(e.key) : t.toString(36)
    }

    function o(e, t, n, i) {
        var p = typeof e;
        if ("undefined" !== p && "boolean" !== p || (e = null), null === e || "string" === p || "number" === p || s.isValidElement(e)) return n(i, e, "" === t ? c + r(e, 0) : t), 1;
        var f, h, m = 0,
            g = "" === t ? c : t + d;
        if (Array.isArray(e))
            for (var v = 0; v < e.length; v++) f = e[v], h = g + r(f, v), m += o(f, h, n, i);
        else {
            var y = l(e);
            if (y) {
                var b, x = y.call(e);
                if (y !== e.entries)
                    for (var w = 0; !(b = x.next()).done;) f = b.value, h = g + r(f, w++), m += o(f, h, n, i);
                else
                    for (; !(b = x.next()).done;) {
                        var k = b.value;
                        k && (f = k[1], h = g + u.escape(k[0]) + d + r(f, 0), m += o(f, h, n, i))
                    }
            } else if ("object" === p) {
                var _ = "",
                    C = String(e);
                a("31", "[object Object]" === C ? "object with keys {" + Object.keys(e).join(", ") + "}" : C, _)
            }
        }
        return m
    }

    function i(e, t, n) {
        return null == e ? 0 : o(e, "", t, n)
    }
    var a = n(101),
        s = (n(104), n(103)),
        l = n(109),
        u = (n(102), n(110)),
        c = (n(105), "."),
        d = ":";
    e.exports = i
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = e && (r && e[r] || e[o]);
        if ("function" == typeof t) return t
    }
    var r = "function" == typeof Symbol && Symbol.iterator,
        o = "@@iterator";
    e.exports = n
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = /[=:]/g,
            n = {
                "=": "=0",
                ":": "=2"
            },
            r = ("" + e).replace(t, function(e) {
                return n[e]
            });
        return "$" + r
    }

    function r(e) {
        var t = /(=0|=2)/g,
            n = {
                "=0": "=",
                "=2": ":"
            },
            r = "." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1);
        return ("" + r).replace(t, function(e) {
            return n[e]
        })
    }
    var o = {
        escape: n,
        unescape: r
    };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        this.props = e, this.context = t, this.refs = a, this.updater = n || i
    }
    var o = n(101),
        i = n(112),
        a = (n(107), n(113));
    n(102), n(105);
    r.prototype.isReactComponent = {}, r.prototype.setState = function(e, t) {
        "object" != typeof e && "function" != typeof e && null != e ? o("85") : void 0, this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState")
    }, r.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate")
    };
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t) {}
    var o = (n(105), {
        isMounted: function(e) {
            return !1
        },
        enqueueCallback: function(e, t) {},
        enqueueForceUpdate: function(e) {
            r(e, "forceUpdate")
        },
        enqueueReplaceState: function(e, t) {
            r(e, "replaceState")
        },
        enqueueSetState: function(e, t) {
            r(e, "setState")
        }
    });
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = {};
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        this.props = e, this.context = t, this.refs = l, this.updater = n || s
    }

    function o() {}
    var i = n(98),
        a = n(111),
        s = n(112),
        l = n(113);
    o.prototype = a.prototype, r.prototype = new o, r.prototype.constructor = r, i(r.prototype, a.prototype), r.prototype.isPureReactComponent = !0, e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = k.hasOwnProperty(t) ? k[t] : null;
        C.hasOwnProperty(t) && (n !== x.OVERRIDE_BASE ? d("73", t) : void 0), e && (n !== x.DEFINE_MANY && n !== x.DEFINE_MANY_MERGED ? d("74", t) : void 0)
    }

    function o(e, t) {
        if (t) {
            "function" == typeof t ? d("75") : void 0, h.isValidElement(t) ? d("76") : void 0;
            var n = e.prototype,
                o = n.__reactAutoBindPairs;
            t.hasOwnProperty(b) && _.mixins(e, t.mixins);
            for (var i in t)
                if (t.hasOwnProperty(i) && i !== b) {
                    var a = t[i],
                        u = n.hasOwnProperty(i);
                    if (r(u, i), _.hasOwnProperty(i)) _[i](e, a);
                    else {
                        var c = k.hasOwnProperty(i),
                            p = "function" == typeof a,
                            f = p && !c && !u && t.autobind !== !1;
                        if (f) o.push(i, a), n[i] = a;
                        else if (u) {
                            var m = k[i];
                            !c || m !== x.DEFINE_MANY_MERGED && m !== x.DEFINE_MANY ? d("77", m, i) : void 0, m === x.DEFINE_MANY_MERGED ? n[i] = s(n[i], a) : m === x.DEFINE_MANY && (n[i] = l(n[i], a))
                        } else n[i] = a
                    }
                }
        } else;
    }

    function i(e, t) {
        if (t)
            for (var n in t) {
                var r = t[n];
                if (t.hasOwnProperty(n)) {
                    var o = n in _;
                    o ? d("78", n) : void 0;
                    var i = n in e;
                    i ? d("79", n) : void 0, e[n] = r
                }
            }
    }

    function a(e, t) {
        e && t && "object" == typeof e && "object" == typeof t ? void 0 : d("80");
        for (var n in t) t.hasOwnProperty(n) && (void 0 !== e[n] ? d("81", n) : void 0, e[n] = t[n]);
        return e
    }

    function s(e, t) {
        return function() {
            var n = e.apply(this, arguments),
                r = t.apply(this, arguments);
            if (null == n) return r;
            if (null == r) return n;
            var o = {};
            return a(o, n), a(o, r), o
        }
    }

    function l(e, t) {
        return function() {
            e.apply(this, arguments), t.apply(this, arguments)
        }
    }

    function u(e, t) {
        var n = t.bind(e);
        return n
    }

    function c(e) {
        for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
            var r = t[n],
                o = t[n + 1];
            e[r] = u(e, o)
        }
    }
    var d = n(101),
        p = n(98),
        f = n(111),
        h = n(103),
        m = (n(116), n(118), n(112)),
        g = n(113),
        v = (n(102), n(117)),
        y = n(119),
        b = (n(105), y({
            mixins: null
        })),
        x = v({
            DEFINE_ONCE: null,
            DEFINE_MANY: null,
            OVERRIDE_BASE: null,
            DEFINE_MANY_MERGED: null
        }),
        w = [],
        k = {
            mixins: x.DEFINE_MANY,
            statics: x.DEFINE_MANY,
            propTypes: x.DEFINE_MANY,
            contextTypes: x.DEFINE_MANY,
            childContextTypes: x.DEFINE_MANY,
            getDefaultProps: x.DEFINE_MANY_MERGED,
            getInitialState: x.DEFINE_MANY_MERGED,
            getChildContext: x.DEFINE_MANY_MERGED,
            render: x.DEFINE_ONCE,
            componentWillMount: x.DEFINE_MANY,
            componentDidMount: x.DEFINE_MANY,
            componentWillReceiveProps: x.DEFINE_MANY,
            shouldComponentUpdate: x.DEFINE_ONCE,
            componentWillUpdate: x.DEFINE_MANY,
            componentDidUpdate: x.DEFINE_MANY,
            componentWillUnmount: x.DEFINE_MANY,
            updateComponent: x.OVERRIDE_BASE
        },
        _ = {
            displayName: function(e, t) {
                e.displayName = t
            },
            mixins: function(e, t) {
                if (t)
                    for (var n = 0; n < t.length; n++) o(e, t[n])
            },
            childContextTypes: function(e, t) {
                e.childContextTypes = p({}, e.childContextTypes, t)
            },
            contextTypes: function(e, t) {
                e.contextTypes = p({}, e.contextTypes, t)
            },
            getDefaultProps: function(e, t) {
                e.getDefaultProps ? e.getDefaultProps = s(e.getDefaultProps, t) : e.getDefaultProps = t
            },
            propTypes: function(e, t) {
                e.propTypes = p({}, e.propTypes, t)
            },
            statics: function(e, t) {
                i(e, t)
            },
            autobind: function() {}
        },
        C = {
            replaceState: function(e, t) {
                this.updater.enqueueReplaceState(this, e), t && this.updater.enqueueCallback(this, t, "replaceState")
            },
            isMounted: function() {
                return this.updater.isMounted(this)
            }
        },
        E = function() {};
    p(E.prototype, f.prototype, C);
    var S = {
        createClass: function(e) {
            var t = function(e, n, r) {
                this.__reactAutoBindPairs.length && c(this), this.props = e, this.context = n, this.refs = g, this.updater = r || m, this.state = null;
                var o = this.getInitialState ? this.getInitialState() : null;
                "object" != typeof o || Array.isArray(o) ? d("82", t.displayName || "ReactCompositeComponent") : void 0, this.state = o
            };
            t.prototype = new E, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], w.forEach(o.bind(null, t)), o(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), t.prototype.render ? void 0 : d("83");
            for (var n in k) t.prototype[n] || (t.prototype[n] = null);
            return t
        },
        injection: {
            injectMixin: function(e) {
                w.push(e)
            }
        }
    };
    e.exports = S
}, function(e, t, n) {
    "use strict";
    var r = n(117),
        o = r({
            prop: null,
            context: null,
            childContext: null
        });
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(102),
        o = function(e) {
            var t, n = {};
            e instanceof Object && !Array.isArray(e) ? void 0 : r(!1);
            for (t in e) e.hasOwnProperty(t) && (n[t] = t);
            return n
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = {};
    e.exports = r
}, function(e, t) {
    "use strict";
    var n = function(e) {
        var t;
        for (t in e)
            if (e.hasOwnProperty(t)) return t;
        return null
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(103),
        o = r.createFactory,
        i = {
            a: o("a"),
            abbr: o("abbr"),
            address: o("address"),
            area: o("area"),
            article: o("article"),
            aside: o("aside"),
            audio: o("audio"),
            b: o("b"),
            base: o("base"),
            bdi: o("bdi"),
            bdo: o("bdo"),
            big: o("big"),
            blockquote: o("blockquote"),
            body: o("body"),
            br: o("br"),
            button: o("button"),
            canvas: o("canvas"),
            caption: o("caption"),
            cite: o("cite"),
            code: o("code"),
            col: o("col"),
            colgroup: o("colgroup"),
            data: o("data"),
            datalist: o("datalist"),
            dd: o("dd"),
            del: o("del"),
            details: o("details"),
            dfn: o("dfn"),
            dialog: o("dialog"),
            div: o("div"),
            dl: o("dl"),
            dt: o("dt"),
            em: o("em"),
            embed: o("embed"),
            fieldset: o("fieldset"),
            figcaption: o("figcaption"),
            figure: o("figure"),
            footer: o("footer"),
            form: o("form"),
            h1: o("h1"),
            h2: o("h2"),
            h3: o("h3"),
            h4: o("h4"),
            h5: o("h5"),
            h6: o("h6"),
            head: o("head"),
            header: o("header"),
            hgroup: o("hgroup"),
            hr: o("hr"),
            html: o("html"),
            i: o("i"),
            iframe: o("iframe"),
            img: o("img"),
            input: o("input"),
            ins: o("ins"),
            kbd: o("kbd"),
            keygen: o("keygen"),
            label: o("label"),
            legend: o("legend"),
            li: o("li"),
            link: o("link"),
            main: o("main"),
            map: o("map"),
            mark: o("mark"),
            menu: o("menu"),
            menuitem: o("menuitem"),
            meta: o("meta"),
            meter: o("meter"),
            nav: o("nav"),
            noscript: o("noscript"),
            object: o("object"),
            ol: o("ol"),
            optgroup: o("optgroup"),
            option: o("option"),
            output: o("output"),
            p: o("p"),
            param: o("param"),
            picture: o("picture"),
            pre: o("pre"),
            progress: o("progress"),
            q: o("q"),
            rp: o("rp"),
            rt: o("rt"),
            ruby: o("ruby"),
            s: o("s"),
            samp: o("samp"),
            script: o("script"),
            section: o("section"),
            select: o("select"),
            small: o("small"),
            source: o("source"),
            span: o("span"),
            strong: o("strong"),
            style: o("style"),
            sub: o("sub"),
            summary: o("summary"),
            sup: o("sup"),
            table: o("table"),
            tbody: o("tbody"),
            td: o("td"),
            textarea: o("textarea"),
            tfoot: o("tfoot"),
            th: o("th"),
            thead: o("thead"),
            time: o("time"),
            title: o("title"),
            tr: o("tr"),
            track: o("track"),
            u: o("u"),
            ul: o("ul"),
            "var": o("var"),
            video: o("video"),
            wbr: o("wbr"),
            circle: o("circle"),
            clipPath: o("clipPath"),
            defs: o("defs"),
            ellipse: o("ellipse"),
            g: o("g"),
            image: o("image"),
            line: o("line"),
            linearGradient: o("linearGradient"),
            mask: o("mask"),
            path: o("path"),
            pattern: o("pattern"),
            polygon: o("polygon"),
            polyline: o("polyline"),
            radialGradient: o("radialGradient"),
            rect: o("rect"),
            stop: o("stop"),
            svg: o("svg"),
            text: o("text"),
            tspan: o("tspan")
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
    }

    function o(e) {
        this.message = e, this.stack = ""
    }

    function i(e) {
        function t(t, n, r, i, a, s, l) {
            i = i || S, s = s || r;
            if (null == n[r]) {
                var u = k[a];
                return t ? new o("Required " + u + " `" + s + "` was not specified in " + ("`" + i + "`.")) : null
            }
            return e(n, r, i, a, s)
        }
        var n = t.bind(null, !1);
        return n.isRequired = t.bind(null, !0), n
    }

    function a(e) {
        function t(t, n, r, i, a, s) {
            var l = t[n],
                u = y(l);
            if (u !== e) {
                var c = k[i],
                    d = b(l);
                return new o("Invalid " + c + " `" + a + "` of type " + ("`" + d + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."))
            }
            return null
        }
        return i(t)
    }

    function s() {
        return i(C.thatReturns(null))
    }

    function l(e) {
        function t(t, n, r, i, a) {
            if ("function" != typeof e) return new o("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
            var s = t[n];
            if (!Array.isArray(s)) {
                var l = k[i],
                    u = y(s);
                return new o("Invalid " + l + " `" + a + "` of type " + ("`" + u + "` supplied to `" + r + "`, expected an array."))
            }
            for (var c = 0; c < s.length; c++) {
                var d = e(s, c, r, i, a + "[" + c + "]", _);
                if (d instanceof Error) return d
            }
            return null
        }
        return i(t)
    }

    function u() {
        function e(e, t, n, r, i) {
            var a = e[t];
            if (!w.isValidElement(a)) {
                var s = k[r],
                    l = y(a);
                return new o("Invalid " + s + " `" + i + "` of type " + ("`" + l + "` supplied to `" + n + "`, expected a single ReactElement."))
            }
            return null
        }
        return i(e)
    }

    function c(e) {
        function t(t, n, r, i, a) {
            if (!(t[n] instanceof e)) {
                var s = k[i],
                    l = e.name || S,
                    u = x(t[n]);
                return new o("Invalid " + s + " `" + a + "` of type " + ("`" + u + "` supplied to `" + r + "`, expected ") + ("instance of `" + l + "`."))
            }
            return null
        }
        return i(t)
    }

    function d(e) {
        function t(t, n, i, a, s) {
            for (var l = t[n], u = 0; u < e.length; u++)
                if (r(l, e[u])) return null;
            var c = k[a],
                d = JSON.stringify(e);
            return new o("Invalid " + c + " `" + s + "` of value `" + l + "` " + ("supplied to `" + i + "`, expected one of " + d + "."))
        }
        return Array.isArray(e) ? i(t) : C.thatReturnsNull
    }

    function p(e) {
        function t(t, n, r, i, a) {
            if ("function" != typeof e) return new o("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
            var s = t[n],
                l = y(s);
            if ("object" !== l) {
                var u = k[i];
                return new o("Invalid " + u + " `" + a + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."))
            }
            for (var c in s)
                if (s.hasOwnProperty(c)) {
                    var d = e(s, c, r, i, a + "." + c, _);
                    if (d instanceof Error) return d
                }
            return null
        }
        return i(t)
    }

    function f(e) {
        function t(t, n, r, i, a) {
            for (var s = 0; s < e.length; s++) {
                var l = e[s];
                if (null == l(t, n, r, i, a, _)) return null
            }
            var u = k[i];
            return new o("Invalid " + u + " `" + a + "` supplied to " + ("`" + r + "`."))
        }
        return Array.isArray(e) ? i(t) : C.thatReturnsNull
    }

    function h() {
        function e(e, t, n, r, i) {
            if (!g(e[t])) {
                var a = k[r];
                return new o("Invalid " + a + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."))
            }
            return null
        }
        return i(e)
    }

    function m(e) {
        function t(t, n, r, i, a) {
            var s = t[n],
                l = y(s);
            if ("object" !== l) {
                var u = k[i];
                return new o("Invalid " + u + " `" + a + "` of type `" + l + "` " + ("supplied to `" + r + "`, expected `object`."))
            }
            for (var c in e) {
                var d = e[c];
                if (d) {
                    var p = d(s, c, r, i, a + "." + c, _);
                    if (p) return p
                }
            }
            return null
        }
        return i(t)
    }

    function g(e) {
        switch (typeof e) {
            case "number":
            case "string":
            case "undefined":
                return !0;
            case "boolean":
                return !e;
            case "object":
                if (Array.isArray(e)) return e.every(g);
                if (null === e || w.isValidElement(e)) return !0;
                var t = E(e);
                if (!t) return !1;
                var n, r = t.call(e);
                if (t !== e.entries) {
                    for (; !(n = r.next()).done;)
                        if (!g(n.value)) return !1
                } else
                    for (; !(n = r.next()).done;) {
                        var o = n.value;
                        if (o && !g(o[1])) return !1
                    }
                return !0;
            default:
                return !1
        }
    }

    function v(e, t) {
        return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
    }

    function y(e) {
        var t = typeof e;
        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : v(t, e) ? "symbol" : t
    }

    function b(e) {
        var t = y(e);
        if ("object" === t) {
            if (e instanceof Date) return "date";
            if (e instanceof RegExp) return "regexp"
        }
        return t
    }

    function x(e) {
        return e.constructor && e.constructor.name ? e.constructor.name : S
    }
    var w = n(103),
        k = n(118),
        _ = n(122),
        C = n(106),
        E = n(109),
        S = (n(105), "<<anonymous>>"),
        T = {
            array: a("array"),
            bool: a("boolean"),
            func: a("function"),
            number: a("number"),
            object: a("object"),
            string: a("string"),
            symbol: a("symbol"),
            any: s(),
            arrayOf: l,
            element: u(),
            instanceOf: c,
            node: h(),
            objectOf: p,
            oneOf: d,
            oneOfType: f,
            shape: m
        };
    o.prototype = Error.prototype, e.exports = T
}, function(e, t) {
    "use strict";
    var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = "15.3.1"
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return i.isValidElement(e) ? void 0 : o("143"), e
    }
    var o = n(101),
        i = n(103);
    n(102);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    e.exports = n(126)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.trim().toLowerCase();
        return !v.test(t) || !!y.test(t)
    }

    function o(e) {
        var t = h.parse(e, !0);
        if (t.hostname && (!t.protocol || b.indexOf(t.protocol) >= 0)) try {
            t.hostname = m.toASCII(t.hostname)
        } catch (n) {}
        return h.encode(h.format(t))
    }

    function i(e) {
        var t = h.parse(e, !0);
        if (t.hostname && (!t.protocol || b.indexOf(t.protocol) >= 0)) try {
            t.hostname = m.toUnicode(t.hostname)
        } catch (n) {}
        return h.decode(h.format(t))
    }

    function a(e, t) {
        return this instanceof a ? (t || s.isString(e) || (t = e || {}, e = "default"), this.inline = new p, this.block = new d, this.core = new c, this.renderer = new u, this.linkify = new f, this.validateLink = r, this.normalizeLink = o, this.normalizeLinkText = i, this.utils = s, this.helpers = l, this.options = {}, this.configure(e), void(t && this.set(t))) : new a(e, t)
    }
    var s = n(127),
        l = n(141),
        u = n(145),
        c = n(146),
        d = n(156),
        p = n(171),
        f = n(186),
        h = n(131),
        m = n(188),
        g = {
            "default": n(190),
            zero: n(191),
            commonmark: n(192)
        },
        v = /^(vbscript|javascript|file|data):/,
        y = /^data:image\/(gif|png|jpeg|webp);/,
        b = ["http:", "https:", "mailto:"];
    a.prototype.set = function(e) {
        return s.assign(this.options, e), this
    }, a.prototype.configure = function(e) {
        var t, n = this;
        if (s.isString(e) && (t = e, e = g[t], !e)) throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
        if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
        return e.options && n.set(e.options), e.components && Object.keys(e.components).forEach(function(t) {
            e.components[t].rules && n[t].ruler.enableOnly(e.components[t].rules), e.components[t].rules2 && n[t].ruler2.enableOnly(e.components[t].rules2)
        }), this
    }, a.prototype.enable = function(e, t) {
        var n = [];
        Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(t) {
            n = n.concat(this[t].ruler.enable(e, !0))
        }, this), n = n.concat(this.inline.ruler2.enable(e, !0));
        var r = e.filter(function(e) {
            return n.indexOf(e) < 0
        });
        if (r.length && !t) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
        return this
    }, a.prototype.disable = function(e, t) {
        var n = [];
        Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(t) {
            n = n.concat(this[t].ruler.disable(e, !0))
        }, this), n = n.concat(this.inline.ruler2.disable(e, !0));
        var r = e.filter(function(e) {
            return n.indexOf(e) < 0
        });
        if (r.length && !t) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
        return this
    }, a.prototype.use = function(e) {
        var t = [this].concat(Array.prototype.slice.call(arguments, 1));
        return e.apply(e, t), this
    }, a.prototype.parse = function(e, t) {
        var n = new this.core.State(e, this, t);
        return this.core.process(n), n.tokens
    }, a.prototype.render = function(e, t) {
        return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t)
    }, a.prototype.parseInline = function(e, t) {
        var n = new this.core.State(e, this, t);
        return n.inlineMode = !0, this.core.process(n), n.tokens
    }, a.prototype.renderInline = function(e, t) {
        return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t)
    }, e.exports = a
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return Object.prototype.toString.call(e)
    }

    function o(e) {
        return "[object String]" === r(e)
    }

    function i(e, t) {
        return w.call(e, t)
    }

    function a(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return t.forEach(function(t) {
            if (t) {
                if ("object" != typeof t) throw new TypeError(t + "must be object");
                Object.keys(t).forEach(function(n) {
                    e[n] = t[n]
                })
            }
        }), e
    }

    function s(e, t, n) {
        return [].concat(e.slice(0, t), n, e.slice(t + 1))
    }

    function l(e) {
        return !(e >= 55296 && e <= 57343) && (!(e >= 64976 && e <= 65007) && (65535 !== (65535 & e) && 65534 !== (65535 & e) && (!(e >= 0 && e <= 8) && (11 !== e && (!(e >= 14 && e <= 31) && (!(e >= 127 && e <= 159) && !(e > 1114111)))))))
    }

    function u(e) {
        if (e > 65535) {
            e -= 65536;
            var t = 55296 + (e >> 10),
                n = 56320 + (1023 & e);
            return String.fromCharCode(t, n)
        }
        return String.fromCharCode(e)
    }

    function c(e, t) {
        var n = 0;
        return i(S, t) ? S[t] : 35 === t.charCodeAt(0) && E.test(t) && (n = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10), l(n)) ? u(n) : e
    }

    function d(e) {
        return e.indexOf("\\") < 0 ? e : e.replace(k, "$1")
    }

    function p(e) {
        return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(C, function(e, t, n) {
            return t ? t : c(e, n)
        })
    }

    function f(e) {
        return M[e]
    }

    function h(e) {
        return T.test(e) ? e.replace(A, f) : e
    }

    function m(e) {
        return e.replace(L, "\\$&")
    }

    function g(e) {
        switch (e) {
            case 9:
            case 32:
                return !0
        }
        return !1
    }

    function v(e) {
        if (e >= 8192 && e <= 8202) return !0;
        switch (e) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
            case 5760:
            case 8239:
            case 8287:
            case 12288:
                return !0
        }
        return !1
    }

    function y(e) {
        return N.test(e)
    }

    function b(e) {
        switch (e) {
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 124:
            case 125:
            case 126:
                return !0;
            default:
                return !1
        }
    }

    function x(e) {
        return e.trim().replace(/\s+/g, " ").toUpperCase()
    }
    var w = Object.prototype.hasOwnProperty,
        k = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
        _ = /&([a-z#][a-z0-9]{1,31});/gi,
        C = new RegExp(k.source + "|" + _.source, "gi"),
        E = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
        S = n(128),
        T = /[&<>"]/,
        A = /[&<>"]/g,
        M = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        },
        L = /[.?*+^$[\]\\(){}|-]/g,
        N = n(130);
    t.lib = {}, t.lib.mdurl = n(131), t.lib.ucmicro = n(136), t.assign = a, t.isString = o, t.has = i, t.unescapeMd = d, t.unescapeAll = p, t.isValidEntityCode = l, t.fromCodePoint = u, t.escapeHtml = h, t.arrayReplaceAt = s, t.isSpace = g, t.isWhiteSpace = v, t.isMdAsciiPunct = b, t.isPunctChar = y, t.escapeRE = m, t.normalizeReference = x
}, function(e, t, n) {
    "use strict";
    e.exports = n(129)
}, function(e, t) {
    e.exports = {
        Aacute: "Á",
        aacute: "á",
        Abreve: "Ă",
        abreve: "ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        Acy: "А",
        acy: "а",
        AElig: "Æ",
        aelig: "æ",
        af: "⁡",
        Afr: "𝔄",
        afr: "𝔞",
        Agrave: "À",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        Alpha: "Α",
        alpha: "α",
        Amacr: "Ā",
        amacr: "ā",
        amalg: "⨿",
        amp: "&",
        AMP: "&",
        andand: "⩕",
        And: "⩓",
        and: "∧",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angmsd: "∡",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        Aogon: "Ą",
        aogon: "ą",
        Aopf: "𝔸",
        aopf: "𝕒",
        apacir: "⩯",
        ap: "≈",
        apE: "⩰",
        ape: "≊",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        Aring: "Å",
        aring: "å",
        Ascr: "𝒜",
        ascr: "𝒶",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        barwed: "⌅",
        Barwed: "⌆",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        Bcy: "Б",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        Because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        Beta: "Β",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        Bfr: "𝔅",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bNot: "⫭",
        bnot: "⌐",
        Bopf: "𝔹",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxdl: "┐",
        boxdL: "╕",
        boxDl: "╖",
        boxDL: "╗",
        boxdr: "┌",
        boxdR: "╒",
        boxDr: "╓",
        boxDR: "╔",
        boxh: "─",
        boxH: "═",
        boxhd: "┬",
        boxHd: "╤",
        boxhD: "╥",
        boxHD: "╦",
        boxhu: "┴",
        boxHu: "╧",
        boxhU: "╨",
        boxHU: "╩",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxul: "┘",
        boxuL: "╛",
        boxUl: "╜",
        boxUL: "╝",
        boxur: "└",
        boxuR: "╘",
        boxUr: "╙",
        boxUR: "╚",
        boxv: "│",
        boxV: "║",
        boxvh: "┼",
        boxvH: "╪",
        boxVh: "╫",
        boxVH: "╬",
        boxvl: "┤",
        boxvL: "╡",
        boxVl: "╢",
        boxVL: "╣",
        boxvr: "├",
        boxvR: "╞",
        boxVr: "╟",
        boxVR: "╠",
        bprime: "‵",
        breve: "˘",
        Breve: "˘",
        brvbar: "¦",
        bscr: "𝒷",
        Bscr: "ℬ",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsolb: "⧅",
        bsol: "\\",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        Bumpeq: "≎",
        bumpeq: "≏",
        Cacute: "Ć",
        cacute: "ć",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        cap: "∩",
        Cap: "⋒",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        Ccaron: "Č",
        ccaron: "č",
        Ccedil: "Ç",
        ccedil: "ç",
        Ccirc: "Ĉ",
        ccirc: "ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        Cdot: "Ċ",
        cdot: "ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        centerdot: "·",
        CenterDot: "·",
        cfr: "𝔠",
        Cfr: "ℭ",
        CHcy: "Ч",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        Chi: "Χ",
        chi: "χ",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cir: "○",
        cirE: "⧃",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        Colon: "∷",
        Colone: "⩴",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        conint: "∮",
        Conint: "∯",
        ContourIntegral: "∮",
        copf: "𝕔",
        Copf: "ℂ",
        coprod: "∐",
        Coproduct: "∐",
        copy: "©",
        COPY: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        cross: "✗",
        Cross: "⨯",
        Cscr: "𝒞",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cupbrcap: "⩈",
        cupcap: "⩆",
        CupCap: "≍",
        cup: "∪",
        Cup: "⋓",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dagger: "†",
        Dagger: "‡",
        daleth: "ℸ",
        darr: "↓",
        Darr: "↡",
        dArr: "⇓",
        dash: "‐",
        Dashv: "⫤",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        Dcaron: "Ď",
        dcaron: "ď",
        Dcy: "Д",
        dcy: "д",
        ddagger: "‡",
        ddarr: "⇊",
        DD: "ⅅ",
        dd: "ⅆ",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        Delta: "Δ",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        Dfr: "𝔇",
        dfr: "𝔡",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        diamond: "⋄",
        Diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        DJcy: "Ђ",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        Dopf: "𝔻",
        dopf: "𝕕",
        Dot: "¨",
        dot: "˙",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrowBar: "⤓",
        downarrow: "↓",
        DownArrow: "↓",
        Downarrow: "⇓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVectorBar: "⥖",
        DownLeftVector: "↽",
        DownRightTeeVector: "⥟",
        DownRightVectorBar: "⥗",
        DownRightVector: "⇁",
        DownTeeArrow: "↧",
        DownTee: "⊤",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        Dscr: "𝒟",
        dscr: "𝒹",
        DScy: "Ѕ",
        dscy: "ѕ",
        dsol: "⧶",
        Dstrok: "Đ",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        DZcy: "Џ",
        dzcy: "џ",
        dzigrarr: "⟿",
        Eacute: "É",
        eacute: "é",
        easter: "⩮",
        Ecaron: "Ě",
        ecaron: "ě",
        Ecirc: "Ê",
        ecirc: "ê",
        ecir: "≖",
        ecolon: "≕",
        Ecy: "Э",
        ecy: "э",
        eDDot: "⩷",
        Edot: "Ė",
        edot: "ė",
        eDot: "≑",
        ee: "ⅇ",
        efDot: "≒",
        Efr: "𝔈",
        efr: "𝔢",
        eg: "⪚",
        Egrave: "È",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        Element: "∈",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        Emacr: "Ē",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        EmptySmallSquare: "◻",
        emptyv: "∅",
        EmptyVerySmallSquare: "▫",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        ENG: "Ŋ",
        eng: "ŋ",
        ensp: " ",
        Eogon: "Ę",
        eogon: "ę",
        Eopf: "𝔼",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        Epsilon: "Ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        Equal: "⩵",
        equals: "=",
        EqualTilde: "≂",
        equest: "≟",
        Equilibrium: "⇌",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erarr: "⥱",
        erDot: "≓",
        escr: "ℯ",
        Escr: "ℰ",
        esdot: "≐",
        Esim: "⩳",
        esim: "≂",
        Eta: "Η",
        eta: "η",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        Exists: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        ExponentialE: "ⅇ",
        fallingdotseq: "≒",
        Fcy: "Ф",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        Ffr: "𝔉",
        ffr: "𝔣",
        filig: "ﬁ",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        Fopf: "𝔽",
        fopf: "𝕗",
        forall: "∀",
        ForAll: "∀",
        fork: "⋔",
        forkv: "⫙",
        Fouriertrf: "ℱ",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        Fscr: "ℱ",
        gacute: "ǵ",
        Gamma: "Γ",
        gamma: "γ",
        Gammad: "Ϝ",
        gammad: "ϝ",
        gap: "⪆",
        Gbreve: "Ğ",
        gbreve: "ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        gcirc: "ĝ",
        Gcy: "Г",
        gcy: "г",
        Gdot: "Ġ",
        gdot: "ġ",
        ge: "≥",
        gE: "≧",
        gEl: "⪌",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        gescc: "⪩",
        ges: "⩾",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        Gfr: "𝔊",
        gfr: "𝔤",
        gg: "≫",
        Gg: "⋙",
        ggg: "⋙",
        gimel: "ℷ",
        GJcy: "Ѓ",
        gjcy: "ѓ",
        gla: "⪥",
        gl: "≷",
        glE: "⪒",
        glj: "⪤",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gnE: "≩",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        Gopf: "𝔾",
        gopf: "𝕘",
        grave: "`",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        gtcc: "⪧",
        gtcir: "⩺",
        gt: ">",
        GT: ">",
        Gt: "≫",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        Hacek: "ˇ",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        HARDcy: "Ъ",
        hardcy: "ъ",
        harrcir: "⥈",
        harr: "↔",
        hArr: "⇔",
        harrw: "↭",
        Hat: "^",
        hbar: "ℏ",
        Hcirc: "Ĥ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        Hopf: "ℍ",
        horbar: "―",
        HorizontalLine: "─",
        hscr: "𝒽",
        Hscr: "ℋ",
        hslash: "ℏ",
        Hstrok: "Ħ",
        hstrok: "ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        hybull: "⁃",
        hyphen: "‐",
        Iacute: "Í",
        iacute: "í",
        ic: "⁣",
        Icirc: "Î",
        icirc: "î",
        Icy: "И",
        icy: "и",
        Idot: "İ",
        IEcy: "Е",
        iecy: "е",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        Ifr: "ℑ",
        Igrave: "Ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        IJlig: "Ĳ",
        ijlig: "ĳ",
        Imacr: "Ī",
        imacr: "ī",
        image: "ℑ",
        ImaginaryI: "ⅈ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        Im: "ℑ",
        imof: "⊷",
        imped: "Ƶ",
        Implies: "⇒",
        incare: "℅",
        "in": "∈",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        intcal: "⊺",
        "int": "∫",
        Int: "∬",
        integers: "ℤ",
        Integral: "∫",
        intercal: "⊺",
        Intersection: "⋂",
        intlarhk: "⨗",
        intprod: "⨼",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        IOcy: "Ё",
        iocy: "ё",
        Iogon: "Į",
        iogon: "į",
        Iopf: "𝕀",
        iopf: "𝕚",
        Iota: "Ι",
        iota: "ι",
        iprod: "⨼",
        iquest: "¿",
        iscr: "𝒾",
        Iscr: "ℐ",
        isin: "∈",
        isindot: "⋵",
        isinE: "⋹",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        Itilde: "Ĩ",
        itilde: "ĩ",
        Iukcy: "І",
        iukcy: "і",
        Iuml: "Ï",
        iuml: "ï",
        Jcirc: "Ĵ",
        jcirc: "ĵ",
        Jcy: "Й",
        jcy: "й",
        Jfr: "𝔍",
        jfr: "𝔧",
        jmath: "ȷ",
        Jopf: "𝕁",
        jopf: "𝕛",
        Jscr: "𝒥",
        jscr: "𝒿",
        Jsercy: "Ј",
        jsercy: "ј",
        Jukcy: "Є",
        jukcy: "є",
        Kappa: "Κ",
        kappa: "κ",
        kappav: "ϰ",
        Kcedil: "Ķ",
        kcedil: "ķ",
        Kcy: "К",
        kcy: "к",
        Kfr: "𝔎",
        kfr: "𝔨",
        kgreen: "ĸ",
        KHcy: "Х",
        khcy: "х",
        KJcy: "Ќ",
        kjcy: "ќ",
        Kopf: "𝕂",
        kopf: "𝕜",
        Kscr: "𝒦",
        kscr: "𝓀",
        lAarr: "⇚",
        Lacute: "Ĺ",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        Lambda: "Λ",
        lambda: "λ",
        lang: "⟨",
        Lang: "⟪",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        Laplacetrf: "ℒ",
        laquo: "«",
        larrb: "⇤",
        larrbfs: "⤟",
        larr: "←",
        Larr: "↞",
        lArr: "⇐",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        latail: "⤙",
        lAtail: "⤛",
        lat: "⪫",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lBarr: "⤎",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        Lcaron: "Ľ",
        lcaron: "ľ",
        Lcedil: "Ļ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        Lcy: "Л",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        lE: "≦",
        LeftAngleBracket: "⟨",
        LeftArrowBar: "⇤",
        leftarrow: "←",
        LeftArrow: "←",
        Leftarrow: "⇐",
        LeftArrowRightArrow: "⇆",
        leftarrowtail: "↢",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVectorBar: "⥙",
        LeftDownVector: "⇃",
        LeftFloor: "⌊",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        LeftRightArrow: "↔",
        Leftrightarrow: "⇔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        LeftRightVector: "⥎",
        LeftTeeArrow: "↤",
        LeftTee: "⊣",
        LeftTeeVector: "⥚",
        leftthreetimes: "⋋",
        LeftTriangleBar: "⧏",
        LeftTriangle: "⊲",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVectorBar: "⥘",
        LeftUpVector: "↿",
        LeftVectorBar: "⥒",
        LeftVector: "↼",
        lEg: "⪋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        lescc: "⪨",
        les: "⩽",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        lessgtr: "≶",
        LessLess: "⪡",
        lesssim: "≲",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        Lfr: "𝔏",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lHar: "⥢",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        LJcy: "Љ",
        ljcy: "љ",
        llarr: "⇇",
        ll: "≪",
        Ll: "⋘",
        llcorner: "⌞",
        Lleftarrow: "⇚",
        llhard: "⥫",
        lltri: "◺",
        Lmidot: "Ŀ",
        lmidot: "ŀ",
        lmoustache: "⎰",
        lmoust: "⎰",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lnE: "≨",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        LongLeftArrow: "⟵",
        Longleftarrow: "⟸",
        longleftrightarrow: "⟷",
        LongLeftRightArrow: "⟷",
        Longleftrightarrow: "⟺",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        LongRightArrow: "⟶",
        Longrightarrow: "⟹",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        Lopf: "𝕃",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        Lscr: "ℒ",
        lsh: "↰",
        Lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        Lstrok: "Ł",
        lstrok: "ł",
        ltcc: "⪦",
        ltcir: "⩹",
        lt: "<",
        LT: "<",
        Lt: "≪",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        ltrPar: "⦖",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        Map: "⤅",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        Mcy: "М",
        mcy: "м",
        mdash: "—",
        mDDot: "∺",
        measuredangle: "∡",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        mfr: "𝔪",
        mho: "℧",
        micro: "µ",
        midast: "*",
        midcir: "⫰",
        mid: "∣",
        middot: "·",
        minusb: "⊟",
        minus: "−",
        minusd: "∸",
        minusdu: "⨪",
        MinusPlus: "∓",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        Mopf: "𝕄",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        Mscr: "ℳ",
        mstpos: "∾",
        Mu: "Μ",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nabla: "∇",
        Nacute: "Ń",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natural: "♮",
        naturals: "ℕ",
        natur: "♮",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        Ncaron: "Ň",
        ncaron: "ň",
        Ncedil: "Ņ",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        Ncy: "Н",
        ncy: "н",
        ndash: "–",
        nearhk: "⤤",
        nearr: "↗",
        neArr: "⇗",
        nearrow: "↗",
        ne: "≠",
        nedot: "≐̸",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        nexist: "∄",
        nexists: "∄",
        Nfr: "𝔑",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        nGg: "⋙̸",
        ngsim: "≵",
        nGt: "≫⃒",
        ngt: "≯",
        ngtr: "≯",
        nGtv: "≫̸",
        nharr: "↮",
        nhArr: "⇎",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        NJcy: "Њ",
        njcy: "њ",
        nlarr: "↚",
        nlArr: "⇍",
        nldr: "‥",
        nlE: "≦̸",
        nle: "≰",
        nleftarrow: "↚",
        nLeftarrow: "⇍",
        nleftrightarrow: "↮",
        nLeftrightarrow: "⇎",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nLl: "⋘̸",
        nlsim: "≴",
        nLt: "≪⃒",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nLtv: "≪̸",
        nmid: "∤",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        nopf: "𝕟",
        Nopf: "ℕ",
        Not: "⫬",
        not: "¬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        notin: "∉",
        notindot: "⋵̸",
        notinE: "⋹̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangle: "⋫",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        nparallel: "∦",
        npar: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        nprec: "⊀",
        npreceq: "⪯̸",
        npre: "⪯̸",
        nrarrc: "⤳̸",
        nrarr: "↛",
        nrArr: "⇏",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nRightarrow: "⇏",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        Nscr: "𝒩",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        Ntilde: "Ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        Nu: "Ν",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvDash: "⊭",
        nVdash: "⊮",
        nVDash: "⊯",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvHarr: "⤄",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwarhk: "⤣",
        nwarr: "↖",
        nwArr: "⇖",
        nwarrow: "↖",
        nwnear: "⤧",
        Oacute: "Ó",
        oacute: "ó",
        oast: "⊛",
        Ocirc: "Ô",
        ocirc: "ô",
        ocir: "⊚",
        Ocy: "О",
        ocy: "о",
        odash: "⊝",
        Odblac: "Ő",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        OElig: "Œ",
        oelig: "œ",
        ofcir: "⦿",
        Ofr: "𝔒",
        ofr: "𝔬",
        ogon: "˛",
        Ograve: "Ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        Omacr: "Ō",
        omacr: "ō",
        Omega: "Ω",
        omega: "ω",
        Omicron: "Ο",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        Oopf: "𝕆",
        oopf: "𝕠",
        opar: "⦷",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        operp: "⦹",
        oplus: "⊕",
        orarr: "↻",
        Or: "⩔",
        or: "∨",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oS: "Ⓢ",
        Oscr: "𝒪",
        oscr: "ℴ",
        Oslash: "Ø",
        oslash: "ø",
        osol: "⊘",
        Otilde: "Õ",
        otilde: "õ",
        otimesas: "⨶",
        Otimes: "⨷",
        otimes: "⊗",
        Ouml: "Ö",
        ouml: "ö",
        ovbar: "⌽",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        para: "¶",
        parallel: "∥",
        par: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        PartialD: "∂",
        Pcy: "П",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        Pfr: "𝔓",
        pfr: "𝔭",
        Phi: "Φ",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        Pi: "Π",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plus: "+",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        PlusMinus: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        Poincareplane: "ℌ",
        pointint: "⨕",
        popf: "𝕡",
        Popf: "ℙ",
        pound: "£",
        prap: "⪷",
        Pr: "⪻",
        pr: "≺",
        prcue: "≼",
        precapprox: "⪷",
        prec: "≺",
        preccurlyeq: "≼",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        pre: "⪯",
        prE: "⪳",
        precsim: "≾",
        prime: "′",
        Prime: "″",
        primes: "ℙ",
        prnap: "⪹",
        prnE: "⪵",
        prnsim: "⋨",
        prod: "∏",
        Product: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        Proportional: "∝",
        Proportion: "∷",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        Pscr: "𝒫",
        pscr: "𝓅",
        Psi: "Ψ",
        psi: "ψ",
        puncsp: " ",
        Qfr: "𝔔",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        Qopf: "ℚ",
        qprime: "⁗",
        Qscr: "𝒬",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quot: '"',
        QUOT: '"',
        rAarr: "⇛",
        race: "∽̱",
        Racute: "Ŕ",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        Rang: "⟫",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarr: "→",
        Rarr: "↠",
        rArr: "⇒",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        Rarrtl: "⤖",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        rAtail: "⤜",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rBarr: "⤏",
        RBarr: "⤐",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        Rcaron: "Ř",
        rcaron: "ř",
        Rcedil: "Ŗ",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        Rcy: "Р",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        Re: "ℜ",
        rect: "▭",
        reg: "®",
        REG: "®",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        Rfr: "ℜ",
        rHar: "⥤",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        Rho: "Ρ",
        rho: "ρ",
        rhov: "ϱ",
        RightAngleBracket: "⟩",
        RightArrowBar: "⇥",
        rightarrow: "→",
        RightArrow: "→",
        Rightarrow: "⇒",
        RightArrowLeftArrow: "⇄",
        rightarrowtail: "↣",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVectorBar: "⥕",
        RightDownVector: "⇂",
        RightFloor: "⌋",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        RightTeeArrow: "↦",
        RightTee: "⊢",
        RightTeeVector: "⥛",
        rightthreetimes: "⋌",
        RightTriangleBar: "⧐",
        RightTriangle: "⊳",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVectorBar: "⥔",
        RightUpVector: "↾",
        RightVectorBar: "⥓",
        RightVector: "⇀",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoustache: "⎱",
        rmoust: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        Ropf: "ℝ",
        roplus: "⨮",
        rotimes: "⨵",
        RoundImplies: "⥰",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        Rrightarrow: "⇛",
        rsaquo: "›",
        rscr: "𝓇",
        Rscr: "ℛ",
        rsh: "↱",
        Rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        RuleDelayed: "⧴",
        ruluhar: "⥨",
        rx: "℞",
        Sacute: "Ś",
        sacute: "ś",
        sbquo: "‚",
        scap: "⪸",
        Scaron: "Š",
        scaron: "š",
        Sc: "⪼",
        sc: "≻",
        sccue: "≽",
        sce: "⪰",
        scE: "⪴",
        Scedil: "Ş",
        scedil: "ş",
        Scirc: "Ŝ",
        scirc: "ŝ",
        scnap: "⪺",
        scnE: "⪶",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        Scy: "С",
        scy: "с",
        sdotb: "⊡",
        sdot: "⋅",
        sdote: "⩦",
        searhk: "⤥",
        searr: "↘",
        seArr: "⇘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        Sfr: "𝔖",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        SHCHcy: "Щ",
        shchcy: "щ",
        SHcy: "Ш",
        shcy: "ш",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        shortmid: "∣",
        shortparallel: "∥",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        shy: "­",
        Sigma: "Σ",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        SmallCircle: "∘",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        SOFTcy: "Ь",
        softcy: "ь",
        solbar: "⌿",
        solb: "⧄",
        sol: "/",
        Sopf: "𝕊",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        Sqrt: "√",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        square: "□",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        squarf: "▪",
        squ: "□",
        squf: "▪",
        srarr: "→",
        Sscr: "𝒮",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        Star: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        Sub: "⋐",
        subdot: "⪽",
        subE: "⫅",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        Subset: "⋐",
        subseteq: "⊆",
        subseteqq: "⫅",
        SubsetEqual: "⊆",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succapprox: "⪸",
        succ: "≻",
        succcurlyeq: "≽",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        SuchThat: "∋",
        sum: "∑",
        Sum: "∑",
        sung: "♪",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        sup: "⊃",
        Sup: "⋑",
        supdot: "⪾",
        supdsub: "⫘",
        supE: "⫆",
        supe: "⊇",
        supedot: "⫄",
        Superset: "⊃",
        SupersetEqual: "⊇",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        Supset: "⋑",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swarhk: "⤦",
        swarr: "↙",
        swArr: "⇙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        Tab: "\t",
        target: "⌖",
        Tau: "Τ",
        tau: "τ",
        tbrk: "⎴",
        Tcaron: "Ť",
        tcaron: "ť",
        Tcedil: "Ţ",
        tcedil: "ţ",
        Tcy: "Т",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        Tfr: "𝔗",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        Therefore: "∴",
        Theta: "Θ",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        ThickSpace: "  ",
        ThinSpace: " ",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        THORN: "Þ",
        thorn: "þ",
        tilde: "˜",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        timesbar: "⨱",
        timesb: "⊠",
        times: "×",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        topbot: "⌶",
        topcir: "⫱",
        top: "⊤",
        Topf: "𝕋",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        TRADE: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        TripleDot: "⃛",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        Tscr: "𝒯",
        tscr: "𝓉",
        TScy: "Ц",
        tscy: "ц",
        TSHcy: "Ћ",
        tshcy: "ћ",
        Tstrok: "Ŧ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        Uacute: "Ú",
        uacute: "ú",
        uarr: "↑",
        Uarr: "↟",
        uArr: "⇑",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        ubrcy: "ў",
        Ubreve: "Ŭ",
        ubreve: "ŭ",
        Ucirc: "Û",
        ucirc: "û",
        Ucy: "У",
        ucy: "у",
        udarr: "⇅",
        Udblac: "Ű",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        Ufr: "𝔘",
        ufr: "𝔲",
        Ugrave: "Ù",
        ugrave: "ù",
        uHar: "⥣",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        Umacr: "Ū",
        umacr: "ū",
        uml: "¨",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        uogon: "ų",
        Uopf: "𝕌",
        uopf: "𝕦",
        UpArrowBar: "⤒",
        uparrow: "↑",
        UpArrow: "↑",
        Uparrow: "⇑",
        UpArrowDownArrow: "⇅",
        updownarrow: "↕",
        UpDownArrow: "↕",
        Updownarrow: "⇕",
        UpEquilibrium: "⥮",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        upsi: "υ",
        Upsi: "ϒ",
        upsih: "ϒ",
        Upsilon: "Υ",
        upsilon: "υ",
        UpTeeArrow: "↥",
        UpTee: "⊥",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        Uring: "Ů",
        uring: "ů",
        urtri: "◹",
        Uscr: "𝒰",
        uscr: "𝓊",
        utdot: "⋰",
        Utilde: "Ũ",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        Uuml: "Ü",
        uuml: "ü",
        uwangle: "⦧",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        vArr: "⇕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vBar: "⫨",
        Vbar: "⫫",
        vBarv: "⫩",
        Vcy: "В",
        vcy: "в",
        vdash: "⊢",
        vDash: "⊨",
        Vdash: "⊩",
        VDash: "⊫",
        Vdashl: "⫦",
        veebar: "⊻",
        vee: "∨",
        Vee: "⋁",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        Verbar: "‖",
        vert: "|",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        Vopf: "𝕍",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        Vscr: "𝒱",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        Vvdash: "⊪",
        vzigzag: "⦚",
        Wcirc: "Ŵ",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        Wedge: "⋀",
        wedgeq: "≙",
        weierp: "℘",
        Wfr: "𝔚",
        wfr: "𝔴",
        Wopf: "𝕎",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        Wscr: "𝒲",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        Xfr: "𝔛",
        xfr: "𝔵",
        xharr: "⟷",
        xhArr: "⟺",
        Xi: "Ξ",
        xi: "ξ",
        xlarr: "⟵",
        xlArr: "⟸",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        Xopf: "𝕏",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrarr: "⟶",
        xrArr: "⟹",
        Xscr: "𝒳",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        Yacute: "Ý",
        yacute: "ý",
        YAcy: "Я",
        yacy: "я",
        Ycirc: "Ŷ",
        ycirc: "ŷ",
        Ycy: "Ы",
        ycy: "ы",
        yen: "¥",
        Yfr: "𝔜",
        yfr: "𝔶",
        YIcy: "Ї",
        yicy: "ї",
        Yopf: "𝕐",
        yopf: "𝕪",
        Yscr: "𝒴",
        yscr: "𝓎",
        YUcy: "Ю",
        yucy: "ю",
        yuml: "ÿ",
        Yuml: "Ÿ",
        Zacute: "Ź",
        zacute: "ź",
        Zcaron: "Ž",
        zcaron: "ž",
        Zcy: "З",
        zcy: "з",
        Zdot: "Ż",
        zdot: "ż",
        zeetrf: "ℨ",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        zeta: "ζ",
        zfr: "𝔷",
        Zfr: "ℨ",
        ZHcy: "Ж",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        Zopf: "ℤ",
        Zscr: "𝒵",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌"
    }
}, function(e, t) {
    e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/
}, function(e, t, n) {
    "use strict";
    e.exports.encode = n(132), e.exports.decode = n(133), e.exports.format = n(134), e.exports.parse = n(135)
}, function(e, t) {
    "use strict";

    function n(e) {
        var t, n, r = o[e];
        if (r) return r;
        for (r = o[e] = [], t = 0; t < 128; t++) n = String.fromCharCode(t), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
        for (t = 0; t < e.length; t++) r[e.charCodeAt(t)] = e[t];
        return r
    }

    function r(e, t, o) {
        var i, a, s, l, u, c = "";
        for ("string" != typeof t && (o = t, t = r.defaultChars), "undefined" == typeof o && (o = !0), u = n(t), i = 0, a = e.length; i < a; i++)
            if (s = e.charCodeAt(i), o && 37 === s && i + 2 < a && /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3))) c += e.slice(i, i + 3), i += 2;
            else if (s < 128) c += u[s];
        else if (s >= 55296 && s <= 57343) {
            if (s >= 55296 && s <= 56319 && i + 1 < a && (l = e.charCodeAt(i + 1), l >= 56320 && l <= 57343)) {
                c += encodeURIComponent(e[i] + e[i + 1]), i++;
                continue
            }
            c += "%EF%BF%BD"
        } else c += encodeURIComponent(e[i]);
        return c
    }
    var o = {};
    r.defaultChars = ";/?:@&=+$,-_.!~*'()#", r.componentChars = "-_.!~*'()", e.exports = r
}, function(e, t) {
    "use strict";

    function n(e) {
        var t, n, r = o[e];
        if (r) return r;
        for (r = o[e] = [], t = 0; t < 128; t++) n = String.fromCharCode(t), r.push(n);
        for (t = 0; t < e.length; t++) n = e.charCodeAt(t), r[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
        return r
    }

    function r(e, t) {
        var o;
        return "string" != typeof t && (t = r.defaultChars), o = n(t), e.replace(/(%[a-f0-9]{2})+/gi, function(e) {
            var t, n, r, i, a, s, l, u = "";
            for (t = 0, n = e.length; t < n; t += 3) r = parseInt(e.slice(t + 1, t + 3), 16), r < 128 ? u += o[r] : 192 === (224 & r) && t + 3 < n && (i = parseInt(e.slice(t + 4, t + 6), 16), 128 === (192 & i)) ? (l = r << 6 & 1984 | 63 & i, u += l < 128 ? "��" : String.fromCharCode(l), t += 3) : 224 === (240 & r) && t + 6 < n && (i = parseInt(e.slice(t + 4, t + 6), 16), a = parseInt(e.slice(t + 7, t + 9), 16), 128 === (192 & i) && 128 === (192 & a)) ? (l = r << 12 & 61440 | i << 6 & 4032 | 63 & a, u += l < 2048 || l >= 55296 && l <= 57343 ? "���" : String.fromCharCode(l), t += 6) : 240 === (248 & r) && t + 9 < n && (i = parseInt(e.slice(t + 4, t + 6), 16), a = parseInt(e.slice(t + 7, t + 9), 16), s = parseInt(e.slice(t + 10, t + 12), 16), 128 === (192 & i) && 128 === (192 & a) && 128 === (192 & s)) ? (l = r << 18 & 1835008 | i << 12 & 258048 | a << 6 & 4032 | 63 & s, l < 65536 || l > 1114111 ? u += "����" : (l -= 65536, u += String.fromCharCode(55296 + (l >> 10), 56320 + (1023 & l))), t += 9) : u += "�";
            return u
        })
    }
    var o = {};
    r.defaultChars = ";/?:@&=+$,#", r.componentChars = "", e.exports = r
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t = "";
        return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", t += e.hostname && e.hostname.indexOf(":") !== -1 ? "[" + e.hostname + "]" : e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || ""
    }
}, function(e, t) {
    "use strict";

    function n() {
        this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null
    }

    function r(e, t) {
        if (e && e instanceof n) return e;
        var r = new n;
        return r.parse(e, t), r
    }
    var o = /^([a-z0-9.+-]+:)/i,
        i = /:[0-9]*$/,
        a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        s = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        l = ["{", "}", "|", "\\", "^", "`"].concat(s),
        u = ["'"].concat(l),
        c = ["%", "/", "?", ";", "#"].concat(u),
        d = ["/", "?", "#"],
        p = 255,
        f = /^[+a-z0-9A-Z_-]{0,63}$/,
        h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        m = {
            javascript: !0,
            "javascript:": !0
        },
        g = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };
    n.prototype.parse = function(e, t) {
        var n, r, i, s, l, u = e;
        if (u = u.trim(), !t && 1 === e.split("#").length) {
            var v = a.exec(u);
            if (v) return this.pathname = v[1], v[2] && (this.search = v[2]), this
        }
        var y = o.exec(u);
        if (y && (y = y[0], i = y.toLowerCase(), this.protocol = y, u = u.substr(y.length)), (t || y || u.match(/^\/\/[^@\/]+@[^@\/]+/)) && (l = "//" === u.substr(0, 2), !l || y && m[y] || (u = u.substr(2), this.slashes = !0)), !m[y] && (l || y && !g[y])) {
            var b = -1;
            for (n = 0; n < d.length; n++) s = u.indexOf(d[n]), s !== -1 && (b === -1 || s < b) && (b = s);
            var x, w;
            for (w = b === -1 ? u.lastIndexOf("@") : u.lastIndexOf("@", b), w !== -1 && (x = u.slice(0, w), u = u.slice(w + 1), this.auth = x), b = -1, n = 0; n < c.length; n++) s = u.indexOf(c[n]), s !== -1 && (b === -1 || s < b) && (b = s);
            b === -1 && (b = u.length), ":" === u[b - 1] && b--;
            var k = u.slice(0, b);
            u = u.slice(b), this.parseHost(k), this.hostname = this.hostname || "";
            var _ = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!_) {
                var C = this.hostname.split(/\./);
                for (n = 0, r = C.length; n < r; n++) {
                    var E = C[n];
                    if (E && !E.match(f)) {
                        for (var S = "", T = 0, A = E.length; T < A; T++) S += E.charCodeAt(T) > 127 ? "x" : E[T];
                        if (!S.match(f)) {
                            var M = C.slice(0, n),
                                L = C.slice(n + 1),
                                N = E.match(h);
                            N && (M.push(N[1]), L.unshift(N[2])), L.length && (u = L.join(".") + u), this.hostname = M.join(".");
                            break
                        }
                    }
                }
            }
            this.hostname.length > p && (this.hostname = ""), _ && (this.hostname = this.hostname.substr(1, this.hostname.length - 2))
        }
        var D = u.indexOf("#");
        D !== -1 && (this.hash = u.substr(D), u = u.slice(0, D));
        var I = u.indexOf("?");
        return I !== -1 && (this.search = u.substr(I), u = u.slice(0, I)), u && (this.pathname = u), g[i] && this.hostname && !this.pathname && (this.pathname = ""), this
    }, n.prototype.parseHost = function(e) {
        var t = i.exec(e);
        t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }, e.exports = r
}, function(e, t, n) {
    e.exports.Any = n(137), e.exports.Cc = n(138), e.exports.Cf = n(139), e.exports.P = n(130), e.exports.Z = n(140)
}, function(e, t) {
    e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
}, function(e, t) {
    e.exports = /[\0-\x1F\x7F-\x9F]/
}, function(e, t) {
    e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
}, function(e, t) {
    e.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
}, function(e, t, n) {
    "use strict";
    t.parseLinkLabel = n(142), t.parseLinkDestination = n(143), t.parseLinkTitle = n(144)
}, function(e, t) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, o, i, a, s = -1,
            l = e.posMax,
            u = e.pos;
        for (e.pos = t + 1, r = 1; e.pos < l;) {
            if (i = e.src.charCodeAt(e.pos), 93 === i && (r--, 0 === r)) {
                o = !0;
                break
            }
            if (a = e.pos, e.md.inline.skipToken(e), 91 === i)
                if (a === e.pos - 1) r++;
                else if (n) return e.pos = u, -1
        }
        return o && (s = e.pos), e.pos = u, s
    }
}, function(e, t, n) {
    "use strict";
    var r = n(127).isSpace,
        o = n(127).unescapeAll;
    e.exports = function(e, t, n) {
        var i, a, s = 0,
            l = t,
            u = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
        if (60 === e.charCodeAt(t)) {
            for (t++; t < n;) {
                if (i = e.charCodeAt(t), 10 === i || r(i)) return u;
                if (62 === i) return u.pos = t + 1, u.str = o(e.slice(l + 1, t)), u.ok = !0, u;
                92 === i && t + 1 < n ? t += 2 : t++
            }
            return u
        }
        for (a = 0; t < n && (i = e.charCodeAt(t), 32 !== i) && !(i < 32 || 127 === i);)
            if (92 === i && t + 1 < n) t += 2;
            else {
                if (40 === i && (a++, a > 1)) break;
                if (41 === i && (a--, a < 0)) break;
                t++
            }
        return l === t ? u : (u.str = o(e.slice(l, t)), u.lines = s, u.pos = t, u.ok = !0, u)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(127).unescapeAll;
    e.exports = function(e, t, n) {
        var o, i, a = 0,
            s = t,
            l = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
        if (t >= n) return l;
        if (i = e.charCodeAt(t), 34 !== i && 39 !== i && 40 !== i) return l;
        for (t++, 40 === i && (i = 41); t < n;) {
            if (o = e.charCodeAt(t), o === i) return l.pos = t + 1, l.lines = a, l.str = r(e.slice(s + 1, t)), l.ok = !0, l;
            10 === o ? a++ : 92 === o && t + 1 < n && (t++, 10 === e.charCodeAt(t) && a++), t++
        }
        return l
    }
}, function(e, t, n) {
    "use strict";

    function r() {
        this.rules = o({}, s)
    }
    var o = n(127).assign,
        i = n(127).unescapeAll,
        a = n(127).escapeHtml,
        s = {};
    s.code_inline = function(e, t, n, r, o) {
        var i = e[t];
        return "<code" + o.renderAttrs(i) + ">" + a(e[t].content) + "</code>"
    }, s.code_block = function(e, t, n, r, o) {
        var i = e[t];
        return "<pre" + o.renderAttrs(i) + "><code>" + a(e[t].content) + "</code></pre>\n"
    }, s.fence = function(e, t, n, r, o) {
        var s, l, u, c, d = e[t],
            p = d.info ? i(d.info).trim() : "",
            f = "";
        return p && (f = p.split(/\s+/g)[0]), s = n.highlight ? n.highlight(d.content, f) || a(d.content) : a(d.content), 0 === s.indexOf("<pre") ? s + "\n" : p ? (l = d.attrIndex("class"), u = d.attrs ? d.attrs.slice() : [], l < 0 ? u.push(["class", n.langPrefix + f]) : u[l][1] += " " + n.langPrefix + f, c = {
            attrs: u
        }, "<pre><code" + o.renderAttrs(c) + ">" + s + "</code></pre>\n") : "<pre><code" + o.renderAttrs(d) + ">" + s + "</code></pre>\n"
    }, s.image = function(e, t, n, r, o) {
        var i = e[t];
        return i.attrs[i.attrIndex("alt")][1] = o.renderInlineAsText(i.children, n, r), o.renderToken(e, t, n)
    }, s.hardbreak = function(e, t, n) {
        return n.xhtmlOut ? "<br />\n" : "<br>\n"
    }, s.softbreak = function(e, t, n) {
        return n.breaks ? n.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
    }, s.text = function(e, t) {
        return a(e[t].content)
    }, s.html_block = function(e, t) {
        return e[t].content
    }, s.html_inline = function(e, t) {
        return e[t].content
    }, r.prototype.renderAttrs = function(e) {
        var t, n, r;
        if (!e.attrs) return "";
        for (r = "", t = 0, n = e.attrs.length; t < n; t++) r += " " + a(e.attrs[t][0]) + '="' + a(e.attrs[t][1]) + '"';
        return r
    }, r.prototype.renderToken = function(e, t, n) {
        var r, o = "",
            i = !1,
            a = e[t];
        return a.hidden ? "" : (a.block && a.nesting !== -1 && t && e[t - 1].hidden && (o += "\n"), o += (a.nesting === -1 ? "</" : "<") + a.tag, o += this.renderAttrs(a), 0 === a.nesting && n.xhtmlOut && (o += " /"), a.block && (i = !0, 1 === a.nesting && t + 1 < e.length && (r = e[t + 1], "inline" === r.type || r.hidden ? i = !1 : r.nesting === -1 && r.tag === a.tag && (i = !1))), o += i ? ">\n" : ">")
    }, r.prototype.renderInline = function(e, t, n) {
        for (var r, o = "", i = this.rules, a = 0, s = e.length; a < s; a++) r = e[a].type, o += "undefined" != typeof i[r] ? i[r](e, a, t, n, this) : this.renderToken(e, a, t);
        return o
    }, r.prototype.renderInlineAsText = function(e, t, n) {
        for (var r = "", o = 0, i = e.length; o < i; o++) "text" === e[o].type ? r += e[o].content : "image" === e[o].type && (r += this.renderInlineAsText(e[o].children, t, n));
        return r
    }, r.prototype.render = function(e, t, n) {
        var r, o, i, a = "",
            s = this.rules;
        for (r = 0, o = e.length; r < o; r++) i = e[r].type, a += "inline" === i ? this.renderInline(e[r].children, t, n) : "undefined" != typeof s[i] ? s[e[r].type](e, r, t, n, this) : this.renderToken(e, r, t, n);
        return a
    }, e.exports = r
}, function(e, t, n) {
    "use strict";

    function r() {
        this.ruler = new o;
        for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1])
    }
    var o = n(147),
        i = [
            ["normalize", n(148)],
            ["block", n(149)],
            ["inline", n(150)],
            ["linkify", n(151)],
            ["replacements", n(152)],
            ["smartquotes", n(153)]
        ];
    r.prototype.process = function(e) {
        var t, n, r;
        for (r = this.ruler.getRules(""), t = 0, n = r.length; t < n; t++) r[t](e)
    }, r.prototype.State = n(154), e.exports = r
}, function(e, t) {
    "use strict";

    function n() {
        this.__rules__ = [], this.__cache__ = null
    }
    n.prototype.__find__ = function(e) {
        for (var t = 0; t < this.__rules__.length; t++)
            if (this.__rules__[t].name === e) return t;
        return -1
    }, n.prototype.__compile__ = function() {
        var e = this,
            t = [""];
        e.__rules__.forEach(function(e) {
            e.enabled && e.alt.forEach(function(e) {
                t.indexOf(e) < 0 && t.push(e)
            })
        }), e.__cache__ = {}, t.forEach(function(t) {
            e.__cache__[t] = [], e.__rules__.forEach(function(n) {
                n.enabled && (t && n.alt.indexOf(t) < 0 || e.__cache__[t].push(n.fn))
            })
        })
    }, n.prototype.at = function(e, t, n) {
        var r = this.__find__(e),
            o = n || {};
        if (r === -1) throw new Error("Parser rule not found: " + e);
        this.__rules__[r].fn = t, this.__rules__[r].alt = o.alt || [], this.__cache__ = null
    }, n.prototype.before = function(e, t, n, r) {
        var o = this.__find__(e),
            i = r || {};
        if (o === -1) throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(o, 0, {
            name: t,
            enabled: !0,
            fn: n,
            alt: i.alt || []
        }), this.__cache__ = null
    }, n.prototype.after = function(e, t, n, r) {
        var o = this.__find__(e),
            i = r || {};
        if (o === -1) throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(o + 1, 0, {
            name: t,
            enabled: !0,
            fn: n,
            alt: i.alt || []
        }), this.__cache__ = null
    }, n.prototype.push = function(e, t, n) {
        var r = n || {};
        this.__rules__.push({
            name: e,
            enabled: !0,
            fn: t,
            alt: r.alt || []
        }), this.__cache__ = null
    }, n.prototype.enable = function(e, t) {
        Array.isArray(e) || (e = [e]);
        var n = [];
        return e.forEach(function(e) {
            var r = this.__find__(e);
            if (r < 0) {
                if (t) return;
                throw new Error("Rules manager: invalid rule name " + e)
            }
            this.__rules__[r].enabled = !0, n.push(e)
        }, this), this.__cache__ = null, n
    }, n.prototype.enableOnly = function(e, t) {
        Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(e) {
            e.enabled = !1
        }), this.enable(e, t)
    }, n.prototype.disable = function(e, t) {
        Array.isArray(e) || (e = [e]);
        var n = [];
        return e.forEach(function(e) {
            var r = this.__find__(e);
            if (r < 0) {
                if (t) return;
                throw new Error("Rules manager: invalid rule name " + e)
            }
            this.__rules__[r].enabled = !1, n.push(e)
        }, this), this.__cache__ = null, n
    }, n.prototype.getRules = function(e) {
        return null === this.__cache__ && this.__compile__(), this.__cache__[e] || []
    }, e.exports = n
}, function(e, t) {
    "use strict";
    var n = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g,
        r = /\u0000/g;
    e.exports = function(e) {
        var t;
        t = e.src.replace(n, "\n"), t = t.replace(r, "�"), e.src = t
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t;
        e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens)
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t, n, r, o = e.tokens;
        for (n = 0, r = o.length; n < r; n++) t = o[n], "inline" === t.type && e.md.inline.parse(t.content, e.md, e.env, t.children)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return /^<a[>\s]/i.test(e)
    }

    function o(e) {
        return /^<\/a\s*>/i.test(e)
    }
    var i = n(127).arrayReplaceAt;
    e.exports = function(e) {
        var t, n, a, s, l, u, c, d, p, f, h, m, g, v, y, b, x, w = e.tokens;
        if (e.md.options.linkify)
            for (n = 0, a = w.length; n < a; n++)
                if ("inline" === w[n].type && e.md.linkify.pretest(w[n].content))
                    for (s = w[n].children, g = 0, t = s.length - 1; t >= 0; t--)
                        if (u = s[t], "link_close" !== u.type) {
                            if ("html_inline" === u.type && (r(u.content) && g > 0 && g--, o(u.content) && g++), !(g > 0) && "text" === u.type && e.md.linkify.test(u.content)) {
                                for (p = u.content, x = e.md.linkify.match(p), c = [], m = u.level, h = 0, d = 0; d < x.length; d++) v = x[d].url, y = e.md.normalizeLink(v), e.md.validateLink(y) && (b = x[d].text, b = x[d].schema ? "mailto:" !== x[d].schema || /^mailto:/i.test(b) ? e.md.normalizeLinkText(b) : e.md.normalizeLinkText("mailto:" + b).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + b).replace(/^http:\/\//, ""), f = x[d].index, f > h && (l = new e.Token("text", "", 0), l.content = p.slice(h, f), l.level = m, c.push(l)), l = new e.Token("link_open", "a", 1), l.attrs = [
                                    ["href", y]
                                ], l.level = m++, l.markup = "linkify", l.info = "auto", c.push(l), l = new e.Token("text", "", 0), l.content = b, l.level = m, c.push(l), l = new e.Token("link_close", "a", (-1)), l.level = --m, l.markup = "linkify", l.info = "auto", c.push(l), h = x[d].lastIndex);
                                h < p.length && (l = new e.Token("text", "", 0), l.content = p.slice(h), l.level = m, c.push(l)), w[n].children = s = i(s, t, c)
                            }
                        } else
                            for (t--; s[t].level !== u.level && "link_open" !== s[t].type;) t--
    }
}, function(e, t) {
    "use strict";

    function n(e, t) {
        return l[t.toLowerCase()]
    }

    function r(e) {
        var t, r, o = 0;
        for (t = e.length - 1; t >= 0; t--) r = e[t], "text" !== r.type || o || (r.content = r.content.replace(s, n)), "link_open" === r.type && "auto" === r.info && o--, "link_close" === r.type && "auto" === r.info && o++
    }

    function o(e) {
        var t, n, r = 0;
        for (t = e.length - 1; t >= 0; t--) n = e[t], "text" !== n.type || r || i.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")), "link_open" === n.type && "auto" === n.info && r--, "link_close" === n.type && "auto" === n.info && r++
    }
    var i = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
        a = /\((c|tm|r|p)\)/i,
        s = /\((c|tm|r|p)\)/gi,
        l = {
            c: "©",
            r: "®",
            p: "§",
            tm: "™"
        };
    e.exports = function(e) {
        var t;
        if (e.md.options.typographer)
            for (t = e.tokens.length - 1; t >= 0; t--) "inline" === e.tokens[t].type && (a.test(e.tokens[t].content) && r(e.tokens[t].children), i.test(e.tokens[t].content) && o(e.tokens[t].children))
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return e.substr(0, t) + n + e.substr(t + 1)
    }

    function o(e, t) {
        var n, o, l, d, p, f, h, m, g, v, y, b, x, w, k, _, C, E, S, T, A;
        for (S = [], n = 0; n < e.length; n++) {
            for (o = e[n], h = e[n].level, C = S.length - 1; C >= 0 && !(S[C].level <= h); C--);
            if (S.length = C + 1, "text" === o.type) {
                l = o.content, p = 0, f = l.length;
                e: for (; p < f && (u.lastIndex = p, d = u.exec(l));) {
                    if (k = _ = !0, p = d.index + 1, E = "'" === d[0], g = 32, d.index - 1 >= 0) g = l.charCodeAt(d.index - 1);
                    else
                        for (C = n - 1; C >= 0; C--)
                            if ("text" === e[C].type) {
                                g = e[C].content.charCodeAt(e[C].content.length - 1);
                                break
                            } if (v = 32, p < f) v = l.charCodeAt(p);
                    else
                        for (C = n + 1; C < e.length; C++)
                            if ("text" === e[C].type) {
                                v = e[C].content.charCodeAt(0);
                                break
                            } if (y = s(g) || a(String.fromCharCode(g)), b = s(v) || a(String.fromCharCode(v)), x = i(g), w = i(v), w ? k = !1 : b && (x || y || (k = !1)), x ? _ = !1 : y && (w || b || (_ = !1)), 34 === v && '"' === d[0] && g >= 48 && g <= 57 && (_ = k = !1), k && _ && (k = !1, _ = b), k || _) {
                        if (_)
                            for (C = S.length - 1; C >= 0 && (m = S[C], !(S[C].level < h)); C--)
                                if (m.single === E && S[C].level === h) {
                                    m = S[C], E ? (T = t.md.options.quotes[2], A = t.md.options.quotes[3]) : (T = t.md.options.quotes[0], A = t.md.options.quotes[1]), o.content = r(o.content, d.index, A), e[m.token].content = r(e[m.token].content, m.pos, T), p += A.length - 1, m.token === n && (p += T.length - 1), l = o.content, f = l.length, S.length = C;
                                    continue e
                                }
                        k ? S.push({
                            token: n,
                            pos: d.index,
                            single: E,
                            level: h
                        }) : _ && E && (o.content = r(o.content, d.index, c))
                    } else E && (o.content = r(o.content, d.index, c))
                }
            }
        }
    }
    var i = n(127).isWhiteSpace,
        a = n(127).isPunctChar,
        s = n(127).isMdAsciiPunct,
        l = /['"]/,
        u = /['"]/g,
        c = "’";
    e.exports = function(e) {
        var t;
        if (e.md.options.typographer)
            for (t = e.tokens.length - 1; t >= 0; t--) "inline" === e.tokens[t].type && l.test(e.tokens[t].content) && o(e.tokens[t].children, e)
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = t
    }
    var o = n(155);
    r.prototype.Token = o, e.exports = r
}, function(e, t) {
    "use strict";

    function n(e, t, n) {
        this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1
    }
    n.prototype.attrIndex = function(e) {
        var t, n, r;
        if (!this.attrs) return -1;
        for (t = this.attrs, n = 0, r = t.length; n < r; n++)
            if (t[n][0] === e) return n;
        return -1
    }, n.prototype.attrPush = function(e) {
        this.attrs ? this.attrs.push(e) : this.attrs = [e]
    }, n.prototype.attrSet = function(e, t) {
        var n = this.attrIndex(e),
            r = [e, t];
        n < 0 ? this.attrPush(r) : this.attrs[n] = r
    }, n.prototype.attrGet = function(e) {
        var t = this.attrIndex(e),
            n = null;
        return t >= 0 && (n = this.attrs[t][1]), n
    }, n.prototype.attrJoin = function(e, t) {
        var n = this.attrIndex(e);
        n < 0 ? this.attrPush([e, t]) : this.attrs[n][1] = this.attrs[n][1] + " " + t
    }, e.exports = n
}, function(e, t, n) {
    "use strict";

    function r() {
        this.ruler = new o;
        for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1], {
            alt: (i[e][2] || []).slice()
        })
    }
    var o = n(147),
        i = [
            ["table", n(157), ["paragraph", "reference"]],
            ["code", n(158)],
            ["fence", n(159), ["paragraph", "reference", "blockquote", "list"]],
            ["blockquote", n(160), ["paragraph", "reference", "list"]],
            ["hr", n(161), ["paragraph", "reference", "blockquote", "list"]],
            ["list", n(162), ["paragraph", "reference", "blockquote"]],
            ["reference", n(163)],
            ["heading", n(164), ["paragraph", "reference", "blockquote"]],
            ["lheading", n(165)],
            ["html_block", n(166), ["paragraph", "reference", "blockquote"]],
            ["paragraph", n(169)]
        ];
    r.prototype.tokenize = function(e, t, n) {
        for (var r, o, i = this.ruler.getRules(""), a = i.length, s = t, l = !1, u = e.md.options.maxNesting; s < n && (e.line = s = e.skipEmptyLines(s), !(s >= n)) && !(e.sCount[s] < e.blkIndent);) {
            if (e.level >= u) {
                e.line = n;
                break
            }
            for (o = 0; o < a && !(r = i[o](e, s, n, !1)); o++);
            if (e.tight = !l, e.isEmpty(e.line - 1) && (l = !0), s = e.line, s < n && e.isEmpty(s)) {
                if (l = !0, s++, s < n && "list" === e.parentType && e.isEmpty(s)) break;
                e.line = s
            }
        }
    }, r.prototype.parse = function(e, t, n, r) {
        var o;
        e && (o = new this.State(e, t, n, r), this.tokenize(o, o.line, o.lineMax))
    }, r.prototype.State = n(170), e.exports = r
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = e.bMarks[t] + e.blkIndent,
            r = e.eMarks[t];
        return e.src.substr(n, r - n)
    }

    function r(e) {
        var t, n = [],
            r = 0,
            o = e.length,
            i = 0,
            a = 0,
            s = !1,
            l = 0;
        for (t = e.charCodeAt(r); r < o;) 96 === t && i % 2 === 0 ? (s = !s, l = r) : 124 !== t || i % 2 !== 0 || s ? 92 === t ? i++ : i = 0 : (n.push(e.substring(a, r)), a = r + 1), r++, r === o && s && (s = !1, r = l + 1), t = e.charCodeAt(r);
        return n.push(e.substring(a)), n
    }
    e.exports = function(e, t, o, i) {
        var a, s, l, u, c, d, p, f, h, m, g, v;
        if (t + 2 > o) return !1;
        if (c = t + 1, e.sCount[c] < e.blkIndent) return !1;
        if (l = e.bMarks[c] + e.tShift[c], l >= e.eMarks[c]) return !1;
        if (a = e.src.charCodeAt(l), 124 !== a && 45 !== a && 58 !== a) return !1;
        if (s = n(e, t + 1), !/^[-:| ]+$/.test(s)) return !1;
        for (d = s.split("|"), h = [], u = 0; u < d.length; u++) {
            if (m = d[u].trim(), !m) {
                if (0 === u || u === d.length - 1) continue;
                return !1
            }
            if (!/^:?-+:?$/.test(m)) return !1;
            58 === m.charCodeAt(m.length - 1) ? h.push(58 === m.charCodeAt(0) ? "center" : "right") : 58 === m.charCodeAt(0) ? h.push("left") : h.push("")
        }
        if (s = n(e, t).trim(), s.indexOf("|") === -1) return !1;
        if (d = r(s.replace(/^\||\|$/g, "")), p = d.length, p > h.length) return !1;
        if (i) return !0;
        for (f = e.push("table_open", "table", 1), f.map = g = [t, 0], f = e.push("thead_open", "thead", 1),
            f.map = [t, t + 1], f = e.push("tr_open", "tr", 1), f.map = [t, t + 1], u = 0; u < d.length; u++) f = e.push("th_open", "th", 1), f.map = [t, t + 1], h[u] && (f.attrs = [
            ["style", "text-align:" + h[u]]
        ]), f = e.push("inline", "", 0), f.content = d[u].trim(), f.map = [t, t + 1], f.children = [], f = e.push("th_close", "th", -1);
        for (f = e.push("tr_close", "tr", -1), f = e.push("thead_close", "thead", -1), f = e.push("tbody_open", "tbody", 1), f.map = v = [t + 2, 0], c = t + 2; c < o && !(e.sCount[c] < e.blkIndent) && (s = n(e, c), s.indexOf("|") !== -1); c++) {
            for (d = r(s.replace(/^\||\|\s*$/g, "")), f = e.push("tr_open", "tr", 1), u = 0; u < p; u++) f = e.push("td_open", "td", 1), h[u] && (f.attrs = [
                ["style", "text-align:" + h[u]]
            ]), f = e.push("inline", "", 0), f.content = d[u] ? d[u].trim() : "", f.children = [], f = e.push("td_close", "td", -1);
            f = e.push("tr_close", "tr", -1)
        }
        return f = e.push("tbody_close", "tbody", -1), f = e.push("table_close", "table", -1), g[1] = v[1] = c, e.line = c, !0
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, o, i, a = 0;
        if (e.sCount[t] - e.blkIndent < 4) return !1;
        for (o = r = t + 1; r < n;)
            if (e.isEmpty(r)) {
                if (a++, a >= 2 && "list" === e.parentType) break;
                r++
            } else {
                if (a = 0, !(e.sCount[r] - e.blkIndent >= 4)) break;
                r++, o = r
            }
        return e.line = o, i = e.push("code_block", "code", 0), i.content = e.getLines(t, o, 4 + e.blkIndent, !0), i.map = [t, e.line], !0
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t, n, r) {
        var o, i, a, s, l, u, c, d = !1,
            p = e.bMarks[t] + e.tShift[t],
            f = e.eMarks[t];
        if (p + 3 > f) return !1;
        if (o = e.src.charCodeAt(p), 126 !== o && 96 !== o) return !1;
        if (l = p, p = e.skipChars(p, o), i = p - l, i < 3) return !1;
        if (c = e.src.slice(l, p), a = e.src.slice(p, f), a.indexOf("`") >= 0) return !1;
        if (r) return !0;
        for (s = t;
            (s++, !(s >= n)) && (p = l = e.bMarks[s] + e.tShift[s], f = e.eMarks[s], !(p < f && e.sCount[s] < e.blkIndent));)
            if (e.src.charCodeAt(p) === o && !(e.sCount[s] - e.blkIndent >= 4 || (p = e.skipChars(p, o), p - l < i || (p = e.skipSpaces(p), p < f)))) {
                d = !0;
                break
            }
        return i = e.sCount[t], e.line = s + (d ? 1 : 0), u = e.push("fence", "code", 0), u.info = a, u.content = e.getLines(t + 1, s, i, !0), u.markup = c, u.map = [t, e.line], !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(127).isSpace;
    e.exports = function(e, t, n, o) {
        var i, a, s, l, u, c, d, p, f, h, m, g, v, y, b, x, w = e.bMarks[t] + e.tShift[t],
            k = e.eMarks[t];
        if (62 !== e.src.charCodeAt(w++)) return !1;
        if (o) return !0;
        for (32 === e.src.charCodeAt(w) && w++, c = e.blkIndent, e.blkIndent = 0, f = h = e.sCount[t] + w - (e.bMarks[t] + e.tShift[t]), u = [e.bMarks[t]], e.bMarks[t] = w; w < k && (m = e.src.charCodeAt(w), r(m));) 9 === m ? h += 4 - h % 4 : h++, w++;
        for (a = w >= k, l = [e.sCount[t]], e.sCount[t] = h - f, s = [e.tShift[t]], e.tShift[t] = w - e.bMarks[t], g = e.md.block.ruler.getRules("blockquote"), i = t + 1; i < n && !(e.sCount[i] < c) && (w = e.bMarks[i] + e.tShift[i], k = e.eMarks[i], !(w >= k)); i++)
            if (62 !== e.src.charCodeAt(w++)) {
                if (a) break;
                for (x = !1, y = 0, b = g.length; y < b; y++)
                    if (g[y](e, i, n, !0)) {
                        x = !0;
                        break
                    }
                if (x) break;
                u.push(e.bMarks[i]), s.push(e.tShift[i]), l.push(e.sCount[i]), e.sCount[i] = -1
            } else {
                for (32 === e.src.charCodeAt(w) && w++, f = h = e.sCount[i] + w - (e.bMarks[i] + e.tShift[i]), u.push(e.bMarks[i]), e.bMarks[i] = w; w < k && (m = e.src.charCodeAt(w), r(m));) 9 === m ? h += 4 - h % 4 : h++, w++;
                a = w >= k, l.push(e.sCount[i]), e.sCount[i] = h - f, s.push(e.tShift[i]), e.tShift[i] = w - e.bMarks[i]
            }
        for (d = e.parentType, e.parentType = "blockquote", v = e.push("blockquote_open", "blockquote", 1), v.markup = ">", v.map = p = [t, 0], e.md.block.tokenize(e, t, i), v = e.push("blockquote_close", "blockquote", -1), v.markup = ">", e.parentType = d, p[1] = e.line, y = 0; y < s.length; y++) e.bMarks[y + t] = u[y], e.tShift[y + t] = s[y], e.sCount[y + t] = l[y];
        return e.blkIndent = c, !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(127).isSpace;
    e.exports = function(e, t, n, o) {
        var i, a, s, l, u = e.bMarks[t] + e.tShift[t],
            c = e.eMarks[t];
        if (i = e.src.charCodeAt(u++), 42 !== i && 45 !== i && 95 !== i) return !1;
        for (a = 1; u < c;) {
            if (s = e.src.charCodeAt(u++), s !== i && !r(s)) return !1;
            s === i && a++
        }
        return !(a < 3) && (!!o || (e.line = t + 1, l = e.push("hr", "hr", 0), l.map = [t, e.line], l.markup = Array(a + 1).join(String.fromCharCode(i)), !0))
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n, r, o, i;
        return r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t], n = e.src.charCodeAt(r++), 42 !== n && 45 !== n && 43 !== n ? -1 : r < o && (i = e.src.charCodeAt(r), !a(i)) ? -1 : r
    }

    function o(e, t) {
        var n, r = e.bMarks[t] + e.tShift[t],
            o = r,
            i = e.eMarks[t];
        if (o + 1 >= i) return -1;
        if (n = e.src.charCodeAt(o++), n < 48 || n > 57) return -1;
        for (;;) {
            if (o >= i) return -1;
            n = e.src.charCodeAt(o++); {
                if (!(n >= 48 && n <= 57)) {
                    if (41 === n || 46 === n) break;
                    return -1
                }
                if (o - r >= 10) return -1
            }
        }
        return o < i && (n = e.src.charCodeAt(o), !a(n)) ? -1 : o
    }

    function i(e, t) {
        var n, r, o = e.level + 2;
        for (n = t + 2, r = e.tokens.length - 2; n < r; n++) e.tokens[n].level === o && "paragraph_open" === e.tokens[n].type && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2)
    }
    var a = n(127).isSpace;
    e.exports = function(e, t, n, s) {
        var l, u, c, d, p, f, h, m, g, v, y, b, x, w, k, _, C, E, S, T, A, M, L, N, D, I, O, P, R = !0;
        if ((y = o(e, t)) >= 0) E = !0;
        else {
            if (!((y = r(e, t)) >= 0)) return !1;
            E = !1
        }
        if (C = e.src.charCodeAt(y - 1), s) return !0;
        for (T = e.tokens.length, E ? (v = e.bMarks[t] + e.tShift[t], _ = Number(e.src.substr(v, y - v - 1)), D = e.push("ordered_list_open", "ol", 1), 1 !== _ && (D.attrs = [
                ["start", _]
            ])) : D = e.push("bullet_list_open", "ul", 1), D.map = M = [t, 0], D.markup = String.fromCharCode(C), l = t, A = !1, N = e.md.block.ruler.getRules("list"); l < n;) {
            for (x = y, w = e.eMarks[l], u = c = e.sCount[l] + y - (e.bMarks[t] + e.tShift[t]); x < w && (b = e.src.charCodeAt(x), a(b));) 9 === b ? c += 4 - c % 4 : c++, x++;
            if (S = x, k = S >= w ? 1 : c - u, k > 4 && (k = 1), d = u + k, D = e.push("list_item_open", "li", 1), D.markup = String.fromCharCode(C), D.map = L = [t, 0], f = e.blkIndent, m = e.tight, p = e.tShift[t], h = e.sCount[t], g = e.parentType, e.blkIndent = d, e.tight = !0, e.parentType = "list", e.tShift[t] = S - e.bMarks[t], e.sCount[t] = c, S >= w && e.isEmpty(t + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, t, n, !0), e.tight && !A || (R = !1), A = e.line - t > 1 && e.isEmpty(e.line - 1), e.blkIndent = f, e.tShift[t] = p, e.sCount[t] = h, e.tight = m, e.parentType = g, D = e.push("list_item_close", "li", -1), D.markup = String.fromCharCode(C), l = t = e.line, L[1] = l, S = e.bMarks[t], l >= n) break;
            if (e.isEmpty(l)) break;
            if (e.sCount[l] < e.blkIndent) break;
            for (P = !1, I = 0, O = N.length; I < O; I++)
                if (N[I](e, l, n, !0)) {
                    P = !0;
                    break
                }
            if (P) break;
            if (E) {
                if (y = o(e, l), y < 0) break
            } else if (y = r(e, l), y < 0) break;
            if (C !== e.src.charCodeAt(y - 1)) break
        }
        return D = E ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1), D.markup = String.fromCharCode(C), M[1] = l, e.line = l, R && i(e, T), !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(143),
        o = n(144),
        i = n(127).normalizeReference,
        a = n(127).isSpace;
    e.exports = function(e, t, n, s) {
        var l, u, c, d, p, f, h, m, g, v, y, b, x, w, k, _ = 0,
            C = e.bMarks[t] + e.tShift[t],
            E = e.eMarks[t],
            S = t + 1;
        if (91 !== e.src.charCodeAt(C)) return !1;
        for (; ++C < E;)
            if (93 === e.src.charCodeAt(C) && 92 !== e.src.charCodeAt(C - 1)) {
                if (C + 1 === E) return !1;
                if (58 !== e.src.charCodeAt(C + 1)) return !1;
                break
            }
        for (d = e.lineMax, w = e.md.block.ruler.getRules("reference"); S < d && !e.isEmpty(S); S++)
            if (!(e.sCount[S] - e.blkIndent > 3 || e.sCount[S] < 0)) {
                for (x = !1, f = 0, h = w.length; f < h; f++)
                    if (w[f](e, S, d, !0)) {
                        x = !0;
                        break
                    }
                if (x) break
            }
        for (b = e.getLines(t, S, e.blkIndent, !1).trim(), E = b.length, C = 1; C < E; C++) {
            if (l = b.charCodeAt(C), 91 === l) return !1;
            if (93 === l) {
                g = C;
                break
            }
            10 === l ? _++ : 92 === l && (C++, C < E && 10 === b.charCodeAt(C) && _++)
        }
        if (g < 0 || 58 !== b.charCodeAt(g + 1)) return !1;
        for (C = g + 2; C < E; C++)
            if (l = b.charCodeAt(C), 10 === l) _++;
            else if (!a(l)) break;
        if (v = r(b, C, E), !v.ok) return !1;
        if (p = e.md.normalizeLink(v.str), !e.md.validateLink(p)) return !1;
        for (C = v.pos, _ += v.lines, u = C, c = _, y = C; C < E; C++)
            if (l = b.charCodeAt(C), 10 === l) _++;
            else if (!a(l)) break;
        for (v = o(b, C, E), C < E && y !== C && v.ok ? (k = v.str, C = v.pos, _ += v.lines) : (k = "", C = u, _ = c); C < E && (l = b.charCodeAt(C), a(l));) C++;
        if (C < E && 10 !== b.charCodeAt(C) && k)
            for (k = "", C = u, _ = c; C < E && (l = b.charCodeAt(C), a(l));) C++;
        return !(C < E && 10 !== b.charCodeAt(C)) && (!!(m = i(b.slice(1, g))) && (!!s || ("undefined" == typeof e.env.references && (e.env.references = {}), "undefined" == typeof e.env.references[m] && (e.env.references[m] = {
            title: k,
            href: p
        }), e.line = t + _ + 1, !0)))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(127).isSpace;
    e.exports = function(e, t, n, o) {
        var i, a, s, l, u = e.bMarks[t] + e.tShift[t],
            c = e.eMarks[t];
        if (i = e.src.charCodeAt(u), 35 !== i || u >= c) return !1;
        for (a = 1, i = e.src.charCodeAt(++u); 35 === i && u < c && a <= 6;) a++, i = e.src.charCodeAt(++u);
        return !(a > 6 || u < c && 32 !== i) && (!!o || (c = e.skipSpacesBack(c, u), s = e.skipCharsBack(c, 35, u), s > u && r(e.src.charCodeAt(s - 1)) && (c = s), e.line = t + 1, l = e.push("heading_open", "h" + String(a), 1), l.markup = "########".slice(0, a), l.map = [t, e.line], l = e.push("inline", "", 0), l.content = e.src.slice(u, c).trim(), l.map = [t, e.line], l.children = [], l = e.push("heading_close", "h" + String(a), -1), l.markup = "########".slice(0, a), !0))
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t, n) {
        for (var r, o, i, a, s, l, u, c, d, p = t + 1, f = e.md.block.ruler.getRules("paragraph"); p < n && !e.isEmpty(p); p++)
            if (!(e.sCount[p] - e.blkIndent > 3)) {
                if (e.sCount[p] >= e.blkIndent && (l = e.bMarks[p] + e.tShift[p], u = e.eMarks[p], l < u && (d = e.src.charCodeAt(l), (45 === d || 61 === d) && (l = e.skipChars(l, d), l = e.skipSpaces(l), l >= u)))) {
                    c = 61 === d ? 1 : 2;
                    break
                }
                if (!(e.sCount[p] < 0)) {
                    for (o = !1, i = 0, a = f.length; i < a; i++)
                        if (f[i](e, p, n, !0)) {
                            o = !0;
                            break
                        }
                    if (o) break
                }
            }
        return !!c && (r = e.getLines(t, p, e.blkIndent, !1).trim(), e.line = p + 1, s = e.push("heading_open", "h" + String(c), 1), s.markup = String.fromCharCode(d), s.map = [t, e.line], s = e.push("inline", "", 0), s.content = r, s.map = [t, e.line - 1], s.children = [], s = e.push("heading_close", "h" + String(c), -1), s.markup = String.fromCharCode(d), !0)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(167),
        o = n(168).HTML_OPEN_CLOSE_TAG_RE,
        i = [
            [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
            [/^<!--/, /-->/, !0],
            [/^<\?/, /\?>/, !0],
            [/^<![A-Z]/, />/, !0],
            [/^<!\[CDATA\[/, /\]\]>/, !0],
            [new RegExp("^</?(" + r.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
            [new RegExp(o.source + "\\s*$"), /^$/, !1]
        ];
    e.exports = function(e, t, n, r) {
        var o, a, s, l, u = e.bMarks[t] + e.tShift[t],
            c = e.eMarks[t];
        if (!e.md.options.html) return !1;
        if (60 !== e.src.charCodeAt(u)) return !1;
        for (l = e.src.slice(u, c), o = 0; o < i.length && !i[o][0].test(l); o++);
        if (o === i.length) return !1;
        if (r) return i[o][2];
        if (a = t + 1, !i[o][1].test(l))
            for (; a < n && !(e.sCount[a] < e.blkIndent); a++)
                if (u = e.bMarks[a] + e.tShift[a], c = e.eMarks[a], l = e.src.slice(u, c), i[o][1].test(l)) {
                    0 !== l.length && a++;
                    break
                }
        return e.line = a, s = e.push("html_block", "", 0), s.map = [t, a], s.content = e.getLines(t, a, e.blkIndent, !0), !0
    }
}, function(e, t) {
    "use strict";
    e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
}, function(e, t) {
    "use strict";
    var n = "[a-zA-Z_:][a-zA-Z0-9:._-]*",
        r = "[^\"'=<>`\\x00-\\x20]+",
        o = "'[^']*'",
        i = '"[^"]*"',
        a = "(?:" + r + "|" + o + "|" + i + ")",
        s = "(?:\\s+" + n + "(?:\\s*=\\s*" + a + ")?)",
        l = "<[A-Za-z][A-Za-z0-9\\-]*" + s + "*\\s*\\/?>",
        u = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
        c = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",
        d = "<[?].*?[?]>",
        p = "<![A-Z]+\\s+[^>]*>",
        f = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        h = new RegExp("^(?:" + l + "|" + u + "|" + c + "|" + d + "|" + p + "|" + f + ")"),
        m = new RegExp("^(?:" + l + "|" + u + ")");
    e.exports.HTML_TAG_RE = h, e.exports.HTML_OPEN_CLOSE_TAG_RE = m
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        for (var n, r, o, i, a, s = t + 1, l = e.md.block.ruler.getRules("paragraph"), u = e.lineMax; s < u && !e.isEmpty(s); s++)
            if (!(e.sCount[s] - e.blkIndent > 3 || e.sCount[s] < 0)) {
                for (r = !1, o = 0, i = l.length; o < i; o++)
                    if (l[o](e, s, u, !0)) {
                        r = !0;
                        break
                    }
                if (r) break
            }
        return n = e.getLines(t, s, e.blkIndent, !1).trim(), e.line = s, a = e.push("paragraph_open", "p", 1), a.map = [t, e.line], a = e.push("inline", "", 0), a.content = n, a.map = [t, e.line], a.children = [], a = e.push("paragraph_close", "p", -1), !0
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        var o, a, s, l, u, c, d, p;
        for (this.src = e, this.md = t, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", a = this.src, p = !1, s = l = c = d = 0, u = a.length; l < u; l++) {
            if (o = a.charCodeAt(l), !p) {
                if (i(o)) {
                    c++, 9 === o ? d += 4 - d % 4 : d++;
                    continue
                }
                p = !0
            }
            10 !== o && l !== u - 1 || (10 !== o && l++, this.bMarks.push(s), this.eMarks.push(l), this.tShift.push(c), this.sCount.push(d), p = !1, c = 0, d = 0, s = l + 1)
        }
        this.bMarks.push(a.length), this.eMarks.push(a.length), this.tShift.push(0), this.sCount.push(0), this.lineMax = this.bMarks.length - 1
    }
    var o = n(155),
        i = n(127).isSpace;
    r.prototype.push = function(e, t, n) {
        var r = new o(e, t, n);
        return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r
    }, r.prototype.isEmpty = function(e) {
        return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
    }, r.prototype.skipEmptyLines = function(e) {
        for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
        return e
    }, r.prototype.skipSpaces = function(e) {
        for (var t, n = this.src.length; e < n && (t = this.src.charCodeAt(e), i(t)); e++);
        return e
    }, r.prototype.skipSpacesBack = function(e, t) {
        if (e <= t) return e;
        for (; e > t;)
            if (!i(this.src.charCodeAt(--e))) return e + 1;
        return e
    }, r.prototype.skipChars = function(e, t) {
        for (var n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++);
        return e
    }, r.prototype.skipCharsBack = function(e, t, n) {
        if (e <= n) return e;
        for (; e > n;)
            if (t !== this.src.charCodeAt(--e)) return e + 1;
        return e
    }, r.prototype.getLines = function(e, t, n, r) {
        var o, a, s, l, u, c, d, p = e;
        if (e >= t) return "";
        for (c = new Array(t - e), o = 0; p < t; p++, o++) {
            for (a = 0, d = l = this.bMarks[p], u = p + 1 < t || r ? this.eMarks[p] + 1 : this.eMarks[p]; l < u && a < n;) {
                if (s = this.src.charCodeAt(l), i(s)) 9 === s ? a += 4 - a % 4 : a++;
                else {
                    if (!(l - d < this.tShift[p])) break;
                    a++
                }
                l++
            }
            c[o] = this.src.slice(l, u)
        }
        return c.join("")
    }, r.prototype.Token = o, e.exports = r
}, function(e, t, n) {
    "use strict";

    function r() {
        var e;
        for (this.ruler = new o, e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1]);
        for (this.ruler2 = new o, e = 0; e < a.length; e++) this.ruler2.push(a[e][0], a[e][1])
    }
    var o = n(147),
        i = [
            ["text", n(172)],
            ["newline", n(173)],
            ["escape", n(174)],
            ["backticks", n(175)],
            ["strikethrough", n(176).tokenize],
            ["emphasis", n(177).tokenize],
            ["link", n(178)],
            ["image", n(179)],
            ["autolink", n(180)],
            ["html_inline", n(181)],
            ["entity", n(182)]
        ],
        a = [
            ["balance_pairs", n(183)],
            ["strikethrough", n(176).postProcess],
            ["emphasis", n(177).postProcess],
            ["text_collapse", n(184)]
        ];
    r.prototype.skipToken = function(e) {
        var t, n, r = e.pos,
            o = this.ruler.getRules(""),
            i = o.length,
            a = e.md.options.maxNesting,
            s = e.cache;
        if ("undefined" != typeof s[r]) return void(e.pos = s[r]);
        if (e.level < a)
            for (n = 0; n < i && (e.level++, t = o[n](e, !0), e.level--, !t); n++);
        else e.pos = e.posMax;
        t || e.pos++, s[r] = e.pos
    }, r.prototype.tokenize = function(e) {
        for (var t, n, r = this.ruler.getRules(""), o = r.length, i = e.posMax, a = e.md.options.maxNesting; e.pos < i;) {
            if (e.level < a)
                for (n = 0; n < o && !(t = r[n](e, !1)); n++);
            if (t) {
                if (e.pos >= i) break
            } else e.pending += e.src[e.pos++]
        }
        e.pending && e.pushPending()
    }, r.prototype.parse = function(e, t, n, r) {
        var o, i, a, s = new this.State(e, t, n, r);
        for (this.tokenize(s), i = this.ruler2.getRules(""), a = i.length, o = 0; o < a; o++) i[o](s)
    }, r.prototype.State = n(185), e.exports = r
}, function(e, t) {
    "use strict";

    function n(e) {
        switch (e) {
            case 10:
            case 33:
            case 35:
            case 36:
            case 37:
            case 38:
            case 42:
            case 43:
            case 45:
            case 58:
            case 60:
            case 61:
            case 62:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 125:
            case 126:
                return !0;
            default:
                return !1
        }
    }
    e.exports = function(e, t) {
        for (var r = e.pos; r < e.posMax && !n(e.src.charCodeAt(r));) r++;
        return r !== e.pos && (t || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0)
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        var n, r, o = e.pos;
        if (10 !== e.src.charCodeAt(o)) return !1;
        for (n = e.pending.length - 1, r = e.posMax, t || (n >= 0 && 32 === e.pending.charCodeAt(n) ? n >= 1 && 32 === e.pending.charCodeAt(n - 1) ? (e.pending = e.pending.replace(/ +$/, ""), e.push("hardbreak", "br", 0)) : (e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0)) : e.push("softbreak", "br", 0)), o++; o < r && 32 === e.src.charCodeAt(o);) o++;
        return e.pos = o, !0
    }
}, function(e, t, n) {
    "use strict";
    for (var r = n(127).isSpace, o = [], i = 0; i < 256; i++) o.push(0);
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
        o[e.charCodeAt(0)] = 1
    }), e.exports = function(e, t) {
        var n, i = e.pos,
            a = e.posMax;
        if (92 !== e.src.charCodeAt(i)) return !1;
        if (i++, i < a) {
            if (n = e.src.charCodeAt(i), n < 256 && 0 !== o[n]) return t || (e.pending += e.src[i]), e.pos += 2, !0;
            if (10 === n) {
                for (t || e.push("hardbreak", "br", 0), i++; i < a && (n = e.src.charCodeAt(i), r(n));) i++;
                return e.pos = i, !0
            }
        }
        return t || (e.pending += "\\"), e.pos++, !0
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        var n, r, o, i, a, s, l = e.pos,
            u = e.src.charCodeAt(l);
        if (96 !== u) return !1;
        for (n = l, l++, r = e.posMax; l < r && 96 === e.src.charCodeAt(l);) l++;
        for (o = e.src.slice(n, l), i = a = l;
            (i = e.src.indexOf("`", a)) !== -1;) {
            for (a = i + 1; a < r && 96 === e.src.charCodeAt(a);) a++;
            if (a - i === o.length) return t || (s = e.push("code_inline", "code", 0), s.markup = o, s.content = e.src.slice(l, i).replace(/[ \n]+/g, " ").trim()), e.pos = a, !0
        }
        return t || (e.pending += o), e.pos += o.length, !0
    }
}, function(e, t) {
    "use strict";
    e.exports.tokenize = function(e, t) {
        var n, r, o, i, a, s = e.pos,
            l = e.src.charCodeAt(s);
        if (t) return !1;
        if (126 !== l) return !1;
        if (r = e.scanDelims(e.pos, !0), i = r.length, a = String.fromCharCode(l), i < 2) return !1;
        for (i % 2 && (o = e.push("text", "", 0), o.content = a, i--), n = 0; n < i; n += 2) o = e.push("text", "", 0), o.content = a + a, e.delimiters.push({
            marker: l,
            jump: n,
            token: e.tokens.length - 1,
            level: e.level,
            end: -1,
            open: r.can_open,
            close: r.can_close
        });
        return e.pos += r.length, !0
    }, e.exports.postProcess = function(e) {
        var t, n, r, o, i, a = [],
            s = e.delimiters,
            l = e.delimiters.length;
        for (t = 0; t < l; t++) r = s[t], 126 === r.marker && r.end !== -1 && (o = s[r.end], i = e.tokens[r.token], i.type = "s_open", i.tag = "s", i.nesting = 1, i.markup = "~~", i.content = "", i = e.tokens[o.token], i.type = "s_close", i.tag = "s", i.nesting = -1, i.markup = "~~", i.content = "", "text" === e.tokens[o.token - 1].type && "~" === e.tokens[o.token - 1].content && a.push(o.token - 1));
        for (; a.length;) {
            for (t = a.pop(), n = t + 1; n < e.tokens.length && "s_close" === e.tokens[n].type;) n++;
            n--, t !== n && (i = e.tokens[n], e.tokens[n] = e.tokens[t], e.tokens[t] = i)
        }
    }
}, function(e, t) {
    "use strict";
    e.exports.tokenize = function(e, t) {
        var n, r, o, i = e.pos,
            a = e.src.charCodeAt(i);
        if (t) return !1;
        if (95 !== a && 42 !== a) return !1;
        for (r = e.scanDelims(e.pos, 42 === a), n = 0; n < r.length; n++) o = e.push("text", "", 0), o.content = String.fromCharCode(a), e.delimiters.push({
            marker: a,
            jump: n,
            token: e.tokens.length - 1,
            level: e.level,
            end: -1,
            open: r.can_open,
            close: r.can_close
        });
        return e.pos += r.length, !0
    }, e.exports.postProcess = function(e) {
        var t, n, r, o, i, a, s = e.delimiters,
            l = e.delimiters.length;
        for (t = 0; t < l; t++) n = s[t], 95 !== n.marker && 42 !== n.marker || n.end !== -1 && (r = s[n.end], a = t + 1 < l && s[t + 1].end === n.end - 1 && s[t + 1].token === n.token + 1 && s[n.end - 1].token === r.token - 1 && s[t + 1].marker === n.marker, i = String.fromCharCode(n.marker), o = e.tokens[n.token], o.type = a ? "strong_open" : "em_open", o.tag = a ? "strong" : "em", o.nesting = 1, o.markup = a ? i + i : i, o.content = "", o = e.tokens[r.token], o.type = a ? "strong_close" : "em_close", o.tag = a ? "strong" : "em", o.nesting = -1, o.markup = a ? i + i : i, o.content = "", a && (e.tokens[s[t + 1].token].content = "", e.tokens[s[n.end - 1].token].content = "", t++))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(142),
        o = n(143),
        i = n(144),
        a = n(127).normalizeReference,
        s = n(127).isSpace;
    e.exports = function(e, t) {
        var n, l, u, c, d, p, f, h, m, g, v = "",
            y = e.pos,
            b = e.posMax,
            x = e.pos;
        if (91 !== e.src.charCodeAt(e.pos)) return !1;
        if (d = e.pos + 1, c = r(e, e.pos, !0), c < 0) return !1;
        if (p = c + 1, p < b && 40 === e.src.charCodeAt(p)) {
            for (p++; p < b && (l = e.src.charCodeAt(p), s(l) || 10 === l); p++);
            if (p >= b) return !1;
            for (x = p, f = o(e.src, p, e.posMax), f.ok && (v = e.md.normalizeLink(f.str), e.md.validateLink(v) ? p = f.pos : v = ""), x = p; p < b && (l = e.src.charCodeAt(p), s(l) || 10 === l); p++);
            if (f = i(e.src, p, e.posMax), p < b && x !== p && f.ok)
                for (m = f.str, p = f.pos; p < b && (l = e.src.charCodeAt(p), s(l) || 10 === l); p++);
            else m = "";
            if (p >= b || 41 !== e.src.charCodeAt(p)) return e.pos = y, !1;
            p++
        } else {
            if ("undefined" == typeof e.env.references) return !1;
            if (p < b && 91 === e.src.charCodeAt(p) ? (x = p + 1, p = r(e, p), p >= 0 ? u = e.src.slice(x, p++) : p = c + 1) : p = c + 1, u || (u = e.src.slice(d, c)), h = e.env.references[a(u)], !h) return e.pos = y, !1;
            v = h.href, m = h.title
        }
        return t || (e.pos = d, e.posMax = c, g = e.push("link_open", "a", 1), g.attrs = n = [
            ["href", v]
        ], m && n.push(["title", m]), e.md.inline.tokenize(e), g = e.push("link_close", "a", -1)), e.pos = p, e.posMax = b, !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(142),
        o = n(143),
        i = n(144),
        a = n(127).normalizeReference,
        s = n(127).isSpace;
    e.exports = function(e, t) {
        var n, l, u, c, d, p, f, h, m, g, v, y, b, x = "",
            w = e.pos,
            k = e.posMax;
        if (33 !== e.src.charCodeAt(e.pos)) return !1;
        if (91 !== e.src.charCodeAt(e.pos + 1)) return !1;
        if (p = e.pos + 2, d = r(e, e.pos + 1, !1), d < 0) return !1;
        if (f = d + 1, f < k && 40 === e.src.charCodeAt(f)) {
            for (f++; f < k && (l = e.src.charCodeAt(f), s(l) || 10 === l); f++);
            if (f >= k) return !1;
            for (b = f, m = o(e.src, f, e.posMax), m.ok && (x = e.md.normalizeLink(m.str), e.md.validateLink(x) ? f = m.pos : x = ""), b = f; f < k && (l = e.src.charCodeAt(f), s(l) || 10 === l); f++);
            if (m = i(e.src, f, e.posMax), f < k && b !== f && m.ok)
                for (g = m.str, f = m.pos; f < k && (l = e.src.charCodeAt(f), s(l) || 10 === l); f++);
            else g = "";
            if (f >= k || 41 !== e.src.charCodeAt(f)) return e.pos = w, !1;
            f++
        } else {
            if ("undefined" == typeof e.env.references) return !1;
            if (f < k && 91 === e.src.charCodeAt(f) ? (b = f + 1, f = r(e, f), f >= 0 ? c = e.src.slice(b, f++) : f = d + 1) : f = d + 1, c || (c = e.src.slice(p, d)), h = e.env.references[a(c)], !h) return e.pos = w, !1;
            x = h.href, g = h.title
        }
        return t || (u = e.src.slice(p, d), e.md.inline.parse(u, e.md, e.env, y = []), v = e.push("image", "img", 0), v.attrs = n = [
            ["src", x],
            ["alt", ""]
        ], v.children = y, v.content = u, g && n.push(["title", g])), e.pos = f, e.posMax = k, !0
    }
}, function(e, t) {
    "use strict";
    var n = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
        r = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
    e.exports = function(e, t) {
        var o, i, a, s, l, u, c = e.pos;
        return 60 === e.src.charCodeAt(c) && (o = e.src.slice(c), !(o.indexOf(">") < 0) && (r.test(o) ? (i = o.match(r), s = i[0].slice(1, -1), l = e.md.normalizeLink(s), !!e.md.validateLink(l) && (t || (u = e.push("link_open", "a", 1), u.attrs = [
            ["href", l]
        ], u.markup = "autolink", u.info = "auto", u = e.push("text", "", 0), u.content = e.md.normalizeLinkText(s), u = e.push("link_close", "a", -1), u.markup = "autolink", u.info = "auto"), e.pos += i[0].length, !0)) : !!n.test(o) && (a = o.match(n), s = a[0].slice(1, -1), l = e.md.normalizeLink("mailto:" + s), !!e.md.validateLink(l) && (t || (u = e.push("link_open", "a", 1), u.attrs = [
            ["href", l]
        ], u.markup = "autolink", u.info = "auto", u = e.push("text", "", 0), u.content = e.md.normalizeLinkText(s), u = e.push("link_close", "a", -1), u.markup = "autolink", u.info = "auto"), e.pos += a[0].length, !0))))
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = 32 | e;
        return t >= 97 && t <= 122
    }
    var o = n(168).HTML_TAG_RE;
    e.exports = function(e, t) {
        var n, i, a, s, l = e.pos;
        return !!e.md.options.html && (a = e.posMax, !(60 !== e.src.charCodeAt(l) || l + 2 >= a) && (n = e.src.charCodeAt(l + 1), !(33 !== n && 63 !== n && 47 !== n && !r(n)) && (!!(i = e.src.slice(l).match(o)) && (t || (s = e.push("html_inline", "", 0), s.content = e.src.slice(l, l + i[0].length)), e.pos += i[0].length, !0))))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(128),
        o = n(127).has,
        i = n(127).isValidEntityCode,
        a = n(127).fromCodePoint,
        s = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
        l = /^&([a-z][a-z0-9]{1,31});/i;
    e.exports = function(e, t) {
        var n, u, c, d = e.pos,
            p = e.posMax;
        if (38 !== e.src.charCodeAt(d)) return !1;
        if (d + 1 < p)
            if (n = e.src.charCodeAt(d + 1), 35 === n) {
                if (c = e.src.slice(d).match(s)) return t || (u = "x" === c[1][0].toLowerCase() ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), e.pending += a(i(u) ? u : 65533)), e.pos += c[0].length, !0
            } else if (c = e.src.slice(d).match(l), c && o(r, c[1])) return t || (e.pending += r[c[1]]), e.pos += c[0].length, !0;
        return t || (e.pending += "&"), e.pos++, !0
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t, n, r, o, i = e.delimiters,
            a = e.delimiters.length;
        for (t = 0; t < a; t++)
            if (r = i[t], r.close)
                for (n = t - r.jump - 1; n >= 0;) {
                    if (o = i[n], o.open && o.marker === r.marker && o.end < 0 && o.level === r.level) {
                        r.jump = t - n, r.open = !1, o.end = t, o.jump = 0;
                        break
                    }
                    n -= o.jump + 1
                }
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t, n, r = 0,
            o = e.tokens,
            i = e.tokens.length;
        for (t = n = 0; t < i; t++) r += o[t].nesting, o[t].level = r, "text" === o[t].type && t + 1 < i && "text" === o[t + 1].type ? o[t + 1].content = o[t].content + o[t + 1].content : (t !== n && (o[n] = o[t]), n++);
        t !== n && (o.length = n)
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        this.src = e, this.env = n, this.md = t, this.tokens = r, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = []
    }
    var o = n(155),
        i = n(127).isWhiteSpace,
        a = n(127).isPunctChar,
        s = n(127).isMdAsciiPunct;
    r.prototype.pushPending = function() {
        var e = new o("text", "", 0);
        return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e
    }, r.prototype.push = function(e, t, n) {
        this.pending && this.pushPending();
        var r = new o(e, t, n);
        return n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.pendingLevel = this.level, this.tokens.push(r), r
    }, r.prototype.scanDelims = function(e, t) {
        var n, r, o, l, u, c, d, p, f, h = e,
            m = !0,
            g = !0,
            v = this.posMax,
            y = this.src.charCodeAt(e);
        for (n = e > 0 ? this.src.charCodeAt(e - 1) : 32; h < v && this.src.charCodeAt(h) === y;) h++;
        return o = h - e, r = h < v ? this.src.charCodeAt(h) : 32, d = s(n) || a(String.fromCharCode(n)), f = s(r) || a(String.fromCharCode(r)), c = i(n), p = i(r), p ? m = !1 : f && (c || d || (m = !1)), c ? g = !1 : d && (p || f || (g = !1)), t ? (l = m, u = g) : (l = m && (!g || d), u = g && (!m || f)), {
            can_open: l,
            can_close: u,
            length: o
        }
    }, r.prototype.Token = o, e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return t.forEach(function(t) {
            t && Object.keys(t).forEach(function(n) {
                e[n] = t[n]
            })
        }), e
    }

    function o(e) {
        return Object.prototype.toString.call(e)
    }

    function i(e) {
        return "[object String]" === o(e)
    }

    function a(e) {
        return "[object Object]" === o(e)
    }

    function s(e) {
        return "[object RegExp]" === o(e)
    }

    function l(e) {
        return "[object Function]" === o(e)
    }

    function u(e) {
        return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
    }

    function c(e) {
        return Object.keys(e || {}).reduce(function(e, t) {
            return e || y.hasOwnProperty(t)
        }, !1)
    }

    function d(e) {
        e.__index__ = -1, e.__text_cache__ = ""
    }

    function p(e) {
        return function(t, n) {
            var r = t.slice(n);
            return e.test(r) ? r.match(e)[0].length : 0
        }
    }

    function f() {
        return function(e, t) {
            t.normalize(e)
        }
    }

    function h(e) {
        function t(e) {
            return e.replace("%TLDS%", o.src_tlds)
        }

        function r(e, t) {
            throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
        }
        var o = e.re = n(187)(e.__opts__),
            c = e.__tlds__.slice();
        e.onCompile(), e.__tlds_replaced__ || c.push(x), c.push(o.src_xn), o.src_tlds = c.join("|"), o.email_fuzzy = RegExp(t(o.tpl_email_fuzzy), "i"), o.link_fuzzy = RegExp(t(o.tpl_link_fuzzy), "i"), o.link_no_ip_fuzzy = RegExp(t(o.tpl_link_no_ip_fuzzy), "i"), o.host_fuzzy_test = RegExp(t(o.tpl_host_fuzzy_test), "i");
        var h = [];
        e.__compiled__ = {}, Object.keys(e.__schemas__).forEach(function(t) {
            var n = e.__schemas__[t];
            if (null !== n) {
                var o = {
                    validate: null,
                    link: null
                };
                return e.__compiled__[t] = o, a(n) ? (s(n.validate) ? o.validate = p(n.validate) : l(n.validate) ? o.validate = n.validate : r(t, n), void(l(n.normalize) ? o.normalize = n.normalize : n.normalize ? r(t, n) : o.normalize = f())) : i(n) ? void h.push(t) : void r(t, n)
            }
        }), h.forEach(function(t) {
            e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
        }), e.__compiled__[""] = {
            validate: null,
            normalize: f()
        };
        var m = Object.keys(e.__compiled__).filter(function(t) {
            return t.length > 0 && e.__compiled__[t]
        }).map(u).join("|");
        e.re.schema_test = RegExp("(^|(?!_)(?:[><]|" + o.src_ZPCc + "))(" + m + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><]|" + o.src_ZPCc + "))(" + m + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"), d(e)
    }

    function m(e, t) {
        var n = e.__index__,
            r = e.__last_index__,
            o = e.__text_cache__.slice(n, r);
        this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = o, this.text = o, this.url = o
    }

    function g(e, t) {
        var n = new m(e, t);
        return e.__compiled__[n.schema].normalize(n, e), n
    }

    function v(e, t) {
        return this instanceof v ? (t || c(e) && (t = e, e = {}), this.__opts__ = r({}, y, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, b, e), this.__compiled__ = {}, this.__tlds__ = w, this.__tlds_replaced__ = !1, this.re = {}, void h(this)) : new v(e, t)
    }
    var y = {
            fuzzyLink: !0,
            fuzzyEmail: !0,
            fuzzyIP: !1
        },
        b = {
            "http:": {
                validate: function(e, t, n) {
                    var r = e.slice(t);
                    return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
                }
            },
            "https:": "http:",
            "ftp:": "http:",
            "//": {
                validate: function(e, t, n) {
                    var r = e.slice(t);
                    return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(r) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : r.match(n.re.no_http)[0].length : 0
                }
            },
            "mailto:": {
                validate: function(e, t, n) {
                    var r = e.slice(t);
                    return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
                }
            }
        },
        x = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
        w = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
    v.prototype.add = function(e, t) {
        return this.__schemas__[e] = t, h(this), this
    }, v.prototype.set = function(e) {
        return this.__opts__ = r(this.__opts__, e), this
    }, v.prototype.test = function(e) {
        if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
        var t, n, r, o, i, a, s, l, u;
        if (this.re.schema_test.test(e))
            for (s = this.re.schema_search, s.lastIndex = 0; null !== (t = s.exec(e));)
                if (o = this.testSchemaAt(e, t[2], s.lastIndex)) {
                    this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
                    break
                }
        return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test), l >= 0 && (this.__index__ < 0 || l < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = n.index + n[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (u = e.indexOf("@"), u >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (i = r.index + r[1].length, a = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = a))), this.__index__ >= 0
    }, v.prototype.pretest = function(e) {
        return this.re.pretest.test(e)
    }, v.prototype.testSchemaAt = function(e, t, n) {
        return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
    }, v.prototype.match = function(e) {
        var t = 0,
            n = [];
        this.__index__ >= 0 && this.__text_cache__ === e && (n.push(g(this, t)), t = this.__last_index__);
        for (var r = t ? e.slice(t) : e; this.test(r);) n.push(g(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
        return n.length ? n : null
    }, v.prototype.tlds = function(e, t) {
        return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(e, t, n) {
            return e !== n[t - 1]
        }).reverse(), h(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, h(this), this)
    }, v.prototype.normalize = function(e) {
        e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
    }, v.prototype.onCompile = function() {}, e.exports = v
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {};
        return t.src_Any = n(137).source, t.src_Cc = n(138).source, t.src_Z = n(140).source, t.src_P = n(130).source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|"), t.src_pseudo_letter = "(?:(?!>|<|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|>|<|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[()[\\]{}.,\"'?!\\-<>]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain_root + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))",
            t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|<|>|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|]|" + t.src_ZPCc + "))((?![$+<=>^`|])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|]|" + t.src_ZPCc + "))((?![$+<=>^`|])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
    }
}, function(e, t, n) {
    var r;
    (function(e, o) {
        ! function(i) {
            function a(e) {
                throw new RangeError(D[e])
            }

            function s(e, t) {
                for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                return r
            }

            function l(e, t) {
                var n = e.split("@"),
                    r = "";
                n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(N, ".");
                var o = e.split("."),
                    i = s(o, t).join(".");
                return r + i
            }

            function u(e) {
                for (var t, n, r = [], o = 0, i = e.length; o < i;) t = e.charCodeAt(o++), t >= 55296 && t <= 56319 && o < i ? (n = e.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--)) : r.push(t);
                return r
            }

            function c(e) {
                return s(e, function(e) {
                    var t = "";
                    return e > 65535 && (e -= 65536, t += P(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += P(e)
                }).join("")
            }

            function d(e) {
                return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : w
            }

            function p(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function f(e, t, n) {
                var r = 0;
                for (e = n ? O(e / E) : e >> 1, e += O(e / t); e > I * _ >> 1; r += w) e = O(e / I);
                return O(r + (I + 1) * e / (e + C))
            }

            function h(e) {
                var t, n, r, o, i, s, l, u, p, h, m = [],
                    g = e.length,
                    v = 0,
                    y = T,
                    b = S;
                for (n = e.lastIndexOf(A), n < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && a("not-basic"), m.push(e.charCodeAt(r));
                for (o = n > 0 ? n + 1 : 0; o < g;) {
                    for (i = v, s = 1, l = w; o >= g && a("invalid-input"), u = d(e.charCodeAt(o++)), (u >= w || u > O((x - v) / s)) && a("overflow"), v += u * s, p = l <= b ? k : l >= b + _ ? _ : l - b, !(u < p); l += w) h = w - p, s > O(x / h) && a("overflow"), s *= h;
                    t = m.length + 1, b = f(v - i, t, 0 == i), O(v / t) > x - y && a("overflow"), y += O(v / t), v %= t, m.splice(v++, 0, y)
                }
                return c(m)
            }

            function m(e) {
                var t, n, r, o, i, s, l, c, d, h, m, g, v, y, b, C = [];
                for (e = u(e), g = e.length, t = T, n = 0, i = S, s = 0; s < g; ++s) m = e[s], m < 128 && C.push(P(m));
                for (r = o = C.length, o && C.push(A); r < g;) {
                    for (l = x, s = 0; s < g; ++s) m = e[s], m >= t && m < l && (l = m);
                    for (v = r + 1, l - t > O((x - n) / v) && a("overflow"), n += (l - t) * v, t = l, s = 0; s < g; ++s)
                        if (m = e[s], m < t && ++n > x && a("overflow"), m == t) {
                            for (c = n, d = w; h = d <= i ? k : d >= i + _ ? _ : d - i, !(c < h); d += w) b = c - h, y = w - h, C.push(P(p(h + b % y, 0))), c = O(b / y);
                            C.push(P(p(c, 0))), i = f(n, v, r == o), n = 0, ++r
                        }++n, ++t
                }
                return C.join("")
            }

            function g(e) {
                return l(e, function(e) {
                    return M.test(e) ? h(e.slice(4).toLowerCase()) : e
                })
            }

            function v(e) {
                return l(e, function(e) {
                    return L.test(e) ? "xn--" + m(e) : e
                })
            }
            var y = ("object" == typeof t && t && !t.nodeType && t, "object" == typeof e && e && !e.nodeType && e, "object" == typeof o && o);
            y.global !== y && y.window !== y && y.self !== y || (i = y);
            var b, x = 2147483647,
                w = 36,
                k = 1,
                _ = 26,
                C = 38,
                E = 700,
                S = 72,
                T = 128,
                A = "-",
                M = /^xn--/,
                L = /[^\x20-\x7E]/,
                N = /[\x2E\u3002\uFF0E\uFF61]/g,
                D = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                I = w - k,
                O = Math.floor,
                P = String.fromCharCode;
            b = {
                version: "1.4.1",
                ucs2: {
                    decode: u,
                    encode: c
                },
                decode: h,
                encode: m,
                toASCII: v,
                toUnicode: g
            }, r = function() {
                return b
            }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
        }(this)
    }).call(t, n(189)(e), function() {
        return this
    }())
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        options: {
            html: !1,
            xhtmlOut: !1,
            breaks: !1,
            langPrefix: "language-",
            linkify: !1,
            typographer: !1,
            quotes: "“”‘’",
            highlight: null,
            maxNesting: 100
        },
        components: {
            core: {},
            block: {},
            inline: {}
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        options: {
            html: !1,
            xhtmlOut: !1,
            breaks: !1,
            langPrefix: "language-",
            linkify: !1,
            typographer: !1,
            quotes: "“”‘’",
            highlight: null,
            maxNesting: 20
        },
        components: {
            core: {
                rules: ["normalize", "block", "inline"]
            },
            block: {
                rules: ["paragraph"]
            },
            inline: {
                rules: ["text"],
                rules2: ["balance_pairs", "text_collapse"]
            }
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        options: {
            html: !0,
            xhtmlOut: !0,
            breaks: !1,
            langPrefix: "language-",
            linkify: !1,
            typographer: !1,
            quotes: "“”‘’",
            highlight: null,
            maxNesting: 20
        },
        components: {
            core: {
                rules: ["normalize", "block", "inline"]
            },
            block: {
                rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
            },
            inline: {
                rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
                rules2: ["balance_pairs", "emphasis", "text_collapse"]
            }
        }
    }
}, function(e, t, n) {
    ! function(e) {
        "object" == typeof window && window || "object" == typeof self && self;
        e(t)
    }(function(e) {
        function t(e) {
            return e.replace(/[&<>]/gm, function(e) {
                return L[e]
            })
        }

        function n(e) {
            return e.nodeName.toLowerCase()
        }

        function r(e, t) {
            var n = e && e.exec(t);
            return n && 0 === n.index
        }

        function o(e) {
            return E.test(e)
        }

        function i(e) {
            var t, n, r, i, a = e.className + " ";
            if (a += e.parentNode ? e.parentNode.className : "", n = S.exec(a)) return x(n[1]) ? n[1] : "no-highlight";
            for (a = a.split(/\s+/), t = 0, r = a.length; t < r; t++)
                if (i = a[t], o(i) || x(i)) return i
        }

        function a(e, t) {
            var n, r = {};
            for (n in e) r[n] = e[n];
            if (t)
                for (n in t) r[n] = t[n];
            return r
        }

        function s(e) {
            var t = [];
            return function r(e, o) {
                for (var i = e.firstChild; i; i = i.nextSibling) 3 === i.nodeType ? o += i.nodeValue.length : 1 === i.nodeType && (t.push({
                    event: "start",
                    offset: o,
                    node: i
                }), o = r(i, o), n(i).match(/br|hr|img|input/) || t.push({
                    event: "stop",
                    offset: o,
                    node: i
                }));
                return o
            }(e, 0), t
        }

        function l(e, r, o) {
            function i() {
                return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" === r[0].event ? e : r : e.length ? e : r
            }

            function a(e) {
                function r(e) {
                    return " " + e.nodeName + '="' + t(e.value) + '"'
                }
                c += "<" + n(e) + w.map.call(e.attributes, r).join("") + ">"
            }

            function s(e) {
                c += "</" + n(e) + ">"
            }

            function l(e) {
                ("start" === e.event ? a : s)(e.node)
            }
            for (var u = 0, c = "", d = []; e.length || r.length;) {
                var p = i();
                if (c += t(o.substr(u, p[0].offset - u)), u = p[0].offset, p === e) {
                    d.reverse().forEach(s);
                    do l(p.splice(0, 1)[0]), p = i(); while (p === e && p.length && p[0].offset === u);
                    d.reverse().forEach(a)
                } else "start" === p[0].event ? d.push(p[0].node) : d.pop(), l(p.splice(0, 1)[0])
            }
            return c + t(o.substr(u))
        }

        function u(e) {
            function t(e) {
                return e && e.source || e
            }

            function n(n, r) {
                return new RegExp(t(n), "m" + (e.case_insensitive ? "i" : "") + (r ? "g" : ""))
            }

            function r(o, i) {
                if (!o.compiled) {
                    if (o.compiled = !0, o.keywords = o.keywords || o.beginKeywords, o.keywords) {
                        var s = {},
                            l = function(t, n) {
                                e.case_insensitive && (n = n.toLowerCase()), n.split(" ").forEach(function(e) {
                                    var n = e.split("|");
                                    s[n[0]] = [t, n[1] ? Number(n[1]) : 1]
                                })
                            };
                        "string" == typeof o.keywords ? l("keyword", o.keywords) : k(o.keywords).forEach(function(e) {
                            l(e, o.keywords[e])
                        }), o.keywords = s
                    }
                    o.lexemesRe = n(o.lexemes || /\w+/, !0), i && (o.beginKeywords && (o.begin = "\\b(" + o.beginKeywords.split(" ").join("|") + ")\\b"), o.begin || (o.begin = /\B|\b/), o.beginRe = n(o.begin), o.end || o.endsWithParent || (o.end = /\B|\b/), o.end && (o.endRe = n(o.end)), o.terminator_end = t(o.end) || "", o.endsWithParent && i.terminator_end && (o.terminator_end += (o.end ? "|" : "") + i.terminator_end)), o.illegal && (o.illegalRe = n(o.illegal)), null == o.relevance && (o.relevance = 1), o.contains || (o.contains = []);
                    var u = [];
                    o.contains.forEach(function(e) {
                        e.variants ? e.variants.forEach(function(t) {
                            u.push(a(e, t))
                        }) : u.push("self" === e ? o : e)
                    }), o.contains = u, o.contains.forEach(function(e) {
                        r(e, o)
                    }), o.starts && r(o.starts, i);
                    var c = o.contains.map(function(e) {
                        return e.beginKeywords ? "\\.?(" + e.begin + ")\\.?" : e.begin
                    }).concat([o.terminator_end, o.illegal]).map(t).filter(Boolean);
                    o.terminators = c.length ? n(c.join("|"), !0) : {
                        exec: function() {
                            return null
                        }
                    }
                }
            }
            r(e)
        }

        function c(e, n, o, i) {
            function a(e, t) {
                var n, o;
                for (n = 0, o = t.contains.length; n < o; n++)
                    if (r(t.contains[n].beginRe, e)) return t.contains[n]
            }

            function s(e, t) {
                if (r(e.endRe, t)) {
                    for (; e.endsParent && e.parent;) e = e.parent;
                    return e
                }
                if (e.endsWithParent) return s(e.parent, t)
            }

            function l(e, t) {
                return !o && r(t.illegalRe, e)
            }

            function p(e, t) {
                var n = b.case_insensitive ? t[0].toLowerCase() : t[0];
                return e.keywords.hasOwnProperty(n) && e.keywords[n]
            }

            function f(e, t, n, r) {
                var o = r ? "" : M.classPrefix,
                    i = '<span class="' + o,
                    a = n ? "" : A;
                return i += e + '">', i + t + a
            }

            function h() {
                var e, n, r, o;
                if (!k.keywords) return t(S);
                for (o = "", n = 0, k.lexemesRe.lastIndex = 0, r = k.lexemesRe.exec(S); r;) o += t(S.substr(n, r.index - n)), e = p(k, r), e ? (T += e[1], o += f(e[0], t(r[0]))) : o += t(r[0]), n = k.lexemesRe.lastIndex, r = k.lexemesRe.exec(S);
                return o + t(S.substr(n))
            }

            function m() {
                var e = "string" == typeof k.subLanguage;
                if (e && !_[k.subLanguage]) return t(S);
                var n = e ? c(k.subLanguage, S, !0, C[k.subLanguage]) : d(S, k.subLanguage.length ? k.subLanguage : void 0);
                return k.relevance > 0 && (T += n.relevance), e && (C[k.subLanguage] = n.top), f(n.language, n.value, !1, !0)
            }

            function g() {
                E += null != k.subLanguage ? m() : h(), S = ""
            }

            function v(e) {
                E += e.className ? f(e.className, "", !0) : "", k = Object.create(e, {
                    parent: {
                        value: k
                    }
                })
            }

            function y(e, t) {
                if (S += e, null == t) return g(), 0;
                var n = a(t, k);
                if (n) return n.skip ? S += t : (n.excludeBegin && (S += t), g(), n.returnBegin || n.excludeBegin || (S = t)), v(n, t), n.returnBegin ? 0 : t.length;
                var r = s(k, t);
                if (r) {
                    var o = k;
                    o.skip ? S += t : (o.returnEnd || o.excludeEnd || (S += t), g(), o.excludeEnd && (S = t));
                    do k.className && (E += A), k.skip || (T += k.relevance), k = k.parent; while (k !== r.parent);
                    return r.starts && v(r.starts, ""), o.returnEnd ? 0 : t.length
                }
                if (l(t, k)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (k.className || "<unnamed>") + '"');
                return S += t, t.length || 1
            }
            var b = x(e);
            if (!b) throw new Error('Unknown language: "' + e + '"');
            u(b);
            var w, k = i || b,
                C = {},
                E = "";
            for (w = k; w !== b; w = w.parent) w.className && (E = f(w.className, "", !0) + E);
            var S = "",
                T = 0;
            try {
                for (var L, N, D = 0;;) {
                    if (k.terminators.lastIndex = D, L = k.terminators.exec(n), !L) break;
                    N = y(n.substr(D, L.index - D), L[0]), D = L.index + N
                }
                for (y(n.substr(D)), w = k; w.parent; w = w.parent) w.className && (E += A);
                return {
                    relevance: T,
                    value: E,
                    language: e,
                    top: k
                }
            } catch (I) {
                if (I.message && I.message.indexOf("Illegal") !== -1) return {
                    relevance: 0,
                    value: t(n)
                };
                throw I
            }
        }

        function d(e, n) {
            n = n || M.languages || k(_);
            var r = {
                    relevance: 0,
                    value: t(e)
                },
                o = r;
            return n.filter(x).forEach(function(t) {
                var n = c(t, e, !1);
                n.language = t, n.relevance > o.relevance && (o = n), n.relevance > r.relevance && (o = r, r = n)
            }), o.language && (r.second_best = o), r
        }

        function p(e) {
            return M.tabReplace || M.useBR ? e.replace(T, function(e, t) {
                return M.useBR && "\n" === e ? "<br>" : M.tabReplace ? t.replace(/\t/g, M.tabReplace) : void 0
            }) : e
        }

        function f(e, t, n) {
            var r = t ? C[t] : n,
                o = [e.trim()];
            return e.match(/\bhljs\b/) || o.push("hljs"), e.indexOf(r) === -1 && o.push(r), o.join(" ").trim()
        }

        function h(e) {
            var t, n, r, a, u, h = i(e);
            o(h) || (M.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e, u = t.textContent, r = h ? c(h, u, !0) : d(u), n = s(t), n.length && (a = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), a.innerHTML = r.value, r.value = l(n, s(a), u)), r.value = p(r.value), e.innerHTML = r.value, e.className = f(e.className, h, r.language), e.result = {
                language: r.language,
                re: r.relevance
            }, r.second_best && (e.second_best = {
                language: r.second_best.language,
                re: r.second_best.relevance
            }))
        }

        function m(e) {
            M = a(M, e)
        }

        function g() {
            if (!g.called) {
                g.called = !0;
                var e = document.querySelectorAll("pre code");
                w.forEach.call(e, h)
            }
        }

        function v() {
            addEventListener("DOMContentLoaded", g, !1), addEventListener("load", g, !1)
        }

        function y(t, n) {
            var r = _[t] = n(e);
            r.aliases && r.aliases.forEach(function(e) {
                C[e] = t
            })
        }

        function b() {
            return k(_)
        }

        function x(e) {
            return e = (e || "").toLowerCase(), _[e] || _[C[e]]
        }
        var w = [],
            k = Object.keys,
            _ = {},
            C = {},
            E = /^(no-?highlight|plain|text)$/i,
            S = /\blang(?:uage)?-([\w-]+)\b/i,
            T = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            A = "</span>",
            M = {
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: void 0
            },
            L = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            };
        return e.highlight = c, e.highlightAuto = d, e.fixMarkup = p, e.highlightBlock = h, e.configure = m, e.initHighlighting = g, e.initHighlightingOnLoad = v, e.registerLanguage = y, e.listLanguages = b, e.getLanguage = x, e.inherit = a, e.IDENT_RE = "[a-zA-Z]\\w*", e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", e.NUMBER_RE = "\\b\\d+(\\.\\d+)?", e.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BINARY_NUMBER_RE = "\\b(0b[01]+)", e.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BACKSLASH_ESCAPE = {
            begin: "\\\\[\\s\\S]",
            relevance: 0
        }, e.APOS_STRING_MODE = {
            className: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
        }, e.QUOTE_STRING_MODE = {
            className: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
        }, e.PHRASAL_WORDS_MODE = {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
        }, e.COMMENT = function(t, n, r) {
            var o = e.inherit({
                className: "comment",
                begin: t,
                end: n,
                contains: []
            }, r || {});
            return o.contains.push(e.PHRASAL_WORDS_MODE), o.contains.push({
                className: "doctag",
                begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                relevance: 0
            }), o
        }, e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$"), e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/"), e.HASH_COMMENT_MODE = e.COMMENT("#", "$"), e.NUMBER_MODE = {
            className: "number",
            begin: e.NUMBER_RE,
            relevance: 0
        }, e.C_NUMBER_MODE = {
            className: "number",
            begin: e.C_NUMBER_RE,
            relevance: 0
        }, e.BINARY_NUMBER_MODE = {
            className: "number",
            begin: e.BINARY_NUMBER_RE,
            relevance: 0
        }, e.CSS_NUMBER_MODE = {
            className: "number",
            begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
        }, e.REGEXP_MODE = {
            className: "regexp",
            begin: /\//,
            end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [e.BACKSLASH_ESCAPE, {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [e.BACKSLASH_ESCAPE]
            }]
        }, e.TITLE_MODE = {
            className: "title",
            begin: e.IDENT_RE,
            relevance: 0
        }, e.UNDERSCORE_TITLE_MODE = {
            className: "title",
            begin: e.UNDERSCORE_IDENT_RE,
            relevance: 0
        }, e.METHOD_GUARD = {
            begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
            relevance: 0
        }, e
    })
}, function(e, t) {
    "use strict";

    function n(e) {
        e.core.ruler.after("inline", "link-slide-title", function(e) {
            e.tokens.forEach(function(t) {
                if ("inline" === t.type && t.children)
                    for (var n = t.children, o = 0; o < n.length; o++) {
                        var i = n[o];
                        if ("link_open" === i.type) {
                            var a = t.children[o + 1];
                            if ("link_close" === a.type) {
                                var s = i.attrGet("href"),
                                    l = r(e.env.slides, s);
                                if (l) {
                                    var u = l.options.title || l.options.toc,
                                        c = new e.Token("text", "", 0);
                                    c.content = u, n.splice(o + 1, 0, c)
                                }
                            }
                        }
                    }
            })
        })
    }

    function r(e, t) {
        if (0 !== t.indexOf("#/")) return !1;
        var n = t.substr(2);
        if (!isNaN(n) && n >= 0 && n < e.length) return e[n];
        for (var r = 0; r < e.length; r++)
            if (e[r].options.id === n) return e[r];
        return !1
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = n
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = e.renderer.rules.link_open || function(e, t, n, r, o) {
            return o.renderToken(e, t, n)
        };
        e.renderer.rules.link_open = function(e, n, r, o, i) {
            var a = e[n],
                s = a.attrGet("href");
            return "#" !== s.charAt(0) && a.attrSet("target", "_blank"), t(e, n, r, o, i)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = n
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r, e.exports = {
        options: {
            title: "FAQs",
            chapter: "Introduction"
        },
        content: "Got questions about Teach Access and the Teach Access Tutorial? Fire away!\n\n**What is Teach Access?**\n\nTeach Access is a collective of leading tech companies, academic institutions and advocacy organizations working together to embed accessibility into higher education and learning experiences for students of technology.\n\n**What is the Teach Access Tutorial?**\n\nThe Teach Access Tutorial is a hands-on tutorial that covers some best practices for writing accessible software and designing inclusive experiences.\n\n**What assistive technologies can I use with this tutorial?**\n\nThe tutorial should work with most assistive technologies, but Apple's VoiceOver is the recommended desktop screen reader for the training exercises.\n\n**Where can I find more information on accessibility?**\n\nHere are a few resources to get you started:\n- Web Content Accessibility Guidelines: <https://www.w3.org/WAI/intro/wcag>\n- WebAIM: <http://webaim.org/>\n\n**What are some good, free, developer tools for accessibility?**\n\n- WAVE by WebAIM for general website accessibility: <http://wave.webaim.org/>\n- Juicy Studio's Readability Test: \n<http://juicystudio.com/services/readability.php>\n- Vischeck's Color Blindness Checker: <http://www.vischeck.com/>\n\n**Are there jobs in the field of accessibility?**\n\nDefinitely, and the industry is growing. Take a look here: <https://twitter.com/a11yjobs>\n",
        pathHash: "e22b2aea3081574248d2aa2d59f3ea09",
        contentConverter: r
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r, e.exports = {
        options: {
            title: "Introduction",
            chapter: "Writing Code"
        },
        content: "In this section, you'll learn a few key user interface implementation techniques that will ensure you are building experiences that anyone can use. The world of accessibility is vast and diverse, so this tutorial won't cover everything - but it will get you started in the right direction and provide you with some basic best practices for writing accessible software. In addition, while the current examples are web based, many of the principles hold true on mobile and most of the major mobile platforms support robust accessibility APIs. Happy code writing!\n",
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "Headings",
            chapter: "Writing Code",
            style: ".fakeHeading {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0;\n}\n\n.exerslide-slide h3 {\n  margin: 5px;\n}\n",
            layout_data: {
                examples: [{
                    title: "Semantic Heading",
                    description: "The heading below is a real heading and uses an `<h3>` tag. If you are on a\nMac, turn on VoiceOver with <kbd>Cmd</kbd> + <kbd>F5</kbd> and then press\n<kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Cmd</kbd> + <kbd>h</kbd> to jump to\na heading.\n",
                    code: "<h3>A real heading</h3>\n"
                }, {
                    title: "Unsemantic Heading exercise",
                    description: "The heading below is a fake heading made to look like a heading with an\nunsemantic `<div>`. Change the `<div>` below to use an `<h3>` tag. Now verify your semantic heading using the Verify button as well as\nwith VoiceOver.\n",
                    code: '<div class="fakeHeading">\n  A fake heading\n</div>\n',
                    assertion: "assert(\n  dom.querySelector('h3'),\n  \"It doesn't look like you converted the div to a real heading.\"\n);\n"
                }]
            }
        },
        content: "Headings provide structure to a page. A person using a screen reader can\nnavigate a page quickly using headings on the page if the headings used are\nsemantic. Semantic headings include real heading tags such as `h1`, `h2`.\n",
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(t) {
            var n = e.document.createElement("div");
            return n.innerHTML = t, n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(4),
            a = r(i),
            s = n(200),
            l = r(s),
            u = n(204),
            c = r(u),
            d = n(205),
            p = r(d),
            f = n(209),
            h = r(f),
            m = n(210),
            g = r(m),
            v = n(96),
            y = r(v),
            b = n(218),
            x = r(b),
            w = n(226),
            k = r(w);
        n(227), n(228);
        var _ = function(e) {
                function t(e) {
                    (0, c["default"])(this, t);
                    var n = (0, h["default"])(this, (t.__proto__ || (0, l["default"])(t)).call(this, e));
                    return n.state = {
                        code: e.code,
                        assertion: e.assertion && n._makeAssertion(e.assertion),
                        result: {}
                    }, n
                }
                return (0, g["default"])(t, e), (0, p["default"])(t, [{
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.setState({
                            code: e.code,
                            assertion: e.assertion && this._makeAssertion(e.assertion)
                        }), this.state.code !== e.code && this.refs.editor.setValue(e.code)
                    }
                }, {
                    key: "_onChange",
                    value: function(e) {
                        this.setState({
                            code: e
                        })
                    }
                }, {
                    key: "_makeAssertion",
                    value: function(e) {
                        var t = new Function("assert", "source", "dom", e),
                            n = function(e, t) {
                                if (!e) throw console.error(t), new Error(t)
                            };
                        return function(e) {
                            t(n, e, o(e))
                        }
                    }
                }, {
                    key: "_verify",
                    value: function() {
                        var e = this.refs.editor.getValue();
                        if (e) {
                            try {
                                this.state.assertion(e)
                            } catch (t) {
                                return void this.setState({
                                    result: {
                                        error: t.message
                                    }
                                })
                            }
                            this.setState({
                                result: {
                                    success: !0
                                }
                            })
                        } else this.setState({
                            result: {
                                error: "Cannot validate empty input."
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.title,
                            n = e.description;
                        return y["default"].createElement("div", {
                            className: "example"
                        }, t ? y["default"].createElement("h2", null, this.state.assertion ? y["default"].createElement("i", {
                            className: "fa fa-wrench"
                        }, y["default"].createElement("i", {
                            className: "accessible_elem"
                        }, "Wrench Icon")) : null, " ", t) : null, n ? y["default"].createElement(k["default"], {
                            value: n
                        }) : null, this.props.code ? y["default"].createElement("div", {
                            className: "editorWithPreview"
                        }, y["default"].createElement(x["default"], {
                            ref: "editor",
                            mode: "htmlmixed",
                            defaultValue: this.state.code,
                            config: {
                                extraKeys: {
                                    Tab: !1,
                                    "Shift-Tab": !1
                                }
                            },
                            onChange: this._onChange.bind(this)
                        }), y["default"].createElement("div", {
                            className: "preview",
                            "aria-label": "Editor Output",
                            dangerouslySetInnerHTML: {
                                __html: '<h3 class="previewHeading">Editor Output</h3>' + this.state.code
                            },
                            tabIndex: "0"
                        })) : null, this.state.assertion ? y["default"].createElement("div", {
                            className: "verify"
                        }, y["default"].createElement("button", {
                            onClick: this._verify.bind(this),
                            type: "button",
                            className: "button"
                        }, "Verify"), this.state.result.error ? y["default"].createElement("span", {
                            className: "text-danger",
                            role: "alert",
                            tabindex: 0
                        }, " ", this.state.result.error) : null, this.state.result.success ? y["default"].createElement("span", {
                            className: "text-success",
                            role: "alert",
                            tabindex: 0
                        }, " Well done!") : null) : null, this.props.note ? y["default"].createElement("div", {
                            className: "note"
                        }, y["default"].createElement(k["default"], {
                            value: this.props.note
                        })) : null)
                    }
                }]), t
            }(y["default"].Component),
            C = function(e) {
                function t() {
                    return (0, c["default"])(this, t), (0, h["default"])(this, (t.__proto__ || (0, l["default"])(t)).apply(this, arguments))
                }
                return (0, g["default"])(t, e), (0, p["default"])(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "render",
                    value: function(e, t) {
                        var n = this.props,
                            r = n.title,
                            o = n.layoutData.examples,
                            i = n.content;
                        return y["default"].createElement("div", {
                            className: "htmlExercise"
                        }, r, i ? y["default"].createElement(k["default"], {
                            value: i
                        }) : null, o && o.map(function(e, t) {
                            return y["default"].createElement(_, (0, a["default"])({
                                key: t
                            }, e))
                        }))
                    }
                }]), t
            }(y["default"].Component);
        t["default"] = C
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    e.exports = {
        "default": n(201),
        __esModule: !0
    }
}, function(e, t, n) {
    n(202), e.exports = n(10).Object.getPrototypeOf
}, function(e, t, n) {
    var r = n(41),
        o = n(57);
    n(203)("getPrototypeOf", function() {
        return function(e) {
            return o(r(e))
        }
    })
}, function(e, t, n) {
    var r = n(8),
        o = n(10),
        i = n(19);
    e.exports = function(e, t) {
        var n = (o.Object || {})[e] || Object[e],
            a = {};
        a[e] = t(n), r(r.S + r.F * i(function() {
            n(1)
        }), "Object", a)
    }
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t["default"] = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(206),
        i = r(o);
    t["default"] = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i["default"])(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }()
}, function(e, t, n) {
    e.exports = {
        "default": n(207),
        __esModule: !0
    }
}, function(e, t, n) {
    n(208);
    var r = n(10).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function(e, t, n) {
    var r = n(8);
    r(r.S + r.F * !n(18), "Object", {
        defineProperty: n(14).f
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(42),
        i = r(o);
    t["default"] = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, i["default"])(t)) && "function" != typeof t ? e : t
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(211),
        i = r(o),
        a = n(215),
        s = r(a),
        l = n(42),
        u = r(l);
    t["default"] = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, u["default"])(t)));
        e.prototype = (0, s["default"])(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (i["default"] ? (0, i["default"])(e, t) : e.__proto__ = t)
    }
}, function(e, t, n) {
    e.exports = {
        "default": n(212),
        __esModule: !0
    }
}, function(e, t, n) {
    n(213), e.exports = n(10).Object.setPrototypeOf
}, function(e, t, n) {
    var r = n(8);
    r(r.S, "Object", {
        setPrototypeOf: n(214).set
    })
}, function(e, t, n) {
    var r = n(16),
        o = n(15),
        i = function(e, t) {
            if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
            try {
                r = n(11)(Function.call, n(73).f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
            } catch (o) {
                t = !0
            }
            return function(e, n) {
                return i(e, n), t ? e.__proto__ = n : r(e, n), e
            }
        }({}, !1) : void 0),
        check: i
    }
}, function(e, t, n) {
    e.exports = {
        "default": n(216),
        __esModule: !0
    }
}, function(e, t, n) {
    n(217);
    var r = n(10).Object;
    e.exports = function(e, t) {
        return r.create(e, t)
    }
}, function(e, t, n) {
    var r = n(8);
    r(r.S, "Object", {
        create: n(52)
    })
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(4),
            i = r(o),
            a = n(200),
            s = r(a),
            l = n(204),
            u = r(l),
            c = n(205),
            d = r(c),
            p = n(209),
            f = r(p),
            h = n(210),
            m = r(h),
            g = n(96),
            v = r(g),
            y = n(219),
            b = r(y);
        n(220), n(224);
        var x = function(t) {
            function n(e) {
                (0, u["default"])(this, n);
                var t = (0, f["default"])(this, (n.__proto__ || (0, s["default"])(n)).call(this, e));
                return t._toggleEditor = t._toggleEditor.bind(t), t._onChange = t._onChange.bind(t), t.state = {
                    showTextarea: !1
                }, t
            }
            return (0, m["default"])(n, t), (0, d["default"])(n, [{
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.state !== t
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    var n = this.refs.textarea;
                    this.state.showTextarea && !t.showTextarea ? (n.value = this.codeMirror.getValue(), n.focus()) : !this.state.showTextarea && t.showTextarea && (this.codeMirror.setValue(n.value), this.codeMirror.focus())
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    if (this.codeMirror = (0, b["default"])(this.refs.cm, (0, i["default"])({
                            mode: this.props.mode,
                            value: this.props.defaultValue,
                            lineNumbers: !0,
                            inputStyle: "contenteditable"
                        }, this.props.config)), this.codeMirror.getInputField().setAttribute("aria-multiline", "true"), this.props.onChange && this.codeMirror.on("change", this._onChange), e.document.body.addEventListener) {
                        var t = this.codeMirror.getWrapperElement();
                        t.addEventListener("keypress", function(e) {
                            9 === e.keyCode && e.stopPropagation()
                        }, !0)
                    }
                    var n = this.refs.textarea;
                    this.props.onChange && (n.oninput = this._onChange)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    clearTimeout(this.timer)
                }
            }, {
                key: "_onChange",
                value: function() {
                    var e = this;
                    clearTimeout(this.timer), this.timer = setTimeout(function() {
                        return e.props.onChange(e.getValue())
                    }, 200)
                }
            }, {
                key: "_toggleEditor",
                value: function() {
                    this.setState({
                        showTextarea: !this.state.showTextarea
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.showTextarea ? "Use code editor" : "Use simple editor";
                    return v["default"].createElement("div", {
                        className: "editor",
                        role: "region",
                        style: this.props.style,
                        "aria-label": this.props.label
                    }, v["default"].createElement("button", {
                        className: "editor-toggle-button",
                        title: e,
                        "aria-label": e,
                        onClick: this._toggleEditor
                    }, v["default"].createElement("span", {
                        className: "fa fa-exchange"
                    })), v["default"].createElement("textarea", {
                        ref: "textarea",
                        name: "simple editor",
                        className: "CodeMirror",
                        style: {
                            display: this.state.showTextarea ? "block" : "none"
                        },
                        defaultValue: ""
                    }), v["default"].createElement("div", {
                        ref: "cm",
                        style: {
                            display: this.state.showTextarea ? "none" : "block"
                        }
                    }))
                }
            }, {
                key: "reset",
                value: function() {
                    this.codeMirror.setValue(this.props.defaultValue)
                }
            }, {
                key: "getValue",
                value: function() {
                    return this.state.showTextarea ? this.refs.textarea.value : this.codeMirror.getValue()
                }
            }, {
                key: "setValue",
                value: function(e) {
                    this.state.showTextarea ? this.refs.textarea.value = e : this.codeMirror.setValue(e)
                }
            }]), n
        }(v["default"].Component);
        t["default"] = x, x.propTypes = {
            config: v["default"].PropTypes.object,
            defaultValue: v["default"].PropTypes.string,
            mode: v["default"].PropTypes.string,
            readOnly: v["default"].PropTypes.bool,
            onChange: v["default"].PropTypes.func,
            label: v["default"].PropTypes.string,
            style: v["default"].PropTypes.object
        }, x.defaultProps = {
            label: "Editor",
            config: {},
            defaultValue: "",
            readOnly: !1
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    ! function(t) {
        e.exports = t()
    }(function() {
        "use strict";

        function e(n, r) {
            if (!(this instanceof e)) return new e(n, r);
            this.options = r = r ? Bo(r) : {}, Bo(na, r, !1), f(r);
            var o = r.value;
            "string" == typeof o && (o = new Sa(o, r.mode, null, r.lineSeparator)), this.doc = o;
            var i = new e.inputStyles[r.inputStyle](this),
                a = this.display = new t(n, o, i);
            a.wrapper.CodeMirror = this, u(this), s(this), r.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), r.autofocus && !Ni && a.input.focus(), v(this), this.state = {
                keyMaps: [],
                overlays: [],
                modeGen: 0,
                overwrite: !1,
                delayingBlurEvent: !1,
                focused: !1,
                suppressEdits: !1,
                pasteIncoming: !1,
                cutIncoming: !1,
                selectingText: !1,
                draggingText: !1,
                highlight: new Do,
                keySeq: null,
                specialChars: null
            };
            var l = this;
            wi && ki < 11 && setTimeout(function() {
                l.display.input.reset(!0)
            }, 20), Ut(this), Qo(), wt(this), this.curOp.forceUpdate = !0, Xr(this, o), r.autofocus && !Ni || l.hasFocus() ? setTimeout(qo(yn, this), 20) : bn(this);
            for (var c in ra) ra.hasOwnProperty(c) && ra[c](this, r[c], oa);
            k(this), r.finishInit && r.finishInit(this);
            for (var d = 0; d < la.length; ++d) la[d](this);
            _t(this), _i && r.lineWrapping && "optimizelegibility" == getComputedStyle(a.lineDiv).textRendering && (a.lineDiv.style.textRendering = "auto")
        }

        function t(e, t, n) {
            var r = this;
            this.input = n, r.scrollbarFiller = Vo("div", null, "CodeMirror-scrollbar-filler"), r.scrollbarFiller.setAttribute("cm-not-content", "true"), r.gutterFiller = Vo("div", null, "CodeMirror-gutter-filler"), r.gutterFiller.setAttribute("cm-not-content", "true"), r.lineDiv = Vo("div", null, "CodeMirror-code"), r.selectionDiv = Vo("div", null, null, "position: relative; z-index: 1"), r.cursorDiv = Vo("div", null, "CodeMirror-cursors"), r.measure = Vo("div", null, "CodeMirror-measure"), r.lineMeasure = Vo("div", null, "CodeMirror-measure"), r.lineSpace = Vo("div", [r.measure, r.lineMeasure, r.selectionDiv, r.cursorDiv, r.lineDiv], null, "position: relative; outline: none"), r.mover = Vo("div", [Vo("div", [r.lineSpace], "CodeMirror-lines")], null, "position: relative"), r.sizer = Vo("div", [r.mover], "CodeMirror-sizer"), r.sizerWidth = null, r.heightForcer = Vo("div", null, null, "position: absolute; height: " + Fa + "px; width: 1px;"), r.gutters = Vo("div", null, "CodeMirror-gutters"), r.lineGutter = null, r.scroller = Vo("div", [r.sizer, r.heightForcer, r.gutters], "CodeMirror-scroll"), r.scroller.setAttribute("tabIndex", "-1"), r.wrapper = Vo("div", [r.scrollbarFiller, r.gutterFiller, r.scroller], "CodeMirror"), wi && ki < 8 && (r.gutters.style.zIndex = -1, r.scroller.style.paddingRight = 0), _i || yi && Ni || (r.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(r.wrapper) : e(r.wrapper)), r.viewFrom = r.viewTo = t.first, r.reportedViewFrom = r.reportedViewTo = t.first, r.view = [], r.renderedView = null, r.externalMeasured = null, r.viewOffset = 0, r.lastWrapHeight = r.lastWrapWidth = 0, r.updateLineNumbers = null, r.nativeBarWidth = r.barHeight = r.barWidth = 0, r.scrollbarsClipped = !1, r.lineNumWidth = r.lineNumInnerWidth = r.lineNumChars = null, r.alignWidgets = !1, r.cachedCharWidth = r.cachedTextHeight = r.cachedPaddingH = null, r.maxLine = null, r.maxLineLength = 0, r.maxLineChanged = !1, r.wheelDX = r.wheelDY = r.wheelStartX = r.wheelStartY = null, r.shift = !1, r.selForContextMenu = null, r.activeTouch = null, n.init(r)
        }

        function n(t) {
            t.doc.mode = e.getMode(t.options, t.doc.modeOption), r(t)
        }

        function r(e) {
            e.doc.iter(function(e) {
                e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
            }), e.doc.frontier = e.doc.first, We(e, 100), e.state.modeGen++, e.curOp && Rt(e)
        }

        function o(e) {
            e.options.lineWrapping ? (es(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (Ja(e.display.wrapper, "CodeMirror-wrap"), p(e)), a(e), Rt(e), lt(e), setTimeout(function() {
                y(e)
            }, 100)
        }

        function i(e) {
            var t = bt(e.display),
                n = e.options.lineWrapping,
                r = n && Math.max(5, e.display.scroller.clientWidth / xt(e.display) - 3);
            return function(o) {
                if (_r(e.doc, o)) return 0;
                var i = 0;
                if (o.widgets)
                    for (var a = 0; a < o.widgets.length; a++) o.widgets[a].height && (i += o.widgets[a].height);
                return n ? i + (Math.ceil(o.text.length / r) || 1) * t : i + t
            }
        }

        function a(e) {
            var t = e.doc,
                n = i(e);
            t.iter(function(e) {
                var t = n(e);
                t != e.height && to(e, t)
            })
        }

        function s(e) {
            e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
                lt(e)
        }

        function l(e) {
            u(e), Rt(e), setTimeout(function() {
                w(e)
            }, 20)
        }

        function u(e) {
            var t = e.display.gutters,
                n = e.options.gutters;
            Ko(t);
            for (var r = 0; r < n.length; ++r) {
                var o = n[r],
                    i = t.appendChild(Vo("div", null, "CodeMirror-gutter " + o));
                "CodeMirror-linenumbers" == o && (e.display.lineGutter = i, i.style.width = (e.display.lineNumWidth || 1) + "px")
            }
            t.style.display = r ? "" : "none", c(e)
        }

        function c(e) {
            var t = e.display.gutters.offsetWidth;
            e.display.sizer.style.marginLeft = t + "px"
        }

        function d(e) {
            if (0 == e.height) return 0;
            for (var t, n = e.text.length, r = e; t = gr(r);) {
                var o = t.find(0, !0);
                r = o.from.line, n += o.from.ch - o.to.ch
            }
            for (r = e; t = vr(r);) {
                var o = t.find(0, !0);
                n -= r.text.length - o.from.ch, r = o.to.line, n += r.text.length - o.to.ch
            }
            return n
        }

        function p(e) {
            var t = e.display,
                n = e.doc;
            t.maxLine = Qr(n, n.first), t.maxLineLength = d(t.maxLine), t.maxLineChanged = !0, n.iter(function(e) {
                var n = d(e);
                n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
            })
        }

        function f(e) {
            var t = Po(e.gutters, "CodeMirror-linenumbers");
            t == -1 && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
        }

        function h(e) {
            var t = e.display,
                n = t.gutters.offsetWidth,
                r = Math.round(e.doc.height + je(e.display));
            return {
                clientHeight: t.scroller.clientHeight,
                viewHeight: t.wrapper.clientHeight,
                scrollWidth: t.scroller.scrollWidth,
                clientWidth: t.scroller.clientWidth,
                viewWidth: t.wrapper.clientWidth,
                barLeft: e.options.fixedGutter ? n : 0,
                docHeight: r,
                scrollHeight: r + Ke(e) + t.barHeight,
                nativeBarWidth: t.nativeBarWidth,
                gutterWidth: n
            }
        }

        function m(e, t, n) {
            this.cm = n;
            var r = this.vert = Vo("div", [Vo("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                o = this.horiz = Vo("div", [Vo("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
            e(r), e(o), Da(r, "scroll", function() {
                r.clientHeight && t(r.scrollTop, "vertical")
            }), Da(o, "scroll", function() {
                o.clientWidth && t(o.scrollLeft, "horizontal")
            }), this.checkedZeroWidth = !1, wi && ki < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
        }

        function g() {}

        function v(t) {
            t.display.scrollbars && (t.display.scrollbars.clear(), t.display.scrollbars.addClass && Ja(t.display.wrapper, t.display.scrollbars.addClass)), t.display.scrollbars = new e.scrollbarModel[t.options.scrollbarStyle](function(e) {
                t.display.wrapper.insertBefore(e, t.display.scrollbarFiller), Da(e, "mousedown", function() {
                    t.state.focused && setTimeout(function() {
                        t.display.input.focus()
                    }, 0)
                }), e.setAttribute("cm-not-content", "true")
            }, function(e, n) {
                "horizontal" == n ? an(t, e) : on(t, e)
            }, t), t.display.scrollbars.addClass && es(t.display.wrapper, t.display.scrollbars.addClass)
        }

        function y(e, t) {
            t || (t = h(e));
            var n = e.display.barWidth,
                r = e.display.barHeight;
            b(e, t);
            for (var o = 0; o < 4 && n != e.display.barWidth || r != e.display.barHeight; o++) n != e.display.barWidth && e.options.lineWrapping && N(e), b(e, h(e)), n = e.display.barWidth, r = e.display.barHeight
        }

        function b(e, t) {
            var n = e.display,
                r = n.scrollbars.update(t);
            n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
        }

        function x(e, t, n) {
            var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
            r = Math.floor(r - Ue(e));
            var o = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
                i = ro(t, r),
                a = ro(t, o);
            if (n && n.ensure) {
                var s = n.ensure.from.line,
                    l = n.ensure.to.line;
                s < i ? (i = s, a = ro(t, oo(Qr(t, s)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= a && (i = ro(t, oo(Qr(t, l)) - e.wrapper.clientHeight), a = l)
            }
            return {
                from: i,
                to: Math.max(a, i + 1)
            }
        }

        function w(e) {
            var t = e.display,
                n = t.view;
            if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                for (var r = C(t) - t.scroller.scrollLeft + e.doc.scrollLeft, o = t.gutters.offsetWidth, i = r + "px", a = 0; a < n.length; a++)
                    if (!n[a].hidden) {
                        e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = i), n[a].gutterBackground && (n[a].gutterBackground.style.left = i));
                        var s = n[a].alignable;
                        if (s)
                            for (var l = 0; l < s.length; l++) s[l].style.left = i
                    }
                e.options.fixedGutter && (t.gutters.style.left = r + o + "px")
            }
        }

        function k(e) {
            if (!e.options.lineNumbers) return !1;
            var t = e.doc,
                n = _(e.options, t.first + t.size - 1),
                r = e.display;
            if (n.length != r.lineNumChars) {
                var o = r.measure.appendChild(Vo("div", [Vo("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                    i = o.firstChild.offsetWidth,
                    a = o.offsetWidth - i;
                return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(i, r.lineGutter.offsetWidth - a) + 1, r.lineNumWidth = r.lineNumInnerWidth + a, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", c(e), !0
            }
            return !1
        }

        function _(e, t) {
            return String(e.lineNumberFormatter(t + e.firstLineNumber))
        }

        function C(e) {
            return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
        }

        function E(e, t, n) {
            var r = e.display;
            this.viewport = t, this.visible = x(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Ge(e), this.force = n, this.dims = I(e), this.events = []
        }

        function S(e) {
            var t = e.display;
            !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Ke(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Ke(e) + "px", t.scrollbarsClipped = !0)
        }

        function T(e, t) {
            var n = e.display,
                r = e.doc;
            if (t.editorIsHidden) return zt(e), !1;
            if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == Ht(e)) return !1;
            k(e) && (zt(e), t.dims = I(e));
            var o = r.first + r.size,
                i = Math.max(t.visible.from - e.options.viewportMargin, r.first),
                a = Math.min(o, t.visible.to + e.options.viewportMargin);
            n.viewFrom < i && i - n.viewFrom < 20 && (i = Math.max(r.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(o, n.viewTo)), Wi && (i = wr(e.doc, i), a = kr(e.doc, a));
            var s = i != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
            qt(e, i, a), n.viewOffset = oo(Qr(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
            var l = Ht(e);
            if (!s && 0 == l && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;
            var u = Yo();
            return l > 4 && (n.lineDiv.style.display = "none"), O(e, n.updateLineNumbers, t.dims), l > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, u && Yo() != u && u.offsetHeight && u.focus(), Ko(n.cursorDiv), Ko(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, s && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, We(e, 400)), n.updateLineNumbers = null, !0
        }

        function A(e, t) {
            for (var n = t.viewport, r = !0;
                (r && e.options.lineWrapping && t.oldDisplayWidth != Ge(e) || (n && null != n.top && (n = {
                    top: Math.min(e.doc.height + je(e.display) - Ye(e), n.top)
                }), t.visible = x(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && T(e, t); r = !1) {
                N(e);
                var o = h(e);
                Oe(e), y(e, o), L(e, o)
            }
            t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
        }

        function M(e, t) {
            var n = new E(e, t);
            if (T(e, n)) {
                N(e), A(e, n);
                var r = h(e);
                Oe(e), y(e, r), L(e, r), n.finish()
            }
        }

        function L(e, t) {
            e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Ke(e) + "px"
        }

        function N(e) {
            for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
                var o, i = t.view[r];
                if (!i.hidden) {
                    if (wi && ki < 8) {
                        var a = i.node.offsetTop + i.node.offsetHeight;
                        o = a - n, n = a
                    } else {
                        var s = i.node.getBoundingClientRect();
                        o = s.bottom - s.top
                    }
                    var l = i.line.height - o;
                    if (o < 2 && (o = bt(t)), (l > .001 || l < -.001) && (to(i.line, o), D(i.line), i.rest))
                        for (var u = 0; u < i.rest.length; u++) D(i.rest[u])
                }
            }
        }

        function D(e) {
            if (e.widgets)
                for (var t = 0; t < e.widgets.length; ++t) e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight
        }

        function I(e) {
            for (var t = e.display, n = {}, r = {}, o = t.gutters.clientLeft, i = t.gutters.firstChild, a = 0; i; i = i.nextSibling, ++a) n[e.options.gutters[a]] = i.offsetLeft + i.clientLeft + o, r[e.options.gutters[a]] = i.clientWidth;
            return {
                fixedPos: C(t),
                gutterTotalWidth: t.gutters.offsetWidth,
                gutterLeft: n,
                gutterWidth: r,
                wrapperWidth: t.wrapper.clientWidth
            }
        }

        function O(e, t, n) {
            function r(t) {
                var n = t.nextSibling;
                return _i && Di && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n
            }
            for (var o = e.display, i = e.options.lineNumbers, a = o.lineDiv, s = a.firstChild, l = o.view, u = o.viewFrom, c = 0; c < l.length; c++) {
                var d = l[c];
                if (d.hidden);
                else if (d.node && d.node.parentNode == a) {
                    for (; s != d.node;) s = r(s);
                    var p = i && null != t && t <= u && d.lineNumber;
                    d.changes && (Po(d.changes, "gutter") > -1 && (p = !1), P(e, d, u, n)), p && (Ko(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(_(e.options, u)))), s = d.node.nextSibling
                } else {
                    var f = U(e, d, u, n);
                    a.insertBefore(f, s)
                }
                u += d.size
            }
            for (; s;) s = r(s)
        }

        function P(e, t, n, r) {
            for (var o = 0; o < t.changes.length; o++) {
                var i = t.changes[o];
                "text" == i ? W(e, t) : "gutter" == i ? q(e, t, n, r) : "class" == i ? B(t) : "widget" == i && H(e, t, r)
            }
            t.changes = null
        }

        function R(e) {
            return e.node == e.text && (e.node = Vo("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), wi && ki < 8 && (e.node.style.zIndex = 2)), e.node
        }

        function F(e) {
            var t = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
            if (t && (t += " CodeMirror-linebackground"), e.background) t ? e.background.className = t : (e.background.parentNode.removeChild(e.background), e.background = null);
            else if (t) {
                var n = R(e);
                e.background = n.insertBefore(Vo("div", null, t), n.firstChild)
            }
        }

        function z(e, t) {
            var n = e.display.externalMeasured;
            return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : Wr(e, t)
        }

        function W(e, t) {
            var n = t.text.className,
                r = z(e, t);
            t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, B(t)) : n && (t.text.className = n)
        }

        function B(e) {
            F(e), e.line.wrapClass ? R(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
            var t = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
            e.text.className = t || ""
        }

        function q(e, t, n, r) {
            if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                var o = R(t);
                t.gutterBackground = Vo("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), o.insertBefore(t.gutterBackground, t.text)
            }
            var i = t.line.gutterMarkers;
            if (e.options.lineNumbers || i) {
                var o = R(t),
                    a = t.gutter = Vo("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
                if (e.display.input.setUneditable(a), o.insertBefore(a, t.text), t.line.gutterClass && (a.className += " " + t.line.gutterClass), !e.options.lineNumbers || i && i["CodeMirror-linenumbers"] || (t.lineNumber = a.appendChild(Vo("div", _(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), i)
                    for (var s = 0; s < e.options.gutters.length; ++s) {
                        var l = e.options.gutters[s],
                            u = i.hasOwnProperty(l) && i[l];
                        u && a.appendChild(Vo("div", [u], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[l] + "px; width: " + r.gutterWidth[l] + "px"))
                    }
            }
        }

        function H(e, t, n) {
            t.alignable && (t.alignable = null);
            for (var r, o = t.node.firstChild; o; o = r) {
                var r = o.nextSibling;
                "CodeMirror-linewidget" == o.className && t.node.removeChild(o)
            }
            j(e, t, n)
        }

        function U(e, t, n, r) {
            var o = z(e, t);
            return t.text = t.node = o.pre, o.bgClass && (t.bgClass = o.bgClass), o.textClass && (t.textClass = o.textClass), B(t), q(e, t, n, r), j(e, t, r), t.node
        }

        function j(e, t, n) {
            if (V(e, t.line, t, n, !0), t.rest)
                for (var r = 0; r < t.rest.length; r++) V(e, t.rest[r], t, n, !1)
        }

        function V(e, t, n, r, o) {
            if (t.widgets)
                for (var i = R(n), a = 0, s = t.widgets; a < s.length; ++a) {
                    var l = s[a],
                        u = Vo("div", [l.node], "CodeMirror-linewidget");
                    l.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), K(l, u, n, r), e.display.input.setUneditable(u), o && l.above ? i.insertBefore(u, n.gutter || n.text) : i.appendChild(u), So(l, "redraw")
                }
        }

        function K(e, t, n, r) {
            if (e.noHScroll) {
                (n.alignable || (n.alignable = [])).push(t);
                var o = r.wrapperWidth;
                t.style.left = r.fixedPos + "px", e.coverGutter || (o -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = o + "px"
            }
            e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
        }

        function G(e) {
            return Bi(e.line, e.ch)
        }

        function Y(e, t) {
            return qi(e, t) < 0 ? t : e
        }

        function $(e, t) {
            return qi(e, t) < 0 ? e : t
        }

        function Z(e) {
            e.state.focused || (e.display.input.focus(), yn(e))
        }

        function X(e, t, n, r, o) {
            var i = e.doc;
            e.display.shift = !1, r || (r = i.sel);
            var a = e.state.pasteIncoming || "paste" == o,
                s = i.splitLines(t),
                l = null;
            if (a && r.ranges.length > 1)
                if (Hi && Hi.text.join("\n") == t) {
                    if (r.ranges.length % Hi.text.length == 0) {
                        l = [];
                        for (var u = 0; u < Hi.text.length; u++) l.push(i.splitLines(Hi.text[u]))
                    }
                } else s.length == r.ranges.length && (l = Ro(s, function(e) {
                    return [e]
                }));
            for (var u = r.ranges.length - 1; u >= 0; u--) {
                var c = r.ranges[u],
                    d = c.from(),
                    p = c.to();
                c.empty() && (n && n > 0 ? d = Bi(d.line, d.ch - n) : e.state.overwrite && !a ? p = Bi(p.line, Math.min(Qr(i, p.line).text.length, p.ch + Oo(s).length)) : Hi && Hi.lineWise && Hi.text.join("\n") == t && (d = p = Bi(d.line, 0)));
                var f = e.curOp.updateInput,
                    h = {
                        from: d,
                        to: p,
                        text: l ? l[u % l.length] : s,
                        origin: o || (a ? "paste" : e.state.cutIncoming ? "cut" : "+input")
                    };
                Tn(e.doc, h), So(e, "inputRead", e, h)
            }
            t && !a && J(e, t), Wn(e), e.curOp.updateInput = f, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
        }

        function Q(e, t) {
            var n = e.clipboardData && e.clipboardData.getData("Text");
            if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Lt(t, function() {
                X(t, n, 0, null, "paste")
            }), !0
        }

        function J(e, t) {
            if (e.options.electricChars && e.options.smartIndent)
                for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                    var o = n.ranges[r];
                    if (!(o.head.ch > 100 || r && n.ranges[r - 1].head.line == o.head.line)) {
                        var i = e.getModeAt(o.head),
                            a = !1;
                        if (i.electricChars) {
                            for (var s = 0; s < i.electricChars.length; s++)
                                if (t.indexOf(i.electricChars.charAt(s)) > -1) {
                                    a = qn(e, o.head.line, "smart");
                                    break
                                }
                        } else i.electricInput && i.electricInput.test(Qr(e.doc, o.head.line).text.slice(0, o.head.ch)) && (a = qn(e, o.head.line, "smart"));
                        a && So(e, "electricInput", e, o.head.line)
                    }
                }
        }

        function ee(e) {
            for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
                var o = e.doc.sel.ranges[r].head.line,
                    i = {
                        anchor: Bi(o, 0),
                        head: Bi(o + 1, 0)
                    };
                n.push(i), t.push(e.getRange(i.anchor, i.head))
            }
            return {
                text: t,
                ranges: n
            }
        }

        function te(e, t) {
            e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !!t)
        }

        function ne(e) {
            this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Do, this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null
        }

        function re() {
            var e = Vo("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                t = Vo("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
            return _i ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), Li && (e.style.border = "1px solid black"), te(e), t
        }

        function oe(e) {
            this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Do, this.gracePeriod = !1
        }

        function ie(e, t) {
            var n = Je(e, t.line);
            if (!n || n.hidden) return null;
            var r = Qr(e.doc, t.line),
                o = Ze(n, r, t.line),
                i = io(r),
                a = "left";
            if (i) {
                var s = pi(i, t.ch);
                a = s % 2 ? "right" : "left"
            }
            var l = nt(o.map, t.ch, a);
            return l.offset = "right" == l.collapse ? l.end : l.start, l
        }

        function ae(e, t) {
            return t && (e.bad = !0), e
        }

        function se(e, t, n) {
            var r;
            if (t == e.display.lineDiv) {
                if (r = e.display.lineDiv.childNodes[n], !r) return ae(e.clipPos(Bi(e.display.viewTo - 1)), !0);
                t = null, n = 0
            } else
                for (r = t;; r = r.parentNode) {
                    if (!r || r == e.display.lineDiv) return null;
                    if (r.parentNode && r.parentNode == e.display.lineDiv) break
                }
            for (var o = 0; o < e.display.view.length; o++) {
                var i = e.display.view[o];
                if (i.node == r) return le(i, t, n)
            }
        }

        function le(e, t, n) {
            function r(t, n, r) {
                for (var o = -1; o < (c ? c.length : 0); o++)
                    for (var i = o < 0 ? u.map : c[o], a = 0; a < i.length; a += 3) {
                        var s = i[a + 2];
                        if (s == t || s == n) {
                            var l = no(o < 0 ? e.line : e.rest[o]),
                                d = i[a] + r;
                            return (r < 0 || s != t) && (d = i[a + (r ? 1 : 0)]), Bi(l, d)
                        }
                    }
            }
            var o = e.text.firstChild,
                i = !1;
            if (!t || !Za(o, t)) return ae(Bi(no(e.line), 0), !0);
            if (t == o && (i = !0, t = o.childNodes[n], n = 0, !t)) {
                var a = e.rest ? Oo(e.rest) : e.line;
                return ae(Bi(no(a), a.text.length), i)
            }
            var s = 3 == t.nodeType ? t : null,
                l = t;
            for (s || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (s = t.firstChild, n && (n = s.nodeValue.length)); l.parentNode != o;) l = l.parentNode;
            var u = e.measure,
                c = u.maps,
                d = r(s, l, n);
            if (d) return ae(d, i);
            for (var p = l.nextSibling, f = s ? s.nodeValue.length - n : 0; p; p = p.nextSibling) {
                if (d = r(p, p.firstChild, 0)) return ae(Bi(d.line, d.ch - f), i);
                f += p.textContent.length
            }
            for (var h = l.previousSibling, f = n; h; h = h.previousSibling) {
                if (d = r(h, h.firstChild, -1)) return ae(Bi(d.line, d.ch + f), i);
                f += h.textContent.length
            }
        }

        function ue(e, t, n, r, o) {
            function i(e) {
                return function(t) {
                    return t.id == e
                }
            }

            function a(t) {
                if (1 == t.nodeType) {
                    var n = t.getAttribute("cm-text");
                    if (null != n) return "" == n && (n = t.textContent.replace(/\u200b/g, "")), void(s += n);
                    var c, d = t.getAttribute("cm-marker");
                    if (d) {
                        var p = e.findMarks(Bi(r, 0), Bi(o + 1, 0), i(+d));
                        return void(p.length && (c = p[0].find()) && (s += Jr(e.doc, c.from, c.to).join(u)))
                    }
                    if ("false" == t.getAttribute("contenteditable")) return;
                    for (var f = 0; f < t.childNodes.length; f++) a(t.childNodes[f]);
                    /^(pre|div|p)$/i.test(t.nodeName) && (l = !0)
                } else if (3 == t.nodeType) {
                    var h = t.nodeValue;
                    if (!h) return;
                    l && (s += u, l = !1), s += h
                }
            }
            for (var s = "", l = !1, u = e.doc.lineSeparator(); a(t), t != n;) t = t.nextSibling;
            return s
        }

        function ce(e, t) {
            this.ranges = e, this.primIndex = t
        }

        function de(e, t) {
            this.anchor = e, this.head = t
        }

        function pe(e, t) {
            var n = e[t];
            e.sort(function(e, t) {
                return qi(e.from(), t.from())
            }), t = Po(e, n);
            for (var r = 1; r < e.length; r++) {
                var o = e[r],
                    i = e[r - 1];
                if (qi(i.to(), o.from()) >= 0) {
                    var a = $(i.from(), o.from()),
                        s = Y(i.to(), o.to()),
                        l = i.empty() ? o.from() == o.head : i.from() == i.head;
                    r <= t && --t, e.splice(--r, 2, new de(l ? s : a, l ? a : s))
                }
            }
            return new ce(e, t)
        }

        function fe(e, t) {
            return new ce([new de(e, t || e)], 0)
        }

        function he(e, t) {
            return Math.max(e.first, Math.min(t, e.first + e.size - 1))
        }

        function me(e, t) {
            if (t.line < e.first) return Bi(e.first, 0);
            var n = e.first + e.size - 1;
            return t.line > n ? Bi(n, Qr(e, n).text.length) : ge(t, Qr(e, t.line).text.length)
        }

        function ge(e, t) {
            var n = e.ch;
            return null == n || n > t ? Bi(e.line, t) : n < 0 ? Bi(e.line, 0) : e
        }

        function ve(e, t) {
            return t >= e.first && t < e.first + e.size
        }

        function ye(e, t) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = me(e, t[r]);
            return n
        }

        function be(e, t, n, r) {
            if (e.cm && e.cm.display.shift || e.extend) {
                var o = t.anchor;
                if (r) {
                    var i = qi(n, o) < 0;
                    i != qi(r, o) < 0 ? (o = n, n = r) : i != qi(n, r) < 0 && (n = r)
                }
                return new de(o, n)
            }
            return new de(r || n, n)
        }

        function xe(e, t, n, r) {
            Se(e, new ce([be(e, e.sel.primary(), t, n)], 0), r)
        }

        function we(e, t, n) {
            for (var r = [], o = 0; o < e.sel.ranges.length; o++) r[o] = be(e, e.sel.ranges[o], t[o], null);
            var i = pe(r, e.sel.primIndex);
            Se(e, i, n)
        }

        function ke(e, t, n, r) {
            var o = e.sel.ranges.slice(0);
            o[t] = n, Se(e, pe(o, e.sel.primIndex), r)
        }

        function _e(e, t, n, r) {
            Se(e, fe(t, n), r)
        }

        function Ce(e, t, n) {
            var r = {
                ranges: t.ranges,
                update: function(t) {
                    this.ranges = [];
                    for (var n = 0; n < t.length; n++) this.ranges[n] = new de(me(e, t[n].anchor), me(e, t[n].head))
                },
                origin: n && n.origin
            };
            return Pa(e, "beforeSelectionChange", e, r), e.cm && Pa(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? pe(r.ranges, r.ranges.length - 1) : t
        }

        function Ee(e, t, n) {
            var r = e.history.done,
                o = Oo(r);
            o && o.ranges ? (r[r.length - 1] = t, Te(e, t, n)) : Se(e, t, n)
        }

        function Se(e, t, n) {
            Te(e, t, n), fo(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
        }

        function Te(e, t, n) {
            (Lo(e, "beforeSelectionChange") || e.cm && Lo(e.cm, "beforeSelectionChange")) && (t = Ce(e, t, n));
            var r = n && n.bias || (qi(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
            Ae(e, Le(e, t, r, !0)), n && n.scroll === !1 || !e.cm || Wn(e.cm)
        }

        function Ae(e, t) {
            t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, Mo(e.cm)), So(e, "cursorActivity", e))
        }

        function Me(e) {
            Ae(e, Le(e, e.sel, null, !1), Wa)
        }

        function Le(e, t, n, r) {
            for (var o, i = 0; i < t.ranges.length; i++) {
                var a = t.ranges[i],
                    s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[i],
                    l = De(e, a.anchor, s && s.anchor, n, r),
                    u = De(e, a.head, s && s.head, n, r);
                (o || l != a.anchor || u != a.head) && (o || (o = t.ranges.slice(0, i)), o[i] = new de(l, u))
            }
            return o ? pe(o, t.primIndex) : t
        }

        function Ne(e, t, n, r, o) {
            var i = Qr(e, t.line);
            if (i.markedSpans)
                for (var a = 0; a < i.markedSpans.length; ++a) {
                    var s = i.markedSpans[a],
                        l = s.marker;
                    if ((null == s.from || (l.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (l.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) {
                        if (o && (Pa(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                            if (i.markedSpans) {
                                --a;
                                continue
                            }
                            break
                        }
                        if (!l.atomic) continue;
                        if (n) {
                            var u, c = l.find(r < 0 ? 1 : -1);
                            if ((r < 0 ? l.inclusiveRight : l.inclusiveLeft) && (c = Ie(e, c, -r, c && c.line == t.line ? i : null)), c && c.line == t.line && (u = qi(c, n)) && (r < 0 ? u < 0 : u > 0)) return Ne(e, c, t, r, o)
                        }
                        var d = l.find(r < 0 ? -1 : 1);
                        return (r < 0 ? l.inclusiveLeft : l.inclusiveRight) && (d = Ie(e, d, r, d.line == t.line ? i : null)), d ? Ne(e, d, t, r, o) : null
                    }
                }
            return t
        }

        function De(e, t, n, r, o) {
            var i = r || 1,
                a = Ne(e, t, n, i, o) || !o && Ne(e, t, n, i, !0) || Ne(e, t, n, -i, o) || !o && Ne(e, t, n, -i, !0);
            return a ? a : (e.cantEdit = !0, Bi(e.first, 0))
        }

        function Ie(e, t, n, r) {
            return n < 0 && 0 == t.ch ? t.line > e.first ? me(e, Bi(t.line - 1)) : null : n > 0 && t.ch == (r || Qr(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? Bi(t.line + 1, 0) : null : new Bi(t.line, t.ch + n)
        }

        function Oe(e) {
            e.display.input.showSelection(e.display.input.prepareSelection())
        }

        function Pe(e, t) {
            for (var n = e.doc, r = {}, o = r.cursors = document.createDocumentFragment(), i = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++)
                if (t !== !1 || a != n.sel.primIndex) {
                    var s = n.sel.ranges[a];
                    if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                        var l = s.empty();
                        (l || e.options.showCursorWhenSelecting) && Re(e, s.head, o), l || Fe(e, s, i)
                    }
                }
            return r
        }

        function Re(e, t, n) {
            var r = ht(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                o = n.appendChild(Vo("div", " ", "CodeMirror-cursor"));
            if (o.style.left = r.left + "px", o.style.top = r.top + "px", o.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
                var i = n.appendChild(Vo("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                i.style.display = "", i.style.left = r.other.left + "px", i.style.top = r.other.top + "px", i.style.height = .85 * (r.other.bottom - r.other.top) + "px"
            }
        }

        function Fe(e, t, n) {
            function r(e, t, n, r) {
                t < 0 && (t = 0), t = Math.round(t), r = Math.round(r), s.appendChild(Vo("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (null == n ? c - e : n) + "px; height: " + (r - t) + "px"))
            }

            function o(t, n, o) {
                function i(n, r) {
                    return ft(e, Bi(t, n), "div", d, r)
                }
                var s, l, d = Qr(a, t),
                    p = d.text.length;
                return ri(io(d), n || 0, null == o ? p : o, function(e, t, a) {
                    var d, f, h, m = i(e, "left");
                    if (e == t) d = m, f = h = m.left;
                    else {
                        if (d = i(t - 1, "right"), "rtl" == a) {
                            var g = m;
                            m = d, d = g
                        }
                        f = m.left, h = d.right
                    }
                    null == n && 0 == e && (f = u), d.top - m.top > 3 && (r(f, m.top, null, m.bottom), f = u, m.bottom < d.top && r(f, m.bottom, null, d.top)), null == o && t == p && (h = c), (!s || m.top < s.top || m.top == s.top && m.left < s.left) && (s = m), (!l || d.bottom > l.bottom || d.bottom == l.bottom && d.right > l.right) && (l = d), f < u + 1 && (f = u), r(f, d.top, h - f, d.bottom)
                }), {
                    start: s,
                    end: l
                }
            }
            var i = e.display,
                a = e.doc,
                s = document.createDocumentFragment(),
                l = Ve(e.display),
                u = l.left,
                c = Math.max(i.sizerWidth, Ge(e) - i.sizer.offsetLeft) - l.right,
                d = t.from(),
                p = t.to();
            if (d.line == p.line) o(d.line, d.ch, p.ch);
            else {
                var f = Qr(a, d.line),
                    h = Qr(a, p.line),
                    m = br(f) == br(h),
                    g = o(d.line, d.ch, m ? f.text.length + 1 : null).end,
                    v = o(p.line, m ? 0 : null, p.ch).start;
                m && (g.top < v.top - 2 ? (r(g.right, g.top, null, g.bottom), r(u, v.top, v.left, v.bottom)) : r(g.right, g.top, v.left - g.right, g.bottom)), g.bottom < v.top && r(u, g.bottom, null, v.top)
            }
            n.appendChild(s)
        }

        function ze(e) {
            if (e.state.focused) {
                var t = e.display;
                clearInterval(t.blinker);
                var n = !0;
                t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
                    t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
            }
        }

        function We(e, t) {
            e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, qo(Be, e))
        }

        function Be(e) {
            var t = e.doc;
            if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.viewTo)) {
                var n = +new Date + e.options.workTime,
                    r = ca(t.mode, He(e, t.frontier)),
                    o = [];
                t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500), function(i) {
                    if (t.frontier >= e.display.viewFrom) {
                        var a = i.styles,
                            s = i.text.length > e.options.maxHighlightLength,
                            l = Pr(e, i, s ? ca(t.mode, r) : r, !0);
                        i.styles = l.styles;
                        var u = i.styleClasses,
                            c = l.classes;
                        c ? i.styleClasses = c : u && (i.styleClasses = null);
                        for (var d = !a || a.length != i.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), p = 0; !d && p < a.length; ++p) d = a[p] != i.styles[p];
                        d && o.push(t.frontier), i.stateAfter = s ? r : ca(t.mode, r)
                    } else i.text.length <= e.options.maxHighlightLength && Fr(e, i.text, r), i.stateAfter = t.frontier % 5 == 0 ? ca(t.mode, r) : null;
                    if (++t.frontier, +new Date > n) return We(e, e.options.workDelay), !0
                }), o.length && Lt(e, function() {
                    for (var t = 0; t < o.length; t++) Ft(e, o[t], "text")
                })
            }
        }

        function qe(e, t, n) {
            for (var r, o, i = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
                if (s <= i.first) return i.first;
                var l = Qr(i, s - 1);
                if (l.stateAfter && (!n || s <= i.frontier)) return s;
                var u = Ha(l.text, null, e.options.tabSize);
                (null == o || r > u) && (o = s - 1, r = u)
            }
            return o
        }

        function He(e, t, n) {
            var r = e.doc,
                o = e.display;
            if (!r.mode.startState) return !0;
            var i = qe(e, t, n),
                a = i > r.first && Qr(r, i - 1).stateAfter;
            return a = a ? ca(r.mode, a) : da(r.mode), r.iter(i, t, function(n) {
                Fr(e, n.text, a);
                var s = i == t - 1 || i % 5 == 0 || i >= o.viewFrom && i < o.viewTo;
                n.stateAfter = s ? ca(r.mode, a) : null, ++i
            }), n && (r.frontier = i), a
        }

        function Ue(e) {
            return e.lineSpace.offsetTop
        }

        function je(e) {
            return e.mover.offsetHeight - e.lineSpace.offsetHeight
        }

        function Ve(e) {
            if (e.cachedPaddingH) return e.cachedPaddingH;
            var t = Go(e.measure, Vo("pre", "x")),
                n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                r = {
                    left: parseInt(n.paddingLeft),
                    right: parseInt(n.paddingRight)
                };
            return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r
        }

        function Ke(e) {
            return Fa - e.display.nativeBarWidth
        }

        function Ge(e) {
            return e.display.scroller.clientWidth - Ke(e) - e.display.barWidth
        }

        function Ye(e) {
            return e.display.scroller.clientHeight - Ke(e) - e.display.barHeight
        }

        function $e(e, t, n) {
            var r = e.options.lineWrapping,
                o = r && Ge(e);
            if (!t.measure.heights || r && t.measure.width != o) {
                var i = t.measure.heights = [];
                if (r) {
                    t.measure.width = o;
                    for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                        var l = a[s],
                            u = a[s + 1];
                        Math.abs(l.bottom - u.bottom) > 2 && i.push((l.bottom + u.top) / 2 - n.top)
                    }
                }
                i.push(n.bottom - n.top)
            }
        }

        function Ze(e, t, n) {
            if (e.line == t) return {
                map: e.measure.map,
                cache: e.measure.cache
            };
            for (var r = 0; r < e.rest.length; r++)
                if (e.rest[r] == t) return {
                    map: e.measure.maps[r],
                    cache: e.measure.caches[r]
                };
            for (var r = 0; r < e.rest.length; r++)
                if (no(e.rest[r]) > n) return {
                    map: e.measure.maps[r],
                    cache: e.measure.caches[r],
                    before: !0
                }
        }

        function Xe(e, t) {
            t = br(t);
            var n = no(t),
                r = e.display.externalMeasured = new Ot(e.doc, t, n);
            r.lineN = n;
            var o = r.built = Wr(e, r);
            return r.text = o.pre, Go(e.display.lineMeasure, o.pre), r
        }

        function Qe(e, t, n, r) {
            return tt(e, et(e, t), n, r)
        }

        function Je(e, t) {
            if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Wt(e, t)];
            var n = e.display.externalMeasured;
            return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
        }

        function et(e, t) {
            var n = no(t),
                r = Je(e, n);
            r && !r.text ? r = null : r && r.changes && (P(e, r, n, I(e)), e.curOp.forceUpdate = !0), r || (r = Xe(e, t));
            var o = Ze(r, t, n);
            return {
                line: t,
                view: r,
                rect: null,
                map: o.map,
                cache: o.cache,
                before: o.before,
                hasHeights: !1
            }
        }

        function tt(e, t, n, r, o) {
            t.before && (n = -1);
            var i, a = n + (r || "");
            return t.cache.hasOwnProperty(a) ? i = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || ($e(e, t.view, t.rect), t.hasHeights = !0), i = ot(e, t, n, r), i.bogus || (t.cache[a] = i)), {
                left: i.left,
                right: i.right,
                top: o ? i.rtop : i.top,
                bottom: o ? i.rbottom : i.bottom
            }
        }

        function nt(e, t, n) {
            for (var r, o, i, a, s = 0; s < e.length; s += 3) {
                var l = e[s],
                    u = e[s + 1];
                if (t < l ? (o = 0, i = 1, a = "left") : t < u ? (o = t - l, i = o + 1) : (s == e.length - 3 || t == u && e[s + 3] > t) && (i = u - l, o = i - 1, t >= u && (a = "right")), null != o) {
                    if (r = e[s + 2], l == u && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == o)
                        for (; s && e[s - 2] == e[s - 3] && e[s - 1].insertLeft;) r = e[(s -= 3) + 2], a = "left";
                    if ("right" == n && o == u - l)
                        for (; s < e.length - 3 && e[s + 3] == e[s + 4] && !e[s + 5].insertLeft;) r = e[(s += 3) + 2], a = "right";
                    break
                }
            }
            return {
                node: r,
                start: o,
                end: i,
                collapse: a,
                coverStart: l,
                coverEnd: u
            }
        }

        function rt(e, t) {
            var n = Ki;
            if ("left" == t)
                for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
            else
                for (var r = e.length - 1; r >= 0 && (n = e[r]).left == n.right; r--);
            return n
        }

        function ot(e, t, n, r) {
            var o, i = nt(t.map, n, r),
                a = i.node,
                s = i.start,
                l = i.end,
                u = i.collapse;
            if (3 == a.nodeType) {
                for (var c = 0; c < 4; c++) {
                    for (; s && jo(t.line.text.charAt(i.coverStart + s));) --s;
                    for (; i.coverStart + l < i.coverEnd && jo(t.line.text.charAt(i.coverStart + l));) ++l;
                    if (o = wi && ki < 9 && 0 == s && l == i.coverEnd - i.coverStart ? a.parentNode.getBoundingClientRect() : rt(Ka(a, s, l).getClientRects(), r), o.left || o.right || 0 == s) break;
                    l = s, s -= 1, u = "right"
                }
                wi && ki < 11 && (o = it(e.display.measure, o))
            } else {
                s > 0 && (u = r = "right");
                var d;
                o = e.options.lineWrapping && (d = a.getClientRects()).length > 1 ? d["right" == r ? d.length - 1 : 0] : a.getBoundingClientRect()
            }
            if (wi && ki < 9 && !s && (!o || !o.left && !o.right)) {
                var p = a.parentNode.getClientRects()[0];
                o = p ? {
                    left: p.left,
                    right: p.left + xt(e.display),
                    top: p.top,
                    bottom: p.bottom
                } : Ki
            }
            for (var f = o.top - t.rect.top, h = o.bottom - t.rect.top, m = (f + h) / 2, g = t.view.measure.heights, c = 0; c < g.length - 1 && !(m < g[c]); c++);
            var v = c ? g[c - 1] : 0,
                y = g[c],
                b = {
                    left: ("right" == u ? o.right : o.left) - t.rect.left,
                    right: ("left" == u ? o.left : o.right) - t.rect.left,
                    top: v,
                    bottom: y
                };
            return o.left || o.right || (b.bogus = !0), e.options.singleCursorHeightPerLine || (b.rtop = f, b.rbottom = h), b
        }

        function it(e, t) {
            if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !ni(e)) return t;
            var n = screen.logicalXDPI / screen.deviceXDPI,
                r = screen.logicalYDPI / screen.deviceYDPI;
            return {
                left: t.left * n,
                right: t.right * n,
                top: t.top * r,
                bottom: t.bottom * r
            }
        }

        function at(e) {
            if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
                for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
        }

        function st(e) {
            e.display.externalMeasure = null, Ko(e.display.lineMeasure);
            for (var t = 0; t < e.display.view.length; t++) at(e.display.view[t])
        }

        function lt(e) {
            st(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
        }

        function ut() {
            return window.pageXOffset || (document.documentElement || document.body).scrollLeft
        }

        function ct() {
            return window.pageYOffset || (document.documentElement || document.body).scrollTop
        }

        function dt(e, t, n, r) {
            if (t.widgets)
                for (var o = 0; o < t.widgets.length; ++o)
                    if (t.widgets[o].above) {
                        var i = Sr(t.widgets[o]);
                        n.top += i, n.bottom += i
                    }
            if ("line" == r) return n;
            r || (r = "local");
            var a = oo(t);
            if ("local" == r ? a += Ue(e.display) : a -= e.display.viewOffset, "page" == r || "window" == r) {
                var s = e.display.lineSpace.getBoundingClientRect();
                a += s.top + ("window" == r ? 0 : ct());
                var l = s.left + ("window" == r ? 0 : ut());
                n.left += l, n.right += l
            }
            return n.top += a, n.bottom += a, n
        }

        function pt(e, t, n) {
            if ("div" == n) return t;
            var r = t.left,
                o = t.top;
            if ("page" == n) r -= ut(), o -= ct();
            else if ("local" == n || !n) {
                var i = e.display.sizer.getBoundingClientRect();
                r += i.left, o += i.top
            }
            var a = e.display.lineSpace.getBoundingClientRect();
            return {
                left: r - a.left,
                top: o - a.top
            }
        }

        function ft(e, t, n, r, o) {
            return r || (r = Qr(e.doc, t.line)), dt(e, r, Qe(e, r, t.ch, o), n)
        }

        function ht(e, t, n, r, o, i) {
            function a(t, a) {
                var s = tt(e, o, t, a ? "right" : "left", i);
                return a ? s.left = s.right : s.right = s.left, dt(e, r, s, n)
            }

            function s(e, t) {
                var n = l[t],
                    r = n.level % 2;
                return e == oi(n) && t && n.level < l[t - 1].level ? (n = l[--t], e = ii(n) - (n.level % 2 ? 0 : 1), r = !0) : e == ii(n) && t < l.length - 1 && n.level < l[t + 1].level && (n = l[++t], e = oi(n) - n.level % 2, r = !1), r && e == n.to && e > n.from ? a(e - 1) : a(e, r)
            }
            r = r || Qr(e.doc, t.line), o || (o = et(e, r));
            var l = io(r),
                u = t.ch;
            if (!l) return a(u);
            var c = pi(l, u),
                d = s(u, c);
            return null != ls && (d.other = s(u, ls)), d
        }

        function mt(e, t) {
            var n = 0,
                t = me(e.doc, t);
            e.options.lineWrapping || (n = xt(e.display) * t.ch);
            var r = Qr(e.doc, t.line),
                o = oo(r) + Ue(e.display);
            return {
                left: n,
                right: n,
                top: o,
                bottom: o + r.height
            }
        }

        function gt(e, t, n, r) {
            var o = Bi(e, t);
            return o.xRel = r, n && (o.outside = !0), o
        }

        function vt(e, t, n) {
            var r = e.doc;
            if (n += e.display.viewOffset, n < 0) return gt(r.first, 0, !0, -1);
            var o = ro(r, n),
                i = r.first + r.size - 1;
            if (o > i) return gt(r.first + r.size - 1, Qr(r, i).text.length, !0, 1);
            t < 0 && (t = 0);
            for (var a = Qr(r, o);;) {
                var s = yt(e, a, o, t, n),
                    l = vr(a),
                    u = l && l.find(0, !0);
                if (!l || !(s.ch > u.from.ch || s.ch == u.from.ch && s.xRel > 0)) return s;
                o = no(a = u.to.line)
            }
        }

        function yt(e, t, n, r, o) {
            function i(r) {
                var o = ht(e, Bi(n, r), "line", t, u);
                return s = !0, a > o.bottom ? o.left - l : a < o.top ? o.left + l : (s = !1, o.left)
            }
            var a = o - oo(t),
                s = !1,
                l = 2 * e.display.wrapper.clientWidth,
                u = et(e, t),
                c = io(t),
                d = t.text.length,
                p = ai(t),
                f = si(t),
                h = i(p),
                m = s,
                g = i(f),
                v = s;
            if (r > g) return gt(n, f, v, 1);
            for (;;) {
                if (c ? f == p || f == hi(t, p, 1) : f - p <= 1) {
                    var y = r < h || r - h <= g - r ? p : f,
                        b = y == p ? m : v,
                        x = r - (y == p ? h : g);
                    if (v && !c && !/\s/.test(t.text.charAt(y)) && x > 0 && y < t.text.length && u.view.measure.heights.length > 1) {
                        var w = tt(e, u, y, "right");
                        a <= w.bottom && a >= w.top && Math.abs(r - w.right) < x && (b = !1, y++, x = r - w.right)
                    }
                    for (; jo(t.text.charAt(y));) ++y;
                    var k = gt(n, y, b, x < -1 ? -1 : x > 1 ? 1 : 0);
                    return k
                }
                var _ = Math.ceil(d / 2),
                    C = p + _;
                if (c) {
                    C = p;
                    for (var E = 0; E < _; ++E) C = hi(t, C, 1)
                }
                var S = i(C);
                S > r ? (f = C, g = S, (v = s) && (g += 1e3), d = _) : (p = C, h = S, m = s, d -= _)
            }
        }

        function bt(e) {
            if (null != e.cachedTextHeight) return e.cachedTextHeight;
            if (null == Ui) {
                Ui = Vo("pre");
                for (var t = 0; t < 49; ++t) Ui.appendChild(document.createTextNode("x")), Ui.appendChild(Vo("br"));
                Ui.appendChild(document.createTextNode("x"))
            }
            Go(e.measure, Ui);
            var n = Ui.offsetHeight / 50;
            return n > 3 && (e.cachedTextHeight = n), Ko(e.measure), n || 1
        }

        function xt(e) {
            if (null != e.cachedCharWidth) return e.cachedCharWidth;
            var t = Vo("span", "xxxxxxxxxx"),
                n = Vo("pre", [t]);
            Go(e.measure, n);
            var r = t.getBoundingClientRect(),
                o = (r.right - r.left) / 10;
            return o > 2 && (e.cachedCharWidth = o), o || 10
        }

        function wt(e) {
            e.curOp = {
                cm: e,
                viewChanged: !1,
                startHeight: e.doc.height,
                forceUpdate: !1,
                updateInput: null,
                typing: !1,
                changeObjs: null,
                cursorActivityHandlers: null,
                cursorActivityCalled: 0,
                selectionChanged: !1,
                updateMaxLine: !1,
                scrollLeft: null,
                scrollTop: null,
                scrollToPos: null,
                focus: !1,
                id: ++Yi
            }, Gi ? Gi.ops.push(e.curOp) : e.curOp.ownsGroup = Gi = {
                ops: [e.curOp],
                delayedCallbacks: []
            }
        }

        function kt(e) {
            var t = e.delayedCallbacks,
                n = 0;
            do {
                for (; n < t.length; n++) t[n].call(null);
                for (var r = 0; r < e.ops.length; r++) {
                    var o = e.ops[r];
                    if (o.cursorActivityHandlers)
                        for (; o.cursorActivityCalled < o.cursorActivityHandlers.length;) o.cursorActivityHandlers[o.cursorActivityCalled++].call(null, o.cm)
                }
            } while (n < t.length)
        }

        function _t(e) {
            var t = e.curOp,
                n = t.ownsGroup;
            if (n) try {
                kt(n)
            } finally {
                Gi = null;
                for (var r = 0; r < n.ops.length; r++) n.ops[r].cm.curOp = null;
                Ct(n)
            }
        }

        function Ct(e) {
            for (var t = e.ops, n = 0; n < t.length; n++) Et(t[n]);
            for (var n = 0; n < t.length; n++) St(t[n]);
            for (var n = 0; n < t.length; n++) Tt(t[n]);
            for (var n = 0; n < t.length; n++) At(t[n]);
            for (var n = 0; n < t.length; n++) Mt(t[n])
        }

        function Et(e) {
            var t = e.cm,
                n = t.display;
            S(t), e.updateMaxLine && p(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new E(t, e.mustUpdate && {
                top: e.scrollTop,
                ensure: e.scrollToPos
            }, e.forceUpdate)
        }

        function St(e) {
            e.updatedDisplay = e.mustUpdate && T(e.cm, e.update)
        }

        function Tt(e) {
            var t = e.cm,
                n = t.display;
            e.updatedDisplay && N(t), e.barMeasure = h(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Qe(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Ke(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Ge(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection(e.focus))
        }

        function At(e) {
            var t = e.cm;
            null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && an(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
            var n = e.focus && e.focus == Yo() && (!document.hasFocus || document.hasFocus());
            e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && y(t, e.barMeasure), e.updatedDisplay && L(t, e.barMeasure), e.selectionChanged && ze(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && Z(e.cm)
        }

        function Mt(e) {
            var t = e.cm,
                n = t.display,
                r = t.doc;
            if (e.updatedDisplay && A(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null == e.scrollTop || n.scroller.scrollTop == e.scrollTop && !e.forceScroll || (r.scrollTop = Math.max(0, Math.min(n.scroller.scrollHeight - n.scroller.clientHeight, e.scrollTop)), n.scrollbars.setScrollTop(r.scrollTop), n.scroller.scrollTop = r.scrollTop), null == e.scrollLeft || n.scroller.scrollLeft == e.scrollLeft && !e.forceScroll || (r.scrollLeft = Math.max(0, Math.min(n.scroller.scrollWidth - n.scroller.clientWidth, e.scrollLeft)), n.scrollbars.setScrollLeft(r.scrollLeft), n.scroller.scrollLeft = r.scrollLeft, w(t)), e.scrollToPos) {
                var o = Pn(t, me(r, e.scrollToPos.from), me(r, e.scrollToPos.to), e.scrollToPos.margin);
                e.scrollToPos.isCursor && t.state.focused && On(t, o)
            }
            var i = e.maybeHiddenMarkers,
                a = e.maybeUnhiddenMarkers;
            if (i)
                for (var s = 0; s < i.length; ++s) i[s].lines.length || Pa(i[s], "hide");
            if (a)
                for (var s = 0; s < a.length; ++s) a[s].lines.length && Pa(a[s], "unhide");
            n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Pa(t, "changes", t, e.changeObjs), e.update && e.update.finish()
        }

        function Lt(e, t) {
            if (e.curOp) return t();
            wt(e);
            try {
                return t()
            } finally {
                _t(e)
            }
        }

        function Nt(e, t) {
            return function() {
                if (e.curOp) return t.apply(e, arguments);
                wt(e);
                try {
                    return t.apply(e, arguments)
                } finally {
                    _t(e)
                }
            }
        }

        function Dt(e) {
            return function() {
                if (this.curOp) return e.apply(this, arguments);
                wt(this);
                try {
                    return e.apply(this, arguments)
                } finally {
                    _t(this)
                }
            }
        }

        function It(e) {
            return function() {
                var t = this.cm;
                if (!t || t.curOp) return e.apply(this, arguments);
                wt(t);
                try {
                    return e.apply(this, arguments)
                } finally {
                    _t(t)
                }
            }
        }

        function Ot(e, t, n) {
            this.line = t, this.rest = xr(t), this.size = this.rest ? no(Oo(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = _r(e, t)
        }

        function Pt(e, t, n) {
            for (var r, o = [], i = t; i < n; i = r) {
                var a = new Ot(e.doc, Qr(e.doc, i), i);
                r = i + a.size, o.push(a)
            }
            return o
        }

        function Rt(e, t, n, r) {
            null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
            var o = e.display;
            if (r && n < o.viewTo && (null == o.updateLineNumbers || o.updateLineNumbers > t) && (o.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= o.viewTo) Wi && wr(e.doc, t) < o.viewTo && zt(e);
            else if (n <= o.viewFrom) Wi && kr(e.doc, n + r) > o.viewFrom ? zt(e) : (o.viewFrom += r, o.viewTo += r);
            else if (t <= o.viewFrom && n >= o.viewTo) zt(e);
            else if (t <= o.viewFrom) {
                var i = Bt(e, n, n + r, 1);
                i ? (o.view = o.view.slice(i.index), o.viewFrom = i.lineN, o.viewTo += r) : zt(e)
            } else if (n >= o.viewTo) {
                var i = Bt(e, t, t, -1);
                i ? (o.view = o.view.slice(0, i.index), o.viewTo = i.lineN) : zt(e)
            } else {
                var a = Bt(e, t, t, -1),
                    s = Bt(e, n, n + r, 1);
                a && s ? (o.view = o.view.slice(0, a.index).concat(Pt(e, a.lineN, s.lineN)).concat(o.view.slice(s.index)), o.viewTo += r) : zt(e)
            }
            var l = o.externalMeasured;
            l && (n < l.lineN ? l.lineN += r : t < l.lineN + l.size && (o.externalMeasured = null))
        }

        function Ft(e, t, n) {
            e.curOp.viewChanged = !0;
            var r = e.display,
                o = e.display.externalMeasured;
            if (o && t >= o.lineN && t < o.lineN + o.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
                var i = r.view[Wt(e, t)];
                if (null != i.node) {
                    var a = i.changes || (i.changes = []);
                    Po(a, n) == -1 && a.push(n)
                }
            }
        }

        function zt(e) {
            e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
        }

        function Wt(e, t) {
            if (t >= e.display.viewTo) return null;
            if (t -= e.display.viewFrom, t < 0) return null;
            for (var n = e.display.view, r = 0; r < n.length; r++)
                if (t -= n[r].size, t < 0) return r
        }

        function Bt(e, t, n, r) {
            var o, i = Wt(e, t),
                a = e.display.view;
            if (!Wi || n == e.doc.first + e.doc.size) return {
                index: i,
                lineN: n
            };
            for (var s = 0, l = e.display.viewFrom; s < i; s++) l += a[s].size;
            if (l != t) {
                if (r > 0) {
                    if (i == a.length - 1) return null;
                    o = l + a[i].size - t, i++
                } else o = l - t;
                t += o, n += o
            }
            for (; wr(e.doc, n) != n;) {
                if (i == (r < 0 ? 0 : a.length - 1)) return null;
                n += r * a[i - (r < 0 ? 1 : 0)].size, i += r
            }
            return {
                index: i,
                lineN: n
            }
        }

        function qt(e, t, n) {
            var r = e.display,
                o = r.view;
            0 == o.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = Pt(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = Pt(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Wt(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(Pt(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Wt(e, n)))), r.viewTo = n
        }

        function Ht(e) {
            for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
                var o = t[r];
                o.hidden || o.node && !o.changes || ++n
            }
            return n
        }

        function Ut(e) {
            function t() {
                o.activeTouch && (i = setTimeout(function() {
                    o.activeTouch = null
                }, 1e3), a = o.activeTouch, a.end = +new Date)
            }

            function n(e) {
                if (1 != e.touches.length) return !1;
                var t = e.touches[0];
                return t.radiusX <= 1 && t.radiusY <= 1
            }

            function r(e, t) {
                if (null == t.left) return !0;
                var n = t.left - e.left,
                    r = t.top - e.top;
                return n * n + r * r > 400
            }
            var o = e.display;
            Da(o.scroller, "mousedown", Nt(e, Yt)), wi && ki < 11 ? Da(o.scroller, "dblclick", Nt(e, function(t) {
                if (!Ao(e, t)) {
                    var n = Gt(e, t);
                    if (n && !Jt(e, t) && !Kt(e.display, t)) {
                        Ma(t);
                        var r = e.findWordAt(n);
                        xe(e.doc, r.anchor, r.head)
                    }
                }
            })) : Da(o.scroller, "dblclick", function(t) {
                Ao(e, t) || Ma(t)
            }), Fi || Da(o.scroller, "contextmenu", function(t) {
                xn(e, t)
            });
            var i, a = {
                end: 0
            };
            Da(o.scroller, "touchstart", function(t) {
                if (!Ao(e, t) && !n(t)) {
                    clearTimeout(i);
                    var r = +new Date;
                    o.activeTouch = {
                        start: r,
                        moved: !1,
                        prev: r - a.end <= 300 ? a : null
                    }, 1 == t.touches.length && (o.activeTouch.left = t.touches[0].pageX, o.activeTouch.top = t.touches[0].pageY)
                }
            }), Da(o.scroller, "touchmove", function() {
                o.activeTouch && (o.activeTouch.moved = !0)
            }), Da(o.scroller, "touchend", function(n) {
                var i = o.activeTouch;
                if (i && !Kt(o, n) && null != i.left && !i.moved && new Date - i.start < 300) {
                    var a, s = e.coordsChar(o.activeTouch, "page");
                    a = !i.prev || r(i, i.prev) ? new de(s, s) : !i.prev.prev || r(i, i.prev.prev) ? e.findWordAt(s) : new de(Bi(s.line, 0), me(e.doc, Bi(s.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), Ma(n)
                }
                t()
            }), Da(o.scroller, "touchcancel", t), Da(o.scroller, "scroll", function() {
                o.scroller.clientHeight && (on(e, o.scroller.scrollTop), an(e, o.scroller.scrollLeft, !0), Pa(e, "scroll", e))
            }), Da(o.scroller, "mousewheel", function(t) {
                sn(e, t)
            }), Da(o.scroller, "DOMMouseScroll", function(t) {
                sn(e, t)
            }), Da(o.wrapper, "scroll", function() {
                o.wrapper.scrollTop = o.wrapper.scrollLeft = 0
            }), o.dragFunctions = {
                enter: function(t) {
                    Ao(e, t) || Na(t)
                },
                over: function(t) {
                    Ao(e, t) || (nn(e, t), Na(t))
                },
                start: function(t) {
                    tn(e, t)
                },
                drop: Nt(e, en),
                leave: function(t) {
                    Ao(e, t) || rn(e)
                }
            };
            var s = o.input.getField();
            Da(s, "keyup", function(t) {
                mn.call(e, t)
            }), Da(s, "keydown", Nt(e, fn)), Da(s, "keypress", Nt(e, gn)), Da(s, "focus", qo(yn, e)), Da(s, "blur", qo(bn, e))
        }

        function jt(t, n, r) {
            var o = r && r != e.Init;
            if (!n != !o) {
                var i = t.display.dragFunctions,
                    a = n ? Da : Oa;
                a(t.display.scroller, "dragstart", i.start), a(t.display.scroller, "dragenter", i.enter), a(t.display.scroller, "dragover", i.over), a(t.display.scroller, "dragleave", i.leave), a(t.display.scroller, "drop", i.drop)
            }
        }

        function Vt(e) {
            var t = e.display;
            t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize())
        }

        function Kt(e, t) {
            for (var n = _o(t); n != e.wrapper; n = n.parentNode)
                if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0
        }

        function Gt(e, t, n, r) {
            var o = e.display;
            if (!n && "true" == _o(t).getAttribute("cm-not-content")) return null;
            var i, a, s = o.lineSpace.getBoundingClientRect();
            try {
                i = t.clientX - s.left, a = t.clientY - s.top
            } catch (t) {
                return null
            }
            var l, u = vt(e, i, a);
            if (r && 1 == u.xRel && (l = Qr(e.doc, u.line).text).length == u.ch) {
                var c = Ha(l, l.length, e.options.tabSize) - l.length;
                u = Bi(u.line, Math.max(0, Math.round((i - Ve(e.display).left) / xt(e.display)) - c))
            }
            return u
        }

        function Yt(e) {
            var t = this,
                n = t.display;
            if (!(Ao(t, e) || n.activeTouch && n.input.supportsTouch())) {
                if (n.shift = e.shiftKey, Kt(n, e)) return void(_i || (n.scroller.draggable = !1, setTimeout(function() {
                    n.scroller.draggable = !0
                }, 100)));
                if (!Jt(t, e)) {
                    var r = Gt(t, e);
                    switch (window.focus(), Co(e)) {
                        case 1:
                            t.state.selectingText ? t.state.selectingText(e) : r ? $t(t, e, r) : _o(e) == n.scroller && Ma(e);
                            break;
                        case 2:
                            _i && (t.state.lastMiddleDown = +new Date), r && xe(t.doc, r), setTimeout(function() {
                                n.input.focus()
                            }, 20), Ma(e);
                            break;
                        case 3:
                            Fi ? xn(t, e) : vn(t)
                    }
                }
            }
        }

        function $t(e, t, n) {
            wi ? setTimeout(qo(Z, e), 0) : e.curOp.focus = Yo();
            var r, o = +new Date;
            Vi && Vi.time > o - 400 && 0 == qi(Vi.pos, n) ? r = "triple" : ji && ji.time > o - 400 && 0 == qi(ji.pos, n) ? (r = "double", Vi = {
                time: o,
                pos: n
            }) : (r = "single", ji = {
                time: o,
                pos: n
            });
            var i, a = e.doc.sel,
                s = Di ? t.metaKey : t.ctrlKey;
            e.options.dragDrop && ns && !e.isReadOnly() && "single" == r && (i = a.contains(n)) > -1 && (qi((i = a.ranges[i]).from(), n) < 0 || n.xRel > 0) && (qi(i.to(), n) > 0 || n.xRel < 0) ? Zt(e, t, n, s) : Xt(e, t, n, r, s)
        }

        function Zt(e, t, n, r) {
            var o = e.display,
                i = +new Date,
                a = Nt(e, function(s) {
                    _i && (o.scroller.draggable = !1), e.state.draggingText = !1, Oa(document, "mouseup", a), Oa(o.scroller, "drop", a), Math.abs(t.clientX - s.clientX) + Math.abs(t.clientY - s.clientY) < 10 && (Ma(s), !r && +new Date - 200 < i && xe(e.doc, n), _i || wi && 9 == ki ? setTimeout(function() {
                        document.body.focus(), o.input.focus()
                    }, 20) : o.input.focus())
                });
            _i && (o.scroller.draggable = !0), e.state.draggingText = a, a.copy = Di ? t.altKey : t.ctrlKey, o.scroller.dragDrop && o.scroller.dragDrop(), Da(document, "mouseup", a), Da(o.scroller, "drop", a)
        }

        function Xt(e, t, n, r, o) {
            function i(t) {
                if (0 != qi(g, t))
                    if (g = t, "rect" == r) {
                        for (var o = [], i = e.options.tabSize, a = Ha(Qr(u, n.line).text, n.ch, i), s = Ha(Qr(u, t.line).text, t.ch, i), l = Math.min(a, s), f = Math.max(a, s), h = Math.min(n.line, t.line), m = Math.min(e.lastLine(), Math.max(n.line, t.line)); h <= m; h++) {
                            var v = Qr(u, h).text,
                                y = Ua(v, l, i);
                            l == f ? o.push(new de(Bi(h, y), Bi(h, y))) : v.length > y && o.push(new de(Bi(h, y), Bi(h, Ua(v, f, i))))
                        }
                        o.length || o.push(new de(n, n)), Se(u, pe(p.ranges.slice(0, d).concat(o), d), {
                            origin: "*mouse",
                            scroll: !1
                        }), e.scrollIntoView(t)
                    } else {
                        var b = c,
                            x = b.anchor,
                            w = t;
                        if ("single" != r) {
                            if ("double" == r) var k = e.findWordAt(t);
                            else var k = new de(Bi(t.line, 0), me(u, Bi(t.line + 1, 0)));
                            qi(k.anchor, x) > 0 ? (w = k.head, x = $(b.from(), k.anchor)) : (w = k.anchor, x = Y(b.to(), k.head))
                        }
                        var o = p.ranges.slice(0);
                        o[d] = new de(me(u, x), w), Se(u, pe(o, d), Ba)
                    }
            }

            function a(t) {
                var n = ++y,
                    o = Gt(e, t, !0, "rect" == r);
                if (o)
                    if (0 != qi(o, g)) {
                        e.curOp.focus = Yo(), i(o);
                        var s = x(l, u);
                        (o.line >= s.to || o.line < s.from) && setTimeout(Nt(e, function() {
                            y == n && a(t)
                        }), 150)
                    } else {
                        var c = t.clientY < v.top ? -20 : t.clientY > v.bottom ? 20 : 0;
                        c && setTimeout(Nt(e, function() {
                            y == n && (l.scroller.scrollTop += c, a(t))
                        }), 50)
                    }
            }

            function s(t) {
                e.state.selectingText = !1, y = 1 / 0, Ma(t), l.input.focus(), Oa(document, "mousemove", b), Oa(document, "mouseup", w), u.history.lastSelOrigin = null
            }
            var l = e.display,
                u = e.doc;
            Ma(t);
            var c, d, p = u.sel,
                f = p.ranges;
            if (o && !t.shiftKey ? (d = u.sel.contains(n), c = d > -1 ? f[d] : new de(n, n)) : (c = u.sel.primary(), d = u.sel.primIndex), Ii ? t.shiftKey && t.metaKey : t.altKey) r = "rect", o || (c = new de(n, n)), n = Gt(e, t, !0, !0), d = -1;
            else if ("double" == r) {
                var h = e.findWordAt(n);
                c = e.display.shift || u.extend ? be(u, c, h.anchor, h.head) : h
            } else if ("triple" == r) {
                var m = new de(Bi(n.line, 0), me(u, Bi(n.line + 1, 0)));
                c = e.display.shift || u.extend ? be(u, c, m.anchor, m.head) : m
            } else c = be(u, c, n);
            o ? d == -1 ? (d = f.length, Se(u, pe(f.concat([c]), d), {
                scroll: !1,
                origin: "*mouse"
            })) : f.length > 1 && f[d].empty() && "single" == r && !t.shiftKey ? (Se(u, pe(f.slice(0, d).concat(f.slice(d + 1)), 0), {
                scroll: !1,
                origin: "*mouse"
            }), p = u.sel) : ke(u, d, c, Ba) : (d = 0, Se(u, new ce([c], 0), Ba), p = u.sel);
            var g = n,
                v = l.wrapper.getBoundingClientRect(),
                y = 0,
                b = Nt(e, function(e) {
                    Co(e) ? a(e) : s(e)
                }),
                w = Nt(e, s);
            e.state.selectingText = w, Da(document, "mousemove", b), Da(document, "mouseup", w)
        }

        function Qt(e, t, n, r) {
            try {
                var o = t.clientX,
                    i = t.clientY
            } catch (t) {
                return !1
            }
            if (o >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
            r && Ma(t);
            var a = e.display,
                s = a.lineDiv.getBoundingClientRect();
            if (i > s.bottom || !Lo(e, n)) return ko(t);
            i -= s.top - a.viewOffset;
            for (var l = 0; l < e.options.gutters.length; ++l) {
                var u = a.gutters.childNodes[l];
                if (u && u.getBoundingClientRect().right >= o) {
                    var c = ro(e.doc, i),
                        d = e.options.gutters[l];
                    return Pa(e, n, e, c, d, t), ko(t)
                }
            }
        }

        function Jt(e, t) {
            return Qt(e, t, "gutterClick", !0)
        }

        function en(e) {
            var t = this;
            if (rn(t), !Ao(t, e) && !Kt(t.display, e)) {
                Ma(e), wi && ($i = +new Date);
                var n = Gt(t, e, !0),
                    r = e.dataTransfer.files;
                if (n && !t.isReadOnly())
                    if (r && r.length && window.FileReader && window.File)
                        for (var o = r.length, i = Array(o), a = 0, s = function(e, r) {
                                if (!t.options.allowDropFileTypes || Po(t.options.allowDropFileTypes, e.type) != -1) {
                                    var s = new FileReader;
                                    s.onload = Nt(t, function() {
                                        var e = s.result;
                                        if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), i[r] = e, ++a == o) {
                                            n = me(t.doc, n);
                                            var l = {
                                                from: n,
                                                to: n,
                                                text: t.doc.splitLines(i.join(t.doc.lineSeparator())),
                                                origin: "paste"
                                            };
                                            Tn(t.doc, l), Ee(t.doc, fe(n, ta(l)))
                                        }
                                    }), s.readAsText(e)
                                }
                            }, l = 0; l < o; ++l) s(r[l], l);
                    else {
                        if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function() {
                            t.display.input.focus()
                        }, 20);
                        try {
                            var i = e.dataTransfer.getData("Text");
                            if (i) {
                                if (t.state.draggingText && !t.state.draggingText.copy) var u = t.listSelections();
                                if (Te(t.doc, fe(n, n)), u)
                                    for (var l = 0; l < u.length; ++l) In(t.doc, "", u[l].anchor, u[l].head, "drag");
                                t.replaceSelection(i, "around", "paste"), t.display.input.focus()
                            }
                        } catch (e) {}
                    }
            }
        }

        function tn(e, t) {
            if (wi && (!e.state.draggingText || +new Date - $i < 100)) return void Na(t);
            if (!Ao(e, t) && !Kt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !Ti)) {
                var n = Vo("img", null, null, "position: fixed; left: 0; top: 0;");
                n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", Si && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), Si && n.parentNode.removeChild(n)
            }
        }

        function nn(e, t) {
            var n = Gt(e, t);
            if (n) {
                var r = document.createDocumentFragment();
                Re(e, n, r), e.display.dragCursor || (e.display.dragCursor = Vo("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), Go(e.display.dragCursor, r)
            }
        }

        function rn(e) {
            e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
        }

        function on(e, t) {
            Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, yi || M(e, {
                top: t
            }), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbars.setScrollTop(t), yi && M(e), We(e, 100))
        }

        function an(e, t, n) {
            (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, w(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
        }

        function sn(e, t) {
            var n = Qi(t),
                r = n.x,
                o = n.y,
                i = e.display,
                a = i.scroller,
                s = a.scrollWidth > a.clientWidth,
                l = a.scrollHeight > a.clientHeight;
            if (r && s || o && l) {
                if (o && Di && _i) e: for (var u = t.target, c = i.view; u != a; u = u.parentNode)
                    for (var d = 0; d < c.length; d++)
                        if (c[d].node == u) {
                            e.display.currentWheelTarget = u;
                            break e
                        }
                if (r && !yi && !Si && null != Xi) return o && l && on(e, Math.max(0, Math.min(a.scrollTop + o * Xi, a.scrollHeight - a.clientHeight))), an(e, Math.max(0, Math.min(a.scrollLeft + r * Xi, a.scrollWidth - a.clientWidth))), (!o || o && l) && Ma(t), void(i.wheelStartX = null);
                if (o && null != Xi) {
                    var p = o * Xi,
                        f = e.doc.scrollTop,
                        h = f + i.wrapper.clientHeight;
                    p < 0 ? f = Math.max(0, f + p - 50) : h = Math.min(e.doc.height, h + p + 50), M(e, {
                        top: f,
                        bottom: h
                    })
                }
                Zi < 20 && (null == i.wheelStartX ? (i.wheelStartX = a.scrollLeft, i.wheelStartY = a.scrollTop, i.wheelDX = r, i.wheelDY = o, setTimeout(function() {
                    if (null != i.wheelStartX) {
                        var e = a.scrollLeft - i.wheelStartX,
                            t = a.scrollTop - i.wheelStartY,
                            n = t && i.wheelDY && t / i.wheelDY || e && i.wheelDX && e / i.wheelDX;
                        i.wheelStartX = i.wheelStartY = null, n && (Xi = (Xi * Zi + n) / (Zi + 1), ++Zi)
                    }
                }, 200)) : (i.wheelDX += r, i.wheelDY += o))
            }
        }

        function ln(e, t, n) {
            if ("string" == typeof t && (t = pa[t], !t)) return !1;
            e.display.input.ensurePolled();
            var r = e.display.shift,
                o = !1;
            try {
                e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), o = t(e) != za
            } finally {
                e.display.shift = r, e.state.suppressEdits = !1
            }
            return o
        }

        function un(e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
                var o = ha(t, e.state.keyMaps[r], n, e);
                if (o) return o
            }
            return e.options.extraKeys && ha(t, e.options.extraKeys, n, e) || ha(t, e.options.keyMap, n, e)
        }

        function cn(e, t, n, r) {
            var o = e.state.keySeq;
            if (o) {
                if (ma(t)) return "handled";
                Ji.set(50, function() {
                    e.state.keySeq == o && (e.state.keySeq = null, e.display.input.reset())
                }), t = o + " " + t
            }
            var i = un(e, t, r);
            return "multi" == i && (e.state.keySeq = t), "handled" == i && So(e, "keyHandled", e, t, n), "handled" != i && "multi" != i || (Ma(n), ze(e)), o && !i && /\'$/.test(t) ? (Ma(n), !0) : !!i
        }

        function dn(e, t) {
            var n = ga(t, !0);
            return !!n && (t.shiftKey && !e.state.keySeq ? cn(e, "Shift-" + n, t, function(t) {
                return ln(e, t, !0)
            }) || cn(e, n, t, function(t) {
                if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return ln(e, t)
            }) : cn(e, n, t, function(t) {
                return ln(e, t)
            }))
        }

        function pn(e, t, n) {
            return cn(e, "'" + n + "'", t, function(t) {
                return ln(e, t, !0)
            })
        }

        function fn(e) {
            var t = this;
            if (t.curOp.focus = Yo(), !Ao(t, e)) {
                wi && ki < 11 && 27 == e.keyCode && (e.returnValue = !1);
                var n = e.keyCode;
                t.display.shift = 16 == n || e.shiftKey;
                var r = dn(t, e);
                Si && (ea = r ? n : null, !r && 88 == n && !is && (Di ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || hn(t)
            }
        }

        function hn(e) {
            function t(e) {
                18 != e.keyCode && e.altKey || (Ja(n, "CodeMirror-crosshair"), Oa(document, "keyup", t), Oa(document, "mouseover", t))
            }
            var n = e.display.lineDiv;
            es(n, "CodeMirror-crosshair"), Da(document, "keyup", t), Da(document, "mouseover", t)
        }

        function mn(e) {
            16 == e.keyCode && (this.doc.sel.shift = !1), Ao(this, e)
        }

        function gn(e) {
            var t = this;
            if (!(Kt(t.display, e) || Ao(t, e) || e.ctrlKey && !e.altKey || Di && e.metaKey)) {
                var n = e.keyCode,
                    r = e.charCode;
                if (Si && n == ea) return ea = null, void Ma(e);
                if (!Si || e.which && !(e.which < 10) || !dn(t, e)) {
                    var o = String.fromCharCode(null == r ? n : r);
                    pn(t, e, o) || t.display.input.onKeyPress(e)
                }
            }
        }

        function vn(e) {
            e.state.delayingBlurEvent = !0, setTimeout(function() {
                e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, bn(e))
            }, 100)
        }

        function yn(e) {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (Pa(e, "focus", e), e.state.focused = !0, es(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), _i && setTimeout(function() {
                e.display.input.reset(!0)
            }, 20)), e.display.input.receivedFocus()), ze(e))
        }

        function bn(e) {
            e.state.delayingBlurEvent || (e.state.focused && (Pa(e, "blur", e), e.state.focused = !1, Ja(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
                e.state.focused || (e.display.shift = !1)
            }, 150))
        }

        function xn(e, t) {
            Kt(e.display, t) || wn(e, t) || Ao(e, t, "contextmenu") || e.display.input.onContextMenu(t)
        }

        function wn(e, t) {
            return !!Lo(e, "gutterContextMenu") && Qt(e, t, "gutterContextMenu", !1)
        }

        function kn(e, t) {
            if (qi(e, t.from) < 0) return e;
            if (qi(e, t.to) <= 0) return ta(t);
            var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                r = e.ch;
            return e.line == t.to.line && (r += ta(t).ch - t.to.ch), Bi(n, r)
        }

        function _n(e, t) {
            for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                var o = e.sel.ranges[r];
                n.push(new de(kn(o.anchor, t), kn(o.head, t)))
            }
            return pe(n, e.sel.primIndex)
        }

        function Cn(e, t, n) {
            return e.line == t.line ? Bi(n.line, e.ch - t.ch + n.ch) : Bi(n.line + (e.line - t.line), e.ch)
        }

        function En(e, t, n) {
            for (var r = [], o = Bi(e.first, 0), i = o, a = 0; a < t.length; a++) {
                var s = t[a],
                    l = Cn(s.from, o, i),
                    u = Cn(ta(s), o, i);
                if (o = s.to, i = u, "around" == n) {
                    var c = e.sel.ranges[a],
                        d = qi(c.head, c.anchor) < 0;
                    r[a] = new de(d ? u : l, d ? l : u)
                } else r[a] = new de(l, l)
            }
            return new ce(r, e.sel.primIndex)
        }

        function Sn(e, t, n) {
            var r = {
                canceled: !1,
                from: t.from,
                to: t.to,
                text: t.text,
                origin: t.origin,
                cancel: function() {
                    this.canceled = !0
                }
            };
            return n && (r.update = function(t, n, r, o) {
                t && (this.from = me(e, t)), n && (this.to = me(e, n)), r && (this.text = r), void 0 !== o && (this.origin = o)
            }), Pa(e, "beforeChange", e, r), e.cm && Pa(e.cm, "beforeChange", e.cm, r), r.canceled ? null : {
                from: r.from,
                to: r.to,
                text: r.text,
                origin: r.origin
            }
        }

        function Tn(e, t, n) {
            if (e.cm) {
                if (!e.cm.curOp) return Nt(e.cm, Tn)(e, t, n);
                if (e.cm.state.suppressEdits) return
            }
            if (!(Lo(e, "beforeChange") || e.cm && Lo(e.cm, "beforeChange")) || (t = Sn(e, t, !0))) {
                var r = zi && !n && ur(e, t.from, t.to);
                if (r)
                    for (var o = r.length - 1; o >= 0; --o) An(e, {
                        from: r[o].from,
                        to: r[o].to,
                        text: o ? [""] : t.text
                    });
                else An(e, t)
            }
        }

        function An(e, t) {
            if (1 != t.text.length || "" != t.text[0] || 0 != qi(t.from, t.to)) {
                var n = _n(e, t);
                co(e, t, n, e.cm ? e.cm.curOp.id : NaN), Nn(e, t, n, ar(e, t));
                var r = [];
                Zr(e, function(e, n) {
                    n || Po(r, e.history) != -1 || (wo(e.history, t), r.push(e.history)), Nn(e, t, null, ar(e, t))
                })
            }
        }

        function Mn(e, t, n) {
            if (!e.cm || !e.cm.state.suppressEdits || n) {
                for (var r, o = e.history, i = e.sel, a = "undo" == t ? o.done : o.undone, s = "undo" == t ? o.undone : o.done, l = 0; l < a.length && (r = a[l], n ? !r.ranges || r.equals(e.sel) : r.ranges); l++);
                if (l != a.length) {
                    for (o.lastOrigin = o.lastSelOrigin = null; r = a.pop(), r.ranges;) {
                        if (ho(r, s), n && !r.equals(e.sel)) return void Se(e, r, {
                            clearRedo: !1
                        });
                        i = r
                    }
                    var u = [];
                    ho(i, s), s.push({
                        changes: u,
                        generation: o.generation
                    }), o.generation = r.generation || ++o.maxGeneration;
                    for (var c = Lo(e, "beforeChange") || e.cm && Lo(e.cm, "beforeChange"), l = r.changes.length - 1; l >= 0; --l) {
                        var d = r.changes[l];
                        if (d.origin = t, c && !Sn(e, d, !1)) return void(a.length = 0);
                        u.push(so(e, d));
                        var p = l ? _n(e, d) : Oo(a);
                        Nn(e, d, p, lr(e, d)), !l && e.cm && e.cm.scrollIntoView({
                            from: d.from,
                            to: ta(d)
                        });
                        var f = [];
                        Zr(e, function(e, t) {
                            t || Po(f, e.history) != -1 || (wo(e.history, d), f.push(e.history)), Nn(e, d, null, lr(e, d))
                        })
                    }
                }
            }
        }

        function Ln(e, t) {
            if (0 != t && (e.first += t, e.sel = new ce(Ro(e.sel.ranges, function(e) {
                    return new de(Bi(e.anchor.line + t, e.anchor.ch), Bi(e.head.line + t, e.head.ch))
                }), e.sel.primIndex), e.cm)) {
                Rt(e.cm, e.first, e.first - t, t);
                for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) Ft(e.cm, r, "gutter")
            }
        }

        function Nn(e, t, n, r) {
            if (e.cm && !e.cm.curOp) return Nt(e.cm, Nn)(e, t, n, r);
            if (t.to.line < e.first) return void Ln(e, t.text.length - 1 - (t.to.line - t.from.line));
            if (!(t.from.line > e.lastLine())) {
                if (t.from.line < e.first) {
                    var o = t.text.length - 1 - (e.first - t.from.line);
                    Ln(e, o), t = {
                        from: Bi(e.first, 0),
                        to: Bi(t.to.line + o, t.to.ch),
                        text: [Oo(t.text)],
                        origin: t.origin
                    }
                }
                var i = e.lastLine();
                t.to.line > i && (t = {
                    from: t.from,
                    to: Bi(i, Qr(e, i).text.length),
                    text: [t.text[0]],
                    origin: t.origin
                }), t.removed = Jr(e, t.from, t.to), n || (n = _n(e, t)), e.cm ? Dn(e.cm, t, r) : Gr(e, t, r), Te(e, n, Wa)
            }
        }

        function Dn(e, t, n) {
            var r = e.doc,
                o = e.display,
                a = t.from,
                s = t.to,
                l = !1,
                u = a.line;
            e.options.lineWrapping || (u = no(br(Qr(r, a.line))), r.iter(u, s.line + 1, function(e) {
                if (e == o.maxLine) return l = !0, !0
            })), r.sel.contains(t.from, t.to) > -1 && Mo(e), Gr(r, t, n, i(e)), e.options.lineWrapping || (r.iter(u, a.line + t.text.length, function(e) {
                var t = d(e);
                t > o.maxLineLength && (o.maxLine = e, o.maxLineLength = t, o.maxLineChanged = !0, l = !1)
            }), l && (e.curOp.updateMaxLine = !0)), r.frontier = Math.min(r.frontier, a.line), We(e, 400);
            var c = t.text.length - (s.line - a.line) - 1;
            t.full ? Rt(e) : a.line != s.line || 1 != t.text.length || Kr(e.doc, t) ? Rt(e, a.line, s.line + 1, c) : Ft(e, a.line, "text");
            var p = Lo(e, "changes"),
                f = Lo(e, "change");
            if (f || p) {
                var h = {
                    from: a,
                    to: s,
                    text: t.text,
                    removed: t.removed,
                    origin: t.origin
                };
                f && So(e, "change", e, h), p && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h)
            }
            e.display.selForContextMenu = null
        }

        function In(e, t, n, r, o) {
            if (r || (r = n), qi(r, n) < 0) {
                var i = r;
                r = n, n = i
            }
            "string" == typeof t && (t = e.splitLines(t)), Tn(e, {
                from: n,
                to: r,
                text: t,
                origin: o
            })
        }

        function On(e, t) {
            if (!Ao(e, "scrollCursorIntoView")) {
                var n = e.display,
                    r = n.sizer.getBoundingClientRect(),
                    o = null;
                if (t.top + r.top < 0 ? o = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1), null != o && !Mi) {
                    var i = Vo("div", "​", null, "position: absolute; top: " + (t.top - n.viewOffset - Ue(e.display)) + "px; height: " + (t.bottom - t.top + Ke(e) + n.barHeight) + "px; left: " + t.left + "px; width: 2px;");
                    e.display.lineSpace.appendChild(i), i.scrollIntoView(o), e.display.lineSpace.removeChild(i)
                }
            }
        }

        function Pn(e, t, n, r) {
            null == r && (r = 0);
            for (var o = 0; o < 5; o++) {
                var i = !1,
                    a = ht(e, t),
                    s = n && n != t ? ht(e, n) : a,
                    l = Fn(e, Math.min(a.left, s.left), Math.min(a.top, s.top) - r, Math.max(a.left, s.left), Math.max(a.bottom, s.bottom) + r),
                    u = e.doc.scrollTop,
                    c = e.doc.scrollLeft;
                if (null != l.scrollTop && (on(e, l.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (i = !0)), null != l.scrollLeft && (an(e, l.scrollLeft), Math.abs(e.doc.scrollLeft - c) > 1 && (i = !0)), !i) break
            }
            return a
        }

        function Rn(e, t, n, r, o) {
            var i = Fn(e, t, n, r, o);
            null != i.scrollTop && on(e, i.scrollTop), null != i.scrollLeft && an(e, i.scrollLeft)
        }

        function Fn(e, t, n, r, o) {
            var i = e.display,
                a = bt(e.display);
            n < 0 && (n = 0);
            var s = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : i.scroller.scrollTop,
                l = Ye(e),
                u = {};
            o - n > l && (o = n + l);
            var c = e.doc.height + je(i),
                d = n < a,
                p = o > c - a;
            if (n < s) u.scrollTop = d ? 0 : n;
            else if (o > s + l) {
                var f = Math.min(n, (p ? c : o) - l);
                f != s && (u.scrollTop = f)
            }
            var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : i.scroller.scrollLeft,
                m = Ge(e) - (e.options.fixedGutter ? i.gutters.offsetWidth : 0),
                g = r - t > m;
            return g && (r = t + m), t < 10 ? u.scrollLeft = 0 : t < h ? u.scrollLeft = Math.max(0, t - (g ? 0 : 10)) : r > m + h - 3 && (u.scrollLeft = r + (g ? 0 : 10) - m), u
        }

        function zn(e, t, n) {
            null == t && null == n || Bn(e), null != t && (e.curOp.scrollLeft = (null == e.curOp.scrollLeft ? e.doc.scrollLeft : e.curOp.scrollLeft) + t), null != n && (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + n)
        }

        function Wn(e) {
            Bn(e);
            var t = e.getCursor(),
                n = t,
                r = t;
            e.options.lineWrapping || (n = t.ch ? Bi(t.line, t.ch - 1) : t, r = Bi(t.line, t.ch + 1)), e.curOp.scrollToPos = {
                from: n,
                to: r,
                margin: e.options.cursorScrollMargin,
                isCursor: !0
            }
        }

        function Bn(e) {
            var t = e.curOp.scrollToPos;
            if (t) {
                e.curOp.scrollToPos = null;
                var n = mt(e, t.from),
                    r = mt(e, t.to),
                    o = Fn(e, Math.min(n.left, r.left), Math.min(n.top, r.top) - t.margin, Math.max(n.right, r.right), Math.max(n.bottom, r.bottom) + t.margin);
                e.scrollTo(o.scrollLeft, o.scrollTop)
            }
        }

        function qn(e, t, n, r) {
            var o, i = e.doc;
            null == n && (n = "add"), "smart" == n && (i.mode.indent ? o = He(e, t) : n = "prev");
            var a = e.options.tabSize,
                s = Qr(i, t),
                l = Ha(s.text, null, a);
            s.stateAfter && (s.stateAfter = null);
            var u, c = s.text.match(/^\s*/)[0];
            if (r || /\S/.test(s.text)) {
                if ("smart" == n && (u = i.mode.indent(o, s.text.slice(c.length), s.text), u == za || u > 150)) {
                    if (!r) return;
                    n = "prev"
                }
            } else u = 0, n = "not";
            "prev" == n ? u = t > i.first ? Ha(Qr(i, t - 1).text, null, a) : 0 : "add" == n ? u = l + e.options.indentUnit : "subtract" == n ? u = l - e.options.indentUnit : "number" == typeof n && (u = l + n), u = Math.max(0, u);
            var d = "",
                p = 0;
            if (e.options.indentWithTabs)
                for (var f = Math.floor(u / a); f; --f) p += a, d += "\t";
            if (p < u && (d += Io(u - p)), d != c) return In(i, d, Bi(t, 0), Bi(t, c.length), "+input"), s.stateAfter = null, !0;
            for (var f = 0; f < i.sel.ranges.length; f++) {
                var h = i.sel.ranges[f];
                if (h.head.line == t && h.head.ch < c.length) {
                    var p = Bi(t, c.length);
                    ke(i, f, new de(p, p));
                    break
                }
            }
        }

        function Hn(e, t, n, r) {
            var o = t,
                i = t;
            return "number" == typeof t ? i = Qr(e, he(e, t)) : o = no(t), null == o ? null : (r(i, o) && e.cm && Ft(e.cm, o, n), i)
        }

        function Un(e, t) {
            for (var n = e.doc.sel.ranges, r = [], o = 0; o < n.length; o++) {
                for (var i = t(n[o]); r.length && qi(i.from, Oo(r).to) <= 0;) {
                    var a = r.pop();
                    if (qi(a.from, i.from) < 0) {
                        i.from = a.from;
                        break
                    }
                }
                r.push(i)
            }
            Lt(e, function() {
                for (var t = r.length - 1; t >= 0; t--) In(e.doc, "", r[t].from, r[t].to, "+delete");
                Wn(e)
            })
        }

        function jn(e, t, n, r, o) {
            function i() {
                var t = s + n;
                return !(t < e.first || t >= e.first + e.size) && (s = t, c = Qr(e, t))
            }

            function a(e) {
                var t = (o ? hi : mi)(c, l, n, !0);
                if (null == t) {
                    if (e || !i()) return !1;
                    l = o ? (n < 0 ? si : ai)(c) : n < 0 ? c.text.length : 0
                } else l = t;
                return !0
            }
            var s = t.line,
                l = t.ch,
                u = n,
                c = Qr(e, s);
            if ("char" == r) a();
            else if ("column" == r) a(!0);
            else if ("word" == r || "group" == r)
                for (var d = null, p = "group" == r, f = e.cm && e.cm.getHelper(t, "wordChars"), h = !0; !(n < 0) || a(!h); h = !1) {
                    var m = c.text.charAt(l) || "\n",
                        g = Ho(m, f) ? "w" : p && "\n" == m ? "n" : !p || /\s/.test(m) ? null : "p";
                    if (!p || h || g || (g = "s"), d && d != g) {
                        n < 0 && (n = 1, a());
                        break
                    }
                    if (g && (d = g), n > 0 && !a(!h)) break
                }
            var v = De(e, Bi(s, l), t, u, !0);
            return qi(t, v) || (v.hitSide = !0), v
        }

        function Vn(e, t, n, r) {
            var o, i = e.doc,
                a = t.left;
            if ("page" == r) {
                var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
                o = t.top + n * (s - (n < 0 ? 1.5 : .5) * bt(e.display))
            } else "line" == r && (o = n > 0 ? t.bottom + 3 : t.top - 3);
            for (;;) {
                var l = vt(e, a, o);
                if (!l.outside) break;
                if (n < 0 ? o <= 0 : o >= i.height) {
                    l.hitSide = !0;
                    break
                }
                o += 5 * n
            }
            return l
        }

        function Kn(t, n, r, o) {
            e.defaults[t] = n, r && (ra[t] = o ? function(e, t, n) {
                n != oa && r(e, t, n)
            } : r)
        }

        function Gn(e) {
            for (var t, n, r, o, i = e.split(/-(?!$)/), e = i[i.length - 1], a = 0; a < i.length - 1; a++) {
                var s = i[a];
                if (/^(cmd|meta|m)$/i.test(s)) o = !0;
                else if (/^a(lt)?$/i.test(s)) t = !0;
                else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
                else {
                    if (!/^s(hift)$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
                    r = !0
                }
            }
            return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), o && (e = "Cmd-" + e), r && (e = "Shift-" + e), e
        }

        function Yn(e) {
            return "string" == typeof e ? fa[e] : e
        }

        function $n(e, t, n, r, o) {
            if (r && r.shared) return Zn(e, t, n, r, o);
            if (e.cm && !e.cm.curOp) return Nt(e.cm, $n)(e, t, n, r, o);
            var i = new ba(e, o),
                a = qi(t, n);
            if (r && Bo(r, i, !1), a > 0 || 0 == a && i.clearWhenEmpty !== !1) return i;
            if (i.replacedWith && (i.collapsed = !0, i.widgetNode = Vo("span", [i.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || i.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (i.widgetNode.insertLeft = !0)), i.collapsed) {
                if (yr(e, t.line, t, n, i) || t.line != n.line && yr(e, n.line, t, n, i)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                Wi = !0
            }
            i.addToHistory && co(e, {
                from: t,
                to: n,
                origin: "markText"
            }, e.sel, NaN);
            var s, l = t.line,
                u = e.cm;
            if (e.iter(l, n.line + 1, function(e) {
                    u && i.collapsed && !u.options.lineWrapping && br(e) == u.display.maxLine && (s = !0), i.collapsed && l != t.line && to(e, 0), rr(e, new er(i, l == t.line ? t.ch : null, l == n.line ? n.ch : null)), ++l
                }), i.collapsed && e.iter(t.line, n.line + 1, function(t) {
                    _r(e, t) && to(t, 0)
                }), i.clearOnEnter && Da(i, "beforeCursorEnter", function() {
                    i.clear()
                }), i.readOnly && (zi = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), i.collapsed && (i.id = ++ya, i.atomic = !0), u) {
                if (s && (u.curOp.updateMaxLine = !0), i.collapsed) Rt(u, t.line, n.line + 1);
                else if (i.className || i.title || i.startStyle || i.endStyle || i.css)
                    for (var c = t.line; c <= n.line; c++) Ft(u, c, "text");
                i.atomic && Me(u.doc), So(u, "markerAdded", u, i)
            }
            return i
        }

        function Zn(e, t, n, r, o) {
            r = Bo(r), r.shared = !1;
            var i = [$n(e, t, n, r, o)],
                a = i[0],
                s = r.widgetNode;
            return Zr(e, function(e) {
                s && (r.widgetNode = s.cloneNode(!0)), i.push($n(e, me(e, t), me(e, n), r, o));
                for (var l = 0; l < e.linked.length; ++l)
                    if (e.linked[l].isParent) return;
                a = Oo(i)
            }), new xa(i, a)
        }

        function Xn(e) {
            return e.findMarks(Bi(e.first, 0), e.clipPos(Bi(e.lastLine())), function(e) {
                return e.parent
            })
        }

        function Qn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    o = r.find(),
                    i = e.clipPos(o.from),
                    a = e.clipPos(o.to);
                if (qi(i, a)) {
                    var s = $n(e, i, a, r.primary, r.primary.type);
                    r.markers.push(s), s.parent = r
                }
            }
        }

        function Jn(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t],
                    r = [n.primary.doc];
                Zr(n.primary.doc, function(e) {
                    r.push(e)
                });
                for (var o = 0; o < n.markers.length; o++) {
                    var i = n.markers[o];
                    Po(r, i.doc) == -1 && (i.parent = null, n.markers.splice(o--, 1))
                }
            }
        }

        function er(e, t, n) {
            this.marker = e, this.from = t, this.to = n
        }

        function tr(e, t) {
            if (e)
                for (var n = 0; n < e.length; ++n) {
                    var r = e[n];
                    if (r.marker == t) return r
                }
        }

        function nr(e, t) {
            for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
            return n
        }

        function rr(e, t) {
            e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
        }

        function or(e, t, n) {
            if (e)
                for (var r, o = 0; o < e.length; ++o) {
                    var i = e[o],
                        a = i.marker,
                        s = null == i.from || (a.inclusiveLeft ? i.from <= t : i.from < t);
                    if (s || i.from == t && "bookmark" == a.type && (!n || !i.marker.insertLeft)) {
                        var l = null == i.to || (a.inclusiveRight ? i.to >= t : i.to > t);
                        (r || (r = [])).push(new er(a, i.from, l ? null : i.to))
                    }
                }
            return r
        }

        function ir(e, t, n) {
            if (e)
                for (var r, o = 0; o < e.length; ++o) {
                    var i = e[o],
                        a = i.marker,
                        s = null == i.to || (a.inclusiveRight ? i.to >= t : i.to > t);
                    if (s || i.from == t && "bookmark" == a.type && (!n || i.marker.insertLeft)) {
                        var l = null == i.from || (a.inclusiveLeft ? i.from <= t : i.from < t);
                        (r || (r = [])).push(new er(a, l ? null : i.from - t, null == i.to ? null : i.to - t))
                    }
                }
            return r
        }

        function ar(e, t) {
            if (t.full) return null;
            var n = ve(e, t.from.line) && Qr(e, t.from.line).markedSpans,
                r = ve(e, t.to.line) && Qr(e, t.to.line).markedSpans;
            if (!n && !r) return null;
            var o = t.from.ch,
                i = t.to.ch,
                a = 0 == qi(t.from, t.to),
                s = or(n, o, a),
                l = ir(r, i, a),
                u = 1 == t.text.length,
                c = Oo(t.text).length + (u ? o : 0);
            if (s)
                for (var d = 0; d < s.length; ++d) {
                    var p = s[d];
                    if (null == p.to) {
                        var f = tr(l, p.marker);
                        f ? u && (p.to = null == f.to ? null : f.to + c) : p.to = o
                    }
                }
            if (l)
                for (var d = 0; d < l.length; ++d) {
                    var p = l[d];
                    if (null != p.to && (p.to += c), null == p.from) {
                        var f = tr(s, p.marker);
                        f || (p.from = c, u && (s || (s = [])).push(p))
                    } else p.from += c, u && (s || (s = [])).push(p)
                }
            s && (s = sr(s)), l && l != s && (l = sr(l));
            var h = [s];
            if (!u) {
                var m, g = t.text.length - 2;
                if (g > 0 && s)
                    for (var d = 0; d < s.length; ++d) null == s[d].to && (m || (m = [])).push(new er(s[d].marker, null, null));
                for (var d = 0; d < g; ++d) h.push(m);
                h.push(l)
            }
            return h
        }

        function sr(e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                null != n.from && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1)
            }
            return e.length ? e : null
        }

        function lr(e, t) {
            var n = vo(e, t),
                r = ar(e, t);
            if (!n) return r;
            if (!r) return n;
            for (var o = 0; o < n.length; ++o) {
                var i = n[o],
                    a = r[o];
                if (i && a) e: for (var s = 0; s < a.length; ++s) {
                    for (var l = a[s], u = 0; u < i.length; ++u)
                        if (i[u].marker == l.marker) continue e;
                    i.push(l)
                } else a && (n[o] = a)
            }
            return n
        }

        function ur(e, t, n) {
            var r = null;
            if (e.iter(t.line, n.line + 1, function(e) {
                    if (e.markedSpans)
                        for (var t = 0; t < e.markedSpans.length; ++t) {
                            var n = e.markedSpans[t].marker;
                            !n.readOnly || r && Po(r, n) != -1 || (r || (r = [])).push(n)
                        }
                }), !r) return null;
            for (var o = [{
                    from: t,
                    to: n
                }], i = 0; i < r.length; ++i)
                for (var a = r[i], s = a.find(0), l = 0; l < o.length; ++l) {
                    var u = o[l];
                    if (!(qi(u.to, s.from) < 0 || qi(u.from, s.to) > 0)) {
                        var c = [l, 1],
                            d = qi(u.from, s.from),
                            p = qi(u.to, s.to);
                        (d < 0 || !a.inclusiveLeft && !d) && c.push({
                            from: u.from,
                            to: s.from
                        }), (p > 0 || !a.inclusiveRight && !p) && c.push({
                            from: s.to,
                            to: u.to
                        }), o.splice.apply(o, c), l += c.length - 1
                    }
                }
            return o
        }

        function cr(e) {
            var t = e.markedSpans;
            if (t) {
                for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                e.markedSpans = null
            }
        }

        function dr(e, t) {
            if (t) {
                for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                e.markedSpans = t
            }
        }

        function pr(e) {
            return e.inclusiveLeft ? -1 : 0
        }

        function fr(e) {
            return e.inclusiveRight ? 1 : 0
        }

        function hr(e, t) {
            var n = e.lines.length - t.lines.length;
            if (0 != n) return n;
            var r = e.find(),
                o = t.find(),
                i = qi(r.from, o.from) || pr(e) - pr(t);
            if (i) return -i;
            var a = qi(r.to, o.to) || fr(e) - fr(t);
            return a ? a : t.id - e.id
        }

        function mr(e, t) {
            var n, r = Wi && e.markedSpans;
            if (r)
                for (var o, i = 0; i < r.length; ++i) o = r[i], o.marker.collapsed && null == (t ? o.from : o.to) && (!n || hr(n, o.marker) < 0) && (n = o.marker);
            return n
        }

        function gr(e) {
            return mr(e, !0)
        }

        function vr(e) {
            return mr(e, !1)
        }

        function yr(e, t, n, r, o) {
            var i = Qr(e, t),
                a = Wi && i.markedSpans;
            if (a)
                for (var s = 0; s < a.length; ++s) {
                    var l = a[s];
                    if (l.marker.collapsed) {
                        var u = l.marker.find(0),
                            c = qi(u.from, n) || pr(l.marker) - pr(o),
                            d = qi(u.to, r) || fr(l.marker) - fr(o);
                        if (!(c >= 0 && d <= 0 || c <= 0 && d >= 0) && (c <= 0 && (l.marker.inclusiveRight && o.inclusiveLeft ? qi(u.to, n) >= 0 : qi(u.to, n) > 0) || c >= 0 && (l.marker.inclusiveRight && o.inclusiveLeft ? qi(u.from, r) <= 0 : qi(u.from, r) < 0))) return !0
                    }
                }
        }

        function br(e) {
            for (var t; t = gr(e);) e = t.find(-1, !0).line;
            return e
        }

        function xr(e) {
            for (var t, n; t = vr(e);) e = t.find(1, !0).line, (n || (n = [])).push(e);
            return n
        }

        function wr(e, t) {
            var n = Qr(e, t),
                r = br(n);
            return n == r ? t : no(r)
        }

        function kr(e, t) {
            if (t > e.lastLine()) return t;
            var n, r = Qr(e, t);
            if (!_r(e, r)) return t;
            for (; n = vr(r);) r = n.find(1, !0).line;
            return no(r) + 1
        }

        function _r(e, t) {
            var n = Wi && t.markedSpans;
            if (n)
                for (var r, o = 0; o < n.length; ++o)
                    if (r = n[o], r.marker.collapsed) {
                        if (null == r.from) return !0;
                        if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Cr(e, t, r)) return !0
                    }
        }

        function Cr(e, t, n) {
            if (null == n.to) {
                var r = n.marker.find(1, !0);
                return Cr(e, r.line, tr(r.line.markedSpans, n.marker))
            }
            if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
            for (var o, i = 0; i < t.markedSpans.length; ++i)
                if (o = t.markedSpans[i], o.marker.collapsed && !o.marker.widgetNode && o.from == n.to && (null == o.to || o.to != n.from) && (o.marker.inclusiveLeft || n.marker.inclusiveRight) && Cr(e, t, o)) return !0
        }

        function Er(e, t, n) {
            oo(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && zn(e, null, n)
        }

        function Sr(e) {
            if (null != e.height) return e.height;
            var t = e.doc.cm;
            if (!t) return 0;
            if (!Za(document.body, e.node)) {
                var n = "position: relative;";
                e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), Go(t.display.measure, Vo("div", [e.node], null, n))
            }
            return e.height = e.node.parentNode.offsetHeight
        }

        function Tr(e, t, n, r) {
            var o = new wa(e, n, r),
                i = e.cm;
            return i && o.noHScroll && (i.display.alignWidgets = !0), Hn(e, t, "widget", function(t) {
                var n = t.widgets || (t.widgets = []);
                if (null == o.insertAt ? n.push(o) : n.splice(Math.min(n.length - 1, Math.max(0, o.insertAt)), 0, o), o.line = t, i && !_r(e, t)) {
                    var r = oo(t) < e.scrollTop;
                    to(t, t.height + Sr(o)), r && zn(i, null, o.height), i.curOp.forceUpdate = !0
                }
                return !0
            }), o
        }

        function Ar(e, t, n, r) {
            e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), cr(e), dr(e, n);
            var o = r ? r(e) : 1;
            o != e.height && to(e, o)
        }

        function Mr(e) {
            e.parent = null, cr(e)
        }

        function Lr(e, t) {
            if (e)
                for (;;) {
                    var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                    if (!n) break;
                    e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                    var r = n[1] ? "bgClass" : "textClass";
                    null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
                }
            return e
        }

        function Nr(t, n) {
            if (t.blankLine) return t.blankLine(n);
            if (t.innerMode) {
                var r = e.innerMode(t, n);
                return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
            }
        }

        function Dr(t, n, r, o) {
            for (var i = 0; i < 10; i++) {
                o && (o[0] = e.innerMode(t, r).mode);
                var a = t.token(n, r);
                if (n.pos > n.start) return a
            }
            throw new Error("Mode " + t.name + " failed to advance stream.")
        }

        function Ir(e, t, n, r) {
            function o(e) {
                return {
                    start: d.start,
                    end: d.pos,
                    string: d.current(),
                    type: i || null,
                    state: e ? ca(a.mode, c) : c
                }
            }
            var i, a = e.doc,
                s = a.mode;
            t = me(a, t);
            var l, u = Qr(a, t.line),
                c = He(e, t.line, n),
                d = new va(u.text, e.options.tabSize);
            for (r && (l = []);
                (r || d.pos < t.ch) && !d.eol();) d.start = d.pos, i = Dr(s, d, c), r && l.push(o(!0));
            return r ? l : o()
        }

        function Or(e, t, n, r, o, i, a) {
            var s = n.flattenSpans;
            null == s && (s = e.options.flattenSpans);
            var l, u = 0,
                c = null,
                d = new va(t, e.options.tabSize),
                p = e.options.addModeClass && [null];
            for ("" == t && Lr(Nr(n, r), i); !d.eol();) {
                if (d.pos > e.options.maxHighlightLength ? (s = !1, a && Fr(e, t, r, d.pos), d.pos = t.length, l = null) : l = Lr(Dr(n, d, r, p), i), p) {
                    var f = p[0].name;
                    f && (l = "m-" + (l ? f + " " + l : f))
                }
                if (!s || c != l) {
                    for (; u < d.start;) u = Math.min(d.start, u + 5e4), o(u, c);
                    c = l
                }
                d.start = d.pos
            }
            for (; u < d.pos;) {
                var h = Math.min(d.pos, u + 5e4);
                o(h, c), u = h
            }
        }

        function Pr(e, t, n, r) {
            var o = [e.state.modeGen],
                i = {};
            Or(e, t.text, e.doc.mode, n, function(e, t) {
                o.push(e, t)
            }, i, r);
            for (var a = 0; a < e.state.overlays.length; ++a) {
                var s = e.state.overlays[a],
                    l = 1,
                    u = 0;
                Or(e, t.text, s.mode, !0, function(e, t) {
                    for (var n = l; u < e;) {
                        var r = o[l];
                        r > e && o.splice(l, 1, e, o[l + 1], r), l += 2, u = Math.min(e, r)
                    }
                    if (t)
                        if (s.opaque) o.splice(n, l - n, e, "cm-overlay " + t), l = n + 2;
                        else
                            for (; n < l; n += 2) {
                                var i = o[n + 1];
                                o[n + 1] = (i ? i + " " : "") + "cm-overlay " + t
                            }
                }, i)
            }
            return {
                styles: o,
                classes: i.bgClass || i.textClass ? i : null
            }
        }

        function Rr(e, t, n) {
            if (!t.styles || t.styles[0] != e.state.modeGen) {
                var r = He(e, no(t)),
                    o = Pr(e, t, t.text.length > e.options.maxHighlightLength ? ca(e.doc.mode, r) : r);
                t.stateAfter = r, t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.frontier && e.doc.frontier++
            }
            return t.styles
        }

        function Fr(e, t, n, r) {
            var o = e.doc.mode,
                i = new va(t, e.options.tabSize);
            for (i.start = i.pos = r || 0, "" == t && Nr(o, n); !i.eol();) Dr(o, i, n), i.start = i.pos
        }

        function zr(e, t) {
            if (!e || /^\s*$/.test(e)) return null;
            var n = t.addModeClass ? Ca : _a;
            return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
        }

        function Wr(e, t) {
            var n = Vo("span", null, null, _i ? "padding-right: .1px" : null),
                r = {
                    pre: Vo("pre", [n], "CodeMirror-line"),
                    content: n,
                    col: 0,
                    pos: 0,
                    cm: e,
                    trailingSpace: !1,
                    splitSpaces: (wi || _i) && e.getOption("lineWrapping")
                };
            t.measure = {};
            for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
                var i, a = o ? t.rest[o - 1] : t.line;
                r.pos = 0, r.addToken = qr, ti(e.display.measure) && (i = io(a)) && (r.addToken = Ur(r.addToken, i)), r.map = [];
                var s = t != e.display.externalMeasured && no(a);
                Vr(a, r, Rr(e, a, s)), a.styleClasses && (a.styleClasses.bgClass && (r.bgClass = Zo(a.styleClasses.bgClass, r.bgClass || "")), a.styleClasses.textClass && (r.textClass = Zo(a.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(ei(e.display.measure))), 0 == o ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}))
            }
            if (_i) {
                var l = r.content.lastChild;
                (/\bcm-tab\b/.test(l.className) || l.querySelector && l.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
            }
            return Pa(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = Zo(r.pre.className, r.textClass || "")), r
        }

        function Br(e) {
            var t = Vo("span", "•", "cm-invalidchar");
            return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
        }

        function qr(e, t, n, r, o, i, a) {
            if (t) {
                var s = e.splitSpaces ? Hr(t, e.trailingSpace) : t,
                    l = e.cm.state.specialChars,
                    u = !1;
                if (l.test(t))
                    for (var c = document.createDocumentFragment(), d = 0;;) {
                        l.lastIndex = d;
                        var p = l.exec(t),
                            f = p ? p.index - d : t.length - d;
                        if (f) {
                            var h = document.createTextNode(s.slice(d, d + f));
                            wi && ki < 9 ? c.appendChild(Vo("span", [h])) : c.appendChild(h), e.map.push(e.pos, e.pos + f, h), e.col += f, e.pos += f
                        }
                        if (!p) break;
                        if (d += f + 1, "\t" == p[0]) {
                            var m = e.cm.options.tabSize,
                                g = m - e.col % m,
                                h = c.appendChild(Vo("span", Io(g), "cm-tab"));
                            h.setAttribute("role", "presentation"), h.setAttribute("cm-text", "\t"), e.col += g
                        } else if ("\r" == p[0] || "\n" == p[0]) {
                            var h = c.appendChild(Vo("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar"));
                            h.setAttribute("cm-text", p[0]), e.col += 1
                        } else {
                            var h = e.cm.options.specialCharPlaceholder(p[0]);
                            h.setAttribute("cm-text", p[0]), wi && ki < 9 ? c.appendChild(Vo("span", [h])) : c.appendChild(h), e.col += 1
                        }
                        e.map.push(e.pos, e.pos + 1, h), e.pos++
                    } else {
                        e.col += t.length;
                        var c = document.createTextNode(s);
                        e.map.push(e.pos, e.pos + t.length, c), wi && ki < 9 && (u = !0), e.pos += t.length
                    }
                if (e.trailingSpace = 32 == s.charCodeAt(t.length - 1), n || r || o || u || a) {
                    var v = n || "";
                    r && (v += r), o && (v += o);
                    var y = Vo("span", [c], v, a);
                    return i && (y.title = i), e.content.appendChild(y)
                }
                e.content.appendChild(c)
            }
        }

        function Hr(e, t) {
            if (e.length > 1 && !/  /.test(e)) return e;
            for (var n = t, r = "", o = 0; o < e.length; o++) {
                var i = e.charAt(o);
                " " != i || !n || o != e.length - 1 && 32 != e.charCodeAt(o + 1) || (i = " "), r += i, n = " " == i
            }
            return r
        }

        function Ur(e, t) {
            return function(n, r, o, i, a, s, l) {
                o = o ? o + " cm-force-border" : "cm-force-border";
                for (var u = n.pos, c = u + r.length;;) {
                    for (var d = 0; d < t.length; d++) {
                        var p = t[d];
                        if (p.to > u && p.from <= u) break
                    }
                    if (p.to >= c) return e(n, r, o, i, a, s, l);
                    e(n, r.slice(0, p.to - u), o, i, null, s, l), i = null, r = r.slice(p.to - u), u = p.to
                }
            }
        }

        function jr(e, t, n, r) {
            var o = !r && n.widgetNode;
            o && e.map.push(e.pos, e.pos + t, o), !r && e.cm.display.input.needsContentAttribute && (o || (o = e.content.appendChild(document.createElement("span"))), o.setAttribute("cm-marker", n.id)), o && (e.cm.display.input.setUneditable(o), e.content.appendChild(o)), e.pos += t, e.trailingSpace = !1
        }

        function Vr(e, t, n) {
            var r = e.markedSpans,
                o = e.text,
                i = 0;
            if (r)
                for (var a, s, l, u, c, d, p, f = o.length, h = 0, m = 1, g = "", v = 0;;) {
                    if (v == h) {
                        l = u = c = d = s = "", p = null, v = 1 / 0;
                        for (var y, b = [], x = 0; x < r.length; ++x) {
                            var w = r[x],
                                k = w.marker;
                            "bookmark" == k.type && w.from == h && k.widgetNode ? b.push(k) : w.from <= h && (null == w.to || w.to > h || k.collapsed && w.to == h && w.from == h) ? (null != w.to && w.to != h && v > w.to && (v = w.to, u = ""), k.className && (l += " " + k.className), k.css && (s = (s ? s + ";" : "") + k.css), k.startStyle && w.from == h && (c += " " + k.startStyle), k.endStyle && w.to == v && (y || (y = [])).push(k.endStyle, w.to), k.title && !d && (d = k.title), k.collapsed && (!p || hr(p.marker, k) < 0) && (p = w)) : w.from > h && v > w.from && (v = w.from)
                        }
                        if (y)
                            for (var x = 0; x < y.length; x += 2) y[x + 1] == v && (u += " " + y[x]);
                        if (!p || p.from == h)
                            for (var x = 0; x < b.length; ++x) jr(t, 0, b[x]);
                        if (p && (p.from || 0) == h) {
                            if (jr(t, (null == p.to ? f + 1 : p.to) - h, p.marker, null == p.from), null == p.to) return;
                            p.to == h && (p = !1)
                        }
                    }
                    if (h >= f) break;
                    for (var _ = Math.min(f, v);;) {
                        if (g) {
                            var C = h + g.length;
                            if (!p) {
                                var E = C > _ ? g.slice(0, _ - h) : g;
                                t.addToken(t, E, a ? a + l : l, c, h + E.length == v ? u : "", d, s)
                            }
                            if (C >= _) {
                                g = g.slice(_ - h), h = _;
                                break
                            }
                            h = C, c = ""
                        }
                        g = o.slice(i, i = n[m++]), a = zr(n[m++], t.cm.options)
                    }
                } else
                    for (var m = 1; m < n.length; m += 2) t.addToken(t, o.slice(i, i = n[m]), zr(n[m + 1], t.cm.options))
        }

        function Kr(e, t) {
            return 0 == t.from.ch && 0 == t.to.ch && "" == Oo(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
        }

        function Gr(e, t, n, r) {
            function o(e) {
                return n ? n[e] : null
            }

            function i(e, n, o) {
                Ar(e, n, o, r), So(e, "change", e, t)
            }

            function a(e, t) {
                for (var n = e, i = []; n < t; ++n) i.push(new ka(u[n], o(n), r));
                return i
            }
            var s = t.from,
                l = t.to,
                u = t.text,
                c = Qr(e, s.line),
                d = Qr(e, l.line),
                p = Oo(u),
                f = o(u.length - 1),
                h = l.line - s.line;
            if (t.full) e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);
            else if (Kr(e, t)) {
                var m = a(0, u.length - 1);
                i(d, d.text, f), h && e.remove(s.line, h), m.length && e.insert(s.line, m)
            } else if (c == d)
                if (1 == u.length) i(c, c.text.slice(0, s.ch) + p + c.text.slice(l.ch), f);
                else {
                    var m = a(1, u.length - 1);
                    m.push(new ka(p + c.text.slice(l.ch), f, r)), i(c, c.text.slice(0, s.ch) + u[0], o(0)), e.insert(s.line + 1, m)
                } else if (1 == u.length) i(c, c.text.slice(0, s.ch) + u[0] + d.text.slice(l.ch), o(0)), e.remove(s.line + 1, h);
            else {
                i(c, c.text.slice(0, s.ch) + u[0], o(0)), i(d, p + d.text.slice(l.ch), f);
                var m = a(1, u.length - 1);
                h > 1 && e.remove(s.line + 1, h - 1), e.insert(s.line + 1, m)
            }
            So(e, "change", e, t)
        }

        function Yr(e) {
            this.lines = e, this.parent = null;
            for (var t = 0, n = 0; t < e.length; ++t) e[t].parent = this, n += e[t].height;
            this.height = n
        }

        function $r(e) {
            this.children = e;
            for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
                var o = e[r];
                t += o.chunkSize(), n += o.height, o.parent = this
            }
            this.size = t, this.height = n, this.parent = null
        }

        function Zr(e, t, n) {
            function r(e, o, i) {
                if (e.linked)
                    for (var a = 0; a < e.linked.length; ++a) {
                        var s = e.linked[a];
                        if (s.doc != o) {
                            var l = i && s.sharedHist;
                            n && !l || (t(s.doc, l), r(s.doc, e, l))
                        }
                    }
            }
            r(e, null, !0)
        }

        function Xr(e, t) {
            if (t.cm) throw new Error("This document is already in use.");
            e.doc = t, t.cm = e, a(e), n(e), e.options.lineWrapping || p(e), e.options.mode = t.modeOption, Rt(e)
        }

        function Qr(e, t) {
            if (t -= e.first, t < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
            for (var n = e; !n.lines;)
                for (var r = 0;; ++r) {
                    var o = n.children[r],
                        i = o.chunkSize();
                    if (t < i) {
                        n = o;
                        break
                    }
                    t -= i
                }
            return n.lines[t]
        }

        function Jr(e, t, n) {
            var r = [],
                o = t.line;
            return e.iter(t.line, n.line + 1, function(e) {
                var i = e.text;
                o == n.line && (i = i.slice(0, n.ch)), o == t.line && (i = i.slice(t.ch)), r.push(i), ++o
            }), r
        }

        function eo(e, t, n) {
            var r = [];
            return e.iter(t, n, function(e) {
                r.push(e.text)
            }), r
        }

        function to(e, t) {
            var n = t - e.height;
            if (n)
                for (var r = e; r; r = r.parent) r.height += n
        }

        function no(e) {
            if (null == e.parent) return null;
            for (var t = e.parent, n = Po(t.lines, e), r = t.parent; r; t = r, r = r.parent)
                for (var o = 0; r.children[o] != t; ++o) n += r.children[o].chunkSize();
            return n + t.first
        }

        function ro(e, t) {
            var n = e.first;
            e: do {
                for (var r = 0; r < e.children.length; ++r) {
                    var o = e.children[r],
                        i = o.height;
                    if (t < i) {
                        e = o;
                        continue e
                    }
                    t -= i, n += o.chunkSize()
                }
                return n
            } while (!e.lines);
            for (var r = 0; r < e.lines.length; ++r) {
                var a = e.lines[r],
                    s = a.height;
                if (t < s) break;
                t -= s
            }
            return n + r
        }

        function oo(e) {
            e = br(e);
            for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
                var o = n.lines[r];
                if (o == e) break;
                t += o.height
            }
            for (var i = n.parent; i; n = i, i = n.parent)
                for (var r = 0; r < i.children.length; ++r) {
                    var a = i.children[r];
                    if (a == n) break;
                    t += a.height
                }
            return t
        }

        function io(e) {
            var t = e.order;
            return null == t && (t = e.order = us(e.text)), t
        }

        function ao(e) {
            this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
        }

        function so(e, t) {
            var n = {
                from: G(t.from),
                to: ta(t),
                text: Jr(e, t.from, t.to)
            };
            return mo(e, n, t.from.line, t.to.line + 1), Zr(e, function(e) {
                mo(e, n, t.from.line, t.to.line + 1)
            }, !0), n
        }

        function lo(e) {
            for (; e.length;) {
                var t = Oo(e);
                if (!t.ranges) break;
                e.pop()
            }
        }

        function uo(e, t) {
            return t ? (lo(e.done), Oo(e.done)) : e.done.length && !Oo(e.done).ranges ? Oo(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), Oo(e.done)) : void 0
        }

        function co(e, t, n, r) {
            var o = e.history;
            o.undone.length = 0;
            var i, a = +new Date;
            if ((o.lastOp == r || o.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && o.lastModTime > a - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (i = uo(o, o.lastOp == r))) {
                var s = Oo(i.changes);
                0 == qi(t.from, t.to) && 0 == qi(t.from, s.to) ? s.to = ta(t) : i.changes.push(so(e, t))
            } else {
                var l = Oo(o.done);
                for (l && l.ranges || ho(e.sel, o.done), i = {
                        changes: [so(e, t)],
                        generation: o.generation
                    }, o.done.push(i); o.done.length > o.undoDepth;) o.done.shift(), o.done[0].ranges || o.done.shift()
            }
            o.done.push(n), o.generation = ++o.maxGeneration, o.lastModTime = o.lastSelTime = a, o.lastOp = o.lastSelOp = r, o.lastOrigin = o.lastSelOrigin = t.origin, s || Pa(e, "historyAdded")
        }

        function po(e, t, n, r) {
            var o = t.charAt(0);
            return "*" == o || "+" == o && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
        }

        function fo(e, t, n, r) {
            var o = e.history,
                i = r && r.origin;
            n == o.lastSelOp || i && o.lastSelOrigin == i && (o.lastModTime == o.lastSelTime && o.lastOrigin == i || po(e, i, Oo(o.done), t)) ? o.done[o.done.length - 1] = t : ho(t, o.done), o.lastSelTime = +new Date, o.lastSelOrigin = i, o.lastSelOp = n, r && r.clearRedo !== !1 && lo(o.undone)
        }

        function ho(e, t) {
            var n = Oo(t);
            n && n.ranges && n.equals(e) || t.push(e)
        }

        function mo(e, t, n, r) {
            var o = t["spans_" + e.id],
                i = 0;
            e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) {
                n.markedSpans && ((o || (o = t["spans_" + e.id] = {}))[i] = n.markedSpans), ++i
            })
        }

        function go(e) {
            if (!e) return null;
            for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
            return t ? t.length ? t : null : e
        }

        function vo(e, t) {
            var n = t["spans_" + e.id];
            if (!n) return null;
            for (var r = 0, o = []; r < t.text.length; ++r) o.push(go(n[r]));
            return o
        }

        function yo(e, t, n) {
            for (var r = 0, o = []; r < e.length; ++r) {
                var i = e[r];
                if (i.ranges) o.push(n ? ce.prototype.deepCopy.call(i) : i);
                else {
                    var a = i.changes,
                        s = [];
                    o.push({
                        changes: s
                    });
                    for (var l = 0; l < a.length; ++l) {
                        var u, c = a[l];
                        if (s.push({
                                from: c.from,
                                to: c.to,
                                text: c.text
                            }), t)
                            for (var d in c)(u = d.match(/^spans_(\d+)$/)) && Po(t, Number(u[1])) > -1 && (Oo(s)[d] = c[d], delete c[d])
                    }
                }
            }
            return o
        }

        function bo(e, t, n, r) {
            n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
        }

        function xo(e, t, n, r) {
            for (var o = 0; o < e.length; ++o) {
                var i = e[o],
                    a = !0;
                if (i.ranges) {
                    i.copied || (i = e[o] = i.deepCopy(), i.copied = !0);
                    for (var s = 0; s < i.ranges.length; s++) bo(i.ranges[s].anchor, t, n, r), bo(i.ranges[s].head, t, n, r)
                } else {
                    for (var s = 0; s < i.changes.length; ++s) {
                        var l = i.changes[s];
                        if (n < l.from.line) l.from = Bi(l.from.line + r, l.from.ch), l.to = Bi(l.to.line + r, l.to.ch);
                        else if (t <= l.to.line) {
                            a = !1;
                            break
                        }
                    }
                    a || (e.splice(0, o + 1), o = 0)
                }
            }
        }

        function wo(e, t) {
            var n = t.from.line,
                r = t.to.line,
                o = t.text.length - (r - n) - 1;
            xo(e.done, n, r, o), xo(e.undone, n, r, o)
        }

        function ko(e) {
            return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
        }

        function _o(e) {
            return e.target || e.srcElement
        }

        function Co(e) {
            var t = e.which;
            return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), Di && e.ctrlKey && 1 == t && (t = 3), t
        }

        function Eo(e, t, n) {
            var r = e._handlers && e._handlers[t];
            return n ? r && r.length > 0 ? r.slice() : Ia : r || Ia
        }

        function So(e, t) {
            function n(e) {
                return function() {
                    e.apply(null, i)
                }
            }
            var r = Eo(e, t, !1);
            if (r.length) {
                var o, i = Array.prototype.slice.call(arguments, 2);
                Gi ? o = Gi.delayedCallbacks : Ra ? o = Ra : (o = Ra = [], setTimeout(To, 0));
                for (var a = 0; a < r.length; ++a) o.push(n(r[a]))
            }
        }

        function To() {
            var e = Ra;
            Ra = null;
            for (var t = 0; t < e.length; ++t) e[t]()
        }

        function Ao(e, t, n) {
            return "string" == typeof t && (t = {
                type: t,
                preventDefault: function() {
                    this.defaultPrevented = !0
                }
            }), Pa(e, n || t.type, e, t), ko(t) || t.codemirrorIgnore
        }

        function Mo(e) {
            var t = e._handlers && e._handlers.cursorActivity;
            if (t)
                for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) Po(n, t[r]) == -1 && n.push(t[r])
        }

        function Lo(e, t) {
            return Eo(e, t).length > 0
        }

        function No(e) {
            e.prototype.on = function(e, t) {
                Da(this, e, t)
            }, e.prototype.off = function(e, t) {
                Oa(this, e, t)
            }
        }

        function Do() {
            this.id = null
        }

        function Io(e) {
            for (; ja.length <= e;) ja.push(Oo(ja) + " ");
            return ja[e]
        }

        function Oo(e) {
            return e[e.length - 1]
        }

        function Po(e, t) {
            for (var n = 0; n < e.length; ++n)
                if (e[n] == t) return n;
            return -1
        }

        function Ro(e, t) {
            for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
            return n
        }

        function Fo(e, t, n) {
            for (var r = 0, o = n(t); r < e.length && n(e[r]) <= o;) r++;
            e.splice(r, 0, t)
        }

        function zo() {}

        function Wo(e, t) {
            var n;
            return Object.create ? n = Object.create(e) : (zo.prototype = e, n = new zo), t && Bo(t, n), n
        }

        function Bo(e, t, n) {
            t || (t = {});
            for (var r in e) !e.hasOwnProperty(r) || n === !1 && t.hasOwnProperty(r) || (t[r] = e[r]);
            return t
        }

        function qo(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return function() {
                return e.apply(null, t)
            }
        }

        function Ho(e, t) {
            return t ? !!(t.source.indexOf("\\w") > -1 && Ya(e)) || t.test(e) : Ya(e)
        }

        function Uo(e) {
            for (var t in e)
                if (e.hasOwnProperty(t) && e[t]) return !1;
            return !0
        }

        function jo(e) {
            return e.charCodeAt(0) >= 768 && $a.test(e)
        }

        function Vo(e, t, n, r) {
            var o = document.createElement(e);
            if (n && (o.className = n), r && (o.style.cssText = r), "string" == typeof t) o.appendChild(document.createTextNode(t));
            else if (t)
                for (var i = 0; i < t.length; ++i) o.appendChild(t[i]);
            return o
        }

        function Ko(e) {
            for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
            return e
        }

        function Go(e, t) {
            return Ko(e).appendChild(t)
        }

        function Yo() {
            for (var e = document.activeElement; e && e.root && e.root.activeElement;) e = e.root.activeElement;
            return e
        }

        function $o(e) {
            return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
        }

        function Zo(e, t) {
            for (var n = e.split(" "), r = 0; r < n.length; r++) n[r] && !$o(n[r]).test(t) && (t += " " + n[r]);
            return t
        }

        function Xo(e) {
            if (document.body.getElementsByClassName)
                for (var t = document.body.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
                    var r = t[n].CodeMirror;
                    r && e(r)
                }
        }

        function Qo() {
            ts || (Jo(), ts = !0)
        }

        function Jo() {
            var e;
            Da(window, "resize", function() {
                null == e && (e = setTimeout(function() {
                    e = null, Xo(Vt)
                }, 100))
            }), Da(window, "blur", function() {
                Xo(bn)
            })
        }

        function ei(e) {
            if (null == Xa) {
                var t = Vo("span", "​");
                Go(e, Vo("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Xa = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(wi && ki < 8))
            }
            var n = Xa ? Vo("span", "​") : Vo("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
            return n.setAttribute("cm-text", ""), n
        }

        function ti(e) {
            if (null != Qa) return Qa;
            var t = Go(e, document.createTextNode("AخA")),
                n = Ka(t, 0, 1).getBoundingClientRect(),
                r = Ka(t, 1, 2).getBoundingClientRect();
            return Ko(e), !(!n || n.left == n.right) && (Qa = r.right - n.right < 3)
        }

        function ni(e) {
            if (null != as) return as;
            var t = Go(e, Vo("span", "x")),
                n = t.getBoundingClientRect(),
                r = Ka(t, 0, 1).getBoundingClientRect();
            return as = Math.abs(n.left - r.left) > 1
        }

        function ri(e, t, n, r) {
            if (!e) return r(t, n, "ltr");
            for (var o = !1, i = 0; i < e.length; ++i) {
                var a = e[i];
                (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr"), o = !0)
            }
            o || r(t, n, "ltr")
        }

        function oi(e) {
            return e.level % 2 ? e.to : e.from
        }

        function ii(e) {
            return e.level % 2 ? e.from : e.to
        }

        function ai(e) {
            var t = io(e);
            return t ? oi(t[0]) : 0
        }

        function si(e) {
            var t = io(e);
            return t ? ii(Oo(t)) : e.text.length
        }

        function li(e, t) {
            var n = Qr(e.doc, t),
                r = br(n);
            r != n && (t = no(r));
            var o = io(r),
                i = o ? o[0].level % 2 ? si(r) : ai(r) : 0;
            return Bi(t, i)
        }

        function ui(e, t) {
            for (var n, r = Qr(e.doc, t); n = vr(r);) r = n.find(1, !0).line, t = null;
            var o = io(r),
                i = o ? o[0].level % 2 ? ai(r) : si(r) : r.text.length;
            return Bi(null == t ? no(r) : t, i)
        }

        function ci(e, t) {
            var n = li(e, t.line),
                r = Qr(e.doc, n.line),
                o = io(r);
            if (!o || 0 == o[0].level) {
                var i = Math.max(0, r.text.search(/\S/)),
                    a = t.line == n.line && t.ch <= i && t.ch;
                return Bi(n.line, a ? 0 : i)
            }
            return n
        }

        function di(e, t, n) {
            var r = e[0].level;
            return t == r || n != r && t < n
        }

        function pi(e, t) {
            ls = null;
            for (var n, r = 0; r < e.length; ++r) {
                var o = e[r];
                if (o.from < t && o.to > t) return r;
                if (o.from == t || o.to == t) {
                    if (null != n) return di(e, o.level, e[n].level) ? (o.from != o.to && (ls = n), r) : (o.from != o.to && (ls = r), n);
                    n = r
                }
            }
            return n
        }

        function fi(e, t, n, r) {
            if (!r) return t + n;
            do t += n; while (t > 0 && jo(e.text.charAt(t)));
            return t
        }

        function hi(e, t, n, r) {
            var o = io(e);
            if (!o) return mi(e, t, n, r);
            for (var i = pi(o, t), a = o[i], s = fi(e, t, a.level % 2 ? -n : n, r);;) {
                if (s > a.from && s < a.to) return s;
                if (s == a.from || s == a.to) return pi(o, s) == i ? s : (a = o[i += n], n > 0 == a.level % 2 ? a.to : a.from);
                if (a = o[i += n], !a) return null;
                s = n > 0 == a.level % 2 ? fi(e, a.to, -1, r) : fi(e, a.from, 1, r)
            }
        }

        function mi(e, t, n, r) {
            var o = t + n;
            if (r)
                for (; o > 0 && jo(e.text.charAt(o));) o += n;
            return o < 0 || o > e.text.length ? null : o
        }
        var gi = navigator.userAgent,
            vi = navigator.platform,
            yi = /gecko\/\d/i.test(gi),
            bi = /MSIE \d/.test(gi),
            xi = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(gi),
            wi = bi || xi,
            ki = wi && (bi ? document.documentMode || 6 : xi[1]),
            _i = /WebKit\//.test(gi),
            Ci = _i && /Qt\/\d+\.\d+/.test(gi),
            Ei = /Chrome\//.test(gi),
            Si = /Opera\//.test(gi),
            Ti = /Apple Computer/.test(navigator.vendor),
            Ai = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(gi),
            Mi = /PhantomJS/.test(gi),
            Li = /AppleWebKit/.test(gi) && /Mobile\/\w+/.test(gi),
            Ni = Li || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(gi),
            Di = Li || /Mac/.test(vi),
            Ii = /\bCrOS\b/.test(gi),
            Oi = /win/i.test(vi),
            Pi = Si && gi.match(/Version\/(\d*\.\d*)/);
        Pi && (Pi = Number(Pi[1])), Pi && Pi >= 15 && (Si = !1, _i = !0);
        var Ri = Di && (Ci || Si && (null == Pi || Pi < 12.11)),
            Fi = yi || wi && ki >= 9,
            zi = !1,
            Wi = !1;
        m.prototype = Bo({
            update: function(e) {
                var t = e.scrollWidth > e.clientWidth + 1,
                    n = e.scrollHeight > e.clientHeight + 1,
                    r = e.nativeBarWidth;
                if (n) {
                    this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
                    var o = e.viewHeight - (t ? r : 0);
                    this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + o) + "px"
                } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
                if (t) {
                    this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                    var i = e.viewWidth - e.barLeft - (n ? r : 0);
                    this.horiz.firstChild.style.width = e.scrollWidth - e.clientWidth + i + "px"
                } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
                return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                    right: n ? r : 0,
                    bottom: t ? r : 0
                }
            },
            setScrollLeft: function(e) {
                this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz)
            },
            setScrollTop: function(e) {
                this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert)
            },
            zeroWidthHack: function() {
                var e = Di && !Ai ? "12px" : "18px";
                this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Do, this.disableVert = new Do
            },
            enableZeroWidthBar: function(e, t) {
                function n() {
                    var r = e.getBoundingClientRect(),
                        o = document.elementFromPoint(r.left + 1, r.bottom - 1);
                    o != e ? e.style.pointerEvents = "none" : t.set(1e3, n)
                }
                e.style.pointerEvents = "auto", t.set(1e3, n)
            },
            clear: function() {
                var e = this.horiz.parentNode;
                e.removeChild(this.horiz), e.removeChild(this.vert)
            }
        }, m.prototype), g.prototype = Bo({
            update: function() {
                return {
                    bottom: 0,
                    right: 0
                }
            },
            setScrollLeft: function() {},
            setScrollTop: function() {},
            clear: function() {}
        }, g.prototype), e.scrollbarModel = {
            "native": m,
            "null": g
        }, E.prototype.signal = function(e, t) {
            Lo(e, t) && this.events.push(arguments)
        }, E.prototype.finish = function() {
            for (var e = 0; e < this.events.length; e++) Pa.apply(null, this.events[e])
        };
        var Bi = e.Pos = function(e, t) {
                return this instanceof Bi ? (this.line = e, void(this.ch = t)) : new Bi(e, t)
            },
            qi = e.cmpPos = function(e, t) {
                return e.line - t.line || e.ch - t.ch
            },
            Hi = null;
        ne.prototype = Bo({
            init: function(e) {
                function t(e) {
                    if (!Ao(r, e)) {
                        if (r.somethingSelected()) Hi = {
                            lineWise: !1,
                            text: r.getSelections()
                        }, n.inaccurateSelection && (n.prevInput = "", n.inaccurateSelection = !1, i.value = Hi.text.join("\n"), Va(i));
                        else {
                            if (!r.options.lineWiseCopyCut) return;
                            var t = ee(r);
                            Hi = {
                                lineWise: !0,
                                text: t.text
                            }, "cut" == e.type ? r.setSelections(t.ranges, null, Wa) : (n.prevInput = "", i.value = t.text.join("\n"), Va(i))
                        }
                        "cut" == e.type && (r.state.cutIncoming = !0)
                    }
                }
                var n = this,
                    r = this.cm,
                    o = this.wrapper = re(),
                    i = this.textarea = o.firstChild;
                e.wrapper.insertBefore(o, e.wrapper.firstChild), Li && (i.style.width = "0px"), Da(i, "input", function() {
                    wi && ki >= 9 && n.hasSelection && (n.hasSelection = null), n.poll()
                }), Da(i, "paste", function(e) {
                    Ao(r, e) || Q(e, r) || (r.state.pasteIncoming = !0, n.fastPoll())
                }), Da(i, "cut", t), Da(i, "copy", t), Da(e.scroller, "paste", function(t) {
                    Kt(e, t) || Ao(r, t) || (r.state.pasteIncoming = !0, n.focus())
                }), Da(e.lineSpace, "selectstart", function(t) {
                    Kt(e, t) || Ma(t)
                }), Da(i, "compositionstart", function() {
                    var e = r.getCursor("from");
                    n.composing && n.composing.range.clear(), n.composing = {
                        start: e,
                        range: r.markText(e, r.getCursor("to"), {
                            className: "CodeMirror-composing"
                        })
                    }
                }), Da(i, "compositionend", function() {
                    n.composing && (n.poll(), n.composing.range.clear(), n.composing = null)
                })
            },
            prepareSelection: function() {
                var e = this.cm,
                    t = e.display,
                    n = e.doc,
                    r = Pe(e);
                if (e.options.moveInputWithCursor) {
                    var o = ht(e, n.sel.primary().head, "div"),
                        i = t.wrapper.getBoundingClientRect(),
                        a = t.lineDiv.getBoundingClientRect();
                    r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, o.top + a.top - i.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, o.left + a.left - i.left))
                }
                return r
            },
            showSelection: function(e) {
                var t = this.cm,
                    n = t.display;
                Go(n.cursorDiv, e.cursors), Go(n.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
            },
            reset: function(e) {
                if (!this.contextMenuPending) {
                    var t, n, r = this.cm,
                        o = r.doc;
                    if (r.somethingSelected()) {
                        this.prevInput = "";
                        var i = o.sel.primary();
                        t = is && (i.to().line - i.from().line > 100 || (n = r.getSelection()).length > 1e3);
                        var a = t ? "-" : n || r.getSelection();
                        this.textarea.value = a, r.state.focused && Va(this.textarea), wi && ki >= 9 && (this.hasSelection = a)
                    } else e || (this.prevInput = this.textarea.value = "", wi && ki >= 9 && (this.hasSelection = null));
                    this.inaccurateSelection = t
                }
            },
            getField: function() {
                return this.textarea
            },
            supportsTouch: function() {
                return !1
            },
            focus: function() {
                if ("nocursor" != this.cm.options.readOnly && (!Ni || Yo() != this.textarea)) try {
                    this.textarea.focus()
                } catch (e) {}
            },
            blur: function() {
                this.textarea.blur()
            },
            resetPosition: function() {
                this.wrapper.style.top = this.wrapper.style.left = 0
            },
            receivedFocus: function() {
                this.slowPoll()
            },
            slowPoll: function() {
                var e = this;
                e.pollingFast || e.polling.set(this.cm.options.pollInterval, function() {
                    e.poll(), e.cm.state.focused && e.slowPoll()
                })
            },
            fastPoll: function() {
                function e() {
                    var r = n.poll();
                    r || t ? (n.pollingFast = !1, n.slowPoll()) : (t = !0, n.polling.set(60, e))
                }
                var t = !1,
                    n = this;
                n.pollingFast = !0, n.polling.set(20, e)
            },
            poll: function() {
                var e = this.cm,
                    t = this.textarea,
                    n = this.prevInput;
                if (this.contextMenuPending || !e.state.focused || os(t) && !n && !this.composing || e.isReadOnly() || e.options.disableInput || e.state.keySeq) return !1;
                var r = t.value;
                if (r == n && !e.somethingSelected()) return !1;
                if (wi && ki >= 9 && this.hasSelection === r || Di && /[\uf700-\uf7ff]/.test(r)) return e.display.input.reset(), !1;
                if (e.doc.sel == e.display.selForContextMenu) {
                    var o = r.charCodeAt(0);
                    if (8203 != o || n || (n = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
                }
                for (var i = 0, a = Math.min(n.length, r.length); i < a && n.charCodeAt(i) == r.charCodeAt(i);) ++i;
                var s = this;
                return Lt(e, function() {
                    X(e, r.slice(i), n.length - i, null, s.composing ? "*compose" : null), r.length > 1e3 || r.indexOf("\n") > -1 ? t.value = s.prevInput = "" : s.prevInput = r, s.composing && (s.composing.range.clear(), s.composing.range = e.markText(s.composing.start, e.getCursor("to"), {
                        className: "CodeMirror-composing"
                    }))
                }), !0
            },
            ensurePolled: function() {
                this.pollingFast && this.poll() && (this.pollingFast = !1)
            },
            onKeyPress: function() {
                wi && ki >= 9 && (this.hasSelection = null), this.fastPoll()
            },
            onContextMenu: function(e) {
                function t() {
                    if (null != a.selectionStart) {
                        var e = o.somethingSelected(),
                            t = "​" + (e ? a.value : "");
                        a.value = "⇚", a.value = t, r.prevInput = e ? "" : "​", a.selectionStart = 1, a.selectionEnd = t.length, i.selForContextMenu = o.doc.sel
                    }
                }

                function n() {
                    if (r.contextMenuPending = !1, r.wrapper.style.cssText = d, a.style.cssText = c, wi && ki < 9 && i.scrollbars.setScrollTop(i.scroller.scrollTop = l), null != a.selectionStart) {
                        (!wi || wi && ki < 9) && t();
                        var e = 0,
                            n = function() {
                                i.selForContextMenu == o.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "​" == r.prevInput ? Nt(o, pa.selectAll)(o) : e++ < 10 ? i.detectingSelectAll = setTimeout(n, 500) : i.input.reset()
                            };
                        i.detectingSelectAll = setTimeout(n, 200)
                    }
                }
                var r = this,
                    o = r.cm,
                    i = o.display,
                    a = r.textarea,
                    s = Gt(o, e),
                    l = i.scroller.scrollTop;
                if (s && !Si) {
                    var u = o.options.resetSelectionOnContextMenu;
                    u && o.doc.sel.contains(s) == -1 && Nt(o, Se)(o.doc, fe(s), Wa);
                    var c = a.style.cssText,
                        d = r.wrapper.style.cssText;
                    r.wrapper.style.cssText = "position: absolute";
                    var p = r.wrapper.getBoundingClientRect();
                    if (a.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (e.clientY - p.top - 5) + "px; left: " + (e.clientX - p.left - 5) + "px; z-index: 1000; background: " + (wi ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", _i) var f = window.scrollY;
                    if (i.input.focus(), _i && window.scrollTo(null, f), i.input.reset(), o.somethingSelected() || (a.value = r.prevInput = " "), r.contextMenuPending = !0, i.selForContextMenu = o.doc.sel, clearTimeout(i.detectingSelectAll), wi && ki >= 9 && t(), Fi) {
                        Na(e);
                        var h = function() {
                            Oa(window, "mouseup", h), setTimeout(n, 20)
                        };
                        Da(window, "mouseup", h)
                    } else setTimeout(n, 50)
                }
            },
            readOnlyChanged: function(e) {
                e || this.reset()
            },
            setUneditable: zo,
            needsContentAttribute: !1
        }, ne.prototype), oe.prototype = Bo({
            init: function(e) {
                function t(e) {
                    if (!Ao(r, e)) {
                        if (r.somethingSelected()) Hi = {
                            lineWise: !1,
                            text: r.getSelections()
                        }, "cut" == e.type && r.replaceSelection("", null, "cut");
                        else {
                            if (!r.options.lineWiseCopyCut) return;
                            var t = ee(r);
                            Hi = {
                                lineWise: !0,
                                text: t.text
                            }, "cut" == e.type && r.operation(function() {
                                r.setSelections(t.ranges, 0, Wa), r.replaceSelection("", null, "cut")
                            })
                        }
                        if (e.clipboardData) {
                            e.clipboardData.clearData();
                            var i = Hi.text.join("\n");
                            if (e.clipboardData.setData("Text", i), e.clipboardData.getData("Text") == i) return void e.preventDefault()
                        }
                        var a = re(),
                            s = a.firstChild;
                        r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild), s.value = Hi.text.join("\n");
                        var l = document.activeElement;
                        Va(s), setTimeout(function() {
                            r.display.lineSpace.removeChild(a), l.focus(), l == o && n.showPrimarySelection()
                        }, 50)
                    }
                }
                var n = this,
                    r = n.cm,
                    o = n.div = e.lineDiv;
                te(o, r.options.spellcheck), Da(o, "paste", function(e) {
                    Ao(r, e) || Q(e, r) || ki <= 11 && setTimeout(Nt(r, function() {
                        n.pollContent() || Rt(r)
                    }), 20)
                }), Da(o, "compositionstart", function(e) {
                    var t = e.data;
                    if (n.composing = {
                            sel: r.doc.sel,
                            data: t,
                            startData: t
                        }, t) {
                        var o = r.doc.sel.primary(),
                            i = r.getLine(o.head.line),
                            a = i.indexOf(t, Math.max(0, o.head.ch - t.length));
                        a > -1 && a <= o.head.ch && (n.composing.sel = fe(Bi(o.head.line, a), Bi(o.head.line, a + t.length)))
                    }
                }), Da(o, "compositionupdate", function(e) {
                    n.composing.data = e.data
                }), Da(o, "compositionend", function(e) {
                    var t = n.composing;
                    t && (e.data == t.startData || /\u200b/.test(e.data) || (t.data = e.data), setTimeout(function() {
                        t.handled || n.applyComposition(t), n.composing == t && (n.composing = null)
                    }, 50))
                }), Da(o, "touchstart", function() {
                    n.forceCompositionEnd()
                }), Da(o, "input", function() {
                    n.composing || !r.isReadOnly() && n.pollContent() || Lt(n.cm, function() {
                        Rt(r)
                    })
                }), Da(o, "copy", t), Da(o, "cut", t)
            },
            prepareSelection: function() {
                var e = Pe(this.cm, !1);
                return e.focus = this.cm.state.focused, e
            },
            showSelection: function(e, t) {
                e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
            },
            showPrimarySelection: function() {
                var e = window.getSelection(),
                    t = this.cm.doc.sel.primary(),
                    n = se(this.cm, e.anchorNode, e.anchorOffset),
                    r = se(this.cm, e.focusNode, e.focusOffset);
                if (!n || n.bad || !r || r.bad || 0 != qi($(n, r), t.from()) || 0 != qi(Y(n, r), t.to())) {
                    var o = ie(this.cm, t.from()),
                        i = ie(this.cm, t.to());
                    if (o || i) {
                        var a = this.cm.display.view,
                            s = e.rangeCount && e.getRangeAt(0);
                        if (o) {
                            if (!i) {
                                var l = a[a.length - 1].measure,
                                    u = l.maps ? l.maps[l.maps.length - 1] : l.map;
                                i = {
                                    node: u[u.length - 1],
                                    offset: u[u.length - 2] - u[u.length - 3]
                                }
                            }
                        } else o = {
                            node: a[0].measure.map[2],
                            offset: 0
                        };
                        try {
                            var c = Ka(o.node, o.offset, i.offset, i.node)
                        } catch (d) {}
                        c && (!yi && this.cm.state.focused ? (e.collapse(o.node, o.offset), c.collapsed || e.addRange(c)) : (e.removeAllRanges(), e.addRange(c)), s && null == e.anchorNode ? e.addRange(s) : yi && this.startGracePeriod()), this.rememberSelection()
                    }
                }
            },
            startGracePeriod: function() {
                var e = this;
                clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
                    e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
                        e.cm.curOp.selectionChanged = !0
                    })
                }, 20)
            },
            showMultipleSelections: function(e) {
                Go(this.cm.display.cursorDiv, e.cursors), Go(this.cm.display.selectionDiv, e.selection)
            },
            rememberSelection: function() {
                var e = window.getSelection();
                this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
            },
            selectionInEditor: function() {
                var e = window.getSelection();
                if (!e.rangeCount) return !1;
                var t = e.getRangeAt(0).commonAncestorContainer;
                return Za(this.div, t)
            },
            focus: function() {
                "nocursor" != this.cm.options.readOnly && this.div.focus()
            },
            blur: function() {
                this.div.blur()
            },
            getField: function() {
                return this.div
            },
            supportsTouch: function() {
                return !0
            },
            receivedFocus: function() {
                function e() {
                    t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e))
                }
                var t = this;
                this.selectionInEditor() ? this.pollSelection() : Lt(this.cm, function() {
                    t.cm.curOp.selectionChanged = !0
                }), this.polling.set(this.cm.options.pollInterval, e)
            },
            selectionChanged: function() {
                var e = window.getSelection();
                return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
            },
            pollSelection: function() {
                if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
                    var e = window.getSelection(),
                        t = this.cm;
                    this.rememberSelection();
                    var n = se(t, e.anchorNode, e.anchorOffset),
                        r = se(t, e.focusNode, e.focusOffset);
                    n && r && Lt(t, function() {
                        Se(t.doc, fe(n, r), Wa), (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
                    })
                }
            },
            pollContent: function() {
                var e = this.cm,
                    t = e.display,
                    n = e.doc.sel.primary(),
                    r = n.from(),
                    o = n.to();
                if (r.line < t.viewFrom || o.line > t.viewTo - 1) return !1;
                var i;
                if (r.line == t.viewFrom || 0 == (i = Wt(e, r.line))) var a = no(t.view[0].line),
                    s = t.view[0].node;
                else var a = no(t.view[i].line),
                    s = t.view[i - 1].node.nextSibling;
                var l = Wt(e, o.line);
                if (l == t.view.length - 1) var u = t.viewTo - 1,
                    c = t.lineDiv.lastChild;
                else var u = no(t.view[l + 1].line) - 1,
                    c = t.view[l + 1].node.previousSibling;
                for (var d = e.doc.splitLines(ue(e, s, c, a, u)), p = Jr(e.doc, Bi(a, 0), Bi(u, Qr(e.doc, u).text.length)); d.length > 1 && p.length > 1;)
                    if (Oo(d) == Oo(p)) d.pop(), p.pop(), u--;
                    else {
                        if (d[0] != p[0]) break;
                        d.shift(), p.shift(), a++
                    }
                for (var f = 0, h = 0, m = d[0], g = p[0], v = Math.min(m.length, g.length); f < v && m.charCodeAt(f) == g.charCodeAt(f);) ++f;
                for (var y = Oo(d), b = Oo(p), x = Math.min(y.length - (1 == d.length ? f : 0), b.length - (1 == p.length ? f : 0)); h < x && y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1);) ++h;
                d[d.length - 1] = y.slice(0, y.length - h), d[0] = d[0].slice(f);
                var w = Bi(a, f),
                    k = Bi(u, p.length ? Oo(p).length - h : 0);
                return d.length > 1 || d[0] || qi(w, k) ? (In(e.doc, d, w, k, "+input"), !0) : void 0
            },
            ensurePolled: function() {
                this.forceCompositionEnd()
            },
            reset: function() {
                this.forceCompositionEnd()
            },
            forceCompositionEnd: function() {
                this.composing && !this.composing.handled && (this.applyComposition(this.composing), this.composing.handled = !0, this.div.blur(), this.div.focus())
            },
            applyComposition: function(e) {
                this.cm.isReadOnly() ? Nt(this.cm, Rt)(this.cm) : e.data && e.data != e.startData && Nt(this.cm, X)(this.cm, e.data, 0, e.sel)
            },
            setUneditable: function(e) {
                e.contentEditable = "false"
            },
            onKeyPress: function(e) {
                e.preventDefault(), this.cm.isReadOnly() || Nt(this.cm, X)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0)
            },
            readOnlyChanged: function(e) {
                this.div.contentEditable = String("nocursor" != e)
            },
            onContextMenu: zo,
            resetPosition: zo,
            needsContentAttribute: !0
        }, oe.prototype), e.inputStyles = {
            textarea: ne,
            contenteditable: oe
        }, ce.prototype = {
            primary: function() {
                return this.ranges[this.primIndex]
            },
            equals: function(e) {
                if (e == this) return !0;
                if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                for (var t = 0; t < this.ranges.length; t++) {
                    var n = this.ranges[t],
                        r = e.ranges[t];
                    if (0 != qi(n.anchor, r.anchor) || 0 != qi(n.head, r.head)) return !1
                }
                return !0
            },
            deepCopy: function() {
                for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new de(G(this.ranges[t].anchor), G(this.ranges[t].head));
                return new ce(e, this.primIndex)
            },
            somethingSelected: function() {
                for (var e = 0; e < this.ranges.length; e++)
                    if (!this.ranges[e].empty()) return !0;
                return !1
            },
            contains: function(e, t) {
                t || (t = e);
                for (var n = 0; n < this.ranges.length; n++) {
                    var r = this.ranges[n];
                    if (qi(t, r.from()) >= 0 && qi(e, r.to()) <= 0) return n
                }
                return -1
            }
        }, de.prototype = {
            from: function() {
                return $(this.anchor, this.head)
            },
            to: function() {
                return Y(this.anchor, this.head)
            },
            empty: function() {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
            }
        };
        var Ui, ji, Vi, Ki = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            Gi = null,
            Yi = 0,
            $i = 0,
            Zi = 0,
            Xi = null;
        wi ? Xi = -.53 : yi ? Xi = 15 : Ei ? Xi = -.7 : Ti && (Xi = -1 / 3);
        var Qi = function(e) {
            var t = e.wheelDeltaX,
                n = e.wheelDeltaY;
            return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
                x: t,
                y: n
            }
        };
        e.wheelEventPixels = function(e) {
            var t = Qi(e);
            return t.x *= Xi, t.y *= Xi, t
        };
        var Ji = new Do,
            ea = null,
            ta = e.changeEnd = function(e) {
                return e.text ? Bi(e.from.line + e.text.length - 1, Oo(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
            };
        e.prototype = {
            constructor: e,
            focus: function() {
                window.focus(), this.display.input.focus()
            },
            setOption: function(e, t) {
                var n = this.options,
                    r = n[e];
                n[e] == t && "mode" != e || (n[e] = t, ra.hasOwnProperty(e) && Nt(this, ra[e])(this, t, r))
            },
            getOption: function(e) {
                return this.options[e]
            },
            getDoc: function() {
                return this.doc
            },
            addKeyMap: function(e, t) {
                this.state.keyMaps[t ? "push" : "unshift"](Yn(e))
            },
            removeKeyMap: function(e) {
                for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                    if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0
            },
            addOverlay: Dt(function(t, n) {
                var r = t.token ? t : e.getMode(this.options, t);
                if (r.startState) throw new Error("Overlays may not be stateful.");
                Fo(this.state.overlays, {
                    mode: r,
                    modeSpec: t,
                    opaque: n && n.opaque,
                    priority: n && n.priority || 0
                }, function(e) {
                    return e.priority
                }), this.state.modeGen++, Rt(this)
            }),
            removeOverlay: Dt(function(e) {
                for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                    var r = t[n].modeSpec;
                    if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void Rt(this)
                }
            }),
            indentLine: Dt(function(e, t, n) {
                "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), ve(this.doc, e) && qn(this, e, t, n)
            }),
            indentSelection: Dt(function(e) {
                for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (o.empty()) o.head.line > n && (qn(this, o.head.line, e, !0), n = o.head.line, r == this.doc.sel.primIndex && Wn(this));
                    else {
                        var i = o.from(),
                            a = o.to(),
                            s = Math.max(n, i.line);
                        n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                        for (var l = s; l < n; ++l) qn(this, l, e);
                        var u = this.doc.sel.ranges;
                        0 == i.ch && t.length == u.length && u[r].from().ch > 0 && ke(this.doc, r, new de(i, u[r].to()), Wa)
                    }
                }
            }),
            getTokenAt: function(e, t) {
                return Ir(this, e, t)
            },
            getLineTokens: function(e, t) {
                return Ir(this, Bi(e), t, !0)
            },
            getTokenTypeAt: function(e) {
                e = me(this.doc, e);
                var t, n = Rr(this, Qr(this.doc, e.line)),
                    r = 0,
                    o = (n.length - 1) / 2,
                    i = e.ch;
                if (0 == i) t = n[2];
                else
                    for (;;) {
                        var a = r + o >> 1;
                        if ((a ? n[2 * a - 1] : 0) >= i) o = a;
                        else {
                            if (!(n[2 * a + 1] < i)) {
                                t = n[2 * a + 2];
                                break
                            }
                            r = a + 1
                        }
                    }
                var s = t ? t.indexOf("cm-overlay ") : -1;
                return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
            },
            getModeAt: function(t) {
                var n = this.doc.mode;
                return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
            },
            getHelper: function(e, t) {
                return this.getHelpers(e, t)[0]
            },
            getHelpers: function(e, t) {
                var n = [];
                if (!ua.hasOwnProperty(t)) return n;
                var r = ua[t],
                    o = this.getModeAt(e);
                if ("string" == typeof o[t]) r[o[t]] && n.push(r[o[t]]);
                else if (o[t])
                    for (var i = 0; i < o[t].length; i++) {
                        var a = r[o[t][i]];
                        a && n.push(a)
                    } else o.helperType && r[o.helperType] ? n.push(r[o.helperType]) : r[o.name] && n.push(r[o.name]);
                for (var i = 0; i < r._global.length; i++) {
                    var s = r._global[i];
                    s.pred(o, this) && Po(n, s.val) == -1 && n.push(s.val)
                }
                return n
            },
            getStateAfter: function(e, t) {
                var n = this.doc;
                return e = he(n, null == e ? n.first + n.size - 1 : e), He(this, e + 1, t)
            },
            cursorCoords: function(e, t) {
                var n, r = this.doc.sel.primary();
                return n = null == e ? r.head : "object" == typeof e ? me(this.doc, e) : e ? r.from() : r.to(), ht(this, n, t || "page")
            },
            charCoords: function(e, t) {
                return ft(this, me(this.doc, e), t || "page")
            },
            coordsChar: function(e, t) {
                return e = pt(this, e, t || "page"), vt(this, e.left, e.top)
            },
            lineAtHeight: function(e, t) {
                return e = pt(this, {
                    top: e,
                    left: 0
                }, t || "page").top, ro(this.doc, e + this.display.viewOffset)
            },
            heightAtLine: function(e, t) {
                var n, r = !1;
                if ("number" == typeof e) {
                    var o = this.doc.first + this.doc.size - 1;
                    e < this.doc.first ? e = this.doc.first : e > o && (e = o, r = !0), n = Qr(this.doc, e)
                } else n = e;
                return dt(this, n, {
                    top: 0,
                    left: 0
                }, t || "page").top + (r ? this.doc.height - oo(n) : 0)
            },
            defaultTextHeight: function() {
                return bt(this.display)
            },
            defaultCharWidth: function() {
                return xt(this.display)
            },
            setGutterMarker: Dt(function(e, t, n) {
                return Hn(this.doc, e, "gutter", function(e) {
                    var r = e.gutterMarkers || (e.gutterMarkers = {});
                    return r[t] = n, !n && Uo(r) && (e.gutterMarkers = null), !0
                })
            }),
            clearGutter: Dt(function(e) {
                var t = this,
                    n = t.doc,
                    r = n.first;
                n.iter(function(n) {
                    n.gutterMarkers && n.gutterMarkers[e] && (n.gutterMarkers[e] = null, Ft(t, r, "gutter"), Uo(n.gutterMarkers) && (n.gutterMarkers = null)), ++r
                })
            }),
            lineInfo: function(e) {
                if ("number" == typeof e) {
                    if (!ve(this.doc, e)) return null;
                    var t = e;
                    if (e = Qr(this.doc, e), !e) return null
                } else {
                    var t = no(e);
                    if (null == t) return null
                }
                return {
                    line: t,
                    handle: e,
                    text: e.text,
                    gutterMarkers: e.gutterMarkers,
                    textClass: e.textClass,
                    bgClass: e.bgClass,
                    wrapClass: e.wrapClass,
                    widgets: e.widgets
                }
            },
            getViewport: function() {
                return {
                    from: this.display.viewFrom,
                    to: this.display.viewTo
                }
            },
            addWidget: function(e, t, n, r, o) {
                var i = this.display;
                e = ht(this, me(this.doc, e));
                var a = e.bottom,
                    s = e.left;
                if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), i.sizer.appendChild(t), "over" == r) a = e.top;
                else if ("above" == r || "near" == r) {
                    var l = Math.max(i.wrapper.clientHeight, this.doc.height),
                        u = Math.max(i.sizer.clientWidth, i.lineSpace.clientWidth);
                    ("above" == r || e.bottom + t.offsetHeight > l) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && (a = e.bottom), s + t.offsetWidth > u && (s = u - t.offsetWidth)
                }
                t.style.top = a + "px", t.style.left = t.style.right = "", "right" == o ? (s = i.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == o ? s = 0 : "middle" == o && (s = (i.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), n && Rn(this, s, a, s + t.offsetWidth, a + t.offsetHeight)
            },
            triggerOnKeyDown: Dt(fn),
            triggerOnKeyPress: Dt(gn),
            triggerOnKeyUp: mn,
            execCommand: function(e) {
                if (pa.hasOwnProperty(e)) return pa[e].call(null, this)
            },
            triggerElectric: Dt(function(e) {
                J(this, e)
            }),
            findPosH: function(e, t, n, r) {
                var o = 1;
                t < 0 && (o = -1, t = -t);
                for (var i = 0, a = me(this.doc, e); i < t && (a = jn(this.doc, a, o, n, r), !a.hitSide); ++i);
                return a
            },
            moveH: Dt(function(e, t) {
                var n = this;
                n.extendSelectionsBy(function(r) {
                    return n.display.shift || n.doc.extend || r.empty() ? jn(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to()
                }, qa)
            }),
            deleteH: Dt(function(e, t) {
                var n = this.doc.sel,
                    r = this.doc;
                n.somethingSelected() ? r.replaceSelection("", null, "+delete") : Un(this, function(n) {
                    var o = jn(r, n.head, e, t, !1);
                    return e < 0 ? {
                        from: o,
                        to: n.head
                    } : {
                        from: n.head,
                        to: o
                    }
                })
            }),
            findPosV: function(e, t, n, r) {
                var o = 1,
                    i = r;
                t < 0 && (o = -1, t = -t);
                for (var a = 0, s = me(this.doc, e); a < t; ++a) {
                    var l = ht(this, s, "div");
                    if (null == i ? i = l.left : l.left = i, s = Vn(this, l, o, n), s.hitSide) break
                }
                return s
            },
            moveV: Dt(function(e, t) {
                var n = this,
                    r = this.doc,
                    o = [],
                    i = !n.display.shift && !r.extend && r.sel.somethingSelected();
                if (r.extendSelectionsBy(function(a) {
                        if (i) return e < 0 ? a.from() : a.to();
                        var s = ht(n, a.head, "div");
                        null != a.goalColumn && (s.left = a.goalColumn), o.push(s.left);
                        var l = Vn(n, s, e, t);
                        return "page" == t && a == r.sel.primary() && zn(n, null, ft(n, l, "div").top - s.top), l
                    }, qa), o.length)
                    for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = o[a]
            }),
            findWordAt: function(e) {
                var t = this.doc,
                    n = Qr(t, e.line).text,
                    r = e.ch,
                    o = e.ch;
                if (n) {
                    var i = this.getHelper(e, "wordChars");
                    (e.xRel < 0 || o == n.length) && r ? --r : ++o;
                    for (var a = n.charAt(r), s = Ho(a, i) ? function(e) {
                            return Ho(e, i)
                        } : /\s/.test(a) ? function(e) {
                            return /\s/.test(e)
                        } : function(e) {
                            return !/\s/.test(e) && !Ho(e)
                        }; r > 0 && s(n.charAt(r - 1));) --r;
                    for (; o < n.length && s(n.charAt(o));) ++o
                }
                return new de(Bi(e.line, r), Bi(e.line, o))
            },
            toggleOverwrite: function(e) {
                null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? es(this.display.cursorDiv, "CodeMirror-overwrite") : Ja(this.display.cursorDiv, "CodeMirror-overwrite"), Pa(this, "overwriteToggle", this, this.state.overwrite))
            },
            hasFocus: function() {
                return this.display.input.getField() == Yo()
            },
            isReadOnly: function() {
                return !(!this.options.readOnly && !this.doc.cantEdit)
            },
            scrollTo: Dt(function(e, t) {
                null == e && null == t || Bn(this), null != e && (this.curOp.scrollLeft = e), null != t && (this.curOp.scrollTop = t)
            }),
            getScrollInfo: function() {
                var e = this.display.scroller;
                return {
                    left: e.scrollLeft,
                    top: e.scrollTop,
                    height: e.scrollHeight - Ke(this) - this.display.barHeight,
                    width: e.scrollWidth - Ke(this) - this.display.barWidth,
                    clientHeight: Ye(this),
                    clientWidth: Ge(this)
                }
            },
            scrollIntoView: Dt(function(e, t) {
                if (null == e ? (e = {
                        from: this.doc.sel.primary().head,
                        to: null
                    }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                        from: Bi(e, 0),
                        to: null
                    } : null == e.from && (e = {
                        from: e,
                        to: null
                    }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line) Bn(this), this.curOp.scrollToPos = e;
                else {
                    var n = Fn(this, Math.min(e.from.left, e.to.left), Math.min(e.from.top, e.to.top) - e.margin, Math.max(e.from.right, e.to.right), Math.max(e.from.bottom, e.to.bottom) + e.margin);
                    this.scrollTo(n.scrollLeft, n.scrollTop)
                }
            }),
            setSize: Dt(function(e, t) {
                function n(e) {
                    return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                }
                var r = this;
                null != e && (r.display.wrapper.style.width = n(e)), null != t && (r.display.wrapper.style.height = n(t)), r.options.lineWrapping && st(this);
                var o = r.display.viewFrom;
                r.doc.iter(o, r.display.viewTo, function(e) {
                    if (e.widgets)
                        for (var t = 0; t < e.widgets.length; t++)
                            if (e.widgets[t].noHScroll) {
                                Ft(r, o, "widget");
                                break
                            }++o
                }), r.curOp.forceUpdate = !0, Pa(r, "refresh", this)
            }),
            operation: function(e) {
                return Lt(this, e)
            },
            refresh: Dt(function() {
                var e = this.display.cachedTextHeight;
                Rt(this), this.curOp.forceUpdate = !0, lt(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), c(this), (null == e || Math.abs(e - bt(this.display)) > .5) && a(this), Pa(this, "refresh", this)
            }),
            swapDoc: Dt(function(e) {
                var t = this.doc;
                return t.cm = null, Xr(this, e), lt(this), this.display.input.reset(), this.scrollTo(e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, So(this, "swapDoc", this, t), t
            }),
            getInputField: function() {
                return this.display.input.getField()
            },
            getWrapperElement: function() {
                return this.display.wrapper
            },
            getScrollerElement: function() {
                return this.display.scroller
            },
            getGutterElement: function() {
                return this.display.gutters
            }
        }, No(e);
        var na = e.defaults = {},
            ra = e.optionHandlers = {},
            oa = e.Init = {
                toString: function() {
                    return "CodeMirror.Init"
                }
            };
        Kn("value", "", function(e, t) {
            e.setValue(t)
        }, !0), Kn("mode", null, function(e, t) {
            e.doc.modeOption = t, n(e)
        }, !0), Kn("indentUnit", 2, n, !0), Kn("indentWithTabs", !1), Kn("smartIndent", !0), Kn("tabSize", 4, function(e) {
            r(e), lt(e), Rt(e)
        }, !0), Kn("lineSeparator", null, function(e, t) {
            if (e.doc.lineSep = t, t) {
                var n = [],
                    r = e.doc.first;
                e.doc.iter(function(e) {
                    for (var o = 0;;) {
                        var i = e.text.indexOf(t, o);
                        if (i == -1) break;
                        o = i + t.length, n.push(Bi(r, i))
                    }
                    r++
                });
                for (var o = n.length - 1; o >= 0; o--) In(e.doc, t, n[o], Bi(n[o].line, n[o].ch + t.length))
            }
        }), Kn("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(t, n, r) {
            t.state.specialChars = new RegExp(n.source + (n.test("\t") ? "" : "|\t"), "g"), r != e.Init && t.refresh()
        }), Kn("specialCharPlaceholder", Br, function(e) {
            e.refresh()
        }, !0), Kn("electricChars", !0), Kn("inputStyle", Ni ? "contenteditable" : "textarea", function() {
            throw new Error("inputStyle can not (yet) be changed in a running editor")
        }, !0), Kn("spellcheck", !1, function(e, t) {
            e.getInputField().spellcheck = t
        }, !0), Kn("rtlMoveVisually", !Oi), Kn("wholeLineUpdateBefore", !0), Kn("theme", "default", function(e) {
            s(e), l(e)
        }, !0), Kn("keyMap", "default", function(t, n, r) {
            var o = Yn(n),
                i = r != e.Init && Yn(r);
            i && i.detach && i.detach(t, o), o.attach && o.attach(t, i || null)
        }), Kn("extraKeys", null), Kn("lineWrapping", !1, o, !0), Kn("gutters", [], function(e) {
            f(e.options), l(e)
        }, !0), Kn("fixedGutter", !0, function(e, t) {
            e.display.gutters.style.left = t ? C(e.display) + "px" : "0", e.refresh()
        }, !0), Kn("coverGutterNextToScrollbar", !1, function(e) {
            y(e)
        }, !0), Kn("scrollbarStyle", "native", function(e) {
            v(e), y(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
        }, !0), Kn("lineNumbers", !1, function(e) {
            f(e.options), l(e)
        }, !0), Kn("firstLineNumber", 1, l, !0), Kn("lineNumberFormatter", function(e) {
            return e
        }, l, !0), Kn("showCursorWhenSelecting", !1, Oe, !0), Kn("resetSelectionOnContextMenu", !0), Kn("lineWiseCopyCut", !0), Kn("readOnly", !1, function(e, t) {
            "nocursor" == t ? (bn(e), e.display.input.blur(), e.display.disabled = !0) : e.display.disabled = !1, e.display.input.readOnlyChanged(t)
        }), Kn("disableInput", !1, function(e, t) {
            t || e.display.input.reset()
        }, !0), Kn("dragDrop", !0, jt), Kn("allowDropFileTypes", null), Kn("cursorBlinkRate", 530), Kn("cursorScrollMargin", 0), Kn("cursorHeight", 1, Oe, !0), Kn("singleCursorHeightPerLine", !0, Oe, !0), Kn("workTime", 100), Kn("workDelay", 100), Kn("flattenSpans", !0, r, !0), Kn("addModeClass", !1, r, !0), Kn("pollInterval", 100), Kn("undoDepth", 200, function(e, t) {
            e.doc.history.undoDepth = t
        }), Kn("historyEventDelay", 1250), Kn("viewportMargin", 10, function(e) {
            e.refresh()
        }, !0), Kn("maxHighlightLength", 1e4, r, !0), Kn("moveInputWithCursor", !0, function(e, t) {
            t || e.display.input.resetPosition()
        }), Kn("tabindex", null, function(e, t) {
            e.display.input.getField().tabIndex = t || ""
        }), Kn("autofocus", null);
        var ia = e.modes = {},
            aa = e.mimeModes = {};
        e.defineMode = function(t, n) {
            e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2 && (n.dependencies = Array.prototype.slice.call(arguments, 2)), ia[t] = n
        }, e.defineMIME = function(e, t) {
            aa[e] = t
        }, e.resolveMode = function(t) {
            if ("string" == typeof t && aa.hasOwnProperty(t)) t = aa[t];
            else if (t && "string" == typeof t.name && aa.hasOwnProperty(t.name)) {
                var n = aa[t.name];
                "string" == typeof n && (n = {
                    name: n
                }), t = Wo(n, t), t.name = n.name
            } else {
                if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return e.resolveMode("application/xml");
                if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+json$/.test(t)) return e.resolveMode("application/json")
            }
            return "string" == typeof t ? {
                name: t
            } : t || {
                name: "null"
            }
        }, e.getMode = function(t, n) {
            var n = e.resolveMode(n),
                r = ia[n.name];
            if (!r) return e.getMode(t, "text/plain");
            var o = r(t, n);
            if (sa.hasOwnProperty(n.name)) {
                var i = sa[n.name];
                for (var a in i) i.hasOwnProperty(a) && (o.hasOwnProperty(a) && (o["_" + a] = o[a]), o[a] = i[a])
            }
            if (o.name = n.name, n.helperType && (o.helperType = n.helperType), n.modeProps)
                for (var a in n.modeProps) o[a] = n.modeProps[a];
            return o
        }, e.defineMode("null", function() {
            return {
                token: function(e) {
                    e.skipToEnd()
                }
            }
        }), e.defineMIME("text/plain", "null");
        var sa = e.modeExtensions = {};
        e.extendMode = function(e, t) {
            var n = sa.hasOwnProperty(e) ? sa[e] : sa[e] = {};
            Bo(t, n)
        }, e.defineExtension = function(t, n) {
            e.prototype[t] = n
        }, e.defineDocExtension = function(e, t) {
            Sa.prototype[e] = t
        }, e.defineOption = Kn;
        var la = [];
        e.defineInitHook = function(e) {
            la.push(e)
        };
        var ua = e.helpers = {};
        e.registerHelper = function(t, n, r) {
            ua.hasOwnProperty(t) || (ua[t] = e[t] = {
                _global: []
            }), ua[t][n] = r
        }, e.registerGlobalHelper = function(t, n, r, o) {
            e.registerHelper(t, n, o), ua[t]._global.push({
                pred: r,
                val: o
            })
        };
        var ca = e.copyState = function(e, t) {
                if (t === !0) return t;
                if (e.copyState) return e.copyState(t);
                var n = {};
                for (var r in t) {
                    var o = t[r];
                    o instanceof Array && (o = o.concat([])), n[r] = o
                }
                return n
            },
            da = e.startState = function(e, t, n) {
                return !e.startState || e.startState(t, n)
            };
        e.innerMode = function(e, t) {
            for (; e.innerMode;) {
                var n = e.innerMode(t);
                if (!n || n.mode == e) break;
                t = n.state, e = n.mode
            }
            return n || {
                mode: e,
                state: t
            }
        };
        var pa = e.commands = {
                selectAll: function(e) {
                    e.setSelection(Bi(e.firstLine(), 0), Bi(e.lastLine()), Wa)
                },
                singleSelection: function(e) {
                    e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Wa)
                },
                killLine: function(e) {
                    Un(e, function(t) {
                        if (t.empty()) {
                            var n = Qr(e.doc, t.head.line).text.length;
                            return t.head.ch == n && t.head.line < e.lastLine() ? {
                                from: t.head,
                                to: Bi(t.head.line + 1, 0)
                            } : {
                                from: t.head,
                                to: Bi(t.head.line, n)
                            }
                        }
                        return {
                            from: t.from(),
                            to: t.to()
                        }
                    })
                },
                deleteLine: function(e) {
                    Un(e, function(t) {
                        return {
                            from: Bi(t.from().line, 0),
                            to: me(e.doc, Bi(t.to().line + 1, 0))
                        }
                    })
                },
                delLineLeft: function(e) {
                    Un(e, function(e) {
                        return {
                            from: Bi(e.from().line, 0),
                            to: e.from()
                        }
                    })
                },
                delWrappedLineLeft: function(e) {
                    Un(e, function(t) {
                        var n = e.charCoords(t.head, "div").top + 5,
                            r = e.coordsChar({
                                left: 0,
                                top: n
                            }, "div");
                        return {
                            from: r,
                            to: t.from()
                        }
                    })
                },
                delWrappedLineRight: function(e) {
                    Un(e, function(t) {
                        var n = e.charCoords(t.head, "div").top + 5,
                            r = e.coordsChar({
                                left: e.display.lineDiv.offsetWidth + 100,
                                top: n
                            }, "div");
                        return {
                            from: t.from(),
                            to: r
                        }
                    })
                },
                undo: function(e) {
                    e.undo()
                },
                redo: function(e) {
                    e.redo()
                },
                undoSelection: function(e) {
                    e.undoSelection()
                },
                redoSelection: function(e) {
                    e.redoSelection()
                },
                goDocStart: function(e) {
                    e.extendSelection(Bi(e.firstLine(), 0))
                },
                goDocEnd: function(e) {
                    e.extendSelection(Bi(e.lastLine()))
                },
                goLineStart: function(e) {
                    e.extendSelectionsBy(function(t) {
                        return li(e, t.head.line)
                    }, {
                        origin: "+move",
                        bias: 1
                    })
                },
                goLineStartSmart: function(e) {
                    e.extendSelectionsBy(function(t) {
                        return ci(e, t.head)
                    }, {
                        origin: "+move",
                        bias: 1
                    })
                },
                goLineEnd: function(e) {
                    e.extendSelectionsBy(function(t) {
                        return ui(e, t.head.line)
                    }, {
                        origin: "+move",
                        bias: -1
                    })
                },
                goLineRight: function(e) {
                    e.extendSelectionsBy(function(t) {
                        var n = e.charCoords(t.head, "div").top + 5;
                        return e.coordsChar({
                            left: e.display.lineDiv.offsetWidth + 100,
                            top: n
                        }, "div")
                    }, qa)
                },
                goLineLeft: function(e) {
                    e.extendSelectionsBy(function(t) {
                        var n = e.charCoords(t.head, "div").top + 5;
                        return e.coordsChar({
                            left: 0,
                            top: n
                        }, "div")
                    }, qa)
                },
                goLineLeftSmart: function(e) {
                    e.extendSelectionsBy(function(t) {
                        var n = e.charCoords(t.head, "div").top + 5,
                            r = e.coordsChar({
                                left: 0,
                                top: n
                            }, "div");
                        return r.ch < e.getLine(r.line).search(/\S/) ? ci(e, t.head) : r
                    }, qa)
                },
                goLineUp: function(e) {
                    e.moveV(-1, "line")
                },
                goLineDown: function(e) {
                    e.moveV(1, "line")
                },
                goPageUp: function(e) {
                    e.moveV(-1, "page")
                },
                goPageDown: function(e) {
                    e.moveV(1, "page")
                },
                goCharLeft: function(e) {
                    e.moveH(-1, "char")
                },
                goCharRight: function(e) {
                    e.moveH(1, "char")
                },
                goColumnLeft: function(e) {
                    e.moveH(-1, "column")
                },
                goColumnRight: function(e) {
                    e.moveH(1, "column")
                },
                goWordLeft: function(e) {
                    e.moveH(-1, "word")
                },
                goGroupRight: function(e) {
                    e.moveH(1, "group")
                },
                goGroupLeft: function(e) {
                    e.moveH(-1, "group")
                },
                goWordRight: function(e) {
                    e.moveH(1, "word")
                },
                delCharBefore: function(e) {
                    e.deleteH(-1, "char")
                },
                delCharAfter: function(e) {
                    e.deleteH(1, "char")
                },
                delWordBefore: function(e) {
                    e.deleteH(-1, "word")
                },
                delWordAfter: function(e) {
                    e.deleteH(1, "word")
                },
                delGroupBefore: function(e) {
                    e.deleteH(-1, "group")
                },
                delGroupAfter: function(e) {
                    e.deleteH(1, "group")
                },
                indentAuto: function(e) {
                    e.indentSelection("smart")
                },
                indentMore: function(e) {
                    e.indentSelection("add")
                },
                indentLess: function(e) {
                    e.indentSelection("subtract")
                },
                insertTab: function(e) {
                    e.replaceSelection("\t")
                },
                insertSoftTab: function(e) {
                    for (var t = [], n = e.listSelections(), r = e.options.tabSize, o = 0; o < n.length; o++) {
                        var i = n[o].from(),
                            a = Ha(e.getLine(i.line), i.ch, r);
                        t.push(Io(r - a % r))
                    }
                    e.replaceSelections(t)
                },
                defaultTab: function(e) {
                    e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
                },
                transposeChars: function(e) {
                    Lt(e, function() {
                        for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
                            var o = t[r].head,
                                i = Qr(e.doc, o.line).text;
                            if (i)
                                if (o.ch == i.length && (o = new Bi(o.line, o.ch - 1)), o.ch > 0) o = new Bi(o.line, o.ch + 1), e.replaceRange(i.charAt(o.ch - 1) + i.charAt(o.ch - 2), Bi(o.line, o.ch - 2), o, "+transpose");
                                else if (o.line > e.doc.first) {
                                var a = Qr(e.doc, o.line - 1).text;
                                a && e.replaceRange(i.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), Bi(o.line - 1, a.length - 1), Bi(o.line, 1), "+transpose")
                            }
                            n.push(new de(o, o))
                        }
                        e.setSelections(n)
                    })
                },
                newlineAndIndent: function(e) {
                    Lt(e, function() {
                        for (var t = e.listSelections().length, n = 0; n < t; n++) {
                            var r = e.listSelections()[n];
                            e.replaceRange(e.doc.lineSeparator(), r.anchor, r.head, "+input"), e.indentLine(r.from().line + 1, null, !0)
                        }
                        Wn(e)
                    })
                },
                openLine: function(e) {
                    e.replaceSelection("\n", "start")
                },
                toggleOverwrite: function(e) {
                    e.toggleOverwrite()
                }
            },
            fa = e.keyMap = {};
        fa.basic = {
            Left: "goCharLeft",
            Right: "goCharRight",
            Up: "goLineUp",
            Down: "goLineDown",
            End: "goLineEnd",
            Home: "goLineStartSmart",
            PageUp: "goPageUp",
            PageDown: "goPageDown",
            Delete: "delCharAfter",
            Backspace: "delCharBefore",
            "Shift-Backspace": "delCharBefore",
            Tab: "defaultTab",
            "Shift-Tab": "indentAuto",
            Enter: "newlineAndIndent",
            Insert: "toggleOverwrite",
            Esc: "singleSelection"
        }, fa.pcDefault = {
            "Ctrl-A": "selectAll",
            "Ctrl-D": "deleteLine",
            "Ctrl-Z": "undo",
            "Shift-Ctrl-Z": "redo",
            "Ctrl-Y": "redo",
            "Ctrl-Home": "goDocStart",
            "Ctrl-End": "goDocEnd",
            "Ctrl-Up": "goLineUp",
            "Ctrl-Down": "goLineDown",
            "Ctrl-Left": "goGroupLeft",
            "Ctrl-Right": "goGroupRight",
            "Alt-Left": "goLineStart",
            "Alt-Right": "goLineEnd",
            "Ctrl-Backspace": "delGroupBefore",
            "Ctrl-Delete": "delGroupAfter",
            "Ctrl-S": "save",
            "Ctrl-F": "find",
            "Ctrl-G": "findNext",
            "Shift-Ctrl-G": "findPrev",
            "Shift-Ctrl-F": "replace",
            "Shift-Ctrl-R": "replaceAll",
            "Ctrl-[": "indentLess",
            "Ctrl-]": "indentMore",
            "Ctrl-U": "undoSelection",
            "Shift-Ctrl-U": "redoSelection",
            "Alt-U": "redoSelection",
            fallthrough: "basic"
        }, fa.emacsy = {
            "Ctrl-F": "goCharRight",
            "Ctrl-B": "goCharLeft",
            "Ctrl-P": "goLineUp",
            "Ctrl-N": "goLineDown",
            "Alt-F": "goWordRight",
            "Alt-B": "goWordLeft",
            "Ctrl-A": "goLineStart",
            "Ctrl-E": "goLineEnd",
            "Ctrl-V": "goPageDown",
            "Shift-Ctrl-V": "goPageUp",
            "Ctrl-D": "delCharAfter",
            "Ctrl-H": "delCharBefore",
            "Alt-D": "delWordAfter",
            "Alt-Backspace": "delWordBefore",
            "Ctrl-K": "killLine",
            "Ctrl-T": "transposeChars",
            "Ctrl-O": "openLine"
        }, fa.macDefault = {
            "Cmd-A": "selectAll",
            "Cmd-D": "deleteLine",
            "Cmd-Z": "undo",
            "Shift-Cmd-Z": "redo",
            "Cmd-Y": "redo",
            "Cmd-Home": "goDocStart",
            "Cmd-Up": "goDocStart",
            "Cmd-End": "goDocEnd",
            "Cmd-Down": "goDocEnd",
            "Alt-Left": "goGroupLeft",
            "Alt-Right": "goGroupRight",
            "Cmd-Left": "goLineLeft",
            "Cmd-Right": "goLineRight",
            "Alt-Backspace": "delGroupBefore",
            "Ctrl-Alt-Backspace": "delGroupAfter",
            "Alt-Delete": "delGroupAfter",
            "Cmd-S": "save",
            "Cmd-F": "find",
            "Cmd-G": "findNext",
            "Shift-Cmd-G": "findPrev",
            "Cmd-Alt-F": "replace",
            "Shift-Cmd-Alt-F": "replaceAll",
            "Cmd-[": "indentLess",
            "Cmd-]": "indentMore",
            "Cmd-Backspace": "delWrappedLineLeft",
            "Cmd-Delete": "delWrappedLineRight",
            "Cmd-U": "undoSelection",
            "Shift-Cmd-U": "redoSelection",
            "Ctrl-Up": "goDocStart",
            "Ctrl-Down": "goDocEnd",
            fallthrough: ["basic", "emacsy"]
        }, fa["default"] = Di ? fa.macDefault : fa.pcDefault, e.normalizeKeyMap = function(e) {
            var t = {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                    if ("..." == r) {
                        delete e[n];
                        continue
                    }
                    for (var o = Ro(n.split(" "), Gn), i = 0; i < o.length; i++) {
                        var a, s;
                        i == o.length - 1 ? (s = o.join(" "), a = r) : (s = o.slice(0, i + 1).join(" "), a = "...");
                        var l = t[s];
                        if (l) {
                            if (l != a) throw new Error("Inconsistent bindings for " + s)
                        } else t[s] = a
                    }
                    delete e[n]
                }
            for (var u in t) e[u] = t[u];
            return e
        };
        var ha = e.lookupKey = function(e, t, n, r) {
                t = Yn(t);
                var o = t.call ? t.call(e, r) : t[e];
                if (o === !1) return "nothing";
                if ("..." === o) return "multi";
                if (null != o && n(o)) return "handled";
                if (t.fallthrough) {
                    if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return ha(e, t.fallthrough, n, r);
                    for (var i = 0; i < t.fallthrough.length; i++) {
                        var a = ha(e, t.fallthrough[i], n, r);
                        if (a) return a
                    }
                }
            },
            ma = e.isModifierKey = function(e) {
                var t = "string" == typeof e ? e : ss[e.keyCode];
                return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
            },
            ga = e.keyName = function(e, t) {
                if (Si && 34 == e.keyCode && e["char"]) return !1;
                var n = ss[e.keyCode],
                    r = n;
                return null != r && !e.altGraphKey && (e.altKey && "Alt" != n && (r = "Alt-" + r), (Ri ? e.metaKey : e.ctrlKey) && "Ctrl" != n && (r = "Ctrl-" + r), (Ri ? e.ctrlKey : e.metaKey) && "Cmd" != n && (r = "Cmd-" + r), !t && e.shiftKey && "Shift" != n && (r = "Shift-" + r), r)
            };
        e.fromTextArea = function(t, n) {
            function r() {
                t.value = u.getValue()
            }
            if (n = n ? Bo(n) : {}, n.value = t.value, !n.tabindex && t.tabIndex && (n.tabindex = t.tabIndex), !n.placeholder && t.placeholder && (n.placeholder = t.placeholder), null == n.autofocus) {
                var o = Yo();
                n.autofocus = o == t || null != t.getAttribute("autofocus") && o == document.body
            }
            if (t.form && (Da(t.form, "submit", r), !n.leaveSubmitMethodAlone)) {
                var i = t.form,
                    a = i.submit;
                try {
                    var s = i.submit = function() {
                        r(), i.submit = a, i.submit(), i.submit = s
                    }
                } catch (l) {}
            }
            n.finishInit = function(e) {
                e.save = r, e.getTextArea = function() {
                    return t
                }, e.toTextArea = function() {
                    e.toTextArea = isNaN, r(), t.parentNode.removeChild(e.getWrapperElement()), t.style.display = "", t.form && (Oa(t.form, "submit", r), "function" == typeof t.form.submit && (t.form.submit = a))
                }
            }, t.style.display = "none";
            var u = e(function(e) {
                t.parentNode.insertBefore(e, t.nextSibling)
            }, n);
            return u
        };
        var va = e.StringStream = function(e, t) {
            this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
        };
        va.prototype = {
            eol: function() {
                return this.pos >= this.string.length
            },
            sol: function() {
                return this.pos == this.lineStart
            },
            peek: function() {
                return this.string.charAt(this.pos) || void 0
            },
            next: function() {
                if (this.pos < this.string.length) return this.string.charAt(this.pos++)
            },
            eat: function(e) {
                var t = this.string.charAt(this.pos);
                if ("string" == typeof e) var n = t == e;
                else var n = t && (e.test ? e.test(t) : e(t));
                if (n) return ++this.pos, t
            },
            eatWhile: function(e) {
                for (var t = this.pos; this.eat(e););
                return this.pos > t
            },
            eatSpace: function() {
                for (var e = this.pos;
                    /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
                return this.pos > e
            },
            skipToEnd: function() {
                this.pos = this.string.length
            },
            skipTo: function(e) {
                var t = this.string.indexOf(e, this.pos);
                if (t > -1) return this.pos = t, !0
            },
            backUp: function(e) {
                this.pos -= e
            },
            column: function() {
                return this.lastColumnPos < this.start && (this.lastColumnValue = Ha(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Ha(this.string, this.lineStart, this.tabSize) : 0)
            },
            indentation: function() {
                return Ha(this.string, null, this.tabSize) - (this.lineStart ? Ha(this.string, this.lineStart, this.tabSize) : 0)
            },
            match: function(e, t, n) {
                if ("string" != typeof e) {
                    var r = this.string.slice(this.pos).match(e);
                    return r && r.index > 0 ? null : (r && t !== !1 && (this.pos += r[0].length), r)
                }
                var o = function(e) {
                        return n ? e.toLowerCase() : e
                    },
                    i = this.string.substr(this.pos, e.length);
                if (o(i) == o(e)) return t !== !1 && (this.pos += e.length), !0
            },
            current: function() {
                return this.string.slice(this.start, this.pos)
            },
            hideFirstChars: function(e, t) {
                this.lineStart += e;
                try {
                    return t()
                } finally {
                    this.lineStart -= e
                }
            }
        };
        var ya = 0,
            ba = e.TextMarker = function(e, t) {
                this.lines = [], this.type = t, this.doc = e, this.id = ++ya
            };
        No(ba), ba.prototype.clear = function() {
            if (!this.explicitlyCleared) {
                var e = this.doc.cm,
                    t = e && !e.curOp;
                if (t && wt(e), Lo(this, "clear")) {
                    var n = this.find();
                    n && So(this, "clear", n.from, n.to)
                }
                for (var r = null, o = null, i = 0; i < this.lines.length; ++i) {
                    var a = this.lines[i],
                        s = tr(a.markedSpans, this);
                    e && !this.collapsed ? Ft(e, no(a), "text") : e && (null != s.to && (o = no(a)), null != s.from && (r = no(a))), a.markedSpans = nr(a.markedSpans, s), null == s.from && this.collapsed && !_r(this.doc, a) && e && to(a, bt(e.display))
                }
                if (e && this.collapsed && !e.options.lineWrapping)
                    for (var i = 0; i < this.lines.length; ++i) {
                        var l = br(this.lines[i]),
                            u = d(l);
                        u > e.display.maxLineLength && (e.display.maxLine = l, e.display.maxLineLength = u, e.display.maxLineChanged = !0)
                    }
                null != r && e && this.collapsed && Rt(e, r, o + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Me(e.doc)), e && So(e, "markerCleared", e, this), t && _t(e), this.parent && this.parent.clear()
            }
        }, ba.prototype.find = function(e, t) {
            null == e && "bookmark" == this.type && (e = 1);
            for (var n, r, o = 0; o < this.lines.length; ++o) {
                var i = this.lines[o],
                    a = tr(i.markedSpans, this);
                if (null != a.from && (n = Bi(t ? i : no(i), a.from), e == -1)) return n;
                if (null != a.to && (r = Bi(t ? i : no(i), a.to), 1 == e)) return r
            }
            return n && {
                from: n,
                to: r
            }
        }, ba.prototype.changed = function() {
            var e = this.find(-1, !0),
                t = this,
                n = this.doc.cm;
            e && n && Lt(n, function() {
                var r = e.line,
                    o = no(e.line),
                    i = Je(n, o);
                if (i && (at(i), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !_r(t.doc, r) && null != t.height) {
                    var a = t.height;
                    t.height = null;
                    var s = Sr(t) - a;
                    s && to(r, r.height + s)
                }
            })
        }, ba.prototype.attachLine = function(e) {
            if (!this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                t.maybeHiddenMarkers && Po(t.maybeHiddenMarkers, this) != -1 || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
            }
            this.lines.push(e)
        }, ba.prototype.detachLine = function(e) {
            if (this.lines.splice(Po(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
            }
        };
        var ya = 0,
            xa = e.SharedTextMarker = function(e, t) {
                this.markers = e, this.primary = t;
                for (var n = 0; n < e.length; ++n) e[n].parent = this
            };
        No(xa), xa.prototype.clear = function() {
            if (!this.explicitlyCleared) {
                this.explicitlyCleared = !0;
                for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                So(this, "clear")
            }
        }, xa.prototype.find = function(e, t) {
            return this.primary.find(e, t)
        };
        var wa = e.LineWidget = function(e, t, n) {
            if (n)
                for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
            this.doc = e, this.node = t
        };
        No(wa), wa.prototype.clear = function() {
            var e = this.doc.cm,
                t = this.line.widgets,
                n = this.line,
                r = no(n);
            if (null != r && t) {
                for (var o = 0; o < t.length; ++o) t[o] == this && t.splice(o--, 1);
                t.length || (n.widgets = null);
                var i = Sr(this);
                to(n, Math.max(0, n.height - i)), e && Lt(e, function() {
                    Er(e, n, -i), Ft(e, r, "widget")
                })
            }
        }, wa.prototype.changed = function() {
            var e = this.height,
                t = this.doc.cm,
                n = this.line;
            this.height = null;
            var r = Sr(this) - e;
            r && (to(n, n.height + r), t && Lt(t, function() {
                t.curOp.forceUpdate = !0, Er(t, n, r)
            }))
        };
        var ka = e.Line = function(e, t, n) {
            this.text = e, dr(this, t), this.height = n ? n(this) : 1
        };
        No(ka), ka.prototype.lineNo = function() {
            return no(this)
        };
        var _a = {},
            Ca = {};
        Yr.prototype = {
            chunkSize: function() {
                return this.lines.length
            },
            removeInner: function(e, t) {
                for (var n = e, r = e + t; n < r; ++n) {
                    var o = this.lines[n];
                    this.height -= o.height, Mr(o), So(o, "delete")
                }
                this.lines.splice(e, t)
            },
            collapse: function(e) {
                e.push.apply(e, this.lines)
            },
            insertInner: function(e, t, n) {
                this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                for (var r = 0; r < t.length; ++r) t[r].parent = this
            },
            iterN: function(e, t, n) {
                for (var r = e + t; e < r; ++e)
                    if (n(this.lines[e])) return !0
            }
        }, $r.prototype = {
            chunkSize: function() {
                return this.size
            },
            removeInner: function(e, t) {
                this.size -= t;
                for (var n = 0; n < this.children.length; ++n) {
                    var r = this.children[n],
                        o = r.chunkSize();
                    if (e < o) {
                        var i = Math.min(t, o - e),
                            a = r.height;
                        if (r.removeInner(e, i), this.height -= a - r.height, o == i && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= i)) break;
                        e = 0
                    } else e -= o
                }
                if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Yr))) {
                    var s = [];
                    this.collapse(s), this.children = [new Yr(s)], this.children[0].parent = this
                }
            },
            collapse: function(e) {
                for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
            },
            insertInner: function(e, t, n) {
                this.size += t.length, this.height += n;
                for (var r = 0; r < this.children.length; ++r) {
                    var o = this.children[r],
                        i = o.chunkSize();
                    if (e <= i) {
                        if (o.insertInner(e, t, n), o.lines && o.lines.length > 50) {
                            for (var a = o.lines.length % 25 + 25, s = a; s < o.lines.length;) {
                                var l = new Yr(o.lines.slice(s, s += 25));
                                o.height -= l.height, this.children.splice(++r, 0, l), l.parent = this
                            }
                            o.lines = o.lines.slice(0, a), this.maybeSpill()
                        }
                        break
                    }
                    e -= i
                }
            },
            maybeSpill: function() {
                if (!(this.children.length <= 10)) {
                    var e = this;
                    do {
                        var t = e.children.splice(e.children.length - 5, 5),
                            n = new $r(t);
                        if (e.parent) {
                            e.size -= n.size, e.height -= n.height;
                            var r = Po(e.parent.children, e);
                            e.parent.children.splice(r + 1, 0, n)
                        } else {
                            var o = new $r(e.children);
                            o.parent = e, e.children = [o, n], e = o
                        }
                        n.parent = e.parent
                    } while (e.children.length > 10);
                    e.parent.maybeSpill()
                }
            },
            iterN: function(e, t, n) {
                for (var r = 0; r < this.children.length; ++r) {
                    var o = this.children[r],
                        i = o.chunkSize();
                    if (e < i) {
                        var a = Math.min(t, i - e);
                        if (o.iterN(e, a, n)) return !0;
                        if (0 == (t -= a)) break;
                        e = 0
                    } else e -= i
                }
            }
        };
        var Ea = 0,
            Sa = e.Doc = function(e, t, n, r) {
                if (!(this instanceof Sa)) return new Sa(e, t, n, r);
                null == n && (n = 0), $r.call(this, [new Yr([new ka("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = n;
                var o = Bi(n, 0);
                this.sel = fe(o), this.history = new ao(null), this.id = ++Ea, this.modeOption = t, this.lineSep = r, this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Gr(this, {
                    from: o,
                    to: o,
                    text: e
                }), Se(this, fe(o), Wa)
            };
        Sa.prototype = Wo($r.prototype, {
            constructor: Sa,
            iter: function(e, t, n) {
                n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
            },
            insert: function(e, t) {
                for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
                this.insertInner(e - this.first, t, n)
            },
            remove: function(e, t) {
                this.removeInner(e - this.first, t)
            },
            getValue: function(e) {
                var t = eo(this, this.first, this.first + this.size);
                return e === !1 ? t : t.join(e || this.lineSeparator())
            },
            setValue: It(function(e) {
                var t = Bi(this.first, 0),
                    n = this.first + this.size - 1;
                Tn(this, {
                    from: t,
                    to: Bi(n, Qr(this, n).text.length),
                    text: this.splitLines(e),
                    origin: "setValue",
                    full: !0
                }, !0), Se(this, fe(t))
            }),
            replaceRange: function(e, t, n, r) {
                t = me(this, t), n = n ? me(this, n) : t, In(this, e, t, n, r)
            },
            getRange: function(e, t, n) {
                var r = Jr(this, me(this, e), me(this, t));
                return n === !1 ? r : r.join(n || this.lineSeparator())
            },
            getLine: function(e) {
                var t = this.getLineHandle(e);
                return t && t.text
            },
            getLineHandle: function(e) {
                if (ve(this, e)) return Qr(this, e)
            },
            getLineNumber: function(e) {
                return no(e)
            },
            getLineHandleVisualStart: function(e) {
                return "number" == typeof e && (e = Qr(this, e)), br(e)
            },
            lineCount: function() {
                return this.size
            },
            firstLine: function() {
                return this.first
            },
            lastLine: function() {
                return this.first + this.size - 1
            },
            clipPos: function(e) {
                return me(this, e)
            },
            getCursor: function(e) {
                var t, n = this.sel.primary();
                return t = null == e || "head" == e ? n.head : "anchor" == e ? n.anchor : "end" == e || "to" == e || e === !1 ? n.to() : n.from()
            },
            listSelections: function() {
                return this.sel.ranges
            },
            somethingSelected: function() {
                return this.sel.somethingSelected()
            },
            setCursor: It(function(e, t, n) {
                _e(this, me(this, "number" == typeof e ? Bi(e, t || 0) : e), null, n)
            }),
            setSelection: It(function(e, t, n) {
                _e(this, me(this, e), me(this, t || e), n)
            }),
            extendSelection: It(function(e, t, n) {
                xe(this, me(this, e), t && me(this, t), n)
            }),
            extendSelections: It(function(e, t) {
                we(this, ye(this, e), t)
            }),
            extendSelectionsBy: It(function(e, t) {
                var n = Ro(this.sel.ranges, e);
                we(this, ye(this, n), t)
            }),
            setSelections: It(function(e, t, n) {
                if (e.length) {
                    for (var r = 0, o = []; r < e.length; r++) o[r] = new de(me(this, e[r].anchor), me(this, e[r].head));
                    null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Se(this, pe(o, t), n)
                }
            }),
            addSelection: It(function(e, t, n) {
                var r = this.sel.ranges.slice(0);
                r.push(new de(me(this, e), me(this, t || e))), Se(this, pe(r, r.length - 1), n)
            }),
            getSelection: function(e) {
                for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
                    var o = Jr(this, n[r].from(), n[r].to());
                    t = t ? t.concat(o) : o
                }
                return e === !1 ? t : t.join(e || this.lineSeparator())
            },
            getSelections: function(e) {
                for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                    var o = Jr(this, n[r].from(), n[r].to());
                    e !== !1 && (o = o.join(e || this.lineSeparator())), t[r] = o
                }
                return t
            },
            replaceSelection: function(e, t, n) {
                for (var r = [], o = 0; o < this.sel.ranges.length; o++) r[o] = e;
                this.replaceSelections(r, t, n || "+input")
            },
            replaceSelections: It(function(e, t, n) {
                for (var r = [], o = this.sel, i = 0; i < o.ranges.length; i++) {
                    var a = o.ranges[i];
                    r[i] = {
                        from: a.from(),
                        to: a.to(),
                        text: this.splitLines(e[i]),
                        origin: n
                    }
                }
                for (var s = t && "end" != t && En(this, r, t), i = r.length - 1; i >= 0; i--) Tn(this, r[i]);
                s ? Ee(this, s) : this.cm && Wn(this.cm)
            }),
            undo: It(function() {
                Mn(this, "undo")
            }),
            redo: It(function() {
                Mn(this, "redo")
            }),
            undoSelection: It(function() {
                Mn(this, "undo", !0)
            }),
            redoSelection: It(function() {
                Mn(this, "redo", !0)
            }),
            setExtending: function(e) {
                this.extend = e
            },
            getExtending: function() {
                return this.extend
            },
            historySize: function() {
                for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
                for (var r = 0; r < e.undone.length; r++) e.undone[r].ranges || ++n;
                return {
                    undo: t,
                    redo: n
                }
            },
            clearHistory: function() {
                this.history = new ao(this.history.maxGeneration)
            },
            markClean: function() {
                this.cleanGeneration = this.changeGeneration(!0)
            },
            changeGeneration: function(e) {
                return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
            },
            isClean: function(e) {
                return this.history.generation == (e || this.cleanGeneration)
            },
            getHistory: function() {
                return {
                    done: yo(this.history.done),
                    undone: yo(this.history.undone)
                }
            },
            setHistory: function(e) {
                var t = this.history = new ao(this.history.maxGeneration);
                t.done = yo(e.done.slice(0), null, !0), t.undone = yo(e.undone.slice(0), null, !0)
            },
            addLineClass: It(function(e, t, n) {
                return Hn(this, e, "gutter" == t ? "gutter" : "class", function(e) {
                    var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
                    if (e[r]) {
                        if ($o(n).test(e[r])) return !1;
                        e[r] += " " + n
                    } else e[r] = n;
                    return !0
                })
            }),
            removeLineClass: It(function(e, t, n) {
                return Hn(this, e, "gutter" == t ? "gutter" : "class", function(e) {
                    var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                        o = e[r];
                    if (!o) return !1;
                    if (null == n) e[r] = null;
                    else {
                        var i = o.match($o(n));
                        if (!i) return !1;
                        var a = i.index + i[0].length;
                        e[r] = o.slice(0, i.index) + (i.index && a != o.length ? " " : "") + o.slice(a) || null
                    }
                    return !0
                })
            }),
            addLineWidget: It(function(e, t, n) {
                return Tr(this, e, t, n)
            }),
            removeLineWidget: function(e) {
                e.clear()
            },
            markText: function(e, t, n) {
                return $n(this, me(this, e), me(this, t), n, n && n.type || "range")
            },
            setBookmark: function(e, t) {
                var n = {
                    replacedWith: t && (null == t.nodeType ? t.widget : t),
                    insertLeft: t && t.insertLeft,
                    clearWhenEmpty: !1,
                    shared: t && t.shared,
                    handleMouseEvents: t && t.handleMouseEvents
                };
                return e = me(this, e), $n(this, e, e, n, "bookmark")
            },
            findMarksAt: function(e) {
                e = me(this, e);
                var t = [],
                    n = Qr(this, e.line).markedSpans;
                if (n)
                    for (var r = 0; r < n.length; ++r) {
                        var o = n[r];
                        (null == o.from || o.from <= e.ch) && (null == o.to || o.to >= e.ch) && t.push(o.marker.parent || o.marker)
                    }
                return t
            },
            findMarks: function(e, t, n) {
                e = me(this, e), t = me(this, t);
                var r = [],
                    o = e.line;
                return this.iter(e.line, t.line + 1, function(i) {
                    var a = i.markedSpans;
                    if (a)
                        for (var s = 0; s < a.length; s++) {
                            var l = a[s];
                            null != l.to && o == e.line && e.ch >= l.to || null == l.from && o != e.line || null != l.from && o == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker)
                        }++o
                }), r
            },
            getAllMarks: function() {
                var e = [];
                return this.iter(function(t) {
                    var n = t.markedSpans;
                    if (n)
                        for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker)
                }), e
            },
            posFromIndex: function(e) {
                var t, n = this.first,
                    r = this.lineSeparator().length;
                return this.iter(function(o) {
                    var i = o.text.length + r;
                    return i > e ? (t = e, !0) : (e -= i, void++n)
                }), me(this, Bi(n, t))
            },
            indexFromPos: function(e) {
                e = me(this, e);
                var t = e.ch;
                if (e.line < this.first || e.ch < 0) return 0;
                var n = this.lineSeparator().length;
                return this.iter(this.first, e.line, function(e) {
                    t += e.text.length + n
                }), t
            },
            copy: function(e) {
                var t = new Sa(eo(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep);
                return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
            },
            linkedDoc: function(e) {
                e || (e = {});
                var t = this.first,
                    n = this.first + this.size;
                null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
                var r = new Sa(eo(this, t, n), e.mode || this.modeOption, t, this.lineSep);
                return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
                    doc: r,
                    sharedHist: e.sharedHist
                }), r.linked = [{
                    doc: this,
                    isParent: !0,
                    sharedHist: e.sharedHist
                }], Qn(r, Xn(this)), r
            },
            unlinkDoc: function(t) {
                if (t instanceof e && (t = t.doc), this.linked)
                    for (var n = 0; n < this.linked.length; ++n) {
                        var r = this.linked[n];
                        if (r.doc == t) {
                            this.linked.splice(n, 1), t.unlinkDoc(this), Jn(Xn(this));
                            break
                        }
                    }
                if (t.history == this.history) {
                    var o = [t.id];
                    Zr(t, function(e) {
                        o.push(e.id)
                    }, !0), t.history = new ao(null), t.history.done = yo(this.history.done, o), t.history.undone = yo(this.history.undone, o)
                }
            },
            iterLinkedDocs: function(e) {
                Zr(this, e)
            },
            getMode: function() {
                return this.mode
            },
            getEditor: function() {
                return this.cm
            },
            splitLines: function(e) {
                return this.lineSep ? e.split(this.lineSep) : rs(e)
            },
            lineSeparator: function() {
                return this.lineSep || "\n"
            }
        }), Sa.prototype.eachLine = Sa.prototype.iter;
        var Ta = "iter insert remove copy getEditor constructor".split(" ");
        for (var Aa in Sa.prototype) Sa.prototype.hasOwnProperty(Aa) && Po(Ta, Aa) < 0 && (e.prototype[Aa] = function(e) {
            return function() {
                return e.apply(this.doc, arguments)
            }
        }(Sa.prototype[Aa]));
        No(Sa);
        var Ma = e.e_preventDefault = function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            La = e.e_stopPropagation = function(e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            },
            Na = e.e_stop = function(e) {
                Ma(e), La(e)
            },
            Da = e.on = function(e, t, n) {
                if (e.addEventListener) e.addEventListener(t, n, !1);
                else if (e.attachEvent) e.attachEvent("on" + t, n);
                else {
                    var r = e._handlers || (e._handlers = {}),
                        o = r[t] || (r[t] = []);
                    o.push(n)
                }
            },
            Ia = [],
            Oa = e.off = function(e, t, n) {
                if (e.removeEventListener) e.removeEventListener(t, n, !1);
                else if (e.detachEvent) e.detachEvent("on" + t, n);
                else
                    for (var r = Eo(e, t, !1), o = 0; o < r.length; ++o)
                        if (r[o] == n) {
                            r.splice(o, 1);
                            break
                        }
            },
            Pa = e.signal = function(e, t) {
                var n = Eo(e, t, !0);
                if (n.length)
                    for (var r = Array.prototype.slice.call(arguments, 2), o = 0; o < n.length; ++o) n[o].apply(null, r)
            },
            Ra = null,
            Fa = 30,
            za = e.Pass = {
                toString: function() {
                    return "CodeMirror.Pass"
                }
            },
            Wa = {
                scroll: !1
            },
            Ba = {
                origin: "*mouse"
            },
            qa = {
                origin: "+move"
            };
        Do.prototype.set = function(e, t) {
            clearTimeout(this.id), this.id = setTimeout(t, e)
        };
        var Ha = e.countColumn = function(e, t, n, r, o) {
                null == t && (t = e.search(/[^\s\u00a0]/), t == -1 && (t = e.length));
                for (var i = r || 0, a = o || 0;;) {
                    var s = e.indexOf("\t", i);
                    if (s < 0 || s >= t) return a + (t - i);
                    a += s - i, a += n - a % n, i = s + 1
                }
            },
            Ua = e.findColumn = function(e, t, n) {
                for (var r = 0, o = 0;;) {
                    var i = e.indexOf("\t", r);
                    i == -1 && (i = e.length);
                    var a = i - r;
                    if (i == e.length || o + a >= t) return r + Math.min(a, t - o);
                    if (o += i - r, o += n - o % n, r = i + 1, o >= t) return r
                }
            },
            ja = [""],
            Va = function(e) {
                e.select()
            };
        Li ? Va = function(e) {
            e.selectionStart = 0, e.selectionEnd = e.value.length
        } : wi && (Va = function(e) {
            try {
                e.select()
            } catch (t) {}
        });
        var Ka, Ga = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
            Ya = e.isWordChar = function(e) {
                return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Ga.test(e))
            },
            $a = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        Ka = document.createRange ? function(e, t, n, r) {
            var o = document.createRange();
            return o.setEnd(r || e, n), o.setStart(e, t), o
        } : function(e, t, n) {
            var r = document.body.createTextRange();
            try {
                r.moveToElementText(e.parentNode)
            } catch (o) {
                return r
            }
            return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r
        };
        var Za = e.contains = function(e, t) {
            if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
            do
                if (11 == t.nodeType && (t = t.host), t == e) return !0;
            while (t = t.parentNode)
        };
        wi && ki < 11 && (Yo = function() {
            try {
                return document.activeElement
            } catch (e) {
                return document.body
            }
        });
        var Xa, Qa, Ja = e.rmClass = function(e, t) {
                var n = e.className,
                    r = $o(t).exec(n);
                if (r) {
                    var o = n.slice(r.index + r[0].length);
                    e.className = n.slice(0, r.index) + (o ? r[1] + o : "")
                }
            },
            es = e.addClass = function(e, t) {
                var n = e.className;
                $o(t).test(n) || (e.className += (n ? " " : "") + t)
            },
            ts = !1,
            ns = function() {
                if (wi && ki < 9) return !1;
                var e = Vo("div");
                return "draggable" in e || "dragDrop" in e
            }(),
            rs = e.splitLines = 3 != "\n\nb".split(/\n/).length ? function(e) {
                for (var t = 0, n = [], r = e.length; t <= r;) {
                    var o = e.indexOf("\n", t);
                    o == -1 && (o = e.length);
                    var i = e.slice(t, "\r" == e.charAt(o - 1) ? o - 1 : o),
                        a = i.indexOf("\r");
                    a != -1 ? (n.push(i.slice(0, a)), t += a + 1) : (n.push(i), t = o + 1)
                }
                return n
            } : function(e) {
                return e.split(/\r\n?|\n/)
            },
            os = window.getSelection ? function(e) {
                try {
                    return e.selectionStart != e.selectionEnd
                } catch (t) {
                    return !1
                }
            } : function(e) {
                try {
                    var t = e.ownerDocument.selection.createRange()
                } catch (n) {}
                return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
            },
            is = function() {
                var e = Vo("div");
                return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
            }(),
            as = null,
            ss = e.keyNames = {
                3: "Enter",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                127: "Delete",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
            };
        ! function() {
            for (var e = 0; e < 10; e++) ss[e + 48] = ss[e + 96] = String(e);
            for (var e = 65; e <= 90; e++) ss[e] = String.fromCharCode(e);
            for (var e = 1; e <= 12; e++) ss[e + 111] = ss[e + 63235] = "F" + e
        }();
        var ls, us = function() {
            function e(e) {
                return e <= 247 ? n.charAt(e) : 1424 <= e && e <= 1524 ? "R" : 1536 <= e && e <= 1773 ? r.charAt(e - 1536) : 1774 <= e && e <= 2220 ? "r" : 8192 <= e && e <= 8203 ? "w" : 8204 == e ? "b" : "L"
            }

            function t(e, t, n) {
                this.level = e, this.from = t, this.to = n
            }
            var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                r = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",
                o = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                i = /[stwN]/,
                a = /[LRr]/,
                s = /[Lb1n]/,
                l = /[1n]/,
                u = "L";
            return function(n) {
                if (!o.test(n)) return !1;
                for (var r, c = n.length, d = [], p = 0; p < c; ++p) d.push(r = e(n.charCodeAt(p)));
                for (var p = 0, f = u; p < c; ++p) {
                    var r = d[p];
                    "m" == r ? d[p] = f : f = r
                }
                for (var p = 0, h = u; p < c; ++p) {
                    var r = d[p];
                    "1" == r && "r" == h ? d[p] = "n" : a.test(r) && (h = r, "r" == r && (d[p] = "R"))
                }
                for (var p = 1, f = d[0]; p < c - 1; ++p) {
                    var r = d[p];
                    "+" == r && "1" == f && "1" == d[p + 1] ? d[p] = "1" : "," != r || f != d[p + 1] || "1" != f && "n" != f || (d[p] = f), f = r
                }
                for (var p = 0; p < c; ++p) {
                    var r = d[p];
                    if ("," == r) d[p] = "N";
                    else if ("%" == r) {
                        for (var m = p + 1; m < c && "%" == d[m]; ++m);
                        for (var g = p && "!" == d[p - 1] || m < c && "1" == d[m] ? "1" : "N", v = p; v < m; ++v) d[v] = g;
                        p = m - 1
                    }
                }
                for (var p = 0, h = u; p < c; ++p) {
                    var r = d[p];
                    "L" == h && "1" == r ? d[p] = "L" : a.test(r) && (h = r)
                }
                for (var p = 0; p < c; ++p)
                    if (i.test(d[p])) {
                        for (var m = p + 1; m < c && i.test(d[m]); ++m);
                        for (var y = "L" == (p ? d[p - 1] : u), b = "L" == (m < c ? d[m] : u), g = y || b ? "L" : "R", v = p; v < m; ++v) d[v] = g;
                        p = m - 1
                    }
                for (var x, w = [], p = 0; p < c;)
                    if (s.test(d[p])) {
                        var k = p;
                        for (++p; p < c && s.test(d[p]); ++p);
                        w.push(new t(0, k, p))
                    } else {
                        var _ = p,
                            C = w.length;
                        for (++p; p < c && "L" != d[p]; ++p);
                        for (var v = _; v < p;)
                            if (l.test(d[v])) {
                                _ < v && w.splice(C, 0, new t(1, _, v));
                                var E = v;
                                for (++v; v < p && l.test(d[v]); ++v);
                                w.splice(C, 0, new t(2, E, v)), _ = v
                            } else ++v;
                        _ < p && w.splice(C, 0, new t(1, _, p))
                    }
                return 1 == w[0].level && (x = n.match(/^\s+/)) && (w[0].from = x[0].length, w.unshift(new t(0, 0, x[0].length))), 1 == Oo(w).level && (x = n.match(/\s+$/)) && (Oo(w).to -= x[0].length, w.push(new t(0, c - x[0].length, c))), 2 == w[0].level && w.unshift(new t(1, w[0].to, w[0].to)), w[0].level != Oo(w).level && w.push(new t(w[0].level, c, c)), w
            }
        }();
        return e.version = "5.18.2", e
    })
}, function(e, t) {}, , , , function(e, t) {}, , function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        var n = e.value;
        return t.slide.contentConverter(n, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = o;
    var i = n(96),
        a = r(i);
    o.propTypes = {
        value: a["default"].PropTypes.string
    }, o.contextTypes = {
        slide: a["default"].PropTypes.object.isRequired,
        slideIndex: a["default"].PropTypes.number.isRequired,
        slides: a["default"].PropTypes.arrayOf(a["default"].PropTypes.object),
        config: a["default"].PropTypes.object.isRequired
    }
}, function(e, t) {
    (function(e) {
        "use strict";
        e.expandSection = function(e) {
            var t = document.getElementById("additionalLinks");
            e.preventDefault(), "block" == t.style.display ? (t.style.display = "none", document.getElementById("a11yLinkHide").style.display = "none", document.getElementById("a11yLinkShow").style.display = "block") : (t.style.display = "block", document.getElementById("a11yLinkShow").style.display = "none", document.getElementById("a11yLinkHide").style.display = "block")
        }, e.expandSectionWithARIA = function(e) {
            var t = document.getElementById("additionalLinks");
            e.preventDefault(), "block" == t.style.display ? (t.style.display = "none", document.getElementById("a11yLinkHide").style.display = "none", document.getElementById("a11yLinkShow").style.display = "block", document.getElementById("a11yLinkHide").focus(), t.setAttribute("aria-expanded", !1)) : (t.style.display = "block", document.getElementById("a11yLinkShow").style.display = "none", document.getElementById("a11yLinkHide").style.display = "block", t.focus(), t.setAttribute("aria-expanded", !0))
        }, e.showHideDialog = function(e) {
            var t = document.getElementById("overlay");
            document.getElementById("closeButton").onkeydown = function(e) {
                9 == e.keyCode && (e.preventDefault(), document.getElementById("inputfield").focus())
            }, "flex" == t.style.display ? (t.style.display = "none", document.getElementById("sourceLink").focus(), document.body.style.overflow = "initial") : (t.style.display = "flex", document.getElementById("inputfield").focus(), document.body.style.overflow = "hidden"), e.preventDefault()
        }, e.showHideDialog2 = function(e) {
            var t = document.getElementById("overlay2");
            document.getElementById("closeButton2").onkeydown = function(e) {
                9 == e.keyCode && (e.preventDefault(), document.getElementById("inputfield2").focus())
            }, "flex" == t.style.display ? (t.style.display = "none", document.getElementById("sourceLink2").focus(), document.body.style.overflow = "initial") : (t.style.display = "flex", document.getElementById("inputfield2").focus(), document.body.style.overflow = "hidden"), e.preventDefault()
        }, e.closeDialog = function(e) {
            if (27 == e.keyCode) {
                var t = document.getElementById("overlay");
                t.style.display = "none", document.getElementById("sourceLink").focus()
            }
        }, e.closeDialog2 = function(e) {
            if (27 == e.keyCode) {
                var t = document.getElementById("overlay2");
                t.style.display = "none", document.getElementById("sourceLink2").focus()
            }
        }, e.menuExample = {
            onClick: function(e) {
                var t = this.toggleMenu(e.currentTarget);
                t && this.setMenuItemFocus(e.currentTarget)
            },
            onClickWidget: function() {
                event.preventDefault()
            },
            onMouseoverMenuItem: function(e) {
                "menuitem" === e.target.getAttribute("role") && this.setMenuItemFocus(e.target.parentNode.parentNode, e.target)
            },
            onClickMenuItem: function(e) {
                var t = e.target.parentNode.parentNode;
                this.setButtonFocus(t), this.closeMenu(t)
            },
            onKeydown: function(e) {
                function t(e) {
                    e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
                }
                var n = e.currentTarget,
                    r = this.findMenuElement(n),
                    o = this.findButtonElement(n),
                    i = Array.prototype.slice.call(r.querySelectorAll('[role="menuitem"]')),
                    a = -1;
                switch (i.forEach(function(e, t) {
                    "true" === e.getAttribute("data-active") && (a = t)
                }), e.keyCode) {
                    case 40:
                    case 38:
                        this.openMenu(e.currentTarget);
                        var s = 38 === e.keyCode,
                            l = s ? -1 : 1,
                            u = s ? 0 : i.length - 1,
                            c = s ? Math.max : Math.min,
                            d = c(a + l, u),
                            p = i[d];
                        this.setMenuItemFocus(n, p), t(e);
                        break;
                    case 37:
                    case 39:
                        t(e);
                        break;
                    case 32:
                    case 13:
                        a > -1 ? (this.closeMenu(n), this.setButtonFocus(n)) : e.target === o && (this.openMenu(n), this.setMenuItemFocus(n)), t(e);
                        break;
                    case 27:
                        this.closeMenu(n), this.setButtonFocus(n), t(e);
                        break;
                    default:
                        console.log(e.keyCode)
                }
            },
            openMenu: function(e) {
                var t = this.findMenuElement(e);
                return "false" === t.getAttribute("data-open") && (t.style.display = "block", t.setAttribute("data-open", "true")), !0
            },
            closeMenu: function(e) {
                var t = this.findMenuElement(e);
                return t.style.display = "none", t.setAttribute("data-open", "false"), this.removeMenuItemFocus(e), !1
            },
            toggleMenu: function(e) {
                var t = this.findMenuElement(e);
                return "false" === t.getAttribute("data-open") ? this.openMenu(e) : this.closeMenu(e)
            },
            setButtonFocus: function(e) {
                this.findButtonElement(e).focus()
            },
            setMenuItemFocus: function(e, t) {
                var n = this.findMenuElement(e);
                this.removeMenuItemFocus(e), t || (t = n.querySelectorAll('[role="menuitem"]')[0]), t.setAttribute("data-active", "true"), t.focus()
            },
            removeMenuItemFocus: function(e) {
                var t = this.findMenuElement(e);
                Array.prototype.forEach.call(t.querySelectorAll('[role="menuitem"]'), function(e) {
                    e.setAttribute("data-active", "false")
                }), this.findButtonElement(e).focus()
            },
            findMenuElement: function(e) {
                for (; e.className.indexOf("popupMenuWidget") === -1;) e = e.parentNode;
                return e.querySelector('[role="menu"],ul')
            },
            findButtonElement: function(e) {
                for (; e.className.indexOf("popupMenuWidget") === -1;) e = e.parentNode;
                return e.querySelector('[role="button"],a')
            }
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    ! function(e) {
        e(n(219), n(229), n(230), n(231))
    }(function(e) {
        "use strict";

        function t(e, t, n) {
            var r = e.current(),
                o = r.search(t);
            return o > -1 ? e.backUp(r.length - o) : r.match(/<\/?$/) && (e.backUp(r.length), e.match(t, !1) || e.match(r)), n
        }

        function n(e) {
            var t = l[e];
            return t ? t : l[e] = new RegExp("\\s+" + e + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*")
        }

        function r(e, t) {
            var r = e.match(n(t));
            return r ? /^\s*(.*?)\s*$/.exec(r[2])[1] : ""
        }

        function o(e, t) {
            return new RegExp((t ? "^" : "") + "</s*" + e + "s*>", "i")
        }

        function i(e, t) {
            for (var n in e)
                for (var r = t[n] || (t[n] = []), o = e[n], i = o.length - 1; i >= 0; i--) r.unshift(o[i])
        }

        function a(e, t) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                if (!o[0] || o[1].test(r(t, o[0]))) return o[2]
            }
        }
        var s = {
                script: [
                    ["lang", /(javascript|babel)/i, "javascript"],
                    ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i, "javascript"],
                    ["type", /./, "text/plain"],
                    [null, null, "javascript"]
                ],
                style: [
                    ["lang", /^css$/i, "css"],
                    ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
                    ["type", /./, "text/plain"],
                    [null, null, "css"]
                ]
            },
            l = {};
        e.defineMode("htmlmixed", function(n, r) {
            function l(r, i) {
                var s, d = u.token(r, i.htmlState),
                    p = /\btag\b/.test(d);
                if (p && !/[<>\s\/]/.test(r.current()) && (s = i.htmlState.tagName && i.htmlState.tagName.toLowerCase()) && c.hasOwnProperty(s)) i.inTag = s + " ";
                else if (i.inTag && p && />$/.test(r.current())) {
                    var f = /^([\S]+) (.*)/.exec(i.inTag);
                    i.inTag = null;
                    var h = ">" == r.current() && a(c[f[1]], f[2]),
                        m = e.getMode(n, h),
                        g = o(f[1], !0),
                        v = o(f[1], !1);
                    i.token = function(e, n) {
                        return e.match(g, !1) ? (n.token = l, n.localState = n.localMode = null, null) : t(e, v, n.localMode.token(e, n.localState))
                    }, i.localMode = m, i.localState = e.startState(m, u.indent(i.htmlState, ""))
                } else i.inTag && (i.inTag += r.current(), r.eol() && (i.inTag += " "));
                return d
            }
            var u = e.getMode(n, {
                    name: "xml",
                    htmlMode: !0,
                    multilineTagIndentFactor: r.multilineTagIndentFactor,
                    multilineTagIndentPastTag: r.multilineTagIndentPastTag
                }),
                c = {},
                d = r && r.tags,
                p = r && r.scriptTypes;
            if (i(s, c), d && i(d, c), p)
                for (var f = p.length - 1; f >= 0; f--) c.script.unshift(["type", p[f].matches, p[f].mode]);
            return {
                startState: function() {
                    var t = e.startState(u);
                    return {
                        token: l,
                        inTag: null,
                        localMode: null,
                        localState: null,
                        htmlState: t
                    }
                },
                copyState: function(t) {
                    var n;
                    return t.localState && (n = e.copyState(t.localMode, t.localState)), {
                        token: t.token,
                        inTag: t.inTag,
                        localMode: t.localMode,
                        localState: n,
                        htmlState: e.copyState(u, t.htmlState)
                    }
                },
                token: function(e, t) {
                    return t.token(e, t)
                },
                indent: function(t, n) {
                    return !t.localMode || /^\s*<\//.test(n) ? u.indent(t.htmlState, n) : t.localMode.indent ? t.localMode.indent(t.localState, n) : e.Pass
                },
                innerMode: function(e) {
                    return {
                        state: e.localState || e.htmlState,
                        mode: e.localMode || u
                    }
                }
            }
        }, "xml", "javascript", "css"), e.defineMIME("text/html", "htmlmixed")
    })
}, function(e, t, n) {
    ! function(e) {
        e(n(219))
    }(function(e) {
        "use strict";
        var t = {
                autoSelfClosers: {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    command: !0,
                    embed: !0,
                    frame: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0,
                    menuitem: !0
                },
                implicitlyClosed: {
                    dd: !0,
                    li: !0,
                    optgroup: !0,
                    option: !0,
                    p: !0,
                    rp: !0,
                    rt: !0,
                    tbody: !0,
                    td: !0,
                    tfoot: !0,
                    th: !0,
                    tr: !0
                },
                contextGrabbers: {
                    dd: {
                        dd: !0,
                        dt: !0
                    },
                    dt: {
                        dd: !0,
                        dt: !0
                    },
                    li: {
                        li: !0
                    },
                    option: {
                        option: !0,
                        optgroup: !0
                    },
                    optgroup: {
                        optgroup: !0
                    },
                    p: {
                        address: !0,
                        article: !0,
                        aside: !0,
                        blockquote: !0,
                        dir: !0,
                        div: !0,
                        dl: !0,
                        fieldset: !0,
                        footer: !0,
                        form: !0,
                        h1: !0,
                        h2: !0,
                        h3: !0,
                        h4: !0,
                        h5: !0,
                        h6: !0,
                        header: !0,
                        hgroup: !0,
                        hr: !0,
                        menu: !0,
                        nav: !0,
                        ol: !0,
                        p: !0,
                        pre: !0,
                        section: !0,
                        table: !0,
                        ul: !0
                    },
                    rp: {
                        rp: !0,
                        rt: !0
                    },
                    rt: {
                        rp: !0,
                        rt: !0
                    },
                    tbody: {
                        tbody: !0,
                        tfoot: !0
                    },
                    td: {
                        td: !0,
                        th: !0
                    },
                    tfoot: {
                        tbody: !0
                    },
                    th: {
                        td: !0,
                        th: !0
                    },
                    thead: {
                        tbody: !0,
                        tfoot: !0
                    },
                    tr: {
                        tr: !0
                    }
                },
                doNotIndent: {
                    pre: !0
                },
                allowUnquoted: !0,
                allowMissing: !0,
                caseFold: !0
            },
            n = {
                autoSelfClosers: {},
                implicitlyClosed: {},
                contextGrabbers: {},
                doNotIndent: {},
                allowUnquoted: !1,
                allowMissing: !1,
                caseFold: !1
            };
        e.defineMode("xml", function(r, o) {
            function i(e, t) {
                function n(n) {
                    return t.tokenize = n, n(e, t)
                }
                var r = e.next();
                if ("<" == r) return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(l("atom", "]]>")) : null : e.match("--") ? n(l("comment", "-->")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(u(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = l("meta", "?>"), "meta") : (S = e.eat("/") ? "closeTag" : "openTag", t.tokenize = a, "tag bracket");
                if ("&" == r) {
                    var o;
                    return o = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"), o ? "atom" : "error"
                }
                return e.eatWhile(/[^&<]/), null
            }

            function a(e, t) {
                var n = e.next();
                if (">" == n || "/" == n && e.eat(">")) return t.tokenize = i, S = ">" == n ? "endTag" : "selfcloseTag", "tag bracket";
                if ("=" == n) return S = "equals", null;
                if ("<" == n) {
                    t.tokenize = i, t.state = f, t.tagName = t.tagStart = null;
                    var r = t.tokenize(e, t);
                    return r ? r + " tag error" : "tag error"
                }
                return /[\'\"]/.test(n) ? (t.tokenize = s(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
            }

            function s(e) {
                var t = function(t, n) {
                    for (; !t.eol();)
                        if (t.next() == e) {
                            n.tokenize = a;
                            break
                        }
                    return "string"
                };
                return t.isInAttribute = !0, t
            }

            function l(e, t) {
                return function(n, r) {
                    for (; !n.eol();) {
                        if (n.match(t)) {
                            r.tokenize = i;
                            break
                        }
                        n.next()
                    }
                    return e
                }
            }

            function u(e) {
                return function(t, n) {
                    for (var r; null != (r = t.next());) {
                        if ("<" == r) return n.tokenize = u(e + 1), n.tokenize(t, n);
                        if (">" == r) {
                            if (1 == e) {
                                n.tokenize = i;
                                break
                            }
                            return n.tokenize = u(e - 1), n.tokenize(t, n)
                        }
                    }
                    return "meta"
                }
            }

            function c(e, t, n) {
                this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (_.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
            }

            function d(e) {
                e.context && (e.context = e.context.prev)
            }

            function p(e, t) {
                for (var n;;) {
                    if (!e.context) return;
                    if (n = e.context.tagName, !_.contextGrabbers.hasOwnProperty(n) || !_.contextGrabbers[n].hasOwnProperty(t)) return;
                    d(e)
                }
            }

            function f(e, t, n) {
                return "openTag" == e ? (n.tagStart = t.column(), h) : "closeTag" == e ? m : f
            }

            function h(e, t, n) {
                return "word" == e ? (n.tagName = t.current(), T = "tag", y) : (T = "error", h)
            }

            function m(e, t, n) {
                if ("word" == e) {
                    var r = t.current();
                    return n.context && n.context.tagName != r && _.implicitlyClosed.hasOwnProperty(n.context.tagName) && d(n), n.context && n.context.tagName == r || _.matchClosing === !1 ? (T = "tag", g) : (T = "tag error", v)
                }
                return T = "error", v
            }

            function g(e, t, n) {
                return "endTag" != e ? (T = "error", g) : (d(n), f)
            }

            function v(e, t, n) {
                return T = "error", g(e, t, n)
            }

            function y(e, t, n) {
                if ("word" == e) return T = "attribute", b;
                if ("endTag" == e || "selfcloseTag" == e) {
                    var r = n.tagName,
                        o = n.tagStart;
                    return n.tagName = n.tagStart = null, "selfcloseTag" == e || _.autoSelfClosers.hasOwnProperty(r) ? p(n, r) : (p(n, r), n.context = new c(n, r, o == n.indented)), f
                }
                return T = "error", y
            }

            function b(e, t, n) {
                return "equals" == e ? x : (_.allowMissing || (T = "error"), y(e, t, n))
            }

            function x(e, t, n) {
                return "string" == e ? w : "word" == e && _.allowUnquoted ? (T = "string", y) : (T = "error", y(e, t, n))
            }

            function w(e, t, n) {
                return "string" == e ? w : y(e, t, n)
            }
            var k = r.indentUnit,
                _ = {},
                C = o.htmlMode ? t : n;
            for (var E in C) _[E] = C[E];
            for (var E in o) _[E] = o[E];
            var S, T;
            return i.isInText = !0, {
                startState: function(e) {
                    var t = {
                        tokenize: i,
                        state: f,
                        indented: e || 0,
                        tagName: null,
                        tagStart: null,
                        context: null
                    };
                    return null != e && (t.baseIndent = e), t
                },
                token: function(e, t) {
                    if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
                    S = null;
                    var n = t.tokenize(e, t);
                    return (n || S) && "comment" != n && (T = null, t.state = t.state(S || n, e, t), T && (n = "error" == T ? n + " error" : T)), n
                },
                indent: function(t, n, r) {
                    var o = t.context;
                    if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + k;
                    if (o && o.noIndent) return e.Pass;
                    if (t.tokenize != a && t.tokenize != i) return r ? r.match(/^(\s*)/)[0].length : 0;
                    if (t.tagName) return _.multilineTagIndentPastTag !== !1 ? t.tagStart + t.tagName.length + 2 : t.tagStart + k * (_.multilineTagIndentFactor || 1);
                    if (_.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
                    var s = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                    if (s && s[1])
                        for (; o;) {
                            if (o.tagName == s[2]) {
                                o = o.prev;
                                break
                            }
                            if (!_.implicitlyClosed.hasOwnProperty(o.tagName)) break;
                            o = o.prev
                        } else if (s)
                            for (; o;) {
                                var l = _.contextGrabbers[o.tagName];
                                if (!l || !l.hasOwnProperty(s[2])) break;
                                o = o.prev
                            }
                        for (; o && o.prev && !o.startOfLine;) o = o.prev;
                    return o ? o.indent + k : t.baseIndent || 0
                },
                electricInput: /<\/[\s\w:]+>$/,
                blockCommentStart: "<!--",
                blockCommentEnd: "-->",
                configuration: _.htmlMode ? "html" : "xml",
                helperType: _.htmlMode ? "html" : "xml",
                skipAttribute: function(e) {
                    e.state == x && (e.state = y)
                }
            }
        }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
            name: "xml",
            htmlMode: !0
        })
    })
}, function(e, t, n) {
    ! function(e) {
        e(n(219))
    }(function(e) {
        "use strict";

        function t(e, t, n) {
            return /^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0)))
        }
        e.defineMode("javascript", function(n, r) {
            function o(e) {
                for (var t, n = !1, r = !1; null != (t = e.next());) {
                    if (!n) {
                        if ("/" == t && !r) return;
                        "[" == t ? r = !0 : r && "]" == t && (r = !1)
                    }
                    n = !n && "\\" == t
                }
            }

            function i(e, t, n) {
                return ke = e, _e = n, t
            }

            function a(e, n) {
                var r = e.next();
                if ('"' == r || "'" == r) return n.tokenize = s(r), n.tokenize(e, n);
                if ("." == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) return i("number", "number");
                if ("." == r && e.match("..")) return i("spread", "meta");
                if (/[\[\]{}\(\),;\:\.]/.test(r)) return i(r);
                if ("=" == r && e.eat(">")) return i("=>", "operator");
                if ("0" == r && e.eat(/x/i)) return e.eatWhile(/[\da-f]/i), i("number", "number");
                if ("0" == r && e.eat(/o/i)) return e.eatWhile(/[0-7]/i), i("number", "number");
                if ("0" == r && e.eat(/b/i)) return e.eatWhile(/[01]/i), i("number", "number");
                if (/\d/.test(r)) return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), i("number", "number");
                if ("/" == r) return e.eat("*") ? (n.tokenize = l, l(e, n)) : e.eat("/") ? (e.skipToEnd(), i("comment", "comment")) : t(e, n, 1) ? (o(e), e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/), i("regexp", "string-2")) : (e.eatWhile(Ne), i("operator", "operator", e.current()));
                if ("`" == r) return n.tokenize = u, u(e, n);
                if ("#" == r) return e.skipToEnd(), i("error", "error");
                if (Ne.test(r)) return e.eatWhile(Ne), i("operator", "operator", e.current());
                if (Me.test(r)) {
                    e.eatWhile(Me);
                    var a = e.current(),
                        c = Le.propertyIsEnumerable(a) && Le[a];
                    return c && "." != n.lastType ? i(c.type, c.style, a) : i("variable", "variable", a)
                }
            }

            function s(e) {
                return function(t, n) {
                    var r, o = !1;
                    if (Se && "@" == t.peek() && t.match(De)) return n.tokenize = a, i("jsonld-keyword", "meta");
                    for (; null != (r = t.next()) && (r != e || o);) o = !o && "\\" == r;
                    return o || (n.tokenize = a), i("string", "string")
                }
            }

            function l(e, t) {
                for (var n, r = !1; n = e.next();) {
                    if ("/" == n && r) {
                        t.tokenize = a;
                        break
                    }
                    r = "*" == n
                }
                return i("comment", "comment")
            }

            function u(e, t) {
                for (var n, r = !1; null != (n = e.next());) {
                    if (!r && ("`" == n || "$" == n && e.eat("{"))) {
                        t.tokenize = a;
                        break
                    }
                    r = !r && "\\" == n
                }
                return i("quasi", "string-2", e.current())
            }

            function c(e, t) {
                t.fatArrowAt && (t.fatArrowAt = null);
                var n = e.string.indexOf("=>", e.start);
                if (!(n < 0)) {
                    for (var r = 0, o = !1, i = n - 1; i >= 0; --i) {
                        var a = e.string.charAt(i),
                            s = Ie.indexOf(a);
                        if (s >= 0 && s < 3) {
                            if (!r) {
                                ++i;
                                break
                            }
                            if (0 == --r) {
                                "(" == a && (o = !0);
                                break
                            }
                        } else if (s >= 3 && s < 6) ++r;
                        else if (Me.test(a)) o = !0;
                        else {
                            if (/["'\/]/.test(a)) return;
                            if (o && !r) {
                                ++i;
                                break
                            }
                        }
                    }
                    o && !r && (t.fatArrowAt = i)
                }
            }

            function d(e, t, n, r, o, i) {
                this.indented = e, this.column = t, this.type = n, this.prev = o, this.info = i, null != r && (this.align = r)
            }

            function p(e, t) {
                for (var n = e.localVars; n; n = n.next)
                    if (n.name == t) return !0;
                for (var r = e.context; r; r = r.prev)
                    for (var n = r.vars; n; n = n.next)
                        if (n.name == t) return !0
            }

            function f(e, t, n, r, o) {
                var i = e.cc;
                for (Pe.state = e, Pe.stream = o, Pe.marked = null, Pe.cc = i, Pe.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);;) {
                    var a = i.length ? i.pop() : Te ? _ : k;
                    if (a(n, r)) {
                        for (; i.length && i[i.length - 1].lex;) i.pop()();
                        return Pe.marked ? Pe.marked : "variable" == n && p(e, r) ? "variable-2" : t
                    }
                }
            }

            function h() {
                for (var e = arguments.length - 1; e >= 0; e--) Pe.cc.push(arguments[e])
            }

            function m() {
                return h.apply(null, arguments), !0
            }

            function g(e) {
                function t(t) {
                    for (var n = t; n; n = n.next)
                        if (n.name == e) return !0;
                    return !1
                }
                var n = Pe.state;
                if (Pe.marked = "def", n.context) {
                    if (t(n.localVars)) return;
                    n.localVars = {
                        name: e,
                        next: n.localVars
                    }
                } else {
                    if (t(n.globalVars)) return;
                    r.globalVars && (n.globalVars = {
                        name: e,
                        next: n.globalVars
                    })
                }
            }

            function v() {
                Pe.state.context = {
                    prev: Pe.state.context,
                    vars: Pe.state.localVars
                }, Pe.state.localVars = Re
            }

            function y() {
                Pe.state.localVars = Pe.state.context.vars, Pe.state.context = Pe.state.context.prev
            }

            function b(e, t) {
                var n = function() {
                    var n = Pe.state,
                        r = n.indented;
                    if ("stat" == n.lexical.type) r = n.lexical.indented;
                    else
                        for (var o = n.lexical; o && ")" == o.type && o.align; o = o.prev) r = o.indented;
                    n.lexical = new d(r, Pe.stream.column(), e, null, n.lexical, t)
                };
                return n.lex = !0, n
            }

            function x() {
                var e = Pe.state;
                e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
            }

            function w(e) {
                function t(n) {
                    return n == e ? m() : ";" == e ? h() : m(t)
                }
                return t
            }

            function k(e, t) {
                return "var" == e ? m(b("vardef", t.length), Q, w(";"), x) : "keyword a" == e ? m(b("form"), _, k, x) : "keyword b" == e ? m(b("form"), k, x) : "{" == e ? m(b("}"), j, x) : ";" == e ? m() : "if" == e ? ("else" == Pe.state.lexical.info && Pe.state.cc[Pe.state.cc.length - 1] == x && Pe.state.cc.pop()(), m(b("form"), _, k, x, re)) : "function" == e ? m(ue) : "for" == e ? m(b("form"), oe, k, x) : "variable" == e ? m(b("stat"), F) : "switch" == e ? m(b("form"), _, b("}", "switch"), w("{"), j, x, x) : "case" == e ? m(_, w(":")) : "default" == e ? m(w(":")) : "catch" == e ? m(b("form"), v, w("("), ce, w(")"), k, x, y) : "class" == e ? m(b("form"), de, x) : "export" == e ? m(b("stat"), me, x) : "import" == e ? m(b("stat"), ge, x) : "module" == e ? m(b("form"), J, b("}"), w("{"), j, x, x) : "async" == e ? m(k) : h(b("stat"), _, w(";"), x)
            }

            function _(e) {
                return E(e, !1)
            }

            function C(e) {
                return E(e, !0)
            }

            function E(e, t) {
                if (Pe.state.fatArrowAt == Pe.stream.start) {
                    var n = t ? I : D;
                    if ("(" == e) return m(v, b(")"), H(J, ")"), x, w("=>"), n, y);
                    if ("variable" == e) return h(v, J, w("=>"), n, y)
                }
                var r = t ? M : A;
                return Oe.hasOwnProperty(e) ? m(r) : "function" == e ? m(ue, r) : "keyword c" == e || "async" == e ? m(t ? T : S) : "(" == e ? m(b(")"), S, w(")"), x, r) : "operator" == e || "spread" == e ? m(t ? C : _) : "[" == e ? m(b("]"), xe, x, r) : "{" == e ? U(W, "}", null, r) : "quasi" == e ? h(L, r) : "new" == e ? m(O(t)) : m()
            }

            function S(e) {
                return e.match(/[;\}\)\],]/) ? h() : h(_)
            }

            function T(e) {
                return e.match(/[;\}\)\],]/) ? h() : h(C)
            }

            function A(e, t) {
                return "," == e ? m(_) : M(e, t, !1)
            }

            function M(e, t, n) {
                var r = 0 == n ? A : M,
                    o = 0 == n ? _ : C;
                return "=>" == e ? m(v, n ? I : D, y) : "operator" == e ? /\+\+|--/.test(t) ? m(r) : "?" == t ? m(_, w(":"), o) : m(o) : "quasi" == e ? h(L, r) : ";" != e ? "(" == e ? U(C, ")", "call", r) : "." == e ? m(z, r) : "[" == e ? m(b("]"), S, w("]"), x, r) : void 0 : void 0
            }

            function L(e, t) {
                return "quasi" != e ? h() : "${" != t.slice(t.length - 2) ? m(L) : m(_, N)
            }

            function N(e) {
                if ("}" == e) return Pe.marked = "string-2", Pe.state.tokenize = u, m(L)
            }

            function D(e) {
                return c(Pe.stream, Pe.state), h("{" == e ? k : _)
            }

            function I(e) {
                return c(Pe.stream, Pe.state), h("{" == e ? k : C)
            }

            function O(e) {
                return function(t) {
                    return "." == t ? m(e ? R : P) : h(e ? C : _)
                }
            }

            function P(e, t) {
                if ("target" == t) return Pe.marked = "keyword", m(A)
            }

            function R(e, t) {
                if ("target" == t) return Pe.marked = "keyword", m(M)
            }

            function F(e) {
                return ":" == e ? m(x, k) : h(A, w(";"), x)
            }

            function z(e) {
                if ("variable" == e) return Pe.marked = "property", m()
            }

            function W(e, t) {
                return "async" == e ? (Pe.marked = "property", m(W)) : "variable" == e || "keyword" == Pe.style ? (Pe.marked = "property", m("get" == t || "set" == t ? B : q)) : "number" == e || "string" == e ? (Pe.marked = Se ? "property" : Pe.style + " property", m(q)) : "jsonld-keyword" == e ? m(q) : "modifier" == e ? m(W) : "[" == e ? m(_, w("]"), q) : "spread" == e ? m(_) : ":" == e ? h(q) : void 0
            }

            function B(e) {
                return "variable" != e ? h(q) : (Pe.marked = "property", m(ue))
            }

            function q(e) {
                return ":" == e ? m(C) : "(" == e ? h(ue) : void 0
            }

            function H(e, t) {
                function n(r, o) {
                    if ("," == r) {
                        var i = Pe.state.lexical;
                        return "call" == i.info && (i.pos = (i.pos || 0) + 1), m(function(n, r) {
                            return n == t || r == t ? h() : h(e)
                        }, n)
                    }
                    return r == t || o == t ? m() : m(w(t))
                }
                return function(r, o) {
                    return r == t || o == t ? m() : h(e, n)
                }
            }

            function U(e, t, n) {
                for (var r = 3; r < arguments.length; r++) Pe.cc.push(arguments[r]);
                return m(b(t, n), H(e, t), x)
            }

            function j(e) {
                return "}" == e ? m() : h(k, j)
            }

            function V(e) {
                if (Ae && ":" == e) return m(G)
            }

            function K(e, t) {
                if ("=" == t) return m(C)
            }

            function G(e) {
                return "variable" == e ? (Pe.marked = "variable-3", m(X)) : "{" == e ? m(H($, "}")) : "(" == e ? m(H(Z, ")"), Y) : void 0
            }

            function Y(e) {
                if ("=>" == e) return m(G)
            }

            function $(e) {
                return "variable" == e || "keyword" == Pe.style ? (Pe.marked = "property", m($)) : ":" == e ? m(G) : void 0
            }

            function Z(e) {
                return "variable" == e ? m(Z) : ":" == e ? m(G) : void 0
            }

            function X(e, t) {
                return "<" == t ? m(H(G, ">"), X) : "[" == e ? m(w("]"), X) : void 0
            }

            function Q() {
                return h(J, V, te, ne)
            }

            function J(e, t) {
                return "modifier" == e ? m(J) : "variable" == e ? (g(t), m()) : "spread" == e ? m(J) : "[" == e ? U(J, "]") : "{" == e ? U(ee, "}") : void 0
            }

            function ee(e, t) {
                return "variable" != e || Pe.stream.match(/^\s*:/, !1) ? ("variable" == e && (Pe.marked = "property"), "spread" == e ? m(J) : "}" == e ? h() : m(w(":"), J, te)) : (g(t), m(te))
            }

            function te(e, t) {
                if ("=" == t) return m(C)
            }

            function ne(e) {
                if ("," == e) return m(Q)
            }

            function re(e, t) {
                if ("keyword b" == e && "else" == t) return m(b("form", "else"), k, x)
            }

            function oe(e) {
                if ("(" == e) return m(b(")"), ie, w(")"), x)
            }

            function ie(e) {
                return "var" == e ? m(Q, w(";"), se) : ";" == e ? m(se) : "variable" == e ? m(ae) : h(_, w(";"), se)
            }

            function ae(e, t) {
                return "in" == t || "of" == t ? (Pe.marked = "keyword", m(_)) : m(A, se)
            }

            function se(e, t) {
                return ";" == e ? m(le) : "in" == t || "of" == t ? (Pe.marked = "keyword", m(_)) : h(_, w(";"), le)
            }

            function le(e) {
                ")" != e && m(_)
            }

            function ue(e, t) {
                return "*" == t ? (Pe.marked = "keyword", m(ue)) : "variable" == e ? (g(t), m(ue)) : "(" == e ? m(v, b(")"), H(ce, ")"), x, V, k, y) : void 0
            }

            function ce(e) {
                return "spread" == e ? m(ce) : h(J, V, K)
            }

            function de(e, t) {
                if ("variable" == e) return g(t), m(pe)
            }

            function pe(e, t) {
                return "extends" == t ? m(Ae ? G : _, pe) : "{" == e ? m(b("}"), fe, x) : void 0
            }

            function fe(e, t) {
                return "variable" == e || "keyword" == Pe.style ? "static" == t ? (Pe.marked = "keyword", m(fe)) : (Pe.marked = "property", "get" == t || "set" == t ? m(he, ue, fe) : m(ue, fe)) : "*" == t ? (Pe.marked = "keyword", m(fe)) : ";" == e ? m(fe) : "}" == e ? m() : void 0
            }

            function he(e) {
                return "variable" != e ? h() : (Pe.marked = "property", m())
            }

            function me(e, t) {
                return "*" == t ? (Pe.marked = "keyword", m(be, w(";"))) : "default" == t ? (Pe.marked = "keyword", m(_, w(";"))) : h(k)
            }

            function ge(e) {
                return "string" == e ? m() : h(ve, be)
            }

            function ve(e, t) {
                return "{" == e ? U(ve, "}") : ("variable" == e && g(t), "*" == t && (Pe.marked = "keyword"), m(ye))
            }

            function ye(e, t) {
                if ("as" == t) return Pe.marked = "keyword", m(ve)
            }

            function be(e, t) {
                if ("from" == t) return Pe.marked = "keyword", m(_)
            }

            function xe(e) {
                return "]" == e ? m() : h(H(C, "]"))
            }

            function we(e, t) {
                return "operator" == e.lastType || "," == e.lastType || Ne.test(t.charAt(0)) || /[,.]/.test(t.charAt(0))
            }
            var ke, _e, Ce = n.indentUnit,
                Ee = r.statementIndent,
                Se = r.jsonld,
                Te = r.json || Se,
                Ae = r.typescript,
                Me = r.wordCharacters || /[\w$\xa1-\uffff]/,
                Le = function() {
                    function e(e) {
                        return {
                            type: e,
                            style: "keyword"
                        }
                    }
                    var t = e("keyword a"),
                        n = e("keyword b"),
                        r = e("keyword c"),
                        o = e("operator"),
                        i = {
                            type: "atom",
                            style: "atom"
                        },
                        a = {
                            "if": e("if"),
                            "while": t,
                            "with": t,
                            "else": n,
                            "do": n,
                            "try": n,
                            "finally": n,
                            "return": r,
                            "break": r,
                            "continue": r,
                            "new": e("new"),
                            "delete": r,
                            "throw": r,
                            "debugger": r,
                            "var": e("var"),
                            "const": e("var"),
                            "let": e("var"),
                            "function": e("function"),
                            "catch": e("catch"),
                            "for": e("for"),
                            "switch": e("switch"),
                            "case": e("case"),
                            "default": e("default"),
                            "in": o,
                            "typeof": o,
                            "instanceof": o,
                            "true": i,
                            "false": i,
                            "null": i,
                            undefined: i,
                            NaN: i,
                            Infinity: i,
                            "this": e("this"),
                            "class": e("class"),
                            "super": e("atom"),
                            "yield": r,
                            "export": e("export"),
                            "import": e("import"),
                            "extends": r,
                            await: r,
                            async: e("async")
                        };
                    if (Ae) {
                        var s = {
                                type: "variable",
                                style: "variable-3"
                            },
                            l = {
                                "interface": e("class"),
                                "implements": r,
                                namespace: r,
                                module: e("module"),
                                "enum": e("module"),
                                "public": e("modifier"),
                                "private": e("modifier"),
                                "protected": e("modifier"),
                                "abstract": e("modifier"),
                                as: o,
                                string: s,
                                number: s,
                                "boolean": s,
                                any: s
                            };
                        for (var u in l) a[u] = l[u]
                    }
                    return a
                }(),
                Ne = /[+\-*&%=<>!?|~^]/,
                De = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
                Ie = "([{}])",
                Oe = {
                    atom: !0,
                    number: !0,
                    variable: !0,
                    string: !0,
                    regexp: !0,
                    "this": !0,
                    "jsonld-keyword": !0
                },
                Pe = {
                    state: null,
                    column: null,
                    marked: null,
                    cc: null
                },
                Re = {
                    name: "this",
                    next: {
                        name: "arguments"
                    }
                };
            return x.lex = !0, {
                startState: function(e) {
                    var t = {
                        tokenize: a,
                        lastType: "sof",
                        cc: [],
                        lexical: new d((e || 0) - Ce, 0, "block", (!1)),
                        localVars: r.localVars,
                        context: r.localVars && {
                            vars: r.localVars
                        },
                        indented: e || 0
                    };
                    return r.globalVars && "object" == typeof r.globalVars && (t.globalVars = r.globalVars), t
                },
                token: function(e, t) {
                    if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), c(e, t)), t.tokenize != l && e.eatSpace()) return null;
                    var n = t.tokenize(e, t);
                    return "comment" == ke ? n : (t.lastType = "operator" != ke || "++" != _e && "--" != _e ? ke : "incdec", f(t, n, ke, _e, e))
                },
                indent: function(t, n) {
                    if (t.tokenize == l) return e.Pass;
                    if (t.tokenize != a) return 0;
                    var o = n && n.charAt(0),
                        i = t.lexical;
                    if (!/^\s*else\b/.test(n))
                        for (var s = t.cc.length - 1; s >= 0; --s) {
                            var u = t.cc[s];
                            if (u == x) i = i.prev;
                            else if (u != re) break
                        }
                    "stat" == i.type && "}" == o && (i = i.prev), Ee && ")" == i.type && "stat" == i.prev.type && (i = i.prev);
                    var c = i.type,
                        d = o == c;
                    return "vardef" == c ? i.indented + ("operator" == t.lastType || "," == t.lastType ? i.info + 1 : 0) : "form" == c && "{" == o ? i.indented : "form" == c ? i.indented + Ce : "stat" == c ? i.indented + (we(t, n) ? Ee || Ce : 0) : "switch" != i.info || d || 0 == r.doubleIndentSwitch ? i.align ? i.column + (d ? 0 : 1) : i.indented + (d ? 0 : Ce) : i.indented + (/^(?:case|default)\b/.test(n) ? Ce : 2 * Ce)
                },
                electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                blockCommentStart: Te ? null : "/*",
                blockCommentEnd: Te ? null : "*/",
                lineComment: Te ? null : "//",
                fold: "brace",
                closeBrackets: "()[]{}''\"\"``",
                helperType: Te ? "json" : "javascript",
                jsonldMode: Se,
                jsonMode: Te,
                expressionAllowed: t,
                skipExpression: function(e) {
                    var t = e.cc[e.cc.length - 1];
                    t != _ && t != C || e.cc.pop()
                }
            }
        }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", {
            name: "javascript",
            json: !0
        }), e.defineMIME("application/x-json", {
            name: "javascript",
            json: !0
        }), e.defineMIME("application/ld+json", {
            name: "javascript",
            jsonld: !0
        }), e.defineMIME("text/typescript", {
            name: "javascript",
            typescript: !0
        }), e.defineMIME("application/typescript", {
            name: "javascript",
            typescript: !0
        })
    })
}, function(e, t, n) {
    ! function(e) {
        e(n(219))
    }(function(e) {
        "use strict";

        function t(e) {
            for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = !0;
            return t
        }

        function n(e, t) {
            for (var n, r = !1; null != (n = e.next());) {
                if (r && "/" == n) {
                    t.tokenize = null;
                    break
                }
                r = "*" == n
            }
            return ["comment", "comment"]
        }
        e.defineMode("css", function(t, n) {
            function r(e, t) {
                return h = t, e
            }

            function o(e, t) {
                var n = e.next();
                if (v[n]) {
                    var o = v[n](e, t);
                    if (o !== !1) return o
                }
                return "@" == n ? (e.eatWhile(/[\w\\\-]/), r("def", e.current())) : "=" == n || ("~" == n || "|" == n) && e.eat("=") ? r(null, "compare") : '"' == n || "'" == n ? (t.tokenize = i(n), t.tokenize(e, t)) : "#" == n ? (e.eatWhile(/[\w\\\-]/), r("atom", "hash")) : "!" == n ? (e.match(/^\s*\w*/), r("keyword", "important")) : /\d/.test(n) || "." == n && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : "-" !== n ? /[,+>*\/]/.test(n) ? r(null, "select-op") : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? r("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(n) ? r(null, n) : "u" == n && e.match(/rl(-prefix)?\(/) || "d" == n && e.match("omain(") || "r" == n && e.match("egexp(") ? (e.backUp(1), t.tokenize = a, r("property", "word")) : /[\w\\\-]/.test(n) ? (e.eatWhile(/[\w\\\-]/), r("property", "word")) : r(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : e.match(/^-[\w\\\-]+/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? r("variable-2", "variable-definition") : r("variable-2", "variable")) : e.match(/^\w+-/) ? r("meta", "meta") : void 0
            }

            function i(e) {
                return function(t, n) {
                    for (var o, i = !1; null != (o = t.next());) {
                        if (o == e && !i) {
                            ")" == e && t.backUp(1);
                            break
                        }
                        i = !i && "\\" == o
                    }
                    return (o == e || !i && ")" != e) && (n.tokenize = null), r("string", "string")
                }
            }

            function a(e, t) {
                return e.next(), e.match(/\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = i(")"), r(null, "(")
            }

            function s(e, t, n) {
                this.type = e, this.indent = t, this.prev = n
            }

            function l(e, t, n, r) {
                return e.context = new s(n, t.indentation() + (r === !1 ? 0 : g), e.context), n
            }

            function u(e) {
                return e.context.prev && (e.context = e.context.prev), e.context.type
            }

            function c(e, t, n) {
                return L[n.context.type](e, t, n)
            }

            function d(e, t, n, r) {
                for (var o = r || 1; o > 0; o--) n.context = n.context.prev;
                return c(e, t, n)
            }

            function p(e) {
                var t = e.current().toLowerCase();
                m = T.hasOwnProperty(t) ? "atom" : S.hasOwnProperty(t) ? "keyword" : "variable"
            }
            var f = n.inline;
            n.propertyKeywords || (n = e.resolveMode("text/css"));
            var h, m, g = t.indentUnit,
                v = n.tokenHooks,
                y = n.documentTypes || {},
                b = n.mediaTypes || {},
                x = n.mediaFeatures || {},
                w = n.mediaValueKeywords || {},
                k = n.propertyKeywords || {},
                _ = n.nonStandardPropertyKeywords || {},
                C = n.fontProperties || {},
                E = n.counterDescriptors || {},
                S = n.colorKeywords || {},
                T = n.valueKeywords || {},
                A = n.allowNested,
                M = n.supportsAtComponent === !0,
                L = {};
            return L.top = function(e, t, n) {
                if ("{" == e) return l(n, t, "block");
                if ("}" == e && n.context.prev) return u(n);
                if (M && /@component/.test(e)) return l(n, t, "atComponentBlock");
                if (/^@(-moz-)?document$/.test(e)) return l(n, t, "documentTypes");
                if (/^@(media|supports|(-moz-)?document|import)$/.test(e)) return l(n, t, "atBlock");
                if (/^@(font-face|counter-style)/.test(e)) return n.stateArg = e, "restricted_atBlock_before";
                if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) return "keyframes";
                if (e && "@" == e.charAt(0)) return l(n, t, "at");
                if ("hash" == e) m = "builtin";
                else if ("word" == e) m = "tag";
                else {
                    if ("variable-definition" == e) return "maybeprop";
                    if ("interpolation" == e) return l(n, t, "interpolation");
                    if (":" == e) return "pseudo";
                    if (A && "(" == e) return l(n, t, "parens")
                }
                return n.context.type
            }, L.block = function(e, t, n) {
                if ("word" == e) {
                    var r = t.current().toLowerCase();
                    return k.hasOwnProperty(r) ? (m = "property", "maybeprop") : _.hasOwnProperty(r) ? (m = "string-2", "maybeprop") : A ? (m = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag", "block") : (m += " error", "maybeprop")
                }
                return "meta" == e ? "block" : A || "hash" != e && "qualifier" != e ? L.top(e, t, n) : (m = "error", "block")
            }, L.maybeprop = function(e, t, n) {
                return ":" == e ? l(n, t, "prop") : c(e, t, n)
            }, L.prop = function(e, t, n) {
                if (";" == e) return u(n);
                if ("{" == e && A) return l(n, t, "propBlock");
                if ("}" == e || "{" == e) return d(e, t, n);
                if ("(" == e) return l(n, t, "parens");
                if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
                    if ("word" == e) p(t);
                    else if ("interpolation" == e) return l(n, t, "interpolation")
                } else m += " error";
                return "prop"
            }, L.propBlock = function(e, t, n) {
                return "}" == e ? u(n) : "word" == e ? (m = "property", "maybeprop") : n.context.type
            }, L.parens = function(e, t, n) {
                return "{" == e || "}" == e ? d(e, t, n) : ")" == e ? u(n) : "(" == e ? l(n, t, "parens") : "interpolation" == e ? l(n, t, "interpolation") : ("word" == e && p(t), "parens")
            }, L.pseudo = function(e, t, n) {
                return "word" == e ? (m = "variable-3", n.context.type) : c(e, t, n)
            }, L.documentTypes = function(e, t, n) {
                return "word" == e && y.hasOwnProperty(t.current()) ? (m = "tag", n.context.type) : L.atBlock(e, t, n)
            }, L.atBlock = function(e, t, n) {
                if ("(" == e) return l(n, t, "atBlock_parens");
                if ("}" == e || ";" == e) return d(e, t, n);
                if ("{" == e) return u(n) && l(n, t, A ? "block" : "top");
                if ("interpolation" == e) return l(n, t, "interpolation");
                if ("word" == e) {
                    var r = t.current().toLowerCase();
                    m = "only" == r || "not" == r || "and" == r || "or" == r ? "keyword" : b.hasOwnProperty(r) ? "attribute" : x.hasOwnProperty(r) ? "property" : w.hasOwnProperty(r) ? "keyword" : k.hasOwnProperty(r) ? "property" : _.hasOwnProperty(r) ? "string-2" : T.hasOwnProperty(r) ? "atom" : S.hasOwnProperty(r) ? "keyword" : "error"
                }
                return n.context.type
            }, L.atComponentBlock = function(e, t, n) {
                return "}" == e ? d(e, t, n) : "{" == e ? u(n) && l(n, t, A ? "block" : "top", !1) : ("word" == e && (m = "error"), n.context.type)
            }, L.atBlock_parens = function(e, t, n) {
                return ")" == e ? u(n) : "{" == e || "}" == e ? d(e, t, n, 2) : L.atBlock(e, t, n)
            }, L.restricted_atBlock_before = function(e, t, n) {
                return "{" == e ? l(n, t, "restricted_atBlock") : "word" == e && "@counter-style" == n.stateArg ? (m = "variable", "restricted_atBlock_before") : c(e, t, n)
            }, L.restricted_atBlock = function(e, t, n) {
                return "}" == e ? (n.stateArg = null, u(n)) : "word" == e ? (m = "@font-face" == n.stateArg && !C.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == n.stateArg && !E.hasOwnProperty(t.current().toLowerCase()) ? "error" : "property", "maybeprop") : "restricted_atBlock"
            }, L.keyframes = function(e, t, n) {
                return "word" == e ? (m = "variable", "keyframes") : "{" == e ? l(n, t, "top") : c(e, t, n)
            }, L.at = function(e, t, n) {
                return ";" == e ? u(n) : "{" == e || "}" == e ? d(e, t, n) : ("word" == e ? m = "tag" : "hash" == e && (m = "builtin"), "at")
            }, L.interpolation = function(e, t, n) {
                return "}" == e ? u(n) : "{" == e || ";" == e ? d(e, t, n) : ("word" == e ? m = "variable" : "variable" != e && "(" != e && ")" != e && (m = "error"), "interpolation")
            }, {
                startState: function(e) {
                    return {
                        tokenize: null,
                        state: f ? "block" : "top",
                        stateArg: null,
                        context: new s(f ? "block" : "top", e || 0, null)
                    }
                },
                token: function(e, t) {
                    if (!t.tokenize && e.eatSpace()) return null;
                    var n = (t.tokenize || o)(e, t);
                    return n && "object" == typeof n && (h = n[1], n = n[0]), m = n, t.state = L[t.state](h, e, t), m
                },
                indent: function(e, t) {
                    var n = e.context,
                        r = t && t.charAt(0),
                        o = n.indent;
                    return "prop" != n.type || "}" != r && ")" != r || (n = n.prev), n.prev && ("}" != r || "block" != n.type && "top" != n.type && "interpolation" != n.type && "restricted_atBlock" != n.type ? (")" != r || "parens" != n.type && "atBlock_parens" != n.type) && ("{" != r || "at" != n.type && "atBlock" != n.type) || (o = Math.max(0, n.indent - g), n = n.prev) : (n = n.prev, o = n.indent)), o
                },
                electricChars: "}",
                blockCommentStart: "/*",
                blockCommentEnd: "*/",
                fold: "brace"
            }
        });
        var r = ["domain", "regexp", "url", "url-prefix"],
            o = t(r),
            i = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
            a = t(i),
            s = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover"],
            l = t(s),
            u = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive"],
            c = t(u),
            d = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"],
            p = t(d),
            f = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"],
            h = t(f),
            m = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"],
            g = t(m),
            v = ["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"],
            y = t(v),
            b = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
            x = t(b),
            w = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"],
            k = t(w),
            _ = r.concat(i).concat(s).concat(u).concat(d).concat(f).concat(b).concat(w);
        e.registerHelper("hintWords", "css", _), e.defineMIME("text/css", {
            documentTypes: o,
            mediaTypes: a,
            mediaFeatures: l,
            mediaValueKeywords: c,
            propertyKeywords: p,
            nonStandardPropertyKeywords: h,
            fontProperties: g,
            counterDescriptors: y,
            colorKeywords: x,
            valueKeywords: k,
            tokenHooks: {
                "/": function(e, t) {
                    return !!e.eat("*") && (t.tokenize = n, n(e, t))
                }
            },
            name: "css"
        }), e.defineMIME("text/x-scss", {
            mediaTypes: a,
            mediaFeatures: l,
            mediaValueKeywords: c,
            propertyKeywords: p,
            nonStandardPropertyKeywords: h,
            colorKeywords: x,
            valueKeywords: k,
            fontProperties: g,
            allowNested: !0,
            tokenHooks: {
                "/": function(e, t) {
                    return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"]
                },
                ":": function(e) {
                    return !!e.match(/\s*\{/) && [null, "{"]
                },
                $: function(e) {
                    return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
                },
                "#": function(e) {
                    return !!e.eat("{") && [null, "interpolation"]
                }
            },
            name: "css",
            helperType: "scss"
        }), e.defineMIME("text/x-less", {
            mediaTypes: a,
            mediaFeatures: l,
            mediaValueKeywords: c,
            propertyKeywords: p,
            nonStandardPropertyKeywords: h,
            colorKeywords: x,
            valueKeywords: k,
            fontProperties: g,
            allowNested: !0,
            tokenHooks: {
                "/": function(e, t) {
                    return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"]
                },
                "@": function(e) {
                    return e.eat("{") ? [null, "interpolation"] : !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) && (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
                },
                "&": function() {
                    return ["atom", "atom"]
                }
            },
            name: "css",
            helperType: "less"
        }), e.defineMIME("text/x-gss", {
            documentTypes: o,
            mediaTypes: a,
            mediaFeatures: l,
            propertyKeywords: p,
            nonStandardPropertyKeywords: h,
            fontProperties: g,
            counterDescriptors: y,
            colorKeywords: x,
            valueKeywords: k,
            supportsAtComponent: !0,
            tokenHooks: {
                "/": function(e, t) {
                    return !!e.eat("*") && (t.tokenize = n, n(e, t))
                }
            },
            name: "css",
            helperType: "gss"
        })
    })
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "Images",
            chapter: "Writing Code",
            layout_data: {
                description: "",
                examples: [{
                    title: "An Accessible Inline Image",
                    description: "This is an image with an alt text. Turn on VoiceOver if you are on a Mac, tab\nto the Editor Output section, and use <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Right Arrow</kbd>\nto navigate to these images. VoiceOver will announce the alt text. For the second image below, VoiceOver\nwill not announce anything meaningful since there is no alt text.\n",
                    code: '<img\n  alt="Teach Access Bridge logo"\n  src="' + n(233) + '"\n/>\n'
                }, {
                    title: "Inaccessible Inline Image exercise",
                    description: 'This is an image without alt text. Turn on VoiceOver and listen to how it is read. Add an `alt`\nattribute "Facebook logo" to this image to make it accessible and test it again with VoiceOver.\n',
                    code: '<img\n  src="' + n(233) + '"\n\n/>\n',
                    assertion: 'var img = dom.querySelector(\'img\');\nassert(\n  img.hasAttribute("alt"),\n  "It doesn\'t look like you added an alt to your image."\n);\n'
                }]
            }
        },
        content: 'Screen readers interact with text on the screen. So, to convey the meaning of \nan image to screen reader users,\nwe put an accessible text label in the HTML. If an image is decorative, we can hide it from screen\nreader users by giving it an empty label (`alt=""`). After the completing the \nexercise below, you can learn a lot more about writing good alt text for images \nby checking out [WebAIM\'s resource on the \ntopic](http://webaim.org/techniques/alttext/).\n',
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    e.exports = n.p + "inline-image-59KBw1H.png"
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "Keyboard Navigation",
            chapter: "Writing Code",
            style: "img {\n  width: 100px;\n  height: 100px;\n}\n.customButton {\n  border: 1px solid black;\n  width: 65px;\n  background-color: lightgray;\n  text-align: center;\n}\n",
            layout_data: {
                examples: [{
                    title: "Semantic Button",
                    description: "The button below uses a semantic button tag and is correctly announced by\nscreen readers. If you are on a Mac, turn on VoiceOver and tab to the\nbutton. You will hear the name of the element and the element type announced\nby VoiceOver.\n",
                    code: "<button onclick=\"alert('Take a HIKE!')\">\n  Submit\n</button>\n"
                }, {
                    title: "Unsemantic Button exercise",
                    description: "The button below is constructed using an unsemantic div. The easiest way to\nmake this semantic is to use a real button or input tag. Here is another way. In the\nexample below, add\n1. `role='button'`\n2. `tabindex='0'`\n\nVerify with VoiceOver that you can tab to the button and hear the button name and the fact\nthat it is a button element. Note that you would need to add an onkeypress or onkeydown handler to the button so you\ncan tab to the button and press enter to activate it using just the keyboard.\n",
                    code: '<div class="customButton">\n  Submit\n</div>\n',
                    assertion: "var btn = dom.querySelector('.customButton');\nassert(\n  btn.hasAttribute('tabindex') && btn.getAttribute('tabindex') === \"0\",\n  \"It doesn't look like you added a tabindex to your custom button.\"\n);\n\nassert(\n  btn.getAttribute('role') === \"button\",\n  \"It doesn't look like you added a role of button to your custom button.\"\n);\n"
                }]
            }
        },
        content: "Make all interactive elements work with  a keyboard. For example, make sure a \nbutton that you activate\nwith a click is also in the keyboard tab sequence and that pressing enter or space\nactivates it. Set the `tabindex` attribute to `0` to include an element in the \nbrowser's keyboard tab sequence.  If you want an element out of sequence, set \nits `tabindex` to `-1` and use JavaScript to control its focus and tab \nsequence, and related keyboard events. We do not recommend using `tabindex` \nvalues greater than `0` even though browsers support them. Note that HTML links \nand input elements have an implied `tabindex` of `0`.\n",
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "Labeling Form Controls and Interactive Elements",
            toc: "Labels",
            chapter: "Writing Code",
            style: ".searchBtn {\n  background-image: url('" + n(236) + "');\n  width: 30px;\n  height: 30px;\n  background-size: 100% 100%;\n}\n\n#composer {\n  border: 1px solid #1466F2;\n}\n\n#description {\n  font-size: 12px;\n}\n\n#dateFormat {\n  font-size: 13px;\n}\n",
            layout_data: {
                examples: [{
                    title: "Self-labeled",
                    description: "Some elements, like links and buttons with display text, label themselves. In this case, screen reader\nusers and all other users can perceive the label.\n",
                    code: "<div>\n  <button>Submit</button>\n</div>\n"
                }, {
                    title: "Using <label>",
                    description: "If we put text on the screen near an input such as a text field, the screen reader cannot\nreliably pick up on that visual association. It needs to be told which nearby text is the associated label.\nOne way to do this is with the `label` element.\n",
                    code: '<div>\n    <label for="lastName">\n      Last name:\n    </label>\n    <input id="lastName" type="text">\n</div>\n'
                }, {
                    title: "Using 'aria-labelledby'",
                    description: "The HTML label works only for HTML inputs. If we make a control out of other elements by using ARIA,\nwe can instead use `aria-labelledby`.\n",
                    code: '<div>\n  <div id="status">What\'s on your mind?</div>\n  <div\n    aria-labelledby="status"\n    contenteditable\n    id="composer"\n    role="textbox">\n  </div>\n</div>\n'
                }, {
                    title: "Using 'aria-label'",
                    description: "In rare cases, the purpose of the input is visually obvious in context, but it's not obvious to someone\nusing a screen reader. We can provide contextual detail with `aria-label`.\n",
                    code: '<fieldset>\n  <legend>Telephone</legend>\n  <input id="one" type="number" aria-label="Area Code">\n  <input type="number" aria-label="Exchange Code">\n  <input type="number" aria-label="Line Number">\n</fieldset>\n'
                }, {
                    title: "Using 'aria-describedby'",
                    description: "Occasionally, a label by itself is insufficient information. If help text is present in the UI,\nwe can identify it as an accessible description by using `aria-describedby`.\n",
                    code: '<div>\n  <label for="hikeDate">\n    HIKE completion date\n  </label>\n  <input\n    id="hikeDate"\n    aria-describedby="dateFormat"\n    type="text" />\n  <p id="dateFormat">Note: This date will be recorded.</p>\n</div>\n'
                }, {
                    title: "Inaccessible Button exercise",
                    description: "Add an `aria-label` to the button below and label it 'search' to\nmake it accessible.\n",
                    code: '<button\n  class="searchBtn">\n</button>\n',
                    assertion: "var btn = dom.querySelector('button');\nassert(\n  btn.hasAttribute('aria-label'),\n  \"It doesn't look like you added an aria-label to the button\"\n);\n"
                }, {
                    title: "Inaccessible Interactive Elements exercise",
                    description: "Add an `aria-labelledby` to the input field below and point it to the `id` of the prompt span.\nAlso, add an `aria-describedby` to the input field and point it to the description below to\nmake it accessible.\n",
                    code: '<input type="checkbox" />\n<span id="prompt">\n  Save Password\n</span>\n<p id="description">\n  Your credentials will not be stored.\n</p>\n',
                    assertion: "var btn = dom.querySelector('input');\nassert(\n  btn.hasAttribute('aria-labelledby') &&\n    btn.getAttribute('aria-labelledby') === 'prompt',\n  \"It doesn't look like you added an aria-labelledby to the input field\"\n);\nassert(\n  btn.hasAttribute('aria-describedby') &&\n    btn.getAttribute('aria-describedby') === 'description',\n  \"It doesn't look like you added an aria-describedby to the input field\"\n);\n"
                }]
            }
        },
        content: "Accessible labels are necessary to make several other types of elements \nunderstandable,\nsuch as inputs, widgets, and ARIA landmark regions.\nAccessible labels that create a delightful experience are:\n\n1. Concise -- 1 to 3 simple words. Only occasionally as many as 5 words.\n2. Meaningful -- accurately convey the purpose of the element.\n\nThere are many ways to label an interactive element such as a button or an input field, which you will see below. You can check the results of adding the various label types by testing in your screen reader too!\n\n",
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    e.exports = n.p + "search_icon-1GWmLaL.png"
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "Lists",
            chapter: "Writing Code",
            style: "img {\n  width: 100px;\n  height: 100px;\n}\n",
            layout_data: {
                examples: [{
                    title: "Semantic Lists Using HTML",
                    description: "HTML provides tags that express lists. Most likely you are already familiar with the\n`ul` (unordered list) and `ol` (ordered list) tags.\n\nIn the example below, the list is correctly announced by screen readers as a list with three items.\n\n1. Turn on VoiceOver with <kbd>Cmd</kbd> + <kbd>F5</kbd>.\n\n2. Press <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Cmd</kbd> + <kbd>h</kbd> repeatedly until you have jumped to the Editor Output heading.\n\n3. Press <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Right Arrow</kbd>.\n\nVoiceOver will announce 'List 3 items'.\n",
                    code: "<ul>\n  <li>Eggs</li>\n  <li>Milk</li>\n  <li>Bread</li>\n</ul>\n"
                }, {
                    title: "Semantic List Using ARIA Roles",
                    description: "The list below uses ARIA roles to express the semantics of a list from a generic div structure.\nThis approach to expressing list structure can be used if it is not possible to use the native\nHTML list tags.\n\nNotice that the default list styling is not applied. That is because the browser's default\nstylesheet targets ```ul``` and ```ol``` tags.\n\nIn the example below, the list is correctly announced by screen readers as a list with three items.\n",
                    code: '<div role="list">\n  <div role="listitem">Sea</div>\n  <div role="listitem">Surf</div>\n  <div role="listitem">Sun</div>\n</div>\n'
                }, {
                    title: "Unsemantic List exercise",
                    description: "Update the example below so that the items are expressed as a list. The easiest way to\nmake this semantic is to use a list tag. If that is not\npossible, wrap the elements in a container and give\nit a role of ```list```. The individual items will need to be identified with a role of ```listitem```.\n",
                    code: "<div>\n  <span>A house of straw</span>\n  <span>A house of sticks</span>\n  <span>A house of bricks</span>\n</div>\n",
                    assertion: "assert(\n  dom.querySelector('[role=\"list\"]') || dom.querySelector('ul') || dom.querySelector('ol'),\n  \"You should create a wrapping element for the list. Either a 'ul', 'li' OR a 'div' with the role 'list'.\"\n);\nassert(\n  dom.querySelectorAll('[role=\"listitem\"]').length ==3 || dom.querySelectorAll('li').length == 3,\n  \"Wrap the items in an 'li' element or in a 'span' OR 'div' with the role 'listitem'.\"\n);\n"
                }]
            }
        },
        content: "Semantic lists help screen readers understand the type of the element and the \nnumber of items in the element, and provide\neasier navigation via list commands specific to screen readers.\n\n",
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "Dialogs",
            chapter: "Writing Code",
            style: "#slide {\n  position: initial;\n}\n#overlay, #overlay2 {\n  display: none;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100vw;\n  height: 100vh;\n  text-align:center;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, .4);\n  align-items: center;\n  justify-content: center;\n}\n\n#container, #container2 {\n  width:400px;\n  background-color: #fff;\n  border:1px solid #000;\n  padding:15px;\n}\n\nlabel {\n  float: left;\n  width: 100px;\n  clear: both;\n  text-align: right;\n  margin: 0 10px;\n}\n\n#content, #content2 {\n  margin: 20px 0;\n}\n\n#closeButton:focus {\n  outline: 2px solid #4A97F9;\n  outline-offset: 1px;\n}\n\n#closeImg {\n  float: right;\n  margin-top: 9px;\n}\n\n#sourceLink, #sourceLink2 {\n    margin: 10px;\n}\n\n#content2 > div {\n  margin: 10px 0;\n}\n",
            layout_data: {
                examples: [{
                    title: "Semantic Dialog",
                    description: "Start VoiceOver if you are on your Mac and press enter on the Show Dialog button. You will notice that:\n1. VoiceOver announces that a dialog is opened and the name of the dialog because\nwe have a `role` of 'dialog' with a label associated using `aria-labelledby`.\n2. When the dialog opens, focus lands in the first focusable element in\nthe dialog.\n3. Tabbing keeps focus within the dialog. Note that you have to write code to restrict the tab sequence to the dialog.\n4. Closing the dialog places focus back on the source button.\n5. Pressing the <kbd>esc</kbd> key closes the dialog and places the focus back on the source button. Note that for widgets like\ntypeaheads, pressing <kbd>esc</kbd> should close the typeahead and not the dialog.\n\nNote that if you have textual content in the dialog besides labels, you should associate it\nwith an `aria-describedby` to the right input field so it gets announced when you tab to the input field.\n",
                    code: '<button onclick=\'showHideDialog(event)\' id="sourceLink">\n    Show Dialog\n</button>\n<div id="overlay" onkeydown=\'closeDialog(event)\'>\n  <div\n    id="container"\n    role=\'dialog\'\n    aria-labelledby=\'dialog-title\'>\n      <h2 id=\'dialog-title\'>Shipping Address</h2>\n      <div id="content">\n        <div>\n          <label for="inputfield">Name </label>\n          <input\n            type="text"\n            name="Name field"\n            id="inputfield" />\n        </div>\n      </div>\n      <div>\n        <button\n          onclick=\'showHideDialog(event)\'\n          id="submitButton">\n            Submit\n        </button>\n        <button\n          onclick=\'showHideDialog(event)\'\n          id="closeButton">\n            Close\n        </button>\n      </div>\n  </div>\n</div>\n'
                }, {
                    title: "Unsemantic Dialog exercise",
                    description: "The dialog below is unsemantic:\n\n1. The fact that a dialog opened up is not announced to VoiceOver.\n2. The heading that labels the dialog is not announced when the dialog is opened.\n\nTo fix these issues:\n1. Change the `<b>` to a semantic `h2` tag.\n2. To the div with `id` container2, add a `role` of 'dialog'.\n3. To the div with `id` container2, add `aria-labelledby`='dialog-title'.\n\nVerify with VoiceOver.\n",
                    code: '<button\n  onclick=\'showHideDialog2(event)\'\n  id="sourceLink2">\n    Show Dialog\n</button>\n<div id="overlay2" onkeydown=\'closeDialog2(event)\'>\n  <div id="container2">\n    <b id=\'dialog-title\'>Shipping Address</b>\n    <div>\n      <div id="content2">\n        <div>\n          <label for="inputfield2">Name </label>\n          <input\n            type="text"\n            name="Name field"\n            id="inputfield2" />\n        </div>\n        <div>\n          <button\n            onclick=\'showHideDialog2(event)\'\n            id=\'submitButton2\'>\n              Submit\n          </button>\n          <button\n            onclick=\'showHideDialog2(event)\'\n            id=\'closeButton2\'>\n              Close\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n',
                    assertion: "var dialog = dom.querySelector('#container2');\nvar title = dom.querySelector('#dialog-title');\nvar heading = dom.querySelector('h2');\nassert(\n  dialog.hasAttribute('role') && dialog.getAttribute('role')=== \"dialog\",\n  \"It doesn't look like you added a role of 'dialog'.\"\n);\nassert(\n  dialog.hasAttribute('aria-labelledby') && dialog.getAttribute('aria-labelledby')=== \"dialog-title\",\n  \"It doesn't look like you associated the heading to the dialog with an aria-labelledby.\"\n);\nassert(\n  heading && (heading.getAttribute('id') === 'dialog-title'),\n  \"It doesn't look like you made the dialog heading semantic.\"\n);\n"
                }]
            }
        },
        content: "Dialogs are a little bit trickier to make accessible, but with a few key \nprinciples, they can be made keyboard navigable and usable with screen readers.\n",
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "Tables",
            chapter: "Writing Code",
            style: "\n.editorWithPreview > .editor,\n.editorWithPreview > .preview {\n  width: 50%;\n  max-width: 50%;\n}\n\ntable, th, td {\n    border: 1px solid black;\n    text-align: center;\n    font-size: 1em;\n}\n\nth {\n  background-color: #ddd;\n}\n\n.table {\n  display: table;\n}\n\n.tableRow {\n  display: table-row;\n}\n\n.tableHeading {\n  display: table-header-group;\n  background-color: #ddd;\n}\n\n.tableCell, .tableHead {\n  display: table-cell;\n  padding: 3px 10px;\n  border: 1px solid #999999;\n}\n\n.tableHeading {\n  display: table-header-group;\n  background-color: #ddd;\n  font-weight: bold;\n}\n\n.tableBody {\n  display: table-row-group;\n}\n",
            layout_data: {
                examples: [{
                    title: "Semantic Table",
                    description: "The following table uses semantic table markup. HTML provides many elements and attributes to create fully\naccessible tables. Note: ARIA 1.0 does not include HTML table equivalence; that is coming in ARIA 1.1. So\nit is best to stick to native HTML unless you are building an interactive grid that includes two-dimensional\narrow key navigation of the table content. To test the table below with VoiceOver:\n\n1. Press <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Cmd</kbd> + <kbd>h</kbd> repeatedly until you reach the Editor Output region.\n2. Now press <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Right Arrow</kbd> repeatedly to navigate the table cells.\n\nAt this time, VoiceOver does not read the column headers in Chrome. However, VoiceOver does read them in Safari. Windows screen readers typically read column and row headers as well.\n",
                    code: "<table>\n  <tr>\n    <td></td>\n    <th>Week1</th>\n    <th>Week2</th>\n  </tr>\n  <tr>\n    <th>Clicks</th>\n    <td>100</td>\n    <td>90</td>\n  </tr>\n  <tr>\n    <th>Likes</th>\n    <td>60</td>\n    <td>55</td>\n  </tr>\n</table>\n"
                }, {
                    title: "Unsemantic Table exercise",
                    description: "If the information is tabular, using CSS to create the appearance of a table makes the information\nalmost impossible for a screen reader user to understand and use. Convert the following tabular data\ninto an accessible HTML table.\n",
                    code: '<div class="table">\n  <div class="tableHeading">\n    <div class="tableHead">\n      Month\n    </div>\n    <div class="tableHead">\n      Mood\n    </div>\n  </div>\n  <div class="tableBody">\n    <div class="tableRow">\n      <div class="tableCell">\n        January\n      </div>\n      <div class="tableCell">\n        happy\n      </div>\n    </div>\n  </div>\n</div>\n',
                    assertion: "assert(\n  dom.querySelector('table'),\n  \"Use a semantic table element.\"\n);\nassert(\n  dom.querySelectorAll('tr').length == 2,\n  \"Are you using semantic tr tags?\"\n);\nassert(\n  dom.querySelectorAll('th').length == 2,\n  \"Are you using semantic th tags?\"\n);\nassert(\n  dom.querySelectorAll('td').length == 2,\n  \"Are you using semantic td tags?\"\n);\n"
                }]
            }
        },
        content: "Tables help screen readers process information presented in a tabular format.\nWhen information is presented using table markup, screen reader users can\nread down columns and across rows, and even hear column and row headings as they do so.\n\n",
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "Menus",
            chapter: "Writing Code",
            style: 'img {\n  width: 100px;\n  height: 100px;\n}\n\n.popupMenuWidget {\n  padding: 1em;\n  position: relative;\n}\n\n.popupMenuWidget [role="button"] {\n  border: 1px solid black;\n  border-radius: 3px;\n  display: inline-block;\n  padding: 1px 3px;\n  position: relative;\n  z-index: 2;\n}\n\n.popupMenuWidget [role="button"]:hover,\n.popupMenuWidget [role="button"]:focus {\n  text-decoration: none;\n}\n\n.popupMenuWidget [role="menu"] {\n  border: 1px solid black;\n  display: none;\n  position: relative;\n  top: -1px;\n  z-index: 1;\n  list-style: none;\n  margin: 0;\n}\n\n.popupMenuWidget [role="menu"]  a {\n  display: block;\n  padding: 0px 5px;\n}\n\n.popupMenuWidget [role="menuitem"]:focus {\n  background-color: #428bca;\n  color: white;\n}\n',
            layout_data: {
                examples: [{
                    title: "Accessible Menu",
                    description: "The example below shows how to apply ARIA attributes to an unordered list\nelement to give it the semantics screen readers need to announce it as a menu.\nIt also demonstrates the JavaScript functionality you need to create the\nappropriate keyboard interaction.\n\n1. You can move focus to the button by pressing tab.\n2. Pressing enter with focus on the button opens the menu and moves focus to the first menu item.\n3. Up and down arrows navigate the menu.\n4. Escape closes the menu, returning focus to the button.\n5. If actions were implemented, pressing enter on a menu item would perform the action.\n",
                    code: '<!-- `menuExample` is a global object\n  that contains the behavior\n  methods for the menu interaction. -->\n<div\n  id="popupMenuExample"\n  class="popupMenuWidget"\n  onkeydown="(menuExample.onKeydown.bind(menuExample))(event)"\n  onclick="(menuExample.onClickWidget.bind(menuExample))(event)">\n  <a\n    href="#"\n    role="button"\n    tabindex="0"\n    aria-haspopup="true"\n    aria-owns="actionsMenu"\n    onclick="(menuExample.onClick.bind(menuExample))(event)">Actions &#9660;</a>\n  <ul\n    id="actionsMenu"\n    role="menu"\n    data-open="false"\n    onmouseover="(menuExample.onMouseoverMenuItem.bind(menuExample))(event)"\n    onclick="(menuExample.onClickMenuItem.bind(menuExample))(event)"\n    style="display: none;">\n    <li role="presentation">\n      <a\n        id="action_1"\n        href="#"\n        role="menuitem"\n        tabindex="-1"\n        data-active="false">Create</a>\n    </li>\n    <li role=\'presentation\'>\n      <a\n        id="action_2"\n        href="#"\n        role="menuitem"\n        tabindex="-1"\n        data-active="false">Edit</a>\n    </li>\n    <li role=\'presentation\'>\n      <a\n        id="action_3"\n        href="#"\n        role="menuitem"\n        tabindex="-1"\n        data-active="false">Delete</a>\n    </li>\n  </ul>\n</div>\n'
                }, {
                    title: "Inaccessible Menu exercise",
                    description: 'Update the example below to include the necessary markup for making\nthis menu accessible. You should address the following issues.\n\n1. The `a` tag with the ID `menuTrigger` has an associated popup. Therefore, it should be marked up with `aria-haspopup` and `aria-owns` to make this relationship explicit.\n2. The `a` tag with the ID `menuTrigger` should be marked up as a button with the role `button`.\n3. The `a` tag with the ID `menuTrigger` should be tabbable. Add an explicit `tabindex="0"` to it.\n4. The `ul` tag with the ID \'actionsMenu\' should be marked up as a menu with the role `menu`.\n5. The `a` tags inside the div with the ID `actionsMenu` are menu items. Mark them up with the role `menuitem`.\n6. The `a` tags inside the div with the ID `actionsMenu` should not be tabbable. Add an explicit `tabindex="-1"` to each of them.\n',
                    code: '\n<!-- `menuExample` is a global object\n  that contains the behavior\n  methods for the menu interaction. -->\n<div\n  id="popupMenuExampleWithAssertions"\n  class="popupMenuWidget"\n  onclick="(menuExample.onClickWidget.bind(menuExample))(event)"\n  onkeydown="(menuExample.onKeydown.bind(menuExample))(event)">\n  <a\n    id="menuTrigger"\n    onclick="(menuExample.onClick.bind(menuExample))(event)">Actions &#9660;</a>\n  <ul\n    id="actionsMenu"\n    data-open="false"\n    onmouseover="(menuExample.onMouseoverMenuItem.bind(menuExample))(event)"\n    onclick="(menuExample.onClickMenuItem.bind(menuExample))(event)"\n    style="display: none;">\n    <li role=\'presentation\'>\n      <a\n        id="action_1"\n        href="#"\n        data-active="false">Create</a>\n    </li>\n    <li role=\'presentation\'>\n      <a\n        id="action_2"\n        href="#"\n        data-active="false">Edit</a>\n    </li>\n    <li role=\'presentation\'>\n      <a\n        id="action_3"\n        href="#"\n        data-active="false">Delete</a>\n    </li>\n  </ul>\n</div>\n',
                    assertion: "var menuWidget = dom.querySelector('#popupMenuExampleWithAssertions');\n\n// aria-haspopup\nassert(\n  menuWidget.querySelector('#menuTrigger').getAttribute('aria-haspopup') === 'true',\n  'Add the attribute `aria-haspopup=\"true\"` to the element with the ID `menuTrigger`'\n);\n\n// aria-owns\nassert(\n  menuWidget.querySelector('#menuTrigger').getAttribute('aria-owns') === 'actionsMenu',\n  'Add the attribute `aria-owns=\"actionsMenu\"` to the element with the ID `menuTrigger`'\n);\n// button role\nassert(\n  menuWidget.querySelector('#menuTrigger').getAttribute('role') === 'button',\n  'Add the attribute `role=\"button\"` to the element with the ID `menuTrigger`'\n);\n// button tab index\nassert(\n  menuWidget.querySelector('#menuTrigger').getAttribute('tabIndex') === '0',\n  'Add the attribute `tabindex=\"0\"` to the element with the ID `menuTrigger`'\n);\n\n// menu role\nassert(\n  menuWidget.querySelector('#actionsMenu').getAttribute('role') === 'menu',\n  'Add the attribute `role=\"menu\"` to the element with the ID `actionsMenu`'\n);\n\n// menu link item roles\nassert(\n  [].slice.call(menuWidget.querySelector('#actionsMenu').querySelectorAll('a')).every(function (item) {\n    return item.getAttribute('role') === 'menuitem';\n  }),\n  'Add the attribute `role=\"menuitem\"` to each of the `a` tag elements in the element with the ID `actionsMenu`'\n);\n\n// menu link items tabindices\nassert(\n  [].slice.call(menuWidget.querySelector('#actionsMenu').querySelectorAll('a')).every(function (item) {\n    return item.getAttribute('tabIndex') === '-1';\n  }),\n  'Add the attribute `tabindex=\"-1\"` to each of the `a` tag elements in the element with the ID `actionsMenu`'\n);\n"
                }]
            }
        },
        content: "Menus, like dialogs, rely on a few key principles to render them usable with \nthe keyboard or screen reader.\n\n",
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "ARIA",
            chapter: "Writing Code",
            style: ".container {\n  font-size: 100%\n  width: 120px;\n  height: 100px;\n  border: thin solid gray;\n}\n\n#additionalLinks, #a11yLinkHide {\n  display: none;\n}\n",
            layout_data: {
                description: "",
                examples: [{
                    title: "ARIA",
                    description: "For this exercise, we will focus on one small part of WAI-ARIA called landmark regions. landmark regions help screen reader users do what others do when they glance at a page, i.e., see its different parts from a bird's-eye view. They also make it easy to move the screen reader's reading cursor to different locations on the page. Instructions for this exercise are in the comment block in the editor below.",
                    code: '\n<h3>ARIA Landmarks Exercise</h3>\n<!--\n     1. Turn on VoiceOver.\n     2. Press ctrl-opt-u.\n     3. Press right arrow until you hear "Landmarks".\n     4. Press down arrow to read the landmark list.\n     5. Press enter to move the VoiceOver reading cursor\n        to the beginning of one of the landmark regions.\n-->\nHow many landmarks did you find on the page?\n<input type="text" id="landmarks">\n',
                    assertion: "var link = document.getElementById('landmarks');\nassert(\n  link.value === '3' || link.value === 'three',\n  \"That is not the right number of landmarks on the page!\"\n);\n",
                    note: '\nThere are several types of landmark roles. Some of them are:\n\n- `<main>`,`<div role="main">` -- Equivalent to “directing the gaze” of \nthe screen reader user. Should contain only the primary content of the \npage.\n\n- `<nav>`,`<div role="navigation">` -- contains a set of links or \nelements for navigating the site\n\n- `<aside>`, `<div role="complementary">` - content that supplements \nthe main content\n\n- `<div role="search">` - search widget\n\n- `<header>`, `<div role="banner">` - the banner of the page\n\n- `<footer>`, `<div role="contentinfo">` - information about the page \nsuch as copyright, help, and information links that appear in the \nfooter\n\n[Other ARIA roles are documented in the WCAG \nspec.](http://www.w3.org/TR/wai-aria/roles#document_structure_roles)\n\n[More about ARIA states and \nproperties](http://www.w3.org/TR/wai-aria/states_and_properties#state_prop_def)\n'
                }]
            }
        },
        content: "ARIA or [Accessible Rich Internet\nApplications](http://www.w3.org/WAI/intro/aria.php) provides a framework of \nroles, properties, and guidelines to help\ndevelop accessible user interactions.\n\n",
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r, e.exports = {
        options: {
            title: "Checklist",
            chapter: "Writing Code"
        },
        content: "We've covered a bunch of ground related to accessible software development. One of the most important steps you can take is accounting for accessibility throughout the development process (not just at the end!). To aid in that process, use the following checklist as you develop your website or application:\n\n- Do all images have meaningful alternative text?\n- Is every focusable element operable using the keyboard alone?\n- Is there a consistent visible focus indicator when navigating using the keyboard?\n- Have all controls, frames, and page titles been labeled meaningfully and uniquely?\n- If custom controls/components have been implemented, have these been tested to assure that assistive technology recognizes name, role, state, and value (where applicable)?\n- Have custom controls/components been verified to work as expected using assistive technology, such as a screen reader?\n- Are error messages interpretable by assistive technology?\n- Do you have sufficient foreground and background color contrast?\n- Have captions been included with any audio or audio/visual media?\n\nThere are also a number of free tools available for assessing the accessibility:\n\n- WAVE by WebAIM for general website accessibility: <http://wave.webaim.org/>\n- Juicy Studio's Readability Test: \n<http://juicystudio.com/services/readability.php>\n- Vischeck's Color Blindness Checker: <http://www.vischeck.com/>\n",
        pathHash: "98c85cba9fc00ffd3ebfd95b418ce09e",
        contentConverter: r
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r, e.exports = {
        options: {
            title: "Introduction",
            chapter: "Design Principles"
        },
        content: "\nIn this section, you'll learn about how color, contrast, text size and many other aspects of visual design affect how people with different abilities interact with your product. In order to ensure that everyone can use your application, you'll want to keep these basic accessibility principles in mind. This tutorial won't cover everything in the world of accessible design, but it will give you a few tips that you can immediately apply to everything you build moving forward. Happy designing!\n",
        pathHash: "18ed4ab1e9e6d6b82ff7713113afffb6",
        contentConverter: r
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "Color Contrast",
            chapter: "Design Principles",
            style: ".editorWithPreview > .editor {\n  max-width: 65%;\n}\n",
            layout_data: {
                examples: [{
                    title: "Color Contrast (C)",
                    description: 'The Web Content Accessibility Guidelines <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">\nrecommends a color contrast of 4.5:1</a> to meet color contrast guidelines.\nYou can use various color contrast checkers online to verify your color contrast\nratio. <a href="http://www.paciellogroup.com/resources/contrastanalyser/">Colour Contrast Analyser</a>\nand <a href="http://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333">\nColour Contrast Check Tool</a> are examples of tools available online.\n\nFor the two house icons below, the color contrast has been calculated\nusing the Colour Contrast Analyser. For your exercise below, please use the\n<a href="http://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333">\nColour Contrast Check Tool</a> to enter the background (#405865) and foreground (#FFFFFF) values specified here.\nThe tool will show you the color contrast ratio. Please replace the \'x\' below with the contrast of the third icon,\ne.g., `<span id=\'contrastValue\'>2000</span>`.\n',
                    code: "<div>\n  <div>\n    <img\n      src='" + n(245) + "'\n      alt='house with bad contrast' />\n  </div>\n  <span>Color Contrast -- 2.2: 1</span>\n</div>\n\n<div>\n  <div>\n    <img\n      src='" + n(246) + "'\n      alt='house with better contrast' />\n  </div>\n  <span>Color Contrast -- 4.6: 1</span>\n</div>\n\n<div>\n  <div>\n    <img\n      src='" + n(247) + "'\n      alt='house with good contrast' />\n  </div>\n  <p>Background Color: #405865<p>\n  <p>Foreground Color: #FFFFFF<p>\n  <span>Color Contrast -- </span>\n  <span id='contrastValue'>x</span>\n  <span>:1</span>\n</div>\n",
                    assertion: "assert(\n  dom.querySelector('#contrastValue').innerHTML === '7.05',\n  \"Did you really use the Colour Contrast Check tool? Try again!\"\n);\n"
                }]
            }
        },
        content: "Sufficient color contrast allows people to clearly see content on the page.\n\n",
        pathHash: "18ed4ab1e9e6d6b82ff7713113afffb6",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    e.exports = n.p + "contrast-bad-2-2-p92uI5k.png"
}, function(e, t, n) {
    e.exports = n.p + "contrast-better-4-6-2G4gRk_.png"
}, function(e, t, n) {
    e.exports = n.p + "contrast-good-7-5-1Hm1Dgm.png"
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r, e.exports = {
        options: {
            title: "Conveying Meaning through Color",
            chapter: "Designers",
            style: "figcaption {\n  text-align: center;\n}\n"
        },
        content: "Color blindness is the inability or decreased ability to see color or perceive \ncolor differences. [Approximately 4.5% of the world's \npopulation](https://nei.nih.gov/health/color_blindness/facts_about) are color \nblind to some degree. In order to ensure that someone with color blindness can \nsuccessfully use your product, you cannot rely completely on color alone to \ncommunicate information. By extension, using colors or patterns alone to \nindicate something will not be accessible to a blind users. In instances where \nyou are using color as an indicator (for instance, green for something active \nand grey for something inactive), include a text equivalent description for the \nstate.\n\nHere's an example where providing a very simple texture to a bar chart will aid in readability and understanding for someone with decreased color perception.\n\n<figure>\n  <img src=\"" + n(249) + '" alt="Chart showing bar graph without texture">\n  <figcaption>Figure A: Chart without Texture</figcaption>\n</figure>\n\n<figure>\n  <img src="' + n(250) + '" alt="Chart showing bar graph with distinct textures for each bar">\n  <figcaption>Figure B: Chart with Texture </figcaption>\n</figure>\n',
        pathHash: "18ed4ab1e9e6d6b82ff7713113afffb6",
        contentConverter: r
    }
}, function(e, t, n) {
    e.exports = n.p + "color-meaning-solid-3M7HXVo.png"
}, function(e, t, n) {
    e.exports = n.p + "color-meaning-texture-3hD4Uv0.png"
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r;
    var o = n(199);
    o = o ? o["default"] || o : o, e.exports = {
        options: {
            title: "Text Size",
            chapter: "Designers",
            style: "#container {\n  font-size: 100%\n  width: 80px;\n  height: 50px;\n  border: thin solid gray;\n  margin: 10px;\n}\n\n#additionalLinks, #a11yLinkHide {\n  display: none;\n}\n",
            layout_data: {
                examples: [{
                    title: "Text Size (T)",
                    description: "For people with low vision, it is important to support the ability to increase\ntext size without text overlapping or getting truncated. To test, use your browser's\nbuilt-in zoom or text-resize feature to zoom and make sure text is still readable.\nIf you are building for the mobile web, please don't disable pinch and zoom.\n\n[WCAG guidelines recommend allowing zooming up to 200% without loss of \ncontent.](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale)\n\n[More on fonts and accessibility in the WebAIM \nsite.](http://webaim.org/techniques/fonts/#font_size)\n\nFor the exercise below, you will need a browser like Safari that allows you to\nincrease just the text size instead of zooming in the whole page. On Safari,\ngo to View and Zoom Text Only and then select Zoom In from the same menu. You\nwill notice that the words bleed outside the box below. Try fixing this example\nby specifying the width and height as relative units, such as ems. Set the height\nto 3em and width to 10em and verify your answers.\n",
                    code: "<div\n  id='container'>\n    Lorem ipsum dolor sit amet\n</div>\n",
                    assertion: "var container = dom.querySelector('#container');\nassert(\n  container.style.height === '3em' && container.style.width === '10em',\n  \"It doesn't seem like the height and width are set to the right ems\"\n);\n"
                }]
            }
        },
        content: "People with low vision use browser zoom tools and assistive technology such as\n[ZoomText](http://www.aisquared.com/products/zoomtext/) to increase the size of \ncontent on the screen. This exercise shows you the difference between zooming \nall the content versus zooming just the text on the page.\n",
        pathHash: "18ed4ab1e9e6d6b82ff7713113afffb6",
        contentConverter: r,
        layout: o
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r, e.exports = {
        options: {
            title: "Copy Writing",
            chapter: "Designers"
        },
        content: "The content you write for your website or application matters a great deal for \nits usability and accessibility. The Web Content Accessibility Guidelines \nrecommends that you use a reading ability equivalent of a [lower secondary \neducation level](http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-supplements).\nThat's a good, general rule of thumb to go by.  Here are a few more:\n\n- Avoid using directional language like “below” and “left/right.” These require\n  that you can see the visual layout of the page.\n- Use alt-text for images. Alt-text describes the contents of an image to\n  someone who is visually impaired and using a screen reader. If your designs \n  include images that you've created (not user-generated images), you need to \n  provide alt-text in your front end layer.\n- Provide explanatory and context-specific text where possible. Explanatory text\n  consists of short text strings that describe an interface element’s function \n  (ex: if you have a search button that looks like a magnifying glass, you \n  might consider adding an on-hover tooltip of \"Search\").\n\nTake note that if your website or application includes other text artifacts like\nPDFs, you may need to provide unique accessibility support for those media.\n",
        pathHash: "18ed4ab1e9e6d6b82ff7713113afffb6",
        contentConverter: r
    }
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r, e.exports = {
        options: {
            title: "Photos & Videos",
            chapter: "Design Principles"
        },
        content: 'While alt-text can make a static photo or graphic accessible to screen reader users, when an image is dynamic (e.g., animated GIF or video) and contains audio, additional support is required for users who are blind or deaf.\n\n<figure>\n  <img src="' + n(254) + '" alt="Captions displayed over video screen \n  shot" />\n</figure>\n\nWhen providing video, via either an embedded or standalone video player, the controls of that player need to be operable by a keyboard-only user (i.e., without a mouse). Controls such as play, pause, fast forward, rewind and scrub bars and closed caption buttons all need to be labeled properly and available to a screen reader user in the same way any web page is made accessible.\n\n"Audio description" (also known as "video description") provides an added narrative track that describes key visual elements of a animation or video or movie. Timed to be heard during pauses in dialog, descriptions can be recorded and synchronized with the video or made available as text to be read by a screen reader. With HTML5 video players and the video and track elements, audio descriptions can even be heard while a video is automatically paused. For more on how to deliver descriptions, see the following resources:\n- <http://webaim.org/techniques/captions/>\n- <https://www.w3.org/WAI/GL/wiki/Using_the_track_element_to_provide_audio_descriptions>\n- <http://www.ssbbartgroup.com/blog/cvaa-video-programming-requirements-video-description/>\n\nClosed captioning involves the addition of text to synchronized to a video\'s audio by either embedding caption data in your video or adding a "sidecar" closed caption file to your server. There are a variety of caption formats used by content providers as well as tools for creating captions. Many vendors are available to provide captions in the format that works for your video player\'s needs. Resources for captioning media:\n\n- <http://webaim.org/techniques/captions/>\n- <http://info.3playmedia.com/wp-best-practices.html>\n',
        pathHash: "18ed4ab1e9e6d6b82ff7713113afffb6",
        contentConverter: r
    }
}, function(e, t, n) {
    e.exports = n.p + "captions-1yHgeSi.png"
}, function(e, t, n) {
    var r = n(3);
    r = r ? r["default"] || r : r, e.exports = {
        options: {
            title: "Checklist",
            chapter: "Design Principles"
        },
        content: "We've covered a bunch of ground related to improving the accessibility of visual designs. One of the most important steps you can take to ensuring you create accessible experiences is accounting for accessibility at the start and throughout the design process. To that end, use the following checklist when you begin to formalize your visual designs for a website or application:\n\n- Do I have sufficient contrast between text and my background?\n- Do I have sufficient contrast between UI elements and my background?\n- Are there any places where I'm color or other visual means alone to indicate something (ie, no text equivalent)?\n- Is my written content simple and easy to understand?\n- Are there any cases where the screen is flashing or flickering?\n- Does every mouse interaction have a keyboard-only equivalent interaction?\n- Have captions been included with any audio or audio/visual presentation?\n- If any interaction involves a timed response or session timeout, is this communicated well?\n\nThere are also a number of free tools available for assessing the accessibility:\n\n- WAVE by WebAIM for general website accessibility: <http://wave.webaim.org/>\n- Juicy Studio's Readability Test: <http://juicystudio.com/services/readability.php>\n- Vischeck's Color Blindness Checker: <http://www.vischeck.com/>\n",
        pathHash: "18ed4ab1e9e6d6b82ff7713113afffb6",
        contentConverter: r
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.subscribeAll = t.subscribe = t.setSlideCacheData = t.registerExtension = t.use = t.present = t.normalizeImageData = t.groupByChapter = t.getSlideCacheData = t.forward = t.back = t.IS_MOBILE = void 0;
    var o = n(257),
        i = r(o),
        a = n(416),
        s = n(417),
        l = n(418),
        u = n(268),
        c = n(419),
        d = n(420),
        p = n(421),
        f = n(269);
    t.IS_MOBILE = a.IS_MOBILE, t.back = u.back, t.forward = u.forward, t.getSlideCacheData = s.getSlideCacheData, t.groupByChapter = l.groupByChapter, t.normalizeImageData = c.normalizeImageData, t.present = i["default"], t.use = d.register, t.registerExtension = p.registerExtension, t.setSlideCacheData = s.setSlideCacheData, t.subscribe = f.subscribe, t.subscribeAll = f.subscribeAll
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(t) {
            i(t), (0, g.publish)("CONFIG.SET", t);
            var n = e.document.getElementById("exerslide-loader");
            n && n.parentNode.removeChild(n), f["default"].render(d["default"].createElement(m["default"], {
                slides: t.slides
            }, d["default"].createElement(u["default"], {
                masterLayout: t.masterLayout,
                slideLayout: t.slideLayout,
                config: t
            })), e.document.body.appendChild(e.document.createElement("div")))
        }

        function i(e) {
            (0, s["default"])(v).forEach(function(t) {
                if (!(t in e)) throw new Error(v[t])
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(258),
            s = r(a);
        t["default"] = o;
        var l = n(261),
            u = r(l),
            c = n(96),
            d = r(c),
            p = n(274),
            f = r(p),
            h = n(407),
            m = r(h),
            g = n(269),
            v = {
                slides: "You have to pass an array of slides.",
                masterLayout: "You have to pass a master layout.",
                slideLayout: "You have to pass a slide layout"
            }
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    e.exports = {
        "default": n(259),
        __esModule: !0
    }
}, function(e, t, n) {
    n(260), e.exports = n(10).Object.keys
}, function(e, t, n) {
    var r = n(41),
        o = n(24);
    n(203)("keys", function() {
        return function(e) {
            return o(r(e))
        }
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(262),
        a = o(i),
        s = n(200),
        l = o(s),
        u = n(204),
        c = o(u),
        d = n(205),
        p = o(d),
        f = n(209),
        h = o(f),
        m = n(210),
        g = o(m),
        v = n(268),
        y = r(v),
        b = n(96),
        x = o(b),
        w = n(271),
        k = o(w),
        _ = n(269),
        C = function(e) {
            function t() {
                return (0, c["default"])(this, t), (0, h["default"])(this, (t.__proto__ || (0, l["default"])(t)).apply(this, arguments))
            }
            return (0, g["default"])(t, e), (0, p["default"])(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    (0, _.subscribe)(y.FORWARD, function() {
                        var t = e._slide && e._slide.onForward();
                        t || e.props.nextSlide()
                    }), (0, _.subscribe)(y.BACK, function() {
                        var t = e._slide && e._slide.onBack();
                        t || e.props.previousSlide()
                    }), (0, _.subscribe)(y.TO_SLIDE, function(t) {
                        return e.props.goToSlide(t)
                    })
                }
            }, {
                key: "getChildContext",
                value: function() {
                    return {
                        config: this.props.config
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.masterLayout,
                        r = t.slideLayout,
                        o = t.slide,
                        i = t.slideIndex,
                        s = t.slides,
                        l = o.options,
                        u = o.layout,
                        c = l.classNames ? [].concat((0, a["default"])(l.classNames)) : [];
                    return u && u.getClassNames && (c = c.concat(u.getClassNames({
                        slides: s,
                        slideIndex: i,
                        slide: o
                    }))), x["default"].createElement(n, {
                        className: c.join(" ")
                    }, x["default"].createElement(k["default"], {
                        key: i,
                        ref: function(t) {
                            return e._slide = t
                        },
                        slide: o,
                        slideIndex: i,
                        slideLayout: r
                    }))
                }
            }]), t
        }(x["default"].Component);
    t["default"] = C, C.propTypes = {
        masterLayout: x["default"].PropTypes.func,
        slideLayout: x["default"].PropTypes.func,
        slide: x["default"].PropTypes.object,
        slideIndex: x["default"].PropTypes.number,
        slides: x["default"].PropTypes.arrayOf(x["default"].PropTypes.object),
        config: x["default"].PropTypes.object,
        nextSlide: x["default"].PropTypes.func,
        previousSlide: x["default"].PropTypes.func,
        goToSlide: x["default"].PropTypes.func
    }, C.childContextTypes = {
        config: x["default"].PropTypes.object
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(263),
        i = r(o);
    t["default"] = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return (0, i["default"])(e)
    }
}, function(e, t, n) {
    e.exports = {
        "default": n(264),
        __esModule: !0
    }
}, function(e, t, n) {
    n(45), n(265), e.exports = n(10).Array.from
}, function(e, t, n) {
    "use strict";
    var r = n(11),
        o = n(8),
        i = n(41),
        a = n(84),
        s = n(85),
        l = n(32),
        u = n(266),
        c = n(86);
    o(o.S + o.F * !n(267)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, o, d, p = i(e),
                f = "function" == typeof this ? this : Array,
                h = arguments.length,
                m = h > 1 ? arguments[1] : void 0,
                g = void 0 !== m,
                v = 0,
                y = c(p);
            if (g && (m = r(m, h > 2 ? arguments[2] : void 0, 2)), void 0 == y || f == Array && s(y))
                for (t = l(p.length), n = new f(t); t > v; v++) u(n, v, g ? m(p[v], v) : p[v]);
            else
                for (d = y.call(p), n = new f; !(o = d.next()).done; v++) u(n, v, g ? a(d, m, [o.value, v], !0) : o.value);
            return n.length = v, n
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(22);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : e[t] = n
    }
}, function(e, t, n) {
    var r = n(56)("iterator"),
        o = !1;
    try {
        var i = [7][r]();
        i["return"] = function() {
            o = !0
        }, Array.from(i, function() {
            throw 2
        })
    } catch (a) {}
    e.exports = function(e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var i = [7],
                a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, i[r] = function() {
                return a
            }, e(i)
        } catch (s) {}
        return n
    }
}, function(e, t, n) {
    "use strict";

    function r() {
        (0, a.publish)(s)
    }

    function o() {
        (0, a.publish)(l)
    }

    function i(e) {
        (0, a.publish)(u, e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TO_SLIDE = t.BACK = t.FORWARD = void 0, t.forward = r, t.back = o, t.gotToSlide = i;
    var a = n(269),
        s = t.FORWARD = "NAVIGATION.forward",
        l = t.BACK = "NAVIGATION.back",
        u = t.TO_SLIDE = "NAVIGATION.TO_SLIDE"
}, function(e, t, n) {
    "use strict";

    function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return a.on.apply(a, t), s.bind.apply(s, [null].concat(t))
    }

    function o(e) {
        for (var t in e) e.hasOwnProperty(t) && a.on(t, e[t]);
        return function() {
            for (var t in e) e.hasOwnProperty(t) && s(t, e[t])
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.unsubscribe = t.publish = void 0, t.subscribe = r, t.subscribeAll = o;
    var i = n(270),
        a = new i.EventEmitter,
        s = (t.publish = a.emit.bind(a), t.unsubscribe = a.removeListener.bind(a))
}, function(e, t) {
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function r(e) {
        return "function" == typeof e
    }

    function o(e) {
        return "number" == typeof e
    }

    function i(e) {
        return "object" == typeof e && null !== e
    }

    function a(e) {
        return void 0 === e
    }
    e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
        if (!o(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, n.prototype.emit = function(e) {
        var t, n, o, s, l, u;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
            if (t = arguments[1], t instanceof Error) throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c
        }
        if (n = this._events[e], a(n)) return !1;
        if (r(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
        } else if (i(n))
            for (s = Array.prototype.slice.call(arguments, 1), u = n.slice(), o = u.length, l = 0; l < o; l++) u[l].apply(this, s);
        return !0
    }, n.prototype.addListener = function(e, t) {
        var o;
        if (!r(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, i(this._events[e]) && !this._events[e].warned && (o = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, o && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
        function n() {
            this.removeListener(e, n), o || (o = !0, t.apply(this, arguments))
        }
        if (!r(t)) throw TypeError("listener must be a function");
        var o = !1;
        return n.listener = t, this.on(e, n), this
    }, n.prototype.removeListener = function(e, t) {
        var n, o, a, s;
        if (!r(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (n = this._events[e], a = n.length, o = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (i(n)) {
            for (s = a; s-- > 0;)
                if (n[s] === t || n[s].listener && n[s].listener === t) {
                    o = s;
                    break
                }
            if (o < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, n.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (n = this._events[e], r(n)) this.removeListener(e, n);
        else if (n)
            for (; n.length;) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this
    }, n.prototype.listeners = function(e) {
        var t;
        return t = this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, n.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (r(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, n.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            (0, _.publish)(e, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(262),
            a = r(i),
            s = n(4),
            l = r(s),
            u = n(200),
            c = r(u),
            d = n(204),
            p = r(d),
            f = n(205),
            h = r(f),
            m = n(209),
            g = r(m),
            v = n(210),
            y = r(v),
            b = n(96),
            x = r(b),
            w = n(272),
            k = n(273),
            _ = n(269),
            C = n(226),
            E = r(C),
            S = null,
            T = function(t) {
                function n() {
                    return (0, p["default"])(this, n), (0, g["default"])(this, (n.__proto__ || (0, c["default"])(n)).apply(this, arguments))
                }
                return (0, y["default"])(n, t), (0, h["default"])(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this._mountStyle(), this._mountScript(), this._updateDocumentTitle(), o("SLIDE.DID_MOUNT", this.props)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return this.props.slide !== e.slide
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.props.slideIndex !== e.slideIndex && (this._style && (this._style.remove(), this._style = null), this._script && (this._script.teardown(), this._script = null), this._mountStyle(), this._mountScript(), this._updateDocumentTitle(), o("SLIDE.DID_UPDATE", this.context))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._style && (this._style.remove(), this._style = null), this._script && (this._script.teardown(), this._script = null), e.document.title = S, o("SLIDE.WILL_UNMOUNT", this.props)
                    }
                }, {
                    key: "_updateDocumentTitle",
                    value: function() {
                        var t = this.props.slide && this.props.slide.options.title;
                        null === S && (S = e.document.title), e.document.title = t ? S + " - " + t : S
                    }
                }, {
                    key: "_mountStyle",
                    value: function() {
                        this._style && (this._style.remove(), this._style = null), this.props.slide.options.style && (this._style = (0, w.addStyle)(this.props.slide.options.style))
                    }
                }, {
                    key: "_mountScript",
                    value: function() {
                        this._script && (this._script.teardown(), this._script = null);
                        var e = this.props.slide.options.script;
                        e && (this._script = (0, k.evalScript)(e), this._script.setup())
                    }
                }, {
                    key: "onForward",
                    value: function() {
                        return Boolean(this._layout && this._layout.onForward && this._layout.onForward())
                    }
                }, {
                    key: "onBack",
                    value: function() {
                        return Boolean(this._layout && this._layout.onBack && this._layout.onBack())
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.slide,
                            r = t.slideLayout,
                            o = this.props.slide,
                            i = o.options,
                            s = o.layout,
                            u = i.title ? x["default"].createElement("h1", {
                                id: "exerslide-slide-title",
                                className: "title",
                                tabIndex: 0
                            }, i.title) : null,
                            c = void 0;
                        return c = s ? [x["default"].createElement(s, (0, l["default"])({
                            ref: function(t) {
                                return e._layout = t
                            },
                            title: u,
                            content: n.content,
                            layoutData: i.layoutData || {}
                        }, this.context))] : [u, x["default"].createElement(E["default"], {
                            value: n.content
                        })], c = x["default"].createElement.apply(x["default"], [r, {}].concat((0, a["default"])(c))), x["default"].createElement("div", {
                            id: "exerslide-slide",
                            role: "main",
                            "aria-label": "Slide:",
                            "aria-labelledby": "exerlide-slide exerlide-slide-title"
                        }, c)
                    }
                }]), n
            }(x["default"].Component);
        t["default"] = T, T.propTypes = {
            slide: x["default"].PropTypes.object.isRequired,
            slideIndex: x["default"].PropTypes.number.isRequired,
            slideLayout: x["default"].PropTypes.func.isRequired
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    (function(e) {
        "use strict";

        function n(e) {
            var t = r.createElement("style");
            return t.innerHTML = e, r.head.appendChild(t), {
                remove: function() {
                    t && (r.head.removeChild(t), t = null)
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addStyle = n;
        var r = e.document
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    (function(e) {
        "use strict";

        function n(t) {
            var n = {},
                r = n.exports = {},
                o = new Function("module, exports, global", t);
            return o(n, r, e), n.exports
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.evalScript = n
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    "use strict";
    e.exports = n(275)
}, function(e, t, n) {
    "use strict";
    var r = n(276),
        o = n(279),
        i = n(399),
        a = n(299),
        s = n(296),
        l = n(123),
        u = n(404),
        c = n(405),
        d = n(406);
    n(105);
    o.inject();
    var p = {
        findDOMNode: u,
        render: i.render,
        unmountComponentAtNode: i.unmountComponentAtNode,
        version: l,
        unstable_batchedUpdates: s.batchedUpdates,
        unstable_renderSubtreeIntoContainer: d
    };
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        ComponentTree: {
            getClosestInstanceFromNode: r.getClosestInstanceFromNode,
            getNodeFromInstance: function(e) {
                return e._renderedComponent && (e = c(e)), e ? r.getNodeFromInstance(e) : null
            }
        },
        Mount: i,
        Reconciler: a
    });
    e.exports = p
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var t; t = e._renderedComponent;) e = t;
        return e
    }

    function o(e, t) {
        var n = r(e);
        n._hostNode = t, t[m] = n
    }

    function i(e) {
        var t = e._hostNode;
        t && (delete t[m], e._hostNode = null)
    }

    function a(e, t) {
        if (!(e._flags & h.hasCachedChildNodes)) {
            var n = e._renderedChildren,
                i = t.firstChild;
            e: for (var a in n)
                if (n.hasOwnProperty(a)) {
                    var s = n[a],
                        l = r(s)._domID;
                    if (0 !== l) {
                        for (; null !== i; i = i.nextSibling)
                            if (1 === i.nodeType && i.getAttribute(f) === String(l) || 8 === i.nodeType && i.nodeValue === " react-text: " + l + " " || 8 === i.nodeType && i.nodeValue === " react-empty: " + l + " ") {
                                o(s, i);
                                continue e
                            }
                        c("32", l)
                    }
                }
            e._flags |= h.hasCachedChildNodes
        }
    }

    function s(e) {
        if (e[m]) return e[m];
        for (var t = []; !e[m];) {
            if (t.push(e), !e.parentNode) return null;
            e = e.parentNode
        }
        for (var n, r; e && (r = e[m]); e = t.pop()) n = r, t.length && a(r, e);
        return n
    }

    function l(e) {
        var t = s(e);
        return null != t && t._hostNode === e ? t : null
    }

    function u(e) {
        if (void 0 === e._hostNode ? c("33") : void 0, e._hostNode) return e._hostNode;
        for (var t = []; !e._hostNode;) t.push(e), e._hostParent ? void 0 : c("34"), e = e._hostParent;
        for (; t.length; e = t.pop()) a(e, e._hostNode);
        return e._hostNode
    }
    var c = n(101),
        d = n(277),
        p = n(278),
        f = (n(102), d.ID_ATTRIBUTE_NAME),
        h = p,
        m = "__reactInternalInstance$" + Math.random().toString(36).slice(2),
        g = {
            getClosestInstanceFromNode: s,
            getInstanceFromNode: l,
            getNodeFromInstance: u,
            precacheChildNodes: a,
            precacheNode: o,
            uncacheNode: i
        };
    e.exports = g
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return (e & t) === t
    }
    var o = n(101),
        i = (n(102), {
            MUST_USE_PROPERTY: 1,
            HAS_BOOLEAN_VALUE: 4,
            HAS_NUMERIC_VALUE: 8,
            HAS_POSITIVE_NUMERIC_VALUE: 24,
            HAS_OVERLOADED_BOOLEAN_VALUE: 32,
            injectDOMPropertyConfig: function(e) {
                var t = i,
                    n = e.Properties || {},
                    a = e.DOMAttributeNamespaces || {},
                    l = e.DOMAttributeNames || {},
                    u = e.DOMPropertyNames || {},
                    c = e.DOMMutationMethods || {};
                e.isCustomAttribute && s._isCustomAttributeFunctions.push(e.isCustomAttribute);
                for (var d in n) {
                    s.properties.hasOwnProperty(d) ? o("48", d) : void 0;
                    var p = d.toLowerCase(),
                        f = n[d],
                        h = {
                            attributeName: p,
                            attributeNamespace: null,
                            propertyName: d,
                            mutationMethod: null,
                            mustUseProperty: r(f, t.MUST_USE_PROPERTY),
                            hasBooleanValue: r(f, t.HAS_BOOLEAN_VALUE),
                            hasNumericValue: r(f, t.HAS_NUMERIC_VALUE),
                            hasPositiveNumericValue: r(f, t.HAS_POSITIVE_NUMERIC_VALUE),
                            hasOverloadedBooleanValue: r(f, t.HAS_OVERLOADED_BOOLEAN_VALUE)
                        };
                    if (h.hasBooleanValue + h.hasNumericValue + h.hasOverloadedBooleanValue <= 1 ? void 0 : o("50", d), l.hasOwnProperty(d)) {
                        var m = l[d];
                        h.attributeName = m
                    }
                    a.hasOwnProperty(d) && (h.attributeNamespace = a[d]), u.hasOwnProperty(d) && (h.propertyName = u[d]), c.hasOwnProperty(d) && (h.mutationMethod = c[d]), s.properties[d] = h
                }
            }
        }),
        a = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
        s = {
            ID_ATTRIBUTE_NAME: "data-reactid",
            ROOT_ATTRIBUTE_NAME: "data-reactroot",
            ATTRIBUTE_NAME_START_CHAR: a,
            ATTRIBUTE_NAME_CHAR: a + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
            properties: {},
            getPossibleStandardName: null,
            _isCustomAttributeFunctions: [],
            isCustomAttribute: function(e) {
                for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
                    var n = s._isCustomAttributeFunctions[t];
                    if (n(e)) return !0
                }
                return !1
            },
            injection: i
        };
    e.exports = s
}, function(e, t) {
    "use strict";
    var n = {
        hasCachedChildNodes: 1
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r() {
        k || (k = !0, v.EventEmitter.injectReactEventListener(g), v.EventPluginHub.injectEventPluginOrder(a), v.EventPluginUtils.injectComponentTree(d), v.EventPluginUtils.injectTreeTraversal(f), v.EventPluginHub.injectEventPluginsByName({
            SimpleEventPlugin: w,
            EnterLeaveEventPlugin: s,
            ChangeEventPlugin: i,
            SelectEventPlugin: x,
            BeforeInputEventPlugin: o
        }), v.HostComponent.injectGenericComponentClass(c), v.HostComponent.injectTextComponentClass(h), v.DOMProperty.injectDOMPropertyConfig(l), v.DOMProperty.injectDOMPropertyConfig(b), v.EmptyComponent.injectEmptyComponentFactory(function(e) {
            return new p(e)
        }), v.Updates.injectReconcileTransaction(y), v.Updates.injectBatchingStrategy(m), v.Component.injectEnvironment(u))
    }
    var o = n(280),
        i = n(295),
        a = n(307),
        s = n(308),
        l = n(313),
        u = n(314),
        c = n(328),
        d = n(276),
        p = n(370),
        f = n(371),
        h = n(372),
        m = n(373),
        g = n(374),
        v = n(377),
        y = n(378),
        b = n(386),
        x = n(387),
        w = n(388),
        k = !1;
    e.exports = {
        inject: r
    }
}, function(e, t, n) {
    "use strict";

    function r() {
        var e = window.opera;
        return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12
    }

    function o(e) {
        return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
    }

    function i(e) {
        switch (e) {
            case A.topCompositionStart:
                return M.compositionStart;
            case A.topCompositionEnd:
                return M.compositionEnd;
            case A.topCompositionUpdate:
                return M.compositionUpdate
        }
    }

    function a(e, t) {
        return e === A.topKeyDown && t.keyCode === w
    }

    function s(e, t) {
        switch (e) {
            case A.topKeyUp:
                return x.indexOf(t.keyCode) !== -1;
            case A.topKeyDown:
                return t.keyCode !== w;
            case A.topKeyPress:
            case A.topMouseDown:
            case A.topBlur:
                return !0;
            default:
                return !1
        }
    }

    function l(e) {
        var t = e.detail;
        return "object" == typeof t && "data" in t ? t.data : null
    }

    function u(e, t, n, r) {
        var o, u;
        if (k ? o = i(e) : N ? s(e, n) && (o = M.compositionEnd) : a(e, n) && (o = M.compositionStart), !o) return null;
        E && (N || o !== M.compositionStart ? o === M.compositionEnd && N && (u = N.getData()) : N = g.getPooled(r));
        var c = v.getPooled(o, t, n, r);
        if (u) c.data = u;
        else {
            var d = l(n);
            null !== d && (c.data = d)
        }
        return h.accumulateTwoPhaseDispatches(c), c
    }

    function c(e, t) {
        switch (e) {
            case A.topCompositionEnd:
                return l(t);
            case A.topKeyPress:
                var n = t.which;
                return n !== S ? null : (L = !0, T);
            case A.topTextInput:
                var r = t.data;
                return r === T && L ? null : r;
            default:
                return null
        }
    }

    function d(e, t) {
        if (N) {
            if (e === A.topCompositionEnd || s(e, t)) {
                var n = N.getData();
                return g.release(N), N = null, n
            }
            return null
        }
        switch (e) {
            case A.topPaste:
                return null;
            case A.topKeyPress:
                return t.which && !o(t) ? String.fromCharCode(t.which) : null;
            case A.topCompositionEnd:
                return E ? null : t.data;
            default:
                return null
        }
    }

    function p(e, t, n, r) {
        var o;
        if (o = C ? c(e, n) : d(e, n), !o) return null;
        var i = y.getPooled(M.beforeInput, t, n, r);
        return i.data = o, h.accumulateTwoPhaseDispatches(i), i
    }
    var f = n(281),
        h = n(282),
        m = n(289),
        g = n(290),
        v = n(292),
        y = n(294),
        b = n(119),
        x = [9, 13, 27, 32],
        w = 229,
        k = m.canUseDOM && "CompositionEvent" in window,
        _ = null;
    m.canUseDOM && "documentMode" in document && (_ = document.documentMode);
    var C = m.canUseDOM && "TextEvent" in window && !_ && !r(),
        E = m.canUseDOM && (!k || _ && _ > 8 && _ <= 11),
        S = 32,
        T = String.fromCharCode(S),
        A = f.topLevelTypes,
        M = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: b({
                        onBeforeInput: null
                    }),
                    captured: b({
                        onBeforeInputCapture: null
                    })
                },
                dependencies: [A.topCompositionEnd, A.topKeyPress, A.topTextInput, A.topPaste]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: b({
                        onCompositionEnd: null
                    }),
                    captured: b({
                        onCompositionEndCapture: null
                    })
                },
                dependencies: [A.topBlur, A.topCompositionEnd, A.topKeyDown, A.topKeyPress, A.topKeyUp, A.topMouseDown]
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: b({
                        onCompositionStart: null
                    }),
                    captured: b({
                        onCompositionStartCapture: null
                    })
                },
                dependencies: [A.topBlur, A.topCompositionStart, A.topKeyDown, A.topKeyPress, A.topKeyUp, A.topMouseDown]
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: b({
                        onCompositionUpdate: null
                    }),
                    captured: b({
                        onCompositionUpdateCapture: null
                    })
                },
                dependencies: [A.topBlur, A.topCompositionUpdate, A.topKeyDown, A.topKeyPress, A.topKeyUp, A.topMouseDown]
            }
        },
        L = !1,
        N = null,
        D = {
            eventTypes: M,
            extractEvents: function(e, t, n, r) {
                return [u(e, t, n, r), p(e, t, n, r)]
            }
        };
    e.exports = D
}, function(e, t, n) {
    "use strict";
    var r = n(117),
        o = r({
            bubbled: null,
            captured: null
        }),
        i = r({
            topAbort: null,
            topAnimationEnd: null,
            topAnimationIteration: null,
            topAnimationStart: null,
            topBlur: null,
            topCanPlay: null,
            topCanPlayThrough: null,
            topChange: null,
            topClick: null,
            topCompositionEnd: null,
            topCompositionStart: null,
            topCompositionUpdate: null,
            topContextMenu: null,
            topCopy: null,
            topCut: null,
            topDoubleClick: null,
            topDrag: null,
            topDragEnd: null,
            topDragEnter: null,
            topDragExit: null,
            topDragLeave: null,
            topDragOver: null,
            topDragStart: null,
            topDrop: null,
            topDurationChange: null,
            topEmptied: null,
            topEncrypted: null,
            topEnded: null,
            topError: null,
            topFocus: null,
            topInput: null,
            topInvalid: null,
            topKeyDown: null,
            topKeyPress: null,
            topKeyUp: null,
            topLoad: null,
            topLoadedData: null,
            topLoadedMetadata: null,
            topLoadStart: null,
            topMouseDown: null,
            topMouseMove: null,
            topMouseOut: null,
            topMouseOver: null,
            topMouseUp: null,
            topPaste: null,
            topPause: null,
            topPlay: null,
            topPlaying: null,
            topProgress: null,
            topRateChange: null,
            topReset: null,
            topScroll: null,
            topSeeked: null,
            topSeeking: null,
            topSelectionChange: null,
            topStalled: null,
            topSubmit: null,
            topSuspend: null,
            topTextInput: null,
            topTimeUpdate: null,
            topTouchCancel: null,
            topTouchEnd: null,
            topTouchMove: null,
            topTouchStart: null,
            topTransitionEnd: null,
            topVolumeChange: null,
            topWaiting: null,
            topWheel: null
        }),
        a = {
            topLevelTypes: i,
            PropagationPhases: o
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = t.dispatchConfig.phasedRegistrationNames[n];
        return b(e, r)
    }

    function o(e, t, n) {
        var o = t ? y.bubbled : y.captured,
            i = r(e, n, o);
        i && (n._dispatchListeners = g(n._dispatchListeners, i), n._dispatchInstances = g(n._dispatchInstances, e))
    }

    function i(e) {
        e && e.dispatchConfig.phasedRegistrationNames && m.traverseTwoPhase(e._targetInst, o, e)
    }

    function a(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            var t = e._targetInst,
                n = t ? m.getParentInstance(t) : null;
            m.traverseTwoPhase(n, o, e)
        }
    }

    function s(e, t, n) {
        if (n && n.dispatchConfig.registrationName) {
            var r = n.dispatchConfig.registrationName,
                o = b(e, r);
            o && (n._dispatchListeners = g(n._dispatchListeners, o), n._dispatchInstances = g(n._dispatchInstances, e))
        }
    }

    function l(e) {
        e && e.dispatchConfig.registrationName && s(e._targetInst, null, e)
    }

    function u(e) {
        v(e, i)
    }

    function c(e) {
        v(e, a)
    }

    function d(e, t, n, r) {
        m.traverseEnterLeave(n, r, s, e, t)
    }

    function p(e) {
        v(e, l)
    }
    var f = n(281),
        h = n(283),
        m = n(285),
        g = n(287),
        v = n(288),
        y = (n(105), f.PropagationPhases),
        b = h.getListener,
        x = {
            accumulateTwoPhaseDispatches: u,
            accumulateTwoPhaseDispatchesSkipTarget: c,
            accumulateDirectDispatches: p,
            accumulateEnterLeaveDispatches: d
        };
    e.exports = x
}, function(e, t, n) {
    "use strict";
    var r = n(101),
        o = n(284),
        i = n(285),
        a = n(286),
        s = n(287),
        l = n(288),
        u = (n(102), {}),
        c = null,
        d = function(e, t) {
            e && (i.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e))
        },
        p = function(e) {
            return d(e, !0)
        },
        f = function(e) {
            return d(e, !1)
        },
        h = function(e) {
            return "." + e._rootNodeID
        },
        m = {
            injection: {
                injectEventPluginOrder: o.injectEventPluginOrder,
                injectEventPluginsByName: o.injectEventPluginsByName
            },
            putListener: function(e, t, n) {
                "function" != typeof n ? r("94", t, typeof n) : void 0;
                var i = h(e),
                    a = u[t] || (u[t] = {});
                a[i] = n;
                var s = o.registrationNameModules[t];
                s && s.didPutListener && s.didPutListener(e, t, n)
            },
            getListener: function(e, t) {
                var n = u[t],
                    r = h(e);
                return n && n[r]
            },
            deleteListener: function(e, t) {
                var n = o.registrationNameModules[t];
                n && n.willDeleteListener && n.willDeleteListener(e, t);
                var r = u[t];
                if (r) {
                    var i = h(e);
                    delete r[i]
                }
            },
            deleteAllListeners: function(e) {
                var t = h(e);
                for (var n in u)
                    if (u.hasOwnProperty(n) && u[n][t]) {
                        var r = o.registrationNameModules[n];
                        r && r.willDeleteListener && r.willDeleteListener(e, n), delete u[n][t]
                    }
            },
            extractEvents: function(e, t, n, r) {
                for (var i, a = o.plugins, l = 0; l < a.length; l++) {
                    var u = a[l];
                    if (u) {
                        var c = u.extractEvents(e, t, n, r);
                        c && (i = s(i, c))
                    }
                }
                return i
            },
            enqueueEvents: function(e) {
                e && (c = s(c, e))
            },
            processEventQueue: function(e) {
                var t = c;
                c = null, e ? l(t, p) : l(t, f), c ? r("95") : void 0, a.rethrowCaughtError()
            },
            __purge: function() {
                u = {}
            },
            __getListenerBank: function() {
                return u
            }
        };
    e.exports = m
}, function(e, t, n) {
    "use strict";

    function r() {
        if (s)
            for (var e in l) {
                var t = l[e],
                    n = s.indexOf(e);
                if (n > -1 ? void 0 : a("96", e), !u.plugins[n]) {
                    t.extractEvents ? void 0 : a("97", e), u.plugins[n] = t;
                    var r = t.eventTypes;
                    for (var i in r) o(r[i], t, i) ? void 0 : a("98", i, e)
                }
            }
    }

    function o(e, t, n) {
        u.eventNameDispatchConfigs.hasOwnProperty(n) ? a("99", n) : void 0, u.eventNameDispatchConfigs[n] = e;
        var r = e.phasedRegistrationNames;
        if (r) {
            for (var o in r)
                if (r.hasOwnProperty(o)) {
                    var s = r[o];
                    i(s, t, n)
                }
            return !0
        }
        return !!e.registrationName && (i(e.registrationName, t, n), !0)
    }

    function i(e, t, n) {
        u.registrationNameModules[e] ? a("100", e) : void 0, u.registrationNameModules[e] = t, u.registrationNameDependencies[e] = t.eventTypes[n].dependencies
    }
    var a = n(101),
        s = (n(102), null),
        l = {},
        u = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            possibleRegistrationNames: null,
            injectEventPluginOrder: function(e) {
                s ? a("101") : void 0, s = Array.prototype.slice.call(e), r()
            },
            injectEventPluginsByName: function(e) {
                var t = !1;
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var o = e[n];
                        l.hasOwnProperty(n) && l[n] === o || (l[n] ? a("102", n) : void 0, l[n] = o, t = !0)
                    }
                t && r()
            },
            getPluginModuleForEvent: function(e) {
                var t = e.dispatchConfig;
                if (t.registrationName) return u.registrationNameModules[t.registrationName] || null;
                for (var n in t.phasedRegistrationNames)
                    if (t.phasedRegistrationNames.hasOwnProperty(n)) {
                        var r = u.registrationNameModules[t.phasedRegistrationNames[n]];
                        if (r) return r
                    }
                return null
            },
            _resetEventPlugins: function() {
                s = null;
                for (var e in l) l.hasOwnProperty(e) && delete l[e];
                u.plugins.length = 0;
                var t = u.eventNameDispatchConfigs;
                for (var n in t) t.hasOwnProperty(n) && delete t[n];
                var r = u.registrationNameModules;
                for (var o in r) r.hasOwnProperty(o) && delete r[o]
            }
        };
    e.exports = u
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e === y.topMouseUp || e === y.topTouchEnd || e === y.topTouchCancel
    }

    function o(e) {
        return e === y.topMouseMove || e === y.topTouchMove
    }

    function i(e) {
        return e === y.topMouseDown || e === y.topTouchStart
    }

    function a(e, t, n, r) {
        var o = e.type || "unknown-event";
        e.currentTarget = b.getNodeFromInstance(r), t ? g.invokeGuardedCallbackWithCatch(o, n, e) : g.invokeGuardedCallback(o, n, e), e.currentTarget = null
    }

    function s(e, t) {
        var n = e._dispatchListeners,
            r = e._dispatchInstances;
        if (Array.isArray(n))
            for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) a(e, t, n[o], r[o]);
        else n && a(e, t, n, r);
        e._dispatchListeners = null, e._dispatchInstances = null
    }

    function l(e) {
        var t = e._dispatchListeners,
            n = e._dispatchInstances;
        if (Array.isArray(t)) {
            for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                if (t[r](e, n[r])) return n[r]
        } else if (t && t(e, n)) return n;
        return null
    }

    function u(e) {
        var t = l(e);
        return e._dispatchInstances = null, e._dispatchListeners = null, t
    }

    function c(e) {
        var t = e._dispatchListeners,
            n = e._dispatchInstances;
        Array.isArray(t) ? h("103") : void 0, e.currentTarget = t ? b.getNodeFromInstance(n) : null;
        var r = t ? t(e) : null;
        return e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, r
    }

    function d(e) {
        return !!e._dispatchListeners
    }
    var p, f, h = n(101),
        m = n(281),
        g = n(286),
        v = (n(102), n(105), {
            injectComponentTree: function(e) {
                p = e
            },
            injectTreeTraversal: function(e) {
                f = e
            }
        }),
        y = m.topLevelTypes,
        b = {
            isEndish: r,
            isMoveish: o,
            isStartish: i,
            executeDirectDispatch: c,
            executeDispatchesInOrder: s,
            executeDispatchesInOrderStopAtTrue: u,
            hasDispatches: d,
            getInstanceFromNode: function(e) {
                return p.getInstanceFromNode(e)
            },
            getNodeFromInstance: function(e) {
                return p.getNodeFromInstance(e)
            },
            isAncestor: function(e, t) {
                return f.isAncestor(e, t)
            },
            getLowestCommonAncestor: function(e, t) {
                return f.getLowestCommonAncestor(e, t)
            },
            getParentInstance: function(e) {
                return f.getParentInstance(e)
            },
            traverseTwoPhase: function(e, t, n) {
                return f.traverseTwoPhase(e, t, n)
            },
            traverseEnterLeave: function(e, t, n, r, o) {
                return f.traverseEnterLeave(e, t, n, r, o)
            },
            injection: v
        };
    e.exports = b
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        try {
            return t(n, r)
        } catch (i) {
            return void(null === o && (o = i))
        }
    }
    var o = null,
        i = {
            invokeGuardedCallback: r,
            invokeGuardedCallbackWithCatch: r,
            rethrowCaughtError: function() {
                if (o) {
                    var e = o;
                    throw o = null, e
                }
            }
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return null == t ? o("30") : void 0, null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }
    var o = n(101);
    n(102);
    e.exports = r
}, function(e, t) {
    "use strict";

    function n(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }
    e.exports = n
}, function(e, t) {
    "use strict";
    var n = !("undefined" == typeof window || !window.document || !window.document.createElement),
        r = {
            canUseDOM: n,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: n && !!window.screen,
            isInWorker: !n
        };
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this._root = e, this._startText = this.getText(), this._fallbackText = null
    }
    var o = n(98),
        i = n(100),
        a = n(291);
    o(r.prototype, {
        destructor: function() {
            this._root = null, this._startText = null, this._fallbackText = null
        },
        getText: function() {
            return "value" in this._root ? this._root.value : this._root[a()]
        },
        getData: function() {
            if (this._fallbackText) return this._fallbackText;
            var e, t, n = this._startText,
                r = n.length,
                o = this.getText(),
                i = o.length;
            for (e = 0; e < r && n[e] === o[e]; e++);
            var a = r - e;
            for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
            var s = t > 1 ? 1 - t : void 0;
            return this._fallbackText = o.slice(e, s), this._fallbackText
        }
    }), i.addPoolingTo(r), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r() {
        return !i && o.canUseDOM && (i = "textContent" in document.documentElement ? "textContent" : "innerText"), i
    }
    var o = n(289),
        i = null;
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(293),
        i = {
            data: null
        };
    o.augmentClass(r, i), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n;
        var o = this.constructor.Interface;
        for (var i in o)
            if (o.hasOwnProperty(i)) {
                var s = o[i];
                s ? this[i] = s(n) : "target" === i ? this.target = r : this[i] = n[i]
            }
        var l = null != n.defaultPrevented ? n.defaultPrevented : n.returnValue === !1;
        return l ? this.isDefaultPrevented = a.thatReturnsTrue : this.isDefaultPrevented = a.thatReturnsFalse, this.isPropagationStopped = a.thatReturnsFalse, this
    }
    var o = n(98),
        i = n(100),
        a = n(106),
        s = (n(105), "function" == typeof Proxy, ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"]),
        l = {
            type: null,
            target: null,
            currentTarget: a.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
    o(r.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, this.isDefaultPrevented = a.thatReturnsTrue)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = a.thatReturnsTrue)
        },
        persist: function() {
            this.isPersistent = a.thatReturnsTrue
        },
        isPersistent: a.thatReturnsFalse,
        destructor: function() {
            var e = this.constructor.Interface;
            for (var t in e) this[t] = null;
            for (var n = 0; n < s.length; n++) this[s[n]] = null
        }
    }), r.Interface = l, r.augmentClass = function(e, t) {
        var n = this,
            r = function() {};
        r.prototype = n.prototype;
        var a = new r;
        o(a, e.prototype), e.prototype = a, e.prototype.constructor = e, e.Interface = o({}, n.Interface, t), e.augmentClass = n.augmentClass, i.addPoolingTo(e, i.fourArgumentPooler)
    }, i.addPoolingTo(r, i.fourArgumentPooler), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(293),
        i = {
            data: null
        };
    o.augmentClass(r, i), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.nodeName && e.nodeName.toLowerCase();
        return "select" === t || "input" === t && "file" === e.type
    }

    function o(e) {
        var t = C.getPooled(L.change, D, e, E(e));
        x.accumulateTwoPhaseDispatches(t), _.batchedUpdates(i, t)
    }

    function i(e) {
        b.enqueueEvents(e), b.processEventQueue(!1)
    }

    function a(e, t) {
        N = e, D = t, N.attachEvent("onchange", o)
    }

    function s() {
        N && (N.detachEvent("onchange", o), N = null, D = null)
    }

    function l(e, t) {
        if (e === M.topChange) return t
    }

    function u(e, t, n) {
        e === M.topFocus ? (s(), a(t, n)) : e === M.topBlur && s()
    }

    function c(e, t) {
        N = e, D = t, I = e.value, O = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(N, "value", F), N.attachEvent ? N.attachEvent("onpropertychange", p) : N.addEventListener("propertychange", p, !1)
    }

    function d() {
        N && (delete N.value, N.detachEvent ? N.detachEvent("onpropertychange", p) : N.removeEventListener("propertychange", p, !1), N = null, D = null, I = null, O = null)
    }

    function p(e) {
        if ("value" === e.propertyName) {
            var t = e.srcElement.value;
            t !== I && (I = t, o(e))
        }
    }

    function f(e, t) {
        if (e === M.topInput) return t
    }

    function h(e, t, n) {
        e === M.topFocus ? (d(), c(t, n)) : e === M.topBlur && d()
    }

    function m(e, t) {
        if ((e === M.topSelectionChange || e === M.topKeyUp || e === M.topKeyDown) && N && N.value !== I) return I = N.value, D
    }

    function g(e) {
        return e.nodeName && "input" === e.nodeName.toLowerCase() && ("checkbox" === e.type || "radio" === e.type)
    }

    function v(e, t) {
        if (e === M.topClick) return t
    }
    var y = n(281),
        b = n(283),
        x = n(282),
        w = n(289),
        k = n(276),
        _ = n(296),
        C = n(293),
        E = n(304),
        S = n(305),
        T = n(306),
        A = n(119),
        M = y.topLevelTypes,
        L = {
            change: {
                phasedRegistrationNames: {
                    bubbled: A({
                        onChange: null
                    }),
                    captured: A({
                        onChangeCapture: null
                    })
                },
                dependencies: [M.topBlur, M.topChange, M.topClick, M.topFocus, M.topInput, M.topKeyDown, M.topKeyUp, M.topSelectionChange]
            }
        },
        N = null,
        D = null,
        I = null,
        O = null,
        P = !1;
    w.canUseDOM && (P = S("change") && (!("documentMode" in document) || document.documentMode > 8));
    var R = !1;
    w.canUseDOM && (R = S("input") && (!("documentMode" in document) || document.documentMode > 11));
    var F = {
            get: function() {
                return O.get.call(this)
            },
            set: function(e) {
                I = "" + e, O.set.call(this, e)
            }
        },
        z = {
            eventTypes: L,
            extractEvents: function(e, t, n, o) {
                var i, a, s = t ? k.getNodeFromInstance(t) : window;
                if (r(s) ? P ? i = l : a = u : T(s) ? R ? i = f : (i = m, a = h) : g(s) && (i = v), i) {
                    var c = i(e, t);
                    if (c) {
                        var d = C.getPooled(L.change, c, n, o);
                        return d.type = "change", x.accumulateTwoPhaseDispatches(d), d
                    }
                }
                a && a(e, s, t)
            }
        };
    e.exports = z
}, function(e, t, n) {
    "use strict";

    function r() {
        T.ReactReconcileTransaction && w ? void 0 : c("123")
    }

    function o() {
        this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = p.getPooled(), this.reconcileTransaction = T.ReactReconcileTransaction.getPooled(!0)
    }

    function i(e, t, n, o, i, a) {
        r(), w.batchedUpdates(e, t, n, o, i, a)
    }

    function a(e, t) {
        return e._mountOrder - t._mountOrder
    }

    function s(e) {
        var t = e.dirtyComponentsLength;
        t !== v.length ? c("124", t, v.length) : void 0, v.sort(a), y++;
        for (var n = 0; n < t; n++) {
            var r = v[n],
                o = r._pendingCallbacks;
            r._pendingCallbacks = null;
            var i;
            if (h.logTopLevelRenders) {
                var s = r;
                r._currentElement.props === r._renderedComponent._currentElement && (s = r._renderedComponent), i = "React update: " + s.getName(), console.time(i)
            }
            if (m.performUpdateIfNecessary(r, e.reconcileTransaction, y), i && console.timeEnd(i), o)
                for (var l = 0; l < o.length; l++) e.callbackQueue.enqueue(o[l], r.getPublicInstance())
        }
    }

    function l(e) {
        return r(), w.isBatchingUpdates ? (v.push(e), void(null == e._updateBatchNumber && (e._updateBatchNumber = y + 1))) : void w.batchedUpdates(l, e)
    }

    function u(e, t) {
        w.isBatchingUpdates ? void 0 : c("125"), b.enqueue(e, t), x = !0
    }
    var c = n(101),
        d = n(98),
        p = n(297),
        f = n(100),
        h = n(298),
        m = n(299),
        g = n(303),
        v = (n(102), []),
        y = 0,
        b = p.getPooled(),
        x = !1,
        w = null,
        k = {
            initialize: function() {
                this.dirtyComponentsLength = v.length
            },
            close: function() {
                this.dirtyComponentsLength !== v.length ? (v.splice(0, this.dirtyComponentsLength), E()) : v.length = 0
            }
        },
        _ = {
            initialize: function() {
                this.callbackQueue.reset()
            },
            close: function() {
                this.callbackQueue.notifyAll()
            }
        },
        C = [k, _];
    d(o.prototype, g.Mixin, {
        getTransactionWrappers: function() {
            return C
        },
        destructor: function() {
            this.dirtyComponentsLength = null, p.release(this.callbackQueue), this.callbackQueue = null, T.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
        },
        perform: function(e, t, n) {
            return g.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n)
        }
    }), f.addPoolingTo(o);
    var E = function() {
            for (; v.length || x;) {
                if (v.length) {
                    var e = o.getPooled();
                    e.perform(s, null, e), o.release(e)
                }
                if (x) {
                    x = !1;
                    var t = b;
                    b = p.getPooled(), t.notifyAll(), p.release(t)
                }
            }
        },
        S = {
            injectReconcileTransaction: function(e) {
                e ? void 0 : c("126"), T.ReactReconcileTransaction = e
            },
            injectBatchingStrategy: function(e) {
                e ? void 0 : c("127"), "function" != typeof e.batchedUpdates ? c("128") : void 0, "boolean" != typeof e.isBatchingUpdates ? c("129") : void 0, w = e
            }
        },
        T = {
            ReactReconcileTransaction: null,
            batchedUpdates: i,
            enqueueUpdate: l,
            flushBatchedUpdates: E,
            injection: S,
            asap: u
        };
    e.exports = T
}, function(e, t, n) {
    "use strict";

    function r() {
        this._callbacks = null, this._contexts = null
    }
    var o = n(101),
        i = n(98),
        a = n(100);
    n(102);
    i(r.prototype, {
        enqueue: function(e, t) {
            this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(e), this._contexts.push(t)
        },
        notifyAll: function() {
            var e = this._callbacks,
                t = this._contexts;
            if (e) {
                e.length !== t.length ? o("24") : void 0, this._callbacks = null, this._contexts = null;
                for (var n = 0; n < e.length; n++) e[n].call(t[n]);
                e.length = 0, t.length = 0
            }
        },
        checkpoint: function() {
            return this._callbacks ? this._callbacks.length : 0
        },
        rollback: function(e) {
            this._callbacks && (this._callbacks.length = e, this._contexts.length = e)
        },
        reset: function() {
            this._callbacks = null, this._contexts = null
        },
        destructor: function() {
            this.reset()
        }
    }), a.addPoolingTo(r), e.exports = r
}, function(e, t) {
    "use strict";
    var n = {
        logTopLevelRenders: !1
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r() {
        o.attachRefs(this, this._currentElement)
    }
    var o = n(300),
        i = (n(302), n(105), {
            mountComponent: function(e, t, n, o, i, a) {
                var s = e.mountComponent(t, n, o, i, a);
                return e._currentElement && null != e._currentElement.ref && t.getReactMountReady().enqueue(r, e), s
            },
            getHostNode: function(e) {
                return e.getHostNode()
            },
            unmountComponent: function(e, t) {
                o.detachRefs(e, e._currentElement), e.unmountComponent(t)
            },
            receiveComponent: function(e, t, n, i) {
                var a = e._currentElement;
                if (t !== a || i !== e._context) {
                    var s = o.shouldUpdateRefs(a, t);
                    s && o.detachRefs(e, a), e.receiveComponent(t, n, i), s && e._currentElement && null != e._currentElement.ref && n.getReactMountReady().enqueue(r, e)
                }
            },
            performUpdateIfNecessary: function(e, t, n) {
                e._updateBatchNumber === n && e.performUpdateIfNecessary(t)
            }
        });
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        "function" == typeof e ? e(t.getPublicInstance()) : i.addComponentAsRefTo(t, e, n)
    }

    function o(e, t, n) {
        "function" == typeof e ? e(null) : i.removeComponentAsRefFrom(t, e, n)
    }
    var i = n(301),
        a = {};
    a.attachRefs = function(e, t) {
        if (null !== t && t !== !1) {
            var n = t.ref;
            null != n && r(n, e, t._owner)
        }
    }, a.shouldUpdateRefs = function(e, t) {
        var n = null === e || e === !1,
            r = null === t || t === !1;
        return n || r || t.ref !== e.ref || "string" == typeof t.ref && t._owner !== e._owner
    }, a.detachRefs = function(e, t) {
        if (null !== t && t !== !1) {
            var n = t.ref;
            null != n && o(n, e, t._owner)
        }
    }, e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = n(101),
        o = (n(102), {
            isValidOwner: function(e) {
                return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef)
            },
            addComponentAsRefTo: function(e, t, n) {
                o.isValidOwner(n) ? void 0 : r("119"), n.attachRef(t, e)
            },
            removeComponentAsRefFrom: function(e, t, n) {
                o.isValidOwner(n) ? void 0 : r("120");
                var i = n.getPublicInstance();
                i && i.refs[t] === e.getPublicInstance() && n.detachRef(t)
            }
        });
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = null;
    e.exports = {
        debugTool: r
    }
}, function(e, t, n) {
    "use strict";
    var r = n(101),
        o = (n(102), {
            reinitializeTransaction: function() {
                this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
            },
            _isInTransaction: !1,
            getTransactionWrappers: null,
            isInTransaction: function() {
                return !!this._isInTransaction
            },
            perform: function(e, t, n, o, i, a, s, l) {
                this.isInTransaction() ? r("27") : void 0;
                var u, c;
                try {
                    this._isInTransaction = !0, u = !0, this.initializeAll(0), c = e.call(t, n, o, i, a, s, l), u = !1
                } finally {
                    try {
                        if (u) try {
                            this.closeAll(0)
                        } catch (d) {} else this.closeAll(0)
                    } finally {
                        this._isInTransaction = !1
                    }
                }
                return c
            },
            initializeAll: function(e) {
                for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                    var r = t[n];
                    try {
                        this.wrapperInitData[n] = i.OBSERVED_ERROR, this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null
                    } finally {
                        if (this.wrapperInitData[n] === i.OBSERVED_ERROR) try {
                            this.initializeAll(n + 1)
                        } catch (o) {}
                    }
                }
            },
            closeAll: function(e) {
                this.isInTransaction() ? void 0 : r("28");
                for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                    var o, a = t[n],
                        s = this.wrapperInitData[n];
                    try {
                        o = !0, s !== i.OBSERVED_ERROR && a.close && a.close.call(this, s), o = !1
                    } finally {
                        if (o) try {
                            this.closeAll(n + 1)
                        } catch (l) {}
                    }
                }
                this.wrapperInitData.length = 0
            }
        }),
        i = {
            Mixin: o,
            OBSERVED_ERROR: {}
        };
    e.exports = i
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = e.target || e.srcElement || window;
        return t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @param {?boolean} capture Check if the capture phase is supported.
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function r(e, t) {
        if (!i.canUseDOM || t && !("addEventListener" in document)) return !1;
        var n = "on" + e,
            r = n in document;
        if (!r) {
            var a = document.createElement("div");
            a.setAttribute(n, "return;"), r = "function" == typeof a[n]
        }
        return !r && o && "wheel" === e && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r
    }
    var o, i = n(289);
    i.canUseDOM && (o = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), e.exports = r
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!r[e.type] : "textarea" === t
    }
    var r = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(119),
        o = [r({
            ResponderEventPlugin: null
        }), r({
            SimpleEventPlugin: null
        }), r({
            TapEventPlugin: null
        }), r({
            EnterLeaveEventPlugin: null
        }), r({
            ChangeEventPlugin: null
        }), r({
            SelectEventPlugin: null
        }), r({
            BeforeInputEventPlugin: null
        })];
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(281),
        o = n(282),
        i = n(276),
        a = n(309),
        s = n(119),
        l = r.topLevelTypes,
        u = {
            mouseEnter: {
                registrationName: s({
                    onMouseEnter: null
                }),
                dependencies: [l.topMouseOut, l.topMouseOver]
            },
            mouseLeave: {
                registrationName: s({
                    onMouseLeave: null
                }),
                dependencies: [l.topMouseOut, l.topMouseOver]
            }
        },
        c = {
            eventTypes: u,
            extractEvents: function(e, t, n, r) {
                if (e === l.topMouseOver && (n.relatedTarget || n.fromElement)) return null;
                if (e !== l.topMouseOut && e !== l.topMouseOver) return null;
                var s;
                if (r.window === r) s = r;
                else {
                    var c = r.ownerDocument;
                    s = c ? c.defaultView || c.parentWindow : window
                }
                var d, p;
                if (e === l.topMouseOut) {
                    d = t;
                    var f = n.relatedTarget || n.toElement;
                    p = f ? i.getClosestInstanceFromNode(f) : null
                } else d = null, p = t;
                if (d === p) return null;
                var h = null == d ? s : i.getNodeFromInstance(d),
                    m = null == p ? s : i.getNodeFromInstance(p),
                    g = a.getPooled(u.mouseLeave, d, n, r);
                g.type = "mouseleave", g.target = h, g.relatedTarget = m;
                var v = a.getPooled(u.mouseEnter, p, n, r);
                return v.type = "mouseenter", v.target = m, v.relatedTarget = h, o.accumulateEnterLeaveDispatches(g, v, d, p), [g, v]
            }
        };
    e.exports = c
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(310),
        i = n(311),
        a = n(312),
        s = {
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: a,
            button: function(e) {
                var t = e.button;
                return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0
            },
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            pageX: function(e) {
                return "pageX" in e ? e.pageX : e.clientX + i.currentScrollLeft
            },
            pageY: function(e) {
                return "pageY" in e ? e.pageY : e.clientY + i.currentScrollTop
            }
        };
    o.augmentClass(r, s), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(293),
        i = n(304),
        a = {
            view: function(e) {
                if (e.view) return e.view;
                var t = i(e);
                if (t.window === t) return t;
                var n = t.ownerDocument;
                return n ? n.defaultView || n.parentWindow : window
            },
            detail: function(e) {
                return e.detail || 0
            }
        };
    o.augmentClass(r, a), e.exports = r
}, function(e, t) {
    "use strict";
    var n = {
        currentScrollLeft: 0,
        currentScrollTop: 0,
        refreshScrollValues: function(e) {
            n.currentScrollLeft = e.x, n.currentScrollTop = e.y
        }
    };
    e.exports = n
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = this,
            n = t.nativeEvent;
        if (n.getModifierState) return n.getModifierState(e);
        var r = o[e];
        return !!r && !!n[r]
    }

    function r(e) {
        return n
    }
    var o = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(277),
        o = r.injection.MUST_USE_PROPERTY,
        i = r.injection.HAS_BOOLEAN_VALUE,
        a = r.injection.HAS_NUMERIC_VALUE,
        s = r.injection.HAS_POSITIVE_NUMERIC_VALUE,
        l = r.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
        u = {
            isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + r.ATTRIBUTE_NAME_CHAR + "]*$")),
            Properties: {
                accept: 0,
                acceptCharset: 0,
                accessKey: 0,
                action: 0,
                allowFullScreen: i,
                allowTransparency: 0,
                alt: 0,
                async: i,
                autoComplete: 0,
                autoPlay: i,
                capture: i,
                cellPadding: 0,
                cellSpacing: 0,
                charSet: 0,
                challenge: 0,
                checked: o | i,
                cite: 0,
                classID: 0,
                className: 0,
                cols: s,
                colSpan: 0,
                content: 0,
                contentEditable: 0,
                contextMenu: 0,
                controls: i,
                coords: 0,
                crossOrigin: 0,
                data: 0,
                dateTime: 0,
                "default": i,
                defer: i,
                dir: 0,
                disabled: i,
                download: l,
                draggable: 0,
                encType: 0,
                form: 0,
                formAction: 0,
                formEncType: 0,
                formMethod: 0,
                formNoValidate: i,
                formTarget: 0,
                frameBorder: 0,
                headers: 0,
                height: 0,
                hidden: i,
                high: 0,
                href: 0,
                hrefLang: 0,
                htmlFor: 0,
                httpEquiv: 0,
                icon: 0,
                id: 0,
                inputMode: 0,
                integrity: 0,
                is: 0,
                keyParams: 0,
                keyType: 0,
                kind: 0,
                label: 0,
                lang: 0,
                list: 0,
                loop: i,
                low: 0,
                manifest: 0,
                marginHeight: 0,
                marginWidth: 0,
                max: 0,
                maxLength: 0,
                media: 0,
                mediaGroup: 0,
                method: 0,
                min: 0,
                minLength: 0,
                multiple: o | i,
                muted: o | i,
                name: 0,
                nonce: 0,
                noValidate: i,
                open: i,
                optimum: 0,
                pattern: 0,
                placeholder: 0,
                poster: 0,
                preload: 0,
                profile: 0,
                radioGroup: 0,
                readOnly: i,
                referrerPolicy: 0,
                rel: 0,
                required: i,
                reversed: i,
                role: 0,
                rows: s,
                rowSpan: a,
                sandbox: 0,
                scope: 0,
                scoped: i,
                scrolling: 0,
                seamless: i,
                selected: o | i,
                shape: 0,
                size: s,
                sizes: 0,
                span: s,
                spellCheck: 0,
                src: 0,
                srcDoc: 0,
                srcLang: 0,
                srcSet: 0,
                start: a,
                step: 0,
                style: 0,
                summary: 0,
                tabIndex: 0,
                target: 0,
                title: 0,
                type: 0,
                useMap: 0,
                value: 0,
                width: 0,
                wmode: 0,
                wrap: 0,
                about: 0,
                datatype: 0,
                inlist: 0,
                prefix: 0,
                property: 0,
                resource: 0,
                "typeof": 0,
                vocab: 0,
                autoCapitalize: 0,
                autoCorrect: 0,
                autoSave: 0,
                color: 0,
                itemProp: 0,
                itemScope: i,
                itemType: 0,
                itemID: 0,
                itemRef: 0,
                results: 0,
                security: 0,
                unselectable: 0
            },
            DOMAttributeNames: {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv"
            },
            DOMPropertyNames: {}
        };
    e.exports = u
}, function(e, t, n) {
    "use strict";
    var r = n(315),
        o = n(327),
        i = {
            processChildrenUpdates: o.dangerouslyProcessChildrenUpdates,
            replaceNodeWithMarkup: r.dangerouslyReplaceNodeWithMarkup
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return Array.isArray(t) && (t = t[1]), t ? t.nextSibling : e.firstChild
    }

    function o(e, t, n) {
        c.insertTreeBefore(e, t, n)
    }

    function i(e, t, n) {
        Array.isArray(t) ? s(e, t[0], t[1], n) : g(e, t, n)
    }

    function a(e, t) {
        if (Array.isArray(t)) {
            var n = t[1];
            t = t[0], l(e, t, n), e.removeChild(n)
        }
        e.removeChild(t)
    }

    function s(e, t, n, r) {
        for (var o = t;;) {
            var i = o.nextSibling;
            if (g(e, o, r), o === n) break;
            o = i
        }
    }

    function l(e, t, n) {
        for (;;) {
            var r = t.nextSibling;
            if (r === n) break;
            e.removeChild(r)
        }
    }

    function u(e, t, n) {
        var r = e.parentNode,
            o = e.nextSibling;
        o === t ? n && g(r, document.createTextNode(n), o) : n ? (m(o, n), l(r, o, t)) : l(r, e, t)
    }
    var c = n(316),
        d = n(322),
        p = n(326),
        f = (n(276), n(302), n(319)),
        h = n(318),
        m = n(320),
        g = f(function(e, t, n) {
            e.insertBefore(t, n)
        }),
        v = d.dangerouslyReplaceNodeWithMarkup,
        y = {
            dangerouslyReplaceNodeWithMarkup: v,
            replaceDelimitedText: u,
            processUpdates: function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    switch (s.type) {
                        case p.INSERT_MARKUP:
                            o(e, s.content, r(e, s.afterNode));
                            break;
                        case p.MOVE_EXISTING:
                            i(e, s.fromNode, r(e, s.afterNode));
                            break;
                        case p.SET_MARKUP:
                            h(e, s.content);
                            break;
                        case p.TEXT_CONTENT:
                            m(e, s.content);
                            break;
                        case p.REMOVE_NODE:
                            a(e, s.fromNode)
                    }
                }
            }
        };
    e.exports = y
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (g) {
            var t = e.node,
                n = e.children;
            if (n.length)
                for (var r = 0; r < n.length; r++) v(t, n[r], null);
            else null != e.html ? d(t, e.html) : null != e.text && f(t, e.text)
        }
    }

    function o(e, t) {
        e.parentNode.replaceChild(t.node, e), r(t)
    }

    function i(e, t) {
        g ? e.children.push(t) : e.node.appendChild(t.node)
    }

    function a(e, t) {
        g ? e.html = t : d(e.node, t)
    }

    function s(e, t) {
        g ? e.text = t : f(e.node, t)
    }

    function l() {
        return this.node.nodeName
    }

    function u(e) {
        return {
            node: e,
            children: [],
            html: null,
            text: null,
            toString: l
        }
    }
    var c = n(317),
        d = n(318),
        p = n(319),
        f = n(320),
        h = 1,
        m = 11,
        g = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent),
        v = p(function(e, t, n) {
            t.node.nodeType === m || t.node.nodeType === h && "object" === t.node.nodeName.toLowerCase() && (null == t.node.namespaceURI || t.node.namespaceURI === c.html) ? (r(t), e.insertBefore(t.node, n)) : (e.insertBefore(t.node, n), r(t))
        });
    u.insertTreeBefore = v, u.replaceChildWithTree = o, u.queueChild = i, u.queueHTML = a, u.queueText = s, e.exports = u
}, function(e, t) {
    "use strict";
    var n = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r, o = n(289),
        i = n(317),
        a = /^[ \r\n\t\f]/,
        s = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
        l = n(319),
        u = l(function(e, t) {
            if (e.namespaceURI !== i.svg || "innerHTML" in e) e.innerHTML = t;
            else {
                r = r || document.createElement("div"), r.innerHTML = "<svg>" + t + "</svg>";
                for (var n = r.firstChild.childNodes, o = 0; o < n.length; o++) e.appendChild(n[o])
            }
        });
    if (o.canUseDOM) {
        var c = document.createElement("div");
        c.innerHTML = " ", "" === c.innerHTML && (u = function(e, t) {
            if (e.parentNode && e.parentNode.replaceChild(e, e), a.test(t) || "<" === t[0] && s.test(t)) {
                e.innerHTML = String.fromCharCode(65279) + t;
                var n = e.firstChild;
                1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1)
            } else e.innerHTML = t
        }), c = null
    }
    e.exports = u
}, function(e, t) {
    "use strict";
    var n = function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o)
            })
        } : e
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(289),
        o = n(321),
        i = n(318),
        a = function(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
            }
            e.textContent = t
        };
    r.canUseDOM && ("textContent" in document.documentElement || (a = function(e, t) {
        i(e, o(t))
    })), e.exports = a
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = "" + e,
            n = o.exec(t);
        if (!n) return t;
        var r, i = "",
            a = 0,
            s = 0;
        for (a = n.index; a < t.length; a++) {
            switch (t.charCodeAt(a)) {
                case 34:
                    r = "&quot;";
                    break;
                case 38:
                    r = "&amp;";
                    break;
                case 39:
                    r = "&#x27;";
                    break;
                case 60:
                    r = "&lt;";
                    break;
                case 62:
                    r = "&gt;";
                    break;
                default:
                    continue
            }
            s !== a && (i += t.substring(s, a)), s = a + 1, i += r
        }
        return s !== a ? i + t.substring(s, a) : i
    }

    function r(e) {
        return "boolean" == typeof e || "number" == typeof e ? "" + e : n(e)
    }
    var o = /["'&<>]/;
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(101),
        o = n(316),
        i = n(289),
        a = n(323),
        s = n(106),
        l = (n(102), {
            dangerouslyReplaceNodeWithMarkup: function(e, t) {
                if (i.canUseDOM ? void 0 : r("56"), t ? void 0 : r("57"), "HTML" === e.nodeName ? r("58") : void 0, "string" == typeof t) {
                    var n = a(t, s)[0];
                    e.parentNode.replaceChild(n, e)
                } else o.replaceChildWithTree(e, t)
            }
        });
    e.exports = l
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.match(c);
        return t && t[1].toLowerCase()
    }

    function o(e, t) {
        var n = u;
        u ? void 0 : l(!1);
        var o = r(e),
            i = o && s(o);
        if (i) {
            n.innerHTML = i[1] + e + i[2];
            for (var c = i[0]; c--;) n = n.lastChild
        } else n.innerHTML = e;
        var d = n.getElementsByTagName("script");
        d.length && (t ? void 0 : l(!1), a(d).forEach(t));
        for (var p = Array.from(n.childNodes); n.lastChild;) n.removeChild(n.lastChild);
        return p
    }
    var i = n(289),
        a = n(324),
        s = n(325),
        l = n(102),
        u = i.canUseDOM ? document.createElement("div") : null,
        c = /^\s*<(\w+)/;
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.length;
        if (Array.isArray(e) || "object" != typeof e && "function" != typeof e ? a(!1) : void 0, "number" != typeof t ? a(!1) : void 0, 0 === t || t - 1 in e ? void 0 : a(!1), "function" == typeof e.callee ? a(!1) : void 0, e.hasOwnProperty) try {
            return Array.prototype.slice.call(e)
        } catch (n) {}
        for (var r = Array(t), o = 0; o < t; o++) r[o] = e[o];
        return r
    }

    function o(e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
    }

    function i(e) {
        return o(e) ? Array.isArray(e) ? e.slice() : r(e) : [e]
    }
    var a = n(102);
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return a ? void 0 : i(!1), p.hasOwnProperty(e) || (e = "*"), s.hasOwnProperty(e) || ("*" === e ? a.innerHTML = "<link />" : a.innerHTML = "<" + e + "></" + e + ">", s[e] = !a.firstChild), s[e] ? p[e] : null
    }
    var o = n(289),
        i = n(102),
        a = o.canUseDOM ? document.createElement("div") : null,
        s = {},
        l = [1, '<select multiple="true">', "</select>"],
        u = [1, "<table>", "</table>"],
        c = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        d = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        p = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: l,
            option: l,
            caption: u,
            colgroup: u,
            tbody: u,
            tfoot: u,
            thead: u,
            td: c,
            th: c
        },
        f = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    f.forEach(function(e) {
        p[e] = d, s[e] = !0
    }), e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(117),
        o = r({
            INSERT_MARKUP: null,
            MOVE_EXISTING: null,
            REMOVE_NODE: null,
            SET_MARKUP: null,
            TEXT_CONTENT: null
        });
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(315),
        o = n(276),
        i = {
            dangerouslyProcessChildrenUpdates: function(e, t) {
                var n = o.getNodeFromInstance(e);
                r.processUpdates(n, t)
            }
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e) {
            var t = e._currentElement._owner || null;
            if (t) {
                var n = t.getName();
                if (n) return " This DOM node was rendered by `" + n + "`."
            }
        }
        return ""
    }

    function o(e, t) {
        t && (X[e._tag] && (null != t.children || null != t.dangerouslySetInnerHTML ? m("137", e._tag, e._currentElement._owner ? " Check the render method of " + e._currentElement._owner.getName() + "." : "") : void 0), null != t.dangerouslySetInnerHTML && (null != t.children ? m("60") : void 0, "object" == typeof t.dangerouslySetInnerHTML && V in t.dangerouslySetInnerHTML ? void 0 : m("61")), null != t.style && "object" != typeof t.style ? m("62", r(e)) : void 0)
    }

    function i(e, t, n, r) {
        if (!(r instanceof P)) {
            var o = e._hostContainerInfo,
                i = o._node && o._node.nodeType === G,
                s = i ? o._node : o._ownerDocument;
            q(t, s), r.getReactMountReady().enqueue(a, {
                inst: e,
                registrationName: t,
                listener: n
            })
        }
    }

    function a() {
        var e = this;
        C.putListener(e.inst, e.registrationName, e.listener)
    }

    function s() {
        var e = this;
        L.postMountWrapper(e)
    }

    function l() {
        var e = this;
        I.postMountWrapper(e)
    }

    function u() {
        var e = this;
        N.postMountWrapper(e)
    }

    function c() {
        var e = this;
        e._rootNodeID ? void 0 : m("63");
        var t = B(e);
        switch (t ? void 0 : m("64"), e._tag) {
            case "iframe":
            case "object":
                e._wrapperState.listeners = [S.trapBubbledEvent(_.topLevelTypes.topLoad, "load", t)];
                break;
            case "video":
            case "audio":
                e._wrapperState.listeners = [];
                for (var n in Y) Y.hasOwnProperty(n) && e._wrapperState.listeners.push(S.trapBubbledEvent(_.topLevelTypes[n], Y[n], t));
                break;
            case "source":
                e._wrapperState.listeners = [S.trapBubbledEvent(_.topLevelTypes.topError, "error", t)];
                break;
            case "img":
                e._wrapperState.listeners = [S.trapBubbledEvent(_.topLevelTypes.topError, "error", t), S.trapBubbledEvent(_.topLevelTypes.topLoad, "load", t)];
                break;
            case "form":
                e._wrapperState.listeners = [S.trapBubbledEvent(_.topLevelTypes.topReset, "reset", t), S.trapBubbledEvent(_.topLevelTypes.topSubmit, "submit", t)];
                break;
            case "input":
            case "select":
            case "textarea":
                e._wrapperState.listeners = [S.trapBubbledEvent(_.topLevelTypes.topInvalid, "invalid", t)]
        }
    }

    function d() {
        D.postUpdateWrapper(this)
    }

    function p(e) {
        ee.call(J, e) || (Q.test(e) ? void 0 : m("65", e), J[e] = !0)
    }

    function f(e, t) {
        return e.indexOf("-") >= 0 || null != t.is
    }

    function h(e) {
        var t = e.type;
        p(t), this._currentElement = e, this._tag = t.toLowerCase(), this._namespaceURI = null, this._renderedChildren = null, this._previousStyle = null, this._previousStyleCopy = null, this._hostNode = null, this._hostParent = null, this._rootNodeID = 0, this._domID = 0, this._hostContainerInfo = null, this._wrapperState = null, this._topLevelWrapper = null, this._flags = 0
    }
    var m = n(101),
        g = n(98),
        v = n(329),
        y = n(331),
        b = n(316),
        x = n(317),
        w = n(277),
        k = n(339),
        _ = n(281),
        C = n(283),
        E = n(284),
        S = n(341),
        T = n(344),
        A = n(278),
        M = n(276),
        L = n(346),
        N = n(348),
        D = n(349),
        I = n(350),
        O = (n(302), n(351)),
        P = n(366),
        R = (n(106), n(321)),
        F = (n(102), n(305), n(119)),
        z = (n(361), n(369), n(105), A),
        W = C.deleteListener,
        B = M.getNodeFromInstance,
        q = S.listenTo,
        H = E.registrationNameModules,
        U = {
            string: !0,
            number: !0
        },
        j = F({
            style: null
        }),
        V = F({
            __html: null
        }),
        K = {
            children: null,
            dangerouslySetInnerHTML: null,
            suppressContentEditableWarning: null
        },
        G = 11,
        Y = {
            topAbort: "abort",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTimeUpdate: "timeupdate",
            topVolumeChange: "volumechange",
            topWaiting: "waiting"
        },
        $ = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        },
        Z = {
            listing: !0,
            pre: !0,
            textarea: !0
        },
        X = g({
            menuitem: !0
        }, $),
        Q = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        J = {},
        ee = {}.hasOwnProperty,
        te = 1;
    h.displayName = "ReactDOMComponent", h.Mixin = {
        mountComponent: function(e, t, n, r) {
            this._rootNodeID = te++, this._domID = n._idCounter++, this._hostParent = t, this._hostContainerInfo = n;
            var i = this._currentElement.props;
            switch (this._tag) {
                case "audio":
                case "form":
                case "iframe":
                case "img":
                case "link":
                case "object":
                case "source":
                case "video":
                    this._wrapperState = {
                        listeners: null
                    }, e.getReactMountReady().enqueue(c, this);
                    break;
                case "button":
                    i = T.getHostProps(this, i, t);
                    break;
                case "input":
                    L.mountWrapper(this, i, t), i = L.getHostProps(this, i), e.getReactMountReady().enqueue(c, this);
                    break;
                case "option":
                    N.mountWrapper(this, i, t), i = N.getHostProps(this, i);
                    break;
                case "select":
                    D.mountWrapper(this, i, t), i = D.getHostProps(this, i), e.getReactMountReady().enqueue(c, this);
                    break;
                case "textarea":
                    I.mountWrapper(this, i, t), i = I.getHostProps(this, i), e.getReactMountReady().enqueue(c, this)
            }
            o(this, i);
            var a, d;
            null != t ? (a = t._namespaceURI, d = t._tag) : n._tag && (a = n._namespaceURI, d = n._tag), (null == a || a === x.svg && "foreignobject" === d) && (a = x.html), a === x.html && ("svg" === this._tag ? a = x.svg : "math" === this._tag && (a = x.mathml)), this._namespaceURI = a;
            var p;
            if (e.useCreateElement) {
                var f, h = n._ownerDocument;
                if (a === x.html)
                    if ("script" === this._tag) {
                        var m = h.createElement("div"),
                            g = this._currentElement.type;
                        m.innerHTML = "<" + g + "></" + g + ">", f = m.removeChild(m.firstChild)
                    } else f = i.is ? h.createElement(this._currentElement.type, i.is) : h.createElement(this._currentElement.type);
                else f = h.createElementNS(a, this._currentElement.type);
                M.precacheNode(this, f), this._flags |= z.hasCachedChildNodes, this._hostParent || k.setAttributeForRoot(f), this._updateDOMProperties(null, i, e);
                var y = b(f);
                this._createInitialChildren(e, i, r, y), p = y
            } else {
                var w = this._createOpenTagMarkupAndPutListeners(e, i),
                    _ = this._createContentMarkup(e, i, r);
                p = !_ && $[this._tag] ? w + "/>" : w + ">" + _ + "</" + this._currentElement.type + ">"
            }
            switch (this._tag) {
                case "input":
                    e.getReactMountReady().enqueue(s, this), i.autoFocus && e.getReactMountReady().enqueue(v.focusDOMComponent, this);
                    break;
                case "textarea":
                    e.getReactMountReady().enqueue(l, this), i.autoFocus && e.getReactMountReady().enqueue(v.focusDOMComponent, this);
                    break;
                case "select":
                    i.autoFocus && e.getReactMountReady().enqueue(v.focusDOMComponent, this);
                    break;
                case "button":
                    i.autoFocus && e.getReactMountReady().enqueue(v.focusDOMComponent, this);
                    break;
                case "option":
                    e.getReactMountReady().enqueue(u, this)
            }
            return p
        },
        _createOpenTagMarkupAndPutListeners: function(e, t) {
            var n = "<" + this._currentElement.type;
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var o = t[r];
                    if (null != o)
                        if (H.hasOwnProperty(r)) o && i(this, r, o, e);
                        else {
                            r === j && (o && (o = this._previousStyleCopy = g({}, t.style)), o = y.createMarkupForStyles(o, this));
                            var a = null;
                            null != this._tag && f(this._tag, t) ? K.hasOwnProperty(r) || (a = k.createMarkupForCustomAttribute(r, o)) : a = k.createMarkupForProperty(r, o), a && (n += " " + a)
                        }
                }
            return e.renderToStaticMarkup ? n : (this._hostParent || (n += " " + k.createMarkupForRoot()), n += " " + k.createMarkupForID(this._domID))
        },
        _createContentMarkup: function(e, t, n) {
            var r = "",
                o = t.dangerouslySetInnerHTML;
            if (null != o) null != o.__html && (r = o.__html);
            else {
                var i = U[typeof t.children] ? t.children : null,
                    a = null != i ? null : t.children;
                if (null != i) r = R(i);
                else if (null != a) {
                    var s = this.mountChildren(a, e, n);
                    r = s.join("")
                }
            }
            return Z[this._tag] && "\n" === r.charAt(0) ? "\n" + r : r
        },
        _createInitialChildren: function(e, t, n, r) {
            var o = t.dangerouslySetInnerHTML;
            if (null != o) null != o.__html && b.queueHTML(r, o.__html);
            else {
                var i = U[typeof t.children] ? t.children : null,
                    a = null != i ? null : t.children;
                if (null != i) b.queueText(r, i);
                else if (null != a)
                    for (var s = this.mountChildren(a, e, n), l = 0; l < s.length; l++) b.queueChild(r, s[l])
            }
        },
        receiveComponent: function(e, t, n) {
            var r = this._currentElement;
            this._currentElement = e, this.updateComponent(t, r, e, n)
        },
        updateComponent: function(e, t, n, r) {
            var i = t.props,
                a = this._currentElement.props;
            switch (this._tag) {
                case "button":
                    i = T.getHostProps(this, i), a = T.getHostProps(this, a);
                    break;
                case "input":
                    i = L.getHostProps(this, i), a = L.getHostProps(this, a);
                    break;
                case "option":
                    i = N.getHostProps(this, i), a = N.getHostProps(this, a);
                    break;
                case "select":
                    i = D.getHostProps(this, i), a = D.getHostProps(this, a);
                    break;
                case "textarea":
                    i = I.getHostProps(this, i), a = I.getHostProps(this, a)
            }
            switch (o(this, a), this._updateDOMProperties(i, a, e), this._updateDOMChildren(i, a, e, r), this._tag) {
                case "input":
                    L.updateWrapper(this);
                    break;
                case "textarea":
                    I.updateWrapper(this);
                    break;
                case "select":
                    e.getReactMountReady().enqueue(d, this)
            }
        },
        _updateDOMProperties: function(e, t, n) {
            var r, o, a;
            for (r in e)
                if (!t.hasOwnProperty(r) && e.hasOwnProperty(r) && null != e[r])
                    if (r === j) {
                        var s = this._previousStyleCopy;
                        for (o in s) s.hasOwnProperty(o) && (a = a || {}, a[o] = "");
                        this._previousStyleCopy = null
                    } else H.hasOwnProperty(r) ? e[r] && W(this, r) : f(this._tag, e) ? K.hasOwnProperty(r) || k.deleteValueForAttribute(B(this), r) : (w.properties[r] || w.isCustomAttribute(r)) && k.deleteValueForProperty(B(this), r);
            for (r in t) {
                var l = t[r],
                    u = r === j ? this._previousStyleCopy : null != e ? e[r] : void 0;
                if (t.hasOwnProperty(r) && l !== u && (null != l || null != u))
                    if (r === j)
                        if (l ? l = this._previousStyleCopy = g({}, l) : this._previousStyleCopy = null, u) {
                            for (o in u) !u.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (a = a || {}, a[o] = "");
                            for (o in l) l.hasOwnProperty(o) && u[o] !== l[o] && (a = a || {}, a[o] = l[o])
                        } else a = l;
                else if (H.hasOwnProperty(r)) l ? i(this, r, l, n) : u && W(this, r);
                else if (f(this._tag, t)) K.hasOwnProperty(r) || k.setValueForAttribute(B(this), r, l);
                else if (w.properties[r] || w.isCustomAttribute(r)) {
                    var c = B(this);
                    null != l ? k.setValueForProperty(c, r, l) : k.deleteValueForProperty(c, r)
                }
            }
            a && y.setValueForStyles(B(this), a, this)
        },
        _updateDOMChildren: function(e, t, n, r) {
            var o = U[typeof e.children] ? e.children : null,
                i = U[typeof t.children] ? t.children : null,
                a = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
                l = null != o ? null : e.children,
                u = null != i ? null : t.children,
                c = null != o || null != a,
                d = null != i || null != s;
            null != l && null == u ? this.updateChildren(null, n, r) : c && !d && this.updateTextContent(""), null != i ? o !== i && this.updateTextContent("" + i) : null != s ? a !== s && this.updateMarkup("" + s) : null != u && this.updateChildren(u, n, r)
        },
        getHostNode: function() {
            return B(this)
        },
        unmountComponent: function(e) {
            switch (this._tag) {
                case "audio":
                case "form":
                case "iframe":
                case "img":
                case "link":
                case "object":
                case "source":
                case "video":
                    var t = this._wrapperState.listeners;
                    if (t)
                        for (var n = 0; n < t.length; n++) t[n].remove();
                    break;
                case "html":
                case "head":
                case "body":
                    m("66", this._tag)
            }
            this.unmountChildren(e), M.uncacheNode(this), C.deleteAllListeners(this), this._rootNodeID = 0, this._domID = 0, this._wrapperState = null
        },
        getPublicInstance: function() {
            return B(this)
        }
    }, g(h.prototype, h.Mixin, O.Mixin), e.exports = h
}, function(e, t, n) {
    "use strict";
    var r = n(276),
        o = n(330),
        i = {
            focusDOMComponent: function() {
                o(r.getNodeFromInstance(this))
            }
        };
    e.exports = i
}, function(e, t) {
    "use strict";

    function n(e) {
        try {
            e.focus()
        } catch (t) {}
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(332),
        o = n(289),
        i = (n(302), n(333), n(335)),
        a = n(336),
        s = n(338),
        l = (n(105), s(function(e) {
            return a(e)
        })),
        u = !1,
        c = "cssFloat";
    if (o.canUseDOM) {
        var d = document.createElement("div").style;
        try {
            d.font = ""
        } catch (p) {
            u = !0
        }
        void 0 === document.documentElement.style.cssFloat && (c = "styleFloat")
    }
    var f = {
        createMarkupForStyles: function(e, t) {
            var n = "";
            for (var r in e)
                if (e.hasOwnProperty(r)) {
                    var o = e[r];
                    null != o && (n += l(r) + ":", n += i(r, o, t) + ";")
                }
            return n || null
        },
        setValueForStyles: function(e, t, n) {
            var o = e.style;
            for (var a in t)
                if (t.hasOwnProperty(a)) {
                    var s = i(a, t[a], n);
                    if ("float" !== a && "cssFloat" !== a || (a = c), s) o[a] = s;
                    else {
                        var l = u && r.shorthandPropertyExpansions[a];
                        if (l)
                            for (var d in l) o[d] = "";
                        else o[a] = ""
                    }
                }
        }
    };
    e.exports = f
}, function(e, t) {
    "use strict";

    function n(e, t) {
        return e + t.charAt(0).toUpperCase() + t.substring(1)
    }
    var r = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridColumn: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        o = ["Webkit", "ms", "Moz", "O"];
    Object.keys(r).forEach(function(e) {
        o.forEach(function(t) {
            r[n(t, e)] = r[e]
        })
    });
    var i = {
            background: {
                backgroundAttachment: !0,
                backgroundColor: !0,
                backgroundImage: !0,
                backgroundPositionX: !0,
                backgroundPositionY: !0,
                backgroundRepeat: !0
            },
            backgroundPosition: {
                backgroundPositionX: !0,
                backgroundPositionY: !0
            },
            border: {
                borderWidth: !0,
                borderStyle: !0,
                borderColor: !0
            },
            borderBottom: {
                borderBottomWidth: !0,
                borderBottomStyle: !0,
                borderBottomColor: !0
            },
            borderLeft: {
                borderLeftWidth: !0,
                borderLeftStyle: !0,
                borderLeftColor: !0
            },
            borderRight: {
                borderRightWidth: !0,
                borderRightStyle: !0,
                borderRightColor: !0
            },
            borderTop: {
                borderTopWidth: !0,
                borderTopStyle: !0,
                borderTopColor: !0
            },
            font: {
                fontStyle: !0,
                fontVariant: !0,
                fontWeight: !0,
                fontSize: !0,
                lineHeight: !0,
                fontFamily: !0
            },
            outline: {
                outlineWidth: !0,
                outlineStyle: !0,
                outlineColor: !0
            }
        },
        a = {
            isUnitlessNumber: r,
            shorthandPropertyExpansions: i
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return o(e.replace(i, "ms-"))
    }
    var o = n(334),
        i = /^-ms-/;
    e.exports = r
}, function(e, t) {
    "use strict";

    function n(e) {
        return e.replace(r, function(e, t) {
            return t.toUpperCase()
        })
    }
    var r = /-(.)/g;
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = null == t || "boolean" == typeof t || "" === t;
        if (r) return "";
        var o = isNaN(t);
        if (o || 0 === t || i.hasOwnProperty(e) && i[e]) return "" + t;
        if ("string" == typeof t) {
            t = t.trim()
        }
        return t + "px"
    }
    var o = n(332),
        i = (n(105), o.isUnitlessNumber);
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return o(e).replace(i, "-ms-")
    }
    var o = n(337),
        i = /^ms-/;
    e.exports = r
}, function(e, t) {
    "use strict";

    function n(e) {
        return e.replace(r, "-$1").toLowerCase()
    }
    var r = /([A-Z])/g;
    e.exports = n
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = {};
        return function(n) {
            return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n]
        }
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return !!u.hasOwnProperty(e) || !l.hasOwnProperty(e) && (s.test(e) ? (u[e] = !0, !0) : (l[e] = !0, !1))
    }

    function o(e, t) {
        return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && t === !1
    }
    var i = n(277),
        a = (n(276), n(302), n(340)),
        s = (n(105), new RegExp("^[" + i.ATTRIBUTE_NAME_START_CHAR + "][" + i.ATTRIBUTE_NAME_CHAR + "]*$")),
        l = {},
        u = {},
        c = {
            createMarkupForID: function(e) {
                return i.ID_ATTRIBUTE_NAME + "=" + a(e)
            },
            setAttributeForID: function(e, t) {
                e.setAttribute(i.ID_ATTRIBUTE_NAME, t)
            },
            createMarkupForRoot: function() {
                return i.ROOT_ATTRIBUTE_NAME + '=""'
            },
            setAttributeForRoot: function(e) {
                e.setAttribute(i.ROOT_ATTRIBUTE_NAME, "")
            },
            createMarkupForProperty: function(e, t) {
                var n = i.properties.hasOwnProperty(e) ? i.properties[e] : null;
                if (n) {
                    if (o(n, t)) return "";
                    var r = n.attributeName;
                    return n.hasBooleanValue || n.hasOverloadedBooleanValue && t === !0 ? r + '=""' : r + "=" + a(t)
                }
                return i.isCustomAttribute(e) ? null == t ? "" : e + "=" + a(t) : null
            },
            createMarkupForCustomAttribute: function(e, t) {
                return r(e) && null != t ? e + "=" + a(t) : ""
            },
            setValueForProperty: function(e, t, n) {
                var r = i.properties.hasOwnProperty(t) ? i.properties[t] : null;
                if (r) {
                    var a = r.mutationMethod;
                    if (a) a(e, n);
                    else {
                        if (o(r, n)) return void this.deleteValueForProperty(e, t);
                        if (r.mustUseProperty) e[r.propertyName] = n;
                        else {
                            var s = r.attributeName,
                                l = r.attributeNamespace;
                            l ? e.setAttributeNS(l, s, "" + n) : r.hasBooleanValue || r.hasOverloadedBooleanValue && n === !0 ? e.setAttribute(s, "") : e.setAttribute(s, "" + n)
                        }
                    }
                } else if (i.isCustomAttribute(t)) return void c.setValueForAttribute(e, t, n)
            },
            setValueForAttribute: function(e, t, n) {
                if (r(t)) {
                    null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)
                }
            },
            deleteValueForAttribute: function(e, t) {
                e.removeAttribute(t)
            },
            deleteValueForProperty: function(e, t) {
                var n = i.properties.hasOwnProperty(t) ? i.properties[t] : null;
                if (n) {
                    var r = n.mutationMethod;
                    if (r) r(e, void 0);
                    else if (n.mustUseProperty) {
                        var o = n.propertyName;
                        n.hasBooleanValue ? e[o] = !1 : e[o] = ""
                    } else e.removeAttribute(n.attributeName)
                } else i.isCustomAttribute(t) && e.removeAttribute(t)
            }
        };
    e.exports = c
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return '"' + o(e) + '"'
    }
    var o = n(321);
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return Object.prototype.hasOwnProperty.call(e, g) || (e[g] = h++, p[e[g]] = {}), p[e[g]]
    }
    var o, i = n(98),
        a = n(281),
        s = n(284),
        l = n(342),
        u = n(311),
        c = n(343),
        d = n(305),
        p = {},
        f = !1,
        h = 0,
        m = {
            topAbort: "abort",
            topAnimationEnd: c("animationend") || "animationend",
            topAnimationIteration: c("animationiteration") || "animationiteration",
            topAnimationStart: c("animationstart") || "animationstart",
            topBlur: "blur",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topChange: "change",
            topClick: "click",
            topCompositionEnd: "compositionend",
            topCompositionStart: "compositionstart",
            topCompositionUpdate: "compositionupdate",
            topContextMenu: "contextmenu",
            topCopy: "copy",
            topCut: "cut",
            topDoubleClick: "dblclick",
            topDrag: "drag",
            topDragEnd: "dragend",
            topDragEnter: "dragenter",
            topDragExit: "dragexit",
            topDragLeave: "dragleave",
            topDragOver: "dragover",
            topDragStart: "dragstart",
            topDrop: "drop",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topFocus: "focus",
            topInput: "input",
            topKeyDown: "keydown",
            topKeyPress: "keypress",
            topKeyUp: "keyup",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topMouseDown: "mousedown",
            topMouseMove: "mousemove",
            topMouseOut: "mouseout",
            topMouseOver: "mouseover",
            topMouseUp: "mouseup",
            topPaste: "paste",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topScroll: "scroll",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topSelectionChange: "selectionchange",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTextInput: "textInput",
            topTimeUpdate: "timeupdate",
            topTouchCancel: "touchcancel",
            topTouchEnd: "touchend",
            topTouchMove: "touchmove",
            topTouchStart: "touchstart",
            topTransitionEnd: c("transitionend") || "transitionend",
            topVolumeChange: "volumechange",
            topWaiting: "waiting",
            topWheel: "wheel"
        },
        g = "_reactListenersID" + String(Math.random()).slice(2),
        v = i({}, l, {
            ReactEventListener: null,
            injection: {
                injectReactEventListener: function(e) {
                    e.setHandleTopLevel(v.handleTopLevel), v.ReactEventListener = e
                }
            },
            setEnabled: function(e) {
                v.ReactEventListener && v.ReactEventListener.setEnabled(e)
            },
            isEnabled: function() {
                return !(!v.ReactEventListener || !v.ReactEventListener.isEnabled())
            },
            listenTo: function(e, t) {
                for (var n = t, o = r(n), i = s.registrationNameDependencies[e], l = a.topLevelTypes, u = 0; u < i.length; u++) {
                    var c = i[u];
                    o.hasOwnProperty(c) && o[c] || (c === l.topWheel ? d("wheel") ? v.ReactEventListener.trapBubbledEvent(l.topWheel, "wheel", n) : d("mousewheel") ? v.ReactEventListener.trapBubbledEvent(l.topWheel, "mousewheel", n) : v.ReactEventListener.trapBubbledEvent(l.topWheel, "DOMMouseScroll", n) : c === l.topScroll ? d("scroll", !0) ? v.ReactEventListener.trapCapturedEvent(l.topScroll, "scroll", n) : v.ReactEventListener.trapBubbledEvent(l.topScroll, "scroll", v.ReactEventListener.WINDOW_HANDLE) : c === l.topFocus || c === l.topBlur ? (d("focus", !0) ? (v.ReactEventListener.trapCapturedEvent(l.topFocus, "focus", n), v.ReactEventListener.trapCapturedEvent(l.topBlur, "blur", n)) : d("focusin") && (v.ReactEventListener.trapBubbledEvent(l.topFocus, "focusin", n), v.ReactEventListener.trapBubbledEvent(l.topBlur, "focusout", n)), o[l.topBlur] = !0, o[l.topFocus] = !0) : m.hasOwnProperty(c) && v.ReactEventListener.trapBubbledEvent(c, m[c], n), o[c] = !0)
                }
            },
            trapBubbledEvent: function(e, t, n) {
                return v.ReactEventListener.trapBubbledEvent(e, t, n)
            },
            trapCapturedEvent: function(e, t, n) {
                return v.ReactEventListener.trapCapturedEvent(e, t, n)
            },
            ensureScrollValueMonitoring: function() {
                if (void 0 === o && (o = document.createEvent && "pageX" in document.createEvent("MouseEvent")), !o && !f) {
                    var e = u.refreshScrollValues;
                    v.ReactEventListener.monitorScrollValue(e), f = !0
                }
            }
        });
    e.exports = v
}, function(e, t, n) {
    "use strict";

    function r(e) {
        o.enqueueEvents(e), o.processEventQueue(!1)
    }
    var o = n(283),
        i = {
            handleTopLevel: function(e, t, n, i) {
                var a = o.extractEvents(e, t, n, i);
                r(a)
            }
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n["ms" + e] = "MS" + t, n["O" + e] = "o" + t.toLowerCase(), n
    }

    function o(e) {
        if (s[e]) return s[e];
        if (!a[e]) return e;
        var t = a[e];
        for (var n in t)
            if (t.hasOwnProperty(n) && n in l) return s[e] = t[n];
        return ""
    }
    var i = n(289),
        a = {
            animationend: r("Animation", "AnimationEnd"),
            animationiteration: r("Animation", "AnimationIteration"),
            animationstart: r("Animation", "AnimationStart"),
            transitionend: r("Transition", "TransitionEnd")
        },
        s = {},
        l = {};
    i.canUseDOM && (l = document.createElement("div").style, "AnimationEvent" in window || (delete a.animationend.animation, delete a.animationiteration.animation, delete a.animationstart.animation), "TransitionEvent" in window || delete a.transitionend.transition), e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(345),
        o = {
            getHostProps: r.getHostProps
        };
    e.exports = o
}, function(e, t) {
    "use strict";
    var n = {
            onClick: !0,
            onDoubleClick: !0,
            onMouseDown: !0,
            onMouseMove: !0,
            onMouseUp: !0,
            onClickCapture: !0,
            onDoubleClickCapture: !0,
            onMouseDownCapture: !0,
            onMouseMoveCapture: !0,
            onMouseUpCapture: !0
        },
        r = {
            getHostProps: function(e, t) {
                if (!t.disabled) return t;
                var r = {};
                for (var o in t) !n[o] && t.hasOwnProperty(o) && (r[o] = t[o]);
                return r
            }
        };
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r() {
        this._rootNodeID && p.updateWrapper(this)
    }

    function o(e) {
        var t = this._currentElement.props,
            n = u.executeOnChange(t, e);
        d.asap(r, this);
        var o = t.name;
        if ("radio" === t.type && null != o) {
            for (var a = c.getNodeFromInstance(this), s = a; s.parentNode;) s = s.parentNode;
            for (var l = s.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), p = 0; p < l.length; p++) {
                var f = l[p];
                if (f !== a && f.form === a.form) {
                    var h = c.getInstanceFromNode(f);
                    h ? void 0 : i("90"), d.asap(r, h)
                }
            }
        }
        return n
    }
    var i = n(101),
        a = n(98),
        s = n(345),
        l = n(339),
        u = n(347),
        c = n(276),
        d = n(296),
        p = (n(102), n(105), {
            getHostProps: function(e, t) {
                var n = u.getValue(t),
                    r = u.getChecked(t),
                    o = a({
                        type: void 0,
                        step: void 0,
                        min: void 0,
                        max: void 0
                    }, s.getHostProps(e, t), {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: null != n ? n : e._wrapperState.initialValue,
                        checked: null != r ? r : e._wrapperState.initialChecked,
                        onChange: e._wrapperState.onChange
                    });
                return o
            },
            mountWrapper: function(e, t) {
                var n = t.defaultValue;
                e._wrapperState = {
                    initialChecked: null != t.checked ? t.checked : t.defaultChecked,
                    initialValue: null != t.value ? t.value : n,
                    listeners: null,
                    onChange: o.bind(e)
                }
            },
            updateWrapper: function(e) {
                var t = e._currentElement.props,
                    n = t.checked;
                null != n && l.setValueForProperty(c.getNodeFromInstance(e), "checked", n || !1);
                var r = c.getNodeFromInstance(e),
                    o = u.getValue(t);
                if (null != o) {
                    var i = "" + o;
                    i !== r.value && (r.value = i)
                } else null == t.value && null != t.defaultValue && (r.defaultValue = "" + t.defaultValue), null == t.checked && null != t.defaultChecked && (r.defaultChecked = !!t.defaultChecked)
            },
            postMountWrapper: function(e) {
                var t = e._currentElement.props,
                    n = c.getNodeFromInstance(e);
                switch (t.type) {
                    case "submit":
                    case "reset":
                        break;
                    case "color":
                    case "date":
                    case "datetime":
                    case "datetime-local":
                    case "month":
                    case "time":
                    case "week":
                        n.value = "", n.value = n.defaultValue;
                        break;
                    default:
                        n.value = n.value
                }
                var r = n.name;
                "" !== r && (n.name = ""), n.defaultChecked = !n.defaultChecked, n.defaultChecked = !n.defaultChecked, "" !== r && (n.name = r)
            }
        });
    e.exports = p
}, function(e, t, n) {
    "use strict";

    function r(e) {
        null != e.checkedLink && null != e.valueLink ? s("87") : void 0
    }

    function o(e) {
        r(e), null != e.value || null != e.onChange ? s("88") : void 0
    }

    function i(e) {
        r(e), null != e.checked || null != e.onChange ? s("89") : void 0
    }

    function a(e) {
        if (e) {
            var t = e.getName();
            if (t) return " Check the render method of `" + t + "`."
        }
        return ""
    }
    var s = n(101),
        l = n(121),
        u = n(116),
        c = n(122),
        d = (n(102), n(105), {
            button: !0,
            checkbox: !0,
            image: !0,
            hidden: !0,
            radio: !0,
            reset: !0,
            submit: !0
        }),
        p = {
            value: function(e, t, n) {
                return !e[t] || d[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
            },
            checked: function(e, t, n) {
                return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
            },
            onChange: l.func
        },
        f = {},
        h = {
            checkPropTypes: function(e, t, n) {
                for (var r in p) {
                    if (p.hasOwnProperty(r)) var o = p[r](t, r, e, u.prop, null, c);
                    if (o instanceof Error && !(o.message in f)) {
                        f[o.message] = !0;
                        a(n)
                    }
                }
            },
            getValue: function(e) {
                return e.valueLink ? (o(e), e.valueLink.value) : e.value
            },
            getChecked: function(e) {
                return e.checkedLink ? (i(e), e.checkedLink.value) : e.checked
            },
            executeOnChange: function(e, t) {
                return e.valueLink ? (o(e), e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (i(e), e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0
            }
        };
    e.exports = h
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = "";
        return i.forEach(e, function(e) {
            null != e && ("string" == typeof e || "number" == typeof e ? t += e : l || (l = !0))
        }), t
    }
    var o = n(98),
        i = n(99),
        a = n(276),
        s = n(349),
        l = (n(105), !1),
        u = {
            mountWrapper: function(e, t, n) {
                var o = null;
                if (null != n) {
                    var i = n;
                    "optgroup" === i._tag && (i = i._hostParent), null != i && "select" === i._tag && (o = s.getSelectValueContext(i))
                }
                var a = null;
                if (null != o) {
                    var l;
                    if (l = null != t.value ? t.value + "" : r(t.children), a = !1, Array.isArray(o)) {
                        for (var u = 0; u < o.length; u++)
                            if ("" + o[u] === l) {
                                a = !0;
                                break
                            }
                    } else a = "" + o === l
                }
                e._wrapperState = {
                    selected: a
                }
            },
            postMountWrapper: function(e) {
                var t = e._currentElement.props;
                if (null != t.value) {
                    var n = a.getNodeFromInstance(e);
                    n.setAttribute("value", t.value)
                }
            },
            getHostProps: function(e, t) {
                var n = o({
                    selected: void 0,
                    children: void 0
                }, t);
                null != e._wrapperState.selected && (n.selected = e._wrapperState.selected);
                var i = r(t.children);
                return i && (n.children = i), n
            }
        };
    e.exports = u
}, function(e, t, n) {
    "use strict";

    function r() {
        if (this._rootNodeID && this._wrapperState.pendingUpdate) {
            this._wrapperState.pendingUpdate = !1;
            var e = this._currentElement.props,
                t = l.getValue(e);
            null != t && o(this, Boolean(e.multiple), t)
        }
    }

    function o(e, t, n) {
        var r, o, i = u.getNodeFromInstance(e).options;
        if (t) {
            for (r = {}, o = 0; o < n.length; o++) r["" + n[o]] = !0;
            for (o = 0; o < i.length; o++) {
                var a = r.hasOwnProperty(i[o].value);
                i[o].selected !== a && (i[o].selected = a)
            }
        } else {
            for (r = "" + n, o = 0; o < i.length; o++)
                if (i[o].value === r) return void(i[o].selected = !0);
            i.length && (i[0].selected = !0)
        }
    }

    function i(e) {
        var t = this._currentElement.props,
            n = l.executeOnChange(t, e);
        return this._rootNodeID && (this._wrapperState.pendingUpdate = !0), c.asap(r, this), n
    }
    var a = n(98),
        s = n(345),
        l = n(347),
        u = n(276),
        c = n(296),
        d = (n(105), !1),
        p = {
            getHostProps: function(e, t) {
                return a({}, s.getHostProps(e, t), {
                    onChange: e._wrapperState.onChange,
                    value: void 0
                })
            },
            mountWrapper: function(e, t) {
                var n = l.getValue(t);
                e._wrapperState = {
                    pendingUpdate: !1,
                    initialValue: null != n ? n : t.defaultValue,
                    listeners: null,
                    onChange: i.bind(e),
                    wasMultiple: Boolean(t.multiple)
                }, void 0 === t.value || void 0 === t.defaultValue || d || (d = !0)
            },
            getSelectValueContext: function(e) {
                return e._wrapperState.initialValue
            },
            postUpdateWrapper: function(e) {
                var t = e._currentElement.props;
                e._wrapperState.initialValue = void 0;
                var n = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = Boolean(t.multiple);
                var r = l.getValue(t);
                null != r ? (e._wrapperState.pendingUpdate = !1, o(e, Boolean(t.multiple), r)) : n !== Boolean(t.multiple) && (null != t.defaultValue ? o(e, Boolean(t.multiple), t.defaultValue) : o(e, Boolean(t.multiple), t.multiple ? [] : ""))
            }
        };
    e.exports = p
}, function(e, t, n) {
    "use strict";

    function r() {
        this._rootNodeID && d.updateWrapper(this)
    }

    function o(e) {
        var t = this._currentElement.props,
            n = l.executeOnChange(t, e);
        return c.asap(r, this), n
    }
    var i = n(101),
        a = n(98),
        s = n(345),
        l = n(347),
        u = n(276),
        c = n(296),
        d = (n(102), n(105), {
            getHostProps: function(e, t) {
                null != t.dangerouslySetInnerHTML ? i("91") : void 0;
                var n = a({}, s.getHostProps(e, t), {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue,
                    onChange: e._wrapperState.onChange
                });
                return n
            },
            mountWrapper: function(e, t) {
                var n = l.getValue(t),
                    r = n;
                if (null == n) {
                    var a = t.defaultValue,
                        s = t.children;
                    null != s && (null != a ? i("92") : void 0, Array.isArray(s) && (s.length <= 1 ? void 0 : i("93"), s = s[0]), a = "" + s), null == a && (a = ""), r = a
                }
                e._wrapperState = {
                    initialValue: "" + r,
                    listeners: null,
                    onChange: o.bind(e)
                }
            },
            updateWrapper: function(e) {
                var t = e._currentElement.props,
                    n = u.getNodeFromInstance(e),
                    r = l.getValue(t);
                if (null != r) {
                    var o = "" + r;
                    o !== n.value && (n.value = o), null == t.defaultValue && (n.defaultValue = o)
                }
                null != t.defaultValue && (n.defaultValue = t.defaultValue)
            },
            postMountWrapper: function(e) {
                var t = u.getNodeFromInstance(e);
                t.value = t.textContent
            }
        });
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return {
            type: p.INSERT_MARKUP,
            content: e,
            fromIndex: null,
            fromNode: null,
            toIndex: n,
            afterNode: t
        }
    }

    function o(e, t, n) {
        return {
            type: p.MOVE_EXISTING,
            content: null,
            fromIndex: e._mountIndex,
            fromNode: f.getHostNode(e),
            toIndex: n,
            afterNode: t
        }
    }

    function i(e, t) {
        return {
            type: p.REMOVE_NODE,
            content: null,
            fromIndex: e._mountIndex,
            fromNode: t,
            toIndex: null,
            afterNode: null
        }
    }

    function a(e) {
        return {
            type: p.SET_MARKUP,
            content: e,
            fromIndex: null,
            fromNode: null,
            toIndex: null,
            afterNode: null
        }
    }

    function s(e) {
        return {
            type: p.TEXT_CONTENT,
            content: e,
            fromIndex: null,
            fromNode: null,
            toIndex: null,
            afterNode: null
        }
    }

    function l(e, t) {
        return t && (e = e || [], e.push(t)), e
    }

    function u(e, t) {
        d.processChildrenUpdates(e, t)
    }
    var c = n(101),
        d = n(352),
        p = (n(353), n(302), n(326)),
        f = (n(104), n(299)),
        h = n(354),
        m = (n(106), n(365)),
        g = (n(102), {
            Mixin: {
                _reconcilerInstantiateChildren: function(e, t, n) {
                    return h.instantiateChildren(e, t, n)
                },
                _reconcilerUpdateChildren: function(e, t, n, r, o, i) {
                    var a, s = 0;
                    return a = m(t, s), h.updateChildren(e, a, n, r, o, this, this._hostContainerInfo, i, s), a
                },
                mountChildren: function(e, t, n) {
                    var r = this._reconcilerInstantiateChildren(e, t, n);
                    this._renderedChildren = r;
                    var o = [],
                        i = 0;
                    for (var a in r)
                        if (r.hasOwnProperty(a)) {
                            var s = r[a],
                                l = 0,
                                u = f.mountComponent(s, t, this, this._hostContainerInfo, n, l);
                            s._mountIndex = i++, o.push(u)
                        }
                    return o
                },
                updateTextContent: function(e) {
                    var t = this._renderedChildren;
                    h.unmountChildren(t, !1);
                    for (var n in t) t.hasOwnProperty(n) && c("118");
                    var r = [s(e)];
                    u(this, r)
                },
                updateMarkup: function(e) {
                    var t = this._renderedChildren;
                    h.unmountChildren(t, !1);
                    for (var n in t) t.hasOwnProperty(n) && c("118");
                    var r = [a(e)];
                    u(this, r)
                },
                updateChildren: function(e, t, n) {
                    this._updateChildren(e, t, n)
                },
                _updateChildren: function(e, t, n) {
                    var r = this._renderedChildren,
                        o = {},
                        i = [],
                        a = this._reconcilerUpdateChildren(r, e, i, o, t, n);
                    if (a || r) {
                        var s, c = null,
                            d = 0,
                            p = 0,
                            h = 0,
                            m = null;
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var g = r && r[s],
                                    v = a[s];
                                g === v ? (c = l(c, this.moveChild(g, m, d, p)), p = Math.max(g._mountIndex, p), g._mountIndex = d) : (g && (p = Math.max(g._mountIndex, p)), c = l(c, this._mountChildAtIndex(v, i[h], m, d, t, n)), h++), d++, m = f.getHostNode(v)
                            }
                        for (s in o) o.hasOwnProperty(s) && (c = l(c, this._unmountChild(r[s], o[s])));
                        c && u(this, c), this._renderedChildren = a
                    }
                },
                unmountChildren: function(e) {
                    var t = this._renderedChildren;
                    h.unmountChildren(t, e), this._renderedChildren = null
                },
                moveChild: function(e, t, n, r) {
                    if (e._mountIndex < r) return o(e, t, n)
                },
                createChild: function(e, t, n) {
                    return r(n, t, e._mountIndex)
                },
                removeChild: function(e, t) {
                    return i(e, t)
                },
                _mountChildAtIndex: function(e, t, n, r, o, i) {
                    return e._mountIndex = r, this.createChild(e, n, t)
                },
                _unmountChild: function(e, t) {
                    var n = this.removeChild(e, t);
                    return e._mountIndex = null, n
                }
            }
        });
    e.exports = g
}, function(e, t, n) {
    "use strict";
    var r = n(101),
        o = (n(102), !1),
        i = {
            replaceNodeWithMarkup: null,
            processChildrenUpdates: null,
            injection: {
                injectEnvironment: function(e) {
                    o ? r("104") : void 0, i.replaceNodeWithMarkup = e.replaceNodeWithMarkup, i.processChildrenUpdates = e.processChildrenUpdates, o = !0
                }
            }
        };
    e.exports = i
}, function(e, t) {
    "use strict";
    var n = {
        remove: function(e) {
            e._reactInternalInstance = void 0
        },
        get: function(e) {
            return e._reactInternalInstance
        },
        has: function(e) {
            return void 0 !== e._reactInternalInstance
        },
        set: function(e, t) {
            e._reactInternalInstance = t
        }
    };
    e.exports = n
}, function(e, t, n) {
    (function(t) {
        "use strict";

        function r(e, t, n, r) {
            var o = void 0 === e[n];
            null != t && o && (e[n] = i(t, !0))
        }
        var o = n(299),
            i = n(356),
            a = (n(110), n(362)),
            s = n(108);
        n(105);
        "undefined" != typeof t && t.env, 1;
        var l = {
            instantiateChildren: function(e, t, n, o) {
                if (null == e) return null;
                var i = {};
                return s(e, r, i), i
            },
            updateChildren: function(e, t, n, r, s, l, u, c, d) {
                if (t || e) {
                    var p, f;
                    for (p in t)
                        if (t.hasOwnProperty(p)) {
                            f = e && e[p];
                            var h = f && f._currentElement,
                                m = t[p];
                            if (null != f && a(h, m)) o.receiveComponent(f, m, s, c), t[p] = f;
                            else {
                                f && (r[p] = o.getHostNode(f), o.unmountComponent(f, !1));
                                var g = i(m, !0);
                                t[p] = g;
                                var v = o.mountComponent(g, s, l, u, c, d);
                                n.push(v)
                            }
                        }
                    for (p in e) !e.hasOwnProperty(p) || t && t.hasOwnProperty(p) || (f = e[p], r[p] = o.getHostNode(f), o.unmountComponent(f, !1))
                }
            },
            unmountChildren: function(e, t) {
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var r = e[n];
                        o.unmountComponent(r, t)
                    }
            }
        };
        e.exports = l
    }).call(t, n(355))
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function i(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }

    function a() {
        m && f && (m = !1, f.length ? h = f.concat(h) : g = -1, h.length && s())
    }

    function s() {
        if (!m) {
            var e = o(a);
            m = !0;
            for (var t = h.length; t;) {
                for (f = h, h = []; ++g < t;) f && f[g].run();
                g = -1, t = h.length
            }
            f = null, m = !1, i(e)
        }
    }

    function l(e, t) {
        this.fun = e, this.array = t
    }

    function u() {}
    var c, d, p = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            d = r
        }
    }();
    var f, h = [],
        m = !1,
        g = -1;
    p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new l(e, t)), 1 !== h.length || m || o(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function() {
        return "/"
    }, p.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e) {
            var t = e.getName();
            if (t) return " Check the render method of `" + t + "`."
        }
        return ""
    }

    function o(e) {
        return "function" == typeof e && "undefined" != typeof e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent
    }

    function i(e, t) {
        var n;
        if (null === e || e === !1) n = u.create(i);
        else if ("object" == typeof e) {
            var s = e;
            !s || "function" != typeof s.type && "string" != typeof s.type ? a("130", null == s.type ? s.type : typeof s.type, r(s._owner)) : void 0, "string" == typeof s.type ? n = c.createInternalComponent(s) : o(s.type) ? (n = new s.type(s), n.getHostNode || (n.getHostNode = n.getNativeNode)) : n = new d(s)
        } else "string" == typeof e || "number" == typeof e ? n = c.createInstanceForText(e) : a("131", typeof e);
        return n._mountIndex = 0, n._mountImage = null, n
    }
    var a = n(101),
        s = n(98),
        l = n(357),
        u = n(363),
        c = n(364),
        d = (n(102), n(105), function(e) {
            this.construct(e)
        });
    s(d.prototype, l.Mixin, {
        _instantiateReactComponent: i
    });
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function r(e) {}

    function o(e, t) {}

    function i(e) {
        return !(!e.prototype || !e.prototype.isReactComponent)
    }

    function a(e) {
        return !(!e.prototype || !e.prototype.isPureReactComponent)
    }
    var s = n(101),
        l = n(98),
        u = n(352),
        c = n(104),
        d = n(103),
        p = n(286),
        f = n(353),
        h = (n(302), n(358)),
        m = (n(116), n(299)),
        g = n(359),
        v = n(113),
        y = (n(102), n(361)),
        b = n(362),
        x = (n(105), {
            ImpureClass: 0,
            PureClass: 1,
            StatelessFunctional: 2
        });
    r.prototype.render = function() {
        var e = f.get(this)._currentElement.type,
            t = e(this.props, this.context, this.updater);
        return o(e, t), t
    };
    var w = 1,
        k = {
            construct: function(e) {
                this._currentElement = e, this._rootNodeID = 0, this._compositeType = null, this._instance = null, this._hostParent = null, this._hostContainerInfo = null, this._updateBatchNumber = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedNodeType = null, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._topLevelWrapper = null, this._pendingCallbacks = null, this._calledComponentWillUnmount = !1
            },
            mountComponent: function(e, t, n, l) {
                this._context = l, this._mountOrder = w++, this._hostParent = t, this._hostContainerInfo = n;
                var u, c = this._currentElement.props,
                    p = this._processContext(l),
                    h = this._currentElement.type,
                    m = e.getUpdateQueue(),
                    g = i(h),
                    y = this._constructComponent(g, c, p, m);
                g || null != y && null != y.render ? a(h) ? this._compositeType = x.PureClass : this._compositeType = x.ImpureClass : (u = y, o(h, u), null === y || y === !1 || d.isValidElement(y) ? void 0 : s("105", h.displayName || h.name || "Component"), y = new r(h), this._compositeType = x.StatelessFunctional);
                y.props = c, y.context = p, y.refs = v, y.updater = m, this._instance = y, f.set(y, this);
                var b = y.state;
                void 0 === b && (y.state = b = null), "object" != typeof b || Array.isArray(b) ? s("106", this.getName() || "ReactCompositeComponent") : void 0, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
                var k;
                return k = y.unstable_handleError ? this.performInitialMountWithErrorHandling(u, t, n, e, l) : this.performInitialMount(u, t, n, e, l), y.componentDidMount && e.getReactMountReady().enqueue(y.componentDidMount, y), k
            },
            _constructComponent: function(e, t, n, r) {
                return this._constructComponentWithoutOwner(e, t, n, r)
            },
            _constructComponentWithoutOwner: function(e, t, n, r) {
                var o, i = this._currentElement.type;
                return o = e ? new i(t, n, r) : i(t, n, r)
            },
            performInitialMountWithErrorHandling: function(e, t, n, r, o) {
                var i, a = r.checkpoint();
                try {
                    i = this.performInitialMount(e, t, n, r, o)
                } catch (s) {
                    r.rollback(a), this._instance.unstable_handleError(s), this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)), a = r.checkpoint(), this._renderedComponent.unmountComponent(!0), r.rollback(a), i = this.performInitialMount(e, t, n, r, o)
                }
                return i
            },
            performInitialMount: function(e, t, n, r, o) {
                var i = this._instance;
                i.componentWillMount && (i.componentWillMount(), this._pendingStateQueue && (i.state = this._processPendingState(i.props, i.context))), void 0 === e && (e = this._renderValidatedComponent());
                var a = h.getType(e);
                this._renderedNodeType = a;
                var s = this._instantiateReactComponent(e, a !== h.EMPTY);
                this._renderedComponent = s;
                var l = 0,
                    u = m.mountComponent(s, r, t, n, this._processChildContext(o), l);
                return u
            },
            getHostNode: function() {
                return m.getHostNode(this._renderedComponent)
            },
            unmountComponent: function(e) {
                if (this._renderedComponent) {
                    var t = this._instance;
                    if (t.componentWillUnmount && !t._calledComponentWillUnmount)
                        if (t._calledComponentWillUnmount = !0, e) {
                            var n = this.getName() + ".componentWillUnmount()";
                            p.invokeGuardedCallback(n, t.componentWillUnmount.bind(t))
                        } else t.componentWillUnmount();
                    this._renderedComponent && (m.unmountComponent(this._renderedComponent, e), this._renderedNodeType = null, this._renderedComponent = null, this._instance = null), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = 0, this._topLevelWrapper = null, f.remove(t)
                }
            },
            _maskContext: function(e) {
                var t = this._currentElement.type,
                    n = t.contextTypes;
                if (!n) return v;
                var r = {};
                for (var o in n) r[o] = e[o];
                return r
            },
            _processContext: function(e) {
                var t = this._maskContext(e);
                return t
            },
            _processChildContext: function(e) {
                var t = this._currentElement.type,
                    n = this._instance,
                    r = n.getChildContext && n.getChildContext();
                if (r) {
                    "object" != typeof t.childContextTypes ? s("107", this.getName() || "ReactCompositeComponent") : void 0;
                    for (var o in r) o in t.childContextTypes ? void 0 : s("108", this.getName() || "ReactCompositeComponent", o);
                    return l({}, e, r)
                }
                return e
            },
            _checkContextTypes: function(e, t, n) {
                g(e, t, n, this.getName(), null, this._debugID)
            },
            receiveComponent: function(e, t, n) {
                var r = this._currentElement,
                    o = this._context;
                this._pendingElement = null, this.updateComponent(t, r, e, o, n)
            },
            performUpdateIfNecessary: function(e) {
                null != this._pendingElement ? m.receiveComponent(this, this._pendingElement, e, this._context) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context) : this._updateBatchNumber = null
            },
            updateComponent: function(e, t, n, r, o) {
                var i = this._instance;
                null == i ? s("136", this.getName() || "ReactCompositeComponent") : void 0;
                var a, l = !1;
                this._context === o ? a = i.context : (a = this._processContext(o), l = !0);
                var u = t.props,
                    c = n.props;
                t !== n && (l = !0), l && i.componentWillReceiveProps && i.componentWillReceiveProps(c, a);
                var d = this._processPendingState(c, a),
                    p = !0;
                this._pendingForceUpdate || (i.shouldComponentUpdate ? p = i.shouldComponentUpdate(c, d, a) : this._compositeType === x.PureClass && (p = !y(u, c) || !y(i.state, d))), this._updateBatchNumber = null, p ? (this._pendingForceUpdate = !1, this._performComponentUpdate(n, c, d, a, e, o)) : (this._currentElement = n, this._context = o, i.props = c, i.state = d, i.context = a)
            },
            _processPendingState: function(e, t) {
                var n = this._instance,
                    r = this._pendingStateQueue,
                    o = this._pendingReplaceState;
                if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !r) return n.state;
                if (o && 1 === r.length) return r[0];
                for (var i = l({}, o ? r[0] : n.state), a = o ? 1 : 0; a < r.length; a++) {
                    var s = r[a];
                    l(i, "function" == typeof s ? s.call(n, i, e, t) : s)
                }
                return i
            },
            _performComponentUpdate: function(e, t, n, r, o, i) {
                var a, s, l, u = this._instance,
                    c = Boolean(u.componentDidUpdate);
                c && (a = u.props, s = u.state, l = u.context), u.componentWillUpdate && u.componentWillUpdate(t, n, r), this._currentElement = e, this._context = i, u.props = t, u.state = n, u.context = r, this._updateRenderedComponent(o, i), c && o.getReactMountReady().enqueue(u.componentDidUpdate.bind(u, a, s, l), u)
            },
            _updateRenderedComponent: function(e, t) {
                var n = this._renderedComponent,
                    r = n._currentElement,
                    o = this._renderValidatedComponent();
                if (b(r, o)) m.receiveComponent(n, o, e, this._processChildContext(t));
                else {
                    var i = m.getHostNode(n);
                    m.unmountComponent(n, !1);
                    var a = h.getType(o);
                    this._renderedNodeType = a;
                    var s = this._instantiateReactComponent(o, a !== h.EMPTY);
                    this._renderedComponent = s;
                    var l = 0,
                        u = m.mountComponent(s, e, this._hostParent, this._hostContainerInfo, this._processChildContext(t), l);
                    this._replaceNodeWithMarkup(i, u, n)
                }
            },
            _replaceNodeWithMarkup: function(e, t, n) {
                u.replaceNodeWithMarkup(e, t, n)
            },
            _renderValidatedComponentWithoutOwnerOrContext: function() {
                var e = this._instance,
                    t = e.render();
                return t
            },
            _renderValidatedComponent: function() {
                var e;
                if (this._compositeType !== x.StatelessFunctional) {
                    c.current = this;
                    try {
                        e = this._renderValidatedComponentWithoutOwnerOrContext()
                    } finally {
                        c.current = null
                    }
                } else e = this._renderValidatedComponentWithoutOwnerOrContext();
                return null === e || e === !1 || d.isValidElement(e) ? void 0 : s("109", this.getName() || "ReactCompositeComponent"), e
            },
            attachRef: function(e, t) {
                var n = this.getPublicInstance();
                null == n ? s("110") : void 0;
                var r = t.getPublicInstance(),
                    o = n.refs === v ? n.refs = {} : n.refs;
                o[e] = r
            },
            detachRef: function(e) {
                var t = this.getPublicInstance().refs;
                delete t[e]
            },
            getName: function() {
                var e = this._currentElement.type,
                    t = this._instance && this._instance.constructor;
                return e.displayName || t && t.displayName || e.name || t && t.name || null
            },
            getPublicInstance: function() {
                var e = this._instance;
                return this._compositeType === x.StatelessFunctional ? null : e
            },
            _instantiateReactComponent: null
        },
        _ = {
            Mixin: k
        };
    e.exports = _
}, function(e, t, n) {
    "use strict";
    var r = n(101),
        o = n(103),
        i = (n(102), {
            HOST: 0,
            COMPOSITE: 1,
            EMPTY: 2,
            getType: function(e) {
                return null === e || e === !1 ? i.EMPTY : o.isValidElement(e) ? "function" == typeof e.type ? i.COMPOSITE : i.HOST : void r("26", e)
            }
        });
    e.exports = i
}, function(e, t, n) {
    (function(t) {
        "use strict";

        function r(e, t, n, r, l, u) {
            for (var c in e)
                if (e.hasOwnProperty(c)) {
                    var d;
                    try {
                        "function" != typeof e[c] ? o("84", r || "React class", i[n], c) : void 0, d = e[c](t, c, r, n, null, a)
                    } catch (p) {
                        d = p
                    }
                    if (d instanceof Error && !(d.message in s)) {
                        s[d.message] = !0
                    }
                }
        }
        var o = n(101),
            i = n(118),
            a = n(122);
        n(102), n(105);
        "undefined" != typeof t && t.env, 1;
        var s = {};
        e.exports = r
    }).call(t, n(355))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = Function.prototype.toString,
            n = Object.prototype.hasOwnProperty,
            r = RegExp("^" + t.call(n).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        try {
            var o = t.call(e);
            return r.test(o)
        } catch (i) {
            return !1
        }
    }

    function o(e) {
        return "." + e
    }

    function i(e) {
        return parseInt(e.substr(1), 10)
    }

    function a(e) {
        if (_) return v.get(e);
        var t = o(e);
        return b[t]
    }

    function s(e) {
        if (_) v["delete"](e);
        else {
            var t = o(e);
            delete b[t]
        }
    }

    function l(e, t, n) {
        var r = {
            element: t,
            parentID: n,
            text: null,
            childIDs: [],
            isMounted: !1,
            updateCount: 0
        };
        if (_) v.set(e, r);
        else {
            var i = o(e);
            b[i] = r
        }
    }

    function u(e) {
        if (_) y.add(e);
        else {
            var t = o(e);
            x[t] = !0
        }
    }

    function c(e) {
        if (_) y["delete"](e);
        else {
            var t = o(e);
            delete x[t]
        }
    }

    function d() {
        return _ ? Array.from(v.keys()) : Object.keys(b).map(i)
    }

    function p() {
        return _ ? Array.from(y.keys()) : Object.keys(x).map(i)
    }

    function f(e) {
        var t = a(e);
        if (t) {
            var n = t.childIDs;
            s(e), n.forEach(f)
        }
    }

    function h(e, t, n) {
        return "\n    in " + e + (t ? " (at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + ")" : n ? " (created by " + n + ")" : "")
    }

    function m(e) {
        return null == e ? "#empty" : "string" == typeof e || "number" == typeof e ? "#text" : "string" == typeof e.type ? e.type : e.type.displayName || e.type.name || "Unknown"
    }

    function g(e) {
        var t, n = E.getDisplayName(e),
            r = E.getElement(e),
            o = E.getOwnerID(e);
        return o && (t = E.getDisplayName(o)), h(n, r && r._source, t)
    }
    var v, y, b, x, w = n(101),
        k = n(104),
        _ = (n(102), n(105), "function" == typeof Array.from && "function" == typeof Map && r(Map) && null != Map.prototype && "function" == typeof Map.prototype.keys && r(Map.prototype.keys) && "function" == typeof Set && r(Set) && null != Set.prototype && "function" == typeof Set.prototype.keys && r(Set.prototype.keys));
    _ ? (v = new Map, y = new Set) : (b = {}, x = {});
    var C = [],
        E = {
            onSetChildren: function(e, t) {
                var n = a(e);
                n.childIDs = t;
                for (var r = 0; r < t.length; r++) {
                    var o = t[r],
                        i = a(o);
                    i ? void 0 : w("140"), null == i.childIDs && "object" == typeof i.element && null != i.element ? w("141") : void 0, i.isMounted ? void 0 : w("71"), null == i.parentID && (i.parentID = e), i.parentID !== e ? w("142", o, i.parentID, e) : void 0
                }
            },
            onBeforeMountComponent: function(e, t, n) {
                l(e, t, n)
            },
            onBeforeUpdateComponent: function(e, t) {
                var n = a(e);
                n && n.isMounted && (n.element = t)
            },
            onMountComponent: function(e) {
                var t = a(e);
                t.isMounted = !0;
                var n = 0 === t.parentID;
                n && u(e)
            },
            onUpdateComponent: function(e) {
                var t = a(e);
                t && t.isMounted && t.updateCount++
            },
            onUnmountComponent: function(e) {
                var t = a(e);
                if (t) {
                    t.isMounted = !1;
                    var n = 0 === t.parentID;
                    n && c(e)
                }
                C.push(e)
            },
            purgeUnmountedComponents: function() {
                if (!E._preventPurging) {
                    for (var e = 0; e < C.length; e++) {
                        var t = C[e];
                        f(t)
                    }
                    C.length = 0
                }
            },
            isMounted: function(e) {
                var t = a(e);
                return !!t && t.isMounted
            },
            getCurrentStackAddendum: function(e) {
                var t = "";
                if (e) {
                    var n = e.type,
                        r = "function" == typeof n ? n.displayName || n.name : n,
                        o = e._owner;
                    t += h(r || "Unknown", e._source, o && o.getName())
                }
                var i = k.current,
                    a = i && i._debugID;
                return t += E.getStackAddendumByID(a)
            },
            getStackAddendumByID: function(e) {
                for (var t = ""; e;) t += g(e), e = E.getParentID(e);
                return t
            },
            getChildIDs: function(e) {
                var t = a(e);
                return t ? t.childIDs : []
            },
            getDisplayName: function(e) {
                var t = E.getElement(e);
                return t ? m(t) : null
            },
            getElement: function(e) {
                var t = a(e);
                return t ? t.element : null
            },
            getOwnerID: function(e) {
                var t = E.getElement(e);
                return t && t._owner ? t._owner._debugID : null
            },
            getParentID: function(e) {
                var t = a(e);
                return t ? t.parentID : null
            },
            getSource: function(e) {
                var t = a(e),
                    n = t ? t.element : null,
                    r = null != n ? n._source : null;
                return r
            },
            getText: function(e) {
                var t = E.getElement(e);
                return "string" == typeof t ? t : "number" == typeof t ? "" + t : null
            },
            getUpdateCount: function(e) {
                var t = a(e);
                return t ? t.updateCount : 0
            },
            getRegisteredIDs: d,
            getRootIDs: p
        };
    e.exports = E
}, function(e, t) {
    "use strict";

    function n(e, t) {
        return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
    }

    function r(e, t) {
        if (n(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var r = Object.keys(e),
            i = Object.keys(t);
        if (r.length !== i.length) return !1;
        for (var a = 0; a < r.length; a++)
            if (!o.call(t, r[a]) || !n(e[r[a]], t[r[a]])) return !1;
        return !0
    }
    var o = Object.prototype.hasOwnProperty;
    e.exports = r
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = null === e || e === !1,
            r = null === t || t === !1;
        if (n || r) return n === r;
        var o = typeof e,
            i = typeof t;
        return "string" === o || "number" === o ? "string" === i || "number" === i : "object" === i && e.type === t.type && e.key === t.key
    }
    e.exports = n
}, function(e, t) {
    "use strict";
    var n, r = {
            injectEmptyComponentFactory: function(e) {
                n = e
            }
        },
        o = {
            create: function(e) {
                return n(e)
            }
        };
    o.injection = r, e.exports = o
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return l ? void 0 : a("111", e.type), new l(e)
    }

    function o(e) {
        return new c(e)
    }

    function i(e) {
        return e instanceof c
    }
    var a = n(101),
        s = n(98),
        l = (n(102), null),
        u = {},
        c = null,
        d = {
            injectGenericComponentClass: function(e) {
                l = e
            },
            injectTextComponentClass: function(e) {
                c = e
            },
            injectComponentClasses: function(e) {
                s(u, e)
            }
        },
        p = {
            createInternalComponent: r,
            createInstanceForText: o,
            isTextComponent: i,
            injection: d
        };
    e.exports = p
}, function(e, t, n) {
    (function(t) {
        "use strict";

        function r(e, t, n, r) {
            if (e && "object" == typeof e) {
                var o = e,
                    i = void 0 === o[n];
                i && null != t && (o[n] = t)
            }
        }

        function o(e, t) {
            if (null == e) return e;
            var n = {};
            return i(e, r, n), n
        }
        var i = (n(110), n(108));
        n(105);
        "undefined" != typeof t && t.env, 1, e.exports = o
    }).call(t, n(355))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.useCreateElement = !1, this.updateQueue = new s(this)
    }
    var o = n(98),
        i = n(100),
        a = n(303),
        s = (n(302), n(367)),
        l = [],
        u = {
            enqueue: function() {}
        },
        c = {
            getTransactionWrappers: function() {
                return l
            },
            getReactMountReady: function() {
                return u
            },
            getUpdateQueue: function() {
                return this.updateQueue
            },
            destructor: function() {},
            checkpoint: function() {},
            rollback: function() {}
        };
    o(r.prototype, a.Mixin, c), i.addPoolingTo(r), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {}
    var i = n(368),
        a = (n(303), n(105), function() {
            function e(t) {
                r(this, e), this.transaction = t
            }
            return e.prototype.isMounted = function(e) {
                return !1
            }, e.prototype.enqueueCallback = function(e, t, n) {
                this.transaction.isInTransaction() && i.enqueueCallback(e, t, n)
            }, e.prototype.enqueueForceUpdate = function(e) {
                this.transaction.isInTransaction() ? i.enqueueForceUpdate(e) : o(e, "forceUpdate")
            }, e.prototype.enqueueReplaceState = function(e, t) {
                this.transaction.isInTransaction() ? i.enqueueReplaceState(e, t) : o(e, "replaceState")
            }, e.prototype.enqueueSetState = function(e, t) {
                this.transaction.isInTransaction() ? i.enqueueSetState(e, t) : o(e, "setState")
            }, e
        }());
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function r(e) {
        l.enqueueUpdate(e)
    }

    function o(e) {
        var t = typeof e;
        if ("object" !== t) return t;
        var n = e.constructor && e.constructor.name || t,
            r = Object.keys(e);
        return r.length > 0 && r.length < 20 ? n + " (keys: " + r.join(", ") + ")" : n
    }

    function i(e, t) {
        var n = s.get(e);
        if (!n) {
            return null
        }
        return n
    }
    var a = n(101),
        s = (n(104), n(353)),
        l = (n(302), n(296)),
        u = (n(102), n(105), {
            isMounted: function(e) {
                var t = s.get(e);
                return !!t && !!t._renderedComponent
            },
            enqueueCallback: function(e, t, n) {
                u.validateCallback(t, n);
                var o = i(e);
                return o ? (o._pendingCallbacks ? o._pendingCallbacks.push(t) : o._pendingCallbacks = [t], void r(o)) : null
            },
            enqueueCallbackInternal: function(e, t) {
                e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], r(e)
            },
            enqueueForceUpdate: function(e) {
                var t = i(e, "forceUpdate");
                t && (t._pendingForceUpdate = !0, r(t))
            },
            enqueueReplaceState: function(e, t) {
                var n = i(e, "replaceState");
                n && (n._pendingStateQueue = [t], n._pendingReplaceState = !0, r(n))
            },
            enqueueSetState: function(e, t) {
                var n = i(e, "setState");
                if (n) {
                    var o = n._pendingStateQueue || (n._pendingStateQueue = []);
                    o.push(t), r(n)
                }
            },
            enqueueElementInternal: function(e, t, n) {
                e._pendingElement = t, e._context = n, r(e)
            },
            validateCallback: function(e, t) {
                e && "function" != typeof e ? a("122", t, o(e)) : void 0
            }
        });
    e.exports = u
}, function(e, t, n) {
    "use strict";
    var r = (n(98), n(106)),
        o = (n(105), r);
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(98),
        o = n(316),
        i = n(276),
        a = function(e) {
            this._currentElement = null, this._hostNode = null, this._hostParent = null, this._hostContainerInfo = null, this._domID = 0
        };
    r(a.prototype, {
        mountComponent: function(e, t, n, r) {
            var a = n._idCounter++;
            this._domID = a, this._hostParent = t, this._hostContainerInfo = n;
            var s = " react-empty: " + this._domID + " ";
            if (e.useCreateElement) {
                var l = n._ownerDocument,
                    u = l.createComment(s);
                return i.precacheNode(this, u), o(u)
            }
            return e.renderToStaticMarkup ? "" : "<!--" + s + "-->"
        },
        receiveComponent: function() {},
        getHostNode: function() {
            return i.getNodeFromInstance(this)
        },
        unmountComponent: function() {
            i.uncacheNode(this)
        }
    }), e.exports = a
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        "_hostNode" in e ? void 0 : l("33"), "_hostNode" in t ? void 0 : l("33");
        for (var n = 0, r = e; r; r = r._hostParent) n++;
        for (var o = 0, i = t; i; i = i._hostParent) o++;
        for (; n - o > 0;) e = e._hostParent, n--;
        for (; o - n > 0;) t = t._hostParent, o--;
        for (var a = n; a--;) {
            if (e === t) return e;
            e = e._hostParent, t = t._hostParent
        }
        return null
    }

    function o(e, t) {
        "_hostNode" in e ? void 0 : l("35"), "_hostNode" in t ? void 0 : l("35");
        for (; t;) {
            if (t === e) return !0;
            t = t._hostParent
        }
        return !1
    }

    function i(e) {
        return "_hostNode" in e ? void 0 : l("36"),
            e._hostParent
    }

    function a(e, t, n) {
        for (var r = []; e;) r.push(e), e = e._hostParent;
        var o;
        for (o = r.length; o-- > 0;) t(r[o], !1, n);
        for (o = 0; o < r.length; o++) t(r[o], !0, n)
    }

    function s(e, t, n, o, i) {
        for (var a = e && t ? r(e, t) : null, s = []; e && e !== a;) s.push(e), e = e._hostParent;
        for (var l = []; t && t !== a;) l.push(t), t = t._hostParent;
        var u;
        for (u = 0; u < s.length; u++) n(s[u], !0, o);
        for (u = l.length; u-- > 0;) n(l[u], !1, i)
    }
    var l = n(101);
    n(102);
    e.exports = {
        isAncestor: o,
        getLowestCommonAncestor: r,
        getParentInstance: i,
        traverseTwoPhase: a,
        traverseEnterLeave: s
    }
}, function(e, t, n) {
    "use strict";
    var r = n(101),
        o = n(98),
        i = n(315),
        a = n(316),
        s = n(276),
        l = n(321),
        u = (n(102), n(369), function(e) {
            this._currentElement = e, this._stringText = "" + e, this._hostNode = null, this._hostParent = null, this._domID = 0, this._mountIndex = 0, this._closingComment = null, this._commentNodes = null
        });
    o(u.prototype, {
        mountComponent: function(e, t, n, r) {
            var o = n._idCounter++,
                i = " react-text: " + o + " ",
                u = " /react-text ";
            if (this._domID = o, this._hostParent = t, e.useCreateElement) {
                var c = n._ownerDocument,
                    d = c.createComment(i),
                    p = c.createComment(u),
                    f = a(c.createDocumentFragment());
                return a.queueChild(f, a(d)), this._stringText && a.queueChild(f, a(c.createTextNode(this._stringText))), a.queueChild(f, a(p)), s.precacheNode(this, d), this._closingComment = p, f
            }
            var h = l(this._stringText);
            return e.renderToStaticMarkup ? h : "<!--" + i + "-->" + h + "<!--" + u + "-->"
        },
        receiveComponent: function(e, t) {
            if (e !== this._currentElement) {
                this._currentElement = e;
                var n = "" + e;
                if (n !== this._stringText) {
                    this._stringText = n;
                    var r = this.getHostNode();
                    i.replaceDelimitedText(r[0], r[1], n)
                }
            }
        },
        getHostNode: function() {
            var e = this._commentNodes;
            if (e) return e;
            if (!this._closingComment)
                for (var t = s.getNodeFromInstance(this), n = t.nextSibling;;) {
                    if (null == n ? r("67", this._domID) : void 0, 8 === n.nodeType && " /react-text " === n.nodeValue) {
                        this._closingComment = n;
                        break
                    }
                    n = n.nextSibling
                }
            return e = [this._hostNode, this._closingComment], this._commentNodes = e, e
        },
        unmountComponent: function() {
            this._closingComment = null, this._commentNodes = null, s.uncacheNode(this)
        }
    }), e.exports = u
}, function(e, t, n) {
    "use strict";

    function r() {
        this.reinitializeTransaction()
    }
    var o = n(98),
        i = n(296),
        a = n(303),
        s = n(106),
        l = {
            initialize: s,
            close: function() {
                p.isBatchingUpdates = !1
            }
        },
        u = {
            initialize: s,
            close: i.flushBatchedUpdates.bind(i)
        },
        c = [u, l];
    o(r.prototype, a.Mixin, {
        getTransactionWrappers: function() {
            return c
        }
    });
    var d = new r,
        p = {
            isBatchingUpdates: !1,
            batchedUpdates: function(e, t, n, r, o, i) {
                var a = p.isBatchingUpdates;
                p.isBatchingUpdates = !0, a ? e(t, n, r, o, i) : d.perform(e, null, t, n, r, o, i)
            }
        };
    e.exports = p
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (; e._hostParent;) e = e._hostParent;
        var t = d.getNodeFromInstance(e),
            n = t.parentNode;
        return d.getClosestInstanceFromNode(n)
    }

    function o(e, t) {
        this.topLevelType = e, this.nativeEvent = t, this.ancestors = []
    }

    function i(e) {
        var t = f(e.nativeEvent),
            n = d.getClosestInstanceFromNode(t),
            o = n;
        do e.ancestors.push(o), o = o && r(o); while (o);
        for (var i = 0; i < e.ancestors.length; i++) n = e.ancestors[i], m._handleTopLevel(e.topLevelType, n, e.nativeEvent, f(e.nativeEvent))
    }

    function a(e) {
        var t = h(window);
        e(t)
    }
    var s = n(98),
        l = n(375),
        u = n(289),
        c = n(100),
        d = n(276),
        p = n(296),
        f = n(304),
        h = n(376);
    s(o.prototype, {
        destructor: function() {
            this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
        }
    }), c.addPoolingTo(o, c.twoArgumentPooler);
    var m = {
        _enabled: !0,
        _handleTopLevel: null,
        WINDOW_HANDLE: u.canUseDOM ? window : null,
        setHandleTopLevel: function(e) {
            m._handleTopLevel = e
        },
        setEnabled: function(e) {
            m._enabled = !!e
        },
        isEnabled: function() {
            return m._enabled
        },
        trapBubbledEvent: function(e, t, n) {
            var r = n;
            return r ? l.listen(r, t, m.dispatchEvent.bind(null, e)) : null
        },
        trapCapturedEvent: function(e, t, n) {
            var r = n;
            return r ? l.capture(r, t, m.dispatchEvent.bind(null, e)) : null
        },
        monitorScrollValue: function(e) {
            var t = a.bind(null, e);
            l.listen(window, "scroll", t)
        },
        dispatchEvent: function(e, t) {
            if (m._enabled) {
                var n = o.getPooled(e, t);
                try {
                    p.batchedUpdates(i, n)
                } finally {
                    o.release(n)
                }
            }
        }
    };
    e.exports = m
}, function(e, t, n) {
    "use strict";
    var r = n(106),
        o = {
            listen: function(e, t, n) {
                return e.addEventListener ? (e.addEventListener(t, n, !1), {
                    remove: function() {
                        e.removeEventListener(t, n, !1)
                    }
                }) : e.attachEvent ? (e.attachEvent("on" + t, n), {
                    remove: function() {
                        e.detachEvent("on" + t, n)
                    }
                }) : void 0
            },
            capture: function(e, t, n) {
                return e.addEventListener ? (e.addEventListener(t, n, !0), {
                    remove: function() {
                        e.removeEventListener(t, n, !0)
                    }
                }) : {
                    remove: r
                }
            },
            registerDefault: function() {}
        };
    e.exports = o
}, function(e, t) {
    "use strict";

    function n(e) {
        return e === window ? {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
        } : {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(277),
        o = n(283),
        i = n(285),
        a = n(352),
        s = n(115),
        l = n(363),
        u = n(341),
        c = n(364),
        d = n(296),
        p = {
            Component: a.injection,
            Class: s.injection,
            DOMProperty: r.injection,
            EmptyComponent: l.injection,
            EventPluginHub: o.injection,
            EventPluginUtils: i.injection,
            EventEmitter: u.injection,
            HostComponent: c.injection,
            Updates: d.injection
        };
    e.exports = p
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = i.getPooled(null), this.useCreateElement = e
    }
    var o = n(98),
        i = n(297),
        a = n(100),
        s = n(341),
        l = n(379),
        u = (n(302), n(303)),
        c = n(368),
        d = {
            initialize: l.getSelectionInformation,
            close: l.restoreSelection
        },
        p = {
            initialize: function() {
                var e = s.isEnabled();
                return s.setEnabled(!1), e
            },
            close: function(e) {
                s.setEnabled(e)
            }
        },
        f = {
            initialize: function() {
                this.reactMountReady.reset()
            },
            close: function() {
                this.reactMountReady.notifyAll()
            }
        },
        h = [d, p, f],
        m = {
            getTransactionWrappers: function() {
                return h
            },
            getReactMountReady: function() {
                return this.reactMountReady
            },
            getUpdateQueue: function() {
                return c
            },
            checkpoint: function() {
                return this.reactMountReady.checkpoint()
            },
            rollback: function(e) {
                this.reactMountReady.rollback(e)
            },
            destructor: function() {
                i.release(this.reactMountReady), this.reactMountReady = null
            }
        };
    o(r.prototype, u.Mixin, m), a.addPoolingTo(r), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return i(document.documentElement, e)
    }
    var o = n(380),
        i = n(382),
        a = n(330),
        s = n(385),
        l = {
            hasSelectionCapabilities: function(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
            },
            getSelectionInformation: function() {
                var e = s();
                return {
                    focusedElem: e,
                    selectionRange: l.hasSelectionCapabilities(e) ? l.getSelection(e) : null
                }
            },
            restoreSelection: function(e) {
                var t = s(),
                    n = e.focusedElem,
                    o = e.selectionRange;
                t !== n && r(n) && (l.hasSelectionCapabilities(n) && l.setSelection(n, o), a(n))
            },
            getSelection: function(e) {
                var t;
                if ("selectionStart" in e) t = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                    var n = document.selection.createRange();
                    n.parentElement() === e && (t = {
                        start: -n.moveStart("character", -e.value.length),
                        end: -n.moveEnd("character", -e.value.length)
                    })
                } else t = o.getOffsets(e);
                return t || {
                    start: 0,
                    end: 0
                }
            },
            setSelection: function(e, t) {
                var n = t.start,
                    r = t.end;
                if (void 0 === r && (r = n), "selectionStart" in e) e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length);
                else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                    var i = e.createTextRange();
                    i.collapse(!0), i.moveStart("character", n), i.moveEnd("character", r - n), i.select()
                } else o.setOffsets(e, t)
            }
        };
    e.exports = l
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return e === n && t === r
    }

    function o(e) {
        var t = document.selection,
            n = t.createRange(),
            r = n.text.length,
            o = n.duplicate();
        o.moveToElementText(e), o.setEndPoint("EndToStart", n);
        var i = o.text.length,
            a = i + r;
        return {
            start: i,
            end: a
        }
    }

    function i(e) {
        var t = window.getSelection && window.getSelection();
        if (!t || 0 === t.rangeCount) return null;
        var n = t.anchorNode,
            o = t.anchorOffset,
            i = t.focusNode,
            a = t.focusOffset,
            s = t.getRangeAt(0);
        try {
            s.startContainer.nodeType, s.endContainer.nodeType
        } catch (l) {
            return null
        }
        var u = r(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
            c = u ? 0 : s.toString().length,
            d = s.cloneRange();
        d.selectNodeContents(e), d.setEnd(s.startContainer, s.startOffset);
        var p = r(d.startContainer, d.startOffset, d.endContainer, d.endOffset),
            f = p ? 0 : d.toString().length,
            h = f + c,
            m = document.createRange();
        m.setStart(n, o), m.setEnd(i, a);
        var g = m.collapsed;
        return {
            start: g ? h : f,
            end: g ? f : h
        }
    }

    function a(e, t) {
        var n, r, o = document.selection.createRange().duplicate();
        void 0 === t.end ? (n = t.start, r = n) : t.start > t.end ? (n = t.end, r = t.start) : (n = t.start, r = t.end), o.moveToElementText(e), o.moveStart("character", n), o.setEndPoint("EndToStart", o), o.moveEnd("character", r - n), o.select()
    }

    function s(e, t) {
        if (window.getSelection) {
            var n = window.getSelection(),
                r = e[c()].length,
                o = Math.min(t.start, r),
                i = void 0 === t.end ? o : Math.min(t.end, r);
            if (!n.extend && o > i) {
                var a = i;
                i = o, o = a
            }
            var s = u(e, o),
                l = u(e, i);
            if (s && l) {
                var d = document.createRange();
                d.setStart(s.node, s.offset), n.removeAllRanges(), o > i ? (n.addRange(d), n.extend(l.node, l.offset)) : (d.setEnd(l.node, l.offset), n.addRange(d))
            }
        }
    }
    var l = n(289),
        u = n(381),
        c = n(291),
        d = l.canUseDOM && "selection" in document && !("getSelection" in window),
        p = {
            getOffsets: d ? o : i,
            setOffsets: d ? a : s
        };
    e.exports = p
}, function(e, t) {
    "use strict";

    function n(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function r(e) {
        for (; e;) {
            if (e.nextSibling) return e.nextSibling;
            e = e.parentNode
        }
    }

    function o(e, t) {
        for (var o = n(e), i = 0, a = 0; o;) {
            if (3 === o.nodeType) {
                if (a = i + o.textContent.length, i <= t && a >= t) return {
                    node: o,
                    offset: t - i
                };
                i = a
            }
            o = n(r(o))
        }
    }
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return !(!e || !t) && (e === t || !o(e) && (o(t) ? r(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }
    var o = n(383);
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return o(e) && 3 == e.nodeType
    }
    var o = n(384);
    e.exports = r
}, function(e, t) {
    "use strict";

    function n(e) {
        return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
    }
    e.exports = n
}, function(e, t) {
    "use strict";

    function n() {
        if ("undefined" == typeof document) return null;
        try {
            return document.activeElement || document.body
        } catch (e) {
            return document.body
        }
    }
    e.exports = n
}, function(e, t) {
    "use strict";
    var n = {
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace"
        },
        r = {
            accentHeight: "accent-height",
            accumulate: 0,
            additive: 0,
            alignmentBaseline: "alignment-baseline",
            allowReorder: "allowReorder",
            alphabetic: 0,
            amplitude: 0,
            arabicForm: "arabic-form",
            ascent: 0,
            attributeName: "attributeName",
            attributeType: "attributeType",
            autoReverse: "autoReverse",
            azimuth: 0,
            baseFrequency: "baseFrequency",
            baseProfile: "baseProfile",
            baselineShift: "baseline-shift",
            bbox: 0,
            begin: 0,
            bias: 0,
            by: 0,
            calcMode: "calcMode",
            capHeight: "cap-height",
            clip: 0,
            clipPath: "clip-path",
            clipRule: "clip-rule",
            clipPathUnits: "clipPathUnits",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            contentScriptType: "contentScriptType",
            contentStyleType: "contentStyleType",
            cursor: 0,
            cx: 0,
            cy: 0,
            d: 0,
            decelerate: 0,
            descent: 0,
            diffuseConstant: "diffuseConstant",
            direction: 0,
            display: 0,
            divisor: 0,
            dominantBaseline: "dominant-baseline",
            dur: 0,
            dx: 0,
            dy: 0,
            edgeMode: "edgeMode",
            elevation: 0,
            enableBackground: "enable-background",
            end: 0,
            exponent: 0,
            externalResourcesRequired: "externalResourcesRequired",
            fill: 0,
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            filter: 0,
            filterRes: "filterRes",
            filterUnits: "filterUnits",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            focusable: 0,
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            format: 0,
            from: 0,
            fx: 0,
            fy: 0,
            g1: 0,
            g2: 0,
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            glyphRef: "glyphRef",
            gradientTransform: "gradientTransform",
            gradientUnits: "gradientUnits",
            hanging: 0,
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            ideographic: 0,
            imageRendering: "image-rendering",
            "in": 0,
            in2: 0,
            intercept: 0,
            k: 0,
            k1: 0,
            k2: 0,
            k3: 0,
            k4: 0,
            kernelMatrix: "kernelMatrix",
            kernelUnitLength: "kernelUnitLength",
            kerning: 0,
            keyPoints: "keyPoints",
            keySplines: "keySplines",
            keyTimes: "keyTimes",
            lengthAdjust: "lengthAdjust",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            limitingConeAngle: "limitingConeAngle",
            local: 0,
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            markerHeight: "markerHeight",
            markerUnits: "markerUnits",
            markerWidth: "markerWidth",
            mask: 0,
            maskContentUnits: "maskContentUnits",
            maskUnits: "maskUnits",
            mathematical: 0,
            mode: 0,
            numOctaves: "numOctaves",
            offset: 0,
            opacity: 0,
            operator: 0,
            order: 0,
            orient: 0,
            orientation: 0,
            origin: 0,
            overflow: 0,
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pathLength: "pathLength",
            patternContentUnits: "patternContentUnits",
            patternTransform: "patternTransform",
            patternUnits: "patternUnits",
            pointerEvents: "pointer-events",
            points: 0,
            pointsAtX: "pointsAtX",
            pointsAtY: "pointsAtY",
            pointsAtZ: "pointsAtZ",
            preserveAlpha: "preserveAlpha",
            preserveAspectRatio: "preserveAspectRatio",
            primitiveUnits: "primitiveUnits",
            r: 0,
            radius: 0,
            refX: "refX",
            refY: "refY",
            renderingIntent: "rendering-intent",
            repeatCount: "repeatCount",
            repeatDur: "repeatDur",
            requiredExtensions: "requiredExtensions",
            requiredFeatures: "requiredFeatures",
            restart: 0,
            result: 0,
            rotate: 0,
            rx: 0,
            ry: 0,
            scale: 0,
            seed: 0,
            shapeRendering: "shape-rendering",
            slope: 0,
            spacing: 0,
            specularConstant: "specularConstant",
            specularExponent: "specularExponent",
            speed: 0,
            spreadMethod: "spreadMethod",
            startOffset: "startOffset",
            stdDeviation: "stdDeviation",
            stemh: 0,
            stemv: 0,
            stitchTiles: "stitchTiles",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            string: 0,
            stroke: 0,
            strokeDasharray: "stroke-dasharray",
            strokeDashoffset: "stroke-dashoffset",
            strokeLinecap: "stroke-linecap",
            strokeLinejoin: "stroke-linejoin",
            strokeMiterlimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            surfaceScale: "surfaceScale",
            systemLanguage: "systemLanguage",
            tableValues: "tableValues",
            targetX: "targetX",
            targetY: "targetY",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            textLength: "textLength",
            to: 0,
            transform: 0,
            u1: 0,
            u2: 0,
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicode: 0,
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            values: 0,
            vectorEffect: "vector-effect",
            version: 0,
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            viewBox: "viewBox",
            viewTarget: "viewTarget",
            visibility: 0,
            widths: 0,
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            x: 0,
            xHeight: "x-height",
            x1: 0,
            x2: 0,
            xChannelSelector: "xChannelSelector",
            xlinkActuate: "xlink:actuate",
            xlinkArcrole: "xlink:arcrole",
            xlinkHref: "xlink:href",
            xlinkRole: "xlink:role",
            xlinkShow: "xlink:show",
            xlinkTitle: "xlink:title",
            xlinkType: "xlink:type",
            xmlBase: "xml:base",
            xmlns: 0,
            xmlnsXlink: "xmlns:xlink",
            xmlLang: "xml:lang",
            xmlSpace: "xml:space",
            y: 0,
            y1: 0,
            y2: 0,
            yChannelSelector: "yChannelSelector",
            z: 0,
            zoomAndPan: "zoomAndPan"
        },
        o = {
            Properties: {},
            DOMAttributeNamespaces: {
                xlinkActuate: n.xlink,
                xlinkArcrole: n.xlink,
                xlinkHref: n.xlink,
                xlinkRole: n.xlink,
                xlinkShow: n.xlink,
                xlinkTitle: n.xlink,
                xlinkType: n.xlink,
                xmlBase: n.xml,
                xmlLang: n.xml,
                xmlSpace: n.xml
            },
            DOMAttributeNames: {}
        };
    Object.keys(r).forEach(function(e) {
        o.Properties[e] = 0, r[e] && (o.DOMAttributeNames[e] = r[e])
    }), e.exports = o
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if ("selectionStart" in e && u.hasSelectionCapabilities(e)) return {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        if (window.getSelection) {
            var t = window.getSelection();
            return {
                anchorNode: t.anchorNode,
                anchorOffset: t.anchorOffset,
                focusNode: t.focusNode,
                focusOffset: t.focusOffset
            }
        }
        if (document.selection) {
            var n = document.selection.createRange();
            return {
                parentElement: n.parentElement(),
                text: n.text,
                top: n.boundingTop,
                left: n.boundingLeft
            }
        }
    }

    function o(e, t) {
        if (w || null == y || y !== d()) return null;
        var n = r(y);
        if (!x || !h(x, n)) {
            x = n;
            var o = c.getPooled(v.select, b, e, t);
            return o.type = "select", o.target = y, a.accumulateTwoPhaseDispatches(o), o
        }
        return null
    }
    var i = n(281),
        a = n(282),
        s = n(289),
        l = n(276),
        u = n(379),
        c = n(293),
        d = n(385),
        p = n(306),
        f = n(119),
        h = n(361),
        m = i.topLevelTypes,
        g = s.canUseDOM && "documentMode" in document && document.documentMode <= 11,
        v = {
            select: {
                phasedRegistrationNames: {
                    bubbled: f({
                        onSelect: null
                    }),
                    captured: f({
                        onSelectCapture: null
                    })
                },
                dependencies: [m.topBlur, m.topContextMenu, m.topFocus, m.topKeyDown, m.topMouseDown, m.topMouseUp, m.topSelectionChange]
            }
        },
        y = null,
        b = null,
        x = null,
        w = !1,
        k = !1,
        _ = f({
            onSelect: null
        }),
        C = {
            eventTypes: v,
            extractEvents: function(e, t, n, r) {
                if (!k) return null;
                var i = t ? l.getNodeFromInstance(t) : window;
                switch (e) {
                    case m.topFocus:
                        (p(i) || "true" === i.contentEditable) && (y = i, b = t, x = null);
                        break;
                    case m.topBlur:
                        y = null, b = null, x = null;
                        break;
                    case m.topMouseDown:
                        w = !0;
                        break;
                    case m.topContextMenu:
                    case m.topMouseUp:
                        return w = !1, o(n, r);
                    case m.topSelectionChange:
                        if (g) break;
                    case m.topKeyDown:
                    case m.topKeyUp:
                        return o(n, r)
                }
                return null
            },
            didPutListener: function(e, t, n) {
                t === _ && (k = !0)
            }
        };
    e.exports = C
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return "." + e._rootNodeID
    }
    var o = n(101),
        i = n(281),
        a = n(375),
        s = n(282),
        l = n(276),
        u = n(389),
        c = n(390),
        d = n(293),
        p = n(391),
        f = n(392),
        h = n(309),
        m = n(395),
        g = n(396),
        v = n(397),
        y = n(310),
        b = n(398),
        x = n(106),
        w = n(393),
        k = (n(102), n(119)),
        _ = i.topLevelTypes,
        C = {
            abort: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onAbort: !0
                    }),
                    captured: k({
                        onAbortCapture: !0
                    })
                }
            },
            animationEnd: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onAnimationEnd: !0
                    }),
                    captured: k({
                        onAnimationEndCapture: !0
                    })
                }
            },
            animationIteration: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onAnimationIteration: !0
                    }),
                    captured: k({
                        onAnimationIterationCapture: !0
                    })
                }
            },
            animationStart: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onAnimationStart: !0
                    }),
                    captured: k({
                        onAnimationStartCapture: !0
                    })
                }
            },
            blur: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onBlur: !0
                    }),
                    captured: k({
                        onBlurCapture: !0
                    })
                }
            },
            canPlay: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onCanPlay: !0
                    }),
                    captured: k({
                        onCanPlayCapture: !0
                    })
                }
            },
            canPlayThrough: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onCanPlayThrough: !0
                    }),
                    captured: k({
                        onCanPlayThroughCapture: !0
                    })
                }
            },
            click: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onClick: !0
                    }),
                    captured: k({
                        onClickCapture: !0
                    })
                }
            },
            contextMenu: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onContextMenu: !0
                    }),
                    captured: k({
                        onContextMenuCapture: !0
                    })
                }
            },
            copy: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onCopy: !0
                    }),
                    captured: k({
                        onCopyCapture: !0
                    })
                }
            },
            cut: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onCut: !0
                    }),
                    captured: k({
                        onCutCapture: !0
                    })
                }
            },
            doubleClick: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onDoubleClick: !0
                    }),
                    captured: k({
                        onDoubleClickCapture: !0
                    })
                }
            },
            drag: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onDrag: !0
                    }),
                    captured: k({
                        onDragCapture: !0
                    })
                }
            },
            dragEnd: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onDragEnd: !0
                    }),
                    captured: k({
                        onDragEndCapture: !0
                    })
                }
            },
            dragEnter: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onDragEnter: !0
                    }),
                    captured: k({
                        onDragEnterCapture: !0
                    })
                }
            },
            dragExit: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onDragExit: !0
                    }),
                    captured: k({
                        onDragExitCapture: !0
                    })
                }
            },
            dragLeave: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onDragLeave: !0
                    }),
                    captured: k({
                        onDragLeaveCapture: !0
                    })
                }
            },
            dragOver: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onDragOver: !0
                    }),
                    captured: k({
                        onDragOverCapture: !0
                    })
                }
            },
            dragStart: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onDragStart: !0
                    }),
                    captured: k({
                        onDragStartCapture: !0
                    })
                }
            },
            drop: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onDrop: !0
                    }),
                    captured: k({
                        onDropCapture: !0
                    })
                }
            },
            durationChange: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onDurationChange: !0
                    }),
                    captured: k({
                        onDurationChangeCapture: !0
                    })
                }
            },
            emptied: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onEmptied: !0
                    }),
                    captured: k({
                        onEmptiedCapture: !0
                    })
                }
            },
            encrypted: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onEncrypted: !0
                    }),
                    captured: k({
                        onEncryptedCapture: !0
                    })
                }
            },
            ended: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onEnded: !0
                    }),
                    captured: k({
                        onEndedCapture: !0
                    })
                }
            },
            error: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onError: !0
                    }),
                    captured: k({
                        onErrorCapture: !0
                    })
                }
            },
            focus: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onFocus: !0
                    }),
                    captured: k({
                        onFocusCapture: !0
                    })
                }
            },
            input: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onInput: !0
                    }),
                    captured: k({
                        onInputCapture: !0
                    })
                }
            },
            invalid: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onInvalid: !0
                    }),
                    captured: k({
                        onInvalidCapture: !0
                    })
                }
            },
            keyDown: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onKeyDown: !0
                    }),
                    captured: k({
                        onKeyDownCapture: !0
                    })
                }
            },
            keyPress: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onKeyPress: !0
                    }),
                    captured: k({
                        onKeyPressCapture: !0
                    })
                }
            },
            keyUp: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onKeyUp: !0
                    }),
                    captured: k({
                        onKeyUpCapture: !0
                    })
                }
            },
            load: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onLoad: !0
                    }),
                    captured: k({
                        onLoadCapture: !0
                    })
                }
            },
            loadedData: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onLoadedData: !0
                    }),
                    captured: k({
                        onLoadedDataCapture: !0
                    })
                }
            },
            loadedMetadata: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onLoadedMetadata: !0
                    }),
                    captured: k({
                        onLoadedMetadataCapture: !0
                    })
                }
            },
            loadStart: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onLoadStart: !0
                    }),
                    captured: k({
                        onLoadStartCapture: !0
                    })
                }
            },
            mouseDown: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onMouseDown: !0
                    }),
                    captured: k({
                        onMouseDownCapture: !0
                    })
                }
            },
            mouseMove: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onMouseMove: !0
                    }),
                    captured: k({
                        onMouseMoveCapture: !0
                    })
                }
            },
            mouseOut: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onMouseOut: !0
                    }),
                    captured: k({
                        onMouseOutCapture: !0
                    })
                }
            },
            mouseOver: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onMouseOver: !0
                    }),
                    captured: k({
                        onMouseOverCapture: !0
                    })
                }
            },
            mouseUp: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onMouseUp: !0
                    }),
                    captured: k({
                        onMouseUpCapture: !0
                    })
                }
            },
            paste: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onPaste: !0
                    }),
                    captured: k({
                        onPasteCapture: !0
                    })
                }
            },
            pause: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onPause: !0
                    }),
                    captured: k({
                        onPauseCapture: !0
                    })
                }
            },
            play: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onPlay: !0
                    }),
                    captured: k({
                        onPlayCapture: !0
                    })
                }
            },
            playing: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onPlaying: !0
                    }),
                    captured: k({
                        onPlayingCapture: !0
                    })
                }
            },
            progress: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onProgress: !0
                    }),
                    captured: k({
                        onProgressCapture: !0
                    })
                }
            },
            rateChange: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onRateChange: !0
                    }),
                    captured: k({
                        onRateChangeCapture: !0
                    })
                }
            },
            reset: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onReset: !0
                    }),
                    captured: k({
                        onResetCapture: !0
                    })
                }
            },
            scroll: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onScroll: !0
                    }),
                    captured: k({
                        onScrollCapture: !0
                    })
                }
            },
            seeked: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onSeeked: !0
                    }),
                    captured: k({
                        onSeekedCapture: !0
                    })
                }
            },
            seeking: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onSeeking: !0
                    }),
                    captured: k({
                        onSeekingCapture: !0
                    })
                }
            },
            stalled: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onStalled: !0
                    }),
                    captured: k({
                        onStalledCapture: !0
                    })
                }
            },
            submit: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onSubmit: !0
                    }),
                    captured: k({
                        onSubmitCapture: !0
                    })
                }
            },
            suspend: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onSuspend: !0
                    }),
                    captured: k({
                        onSuspendCapture: !0
                    })
                }
            },
            timeUpdate: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onTimeUpdate: !0
                    }),
                    captured: k({
                        onTimeUpdateCapture: !0
                    })
                }
            },
            touchCancel: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onTouchCancel: !0
                    }),
                    captured: k({
                        onTouchCancelCapture: !0
                    })
                }
            },
            touchEnd: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onTouchEnd: !0
                    }),
                    captured: k({
                        onTouchEndCapture: !0
                    })
                }
            },
            touchMove: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onTouchMove: !0
                    }),
                    captured: k({
                        onTouchMoveCapture: !0
                    })
                }
            },
            touchStart: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onTouchStart: !0
                    }),
                    captured: k({
                        onTouchStartCapture: !0
                    })
                }
            },
            transitionEnd: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onTransitionEnd: !0
                    }),
                    captured: k({
                        onTransitionEndCapture: !0
                    })
                }
            },
            volumeChange: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onVolumeChange: !0
                    }),
                    captured: k({
                        onVolumeChangeCapture: !0
                    })
                }
            },
            waiting: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onWaiting: !0
                    }),
                    captured: k({
                        onWaitingCapture: !0
                    })
                }
            },
            wheel: {
                phasedRegistrationNames: {
                    bubbled: k({
                        onWheel: !0
                    }),
                    captured: k({
                        onWheelCapture: !0
                    })
                }
            }
        },
        E = {
            topAbort: C.abort,
            topAnimationEnd: C.animationEnd,
            topAnimationIteration: C.animationIteration,
            topAnimationStart: C.animationStart,
            topBlur: C.blur,
            topCanPlay: C.canPlay,
            topCanPlayThrough: C.canPlayThrough,
            topClick: C.click,
            topContextMenu: C.contextMenu,
            topCopy: C.copy,
            topCut: C.cut,
            topDoubleClick: C.doubleClick,
            topDrag: C.drag,
            topDragEnd: C.dragEnd,
            topDragEnter: C.dragEnter,
            topDragExit: C.dragExit,
            topDragLeave: C.dragLeave,
            topDragOver: C.dragOver,
            topDragStart: C.dragStart,
            topDrop: C.drop,
            topDurationChange: C.durationChange,
            topEmptied: C.emptied,
            topEncrypted: C.encrypted,
            topEnded: C.ended,
            topError: C.error,
            topFocus: C.focus,
            topInput: C.input,
            topInvalid: C.invalid,
            topKeyDown: C.keyDown,
            topKeyPress: C.keyPress,
            topKeyUp: C.keyUp,
            topLoad: C.load,
            topLoadedData: C.loadedData,
            topLoadedMetadata: C.loadedMetadata,
            topLoadStart: C.loadStart,
            topMouseDown: C.mouseDown,
            topMouseMove: C.mouseMove,
            topMouseOut: C.mouseOut,
            topMouseOver: C.mouseOver,
            topMouseUp: C.mouseUp,
            topPaste: C.paste,
            topPause: C.pause,
            topPlay: C.play,
            topPlaying: C.playing,
            topProgress: C.progress,
            topRateChange: C.rateChange,
            topReset: C.reset,
            topScroll: C.scroll,
            topSeeked: C.seeked,
            topSeeking: C.seeking,
            topStalled: C.stalled,
            topSubmit: C.submit,
            topSuspend: C.suspend,
            topTimeUpdate: C.timeUpdate,
            topTouchCancel: C.touchCancel,
            topTouchEnd: C.touchEnd,
            topTouchMove: C.touchMove,
            topTouchStart: C.touchStart,
            topTransitionEnd: C.transitionEnd,
            topVolumeChange: C.volumeChange,
            topWaiting: C.waiting,
            topWheel: C.wheel
        };
    for (var S in E) E[S].dependencies = [S];
    var T = k({
            onClick: null
        }),
        A = {},
        M = {
            eventTypes: C,
            extractEvents: function(e, t, n, r) {
                var i = E[e];
                if (!i) return null;
                var a;
                switch (e) {
                    case _.topAbort:
                    case _.topCanPlay:
                    case _.topCanPlayThrough:
                    case _.topDurationChange:
                    case _.topEmptied:
                    case _.topEncrypted:
                    case _.topEnded:
                    case _.topError:
                    case _.topInput:
                    case _.topInvalid:
                    case _.topLoad:
                    case _.topLoadedData:
                    case _.topLoadedMetadata:
                    case _.topLoadStart:
                    case _.topPause:
                    case _.topPlay:
                    case _.topPlaying:
                    case _.topProgress:
                    case _.topRateChange:
                    case _.topReset:
                    case _.topSeeked:
                    case _.topSeeking:
                    case _.topStalled:
                    case _.topSubmit:
                    case _.topSuspend:
                    case _.topTimeUpdate:
                    case _.topVolumeChange:
                    case _.topWaiting:
                        a = d;
                        break;
                    case _.topKeyPress:
                        if (0 === w(n)) return null;
                    case _.topKeyDown:
                    case _.topKeyUp:
                        a = f;
                        break;
                    case _.topBlur:
                    case _.topFocus:
                        a = p;
                        break;
                    case _.topClick:
                        if (2 === n.button) return null;
                    case _.topContextMenu:
                    case _.topDoubleClick:
                    case _.topMouseDown:
                    case _.topMouseMove:
                    case _.topMouseOut:
                    case _.topMouseOver:
                    case _.topMouseUp:
                        a = h;
                        break;
                    case _.topDrag:
                    case _.topDragEnd:
                    case _.topDragEnter:
                    case _.topDragExit:
                    case _.topDragLeave:
                    case _.topDragOver:
                    case _.topDragStart:
                    case _.topDrop:
                        a = m;
                        break;
                    case _.topTouchCancel:
                    case _.topTouchEnd:
                    case _.topTouchMove:
                    case _.topTouchStart:
                        a = g;
                        break;
                    case _.topAnimationEnd:
                    case _.topAnimationIteration:
                    case _.topAnimationStart:
                        a = u;
                        break;
                    case _.topTransitionEnd:
                        a = v;
                        break;
                    case _.topScroll:
                        a = y;
                        break;
                    case _.topWheel:
                        a = b;
                        break;
                    case _.topCopy:
                    case _.topCut:
                    case _.topPaste:
                        a = c
                }
                a ? void 0 : o("86", e);
                var l = a.getPooled(i, t, n, r);
                return s.accumulateTwoPhaseDispatches(l), l
            },
            didPutListener: function(e, t, n) {
                if (t === T) {
                    var o = r(e),
                        i = l.getNodeFromInstance(e);
                    A[o] || (A[o] = a.listen(i, "click", x))
                }
            },
            willDeleteListener: function(e, t) {
                if (t === T) {
                    var n = r(e);
                    A[n].remove(), delete A[n]
                }
            }
        };
    e.exports = M
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(293),
        i = {
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        };
    o.augmentClass(r, i), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(293),
        i = {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        };
    o.augmentClass(r, i), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(310),
        i = {
            relatedTarget: null
        };
    o.augmentClass(r, i), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(310),
        i = n(393),
        a = n(394),
        s = n(312),
        l = {
            key: a,
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: s,
            charCode: function(e) {
                return "keypress" === e.type ? i(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? i(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        };
    o.augmentClass(r, l), e.exports = r
}, function(e, t) {
    "use strict";

    function n(e) {
        var t, n = e.keyCode;
        return "charCode" in e ? (t = e.charCode, 0 === t && 13 === n && (t = 13)) : t = n, t >= 32 || 13 === t ? t : 0
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e.key) {
            var t = i[e.key] || e.key;
            if ("Unidentified" !== t) return t
        }
        if ("keypress" === e.type) {
            var n = o(e);
            return 13 === n ? "Enter" : String.fromCharCode(n)
        }
        return "keydown" === e.type || "keyup" === e.type ? a[e.keyCode] || "Unidentified" : ""
    }
    var o = n(393),
        i = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        a = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        };
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(309),
        i = {
            dataTransfer: null
        };
    o.augmentClass(r, i), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(310),
        i = n(312),
        a = {
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: i
        };
    o.augmentClass(r, a), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(293),
        i = {
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        };
    o.augmentClass(r, i), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return o.call(this, e, t, n, r)
    }
    var o = n(309),
        i = {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        };
    o.augmentClass(r, i), e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = Math.min(e.length, t.length), r = 0; r < n; r++)
            if (e.charAt(r) !== t.charAt(r)) return r;
        return e.length === t.length ? -1 : n
    }

    function o(e) {
        return e ? e.nodeType === O ? e.documentElement : e.firstChild : null
    }

    function i(e) {
        return e.getAttribute && e.getAttribute(N) || ""
    }

    function a(e, t, n, r, o) {
        var i;
        if (w.logTopLevelRenders) {
            var a = e._currentElement.props,
                s = a.type;
            i = "React mount: " + ("string" == typeof s ? s : s.displayName || s.name), console.time(i)
        }
        var l = C.mountComponent(e, n, null, y(e, t), o, 0);
        i && console.timeEnd(i), e._renderedComponent._topLevelWrapper = e, W._mountImageIntoNode(l, t, e, r, n)
    }

    function s(e, t, n, r) {
        var o = S.ReactReconcileTransaction.getPooled(!n && b.useCreateElement);
        o.perform(a, null, e, t, o, n, r), S.ReactReconcileTransaction.release(o)
    }

    function l(e, t, n) {
        for (C.unmountComponent(e, n), t.nodeType === O && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild)
    }

    function u(e) {
        var t = o(e);
        if (t) {
            var n = v.getInstanceFromNode(t);
            return !(!n || !n._hostParent)
        }
    }

    function c(e) {
        return !(!e || e.nodeType !== I && e.nodeType !== O && e.nodeType !== P)
    }

    function d(e) {
        var t = o(e),
            n = t && v.getInstanceFromNode(t);
        return n && !n._hostParent ? n : null
    }

    function p(e) {
        var t = d(e);
        return t ? t._hostContainerInfo._topLevelWrapper : null
    }
    var f = n(101),
        h = n(316),
        m = n(277),
        g = n(341),
        v = (n(104), n(276)),
        y = n(400),
        b = n(401),
        x = n(103),
        w = n(298),
        k = n(353),
        _ = (n(302), n(402)),
        C = n(299),
        E = n(368),
        S = n(296),
        T = n(113),
        A = n(356),
        M = (n(102), n(318)),
        L = n(362),
        N = (n(105), m.ID_ATTRIBUTE_NAME),
        D = m.ROOT_ATTRIBUTE_NAME,
        I = 1,
        O = 9,
        P = 11,
        R = {},
        F = 1,
        z = function() {
            this.rootID = F++
        };
    z.prototype.isReactComponent = {}, z.prototype.render = function() {
        return this.props
    };
    var W = {
        TopLevelWrapper: z,
        _instancesByReactRootID: R,
        scrollMonitor: function(e, t) {
            t()
        },
        _updateRootComponent: function(e, t, n, r, o) {
            return W.scrollMonitor(r, function() {
                E.enqueueElementInternal(e, t, n), o && E.enqueueCallbackInternal(e, o)
            }), e
        },
        _renderNewRootComponent: function(e, t, n, r) {
            c(t) ? void 0 : f("37"), g.ensureScrollValueMonitoring();
            var o = A(e, !1);
            S.batchedUpdates(s, o, t, n, r);
            var i = o._instance.rootID;
            return R[i] = o, o
        },
        renderSubtreeIntoContainer: function(e, t, n, r) {
            return null != e && k.has(e) ? void 0 : f("38"), W._renderSubtreeIntoContainer(e, t, n, r)
        },
        _renderSubtreeIntoContainer: function(e, t, n, r) {
            E.validateCallback(r, "ReactDOM.render"), x.isValidElement(t) ? void 0 : f("39", "string" == typeof t ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof t ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != t && void 0 !== t.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
            var a, s = x(z, null, null, null, null, null, t);
            if (e) {
                var l = k.get(e);
                a = l._processChildContext(l._context)
            } else a = T;
            var c = p(n);
            if (c) {
                var d = c._currentElement,
                    h = d.props;
                if (L(h, t)) {
                    var m = c._renderedComponent.getPublicInstance(),
                        g = r && function() {
                            r.call(m)
                        };
                    return W._updateRootComponent(c, s, a, n, g), m
                }
                W.unmountComponentAtNode(n)
            }
            var v = o(n),
                y = v && !!i(v),
                b = u(n),
                w = y && !c && !b,
                _ = W._renderNewRootComponent(s, n, w, a)._renderedComponent.getPublicInstance();
            return r && r.call(_), _
        },
        render: function(e, t, n) {
            return W._renderSubtreeIntoContainer(null, e, t, n)
        },
        unmountComponentAtNode: function(e) {
            c(e) ? void 0 : f("40");
            var t = p(e);
            if (!t) {
                u(e), 1 === e.nodeType && e.hasAttribute(D);
                return !1
            }
            return delete R[t._instance.rootID], S.batchedUpdates(l, t, e, !1), !0
        },
        _mountImageIntoNode: function(e, t, n, i, a) {
            if (c(t) ? void 0 : f("41"), i) {
                var s = o(t);
                if (_.canReuseMarkup(e, s)) return void v.precacheNode(n, s);
                var l = s.getAttribute(_.CHECKSUM_ATTR_NAME);
                s.removeAttribute(_.CHECKSUM_ATTR_NAME);
                var u = s.outerHTML;
                s.setAttribute(_.CHECKSUM_ATTR_NAME, l);
                var d = e,
                    p = r(d, u),
                    m = " (client) " + d.substring(p - 20, p + 20) + "\n (server) " + u.substring(p - 20, p + 20);
                t.nodeType === O ? f("42", m) : void 0
            }
            if (t.nodeType === O ? f("43") : void 0, a.useCreateElement) {
                for (; t.lastChild;) t.removeChild(t.lastChild);
                h.insertTreeBefore(t, e, null)
            } else M(t, e), v.precacheNode(n, t.firstChild)
        }
    };
    e.exports = W
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = {
            _topLevelWrapper: e,
            _idCounter: 1,
            _ownerDocument: t ? t.nodeType === o ? t : t.ownerDocument : null,
            _node: t,
            _tag: t ? t.nodeName.toLowerCase() : null,
            _namespaceURI: t ? t.namespaceURI : null
        };
        return n
    }
    var o = (n(369), 9);
    e.exports = r
}, function(e, t) {
    "use strict";
    var n = {
        useCreateElement: !0
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(403),
        o = /\/?>/,
        i = /^<\!\-\-/,
        a = {
            CHECKSUM_ATTR_NAME: "data-react-checksum",
            addChecksumToMarkup: function(e) {
                var t = r(e);
                return i.test(e) ? e : e.replace(o, " " + a.CHECKSUM_ATTR_NAME + '="' + t + '"$&')
            },
            canReuseMarkup: function(e, t) {
                var n = t.getAttribute(a.CHECKSUM_ATTR_NAME);
                n = n && parseInt(n, 10);
                var o = r(e);
                return o === n
            }
        };
    e.exports = a
}, function(e, t) {
    "use strict";

    function n(e) {
        for (var t = 1, n = 0, o = 0, i = e.length, a = i & -4; o < a;) {
            for (var s = Math.min(o + 4096, a); o < s; o += 4) n += (t += e.charCodeAt(o)) + (t += e.charCodeAt(o + 1)) + (t += e.charCodeAt(o + 2)) + (t += e.charCodeAt(o + 3));
            t %= r, n %= r
        }
        for (; o < i; o++) n += t += e.charCodeAt(o);
        return t %= r, n %= r, t | n << 16
    }
    var r = 65521;
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = a.get(e);
        return t ? (t = s(t), t ? i.getNodeFromInstance(t) : null) : void("function" == typeof e.render ? o("44") : o("45", Object.keys(e)))
    }
    var o = n(101),
        i = (n(104), n(276)),
        a = n(353),
        s = n(405);
    n(102), n(105);
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var t;
            (t = e._renderedNodeType) === o.COMPOSITE;) e = e._renderedComponent;
        return t === o.HOST ? e._renderedComponent : t === o.EMPTY ? null : void 0
    }
    var o = n(358);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(399);
    e.exports = r.renderSubtreeIntoContainer
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(t) {
            var n = e.location.hash.substring(2);
            if (isNaN(n))
                for (var r = 0; r < t.length; r++)
                    if (t[r].options.id === n) return r;
            return Number(n) || 0
        }

        function i(e) {
            return e
        }

        function a(e) {
            var t = (e[0].options || {}).defaults;
            return e.forEach(function(e, n) {
                e.options = (0, b.normalizeOptions)({}, t, e.options), e.url = "#/" + (e.options.id || n), e.contentConverter || (e.contentConverter = i)
            }), e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(200),
            l = r(s),
            u = n(204),
            c = r(u),
            d = n(205),
            p = r(d),
            f = n(209),
            h = r(f),
            m = n(210),
            g = r(m),
            v = n(96),
            y = r(v),
            b = n(408),
            x = n(269),
            w = function(t) {
                function n(e) {
                    (0, c["default"])(this, n);
                    var t = (0, h["default"])(this, (n.__proto__ || (0, l["default"])(n)).call(this, e)),
                        r = a(e.slides);
                    return t.state = {
                        slides: r,
                        slideIndex: o(r)
                    }, t.nextSlide = t.nextSlide.bind(t), t.previousSlide = t.previousSlide.bind(t), t.goToSlide = t.goToSlide.bind(t), t
                }
                return (0, g["default"])(n, t), (0, p["default"])(n, [{
                    key: "componentWillMount",
                    value: function() {
                        var t = this;
                        e.onhashchange = function() {
                            return t.goToSlide(o(t.state.slides))
                        }
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this.state,
                            t = e.slides,
                            n = e.slideIndex;
                        (0, x.publish)("SITE.LOADED", {
                            slide: t[n],
                            slideIndex: n,
                            slides: t
                        })
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return this.props !== e || (t.slides !== this.state.slides || t.slideIndex !== this.state.slideIndex)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var t = this.state,
                            n = t.slides,
                            r = t.slideIndex,
                            i = n[r];
                        o(n) !== r && (e.location.hash = i.url)
                    }
                }, {
                    key: "nextSlide",
                    value: function() {
                        this.state.slideIndex < this.state.slides.length - 1 && this.setState({
                            slideIndex: this.state.slideIndex + 1
                        })
                    }
                }, {
                    key: "previousSlide",
                    value: function() {
                        this.state.slideIndex > 0 && this.setState({
                            slideIndex: this.state.slideIndex - 1
                        })
                    }
                }, {
                    key: "goToSlide",
                    value: function(e) {
                        e >= this.state.slides.length || e < 0 || this.setState({
                            slideIndex: e
                        })
                    }
                }, {
                    key: "getChildContext",
                    value: function() {
                        var e = this.state,
                            t = e.slides,
                            n = e.slideIndex;
                        return {
                            slide: t[n],
                            slideIndex: n,
                            slides: t
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.slides,
                            n = e.slideIndex;
                        return y["default"].cloneElement(y["default"].Children.only(this.props.children), {
                            slide: t[n],
                            slideIndex: n,
                            slides: t,
                            nextSlide: this.nextSlide,
                            previousSlide: this.previousSlide,
                            goToSlide: this.goToSlide
                        })
                    }
                }]), n
            }(v.Component);
        t["default"] = w, w.propTypes = {
            slides: v.PropTypes.arrayOf(v.PropTypes.object).isRequired,
            children: v.PropTypes.node
        }, w.childContextTypes = {
            slides: v.PropTypes.arrayOf(v.PropTypes.object).isRequired,
            slide: v.PropTypes.object,
            slideIndex: v.PropTypes.number
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        for (var n in e)
            if (t.hasOwnProperty(n)) {
                var r = e[n],
                    o = void 0;
                switch ((0, u["default"])(t[n])) {
                    case "function":
                        var i = t[n](r),
                            a = (0, s["default"])(i, 2);
                        o = a[0], r = a[1], delete e[n], e[o] = r;
                        break;
                    case "string":
                        delete e[n], e[t[n]] = r
                }
            }
        return e
    }

    function i() {
        for (var e = {}, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return n.forEach(function(t) {
            for (var n in t) n in e && p[n] ? e[n] = p[n](e[n], t[n]) : e[n] = t[n]
        }), o(e, f)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(409),
        s = r(a),
        l = n(42),
        u = r(l),
        c = n(262),
        d = r(c);
    t.normalizeOptions = i;
    var p = {
            class_names: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.reduce(function(e, t) {
                    return e.push.apply(e, (0, d["default"])(t)), e
                }, [])
            }
        },
        f = {
            class_names: "classNames",
            hide_toc: "hideTOC",
            layout_data: "layoutData",
            content_type: "contentType",
            scale: function(e) {
                return ["scale", o(e, {
                    content_width: "contentWidth",
                    column_width: "columnWidth",
                    max_font_size: "maxFontSize"
                })]
            }
        }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(410),
        i = r(o),
        a = n(413),
        s = r(a);
    t["default"] = function() {
        function e(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, l = (0, s["default"])(e); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (u) {
                o = !0, i = u
            } finally {
                try {
                    !r && l["return"] && l["return"]()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if ((0, i["default"])(Object(t))) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
}, function(e, t, n) {
    e.exports = {
        "default": n(411),
        __esModule: !0
    }
}, function(e, t, n) {
    n(58), n(45), e.exports = n(412)
}, function(e, t, n) {
    var r = n(87),
        o = n(56)("iterator"),
        i = n(50);
    e.exports = n(10).isIterable = function(e) {
        var t = Object(e);
        return void 0 !== t[o] || "@@iterator" in t || i.hasOwnProperty(r(t))
    }
}, function(e, t, n) {
    e.exports = {
        "default": n(414),
        __esModule: !0
    }
}, function(e, t, n) {
    n(58), n(45), e.exports = n(415)
}, function(e, t, n) {
    var r = n(15),
        o = n(86);
    e.exports = n(10).getIterator = function(e) {
        var t = o(e);
        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
        return r(t.call(e))
    }
}, function(e, t) {
    (function(e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = 768,
            r = e.document.documentElement.clientWidth;
        t.IS_MOBILE = r <= n
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    "use strict";

    function n(e, t, n) {
        var o = void 0;
        return i.hasOwnProperty(e) && i[e].hasOwnProperty(t) && (o = i[e][t]), null == o && (r(e, t, n), o = n), o
    }

    function r(e, t, n) {
        var r = i[e];
        r || (r = i[e] = {}), r[t] = n
    }

    function o(e) {
        return i.map(function(t) {
            return t[e]
        }).filter(function(e) {
            return e
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getSlideCacheData = n, t.setSlideCacheData = r, t.getAllCacheData = o;
    var i = []
}, function(e, t) {
    "use strict";

    function n(e) {
        return e.reduce(function(e, t) {
            var n = e[e.length - 1];
            return !Array.isArray(n) || t.options.chapter !== n[0].options.chapter && t.pathHash !== n[0].pathHash ? t.options.chapter ? e.push([t]) : e.push(t) : n.push(t), e
        }, [])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.groupByChapter = n
}, function(e, t) {
    "use strict";

    function n(e) {
        return r(e) ? {
            src: e
        } : o(e) ? e : null
    }

    function r(e) {
        return "string" == typeof e && (i.test(e) || a.test(e))
    }

    function o(e) {
        return Boolean(e) && r(e.src)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.normalizeImageData = n, t.isPath = r, t.isImageObject = o;
    var i = /^https?:/,
        a = /(?:\.{0,2}\/)?(?:[^\/]\/)*[^\/.]+\.\w{2,}/
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function o(e) {
        if (s.indexOf(e) === -1) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            e.apply(void 0, [a].concat(n)), s.push(e)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.register = o;
    var i = n(256),
        a = r(i),
        s = []
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.reduce(function(e, t) {
            return e[t] = !0, e
        }, {});
        return a.filter(function(e) {
            return e.tags.some(function(e) {
                return t[e]
            })
        })
    }

    function o(e, t, n) {
        if (s.indexOf(t) === -1) throw new Error('"' + t + '" is not a valid mode for an extension.');
        var r = {
            component: e,
            tags: n,
            mode: t
        };
        return a.push(r), (0, i.publish)("EXTENSIONS.UPDATE"),
            function() {
                r && (a.splice(a.indexOf(r), 1), r = null, (0, i.publish)("EXTENSIONS.UPDATE"))
            }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getRegisteredExtensions = r, t.registerExtension = o;
    var i = n(269),
        a = [],
        s = ["before", "after", "wrap", "replace"]
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        var t = e.className,
            n = e.children;
        return l["default"].createElement("div", {
            id: "exerslide-page",
            className: t
        }, l["default"].createElement(c["default"], {
            togglable: !0
        }), l["default"].createElement(a["default"], {
            tags: ["main"]
        }, l["default"].createElement("div", {
            id: "exerslide-main",
            className: "flex-column"
        }, l["default"].createElement("img", {
            style: {
                alignSelf: "flex-end",
                width: 122,
                margin: 10
            },
            src: "logo-teach-access.svg",
            alt: "Teach Access Bridge"
        }), n, l["default"].createElement(p["default"], {
            className: "flex-item-fix"
        }))))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = o;
    var i = n(423),
        a = r(i),
        s = n(96),
        l = r(s),
        u = n(424),
        c = r(u),
        d = n(427),
        p = r(d);
    o.propTypes = {
        className: l["default"].PropTypes.string,
        children: l["default"].PropTypes.node
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        var t = {};
        return (0, _.getRegisteredExtensions)(e).forEach(function(e) {
            var n = e.component,
                r = e.mode;
            t[r] || (t[r] = []), t[r].push(n)
        }), t
    }

    function i(e, t) {
        return (0, s["default"])(e).concat((0, s["default"])(t)).some(function(n) {
            return !e[n] || !t[n] || e[n].length !== t[n].length || e[n].some(function(e, r) {
                return e !== t[n][r]
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(258),
        s = r(a),
        l = n(262),
        u = r(l),
        c = n(200),
        d = r(c),
        p = n(204),
        f = r(p),
        h = n(205),
        m = r(h),
        g = n(209),
        v = r(g),
        y = n(210),
        b = r(y),
        x = n(96),
        w = r(x),
        k = n(269),
        _ = n(421),
        C = function(e) {
            function t(e) {
                (0, f["default"])(this, t);
                var n = (0, v["default"])(this, (t.__proto__ || (0, d["default"])(t)).call(this, e));
                return n.state = {
                    components: o(e.tags)
                }, n
            }
            return (0, b["default"])(t, e), (0, m["default"])(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this._unsubscribe = (0, k.subscribe)("EXTENSIONS.UPDATE", function() {
                        var t = o(e.props.tags);
                        i(e.state.components, t) && e.setState({
                            components: t
                        })
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._unsubscribe()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.components,
                        t = w["default"].Children.only(this.props.children),
                        n = {
                            slide: this.context.slide,
                            slideIndex: this.context.slideIndex,
                            slides: this.context.slides
                        };
                    if (e.replace) return w["default"].createElement(e.replace[e.replace.length - 1], n);
                    if (e.before || e.after) {
                        var r = [];
                        e.before && r.push.apply(r, (0, u["default"])(e.before.map(function(e) {
                            return w["default"].createElement(e, n)
                        }))), r.push(t.props.children), e.after && r.push.apply(r, (0, u["default"])(e.after.map(function(e) {
                            return w["default"].createElement(e, n)
                        }))), t = w["default"].cloneElement.apply(w["default"], [t, {}].concat(r))
                    }
                    return e.wrap ? e.wrap.reduce(function(e, t) {
                        return w["default"].createElement(t, n, e)
                    }, t) : t
                }
            }]), t
        }(w["default"].Component);
    t["default"] = C, C.propTypes = {
        children: w["default"].PropTypes.node,
        tags: w["default"].PropTypes.arrayOf(w["default"].PropTypes.string)
    }, C.contextTypes = {
        slide: w["default"].PropTypes.object,
        slideIndex: w["default"].PropTypes.number.isRequired,
        slides: w["default"].PropTypes.arrayOf(w["default"].PropTypes.object).isRequired
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(4),
        a = o(i),
        s = n(200),
        l = o(s),
        u = n(204),
        c = o(u),
        d = n(205),
        p = o(d),
        f = n(209),
        h = o(f),
        m = n(210),
        g = o(m),
        v = n(96),
        y = o(v),
        b = n(256),
        x = r(b);
    n(425);
    var w = x.groupByChapter,
        k = x.IS_MOBILE,
        _ = function(e) {
            function t() {
                return (0, c["default"])(this, t), (0, h["default"])(this, (t.__proto__ || (0, l["default"])(t)).apply(this, arguments))
            }
            return (0, g["default"])(t, e), (0, p["default"])(t, [{
                key: "shouldComponentUpdate",
                value: function(e) {
                    return e.slideIndex !== this.props.slideIndex || e.active !== this.props.active
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.props.active && this.refs.anchor.focus()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.slideIndex,
                        n = e.slides,
                        r = e.active,
                        o = n[t],
                        i = o.options,
                        s = ["exerslide-toc-entry"],
                        l = o.layout;
                    l && l.getClassNames && (s = s.concat(l.getClassNames(t, x)));
                    var u = i.toc || i.title || "Slide " + (t + 1),
                        c = {};
                    return r && (s.push("active"), c["aria-current"] = "page"), y["default"].createElement("li", {
                        className: s.join(" ")
                    }, y["default"].createElement("a", (0, a["default"])({}, c, {
                        ref: "anchor",
                        tabIndex: r ? 0 : -1,
                        title: u,
                        href: o.url
                    }), y["default"].createElement("span", {
                        className: "title"
                    }, u)))
                }
            }]), t
        }(y["default"].Component);
    _.propTypes = {
        slideIndex: y["default"].PropTypes.number,
        slides: y["default"].PropTypes.array,
        active: y["default"].PropTypes.bool
    };
    var C = function(e) {
        function t(e, n) {
            (0, c["default"])(this, t);
            var r = (0, h["default"])(this, (t.__proto__ || (0, l["default"])(t)).call(this, e, n)),
                o = n.slide.options,
                i = !1;
            return e.togglable && (k ? i = !0 : o.hasOwnProperty("hideTOC") && (i = o.hideTOC)), r.state = {
                groupedSlides: w(n.slides),
                collapsed: i,
                explicitlyToggled: !1
            }, r._onToggle = r._onToggle.bind(r), r
        }
        return (0, g["default"])(t, e), (0, p["default"])(t, [{
            key: "componentWillReceiveProps",
            value: function(e, t) {
                var n = this;
                if (t.slides !== this.context.slides && this.setState({
                        groupedSlides: w(t.slides)
                    }), t.slide !== this.context.slide) {
                    var r = t.slide.options;
                    if (!this.state.explicitlyToggled) {
                        var o = !!k || Boolean(r.hideTOC);
                        this.setState({
                            collapsed: o
                        }, function() {
                            return n.props.onToggle(!n.state.collapsed)
                        })
                    }
                }
            }
        }, {
            key: "_onToggle",
            value: function() {
                var e = this;
                this.setState({
                    collapsed: !this.state.collapsed,
                    explicitlyToggled: !0
                }, function() {
                    return e.props.onToggle(!e.state.collapsed)
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = 0,
                    n = this.props.togglable,
                    r = this.context.slides,
                    o = this.state.collapsed,
                    i = this.state.groupedSlides.map(function(n) {
                        var o = void 0;
                        if (Array.isArray(n)) {
                            var i = e.context.slideIndex >= t && e.context.slideIndex < t + n.length;
                            o = n.map(function(n, o) {
                                return y["default"].createElement(_, {
                                    key: t + o,
                                    slideIndex: t + o,
                                    slides: r,
                                    active: e.context.slideIndex === t + o
                                })
                            }), o = y["default"].createElement("li", {
                                key: n[0].options.chapter,
                                className: "exerslide-toc-chapter" + (i ? " active" : "")
                            }, y["default"].createElement("h3", {
                                className: "exerslide-toc-title"
                            }, n[0].options.chapter), y["default"].createElement("ol", {
                                className: "exerslide-toc-entries"
                            }, o)), t += n.length
                        } else o = y["default"].createElement(_, {
                            key: t,
                            slideIndex: t,
                            slides: r,
                            active: e.context.slideIndex === t
                        }), t += 1;
                        return o
                    }),
                    a = y["default"].createElement("i", {
                        className: "fa fa-lg " + (o ? "fa-bars" : "fa-chevron-left"),
                        "aria-hidden": !0
                    });
                return y["default"].createElement("div", {
                    role: "navigation",
                    className: "exerslide-toc-container" + (o ? " collapsed" : "")
                }, y["default"].createElement("h2", {
                    id: "exerslide-toc-title"
                }, "Table of Contents"), n ? y["default"].createElement("button", {
                    className: "exerslide-toc-toggleButton",
                    type: "button",
                    "aria-controls": "exerslide-toc-list",
                    "aria-expanded": !o,
                    "aria-label": "Table of Contents",
                    onClick: this._onToggle
                }, a) : null, y["default"].createElement("ol", {
                    id: "exerslide-toc-list",
                    "aria-controls": "main",
                    "aria-labelledby": "exerrslide-toc-title"
                }, i))
            }
        }]), t
    }(y["default"].Component);
    t["default"] = C, C.propTypes = {
        togglable: y["default"].PropTypes.bool,
        onToggle: y["default"].PropTypes.func
    }, C.contextTypes = {
        slide: y["default"].PropTypes.object,
        slideIndex: y["default"].PropTypes.number,
        slides: y["default"].PropTypes.array
    }, C.defaultProps = {
        onToggle: function() {}
    }
}, function(e, t) {}, , function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        var n = e.className,
            r = t.slideIndex,
            o = t.slides,
            i = o.length;
        return a["default"].createElement(l["default"], {
            tags: ["toolbar", "content"]
        }, a["default"].createElement("div", {
            role: "navigation",
            className: "exerslide-toolbar " + n,
            "aria-label": "Slide"
        }, a["default"].createElement("button", {
            className: "exerslide-toolbar-button",
            type: "button",
            "aria-label": "previous",
            onClick: u.back,
            disabled: 0 === r
        }, a["default"].createElement("i", {
            className: "fa fa-lg fa-chevron-left"
        })), a["default"].createElement("span", {
            "aria-label": "Slide " + (r + 1) + " of " + i,
            className: "exerslide-toolbar-text"
        }, " " + (r + 1) + "/" + i + " "), a["default"].createElement("button", {
            className: "exerslide-toolbar-button",
            type: "button",
            "aria-label": "next",
            onClick: u.forward,
            disabled: r + 1 === i
        }, a["default"].createElement("i", {
            className: "fa fa-lg fa-chevron-right"
        }))))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = o;
    var i = n(96),
        a = r(i),
        s = n(423),
        l = r(s),
        u = n(256);
    n(428), o.propTypes = {
        className: a["default"].PropTypes.string
    }, o.contextTypes = {
        slideIndex: a["default"].PropTypes.number.isRequired,
        slides: a["default"].PropTypes.arrayOf(a["default"].PropTypes.object).isRequired
    }
}, function(e, t) {}, , function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        var t = e.children;
        return l["default"].createElement(a["default"], {
            tags: ["slide", "a11y-announce-content", "content"]
        }, l["default"].createElement("div", null, t))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = o;
    var i = n(423),
        a = r(i),
        s = n(96),
        l = r(s);
    o.propTypes = {
        children: l["default"].PropTypes.node
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        var n = e.forward,
            r = e.back,
            o = {
                forward: n,
                back: r
            };
        e.subscribe("SITE.LOADED", function() {
            (0, a["default"])(t).forEach(function(e) {
                s.bind(e, function() {
                    return t[e](o)
                })
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(258),
        a = r(i);
    t["default"] = o;
    var s = n(432)
}, function(e, t, n) {
    var r;
    ! function(o, i, a) {
        function s(e, t, n) {
            return e.addEventListener ? void e.addEventListener(t, n, !1) : void e.attachEvent("on" + t, n)
        }

        function l(e) {
            if ("keypress" == e.type) {
                var t = String.fromCharCode(e.which);
                return e.shiftKey || (t = t.toLowerCase()), t
            }
            return w[e.which] ? w[e.which] : k[e.which] ? k[e.which] : String.fromCharCode(e.which).toLowerCase()
        }

        function u(e, t) {
            return e.sort().join(",") === t.sort().join(",")
        }

        function c(e) {
            var t = [];
            return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t
        }

        function d(e) {
            return e.preventDefault ? void e.preventDefault() : void(e.returnValue = !1)
        }

        function p(e) {
            return e.stopPropagation ? void e.stopPropagation() : void(e.cancelBubble = !0)
        }

        function f(e) {
            return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
        }

        function h() {
            if (!x) {
                x = {};
                for (var e in w) e > 95 && e < 112 || w.hasOwnProperty(e) && (x[w[e]] = e)
            }
            return x
        }

        function m(e, t, n) {
            return n || (n = h()[e] ? "keydown" : "keypress"), "keypress" == n && t.length && (n = "keydown"), n
        }

        function g(e) {
            return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus"), e.split("+"))
        }

        function v(e, t) {
            var n, r, o, i = [];
            for (n = g(e), o = 0; o < n.length; ++o) r = n[o], C[r] && (r = C[r]), t && "keypress" != t && _[r] && (r = _[r], i.push("shift")), f(r) && i.push(r);
            return t = m(r, i, t), {
                key: r,
                modifiers: i,
                action: t
            }
        }

        function y(e, t) {
            return null !== e && e !== i && (e === t || y(e.parentNode, t))
        }

        function b(e) {
            function t(e) {
                e = e || {};
                var t, n = !1;
                for (t in x) e[t] ? n = !0 : x[t] = 0;
                n || (_ = !1)
            }

            function n(e, t, n, r, o, i) {
                var a, s, l = [],
                    c = n.type;
                if (!g._callbacks[e]) return [];
                for ("keyup" == c && f(e) && (t = [e]), a = 0; a < g._callbacks[e].length; ++a)
                    if (s = g._callbacks[e][a], (r || !s.seq || x[s.seq] == s.level) && c == s.action && ("keypress" == c && !n.metaKey && !n.ctrlKey || u(t, s.modifiers))) {
                        var d = !r && s.combo == o,
                            p = r && s.seq == r && s.level == i;
                        (d || p) && g._callbacks[e].splice(a, 1), l.push(s)
                    }
                return l
            }

            function r(e, t, n, r) {
                g.stopCallback(t, t.target || t.srcElement, n, r) || e(t, n) === !1 && (d(t), p(t))
            }

            function o(e) {
                "number" != typeof e.which && (e.which = e.keyCode);
                var t = l(e);
                if (t) return "keyup" == e.type && w === t ? void(w = !1) : void g.handleKey(t, c(e), e)
            }

            function a() {
                clearTimeout(y), y = setTimeout(t, 1e3)
            }

            function h(e, n, o, i) {
                function s(t) {
                    return function() {
                        _ = t, ++x[e], a()
                    }
                }

                function u(n) {
                    r(o, n, e), "keyup" !== i && (w = l(n)), setTimeout(t, 10)
                }
                x[e] = 0;
                for (var c = 0; c < n.length; ++c) {
                    var d = c + 1 === n.length,
                        p = d ? u : s(i || v(n[c + 1]).action);
                    m(n[c], p, i, e, c)
                }
            }

            function m(e, t, r, o, i) {
                g._directMap[e + ":" + r] = t, e = e.replace(/\s+/g, " ");
                var a, s = e.split(" ");
                return s.length > 1 ? void h(e, s, t, r) : (a = v(e, r), g._callbacks[a.key] = g._callbacks[a.key] || [], n(a.key, a.modifiers, {
                    type: a.action
                }, o, e, i), void g._callbacks[a.key][o ? "unshift" : "push"]({
                    callback: t,
                    modifiers: a.modifiers,
                    action: a.action,
                    seq: o,
                    level: i,
                    combo: e
                }))
            }
            var g = this;
            if (e = e || i, !(g instanceof b)) return new b(e);
            g.target = e, g._callbacks = {}, g._directMap = {};
            var y, x = {},
                w = !1,
                k = !1,
                _ = !1;
            g._handleKey = function(e, o, i) {
                var a, s = n(e, o, i),
                    l = {},
                    u = 0,
                    c = !1;
                for (a = 0; a < s.length; ++a) s[a].seq && (u = Math.max(u, s[a].level));
                for (a = 0; a < s.length; ++a)
                    if (s[a].seq) {
                        if (s[a].level != u) continue;
                        c = !0, l[s[a].seq] = 1, r(s[a].callback, i, s[a].combo, s[a].seq)
                    } else c || r(s[a].callback, i, s[a].combo);
                var d = "keypress" == i.type && k;
                i.type != _ || f(e) || d || t(l), k = c && "keydown" == i.type
            }, g._bindMultiple = function(e, t, n) {
                for (var r = 0; r < e.length; ++r) m(e[r], t, n)
            }, s(e, "keypress", o), s(e, "keydown", o), s(e, "keyup", o)
        }
        if (o) {
            for (var x, w = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "ins",
                    46: "del",
                    91: "meta",
                    93: "meta",
                    224: "meta"
                }, k = {
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }, _ = {
                    "~": "`",
                    "!": "1",
                    "@": "2",
                    "#": "3",
                    $: "4",
                    "%": "5",
                    "^": "6",
                    "&": "7",
                    "*": "8",
                    "(": "9",
                    ")": "0",
                    _: "-",
                    "+": "=",
                    ":": ";",
                    '"': "'",
                    "<": ",",
                    ">": ".",
                    "?": "/",
                    "|": "\\"
                }, C = {
                    option: "alt",
                    command: "meta",
                    "return": "enter",
                    escape: "esc",
                    plus: "+",
                    mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                }, E = 1; E < 20; ++E) w[111 + E] = "f" + E;
            for (E = 0; E <= 9; ++E) w[E + 96] = E;
            b.prototype.bind = function(e, t, n) {
                var r = this;
                return e = e instanceof Array ? e : [e], r._bindMultiple.call(r, e, t, n), r
            }, b.prototype.unbind = function(e, t) {
                var n = this;
                return n.bind.call(n, e, function() {}, t)
            }, b.prototype.trigger = function(e, t) {
                var n = this;
                return n._directMap[e + ":" + t] && n._directMap[e + ":" + t]({}, e), n
            }, b.prototype.reset = function() {
                var e = this;
                return e._callbacks = {}, e._directMap = {}, e
            }, b.prototype.stopCallback = function(e, t) {
                var n = this;
                return !((" " + t.className + " ").indexOf(" mousetrap ") > -1) && (!y(t, n.target) && ("INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable))
            }, b.prototype.handleKey = function() {
                var e = this;
                return e._handleKey.apply(e, arguments)
            }, b.addKeycodes = function(e) {
                for (var t in e) e.hasOwnProperty(t) && (w[t] = e[t]);
                x = null
            }, b.init = function() {
                var e = b(i);
                for (var t in e) "_" !== t.charAt(0) && (b[t] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(t))
            }, b.init(), o.Mousetrap = b, "undefined" != typeof e && e.exports && (e.exports = b), r = function() {
                return b
            }.call(t, n, t, e), !(r !== a && (e.exports = r))
        }
    }("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null)
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(t) {
            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            t.subscribe("SITE.LOADED", function(r) {
                var o = r.slides,
                    a = o[0] && o[0].options,
                    u = a && !a.scale || n !== !1;
                u && (n = a && a.scale || n, s(e.document.documentElement, i(v, n)), t.registerExtension(l, "wrap", ["content"]))
            })
        }

        function i() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return h["default"].apply(Object, [{}].concat(t))
        }

        function a() {
            return y ? {
                maxWidth: y + "em"
            } : {}
        }

        function s(t, n) {
            var r = n.contentWidth,
                o = n.maxFontSize,
                i = n.columnWidth;
            y = r;
            var a = parseInt(e.getComputedStyle(t).fontSize, 10),
                s = a * r,
                l = t.clientWidth;
            if (s <= l) {
                var u = l * i / r;
                u < a ? u = "" : o && u > o ? u = o + "px" : u += "px", t.style.fontSize = u
            }
        }

        function l(e) {
            var t = e.children,
                n = (e.slide, e.slideIndex, e.slides, (0, p["default"])(e, ["children", "slide", "slideIndex", "slides"])),
                r = g["default"].Children.only(t);
            return g["default"].cloneElement(r, (0, c["default"])({
                style: i(r.props.style, a())
            }, n))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(4),
            c = r(u),
            d = n(434),
            p = r(d),
            f = n(5),
            h = r(f);
        t["default"] = o;
        var m = n(96),
            g = r(m),
            v = {
                contentWidth: 38,
                columnWidth: .55
            },
            y = void 0
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t["default"] = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            e.registerExtension(C, "wrap", ["a11y-announce-content"])
        }

        function i(t) {
            var n = e.getComputedStyle(t);
            return parseInt(n.paddingBottom)
        }

        function a(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 150 : arguments[1],
                n = void 0,
                r = function() {
                    var r = this;
                    n || (n = setTimeout(function() {
                        e.call(r), n = null
                    }, t))
                };
            return r.cancel = function() {
                return clearTimeout(n)
            }, r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(4),
            l = r(s),
            u = n(434),
            c = r(u),
            d = n(200),
            p = r(d),
            f = n(204),
            h = r(f),
            m = n(205),
            g = r(m),
            v = n(209),
            y = r(v),
            b = n(210),
            x = r(b);
        t["default"] = o;
        var w = n(96),
            k = r(w),
            _ = {
                position: "absolute",
                display: "block",
                left: "-10000px",
                width: "0px",
                height: "0px"
            },
            C = function(t) {
                function n(e) {
                    (0, h["default"])(this, n);
                    var t = (0, y["default"])(this, (n.__proto__ || (0, p["default"])(n)).call(this, e));
                    return t.state = {
                        contentOverflow: !1
                    }, t.analyze = a(t._analyzeContentHeight.bind(t)), t
                }
                return (0, x["default"])(n, t), (0, g["default"])(n, [{
                    key: "componentDidMount",
                    value: function() {
                        e.addEventListener("resize", this.analyze), e.addEventListener("zoom", this.analyze), this.analyze()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        e.removeEventListener("resize", this.analyze), e.removeEventListener("zoom", this.analyze), this.analyze.cancel()
                    }
                }, {
                    key: "_analyzeContentHeight",
                    value: function() {
                        if (this._node) {
                            var e = this._node.scrollHeight - i(this._node),
                                t = this._node.clientHeight;
                            if (t < e - 10) {
                                var n = Math.round(t / e * 100);
                                this.setState({
                                    contentOverflow: n
                                })
                            } else this.setState({
                                contentOverflow: !1
                            })
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = (t.children, t.slide, t.slideIndex, t.slides, (0, c["default"])(t, ["children", "slide", "slideIndex", "slides"])),
                            r = this.state.contentOverflow ? k["default"].createElement("span", {
                                style: _,
                                tabIndex: 0,
                                role: "alert"
                            }, "Attention: Only " + this.state.contentOverflow + "% of the slide\n          content is visible") : null,
                            o = k["default"].Children.only(this.props.children);
                        return k["default"].cloneElement(o, (0, l["default"])({}, n, {
                            ref: function(t) {
                                e._node = t, "function" == typeof o.ref && o.ref(t)
                            }
                        }), r, o.props.children)
                    }
                }]), n
            }(k["default"].Component);
        C.propTypes = {
            children: k["default"].PropTypes.node,
            slide: k["default"].PropTypes.object,
            slideIndex: k["default"].PropTypes.number,
            slides: k["default"].PropTypes.arrayOf(k["default"].PropTypes.object)
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {}
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(200),
        a = r(i),
        s = n(204),
        l = r(s),
        u = n(205),
        c = r(u),
        d = n(209),
        p = r(d),
        f = n(210),
        h = r(f),
        m = n(4);
    r(m);
    t["default"] = o;
    var g = n(96),
        v = r(g),
        y = {
            backgroundColor: "#EEE",
            boxSizing: "border-box",
            fontSize: "1rem",
            padding: "0.5em",
            width: "100%",
            position: "relative",
            textAlign: "center",
            display: "flex"
        },
        b = {
            overflow: "visible",
            overflowX: "auto"
        },
        x = function(e) {
            function t(e) {
                (0, l["default"])(this, t);
                var n = (0, p["default"])(this, (t.__proto__ || (0, a["default"])(t)).call(this, e));
                return n.state = {
                    showSource: !1
                }, n._toggleSource = n._toggleSource.bind(n), n
            }
            return (0, h["default"])(t, e), (0, c["default"])(t, [{
                key: "_toggleSource",
                value: function() {
                    var e = this.state.showSource;
                    e ? this._unregister() : this._unregister = this.props.registerExtension(function(e) {
                        var t = e.slide;
                        return v["default"].createElement("pre", {
                            style: {
                                overflow: "visible",
                                display: "block"
                            }
                        }, v["default"].createElement("code", {
                            style: b
                        }, t.__source__))
                    }, "replace", ["slide"]), this.setState({
                        showSource: !e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.slide;
                    if (!e.__path__) return null;
                    var t = (this.state.showSource ? "Hide" : "Show") + " Source";
                    return v["default"].createElement("div", {
                        role: "region",
                        "aria-label": "File path of current slide",
                        style: y,
                        className: "flex-item-fix"
                    }, v["default"].createElement("span", {
                        style: {
                            flexGrow: 2
                        }
                    }, "File path: ", e.__path__), v["default"].createElement("button", {
                        onClick: this._toggleSource,
                        "aria-label": t
                    }, this.state.showSource ? v["default"].createElement("i", {
                        className: "fa fa-times",
                        "aria-hidden": !0
                    }) : v["default"].createElement("i", {
                        className: "fa fa-file-code-o",
                        "aria-hidden": !0,
                        title: t
                    })))
                }
            }]), t
        }(v["default"].Component);
    x.propTypes = {
        registerExtension: v["default"].PropTypes.func,
        slide: v["default"].PropTypes.object
    }
}, function(e, t) {
    e.exports = null
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function(e) {
        e.subscribe("SLIDE.DID_MOUNT", function(e) {
            var t = e.slide;
            ga("send", "pageview", {
                page: location.pathname + t.url
            })
        })
    }
}]);
