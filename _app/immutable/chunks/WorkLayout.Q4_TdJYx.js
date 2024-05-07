import {
    s as Y,
    c as W,
    u as j,
    g as O,
    a as z,
    b as Z,
    o as $,
    f as ee
} from "./scheduler.C-_Ebuka.js";
import {
    S as te,
    i as se,
    s as C,
    e as y,
    c as H,
    a as w,
    b as S,
    d as u,
    f as d,
    j as x,
    k as b,
    t as M,
    m as R,
    y as G
} from "./index.CCjB7nlp.js";
import {
    g as k,
    l as V,
    S as N
} from "./lenis.DkdcNDYJ.js";
import {
    b as J
} from "./stores.uRYd-c39.js";
const oe = t => ({}),
    K = t => ({
        class: "h-full w-full"
    }),
    le = t => ({}),
    Q = t => ({
        class: "h-full w-full"
    }),
    re = t => ({}),
    U = t => ({
        class: "h-full w-full"
    });

function X(t) {
    let s;
    return {
        c() {
            s = y("div"), this.h()
        },
        l(o) {
            s = w(o, "DIV", {
                class: !0,
                id: !0,
                style: !0
            }), S(s).forEach(u), this.h()
        },
        h() {
            d(s, "class", "bg-work-image"), d(s, "id", "gsap-bg-work-image"), G(s, "background-image", "url('" + t[0] + "')")
        },
        m(o, i) {
            x(o, s, i)
        },
        p(o, i) {
            i & 1 && G(s, "background-image", "url('" + o[0] + "')")
        },
        d(o) {
            o && u(s)
        }
    }
}

function ae(t) {
    let s, o, i, h, n, p, m, _, T, v, l, a = t[0] && X(t);
    const E = t[3].hero,
        r = W(E, t, t[2], U),
        D = t[3].body,
        f = W(D, t, t[2], Q),
        A = t[3]["next-project"],
        g = W(A, t, t[2], K);
    return {
        c() {
            a && a.c(), s = C(), o = y("div"), i = y("div"), h = y("div"), n = y("div"), p = y("section"), r && r.c(), m = C(), _ = y("section"), f && f.c(), T = C(), v = y("section"), g && g.c(), this.h()
        },
        l(e) {
            a && a.l(e), s = H(e), o = w(e, "DIV", {
                id: !0,
                class: !0
            });
            var c = S(o);
            i = w(c, "DIV", {
                id: !0,
                class: !0,
                role: !0
            });
            var q = S(i);
            h = w(q, "DIV", {
                id: !0
            });
            var B = S(h);
            n = w(B, "DIV", {
                id: !0,
                class: !0
            });
            var I = S(n);
            p = w(I, "SECTION", {
                class: !0
            });
            var L = S(p);
            r && r.l(L), L.forEach(u), m = H(I), _ = w(I, "SECTION", {
                class: !0
            });
            var P = S(_);
            f && f.l(P), P.forEach(u), T = H(I), v = w(I, "SECTION", {
                class: !0
            });
            var F = S(v);
            g && g.l(F), F.forEach(u), I.forEach(u), B.forEach(u), q.forEach(u), c.forEach(u), this.h()
        },
        h() {
            d(p, "class", "relative lg:min-w-[100vw] h-screen lg:overflow-hidden flex panel lg:pl-[104px]"), d(_, "class", "relative lg:h-screen overflow-hidden flex panel w-[unset] flex-[1_0_auto] py-20 lg:py-20 p-4 lg:12 lg:p-20"), d(v, "class", "relative lg:min-w-[100vw] h-screen lg:overflow-hidden flex panel overflow-hidden"), d(n, "id", "panels-container"), d(n, "class", "lg:h-screen lg:flex flex-nowrap p-0 lg:overflow-hidden w-full"), d(h, "id", "panels"), d(i, "id", "content"), d(i, "class", "site-content"), d(i, "role", "main"), d(o, "id", "page"), d(o, "class", "site")
        },
        m(e, c) {
            a && a.m(e, c), x(e, s, c), x(e, o, c), b(o, i), b(i, h), b(h, n), b(n, p), r && r.m(p, null), b(n, m), b(n, _), f && f.m(_, null), b(n, T), b(n, v), g && g.m(v, null), l = !0
        },
        p(e, [c]) {
            e[0] ? a ? a.p(e, c) : (a = X(e), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null), r && r.p && (!l || c & 4) && j(r, E, e, e[2], l ? z(E, e[2], c, re) : O(e[2]), U), f && f.p && (!l || c & 4) && j(f, D, e, e[2], l ? z(D, e[2], c, le) : O(e[2]), Q), g && g.p && (!l || c & 4) && j(g, A, e, e[2], l ? z(A, e[2], c, oe) : O(e[2]), K)
        },
        i(e) {
            l || (M(r, e), M(f, e), M(g, e), l = !0)
        },
        o(e) {
            R(r, e), R(f, e), R(g, e), l = !1
        },
        d(e) {
            e && (u(s), u(o)), a && a.d(e), r && r.d(e), f && f.d(e), g && g.d(e)
        }
    }
}

