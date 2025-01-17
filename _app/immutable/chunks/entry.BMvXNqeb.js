import {
    n as G,
    s as pe,
    G as ge,
    r as me,
    k as _e,
    t as _t,
    o as ye
} from "./scheduler.C-_Ebuka.js";
new URL("sveltekit-internal://");

function we(t, n) {
    return t === "/" || n === "ignore" ? t : n === "never" ? t.endsWith("/") ? t.slice(0, -1) : t : n === "always" && !t.endsWith("/") ? t + "/" : t
}

function ve(t) {
    return t.split("%25").map(decodeURI).join("%25")
}

function be(t) {
    for (const n in t) t[n] = decodeURIComponent(t[n]);
    return t
}

function ht({
    href: t
}) {
    return t.split("#")[0]
}
const Ee = ["href", "pathname", "search", "toString", "toJSON"];

function ke(t, n, e) {
    const r = new URL(t);
    Object.defineProperty(r, "searchParams", {
        value: new Proxy(r.searchParams, {
            get(a, o) {
                if (o === "get" || o === "getAll" || o === "has") return s => (e(s), a[o](s));
                n();
                const i = Reflect.get(a, o);
                return typeof i == "function" ? i.bind(a) : i
            }
        }),
        enumerable: !0,
        configurable: !0
    });
    for (const a of Ee) Object.defineProperty(r, a, {
        get() {
            return n(), t[a]
        },
        enumerable: !0,
        configurable: !0
    });
    return r
}
const Ae = "/__data.json",
    Se = ".html__data.json";

function Re(t) {
    return t.endsWith(".html") ? t.replace(/\.html$/, Se) : t.replace(/\/$/, "") + Ae
}

function Ie(...t) {
    let n = 5381;
    for (const e of t)
        if (typeof e == "string") {
            let r = e.length;
            for (; r;) n = n * 33 ^ e.charCodeAt(--r)
        } else if (ArrayBuffer.isView(e)) {
        const r = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        let a = r.length;
        for (; a;) n = n * 33 ^ r[--a]
    } else throw new TypeError("value must be a string or TypedArray");
    return (n >>> 0).toString(36)
}

function Le(t) {
    const n = atob(t),
        e = new Uint8Array(n.length);
    for (let r = 0; r < n.length; r++) e[r] = n.charCodeAt(r);
    return e.buffer
}
const Mt = window.fetch;
window.fetch = (t, n) => ((t instanceof Request ? t.method : (n == null ? void 0 : n.method) || "GET") !== "GET" && M.delete(Et(t)), Mt(t, n));
const M = new Map;

function Pe(t, n) {
    const e = Et(t, n),
        r = document.querySelector(e);
    if (r != null && r.textContent) {
        let {
            body: a,
            ...o
        } = JSON.parse(r.textContent);
        const i = r.getAttribute("data-ttl");
        return i && M.set(e, {
            body: a,
            init: o,
            ttl: 1e3 * Number(i)
        }), r.getAttribute("data-b64") !== null && (a = Le(a)), Promise.resolve(new Response(a, o))
    }
    return window.fetch(t, n)
}

function Ue(t, n, e) {
    if (M.size > 0) {
        const r = Et(t, e),
            a = M.get(r);
        if (a) {
            if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(e == null ? void 0 : e.cache)) return new Response(a.body, a.init);
            M.delete(r)
        }
    }
    return window.fetch(n, e)
}

function Et(t, n) {
    let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;
    if (n != null && n.headers || n != null && n.body) {
        const a = [];
        n.headers && a.push([...new Headers(n.headers)].join(",")), n.body && (typeof n.body == "string" || ArrayBuffer.isView(n.body)) && a.push(n.body), r += `[data-hash="${Ie(...a)}"]`
    }
    return r
}
const xe = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function Ne(t) {
    const n = [];
    return {
        pattern: t === "/" ? /^\/$/ : new RegExp(`^${Oe(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return pt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return pt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=xe.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return pt(c)}).join("")}).join("")}/?$`),
        params: n
    }
}

function Te(t) {
    return !/^\([^)]+\)$/.test(t)
}

function Oe(t) {
    return t.slice(1).split("/").filter(Te)
}

function je(t, n, e) {
    const r = {},
        a = t.slice(1),
        o = a.filter(s => s !== void 0);
    let i = 0;
    for (let s = 0; s < n.length; s += 1) {
        const c = n[s];
        let l = a[s - i];
        if (c.chained && c.rest && i && (l = a.slice(s - i, s + 1).filter(u => u).join("/"), i = 0), l === void 0) {
            c.rest && (r[c.name] = "");
            continue
        }
        if (!c.matcher || e[c.matcher](l)) {
            r[c.name] = l;
            const u = n[s + 1],
                h = a[s + 1];
            u && !u.rest && u.optional && h && c.chained && (i = 0), !u && !h && Object.keys(r).length === o.length && (i = 0);
            continue
        }
        if (c.optional && c.chained) {
            i++;
            continue
        }
        return
    }
    if (!i) return r
}

