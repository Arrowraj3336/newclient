var nt = Object.defineProperty;
var it = (t, e, n) => e in t ? nt(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var g = (t, e, n) => (it(t, typeof e != "symbol" ? e + "" : e, n), n);
import {
    n as v,
    r as E,
    k as M,
    i as C,
    l as F,
    m as I,
    p as st,
    q as rt,
    v as lt,
    w as ot,
    x as q,
    y as at,
    z as ct,
    A as ft
} from "./scheduler.C-_Ebuka.js";
const U = typeof window < "u";
let V = U ? () => window.performance.now() : () => Date.now(),
    B = U ? t => requestAnimationFrame(t) : v;
const w = new Set;

function W(t) {
    w.forEach(e => {
        e.c(t) || (w.delete(e), e.f())
    }), w.size !== 0 && B(W)
}

function J(t) {
    let e;
    return w.size === 0 && B(W), {
        promise: new Promise(n => {
            w.add(e = {
                c: t,
                f: n
            })
        }),
        abort() {
            w.delete(e)
        }
    }
}
let L = !1;

function ut() {
    L = !0
}

function _t() {
    L = !1
}

function dt(t, e, n, i) {
    for (; t < e;) {
        const s = t + (e - t >> 1);
        n(s) <= i ? t = s + 1 : e = s
    }
    return t
}

function ht(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const o = [];
        for (let a = 0; a < e.length; a++) {
            const _ = e[a];
            _.claim_order !== void 0 && o.push(_)
        }
        e = o
    }
    const n = new Int32Array(e.length + 1),
        i = new Int32Array(e.length);
    n[0] = -1;
    let s = 0;
    for (let o = 0; o < e.length; o++) {
        const a = e[o].claim_order,
            _ = (s > 0 && e[n[s]].claim_order <= a ? s + 1 : dt(1, s, h => e[n[h]].claim_order, a)) - 1;
        i[o] = n[_] + 1;
        const f = _ + 1;
        n[f] = o, s = Math.max(f, s)
    }
    const c = [],
        r = [];
    let l = e.length - 1;
    for (let o = n[s] + 1; o != 0; o = i[o - 1]) {
        for (c.push(e[o - 1]); l >= o; l--) r.push(e[l]);
        l--
    }
    for (; l >= 0; l--) r.push(e[l]);
    c.reverse(), r.sort((o, a) => o.claim_order - a.claim_order);
    for (let o = 0, a = 0; o < r.length; o++) {
        for (; a < c.length && r[o].claim_order >= c[a].claim_order;) a++;
        const _ = a < c.length ? c[a] : null;
        t.insertBefore(r[o], _)
    }
}

function mt(t, e) {
    t.appendChild(e)
}

function K(t) {
    if (!t) return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}

function pt(t) {
    const e = k("style");
    return e.textContent = "/* empty */", $t(K(t), e), e.sheet
}

function $t(t, e) {
    return mt(t.head || t, e), e.sheet
}

