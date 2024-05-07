function m() {}
const M = t => t;

function E(t, n) {
    for (const e in n) t[e] = n[e];
    return t
}

function j(t) {
    return t()
}

function A() {
    return Object.create(null)
}

function v(t) {
    t.forEach(j)
}

function q(t) {
    return typeof t == "function"
}

function B(t, n) {
    return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function"
}
let l;

function C(t, n) {
    return t === n ? !0 : (l || (l = document.createElement("a")), l.href = n, t === l.href)
}

function G(t) {
    return Object.keys(t).length === 0
}

function x(t, ...n) {
    if (t == null) {
        for (const r of n) r(void 0);
        return m
    }
    const e = t.subscribe(...n);
    return e.unsubscribe ? () => e.unsubscribe() : e
}

function P(t) {
    let n;
    return x(t, e => n = e)(), n
}

function S(t, n, e) {
    t.$$.on_destroy.push(x(n, e))
}

function U(t, n, e, r) {
    if (t) {
        const o = k(t, n, e, r);
        return t[0](o)
    }
}

function k(t, n, e, r) {
    return t[1] && r ? E(e.ctx.slice(), t[1](r(n))) : e.ctx
}

function H(t, n, e, r) {
    if (t[2] && r) {
        const o = t[2](r(e));
        if (n.dirty === void 0) return o;
        if (typeof o == "object") {
            const i = [],
                _ = Math.max(n.dirty.length, o.length);
            for (let u = 0; u < _; u += 1) i[u] = n.dirty[u] | o[u];
            return i
        }
        return n.dirty | o
    }
    return n.dirty
}

function I(t, n, e, r, o, i) {
    if (o) {
        const _ = k(n, e, r, i);
        t.p(_, o)
    }
}

function J(t) {
    if (t.ctx.length > 32) {
        const n = [],
            e = t.ctx.length / 32;
        for (let r = 0; r < e; r++) n[r] = -1;
        return n
    }
    return -1
}

function K(t, n, e) {
    return t.set(e), n
}

function L(t) {
    return t && q(t.destroy) ? t.destroy : m
}

function N(t) {
    const n = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return n ? [parseFloat(n[1]), n[2] || "px"] : [t, "px"]
}
let f;

function d(t) {
    f = t
}

function b() {
    if (!f) throw new Error("Function called outside component initialization");
    return f
}

function Q(t) {
    b().$$.on_mount.push(t)
}

function R(t) {
    b().$$.after_update.push(t)
}

function T(t) {
    b().$$.on_destroy.push(t)
}
const a = [],
    y = [];
let c = [];
const p = [],
    w = Promise.resolve();
let g = !1;

function F() {
    g || (g = !0, w.then(z))
}

function V() {
    return F(), w
}

function O(t) {
    c.push(t)
}

function W(t) {
    p.push(t)
}
const h = new Set;
let s = 0;

function z() {
    if (s !== 0) return;
    const t = f;
    do {
        try {
            for (; s < a.length;) {
                const n = a[s];
                s++, d(n), D(n.$$)
            }
        } catch (n) {
            throw a.length = 0, s = 0, n
        }
        for (d(null), a.length = 0, s = 0; y.length;) y.pop()();
        for (let n = 0; n < c.length; n += 1) {
            const e = c[n];
            h.has(e) || (h.add(e), e())
        }
        c.length = 0
    } while (a.length);
    for (; p.length;) p.pop()();
    g = !1, h.clear(), d(t)
}

function D(t) {
    if (t.fragment !== null) {
        t.update(), v(t.before_update);
        const n = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(O)
    }
}

function X(t) {
    const n = [],
        e = [];
    c.forEach(r => t.indexOf(r) === -1 ? n.push(r) : e.push(r)), e.forEach(r => r()), c = n
}
export {
    F as A, P as B, N as C, K as D, E, L as F, x as G, H as a, S as b, U as c, y as d, W as e, T as f, J as g, C as h, O as i, R as j, q as k, M as l, A as m, m as n, Q as o, z as p, G as q, v as r, B as s, V as t, I as u, X as v, f as w, d as x, j as y, a as z
};