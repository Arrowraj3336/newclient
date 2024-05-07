function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["../nodes/0.mDreygCz.js", "../chunks/scheduler.C-_Ebuka.js", "../chunks/stores.DTfGbVZ-.js", "../chunks/entry.BMvXNqeb.js", "../chunks/index.CCjB7nlp.js", "../chunks/globals.D0QH3NT1.js", "../chunks/lenis.DkdcNDYJ.js", "../chunks/SplitText.BqdrKGYP.js", "../chunks/stores.uRYd-c39.js", "../assets/0.CXIq1G7I.css", "../nodes/1.C0eAUBqp.js", "../chunks/gsap.DUW31Sjl.js", "../nodes/2.3KeNYG39.js", "../nodes/3.uaGszsJ7.js", "../chunks/WorkLayout.Q4_TdJYx.js", "../chunks/Connect.DZ70A1sK.js", "../nodes/4.DwfkJeL1.js", "../chunks/OneImage.ZVMM4o7k.js", "../chunks/NextProject.Dk6PyM7Y.js", "../nodes/5.hzXbifuU.js", "../chunks/Text.D0nd-dK6.js", "../nodes/6.kELksk0X.js", "../nodes/7.BrK1jsXy.js", "../nodes/8.B5DTnw1x.js", "../chunks/Impact.s8HcR99q.js", "../nodes/9.BxqzKvL6.js", "../nodes/10.BN1OZBcY.js", "../nodes/11._PFFXpFT.js", "../nodes/12.DEyBFoqq.js", "../nodes/13.BkrK586S.js", "../nodes/14.BHugtGPk.js", "../nodes/15.DKV6hEOf.js", "../nodes/16.CdO93h87.js", "../nodes/17.Bdej_apU.js", "../nodes/18.LCx0PTO7.js", "../nodes/19.DoOH7j25.js", "../nodes/20.BVJkDEVb.js", "../nodes/21.Bj4cKvXh.js", "../nodes/22.DV3XHFq-.js", "../nodes/23.BIRJdCLI.js"]
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import {
    s as U,
    j,
    o as M,
    d as A,
    t as W
} from "../chunks/scheduler.C-_Ebuka.js";
import {
    S as z,
    i as F,
    s as G,
    A as p,
    c as H,
    j as k,
    m as d,
    B as L,
    t as h,
    d as E,
    e as J,
    a as K,
    b as Q,
    f as O,
    y as P,
    u as X,
    v as Y,
    w as Z,
    C as D,
    D as g,
    o as v,
    p as I,
    q as b,
    r as R
} from "../chunks/index.CCjB7nlp.js";
const x = "modulepreload",
    ee = function(_, e) {
        return new URL(_, e).href
    },
    V = {},
    c = function(e, i, s) {
        let r = Promise.resolve();
        if (i && i.length > 0) {
            const f = document.getElementsByTagName("link");
            r = Promise.all(i.map(t => {
                if (t = ee(t, s), t in V) return;
                V[t] = !0;
                const o = t.endsWith(".css"),
                    n = o ? '[rel="stylesheet"]' : "";
                if (!!s)
                    for (let m = f.length - 1; m >= 0; m--) {
                        const w = f[m];
                        if (w.href === t && (!o || w.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${t}"]${n}`)) return;
                const a = document.createElement("link");
                if (a.rel = o ? "stylesheet" : x, o || (a.as = "script", a.crossOrigin = ""), a.href = t, document.head.appendChild(a), o) return new Promise((m, w) => {
                    a.addEventListener("load", m), a.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${t}`)))
                })
            }))
        }
        return r.then(() => e()).catch(f => {
            const t = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (t.payload = f, window.dispatchEvent(t), !t.defaultPrevented) throw f
        })
    },
    ue = {};

function te(_) {
    let e, i, s;
    var r = _[1][0];

    function f(t, o) {
        return {
            props: {
                data: t[3],
                form: t[2]
            }
        }
    }
    return r && (e = g(r, f(_)), _[15](e)), {
        c() {
            e && v(e.$$.fragment), i = p()
        },
        l(t) {
            e && I(e.$$.fragment, t), i = p()
        },
        m(t, o) {
            e && b(e, t, o), k(t, i, o), s = !0
        },
        p(t, o) {
            if (o & 2 && r !== (r = t[1][0])) {
                if (e) {
                    D();
                    const n = e;
                    d(n.$$.fragment, 1, 0, () => {
                        R(n, 1)
                    }), L()
                }
                r ? (e = g(r, f(t)), t[15](e), v(e.$$.fragment), h(e.$$.fragment, 1), b(e, i.parentNode, i)) : e = null
            } else if (r) {
                const n = {};
                o & 8 && (n.data = t[3]), o & 4 && (n.form = t[2]), e.$set(n)
            }
        },
        i(t) {
            s || (e && h(e.$$.fragment, t), s = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t), s = !1
        },
        d(t) {
            t && E(i), _[15](null), e && R(e, t)
        }
    }
}

function ie(_) {
    let e, i, s;
    var r = _[1][0];

    function f(t, o) {
        return {
            props: {
                data: t[3],
                $$slots: {
                    default: [se]
                },
                $$scope: {
                    ctx: t
                }
            }
        }
    }
    return r && (e = g(r, f(_)), _[14](e)), {
        c() {
            e && v(e.$$.fragment), i = p()
        },
        l(t) {
            e && I(e.$$.fragment, t), i = p()
        },
        m(t, o) {
            e && b(e, t, o), k(t, i, o), s = !0
        },
        p(t, o) {
            if (o & 2 && r !== (r = t[1][0])) {
                if (e) {
                    D();
                    const n = e;
                    d(n.$$.fragment, 1, 0, () => {
                        R(n, 1)
                    }), L()
                }
                r ? (e = g(r, f(t)), t[14](e), v(e.$$.fragment), h(e.$$.fragment, 1), b(e, i.parentNode, i)) : e = null
            } else if (r) {
                const n = {};
                o & 8 && (n.data = t[3]), o & 65591 && (n.$$scope = {
                    dirty: o,
                    ctx: t
                }), e.$set(n)
            }
        },
        i(t) {
            s || (e && h(e.$$.fragment, t), s = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t), s = !1
        },
        d(t) {
            t && E(i), _[14](null), e && R(e, t)
        }
    }
}

function re(_) {
    let e, i, s;
    var r = _[1][1];

    function f(t, o) {
        return {
            props: {
                data: t[4],
                form: t[2]
            }
        }
    }
    return r && (e = g(r, f(_)), _[13](e)), {
        c() {
            e && v(e.$$.fragment), i = p()
        },
        l(t) {
            e && I(e.$$.fragment, t), i = p()
        },
        m(t, o) {
            e && b(e, t, o), k(t, i, o), s = !0
        },
        p(t, o) {
            if (o & 2 && r !== (r = t[1][1])) {
                if (e) {
                    D();
                    const n = e;
                    d(n.$$.fragment, 1, 0, () => {
                        R(n, 1)
                    }), L()
                }
                r ? (e = g(r, f(t)), t[13](e), v(e.$$.fragment), h(e.$$.fragment, 1), b(e, i.parentNode, i)) : e = null
            } else if (r) {
                const n = {};
                o & 16 && (n.data = t[4]), o & 4 && (n.form = t[2]), e.$set(n)
            }
        },
        i(t) {
            s || (e && h(e.$$.fragment, t), s = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t), s = !1
        },
        d(t) {
            t && E(i), _[13](null), e && R(e, t)
        }
    }
}

function ne(_) {
    let e, i, s;
    var r = _[1][1];

    function f(t, o) {
        return {
            props: {
                data: t[4],
                $$slots: {
                    default: [oe]
                },
                $$scope: {
                    ctx: t
                }
            }
        }
    }
    return r && (e = g(r, f(_)), _[12](e)), {
        c() {
            e && v(e.$$.fragment), i = p()
        },
        l(t) {
            e && I(e.$$.fragment, t), i = p()
        },
        m(t, o) {
            e && b(e, t, o), k(t, i, o), s = !0
        },
        p(t, o) {
            if (o & 2 && r !== (r = t[1][1])) {
                if (e) {
                    D();
                    const n = e;
                    d(n.$$.fragment, 1, 0, () => {
                        R(n, 1)
                    }), L()
                }
                r ? (e = g(r, f(t)), t[12](e), v(e.$$.fragment), h(e.$$.fragment, 1), b(e, i.parentNode, i)) : e = null
            } else if (r) {
                const n = {};
                o & 16 && (n.data = t[4]), o & 65575 && (n.$$scope = {
                    dirty: o,
                    ctx: t
                }), e.$set(n)
            }
        },
        i(t) {
            s || (e && h(e.$$.fragment, t), s = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t), s = !1
        },
        d(t) {
            t && E(i), _[12](null), e && R(e, t)
        }
    }
}

function oe(_) {
    let e, i, s;
    var r = _[1][2];

    function f(t, o) {
        return {
            props: {
                data: t[5],
                form: t[2]
            }
        }
    }
    return r && (e = g(r, f(_)), _[11](e)), {
        c() {
            e && v(e.$$.fragment), i = p()
        },
        l(t) {
            e && I(e.$$.fragment, t), i = p()
        },
        m(t, o) {
            e && b(e, t, o), k(t, i, o), s = !0
        },
        p(t, o) {
            if (o & 2 && r !== (r = t[1][2])) {
                if (e) {
                    D();
                    const n = e;
                    d(n.$$.fragment, 1, 0, () => {
                        R(n, 1)
                    }), L()
                }
                r ? (e = g(r, f(t)), t[11](e), v(e.$$.fragment), h(e.$$.fragment, 1), b(e, i.parentNode, i)) : e = null
            } else if (r) {
                const n = {};
                o & 32 && (n.data = t[5]), o & 4 && (n.form = t[2]), e.$set(n)
            }
        },
        i(t) {
            s || (e && h(e.$$.fragment, t), s = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t), s = !1
        },
        d(t) {
            t && E(i), _[11](null), e && R(e, t)
        }
    }
}

function se(_) {
    let e, i, s, r;
    const f = [ne, re],
        t = [];

    function o(n, u) {
        return n[1][2] ? 0 : 1
    }
    return e = o(_), i = t[e] = f[e](_), {
        c() {
            i.c(), s = p()
        },
        l(n) {
            i.l(n), s = p()
        },
        m(n, u) {
            t[e].m(n, u), k(n, s, u), r = !0
        },
        p(n, u) {
            let a = e;
            e = o(n), e === a ? t[e].p(n, u) : (D(), d(t[a], 1, 1, () => {
                t[a] = null
            }), L(), i = t[e], i ? i.p(n, u) : (i = t[e] = f[e](n), i.c()), h(i, 1), i.m(s.parentNode, s))
        },
        i(n) {
            r || (h(i), r = !0)
        },
        o(n) {
            d(i), r = !1
        },
        d(n) {
            n && E(s), t[e].d(n)
        }
    }
}

function y(_) {
    let e, i = _[7] && N(_);
    return {
        c() {
            e = J("div"), i && i.c(), this.h()
        },
        l(s) {
            e = K(s, "DIV", {
                id: !0,
                "aria-live": !0,
                "aria-atomic": !0,
                style: !0
            });
            var r = Q(e);
            i && i.l(r), r.forEach(E), this.h()
        },
        h() {
            O(e, "id", "svelte-announcer"), O(e, "aria-live", "assertive"), O(e, "aria-atomic", "true"), P(e, "position", "absolute"), P(e, "left", "0"), P(e, "top", "0"), P(e, "clip", "rect(0 0 0 0)"), P(e, "clip-path", "inset(50%)"), P(e, "overflow", "hidden"), P(e, "white-space", "nowrap"), P(e, "width", "1px"), P(e, "height", "1px")
        },
        m(s, r) {
            k(s, e, r), i && i.m(e, null)
        },
        p(s, r) {
            s[7] ? i ? i.p(s, r) : (i = N(s), i.c(), i.m(e, null)) : i && (i.d(1), i = null)
        },
        d(s) {
            s && E(e), i && i.d()
        }
    }
}

function N(_) {
    let e;
    return {
        c() {
            e = X(_[8])
        },
        l(i) {
            e = Y(i, _[8])
        },
        m(i, s) {
            k(i, e, s)
        },
        p(i, s) {
            s & 256 && Z(e, i[8])
        },
        d(i) {
            i && E(e)
        }
    }
}

function _e(_) {
    let e, i, s, r, f;
    const t = [ie, te],
        o = [];

    function n(a, m) {
        return a[1][1] ? 0 : 1
    }
    e = n(_), i = o[e] = t[e](_);
    let u = _[6] && y(_);
    return {
        c() {
            i.c(), s = G(), u && u.c(), r = p()
        },
        l(a) {
            i.l(a), s = H(a), u && u.l(a), r = p()
        },
        m(a, m) {
            o[e].m(a, m), k(a, s, m), u && u.m(a, m), k(a, r, m), f = !0
        },
        p(a, [m]) {
            let w = e;
            e = n(a), e === w ? o[e].p(a, m) : (D(), d(o[w], 1, 1, () => {
                o[w] = null
            }), L(), i = o[e], i ? i.p(a, m) : (i = o[e] = t[e](a), i.c()), h(i, 1), i.m(s.parentNode, s)), a[6] ? u ? u.p(a, m) : (u = y(a), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null)
        },
        i(a) {
            f || (h(i), f = !0)
        },
        o(a) {
            d(i), f = !1
        },
        d(a) {
            a && (E(s), E(r)), o[e].d(a), u && u.d(a)
        }
    }
}

function ae(_, e, i) {
    let {
        stores: s
    } = e, {
        page: r
    } = e, {
        constructors: f
    } = e, {
        components: t = []
    } = e, {
        form: o
    } = e, {
        data_0: n = null
    } = e, {
        data_1: u = null
    } = e, {
        data_2: a = null
    } = e;
    j(s.page.notify);
    let m = !1,
        w = !1,
        T = null;
    M(() => {
        const l = s.page.subscribe(() => {
            m && (i(7, w = !0), W().then(() => {
                i(8, T = document.title || "untitled page")
            }))
        });
        return i(6, m = !0), l
    });

    function $(l) {
        A[l ? "unshift" : "push"](() => {
            t[2] = l, i(0, t)
        })
    }

    function S(l) {
        A[l ? "unshift" : "push"](() => {
            t[1] = l, i(0, t)
        })
    }

    function C(l) {
        A[l ? "unshift" : "push"](() => {
            t[1] = l, i(0, t)
        })
    }

    function q(l) {
        A[l ? "unshift" : "push"](() => {
            t[0] = l, i(0, t)
        })
    }

    function B(l) {
        A[l ? "unshift" : "push"](() => {
            t[0] = l, i(0, t)
        })
    }
    return _.$$set = l => {
        "stores" in l && i(9, s = l.stores), "page" in l && i(10, r = l.page), "constructors" in l && i(1, f = l.constructors), "components" in l && i(0, t = l.components), "form" in l && i(2, o = l.form), "data_0" in l && i(3, n = l.data_0), "data_1" in l && i(4, u = l.data_1), "data_2" in l && i(5, a = l.data_2)
    }, _.$$.update = () => {
        _.$$.dirty & 1536 && s.page.set(r)
    }, [t, f, o, n, u, a, m, w, T, s, r, $, S, C, q, B]
}
class ce extends z {
    constructor(e) {
        super(), F(this, e, ae, _e, U, {
            stores: 9,
            page: 10,
            constructors: 1,
            components: 0,
            form: 2,
            data_0: 3,
            data_1: 4,
            data_2: 5
        })
    }
}
const me = [() => c(() =>
        import ("../nodes/0.mDreygCz.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        import.meta.url), () => c(() =>
        import ("../nodes/1.C0eAUBqp.js"), __vite__mapDeps([10, 1, 4, 3, 11, 7, 8]),
        import.meta.url), () => c(() =>
        import ("../nodes/2.3KeNYG39.js"), __vite__mapDeps([12, 1, 4, 8, 3, 2]),
        import.meta.url), () => c(() =>
        import ("../nodes/3.uaGszsJ7.js"), __vite__mapDeps([13, 1, 4, 14, 6, 7, 8, 3, 15]),
        import.meta.url), () => c(() =>
        import ("../nodes/4.DwfkJeL1.js"), __vite__mapDeps([16, 1, 4, 14, 6, 7, 8, 3, 17, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/5.hzXbifuU.js"), __vite__mapDeps([19, 1, 4, 14, 6, 7, 8, 3, 17, 20, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/6.kELksk0X.js"), __vite__mapDeps([21, 1, 4, 14, 6, 7, 8, 3, 17, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/7.BrK1jsXy.js"), __vite__mapDeps([22, 1, 4, 14, 6, 7, 8, 3, 17, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/8.B5DTnw1x.js"), __vite__mapDeps([23, 1, 4, 14, 6, 7, 8, 3, 17, 24, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/9.BxqzKvL6.js"), __vite__mapDeps([25, 1, 4, 14, 6, 7, 8, 3, 17, 20, 24, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/10.BN1OZBcY.js"), __vite__mapDeps([26, 1, 4, 14, 6, 7, 8, 3, 17, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/11._PFFXpFT.js"), __vite__mapDeps([27, 1, 4, 14, 6, 7, 8, 3, 17, 20, 24, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/12.DEyBFoqq.js"), __vite__mapDeps([28, 1, 4, 14, 6, 7, 8, 3, 17, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/13.BkrK586S.js"), __vite__mapDeps([29, 1, 4, 14, 6, 7, 8, 3, 17, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/14.BHugtGPk.js"), __vite__mapDeps([30, 1, 4, 14, 6, 7, 8, 3, 17, 15]),
        import.meta.url), () => c(() =>
        import ("../nodes/15.DKV6hEOf.js"), __vite__mapDeps([31, 1, 4, 14, 6, 7, 8, 3, 17, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/16.CdO93h87.js"), __vite__mapDeps([32, 1, 4, 14, 6, 7, 8, 3, 17, 20, 24, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/17.Bdej_apU.js"), __vite__mapDeps([33, 1, 4, 14, 6, 7, 8, 3, 17, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/18.LCx0PTO7.js"), __vite__mapDeps([34, 1, 4, 14, 6, 7, 8, 3, 17, 20, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/19.DoOH7j25.js"), __vite__mapDeps([35, 1, 4, 14, 6, 7, 8, 3, 17, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/20.BVJkDEVb.js"), __vite__mapDeps([36, 1, 4, 14, 6, 7, 8, 3, 17, 20, 24, 18]),
        import.meta.url), () => c(() =>
        import ("../nodes/21.Bj4cKvXh.js"), __vite__mapDeps([37, 1, 4, 5, 6, 7, 15]),
        import.meta.url), () => c(() =>
        import ("../nodes/22.DV3XHFq-.js"), __vite__mapDeps([38, 1, 4, 6, 7, 3, 2, 8]),
        import.meta.url), () => c(() =>
        import ("../nodes/23.BIRJdCLI.js"), __vite__mapDeps([39, 1, 4, 11, 7, 6, 8, 3]),
        import.meta.url)],
    pe = [],
    de = {
        "/": [3],
        "/(work)/2tec2": [4, [2]],
        "/about-me": [21],
        "/(work)/airpod": [5, [2]],
        "/(work)/amores-de-clementis": [6, [2]],
        "/(work)/avm": [7, [2]],
        "/(work)/boomerang": [8, [2]],
        "/(work)/briefd": [9, [2]],
        "/contact": [-23],
        "/(work)/green-planet": [10, [2]],
        "/(work)/grgar-farm": [11, [2]],
        "/(work)/hodl": [12, [2]],
        "/(work)/klele": [13, [2]],
        "/(work)/knauf-insulation": [14, [2]],
        "/(work)/ok-agency": [15, [2]],
        "/(work)/quantifly": [16, [2]],
        "/(work)/renini": [17, [2]],
        "/(work)/royal-golf-bled": [18, [2]],
        "/(work)/tutto": [19, [2]],
        "/(work)/valus": [20, [2]],
        "/works": [23]
    },
    he = {
        handleError: ({
            error: _
        }) => {
            console.error(_)
        },
        reroute: () => {}
    };
export {
    de as dictionary, he as hooks, ue as matchers, me as nodes, ce as root, pe as server_loads
};