function yt(t, e) {
    if (L) {
        for (ht(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;) t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else(e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}

function gt(t, e, n) {
    t.insertBefore(e, n || null)
}

function xt(t, e, n) {
    L && !n ? yt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}

function A(t) {
    t.parentNode && t.parentNode.removeChild(t)
}

function kt(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}

function k(t) {
    return document.createElement(t)
}

function wt(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}

function z(t) {
    return document.createTextNode(t)
}

function zt() {
    return z(" ")
}

function It() {
    return z("")
}

function qt(t, e, n, i) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}

function vt(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
const Et = ["width", "height"];

function Gt(t, e) {
    const n = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const i in e) e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && Et.indexOf(i) === -1 ? t[i] = e[i] : vt(t, i, e[i])
}

function Ft(t) {
    return t.dataset.svelteH
}

function Nt(t) {
    return Array.from(t.childNodes)
}

function Q(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function X(t, e, n, i, s = !1) {
    Q(t);
    const c = (() => {
        for (let r = t.claim_info.last_index; r < t.length; r++) {
            const l = t[r];
            if (e(l)) {
                const o = n(l);
                return o === void 0 ? t.splice(r, 1) : t[r] = o, s || (t.claim_info.last_index = r), l
            }
        }
        for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
            const l = t[r];
            if (e(l)) {
                const o = n(l);
                return o === void 0 ? t.splice(r, 1) : t[r] = o, s ? o === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = r, l
            }
        }
        return i()
    })();
    return c.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, c
}

function Tt(t, e, n, i) {
    return X(t, s => s.nodeName === e, s => {
        const c = [];
        for (let r = 0; r < s.attributes.length; r++) {
            const l = s.attributes[r];
            n[l.name] || c.push(l.name)
        }
        c.forEach(r => s.removeAttribute(r))
    }, () => i(e))
}

function Ut(t, e, n) {
    return Tt(t, e, n, k)
}

function At(t, e) {
    return X(t, n => n.nodeType === 3, n => {
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length) return n.splitText(i.length)
        } else n.data = i
    }, () => z(e), !0)
}

function Vt(t) {
    return At(t, " ")
}

function G(t, e, n) {
    for (let i = n; i < t.length; i += 1) {
        const s = t[i];
        if (s.nodeType === 8 && s.textContent.trim() === e) return i
    }
    return -1
}

function Wt(t, e) {
    const n = G(t, "HTML_TAG_START", 0),
        i = G(t, "HTML_TAG_END", n + 1);
    if (n === -1 || i === -1) return new R(e);
    Q(t);
    const s = t.splice(n, i - n + 1);
    A(s[0]), A(s[s.length - 1]);
    const c = s.slice(1, s.length - 1);
    if (c.length === 0) return new R(e);
    for (const r of c) r.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1;
    return new R(e, c)
}

function Jt(t, e) {
    e = "" + e, t.data !== e && (t.data = e)
}

function Kt(t, e) {
    t.value = e ? ? ""
}

function Qt(t, e, n, i) {
    n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
}

function bt(t, e, {
    bubbles: n = !1,
    cancelable: i = !1
} = {}) {
    return new CustomEvent(t, {
        detail: e,
        bubbles: n,
        cancelable: i
    })
}

function Xt(t, e) {
    const n = [];
    let i = 0;
    for (const s of e.childNodes)
        if (s.nodeType === 8) {
            const c = s.textContent.trim();
            c === `HEAD_${t}_END` ? (i -= 1, n.push(s)) : c === `HEAD_${t}_START` && (i += 1, n.push(s))
        } else i > 0 && n.push(s);
    return n
}
class St {
    constructor(e = !1) {
        g(this, "is_svg", !1);
        g(this, "e");
        g(this, "n");
        g(this, "t");
        g(this, "a");
        this.is_svg = e, this.e = this.n = null
    }
    c(e) {
        this.h(e)
    }
    m(e, n, i = null) {
        this.e || (this.is_svg ? this.e = wt(n.nodeName) : this.e = k(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(e)), this.i(i)
    }
    h(e) {
        this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) gt(this.t, this.n[n], e)
    }
    p(e) {
        this.d(), this.h(e), this.i(this.a)
    }
    d() {
        this.n.forEach(A)
    }
}
class R extends St {
    constructor(n = !1, i) {
        super(n);
        g(this, "l");
        this.e = this.n = null, this.l = i
    }
    c(n) {
        this.l ? this.n = this.l : super.c(n)
    }
    i(n) {
        for (let i = 0; i < this.n.length; i += 1) xt(this.t, this.n[i], n)
    }
}

function Yt(t, e) {
    return new t(e)
}
const H = new Map;
let D = 0;

function Ct(t) {
    let e = 5381,
        n = t.length;
    for (; n--;) e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}

function Ht(t, e) {
    const n = {
        stylesheet: pt(e),
        rules: {}
    };
    return H.set(t, n), n
}

