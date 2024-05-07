import {
    c as ms
} from "./SplitText.BqdrKGYP.js";
var xi = {
    exports: {}
};
(function(gs, Fr) {
    (function(C, pe) {
        pe(Fr)
    })(ms, function(C) {
        function pe(f, t) {
            f.prototype = Object.create(t.prototype), f.prototype.constructor = f, f.__proto__ = t
        }

        function mt(f) {
            if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return f
        }
        /*!
         * GSAP 3.12.5
         * https://gsap.com
         *
         * @license Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var et = {
                autoSleep: 120,
                force3D: "auto",
                nullTargetWarn: 1,
                units: {
                    lineHeight: ""
                }
            },
            Yt = {
                duration: .5,
                overwrite: !1,
                delay: 0
            },
            Ae, Q, E, at = 1e8,
            D = 1 / at,
            Re = Math.PI * 2,
            Lr = Re / 4,
            Br = 0,
            Ti = Math.sqrt,
            Ir = Math.cos,
            Nr = Math.sin,
            U = function(t) {
                return typeof t == "string"
            },
            B = function(t) {
                return typeof t == "function"
            },
            gt = function(t) {
                return typeof t == "number"
            },
            Ee = function(t) {
                return typeof t > "u"
            },
            _t = function(t) {
                return typeof t == "object"
            },
            K = function(t) {
                return t !== !1
            },
            ze = function() {
                return typeof window < "u"
            },
            me = function(t) {
                return B(t) || U(t)
            },
            wi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
            $ = Array.isArray,
            Fe = /(?:-?\.?\d|\.)+/gi,
            bi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            Xt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            Le = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            Pi = /[+-]=-?[.\d]+/,
            Si = /[^,'"\[\]\s]+/gi,
            Vr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
            F, lt, Be, Ie, it = {},
            ge = {},
            Oi, ki = function(t) {
                return (ge = Dt(t, it)) && J
            },
            Ne = function(t, e) {
                return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
            },
            Jt = function(t, e) {
                return !e && console.warn(t)
            },
            Ci = function(t, e) {
                return t && (it[t] = e) && ge && (ge[t] = e) || it
            },
            te = function() {
                return 0
            },
            Ur = {
                suppressEvents: !0,
                isStart: !0,
                kill: !1
            },
            ye = {
                suppressEvents: !0,
                kill: !1
            },
            Yr = {
                suppressEvents: !0
            },
            Ve = {},
            Tt = [],
            Ue = {},
            Mi, rt = {},
            Ye = {},
            Di = 30,
            ve = [],
            Xe = "",
            qe = function(t) {
                var e = t[0],
                    i, r;
                if (_t(e) || B(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
                    for (r = ve.length; r-- && !ve[r].targetTest(e););
                    i = ve[r]
                }
                for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new sr(t[r], i))) || t.splice(r, 1);
                return t
            },
            Mt = function(t) {
                return t._gsap || qe(ft(t))[0]._gsap
            },
            Ai = function(t, e, i) {
                return (i = t[e]) && B(i) ? t[e]() : Ee(i) && t.getAttribute && t.getAttribute(e) || i
            },
            H = function(t, e) {
                return (t = t.split(",")).forEach(e) || t
            },
            I = function(t) {
                return Math.round(t * 1e5) / 1e5 || 0
            },
            Y = function(t) {
                return Math.round(t * 1e7) / 1e7 || 0
            },
            qt = function(t, e) {
                var i = e.charAt(0),
                    r = parseFloat(e.substr(2));
                return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
            },
            Xr = function(t, e) {
                for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
                return r < i
            },
            xe = function() {
                var t = Tt.length,
                    e = Tt.slice(0),
                    i, r;
                for (Ue = {}, Tt.length = 0, i = 0; i < t; i++) r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
            },
            Ri = function(t, e, i, r) {
                Tt.length && !Q && xe(), t.render(e, i, r || Q && e < 0 && (t._initted || t._startAt)), Tt.length && !Q && xe()
            },
            Ei = function(t) {
                var e = parseFloat(t);
                return (e || e === 0) && (t + "").match(Si).length < 2 ? e : U(t) ? t.trim() : t
            },
            zi = function(t) {
                return t
            },
            ot = function(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            },
            qr = function(t) {
                return function(e, i) {
                    for (var r in i) r in e || r === "duration" && t || r === "ease" || (e[r] = i[r])
                }
            },
            Dt = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            Fi = function f(t, e) {
                for (var i in e) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = _t(e[i]) ? f(t[i] || (t[i] = {}), e[i]) : e[i]);
                return t
            },
            Te = function(t, e) {
                var i = {},
                    r;
                for (r in t) r in e || (i[r] = t[r]);
                return i
            },
            ee = function(t) {
                var e = t.parent || F,
                    i = t.keyframes ? qr($(t.keyframes)) : ot;
                if (K(t.inherit))
                    for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
                return t
            },
            Gr = function(t, e) {
                for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
                return i < 0
            },
            Li = function(t, e, i, r, n) {
                i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
                var s = t[r],
                    a;
                if (n)
                    for (a = e[n]; s && s[n] > a;) s = s._prev;
                return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e
            },
            we = function(t, e, i, r) {
                i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
                var n = e._prev,
                    s = e._next;
                n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null
            },
            wt = function(t, e) {
                t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
            },
            At = function(t, e) {
                if (t && (!e || e._end > t._dur || e._start < 0))
                    for (var i = t; i;) i._dirty = 1, i = i.parent;
                return t
            },
            Wr = function(t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
            },
            Ge = function(t, e, i, r) {
                return t._startAt && (Q ? t._startAt.revert(ye) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
            },
            Qr = function f(t) {
                return !t || t._ts && f(t.parent)
            },
            Bi = function(t) {
                return t._repeat ? Gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
            },
            Gt = function(t, e) {
                var i = Math.floor(t /= e);
                return t && i === t ? i - 1 : i
            },
            be = function(t, e) {
                return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            },
            Pe = function(t) {
                return t._end = Y(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0))
            },
            Se = function(t, e) {
                var i = t._dp;
                return i && i.smoothChildTiming && t._ts && (t._start = Y(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Pe(t), i._dirty || At(i, t)), t
            },
            Ii = function(t, e) {
                var i;
                if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = be(t.rawTime(), e), (!e._dur || re(0, e.totalDuration(), i) - e._tTime > D) && e.render(i, !0)), At(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                    if (t._dur < t.duration())
                        for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                    t._zTime = -D
                }
            },
            ct = function(t, e, i, r) {
                return e.parent && wt(e), e._start = Y((gt(i) ? i : i || t !== F ? ut(t, i, e) : t._time) + e._delay), e._end = Y(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Li(t, e, "_first", "_last", t._sort ? "_start" : 0), We(e) || (t._recent = e), r || Ii(t, e), t._ts < 0 && Se(t, t._tTime), t
            },
            Ni = function(t, e) {
                return (it.ScrollTrigger || Ne("scrollTrigger", e)) && it.ScrollTrigger.create(e, t)
            },
            Vi = function(t, e, i, r, n) {
                if (ei(t, e, n), !t._initted) return 1;
                if (!i && t._pt && !Q && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Mi !== st.frame) return Tt.push(t), t._lazy = [n, r], 1
            },
            $r = function f(t) {
                var e = t.parent;
                return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || f(e))
            },
            We = function(t) {
                var e = t.data;
                return e === "isFromStart" || e === "isStart"
            },
            jr = function(t, e, i, r) {
                var n = t.ratio,
                    s = e < 0 || !e && (!t._start && $r(t) && !(!t._initted && We(t)) || (t._ts < 0 || t._dp._ts < 0) && !We(t)) ? 0 : 1,
                    a = t._rDelay,
                    o = 0,
                    u, h, l;
                if (a && t._repeat && (o = re(0, t._tDur, e), h = Gt(o, a), t._yoyo && h & 1 && (s = 1 - s), h !== Gt(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || Q || r || t._zTime === D || !e && t._zTime) {
                    if (!t._initted && Vi(t, e, r, i, o)) return;
                    for (l = t._zTime, t._zTime = e || (i ? D : 0), i || (i = e && !l), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o, u = t._pt; u;) u.r(s, u.d), u = u._next;
                    e < 0 && Ge(t, e, i, !0), t._onUpdate && !i && nt(t, "onUpdate"), o && t._repeat && !i && t.parent && nt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && wt(t, 1), !i && !Q && (nt(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            },
            Kr = function(t, e, i) {
                var r;
                if (i > e)
                    for (r = t._first; r && r._start <= i;) {
                        if (r.data === "isPause" && r._start > e) return r;
                        r = r._next
                    } else
                        for (r = t._last; r && r._start >= i;) {
                            if (r.data === "isPause" && r._start < e) return r;
                            r = r._prev
                        }
            },
            Wt = function(t, e, i, r) {
                var n = t._repeat,
                    s = Y(e) || 0,
                    a = t._tTime / t._tDur;
                return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : Y(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && Se(t, t._tTime = t._tDur * a), t.parent && Pe(t), i || At(t.parent, t), t
            },
            Ui = function(t) {
                return t instanceof G ? At(t) : Wt(t, t._dur)
            },
            Hr = {
                _start: 0,
                endTime: te,
                totalDuration: te
            },
            ut = function f(t, e, i) {
                var r = t.labels,
                    n = t._recent || Hr,
                    s = t.duration() >= at ? n.endTime(!1) : t._dur,
                    a, o, u;
                return U(e) && (isNaN(e) || e in r) ? (o = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), o === "<" || o === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s), r[e]) : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && i && (o = o / 100 * ($(i) ? i[0] : i).totalDuration()), a > 1 ? f(t, e.substr(0, a - 1), i) + o : s + o)) : e == null ? s : +e
            },
            ie = function(t, e, i) {
                var r = gt(e[1]),
                    n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
                    s = e[n],
                    a, o;
                if (r && (s.duration = e[1]), s.parent = i, t) {
                    for (a = s, o = i; o && !("immediateRender" in a);) a = o.vars.defaults || {}, o = K(o.vars.inherit) && o.parent;
                    s.immediateRender = K(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1]
                }
                return new N(e[0], s, e[n + 1])
            },
            bt = function(t, e) {
                return t || t === 0 ? e(t) : e
            },
            re = function(t, e, i) {
                return i < t ? t : i > e ? e : i
            },
            j = function(t, e) {
                return !U(t) || !(e = Vr.exec(t)) ? "" : e[1]
            },
            Zr = function(t, e, i) {
                return bt(i, function(r) {
                    return re(t, e, r)
                })
            },
            Qe = [].slice,
            Yi = function(t, e) {
                return t && _t(t) && "length" in t && (!e && !t.length || t.length - 1 in t && _t(t[0])) && !t.nodeType && t !== lt
            },
            Jr = function(t, e, i) {
                return i === void 0 && (i = []), t.forEach(function(r) {
                    var n;
                    return U(r) && !e || Yi(r, 1) ? (n = i).push.apply(n, ft(r)) : i.push(r)
                }) || i
            },
            ft = function(t, e, i) {
                return E && !e && E.selector ? E.selector(t) : U(t) && !i && (Be || !$t()) ? Qe.call((e || Ie).querySelectorAll(t), 0) : $(t) ? Jr(t, i) : Yi(t) ? Qe.call(t, 0) : t ? [t] : []
            },
            $e = function(t) {
                return t = ft(t)[0] || Jt("Invalid scope") || {},
                    function(e) {
                        var i = t.current || t.nativeElement || t;
                        return ft(e, i.querySelectorAll ? i : i === t ? Jt("Invalid scope") || Ie.createElement("div") : t)
                    }
            },
            Xi = function(t) {
                return t.sort(function() {
                    return .5 - Math.random()
                })
            },
            qi = function(t) {
                if (B(t)) return t;
                var e = _t(t) ? t : {
                        each: t
                    },
                    i = Rt(e.ease),
                    r = e.from || 0,
                    n = parseFloat(e.base) || 0,
                    s = {},
                    a = r > 0 && r < 1,
                    o = isNaN(r) || a,
                    u = e.axis,
                    h = r,
                    l = r;
                return U(r) ? h = l = {
                        center: .5,
                        edges: .5,
                        end: 1
                    }[r] || 0 : !a && o && (h = r[0], l = r[1]),
                    function(c, d, p) {
                        var _ = (p || e).length,
                            m = s[_],
                            y, v, x, T, g, b, P, S, w;
                        if (!m) {
                            if (w = e.grid === "auto" ? 0 : (e.grid || [1, at])[1], !w) {
                                for (P = -at; P < (P = p[w++].getBoundingClientRect().left) && w < _;);
                                w < _ && w--
                            }
                            for (m = s[_] = [], y = o ? Math.min(w, _) * h - .5 : r % w, v = w === at ? 0 : o ? _ * l / w - .5 : r / w | 0, P = 0, S = at, b = 0; b < _; b++) x = b % w - y, T = v - (b / w | 0), m[b] = g = u ? Math.abs(u === "y" ? T : x) : Ti(x * x + T * T), g > P && (P = g), g < S && (S = g);
                            r === "random" && Xi(m), m.max = P - S, m.min = S, m.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (w > _ ? _ - 1 : u ? u === "y" ? _ / w : w : Math.max(w, _ / w)) || 0) * (r === "edges" ? -1 : 1), m.b = _ < 0 ? n - _ : n, m.u = j(e.amount || e.each) || 0, i = i && _ < 0 ? ir(i) : i
                        }
                        return _ = (m[c] - m.min) / m.max || 0, Y(m.b + (i ? i(_) : _) * m.v) + m.u
                    }
            },
            je = function(t) {
                var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                return function(i) {
                    var r = Y(Math.round(parseFloat(i) / t) * t * e);
                    return (r - r % 1) / e + (gt(i) ? 0 : j(i))
                }
            },
            Gi = function(t, e) {
                var i = $(t),
                    r, n;
                return !i && _t(t) && (r = i = t.radius || at, t.values ? (t = ft(t.values), (n = !gt(t[0])) && (r *= r)) : t = je(t.increment)), bt(e, i ? B(t) ? function(s) {
                    return n = t(s), Math.abs(n - s) <= r ? n : s
                } : function(s) {
                    for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), u = at, h = 0, l = t.length, c, d; l--;) n ? (c = t[l].x - a, d = t[l].y - o, c = c * c + d * d) : c = Math.abs(t[l] - a), c < u && (u = c, h = l);
                    return h = !r || u <= r ? t[h] : s, n || h === s || gt(s) ? h : h + j(s)
                } : je(t))
            },
            Wi = function(t, e, i, r) {
                return bt($(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
                    return $(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * r) / r
                })
            },
            tn = function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function(r) {
                    return e.reduce(function(n, s) {
                        return s(n)
                    }, r)
                }
            },
            en = function(t, e) {
                return function(i) {
                    return t(parseFloat(i)) + (e || j(i))
                }
            },
            rn = function(t, e, i) {
                return $i(t, e, 0, 1, i)
            },
            Qi = function(t, e, i) {
                return bt(i, function(r) {
                    return t[~~e(r)]
                })
            },
            nn = function f(t, e, i) {
                var r = e - t;
                return $(t) ? Qi(t, f(0, t.length), e) : bt(i, function(n) {
                    return (r + (n - t) % r) % r + t
                })
            },
            sn = function f(t, e, i) {
                var r = e - t,
                    n = r * 2;
                return $(t) ? Qi(t, f(0, t.length - 1), e) : bt(i, function(s) {
                    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s)
                })
            },
            ne = function(t) {
                for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e));) s = t.indexOf(")", r), a = t.charAt(r + 7) === "[", n = t.substr(r + 7, s - r - 7).match(a ? Si : Fe), i += t.substr(e, r - e) + Wi(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
                return i + t.substr(e, t.length - e)
            },
            $i = function(t, e, i, r, n) {
                var s = e - t,
                    a = r - i;
                return bt(n, function(o) {
                    return i + ((o - t) / s * a || 0)
                })
            },
            an = function f(t, e, i, r) {
                var n = isNaN(t + e) ? 0 : function(d) {
                    return (1 - d) * t + d * e
                };
                if (!n) {
                    var s = U(t),
                        a = {},
                        o, u, h, l, c;
                    if (i === !0 && (r = 1) && (i = null), s) t = {
                        p: t
                    }, e = {
                        p: e
                    };
                    else if ($(t) && !$(e)) {
                        for (h = [], l = t.length, c = l - 2, u = 1; u < l; u++) h.push(f(t[u - 1], t[u]));
                        l--, n = function(p) {
                            p *= l;
                            var _ = Math.min(c, ~~p);
                            return h[_](p - _)
                        }, i = e
                    } else r || (t = Dt($(t) ? [] : {}, t));
                    if (!h) {
                        for (o in e) Je.call(a, t, o, "get", e[o]);
                        n = function(p) {
                            return ni(p, a) || (s ? t.p : t)
                        }
                    }
                }
                return bt(i, n)
            },
            ji = function(t, e, i) {
                var r = t.labels,
                    n = at,
                    s, a, o;
                for (s in r) a = r[s] - e, a < 0 == !!i && a && n > (a = Math.abs(a)) && (o = s, n = a);
                return o
            },
            nt = function(t, e, i) {
                var r = t.vars,
                    n = r[e],
                    s = E,
                    a = t._ctx,
                    o, u, h;
                if (n) return o = r[e + "Params"], u = r.callbackScope || t, i && Tt.length && xe(), a && (E = a), h = o ? n.apply(u, o) : n.call(u), E = s, h
            },
            se = function(t) {
                return wt(t), t.scrollTrigger && t.scrollTrigger.kill(!!Q), t.progress() < 1 && nt(t, "onInterrupt"), t
            },
            Qt, Ki = [],
            Hi = function(t) {
                if (t)
                    if (t = !t.name && t.default || t, ze() || t.headless) {
                        var e = t.name,
                            i = B(t),
                            r = e && !i && t.init ? function() {
                                this._props = []
                            } : t,
                            n = {
                                init: te,
                                render: ni,
                                add: Je,
                                kill: wn,
                                modifier: Tn,
                                rawVars: 0
                            },
                            s = {
                                targetTest: 0,
                                get: 0,
                                getSetter: ri,
                                aliases: {},
                                register: 0
                            };
                        if ($t(), t !== r) {
                            if (rt[e]) return;
                            ot(r, ot(Te(t, n), s)), Dt(r.prototype, Dt(n, Te(t, s))), rt[r.prop = e] = r, t.targetTest && (ve.push(r), Ve[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                        }
                        Ci(e, r), t.register && t.register(J, r, Z)
                    } else Ki.push(t)
            },
            M = 255,
            ae = {
                aqua: [0, M, M],
                lime: [0, M, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, M],
                navy: [0, 0, 128],
                white: [M, M, M],
                olive: [128, 128, 0],
                yellow: [M, M, 0],
                orange: [M, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [M, 0, 0],
                pink: [M, 192, 203],
                cyan: [0, M, M],
                transparent: [M, M, M, 0]
            },
            Ke = function(t, e, i) {
                return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * M + .5 | 0
            },
            Zi = function(t, e, i) {
                var r = t ? gt(t) ? [t >> 16, t >> 8 & M, t & M] : 0 : ae.black,
                    n, s, a, o, u, h, l, c, d, p;
                if (!r) {
                    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ae[t]) r = ae[t];
                    else if (t.charAt(0) === "#") {
                        if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & M, r & M, parseInt(t.substr(7), 16) / 255];
                        t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & M, t & M]
                    } else if (t.substr(0, 3) === "hsl") {
                        if (r = p = t.match(Fe), !e) o = +r[0] % 360 / 360, u = +r[1] / 100, h = +r[2] / 100, s = h <= .5 ? h * (u + 1) : h + u - h * u, n = h * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Ke(o + 1 / 3, n, s), r[1] = Ke(o, n, s), r[2] = Ke(o - 1 / 3, n, s);
                        else if (~t.indexOf("=")) return r = t.match(bi), i && r.length < 4 && (r[3] = 1), r
                    } else r = t.match(Fe) || ae.transparent;
                    r = r.map(Number)
                }
                return e && !p && (n = r[0] / M, s = r[1] / M, a = r[2] / M, l = Math.max(n, s, a), c = Math.min(n, s, a), h = (l + c) / 2, l === c ? o = u = 0 : (d = l - c, u = h > .5 ? d / (2 - l - c) : d / (l + c), o = l === n ? (s - a) / d + (s < a ? 6 : 0) : l === s ? (a - n) / d + 2 : (n - s) / d + 4, o *= 60), r[0] = ~~(o + .5), r[1] = ~~(u * 100 + .5), r[2] = ~~(h * 100 + .5)), i && r.length < 4 && (r[3] = 1), r
            },
            Ji = function(t) {
                var e = [],
                    i = [],
                    r = -1;
                return t.split(Pt).forEach(function(n) {
                    var s = n.match(Xt) || [];
                    e.push.apply(e, s), i.push(r += s.length + 1)
                }), e.c = i, e
            },
            tr = function(t, e, i) {
                var r = "",
                    n = (t + r).match(Pt),
                    s = e ? "hsla(" : "rgba(",
                    a = 0,
                    o, u, h, l;
                if (!n) return t;
                if (n = n.map(function(c) {
                        return (c = Zi(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")"
                    }), i && (h = Ji(t), o = i.c, o.join(r) !== h.c.join(r)))
                    for (u = t.replace(Pt, "1").split(Xt), l = u.length - 1; a < l; a++) r += u[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
                if (!u)
                    for (u = t.split(Pt), l = u.length - 1; a < l; a++) r += u[a] + n[a];
                return r + u[l]
            },
            Pt = function() {
                var f = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
                    t;
                for (t in ae) f += "|" + t + "\\b";
                return new RegExp(f + ")", "gi")
            }(),
            on = /hsl[a]?\(/,
            er = function(t) {
                var e = t.join(" "),
                    i;
                if (Pt.lastIndex = 0, Pt.test(e)) return i = on.test(e), t[1] = tr(t[1], i), t[0] = tr(t[0], i, Ji(t[1])), !0
            },
            oe, st = function() {
                var f = Date.now,
                    t = 500,
                    e = 33,
                    i = f(),
                    r = i,
                    n = 1e3 / 240,
                    s = n,
                    a = [],
                    o, u, h, l, c, d, p = function _(m) {
                        var y = f() - r,
                            v = m === !0,
                            x, T, g, b;
                        if ((y > t || y < 0) && (i += y - e), r += y, g = r - i, x = g - s, (x > 0 || v) && (b = ++l.frame, c = g - l.time * 1e3, l.time = g = g / 1e3, s += x + (x >= n ? 4 : n - x), T = 1), v || (o = u(_)), T)
                            for (d = 0; d < a.length; d++) a[d](g, c, b, m)
                    };
                return l = {
                    time: 0,
                    frame: 0,
                    tick: function() {
                        p(!0)
                    },
                    deltaRatio: function(m) {
                        return c / (1e3 / (m || 60))
                    },
                    wake: function() {
                        Oi && (!Be && ze() && (lt = Be = window, Ie = lt.document || {}, it.gsap = J, (lt.gsapVersions || (lt.gsapVersions = [])).push(J.version), ki(ge || lt.GreenSockGlobals || !lt.gsap && lt || {}), Ki.forEach(Hi)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, o && l.sleep(), u = h || function(m) {
                            return setTimeout(m, s - l.time * 1e3 + 1 | 0)
                        }, oe = 1, p(2))
                    },
                    sleep: function() {
                        (h ? cancelAnimationFrame : clearTimeout)(o), oe = 0, u = te
                    },
                    lagSmoothing: function(m, y) {
                        t = m || 1 / 0, e = Math.min(y || 33, t)
                    },
                    fps: function(m) {
                        n = 1e3 / (m || 240), s = l.time * 1e3 + n
                    },
                    add: function(m, y, v) {
                        var x = y ? function(T, g, b, P) {
                            m(T, g, b, P), l.remove(x)
                        } : m;
                        return l.remove(m), a[v ? "unshift" : "push"](x), $t(), x
                    },
                    remove: function(m, y) {
                        ~(y = a.indexOf(m)) && a.splice(y, 1) && d >= y && d--
                    },
                    _listeners: a
                }, l
            }(),
            $t = function() {
                return !oe && st.wake()
            },
            O = {},
            un = /^[\d.\-M][\d.\-,\s]/,
            fn = /["']/g,
            hn = function(t) {
                for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, o, u; n < s; n++) o = i[n], a = n !== s - 1 ? o.lastIndexOf(",") : o.length, u = o.substr(0, a), e[r] = isNaN(u) ? u.replace(fn, "").trim() : +u, r = o.substr(a + 1).trim();
                return e
            },
            _n = function(t) {
                var e = t.indexOf("(") + 1,
                    i = t.indexOf(")"),
                    r = t.indexOf("(", e);
                return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
            },
            ln = function(t) {
                var e = (t + "").split("("),
                    i = O[e[0]];
                return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [hn(e[1])] : _n(t).split(",").map(Ei)) : O._CE && un.test(t) ? O._CE("", t) : i
            },
            ir = function(t) {
                return function(e) {
                    return 1 - t(1 - e)
                }
            },
            rr = function f(t, e) {
                for (var i = t._first, r; i;) i instanceof G ? f(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? f(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
            },
            Rt = function(t, e) {
                return t && (B(t) ? t : O[t] || ln(t)) || e
            },
            Et = function(t, e, i, r) {
                i === void 0 && (i = function(o) {
                    return 1 - e(1 - o)
                }), r === void 0 && (r = function(o) {
                    return o < .5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2
                });
                var n = {
                        easeIn: e,
                        easeOut: i,
                        easeInOut: r
                    },
                    s;
                return H(t, function(a) {
                    O[a] = it[a] = n, O[s = a.toLowerCase()] = i;
                    for (var o in n) O[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = O[a + "." + o] = n[o]
                }), n
            },
            nr = function(t) {
                return function(e) {
                    return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
                }
            },
            He = function f(t, e, i) {
                var r = e >= 1 ? e : 1,
                    n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1),
                    s = n / Re * (Math.asin(1 / r) || 0),
                    a = function(h) {
                        return h === 1 ? 1 : r * Math.pow(2, -10 * h) * Nr((h - s) * n) + 1
                    },
                    o = t === "out" ? a : t === "in" ? function(u) {
                        return 1 - a(1 - u)
                    } : nr(a);
                return n = Re / n, o.config = function(u, h) {
                    return f(t, u, h)
                }, o
            },
            Ze = function f(t, e) {
                e === void 0 && (e = 1.70158);
                var i = function(s) {
                        return s ? --s * s * ((e + 1) * s + e) + 1 : 0
                    },
                    r = t === "out" ? i : t === "in" ? function(n) {
                        return 1 - i(1 - n)
                    } : nr(i);
                return r.config = function(n) {
                    return f(t, n)
                }, r
            };
        H("Linear,Quad,Cubic,Quart,Quint,Strong", function(f, t) {
                var e = t < 5 ? t + 1 : t;
                Et(f + ",Power" + (e - 1), t ? function(i) {
                    return Math.pow(i, e)
                } : function(i) {
                    return i
                }, function(i) {
                    return 1 - Math.pow(1 - i, e)
                }, function(i) {
                    return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
                })
            }), O.Linear.easeNone = O.none = O.Linear.easeIn, Et("Elastic", He("in"), He("out"), He()),
            function(f, t) {
                var e = 1 / t,
                    i = 2 * e,
                    r = 2.5 * e,
                    n = function(a) {
                        return a < e ? f * a * a : a < i ? f * Math.pow(a - 1.5 / t, 2) + .75 : a < r ? f * (a -= 2.25 / t) * a + .9375 : f * Math.pow(a - 2.625 / t, 2) + .984375
                    };
                Et("Bounce", function(s) {
                    return 1 - n(1 - s)
                }, n)
            }(7.5625, 2.75), Et("Expo", function(f) {
                return f ? Math.pow(2, 10 * (f - 1)) : 0
            }), Et("Circ", function(f) {
                return -(Ti(1 - f * f) - 1)
            }), Et("Sine", function(f) {
                return f === 1 ? 1 : -Ir(f * Lr) + 1
            }), Et("Back", Ze("in"), Ze("out"), Ze()), O.SteppedEase = O.steps = it.SteppedEase = {
                config: function(t, e) {
                    t === void 0 && (t = 1);
                    var i = 1 / t,
                        r = t + (e ? 0 : 1),
                        n = e ? 1 : 0,
                        s = 1 - D;
                    return function(a) {
                        return ((r * re(0, s, a) | 0) + n) * i
                    }
                }
            }, Yt.ease = O["quad.out"], H("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(f) {
                return Xe += f + "," + f + "Params,"
            });
        var sr = function(t, e) {
                this.id = Br++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ai, this.set = e ? e.getSetter : ri
            },
            ue = function() {
                function f(e) {
                    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Wt(this, +e.duration, 1, 1), this.data = e.data, E && (this._ctx = E, E.data.push(this)), oe || st.wake()
                }
                var t = f.prototype;
                return t.delay = function(i) {
                    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay
                }, t.duration = function(i) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
                }, t.totalDuration = function(i) {
                    return arguments.length ? (this._dirty = 0, Wt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }, t.totalTime = function(i, r) {
                    if ($t(), !arguments.length) return this._tTime;
                    var n = this._dp;
                    if (n && n.smoothChildTiming && this._ts) {
                        for (Se(this, i), !n._dp || n.parent || Ii(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && ct(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === D || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Ri(this, i, r)), this
                }, t.time = function(i, r) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Bi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
                }, t.totalProgress = function(i, r) {
                    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
                }, t.progress = function(i, r) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Bi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
                }, t.iteration = function(i, r) {
                    var n = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Gt(this._tTime, n) + 1 : 1
                }, t.timeScale = function(i, r) {
                    if (!arguments.length) return this._rts === -D ? 0 : this._rts;
                    if (this._rts === i) return this;
                    var n = this.parent && this._ts ? be(this.parent._time, this) : this._tTime;
                    return this._rts = +i || 0, this._ts = this._ps || i === -D ? 0 : this._rts, this.totalTime(re(-Math.abs(this._delay), this._tDur, n), r !== !1), Pe(this), Wr(this)
                }, t.paused = function(i) {
                    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : ($t(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D)))), this) : this._ps
                }, t.startTime = function(i) {
                    if (arguments.length) {
                        this._start = i;
                        var r = this.parent || this._dp;
                        return r && (r._sort || !this.parent) && ct(r, this, i - this._delay), this
                    }
                    return this._start
                }, t.endTime = function(i) {
                    return this._start + (K(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                }, t.rawTime = function(i) {
                    var r = this.parent || this._dp;
                    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? be(r.rawTime(i), this) : this._tTime : this._tTime
                }, t.revert = function(i) {
                    i === void 0 && (i = Yr);
                    var r = Q;
                    return Q = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), Q = r, this
                }, t.globalTime = function(i) {
                    for (var r = this, n = arguments.length ? i : r.rawTime(); r;) n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
                    return !this.parent && this._sat ? this._sat.globalTime(i) : n
                }, t.repeat = function(i) {
                    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Ui(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
                }, t.repeatDelay = function(i) {
                    if (arguments.length) {
                        var r = this._time;
                        return this._rDelay = i, Ui(this), r ? this.time(r) : this
                    }
                    return this._rDelay
                }, t.yoyo = function(i) {
                    return arguments.length ? (this._yoyo = i, this) : this._yoyo
                }, t.seek = function(i, r) {
                    return this.totalTime(ut(this, i), K(r))
                }, t.restart = function(i, r) {
                    return this.play().totalTime(i ? -this._delay : 0, K(r))
                }, t.play = function(i, r) {
                    return i != null && this.seek(i, r), this.reversed(!1).paused(!1)
                }, t.reverse = function(i, r) {
                    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1)
                }, t.pause = function(i, r) {
                    return i != null && this.seek(i, r), this.paused(!0)
                }, t.resume = function() {
                    return this.paused(!1)
                }, t.reversed = function(i) {
                    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -D : 0)), this) : this._rts < 0
                }, t.invalidate = function() {
                    return this._initted = this._act = 0, this._zTime = -D, this
                }, t.isActive = function() {
                    var i = this.parent || this._dp,
                        r = this._start,
                        n;
                    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - D)
                }, t.eventCallback = function(i, r, n) {
                    var s = this.vars;
                    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i]
                }, t.then = function(i) {
                    var r = this;
                    return new Promise(function(n) {
                        var s = B(i) ? i : zi,
                            a = function() {
                                var u = r.then;
                                r.then = null, B(s) && (s = s(r)) && (s.then || s === r) && (r.then = u), n(s), r.then = u
                            };
                        r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
                    })
                }, t.kill = function() {
                    se(this)
                }, f
            }();
        ot(ue.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -D,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var G = function(f) {
            pe(t, f);

            function t(i, r) {
                var n;
                return i === void 0 && (i = {}), n = f.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = K(i.sortChildren), F && ct(i.parent || F, mt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && Ni(mt(n), i.scrollTrigger), n
            }
            var e = t.prototype;
            return e.to = function(r, n, s) {
                return ie(0, arguments, this), this
            }, e.from = function(r, n, s) {
                return ie(1, arguments, this), this
            }, e.fromTo = function(r, n, s, a) {
                return ie(2, arguments, this), this
            }, e.set = function(r, n, s) {
                return n.duration = 0, n.parent = this, ee(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new N(r, n, ut(this, s), 1), this
            }, e.call = function(r, n, s) {
                return ct(this, N.delayedCall(0, r, n), s)
            }, e.staggerTo = function(r, n, s, a, o, u, h) {
                return s.duration = n, s.stagger = s.stagger || a, s.onComplete = u, s.onCompleteParams = h, s.parent = this, new N(r, s, ut(this, o)), this
            }, e.staggerFrom = function(r, n, s, a, o, u, h) {
                return s.runBackwards = 1, ee(s).immediateRender = K(s.immediateRender), this.staggerTo(r, n, s, a, o, u, h)
            }, e.staggerFromTo = function(r, n, s, a, o, u, h, l) {
                return a.startAt = s, ee(a).immediateRender = K(a.immediateRender), this.staggerTo(r, n, a, o, u, h, l)
            }, e.render = function(r, n, s) {
                var a = this._time,
                    o = this._dirty ? this.totalDuration() : this._tDur,
                    u = this._dur,
                    h = r <= 0 ? 0 : Y(r),
                    l = this._zTime < 0 != r < 0 && (this._initted || !u),
                    c, d, p, _, m, y, v, x, T, g, b, P;
                if (this !== F && h > o && r >= 0 && (h = o), h !== this._tTime || s || l) {
                    if (a !== this._time && u && (h += this._time - a, r += this._time - a), c = h, T = this._start, x = this._ts, y = !x, l && (u || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
                        if (b = this._yoyo, m = u + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(m * 100 + r, n, s);
                        if (c = Y(h % m), h === o ? (_ = this._repeat, c = u) : (_ = ~~(h / m), _ && _ === h / m && (c = u, _--), c > u && (c = u)), g = Gt(this._tTime, m), !a && this._tTime && g !== _ && this._tTime - g * m - this._dur <= 0 && (g = _), b && _ & 1 && (c = u - c, P = 1), _ !== g && !this._lock) {
                            var S = b && g & 1,
                                w = S === (b && _ & 1);
                            if (_ < g && (S = !S), a = S ? 0 : h % u ? u : h, this._lock = 1, this.render(a || (P ? 0 : Y(_ * m)), n, !u)._lock = 0, this._tTime = h, !n && this.parent && nt(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            if (u = this._dur, o = this._tDur, w && (this._lock = 2, a = S ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !y) return this;
                            rr(this, P)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (v = Kr(this, Y(a), Y(c)), v && (h -= c - (c = v._start))), this._tTime = h, this._time = c, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && c && !n && !_ && (nt(this, "onStart"), this._tTime !== h)) return this;
                    if (c >= a && r >= 0)
                        for (d = this._first; d;) {
                            if (p = d._next, (d._act || c >= d._start) && d._ts && v !== d) {
                                if (d.parent !== this) return this.render(r, n, s);
                                if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !y) {
                                    v = 0, p && (h += this._zTime = -D);
                                    break
                                }
                            }
                            d = p
                        } else {
                            d = this._last;
                            for (var k = r < 0 ? r : c; d;) {
                                if (p = d._prev, (d._act || k <= d._end) && d._ts && v !== d) {
                                    if (d.parent !== this) return this.render(r, n, s);
                                    if (d.render(d._ts > 0 ? (k - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (k - d._start) * d._ts, n, s || Q && (d._initted || d._startAt)), c !== this._time || !this._ts && !y) {
                                        v = 0, p && (h += this._zTime = k ? -D : D);
                                        break
                                    }
                                }
                                d = p
                            }
                        }
                    if (v && !n && (this.pause(), v.render(c >= a ? 0 : -D)._zTime = c >= a ? 1 : -1, this._ts)) return this._start = T, Pe(this), this.render(r, n, s);
                    this._onUpdate && !n && nt(this, "onUpdate", !0), (h === o && this._tTime >= this.totalDuration() || !h && a) && (T === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (h === o && this._ts > 0 || !h && this._ts < 0) && wt(this, 1), !n && !(r < 0 && !a) && (h || a || !o) && (nt(this, h === o && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < o && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, e.add = function(r, n) {
                var s = this;
                if (gt(n) || (n = ut(this, n, r)), !(r instanceof ue)) {
                    if ($(r)) return r.forEach(function(a) {
                        return s.add(a, n)
                    }), this;
                    if (U(r)) return this.addLabel(r, n);
                    if (B(r)) r = N.delayedCall(0, r);
                    else return this
                }
                return this !== r ? ct(this, r, n) : this
            }, e.getChildren = function(r, n, s, a) {
                r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -at);
                for (var o = [], u = this._first; u;) u._start >= a && (u instanceof N ? n && o.push(u) : (s && o.push(u), r && o.push.apply(o, u.getChildren(!0, n, s)))), u = u._next;
                return o
            }, e.getById = function(r) {
                for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
                    if (n[s].vars.id === r) return n[s]
            }, e.remove = function(r) {
                return U(r) ? this.removeLabel(r) : B(r) ? this.killTweensOf(r) : (we(this, r), r === this._recent && (this._recent = this._last), At(this))
            }, e.totalTime = function(r, n) {
                return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Y(st.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), f.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime
            }, e.addLabel = function(r, n) {
                return this.labels[r] = ut(this, n), this
            }, e.removeLabel = function(r) {
                return delete this.labels[r], this
            }, e.addPause = function(r, n, s) {
                var a = N.delayedCall(0, n || te, s);
                return a.data = "isPause", this._hasPause = 1, ct(this, a, ut(this, r))
            }, e.removePause = function(r) {
                var n = this._first;
                for (r = ut(this, r); n;) n._start === r && n.data === "isPause" && wt(n), n = n._next
            }, e.killTweensOf = function(r, n, s) {
                for (var a = this.getTweensOf(r, s), o = a.length; o--;) St !== a[o] && a[o].kill(r, n);
                return this
            }, e.getTweensOf = function(r, n) {
                for (var s = [], a = ft(r), o = this._first, u = gt(n), h; o;) o instanceof N ? Xr(o._targets, a) && (u ? (!St || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (h = o.getTweensOf(a, n)).length && s.push.apply(s, h), o = o._next;
                return s
            }, e.tweenTo = function(r, n) {
                n = n || {};
                var s = this,
                    a = ut(s, r),
                    o = n,
                    u = o.startAt,
                    h = o.onStart,
                    l = o.onStartParams,
                    c = o.immediateRender,
                    d, p = N.to(s, ot({
                        ease: n.ease || "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: a,
                        overwrite: "auto",
                        duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || D,
                        onStart: function() {
                            if (s.pause(), !d) {
                                var m = n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale());
                                p._dur !== m && Wt(p, m, 0, 1).render(p._time, !0, !0), d = 1
                            }
                            h && h.apply(p, l || [])
                        }
                    }, n));
                return c ? p.render(0) : p
            }, e.tweenFromTo = function(r, n, s) {
                return this.tweenTo(n, ot({
                    startAt: {
                        time: ut(this, r)
                    }
                }, s))
            }, e.recent = function() {
                return this._recent
            }, e.nextLabel = function(r) {
                return r === void 0 && (r = this._time), ji(this, ut(this, r))
            }, e.previousLabel = function(r) {
                return r === void 0 && (r = this._time), ji(this, ut(this, r), 1)
            }, e.currentLabel = function(r) {
                return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + D)
            }, e.shiftChildren = function(r, n, s) {
                s === void 0 && (s = 0);
                for (var a = this._first, o = this.labels, u; a;) a._start >= s && (a._start += r, a._end += r), a = a._next;
                if (n)
                    for (u in o) o[u] >= s && (o[u] += r);
                return At(this)
            }, e.invalidate = function(r) {
                var n = this._first;
                for (this._lock = 0; n;) n.invalidate(r), n = n._next;
                return f.prototype.invalidate.call(this, r)
            }, e.clear = function(r) {
                r === void 0 && (r = !0);
                for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
                return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), At(this)
            }, e.totalDuration = function(r) {
                var n = 0,
                    s = this,
                    a = s._last,
                    o = at,
                    u, h, l;
                if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
                if (s._dirty) {
                    for (l = s.parent; a;) u = a._prev, a._dirty && a.totalDuration(), h = a._start, h > o && s._sort && a._ts && !s._lock ? (s._lock = 1, ct(s, a, h - a._delay, 1)._lock = 0) : o = h, h < 0 && a._ts && (n -= h, (!l && !s._dp || l && l.smoothChildTiming) && (s._start += h / s._ts, s._time -= h, s._tTime -= h), s.shiftChildren(-h, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = u;
                    Wt(s, s === F && s._time > n ? s._time : n, 1, 1), s._dirty = 0
                }
                return s._tDur
            }, t.updateRoot = function(r) {
                if (F._ts && (Ri(F, be(r, F)), Mi = st.frame), st.frame >= Di) {
                    Di += et.autoSleep || 120;
                    var n = F._first;
                    if ((!n || !n._ts) && et.autoSleep && st._listeners.length < 2) {
                        for (; n && !n._ts;) n = n._next;
                        n || st.sleep()
                    }
                }
            }, t
        }(ue);
        ot(G.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var cn = function(t, e, i, r, n, s, a) {
                var o = new Z(this._pt, t, e, 0, 1, _r, null, n),
                    u = 0,
                    h = 0,
                    l, c, d, p, _, m, y, v;
                for (o.b = i, o.e = r, i += "", r += "", (y = ~r.indexOf("random(")) && (r = ne(r)), s && (v = [i, r], s(v, t, e), i = v[0], r = v[1]), c = i.match(Le) || []; l = Le.exec(r);) p = l[0], _ = r.substring(u, l.index), d ? d = (d + 1) % 5 : _.substr(-5) === "rgba(" && (d = 1), p !== c[h++] && (m = parseFloat(c[h - 1]) || 0, o._pt = {
                    _next: o._pt,
                    p: _ || h === 1 ? _ : ",",
                    s: m,
                    c: p.charAt(1) === "=" ? qt(m, p) - m : parseFloat(p) - m,
                    m: d && d < 4 ? Math.round : 0
                }, u = Le.lastIndex);
                return o.c = u < r.length ? r.substring(u, r.length) : "", o.fp = a, (Pi.test(r) || y) && (o.e = 0), this._pt = o, o
            },
            Je = function(t, e, i, r, n, s, a, o, u, h) {
                B(r) && (r = r(n || 0, t, s));
                var l = t[e],
                    c = i !== "get" ? i : B(l) ? u ? t[e.indexOf("set") || !B(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
                    d = B(l) ? u ? yn : fr : ii,
                    p;
                if (U(r) && (~r.indexOf("random(") && (r = ne(r)), r.charAt(1) === "=" && (p = qt(c, r) + (j(c) || 0), (p || p === 0) && (r = p))), !h || c !== r || ti) return !isNaN(c * r) && r !== "" ? (p = new Z(this._pt, t, e, +c || 0, r - (c || 0), typeof l == "boolean" ? xn : hr, 0, d), u && (p.fp = u), a && p.modifier(a, this, t), this._pt = p) : (!l && !(e in t) && Ne(e, r), cn.call(this, t, e, c, r, d, o || et.stringFilter, u))
            },
            dn = function(t, e, i, r, n) {
                if (B(t) && (t = fe(t, n, e, i, r)), !_t(t) || t.style && t.nodeType || $(t) || wi(t)) return U(t) ? fe(t, n, e, i, r) : t;
                var s = {},
                    a;
                for (a in t) s[a] = fe(t[a], n, e, i, r);
                return s
            },
            ar = function(t, e, i, r, n, s) {
                var a, o, u, h;
                if (rt[t] && (a = new rt[t]).init(n, a.rawVars ? e[t] : dn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = o = new Z(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== Qt))
                    for (u = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
                return a
            },
            St, ti, ei = function f(t, e, i) {
                var r = t.vars,
                    n = r.ease,
                    s = r.startAt,
                    a = r.immediateRender,
                    o = r.lazy,
                    u = r.onUpdate,
                    h = r.runBackwards,
                    l = r.yoyoEase,
                    c = r.keyframes,
                    d = r.autoRevert,
                    p = t._dur,
                    _ = t._startAt,
                    m = t._targets,
                    y = t.parent,
                    v = y && y.data === "nested" ? y.vars.targets : m,
                    x = t._overwrite === "auto" && !Ae,
                    T = t.timeline,
                    g, b, P, S, w, k, z, A, R, W, X, V, q;
                if (T && (!c || !n) && (n = "none"), t._ease = Rt(n, Yt.ease), t._yEase = l ? ir(Rt(l === !0 ? n : l, Yt.ease)) : 0, l && t._yoyo && !t._repeat && (l = t._yEase, t._yEase = t._ease, t._ease = l), t._from = !T && !!r.runBackwards, !T || c && !r.stagger) {
                    if (A = m[0] ? Mt(m[0]).harness : 0, V = A && r[A.prop], g = Te(r, Ve), _ && (_._zTime < 0 && _.progress(1), e < 0 && h && a && !d ? _.render(-1, !0) : _.revert(h && p ? ye : Ur), _._lazy = 0), s) {
                        if (wt(t._startAt = N.set(m, ot({
                                data: "isStart",
                                overwrite: !1,
                                parent: y,
                                immediateRender: !0,
                                lazy: !_ && K(o),
                                startAt: null,
                                delay: 0,
                                onUpdate: u && function() {
                                    return nt(t, "onUpdate")
                                },
                                stagger: 0
                            }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Q || !a && !d) && t._startAt.revert(ye), a && p && e <= 0 && i <= 0) {
                            e && (t._zTime = e);
                            return
                        }
                    } else if (h && p && !_) {
                        if (e && (a = !1), P = ot({
                                overwrite: !1,
                                data: "isFromStart",
                                lazy: a && !_ && K(o),
                                immediateRender: a,
                                stagger: 0,
                                parent: y
                            }, g), V && (P[A.prop] = V), wt(t._startAt = N.set(m, P)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Q ? t._startAt.revert(ye) : t._startAt.render(-1, !0)), t._zTime = e, !a) f(t._startAt, D, D);
                        else if (!e) return
                    }
                    for (t._pt = t._ptCache = 0, o = p && K(o) || o && !p, b = 0; b < m.length; b++) {
                        if (w = m[b], z = w._gsap || qe(m)[b]._gsap, t._ptLookup[b] = W = {}, Ue[z.id] && Tt.length && xe(), X = v === m ? b : v.indexOf(w), A && (R = new A).init(w, V || g, t, X, v) !== !1 && (t._pt = S = new Z(t._pt, w, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(ht) {
                                W[ht] = S
                            }), R.priority && (k = 1)), !A || V)
                            for (P in g) rt[P] && (R = ar(P, g, t, X, w, v)) ? R.priority && (k = 1) : W[P] = S = Je.call(t, w, P, "get", g[P], X, v, 0, r.stringFilter);
                        t._op && t._op[b] && t.kill(w, t._op[b]), x && t._pt && (St = t, F.killTweensOf(w, W, t.globalTime(e)), q = !t.parent, St = 0), t._pt && o && (Ue[z.id] = 1)
                    }
                    k && lr(t), t._onInit && t._onInit(t)
                }
                t._onUpdate = u, t._initted = (!t._op || t._pt) && !q, c && e <= 0 && T.render(at, !0, !0)
            },
            pn = function(t, e, i, r, n, s, a, o) {
                var u = (t._pt && t._ptCache || (t._ptCache = {}))[e],
                    h, l, c, d;
                if (!u)
                    for (u = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length; d--;) {
                        if (h = c[d][e], h && h.d && h.d._pt)
                            for (h = h.d._pt; h && h.p !== e && h.fp !== e;) h = h._next;
                        if (!h) return ti = 1, t.vars[e] = "+=0", ei(t, a), ti = 0, o ? Jt(e + " not eligible for reset") : 1;
                        u.push(h)
                    }
                for (d = u.length; d--;) l = u[d], h = l._pt || l, h.s = (r || r === 0) && !n ? r : h.s + (r || 0) + s * h.c, h.c = i - h.s, l.e && (l.e = I(i) + j(l.e)), l.b && (l.b = h.s + j(l.b))
            },
            mn = function(t, e) {
                var i = t[0] ? Mt(t[0]).harness : 0,
                    r = i && i.aliases,
                    n, s, a, o;
                if (!r) return e;
                n = Dt({}, e);
                for (s in r)
                    if (s in n)
                        for (o = r[s].split(","), a = o.length; a--;) n[o[a]] = n[s];
                return n
            },
            gn = function(t, e, i, r) {
                var n = e.ease || r || "power1.inOut",
                    s, a;
                if ($(e)) a = i[t] || (i[t] = []), e.forEach(function(o, u) {
                    return a.push({
                        t: u / (e.length - 1) * 100,
                        v: o,
                        e: n
                    })
                });
                else
                    for (s in e) a = i[s] || (i[s] = []), s === "ease" || a.push({
                        t: parseFloat(t),
                        v: e[s],
                        e: n
                    })
            },
            fe = function(t, e, i, r, n) {
                return B(t) ? t.call(e, i, r, n) : U(t) && ~t.indexOf("random(") ? ne(t) : t
            },
            or = Xe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
            ur = {};
        H(or + ",id,stagger,delay,duration,paused,scrollTrigger", function(f) {
            return ur[f] = 1
        });
        var N = function(f) {
            pe(t, f);

            function t(i, r, n, s) {
                var a;
                typeof r == "number" && (n.duration = r, r = n, n = null), a = f.call(this, s ? r : ee(r)) || this;
                var o = a.vars,
                    u = o.duration,
                    h = o.delay,
                    l = o.immediateRender,
                    c = o.stagger,
                    d = o.overwrite,
                    p = o.keyframes,
                    _ = o.defaults,
                    m = o.scrollTrigger,
                    y = o.yoyoEase,
                    v = r.parent || F,
                    x = ($(i) || wi(i) ? gt(i[0]) : "length" in r) ? [i] : ft(i),
                    T, g, b, P, S, w, k, z;
                if (a._targets = x.length ? qe(x) : Jt("GSAP target " + i + " not found. https://gsap.com", !et.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || c || me(u) || me(h)) {
                    if (r = a.vars, T = a.timeline = new G({
                            data: "nested",
                            defaults: _ || {},
                            targets: v && v.data === "nested" ? v.vars.targets : x
                        }), T.kill(), T.parent = T._dp = mt(a), T._start = 0, c || me(u) || me(h)) {
                        if (P = x.length, k = c && qi(c), _t(c))
                            for (S in c) ~or.indexOf(S) && (z || (z = {}), z[S] = c[S]);
                        for (g = 0; g < P; g++) b = Te(r, ur), b.stagger = 0, y && (b.yoyoEase = y), z && Dt(b, z), w = x[g], b.duration = +fe(u, mt(a), g, w, x), b.delay = (+fe(h, mt(a), g, w, x) || 0) - a._delay, !c && P === 1 && b.delay && (a._delay = h = b.delay, a._start += h, b.delay = 0), T.to(w, b, k ? k(g, w, x) : 0), T._ease = O.none;
                        T.duration() ? u = h = 0 : a.timeline = 0
                    } else if (p) {
                        ee(ot(T.vars.defaults, {
                            ease: "none"
                        })), T._ease = Rt(p.ease || r.ease || "none");
                        var A = 0,
                            R, W, X;
                        if ($(p)) p.forEach(function(V) {
                            return T.to(x, V, ">")
                        }), T.duration();
                        else {
                            b = {};
                            for (S in p) S === "ease" || S === "easeEach" || gn(S, p[S], b, p.easeEach);
                            for (S in b)
                                for (R = b[S].sort(function(V, q) {
                                        return V.t - q.t
                                    }), A = 0, g = 0; g < R.length; g++) W = R[g], X = {
                                    ease: W.e,
                                    duration: (W.t - (g ? R[g - 1].t : 0)) / 100 * u
                                }, X[S] = W.v, T.to(x, X, A), A += X.duration;
                            T.duration() < u && T.to({}, {
                                duration: u - T.duration()
                            })
                        }
                    }
                    u || a.duration(u = T.duration())
                } else a.timeline = 0;
                return d === !0 && !Ae && (St = mt(a), F.killTweensOf(x), St = 0), ct(v, mt(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (l || !u && !p && a._start === Y(v._time) && K(l) && Qr(mt(a)) && v.data !== "nested") && (a._tTime = -D, a.render(Math.max(0, -h) || 0)), m && Ni(mt(a), m), a
            }
            var e = t.prototype;
            return e.render = function(r, n, s) {
                var a = this._time,
                    o = this._tDur,
                    u = this._dur,
                    h = r < 0,
                    l = r > o - D && !h ? o : r < D ? 0 : r,
                    c, d, p, _, m, y, v, x, T;
                if (!u) jr(this, r, n, s);
                else if (l !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
                    if (c = l, x = this.timeline, this._repeat) {
                        if (_ = u + this._rDelay, this._repeat < -1 && h) return this.totalTime(_ * 100 + r, n, s);
                        if (c = Y(l % _), l === o ? (p = this._repeat, c = u) : (p = ~~(l / _), p && p === Y(l / _) && (c = u, p--), c > u && (c = u)), y = this._yoyo && p & 1, y && (T = this._yEase, c = u - c), m = Gt(this._tTime, _), c === a && !s && this._initted && p === m) return this._tTime = l, this;
                        p !== m && (x && this._yEase && rr(x, y), this.vars.repeatRefresh && !y && !this._lock && this._time !== _ && this._initted && (this._lock = s = 1, this.render(Y(_ * p), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Vi(this, h ? r : c, s, n, l)) return this._tTime = 0, this;
                        if (a !== this._time && !(s && this.vars.repeatRefresh && p !== m)) return this;
                        if (u !== this._dur) return this.render(r, n, s)
                    }
                    if (this._tTime = l, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (T || this._ease)(c / u), this._from && (this.ratio = v = 1 - v), c && !a && !n && !p && (nt(this, "onStart"), this._tTime !== l)) return this;
                    for (d = this._pt; d;) d.r(v, d.d), d = d._next;
                    x && x.render(r < 0 ? r : x._dur * x._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (h && Ge(this, r, n, s), nt(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && nt(this, "onRepeat"), (l === this._tDur || !l) && this._tTime === l && (h && !this._onUpdate && Ge(this, r, !0, !0), (r || !u) && (l === this._tDur && this._ts > 0 || !l && this._ts < 0) && wt(this, 1), !n && !(h && !a) && (l || a || y) && (nt(this, l === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < o && this.timeScale() > 0) && this._prom()))
                }
                return this
            }, e.targets = function() {
                return this._targets
            }, e.invalidate = function(r) {
                return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), f.prototype.invalidate.call(this, r)
            }, e.resetTo = function(r, n, s, a, o) {
                oe || st.wake(), this._ts || this.play();
                var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
                    h;
                return this._initted || ei(this, u), h = this._ease(u / this._dur), pn(this, r, n, s, a, h, u, o) ? this.resetTo(r, n, s, a, 1) : (Se(this, 0), this.parent || Li(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
            }, e.kill = function(r, n) {
                if (n === void 0 && (n = "all"), !r && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? se(this) : this;
                if (this.timeline) {
                    var s = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(r, n, St && St.vars.overwrite !== !0)._first || se(this), this.parent && s !== this.timeline.totalDuration() && Wt(this, this._dur * this.timeline._tDur / s, 0, 1), this
                }
                var a = this._targets,
                    o = r ? ft(r) : a,
                    u = this._ptLookup,
                    h = this._pt,
                    l, c, d, p, _, m, y;
                if ((!n || n === "all") && Gr(a, o)) return n === "all" && (this._pt = 0), se(this);
                for (l = this._op = this._op || [], n !== "all" && (U(n) && (_ = {}, H(n, function(v) {
                        return _[v] = 1
                    }), n = _), n = mn(a, n)), y = a.length; y--;)
                    if (~o.indexOf(a[y])) {
                        c = u[y], n === "all" ? (l[y] = n, p = c, d = {}) : (d = l[y] = l[y] || {}, p = n);
                        for (_ in p) m = c && c[_], m && ((!("kill" in m.d) || m.d.kill(_) === !0) && we(this, m, "_pt"), delete c[_]), d !== "all" && (d[_] = 1)
                    }
                return this._initted && !this._pt && h && se(this), this
            }, t.to = function(r, n) {
                return new t(r, n, arguments[2])
            }, t.from = function(r, n) {
                return ie(1, arguments)
            }, t.delayedCall = function(r, n, s, a) {
                return new t(n, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: r,
                    onComplete: n,
                    onReverseComplete: n,
                    onCompleteParams: s,
                    onReverseCompleteParams: s,
                    callbackScope: a
                })
            }, t.fromTo = function(r, n, s) {
                return ie(2, arguments)
            }, t.set = function(r, n) {
                return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n)
            }, t.killTweensOf = function(r, n, s) {
                return F.killTweensOf(r, n, s)
            }, t
        }(ue);
        ot(N.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), H("staggerTo,staggerFrom,staggerFromTo", function(f) {
            N[f] = function() {
                var t = new G,
                    e = Qe.call(arguments, 0);
                return e.splice(f === "staggerFromTo" ? 5 : 4, 0, 0), t[f].apply(t, e)
            }
        });
        var ii = function(t, e, i) {
                return t[e] = i
            },
            fr = function(t, e, i) {
                return t[e](i)
            },
            yn = function(t, e, i, r) {
                return t[e](r.fp, i)
            },
            vn = function(t, e, i) {
                return t.setAttribute(e, i)
            },
            ri = function(t, e) {
                return B(t[e]) ? fr : Ee(t[e]) && t.setAttribute ? vn : ii
            },
            hr = function(t, e) {
                return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
            },
            xn = function(t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e)
            },
            _r = function(t, e) {
                var i = e._pt,
                    r = "";
                if (!t && e.b) r = e.b;
                else if (t === 1 && e.e) r = e.e;
                else {
                    for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
                    r += e.c
                }
                e.set(e.t, e.p, r, e)
            },
            ni = function(t, e) {
                for (var i = e._pt; i;) i.r(t, i.d), i = i._next
            },
            Tn = function(t, e, i, r) {
                for (var n = this._pt, s; n;) s = n._next, n.p === r && n.modifier(t, e, i), n = s
            },
            wn = function(t) {
                for (var e = this._pt, i, r; e;) r = e._next, e.p === t && !e.op || e.op === t ? we(this, e, "_pt") : e.dep || (i = 1), e = r;
                return !i
            },
            bn = function(t, e, i, r) {
                r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
            },
            lr = function(t) {
                for (var e = t._pt, i, r, n, s; e;) {
                    for (i = e._next, r = n; r && r.pr > e.pr;) r = r._next;
                    (e._prev = r ? r._prev : s) ? e._prev._next = e: n = e, (e._next = r) ? r._prev = e : s = e, e = i
                }
                t._pt = n
            },
            Z = function() {
                function f(e, i, r, n, s, a, o, u, h) {
                    this.t = i, this.s = n, this.c = s, this.p = r, this.r = a || hr, this.d = o || this, this.set = u || ii, this.pr = h || 0, this._next = e, e && (e._prev = this)
                }
                var t = f.prototype;
                return t.modifier = function(i, r, n) {
                    this.mSet = this.mSet || this.set, this.set = bn, this.m = i, this.mt = n, this.tween = r
                }, f
            }();
        H(Xe + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(f) {
            return Ve[f] = 1
        }), it.TweenMax = it.TweenLite = N, it.TimelineLite = it.TimelineMax = G, F = new G({
            sortChildren: !1,
            defaults: Yt,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), et.stringFilter = er;
        var zt = [],
            Oe = {},
            Pn = [],
            cr = 0,
            Sn = 0,
            si = function(t) {
                return (Oe[t] || Pn).map(function(e) {
                    return e()
                })
            },
            ai = function() {
                var t = Date.now(),
                    e = [];
                t - cr > 2 && (si("matchMediaInit"), zt.forEach(function(i) {
                    var r = i.queries,
                        n = i.conditions,
                        s, a, o, u;
                    for (a in r) s = lt.matchMedia(r[a]).matches, s && (o = 1), s !== n[a] && (n[a] = s, u = 1);
                    u && (i.revert(), o && e.push(i))
                }), si("matchMediaRevert"), e.forEach(function(i) {
                    return i.onMatch(i, function(r) {
                        return i.add(null, r)
                    })
                }), cr = t, si("matchMedia"))
            },
            dr = function() {
                function f(e, i) {
                    this.selector = i && $e(i), this.data = [], this._r = [], this.isReverted = !1, this.id = Sn++, e && this.add(e)
                }
                var t = f.prototype;
                return t.add = function(i, r, n) {
                    B(i) && (n = r, r = i, i = B);
                    var s = this,
                        a = function() {
                            var u = E,
                                h = s.selector,
                                l;
                            return u && u !== s && u.data.push(s), n && (s.selector = $e(n)), E = s, l = r.apply(s, arguments), B(l) && s._r.push(l), E = u, s.selector = h, s.isReverted = !1, l
                        };
                    return s.last = a, i === B ? a(s, function(o) {
                        return s.add(null, o)
                    }) : i ? s[i] = a : a
                }, t.ignore = function(i) {
                    var r = E;
                    E = null, i(this), E = r
                }, t.getTweens = function() {
                    var i = [];
                    return this.data.forEach(function(r) {
                        return r instanceof f ? i.push.apply(i, r.getTweens()) : r instanceof N && !(r.parent && r.parent.data === "nested") && i.push(r)
                    }), i
                }, t.clear = function() {
                    this._r.length = this.data.length = 0
                }, t.kill = function(i, r) {
                    var n = this;
                    if (i ? function() {
                            for (var a = n.getTweens(), o = n.data.length, u; o--;) u = n.data[o], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(h) {
                                return a.splice(a.indexOf(h), 1)
                            }));
                            for (a.map(function(h) {
                                    return {
                                        g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
                                        t: h
                                    }
                                }).sort(function(h, l) {
                                    return l.g - h.g || -1 / 0
                                }).forEach(function(h) {
                                    return h.t.revert(i)
                                }), o = n.data.length; o--;) u = n.data[o], u instanceof G ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof N) && u.revert && u.revert(i);
                            n._r.forEach(function(h) {
                                return h(i, n)
                            }), n.isReverted = !0
                        }() : this.data.forEach(function(a) {
                            return a.kill && a.kill()
                        }), this.clear(), r)
                        for (var s = zt.length; s--;) zt[s].id === this.id && zt.splice(s, 1)
                }, t.revert = function(i) {
                    this.kill(i || {})
                }, f
            }(),
            On = function() {
                function f(e) {
                    this.contexts = [], this.scope = e, E && E.data.push(this)
                }
                var t = f.prototype;
                return t.add = function(i, r, n) {
                    _t(i) || (i = {
                        matches: i
                    });
                    var s = new dr(0, n || this.scope),
                        a = s.conditions = {},
                        o, u, h;
                    E && !s.selector && (s.selector = E.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
                    for (u in i) u === "all" ? h = 1 : (o = lt.matchMedia(i[u]), o && (zt.indexOf(s) < 0 && zt.push(s), (a[u] = o.matches) && (h = 1), o.addListener ? o.addListener(ai) : o.addEventListener("change", ai)));
                    return h && r(s, function(l) {
                        return s.add(null, l)
                    }), this
                }, t.revert = function(i) {
                    this.kill(i || {})
                }, t.kill = function(i) {
                    this.contexts.forEach(function(r) {
                        return r.kill(i, !0)
                    })
                }, f
            }(),
            ke = {
                registerPlugin: function() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    e.forEach(function(r) {
                        return Hi(r)
                    })
                },
                timeline: function(t) {
                    return new G(t)
                },
                getTweensOf: function(t, e) {
                    return F.getTweensOf(t, e)
                },
                getProperty: function(t, e, i, r) {
                    U(t) && (t = ft(t)[0]);
                    var n = Mt(t || {}).get,
                        s = i ? zi : Ei;
                    return i === "native" && (i = ""), t && (e ? s((rt[e] && rt[e].get || n)(t, e, i, r)) : function(a, o, u) {
                        return s((rt[a] && rt[a].get || n)(t, a, o, u))
                    })
                },
                quickSetter: function(t, e, i) {
                    if (t = ft(t), t.length > 1) {
                        var r = t.map(function(h) {
                                return J.quickSetter(h, e, i)
                            }),
                            n = r.length;
                        return function(h) {
                            for (var l = n; l--;) r[l](h)
                        }
                    }
                    t = t[0] || {};
                    var s = rt[e],
                        a = Mt(t),
                        o = a.harness && (a.harness.aliases || {})[e] || e,
                        u = s ? function(h) {
                            var l = new s;
                            Qt._pt = 0, l.init(t, i ? h + i : h, Qt, 0, [t]), l.render(1, l), Qt._pt && ni(1, Qt)
                        } : a.set(t, o);
                    return s ? u : function(h) {
                        return u(t, o, i ? h + i : h, a, 1)
                    }
                },
                quickTo: function(t, e, i) {
                    var r, n = J.to(t, Dt((r = {}, r[e] = "+=0.1", r.paused = !0, r), i || {})),
                        s = function(o, u, h) {
                            return n.resetTo(e, o, u, h)
                        };
                    return s.tween = n, s
                },
                isTweening: function(t) {
                    return F.getTweensOf(t, !0).length > 0
                },
                defaults: function(t) {
                    return t && t.ease && (t.ease = Rt(t.ease, Yt.ease)), Fi(Yt, t || {})
                },
                config: function(t) {
                    return Fi(et, t || {})
                },
                registerEffect: function(t) {
                    var e = t.name,
                        i = t.effect,
                        r = t.plugins,
                        n = t.defaults,
                        s = t.extendTimeline;
                    (r || "").split(",").forEach(function(a) {
                        return a && !rt[a] && !it[a] && Jt(e + " effect requires " + a + " plugin.")
                    }), Ye[e] = function(a, o, u) {
                        return i(ft(a), ot(o || {}, n), u)
                    }, s && (G.prototype[e] = function(a, o, u) {
                        return this.add(Ye[e](a, _t(o) ? o : (u = o) && {}, this), u)
                    })
                },
                registerEase: function(t, e) {
                    O[t] = Rt(e)
                },
                parseEase: function(t, e) {
                    return arguments.length ? Rt(t, e) : O
                },
                getById: function(t) {
                    return F.getById(t)
                },
                exportRoot: function(t, e) {
                    t === void 0 && (t = {});
                    var i = new G(t),
                        r, n;
                    for (i.smoothChildTiming = K(t.smoothChildTiming), F.remove(i), i._dp = 0, i._time = i._tTime = F._time, r = F._first; r;) n = r._next, (e || !(!r._dur && r instanceof N && r.vars.onComplete === r._targets[0])) && ct(i, r, r._start - r._delay), r = n;
                    return ct(F, i, 0), i
                },
                context: function(t, e) {
                    return t ? new dr(t, e) : E
                },
                matchMedia: function(t) {
                    return new On(t)
                },
                matchMediaRefresh: function() {
                    return zt.forEach(function(t) {
                        var e = t.conditions,
                            i, r;
                        for (r in e) e[r] && (e[r] = !1, i = 1);
                        i && t.revert()
                    }) || ai()
                },
                addEventListener: function(t, e) {
                    var i = Oe[t] || (Oe[t] = []);
                    ~i.indexOf(e) || i.push(e)
                },
                removeEventListener: function(t, e) {
                    var i = Oe[t],
                        r = i && i.indexOf(e);
                    r >= 0 && i.splice(r, 1)
                },
                utils: {
                    wrap: nn,
                    wrapYoyo: sn,
                    distribute: qi,
                    random: Wi,
                    snap: Gi,
                    normalize: rn,
                    getUnit: j,
                    clamp: Zr,
                    splitColor: Zi,
                    toArray: ft,
                    selector: $e,
                    mapRange: $i,
                    pipe: tn,
                    unitize: en,
                    interpolate: an,
                    shuffle: Xi
                },
                install: ki,
                effects: Ye,
                ticker: st,
                updateRoot: G.updateRoot,
                plugins: rt,
                globalTimeline: F,
                core: {
                    PropTween: Z,
                    globals: Ci,
                    Tween: N,
                    Timeline: G,
                    Animation: ue,
                    getCache: Mt,
                    _removeLinkedListItem: we,
                    reverting: function() {
                        return Q
                    },
                    context: function(t) {
                        return t && E && (E.data.push(t), t._ctx = E), E
                    },
                    suppressOverwrites: function(t) {
                        return Ae = t
                    }
                }
            };
        H("to,from,fromTo,delayedCall,set,killTweensOf", function(f) {
            return ke[f] = N[f]
        }), st.add(G.updateRoot), Qt = ke.to({}, {
            duration: 0
        });
        var kn = function(t, e) {
                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                return i
            },
            Cn = function(t, e) {
                var i = t._targets,
                    r, n, s;
                for (r in e)
                    for (n = i.length; n--;) s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = kn(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r))
            },
            oi = function(t, e) {
                return {
                    name: t,
                    rawVars: 1,
                    init: function(r, n, s) {
                        s._onInit = function(a) {
                            var o, u;
                            if (U(n) && (o = {}, H(n, function(h) {
                                    return o[h] = 1
                                }), n = o), e) {
                                o = {};
                                for (u in n) o[u] = e(n[u]);
                                n = o
                            }
                            Cn(a, n)
                        }
                    }
                }
            },
            J = ke.registerPlugin({
                name: "attr",
                init: function(t, e, i, r, n) {
                    var s, a, o;
                    this.tween = i;
                    for (s in e) o = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (o || 0) + "", e[s], r, n, 0, 0, s), a.op = s, a.b = o, this._props.push(s)
                },
                render: function(t, e) {
                    for (var i = e._pt; i;) Q ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
                }
            }, {
                name: "endArray",
                init: function(t, e) {
                    for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
                }
            }, oi("roundProps", je), oi("modifiers"), oi("snap", Gi)) || ke;
        N.version = G.version = J.version = "3.12.5", Oi = 1, ze() && $t();
        var Mn = O.Power0,
            Dn = O.Power1,
            An = O.Power2,
            Rn = O.Power3,
            En = O.Power4,
            zn = O.Linear,
            Fn = O.Quad,
            Ln = O.Cubic,
            Bn = O.Quart,
            In = O.Quint,
            Nn = O.Strong,
            Vn = O.Elastic,
            Un = O.Back,
            Yn = O.SteppedEase,
            Xn = O.Bounce,
            qn = O.Sine,
            Gn = O.Expo,
            Wn = O.Circ,
            pr, Ot, jt, ui, Ft, mr, fi, Qn = function() {
                return typeof window < "u"
            },
            yt = {},
            Lt = 180 / Math.PI,
            Kt = Math.PI / 180,
            Ht = Math.atan2,
            gr = 1e8,
            hi = /([A-Z])/g,
            $n = /(left|right|width|margin|padding|x)/i,
            jn = /[\s,\(]\S/,
            dt = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            },
            _i = function(t, e) {
                return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
            },
            Kn = function(t, e) {
                return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
            },
            Hn = function(t, e) {
                return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
            },
            Zn = function(t, e) {
                var i = e.s + e.c * t;
                e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
            },
            yr = function(t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e)
            },
            vr = function(t, e) {
                return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
            },
            Jn = function(t, e, i) {
                return t.style[e] = i
            },
            ts = function(t, e, i) {
                return t.style.setProperty(e, i)
            },
            es = function(t, e, i) {
                return t._gsap[e] = i
            },
            is = function(t, e, i) {
                return t._gsap.scaleX = t._gsap.scaleY = i
            },
            rs = function(t, e, i, r, n) {
                var s = t._gsap;
                s.scaleX = s.scaleY = i, s.renderTransform(n, s)
            },
            ns = function(t, e, i, r, n) {
                var s = t._gsap;
                s[e] = i, s.renderTransform(n, s)
            },
            L = "transform",
            tt = L + "Origin",
            ss = function f(t, e) {
                var i = this,
                    r = this.target,
                    n = r.style,
                    s = r._gsap;
                if (t in yt && n) {
                    if (this.tfm = this.tfm || {}, t !== "transform") t = dt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
                        return i.tfm[a] = vt(r, a)
                    }) : this.tfm[t] = s.x ? s[t] : vt(r, t), t === tt && (this.tfm.zOrigin = s.zOrigin);
                    else return dt.transform.split(",").forEach(function(a) {
                        return f.call(i, a, e)
                    });
                    if (this.props.indexOf(L) >= 0) return;
                    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(tt, e, "")), t = L
                }(n || e) && this.props.push(t, e, n[t])
            },
            xr = function(t) {
                t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
            },
            as = function() {
                var t = this.props,
                    e = this.target,
                    i = e.style,
                    r = e._gsap,
                    n, s;
                for (n = 0; n < t.length; n += 3) t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(hi, "-$1").toLowerCase());
                if (this.tfm) {
                    for (s in this.tfm) r[s] = this.tfm[s];
                    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = fi(), (!n || !n.isStart) && !i[L] && (xr(i), r.zOrigin && i[tt] && (i[tt] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1)
                }
            },
            Tr = function(t, e) {
                var i = {
                    target: t,
                    props: [],
                    revert: as,
                    save: ss
                };
                return t._gsap || J.core.getCache(t), e && e.split(",").forEach(function(r) {
                    return i.save(r)
                }), i
            },
            wr, li = function(t, e) {
                var i = Ot.createElementNS ? Ot.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ot.createElement(t);
                return i && i.style ? i : Ot.createElement(t)
            },
            pt = function f(t, e, i) {
                var r = getComputedStyle(t);
                return r[e] || r.getPropertyValue(e.replace(hi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && f(t, Zt(e) || e, 1) || ""
            },
            br = "O,Moz,ms,Ms,Webkit".split(","),
            Zt = function(t, e, i) {
                var r = e || Ft,
                    n = r.style,
                    s = 5;
                if (t in n && !i) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(br[s] + t in n););
                return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? br[s] : "") + t
            },
            ci = function() {
                Qn() && window.document && (pr = window, Ot = pr.document, jt = Ot.documentElement, Ft = li("div") || {
                    style: {}
                }, li("div"), L = Zt(L), tt = L + "Origin", Ft.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", wr = !!Zt("perspective"), fi = J.core.reverting, ui = 1)
            },
            di = function f(t) {
                var e = li("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    i = this.parentNode,
                    r = this.nextSibling,
                    n = this.style.cssText,
                    s;
                if (jt.appendChild(e), e.appendChild(this), this.style.display = "block", t) try {
                    s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = f
                } catch {} else this._gsapBBox && (s = this._gsapBBox());
                return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), jt.removeChild(e), this.style.cssText = n, s
            },
            Pr = function(t, e) {
                for (var i = e.length; i--;)
                    if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
            },
            Sr = function(t) {
                var e;
                try {
                    e = t.getBBox()
                } catch {
                    e = di.call(t, !0)
                }
                return e && (e.width || e.height) || t.getBBox === di || (e = di.call(t, !0)), e && !e.width && !e.x && !e.y ? {
                    x: +Pr(t, ["x", "cx", "x1"]) || 0,
                    y: +Pr(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                } : e
            },
            Or = function(t) {
                return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Sr(t))
            },
            Bt = function(t, e) {
                if (e) {
                    var i = t.style,
                        r;
                    e in yt && e !== tt && (e = L), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(hi, "-$1").toLowerCase())) : i.removeAttribute(e)
                }
            },
            kt = function(t, e, i, r, n, s) {
                var a = new Z(t._pt, e, i, 0, 1, s ? vr : yr);
                return t._pt = a, a.b = r, a.e = n, t._props.push(i), a
            },
            kr = {
                deg: 1,
                rad: 1,
                turn: 1
            },
            os = {
                grid: 1,
                flex: 1
            },
            Ct = function f(t, e, i, r) {
                var n = parseFloat(i) || 0,
                    s = (i + "").trim().substr((n + "").length) || "px",
                    a = Ft.style,
                    o = $n.test(e),
                    u = t.tagName.toLowerCase() === "svg",
                    h = (u ? "client" : "offset") + (o ? "Width" : "Height"),
                    l = 100,
                    c = r === "px",
                    d = r === "%",
                    p, _, m, y;
                if (r === s || !n || kr[r] || kr[s]) return n;
                if (s !== "px" && !c && (n = f(t, e, i, "px")), y = t.getCTM && Or(t), (d || s === "%") && (yt[e] || ~e.indexOf("adius"))) return p = y ? t.getBBox()[o ? "width" : "height"] : t[h], I(d ? n / p * l : n / 100 * p);
                if (a[o ? "width" : "height"] = l + (c ? s : r), _ = ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, y && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === Ot || !_.appendChild) && (_ = Ot.body), m = _._gsap, m && d && m.width && o && m.time === st.time && !m.uncache) return I(n / m.width * l);
                if (d && (e === "height" || e === "width")) {
                    var v = t.style[e];
                    t.style[e] = l + r, p = t[h], v ? t.style[e] = v : Bt(t, e)
                } else(d || s === "%") && !os[pt(_, "display")] && (a.position = pt(t, "position")), _ === t && (a.position = "static"), _.appendChild(Ft), p = Ft[h], _.removeChild(Ft), a.position = "absolute";
                return o && d && (m = Mt(_), m.time = st.time, m.width = _[h]), I(c ? p * n / l : p && n ? l / p * n : 0)
            },
            vt = function(t, e, i, r) {
                var n;
                return ui || ci(), e in dt && e !== "transform" && (e = dt[e], ~e.indexOf(",") && (e = e.split(",")[0])), yt[e] && e !== "transform" ? (n = _e(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Me(pt(t, tt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Ce[e] && Ce[e](t, e, i) || pt(t, e) || Ai(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Ct(t, e, n, i) + i : n
            },
            us = function(t, e, i, r) {
                if (!i || i === "none") {
                    var n = Zt(e, t, 1),
                        s = n && pt(t, n, 1);
                    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = pt(t, "borderTopColor"))
                }
                var a = new Z(this._pt, t.style, e, 0, 1, _r),
                    o = 0,
                    u = 0,
                    h, l, c, d, p, _, m, y, v, x, T, g;
                if (a.b = i, a.e = r, i += "", r += "", r === "auto" && (_ = t.style[e], t.style[e] = r, r = pt(t, e) || r, _ ? t.style[e] = _ : Bt(t, e)), h = [i, r], er(h), i = h[0], r = h[1], c = i.match(Xt) || [], g = r.match(Xt) || [], g.length) {
                    for (; l = Xt.exec(r);) m = l[0], v = r.substring(o, l.index), p ? p = (p + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (p = 1), m !== (_ = c[u++] || "") && (d = parseFloat(_) || 0, T = _.substr((d + "").length), m.charAt(1) === "=" && (m = qt(d, m) + T), y = parseFloat(m), x = m.substr((y + "").length), o = Xt.lastIndex - x.length, x || (x = x || et.units[e] || T, o === r.length && (r += x, a.e += x)), T !== x && (d = Ct(t, e, _, x) || 0), a._pt = {
                        _next: a._pt,
                        p: v || u === 1 ? v : ",",
                        s: d,
                        c: y - d,
                        m: p && p < 4 || e === "zIndex" ? Math.round : 0
                    });
                    a.c = o < r.length ? r.substring(o, r.length) : ""
                } else a.r = e === "display" && r === "none" ? vr : yr;
                return Pi.test(r) && (a.e = 0), this._pt = a, a
            },
            Cr = {
                top: "0%",
                bottom: "100%",
                left: "0%",
                right: "100%",
                center: "50%"
            },
            fs = function(t) {
                var e = t.split(" "),
                    i = e[0],
                    r = e[1] || "50%";
                return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Cr[i] || i, e[1] = Cr[r] || r, e.join(" ")
            },
            hs = function(t, e) {
                if (e.tween && e.tween._time === e.tween._dur) {
                    var i = e.t,
                        r = i.style,
                        n = e.u,
                        s = i._gsap,
                        a, o, u;
                    if (n === "all" || n === !0) r.cssText = "", o = 1;
                    else
                        for (n = n.split(","), u = n.length; --u > -1;) a = n[u], yt[a] && (o = 1, a = a === "transformOrigin" ? tt : L), Bt(i, a);
                    o && (Bt(i, L), s && (s.svg && i.removeAttribute("transform"), _e(i, 1), s.uncache = 1, xr(r)))
                }
            },
            Ce = {
                clearProps: function(t, e, i, r, n) {
                    if (n.data !== "isFromStart") {
                        var s = t._pt = new Z(t._pt, e, i, 0, 0, hs);
                        return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1
                    }
                }
            },
            he = [1, 0, 0, 1, 0, 0],
            Mr = {},
            Dr = function(t) {
                return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
            },
            Ar = function(t) {
                var e = pt(t, L);
                return Dr(e) ? he : e.substr(7).match(bi).map(I)
            },
            pi = function(t, e) {
                var i = t._gsap || Mt(t),
                    r = t.style,
                    n = Ar(t),
                    s, a, o, u;
                return i.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? he : n) : (n === he && !t.offsetParent && t !== jt && !i.svg && (o = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (u = 1, a = t.nextElementSibling, jt.appendChild(t)), n = Ar(t), o ? r.display = o : Bt(t, "display"), u && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : jt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
            },
            mi = function(t, e, i, r, n, s) {
                var a = t._gsap,
                    o = n || pi(t, !0),
                    u = a.xOrigin || 0,
                    h = a.yOrigin || 0,
                    l = a.xOffset || 0,
                    c = a.yOffset || 0,
                    d = o[0],
                    p = o[1],
                    _ = o[2],
                    m = o[3],
                    y = o[4],
                    v = o[5],
                    x = e.split(" "),
                    T = parseFloat(x[0]) || 0,
                    g = parseFloat(x[1]) || 0,
                    b, P, S, w;
                i ? o !== he && (P = d * m - p * _) && (S = T * (m / P) + g * (-_ / P) + (_ * v - m * y) / P, w = T * (-p / P) + g * (d / P) - (d * v - p * y) / P, T = S, g = w) : (b = Sr(t), T = b.x + (~x[0].indexOf("%") ? T / 100 * b.width : T), g = b.y + (~(x[1] || x[0]).indexOf("%") ? g / 100 * b.height : g)), r || r !== !1 && a.smooth ? (y = T - u, v = g - h, a.xOffset = l + (y * d + v * _) - y, a.yOffset = c + (y * p + v * m) - v) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = g, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!i, t.style[tt] = "0px 0px", s && (kt(s, a, "xOrigin", u, T), kt(s, a, "yOrigin", h, g), kt(s, a, "xOffset", l, a.xOffset), kt(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", T + " " + g)
            },
            _e = function(t, e) {
                var i = t._gsap || new sr(t);
                if ("x" in i && !e && !i.uncache) return i;
                var r = t.style,
                    n = i.scaleX < 0,
                    s = "px",
                    a = "deg",
                    o = getComputedStyle(t),
                    u = pt(t, tt) || "0",
                    h, l, c, d, p, _, m, y, v, x, T, g, b, P, S, w, k, z, A, R, W, X, V, q, ht, De, ce, de, Vt, zr, xt, Ut;
                return h = l = c = _ = m = y = v = x = T = 0, d = p = 1, i.svg = !!(t.getCTM && Or(t)), o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (r[L] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[L] !== "none" ? o[L] : "")), r.scale = r.rotate = r.translate = "none"), P = pi(t, i.svg), i.svg && (i.uncache ? (ht = t.getBBox(), u = i.xOrigin - ht.x + "px " + (i.yOrigin - ht.y) + "px", q = "") : q = !e && t.getAttribute("data-svg-origin"), mi(t, q || u, !!q || i.originIsAbsolute, i.smooth !== !1, P)), g = i.xOrigin || 0, b = i.yOrigin || 0, P !== he && (z = P[0], A = P[1], R = P[2], W = P[3], h = X = P[4], l = V = P[5], P.length === 6 ? (d = Math.sqrt(z * z + A * A), p = Math.sqrt(W * W + R * R), _ = z || A ? Ht(A, z) * Lt : 0, v = R || W ? Ht(R, W) * Lt + _ : 0, v && (p *= Math.abs(Math.cos(v * Kt))), i.svg && (h -= g - (g * z + b * R), l -= b - (g * A + b * W))) : (Ut = P[6], zr = P[7], ce = P[8], de = P[9], Vt = P[10], xt = P[11], h = P[12], l = P[13], c = P[14], S = Ht(Ut, Vt), m = S * Lt, S && (w = Math.cos(-S), k = Math.sin(-S), q = X * w + ce * k, ht = V * w + de * k, De = Ut * w + Vt * k, ce = X * -k + ce * w, de = V * -k + de * w, Vt = Ut * -k + Vt * w, xt = zr * -k + xt * w, X = q, V = ht, Ut = De), S = Ht(-R, Vt), y = S * Lt, S && (w = Math.cos(-S), k = Math.sin(-S), q = z * w - ce * k, ht = A * w - de * k, De = R * w - Vt * k, xt = W * k + xt * w, z = q, A = ht, R = De), S = Ht(A, z), _ = S * Lt, S && (w = Math.cos(S), k = Math.sin(S), q = z * w + A * k, ht = X * w + V * k, A = A * w - z * k, V = V * w - X * k, z = q, X = ht), m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0, y = 180 - y), d = I(Math.sqrt(z * z + A * A + R * R)), p = I(Math.sqrt(V * V + Ut * Ut)), S = Ht(X, V), v = Math.abs(S) > 2e-4 ? S * Lt : 0, T = xt ? 1 / (xt < 0 ? -xt : xt) : 0), i.svg && (q = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Dr(pt(t, L)), q && t.setAttribute("transform", q))), Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (d *= -1, v += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (p *= -1, v += v <= 0 ? 180 : -180)), e = e || i.uncache, i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = l - ((i.yPercent = l && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = I(d), i.scaleY = I(p), i.rotation = I(_) + a, i.rotationX = I(m) + a, i.rotationY = I(y) + a, i.skewX = v + a, i.skewY = x + a, i.transformPerspective = T + s, (i.zOrigin = parseFloat(u.split(" ")[2]) || !e && i.zOrigin || 0) && (r[tt] = Me(u)), i.xOffset = i.yOffset = 0, i.force3D = et.force3D, i.renderTransform = i.svg ? ls : wr ? Rr : _s, i.uncache = 0, i
            },
            Me = function(t) {
                return (t = t.split(" "))[0] + " " + t[1]
            },
            gi = function(t, e, i) {
                var r = j(e);
                return I(parseFloat(e) + parseFloat(Ct(t, "x", i + "px", r))) + r
            },
            _s = function(t, e) {
                e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Rr(t, e)
            },
            It = "0deg",
            le = "0px",
            Nt = ") ",
            Rr = function(t, e) {
                var i = e || this,
                    r = i.xPercent,
                    n = i.yPercent,
                    s = i.x,
                    a = i.y,
                    o = i.z,
                    u = i.rotation,
                    h = i.rotationY,
                    l = i.rotationX,
                    c = i.skewX,
                    d = i.skewY,
                    p = i.scaleX,
                    _ = i.scaleY,
                    m = i.transformPerspective,
                    y = i.force3D,
                    v = i.target,
                    x = i.zOrigin,
                    T = "",
                    g = y === "auto" && t && t !== 1 || y === !0;
                if (x && (l !== It || h !== It)) {
                    var b = parseFloat(h) * Kt,
                        P = Math.sin(b),
                        S = Math.cos(b),
                        w;
                    b = parseFloat(l) * Kt, w = Math.cos(b), s = gi(v, s, P * w * -x), a = gi(v, a, -Math.sin(b) * -x), o = gi(v, o, S * w * -x + x)
                }
                m !== le && (T += "perspective(" + m + Nt), (r || n) && (T += "translate(" + r + "%, " + n + "%) "), (g || s !== le || a !== le || o !== le) && (T += o !== le || g ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Nt), u !== It && (T += "rotate(" + u + Nt), h !== It && (T += "rotateY(" + h + Nt), l !== It && (T += "rotateX(" + l + Nt), (c !== It || d !== It) && (T += "skew(" + c + ", " + d + Nt), (p !== 1 || _ !== 1) && (T += "scale(" + p + ", " + _ + Nt), v.style[L] = T || "translate(0, 0)"
            },
            ls = function(t, e) {
                var i = e || this,
                    r = i.xPercent,
                    n = i.yPercent,
                    s = i.x,
                    a = i.y,
                    o = i.rotation,
                    u = i.skewX,
                    h = i.skewY,
                    l = i.scaleX,
                    c = i.scaleY,
                    d = i.target,
                    p = i.xOrigin,
                    _ = i.yOrigin,
                    m = i.xOffset,
                    y = i.yOffset,
                    v = i.forceCSS,
                    x = parseFloat(s),
                    T = parseFloat(a),
                    g, b, P, S, w;
                o = parseFloat(o), u = parseFloat(u), h = parseFloat(h), h && (h = parseFloat(h), u += h, o += h), o || u ? (o *= Kt, u *= Kt, g = Math.cos(o) * l, b = Math.sin(o) * l, P = Math.sin(o - u) * -c, S = Math.cos(o - u) * c, u && (h *= Kt, w = Math.tan(u - h), w = Math.sqrt(1 + w * w), P *= w, S *= w, h && (w = Math.tan(h), w = Math.sqrt(1 + w * w), g *= w, b *= w)), g = I(g), b = I(b), P = I(P), S = I(S)) : (g = l, S = c, b = P = 0), (x && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (x = Ct(d, "x", s, "px"), T = Ct(d, "y", a, "px")), (p || _ || m || y) && (x = I(x + p - (p * g + _ * P) + m), T = I(T + _ - (p * b + _ * S) + y)), (r || n) && (w = d.getBBox(), x = I(x + r / 100 * w.width), T = I(T + n / 100 * w.height)), w = "matrix(" + g + "," + b + "," + P + "," + S + "," + x + "," + T + ")", d.setAttribute("transform", w), v && (d.style[L] = w)
            },
            cs = function(t, e, i, r, n) {
                var s = 360,
                    a = U(n),
                    o = parseFloat(n) * (a && ~n.indexOf("rad") ? Lt : 1),
                    u = o - r,
                    h = r + u + "deg",
                    l, c;
                return a && (l = n.split("_")[1], l === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -s)), l === "cw" && u < 0 ? u = (u + s * gr) % s - ~~(u / s) * s : l === "ccw" && u > 0 && (u = (u - s * gr) % s - ~~(u / s) * s)), t._pt = c = new Z(t._pt, e, i, r, u, Kn), c.e = h, c.u = "deg", t._props.push(i), c
            },
            Er = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            ds = function(t, e, i) {
                var r = Er({}, i._gsap),
                    n = "perspective,force3D,transformOrigin,svgOrigin",
                    s = i.style,
                    a, o, u, h, l, c, d, p;
                r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), s[L] = e, a = _e(i, 1), Bt(i, L), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[L], s[L] = e, a = _e(i, 1), s[L] = u);
                for (o in yt) u = r[o], h = a[o], u !== h && n.indexOf(o) < 0 && (d = j(u), p = j(h), l = d !== p ? Ct(i, o, u, p) : parseFloat(u), c = parseFloat(h), t._pt = new Z(t._pt, a, o, l, c - l, _i), t._pt.u = p || 0, t._props.push(o));
                Er(a, r)
            };
        H("padding,margin,Width,Radius", function(f, t) {
            var e = "Top",
                i = "Right",
                r = "Bottom",
                n = "Left",
                s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
                    return t < 2 ? f + a : "border" + a + f
                });
            Ce[t > 1 ? "border" + f : f] = function(a, o, u, h, l) {
                var c, d;
                if (arguments.length < 4) return c = s.map(function(p) {
                    return vt(a, p, u)
                }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
                c = (h + "").split(" "), d = {}, s.forEach(function(p, _) {
                    return d[p] = c[_] = c[_] || c[(_ - 1) / 2 | 0]
                }), a.init(o, d, l)
            }
        });
        var yi = {
            name: "css",
            register: ci,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, i, r, n) {
                var s = this._props,
                    a = t.style,
                    o = i.vars.startAt,
                    u, h, l, c, d, p, _, m, y, v, x, T, g, b, P, S;
                ui || ci(), this.styles = this.styles || Tr(t), S = this.styles.props, this.tween = i;
                for (_ in e)
                    if (_ !== "autoRound" && (h = e[_], !(rt[_] && ar(_, e, i, r, t, n)))) {
                        if (d = typeof h, p = Ce[_], d === "function" && (h = h.call(i, r, t, n), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = ne(h)), p) p(this, t, _, h, i) && (P = 1);
                        else if (_.substr(0, 2) === "--") u = (getComputedStyle(t).getPropertyValue(_) + "").trim(), h += "", Pt.lastIndex = 0, Pt.test(u) || (m = j(u), y = j(h)), y ? m !== y && (u = Ct(t, _, u, y) + y) : m && (h += m), this.add(a, "setProperty", u, h, r, n, 0, 0, _), s.push(_), S.push(_, 0, a[_]);
                        else if (d !== "undefined") {
                            if (o && _ in o ? (u = typeof o[_] == "function" ? o[_].call(i, r, t, n) : o[_], U(u) && ~u.indexOf("random(") && (u = ne(u)), j(u + "") || u === "auto" || (u += et.units[_] || j(vt(t, _)) || ""), (u + "").charAt(1) === "=" && (u = vt(t, _))) : u = vt(t, _), c = parseFloat(u), v = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), v && (h = h.substr(2)), l = parseFloat(h), _ in dt && (_ === "autoAlpha" && (c === 1 && vt(t, "visibility") === "hidden" && l && (c = 0), S.push("visibility", 0, a.visibility), kt(this, a, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), _ !== "scale" && _ !== "transform" && (_ = dt[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), x = _ in yt, x) {
                                if (this.styles.save(_), T || (g = t._gsap, g.renderTransform && !e.parseTransform || _e(t, e.parseTransform), b = e.smoothOrigin !== !1 && g.smooth, T = this._pt = new Z(this._pt, a, L, 0, 1, g.renderTransform, g, 0, -1), T.dep = 1), _ === "scale") this._pt = new Z(this._pt, g, "scaleY", g.scaleY, (v ? qt(g.scaleY, v + l) : l) - g.scaleY || 0, _i), this._pt.u = 0, s.push("scaleY", _), _ += "X";
                                else if (_ === "transformOrigin") {
                                    S.push(tt, 0, a[tt]), h = fs(h), g.svg ? mi(t, h, 0, b, 0, this) : (y = parseFloat(h.split(" ")[2]) || 0, y !== g.zOrigin && kt(this, g, "zOrigin", g.zOrigin, y), kt(this, a, _, Me(u), Me(h)));
                                    continue
                                } else if (_ === "svgOrigin") {
                                    mi(t, h, 1, b, 0, this);
                                    continue
                                } else if (_ in Mr) {
                                    cs(this, g, _, c, v ? qt(c, v + h) : h);
                                    continue
                                } else if (_ === "smoothOrigin") {
                                    kt(this, g, "smooth", g.smooth, h);
                                    continue
                                } else if (_ === "force3D") {
                                    g[_] = h;
                                    continue
                                } else if (_ === "transform") {
                                    ds(this, h, t);
                                    continue
                                }
                            } else _ in a || (_ = Zt(_) || _);
                            if (x || (l || l === 0) && (c || c === 0) && !jn.test(h) && _ in a) m = (u + "").substr((c + "").length), l || (l = 0), y = j(h) || (_ in et.units ? et.units[_] : m), m !== y && (c = Ct(t, _, u, y)), this._pt = new Z(this._pt, x ? g : a, _, c, (v ? qt(c, v + l) : l) - c, !x && (y === "px" || _ === "zIndex") && e.autoRound !== !1 ? Zn : _i), this._pt.u = y || 0, m !== y && y !== "%" && (this._pt.b = u, this._pt.r = Hn);
                            else if (_ in a) us.call(this, t, _, u, v ? v + h : h);
                            else if (_ in t) this.add(t, _, u || t[_], v ? v + h : h, r, n);
                            else if (_ !== "parseTransform") {
                                Ne(_, h);
                                continue
                            }
                            x || (_ in a ? S.push(_, 0, a[_]) : S.push(_, 1, u || t[_])), s.push(_)
                        }
                    }
                P && lr(this)
            },
            render: function(t, e) {
                if (e.tween._time || !fi())
                    for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
                else e.styles.revert()
            },
            get: vt,
            aliases: dt,
            getSetter: function(t, e, i) {
                var r = dt[e];
                return r && r.indexOf(",") < 0 && (e = r), e in yt && e !== tt && (t._gsap.x || vt(t, "x")) ? i && mr === i ? e === "scale" ? is : es : (mr = i || {}) && (e === "scale" ? rs : ns) : t.style && !Ee(t.style[e]) ? Jn : ~e.indexOf("-") ? ts : ri(t, e)
            },
            core: {
                _removeProperty: Bt,
                _getMatrix: pi
            }
        };
        J.utils.checkPrefix = Zt, J.core.getStyleSaver = Tr,
            function(f, t, e, i) {
                var r = H(f + "," + t + "," + e, function(n) {
                    yt[n] = 1
                });
                H(t, function(n) {
                    et.units[n] = "deg", Mr[n] = 1
                }), dt[r[13]] = f + "," + t, H(i, function(n) {
                    var s = n.split(":");
                    dt[s[1]] = r[s[0]]
                })
            }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"), H("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(f) {
                et.units[f] = "px"
            }), J.registerPlugin(yi);
        var vi = J.registerPlugin(yi) || J,
            ps = vi.core.Tween;
        C.Back = Un, C.Bounce = Xn, C.CSSPlugin = yi, C.Circ = Wn, C.Cubic = Ln, C.Elastic = Vn, C.Expo = Gn, C.Linear = zn, C.Power0 = Mn, C.Power1 = Dn, C.Power2 = An, C.Power3 = Rn, C.Power4 = En, C.Quad = Fn, C.Quart = Bn, C.Quint = In, C.Sine = qn, C.SteppedEase = Yn, C.Strong = Nn, C.TimelineLite = G, C.TimelineMax = G, C.TweenLite = N, C.TweenMax = ps, C.default = vi, C.gsap = vi, typeof window > "u" || window !== C ? Object.defineProperty(C, "__esModule", {
            value: !0
        }) : delete window.default
    })
})(xi, xi.exports);
var vs = xi.exports;
export {
    vs as g
};