function pt(t) {
    return t.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function $e({
    nodes: t,
    server_loads: n,
    dictionary: e,
    matchers: r
}) {
    const a = new Set(n);
    return Object.entries(e).map(([s, [c, l, u]]) => {
        const {
            pattern: h,
            params: g
        } = Ne(s), d = {
            id: s,
            exec: m => {
                const f = h.exec(m);
                if (f) return je(f, g, r)
            },
            errors: [1, ...u || []].map(m => t[m]),
            layouts: [0, ...l || []].map(i),
            leaf: o(c)
        };
        return d.errors.length = d.layouts.length = Math.max(d.errors.length, d.layouts.length), d
    });

    function o(s) {
        const c = s < 0;
        return c && (s = ~s), [c, t[s]]
    }

    function i(s) {
        return s === void 0 ? s : [a.has(s), t[s]]
    }
}

function Ht(t, n = JSON.parse) {
    try {
        return n(sessionStorage[t])
    } catch {}
}

function Ot(t, n, e = JSON.stringify) {
    const r = e(n);
    try {
        sessionStorage[t] = r
    } catch {}
}
const j = [];

function De(t, n) {
    return {
        subscribe: at(t, n).subscribe
    }
}

function at(t, n = G) {
    let e;
    const r = new Set;

    function a(s) {
        if (pe(t, s) && (t = s, e)) {
            const c = !j.length;
            for (const l of r) l[1](), j.push(l, t);
            if (c) {
                for (let l = 0; l < j.length; l += 2) j[l][0](j[l + 1]);
                j.length = 0
            }
        }
    }

    function o(s) {
        a(s(t))
    }

    function i(s, c = G) {
        const l = [s, c];
        return r.add(l), r.size === 1 && (e = n(a, o) || G), s(t), () => {
            r.delete(l), r.size === 0 && e && (e(), e = null)
        }
    }
    return {
        set: a,
        update: o,
        subscribe: i
    }
}

function ln(t, n, e) {
    const r = !Array.isArray(t),
        a = r ? [t] : t;
    if (!a.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
    const o = n.length < 2;
    return De(e, (i, s) => {
        let c = !1;
        const l = [];
        let u = 0,
            h = G;
        const g = () => {
                if (u) return;
                h();
                const m = n(r ? l[0] : l, i, s);
                o ? i(m) : h = _e(m) ? m : G
            },
            d = a.map((m, f) => ge(m, _ => {
                l[f] = _, u &= ~(1 << f), c && g()
            }, () => {
                u |= 1 << f
            }));
        return c = !0, g(),
            function() {
                me(d), h(), c = !1
            }
    })
}

function fn(t) {
    return {
        subscribe: t.subscribe.bind(t)
    }
}
var qt;
const I = ((qt = globalThis.__sveltekit_14edjp5) == null ? void 0 : qt.base) ? ? "";
var Gt;
const Ce = ((Gt = globalThis.__sveltekit_14edjp5) == null ? void 0 : Gt.assets) ? ? I,
    Ve = "1711366200957",
    Bt = "sveltekit:snapshot",
    Kt = "sveltekit:scroll",
    zt = "sveltekit:states",
    Fe = "sveltekit:pageurl",
    D = "sveltekit:history",
    H = "sveltekit:navigation",
    X = {
        tap: 1,
        hover: 2,
        viewport: 3,
        eager: 4,
        off: -1,
        false: -1
    },
    Y = location.origin;

function Jt(t) {
    if (t instanceof URL) return t;
    let n = document.baseURI;
    if (!n) {
        const e = document.getElementsByTagName("base");
        n = e.length ? e[0].href : document.URL
    }
    return new URL(t, n)
}

function kt() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}

function $(t, n) {
    return t.getAttribute(`data-sveltekit-${n}`)
}
const jt = { ...X,
    "": X.hover
};

function Yt(t) {
    let n = t.assignedSlot ? ? t.parentNode;
    return (n == null ? void 0 : n.nodeType) === 11 && (n = n.host), n
}

function Wt(t, n) {
    for (; t && t !== n;) {
        if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
        t = Yt(t)
    }
}

function yt(t, n) {
    let e;
    try {
        e = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI)
    } catch {}
    const r = t instanceof SVGAElement ? t.target.baseVal : t.target,
        a = !e || !!r || rt(e, n) || (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
        o = (e == null ? void 0 : e.origin) === Y && t.hasAttribute("download");
    return {
        url: e,
        external: a,
        target: r,
        download: o
    }
}

function Z(t) {
    let n = null,
        e = null,
        r = null,
        a = null,
        o = null,
        i = null,
        s = t;
    for (; s && s !== document.documentElement;) r === null && (r = $(s, "preload-code")), a === null && (a = $(s, "preload-data")), n === null && (n = $(s, "keepfocus")), e === null && (e = $(s, "noscroll")), o === null && (o = $(s, "reload")), i === null && (i = $(s, "replacestate")), s = Yt(s);

    function c(l) {
        switch (l) {
            case "":
            case "true":
                return !0;
            case "off":
            case "false":
                return !1;
            default:
                return
        }
    }
    return {
        preload_code: jt[r ? ? "off"],
        preload_data: jt[a ? ? "off"],
        keepfocus: c(n),
        noscroll: c(e),
        reload: c(o),
        replace_state: c(i)
    }
}

function $t(t) {
    const n = at(t);
    let e = !0;

    function r() {
        e = !0, n.update(i => i)
    }

    function a(i) {
        e = !1, n.set(i)
    }

    function o(i) {
        let s;
        return n.subscribe(c => {
            (s === void 0 || e && c !== s) && i(s = c)
        })
    }
    return {
        notify: r,
        set: a,
        subscribe: o
    }
}

function qe() {
    const {
        set: t,
        subscribe: n
    } = at(!1);
    let e;
    async function r() {
        clearTimeout(e);
        try {
            const a = await fetch(`${Ce}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!a.ok) return !1;
            const i = (await a.json()).version !== Ve;
            return i && (t(!0), clearTimeout(e)), i
        } catch {
            return !1
        }
    }
    return {
        subscribe: n,
        check: r
    }
}

function rt(t, n) {
    return t.origin !== Y || !t.pathname.startsWith(n)
}
const Ge = -1,
    Me = -2,
    He = -3,
    Be = -4,
    Ke = -5,
    ze = -6;

function un(t, n) {
    return Xt(JSON.parse(t), n)
}

function Xt(t, n) {
    if (typeof t == "number") return a(t, !0);
    if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
    const e = t,
        r = Array(e.length);

    function a(o, i = !1) {
        if (o === Ge) return;
        if (o === He) return NaN;
        if (o === Be) return 1 / 0;
        if (o === Ke) return -1 / 0;
        if (o === ze) return -0;
        if (i) throw new Error("Invalid input");
        if (o in r) return r[o];
        const s = e[o];
        if (!s || typeof s != "object") r[o] = s;
        else if (Array.isArray(s))
            if (typeof s[0] == "string") {
                const c = s[0],
                    l = n == null ? void 0 : n[c];
                if (l) return r[o] = l(a(s[1]));
                switch (c) {
                    case "Date":
                        r[o] = new Date(s[1]);
                        break;
                    case "Set":
                        const u = new Set;
                        r[o] = u;
                        for (let d = 1; d < s.length; d += 1) u.add(a(s[d]));
                        break;
                    case "Map":
                        const h = new Map;
                        r[o] = h;
                        for (let d = 1; d < s.length; d += 2) h.set(a(s[d]), a(s[d + 1]));
                        break;
                    case "RegExp":
                        r[o] = new RegExp(s[1], s[2]);
                        break;
                    case "Object":
                        r[o] = Object(s[1]);
                        break;
                    case "BigInt":
                        r[o] = BigInt(s[1]);
                        break;
                    case "null":
                        const g = Object.create(null);
                        r[o] = g;
                        for (let d = 1; d < s.length; d += 2) g[s[d]] = a(s[d + 1]);
                        break;
                    default:
                        throw new Error(`Unknown type ${c}`)
                }
            } else {
                const c = new Array(s.length);
                r[o] = c;
                for (let l = 0; l < s.length; l += 1) {
                    const u = s[l];
                    u !== Me && (c[l] = a(u))
                }
            }
        else {
            const c = {};
            r[o] = c;
            for (const l in s) {
                const u = s[l];
                c[l] = a(u)
            }
        }
        return r[o]
    }
    return a(0)
}
const Zt = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Zt];
const Je = new Set([...Zt]);
[...Je];

function Ye(t) {
    return t.filter(n => n != null)
}
class ot {
    constructor(n, e) {
        this.status = n, typeof e == "string" ? this.body = {
            message: e
        } : e ? this.body = e : this.body = {
            message: `Error: ${n}`
        }
    }
    toString() {
        return JSON.stringify(this.body)
    }
}
class Qt {
    constructor(n, e) {
        this.status = n, this.location = e
    }
}
class At extends Error {
    constructor(n, e, r) {
        super(r), this.status = n, this.text = e
    }
}
const We = "x-sveltekit-invalidated",
    Xe = "x-sveltekit-trailing-slash";

function Q(t) {
    return t instanceof ot || t instanceof At ? t.status : 500
}

function Ze(t) {
    return t instanceof At ? t.text : "Internal Error"
}
const O = Ht(Kt) ? ? {},
    B = Ht(Bt) ? ? {},
    U = {
        url: $t({}),
        page: $t({}),
        navigating: at(null),
        updated: qe()
    };

function St(t) {
    O[t] = kt()
}

function Qe(t, n) {
    let e = t + 1;
    for (; O[e];) delete O[e], e += 1;
    for (e = n + 1; B[e];) delete B[e], e += 1
}

function C(t) {
    return location.href = t.href, new Promise(() => {})
}

function Dt() {}
let st, wt, tt, L, vt, F;
const te = [],
    et = [];
let P = null;
const Rt = [],
    ee = [];
let N = [],
    y = {
        branch: [],
        error: null,
        url: null
    },
    It = !1,
    nt = !1,
    Ct = !0,
    K = !1,
    q = !1,
    ne = !1,
    it = !1,
    T, k, R, S, V, gt;
async function dn(t, n, e) {
    var a, o;
    document.URL !== location.href && (location.href = location.href), F = t, st = $e(t), L = document.documentElement, vt = n, wt = t.nodes[0], tt = t.nodes[1], wt(), tt(), k = (a = history.state) == null ? void 0 : a[D], R = (o = history.state) == null ? void 0 : o[H], k || (k = R = Date.now(), history.replaceState({ ...history.state,
        [D]: k,
        [H]: R
    }, ""));
    const r = O[k];
    r && (history.scrollRestoration = "manual", scrollTo(r.x, r.y)), e ? await sn(vt, e) : rn(location.href, {
        replaceState: !0
    }), on()
}
async function tn() {
    if (await (gt || (gt = Promise.resolve())), !gt) return;
    gt = null;
    const t = ft(y.url, !0);
    P = null;
    const n = V = {},
        e = t && await Ut(t);
    if (!(!e || n !== V)) {
        if (e.type === "redirect") return ct(new URL(e.location, y.url).href, {}, 1, n);
        e.props.page && (S = e.props.page), y = e.state, ae(), T.$set(e.props)
    }
}

function ae() {
    te.length = 0, it = !1
}

function re(t) {
    et.some(n => n == null ? void 0 : n.snapshot) && (B[t] = et.map(n => {
        var e;
        return (e = n == null ? void 0 : n.snapshot) == null ? void 0 : e.capture()
    }))
}

function oe(t) {
    var n;
    (n = B[t]) == null || n.forEach((e, r) => {
        var a, o;
        (o = (a = et[r]) == null ? void 0 : a.snapshot) == null || o.restore(e)
    })
}

function Vt() {
    St(k), Ot(Kt, O), re(R), Ot(Bt, B)
}
async function ct(t, n, e, r) {
    return W({
        type: "goto",
        url: Jt(t),
        keepfocus: n.keepFocus,
        noscroll: n.noScroll,
        replace_state: n.replaceState,
        state: n.state,
        redirect_count: e,
        nav_token: r,
        accept: () => {
            n.invalidateAll && (it = !0)
        }
    })
}
async function en(t) {
    return P = {
        id: t.id,
        promise: Ut(t).then(n => (n.type === "loaded" && n.state.error && (P = null), n))
    }, P.promise
}
async function mt(t) {
    const n = st.find(e => e.exec(ce(t)));
    n && await Promise.all([...n.layouts, n.leaf].map(e => e == null ? void 0 : e[1]()))
}

function se(t, n) {
    var a;
    y = t.state;
    const e = document.querySelector("style[data-sveltekit]");
    e && e.remove(), S = t.props.page, T = new F.root({
        target: n,
        props: { ...t.props,
            stores: U,
            components: et
        },
        hydrate: !0
    }), oe(R);
    const r = {
        from: null,
        to: {
            params: y.params,
            route: {
                id: ((a = y.route) == null ? void 0 : a.id) ? ? null
            },
            url: new URL(location.href)
        },
        willUnload: !1,
        type: "enter",
        complete: Promise.resolve()
    };
    N.forEach(o => o(r)), nt = !0
}
async function z({
    url: t,
    params: n,
    branch: e,
    status: r,
    error: a,
    route: o,
    form: i
}) {
    let s = "never";
    if (I && (t.pathname === I || t.pathname === I + "/")) s = "always";
    else
        for (const d of e)(d == null ? void 0 : d.slash) !== void 0 && (s = d.slash);
    t.pathname = we(t.pathname, s), t.search = t.search;
    const c = {
        type: "loaded",
        state: {
            url: t,
            params: n,
            branch: e,
            error: a,
            route: o
        },
        props: {
            constructors: Ye(e).map(d => d.node.component),
            page: S
        }
    };
    i !== void 0 && (c.props.form = i);
    let l = {},
        u = !S,
        h = 0;
    for (let d = 0; d < Math.max(e.length, y.branch.length); d += 1) {
        const m = e[d],
            f = y.branch[d];
        (m == null ? void 0 : m.data) !== (f == null ? void 0 : f.data) && (u = !0), m && (l = { ...l,
            ...m.data
        }, u && (c.props[`data_${h}`] = l), h += 1)
    }
    return (!y.url || t.href !== y.url.href || y.error !== a || i !== void 0 && i !== S.form || u) && (c.props.page = {
        error: a,
        params: n,
        route: {
            id: (o == null ? void 0 : o.id) ? ? null
        },
        state: {},
        status: r,
        url: new URL(t),
        form: i ? ? null,
        data: u ? l : S.data
    }), c
}
async function Lt({
    loader: t,
    parent: n,
    url: e,
    params: r,
    route: a,
    server_data_node: o
}) {
    var u, h, g;
    let i = null,
        s = !0;
    const c = {
            dependencies: new Set,
            params: new Set,
            parent: !1,
            route: !1,
            url: !1,
            search_params: new Set
        },
        l = await t();
    if ((u = l.universal) != null && u.load) {
        let d = function(...f) {
            for (const _ of f) {
                const {
                    href: v
                } = new URL(_, e);
                c.dependencies.add(v)
            }
        };
        const m = {
            route: new Proxy(a, {
                get: (f, _) => (s && (c.route = !0), f[_])
            }),
            params: new Proxy(r, {
                get: (f, _) => (s && c.params.add(_), f[_])
            }),
            data: (o == null ? void 0 : o.data) ? ? null,
            url: ke(e, () => {
                s && (c.url = !0)
            }, f => {
                s && c.search_params.add(f)
            }),
            async fetch(f, _) {
                let v;
                f instanceof Request ? (v = f.url, _ = {
                    body: f.method === "GET" || f.method === "HEAD" ? void 0 : await f.blob(),
                    cache: f.cache,
                    credentials: f.credentials,
                    headers: f.headers,
                    integrity: f.integrity,
                    keepalive: f.keepalive,
                    method: f.method,
                    mode: f.mode,
                    redirect: f.redirect,
                    referrer: f.referrer,
                    referrerPolicy: f.referrerPolicy,
                    signal: f.signal,
                    ..._
                }) : v = f;
                const A = new URL(v, e);
                return s && d(A.href), A.origin === e.origin && (v = A.href.slice(e.origin.length)), nt ? Ue(v, A.href, _) : Pe(v, _)
            },
            setHeaders: () => {},
            depends: d,
            parent() {
                return s && (c.parent = !0), n()
            },
            untrack(f) {
                s = !1;
                try {
                    return f()
                } finally {
                    s = !0
                }
            }
        };
        i = await l.universal.load.call(null, m) ? ? null
    }
    return {
        node: l,
        loader: t,
        server: o,
        universal: (h = l.universal) != null && h.load ? {
            type: "data",
            data: i,
            uses: c
        } : null,
        data: i ? ? (o == null ? void 0 : o.data) ? ? null,
        slash: ((g = l.universal) == null ? void 0 : g.trailingSlash) ? ? (o == null ? void 0 : o.slash)
    }
}

function Ft(t, n, e, r, a, o) {
    if (it) return !0;
    if (!a) return !1;
    if (a.parent && t || a.route && n || a.url && e) return !0;
    for (const i of a.search_params)
        if (r.has(i)) return !0;
    for (const i of a.params)
        if (o[i] !== y.params[i]) return !0;
    for (const i of a.dependencies)
        if (te.some(s => s(new URL(i)))) return !0;
    return !1
}

function Pt(t, n) {
    return (t == null ? void 0 : t.type) === "data" ? t : (t == null ? void 0 : t.type) === "skip" ? n ? ? null : null
}

function nn(t, n) {
    if (!t) return new Set(n.searchParams.keys());
    const e = new Set([...t.searchParams.keys(), ...n.searchParams.keys()]);
    for (const r of e) {
        const a = t.searchParams.getAll(r),
            o = n.searchParams.getAll(r);
        a.every(i => o.includes(i)) && o.every(i => a.includes(i)) && e.delete(r)
    }
    return e
}
async function Ut({
    id: t,
    invalidating: n,
    url: e,
    params: r,
    route: a
}) {
    if ((P == null ? void 0 : P.id) === t) return P.promise;
    const {
        errors: o,
        layouts: i,
        leaf: s
    } = a, c = [...i, s];
    o.forEach(p => p == null ? void 0 : p().catch(() => {})), c.forEach(p => p == null ? void 0 : p[1]().catch(() => {}));
    let l = null;
    const u = y.url ? t !== y.url.pathname + y.url.search : !1,
        h = y.route ? a.id !== y.route.id : !1,
        g = nn(y.url, e);
    let d = !1;
    const m = c.map((p, w) => {
        var x;
        const b = y.branch[w],
            E = !!(p != null && p[0]) && ((b == null ? void 0 : b.loader) !== p[1] || Ft(d, h, u, g, (x = b.server) == null ? void 0 : x.uses, r));
        return E && (d = !0), E
    });
    if (m.some(Boolean)) {
        try {
            l = await ue(e, m)
        } catch (p) {
            return lt({
                status: Q(p),
                error: await J(p, {
                    url: e,
                    params: r,
                    route: {
                        id: a.id
                    }
                }),
                url: e,
                route: a
            })
        }
        if (l.type === "redirect") return l
    }
    const f = l == null ? void 0 : l.nodes;
    let _ = !1;
    const v = c.map(async (p, w) => {
        var ut;
        if (!p) return;
        const b = y.branch[w],
            E = f == null ? void 0 : f[w];
        if ((!E || E.type === "skip") && p[1] === (b == null ? void 0 : b.loader) && !Ft(_, h, u, g, (ut = b.universal) == null ? void 0 : ut.uses, r)) return b;
        if (_ = !0, (E == null ? void 0 : E.type) === "error") throw E;
        return Lt({
            loader: p[1],
            url: e,
            params: r,
            route: a,
            parent: async () => {
                var Tt;
                const Nt = {};
                for (let dt = 0; dt < w; dt += 1) Object.assign(Nt, (Tt = await v[dt]) == null ? void 0 : Tt.data);
                return Nt
            },
            server_data_node: Pt(E === void 0 && p[0] ? {
                type: "skip"
            } : E ? ? null, p[0] ? b == null ? void 0 : b.server : void 0)
        })
    });
    for (const p of v) p.catch(() => {});
    const A = [];
    for (let p = 0; p < c.length; p += 1)
        if (c[p]) try {
            A.push(await v[p])
        } catch (w) {
            if (w instanceof Qt) return {
                type: "redirect",
                location: w.location
            };
            let b = Q(w),
                E;
            if (f != null && f.includes(w)) b = w.status ? ? b, E = w.error;
            else if (w instanceof ot) E = w.body;
            else {
                if (await U.updated.check()) return await C(e);
                E = await J(w, {
                    params: r,
                    url: e,
                    route: {
                        id: a.id
                    }
                })
            }
            const x = await ie(p, A, o);
            return x ? await z({
                url: e,
                params: r,
                branch: A.slice(0, x.idx).concat(x.node),
                status: b,
                error: E,
                route: a
            }) : await fe(e, {
                id: a.id
            }, E, b)
        } else A.push(void 0);
    return await z({
        url: e,
        params: r,
        branch: A,
        status: 200,
        error: null,
        route: a,
        form: n ? void 0 : null
    })
}
async function ie(t, n, e) {
    for (; t--;)
        if (e[t]) {
            let r = t;
            for (; !n[r];) r -= 1;
            try {
                return {
                    idx: r + 1,
                    node: {
                        node: await e[t](),
                        loader: e[t],
                        data: {},
                        server: null,
                        universal: null
                    }
                }
            } catch {
                continue
            }
        }
}
async function lt({
    status: t,
    error: n,
    url: e,
    route: r
}) {
    const a = {};
    let o = null;
    if (F.server_loads[0] === 0) try {
        const l = await ue(e, [!0]);
        if (l.type !== "data" || l.nodes[0] && l.nodes[0].type !== "data") throw 0;
        o = l.nodes[0] ? ? null
    } catch {
        (e.origin !== Y || e.pathname !== location.pathname || It) && await C(e)
    }
    const s = await Lt({
            loader: wt,
            url: e,
            params: a,
            route: r,
            parent: () => Promise.resolve({}),
            server_data_node: Pt(o)
        }),
        c = {
            node: await tt(),
            loader: tt,
            universal: null,
            server: null,
            data: null
        };
    return await z({
        url: e,
        params: a,
        branch: [s, c],
        status: t,
        error: n,
        route: null
    })
}

function ft(t, n) {
    if (!t || rt(t, I)) return;
    let e;
    try {
        e = F.hooks.reroute({
            url: new URL(t)
        }) ? ? t.pathname
    } catch {
        return
    }
    const r = ce(e);
    for (const a of st) {
        const o = a.exec(r);
        if (o) return {
            id: t.pathname + t.search,
            invalidating: n,
            route: a,
            params: be(o),
            url: t
        }
    }
}

function ce(t) {
    return ve(t.slice(I.length) || "/")
}

function le({
    url: t,
    type: n,
    intent: e,
    delta: r
}) {
    let a = !1;
    const o = he(y, e, t, n);
    r !== void 0 && (o.navigation.delta = r);
    const i = { ...o.navigation,
        cancel: () => {
            a = !0, o.reject(new Error("navigation cancelled"))
        }
    };
    return K || Rt.forEach(s => s(i)), a ? null : o
}
async function W({
    type: t,
    url: n,
    popped: e,
    keepfocus: r,
    noscroll: a,
    replace_state: o,
    state: i = {},
    redirect_count: s = 0,
    nav_token: c = {},
    accept: l = Dt,
    block: u = Dt
}) {
    const h = ft(n, !1),
        g = le({
            url: n,
            type: t,
            delta: e == null ? void 0 : e.delta,
            intent: h
        });
    if (!g) {
        u();
        return
    }
    const d = k,
        m = R;
    l(), K = !0, nt && U.navigating.set(g.navigation), V = c;
    let f = h && await Ut(h);
    if (!f) {
        if (rt(n, I)) return await C(n);
        f = await fe(n, {
            id: null
        }, await J(new At(404, "Not Found", `Not found: ${n.pathname}`), {
            url: n,
            params: {},
            route: {
                id: null
            }
        }), 404)
    }
    if (n = (h == null ? void 0 : h.url) || n, V !== c) return g.reject(new Error("navigation aborted")), !1;
    if (f.type === "redirect")
        if (s >= 20) f = await lt({
            status: 500,
            error: await J(new Error("Redirect loop"), {
                url: n,
                params: {},
                route: {
                    id: null
                }
            }),
            url: n,
            route: {
                id: null
            }
        });
        else return ct(new URL(f.location, n).href, {}, s + 1, c), !1;
    else f.props.page.status >= 400 && await U.updated.check() && await C(n);
    if (ae(), St(d), re(m), f.props.page.url.pathname !== n.pathname && (n.pathname = f.props.page.url.pathname), i = e ? e.state : i, !e) {
        const p = o ? 0 : 1,
            w = {
                [D]: k += p,
                [H]: R += p,
                [zt]: i
            };
        (o ? history.replaceState : history.pushState).call(history, w, "", n), o || Qe(k, R)
    }
    if (P = null, f.props.page.state = i, nt) {
        y = f.state, f.props.page && (f.props.page.url = n);
        const p = (await Promise.all(ee.map(w => w(g.navigation)))).filter(w => typeof w == "function");
        if (p.length > 0) {
            let w = function() {
                N = N.filter(b => !p.includes(b))
            };
            p.push(w), N.push(...p)
        }
        T.$set(f.props), ne = !0
    } else se(f, vt);
    const {
        activeElement: _
    } = document;
    await _t();
    const v = e ? e.scroll : a ? kt() : null;
    if (Ct) {
        const p = n.hash && document.getElementById(decodeURIComponent(n.hash.slice(1)));
        v ? scrollTo(v.x, v.y) : p ? p.scrollIntoView() : scrollTo(0, 0)
    }
    const A = document.activeElement !== _ && document.activeElement !== document.body;
    !r && !A && bt(), Ct = !0, f.props.page && (S = f.props.page), K = !1, t === "popstate" && oe(R), g.fulfil(void 0), N.forEach(p => p(g.navigation)), U.navigating.set(null)
}
async function fe(t, n, e, r) {
    return t.origin === Y && t.pathname === location.pathname && !It ? await lt({
        status: r,
        error: e,
        url: t,
        route: n
    }) : await C(t)
}

function an() {
    let t;
    L.addEventListener("mousemove", o => {
        const i = o.target;
        clearTimeout(t), t = setTimeout(() => {
            r(i, 2)
        }, 20)
    });

    function n(o) {
        r(o.composedPath()[0], 1)
    }
    L.addEventListener("mousedown", n), L.addEventListener("touchstart", n, {
        passive: !0
    });
    const e = new IntersectionObserver(o => {
        for (const i of o) i.isIntersecting && (mt(i.target.href), e.unobserve(i.target))
    }, {
        threshold: 0
    });

    function r(o, i) {
        const s = Wt(o, L);
        if (!s) return;
        const {
            url: c,
            external: l,
            download: u
        } = yt(s, I);
        if (l || u) return;
        const h = Z(s);
        if (!h.reload)
            if (i <= h.preload_data) {
                const g = ft(c, !1);
                g && en(g)
            } else i <= h.preload_code && mt(c.pathname)
    }

    function a() {
        e.disconnect();
        for (const o of L.querySelectorAll("a")) {
            const {
                url: i,
                external: s,
                download: c
            } = yt(o, I);
            if (s || c) continue;
            const l = Z(o);
            l.reload || (l.preload_code === X.viewport && e.observe(o), l.preload_code === X.eager && mt(i.pathname))
        }
    }
    N.push(a), a()
}

function J(t, n) {
    if (t instanceof ot) return t.body;
    const e = Q(t),
        r = Ze(t);
    return F.hooks.handleError({
        error: t,
        event: n,
        status: e,
        message: r
    }) ? ? {
        message: r
    }
}

function xt(t, n) {
    ye(() => (t.push(n), () => {
        const e = t.indexOf(n);
        t.splice(e, 1)
    }))
}

function hn(t) {
    xt(N, t)
}

function pn(t) {
    xt(Rt, t)
}

function gn(t) {
    xt(ee, t)
}

function rn(t, n = {}) {
    return t = Jt(t), t.origin !== Y ? Promise.reject(new Error("goto: invalid URL")) : ct(t, n, 0)
}

function mn() {
    return it = !0, tn()
}
async function _n(t) {
    if (t.type === "error") {
        const n = new URL(location.href),
            {
                branch: e,
                route: r
            } = y;
        if (!r) return;
        const a = await ie(y.branch.length, e, r.errors);
        if (a) {
            const o = await z({
                url: n,
                params: y.params,
                branch: e.slice(0, a.idx).concat(a.node),
                status: t.status ? ? 500,
                error: t.error,
                route: r
            });
            y = o.state, T.$set(o.props), _t().then(bt)
        }
    } else t.type === "redirect" ? ct(t.location, {
        invalidateAll: !0
    }, 0) : (T.$set({
        form: null,
        page: { ...S,
            form: t.data,
            status: t.status
        }
    }), await _t(), T.$set({
        form: t.data
    }), t.type === "success" && bt())
}

function on() {
    var n;
    history.scrollRestoration = "manual", addEventListener("beforeunload", e => {
        let r = !1;
        if (Vt(), !K) {
            const a = he(y, void 0, null, "leave"),
                o = { ...a.navigation,
                    cancel: () => {
                        r = !0, a.reject(new Error("navigation cancelled"))
                    }
                };
            Rt.forEach(i => i(o))
        }
        r ? (e.preventDefault(), e.returnValue = "") : history.scrollRestoration = "auto"
    }), addEventListener("visibilitychange", () => {
        document.visibilityState === "hidden" && Vt()
    }), (n = navigator.connection) != null && n.saveData || an(), L.addEventListener("click", e => {
        var g;
        if (e.button || e.which !== 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented) return;
        const r = Wt(e.composedPath()[0], L);
        if (!r) return;
        const {
            url: a,
            external: o,
            target: i,
            download: s
        } = yt(r, I);
        if (!a) return;
        if (i === "_parent" || i === "_top") {
            if (window.parent !== window) return
        } else if (i && i !== "_self") return;
        const c = Z(r);
        if (!(r instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || s) return;
        if (o || c.reload) {
            le({
                url: a,
                type: "link"
            }) ? K = !0 : e.preventDefault();
            return
        }
        const [u, h] = a.href.split("#");
        if (h !== void 0 && u === ht(location)) {
            const [, d] = y.url.href.split("#");
            if (d === h) {
                e.preventDefault(), h === "" || h === "top" && r.ownerDocument.getElementById("top") === null ? window.scrollTo({
                    top: 0
                }) : (g = r.ownerDocument.getElementById(h)) == null || g.scrollIntoView();
                return
            }
            if (q = !0, St(k), t(a), !c.replace_state) return;
            q = !1
        }
        e.preventDefault(), W({
            type: "link",
            url: a,
            keepfocus: c.keepfocus,
            noscroll: c.noscroll,
            replace_state: c.replace_state ? ? a.href === location.href
        })
    }), L.addEventListener("submit", e => {
        if (e.defaultPrevented) return;
        const r = HTMLFormElement.prototype.cloneNode.call(e.target),
            a = e.submitter;
        if (((a == null ? void 0 : a.formMethod) || r.method) !== "get") return;
        const i = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || r.action);
        if (rt(i, I)) return;
        const s = e.target,
            c = Z(s);
        if (c.reload) return;
        e.preventDefault(), e.stopPropagation();
        const l = new FormData(s),
            u = a == null ? void 0 : a.getAttribute("name");
        u && l.append(u, (a == null ? void 0 : a.getAttribute("value")) ? ? ""), i.search = new URLSearchParams(l).toString(), W({
            type: "form",
            url: i,
            keepfocus: c.keepfocus,
            noscroll: c.noscroll,
            replace_state: c.replace_state ? ? i.href === location.href
        })
    }), addEventListener("popstate", async e => {
        var r;
        if ((r = e.state) != null && r[D]) {
            const a = e.state[D];
            if (V = {}, a === k) return;
            const o = O[a],
                i = e.state[zt] ? ? {},
                s = new URL(e.state[Fe] ? ? location.href),
                c = e.state[H],
                l = ht(location) === ht(y.url);
            if (c === R && (ne || l)) {
                t(s), O[k] = kt(), o && scrollTo(o.x, o.y), i !== S.state && (S = { ...S,
                    state: i
                }, T.$set({
                    page: S
                })), k = a;
                return
            }
            const h = a - k;
            await W({
                type: "popstate",
                url: s,
                popped: {
                    state: i,
                    scroll: o,
                    delta: h
                },
                accept: () => {
                    k = a, R = c
                },
                block: () => {
                    history.go(-h)
                },
                nav_token: V
            })
        } else if (!q) {
            const a = new URL(location.href);
            t(a)
        }
    }), addEventListener("hashchange", () => {
        q && (q = !1, history.replaceState({ ...history.state,
            [D]: ++k,
            [H]: R
        }, "", location.href))
    });
    for (const e of document.querySelectorAll("link")) e.rel === "icon" && (e.href = e.href);
    addEventListener("pageshow", e => {
        e.persisted && U.navigating.set(null)
    });

    function t(e) {
        y.url = e, U.page.set({ ...S,
            url: e
        }), U.page.notify()
    }
}
async function sn(t, {
    status: n = 200,
    error: e,
    node_ids: r,
    params: a,
    route: o,
    data: i,
    form: s
}) {
    It = !0;
    const c = new URL(location.href);
    ({
        params: a = {},
        route: o = {
            id: null
        }
    } = ft(c, !1) || {});
    let l;
    try {
        const u = r.map(async (d, m) => {
                const f = i[m];
                return f != null && f.uses && (f.uses = de(f.uses)), Lt({
                    loader: F.nodes[d],
                    url: c,
                    params: a,
                    route: o,
                    parent: async () => {
                        const _ = {};
                        for (let v = 0; v < m; v += 1) Object.assign(_, (await u[v]).data);
                        return _
                    },
                    server_data_node: Pt(f)
                })
            }),
            h = await Promise.all(u),
            g = st.find(({
                id: d
            }) => d === o.id);
        if (g) {
            const d = g.layouts;
            for (let m = 0; m < d.length; m++) d[m] || h.splice(m, 0, void 0)
        }
        l = await z({
            url: c,
            params: a,
            branch: h,
            status: n,
            error: e,
            form: s,
            route: g ? ? null
        })
    } catch (u) {
        if (u instanceof Qt) {
            await C(new URL(u.location, location.href));
            return
        }
        l = await lt({
            status: Q(u),
            error: await J(u, {
                url: c,
                params: a,
                route: o
            }),
            url: c,
            route: o
        })
    }
    l.props.page && (l.props.page.state = {}), se(l, t)
}
async function ue(t, n) {
    var a;
    const e = new URL(t);
    e.pathname = Re(t.pathname), t.pathname.endsWith("/") && e.searchParams.append(Xe, "1"), e.searchParams.append(We, n.map(o => o ? "1" : "0").join(""));
    const r = await Mt(e.href);
    if (!r.ok) {
        let o;
        throw (a = r.headers.get("content-type")) != null && a.includes("application/json") ? o = await r.json() : r.status === 404 ? o = "Not Found" : r.status === 500 && (o = "Internal Error"), new ot(r.status, o)
    }
    return new Promise(async o => {
        var h;
        const i = new Map,
            s = r.body.getReader(),
            c = new TextDecoder;

        function l(g) {
            return Xt(g, {
                Promise: d => new Promise((m, f) => {
                    i.set(d, {
                        fulfil: m,
                        reject: f
                    })
                })
            })
        }
        let u = "";
        for (;;) {
            const {
                done: g,
                value: d
            } = await s.read();
            if (g && !u) break;
            for (u += !d && u ? `
` : c.decode(d, {
                    stream: !0
                });;) {
                const m = u.indexOf(`
`);
                if (m === -1) break;
                const f = JSON.parse(u.slice(0, m));
                if (u = u.slice(m + 1), f.type === "redirect") return o(f);
                if (f.type === "data")(h = f.nodes) == null || h.forEach(_ => {
                    (_ == null ? void 0 : _.type) === "data" && (_.uses = de(_.uses), _.data = l(_.data))
                }), o(f);
                else if (f.type === "chunk") {
                    const {
                        id: _,
                        data: v,
                        error: A
                    } = f, p = i.get(_);
                    i.delete(_), A ? p.reject(l(A)) : p.fulfil(l(v))
                }
            }
        }
    })
}

function de(t) {
    return {
        dependencies: new Set((t == null ? void 0 : t.dependencies) ? ? []),
        params: new Set((t == null ? void 0 : t.params) ? ? []),
        parent: !!(t != null && t.parent),
        route: !!(t != null && t.route),
        url: !!(t != null && t.url),
        search_params: new Set((t == null ? void 0 : t.search_params) ? ? [])
    }
}

function bt() {
    const t = document.querySelector("[autofocus]");
    if (t) t.focus();
    else {
        const n = document.body,
            e = n.getAttribute("tabindex");
        n.tabIndex = -1, n.focus({
            preventScroll: !0,
            focusVisible: !1
        }), e !== null ? n.setAttribute("tabindex", e) : n.removeAttribute("tabindex");
        const r = getSelection();
        if (r && r.type !== "None") {
            const a = [];
            for (let o = 0; o < r.rangeCount; o += 1) a.push(r.getRangeAt(o));
            setTimeout(() => {
                if (r.rangeCount === a.length) {
                    for (let o = 0; o < r.rangeCount; o += 1) {
                        const i = a[o],
                            s = r.getRangeAt(o);
                        if (i.commonAncestorContainer !== s.commonAncestorContainer || i.startContainer !== s.startContainer || i.endContainer !== s.endContainer || i.startOffset !== s.startOffset || i.endOffset !== s.endOffset) return
                    }
                    r.removeAllRanges()
                }
            })
        }
    }
}

function he(t, n, e, r) {
    var c, l;
    let a, o;
    const i = new Promise((u, h) => {
        a = u, o = h
    });
    return i.catch(() => {}), {
        navigation: {
            from: {
                params: t.params,
                route: {
                    id: ((c = t.route) == null ? void 0 : c.id) ? ? null
                },
                url: t.url
            },
            to: e && {
                params: (n == null ? void 0 : n.params) ? ? null,
                route: {
                    id: ((l = n == null ? void 0 : n.route) == null ? void 0 : l.id) ? ? null
                },
                url: e
            },
            willUnload: !n,
            type: r,
            complete: i
        },
        fulfil: a,
        reject: o
    }
}
export {
    Me as H, He as N, Be as P, Ge as U, hn as a, Ke as b, ze as c, _n as d, ln as e, pn as f, rn as g, dn as h, mn as i, gn as o, un as p, fn as r, U as s, at as w
};