function j(t, e, n, i, s, c, r, l = 0) {
    const o = 16.666 / i;
    let a = `{
`;
    for (let m = 0; m <= 1; m += o) {
        const $ = e + (n - e) * c(m);
        a += m * 100 + `%{${r($,1-$)}}
`
    }
    const _ = a + `100% {${r(n,1-n)}}
}`,
        f = `__svelte_${Ct(_)}_${l}`,
        h = K(t),
        {
            stylesheet: p,
            rules: u
        } = H.get(h) || Ht(h, t);
    u[f] || (u[f] = !0, p.insertRule(`@keyframes ${f} ${_}`, p.cssRules.length));
    const d = t.style.animation || "";
    return t.style.animation = `${d?`${d}, `:""}${f} ${i}ms linear ${s}ms 1 both`, D += 1, f
}

function Y(t, e) {
    const n = (t.style.animation || "").split(", "),
        i = n.filter(e ? c => c.indexOf(e) < 0 : c => c.indexOf("__svelte") === -1),
        s = n.length - i.length;
    s && (t.style.animation = i.join(", "), D -= s, D || Dt())
}

function Dt() {
    B(() => {
        D || (H.forEach(t => {
            const {
                ownerNode: e
            } = t.stylesheet;
            e && A(e)
        }), H.clear())
    })
}
let N;

function Z() {
    return N || (N = Promise.resolve(), N.then(() => {
        N = null
    })), N
}

function T(t, e, n) {
    t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))
}
const S = new Set;
let y;

function Zt() {
    y = {
        r: 0,
        c: [],
        p: y
    }
}

function te() {
    y.r || E(y.c), y = y.p
}

function Mt(t, e) {
    t && t.i && (S.delete(t), t.i(e))
}

function ee(t, e, n, i) {
    if (t && t.o) {
        if (S.has(t)) return;
        S.add(t), y.c.push(() => {
            S.delete(t), i && (n && t.d(1), i())
        }), t.o(e)
    } else i && i()
}
const tt = {
    duration: 0
};

function ne(t, e, n) {
    const i = {
        direction: "out"
    };
    let s = e(t, n, i),
        c = !0,
        r;
    const l = y;
    l.r += 1;
    let o;

    function a() {
        const {
            delay: _ = 0,
            duration: f = 300,
            easing: h = F,
            tick: p = v,
            css: u
        } = s || tt;
        u && (r = j(t, 1, 0, f, _, h, u));
        const d = V() + _,
            m = d + f;
        C(() => T(t, !1, "start")), "inert" in t && (o = t.inert, t.inert = !0), J($ => {
            if (c) {
                if ($ >= m) return p(0, 1), T(t, !1, "end"), --l.r || E(l.c), !1;
                if ($ >= d) {
                    const x = h(($ - d) / f);
                    p(1 - x, x)
                }
            }
            return c
        })
    }
    return M(s) ? Z().then(() => {
        s = s(i), a()
    }) : a(), {
        end(_) {
            _ && "inert" in t && (t.inert = o), _ && s.tick && s.tick(1, 0), c && (r && Y(t, r), c = !1)
        }
    }
}