function ie(t, s, o) {
    let i;
    Z(t, J, l => o(4, i = l));
    let {
        $$slots: h = {},
        $$scope: n
    } = s, p = k.matchMedia(), {
        gsapHorizontal: m
    } = s, {
        bgImageSrc: _ = ""
    } = s;

    function T() {
        const l = document.querySelector("#panels-container"),
            a = k.utils.toArray("#panels-container .panel"),
            E = k.utils.toArray(".work-image");
        p.add("(min-width: 1024px)", () => {
            o(1, m = k.to(a, {
                x: () => -1 * (l.scrollWidth - innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: "#panels-container",
                    pin: !0,
                    start: "top top",
                    scrub: 1,
                    markers: !1,
                    anticipatePin: 1,
                    invalidateOnRefresh: !0,
                    end: () => "+=" + (l.scrollWidth - innerWidth),
                    onEnterBack: r => {
                        r.refresh()
                    }
                }
            })), E.forEach(r => {
                k.fromTo(r, {
                    opacity: 0,
                    x: 100
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: r,
                        start: "left 98%",
                        containerAnimation: m,
                        toggleActions: "play none none reverse",
                        markers: !1,
                        invalidateOnRefresh: !0
                    }
                })
            })
        }), p.add("(max-width: 1024px)", () => {
            E.forEach(r => {
                k.fromTo(r, {
                    opacity: 0,
                    y: 100
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: r,
                        start: "top 95%",
                        containerAnimation: m,
                        toggleActions: "play none none reverse",
                        markers: !1,
                        invalidateOnRefresh: !0
                    }
                })
            })
        })
    }

    function v() {
        k.from("#gsap-bg-work-image", {
            duration: 1.5,
            opacity: 0,
            delay: .5
        })
    }
    return $(() => {
        T(), V.stop(), i === !1 && _ && v(), setTimeout(() => {
            J.set(!1), N.ScrollTrigger.refresh()
        }, 1e3), setTimeout(() => {
            V.start()
        }, 1100)
    }), ee(() => {
        N.ScrollTrigger.killAll(), N.ScrollTrigger.clearMatchMedia(p), V.stop()
    }), t.$$set = l => {
        "gsapHorizontal" in l && o(1, m = l.gsapHorizontal), "bgImageSrc" in l && o(0, _ = l.bgImageSrc), "$$scope" in l && o(2, n = l.$$scope)
    }, [_, m, n, h]
}
class de extends te {
    constructor(s) {
        super(), se(this, s, ie, ae, Y, {
            gsapHorizontal: 1,
            bgImageSrc: 0
        })
    }
}
export {
    de as W
};