var Bl = Object.defineProperty;
var Yl = (p, e, t) => e in p ? Bl(p, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : p[e] = t;
var gn = (p, e, t) => (Yl(p, typeof e != "symbol" ? e + "" : e, t), t);
import {
    c as Fa,
    S as Xl
} from "./SplitText.BqdrKGYP.js";

function ff(p) {
    return (p == null ? void 0 : p.length) !== void 0 ? p : Array.from(p)
}

function nn(p) {
    if (p === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return p
}

function Ia(p, e) {
    p.prototype = Object.create(e.prototype), p.prototype.constructor = p, p.__proto__ = e
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
var hr = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    ms = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    ra, Xi, jt, vr = 1e8,
    Yt = 1 / vr,
    Yo = Math.PI * 2,
    Hl = Yo / 4,
    Wl = 0,
    Ba = Math.sqrt,
    Vl = Math.cos,
    Gl = Math.sin,
    Mi = function(e) {
        return typeof e == "string"
    },
    li = function(e) {
        return typeof e == "function"
    },
    on = function(e) {
        return typeof e == "number"
    },
    na = function(e) {
        return typeof e > "u"
    },
    Vr = function(e) {
        return typeof e == "object"
    },
    tr = function(e) {
        return e !== !1
    },
    sa = function() {
        return typeof window < "u"
    },
    fo = function(e) {
        return li(e) || Mi(e)
    },
    Ya = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    Hi = Array.isArray,
    Xo = /(?:-?\.?\d|\.)+/gi,
    Xa = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    hs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Eo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Ha = /[+-]=-?[.\d]+/,
    Wa = /[^,'"\[\]\s]+/gi,
    Ul = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ti, Yr, Ho, oa, dr = {},
    _o = {},
    Va, Ga = function(e) {
        return (_o = Un(e, dr)) && sr
    },
    aa = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    },
    $s = function(e, t) {
        return !t && console.warn(e)
    },
    Ua = function(e, t) {
        return e && (dr[e] = t) && _o && (_o[e] = t) || dr
    },
    qs = function() {
        return 0
    },
    $l = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    co = {
        suppressEvents: !0,
        kill: !1
    },
    ql = {
        suppressEvents: !0
    },
    la = {},
    yn = [],
    Wo = {},
    $a, ur = {},
    Oo = {},
    wa = 30,
    ho = [],
    ua = "",
    fa = function(e) {
        var t = e[0],
            i, r;
        if (Vr(t) || li(t) || (e = [e]), !(i = (t._gsap || {}).harness)) {
            for (r = ho.length; r-- && !ho[r].targetTest(t););
            i = ho[r]
        }
        for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new ml(e[r], i))) || e.splice(r, 1);
        return e
    },
    Hn = function(e) {
        return e._gsap || fa(xr(e))[0]._gsap
    },
    qa = function(e, t, i) {
        return (i = e[t]) && li(i) ? e[t]() : na(i) && e.getAttribute && e.getAttribute(t) || i
    },
    ir = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    },
    hi = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Ci = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    ps = function(e, t) {
        var i = t.charAt(0),
            r = parseFloat(t.substr(2));
        return e = parseFloat(e), i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    },
    Kl = function(e, t) {
        for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i;);
        return r < i
    },
    go = function() {
        var e = yn.length,
            t = yn.slice(0),
            i, r;
        for (Wo = {}, yn.length = 0, i = 0; i < e; i++) r = t[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    },
    Ka = function(e, t, i, r) {
        yn.length && !Xi && go(), e.render(t, i, r || Xi && t < 0 && (e._initted || e._startAt)), yn.length && !Xi && go()
    },
    Qa = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(Wa).length < 2 ? t : Mi(e) ? e.trim() : e
    },
    Za = function(e) {
        return e
    },
    yr = function(e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e
    },
    Ql = function(e) {
        return function(t, i) {
            for (var r in i) r in t || r === "duration" && e || r === "ease" || (t[r] = i[r])
        }
    },
    Un = function(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    },
    ba = function p(e, t) {
        for (var i in t) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = Vr(t[i]) ? p(e[i] || (e[i] = {}), t[i]) : t[i]);
        return e
    },
    mo = function(e, t) {
        var i = {},
            r;
        for (r in e) r in t || (i[r] = e[r]);
        return i
    },
    Vs = function(e) {
        var t = e.parent || ti,
            i = e.keyframes ? Ql(Hi(e.keyframes)) : yr;
        if (tr(e.inherit))
            for (; t;) i(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    },
    Zl = function(e, t) {
        for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i];);
        return i < 0
    },
    ja = function(e, t, i, r, n) {
        i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
        var s = e[r],
            a;
        if (n)
            for (a = t[n]; s && s[n] > a;) s = s._prev;
        return s ? (t._next = s._next, s._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = s, t.parent = t._dp = e, t
    },
    So = function(e, t, i, r) {
        i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
        var n = t._prev,
            s = t._next;
        n ? n._next = s : e[i] === t && (e[i] = s), s ? s._prev = n : e[r] === t && (e[r] = n), t._next = t._prev = t.parent = null
    },
    bn = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
    },
    Wn = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var i = e; i;) i._dirty = 1, i = i.parent;
        return e
    },
    jl = function(e) {
        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
        return e
    },
    Vo = function(e, t, i, r) {
        return e._startAt && (Xi ? e._startAt.revert(co) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
    },
    Jl = function p(e) {
        return !e || e._ts && p(e.parent)
    },
    Ta = function(e) {
        return e._repeat ? vs(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    vs = function(e, t) {
        var i = Math.floor(e /= t);
        return e && i === e ? i - 1 : i
    },
    vo = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    },
    ko = function(e) {
        return e._end = Ci(e._start + (e._tDur / Math.abs(e._ts || e._rts || Yt) || 0))
    },
    Co = function(e, t) {
        var i = e._dp;
        return i && i.smoothChildTiming && e._ts && (e._start = Ci(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), ko(e), i._dirty || Wn(i, e)), e
    },
    Ja = function(e, t) {
        var i;
        if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = vo(e.rawTime(), t), (!t._dur || eo(0, t.totalDuration(), i) - t._tTime > Yt) && t.render(i, !0)), Wn(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (i = e; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
            e._zTime = -Yt
        }
    },
    Xr = function(e, t, i, r) {
        return t.parent && bn(t), t._start = Ci((on(i) ? i : i || e !== ti ? mr(e, i, t) : e._time) + t._delay), t._end = Ci(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), ja(e, t, "_first", "_last", e._sort ? "_start" : 0), Go(t) || (e._recent = t), r || Ja(e, t), e._ts < 0 && Co(e, e._tTime), e
    },
    el = function(e, t) {
        return (dr.ScrollTrigger || aa("scrollTrigger", t)) && dr.ScrollTrigger.create(t, e)
    },
    tl = function(e, t, i, r, n) {
        if (ha(e, t, n), !e._initted) return 1;
        if (!i && e._pt && !Xi && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && $a !== fr.frame) return yn.push(e), e._lazy = [n, r], 1
    },
    eu = function p(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || p(t))
    },
    Go = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    },
    tu = function(e, t, i, r) {
        var n = e.ratio,
            s = t < 0 || !t && (!e._start && eu(e) && !(!e._initted && Go(e)) || (e._ts < 0 || e._dp._ts < 0) && !Go(e)) ? 0 : 1,
            a = e._rDelay,
            f = 0,
            d, m, S;
        if (a && e._repeat && (f = eo(0, e._tDur, t), m = vs(f, a), e._yoyo && m & 1 && (s = 1 - s), m !== vs(e._tTime, a) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || Xi || r || e._zTime === Yt || !t && e._zTime) {
            if (!e._initted && tl(e, t, r, i, f)) return;
            for (S = e._zTime, e._zTime = t || (i ? Yt : 0), i || (i = t && !S), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = f, d = e._pt; d;) d.r(s, d.d), d = d._next;
            t < 0 && Vo(e, t, i, !0), e._onUpdate && !i && cr(e, "onUpdate"), f && e._repeat && !i && e.parent && cr(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && bn(e, 1), !i && !Xi && (cr(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = t)
    },
    iu = function(e, t, i) {
        var r;
        if (i > t)
            for (r = e._first; r && r._start <= i;) {
                if (r.data === "isPause" && r._start > t) return r;
                r = r._next
            } else
                for (r = e._last; r && r._start >= i;) {
                    if (r.data === "isPause" && r._start < t) return r;
                    r = r._prev
                }
    },
    xs = function(e, t, i, r) {
        var n = e._repeat,
            s = Ci(t) || 0,
            a = e._tTime / e._tDur;
        return a && !r && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : Ci(s * (n + 1) + e._rDelay * n) : s, a > 0 && !r && Co(e, e._tTime = e._tDur * a), e.parent && ko(e), i || Wn(e.parent, e), e
    },
    Sa = function(e) {
        return e instanceof Ki ? Wn(e) : xs(e, e._dur)
    },
    ru = {
        _start: 0,
        endTime: qs,
        totalDuration: qs
    },
    mr = function p(e, t, i) {
        var r = e.labels,
            n = e._recent || ru,
            s = e.duration() >= vr ? n.endTime(!1) : e._dur,
            a, f, d;
        return Mi(t) && (isNaN(t) || t in r) ? (f = t.charAt(0), d = t.substr(-1) === "%", a = t.indexOf("="), f === "<" || f === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (f === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (d ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (t in r || (r[t] = s), r[t]) : (f = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), d && i && (f = f / 100 * (Hi(i) ? i[0] : i).totalDuration()), a > 1 ? p(e, t.substr(0, a - 1), i) + f : s + f)) : t == null ? s : +t
    },
    Gs = function(e, t, i) {
        var r = on(t[1]),
            n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
            s = t[n],
            a, f;
        if (r && (s.duration = t[1]), s.parent = i, e) {
            for (a = s, f = i; f && !("immediateRender" in a);) a = f.vars.defaults || {}, f = tr(f.vars.inherit) && f.parent;
            s.immediateRender = tr(a.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1]
        }
        return new pi(t[0], s, t[n + 1])
    },
    Sn = function(e, t) {
        return e || e === 0 ? t(e) : t
    },
    eo = function(e, t, i) {
        return i < e ? e : i > t ? t : i
    },
    Yi = function(e, t) {
        return !Mi(e) || !(t = Ul.exec(e)) ? "" : t[1]
    },
    nu = function(e, t, i) {
        return Sn(i, function(r) {
            return eo(e, t, r)
        })
    },
    Uo = [].slice,
    il = function(e, t) {
        return e && Vr(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Vr(e[0])) && !e.nodeType && e !== Yr
    },
    su = function(e, t, i) {
        return i === void 0 && (i = []), e.forEach(function(r) {
            var n;
            return Mi(r) && !t || il(r, 1) ? (n = i).push.apply(n, xr(r)) : i.push(r)
        }) || i
    },
    xr = function(e, t, i) {
        return jt && !t && jt.selector ? jt.selector(e) : Mi(e) && !i && (Ho || !ys()) ? Uo.call((t || oa).querySelectorAll(e), 0) : Hi(e) ? su(e, i) : il(e) ? Uo.call(e, 0) : e ? [e] : []
    },
    $o = function(e) {
        return e = xr(e)[0] || $s("Invalid scope") || {},
            function(t) {
                var i = e.current || e.nativeElement || e;
                return xr(t, i.querySelectorAll ? i : i === e ? $s("Invalid scope") || oa.createElement("div") : e)
            }
    },
    rl = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    nl = function(e) {
        if (li(e)) return e;
        var t = Vr(e) ? e : {
                each: e
            },
            i = Vn(t.ease),
            r = t.from || 0,
            n = parseFloat(t.base) || 0,
            s = {},
            a = r > 0 && r < 1,
            f = isNaN(r) || a,
            d = t.axis,
            m = r,
            S = r;
        return Mi(r) ? m = S = {
                center: .5,
                edges: .5,
                end: 1
            }[r] || 0 : !a && f && (m = r[0], S = r[1]),
            function(P, E, N) {
                var b = (N || t).length,
                    L = s[b],
                    V, W, q, X, z, $, J, ne, Q;
                if (!L) {
                    if (Q = t.grid === "auto" ? 0 : (t.grid || [1, vr])[1], !Q) {
                        for (J = -vr; J < (J = N[Q++].getBoundingClientRect().left) && Q < b;);
                        Q < b && Q--
                    }
                    for (L = s[b] = [], V = f ? Math.min(Q, b) * m - .5 : r % Q, W = Q === vr ? 0 : f ? b * S / Q - .5 : r / Q | 0, J = 0, ne = vr, $ = 0; $ < b; $++) q = $ % Q - V, X = W - ($ / Q | 0), L[$] = z = d ? Math.abs(d === "y" ? X : q) : Ba(q * q + X * X), z > J && (J = z), z < ne && (ne = z);
                    r === "random" && rl(L), L.max = J - ne, L.min = ne, L.v = b = (parseFloat(t.amount) || parseFloat(t.each) * (Q > b ? b - 1 : d ? d === "y" ? b / Q : Q : Math.max(Q, b / Q)) || 0) * (r === "edges" ? -1 : 1), L.b = b < 0 ? n - b : n, L.u = Yi(t.amount || t.each) || 0, i = i && b < 0 ? pl(i) : i
                }
                return b = (L[P] - L.min) / L.max || 0, Ci(L.b + (i ? i(b) : b) * L.v) + L.u
            }
    },
    qo = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(i) {
            var r = Ci(Math.round(parseFloat(i) / e) * e * t);
            return (r - r % 1) / t + (on(i) ? 0 : Yi(i))
        }
    },
    sl = function(e, t) {
        var i = Hi(e),
            r, n;
        return !i && Vr(e) && (r = i = e.radius || vr, e.values ? (e = xr(e.values), (n = !on(e[0])) && (r *= r)) : e = qo(e.increment)), Sn(t, i ? li(e) ? function(s) {
            return n = e(s), Math.abs(n - s) <= r ? n : s
        } : function(s) {
            for (var a = parseFloat(n ? s.x : s), f = parseFloat(n ? s.y : 0), d = vr, m = 0, S = e.length, P, E; S--;) n ? (P = e[S].x - a, E = e[S].y - f, P = P * P + E * E) : P = Math.abs(e[S] - a), P < d && (d = P, m = S);
            return m = !r || d <= r ? e[m] : s, n || m === s || on(s) ? m : m + Yi(s)
        } : qo(e))
    },
    ol = function(e, t, i, r) {
        return Sn(Hi(e) ? !t : i === !0 ? !!(i = 0) : !r, function() {
            return Hi(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * .99)) / i) * i * r) / r
        })
    },
    ou = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return function(r) {
            return t.reduce(function(n, s) {
                return s(n)
            }, r)
        }
    },
    au = function(e, t) {
        return function(i) {
            return e(parseFloat(i)) + (t || Yi(i))
        }
    },
    lu = function(e, t, i) {
        return ll(e, t, 0, 1, i)
    },
    al = function(e, t, i) {
        return Sn(i, function(r) {
            return e[~~t(r)]
        })
    },
    uu = function p(e, t, i) {
        var r = t - e;
        return Hi(e) ? al(e, p(0, e.length), t) : Sn(i, function(n) {
            return (r + (n - e) % r) % r + e
        })
    },
    fu = function p(e, t, i) {
        var r = t - e,
            n = r * 2;
        return Hi(e) ? al(e, p(0, e.length - 1), t) : Sn(i, function(s) {
            return s = (n + (s - e) % n) % n || 0, e + (s > r ? n - s : s)
        })
    },
    Ks = function(e) {
        for (var t = 0, i = "", r, n, s, a; ~(r = e.indexOf("random(", t));) s = e.indexOf(")", r), a = e.charAt(r + 7) === "[", n = e.substr(r + 7, s - r - 7).match(a ? Wa : Xo), i += e.substr(t, r - t) + ol(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), t = s + 1;
        return i + e.substr(t, e.length - t)
    },
    ll = function(e, t, i, r, n) {
        var s = t - e,
            a = r - i;
        return Sn(n, function(f) {
            return i + ((f - e) / s * a || 0)
        })
    },
    cu = function p(e, t, i, r) {
        var n = isNaN(e + t) ? 0 : function(E) {
            return (1 - E) * e + E * t
        };
        if (!n) {
            var s = Mi(e),
                a = {},
                f, d, m, S, P;
            if (i === !0 && (r = 1) && (i = null), s) e = {
                p: e
            }, t = {
                p: t
            };
            else if (Hi(e) && !Hi(t)) {
                for (m = [], S = e.length, P = S - 2, d = 1; d < S; d++) m.push(p(e[d - 1], e[d]));
                S--, n = function(N) {
                    N *= S;
                    var b = Math.min(P, ~~N);
                    return m[b](N - b)
                }, i = t
            } else r || (e = Un(Hi(e) ? [] : {}, e));
            if (!m) {
                for (f in t) ca.call(a, e, f, "get", t[f]);
                n = function(N) {
                    return _a(N, a) || (s ? e.p : e)
                }
            }
        }
        return Sn(i, n)
    },
    ka = function(e, t, i) {
        var r = e.labels,
            n = vr,
            s, a, f;
        for (s in r) a = r[s] - t, a < 0 == !!i && a && n > (a = Math.abs(a)) && (f = s, n = a);
        return f
    },
    cr = function(e, t, i) {
        var r = e.vars,
            n = r[t],
            s = jt,
            a = e._ctx,
            f, d, m;
        if (n) return f = r[t + "Params"], d = r.callbackScope || e, i && yn.length && go(), a && (jt = a), m = f ? n.apply(d, f) : n.call(d), jt = s, m
    },
    Hs = function(e) {
        return bn(e), e.scrollTrigger && e.scrollTrigger.kill(!!Xi), e.progress() < 1 && cr(e, "onInterrupt"), e
    },
    ds, ul = [],
    fl = function(e) {
        if (e)
            if (e = !e.name && e.default || e, sa() || e.headless) {
                var t = e.name,
                    i = li(e),
                    r = t && !i && e.init ? function() {
                        this._props = []
                    } : e,
                    n = {
                        init: qs,
                        render: _a,
                        add: ca,
                        kill: Mu,
                        modifier: Cu,
                        rawVars: 0
                    },
                    s = {
                        targetTest: 0,
                        get: 0,
                        getSetter: pa,
                        aliases: {},
                        register: 0
                    };
                if (ys(), e !== r) {
                    if (ur[t]) return;
                    yr(r, yr(mo(e, n), s)), Un(r.prototype, Un(n, mo(e, s))), ur[r.prop = t] = r, e.targetTest && (ho.push(r), la[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                }
                Ua(t, r), e.register && e.register(sr, r, rr)
            } else ul.push(e)
    },
    It = 255,
    Ws = {
        aqua: [0, It, It],
        lime: [0, It, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, It],
        navy: [0, 0, 128],
        white: [It, It, It],
        olive: [128, 128, 0],
        yellow: [It, It, 0],
        orange: [It, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [It, 0, 0],
        pink: [It, 192, 203],
        cyan: [0, It, It],
        transparent: [It, It, It, 0]
    },
    Ro = function(e, t, i) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (i - t) * e * 6 : e < .5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * It + .5 | 0
    },
    cl = function(e, t, i) {
        var r = e ? on(e) ? [e >> 16, e >> 8 & It, e & It] : 0 : Ws.black,
            n, s, a, f, d, m, S, P, E, N;
        if (!r) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ws[e]) r = Ws[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), a = e.charAt(3), e = "#" + n + n + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [r >> 16, r >> 8 & It, r & It, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), r = [e >> 16, e >> 8 & It, e & It]
            } else if (e.substr(0, 3) === "hsl") {
                if (r = N = e.match(Xo), !t) f = +r[0] % 360 / 360, d = +r[1] / 100, m = +r[2] / 100, s = m <= .5 ? m * (d + 1) : m + d - m * d, n = m * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Ro(f + 1 / 3, n, s), r[1] = Ro(f, n, s), r[2] = Ro(f - 1 / 3, n, s);
                else if (~e.indexOf("=")) return r = e.match(Xa), i && r.length < 4 && (r[3] = 1), r
            } else r = e.match(Xo) || Ws.transparent;
            r = r.map(Number)
        }
        return t && !N && (n = r[0] / It, s = r[1] / It, a = r[2] / It, S = Math.max(n, s, a), P = Math.min(n, s, a), m = (S + P) / 2, S === P ? f = d = 0 : (E = S - P, d = m > .5 ? E / (2 - S - P) : E / (S + P), f = S === n ? (s - a) / E + (s < a ? 6 : 0) : S === s ? (a - n) / E + 2 : (n - s) / E + 4, f *= 60), r[0] = ~~(f + .5), r[1] = ~~(d * 100 + .5), r[2] = ~~(m * 100 + .5)), i && r.length < 4 && (r[3] = 1), r
    },
    hl = function(e) {
        var t = [],
            i = [],
            r = -1;
        return e.split(wn).forEach(function(n) {
            var s = n.match(hs) || [];
            t.push.apply(t, s), i.push(r += s.length + 1)
        }), t.c = i, t
    },
    Ca = function(e, t, i) {
        var r = "",
            n = (e + r).match(wn),
            s = t ? "hsla(" : "rgba(",
            a = 0,
            f, d, m, S;
        if (!n) return e;
        if (n = n.map(function(P) {
                return (P = cl(P, t, 1)) && s + (t ? P[0] + "," + P[1] + "%," + P[2] + "%," + P[3] : P.join(",")) + ")"
            }), i && (m = hl(e), f = i.c, f.join(r) !== m.c.join(r)))
            for (d = e.replace(wn, "1").split(hs), S = d.length - 1; a < S; a++) r += d[a] + (~f.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (m.length ? m : n.length ? n : i).shift());
        if (!d)
            for (d = e.split(wn), S = d.length - 1; a < S; a++) r += d[a] + n[a];
        return r + d[S]
    },
    wn = function() {
        var p = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in Ws) p += "|" + e + "\\b";
        return new RegExp(p + ")", "gi")
    }(),
    hu = /hsl[a]?\(/,
    dl = function(e) {
        var t = e.join(" "),
            i;
        if (wn.lastIndex = 0, wn.test(t)) return i = hu.test(t), e[1] = Ca(e[1], i), e[0] = Ca(e[0], i, hl(e[1])), !0
    },
    Qs, fr = function() {
        var p = Date.now,
            e = 500,
            t = 33,
            i = p(),
            r = i,
            n = 1e3 / 240,
            s = n,
            a = [],
            f, d, m, S, P, E, N = function b(L) {
                var V = p() - r,
                    W = L === !0,
                    q, X, z, $;
                if ((V > e || V < 0) && (i += V - t), r += V, z = r - i, q = z - s, (q > 0 || W) && ($ = ++S.frame, P = z - S.time * 1e3, S.time = z = z / 1e3, s += q + (q >= n ? 4 : n - q), X = 1), W || (f = d(b)), X)
                    for (E = 0; E < a.length; E++) a[E](z, P, $, L)
            };
        return S = {
            time: 0,
            frame: 0,
            tick: function() {
                N(!0)
            },
            deltaRatio: function(L) {
                return P / (1e3 / (L || 60))
            },
            wake: function() {
                Va && (!Ho && sa() && (Yr = Ho = window, oa = Yr.document || {}, dr.gsap = sr, (Yr.gsapVersions || (Yr.gsapVersions = [])).push(sr.version), Ga(_o || Yr.GreenSockGlobals || !Yr.gsap && Yr || {}), ul.forEach(fl)), m = typeof requestAnimationFrame < "u" && requestAnimationFrame, f && S.sleep(), d = m || function(L) {
                    return setTimeout(L, s - S.time * 1e3 + 1 | 0)
                }, Qs = 1, N(2))
            },
            sleep: function() {
                (m ? cancelAnimationFrame : clearTimeout)(f), Qs = 0, d = qs
            },
            lagSmoothing: function(L, V) {
                e = L || 1 / 0, t = Math.min(V || 33, e)
            },
            fps: function(L) {
                n = 1e3 / (L || 240), s = S.time * 1e3 + n
            },
            add: function(L, V, W) {
                var q = V ? function(X, z, $, J) {
                    L(X, z, $, J), S.remove(q)
                } : L;
                return S.remove(L), a[W ? "unshift" : "push"](q), ys(), q
            },
            remove: function(L, V) {
                ~(V = a.indexOf(L)) && a.splice(V, 1) && E >= V && E--
            },
            _listeners: a
        }, S
    }(),
    ys = function() {
        return !Qs && fr.wake()
    },
    ht = {},
    du = /^[\d.\-M][\d.\-,\s]/,
    pu = /["']/g,
    _u = function(e) {
        for (var t = {}, i = e.substr(1, e.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, f, d; n < s; n++) f = i[n], a = n !== s - 1 ? f.lastIndexOf(",") : f.length, d = f.substr(0, a), t[r] = isNaN(d) ? d.replace(pu, "").trim() : +d, r = f.substr(a + 1).trim();
        return t
    },
    gu = function(e) {
        var t = e.indexOf("(") + 1,
            i = e.indexOf(")"),
            r = e.indexOf("(", t);
        return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i)
    },
    mu = function(e) {
        var t = (e + "").split("("),
            i = ht[t[0]];
        return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [_u(t[1])] : gu(e).split(",").map(Qa)) : ht._CE && du.test(e) ? ht._CE("", e) : i
    },
    pl = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    },
    _l = function p(e, t) {
        for (var i = e._first, r; i;) i instanceof Ki ? p(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? p(i.timeline, t) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = t)), i = i._next
    },
    Vn = function(e, t) {
        return e && (li(e) ? e : ht[e] || mu(e)) || t
    },
    qn = function(e, t, i, r) {
        i === void 0 && (i = function(f) {
            return 1 - t(1 - f)
        }), r === void 0 && (r = function(f) {
            return f < .5 ? t(f * 2) / 2 : 1 - t((1 - f) * 2) / 2
        });
        var n = {
                easeIn: t,
                easeOut: i,
                easeInOut: r
            },
            s;
        return ir(e, function(a) {
            ht[a] = dr[a] = n, ht[s = a.toLowerCase()] = i;
            for (var f in n) ht[s + (f === "easeIn" ? ".in" : f === "easeOut" ? ".out" : ".inOut")] = ht[a + "." + f] = n[f]
        }), n
    },
    gl = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    },
    Ao = function p(e, t, i) {
        var r = t >= 1 ? t : 1,
            n = (i || (e ? .3 : .45)) / (t < 1 ? t : 1),
            s = n / Yo * (Math.asin(1 / r) || 0),
            a = function(m) {
                return m === 1 ? 1 : r * Math.pow(2, -10 * m) * Gl((m - s) * n) + 1
            },
            f = e === "out" ? a : e === "in" ? function(d) {
                return 1 - a(1 - d)
            } : gl(a);
        return n = Yo / n, f.config = function(d, m) {
            return p(e, d, m)
        }, f
    },
    Lo = function p(e, t) {
        t === void 0 && (t = 1.70158);
        var i = function(s) {
                return s ? --s * s * ((t + 1) * s + t) + 1 : 0
            },
            r = e === "out" ? i : e === "in" ? function(n) {
                return 1 - i(1 - n)
            } : gl(i);
        return r.config = function(n) {
            return p(e, n)
        }, r
    };