function ie(t, e, n, i) {
    let c = e(t, n, {
            direction: "both"
        }),
        r = i ? 0 : 1,
        l = null,
        o = null,
        a = null,
        _;

    function f() {
        a && Y(t, a)
    }

    function h(u, d) {
        const m = u.b - r;
        return d *= Math.abs(m), {
            a: r,
            b: u.b,
            d: m,
            duration: d,
            start: u.start,
            end: u.start + d,
            group: u.group
        }
    }

    function p(u) {
        const {
            delay: d = 0,
            duration: m = 300,
            easing: $ = F,
            tick: x = v,
            css: P
        } = c || tt, O = {
            start: V() + d,
            b: u
        };
        u || (O.group = y, y.r += 1), "inert" in t && (u ? _ !== void 0 && (t.inert = _) : (_ = t.inert, t.inert = !0)), l || o ? o = O : (P && (f(), a = j(t, r, u, m, d, $, P)), u && x(0, 1), l = h(O, m), C(() => T(t, u, "start")), J(b => {
            if (o && b > o.start && (l = h(o, m), o = null, T(t, l.b, "start"), P && (f(), a = j(t, r, l.b, l.duration, 0, $, c.css))), l) {
                if (b >= l.end) x(r = l.b, 1 - r), T(t, l.b, "end"), o || (l.b ? f() : --l.group.r || E(l.group.c)), l = null;
                else if (b >= l.start) {
                    const et = b - l.start;
                    r = l.a + l.d * $(et / l.duration), x(r, 1 - r)
                }
            }
            return !!(l || o)
        }))
    }
    return {
        run(u) {
            M(c) ? Z().then(() => {
                c = c({
                    direction: u ? "in" : "out"
                }), p(u)
            }) : p(u)
        },
        end() {
            f(), l = o = null
        }
    }
}

function se(t, e, n) {
    const i = t.$$.props[e];
    i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]))
}

function re(t) {
    t && t.c()
}

function le(t, e) {
    t && t.l(e)
}

function Lt(t, e, n) {
    const {
        fragment: i,
        after_update: s
    } = t.$$;
    i && i.m(e, n), C(() => {
        const c = t.$$.on_mount.map(at).filter(M);
        t.$$.on_destroy ? t.$$.on_destroy.push(...c) : E(c), t.$$.on_mount = []
    }), s.forEach(C)
}

function Pt(t, e) {
    const n = t.$$;
    n.fragment !== null && (lt(n.after_update), E(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
}

function Ot(t, e) {
    t.$$.dirty[0] === -1 && (ct.push(t), ft(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function oe(t, e, n, i, s, c, r = null, l = [-1]) {
    const o = ot;
    q(t);
    const a = t.$$ = {
        fragment: null,
        ctx: [],
        props: c,
        update: v,
        not_equal: s,
        bound: I(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (o ? o.$$.context : [])),
        callbacks: I(),
        dirty: l,
        skip_bound: !1,
        root: e.target || o.$$.root
    };
    r && r(a.root);
    let _ = !1;
    if (a.ctx = n ? n(t, e.props || {}, (f, h, ...p) => {
            const u = p.length ? p[0] : h;
            return a.ctx && s(a.ctx[f], a.ctx[f] = u) && (!a.skip_bound && a.bound[f] && a.bound[f](u), _ && Ot(t, f)), h
        }) : [], a.update(), _ = !0, E(a.before_update), a.fragment = i ? i(a.ctx) : !1, e.target) {
        if (e.hydrate) {
            ut();
            const f = Nt(e.target);
            a.fragment && a.fragment.l(f), f.forEach(A)
        } else a.fragment && a.fragment.c();
        e.intro && Mt(t.$$.fragment), Lt(t, e.target, e.anchor), _t(), st()
    }
    q(o)
}
class ae {
    constructor() {
        g(this, "$$");
        g(this, "$$set")
    }
    $destroy() {
        Pt(this, 1), this.$destroy = v
    }
    $on(e, n) {
        if (!M(n)) return v;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n), () => {
            const s = i.indexOf(n);
            s !== -1 && i.splice(s, 1)
        }
    }
    $set(e) {
        this.$$set && !rt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
    }
}
const Rt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(Rt);
export {
    It as A, te as B, Zt as C, Yt as D, ie as E, ne as F, Gt as G, R as H, Kt as I, ae as S, Ut as a, Nt as b, Vt as c, A as d, k as e, vt as f, Ft as g, Xt as h, oe as i, xt as j, yt as k, qt as l, ee as m, se as n, re as o, le as p, Lt as q, Pt as r, zt as s, Mt as t, z as u, At as v, Jt as w, Wt as x, Qt as y, kt as z
};