ir("Linear,Quad,Cubic,Quart,Quint,Strong", function(p, e) {
    var t = e < 5 ? e + 1 : e;
    qn(p + ",Power" + (t - 1), e ? function(i) {
        return Math.pow(i, t)
    } : function(i) {
        return i
    }, function(i) {
        return 1 - Math.pow(1 - i, t)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
    })
});
ht.Linear.easeNone = ht.none = ht.Linear.easeIn;
qn("Elastic", Ao("in"), Ao("out"), Ao());
(function(p, e) {
    var t = 1 / e,
        i = 2 * t,
        r = 2.5 * t,
        n = function(a) {
            return a < t ? p * a * a : a < i ? p * Math.pow(a - 1.5 / e, 2) + .75 : a < r ? p * (a -= 2.25 / e) * a + .9375 : p * Math.pow(a - 2.625 / e, 2) + .984375
        };
    qn("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
qn("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0
});
qn("Circ", function(p) {
    return -(Ba(1 - p * p) - 1)
});
qn("Sine", function(p) {
    return p === 1 ? 1 : -Vl(p * Hl) + 1
});
qn("Back", Lo("in"), Lo("out"), Lo());
ht.SteppedEase = ht.steps = dr.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
            r = e + (t ? 0 : 1),
            n = t ? 1 : 0,
            s = 1 - Yt;
        return function(a) {
            return ((r * eo(0, s, a) | 0) + n) * i
        }
    }
};
ms.ease = ht["quad.out"];
ir("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(p) {
    return ua += p + "," + p + "Params,"
});
var ml = function(e, t) {
        this.id = Wl++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : qa, this.set = t ? t.getSetter : pa
    },
    Zs = function() {
        function p(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, xs(this, +t.duration, 1, 1), this.data = t.data, jt && (this._ctx = jt, jt.data.push(this)), Qs || fr.wake()
        }
        var e = p.prototype;
        return e.delay = function(i) {
            return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay
        }, e.duration = function(i) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
        }, e.totalDuration = function(i) {
            return arguments.length ? (this._dirty = 0, xs(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(i, r) {
            if (ys(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Co(this, i), !n._dp || n.parent || Ja(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && Xr(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === Yt || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Ka(this, i, r)), this
        }, e.time = function(i, r) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Ta(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
        }, e.totalProgress = function(i, r) {
            return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
        }, e.progress = function(i, r) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Ta(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }, e.iteration = function(i, r) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? vs(this._tTime, n) + 1 : 1
        }, e.timeScale = function(i, r) {
            if (!arguments.length) return this._rts === -Yt ? 0 : this._rts;
            if (this._rts === i) return this;
            var n = this.parent && this._ts ? vo(this.parent._time, this) : this._tTime;
            return this._rts = +i || 0, this._ts = this._ps || i === -Yt ? 0 : this._rts, this.totalTime(eo(-Math.abs(this._delay), this._tDur, n), r !== !1), ko(this), jl(this)
        }, e.paused = function(i) {
            return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ys(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Yt && (this._tTime -= Yt)))), this) : this._ps
        }, e.startTime = function(i) {
            if (arguments.length) {
                this._start = i;
                var r = this.parent || this._dp;
                return r && (r._sort || !this.parent) && Xr(r, this, i - this._delay), this
            }
            return this._start
        }, e.endTime = function(i) {
            return this._start + (tr(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(i) {
            var r = this.parent || this._dp;
            return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? vo(r.rawTime(i), this) : this._tTime : this._tTime
        }, e.revert = function(i) {
            i === void 0 && (i = ql);
            var r = Xi;
            return Xi = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), Xi = r, this
        }, e.globalTime = function(i) {
            for (var r = this, n = arguments.length ? i : r.rawTime(); r;) n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
            return !this.parent && this._sat ? this._sat.globalTime(i) : n
        }, e.repeat = function(i) {
            return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Sa(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(i) {
            if (arguments.length) {
                var r = this._time;
                return this._rDelay = i, Sa(this), r ? this.time(r) : this
            }
            return this._rDelay
        }, e.yoyo = function(i) {
            return arguments.length ? (this._yoyo = i, this) : this._yoyo
        }, e.seek = function(i, r) {
            return this.totalTime(mr(this, i), tr(r))
        }, e.restart = function(i, r) {
            return this.play().totalTime(i ? -this._delay : 0, tr(r))
        }, e.play = function(i, r) {
            return i != null && this.seek(i, r), this.reversed(!1).paused(!1)
        }, e.reverse = function(i, r) {
            return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1)
        }, e.pause = function(i, r) {
            return i != null && this.seek(i, r), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(i) {
            return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -Yt : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -Yt, this
        }, e.isActive = function() {
            var i = this.parent || this._dp,
                r = this._start,
                n;
            return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - Yt)
        }, e.eventCallback = function(i, r, n) {
            var s = this.vars;
            return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i]
        }, e.then = function(i) {
            var r = this;
            return new Promise(function(n) {
                var s = li(i) ? i : Za,
                    a = function() {
                        var d = r.then;
                        r.then = null, li(s) && (s = s(r)) && (s.then || s === r) && (r.then = d), n(s), r.then = d
                    };
                r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
            })
        }, e.kill = function() {
            Hs(this)
        }, p
    }();
yr(Zs.prototype, {
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
    _zTime: -Yt,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Ki = function(p) {
    Ia(e, p);

    function e(i, r) {
        var n;
        return i === void 0 && (i = {}), n = p.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = tr(i.sortChildren), ti && Xr(i.parent || ti, nn(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && el(nn(n), i.scrollTrigger), n
    }
    var t = e.prototype;
    return t.to = function(r, n, s) {
        return Gs(0, arguments, this), this
    }, t.from = function(r, n, s) {
        return Gs(1, arguments, this), this
    }, t.fromTo = function(r, n, s, a) {
        return Gs(2, arguments, this), this
    }, t.set = function(r, n, s) {
        return n.duration = 0, n.parent = this, Vs(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new pi(r, n, mr(this, s), 1), this
    }, t.call = function(r, n, s) {
        return Xr(this, pi.delayedCall(0, r, n), s)
    }, t.staggerTo = function(r, n, s, a, f, d, m) {
        return s.duration = n, s.stagger = s.stagger || a, s.onComplete = d, s.onCompleteParams = m, s.parent = this, new pi(r, s, mr(this, f)), this
    }, t.staggerFrom = function(r, n, s, a, f, d, m) {
        return s.runBackwards = 1, Vs(s).immediateRender = tr(s.immediateRender), this.staggerTo(r, n, s, a, f, d, m)
    }, t.staggerFromTo = function(r, n, s, a, f, d, m, S) {
        return a.startAt = s, Vs(a).immediateRender = tr(a.immediateRender), this.staggerTo(r, n, a, f, d, m, S)
    }, t.render = function(r, n, s) {
        var a = this._time,
            f = this._dirty ? this.totalDuration() : this._tDur,
            d = this._dur,
            m = r <= 0 ? 0 : Ci(r),
            S = this._zTime < 0 != r < 0 && (this._initted || !d),
            P, E, N, b, L, V, W, q, X, z, $, J;
        if (this !== ti && m > f && r >= 0 && (m = f), m !== this._tTime || s || S) {
            if (a !== this._time && d && (m += this._time - a, r += this._time - a), P = m, X = this._start, q = this._ts, V = !q, S && (d || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
                if ($ = this._yoyo, L = d + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(L * 100 + r, n, s);
                if (P = Ci(m % L), m === f ? (b = this._repeat, P = d) : (b = ~~(m / L), b && b === m / L && (P = d, b--), P > d && (P = d)), z = vs(this._tTime, L), !a && this._tTime && z !== b && this._tTime - z * L - this._dur <= 0 && (z = b), $ && b & 1 && (P = d - P, J = 1), b !== z && !this._lock) {
                    var ne = $ && z & 1,
                        Q = ne === ($ && b & 1);
                    if (b < z && (ne = !ne), a = ne ? 0 : m % d ? d : m, this._lock = 1, this.render(a || (J ? 0 : Ci(b * L)), n, !d)._lock = 0, this._tTime = m, !n && this.parent && cr(this, "onRepeat"), this.vars.repeatRefresh && !J && (this.invalidate()._lock = 1), a && a !== this._time || V !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (d = this._dur, f = this._tDur, Q && (this._lock = 2, a = ne ? d : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !J && this.invalidate()), this._lock = 0, !this._ts && !V) return this;
                    _l(this, J)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (W = iu(this, Ci(a), Ci(P)), W && (m -= P - (P = W._start))), this._tTime = m, this._time = P, this._act = !q, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && P && !n && !b && (cr(this, "onStart"), this._tTime !== m)) return this;
            if (P >= a && r >= 0)
                for (E = this._first; E;) {
                    if (N = E._next, (E._act || P >= E._start) && E._ts && W !== E) {
                        if (E.parent !== this) return this.render(r, n, s);
                        if (E.render(E._ts > 0 ? (P - E._start) * E._ts : (E._dirty ? E.totalDuration() : E._tDur) + (P - E._start) * E._ts, n, s), P !== this._time || !this._ts && !V) {
                            W = 0, N && (m += this._zTime = -Yt);
                            break
                        }
                    }
                    E = N
                } else {
                    E = this._last;
                    for (var Le = r < 0 ? r : P; E;) {
                        if (N = E._prev, (E._act || Le <= E._end) && E._ts && W !== E) {
                            if (E.parent !== this) return this.render(r, n, s);
                            if (E.render(E._ts > 0 ? (Le - E._start) * E._ts : (E._dirty ? E.totalDuration() : E._tDur) + (Le - E._start) * E._ts, n, s || Xi && (E._initted || E._startAt)), P !== this._time || !this._ts && !V) {
                                W = 0, N && (m += this._zTime = Le ? -Yt : Yt);
                                break
                            }
                        }
                        E = N
                    }
                }
            if (W && !n && (this.pause(), W.render(P >= a ? 0 : -Yt)._zTime = P >= a ? 1 : -1, this._ts)) return this._start = X, ko(this), this.render(r, n, s);
            this._onUpdate && !n && cr(this, "onUpdate", !0), (m === f && this._tTime >= this.totalDuration() || !m && a) && (X === this._start || Math.abs(q) !== Math.abs(this._ts)) && (this._lock || ((r || !d) && (m === f && this._ts > 0 || !m && this._ts < 0) && bn(this, 1), !n && !(r < 0 && !a) && (m || a || !f) && (cr(this, m === f && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < f && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, t.add = function(r, n) {
        var s = this;
        if (on(n) || (n = mr(this, n, r)), !(r instanceof Zs)) {
            if (Hi(r)) return r.forEach(function(a) {
                return s.add(a, n)
            }), this;
            if (Mi(r)) return this.addLabel(r, n);
            if (li(r)) r = pi.delayedCall(0, r);
            else return this
        }
        return this !== r ? Xr(this, r, n) : this
    }, t.getChildren = function(r, n, s, a) {
        r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -vr);
        for (var f = [], d = this._first; d;) d._start >= a && (d instanceof pi ? n && f.push(d) : (s && f.push(d), r && f.push.apply(f, d.getChildren(!0, n, s)))), d = d._next;
        return f
    }, t.getById = function(r) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
            if (n[s].vars.id === r) return n[s]
    }, t.remove = function(r) {
        return Mi(r) ? this.removeLabel(r) : li(r) ? this.killTweensOf(r) : (So(this, r), r === this._recent && (this._recent = this._last), Wn(this))
    }, t.totalTime = function(r, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ci(fr.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), p.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function(r, n) {
        return this.labels[r] = mr(this, n), this
    }, t.removeLabel = function(r) {
        return delete this.labels[r], this
    }, t.addPause = function(r, n, s) {
        var a = pi.delayedCall(0, n || qs, s);
        return a.data = "isPause", this._hasPause = 1, Xr(this, a, mr(this, r))
    }, t.removePause = function(r) {
        var n = this._first;
        for (r = mr(this, r); n;) n._start === r && n.data === "isPause" && bn(n), n = n._next
    }, t.killTweensOf = function(r, n, s) {
        for (var a = this.getTweensOf(r, s), f = a.length; f--;) mn !== a[f] && a[f].kill(r, n);
        return this
    }, t.getTweensOf = function(r, n) {
        for (var s = [], a = xr(r), f = this._first, d = on(n), m; f;) f instanceof pi ? Kl(f._targets, a) && (d ? (!mn || f._initted && f._ts) && f.globalTime(0) <= n && f.globalTime(f.totalDuration()) > n : !n || f.isActive()) && s.push(f) : (m = f.getTweensOf(a, n)).length && s.push.apply(s, m), f = f._next;
        return s
    }, t.tweenTo = function(r, n) {
        n = n || {};
        var s = this,
            a = mr(s, r),
            f = n,
            d = f.startAt,
            m = f.onStart,
            S = f.onStartParams,
            P = f.immediateRender,
            E, N = pi.to(s, yr({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: n.duration || Math.abs((a - (d && "time" in d ? d.time : s._time)) / s.timeScale()) || Yt,
                onStart: function() {
                    if (s.pause(), !E) {
                        var L = n.duration || Math.abs((a - (d && "time" in d ? d.time : s._time)) / s.timeScale());
                        N._dur !== L && xs(N, L, 0, 1).render(N._time, !0, !0), E = 1
                    }
                    m && m.apply(N, S || [])
                }
            }, n));
        return P ? N.render(0) : N
    }, t.tweenFromTo = function(r, n, s) {
        return this.tweenTo(n, yr({
            startAt: {
                time: mr(this, r)
            }
        }, s))
    }, t.recent = function() {
        return this._recent
    }, t.nextLabel = function(r) {
        return r === void 0 && (r = this._time), ka(this, mr(this, r))
    }, t.previousLabel = function(r) {
        return r === void 0 && (r = this._time), ka(this, mr(this, r), 1)
    }, t.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + Yt)
    }, t.shiftChildren = function(r, n, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, f = this.labels, d; a;) a._start >= s && (a._start += r, a._end += r), a = a._next;
        if (n)
            for (d in f) f[d] >= s && (f[d] += r);
        return Wn(this)
    }, t.invalidate = function(r) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(r), n = n._next;
        return p.prototype.invalidate.call(this, r)
    }, t.clear = function(r) {
        r === void 0 && (r = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Wn(this)
    }, t.totalDuration = function(r) {
        var n = 0,
            s = this,
            a = s._last,
            f = vr,
            d, m, S;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
        if (s._dirty) {
            for (S = s.parent; a;) d = a._prev, a._dirty && a.totalDuration(), m = a._start, m > f && s._sort && a._ts && !s._lock ? (s._lock = 1, Xr(s, a, m - a._delay, 1)._lock = 0) : f = m, m < 0 && a._ts && (n -= m, (!S && !s._dp || S && S.smoothChildTiming) && (s._start += m / s._ts, s._time -= m, s._tTime -= m), s.shiftChildren(-m, !1, -1 / 0), f = 0), a._end > n && a._ts && (n = a._end), a = d;
            xs(s, s === ti && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, e.updateRoot = function(r) {
        if (ti._ts && (Ka(ti, vo(r, ti)), $a = fr.frame), fr.frame >= wa) {
            wa += hr.autoSleep || 120;
            var n = ti._first;
            if ((!n || !n._ts) && hr.autoSleep && fr._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || fr.sleep()
            }
        }
    }, e
}(Zs);
yr(Ki.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var vu = function(e, t, i, r, n, s, a) {
        var f = new rr(this._pt, e, t, 0, 1, Tl, null, n),
            d = 0,
            m = 0,
            S, P, E, N, b, L, V, W;
        for (f.b = i, f.e = r, i += "", r += "", (V = ~r.indexOf("random(")) && (r = Ks(r)), s && (W = [i, r], s(W, e, t), i = W[0], r = W[1]), P = i.match(Eo) || []; S = Eo.exec(r);) N = S[0], b = r.substring(d, S.index), E ? E = (E + 1) % 5 : b.substr(-5) === "rgba(" && (E = 1), N !== P[m++] && (L = parseFloat(P[m - 1]) || 0, f._pt = {
            _next: f._pt,
            p: b || m === 1 ? b : ",",
            s: L,
            c: N.charAt(1) === "=" ? ps(L, N) - L : parseFloat(N) - L,
            m: E && E < 4 ? Math.round : 0
        }, d = Eo.lastIndex);
        return f.c = d < r.length ? r.substring(d, r.length) : "", f.fp = a, (Ha.test(r) || V) && (f.e = 0), this._pt = f, f
    },
    ca = function(e, t, i, r, n, s, a, f, d, m) {
        li(r) && (r = r(n || 0, e, s));
        var S = e[t],
            P = i !== "get" ? i : li(S) ? d ? e[t.indexOf("set") || !li(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](d) : e[t]() : S,
            E = li(S) ? d ? Tu : wl : da,
            N;
        if (Mi(r) && (~r.indexOf("random(") && (r = Ks(r)), r.charAt(1) === "=" && (N = ps(P, r) + (Yi(P) || 0), (N || N === 0) && (r = N))), !m || P !== r || Ko) return !isNaN(P * r) && r !== "" ? (N = new rr(this._pt, e, t, +P || 0, r - (P || 0), typeof S == "boolean" ? ku : bl, 0, E), d && (N.fp = d), a && N.modifier(a, this, e), this._pt = N) : (!S && !(t in e) && aa(t, r), vu.call(this, e, t, P, r, E, f || hr.stringFilter, d))
    },
    xu = function(e, t, i, r, n) {
        if (li(e) && (e = Us(e, n, t, i, r)), !Vr(e) || e.style && e.nodeType || Hi(e) || Ya(e)) return Mi(e) ? Us(e, n, t, i, r) : e;
        var s = {},
            a;
        for (a in e) s[a] = Us(e[a], n, t, i, r);
        return s
    },
    vl = function(e, t, i, r, n, s) {
        var a, f, d, m;
        if (ur[e] && (a = new ur[e]).init(n, a.rawVars ? t[e] : xu(t[e], r, n, s, i), i, r, s) !== !1 && (i._pt = f = new rr(i._pt, n, e, 0, 1, a.render, a, 0, a.priority), i !== ds))
            for (d = i._ptLookup[i._targets.indexOf(n)], m = a._props.length; m--;) d[a._props[m]] = f;
        return a
    },
    mn, Ko, ha = function p(e, t, i) {
        var r = e.vars,
            n = r.ease,
            s = r.startAt,
            a = r.immediateRender,
            f = r.lazy,
            d = r.onUpdate,
            m = r.runBackwards,
            S = r.yoyoEase,
            P = r.keyframes,
            E = r.autoRevert,
            N = e._dur,
            b = e._startAt,
            L = e._targets,
            V = e.parent,
            W = V && V.data === "nested" ? V.vars.targets : L,
            q = e._overwrite === "auto" && !ra,
            X = e.timeline,
            z, $, J, ne, Q, Le, Je, Ce, Me, dt, ce, Te, We;
        if (X && (!P || !n) && (n = "none"), e._ease = Vn(n, ms.ease), e._yEase = S ? pl(Vn(S === !0 ? n : S, ms.ease)) : 0, S && e._yoyo && !e._repeat && (S = e._yEase, e._yEase = e._ease, e._ease = S), e._from = !X && !!r.runBackwards, !X || P && !r.stagger) {
            if (Ce = L[0] ? Hn(L[0]).harness : 0, Te = Ce && r[Ce.prop], z = mo(r, la), b && (b._zTime < 0 && b.progress(1), t < 0 && m && a && !E ? b.render(-1, !0) : b.revert(m && N ? co : $l), b._lazy = 0), s) {
                if (bn(e._startAt = pi.set(L, yr({
                        data: "isStart",
                        overwrite: !1,
                        parent: V,
                        immediateRender: !0,
                        lazy: !b && tr(f),
                        startAt: null,
                        delay: 0,
                        onUpdate: d && function() {
                            return cr(e, "onUpdate")
                        },
                        stagger: 0
                    }, s))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Xi || !a && !E) && e._startAt.revert(co), a && N && t <= 0 && i <= 0) {
                    t && (e._zTime = t);
                    return
                }
            } else if (m && N && !b) {
                if (t && (a = !1), J = yr({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: a && !b && tr(f),
                        immediateRender: a,
                        stagger: 0,
                        parent: V
                    }, z), Te && (J[Ce.prop] = Te), bn(e._startAt = pi.set(L, J)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Xi ? e._startAt.revert(co) : e._startAt.render(-1, !0)), e._zTime = t, !a) p(e._startAt, Yt, Yt);
                else if (!t) return
            }
            for (e._pt = e._ptCache = 0, f = N && tr(f) || f && !N, $ = 0; $ < L.length; $++) {
                if (Q = L[$], Je = Q._gsap || fa(L)[$]._gsap, e._ptLookup[$] = dt = {}, Wo[Je.id] && yn.length && go(), ce = W === L ? $ : W.indexOf(Q), Ce && (Me = new Ce).init(Q, Te || z, e, ce, W) !== !1 && (e._pt = ne = new rr(e._pt, Q, Me.name, 0, 1, Me.render, Me, 0, Me.priority), Me._props.forEach(function(Fe) {
                        dt[Fe] = ne
                    }), Me.priority && (Le = 1)), !Ce || Te)
                    for (J in z) ur[J] && (Me = vl(J, z, e, ce, Q, W)) ? Me.priority && (Le = 1) : dt[J] = ne = ca.call(e, Q, J, "get", z[J], ce, W, 0, r.stringFilter);
                e._op && e._op[$] && e.kill(Q, e._op[$]), q && e._pt && (mn = e, ti.killTweensOf(Q, dt, e.globalTime(t)), We = !e.parent, mn = 0), e._pt && f && (Wo[Je.id] = 1)
            }
            Le && Sl(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = d, e._initted = (!e._op || e._pt) && !We, P && t <= 0 && X.render(vr, !0, !0)
    },
    yu = function(e, t, i, r, n, s, a, f) {
        var d = (e._pt && e._ptCache || (e._ptCache = {}))[t],
            m, S, P, E;
        if (!d)
            for (d = e._ptCache[t] = [], P = e._ptLookup, E = e._targets.length; E--;) {
                if (m = P[E][t], m && m.d && m.d._pt)
                    for (m = m.d._pt; m && m.p !== t && m.fp !== t;) m = m._next;
                if (!m) return Ko = 1, e.vars[t] = "+=0", ha(e, a), Ko = 0, f ? $s(t + " not eligible for reset") : 1;
                d.push(m)
            }
        for (E = d.length; E--;) S = d[E], m = S._pt || S, m.s = (r || r === 0) && !n ? r : m.s + (r || 0) + s * m.c, m.c = i - m.s, S.e && (S.e = hi(i) + Yi(S.e)), S.b && (S.b = m.s + Yi(S.b))
    },
    wu = function(e, t) {
        var i = e[0] ? Hn(e[0]).harness : 0,
            r = i && i.aliases,
            n, s, a, f;
        if (!r) return t;
        n = Un({}, t);
        for (s in r)
            if (s in n)
                for (f = r[s].split(","), a = f.length; a--;) n[f[a]] = n[s];
        return n
    },
    bu = function(e, t, i, r) {
        var n = t.ease || r || "power1.inOut",
            s, a;
        if (Hi(t)) a = i[e] || (i[e] = []), t.forEach(function(f, d) {
            return a.push({
                t: d / (t.length - 1) * 100,
                v: f,
                e: n
            })
        });
        else
            for (s in t) a = i[s] || (i[s] = []), s === "ease" || a.push({
                t: parseFloat(e),
                v: t[s],
                e: n
            })
    },
    Us = function(e, t, i, r, n) {
        return li(e) ? e.call(t, i, r, n) : Mi(e) && ~e.indexOf("random(") ? Ks(e) : e
    },
    xl = ua + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    yl = {};
ir(xl + ",id,stagger,delay,duration,paused,scrollTrigger", function(p) {
    return yl[p] = 1
});
var pi = function(p) {
    Ia(e, p);

    function e(i, r, n, s) {
        var a;
        typeof r == "number" && (n.duration = r, r = n, n = null), a = p.call(this, s ? r : Vs(r)) || this;
        var f = a.vars,
            d = f.duration,
            m = f.delay,
            S = f.immediateRender,
            P = f.stagger,
            E = f.overwrite,
            N = f.keyframes,
            b = f.defaults,
            L = f.scrollTrigger,
            V = f.yoyoEase,
            W = r.parent || ti,
            q = (Hi(i) || Ya(i) ? on(i[0]) : "length" in r) ? [i] : xr(i),
            X, z, $, J, ne, Q, Le, Je;
        if (a._targets = q.length ? fa(q) : $s("GSAP target " + i + " not found. https://gsap.com", !hr.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = E, N || P || fo(d) || fo(m)) {
            if (r = a.vars, X = a.timeline = new Ki({
                    data: "nested",
                    defaults: b || {},
                    targets: W && W.data === "nested" ? W.vars.targets : q
                }), X.kill(), X.parent = X._dp = nn(a), X._start = 0, P || fo(d) || fo(m)) {
                if (J = q.length, Le = P && nl(P), Vr(P))
                    for (ne in P) ~xl.indexOf(ne) && (Je || (Je = {}), Je[ne] = P[ne]);
                for (z = 0; z < J; z++) $ = mo(r, yl), $.stagger = 0, V && ($.yoyoEase = V), Je && Un($, Je), Q = q[z], $.duration = +Us(d, nn(a), z, Q, q), $.delay = (+Us(m, nn(a), z, Q, q) || 0) - a._delay, !P && J === 1 && $.delay && (a._delay = m = $.delay, a._start += m, $.delay = 0), X.to(Q, $, Le ? Le(z, Q, q) : 0), X._ease = ht.none;
                X.duration() ? d = m = 0 : a.timeline = 0
            } else if (N) {
                Vs(yr(X.vars.defaults, {
                    ease: "none"
                })), X._ease = Vn(N.ease || r.ease || "none");
                var Ce = 0,
                    Me, dt, ce;
                if (Hi(N)) N.forEach(function(Te) {
                    return X.to(q, Te, ">")
                }), X.duration();
                else {
                    $ = {};
                    for (ne in N) ne === "ease" || ne === "easeEach" || bu(ne, N[ne], $, N.easeEach);
                    for (ne in $)
                        for (Me = $[ne].sort(function(Te, We) {
                                return Te.t - We.t
                            }), Ce = 0, z = 0; z < Me.length; z++) dt = Me[z], ce = {
                            ease: dt.e,
                            duration: (dt.t - (z ? Me[z - 1].t : 0)) / 100 * d
                        }, ce[ne] = dt.v, X.to(q, ce, Ce), Ce += ce.duration;
                    X.duration() < d && X.to({}, {
                        duration: d - X.duration()
                    })
                }
            }
            d || a.duration(d = X.duration())
        } else a.timeline = 0;
        return E === !0 && !ra && (mn = nn(a), ti.killTweensOf(q), mn = 0), Xr(W, nn(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (S || !d && !N && a._start === Ci(W._time) && tr(S) && Jl(nn(a)) && W.data !== "nested") && (a._tTime = -Yt, a.render(Math.max(0, -m) || 0)), L && el(nn(a), L), a
    }
    var t = e.prototype;
    return t.render = function(r, n, s) {
        var a = this._time,
            f = this._tDur,
            d = this._dur,
            m = r < 0,
            S = r > f - Yt && !m ? f : r < Yt ? 0 : r,
            P, E, N, b, L, V, W, q, X;
        if (!d) tu(this, r, n, s);
        else if (S !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
            if (P = S, q = this.timeline, this._repeat) {
                if (b = d + this._rDelay, this._repeat < -1 && m) return this.totalTime(b * 100 + r, n, s);
                if (P = Ci(S % b), S === f ? (N = this._repeat, P = d) : (N = ~~(S / b), N && N === Ci(S / b) && (P = d, N--), P > d && (P = d)), V = this._yoyo && N & 1, V && (X = this._yEase, P = d - P), L = vs(this._tTime, b), P === a && !s && this._initted && N === L) return this._tTime = S, this;
                N !== L && (q && this._yEase && _l(q, V), this.vars.repeatRefresh && !V && !this._lock && this._time !== b && this._initted && (this._lock = s = 1, this.render(Ci(b * N), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (tl(this, m ? r : P, s, n, S)) return this._tTime = 0, this;
                if (a !== this._time && !(s && this.vars.repeatRefresh && N !== L)) return this;
                if (d !== this._dur) return this.render(r, n, s)
            }
            if (this._tTime = S, this._time = P, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = W = (X || this._ease)(P / d), this._from && (this.ratio = W = 1 - W), P && !a && !n && !N && (cr(this, "onStart"), this._tTime !== S)) return this;
            for (E = this._pt; E;) E.r(W, E.d), E = E._next;
            q && q.render(r < 0 ? r : q._dur * q._ease(P / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (m && Vo(this, r, n, s), cr(this, "onUpdate")), this._repeat && N !== L && this.vars.onRepeat && !n && this.parent && cr(this, "onRepeat"), (S === this._tDur || !S) && this._tTime === S && (m && !this._onUpdate && Vo(this, r, !0, !0), (r || !d) && (S === this._tDur && this._ts > 0 || !S && this._ts < 0) && bn(this, 1), !n && !(m && !a) && (S || a || V) && (cr(this, S === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(S < f && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, t.targets = function() {
        return this._targets
    }, t.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), p.prototype.invalidate.call(this, r)
    }, t.resetTo = function(r, n, s, a, f) {
        Qs || fr.wake(), this._ts || this.play();
        var d = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            m;
        return this._initted || ha(this, d), m = this._ease(d / this._dur), yu(this, r, n, s, a, m, d, f) ? this.resetTo(r, n, s, a, 1) : (Co(this, 0), this.parent || ja(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, t.kill = function(r, n) {
        if (n === void 0 && (n = "all"), !r && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? Hs(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, n, mn && mn.vars.overwrite !== !0)._first || Hs(this), this.parent && s !== this.timeline.totalDuration() && xs(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var a = this._targets,
            f = r ? xr(r) : a,
            d = this._ptLookup,
            m = this._pt,
            S, P, E, N, b, L, V;
        if ((!n || n === "all") && Zl(a, f)) return n === "all" && (this._pt = 0), Hs(this);
        for (S = this._op = this._op || [], n !== "all" && (Mi(n) && (b = {}, ir(n, function(W) {
                return b[W] = 1
            }), n = b), n = wu(a, n)), V = a.length; V--;)
            if (~f.indexOf(a[V])) {
                P = d[V], n === "all" ? (S[V] = n, N = P, E = {}) : (E = S[V] = S[V] || {}, N = n);
                for (b in N) L = P && P[b], L && ((!("kill" in L.d) || L.d.kill(b) === !0) && So(this, L, "_pt"), delete P[b]), E !== "all" && (E[b] = 1)
            }
        return this._initted && !this._pt && m && Hs(this), this
    }, e.to = function(r, n) {
        return new e(r, n, arguments[2])
    }, e.from = function(r, n) {
        return Gs(1, arguments)
    }, e.delayedCall = function(r, n, s, a) {
        return new e(n, 0, {
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
    }, e.fromTo = function(r, n, s) {
        return Gs(2, arguments)
    }, e.set = function(r, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(r, n)
    }, e.killTweensOf = function(r, n, s) {
        return ti.killTweensOf(r, n, s)
    }, e
}(Zs);
yr(pi.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
ir("staggerTo,staggerFrom,staggerFromTo", function(p) {
    pi[p] = function() {
        var e = new Ki,
            t = Uo.call(arguments, 0);
        return t.splice(p === "staggerFromTo" ? 5 : 4, 0, 0), e[p].apply(e, t)
    }
});
var da = function(e, t, i) {
        return e[t] = i
    },
    wl = function(e, t, i) {
        return e[t](i)
    },
    Tu = function(e, t, i, r) {
        return e[t](r.fp, i)
    },
    Su = function(e, t, i) {
        return e.setAttribute(t, i)
    },
    pa = function(e, t) {
        return li(e[t]) ? wl : na(e[t]) && e.setAttribute ? Su : da
    },
    bl = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    },
    ku = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    },
    Tl = function(e, t) {
        var i = t._pt,
            r = "";
        if (!e && t.b) r = t.b;
        else if (e === 1 && t.e) r = t.e;
        else {
            for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + r, i = i._next;
            r += t.c
        }
        t.set(t.t, t.p, r, t)
    },
    _a = function(e, t) {
        for (var i = t._pt; i;) i.r(e, i.d), i = i._next
    },
    Cu = function(e, t, i, r) {
        for (var n = this._pt, s; n;) s = n._next, n.p === r && n.modifier(e, t, i), n = s
    },
    Mu = function(e) {
        for (var t = this._pt, i, r; t;) r = t._next, t.p === e && !t.op || t.op === e ? So(this, t, "_pt") : t.dep || (i = 1), t = r;
        return !i
    },
    Pu = function(e, t, i, r) {
        r.mSet(e, t, r.m.call(r.tween, i, r.mt), r)
    },
    Sl = function(e) {
        for (var t = e._pt, i, r, n, s; t;) {
            for (i = t._next, r = n; r && r.pr > t.pr;) r = r._next;
            (t._prev = r ? r._prev : s) ? t._prev._next = t: n = t, (t._next = r) ? r._prev = t : s = t, t = i
        }
        e._pt = n
    },
    rr = function() {
        function p(t, i, r, n, s, a, f, d, m) {
            this.t = i, this.s = n, this.c = s, this.p = r, this.r = a || bl, this.d = f || this, this.set = d || da, this.pr = m || 0, this._next = t, t && (t._prev = this)
        }
        var e = p.prototype;
        return e.modifier = function(i, r, n) {
            this.mSet = this.mSet || this.set, this.set = Pu, this.m = i, this.mt = n, this.tween = r
        }, p
    }();
ir(ua + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(p) {
    return la[p] = 1
});
dr.TweenMax = dr.TweenLite = pi;
dr.TimelineLite = dr.TimelineMax = Ki;
ti = new Ki({
    sortChildren: !1,
    defaults: ms,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
hr.stringFilter = dl;
var Gn = [],
    po = {},
    Du = [],
    Ma = 0,
    Eu = 0,
    zo = function(e) {
        return (po[e] || Du).map(function(t) {
            return t()
        })
    },
    Qo = function() {
        var e = Date.now(),
            t = [];
        e - Ma > 2 && (zo("matchMediaInit"), Gn.forEach(function(i) {
            var r = i.queries,
                n = i.conditions,
                s, a, f, d;
            for (a in r) s = Yr.matchMedia(r[a]).matches, s && (f = 1), s !== n[a] && (n[a] = s, d = 1);
            d && (i.revert(), f && t.push(i))
        }), zo("matchMediaRevert"), t.forEach(function(i) {
            return i.onMatch(i, function(r) {
                return i.add(null, r)
            })
        }), Ma = e, zo("matchMedia"))
    },
    kl = function() {
        function p(t, i) {
            this.selector = i && $o(i), this.data = [], this._r = [], this.isReverted = !1, this.id = Eu++, t && this.add(t)
        }
        var e = p.prototype;
        return e.add = function(i, r, n) {
            li(i) && (n = r, r = i, i = li);
            var s = this,
                a = function() {
                    var d = jt,
                        m = s.selector,
                        S;
                    return d && d !== s && d.data.push(s), n && (s.selector = $o(n)), jt = s, S = r.apply(s, arguments), li(S) && s._r.push(S), jt = d, s.selector = m, s.isReverted = !1, S
                };
            return s.last = a, i === li ? a(s, function(f) {
                return s.add(null, f)
            }) : i ? s[i] = a : a
        }, e.ignore = function(i) {
            var r = jt;
            jt = null, i(this), jt = r
        }, e.getTweens = function() {
            var i = [];
            return this.data.forEach(function(r) {
                return r instanceof p ? i.push.apply(i, r.getTweens()) : r instanceof pi && !(r.parent && r.parent.data === "nested") && i.push(r)
            }), i
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(i, r) {
            var n = this;
            if (i ? function() {
                    for (var a = n.getTweens(), f = n.data.length, d; f--;) d = n.data[f], d.data === "isFlip" && (d.revert(), d.getChildren(!0, !0, !1).forEach(function(m) {
                        return a.splice(a.indexOf(m), 1)
                    }));
                    for (a.map(function(m) {
                            return {
                                g: m._dur || m._delay || m._sat && !m._sat.vars.immediateRender ? m.globalTime(0) : -1 / 0,
                                t: m
                            }
                        }).sort(function(m, S) {
                            return S.g - m.g || -1 / 0
                        }).forEach(function(m) {
                            return m.t.revert(i)
                        }), f = n.data.length; f--;) d = n.data[f], d instanceof Ki ? d.data !== "nested" && (d.scrollTrigger && d.scrollTrigger.revert(), d.kill()) : !(d instanceof pi) && d.revert && d.revert(i);
                    n._r.forEach(function(m) {
                        return m(i, n)
                    }), n.isReverted = !0
                }() : this.data.forEach(function(a) {
                    return a.kill && a.kill()
                }), this.clear(), r)
                for (var s = Gn.length; s--;) Gn[s].id === this.id && Gn.splice(s, 1)
        }, e.revert = function(i) {
            this.kill(i || {})
        }, p
    }(),
    Ou = function() {
        function p(t) {
            this.contexts = [], this.scope = t, jt && jt.data.push(this)
        }
        var e = p.prototype;
        return e.add = function(i, r, n) {
            Vr(i) || (i = {
                matches: i
            });
            var s = new kl(0, n || this.scope),
                a = s.conditions = {},
                f, d, m;
            jt && !s.selector && (s.selector = jt.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
            for (d in i) d === "all" ? m = 1 : (f = Yr.matchMedia(i[d]), f && (Gn.indexOf(s) < 0 && Gn.push(s), (a[d] = f.matches) && (m = 1), f.addListener ? f.addListener(Qo) : f.addEventListener("change", Qo)));
            return m && r(s, function(S) {
                return s.add(null, S)
            }), this
        }, e.revert = function(i) {
            this.kill(i || {})
        }, e.kill = function(i) {
            this.contexts.forEach(function(r) {
                return r.kill(i, !0)
            })
        }, p
    }(),
    xo = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            t.forEach(function(r) {
                return fl(r)
            })
        },
        timeline: function(e) {
            return new Ki(e)
        },
        getTweensOf: function(e, t) {
            return ti.getTweensOf(e, t)
        },
        getProperty: function(e, t, i, r) {
            Mi(e) && (e = xr(e)[0]);
            var n = Hn(e || {}).get,
                s = i ? Za : Qa;
            return i === "native" && (i = ""), e && (t ? s((ur[t] && ur[t].get || n)(e, t, i, r)) : function(a, f, d) {
                return s((ur[a] && ur[a].get || n)(e, a, f, d))
            })
        },
        quickSetter: function(e, t, i) {
            if (e = xr(e), e.length > 1) {
                var r = e.map(function(m) {
                        return sr.quickSetter(m, t, i)
                    }),
                    n = r.length;
                return function(m) {
                    for (var S = n; S--;) r[S](m)
                }
            }
            e = e[0] || {};
            var s = ur[t],
                a = Hn(e),
                f = a.harness && (a.harness.aliases || {})[t] || t,
                d = s ? function(m) {
                    var S = new s;
                    ds._pt = 0, S.init(e, i ? m + i : m, ds, 0, [e]), S.render(1, S), ds._pt && _a(1, ds)
                } : a.set(e, f);
            return s ? d : function(m) {
                return d(e, f, i ? m + i : m, a, 1)
            }
        },
        quickTo: function(e, t, i) {
            var r, n = sr.to(e, Un((r = {}, r[t] = "+=0.1", r.paused = !0, r), i || {})),
                s = function(f, d, m) {
                    return n.resetTo(t, f, d, m)
                };
            return s.tween = n, s
        },
        isTweening: function(e) {
            return ti.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Vn(e.ease, ms.ease)), ba(ms, e || {})
        },
        config: function(e) {
            return ba(hr, e || {})
        },
        registerEffect: function(e) {
            var t = e.name,
                i = e.effect,
                r = e.plugins,
                n = e.defaults,
                s = e.extendTimeline;
            (r || "").split(",").forEach(function(a) {
                return a && !ur[a] && !dr[a] && $s(t + " effect requires " + a + " plugin.")
            }), Oo[t] = function(a, f, d) {
                return i(xr(a), yr(f || {}, n), d)
            }, s && (Ki.prototype[t] = function(a, f, d) {
                return this.add(Oo[t](a, Vr(f) ? f : (d = f) && {}, this), d)
            })
        },
        registerEase: function(e, t) {
            ht[e] = Vn(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? Vn(e, t) : ht
        },
        getById: function(e) {
            return ti.getById(e)
        },
        exportRoot: function(e, t) {
            e === void 0 && (e = {});
            var i = new Ki(e),
                r, n;
            for (i.smoothChildTiming = tr(e.smoothChildTiming), ti.remove(i), i._dp = 0, i._time = i._tTime = ti._time, r = ti._first; r;) n = r._next, (t || !(!r._dur && r instanceof pi && r.vars.onComplete === r._targets[0])) && Xr(i, r, r._start - r._delay), r = n;
            return Xr(ti, i, 0), i
        },
        context: function(e, t) {
            return e ? new kl(e, t) : jt
        },
        matchMedia: function(e) {
            return new Ou(e)
        },
        matchMediaRefresh: function() {
            return Gn.forEach(function(e) {
                var t = e.conditions,
                    i, r;
                for (r in t) t[r] && (t[r] = !1, i = 1);
                i && e.revert()
            }) || Qo()
        },
        addEventListener: function(e, t) {
            var i = po[e] || (po[e] = []);
            ~i.indexOf(t) || i.push(t)
        },
        removeEventListener: function(e, t) {
            var i = po[e],
                r = i && i.indexOf(t);
            r >= 0 && i.splice(r, 1)
        },
        utils: {
            wrap: uu,
            wrapYoyo: fu,
            distribute: nl,
            random: ol,
            snap: sl,
            normalize: lu,
            getUnit: Yi,
            clamp: nu,
            splitColor: cl,
            toArray: xr,
            selector: $o,
            mapRange: ll,
            pipe: ou,
            unitize: au,
            interpolate: cu,
            shuffle: rl
        },
        install: Ga,
        effects: Oo,
        ticker: fr,
        updateRoot: Ki.updateRoot,
        plugins: ur,
        globalTimeline: ti,
        core: {
            PropTween: rr,
            globals: Ua,
            Tween: pi,
            Timeline: Ki,
            Animation: Zs,
            getCache: Hn,
            _removeLinkedListItem: So,
            reverting: function() {
                return Xi
            },
            context: function(e) {
                return e && jt && (jt.data.push(e), e._ctx = jt), jt
            },
            suppressOverwrites: function(e) {
                return ra = e
            }
        }
    };
ir("to,from,fromTo,delayedCall,set,killTweensOf", function(p) {
    return xo[p] = pi[p]
});
fr.add(Ki.updateRoot);
ds = xo.to({}, {
    duration: 0
});
var Ru = function(e, t) {
        for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t;) i = i._next;
        return i
    },
    Au = function(e, t) {
        var i = e._targets,
            r, n, s;
        for (r in t)
            for (n = i.length; n--;) s = e._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Ru(s, r)), s && s.modifier && s.modifier(t[r], e, i[n], r))
    },
    No = function(e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function(r, n, s) {
                s._onInit = function(a) {
                    var f, d;
                    if (Mi(n) && (f = {}, ir(n, function(m) {
                            return f[m] = 1
                        }), n = f), t) {
                        f = {};
                        for (d in n) f[d] = t(n[d]);
                        n = f
                    }
                    Au(a, n)
                }
            }
        }
    },
    sr = xo.registerPlugin({
        name: "attr",
        init: function(e, t, i, r, n) {
            var s, a, f;
            this.tween = i;
            for (s in t) f = e.getAttribute(s) || "", a = this.add(e, "setAttribute", (f || 0) + "", t[s], r, n, 0, 0, s), a.op = s, a.b = f, this._props.push(s)
        },
        render: function(e, t) {
            for (var i = t._pt; i;) Xi ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), i = i._next
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var i = t.length; i--;) this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
        }
    }, No("roundProps", qo), No("modifiers"), No("snap", sl)) || xo;
pi.version = Ki.version = sr.version = "3.12.5";
Va = 1;
sa() && ys();
ht.Power0;
ht.Power1;
ht.Power2;
ht.Power3;
ht.Power4;
ht.Linear;
ht.Quad;
ht.Cubic;
ht.Quart;
ht.Quint;
ht.Strong;
ht.Elastic;
ht.Back;
ht.SteppedEase;
ht.Bounce;
ht.Sine;
ht.Expo;
ht.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Pa, vn, _s, ga, Xn, Da, ma, Lu = function() {
        return typeof window < "u"
    },
    an = {},
    Yn = 180 / Math.PI,
    gs = Math.PI / 180,
    cs = Math.atan2,
    Ea = 1e8,
    va = /([A-Z])/g,
    zu = /(left|right|width|margin|padding|x)/i,
    Nu = /[\s,\(]\S/,
    Hr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    Zo = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    Fu = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    Iu = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    Bu = function(e, t) {
        var i = t.s + t.c * e;
        t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
    },
    Cl = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    },
    Ml = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    },
    Yu = function(e, t, i) {
        return e.style[t] = i
    },
    Xu = function(e, t, i) {
        return e.style.setProperty(t, i)
    },
    Hu = function(e, t, i) {
        return e._gsap[t] = i
    },
    Wu = function(e, t, i) {
        return e._gsap.scaleX = e._gsap.scaleY = i
    },
    Vu = function(e, t, i, r, n) {
        var s = e._gsap;
        s.scaleX = s.scaleY = i, s.renderTransform(n, s)
    },
    Gu = function(e, t, i, r, n) {
        var s = e._gsap;
        s[t] = i, s.renderTransform(n, s)
    },
    ii = "transform",
    nr = ii + "Origin",
    Uu = function p(e, t) {
        var i = this,
            r = this.target,
            n = r.style,
            s = r._gsap;
        if (e in an && n) {
            if (this.tfm = this.tfm || {}, e !== "transform") e = Hr[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
                return i.tfm[a] = sn(r, a)
            }) : this.tfm[e] = s.x ? s[e] : sn(r, e), e === nr && (this.tfm.zOrigin = s.zOrigin);
            else return Hr.transform.split(",").forEach(function(a) {
                return p.call(i, a, t)
            });
            if (this.props.indexOf(ii) >= 0) return;
            s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(nr, t, "")), e = ii
        }(n || t) && this.props.push(e, t, n[e])
    },
    Pl = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    $u = function() {
        var e = this.props,
            t = this.target,
            i = t.style,
            r = t._gsap,
            n, s;
        for (n = 0; n < e.length; n += 3) e[n + 1] ? t[e[n]] = e[n + 2] : e[n + 2] ? i[e[n]] = e[n + 2] : i.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(va, "-$1").toLowerCase());
        if (this.tfm) {
            for (s in this.tfm) r[s] = this.tfm[s];
            r.svg && (r.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = ma(), (!n || !n.isStart) && !i[ii] && (Pl(i), r.zOrigin && i[nr] && (i[nr] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1)
        }
    },
    Dl = function(e, t) {
        var i = {
            target: e,
            props: [],
            revert: $u,
            save: Uu
        };
        return e._gsap || sr.core.getCache(e), t && t.split(",").forEach(function(r) {
            return i.save(r)
        }), i
    },
    El, jo = function(e, t) {
        var i = vn.createElementNS ? vn.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : vn.createElement(e);
        return i && i.style ? i : vn.createElement(e)
    },
    Wr = function p(e, t, i) {
        var r = getComputedStyle(e);
        return r[t] || r.getPropertyValue(t.replace(va, "-$1").toLowerCase()) || r.getPropertyValue(t) || !i && p(e, ws(t) || t, 1) || ""
    },
    Oa = "O,Moz,ms,Ms,Webkit".split(","),
    ws = function(e, t, i) {
        var r = t || Xn,
            n = r.style,
            s = 5;
        if (e in n && !i) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Oa[s] + e in n););
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Oa[s] : "") + e
    },
    Jo = function() {
        Lu() && window.document && (Pa = window, vn = Pa.document, _s = vn.documentElement, Xn = jo("div") || {
            style: {}
        }, jo("div"), ii = ws(ii), nr = ii + "Origin", Xn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", El = !!ws("perspective"), ma = sr.core.reverting, ga = 1)
    },
    Fo = function p(e) {
        var t = jo("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            r = this.nextSibling,
            n = this.style.cssText,
            s;
        if (_s.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
            s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = p
        } catch {} else this._gsapBBox && (s = this._gsapBBox());
        return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), _s.removeChild(t), this.style.cssText = n, s
    },
    Ra = function(e, t) {
        for (var i = t.length; i--;)
            if (e.hasAttribute(t[i])) return e.getAttribute(t[i])
    },
    Ol = function(e) {
        var t;
        try {
            t = e.getBBox()
        } catch {
            t = Fo.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === Fo || (t = Fo.call(e, !0)), t && !t.width && !t.x && !t.y ? {
            x: +Ra(e, ["x", "cx", "x1"]) || 0,
            y: +Ra(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    },
    Rl = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ol(e))
    },
    $n = function(e, t) {
        if (t) {
            var i = e.style,
                r;
            t in an && t !== nr && (t = ii), i.removeProperty ? (r = t.substr(0, 2), (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), i.removeProperty(r === "--" ? t : t.replace(va, "-$1").toLowerCase())) : i.removeAttribute(t)
        }
    },
    xn = function(e, t, i, r, n, s) {
        var a = new rr(e._pt, t, i, 0, 1, s ? Ml : Cl);
        return e._pt = a, a.b = r, a.e = n, e._props.push(i), a
    },
    Aa = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    qu = {
        grid: 1,
        flex: 1
    },
    Tn = function p(e, t, i, r) {
        var n = parseFloat(i) || 0,
            s = (i + "").trim().substr((n + "").length) || "px",
            a = Xn.style,
            f = zu.test(t),
            d = e.tagName.toLowerCase() === "svg",
            m = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            S = 100,
            P = r === "px",
            E = r === "%",
            N, b, L, V;
        if (r === s || !n || Aa[r] || Aa[s]) return n;
        if (s !== "px" && !P && (n = p(e, t, i, "px")), V = e.getCTM && Rl(e), (E || s === "%") && (an[t] || ~t.indexOf("adius"))) return N = V ? e.getBBox()[f ? "width" : "height"] : e[m], hi(E ? n / N * S : n / 100 * N);
        if (a[f ? "width" : "height"] = S + (P ? s : r), b = ~t.indexOf("adius") || r === "em" && e.appendChild && !d ? e : e.parentNode, V && (b = (e.ownerSVGElement || {}).parentNode), (!b || b === vn || !b.appendChild) && (b = vn.body), L = b._gsap, L && E && L.width && f && L.time === fr.time && !L.uncache) return hi(n / L.width * S);
        if (E && (t === "height" || t === "width")) {
            var W = e.style[t];
            e.style[t] = S + r, N = e[m], W ? e.style[t] = W : $n(e, t)
        } else(E || s === "%") && !qu[Wr(b, "display")] && (a.position = Wr(e, "position")), b === e && (a.position = "static"), b.appendChild(Xn), N = Xn[m], b.removeChild(Xn), a.position = "absolute";
        return f && E && (L = Hn(b), L.time = fr.time, L.width = b[m]), hi(P ? N * n / S : N && n ? S / N * n : 0)
    },
    sn = function(e, t, i, r) {
        var n;
        return ga || Jo(), t in Hr && t !== "transform" && (t = Hr[t], ~t.indexOf(",") && (t = t.split(",")[0])), an[t] && t !== "transform" ? (n = Js(e, r), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : wo(Wr(e, nr)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = yo[t] && yo[t](e, t, i) || Wr(e, t) || qa(e, t) || (t === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Tn(e, t, n, i) + i : n
    },
    Ku = function(e, t, i, r) {
        if (!i || i === "none") {
            var n = ws(t, e, 1),
                s = n && Wr(e, n, 1);
            s && s !== i ? (t = n, i = s) : t === "borderColor" && (i = Wr(e, "borderTopColor"))
        }
        var a = new rr(this._pt, e.style, t, 0, 1, Tl),
            f = 0,
            d = 0,
            m, S, P, E, N, b, L, V, W, q, X, z;
        if (a.b = i, a.e = r, i += "", r += "", r === "auto" && (b = e.style[t], e.style[t] = r, r = Wr(e, t) || r, b ? e.style[t] = b : $n(e, t)), m = [i, r], dl(m), i = m[0], r = m[1], P = i.match(hs) || [], z = r.match(hs) || [], z.length) {
            for (; S = hs.exec(r);) L = S[0], W = r.substring(f, S.index), N ? N = (N + 1) % 5 : (W.substr(-5) === "rgba(" || W.substr(-5) === "hsla(") && (N = 1), L !== (b = P[d++] || "") && (E = parseFloat(b) || 0, X = b.substr((E + "").length), L.charAt(1) === "=" && (L = ps(E, L) + X), V = parseFloat(L), q = L.substr((V + "").length), f = hs.lastIndex - q.length, q || (q = q || hr.units[t] || X, f === r.length && (r += q, a.e += q)), X !== q && (E = Tn(e, t, b, q) || 0), a._pt = {
                _next: a._pt,
                p: W || d === 1 ? W : ",",
                s: E,
                c: V - E,
                m: N && N < 4 || t === "zIndex" ? Math.round : 0
            });
            a.c = f < r.length ? r.substring(f, r.length) : ""
        } else a.r = t === "display" && r === "none" ? Ml : Cl;
        return Ha.test(r) && (a.e = 0), this._pt = a, a
    },
    La = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Qu = function(e) {
        var t = e.split(" "),
            i = t[0],
            r = t[1] || "50%";
        return (i === "top" || i === "bottom" || r === "left" || r === "right") && (e = i, i = r, r = e), t[0] = La[i] || i, t[1] = La[r] || r, t.join(" ")
    },
    Zu = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var i = t.t,
                r = i.style,
                n = t.u,
                s = i._gsap,
                a, f, d;
            if (n === "all" || n === !0) r.cssText = "", f = 1;
            else
                for (n = n.split(","), d = n.length; --d > -1;) a = n[d], an[a] && (f = 1, a = a === "transformOrigin" ? nr : ii), $n(i, a);
            f && ($n(i, ii), s && (s.svg && i.removeAttribute("transform"), Js(i, 1), s.uncache = 1, Pl(r)))
        }
    },
    yo = {
        clearProps: function(e, t, i, r, n) {
            if (n.data !== "isFromStart") {
                var s = e._pt = new rr(e._pt, t, i, 0, 0, Zu);
                return s.u = r, s.pr = -10, s.tween = n, e._props.push(i), 1
            }
        }
    },
    js = [1, 0, 0, 1, 0, 0],
    Al = {},
    Ll = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    za = function(e) {
        var t = Wr(e, ii);
        return Ll(t) ? js : t.substr(7).match(Xa).map(hi)
    },
    xa = function(e, t) {
        var i = e._gsap || Hn(e),
            r = e.style,
            n = za(e),
            s, a, f, d;
        return i.svg && e.getAttribute("transform") ? (f = e.transform.baseVal.consolidate().matrix, n = [f.a, f.b, f.c, f.d, f.e, f.f], n.join(",") === "1,0,0,1,0,0" ? js : n) : (n === js && !e.offsetParent && e !== _s && !i.svg && (f = r.display, r.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (d = 1, a = e.nextElementSibling, _s.appendChild(e)), n = za(e), f ? r.display = f : $n(e, "display"), d && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : _s.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    ea = function(e, t, i, r, n, s) {
        var a = e._gsap,
            f = n || xa(e, !0),
            d = a.xOrigin || 0,
            m = a.yOrigin || 0,
            S = a.xOffset || 0,
            P = a.yOffset || 0,
            E = f[0],
            N = f[1],
            b = f[2],
            L = f[3],
            V = f[4],
            W = f[5],
            q = t.split(" "),
            X = parseFloat(q[0]) || 0,
            z = parseFloat(q[1]) || 0,
            $, J, ne, Q;
        i ? f !== js && (J = E * L - N * b) && (ne = X * (L / J) + z * (-b / J) + (b * W - L * V) / J, Q = X * (-N / J) + z * (E / J) - (E * W - N * V) / J, X = ne, z = Q) : ($ = Ol(e), X = $.x + (~q[0].indexOf("%") ? X / 100 * $.width : X), z = $.y + (~(q[1] || q[0]).indexOf("%") ? z / 100 * $.height : z)), r || r !== !1 && a.smooth ? (V = X - d, W = z - m, a.xOffset = S + (V * E + W * b) - V, a.yOffset = P + (V * N + W * L) - W) : a.xOffset = a.yOffset = 0, a.xOrigin = X, a.yOrigin = z, a.smooth = !!r, a.origin = t, a.originIsAbsolute = !!i, e.style[nr] = "0px 0px", s && (xn(s, a, "xOrigin", d, X), xn(s, a, "yOrigin", m, z), xn(s, a, "xOffset", S, a.xOffset), xn(s, a, "yOffset", P, a.yOffset)), e.setAttribute("data-svg-origin", X + " " + z)
    },
    Js = function(e, t) {
        var i = e._gsap || new ml(e);
        if ("x" in i && !t && !i.uncache) return i;
        var r = e.style,
            n = i.scaleX < 0,
            s = "px",
            a = "deg",
            f = getComputedStyle(e),
            d = Wr(e, nr) || "0",
            m, S, P, E, N, b, L, V, W, q, X, z, $, J, ne, Q, Le, Je, Ce, Me, dt, ce, Te, We, Fe, Ke, bt, Gt, Wi, Qi, ui, or;
        return m = S = P = b = L = V = W = q = X = 0, E = N = 1, i.svg = !!(e.getCTM && Rl(e)), f.translate && ((f.translate !== "none" || f.scale !== "none" || f.rotate !== "none") && (r[ii] = (f.translate !== "none" ? "translate3d(" + (f.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (f.rotate !== "none" ? "rotate(" + f.rotate + ") " : "") + (f.scale !== "none" ? "scale(" + f.scale.split(" ").join(",") + ") " : "") + (f[ii] !== "none" ? f[ii] : "")), r.scale = r.rotate = r.translate = "none"), J = xa(e, i.svg), i.svg && (i.uncache ? (Fe = e.getBBox(), d = i.xOrigin - Fe.x + "px " + (i.yOrigin - Fe.y) + "px", We = "") : We = !t && e.getAttribute("data-svg-origin"), ea(e, We || d, !!We || i.originIsAbsolute, i.smooth !== !1, J)), z = i.xOrigin || 0, $ = i.yOrigin || 0, J !== js && (Je = J[0], Ce = J[1], Me = J[2], dt = J[3], m = ce = J[4], S = Te = J[5], J.length === 6 ? (E = Math.sqrt(Je * Je + Ce * Ce), N = Math.sqrt(dt * dt + Me * Me), b = Je || Ce ? cs(Ce, Je) * Yn : 0, W = Me || dt ? cs(Me, dt) * Yn + b : 0, W && (N *= Math.abs(Math.cos(W * gs))), i.svg && (m -= z - (z * Je + $ * Me), S -= $ - (z * Ce + $ * dt))) : (or = J[6], Qi = J[7], bt = J[8], Gt = J[9], Wi = J[10], ui = J[11], m = J[12], S = J[13], P = J[14], ne = cs(or, Wi), L = ne * Yn, ne && (Q = Math.cos(-ne), Le = Math.sin(-ne), We = ce * Q + bt * Le, Fe = Te * Q + Gt * Le, Ke = or * Q + Wi * Le, bt = ce * -Le + bt * Q, Gt = Te * -Le + Gt * Q, Wi = or * -Le + Wi * Q, ui = Qi * -Le + ui * Q, ce = We, Te = Fe, or = Ke), ne = cs(-Me, Wi), V = ne * Yn, ne && (Q = Math.cos(-ne), Le = Math.sin(-ne), We = Je * Q - bt * Le, Fe = Ce * Q - Gt * Le, Ke = Me * Q - Wi * Le, ui = dt * Le + ui * Q, Je = We, Ce = Fe, Me = Ke), ne = cs(Ce, Je), b = ne * Yn, ne && (Q = Math.cos(ne), Le = Math.sin(ne), We = Je * Q + Ce * Le, Fe = ce * Q + Te * Le, Ce = Ce * Q - Je * Le, Te = Te * Q - ce * Le, Je = We, ce = Fe), L && Math.abs(L) + Math.abs(b) > 359.9 && (L = b = 0, V = 180 - V), E = hi(Math.sqrt(Je * Je + Ce * Ce + Me * Me)), N = hi(Math.sqrt(Te * Te + or * or)), ne = cs(ce, Te), W = Math.abs(ne) > 2e-4 ? ne * Yn : 0, X = ui ? 1 / (ui < 0 ? -ui : ui) : 0), i.svg && (We = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !Ll(Wr(e, ii)), We && e.setAttribute("transform", We))), Math.abs(W) > 90 && Math.abs(W) < 270 && (n ? (E *= -1, W += b <= 0 ? 180 : -180, b += b <= 0 ? 180 : -180) : (N *= -1, W += W <= 0 ? 180 : -180)), t = t || i.uncache, i.x = m - ((i.xPercent = m && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-m) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + s, i.y = S - ((i.yPercent = S && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-S) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + s, i.z = P + s, i.scaleX = hi(E), i.scaleY = hi(N), i.rotation = hi(b) + a, i.rotationX = hi(L) + a, i.rotationY = hi(V) + a, i.skewX = W + a, i.skewY = q + a, i.transformPerspective = X + s, (i.zOrigin = parseFloat(d.split(" ")[2]) || !t && i.zOrigin || 0) && (r[nr] = wo(d)), i.xOffset = i.yOffset = 0, i.force3D = hr.force3D, i.renderTransform = i.svg ? Ju : El ? zl : ju, i.uncache = 0, i
    },
    wo = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    Io = function(e, t, i) {
        var r = Yi(t);
        return hi(parseFloat(t) + parseFloat(Tn(e, "x", i + "px", r))) + r
    },
    ju = function(e, t) {
        t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, zl(e, t)
    },
    In = "0deg",
    Xs = "0px",
    Bn = ") ",
    zl = function(e, t) {
        var i = t || this,
            r = i.xPercent,
            n = i.yPercent,
            s = i.x,
            a = i.y,
            f = i.z,
            d = i.rotation,
            m = i.rotationY,
            S = i.rotationX,
            P = i.skewX,
            E = i.skewY,
            N = i.scaleX,
            b = i.scaleY,
            L = i.transformPerspective,
            V = i.force3D,
            W = i.target,
            q = i.zOrigin,
            X = "",
            z = V === "auto" && e && e !== 1 || V === !0;
        if (q && (S !== In || m !== In)) {
            var $ = parseFloat(m) * gs,
                J = Math.sin($),
                ne = Math.cos($),
                Q;
            $ = parseFloat(S) * gs, Q = Math.cos($), s = Io(W, s, J * Q * -q), a = Io(W, a, -Math.sin($) * -q), f = Io(W, f, ne * Q * -q + q)
        }
        L !== Xs && (X += "perspective(" + L + Bn), (r || n) && (X += "translate(" + r + "%, " + n + "%) "), (z || s !== Xs || a !== Xs || f !== Xs) && (X += f !== Xs || z ? "translate3d(" + s + ", " + a + ", " + f + ") " : "translate(" + s + ", " + a + Bn), d !== In && (X += "rotate(" + d + Bn), m !== In && (X += "rotateY(" + m + Bn), S !== In && (X += "rotateX(" + S + Bn), (P !== In || E !== In) && (X += "skew(" + P + ", " + E + Bn), (N !== 1 || b !== 1) && (X += "scale(" + N + ", " + b + Bn), W.style[ii] = X || "translate(0, 0)"
    },
    Ju = function(e, t) {
        var i = t || this,
            r = i.xPercent,
            n = i.yPercent,
            s = i.x,
            a = i.y,
            f = i.rotation,
            d = i.skewX,
            m = i.skewY,
            S = i.scaleX,
            P = i.scaleY,
            E = i.target,
            N = i.xOrigin,
            b = i.yOrigin,
            L = i.xOffset,
            V = i.yOffset,
            W = i.forceCSS,
            q = parseFloat(s),
            X = parseFloat(a),
            z, $, J, ne, Q;
        f = parseFloat(f), d = parseFloat(d), m = parseFloat(m), m && (m = parseFloat(m), d += m, f += m), f || d ? (f *= gs, d *= gs, z = Math.cos(f) * S, $ = Math.sin(f) * S, J = Math.sin(f - d) * -P, ne = Math.cos(f - d) * P, d && (m *= gs, Q = Math.tan(d - m), Q = Math.sqrt(1 + Q * Q), J *= Q, ne *= Q, m && (Q = Math.tan(m), Q = Math.sqrt(1 + Q * Q), z *= Q, $ *= Q)), z = hi(z), $ = hi($), J = hi(J), ne = hi(ne)) : (z = S, ne = P, $ = J = 0), (q && !~(s + "").indexOf("px") || X && !~(a + "").indexOf("px")) && (q = Tn(E, "x", s, "px"), X = Tn(E, "y", a, "px")), (N || b || L || V) && (q = hi(q + N - (N * z + b * J) + L), X = hi(X + b - (N * $ + b * ne) + V)), (r || n) && (Q = E.getBBox(), q = hi(q + r / 100 * Q.width), X = hi(X + n / 100 * Q.height)), Q = "matrix(" + z + "," + $ + "," + J + "," + ne + "," + q + "," + X + ")", E.setAttribute("transform", Q), W && (E.style[ii] = Q)
    },
    ef = function(e, t, i, r, n) {
        var s = 360,
            a = Mi(n),
            f = parseFloat(n) * (a && ~n.indexOf("rad") ? Yn : 1),
            d = f - r,
            m = r + d + "deg",
            S, P;
        return a && (S = n.split("_")[1], S === "short" && (d %= s, d !== d % (s / 2) && (d += d < 0 ? s : -s)), S === "cw" && d < 0 ? d = (d + s * Ea) % s - ~~(d / s) * s : S === "ccw" && d > 0 && (d = (d - s * Ea) % s - ~~(d / s) * s)), e._pt = P = new rr(e._pt, t, i, r, d, Fu), P.e = m, P.u = "deg", e._props.push(i), P
    },
    Na = function(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    },
    tf = function(e, t, i) {
        var r = Na({}, i._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = i.style,
            a, f, d, m, S, P, E, N;
        r.svg ? (d = i.getAttribute("transform"), i.setAttribute("transform", ""), s[ii] = t, a = Js(i, 1), $n(i, ii), i.setAttribute("transform", d)) : (d = getComputedStyle(i)[ii], s[ii] = t, a = Js(i, 1), s[ii] = d);
        for (f in an) d = r[f], m = a[f], d !== m && n.indexOf(f) < 0 && (E = Yi(d), N = Yi(m), S = E !== N ? Tn(i, f, d, N) : parseFloat(d), P = parseFloat(m), e._pt = new rr(e._pt, a, f, S, P - S, Zo), e._pt.u = N || 0, e._props.push(f));
        Na(a, r)
    };
ir("padding,margin,Width,Radius", function(p, e) {
    var t = "Top",
        i = "Right",
        r = "Bottom",
        n = "Left",
        s = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function(a) {
            return e < 2 ? p + a : "border" + a + p
        });
    yo[e > 1 ? "border" + p : p] = function(a, f, d, m, S) {
        var P, E;
        if (arguments.length < 4) return P = s.map(function(N) {
            return sn(a, N, d)
        }), E = P.join(" "), E.split(P[0]).length === 5 ? P[0] : E;
        P = (m + "").split(" "), E = {}, s.forEach(function(N, b) {
            return E[N] = P[b] = P[b] || P[(b - 1) / 2 | 0]
        }), a.init(f, E, S)
    }
});
var Nl = {
    name: "css",
    register: Jo,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, i, r, n) {
        var s = this._props,
            a = e.style,
            f = i.vars.startAt,
            d, m, S, P, E, N, b, L, V, W, q, X, z, $, J, ne;
        ga || Jo(), this.styles = this.styles || Dl(e), ne = this.styles.props, this.tween = i;
        for (b in t)
            if (b !== "autoRound" && (m = t[b], !(ur[b] && vl(b, t, i, r, e, n)))) {
                if (E = typeof m, N = yo[b], E === "function" && (m = m.call(i, r, e, n), E = typeof m), E === "string" && ~m.indexOf("random(") && (m = Ks(m)), N) N(this, e, b, m, i) && (J = 1);
                else if (b.substr(0, 2) === "--") d = (getComputedStyle(e).getPropertyValue(b) + "").trim(), m += "", wn.lastIndex = 0, wn.test(d) || (L = Yi(d), V = Yi(m)), V ? L !== V && (d = Tn(e, b, d, V) + V) : L && (m += L), this.add(a, "setProperty", d, m, r, n, 0, 0, b), s.push(b), ne.push(b, 0, a[b]);
                else if (E !== "undefined") {
                    if (f && b in f ? (d = typeof f[b] == "function" ? f[b].call(i, r, e, n) : f[b], Mi(d) && ~d.indexOf("random(") && (d = Ks(d)), Yi(d + "") || d === "auto" || (d += hr.units[b] || Yi(sn(e, b)) || ""), (d + "").charAt(1) === "=" && (d = sn(e, b))) : d = sn(e, b), P = parseFloat(d), W = E === "string" && m.charAt(1) === "=" && m.substr(0, 2), W && (m = m.substr(2)), S = parseFloat(m), b in Hr && (b === "autoAlpha" && (P === 1 && sn(e, "visibility") === "hidden" && S && (P = 0), ne.push("visibility", 0, a.visibility), xn(this, a, "visibility", P ? "inherit" : "hidden", S ? "inherit" : "hidden", !S)), b !== "scale" && b !== "transform" && (b = Hr[b], ~b.indexOf(",") && (b = b.split(",")[0]))), q = b in an, q) {
                        if (this.styles.save(b), X || (z = e._gsap, z.renderTransform && !t.parseTransform || Js(e, t.parseTransform), $ = t.smoothOrigin !== !1 && z.smooth, X = this._pt = new rr(this._pt, a, ii, 0, 1, z.renderTransform, z, 0, -1), X.dep = 1), b === "scale") this._pt = new rr(this._pt, z, "scaleY", z.scaleY, (W ? ps(z.scaleY, W + S) : S) - z.scaleY || 0, Zo), this._pt.u = 0, s.push("scaleY", b), b += "X";
                        else if (b === "transformOrigin") {
                            ne.push(nr, 0, a[nr]), m = Qu(m), z.svg ? ea(e, m, 0, $, 0, this) : (V = parseFloat(m.split(" ")[2]) || 0, V !== z.zOrigin && xn(this, z, "zOrigin", z.zOrigin, V), xn(this, a, b, wo(d), wo(m)));
                            continue
                        } else if (b === "svgOrigin") {
                            ea(e, m, 1, $, 0, this);
                            continue
                        } else if (b in Al) {
                            ef(this, z, b, P, W ? ps(P, W + m) : m);
                            continue
                        } else if (b === "smoothOrigin") {
                            xn(this, z, "smooth", z.smooth, m);
                            continue
                        } else if (b === "force3D") {
                            z[b] = m;
                            continue
                        } else if (b === "transform") {
                            tf(this, m, e);
                            continue
                        }
                    } else b in a || (b = ws(b) || b);
                    if (q || (S || S === 0) && (P || P === 0) && !Nu.test(m) && b in a) L = (d + "").substr((P + "").length), S || (S = 0), V = Yi(m) || (b in hr.units ? hr.units[b] : L), L !== V && (P = Tn(e, b, d, V)), this._pt = new rr(this._pt, q ? z : a, b, P, (W ? ps(P, W + S) : S) - P, !q && (V === "px" || b === "zIndex") && t.autoRound !== !1 ? Bu : Zo), this._pt.u = V || 0, L !== V && V !== "%" && (this._pt.b = d, this._pt.r = Iu);
                    else if (b in a) Ku.call(this, e, b, d, W ? W + m : m);
                    else if (b in e) this.add(e, b, d || e[b], W ? W + m : m, r, n);
                    else if (b !== "parseTransform") {
                        aa(b, m);
                        continue
                    }
                    q || (b in a ? ne.push(b, 0, a[b]) : ne.push(b, 1, d || e[b])), s.push(b)
                }
            }
        J && Sl(this)
    },
    render: function(e, t) {
        if (t.tween._time || !ma())
            for (var i = t._pt; i;) i.r(e, i.d), i = i._next;
        else t.styles.revert()
    },
    get: sn,
    aliases: Hr,
    getSetter: function(e, t, i) {
        var r = Hr[t];
        return r && r.indexOf(",") < 0 && (t = r), t in an && t !== nr && (e._gsap.x || sn(e, "x")) ? i && Da === i ? t === "scale" ? Wu : Hu : (Da = i || {}) && (t === "scale" ? Vu : Gu) : e.style && !na(e.style[t]) ? Yu : ~t.indexOf("-") ? Xu : pa(e, t)
    },
    core: {
        _removeProperty: $n,
        _getMatrix: xa
    }
};
sr.utils.checkPrefix = ws;
sr.core.getStyleSaver = Dl;
(function(p, e, t, i) {
    var r = ir(p + "," + e + "," + t, function(n) {
        an[n] = 1
    });
    ir(e, function(n) {
        hr.units[n] = "deg", Al[n] = 1
    }), Hr[r[13]] = p + "," + e, ir(i, function(n) {
        var s = n.split(":");
        Hr[s[1]] = r[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ir("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(p) {
    hr.units[p] = "px"
});
sr.registerPlugin(Nl);
var bo = sr.registerPlugin(Nl) || sr;
bo.core.Tween;
var ta = {
    exports: {}
};
(function(p, e) {
    (function(t, i) {
        i(e)
    })(Fa, function(t) {
        function i(M, l) {
            for (var x = 0; x < l.length; x++) {
                var u = l[x];
                u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(M, u.key, u)
            }
        }

        function r(M, l, x) {
            return l && i(M.prototype, l), x && i(M, x), M
        }
        /*!
         * Observer 3.12.5
         * https://gsap.com
         *
         * @license Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var n, s, a, f, d, m, S, P, E, N, b, L, V, W = function() {
                return n || typeof window < "u" && (n = window.gsap) && n.registerPlugin && n
            },
            q = 1,
            X = [],
            z = [],
            $ = [],
            J = Date.now,
            ne = function(l, x) {
                return x
            },
            Q = function() {
                var l = E.core,
                    x = l.bridge || {},
                    u = l._scrollers,
                    g = l._proxies;
                u.push.apply(u, z), g.push.apply(g, $), z = u, $ = g, ne = function(R, k) {
                    return x[R](k)
                }
            },
            Le = function(l, x) {
                return ~$.indexOf(l) && $[$.indexOf(l) + 1][x]
            },
            Je = function(l) {
                return !!~N.indexOf(l)
            },
            Ce = function(l, x, u, g, C) {
                return l.addEventListener(x, u, {
                    passive: g !== !1,
                    capture: !!C
                })
            },
            Me = function(l, x, u, g) {
                return l.removeEventListener(x, u, !!g)
            },
            dt = "scrollLeft",
            ce = "scrollTop",
            Te = function() {
                return b && b.isPressed || z.cache++
            },
            We = function(l, x) {
                var u = function g(C) {
                    if (C || C === 0) {
                        q && (a.history.scrollRestoration = "manual");
                        var R = b && b.isPressed;
                        C = g.v = Math.round(C) || (b && b.iOS ? 1 : 0), l(C), g.cacheID = z.cache, R && ne("ss", C)
                    } else(x || z.cache !== g.cacheID || ne("ref")) && (g.cacheID = z.cache, g.v = l());
                    return g.v + g.offset
                };
                return u.offset = 0, l && u
            },
            Fe = {
                s: dt,
                p: "left",
                p2: "Left",
                os: "right",
                os2: "Right",
                d: "width",
                d2: "Width",
                a: "x",
                sc: We(function(M) {
                    return arguments.length ? a.scrollTo(M, Ke.sc()) : a.pageXOffset || f[dt] || d[dt] || m[dt] || 0
                })
            },
            Ke = {
                s: ce,
                p: "top",
                p2: "Top",
                os: "bottom",
                os2: "Bottom",
                d: "height",
                d2: "Height",
                a: "y",
                op: Fe,
                sc: We(function(M) {
                    return arguments.length ? a.scrollTo(Fe.sc(), M) : a.pageYOffset || f[ce] || d[ce] || m[ce] || 0
                })
            },
            bt = function(l, x) {
                return (x && x._ctx && x._ctx.selector || n.utils.toArray)(l)[0] || (typeof l == "string" && n.config().nullTargetWarn !== !1 ? console.warn("Element not found:", l) : null)
            },
            Gt = function(l, x) {
                var u = x.s,
                    g = x.sc;
                Je(l) && (l = f.scrollingElement || d);
                var C = z.indexOf(l),
                    R = g === Ke.sc ? 1 : 2;
                !~C && (C = z.push(l) - 1), z[C + R] || Ce(l, "scroll", Te);
                var k = z[C + R],
                    Y = k || (z[C + R] = We(Le(l, u), !0) || (Je(l) ? g : We(function(le) {
                        return arguments.length ? l[u] = le : l[u]
                    })));
                return Y.target = l, k || (Y.smooth = n.getProperty(l, "scrollBehavior") === "smooth"), Y
            },
            Wi = function(l, x, u) {
                var g = l,
                    C = l,
                    R = J(),
                    k = R,
                    Y = x || 50,
                    le = Math.max(500, Y * 3),
                    pe = function(ie, yt) {
                        var Ge = J();
                        yt || Ge - R > Y ? (C = g, g = ie, k = R, R = Ge) : u ? g += ie : g = C + (ie - C) / (Ge - k) * (R - k)
                    },
                    Ve = function() {
                        C = g = u ? 0 : g, k = R = 0
                    },
                    oe = function(ie) {
                        var yt = k,
                            Ge = C,
                            pt = J();
                        return (ie || ie === 0) && ie !== g && pe(ie), R === k || pt - k > le ? 0 : (g + (u ? Ge : -Ge)) / ((u ? pt : R) - yt) * 1e3
                    };
                return {
                    update: pe,
                    reset: Ve,
                    getVelocity: oe
                }
            },
            Qi = function(l, x) {
                return x && !l._gsapAllow && l.preventDefault(), l.changedTouches ? l.changedTouches[0] : l
            },
            ui = function(l) {
                var x = Math.max.apply(Math, l),
                    u = Math.min.apply(Math, l);
                return Math.abs(x) >= Math.abs(u) ? x : u
            },
            or = function() {
                E = n.core.globals().ScrollTrigger, E && E.core && Q()
            },
            Kn = function(l) {
                return n = l || W(), !s && n && typeof document < "u" && document.body && (a = window, f = document, d = f.documentElement, m = f.body, N = [a, f, d, m], n.utils.clamp, V = n.core.context || function() {}, P = "onpointerenter" in m ? "pointer" : "mouse", S = Et.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, L = Et.eventTypes = ("ontouchstart" in d ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in d ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
                    return q = 0
                }, 500), or(), s = 1), s
            };
        Fe.op = Ke, z.cache = 0;
        var Et = function() {
            function M(x) {
                this.init(x)
            }
            var l = M.prototype;
            return l.init = function(u) {
                s || Kn(n) || console.warn("Please gsap.registerPlugin(Observer)"), E || or();
                var g = u.tolerance,
                    C = u.dragMinimum,
                    R = u.type,
                    k = u.target,
                    Y = u.lineHeight,
                    le = u.debounce,
                    pe = u.preventDefault,
                    Ve = u.onStop,
                    oe = u.onStopDelay,
                    B = u.ignore,
                    ie = u.wheelSpeed,
                    yt = u.event,
                    Ge = u.onDragStart,
                    pt = u.onDragEnd,
                    st = u.onDrag,
                    At = u.onPress,
                    _e = u.onRelease,
                    Ae = u.onRight,
                    _t = u.onLeft,
                    ge = u.onUp,
                    wt = u.onDown,
                    fi = u.onChangeX,
                    xe = u.onChangeY,
                    qt = u.onChange,
                    he = u.onToggleX,
                    qi = u.onToggleY,
                    Lt = u.onHover,
                    ni = u.onHoverEnd,
                    Pt = u.onMove,
                    $e = u.ignoreCheck,
                    zt = u.isNormalizer,
                    ye = u.onGestureStart,
                    y = u.onGestureEnd,
                    U = u.onWheel,
                    ue = u.onEnable,
                    qe = u.onDisable,
                    Ze = u.onClick,
                    vi = u.scrollSpeed,
                    Kt = u.capture,
                    Wt = u.allowClicks,
                    Vt = u.lockAxis,
                    Nt = u.onLockAxis;
                this.target = k = bt(k) || d, this.vars = u, B && (B = n.utils.toArray(B)), g = g || 1e-9, C = C || 0, ie = ie || 1, vi = vi || 1, R = R || "wheel,touch,pointer", le = le !== !1, Y || (Y = parseFloat(a.getComputedStyle(m).lineHeight) || 22);
                var zi, lt, Ni, ut, Qt, fe, T, w = this,
                    O = 0,
                    H = 0,
                    te = u.passive || !pe,
                    j = Gt(k, Fe),
                    Oe = Gt(k, Ke),
                    me = j(),
                    ft = Oe(),
                    ke = ~R.indexOf("touch") && !~R.indexOf("pointer") && L[0] === "pointerdown",
                    tt = Je(k),
                    Be = k.ownerDocument || f,
                    Dt = [0, 0, 0],
                    si = [0, 0, 0],
                    oi = 0,
                    er = function() {
                        return oi = J()
                    },
                    je = function(Ee, gt) {
                        return (w.event = Ee) && B && ~B.indexOf(Ee.target) || gt && ke && Ee.pointerType !== "touch" || $e && $e(Ee, gt)
                    },
                    Bt = function() {
                        w._vx.reset(), w._vy.reset(), lt.pause(), Ve && Ve(w)
                    },
                    gr = function() {
                        var Ee = w.deltaX = ui(Dt),
                            gt = w.deltaY = ui(si),
                            se = Math.abs(Ee) >= g,
                            He = Math.abs(gt) >= g;
                        qt && (se || He) && qt(w, Ee, gt, Dt, si), se && (Ae && w.deltaX > 0 && Ae(w), _t && w.deltaX < 0 && _t(w), fi && fi(w), he && w.deltaX < 0 != O < 0 && he(w), O = w.deltaX, Dt[0] = Dt[1] = Dt[2] = 0), He && (wt && w.deltaY > 0 && wt(w), ge && w.deltaY < 0 && ge(w), xe && xe(w), qi && w.deltaY < 0 != H < 0 && qi(w), H = w.deltaY, si[0] = si[1] = si[2] = 0), (ut || Ni) && (Pt && Pt(w), Ni && (st(w), Ni = !1), ut = !1), fe && !(fe = !1) && Nt && Nt(w), Qt && (U(w), Qt = !1), zi = 0
                    },
                    Si = function(Ee, gt, se) {
                        Dt[se] += Ee, si[se] += gt, w._vx.update(Ee), w._vy.update(gt), le ? zi || (zi = requestAnimationFrame(gr)) : gr()
                    },
                    us = function(Ee, gt) {
                        Vt && !T && (w.axis = T = Math.abs(Ee) > Math.abs(gt) ? "x" : "y", fe = !0), T !== "y" && (Dt[2] += Ee, w._vx.update(Ee, !0)), T !== "x" && (si[2] += gt, w._vy.update(gt, !0)), le ? zi || (zi = requestAnimationFrame(gr)) : gr()
                    },
                    _n = function(Ee) {
                        if (!je(Ee, 1)) {
                            Ee = Qi(Ee, pe);
                            var gt = Ee.clientX,
                                se = Ee.clientY,
                                He = gt - w.x,
                                De = se - w.y,
                                Ye = w.isDragging;
                            w.x = gt, w.y = se, (Ye || Math.abs(w.startX - gt) >= C || Math.abs(w.startY - se) >= C) && (st && (Ni = !0), Ye || (w.isDragging = !0), us(He, De), Ye || Ge && Ge(w))
                        }
                    },
                    Ln = w.onPress = function(Xe) {
                        je(Xe, 1) || Xe && Xe.button || (w.axis = T = null, lt.pause(), w.isPressed = !0, Xe = Qi(Xe), O = H = 0, w.startX = w.x = Xe.clientX, w.startY = w.y = Xe.clientY, w._vx.reset(), w._vy.reset(), Ce(zt ? k : Be, L[1], _n, te, !0), w.deltaX = w.deltaY = 0, At && At(w))
                    },
                    it = w.onRelease = function(Xe) {
                        if (!je(Xe, 1)) {
                            Me(zt ? k : Be, L[1], _n, !0);
                            var Ee = !isNaN(w.y - w.startY),
                                gt = w.isDragging,
                                se = gt && (Math.abs(w.x - w.startX) > 3 || Math.abs(w.y - w.startY) > 3),
                                He = Qi(Xe);
                            !se && Ee && (w._vx.reset(), w._vy.reset(), pe && Wt && n.delayedCall(.08, function() {
                                if (J() - oi > 300 && !Xe.defaultPrevented) {
                                    if (Xe.target.click) Xe.target.click();
                                    else if (Be.createEvent) {
                                        var De = Be.createEvent("MouseEvents");
                                        De.initMouseEvent("click", !0, !0, a, 1, He.screenX, He.screenY, He.clientX, He.clientY, !1, !1, !1, !1, 0, null), Xe.target.dispatchEvent(De)
                                    }
                                }
                            })), w.isDragging = w.isGesturing = w.isPressed = !1, Ve && gt && !zt && lt.restart(!0), pt && gt && pt(w), _e && _e(w, se)
                        }
                    },
                    zn = function(Ee) {
                        return Ee.touches && Ee.touches.length > 1 && (w.isGesturing = !0) && ye(Ee, w.isDragging)
                    },
                    Dr = function() {
                        return (w.isGesturing = !1) || y(w)
                    },
                    Er = function(Ee) {
                        if (!je(Ee)) {
                            var gt = j(),
                                se = Oe();
                            Si((gt - me) * vi, (se - ft) * vi, 1), me = gt, ft = se, Ve && lt.restart(!0)
                        }
                    },
                    Or = function(Ee) {
                        if (!je(Ee)) {
                            Ee = Qi(Ee, pe), U && (Qt = !0);
                            var gt = (Ee.deltaMode === 1 ? Y : Ee.deltaMode === 2 ? a.innerHeight : 1) * ie;
                            Si(Ee.deltaX * gt, Ee.deltaY * gt, 0), Ve && !zt && lt.restart(!0)
                        }
                    },
                    Nn = function(Ee) {
                        if (!je(Ee)) {
                            var gt = Ee.clientX,
                                se = Ee.clientY,
                                He = gt - w.x,
                                De = se - w.y;
                            w.x = gt, w.y = se, ut = !0, Ve && lt.restart(!0), (He || De) && us(He, De)
                        }
                    },
                    fs = function(Ee) {
                        w.event = Ee, Lt(w)
                    },
                    rn = function(Ee) {
                        w.event = Ee, ni(w)
                    },
                    Fs = function(Ee) {
                        return je(Ee) || Qi(Ee, pe) && Ze(w)
                    };
                lt = w._dc = n.delayedCall(oe || .25, Bt).pause(), w.deltaX = w.deltaY = 0, w._vx = Wi(0, 50, !0), w._vy = Wi(0, 50, !0), w.scrollX = j, w.scrollY = Oe, w.isDragging = w.isGesturing = w.isPressed = !1, V(this), w.enable = function(Xe) {
                    return w.isEnabled || (Ce(tt ? Be : k, "scroll", Te), R.indexOf("scroll") >= 0 && Ce(tt ? Be : k, "scroll", Er, te, Kt), R.indexOf("wheel") >= 0 && Ce(k, "wheel", Or, te, Kt), (R.indexOf("touch") >= 0 && S || R.indexOf("pointer") >= 0) && (Ce(k, L[0], Ln, te, Kt), Ce(Be, L[2], it), Ce(Be, L[3], it), Wt && Ce(k, "click", er, !0, !0), Ze && Ce(k, "click", Fs), ye && Ce(Be, "gesturestart", zn), y && Ce(Be, "gestureend", Dr), Lt && Ce(k, P + "enter", fs), ni && Ce(k, P + "leave", rn), Pt && Ce(k, P + "move", Nn)), w.isEnabled = !0, Xe && Xe.type && Ln(Xe), ue && ue(w)), w
                }, w.disable = function() {
                    w.isEnabled && (X.filter(function(Xe) {
                        return Xe !== w && Je(Xe.target)
                    }).length || Me(tt ? Be : k, "scroll", Te), w.isPressed && (w._vx.reset(), w._vy.reset(), Me(zt ? k : Be, L[1], _n, !0)), Me(tt ? Be : k, "scroll", Er, Kt), Me(k, "wheel", Or, Kt), Me(k, L[0], Ln, Kt), Me(Be, L[2], it), Me(Be, L[3], it), Me(k, "click", er, !0), Me(k, "click", Fs), Me(Be, "gesturestart", zn), Me(Be, "gestureend", Dr), Me(k, P + "enter", fs), Me(k, P + "leave", rn), Me(k, P + "move", Nn), w.isEnabled = w.isPressed = w.isDragging = !1, qe && qe(w))
                }, w.kill = w.revert = function() {
                    w.disable();
                    var Xe = X.indexOf(w);
                    Xe >= 0 && X.splice(Xe, 1), b === w && (b = 0)
                }, X.push(w), zt && Je(k) && (b = w), w.enable(yt)
            }, r(M, [{
                key: "velocityX",
                get: function() {
                    return this._vx.getVelocity()
                }
            }, {
                key: "velocityY",
                get: function() {
                    return this._vy.getVelocity()
                }
            }]), M
        }();
        Et.version = "3.12.5", Et.create = function(M) {
            return new Et(M)
        }, Et.register = Kn, Et.getAll = function() {
            return X.slice()
        }, Et.getById = function(M) {
            return X.filter(function(l) {
                return l.vars.id === M
            })[0]
        }, W() && n.registerPlugin(Et);
        /*!
         * ScrollTrigger 3.12.5
         * https://gsap.com
         *
         * @license Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var ae, pr, Re, vt, Ri, Tt, Qn, Gr, ln, un, Zi, Ar, St, Ur, $r, _i, wr, fn, br, bs, Tr, to, Ut, Sr, qr, io, Lr, Zn, zr, Ai, jn, Jn, es, ts, is = 1,
            gi = Date.now,
            rs = gi(),
            ji = 0,
            Xt = 0,
            Jt = function(l, x, u) {
                var g = ot(l) && (l.substr(0, 6) === "clamp(" || l.indexOf("max") > -1);
                return u["_" + x + "Clamp"] = g, g ? l.substr(6, l.length - 7) : l
            },
            Vi = function(l, x) {
                return x && (!ot(l) || l.substr(0, 6) !== "clamp(") ? "clamp(" + l + ")" : l
            },
            Mo = function M() {
                return Xt && requestAnimationFrame(M)
            },
            ro = function() {
                return Ur = 1
            },
            Ts = function() {
                return Ur = 0
            },
            Pi = function(l) {
                return l
            },
            _r = function(l) {
                return Math.round(l * 1e5) / 1e5 || 0
            },
            Ss = function() {
                return typeof window < "u"
            },
            ks = function() {
                return ae || Ss() && (ae = window.gsap) && ae.registerPlugin && ae
            },
            Ji = function(l) {
                return !!~Qn.indexOf(l)
            },
            Cs = function(l) {
                return (l === "Height" ? jn : Re["inner" + l]) || Ri["client" + l] || Tt["client" + l]
            },
            ns = function(l) {
                return Le(l, "getBoundingClientRect") || (Ji(l) ? function() {
                    return h.width = Re.innerWidth, h.height = jn, h
                } : function() {
                    return mt(l)
                })
            },
            Ms = function(l, x, u) {
                var g = u.d,
                    C = u.d2,
                    R = u.a;
                return (R = Le(l, "getBoundingClientRect")) ? function() {
                    return R()[g]
                } : function() {
                    return (x ? Cs(C) : l["client" + C]) || 0
                }
            },
            kn = function(l, x) {
                return !x || ~$.indexOf(l) ? ns(l) : function() {
                    return h
                }
            },
            yi = function(l, x) {
                var u = x.s,
                    g = x.d2,
                    C = x.d,
                    R = x.a;
                return Math.max(0, (u = "scroll" + g) && (R = Le(l, u)) ? R() - ns(l)()[C] : Ji(l) ? (Ri[u] || Tt[u]) - Cs(g) : l[u] - l["offset" + g])
            },
            kr = function(l, x) {
                for (var u = 0; u < br.length; u += 3)(!x || ~x.indexOf(br[u + 1])) && l(br[u], br[u + 1], br[u + 2])
            },
            ot = function(l) {
                return typeof l == "string"
            },
            wi = function(l) {
                return typeof l == "function"
            },
            bi = function(l) {
                return typeof l == "number"
            },
            Kr = function(l) {
                return typeof l == "object"
            },
            Qr = function(l, x, u) {
                return l && l.progress(x ? 0 : 1) && u && l.pause()
            },
            Ps = function(l, x) {
                if (l.enabled) {
                    var u = l._ctx ? l._ctx.add(function() {
                        return x(l)
                    }) : x(l);
                    u && u.totalTime && (l.callbackAnimation = u)
                }
            },
            Cr = Math.abs,
            no = "left",
            Ds = "top",
            Cn = "right",
            Es = "bottom",
            Mr = "width",
            Zr = "height",
            Gi = "Right",
            Ie = "Left",
            jr = "Top",
            Ui = "Bottom",
            Ot = "padding",
            Li = "margin",
            rt = "Width",
            Mn = "Height",
            Qe = "px",
            kt = function(l) {
                return Re.getComputedStyle(l)
            },
            ss = function(l) {
                var x = kt(l).position;
                l.style.position = x === "absolute" || x === "fixed" ? x : "relative"
            },
            mi = function(l, x) {
                for (var u in x) u in l || (l[u] = x[u]);
                return l
            },
            mt = function(l, x) {
                var u = x && kt(l)[$r] !== "matrix(1, 0, 0, 1, 0, 0)" && ae.to(l, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0
                    }).progress(1),
                    g = l.getBoundingClientRect();
                return u && u.progress(0).kill(), g
            },
            ar = function(l, x) {
                var u = x.d2;
                return l["offset" + u] || l["client" + u] || 0
            },
            Os = function(l) {
                var x = [],
                    u = l.labels,
                    g = l.duration(),
                    C;
                for (C in u) x.push(u[C] / g);
                return x
            },
            Pn = function(l) {
                return function(x) {
                    return ae.utils.snap(Os(l), x)
                }
            },
            cn = function(l) {
                var x = ae.utils.snap(l),
                    u = Array.isArray(l) && l.slice(0).sort(function(g, C) {
                        return g - C
                    });
                return u ? function(g, C, R) {
                    R === void 0 && (R = .001);
                    var k;
                    if (!C) return x(g);
                    if (C > 0) {
                        for (g -= R, k = 0; k < u.length; k++)
                            if (u[k] >= g) return u[k];
                        return u[k - 1]
                    } else
                        for (k = u.length, g += R; k--;)
                            if (u[k] <= g) return u[k];
                    return u[0]
                } : function(g, C, R) {
                    R === void 0 && (R = .001);
                    var k = x(g);
                    return !C || Math.abs(k - g) < R || k - g < 0 == C < 0 ? k : x(C < 0 ? g - l : g + l)
                }
            },
            so = function(l) {
                return function(x, u) {
                    return cn(Os(l))(x, u.direction)
                }
            },
            Dn = function(l, x, u, g) {
                return u.split(",").forEach(function(C) {
                    return l(x, C, g)
                })
            },
            Rt = function(l, x, u, g, C) {
                return l.addEventListener(x, u, {
                    passive: !g,
                    capture: !!C
                })
            },
            di = function(l, x, u, g) {
                return l.removeEventListener(x, u, !!g)
            },
            os = function(l, x, u) {
                u = u && u.wheelHandler, u && (l(x, "wheel", u), l(x, "touchmove", u))
            },
            En = {
                startColor: "green",
                endColor: "red",
                indent: 0,
                fontSize: "16px",
                fontWeight: "normal"
            },
            On = {
                toggleActions: "play",
                anticipatePin: 0
            },
            Rn = {
                top: 0,
                left: 0,
                center: .5,
                bottom: 1,
                right: 1
            },
            as = function(l, x) {
                if (ot(l)) {
                    var u = l.indexOf("="),
                        g = ~u ? +(l.charAt(u - 1) + 1) * parseFloat(l.substr(u + 1)) : 0;
                    ~u && (l.indexOf("%") > u && (g *= x / 100), l = l.substr(0, u - 1)), l = g + (l in Rn ? Rn[l] * x : ~l.indexOf("%") ? parseFloat(l) * x / 100 : parseFloat(l) || 0)
                }
                return l
            },
            Pr = function(l, x, u, g, C, R, k, Y) {
                var le = C.startColor,
                    pe = C.endColor,
                    Ve = C.fontSize,
                    oe = C.indent,
                    B = C.fontWeight,
                    ie = vt.createElement("div"),
                    yt = Ji(u) || Le(u, "pinType") === "fixed",
                    Ge = l.indexOf("scroller") !== -1,
                    pt = yt ? Tt : u,
                    st = l.indexOf("start") !== -1,
                    At = st ? le : pe,
                    _e = "border-color:" + At + ";font-size:" + Ve + ";color:" + At + ";font-weight:" + B + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                return _e += "position:" + ((Ge || Y) && yt ? "fixed;" : "absolute;"), (Ge || Y || !yt) && (_e += (g === Ke ? Cn : Es) + ":" + (R + parseFloat(oe)) + "px;"), k && (_e += "box-sizing:border-box;text-align:left;width:" + k.offsetWidth + "px;"), ie._isStart = st, ie.setAttribute("class", "gsap-marker-" + l + (x ? " marker-" + x : "")), ie.style.cssText = _e, ie.innerText = x || x === 0 ? l + "-" + x : l, pt.children[0] ? pt.insertBefore(ie, pt.children[0]) : pt.appendChild(ie), ie._offset = ie["offset" + g.op.d2], An(ie, 0, g, st), ie
            },
            An = function(l, x, u, g) {
                var C = {
                        display: "block"
                    },
                    R = u[g ? "os2" : "p2"],
                    k = u[g ? "p2" : "os2"];
                l._isFlipped = g, C[u.a + "Percent"] = g ? -100 : 0, C[u.a] = g ? "1px" : 0, C["border" + R + rt] = 1, C["border" + k + rt] = 0, C[u.p] = x + "px", ae.set(l, C)
            },
            Ue = [],
            hn = {},
            dn, oo = function() {
                return gi() - ji > 34 && (dn || (dn = requestAnimationFrame(v)))
            },
            Jr = function() {
                (!Ut || !Ut.isPressed || Ut.startX > Tt.clientWidth) && (z.cache++, Ut ? dn || (dn = requestAnimationFrame(v)) : v(), ji || Ti("scrollStart"), ji = gi())
            },
            Rs = function() {
                io = Re.innerWidth, qr = Re.innerHeight
            },
            en = function() {
                z.cache++, !St && !to && !vt.fullscreenElement && !vt.webkitFullscreenElement && (!Sr || io !== Re.innerWidth || Math.abs(Re.innerHeight - qr) > Re.innerHeight * .25) && Gr.restart(!0)
            },
            Nr = {},
            Po = [],
            As = function M() {
                return di(ee, "scrollEnd", M) || F(!0)
            },
            Ti = function(l) {
                return Nr[l] && Nr[l].map(function(x) {
                    return x()
                }) || Po
            },
            $t = [],
            Ls = function(l) {
                for (var x = 0; x < $t.length; x += 5)(!l || $t[x + 4] && $t[x + 4].query === l) && ($t[x].style.cssText = $t[x + 1], $t[x].getBBox && $t[x].setAttribute("transform", $t[x + 2] || ""), $t[x + 3].uncache = 1)
            },
            ls = function(l, x) {
                var u;
                for (_i = 0; _i < Ue.length; _i++) u = Ue[_i], u && (!x || u._ctx === x) && (l ? u.kill(1) : u.revert(!0, !0));
                Jn = !0, x && Ls(x), x || Ti("revert")
            },
            pn = function(l, x) {
                z.cache++, (x || !Di) && z.forEach(function(u) {
                    return wi(u) && u.cacheID++ && (u.rec = 0)
                }), ot(l) && (Re.history.scrollRestoration = zr = l)
            },
            Di, tn = 0,
            zs, ao = function() {
                if (zs !== tn) {
                    var l = zs = tn;
                    requestAnimationFrame(function() {
                        return l === tn && F(!0)
                    })
                }
            },
            Ns = function() {
                Tt.appendChild(Ai), jn = !Ut && Ai.offsetHeight || Re.innerHeight, Tt.removeChild(Ai)
            },
            $i = function(l) {
                return ln(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(x) {
                    return x.style.display = l ? "none" : "block"
                })
            },
            F = function(l, x) {
                if (ji && !l && !Jn) {
                    Rt(ee, "scrollEnd", As);
                    return
                }
                Ns(), Di = ee.isRefreshing = !0, z.forEach(function(g) {
                    return wi(g) && ++g.cacheID && (g.rec = g())
                });
                var u = Ti("refreshInit");
                bs && ee.sort(), x || ls(), z.forEach(function(g) {
                    wi(g) && (g.smooth && (g.target.style.scrollBehavior = "auto"), g(0))
                }), Ue.slice(0).forEach(function(g) {
                    return g.refresh()
                }), Jn = !1, Ue.forEach(function(g) {
                    if (g._subPinOffset && g.pin) {
                        var C = g.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            R = g.pin[C];
                        g.revert(!0, 1), g.adjustPinSpacing(g.pin[C] - R), g.refresh()
                    }
                }), es = 1, $i(!0), Ue.forEach(function(g) {
                    var C = yi(g.scroller, g._dir),
                        R = g.vars.end === "max" || g._endClamp && g.end > C,
                        k = g._startClamp && g.start >= C;
                    (R || k) && g.setPositions(k ? C - 1 : g.start, R ? Math.max(k ? C : g.start + 1, C) : g.end, !0)
                }), $i(!1), es = 0, u.forEach(function(g) {
                    return g && g.render && g.render(-1)
                }), z.forEach(function(g) {
                    wi(g) && (g.smooth && requestAnimationFrame(function() {
                        return g.target.style.scrollBehavior = "smooth"
                    }), g.rec && g(g.rec))
                }), pn(zr, 1), Gr.pause(), tn++, Di = 2, v(2), Ue.forEach(function(g) {
                    return wi(g.vars.onRefresh) && g.vars.onRefresh(g)
                }), Di = ee.isRefreshing = !1, Ti("refresh")
            },
            o = 0,
            _ = 1,
            c, v = function(l) {
                if (l === 2 || !Di && !Jn) {
                    ee.isUpdating = !0, c && c.update(0);
                    var x = Ue.length,
                        u = gi(),
                        g = u - rs >= 50,
                        C = x && Ue[0].scroll();
                    if (_ = o > C ? -1 : 1, Di || (o = C), g && (ji && !Ur && u - ji > 200 && (ji = 0, Ti("scrollEnd")), Zi = rs, rs = u), _ < 0) {
                        for (_i = x; _i-- > 0;) Ue[_i] && Ue[_i].update(0, g);
                        _ = 1
                    } else
                        for (_i = 0; _i < x; _i++) Ue[_i] && Ue[_i].update(0, g);
                    ee.isUpdating = !1
                }
                dn = 0
            },
            D = [no, Ds, Es, Cn, Li + Ui, Li + Gi, Li + jr, Li + Ie, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
            I = D.concat([Mr, Zr, "boxSizing", "max" + rt, "max" + Mn, "position", Li, Ot, Ot + jr, Ot + Gi, Ot + Ui, Ot + Ie]),
            A = function(l, x, u) {
                de(u);
                var g = l._gsap;
                if (g.spacerIsNative) de(g.spacerState);
                else if (l._gsap.swappedIn) {
                    var C = x.parentNode;
                    C && (C.insertBefore(l, x), C.removeChild(x))
                }
                l._gsap.swappedIn = !1
            },
            Z = function(l, x, u, g) {
                if (!l._gsap.swappedIn) {
                    for (var C = D.length, R = x.style, k = l.style, Y; C--;) Y = D[C], R[Y] = u[Y];
                    R.position = u.position === "absolute" ? "absolute" : "relative", u.display === "inline" && (R.display = "inline-block"), k[Es] = k[Cn] = "auto", R.flexBasis = u.flexBasis || "auto", R.overflow = "visible", R.boxSizing = "border-box", R[Mr] = ar(l, Fe) + Qe, R[Zr] = ar(l, Ke) + Qe, R[Ot] = k[Li] = k[Ds] = k[no] = "0", de(g), k[Mr] = k["max" + rt] = u[Mr], k[Zr] = k["max" + Mn] = u[Zr], k[Ot] = u[Ot], l.parentNode !== x && (l.parentNode.insertBefore(x, l), x.appendChild(l)), l._gsap.swappedIn = !0
                }
            },
            G = /([A-Z])/g,
            de = function(l) {
                if (l) {
                    var x = l.t.style,
                        u = l.length,
                        g = 0,
                        C, R;
                    for ((l.t._gsap || ae.core.getCache(l.t)).uncache = 1; g < u; g += 2) R = l[g + 1], C = l[g], R ? x[C] = R : x[C] && x.removeProperty(C.replace(G, "-$1").toLowerCase())
                }
            },
            we = function(l) {
                for (var x = I.length, u = l.style, g = [], C = 0; C < x; C++) g.push(I[C], u[I[C]]);
                return g.t = l, g
            },
            Se = function(l, x, u) {
                for (var g = [], C = l.length, R = u ? 8 : 0, k; R < C; R += 2) k = l[R], g.push(k, k in x ? x[k] : l[R + 1]);
                return g.t = l.t, g
            },
            h = {
                left: 0,
                top: 0
            },
            Pe = function(l, x, u, g, C, R, k, Y, le, pe, Ve, oe, B, ie) {
                wi(l) && (l = l(Y)), ot(l) && l.substr(0, 3) === "max" && (l = oe + (l.charAt(4) === "=" ? as("0" + l.substr(3), u) : 0));
                var yt = B ? B.time() : 0,
                    Ge, pt, st;
                if (B && B.seek(0), isNaN(l) || (l = +l), bi(l)) B && (l = ae.utils.mapRange(B.scrollTrigger.start, B.scrollTrigger.end, 0, oe, l)), k && An(k, u, g, !0);
                else {
                    wi(x) && (x = x(Y));
                    var At = (l || "0").split(" "),
                        _e, Ae, _t, ge;
                    st = bt(x, Y) || Tt, _e = mt(st) || {}, (!_e || !_e.left && !_e.top) && kt(st).display === "none" && (ge = st.style.display, st.style.display = "block", _e = mt(st), ge ? st.style.display = ge : st.style.removeProperty("display")), Ae = as(At[0], _e[g.d]), _t = as(At[1] || "0", u), l = _e[g.p] - le[g.p] - pe + Ae + C - _t, k && An(k, _t, g, u - _t < 20 || k._isStart && _t > 20), u -= u - _t
                }
                if (ie && (Y[ie] = l || -.001, l < 0 && (l = 0)), R) {
                    var wt = l + u,
                        fi = R._isStart;
                    Ge = "scroll" + g.d2, An(R, wt, g, fi && wt > 20 || !fi && (Ve ? Math.max(Tt[Ge], Ri[Ge]) : R.parentNode[Ge]) <= wt + 1), Ve && (le = mt(k), Ve && (R.style[g.op.p] = le[g.op.p] - g.op.m - R._offset + Qe))
                }
                return B && st && (Ge = mt(st), B.seek(oe), pt = mt(st), B._caScrollDist = Ge[g.p] - pt[g.p], l = l / B._caScrollDist * oe), B && B.seek(yt), B ? l : Math.round(l)
            },
            nt = /(webkit|moz|length|cssText|inset)/i,
            ri = function(l, x, u, g) {
                if (l.parentNode !== x) {
                    var C = l.style,
                        R, k;
                    if (x === Tt) {
                        l._stOrig = C.cssText, k = kt(l);
                        for (R in k) !+R && !nt.test(R) && k[R] && typeof C[R] == "string" && R !== "0" && (C[R] = k[R]);
                        C.top = u, C.left = g
                    } else C.cssText = l._stOrig;
                    ae.core.getCache(l).uncache = 1, x.appendChild(l)
                }
            },
            ze = function(l, x, u) {
                var g = x,
                    C = g;
                return function(R) {
                    var k = Math.round(l());
                    return k !== g && k !== C && Math.abs(k - g) > 3 && Math.abs(k - C) > 3 && (R = k, u && u()), C = g, g = R, R
                }
            },
            xt = function(l, x, u) {
                var g = {};
                g[x.p] = "+=" + u, ae.set(l, g)
            },
            ve = function(l, x) {
                var u = Gt(l, x),
                    g = "_scroll" + x.p2,
                    C = function R(k, Y, le, pe, Ve) {
                        var oe = R.tween,
                            B = Y.onComplete,
                            ie = {};
                        le = le || u();
                        var yt = ze(u, le, function() {
                            oe.kill(), R.tween = 0
                        });
                        return Ve = pe && Ve || 0, pe = pe || k - le, oe && oe.kill(), Y[g] = k, Y.inherit = !1, Y.modifiers = ie, ie[g] = function() {
                            return yt(le + pe * oe.ratio + Ve * oe.ratio * oe.ratio)
                        }, Y.onUpdate = function() {
                            z.cache++, R.tween && v()
                        }, Y.onComplete = function() {
                            R.tween = 0, B && B.call(oe)
                        }, oe = R.tween = ae.to(l, Y), oe
                    };
                return l[g] = u, u.wheelHandler = function() {
                    return C.tween && C.tween.kill() && (C.tween = 0)
                }, Rt(l, "wheel", u.wheelHandler), ee.isTouch && Rt(l, "touchmove", u.wheelHandler), C
            },
            ee = function() {
                function M(x, u) {
                    pr || M.register(ae) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Zn(this), this.init(x, u)
                }
                var l = M.prototype;
                return l.init = function(u, g) {
                    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Xt) {
                        this.update = this.refresh = this.kill = Pi;
                        return
                    }
                    u = mi(ot(u) || bi(u) || u.nodeType ? {
                        trigger: u
                    } : u, On);
                    var C = u,
                        R = C.onUpdate,
                        k = C.toggleClass,
                        Y = C.id,
                        le = C.onToggle,
                        pe = C.onRefresh,
                        Ve = C.scrub,
                        oe = C.trigger,
                        B = C.pin,
                        ie = C.pinSpacing,
                        yt = C.invalidateOnRefresh,
                        Ge = C.anticipatePin,
                        pt = C.onScrubComplete,
                        st = C.onSnapComplete,
                        At = C.once,
                        _e = C.snap,
                        Ae = C.pinReparent,
                        _t = C.pinSpacer,
                        ge = C.containerAnimation,
                        wt = C.fastScrollEnd,
                        fi = C.preventOverlaps,
                        xe = u.horizontal || u.containerAnimation && u.horizontal !== !1 ? Fe : Ke,
                        qt = !Ve && Ve !== 0,
                        he = bt(u.scroller || Re),
                        qi = ae.core.getCache(he),
                        Lt = Ji(he),
                        ni = ("pinType" in u ? u.pinType : Le(he, "pinType") || Lt && "fixed") === "fixed",
                        Pt = [u.onEnter, u.onLeave, u.onEnterBack, u.onLeaveBack],
                        $e = qt && u.toggleActions.split(" "),
                        zt = "markers" in u ? u.markers : On.markers,
                        ye = Lt ? 0 : parseFloat(kt(he)["border" + xe.p2 + rt]) || 0,
                        y = this,
                        U = u.onRefreshInit && function() {
                            return u.onRefreshInit(y)
                        },
                        ue = Ms(he, Lt, xe),
                        qe = kn(he, Lt),
                        Ze = 0,
                        vi = 0,
                        Kt = 0,
                        Wt = Gt(he, xe),
                        Vt, Nt, zi, lt, Ni, ut, Qt, fe, T, w, O, H, te, j, Oe, me, ft, ke, tt, Be, Dt, si, oi, er, je, Bt, gr, Si, us, _n, Ln, it, zn, Dr, Er, Or, Nn, fs, rn;
                    if (y._startClamp = y._endClamp = !1, y._dir = xe, Ge *= 45, y.scroller = he, y.scroll = ge ? ge.time.bind(ge) : Wt, lt = Wt(), y.vars = u, g = g || u.animation, "refreshPriority" in u && (bs = 1, u.refreshPriority === -9999 && (c = y)), qi.tweenScroll = qi.tweenScroll || {
                            top: ve(he, Ke),
                            left: ve(he, Fe)
                        }, y.tweenTo = Vt = qi.tweenScroll[xe.p], y.scrubDuration = function(se) {
                            zn = bi(se) && se, zn ? it ? it.duration(se) : it = ae.to(g, {
                                ease: "expo",
                                totalProgress: "+=0",
                                inherit: !1,
                                duration: zn,
                                paused: !0,
                                onComplete: function() {
                                    return pt && pt(y)
                                }
                            }) : (it && it.progress(1).kill(), it = 0)
                        }, g && (g.vars.lazy = !1, g._initted && !y.isReverted || g.vars.immediateRender !== !1 && u.immediateRender !== !1 && g.duration() && g.render(0, !0, !0), y.animation = g.pause(), g.scrollTrigger = y, y.scrubDuration(Ve), _n = 0, Y || (Y = g.vars.id)), _e && ((!Kr(_e) || _e.push) && (_e = {
                            snapTo: _e
                        }), "scrollBehavior" in Tt.style && ae.set(Lt ? [Tt, Ri] : he, {
                            scrollBehavior: "auto"
                        }), z.forEach(function(se) {
                            return wi(se) && se.target === (Lt ? vt.scrollingElement || Ri : he) && (se.smooth = !1)
                        }), zi = wi(_e.snapTo) ? _e.snapTo : _e.snapTo === "labels" ? Pn(g) : _e.snapTo === "labelsDirectional" ? so(g) : _e.directional !== !1 ? function(se, He) {
                            return cn(_e.snapTo)(se, gi() - vi < 500 ? 0 : He.direction)
                        } : ae.utils.snap(_e.snapTo), Dr = _e.duration || {
                            min: .1,
                            max: 2
                        }, Dr = Kr(Dr) ? un(Dr.min, Dr.max) : un(Dr, Dr), Er = ae.delayedCall(_e.delay || zn / 2 || .1, function() {
                            var se = Wt(),
                                He = gi() - vi < 500,
                                De = Vt.tween;
                            if ((He || Math.abs(y.getVelocity()) < 10) && !De && !Ur && Ze !== se) {
                                var Ye = (se - ut) / j,
                                    ki = g && !qt ? g.totalProgress() : Ye,
                                    ct = He ? 0 : (ki - Ln) / (gi() - Zi) * 1e3 || 0,
                                    ci = ae.utils.clamp(-Ye, 1 - Ye, Cr(ct / 2) * ct / .185),
                                    Fi = Ye + (_e.inertia === !1 ? 0 : ci),
                                    ai, Zt, Ft = _e,
                                    Rr = Ft.onStart,
                                    ei = Ft.onInterrupt,
                                    lr = Ft.onComplete;
                                if (ai = zi(Fi, y), bi(ai) || (ai = Fi), Zt = Math.round(ut + ai * j), se <= Qt && se >= ut && Zt !== se) {
                                    if (De && !De._initted && De.data <= Cr(Zt - se)) return;
                                    _e.inertia === !1 && (ci = ai - Ye), Vt(Zt, {
                                        duration: Dr(Cr(Math.max(Cr(Fi - ki), Cr(ai - ki)) * .185 / ct / .05 || 0)),
                                        ease: _e.ease || "power3",
                                        data: Cr(Zt - se),
                                        onInterrupt: function() {
                                            return Er.restart(!0) && ei && ei(y)
                                        },
                                        onComplete: function() {
                                            y.update(), Ze = Wt(), g && (it ? it.resetTo("totalProgress", ai, g._tTime / g._tDur) : g.progress(ai)), _n = Ln = g && !qt ? g.totalProgress() : y.progress, st && st(y), lr && lr(y)
                                        }
                                    }, se, ci * j, Zt - se - ci * j), Rr && Rr(y, Vt.tween)
                                }
                            } else y.isActive && Ze !== se && Er.restart(!0)
                        }).pause()), Y && (hn[Y] = y), oe = y.trigger = bt(oe || B !== !0 && B), rn = oe && oe._gsap && oe._gsap.stRevert, rn && (rn = rn(y)), B = B === !0 ? oe : bt(B), ot(k) && (k = {
                            targets: oe,
                            className: k
                        }), B && (ie === !1 || ie === Li || (ie = !ie && B.parentNode && B.parentNode.style && kt(B.parentNode).display === "flex" ? !1 : Ot), y.pin = B, Nt = ae.core.getCache(B), Nt.spacer ? Oe = Nt.pinState : (_t && (_t = bt(_t), _t && !_t.nodeType && (_t = _t.current || _t.nativeElement), Nt.spacerIsNative = !!_t, _t && (Nt.spacerState = we(_t))), Nt.spacer = ke = _t || vt.createElement("div"), ke.classList.add("pin-spacer"), Y && ke.classList.add("pin-spacer-" + Y), Nt.pinState = Oe = we(B)), u.force3D !== !1 && ae.set(B, {
                            force3D: !0
                        }), y.spacer = ke = Nt.spacer, us = kt(B), er = us[ie + xe.os2], Be = ae.getProperty(B), Dt = ae.quickSetter(B, xe.a, Qe), Z(B, ke, us), ft = we(B)), zt) {
                        H = Kr(zt) ? mi(zt, En) : En, w = Pr("scroller-start", Y, he, xe, H, 0), O = Pr("scroller-end", Y, he, xe, H, 0, w), tt = w["offset" + xe.op.d2];
                        var Fs = bt(Le(he, "content") || he);
                        fe = this.markerStart = Pr("start", Y, Fs, xe, H, tt, 0, ge), T = this.markerEnd = Pr("end", Y, Fs, xe, H, tt, 0, ge), ge && (fs = ae.quickSetter([fe, T], xe.a, Qe)), !ni && !($.length && Le(he, "fixedMarkers") === !0) && (ss(Lt ? Tt : he), ae.set([w, O], {
                            force3D: !0
                        }), Bt = ae.quickSetter(w, xe.a, Qe), Si = ae.quickSetter(O, xe.a, Qe))
                    }
                    if (ge) {
                        var Xe = ge.vars.onUpdate,
                            Ee = ge.vars.onUpdateParams;
                        ge.eventCallback("onUpdate", function() {
                            y.update(0, 0, 1), Xe && Xe.apply(ge, Ee || [])
                        })
                    }
                    if (y.previous = function() {
                            return Ue[Ue.indexOf(y) - 1]
                        }, y.next = function() {
                            return Ue[Ue.indexOf(y) + 1]
                        }, y.revert = function(se, He) {
                            if (!He) return y.kill(!0);
                            var De = se !== !1 || !y.enabled,
                                Ye = St;
                            De !== y.isReverted && (De && (Or = Math.max(Wt(), y.scroll.rec || 0), Kt = y.progress, Nn = g && g.progress()), fe && [fe, T, w, O].forEach(function(ki) {
                                return ki.style.display = De ? "none" : "block"
                            }), De && (St = y, y.update(De)), B && (!Ae || !y.isActive) && (De ? A(B, ke, Oe) : Z(B, ke, kt(B), je)), De || y.update(De), St = Ye, y.isReverted = De)
                        }, y.refresh = function(se, He, De, Ye) {
                            if (!((St || !y.enabled) && !He)) {
                                if (B && se && ji) {
                                    Rt(M, "scrollEnd", As);
                                    return
                                }!Di && U && U(y), St = y, Vt.tween && !De && (Vt.tween.kill(), Vt.tween = 0), it && it.pause(), yt && g && g.revert({
                                    kill: !1
                                }).invalidate(), y.isReverted || y.revert(!0, !0), y._subPinOffset = !1;
                                var ki = ue(),
                                    ct = qe(),
                                    ci = ge ? ge.duration() : yi(he, xe),
                                    Fi = j <= .01,
                                    ai = 0,
                                    Zt = Ye || 0,
                                    Ft = Kr(De) ? De.end : u.end,
                                    Rr = u.endTrigger || oe,
                                    ei = Kr(De) ? De.start : u.start || (u.start === 0 || !oe ? 0 : B ? "0 0" : "0 100%"),
                                    lr = y.pinnedContainer = u.pinnedContainer && bt(u.pinnedContainer, y),
                                    Fr = oe && Math.max(0, Ue.indexOf(y)) || 0,
                                    Ei = Fr,
                                    Oi, Ii, Fn, lo, Bi, xi, Ir, Do, ya, Is, Br, Bs, uo;
                                for (zt && Kr(De) && (Bs = ae.getProperty(w, xe.p), uo = ae.getProperty(O, xe.p)); Ei--;) xi = Ue[Ei], xi.end || xi.refresh(0, 1) || (St = y), Ir = xi.pin, Ir && (Ir === oe || Ir === B || Ir === lr) && !xi.isReverted && (Is || (Is = []), Is.unshift(xi), xi.revert(!0, !0)), xi !== Ue[Ei] && (Fr--, Ei--);
                                for (wi(ei) && (ei = ei(y)), ei = Jt(ei, "start", y), ut = Pe(ei, oe, ki, xe, Wt(), fe, w, y, ct, ye, ni, ci, ge, y._startClamp && "_startClamp") || (B ? -.001 : 0), wi(Ft) && (Ft = Ft(y)), ot(Ft) && !Ft.indexOf("+=") && (~Ft.indexOf(" ") ? Ft = (ot(ei) ? ei.split(" ")[0] : "") + Ft : (ai = as(Ft.substr(2), ki), Ft = ot(ei) ? ei : (ge ? ae.utils.mapRange(0, ge.duration(), ge.scrollTrigger.start, ge.scrollTrigger.end, ut) : ut) + ai, Rr = oe)), Ft = Jt(Ft, "end", y), Qt = Math.max(ut, Pe(Ft || (Rr ? "100% 0" : ci), Rr, ki, xe, Wt() + ai, T, O, y, ct, ye, ni, ci, ge, y._endClamp && "_endClamp")) || -.001, ai = 0, Ei = Fr; Ei--;) xi = Ue[Ei], Ir = xi.pin, Ir && xi.start - xi._pinPush <= ut && !ge && xi.end > 0 && (Oi = xi.end - (y._startClamp ? Math.max(0, xi.start) : xi.start), (Ir === oe && xi.start - xi._pinPush < ut || Ir === lr) && isNaN(ei) && (ai += Oi * (1 - xi.progress)), Ir === B && (Zt += Oi));
                                if (ut += ai, Qt += ai, y._startClamp && (y._startClamp += ai), y._endClamp && !Di && (y._endClamp = Qt || -.001, Qt = Math.min(Qt, yi(he, xe))), j = Qt - ut || (ut -= .01) && .001, Fi && (Kt = ae.utils.clamp(0, 1, ae.utils.normalize(ut, Qt, Or))), y._pinPush = Zt, fe && ai && (Oi = {}, Oi[xe.a] = "+=" + ai, lr && (Oi[xe.p] = "-=" + Wt()), ae.set([fe, T], Oi)), B && !(es && y.end >= yi(he, xe))) Oi = kt(B), lo = xe === Ke, Fn = Wt(), si = parseFloat(Be(xe.a)) + Zt, !ci && Qt > 1 && (Br = (Lt ? vt.scrollingElement || Ri : he).style, Br = {
                                    style: Br,
                                    value: Br["overflow" + xe.a.toUpperCase()]
                                }, Lt && kt(Tt)["overflow" + xe.a.toUpperCase()] !== "scroll" && (Br.style["overflow" + xe.a.toUpperCase()] = "scroll")), Z(B, ke, Oi), ft = we(B), Ii = mt(B, !0), Do = ni && Gt(he, lo ? Fe : Ke)(), ie ? (je = [ie + xe.os2, j + Zt + Qe], je.t = ke, Ei = ie === Ot ? ar(B, xe) + j + Zt : 0, Ei && (je.push(xe.d, Ei + Qe), ke.style.flexBasis !== "auto" && (ke.style.flexBasis = Ei + Qe)), de(je), lr && Ue.forEach(function(Ys) {
                                    Ys.pin === lr && Ys.vars.pinSpacing !== !1 && (Ys._subPinOffset = !0)
                                }), ni && Wt(Or)) : (Ei = ar(B, xe), Ei && ke.style.flexBasis !== "auto" && (ke.style.flexBasis = Ei + Qe)), ni && (Bi = {
                                    top: Ii.top + (lo ? Fn - ut : Do) + Qe,
                                    left: Ii.left + (lo ? Do : Fn - ut) + Qe,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                }, Bi[Mr] = Bi["max" + rt] = Math.ceil(Ii.width) + Qe, Bi[Zr] = Bi["max" + Mn] = Math.ceil(Ii.height) + Qe, Bi[Li] = Bi[Li + jr] = Bi[Li + Gi] = Bi[Li + Ui] = Bi[Li + Ie] = "0", Bi[Ot] = Oi[Ot], Bi[Ot + jr] = Oi[Ot + jr], Bi[Ot + Gi] = Oi[Ot + Gi], Bi[Ot + Ui] = Oi[Ot + Ui], Bi[Ot + Ie] = Oi[Ot + Ie], me = Se(Oe, Bi, Ae), Di && Wt(0)), g ? (ya = g._initted, Tr(1), g.render(g.duration(), !0, !0), oi = Be(xe.a) - si + j + Zt, gr = Math.abs(j - oi) > 1, ni && gr && me.splice(me.length - 2, 2), g.render(0, !0, !0), ya || g.invalidate(!0), g.parent || g.totalTime(g.totalTime()), Tr(0)) : oi = j, Br && (Br.value ? Br.style["overflow" + xe.a.toUpperCase()] = Br.value : Br.style.removeProperty("overflow-" + xe.a));
                                else if (oe && Wt() && !ge)
                                    for (Ii = oe.parentNode; Ii && Ii !== Tt;) Ii._pinOffset && (ut -= Ii._pinOffset, Qt -= Ii._pinOffset), Ii = Ii.parentNode;
                                Is && Is.forEach(function(Ys) {
                                    return Ys.revert(!1, !0)
                                }), y.start = ut, y.end = Qt, lt = Ni = Di ? Or : Wt(), !ge && !Di && (lt < Or && Wt(Or), y.scroll.rec = 0), y.revert(!1, !0), vi = gi(), Er && (Ze = -1, Er.restart(!0)), St = 0, g && qt && (g._initted || Nn) && g.progress() !== Nn && g.progress(Nn || 0, !0).render(g.time(), !0, !0), (Fi || Kt !== y.progress || ge || yt) && (g && !qt && g.totalProgress(ge && ut < -.001 && !Kt ? ae.utils.normalize(ut, Qt, 0) : Kt, !0), y.progress = Fi || (lt - ut) / j === Kt ? 0 : Kt), B && ie && (ke._pinOffset = Math.round(y.progress * oi)), it && it.invalidate(), isNaN(Bs) || (Bs -= ae.getProperty(w, xe.p), uo -= ae.getProperty(O, xe.p), xt(w, xe, Bs), xt(fe, xe, Bs - (Ye || 0)), xt(O, xe, uo), xt(T, xe, uo - (Ye || 0))), Fi && !Di && y.update(), pe && !Di && !te && (te = !0, pe(y), te = !1)
                            }
                        }, y.getVelocity = function() {
                            return (Wt() - Ni) / (gi() - Zi) * 1e3 || 0
                        }, y.endAnimation = function() {
                            Qr(y.callbackAnimation), g && (it ? it.progress(1) : g.paused() ? qt || Qr(g, y.direction < 0, 1) : Qr(g, g.reversed()))
                        }, y.labelToScroll = function(se) {
                            return g && g.labels && (ut || y.refresh() || ut) + g.labels[se] / g.duration() * j || 0
                        }, y.getTrailing = function(se) {
                            var He = Ue.indexOf(y),
                                De = y.direction > 0 ? Ue.slice(0, He).reverse() : Ue.slice(He + 1);
                            return (ot(se) ? De.filter(function(Ye) {
                                return Ye.vars.preventOverlaps === se
                            }) : De).filter(function(Ye) {
                                return y.direction > 0 ? Ye.end <= ut : Ye.start >= Qt
                            })
                        }, y.update = function(se, He, De) {
                            if (!(ge && !De && !se)) {
                                var Ye = Di === !0 ? Or : y.scroll(),
                                    ki = se ? 0 : (Ye - ut) / j,
                                    ct = ki < 0 ? 0 : ki > 1 ? 1 : ki || 0,
                                    ci = y.progress,
                                    Fi, ai, Zt, Ft, Rr, ei, lr, Fr;
                                if (He && (Ni = lt, lt = ge ? Wt() : Ye, _e && (Ln = _n, _n = g && !qt ? g.totalProgress() : ct)), Ge && B && !St && !is && ji && (!ct && ut < Ye + (Ye - Ni) / (gi() - Zi) * Ge ? ct = 1e-4 : ct === 1 && Qt > Ye + (Ye - Ni) / (gi() - Zi) * Ge && (ct = .9999)), ct !== ci && y.enabled) {
                                    if (Fi = y.isActive = !!ct && ct < 1, ai = !!ci && ci < 1, ei = Fi !== ai, Rr = ei || !!ct != !!ci, y.direction = ct > ci ? 1 : -1, y.progress = ct, Rr && !St && (Zt = ct && !ci ? 0 : ct === 1 ? 1 : ci === 1 ? 2 : 3, qt && (Ft = !ei && $e[Zt + 1] !== "none" && $e[Zt + 1] || $e[Zt], Fr = g && (Ft === "complete" || Ft === "reset" || Ft in g))), fi && (ei || Fr) && (Fr || Ve || !g) && (wi(fi) ? fi(y) : y.getTrailing(fi).forEach(function(Fn) {
                                            return Fn.endAnimation()
                                        })), qt || (it && !St && !is ? (it._dp._time - it._start !== it._time && it.render(it._dp._time - it._start), it.resetTo ? it.resetTo("totalProgress", ct, g._tTime / g._tDur) : (it.vars.totalProgress = ct, it.invalidate().restart())) : g && g.totalProgress(ct, !!(St && (vi || se)))), B) {
                                        if (se && ie && (ke.style[ie + xe.os2] = er), !ni) Dt(_r(si + oi * ct));
                                        else if (Rr) {
                                            if (lr = !se && ct > ci && Qt + 1 > Ye && Ye + 1 >= yi(he, xe), Ae)
                                                if (!se && (Fi || lr)) {
                                                    var Ei = mt(B, !0),
                                                        Oi = Ye - ut;
                                                    ri(B, Tt, Ei.top + (xe === Ke ? Oi : 0) + Qe, Ei.left + (xe === Ke ? 0 : Oi) + Qe)
                                                } else ri(B, ke);
                                            de(Fi || lr ? me : ft), gr && ct < 1 && Fi || Dt(si + (ct === 1 && !lr ? oi : 0))
                                        }
                                    }
                                    _e && !Vt.tween && !St && !is && Er.restart(!0), k && (ei || At && ct && (ct < 1 || !ts)) && ln(k.targets).forEach(function(Fn) {
                                        return Fn.classList[Fi || At ? "add" : "remove"](k.className)
                                    }), R && !qt && !se && R(y), Rr && !St ? (qt && (Fr && (Ft === "complete" ? g.pause().totalProgress(1) : Ft === "reset" ? g.restart(!0).pause() : Ft === "restart" ? g.restart(!0) : g[Ft]()), R && R(y)), (ei || !ts) && (le && ei && Ps(y, le), Pt[Zt] && Ps(y, Pt[Zt]), At && (ct === 1 ? y.kill(!1, 1) : Pt[Zt] = 0), ei || (Zt = ct === 1 ? 1 : 3, Pt[Zt] && Ps(y, Pt[Zt]))), wt && !Fi && Math.abs(y.getVelocity()) > (bi(wt) ? wt : 2500) && (Qr(y.callbackAnimation), it ? it.progress(1) : Qr(g, Ft === "reverse" ? 1 : !ct, 1))) : qt && R && !St && R(y)
                                }
                                if (Si) {
                                    var Ii = ge ? Ye / ge.duration() * (ge._caScrollDist || 0) : Ye;
                                    Bt(Ii + (w._isFlipped ? 1 : 0)), Si(Ii)
                                }
                                fs && fs(-Ye / ge.duration() * (ge._caScrollDist || 0))
                            }
                        }, y.enable = function(se, He) {
                            y.enabled || (y.enabled = !0, Rt(he, "resize", en), Lt || Rt(he, "scroll", Jr), U && Rt(M, "refreshInit", U), se !== !1 && (y.progress = Kt = 0, lt = Ni = Ze = Wt()), He !== !1 && y.refresh())
                        }, y.getTween = function(se) {
                            return se && Vt ? Vt.tween : it
                        }, y.setPositions = function(se, He, De, Ye) {
                            if (ge) {
                                var ki = ge.scrollTrigger,
                                    ct = ge.duration(),
                                    ci = ki.end - ki.start;
                                se = ki.start + ci * se / ct, He = ki.start + ci * He / ct
                            }
                            y.refresh(!1, !1, {
                                start: Vi(se, De && !!y._startClamp),
                                end: Vi(He, De && !!y._endClamp)
                            }, Ye), y.update()
                        }, y.adjustPinSpacing = function(se) {
                            if (je && se) {
                                var He = je.indexOf(xe.d) + 1;
                                je[He] = parseFloat(je[He]) + se + Qe, je[1] = parseFloat(je[1]) + se + Qe, de(je)
                            }
                        }, y.disable = function(se, He) {
                            if (y.enabled && (se !== !1 && y.revert(!0, !0), y.enabled = y.isActive = !1, He || it && it.pause(), Or = 0, Nt && (Nt.uncache = 1), U && di(M, "refreshInit", U), Er && (Er.pause(), Vt.tween && Vt.tween.kill() && (Vt.tween = 0)), !Lt)) {
                                for (var De = Ue.length; De--;)
                                    if (Ue[De].scroller === he && Ue[De] !== y) return;
                                di(he, "resize", en), Lt || di(he, "scroll", Jr)
                            }
                        }, y.kill = function(se, He) {
                            y.disable(se, He), it && !He && it.kill(), Y && delete hn[Y];
                            var De = Ue.indexOf(y);
                            De >= 0 && Ue.splice(De, 1), De === _i && _ > 0 && _i--, De = 0, Ue.forEach(function(Ye) {
                                return Ye.scroller === y.scroller && (De = 1)
                            }), De || Di || (y.scroll.rec = 0), g && (g.scrollTrigger = null, se && g.revert({
                                kill: !1
                            }), He || g.kill()), fe && [fe, T, w, O].forEach(function(Ye) {
                                return Ye.parentNode && Ye.parentNode.removeChild(Ye)
                            }), c === y && (c = 0), B && (Nt && (Nt.uncache = 1), De = 0, Ue.forEach(function(Ye) {
                                return Ye.pin === B && De++
                            }), De || (Nt.spacer = 0)), u.onKill && u.onKill(y)
                        }, Ue.push(y), y.enable(!1, !1), rn && rn(y), g && g.add && !j) {
                        var gt = y.update;
                        y.update = function() {
                            y.update = gt, ut || Qt || y.refresh()
                        }, ae.delayedCall(.01, y.update), j = .01, ut = Qt = 0
                    } else y.refresh();
                    B && ao()
                }, M.register = function(u) {
                    return pr || (ae = u || ks(), Ss() && window.document && M.enable(), pr = Xt), pr
                }, M.defaults = function(u) {
                    if (u)
                        for (var g in u) On[g] = u[g];
                    return On
                }, M.disable = function(u, g) {
                    Xt = 0, Ue.forEach(function(R) {
                        return R[g ? "kill" : "disable"](u)
                    }), di(Re, "wheel", Jr), di(vt, "scroll", Jr), clearInterval(Ar), di(vt, "touchcancel", Pi), di(Tt, "touchstart", Pi), Dn(di, vt, "pointerdown,touchstart,mousedown", ro), Dn(di, vt, "pointerup,touchend,mouseup", Ts), Gr.kill(), kr(di);
                    for (var C = 0; C < z.length; C += 3) os(di, z[C], z[C + 1]), os(di, z[C], z[C + 2])
                }, M.enable = function() {
                    if (Re = window, vt = document, Ri = vt.documentElement, Tt = vt.body, ae && (ln = ae.utils.toArray, un = ae.utils.clamp, Zn = ae.core.context || Pi, Tr = ae.core.suppressOverwrites || Pi, zr = Re.history.scrollRestoration || "auto", o = Re.pageYOffset, ae.core.globals("ScrollTrigger", M), Tt)) {
                        Xt = 1, Ai = document.createElement("div"), Ai.style.height = "100vh", Ai.style.position = "absolute", Ns(), Mo(), Et.register(ae), M.isTouch = Et.isTouch, Lr = Et.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Sr = Et.isTouch === 1, Rt(Re, "wheel", Jr), Qn = [Re, vt, Ri, Tt], ae.matchMedia ? (M.matchMedia = function(Y) {
                            var le = ae.matchMedia(),
                                pe;
                            for (pe in Y) le.add(pe, Y[pe]);
                            return le
                        }, ae.addEventListener("matchMediaInit", function() {
                            return ls()
                        }), ae.addEventListener("matchMediaRevert", function() {
                            return Ls()
                        }), ae.addEventListener("matchMedia", function() {
                            F(0, 1), Ti("matchMedia")
                        }), ae.matchMedia("(orientation: portrait)", function() {
                            return Rs(), Rs
                        })) : console.warn("Requires GSAP 3.11.0 or later"), Rs(), Rt(vt, "scroll", Jr);
                        var u = Tt.style,
                            g = u.borderTopStyle,
                            C = ae.core.Animation.prototype,
                            R, k;
                        for (C.revert || Object.defineProperty(C, "revert", {
                                value: function() {
                                    return this.time(-.01, !0)
                                }
                            }), u.borderTopStyle = "solid", R = mt(Tt), Ke.m = Math.round(R.top + Ke.sc()) || 0, Fe.m = Math.round(R.left + Fe.sc()) || 0, g ? u.borderTopStyle = g : u.removeProperty("border-top-style"), Ar = setInterval(oo, 250), ae.delayedCall(.5, function() {
                                return is = 0
                            }), Rt(vt, "touchcancel", Pi), Rt(Tt, "touchstart", Pi), Dn(Rt, vt, "pointerdown,touchstart,mousedown", ro), Dn(Rt, vt, "pointerup,touchend,mouseup", Ts), $r = ae.utils.checkPrefix("transform"), I.push($r), pr = gi(), Gr = ae.delayedCall(.2, F).pause(), br = [vt, "visibilitychange", function() {
                                var Y = Re.innerWidth,
                                    le = Re.innerHeight;
                                vt.hidden ? (wr = Y, fn = le) : (wr !== Y || fn !== le) && en()
                            }, vt, "DOMContentLoaded", F, Re, "load", F, Re, "resize", en], kr(Rt), Ue.forEach(function(Y) {
                                return Y.enable(0, 1)
                            }), k = 0; k < z.length; k += 3) os(di, z[k], z[k + 1]), os(di, z[k], z[k + 2])
                    }
                }, M.config = function(u) {
                    "limitCallbacks" in u && (ts = !!u.limitCallbacks);
                    var g = u.syncInterval;
                    g && clearInterval(Ar) || (Ar = g) && setInterval(oo, g), "ignoreMobileResize" in u && (Sr = M.isTouch === 1 && u.ignoreMobileResize), "autoRefreshEvents" in u && (kr(di) || kr(Rt, u.autoRefreshEvents || "none"), to = (u.autoRefreshEvents + "").indexOf("resize") === -1)
                }, M.scrollerProxy = function(u, g) {
                    var C = bt(u),
                        R = z.indexOf(C),
                        k = Ji(C);
                    ~R && z.splice(R, k ? 6 : 2), g && (k ? $.unshift(Re, g, Tt, g, Ri, g) : $.unshift(C, g))
                }, M.clearMatchMedia = function(u) {
                    Ue.forEach(function(g) {
                        return g._ctx && g._ctx.query === u && g._ctx.kill(!0, !0)
                    })
                }, M.isInViewport = function(u, g, C) {
                    var R = (ot(u) ? bt(u) : u).getBoundingClientRect(),
                        k = R[C ? Mr : Zr] * g || 0;
                    return C ? R.right - k > 0 && R.left + k < Re.innerWidth : R.bottom - k > 0 && R.top + k < Re.innerHeight
                }, M.positionInViewport = function(u, g, C) {
                    ot(u) && (u = bt(u));
                    var R = u.getBoundingClientRect(),
                        k = R[C ? Mr : Zr],
                        Y = g == null ? k / 2 : g in Rn ? Rn[g] * k : ~g.indexOf("%") ? parseFloat(g) * k / 100 : parseFloat(g) || 0;
                    return C ? (R.left + Y) / Re.innerWidth : (R.top + Y) / Re.innerHeight
                }, M.killAll = function(u) {
                    if (Ue.slice(0).forEach(function(C) {
                            return C.vars.id !== "ScrollSmoother" && C.kill()
                        }), u !== !0) {
                        var g = Nr.killAll || [];
                        Nr = {}, g.forEach(function(C) {
                            return C()
                        })
                    }
                }, M
            }();
        ee.version = "3.12.5", ee.saveStyles = function(M) {
            return M ? ln(M).forEach(function(l) {
                if (l && l.style) {
                    var x = $t.indexOf(l);
                    x >= 0 && $t.splice(x, 5), $t.push(l, l.style.cssText, l.getBBox && l.getAttribute("transform"), ae.core.getCache(l), Zn())
                }
            }) : $t
        }, ee.revert = function(M, l) {
            return ls(!M, l)
        }, ee.create = function(M, l) {
            return new ee(M, l)
        }, ee.refresh = function(M) {
            return M ? en() : (pr || ee.register()) && F(!0)
        }, ee.update = function(M) {
            return ++z.cache && v(M === !0 ? 2 : 0)
        }, ee.clearScrollMemory = pn, ee.maxScroll = function(M, l) {
            return yi(M, l ? Fe : Ke)
        }, ee.getScrollFunc = function(M, l) {
            return Gt(bt(M), l ? Fe : Ke)
        }, ee.getById = function(M) {
            return hn[M]
        }, ee.getAll = function() {
            return Ue.filter(function(M) {
                return M.vars.id !== "ScrollSmoother"
            })
        }, ee.isScrolling = function() {
            return !!ji
        }, ee.snapDirectional = cn, ee.addEventListener = function(M, l) {
            var x = Nr[M] || (Nr[M] = []);
            ~x.indexOf(l) || x.push(l)
        }, ee.removeEventListener = function(M, l) {
            var x = Nr[M],
                u = x && x.indexOf(l);
            u >= 0 && x.splice(u, 1)
        }, ee.batch = function(M, l) {
            var x = [],
                u = {},
                g = l.interval || .016,
                C = l.batchMax || 1e9,
                R = function(le, pe) {
                    var Ve = [],
                        oe = [],
                        B = ae.delayedCall(g, function() {
                            pe(Ve, oe), Ve = [], oe = []
                        }).pause();
                    return function(ie) {
                        Ve.length || B.restart(!0), Ve.push(ie.trigger), oe.push(ie), C <= Ve.length && B.progress(1)
                    }
                },
                k;
            for (k in l) u[k] = k.substr(0, 2) === "on" && wi(l[k]) && k !== "onRefreshInit" ? R(k, l[k]) : l[k];
            return wi(C) && (C = C(), Rt(ee, "refresh", function() {
                return C = l.batchMax()
            })), ln(M).forEach(function(Y) {
                var le = {};
                for (k in u) le[k] = u[k];
                le.trigger = Y, x.push(ee.create(le))
            }), x
        };
        var at = function(l, x, u, g) {
                return x > g ? l(g) : x < 0 && l(0), u > g ? (g - x) / (u - x) : u < 0 ? x / (x - u) : 1
            },
            Ct = function M(l, x) {
                x === !0 ? l.style.removeProperty("touch-action") : l.style.touchAction = x === !0 ? "auto" : x ? "pan-" + x + (Et.isTouch ? " pinch-zoom" : "") : "none", l === Ri && M(Tt, x)
            },
            Mt = {
                auto: 1,
                scroll: 1
            },
            re = function(l) {
                var x = l.event,
                    u = l.target,
                    g = l.axis,
                    C = (x.changedTouches ? x.changedTouches[0] : x).target,
                    R = C._gsap || ae.core.getCache(C),
                    k = gi(),
                    Y;
                if (!R._isScrollT || k - R._isScrollT > 2e3) {
                    for (; C && C !== Tt && (C.scrollHeight <= C.clientHeight && C.scrollWidth <= C.clientWidth || !(Mt[(Y = kt(C)).overflowY] || Mt[Y.overflowX]));) C = C.parentNode;
                    R._isScroll = C && C !== u && !Ji(C) && (Mt[(Y = kt(C)).overflowY] || Mt[Y.overflowX]), R._isScrollT = k
                }(R._isScroll || g === "x") && (x.stopPropagation(), x._gsapAllow = !0)
            },
            K = function(l, x, u, g) {
                return Et.create({
                    target: l,
                    capture: !0,
                    debounce: !1,
                    lockAxis: !0,
                    type: x,
                    onWheel: g = g && re,
                    onPress: g,
                    onDrag: g,
                    onScroll: g,
                    onEnable: function() {
                        return u && Rt(vt, Et.eventTypes[0], et, !1, !0)
                    },
                    onDisable: function() {
                        return di(vt, Et.eventTypes[0], et, !0)
                    }
                })
            },
            Ht = /(input|label|select|textarea)/i,
            be, et = function(l) {
                var x = Ht.test(l.target.tagName);
                (x || be) && (l._gsapAllow = !0, be = x)
            },
            Ne = function(l) {
                Kr(l) || (l = {}), l.preventDefault = l.isNormalizer = l.allowClicks = !0, l.type || (l.type = "wheel,touch"), l.debounce = !!l.debounce, l.id = l.id || "normalizer";
                var x = l,
                    u = x.normalizeScrollX,
                    g = x.momentum,
                    C = x.allowNestedScroll,
                    R = x.onRelease,
                    k, Y, le = bt(l.target) || Ri,
                    pe = ae.core.globals().ScrollSmoother,
                    Ve = pe && pe.get(),
                    oe = Lr && (l.content && bt(l.content) || Ve && l.content !== !1 && !Ve.smooth() && Ve.content()),
                    B = Gt(le, Ke),
                    ie = Gt(le, Fe),
                    yt = 1,
                    Ge = (Et.isTouch && Re.visualViewport ? Re.visualViewport.scale * Re.visualViewport.width : Re.outerWidth) / Re.innerWidth,
                    pt = 0,
                    st = wi(g) ? function() {
                        return g(k)
                    } : function() {
                        return g || 2.8
                    },
                    At, _e, Ae = K(le, l.type, !0, C),
                    _t = function() {
                        return _e = !1
                    },
                    ge = Pi,
                    wt = Pi,
                    fi = function() {
                        Y = yi(le, Ke), wt = un(Lr ? 1 : 0, Y), u && (ge = un(0, yi(le, Fe))), At = tn
                    },
                    xe = function() {
                        oe._gsap.y = _r(parseFloat(oe._gsap.y) + B.offset) + "px", oe.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(oe._gsap.y) + ", 0, 1)", B.offset = B.cacheID = 0
                    },
                    qt = function() {
                        if (_e) {
                            requestAnimationFrame(_t);
                            var zt = _r(k.deltaY / 2),
                                ye = wt(B.v - zt);
                            if (oe && ye !== B.v + B.offset) {
                                B.offset = ye - B.v;
                                var y = _r((parseFloat(oe && oe._gsap.y) || 0) - B.offset);
                                oe.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)", oe._gsap.y = y + "px", B.cacheID = z.cache, v()
                            }
                            return !0
                        }
                        B.offset && xe(), _e = !0
                    },
                    he, qi, Lt, ni, Pt = function() {
                        fi(), he.isActive() && he.vars.scrollY > Y && (B() > Y ? he.progress(1) && B(Y) : he.resetTo("scrollY", Y))
                    };
                return oe && ae.set(oe, {
                    y: "+=0"
                }), l.ignoreCheck = function($e) {
                    return Lr && $e.type === "touchmove" && qt() || yt > 1.05 && $e.type !== "touchstart" || k.isGesturing || $e.touches && $e.touches.length > 1
                }, l.onPress = function() {
                    _e = !1;
                    var $e = yt;
                    yt = _r((Re.visualViewport && Re.visualViewport.scale || 1) / Ge), he.pause(), $e !== yt && Ct(le, yt > 1.01 ? !0 : u ? !1 : "x"), qi = ie(), Lt = B(), fi(), At = tn
                }, l.onRelease = l.onGestureStart = function($e, zt) {
                    if (B.offset && xe(), !zt) ni.restart(!0);
                    else {
                        z.cache++;
                        var ye = st(),
                            y, U;
                        u && (y = ie(), U = y + ye * .05 * -$e.velocityX / .227, ye *= at(ie, y, U, yi(le, Fe)), he.vars.scrollX = ge(U)), y = B(), U = y + ye * .05 * -$e.velocityY / .227, ye *= at(B, y, U, yi(le, Ke)), he.vars.scrollY = wt(U), he.invalidate().duration(ye).play(.01), (Lr && he.vars.scrollY >= Y || y >= Y - 1) && ae.to({}, {
                            onUpdate: Pt,
                            duration: ye
                        })
                    }
                    R && R($e)
                }, l.onWheel = function() {
                    he._ts && he.pause(), gi() - pt > 1e3 && (At = 0, pt = gi())
                }, l.onChange = function($e, zt, ye, y, U) {
                    if (tn !== At && fi(), zt && u && ie(ge(y[2] === zt ? qi + ($e.startX - $e.x) : ie() + zt - y[1])), ye) {
                        B.offset && xe();
                        var ue = U[2] === ye,
                            qe = ue ? Lt + $e.startY - $e.y : B() + ye - U[1],
                            Ze = wt(qe);
                        ue && qe !== Ze && (Lt += Ze - qe), B(Ze)
                    }(ye || zt) && v()
                }, l.onEnable = function() {
                    Ct(le, u ? !1 : "x"), ee.addEventListener("refresh", Pt), Rt(Re, "resize", Pt), B.smooth && (B.target.style.scrollBehavior = "auto", B.smooth = ie.smooth = !1), Ae.enable()
                }, l.onDisable = function() {
                    Ct(le, !0), di(Re, "resize", Pt), ee.removeEventListener("refresh", Pt), Ae.kill()
                }, l.lockAxis = l.lockAxis !== !1, k = new Et(l), k.iOS = Lr, Lr && !B() && B(1), Lr && ae.ticker.add(Pi), ni = k._dc, he = ae.to(k, {
                    ease: "power4",
                    paused: !0,
                    inherit: !1,
                    scrollX: u ? "+=0.1" : "+=0",
                    scrollY: "+=0.1",
                    modifiers: {
                        scrollY: ze(B, B(), function() {
                            return he.pause()
                        })
                    },
                    onUpdate: v,
                    onComplete: ni.vars.onComplete
                }), k
            };
        ee.sort = function(M) {
            return Ue.sort(M || function(l, x) {
                return (l.vars.refreshPriority || 0) * -1e6 + l.start - (x.start + (x.vars.refreshPriority || 0) * -1e6)
            })
        }, ee.observe = function(M) {
            return new Et(M)
        }, ee.normalizeScroll = function(M) {
            if (typeof M > "u") return Ut;
            if (M === !0 && Ut) return Ut.enable();
            if (M === !1) {
                Ut && Ut.kill(), Ut = M;
                return
            }
            var l = M instanceof Et ? M : Ne(M);
            return Ut && Ut.target === l.target && Ut.kill(), Ji(l.target) && (Ut = l), l
        }, ee.core = {
            _getVelocityProp: Wi,
            _inputObserver: K,
            _scrollers: z,
            _proxies: $,
            bridge: {
                ss: function() {
                    ji || Ti("scrollStart"), ji = gi()
                },
                ref: function() {
                    return St
                }
            }
        }, ks() && ae.registerPlugin(ee), t.ScrollTrigger = ee, t.default = ee, typeof window > "u" || window !== t ? Object.defineProperty(t, "__esModule", {
            value: !0
        }) : delete window.default
    })
})(ta, ta.exports);
var Fl = ta.exports,
    ia = {
        exports: {}
    };
(function(p, e) {
    (function(t, i) {
        i(e)
    })(Fa, function(t) {
        function i(F, o) {
            F.prototype = Object.create(o.prototype), F.prototype.constructor = F, F.__proto__ = o
        }

        function r(F) {
            if (F === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return F
        }
        var n, s, a, f, d, m, S, P, E = "transform",
            N = E + "Origin",
            b, L = function(o) {
                var _ = o.ownerDocument || o;
                for (!(E in o.style) && ("msTransform" in o.style) && (E = "msTransform", N = E + "Origin"); _.parentNode && (_ = _.parentNode););
                if (s = window, S = new Me, _) {
                    n = _, a = _.documentElement, f = _.body, P = n.createElementNS("http://www.w3.org/2000/svg", "g"), P.style.transform = "none";
                    var c = _.createElement("div"),
                        v = _.createElement("div"),
                        D = _ && (_.body || _.firstElementChild);
                    D && D.appendChild && (D.appendChild(c), c.appendChild(v), c.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), b = v.offsetParent !== c, D.removeChild(c))
                }
                return _
            },
            V = function(o) {
                for (var _, c; o && o !== f;) c = o._gsap, c && c.uncache && c.get(o, "x"), c && !c.scaleX && !c.scaleY && c.renderTransform && (c.scaleX = c.scaleY = 1e-4, c.renderTransform(1, c), _ ? _.push(c) : _ = [c]), o = o.parentNode;
                return _
            },
            W = [],
            q = [],
            X = function() {
                return s.pageYOffset || n.scrollTop || a.scrollTop || f.scrollTop || 0
            },
            z = function() {
                return s.pageXOffset || n.scrollLeft || a.scrollLeft || f.scrollLeft || 0
            },
            $ = function(o) {
                return o.ownerSVGElement || ((o.tagName + "").toLowerCase() === "svg" ? o : null)
            },
            J = function F(o) {
                if (s.getComputedStyle(o).position === "fixed") return !0;
                if (o = o.parentNode, o && o.nodeType === 1) return F(o)
            },
            ne = function F(o, _) {
                if (o.parentNode && (n || L(o))) {
                    var c = $(o),
                        v = c ? c.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                        D = c ? _ ? "rect" : "g" : "div",
                        I = _ !== 2 ? 0 : 100,
                        A = _ === 3 ? 100 : 0,
                        Z = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                        G = n.createElementNS ? n.createElementNS(v.replace(/^https/, "http"), D) : n.createElement(D);
                    return _ && (c ? (m || (m = F(o)), G.setAttribute("width", .01), G.setAttribute("height", .01), G.setAttribute("transform", "translate(" + I + "," + A + ")"), m.appendChild(G)) : (d || (d = F(o), d.style.cssText = Z), G.style.cssText = Z + "width:0.1px;height:0.1px;top:" + A + "px;left:" + I + "px", d.appendChild(G))), G
                }
                throw "Need document and parent."
            },
            Q = function(o) {
                for (var _ = new Me, c = 0; c < o.numberOfItems; c++) _.multiply(o.getItem(c).matrix);
                return _
            },
            Le = function(o) {
                var _ = o.getCTM(),
                    c;
                return _ || (c = o.style[E], o.style[E] = "none", o.appendChild(P), _ = P.getCTM(), o.removeChild(P), c ? o.style[E] = c : o.style.removeProperty(E.replace(/([A-Z])/g, "-$1").toLowerCase())), _ || S.clone()
            },
            Je = function(o, _) {
                var c = $(o),
                    v = o === c,
                    D = c ? W : q,
                    I = o.parentNode,
                    A, Z, G, de, we, Se;
                if (o === s) return o;
                if (D.length || D.push(ne(o, 1), ne(o, 2), ne(o, 3)), A = c ? m : d, c) v ? (G = Le(o), de = -G.e / G.a, we = -G.f / G.d, Z = S) : o.getBBox ? (G = o.getBBox(), Z = o.transform ? o.transform.baseVal : {}, Z = Z.numberOfItems ? Z.numberOfItems > 1 ? Q(Z) : Z.getItem(0).matrix : S, de = Z.a * G.x + Z.c * G.y, we = Z.b * G.x + Z.d * G.y) : (Z = new Me, de = we = 0), _ && o.tagName.toLowerCase() === "g" && (de = we = 0), (v ? c : I).appendChild(A), A.setAttribute("transform", "matrix(" + Z.a + "," + Z.b + "," + Z.c + "," + Z.d + "," + (Z.e + de) + "," + (Z.f + we) + ")");
                else {
                    if (de = we = 0, b)
                        for (Z = o.offsetParent, G = o; G && (G = G.parentNode) && G !== Z && G.parentNode;)(s.getComputedStyle(G)[E] + "").length > 4 && (de = G.offsetLeft, we = G.offsetTop, G = 0);
                    if (Se = s.getComputedStyle(o), Se.position !== "absolute" && Se.position !== "fixed")
                        for (Z = o.offsetParent; I && I !== Z;) de += I.scrollLeft || 0, we += I.scrollTop || 0, I = I.parentNode;
                    G = A.style, G.top = o.offsetTop - we + "px", G.left = o.offsetLeft - de + "px", G[E] = Se[E], G[N] = Se[N], G.position = Se.position === "fixed" ? "fixed" : "absolute", o.parentNode.appendChild(A)
                }
                return A
            },
            Ce = function(o, _, c, v, D, I, A) {
                return o.a = _, o.b = c, o.c = v, o.d = D, o.e = I, o.f = A, o
            },
            Me = function() {
                function F(_, c, v, D, I, A) {
                    _ === void 0 && (_ = 1), c === void 0 && (c = 0), v === void 0 && (v = 0), D === void 0 && (D = 1), I === void 0 && (I = 0), A === void 0 && (A = 0), Ce(this, _, c, v, D, I, A)
                }
                var o = F.prototype;
                return o.inverse = function() {
                    var c = this.a,
                        v = this.b,
                        D = this.c,
                        I = this.d,
                        A = this.e,
                        Z = this.f,
                        G = c * I - v * D || 1e-10;
                    return Ce(this, I / G, -v / G, -D / G, c / G, (D * Z - I * A) / G, -(c * Z - v * A) / G)
                }, o.multiply = function(c) {
                    var v = this.a,
                        D = this.b,
                        I = this.c,
                        A = this.d,
                        Z = this.e,
                        G = this.f,
                        de = c.a,
                        we = c.c,
                        Se = c.b,
                        h = c.d,
                        Pe = c.e,
                        nt = c.f;
                    return Ce(this, de * v + Se * I, de * D + Se * A, we * v + h * I, we * D + h * A, Z + Pe * v + nt * I, G + Pe * D + nt * A)
                }, o.clone = function() {
                    return new F(this.a, this.b, this.c, this.d, this.e, this.f)
                }, o.equals = function(c) {
                    var v = this.a,
                        D = this.b,
                        I = this.c,
                        A = this.d,
                        Z = this.e,
                        G = this.f;
                    return v === c.a && D === c.b && I === c.c && A === c.d && Z === c.e && G === c.f
                }, o.apply = function(c, v) {
                    v === void 0 && (v = {});
                    var D = c.x,
                        I = c.y,
                        A = this.a,
                        Z = this.b,
                        G = this.c,
                        de = this.d,
                        we = this.e,
                        Se = this.f;
                    return v.x = D * A + I * G + we || 0, v.y = D * Z + I * de + Se || 0, v
                }, F
            }();

        function dt(F, o, _, c) {
            if (!F || !F.parentNode || (n || L(F)).documentElement === F) return new Me;
            var v = V(F),
                D = $(F),
                I = D ? W : q,
                A = Je(F, _),
                Z = I[0].getBoundingClientRect(),
                G = I[1].getBoundingClientRect(),
                de = I[2].getBoundingClientRect(),
                we = A.parentNode,
                Se = !c && J(F),
                h = new Me((G.left - Z.left) / 100, (G.top - Z.top) / 100, (de.left - Z.left) / 100, (de.top - Z.top) / 100, Z.left + (Se ? 0 : z()), Z.top + (Se ? 0 : X()));
            if (we.removeChild(A), v)
                for (Z = v.length; Z--;) G = v[Z], G.scaleX = G.scaleY = 0, G.renderTransform(1, G);
            return o ? h.inverse() : h
        }
        var ce, Te, We, Fe, Ke, bt, Gt, Wi, Qi, ui, or, Kn, Et, ae, pr, Re, vt, Ri, Tt, Qn, Gr = 0,
            ln = function() {
                return typeof window < "u"
            },
            un = function() {
                return ce || ln() && (ce = window.gsap) && ce.registerPlugin && ce
            },
            Zi = function(o) {
                return typeof o == "function"
            },
            Ar = function(o) {
                return typeof o == "object"
            },
            St = function(o) {
                return typeof o > "u"
            },
            Ur = function() {
                return !1
            },
            $r = "transform",
            _i = "transformOrigin",
            wr = function(o) {
                return Math.round(o * 1e4) / 1e4
            },
            fn = Array.isArray,
            br = function(o, _) {
                var c = We.createElementNS ? We.createElementNS((_ || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), o) : We.createElement(o);
                return c.style ? c : We.createElement(o)
            },
            bs = 180 / Math.PI,
            Tr = 1e20,
            to = new Me,
            Ut = Date.now || function() {
                return new Date().getTime()
            },
            Sr = [],
            qr = {},
            io = 0,
            Lr = /^(?:a|input|textarea|button|select)$/i,
            Zn = 0,
            zr = {},
            Ai = {},
            jn = function(o, _) {
                var c = {},
                    v;
                for (v in o) c[v] = _ ? o[v] * _ : o[v];
                return c
            },
            Jn = function(o, _) {
                for (var c in _) c in o || (o[c] = _[c]);
                return o
            },
            es = function F(o, _) {
                for (var c = o.length, v; c--;) _ ? o[c].style.touchAction = _ : o[c].style.removeProperty("touch-action"), v = o[c].children, v && v.length && F(v, _)
            },
            ts = function() {
                return Sr.forEach(function(o) {
                    return o()
                })
            },
            is = function(o) {
                Sr.push(o), Sr.length === 1 && ce.ticker.add(ts)
            },
            gi = function() {
                return !Sr.length && ce.ticker.remove(ts)
            },
            rs = function(o) {
                for (var _ = Sr.length; _--;) Sr[_] === o && Sr.splice(_, 1);
                ce.to(gi, {
                    overwrite: !0,
                    delay: 15,
                    duration: 0,
                    onComplete: gi,
                    data: "_draggable"
                })
            },
            ji = function(o, _) {
                for (var c in _) c in o || (o[c] = _[c]);
                return o
            },
            Xt = function(o, _, c, v) {
                if (o.addEventListener) {
                    var D = Et[_];
                    v = v || (or ? {
                        passive: !1
                    } : null), o.addEventListener(D || _, c, v), D && _ !== D && o.addEventListener(_, c, v)
                }
            },
            Jt = function(o, _, c, v) {
                if (o.removeEventListener) {
                    var D = Et[_];
                    o.removeEventListener(D || _, c, v), D && _ !== D && o.removeEventListener(_, c, v)
                }
            },
            Vi = function(o) {
                o.preventDefault && o.preventDefault(), o.preventManipulation && o.preventManipulation()
            },
            Mo = function(o, _) {
                for (var c = o.length; c--;)
                    if (o[c].identifier === _) return !0
            },
            ro = function F(o) {
                ae = o.touches && Gr < o.touches.length, Jt(o.target, "touchend", F)
            },
            Ts = function(o) {
                ae = o.touches && Gr < o.touches.length, Xt(o.target, "touchend", ro)
            },
            Pi = function(o) {
                return Te.pageYOffset || o.scrollTop || o.documentElement.scrollTop || o.body.scrollTop || 0
            },
            _r = function(o) {
                return Te.pageXOffset || o.scrollLeft || o.documentElement.scrollLeft || o.body.scrollLeft || 0
            },
            Ss = function F(o, _) {
                Xt(o, "scroll", _), Ji(o.parentNode) || F(o.parentNode, _)
            },
            ks = function F(o, _) {
                Jt(o, "scroll", _), Ji(o.parentNode) || F(o.parentNode, _)
            },
            Ji = function(o) {
                return !o || o === Fe || o.nodeType === 9 || o === We.body || o === Te || !o.nodeType || !o.parentNode
            },
            Cs = function(o, _) {
                var c = _ === "x" ? "Width" : "Height",
                    v = "scroll" + c,
                    D = "client" + c;
                return Math.max(0, Ji(o) ? Math.max(Fe[v], Ke[v]) - (Te["inner" + c] || Fe[D] || Ke[D]) : o[v] - o[D])
            },
            ns = function F(o, _) {
                var c = Cs(o, "x"),
                    v = Cs(o, "y");
                Ji(o) ? o = Ai : F(o.parentNode, _), o._gsMaxScrollX = c, o._gsMaxScrollY = v, _ || (o._gsScrollX = o.scrollLeft || 0, o._gsScrollY = o.scrollTop || 0)
            },
            Ms = function(o, _, c) {
                var v = o.style;
                v && (St(v[_]) && (_ = Qi(_, o) || _), c == null ? v.removeProperty && v.removeProperty(_.replace(/([A-Z])/g, "-$1").toLowerCase()) : v[_] = c)
            },
            kn = function(o) {
                return Te.getComputedStyle(o instanceof Element ? o : o.host || (o.parentNode || {}).host || o)
            },
            yi = {},
            kr = function(o) {
                if (o === Te) return yi.left = yi.top = 0, yi.width = yi.right = Fe.clientWidth || o.innerWidth || Ke.clientWidth || 0, yi.height = yi.bottom = (o.innerHeight || 0) - 20 < Fe.clientHeight ? Fe.clientHeight : o.innerHeight || Ke.clientHeight || 0, yi;
                var _ = o.ownerDocument || We,
                    c = St(o.pageX) ? !o.nodeType && !St(o.left) && !St(o.top) ? o : ui(o)[0].getBoundingClientRect() : {
                        left: o.pageX - _r(_),
                        top: o.pageY - Pi(_),
                        right: o.pageX - _r(_) + 1,
                        bottom: o.pageY - Pi(_) + 1
                    };
                return St(c.right) && !St(c.width) ? (c.right = c.left + c.width, c.bottom = c.top + c.height) : St(c.width) && (c = {
                    width: c.right - c.left,
                    height: c.bottom - c.top,
                    right: c.right,
                    left: c.left,
                    bottom: c.bottom,
                    top: c.top
                }), c
            },
            ot = function(o, _, c) {
                var v = o.vars,
                    D = v[c],
                    I = o._listeners[_],
                    A;
                return Zi(D) && (A = D.apply(v.callbackScope || o, v[c + "Params"] || [o.pointerEvent])), I && o.dispatchEvent(_) === !1 && (A = !1), A
            },
            wi = function(o, _) {
                var c = ui(o)[0],
                    v, D, I;
                return !c.nodeType && c !== Te ? St(o.left) ? (D = o.min || o.minX || o.minRotation || 0, v = o.min || o.minY || 0, {
                    left: D,
                    top: v,
                    width: (o.max || o.maxX || o.maxRotation || 0) - D,
                    height: (o.max || o.maxY || 0) - v
                }) : (I = {
                    x: 0,
                    y: 0
                }, {
                    left: o.left - I.x,
                    top: o.top - I.y,
                    width: o.width,
                    height: o.height
                }) : Kr(c, _)
            },
            bi = {},
            Kr = function(o, _) {
                _ = ui(_)[0];
                var c = o.getBBox && o.ownerSVGElement,
                    v = o.ownerDocument || We,
                    D, I, A, Z, G, de, we, Se, h, Pe, nt, ri, ze;
                if (o === Te) A = Pi(v), D = _r(v), I = D + (v.documentElement.clientWidth || o.innerWidth || v.body.clientWidth || 0), Z = A + ((o.innerHeight || 0) - 20 < v.documentElement.clientHeight ? v.documentElement.clientHeight : o.innerHeight || v.body.clientHeight || 0);
                else {
                    if (_ === Te || St(_)) return o.getBoundingClientRect();
                    D = A = 0, c ? (Pe = o.getBBox(), nt = Pe.width, ri = Pe.height) : (o.viewBox && (Pe = o.viewBox.baseVal) && (D = Pe.x || 0, A = Pe.y || 0, nt = Pe.width, ri = Pe.height), nt || (ze = kn(o), Pe = ze.boxSizing === "border-box", nt = (parseFloat(ze.width) || o.clientWidth || 0) + (Pe ? 0 : parseFloat(ze.borderLeftWidth) + parseFloat(ze.borderRightWidth)), ri = (parseFloat(ze.height) || o.clientHeight || 0) + (Pe ? 0 : parseFloat(ze.borderTopWidth) + parseFloat(ze.borderBottomWidth)))), I = nt, Z = ri
                }
                return o === _ ? {
                    left: D,
                    top: A,
                    width: I - D,
                    height: Z - A
                } : (G = dt(_, !0).multiply(dt(o)), de = G.apply({
                    x: D,
                    y: A
                }), we = G.apply({
                    x: I,
                    y: A
                }), Se = G.apply({
                    x: I,
                    y: Z
                }), h = G.apply({
                    x: D,
                    y: Z
                }), D = Math.min(de.x, we.x, Se.x, h.x), A = Math.min(de.y, we.y, Se.y, h.y), {
                    left: D,
                    top: A,
                    width: Math.max(de.x, we.x, Se.x, h.x) - D,
                    height: Math.max(de.y, we.y, Se.y, h.y) - A
                })
            },
            Qr = function(o, _, c, v, D, I) {
                var A = {},
                    Z, G, de;
                if (_)
                    if (D !== 1 && _ instanceof Array) {
                        if (A.end = Z = [], de = _.length, Ar(_[0]))
                            for (G = 0; G < de; G++) Z[G] = jn(_[G], D);
                        else
                            for (G = 0; G < de; G++) Z[G] = _[G] * D;
                        c += 1.1, v -= 1.1
                    } else Zi(_) ? A.end = function(we) {
                        var Se = _.call(o, we),
                            h, Pe;
                        if (D !== 1)
                            if (Ar(Se)) {
                                h = {};
                                for (Pe in Se) h[Pe] = Se[Pe] * D;
                                Se = h
                            } else Se *= D;
                        return Se
                    } : A.end = _;
                return (c || c === 0) && (A.max = c), (v || v === 0) && (A.min = v), I && (A.velocity = 0), A
            },
            Ps = function F(o) {
                var _;
                return !o || !o.getAttribute || o === Ke ? !1 : (_ = o.getAttribute("data-clickable")) === "true" || _ !== "false" && (Lr.test(o.nodeName + "") || o.getAttribute("contentEditable") === "true") ? !0 : F(o.parentNode)
            },
            Cr = function(o, _) {
                for (var c = o.length, v; c--;) v = o[c], v.ondragstart = v.onselectstart = _ ? null : Ur, ce.set(v, {
                    lazy: !0,
                    userSelect: _ ? "text" : "none"
                })
            },
            no = function F(o) {
                if (kn(o).position === "fixed") return !0;
                if (o = o.parentNode, o && o.nodeType === 1) return F(o)
            },
            Ds, Cn, Es = function(o, _) {
                o = ce.utils.toArray(o)[0], _ = _ || {};
                var c = document.createElement("div"),
                    v = c.style,
                    D = o.firstChild,
                    I = 0,
                    A = 0,
                    Z = o.scrollTop,
                    G = o.scrollLeft,
                    de = o.scrollWidth,
                    we = o.scrollHeight,
                    Se = 0,
                    h = 0,
                    Pe = 0,
                    nt, ri, ze, xt, ve, ee;
                Ds && _.force3D !== !1 ? (ve = "translate3d(", ee = "px,0px)") : $r && (ve = "translate(", ee = "px)"), this.scrollTop = function(at, Ct) {
                    if (!arguments.length) return -this.top();
                    this.top(-at, Ct)
                }, this.scrollLeft = function(at, Ct) {
                    if (!arguments.length) return -this.left();
                    this.left(-at, Ct)
                }, this.left = function(at, Ct) {
                    if (!arguments.length) return -(o.scrollLeft + A);
                    var Mt = o.scrollLeft - G,
                        re = A;
                    if ((Mt > 2 || Mt < -2) && !Ct) {
                        G = o.scrollLeft, ce.killTweensOf(this, {
                            left: 1,
                            scrollLeft: 1
                        }), this.left(-G), _.onKill && _.onKill();
                        return
                    }
                    at = -at, at < 0 ? (A = at - .5 | 0, at = 0) : at > h ? (A = at - h | 0, at = h) : A = 0, (A || re) && (this._skip || (v[$r] = ve + -A + "px," + -I + ee), A + Se >= 0 && (v.paddingRight = A + Se + "px")), o.scrollLeft = at | 0, G = o.scrollLeft
                }, this.top = function(at, Ct) {
                    if (!arguments.length) return -(o.scrollTop + I);
                    var Mt = o.scrollTop - Z,
                        re = I;
                    if ((Mt > 2 || Mt < -2) && !Ct) {
                        Z = o.scrollTop, ce.killTweensOf(this, {
                            top: 1,
                            scrollTop: 1
                        }), this.top(-Z), _.onKill && _.onKill();
                        return
                    }
                    at = -at, at < 0 ? (I = at - .5 | 0, at = 0) : at > Pe ? (I = at - Pe | 0, at = Pe) : I = 0, (I || re) && (this._skip || (v[$r] = ve + -A + "px," + -I + ee)), o.scrollTop = at | 0, Z = o.scrollTop
                }, this.maxScrollTop = function() {
                    return Pe
                }, this.maxScrollLeft = function() {
                    return h
                }, this.disable = function() {
                    for (D = c.firstChild; D;) xt = D.nextSibling, o.appendChild(D), D = xt;
                    o === c.parentNode && o.removeChild(c)
                }, this.enable = function() {
                    if (D = o.firstChild, D !== c) {
                        for (; D;) xt = D.nextSibling, c.appendChild(D), D = xt;
                        o.appendChild(c), this.calibrate()
                    }
                }, this.calibrate = function(at) {
                    var Ct = o.clientWidth === nt,
                        Mt, re, K;
                    Z = o.scrollTop, G = o.scrollLeft, !(Ct && o.clientHeight === ri && c.offsetHeight === ze && de === o.scrollWidth && we === o.scrollHeight && !at) && ((I || A) && (re = this.left(), K = this.top(), this.left(-o.scrollLeft), this.top(-o.scrollTop)), Mt = kn(o), (!Ct || at) && (v.display = "block", v.width = "auto", v.paddingRight = "0px", Se = Math.max(0, o.scrollWidth - o.clientWidth), Se && (Se += parseFloat(Mt.paddingLeft) + (Cn ? parseFloat(Mt.paddingRight) : 0))), v.display = "inline-block", v.position = "relative", v.overflow = "visible", v.verticalAlign = "top", v.boxSizing = "content-box", v.width = "100%", v.paddingRight = Se + "px", Cn && (v.paddingBottom = Mt.paddingBottom), nt = o.clientWidth, ri = o.clientHeight, de = o.scrollWidth, we = o.scrollHeight, h = o.scrollWidth - nt, Pe = o.scrollHeight - ri, ze = c.offsetHeight, v.display = "block", (re || K) && (this.left(re), this.top(K)))
                }, this.content = c, this.element = o, this._skip = !1, this.enable()
            },
            Mr = function(o) {
                if (ln() && document.body) {
                    var _ = window && window.navigator;
                    Te = window, We = document, Fe = We.documentElement, Ke = We.body, bt = br("div"), Ri = !!window.PointerEvent, Gt = br("div"), Gt.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", vt = Gt.style.cursor === "grab" ? "grab" : "move", pr = _ && _.userAgent.toLowerCase().indexOf("android") !== -1, Kn = "ontouchstart" in Fe && "orientation" in Te || _ && (_.MaxTouchPoints > 0 || _.msMaxTouchPoints > 0), Cn = function() {
                        var c = br("div"),
                            v = br("div"),
                            D = v.style,
                            I = Ke,
                            A;
                        return D.display = "inline-block", D.position = "relative", c.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", c.appendChild(v), I.appendChild(c), A = v.offsetHeight + 18 > c.scrollHeight, I.removeChild(c), A
                    }(), Et = function(c) {
                        for (var v = c.split(","), D = ("onpointerdown" in bt ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in bt ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : c).split(","), I = {}, A = 4; --A > -1;) I[v[A]] = D[A], I[D[A]] = v[A];
                        try {
                            Fe.addEventListener("test", null, Object.defineProperty({}, "passive", {
                                get: function() {
                                    or = 1
                                }
                            }))
                        } catch {}
                        return I
                    }("touchstart,touchmove,touchend,touchcancel"), Xt(We, "touchcancel", Ur), Xt(Te, "touchmove", Ur), Ke && Ke.addEventListener("touchstart", Ur), Xt(We, "contextmenu", function() {
                        for (var c in qr) qr[c].isPressed && qr[c].endDrag()
                    }), ce = Wi = un()
                }
                ce ? (Re = ce.plugins.inertia, Tt = ce.core.context || function() {}, Qi = ce.utils.checkPrefix, $r = Qi($r), _i = Qi(_i), ui = ce.utils.toArray, Qn = ce.core.getStyleSaver, Ds = !!Qi("perspective")) : o && console.warn("Please gsap.registerPlugin(Draggable)")
            },
            Zr = function() {
                function F(_) {
                    this._listeners = {}, this.target = _ || this
                }
                var o = F.prototype;
                return o.addEventListener = function(c, v) {
                    var D = this._listeners[c] || (this._listeners[c] = []);
                    ~D.indexOf(v) || D.push(v)
                }, o.removeEventListener = function(c, v) {
                    var D = this._listeners[c],
                        I = D && D.indexOf(v);
                    I >= 0 && D.splice(I, 1)
                }, o.dispatchEvent = function(c) {
                    var v = this,
                        D;
                    return (this._listeners[c] || []).forEach(function(I) {
                        return I.call(v, {
                            type: c,
                            target: v.target
                        }) === !1 && (D = !1)
                    }), D
                }, F
            }(),
            Gi = function(F) {
                i(o, F);

                function o(_, c) {
                    var v;
                    v = F.call(this) || this, Wi || Mr(1), _ = ui(_)[0], v.styles = Qn && Qn(_, "transform,left,top"), Re || (Re = ce.plugins.inertia), v.vars = c = jn(c || {}), v.target = _, v.x = v.y = v.rotation = 0, v.dragResistance = parseFloat(c.dragResistance) || 0, v.edgeResistance = isNaN(c.edgeResistance) ? 1 : parseFloat(c.edgeResistance) || 0, v.lockAxis = c.lockAxis, v.autoScroll = c.autoScroll || 0, v.lockedAxis = null, v.allowEventDefault = !!c.allowEventDefault, ce.getProperty(_, "x");
                    var D = (c.type || "x,y").toLowerCase(),
                        I = ~D.indexOf("x") || ~D.indexOf("y"),
                        A = D.indexOf("rotation") !== -1,
                        Z = A ? "rotation" : I ? "x" : "left",
                        G = I ? "y" : "top",
                        de = !!(~D.indexOf("x") || ~D.indexOf("left") || D === "scroll"),
                        we = !!(~D.indexOf("y") || ~D.indexOf("top") || D === "scroll"),
                        Se = c.minimumMovement || 2,
                        h = r(v),
                        Pe = ui(c.trigger || c.handle || _),
                        nt = {},
                        ri = 0,
                        ze = !1,
                        xt = c.autoScrollMarginTop || 40,
                        ve = c.autoScrollMarginRight || 40,
                        ee = c.autoScrollMarginBottom || 40,
                        at = c.autoScrollMarginLeft || 40,
                        Ct = c.clickableTest || Ps,
                        Mt = 0,
                        re = _._gsap || ce.core.getCache(_),
                        K = no(_),
                        Ht = function(T, w) {
                            return parseFloat(re.get(_, T, w))
                        },
                        be = _.ownerDocument || We,
                        et, Ne, M, l, x, u, g, C, R, k, Y, le, pe, Ve, oe, B, ie, yt, Ge, pt, st, At, _e, Ae, _t, ge, wt, fi, xe, qt, he, qi, Lt, ni = function(T) {
                            return Vi(T), T.stopImmediatePropagation && T.stopImmediatePropagation(), !1
                        },
                        Pt = function fe(T) {
                            if (h.autoScroll && h.isDragging && (ze || ie)) {
                                var w = _,
                                    O = h.autoScroll * 15,
                                    H, te, j, Oe, me, ft, ke, tt;
                                for (ze = !1, Ai.scrollTop = Te.pageYOffset != null ? Te.pageYOffset : be.documentElement.scrollTop != null ? be.documentElement.scrollTop : be.body.scrollTop, Ai.scrollLeft = Te.pageXOffset != null ? Te.pageXOffset : be.documentElement.scrollLeft != null ? be.documentElement.scrollLeft : be.body.scrollLeft, Oe = h.pointerX - Ai.scrollLeft, me = h.pointerY - Ai.scrollTop; w && !te;) te = Ji(w.parentNode), H = te ? Ai : w.parentNode, j = te ? {
                                    bottom: Math.max(Fe.clientHeight, Te.innerHeight || 0),
                                    right: Math.max(Fe.clientWidth, Te.innerWidth || 0),
                                    left: 0,
                                    top: 0
                                } : H.getBoundingClientRect(), ft = ke = 0, we && (tt = H._gsMaxScrollY - H.scrollTop, tt < 0 ? ke = tt : me > j.bottom - ee && tt ? (ze = !0, ke = Math.min(tt, O * (1 - Math.max(0, j.bottom - me) / ee) | 0)) : me < j.top + xt && H.scrollTop && (ze = !0, ke = -Math.min(H.scrollTop, O * (1 - Math.max(0, me - j.top) / xt) | 0)), ke && (H.scrollTop += ke)), de && (tt = H._gsMaxScrollX - H.scrollLeft, tt < 0 ? ft = tt : Oe > j.right - ve && tt ? (ze = !0, ft = Math.min(tt, O * (1 - Math.max(0, j.right - Oe) / ve) | 0)) : Oe < j.left + at && H.scrollLeft && (ze = !0, ft = -Math.min(H.scrollLeft, O * (1 - Math.max(0, Oe - j.left) / at) | 0)), ft && (H.scrollLeft += ft)), te && (ft || ke) && (Te.scrollTo(H.scrollLeft, H.scrollTop), zi(h.pointerX + ft, h.pointerY + ke)), w = H
                            }
                            if (ie) {
                                var Be = h.x,
                                    Dt = h.y;
                                A ? (h.deltaX = Be - parseFloat(re.rotation), h.rotation = Be, re.rotation = Be + "deg", re.renderTransform(1, re)) : Ne ? (we && (h.deltaY = Dt - Ne.top(), Ne.top(Dt)), de && (h.deltaX = Be - Ne.left(), Ne.left(Be))) : I ? (we && (h.deltaY = Dt - parseFloat(re.y), re.y = Dt + "px"), de && (h.deltaX = Be - parseFloat(re.x), re.x = Be + "px"), re.renderTransform(1, re)) : (we && (h.deltaY = Dt - parseFloat(_.style.top || 0), _.style.top = Dt + "px"), de && (h.deltaX = Be - parseFloat(_.style.left || 0), _.style.left = Be + "px")), C && !T && !fi && (fi = !0, ot(h, "drag", "onDrag") === !1 && (de && (h.x -= h.deltaX), we && (h.y -= h.deltaY), fe(!0)), fi = !1)
                            }
                            ie = !1
                        },
                        $e = function(T, w) {
                            var O = h.x,
                                H = h.y,
                                te, j;
                            _._gsap || (re = ce.core.getCache(_)), re.uncache && ce.getProperty(_, "x"), I ? (h.x = parseFloat(re.x), h.y = parseFloat(re.y)) : A ? h.x = h.rotation = parseFloat(re.rotation) : Ne ? (h.y = Ne.top(), h.x = Ne.left()) : (h.y = parseFloat(_.style.top || (j = kn(_)) && j.top) || 0, h.x = parseFloat(_.style.left || (j || {}).left) || 0), (Ge || pt || st) && !w && (h.isDragging || h.isThrowing) && (st && (zr.x = h.x, zr.y = h.y, te = st(zr), te.x !== h.x && (h.x = te.x, ie = !0), te.y !== h.y && (h.y = te.y, ie = !0)), Ge && (te = Ge(h.x), te !== h.x && (h.x = te, A && (h.rotation = te), ie = !0)), pt && (te = pt(h.y), te !== h.y && (h.y = te), ie = !0)), ie && Pt(!0), T || (h.deltaX = h.x - O, h.deltaY = h.y - H, ot(h, "throwupdate", "onThrowUpdate"))
                        },
                        zt = function(T, w, O, H) {
                            return w == null && (w = -Tr), O == null && (O = Tr), Zi(T) ? function(te) {
                                var j = h.isPressed ? 1 - h.edgeResistance : 1;
                                return T.call(h, (te > O ? O + (te - O) * j : te < w ? w + (te - w) * j : te) * H) * H
                            } : fn(T) ? function(te) {
                                for (var j = T.length, Oe = 0, me = Tr, ft, ke; --j > -1;) ft = T[j], ke = ft - te, ke < 0 && (ke = -ke), ke < me && ft >= w && ft <= O && (Oe = j, me = ke);
                                return T[Oe]
                            } : isNaN(T) ? function(te) {
                                return te
                            } : function() {
                                return T * H
                            }
                        },
                        ye = function(T, w, O, H, te, j, Oe) {
                            return j = j && j < Tr ? j * j : Tr, Zi(T) ? function(me) {
                                var ft = h.isPressed ? 1 - h.edgeResistance : 1,
                                    ke = me.x,
                                    tt = me.y,
                                    Be, Dt, si;
                                return me.x = ke = ke > O ? O + (ke - O) * ft : ke < w ? w + (ke - w) * ft : ke, me.y = tt = tt > te ? te + (tt - te) * ft : tt < H ? H + (tt - H) * ft : tt, Be = T.call(h, me), Be !== me && (me.x = Be.x, me.y = Be.y), Oe !== 1 && (me.x *= Oe, me.y *= Oe), j < Tr && (Dt = me.x - ke, si = me.y - tt, Dt * Dt + si * si > j && (me.x = ke, me.y = tt)), me
                            } : fn(T) ? function(me) {
                                for (var ft = T.length, ke = 0, tt = Tr, Be, Dt, si, oi; --ft > -1;) si = T[ft], Be = si.x - me.x, Dt = si.y - me.y, oi = Be * Be + Dt * Dt, oi < tt && (ke = ft, tt = oi);
                                return tt <= j ? T[ke] : me
                            } : function(me) {
                                return me
                            }
                        },
                        y = function() {
                            var T, w, O, H;
                            g = !1, Ne ? (Ne.calibrate(), h.minX = Y = -Ne.maxScrollLeft(), h.minY = pe = -Ne.maxScrollTop(), h.maxX = k = h.maxY = le = 0, g = !0) : c.bounds && (T = wi(c.bounds, _.parentNode), A ? (h.minX = Y = T.left, h.maxX = k = T.left + T.width, h.minY = pe = h.maxY = le = 0) : !St(c.bounds.maxX) || !St(c.bounds.maxY) ? (T = c.bounds, h.minX = Y = T.minX, h.minY = pe = T.minY, h.maxX = k = T.maxX, h.maxY = le = T.maxY) : (w = wi(_, _.parentNode), h.minX = Y = Math.round(Ht(Z, "px") + T.left - w.left), h.minY = pe = Math.round(Ht(G, "px") + T.top - w.top), h.maxX = k = Math.round(Y + (T.width - w.width)), h.maxY = le = Math.round(pe + (T.height - w.height))), Y > k && (h.minX = k, h.maxX = k = Y, Y = h.minX), pe > le && (h.minY = le, h.maxY = le = pe, pe = h.minY), A && (h.minRotation = Y, h.maxRotation = k), g = !0), c.liveSnap && (O = c.liveSnap === !0 ? c.snap || {} : c.liveSnap, H = fn(O) || Zi(O), A ? (Ge = zt(H ? O : O.rotation, Y, k, 1), pt = null) : O.points ? st = ye(H ? O : O.points, Y, k, pe, le, O.radius, Ne ? -1 : 1) : (de && (Ge = zt(H ? O : O.x || O.left || O.scrollLeft, Y, k, Ne ? -1 : 1)), we && (pt = zt(H ? O : O.y || O.top || O.scrollTop, pe, le, Ne ? -1 : 1))))
                        },
                        U = function() {
                            h.isThrowing = !1, ot(h, "throwcomplete", "onThrowComplete")
                        },
                        ue = function() {
                            h.isThrowing = !1
                        },
                        qe = function(T, w) {
                            var O, H, te, j;
                            T && Re ? (T === !0 && (O = c.snap || c.liveSnap || {}, H = fn(O) || Zi(O), T = {
                                resistance: (c.throwResistance || c.resistance || 1e3) / (A ? 10 : 1)
                            }, A ? T.rotation = Qr(h, H ? O : O.rotation, k, Y, 1, w) : (de && (T[Z] = Qr(h, H ? O : O.points || O.x || O.left, k, Y, Ne ? -1 : 1, w || h.lockedAxis === "x")), we && (T[G] = Qr(h, H ? O : O.points || O.y || O.top, le, pe, Ne ? -1 : 1, w || h.lockedAxis === "y")), (O.points || fn(O) && Ar(O[0])) && (T.linkedProps = Z + "," + G, T.radius = O.radius))), h.isThrowing = !0, j = isNaN(c.overshootTolerance) ? c.edgeResistance === 1 ? 0 : 1 - h.edgeResistance + .2 : c.overshootTolerance, T.duration || (T.duration = {
                                max: Math.max(c.minDuration || 0, "maxDuration" in c ? c.maxDuration : 2),
                                min: isNaN(c.minDuration) ? j === 0 || Ar(T) && T.resistance > 1e3 ? 0 : .5 : c.minDuration,
                                overshoot: j
                            }), h.tween = te = ce.to(Ne || _, {
                                inertia: T,
                                data: "_draggable",
                                inherit: !1,
                                onComplete: U,
                                onInterrupt: ue,
                                onUpdate: c.fastMode ? ot : $e,
                                onUpdateParams: c.fastMode ? [h, "onthrowupdate", "onThrowUpdate"] : O && O.radius ? [!1, !0] : []
                            }), c.fastMode || (Ne && (Ne._skip = !0), te.render(1e9, !0, !0), $e(!0, !0), h.endX = h.x, h.endY = h.y, A && (h.endRotation = h.x), te.play(0), $e(!0, !0), Ne && (Ne._skip = !1))) : g && h.applyBounds()
                        },
                        Ze = function(T) {
                            var w = Ae,
                                O;
                            Ae = dt(_.parentNode, !0), T && h.isPressed && !Ae.equals(w || new Me) && (O = w.inverse().apply({
                                x: M,
                                y: l
                            }), Ae.apply(O, O), M = O.x, l = O.y), Ae.equals(to) && (Ae = null)
                        },
                        vi = function() {
                            var T = 1 - h.edgeResistance,
                                w = K ? _r(be) : 0,
                                O = K ? Pi(be) : 0,
                                H, te, j;
                            I && (re.x = Ht(Z, "px") + "px", re.y = Ht(G, "px") + "px", re.renderTransform()), Ze(!1), bi.x = h.pointerX - w, bi.y = h.pointerY - O, Ae && Ae.apply(bi, bi), M = bi.x, l = bi.y, ie && (zi(h.pointerX, h.pointerY), Pt(!0)), qi = dt(_), Ne ? (y(), u = Ne.top(), x = Ne.left()) : (Kt() ? ($e(!0, !0), y()) : h.applyBounds(), A ? (H = _.ownerSVGElement ? [re.xOrigin - _.getBBox().x, re.yOrigin - _.getBBox().y] : (kn(_)[_i] || "0 0").split(" "), B = h.rotationOrigin = dt(_).apply({
                                x: parseFloat(H[0]) || 0,
                                y: parseFloat(H[1]) || 0
                            }), $e(!0, !0), te = h.pointerX - B.x - w, j = B.y - h.pointerY + O, x = h.x, u = h.y = Math.atan2(j, te) * bs) : (u = Ht(G, "px"), x = Ht(Z, "px"))), g && T && (x > k ? x = k + (x - k) / T : x < Y && (x = Y - (Y - x) / T), A || (u > le ? u = le + (u - le) / T : u < pe && (u = pe - (pe - u) / T))), h.startX = x = wr(x), h.startY = u = wr(u)
                        },
                        Kt = function() {
                            return h.tween && h.tween.isActive()
                        },
                        Wt = function() {
                            Gt.parentNode && !Kt() && !h.isDragging && Gt.parentNode.removeChild(Gt)
                        },
                        Vt = function(T, w) {
                            var O;
                            if (!et || h.isPressed || !T || (T.type === "mousedown" || T.type === "pointerdown") && !w && Ut() - Mt < 30 && Et[h.pointerEvent.type]) {
                                he && T && et && Vi(T);
                                return
                            }
                            if (_t = Kt(), Lt = !1, h.pointerEvent = T, Et[T.type] ? (_e = ~T.type.indexOf("touch") ? T.currentTarget || T.target : be, Xt(_e, "touchend", lt), Xt(_e, "touchmove", Nt), Xt(_e, "touchcancel", lt), Xt(be, "touchstart", Ts)) : (_e = null, Xt(be, "mousemove", Nt)), wt = null, (!Ri || !_e) && (Xt(be, "mouseup", lt), T && T.target && Xt(T.target, "mouseup", lt)), At = Ct.call(h, T.target) && c.dragClickables === !1 && !w, At) {
                                Xt(T.target, "change", lt), ot(h, "pressInit", "onPressInit"), ot(h, "press", "onPress"), Cr(Pe, !0), he = !1;
                                return
                            }
                            if (ge = !_e || de === we || h.vars.allowNativeTouchScrolling === !1 || h.vars.allowContextMenu && T && (T.ctrlKey || T.which > 2) ? !1 : de ? "y" : "x", he = !ge && !h.allowEventDefault, he && (Vi(T), Xt(Te, "touchforcechange", Vi)), T.changedTouches ? (T = Ve = T.changedTouches[0], oe = T.identifier) : T.pointerId ? oe = T.pointerId : Ve = oe = null, Gr++, is(Pt), l = h.pointerY = T.pageY, M = h.pointerX = T.pageX, ot(h, "pressInit", "onPressInit"), (ge || h.autoScroll) && ns(_.parentNode), _.parentNode && h.autoScroll && !Ne && !A && _.parentNode._gsMaxScrollX && !Gt.parentNode && !_.getBBox && (Gt.style.width = _.parentNode.scrollWidth + "px", _.parentNode.appendChild(Gt)), vi(), h.tween && h.tween.kill(), h.isThrowing = !1, ce.killTweensOf(Ne || _, nt, !0), Ne && ce.killTweensOf(_, {
                                    scrollTo: 1
                                }, !0), h.tween = h.lockedAxis = null, (c.zIndexBoost || !A && !Ne && c.zIndexBoost !== !1) && (_.style.zIndex = o.zIndex++), h.isPressed = !0, C = !!(c.onDrag || h._listeners.drag), R = !!(c.onMove || h._listeners.move), c.cursor !== !1 || c.activeCursor)
                                for (O = Pe.length; --O > -1;) ce.set(Pe[O], {
                                    cursor: c.activeCursor || c.cursor || (vt === "grab" ? "grabbing" : vt)
                                });
                            ot(h, "press", "onPress")
                        },
                        Nt = function(T) {
                            var w = T,
                                O, H, te, j, Oe, me;
                            if (!et || ae || !h.isPressed || !T) {
                                he && T && et && Vi(T);
                                return
                            }
                            if (h.pointerEvent = T, O = T.changedTouches, O) {
                                if (T = O[0], T !== Ve && T.identifier !== oe) {
                                    for (j = O.length; --j > -1 && (T = O[j]).identifier !== oe && T.target !== _;);
                                    if (j < 0) return
                                }
                            } else if (T.pointerId && oe && T.pointerId !== oe) return;
                            if (_e && ge && !wt && (bi.x = T.pageX - (K ? _r(be) : 0), bi.y = T.pageY - (K ? Pi(be) : 0), Ae && Ae.apply(bi, bi), H = bi.x, te = bi.y, Oe = Math.abs(H - M), me = Math.abs(te - l), (Oe !== me && (Oe > Se || me > Se) || pr && ge === wt) && (wt = Oe > me && de ? "x" : "y", ge && wt !== ge && Xt(Te, "touchforcechange", Vi), h.vars.lockAxisOnTouchScroll !== !1 && de && we && (h.lockedAxis = wt === "x" ? "y" : "x", Zi(h.vars.onLockAxis) && h.vars.onLockAxis.call(h, w)), pr && ge === wt))) {
                                lt(w);
                                return
                            }!h.allowEventDefault && (!ge || wt && ge !== wt) && w.cancelable !== !1 ? (Vi(w), he = !0) : he && (he = !1), h.autoScroll && (ze = !0), zi(T.pageX, T.pageY, R)
                        },
                        zi = function(T, w, O) {
                            var H = 1 - h.dragResistance,
                                te = 1 - h.edgeResistance,
                                j = h.pointerX,
                                Oe = h.pointerY,
                                me = u,
                                ft = h.x,
                                ke = h.y,
                                tt = h.endX,
                                Be = h.endY,
                                Dt = h.endRotation,
                                si = ie,
                                oi, er, je, Bt, gr, Si;
                            h.pointerX = T, h.pointerY = w, K && (T -= _r(be), w -= Pi(be)), A ? (Bt = Math.atan2(B.y - w, T - B.x) * bs, gr = h.y - Bt, gr > 180 ? (u -= 360, h.y = Bt) : gr < -180 && (u += 360, h.y = Bt), h.x !== x || Math.abs(u - Bt) > Se ? (h.y = Bt, je = x + (u - Bt) * H) : je = x) : (Ae && (Si = T * Ae.a + w * Ae.c + Ae.e, w = T * Ae.b + w * Ae.d + Ae.f, T = Si), er = w - l, oi = T - M, er < Se && er > -Se && (er = 0), oi < Se && oi > -Se && (oi = 0), (h.lockAxis || h.lockedAxis) && (oi || er) && (Si = h.lockedAxis, Si || (h.lockedAxis = Si = de && Math.abs(oi) > Math.abs(er) ? "y" : we ? "x" : null, Si && Zi(h.vars.onLockAxis) && h.vars.onLockAxis.call(h, h.pointerEvent)), Si === "y" ? er = 0 : Si === "x" && (oi = 0)), je = wr(x + oi * H), Bt = wr(u + er * H)), (Ge || pt || st) && (h.x !== je || h.y !== Bt && !A) && (st && (zr.x = je, zr.y = Bt, Si = st(zr), je = wr(Si.x), Bt = wr(Si.y)), Ge && (je = wr(Ge(je))), pt && (Bt = wr(pt(Bt)))), g && (je > k ? je = k + Math.round((je - k) * te) : je < Y && (je = Y + Math.round((je - Y) * te)), A || (Bt > le ? Bt = Math.round(le + (Bt - le) * te) : Bt < pe && (Bt = Math.round(pe + (Bt - pe) * te)))), (h.x !== je || h.y !== Bt && !A) && (A ? (h.endRotation = h.x = h.endX = je, ie = !0) : (we && (h.y = h.endY = Bt, ie = !0), de && (h.x = h.endX = je, ie = !0)), !O || ot(h, "move", "onMove") !== !1 ? !h.isDragging && h.isPressed && (h.isDragging = Lt = !0, ot(h, "dragstart", "onDragStart")) : (h.pointerX = j, h.pointerY = Oe, u = me, h.x = ft, h.y = ke, h.endX = tt, h.endY = Be, h.endRotation = Dt, ie = si))
                        },
                        lt = function fe(T, w) {
                            if (!et || !h.isPressed || T && oe != null && !w && (T.pointerId && T.pointerId !== oe && T.target !== _ || T.changedTouches && !Mo(T.changedTouches, oe))) {
                                he && T && et && Vi(T);
                                return
                            }
                            h.isPressed = !1;
                            var O = T,
                                H = h.isDragging,
                                te = h.vars.allowContextMenu && T && (T.ctrlKey || T.which > 2),
                                j = ce.delayedCall(.001, Wt),
                                Oe, me, ft, ke, tt;
                            if (_e ? (Jt(_e, "touchend", fe), Jt(_e, "touchmove", Nt), Jt(_e, "touchcancel", fe), Jt(be, "touchstart", Ts)) : Jt(be, "mousemove", Nt), Jt(Te, "touchforcechange", Vi), (!Ri || !_e) && (Jt(be, "mouseup", fe), T && T.target && Jt(T.target, "mouseup", fe)), ie = !1, H && (ri = Zn = Ut(), h.isDragging = !1), rs(Pt), At && !te) {
                                T && (Jt(T.target, "change", fe), h.pointerEvent = O), Cr(Pe, !1), ot(h, "release", "onRelease"), ot(h, "click", "onClick"), At = !1;
                                return
                            }
                            for (me = Pe.length; --me > -1;) Ms(Pe[me], "cursor", c.cursor || (c.cursor !== !1 ? vt : null));
                            if (Gr--, T) {
                                if (Oe = T.changedTouches, Oe && (T = Oe[0], T !== Ve && T.identifier !== oe)) {
                                    for (me = Oe.length; --me > -1 && (T = Oe[me]).identifier !== oe && T.target !== _;);
                                    if (me < 0 && !w) return
                                }
                                h.pointerEvent = O, h.pointerX = T.pageX, h.pointerY = T.pageY
                            }
                            return te && O ? (Vi(O), he = !0, ot(h, "release", "onRelease")) : O && !H ? (he = !1, _t && (c.snap || c.bounds) && qe(c.inertia || c.throwProps), ot(h, "release", "onRelease"), (!pr || O.type !== "touchmove") && O.type.indexOf("cancel") === -1 && (ot(h, "click", "onClick"), Ut() - Mt < 300 && ot(h, "doubleclick", "onDoubleClick"), ke = O.target || _, Mt = Ut(), tt = function() {
                                Mt !== xe && h.enabled() && !h.isPressed && !O.defaultPrevented && (ke.click ? ke.click() : be.createEvent && (ft = be.createEvent("MouseEvents"), ft.initMouseEvent("click", !0, !0, Te, 1, h.pointerEvent.screenX, h.pointerEvent.screenY, h.pointerX, h.pointerY, !1, !1, !1, !1, 0, null), ke.dispatchEvent(ft)))
                            }, !pr && !O.defaultPrevented && ce.delayedCall(.05, tt))) : (qe(c.inertia || c.throwProps), !h.allowEventDefault && O && (c.dragClickables !== !1 || !Ct.call(h, O.target)) && H && (!ge || wt && ge === wt) && O.cancelable !== !1 ? (he = !0, Vi(O)) : he = !1, ot(h, "release", "onRelease")), Kt() && j.duration(h.tween.duration()), H && ot(h, "dragend", "onDragEnd"), !0
                        },
                        Ni = function(T) {
                            if (T && h.isDragging && !Ne) {
                                var w = T.target || _.parentNode,
                                    O = w.scrollLeft - w._gsScrollX,
                                    H = w.scrollTop - w._gsScrollY;
                                (O || H) && (Ae ? (M -= O * Ae.a + H * Ae.c, l -= H * Ae.d + O * Ae.b) : (M -= O, l -= H), w._gsScrollX += O, w._gsScrollY += H, zi(h.pointerX, h.pointerY))
                            }
                        },
                        ut = function(T) {
                            var w = Ut(),
                                O = w - Mt < 100,
                                H = w - ri < 50,
                                te = O && xe === Mt,
                                j = h.pointerEvent && h.pointerEvent.defaultPrevented,
                                Oe = O && qt === Mt,
                                me = T.isTrusted || T.isTrusted == null && O && te;
                            if ((te || H && h.vars.suppressClickOnDrag !== !1) && T.stopImmediatePropagation && T.stopImmediatePropagation(), O && !(h.pointerEvent && h.pointerEvent.defaultPrevented) && (!te || me && !Oe)) {
                                me && te && (qt = Mt), xe = Mt;
                                return
                            }(h.isPressed || H || O) && (!me || !T.detail || !O || j) && Vi(T), !O && !H && !Lt && (T && T.target && (h.pointerEvent = T), ot(h, "click", "onClick"))
                        },
                        Qt = function(T) {
                            return Ae ? {
                                x: T.x * Ae.a + T.y * Ae.c + Ae.e,
                                y: T.x * Ae.b + T.y * Ae.d + Ae.f
                            } : {
                                x: T.x,
                                y: T.y
                            }
                        };
                    return yt = o.get(_), yt && yt.kill(), v.startDrag = function(fe, T) {
                        var w, O, H, te;
                        Vt(fe || h.pointerEvent, !0), T && !h.hitTest(fe || h.pointerEvent) && (w = kr(fe || h.pointerEvent), O = kr(_), H = Qt({
                            x: w.left + w.width / 2,
                            y: w.top + w.height / 2
                        }), te = Qt({
                            x: O.left + O.width / 2,
                            y: O.top + O.height / 2
                        }), M -= H.x - te.x, l -= H.y - te.y), h.isDragging || (h.isDragging = Lt = !0, ot(h, "dragstart", "onDragStart"))
                    }, v.drag = Nt, v.endDrag = function(fe) {
                        return lt(fe || h.pointerEvent, !0)
                    }, v.timeSinceDrag = function() {
                        return h.isDragging ? 0 : (Ut() - ri) / 1e3
                    }, v.timeSinceClick = function() {
                        return (Ut() - Mt) / 1e3
                    }, v.hitTest = function(fe, T) {
                        return o.hitTest(h.target, fe, T)
                    }, v.getDirection = function(fe, T) {
                        var w = fe === "velocity" && Re ? fe : Ar(fe) && !A ? "element" : "start",
                            O, H, te, j, Oe, me;
                        return w === "element" && (Oe = kr(h.target), me = kr(fe)), O = w === "start" ? h.x - x : w === "velocity" ? Re.getVelocity(_, Z) : Oe.left + Oe.width / 2 - (me.left + me.width / 2), A ? O < 0 ? "counter-clockwise" : "clockwise" : (T = T || 2, H = w === "start" ? h.y - u : w === "velocity" ? Re.getVelocity(_, G) : Oe.top + Oe.height / 2 - (me.top + me.height / 2), te = Math.abs(O / H), j = te < 1 / T ? "" : O < 0 ? "left" : "right", te < T && (j !== "" && (j += "-"), j += H < 0 ? "up" : "down"), j)
                    }, v.applyBounds = function(fe, T) {
                        var w, O, H, te, j, Oe;
                        if (fe && c.bounds !== fe) return c.bounds = fe, h.update(!0, T);
                        if ($e(!0), y(), g && !Kt()) {
                            if (w = h.x, O = h.y, w > k ? w = k : w < Y && (w = Y), O > le ? O = le : O < pe && (O = pe), (h.x !== w || h.y !== O) && (H = !0, h.x = h.endX = w, A ? h.endRotation = w : h.y = h.endY = O, ie = !0, Pt(!0), h.autoScroll && !h.isDragging))
                                for (ns(_.parentNode), te = _, Ai.scrollTop = Te.pageYOffset != null ? Te.pageYOffset : be.documentElement.scrollTop != null ? be.documentElement.scrollTop : be.body.scrollTop, Ai.scrollLeft = Te.pageXOffset != null ? Te.pageXOffset : be.documentElement.scrollLeft != null ? be.documentElement.scrollLeft : be.body.scrollLeft; te && !Oe;) Oe = Ji(te.parentNode), j = Oe ? Ai : te.parentNode, we && j.scrollTop > j._gsMaxScrollY && (j.scrollTop = j._gsMaxScrollY), de && j.scrollLeft > j._gsMaxScrollX && (j.scrollLeft = j._gsMaxScrollX), te = j;
                            h.isThrowing && (H || h.endX > k || h.endX < Y || h.endY > le || h.endY < pe) && qe(c.inertia || c.throwProps, H)
                        }
                        return h
                    }, v.update = function(fe, T, w) {
                        if (T && h.isPressed) {
                            var O = dt(_),
                                H = qi.apply({
                                    x: h.x - x,
                                    y: h.y - u
                                }),
                                te = dt(_.parentNode, !0);
                            te.apply({
                                x: O.e - H.x,
                                y: O.f - H.y
                            }, H), h.x -= H.x - te.e, h.y -= H.y - te.f, Pt(!0), vi()
                        }
                        var j = h.x,
                            Oe = h.y;
                        return Ze(!T), fe ? h.applyBounds() : (ie && w && Pt(!0), $e(!0)), T && (zi(h.pointerX, h.pointerY), ie && Pt(!0)), h.isPressed && !T && (de && Math.abs(j - h.x) > .01 || we && Math.abs(Oe - h.y) > .01 && !A) && vi(), h.autoScroll && (ns(_.parentNode, h.isDragging), ze = h.isDragging, Pt(!0), ks(_, Ni), Ss(_, Ni)), h
                    }, v.enable = function(fe) {
                        var T = {
                                lazy: !0
                            },
                            w, O, H;
                        if (c.cursor !== !1 && (T.cursor = c.cursor || vt), ce.utils.checkPrefix("touchCallout") && (T.touchCallout = "none"), fe !== "soft") {
                            for (es(Pe, de === we ? "none" : c.allowNativeTouchScrolling && _.scrollHeight === _.clientHeight == (_.scrollWidth === _.clientHeight) || c.allowEventDefault ? "manipulation" : de ? "pan-y" : "pan-x"), O = Pe.length; --O > -1;) H = Pe[O], Ri || Xt(H, "mousedown", Vt), Xt(H, "touchstart", Vt), Xt(H, "click", ut, !0), ce.set(H, T), H.getBBox && H.ownerSVGElement && de !== we && ce.set(H.ownerSVGElement, {
                                touchAction: c.allowNativeTouchScrolling || c.allowEventDefault ? "manipulation" : de ? "pan-y" : "pan-x"
                            }), c.allowContextMenu || Xt(H, "contextmenu", ni);
                            Cr(Pe, !1)
                        }
                        return Ss(_, Ni), et = !0, Re && fe !== "soft" && Re.track(Ne || _, I ? "x,y" : A ? "rotation" : "top,left"), _._gsDragID = w = "d" + io++, qr[w] = h, Ne && (Ne.enable(), Ne.element._gsDragID = w), (c.bounds || A) && vi(), c.bounds && h.applyBounds(), h
                    }, v.disable = function(fe) {
                        for (var T = h.isDragging, w = Pe.length, O; --w > -1;) Ms(Pe[w], "cursor", null);
                        if (fe !== "soft") {
                            for (es(Pe, null), w = Pe.length; --w > -1;) O = Pe[w], Ms(O, "touchCallout", null), Jt(O, "mousedown", Vt), Jt(O, "touchstart", Vt), Jt(O, "click", ut, !0), Jt(O, "contextmenu", ni);
                            Cr(Pe, !0), _e && (Jt(_e, "touchcancel", lt), Jt(_e, "touchend", lt), Jt(_e, "touchmove", Nt)), Jt(be, "mouseup", lt), Jt(be, "mousemove", Nt)
                        }
                        return ks(_, Ni), et = !1, Re && fe !== "soft" && (Re.untrack(Ne || _, I ? "x,y" : A ? "rotation" : "top,left"), h.tween && h.tween.kill()), Ne && Ne.disable(), rs(Pt), h.isDragging = h.isPressed = At = !1, T && ot(h, "dragend", "onDragEnd"), h
                    }, v.enabled = function(fe, T) {
                        return arguments.length ? fe ? h.enable(T) : h.disable(T) : et
                    }, v.kill = function() {
                        return h.isThrowing = !1, h.tween && h.tween.kill(), h.disable(), ce.set(Pe, {
                            clearProps: "userSelect"
                        }), delete qr[_._gsDragID], h
                    }, v.revert = function() {
                        this.kill(), this.styles && this.styles.revert()
                    }, ~D.indexOf("scroll") && (Ne = v.scrollProxy = new Es(_, Jn({
                        onKill: function() {
                            h.isPressed && lt(null)
                        }
                    }, c)), _.style.overflowY = we && !Kn ? "auto" : "hidden", _.style.overflowX = de && !Kn ? "auto" : "hidden", _ = Ne.content), A ? nt.rotation = 1 : (de && (nt[Z] = 1), we && (nt[G] = 1)), re.force3D = "force3D" in c ? c.force3D : !0, Tt(r(v)), v.enable(), v
                }
                return o.register = function(c) {
                    ce = c, Mr()
                }, o.create = function(c, v) {
                    return Wi || Mr(!0), ui(c).map(function(D) {
                        return new o(D, v)
                    })
                }, o.get = function(c) {
                    return qr[(ui(c)[0] || {})._gsDragID]
                }, o.timeSinceDrag = function() {
                    return (Ut() - Zn) / 1e3
                }, o.hitTest = function(c, v, D) {
                    if (c === v) return !1;
                    var I = kr(c),
                        A = kr(v),
                        Z = I.top,
                        G = I.left,
                        de = I.right,
                        we = I.bottom,
                        Se = I.width,
                        h = I.height,
                        Pe = A.left > de || A.right < G || A.top > we || A.bottom < Z,
                        nt, ri, ze;
                    return Pe || !D ? !Pe : (ze = (D + "").indexOf("%") !== -1, D = parseFloat(D) || 0, nt = {
                        left: Math.max(G, A.left),
                        top: Math.max(Z, A.top)
                    }, nt.width = Math.min(de, A.right) - nt.left, nt.height = Math.min(we, A.bottom) - nt.top, nt.width < 0 || nt.height < 0 ? !1 : ze ? (D *= .01, ri = nt.width * nt.height, ri >= Se * h * D || ri >= A.width * A.height * D) : nt.width > D && nt.height > D)
                }, o
            }(Zr);
        ji(Gi.prototype, {
            pointerX: 0,
            pointerY: 0,
            startX: 0,
            startY: 0,
            deltaX: 0,
            deltaY: 0,
            isDragging: !1,
            isPressed: !1
        }), Gi.zIndex = 1e3, Gi.version = "3.12.5", un() && ce.registerPlugin(Gi);
        /*!
         * GSDevTools 3.12.5
         * https://gsap.com
         *
         * @license Copyright 2008-2024, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var Ie, jr, Ui, Ot, Li, rt, Mn, Qe, kt, ss, mi, mt, ar, Os, Pn = !0,
            cn = 0,
            so = function() {
                return typeof window < "u"
            },
            Dn = function() {
                return Ie || so() && (Ie = window.gsap) && Ie.registerPlugin && Ie
            },
            Rt = function(o) {
                return typeof o == "string"
            },
            di = function(o) {
                return typeof o == "function"
            },
            os = function(o) {
                return typeof o == "object"
            },
            En = function(o) {
                return typeof o > "u"
            },
            On = "http://www.w3.org/2000/svg",
            Rn = "http://www.w3.org/1999/xhtml",
            as = 0,
            Pr = {},
            An = function() {
                try {
                    return sessionStorage.setItem("gsTest", "1"), sessionStorage.removeItem("gsTest"), !0
                } catch {
                    return !1
                }
            }(),
            Ue = function(o) {
                return o instanceof Mn ? o : o ? Ie.getById(o) : null
            },
            hn = function(o, _, c) {
                var v = Ui.createElementNS ? Ui.createElementNS(o === "svg" ? On : Rn, o) : Ui.createElement(o);
                return _ && (Rt(_) && (_ = Ui.querySelector(_)), _.appendChild(v)), o === "svg" && (v.setAttribute("xmlns", On), v.setAttribute("xmlns:xlink", Rn)), c && (v.style.cssText = c), v
            },
            dn = function() {
                Ui.selection ? Ui.selection.empty() : Li.getSelection && Li.getSelection().removeAllRanges()
            },
            oo = function F(o, _) {
                for (var c = [], v = 0, D = Ie.core.Tween, I = o._first; I;) I instanceof D ? I.vars.id && (c[v++] = I) : (_ && I.vars.id && (c[v++] = I), c = c.concat(F(I, _)), v = c.length), I = I._next;
                return c
            },
            Jr = function(o, _) {
                var c = 0,
                    v = Math.max(0, o._repeat),
                    D = o._first;
                for (D || (c = o.duration()); D;) c = Math.max(c, D.totalDuration() > 999 ? D.endTime(!1) : D._start + D._tDur / D._ts), D = D._next;
                return !_ && v ? c * (v + 1) + o._rDelay * v : c
            },
            Rs = function(o, _) {
                for (var c = o, v = arguments.length > 1 ? +_ : c.rawTime(); c;) v = c._start + v / (c._ts || 1), c = c.parent;
                return v
            },
            en = function(o, _, c, v) {
                var D, I, A;
                return Rt(o) && (o.charAt(1) === "=" ? (D = parseInt(o.charAt(0) + "1", 10) * parseFloat(o.substr(2)), D < 0 && v === 0 && (v = 100), o = v / 100 * _.duration() + D) : isNaN(o) && _.labels && _.labels[o] !== -1 ? o = _.labels[o] : _ === rt && (I = o.indexOf("="), I > 0 ? (D = parseInt(o.charAt(I - 1) + "1", 10) * parseFloat(o.substr(I + 1)), o = o.substr(0, I - 1)) : D = 0, A = Ie.getById(o), A && (o = Rs(A, c / 100 * A.duration()) + D))), o = isNaN(o) ? c : parseFloat(o), Math.min(100, Math.max(0, o / _.duration() * 100))
            },
            Nr, Po = function(o, _, c) {
                Nr || (hn("style", Ot).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}", Nr = !0), Rt(o) && (o = Ui.querySelector(o));
                var v = hn("div", o || Ot.getElementsByTagName("body")[0] || Ot);
                return v.setAttribute("class", "gs-dev-tools" + (_ ? " minimal" : "")), v.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg><svg class=out-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span><svg class=select-arrow viewBox="0 0 12.05 6.73" xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38" xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg><svg class=play-pause viewBox="0 0 20.97 25.67" xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88" class="gs-btn-white play-1" style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85" class="gs-btn-white play-2" style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38" xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67" xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://gsap.com/docs/v3/Plugins/GSDevTools?source=GSDevTools" target=_blank title=Docs><svg class=logo viewBox="0 0 100 100" xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z" style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z" style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z" style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>', o && (v.style.position = "absolute", v.style.top = _ ? "calc(100% - 42px)" : "calc(100% - 51px)"), c && (Rt(c) ? v.style.cssText = c : os(c) && (c.data = "root", Ie.set(v, c).kill()), v.style.top && (v.style.bottom = "auto"), v.style.width && Ie.set(v, {
                    xPercent: -50,
                    left: "50%",
                    right: "auto",
                    data: "root"
                }).kill()), !_ && v.offsetWidth < 600 && (v.setAttribute("class", "gs-dev-tools minimal"), o && (v.style.top = "calc(100% - 42px)")), v
            },
            As = !0,
            Ti = function(o, _, c, v) {
                var D, I;
                if ((_ === "mousedown" || _ === "mouseup") && (o.style.cursor = "pointer"), _ === "mousedown" && (I = En(o.onpointerdown) ? En(o.ontouchstart) ? null : "touchstart" : "pointerdown", I)) {
                    D = function(Z) {
                        Z.target.nodeName.toLowerCase() !== "select" && Z.type === I ? (Z.stopPropagation(), As && (Z.preventDefault(), c.call(o, Z))) : Z.type !== I && c.call(o, Z), As = !0
                    }, o.addEventListener(I, D, v), I !== "pointerdown" && o.addEventListener(_, D, v);
                    return
                }
                o.addEventListener(_, c, v)
            },
            $t = function(o, _, c) {
                o.removeEventListener(_, c), _ = _ !== "mousedown" ? null : En(o.onpointerdown) ? En(o.ontouchstart) ? null : "touchstart" : "pointerdown", _ && o.removeEventListener(_, c)
            },
            Ls = function(o, _, c, v) {
                var D = o.options,
                    I = D.length,
                    A;
                for (_ += ""; --I > -1;)
                    if (D[I].innerHTML === _ || D[I].value === _) return o.selectedIndex = I, c.innerHTML = D[I].innerHTML, D[I];
                v && (A = hn("option", o), A.setAttribute("value", _), A.innerHTML = c.innerHTML = Rt(v) ? v : _, o.selectedIndex = D.length - 1)
            },
            ls = function(o, _, c) {
                var v = o.options,
                    D = Math.min(v.length - 1, Math.max(0, o.selectedIndex + _));
                return o.selectedIndex = D, c && (c.innerHTML = v[D].innerHTML), v[D].value
            },
            pn = function() {
                var o = mi._first,
                    _, c, v;
                if (kt) {
                    for (_ = rt._dur; o;) c = o._next, v = o._targets && o._targets[0], !(di(v) && v === o.vars.onComplete && !o._dur) && !(v && v._gsIgnore) && rt.add(o, o._start - o._delay), o = c;
                    return _ !== rt.duration()
                }
            },
            Di = function(o) {
                var _ = Ie.timeline({
                    data: "root",
                    parent: mt,
                    onComplete: function() {
                        return _.kill()
                    }
                }, mt._time);
                return _.to(o.querySelector(".play-1"), {
                    duration: .4,
                    attr: {
                        d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12"
                    },
                    ease: "power2.inOut",
                    rotation: 360,
                    transformOrigin: "50% 50%"
                }).to(o.querySelector(".play-2"), {
                    duration: .4,
                    attr: {
                        d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12"
                    },
                    ease: "power2.inOut",
                    rotation: 360,
                    transformOrigin: "50% 50%"
                }, .05), _
            },
            tn = function(o) {
                var _ = Ie.timeline({
                    data: "root",
                    id: "loop",
                    parent: mt,
                    paused: !0,
                    onComplete: function() {
                        return _.kill()
                    }
                }, mt._time);
                return _.to(o, {
                    duration: .5,
                    rotation: 360,
                    ease: "power3.inOut",
                    transformOrigin: "50% 50%"
                }).to(o.querySelectorAll(".loop-path"), {
                    duration: .5,
                    fill: "#91e600",
                    ease: "none"
                }, 0), _
            },
            zs = function(o) {
                return Ie.getById(o) || mt.getById(o) || o === rt.vars.id && rt
            },
            ao = function(o) {
                Ie = o || Dn(), jr || Ie && so() && (Ui = document, Ot = Ui.documentElement, Li = window, Os = Ie.core.context || function() {}, Ie.registerPlugin(Gi), mi = Ie.globalTimeline, mi._sort = !0, mi.autoRemoveChildren = !1, Mn = Ie.core.Animation, mt = Ie.timeline({
                    data: "indy",
                    autoRemoveChildren: !0,
                    smoothChildTiming: !0
                }), mt.kill(), mt._dp = 0, mt.to({}, {
                    duration: 1e12
                }), rt = Ie.timeline({
                    data: "root",
                    id: "Global Timeline",
                    autoRemoveChildren: !1,
                    smoothChildTiming: !0,
                    parent: mt
                }, 0), Qe = Ie.to(rt, {
                    duration: 1,
                    time: 1,
                    ease: "none",
                    data: "root",
                    id: "_rootTween",
                    paused: !0,
                    immediateRender: !1,
                    parent: mt
                }, 0), mi.killTweensOf = function(_, c, v) {
                    rt.killTweensOf(_, c, v), rt.killTweensOf.call(mi, _, c, v)
                }, mt._start = Ie.ticker.time, Ie.ticker.add(function(_) {
                    return mt.render(_ - mt._start)
                }), mi._start += mi._time, rt._start = mi._time = mi._tTime = 0, ar = function(c, v, D, I) {
                    return Ie.to(v, {
                        delay: c,
                        duration: 0,
                        onComplete: v,
                        onReverseComplete: v,
                        onCompleteParams: D,
                        onReverseCompleteParams: D,
                        callbackScope: I,
                        parent: mt
                    }, mt._time)
                }, ar(.01, function() {
                    return kt ? kt.update() : pn()
                }), ar(2, function() {
                    var _, c, v;
                    if (!kt)
                        for (pn(), _ = rt._first, v = rt._start; _;) c = _._next, _._tDur !== _._tTime || !_._dur && _.progress() !== 1 ? mi.add(_, _._start - _._delay + v) : _.kill(), _ = c;
                    $i.globalRecordingTime > 2 ? ar($i.globalRecordingTime - 2, function() {
                        kt && kt.update(), mi.autoRemoveChildren = !0
                    }) : mi.autoRemoveChildren = !0, Pn = !1
                }), jr = 1)
            },
            Ns = function(o, _) {
                !_.globalSync && o.parent !== mi && mi.add(o, mi.time())
            },
            $i = function F(o) {
                jr || (ao(), Ie || console.warn("Please gsap.registerPlugin(GSDevTools)")), this.vars = o = o || {}, o.animation && (F.getByAnimation(o.animation) || {
                    kill: function() {
                        return 0
                    }
                }).kill(), o.id = o.id || (Rt(o.animation) ? o.animation : as++), Pr[o.id + ""] = this, "globalSync" in o || (o.globalSync = !o.animation);
                var _ = this,
                    c = Po(o.container, o.minimal, o.css),
                    v = function(y) {
                        return c.querySelector(y)
                    },
                    D = function(y, U) {
                        return o.persist !== !1 && An && sessionStorage.setItem("gs-dev-" + y + o.id, U), U
                    },
                    I = function(y) {
                        var U;
                        if (o.persist !== !1 && An) return U = sessionStorage.getItem("gs-dev-" + y + o.id), y === "animation" ? U : y === "loop" ? U === "true" : parseFloat(U)
                    },
                    A = v(".playhead"),
                    Z = v(".timeline-track"),
                    G = v(".progress-bar"),
                    de = v(".time"),
                    we = v(".duration"),
                    Se, h, Pe, nt, ri = 0,
                    ze = v(".in-point"),
                    xt = v(".out-point"),
                    ve = 0,
                    ee = 100,
                    at, Ct = v(".animation-list"),
                    Mt = v(".animation-label"),
                    re, K, Ht, be, et, Ne, M, l = v(".play-pause"),
                    x = Di(l),
                    u = !1,
                    g = v(".loop"),
                    C = tn(g),
                    R, k = v(".time-scale select"),
                    Y = v(".time-scale-label"),
                    le = function(y, U, ue) {
                        return function(qe) {
                            var Ze = Z.getBoundingClientRect(),
                                vi = y.getBoundingClientRect(),
                                Kt = vi.width * U,
                                Wt = Ie.getProperty(y, "x"),
                                Vt = Ze.left - vi.left - Kt + Wt,
                                Nt = Ze.right - vi.right + (vi.width - Kt) + Wt,
                                zi = Vt,
                                lt;
                            ue && (y !== ze && (lt = ze.getBoundingClientRect(), lt.left && (Vt += lt.left + lt.width - Ze.left)), y !== xt && (lt = xt.getBoundingClientRect(), lt.left && (Nt -= Ze.left + Ze.width - lt.left))), at = u, this.applyBounds({
                                minX: Vt,
                                maxX: Nt
                            }), Se = K.duration() / Ze.width, h = -zi * Se, nt ? K.pause() : K.pause(h + Se * this.x), this.target === A && (this.activated && (this.allowEventDefault = !1), this.activated = !0), Pe = !0
                        }
                    },
                    pe = Gi.create(A, {
                        type: "x",
                        cursor: "ew-resize",
                        allowNativeTouchScrolling: !1,
                        allowEventDefault: !0,
                        onPress: le(A, .5, !0),
                        onDrag: function() {
                            var y = h + Se * this.x;
                            y < 0 ? y = 0 : y > K._dur && (y = K._dur), nt || K.time(y), G.style.width = Math.min(ee - ve, Math.max(0, y / K._dur * 100 - ve)) + "%", de.innerHTML = y.toFixed(2)
                        },
                        onRelease: function() {
                            u || K.resume()
                        }
                    })[0],
                    Ve = function() {
                        ve = 0, ee = 100, ze.style.left = "0%", xt.style.left = "100%", D("in", ve), D("out", ee), ie(!0)
                    },
                    oe = Gi.create(ze, {
                        type: "x",
                        cursor: "ew-resize",
                        zIndexBoost: !1,
                        allowNativeTouchScrolling: !1,
                        allowEventDefault: !0,
                        onPress: le(ze, 1, !0),
                        onDoubleClick: Ve,
                        onDrag: function() {
                            ve = (h + Se * this.x) / K.duration() * 100, K.progress(ve / 100), ie(!0)
                        },
                        onRelease: function() {
                            ve < 0 && (ve = 0), dn(), ze.style.left = ve + "%", D("in", ve), Ie.set(ze, {
                                x: 0,
                                data: "root",
                                display: "block"
                            }), u || K.resume()
                        }
                    })[0],
                    B = Gi.create(xt, {
                        type: "x",
                        cursor: "ew-resize",
                        allowNativeTouchScrolling: !1,
                        allowEventDefault: !0,
                        zIndexBoost: !1,
                        onPress: le(xt, 0, !0),
                        onDoubleClick: Ve,
                        onDrag: function() {
                            ee = (h + Se * this.x) / K.duration() * 100, K.progress(ee / 100), ie(!0)
                        },
                        onRelease: function() {
                            ee > 100 && (ee = 100), dn(), xt.style.left = ee + "%", D("out", ee), Ie.set(xt, {
                                x: 0,
                                data: "root",
                                display: "block"
                            }), at || (Ge(), K.resume())
                        }
                    })[0],
                    ie = function(y) {
                        if (!(pe.isPressed && y !== !0)) {
                            var U = !R && re._repeat === -1 ? re.totalTime() / re.duration() * 100 : K.progress() * 100 || 0,
                                ue = re._repeat && re._rDelay && re.totalTime() % (re.duration() + re._rDelay) > re.duration(),
                                qe;
                            U > 100 && (U = 100), U >= ee ? R && !K.paused() && !pe.isDragging ? ue || (U = ve, qe = K._targets && K._targets[0], qe === re && qe.seek(be + (et - be) * ve / 100), re._repeat > 0 && !ve && ee === 100 ? re.totalProgress() === 1 && K.totalProgress(0, !0).resume() : K.progress(U / 100, !0).resume()) : ((U !== ee || re._repeat === -1) && (U = ee, K.progress(U / 100)), !u && (ee < 100 || re.totalProgress() === 1 || re._repeat === -1) && pt()) : U < ve && (U = ve, K.progress(U / 100, !0)), (U !== ri || y === !0) && (G.style.left = ve + "%", G.style.width = Math.max(0, U - ve) + "%", A.style.left = U + "%", de.innerHTML = K._time.toFixed(2), we.innerHTML = K._dur.toFixed(2), Pe && (A.style.transform = "translate(-50%,0)", A._gsap.x = "0px", A._gsap.xPercent = -50, Pe = !1), ri = U), K.paused() !== u && st()
                        }
                    },
                    yt = function(y) {
                        if (!pe.isPressed) {
                            var U = y.target.getBoundingClientRect(),
                                ue = (y.changedTouches ? y.changedTouches[0] : y).clientX,
                                qe = (ue - U.left) / U.width * 100;
                            if (qe < ve) {
                                ve = qe = Math.max(0, qe), ze.style.left = ve + "%", oe.startDrag(y);
                                return
                            } else if (qe > ee) {
                                ee = qe = Math.min(100, qe), xt.style.left = ee + "%", B.startDrag(y);
                                return
                            }
                            K.progress(qe / 100).pause(), ie(!0), pe.startDrag(y)
                        }
                    },
                    Ge = function() {
                        if (K.progress() >= ee / 100) {
                            Ns(K, o);
                            var y = K._targets && K._targets[0];
                            y === re && y.seek(be + (et - be) * ve / 100), K._repeat && !ve ? K.totalProgress(0, !0) : K.reversed() || K.progress(ve / 100, !0)
                        }
                        x.play(), K.resume(), u && _.update(), u = !1
                    },
                    pt = function() {
                        x.reverse(), K && K.pause(), u = !0
                    },
                    st = function() {
                        u ? Ge() : pt()
                    },
                    At = function(y) {
                        if (!pe.isPressed) {
                            Ns(K, o);
                            var U = K._targets && K._targets[0];
                            U === re && U.seek(be + (et - be) * ve / 100), K.progress(ve / 100, !0), u || K.resume()
                        }
                    },
                    _e = function(y) {
                        if (R = y, D("loop", R), R) {
                            if (C.play(), K.progress() >= ee / 100) {
                                var U = K._targets && K._targets[0];
                                U === re && U.seek(be + (et - be) * ve / 100), re._repeat && !ve && ee === 100 ? K.totalProgress(0, !0) : K.progress(ve / 100, !0), Ge()
                            }
                        } else C.reverse()
                    },
                    Ae = function() {
                        return _e(!R)
                    },
                    _t = function() {
                        var y = oo(Ht && !o.globalSync ? Ht : rt, !0),
                            U = Ct.children,
                            ue = 0,
                            qe, Ze;
                        for (Ht && !o.globalSync ? y.unshift(Ht) : o.hideGlobalTimeline || y.unshift(rt), Ze = 0; Ze < y.length; Ze++) qe = U[Ze] || hn("option", Ct), qe.animation = y[Ze], ue = Ze && y[Ze].vars.id === y[Ze - 1].vars.id ? ue + 1 : 0, qe.setAttribute("value", qe.innerHTML = y[Ze].vars.id + (ue ? " [" + ue + "]" : y[Ze + 1] && y[Ze + 1].vars.id === y[Ze].vars.id ? " [0]" : ""));
                        for (; Ze < U.length; Ze++) Ct.removeChild(U[Ze])
                    },
                    ge = function(y) {
                        var U = parseFloat(k.options[k.selectedIndex].value) || 1,
                            ue, qe;
                        if (!arguments.length) return re;
                        if (Rt(y) && (y = zs(y)), y instanceof Mn || console.warn("GSDevTools error: invalid animation."), y.scrollTrigger && console.warn("GSDevTools can't work with ScrollTrigger-based animations; either the scrollbar -OR- the GSDevTools scrubber can control the animation."), y !== re) {
                            if (re && (re._inProgress = ve, re._outProgress = ee), re = y, K && (U = K.timeScale(), K._targets && K._targets[0] === Ht && (Ht.resume(), K.kill())), ve = re._inProgress || 0, ee = re._outProgress || 100, ze.style.left = ve + "%", xt.style.left = ee + "%", Ne && (D("animation", re.vars.id), D("in", ve), D("out", ee)), be = 0, qe = o.maxDuration || Math.min(1e3, Jr(re)), re === rt || o.globalSync) {
                                if (pn(), K = Qe, kt && kt !== _ && console.warn("Error: GSDevTools can only have one instance that's globally synchronized."), kt = _, re !== rt)
                                    for (ue = re, et = ue.totalDuration(), et > 99999999 && (et = ue.duration()); ue.parent;) be = be / ue._ts + ue._start, et = et / ue._ts + ue._start, ue = ue.parent;
                                else et = rt.duration();
                                et - be > qe && (et = be + qe), rt.pause(be), Qe.vars.time = et, Qe.invalidate(), Qe.duration(et - be).timeScale(U), u ? Qe.progress(1, !0).pause(0, !0) : ar(.01, function() {
                                    Qe.resume().progress(ve / 100), u && Ge()
                                })
                            } else {
                                if (kt === _ && (kt = null), be = Math.min(ve * re.duration(), re.time()), re === Ht || !Ht) K = re, !R && K._repeat && _e(!0);
                                else {
                                    for (ue = re, et = ue.totalDuration(), et > 99999999 && (et = ue.duration()); ue.parent.parent && ue !== Ht;) be = be / (ue._ts || ue._pauseTS) + ue._start, et = et / (ue._ts || ue._pauseTS) + ue._start, ue = ue.parent;
                                    et - be > qe && (et = be + qe), Ht.pause(be), K = Ie.to(Ht, {
                                        duration: et - be,
                                        time: et,
                                        ease: "none",
                                        data: "root",
                                        parent: mt
                                    }, mt._time)
                                }
                                K.timeScale(U), Qe.pause(), rt.resume(), K.seek(0)
                            }
                            we.innerHTML = K.duration().toFixed(2), Ls(Ct, re.vars.id, Mt)
                        }
                    },
                    wt = function() {
                        var y, U, ue;
                        re === rt && (y = rt._time, rt.progress(1, !0).time(y, !0), y = (Qe._dp._time - Qe._start) * Qe._ts, ue = Math.min(1e3, rt.duration()), ue === 1e3 && (ue = Math.min(1e3, Jr(rt))), U = Qe.duration() / ue, U !== 1 && ue && (ve *= U, ee < 100 && (ee *= U), Qe.seek(0), Qe.vars.time = ue, Qe.invalidate(), Qe.duration(ue), Qe.time(y), we.innerHTML = ue.toFixed(2), ze.style.left = ve + "%", xt.style.left = ee + "%", ie(!0)))
                    },
                    fi = function(y) {
                        ge(Ct.options[Ct.selectedIndex].animation), y.target && y.target.blur && y.target.blur(), u && Ge()
                    },
                    xe = function(y) {
                        var U = parseFloat(k.options[k.selectedIndex].value) || 1,
                            ue;
                        K.timeScale(U), D("timeScale", U), u || (K.progress() >= ee / 100 ? (ue = K._targets && K._targets[0], ue === re && ue.seek(be + (et - be) * ve / 100), K.progress(ve / 100, !0).pause()) : K.pause(), ar(.01, function() {
                            return K.resume()
                        })), Y.innerHTML = U + "x", k.blur && k.blur()
                    },
                    qt = Ie.to([v(".gs-bottom"), v(".gs-top")], {
                        duration: .3,
                        autoAlpha: 0,
                        y: 50,
                        ease: "power2.in",
                        data: "root",
                        paused: !0,
                        parent: mt
                    }, mt._time),
                    he = !1,
                    qi = function(y) {
                        !Gi.hitTest(y, c) && !pe.isDragging && !oe.isDragging && !B.isDragging && $e.restart(!0)
                    },
                    Lt = function() {
                        he || (qt.play(), $e.pause(), he = !0)
                    },
                    ni = function() {
                        $e.pause(), he && (qt.reverse(), he = !1)
                    },
                    Pt = function() {
                        he ? ni() : Lt()
                    },
                    $e = ar(1.3, Lt).pause(),
                    zt = function(y) {
                        Pn && !cn && (cn = rt._start), Ne = !y, Ht = Ue(o.animation), Ht && !Ht.vars.id && (Ht.vars.id = "[no id]"), pn(), _t();
                        var U = zs(I("animation"));
                        U && (U._inProgress = I("in") || 0, U._outProgress = I("out") || 100), o.paused && pt(), re = null, ge(Ht || U || rt);
                        var ue = o.timeScale || I("timeScale"),
                            qe = U === re;
                        ue && (Ls(k, ue, Y, ue + "x"), K.timeScale(ue)), ve = ("inTime" in o ? en(o.inTime, re, 0, 0) : qe ? U._inProgress : 0) || 0, ve === 100 && !o.animation && U && (ge(rt), ve = en(o.inTime, re, 0, 0) || 0), ve && (ze.style.left = ve + "%", ze.style.display = xt.style.display = "block"), ee = ("outTime" in o ? en(o.outTime, re, 100, ve) : qe ? U._outProgress : 0) || 100, ee < ve && (ee = 100), ee !== 100 && (xt.style.left = ee + "%", ze.style.display = xt.style.display = "block"), R = "loop" in o ? o.loop : I("loop"), R && _e(!0), o.paused && K.progress(ve / 100, !0).pause(), Pn && re === rt && cn && o.globalSync && !u && K.time(-cn, !0), ie(!0)
                    };
                Ti(Ct, "change", fi), Ti(Ct, "mousedown", _t), Ti(l, "mousedown", st), Ti(v(".seek-bar"), "mousedown", yt), Ti(v(".rewind"), "mousedown", At), Ti(g, "mousedown", Ae), Ti(k, "change", xe), o.visibility === "auto" ? (Ti(c, "mouseout", qi), Ti(c, "mouseover", ni)) : o.visibility === "hidden" && (he = !0, qt.progress(1)), o.keyboard !== !1 && (ss && o.keyboard ? console.warn("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (ss = _, M = function(y) {
                    var U = y.keyCode ? y.keyCode : y.which,
                        ue;
                    U === 32 ? st() : U === 38 ? (ue = parseFloat(ls(k, -1, Y)), K.timeScale(ue), D("timeScale", ue)) : U === 40 ? (ue = parseFloat(ls(k, 1, Y)), K.timeScale(ue), D("timeScale", ue)) : U === 37 ? At() : U === 39 ? K.progress(ee / 100) : U === 76 ? Ae() : U === 72 ? Pt() : U === 73 ? (ve = K.progress() * 100, D("in", ve), ze.style.left = ve + "%", ie(!0)) : U === 79 && (ee = K.progress() * 100, D("out", ee), xt.style.left = ee + "%", ie(!0))
                }, Ti(Ot, "keydown", M))), Ie.set(A, {
                    xPercent: -50,
                    x: 0,
                    data: "root"
                }), Ie.set(ze, {
                    xPercent: -100,
                    x: 0,
                    data: "root"
                }), ze._gsIgnore = xt._gsIgnore = A._gsIgnore = l._gsIgnore = g._gsIgnore = !0, Ie.killTweensOf([ze, xt, A]), zt(Pn), Pn && ar(1e-4, zt, [!1], this), Ie.ticker.add(ie), this.update = function(ye) {
                    kt === _ && ((!Qe.paused() || ye) && pn(), wt())
                }, this.kill = this.revert = function() {
                    $t(Ct, "change", fi), $t(Ct, "mousedown", _t), $t(l, "mousedown", st), $t(v(".seek-bar"), "mousedown", yt), $t(v(".rewind"), "mousedown", At), $t(g, "mousedown", Ae), $t(k, "change", xe), pe.disable(), oe.disable(), B.disable(), Ie.ticker.remove(ie), $t(c, "mouseout", qi), $t(c, "mouseover", ni), c.parentNode.removeChild(c), kt === _ && (kt = null), ss === _ && (ss = null, $t(Ot, "keydown", M)), delete Pr[o.id + ""]
                }, this.minimal = function(ye) {
                    var y = c.classList.contains("minimal"),
                        U;
                    if (!arguments.length || y === ye) return y;
                    ye ? c.classList.add("minimal") : c.classList.remove("minimal"), o.container && (c.style.top = ye ? "calc(100% - 42px)" : "calc(100% - 51px)"), pe.isPressed && (nt = !0, pe.endDrag(pe.pointerEvent), nt = !1, U = K.progress() * 100, G.style.width = Math.max(0, U - ve) + "%", A.style.left = U + "%", A.style.transform = "translate(-50%,0)", A._gsap.x = "0px", A._gsap.xPercent = -50, pe.startDrag(pe.pointerEvent, !0))
                }, this.animation = ge, this.updateList = _t, Os(this)
            };
        $i.version = "3.12.5", $i.globalRecordingTime = 2, $i.getById = function(F) {
            return F ? Pr[F] : kt
        }, $i.getByAnimation = function(F) {
            Rt(F) && (F = Ie.getById(F));
            for (var o in Pr)
                if (Pr[o].animation() === F) return Pr[o]
        }, $i.create = function(F) {
            return new $i(F)
        }, $i.register = ao, Dn() && Ie.registerPlugin($i), t.GSDevTools = $i, t.default = $i, typeof window > "u" || window !== t ? Object.defineProperty(t, "__esModule", {
            value: !0
        }) : delete window.default
    })
})(ia, ia.exports);
var rf = ia.exports;
bo.registerPlugin(Xl.SplitText, Fl.ScrollTrigger, rf.GSDevTools);

function To(p, e, t) {
    return Math.max(p, Math.min(e, t))
}
class nf {
    advance(e) {
        var a;
        if (!this.isRunning) return;
        let t = !1;
        if (this.lerp) this.value = (i = this.value, r = this.to, n = 60 * this.lerp, s = e, function(f, d, m) {
            return (1 - m) * f + m * d
        }(i, r, 1 - Math.exp(-n * s))), Math.round(this.value) === this.to && (this.value = this.to, t = !0);
        else {
            this.currentTime += e;
            const f = To(0, this.currentTime / this.duration, 1);
            t = f >= 1;
            const d = t ? 1 : this.easing(f);
            this.value = this.from + (this.to - this.from) * d
        }
        var i, r, n, s;
        (a = this.onUpdate) == null || a.call(this, this.value, t), t && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, t, {
        lerp: i = .1,
        duration: r = 1,
        easing: n = f => f,
        onStart: s,
        onUpdate: a
    }) {
        this.from = this.value = e, this.to = t, this.lerp = i, this.duration = r, this.easing = n, this.currentTime = 0, this.isRunning = !0, s == null || s(), this.onUpdate = a
    }
}
class sf {
    constructor({
        wrapper: e,
        content: t,
        autoResize: i = !0,
        debounce: r = 250
    } = {}) {
        gn(this, "resize", () => {
            this.onWrapperResize(), this.onContentResize()
        });
        gn(this, "onWrapperResize", () => {
            this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        });
        gn(this, "onContentResize", () => {
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        });
        this.wrapper = e, this.content = t, i && (this.debouncedResize = function(n, s) {
            let a;
            return function() {
                let f = arguments,
                    d = this;
                clearTimeout(a), a = setTimeout(function() {
                    n.apply(d, f)
                }, s)
            }
        }(this.resize, r), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
    }
    destroy() {
        var e, t;
        (e = this.wrapperResizeObserver) == null || e.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class Il {
    constructor() {
        this.events = {}
    }
    emit(e, ...t) {
        let i = this.events[e] || [];
        for (let r = 0, n = i.length; r < n; r++) i[r](...t)
    }
    on(e, t) {
        var i;
        return (i = this.events[e]) != null && i.push(t) || (this.events[e] = [t]), () => {
            var r;
            this.events[e] = (r = this.events[e]) == null ? void 0 : r.filter(n => t !== n)
        }
    }
    off(e, t) {
        var i;
        this.events[e] = (i = this.events[e]) == null ? void 0 : i.filter(r => t !== r)
    }
    destroy() {
        this.events = {}
    }
}
class of {
    constructor(e, {
        wheelMultiplier: t = 1,
        touchMultiplier: i = 2,
        normalizeWheel: r = !1
    }) {
        gn(this, "onTouchStart", e => {
            const {
                clientX: t,
                clientY: i
            } = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
        });
        gn(this, "onTouchMove", e => {
            const {
                clientX: t,
                clientY: i
            } = e.targetTouches ? e.targetTouches[0] : e, r = -(t - this.touchStart.x) * this.touchMultiplier, n = -(i - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                x: r,
                y: n
            }, this.emitter.emit("scroll", {
                deltaX: r,
                deltaY: n,
                event: e
            })
        });
        gn(this, "onTouchEnd", e => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e
            })
        });
        gn(this, "onWheel", e => {
            let {
                deltaX: t,
                deltaY: i
            } = e;
            this.normalizeWheel && (t = To(-100, t, 100), i = To(-100, i, 100)), t *= this.wheelMultiplier, i *= this.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: t,
                deltaY: i,
                event: e
            })
        });
        this.element = e, this.wheelMultiplier = t, this.touchMultiplier = i, this.normalizeWheel = r, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new Il, this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    destroy() {
        this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class af {
    constructor({
        wrapper: e = window,
        content: t = document.documentElement,
        wheelEventsTarget: i = e,
        eventsTarget: r = i,
        smoothWheel: n = !0,
        syncTouch: s = !1,
        syncTouchLerp: a = .075,
        touchInertiaMultiplier: f = 35,
        duration: d,
        easing: m = X => Math.min(1, 1.001 - Math.pow(2, -10 * X)),
        lerp: S = !d && .1,
        infinite: P = !1,
        orientation: E = "vertical",
        gestureOrientation: N = "vertical",
        touchMultiplier: b = 1,
        wheelMultiplier: L = 1,
        normalizeWheel: V = !1,
        autoResize: W = !0,
        __experimental__naiveDimensions: q = !1
    } = {}) {
        this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({
            deltaX: X,
            deltaY: z,
            event: $
        }) => {
            if ($.ctrlKey) return;
            const J = $.type.includes("touch"),
                ne = $.type.includes("wheel");
            if (this.options.syncTouch && J && $.type === "touchstart") return void this.reset();
            const Q = X === 0 && z === 0,
                Le = this.options.gestureOrientation === "vertical" && z === 0 || this.options.gestureOrientation === "horizontal" && X === 0;
            if (Q || Le) return;
            let Je = $.composedPath();
            if (Je = Je.slice(0, Je.indexOf(this.rootElement)), Je.find(ce => {
                    var Te, We, Fe, Ke, bt;
                    return ((Te = ce.hasAttribute) === null || Te === void 0 ? void 0 : Te.call(ce, "data-lenis-prevent")) || J && ((We = ce.hasAttribute) === null || We === void 0 ? void 0 : We.call(ce, "data-lenis-prevent-touch")) || ne && ((Fe = ce.hasAttribute) === null || Fe === void 0 ? void 0 : Fe.call(ce, "data-lenis-prevent-wheel")) || ((Ke = ce.classList) === null || Ke === void 0 ? void 0 : Ke.contains("lenis")) && !(!((bt = ce.classList) === null || bt === void 0) && bt.contains("lenis-stopped"))
                })) return;
            if (this.isStopped || this.isLocked) return void $.preventDefault();
            if (this.isSmooth = this.options.syncTouch && J || this.options.smoothWheel && ne, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
            $.preventDefault();
            let Ce = z;
            this.options.gestureOrientation === "both" ? Ce = Math.abs(z) > Math.abs(X) ? z : X : this.options.gestureOrientation === "horizontal" && (Ce = X);
            const Me = J && this.options.syncTouch,
                dt = J && $.type === "touchend" && Math.abs(Ce) > 5;
            dt && (Ce = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + Ce, Object.assign({
                programmatic: !1
            }, Me ? {
                lerp: dt ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }))
        }, this.onNativeScroll = () => {
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const X = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - X), this.emit()
            }
        }, window.lenisVersion = "1.0.39", e !== document.documentElement && e !== document.body || (e = window), this.options = {
            wrapper: e,
            content: t,
            wheelEventsTarget: i,
            eventsTarget: r,
            smoothWheel: n,
            syncTouch: s,
            syncTouchLerp: a,
            touchInertiaMultiplier: f,
            duration: d,
            easing: m,
            lerp: S,
            infinite: P,
            gestureOrientation: N,
            orientation: E,
            touchMultiplier: b,
            wheelMultiplier: L,
            normalizeWheel: V,
            autoResize: W,
            __experimental__naiveDimensions: q
        }, this.animate = new nf, this.emitter = new Il, this.dimensions = new sf({
            wrapper: e,
            content: t,
            autoResize: W
        }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = s || n, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }), this.virtualScroll = new of (r, {
            touchMultiplier: b,
            wheelMultiplier: L,
            normalizeWheel: V
        }), this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    off(e, t) {
        return this.emitter.off(e, t)
    }
    setScroll(e) {
        this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1, this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
    }
    raf(e) {
        const t = e - (this.time || e);
        this.time = e, this.animate.advance(.001 * t)
    }
    scrollTo(e, {
        offset: t = 0,
        immediate: i = !1,
        lock: r = !1,
        duration: n = this.options.duration,
        easing: s = this.options.easing,
        lerp: a = !n && this.options.lerp,
        onComplete: f,
        force: d = !1,
        programmatic: m = !0
    } = {}) {
        if (!this.isStopped && !this.isLocked || d) {
            if (["top", "left", "start"].includes(e)) e = 0;
            else if (["bottom", "right", "end"].includes(e)) e = this.limit;
            else {
                let S;
                if (typeof e == "string" ? S = document.querySelector(e) : e != null && e.nodeType && (S = e), S) {
                    if (this.options.wrapper !== window) {
                        const E = this.options.wrapper.getBoundingClientRect();
                        t -= this.isHorizontal ? E.left : E.top
                    }
                    const P = S.getBoundingClientRect();
                    e = (this.isHorizontal ? P.left : P.top) + this.animatedScroll
                }
            }
            if (typeof e == "number") {
                if (e += t, e = Math.round(e), this.options.infinite ? m && (this.targetScroll = this.animatedScroll = this.scroll) : e = To(0, e, this.limit), i) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void(f == null || f(this));
                if (!m) {
                    if (e === this.targetScroll) return;
                    this.targetScroll = e
                }
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: n,
                    easing: s,
                    lerp: a,
                    onStart: () => {
                        r && (this.isLocked = !0), this.isScrolling = !0
                    },
                    onUpdate: (S, P) => {
                        this.isScrolling = !0, this.velocity = S - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = S, this.setScroll(this.scroll), m && (this.targetScroll = S), P || this.emit(), P && (this.reset(), this.emit(), f == null || f(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(() => {
                            delete this.__preventNextScrollEvent
                        }))
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (e = this.animatedScroll, t = this.limit, (e % t + t) % t) : this.animatedScroll;
        var e, t
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(e) {
        this.__isSmooth !== e && (this.__isSmooth = e, this.toggleClassName("lenis-smooth", e))
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(e) {
        this.__isScrolling !== e && (this.__isScrolling = e, this.toggleClassName("lenis-scrolling", e))
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(e) {
        this.__isStopped !== e && (this.__isStopped = e, this.toggleClassName("lenis-stopped", e))
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(e) {
        this.__isLocked !== e && (this.__isLocked = e, this.toggleClassName("lenis-locked", e))
    }
    get className() {
        let e = "lenis";
        return this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isSmooth && (e += " lenis-smooth"), e
    }
    toggleClassName(e, t) {
        this.rootElement.classList.toggle(e, t), this.emitter.emit("className change", this)
    }
}
let Bo;
Bo = new af({
    duration: 1,
    easing: p => Math.min(1, 1.001 - Math.pow(2, -10 * p))
}), Bo.on("scroll", Fl.ScrollTrigger.update), bo.ticker.add(p => {
    Bo.raf(p * 1e3)
}), bo.ticker.lagSmoothing(0);
export {
    rf as G, Fl as S, ff as e, bo as g, Bo as l
};