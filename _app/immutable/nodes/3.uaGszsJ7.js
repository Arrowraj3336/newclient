import {
    s as Y,
    i as he,
    n as P,
    r as ve,
    o as re,
    t as de,
    d as we,
    e as xe
} from "../chunks/scheduler.C-_Ebuka.js";
import {
    S as Z,
    i as ee,
    e as h,
    s as E,
    a as v,
    b,
    g as M,
    c as C,
    d as u,
    f as i,
    j as V,
    k as p,
    l as R,
    z as ge,
    u as ue,
    v as fe,
    w as pe,
    n as _e,
    o as j,
    h as ye,
    p as N,
    q as W,
    t as O,
    m as X,
    r as B
} from "../chunks/index.CCjB7nlp.js";
import {
    W as ke
} from "../chunks/WorkLayout.Q4_TdJYx.js";
import {
    C as be
} from "../chunks/Connect.DZ70A1sK.js";
import {
    e as Q,
    g as z,
    S as J,
    G as Te
} from "../chunks/lenis.DkdcNDYJ.js";
import {
    g as le
} from "../chunks/entry.BMvXNqeb.js";
import {
    a as K,
    s as me
} from "../chunks/stores.uRYd-c39.js";
import {
    S as A
} from "../chunks/SplitText.BqdrKGYP.js";

function ie(n, e, l) {
    const t = n.slice();
    return t[11] = e[l], t
}

function ne(n, e, l) {
    const t = n.slice();
    return t[14] = e[l], t[16] = l, t
}

function oe(n) {
    let e, l = '<div class="text-white text-sm px-3 py-1 rounded-full bg-orange overflow-hidden border border-orange group-hover:border-white transition-300">New</div>';
    return {
        c() {
            e = h("div"), e.innerHTML = l, this.h()
        },
        l(t) {
            e = v(t, "DIV", {
                id: !0,
                "data-svelte-h": !0
            }), M(e) !== "svelte-t0xzfj" && (e.innerHTML = l), this.h()
        },
        h() {
            i(e, "id", "gsap-works-new")
        },
        m(t, r) {
            V(t, e, r)
        },
        d(t) {
            t && u(e)
        }
    }
}

function ae(n) {
    let e, l = n[14] + "",
        t, r;
    return {
        c() {
            e = h("li"), t = ue(l), r = E(), this.h()
        },
        l(s) {
            e = v(s, "LI", {
                class: !0,
                id: !0
            });
            var a = b(e);
            t = fe(a, l), r = C(a), a.forEach(u), this.h()
        },
        h() {
            i(e, "class", "serif-secondary rounded-full border font-light px-3 py-1 md:px-4 md:py-1.5 max-w-max text-xs md:text-sm z-10"), i(e, "id", "gsap-works-tags")
        },
        m(s, a) {
            V(s, e, a), p(e, t), p(e, r)
        },
        p(s, a) {
            a & 4 && l !== (l = s[14] + "") && pe(t, l)
        },
        d(s) {
            s && u(e)
        }
    }
}

function ce(n) {
    let e, l, t, r, s = '<img src="/img_arrow_white_big.svg" alt="Arrow" draggable="false" class="md:scale-125 opacity-0 group-hover:opacity-100 rotate-45 transition-700"/>',
        a, o, c = n[11].title + "",
        d, f, g, k, D, T, I, w, m, S, x, $ = n[11].new && oe(),
        U = Q(n[11].tags),
        H = [];
    for (let _ = 0; _ < U.length; _ += 1) H[_] = ae(ne(n, U, _));

    function F() {
        return n[8](n[11])
    }
    return {
        c() {
            e = h("button"), l = h("div"), t = h("h3"), r = h("div"), r.innerHTML = s, a = E(), o = h("div"), d = ue(c), f = E(), $ && $.c(), g = E(), k = h("ul");
            for (let _ = 0; _ < H.length; _ += 1) H[_].c();
            D = E(), T = h("div"), w = E(), m = h("hr"), this.h()
        },
        l(_) {
            e = v(_, "BUTTON", {
                "data-cursor-img": !0,
                class: !0,
                id: !0
            });
            var q = b(e);
            l = v(q, "DIV", {
                class: !0
            });
            var y = b(l);
            t = v(y, "H3", {
                class: !0
            });
            var L = b(t);
            r = v(L, "DIV", {
                "data-svelte-h": !0
            }), M(r) !== "svelte-jzlyp2" && (r.innerHTML = s), a = C(L), o = v(L, "DIV", {
                id: !0,
                class: !0
            });
            var G = b(o);
            d = fe(G, c), f = C(G), $ && $.l(G), G.forEach(u), L.forEach(u), g = C(y), k = v(y, "UL", {
                class: !0
            });
            var se = b(k);
            for (let te = 0; te < H.length; te += 1) H[te].l(se);
            se.forEach(u), D = C(y), T = v(y, "DIV", {
                class: !0
            }), b(T).forEach(u), y.forEach(u), q.forEach(u), w = C(_), m = v(_, "HR", {
                class: !0,
                id: !0
            }), this.h()
        },
        h() {
            i(o, "id", "gsap-works-title"), i(o, "class", "flex gap-3 items-center group-hover:text-white transition-300"), i(t, "class", "serif-primary font-bold text-2xl md:text-4xl lg:text-5xl z-10 transition-700 -ml-9 md:-ml-12 group-hover:ml-1 flex items-center gap-4 md:gap-8 text-left"), i(k, "class", "flex gap-3 items-center flex-wrap md:flex-nowrap group-hover:text-white transition-300"), i(T, "class", "absolute top-0 bottom-0 w-full show-content-on-hover"), i(l, "class", "relative flex flex-col gap-2 md:flex-row justify-between py-5 md:py-10 overflow-hidden"), i(e, "data-cursor-img", I = n[11].image), i(e, "class", "w-full nav__link group -mb-[1px] z-10"), i(e, "id", "gsap-works-link"), i(m, "class", "border-gray last-of-type:hidden"), i(m, "id", "gsap-works-line")
        },
        m(_, q) {
            V(_, e, q), p(e, l), p(l, t), p(t, r), p(t, a), p(t, o), p(o, d), p(o, f), $ && $.m(o, null), p(l, g), p(l, k);
            for (let y = 0; y < H.length; y += 1) H[y] && H[y].m(k, null);
            p(l, D), p(l, T), V(_, w, q), V(_, m, q), S || (x = R(e, "click", F), S = !0)
        },
        p(_, q) {
            if (n = _, q & 4 && c !== (c = n[11].title + "") && pe(d, c), n[11].new ? $ || ($ = oe(), $.c(), $.m(o, null)) : $ && ($.d(1), $ = null), q & 12) {
                U = Q(n[11].tags);
                let y;
                for (y = 0; y < U.length; y += 1) {
                    const L = ne(n, U, y);
                    H[y] ? H[y].p(L, q) : (H[y] = ae(L), H[y].c(), H[y].m(k, null))
                }
                for (; y < H.length; y += 1) H[y].d(1);
                H.length = U.length
            }
            q & 4 && I !== (I = n[11].image) && i(e, "data-cursor-img", I)
        },
        d(_) {
            _ && (u(e), u(w), u(m)), $ && $.d(), ge(H, _), S = !1, x()
        }
    }
}

function Se(n) {
    let e, l, t = '<h2 class="serif-primary font-bold italic text-6xl md:text-[8vh] lg:text-[9.3vh] xl:text-[10vh] 2xl:text-[12vh] md:inline-flex gap-3"><span id="gsap-work-title">Selected</span> <span id="gsap-work-title" class="text-orange pt-7 md:pt-16">Works</span></h2>',
        r, s, a, o, c, d, f, g, k = `View more
                        <img src="/img_arrow_black.svg" alt="Arrow" class="scale-[0.7] md:scale-90 transition-500 group-hover:ml-2 group-hover:-mr-2 group-hover:text-orange group-hover:rotate-45"/>`,
        D, T;
    he(n[7]);
    let I = Q(n[3].slice(0, n[2])),
        w = [];
    for (let m = 0; m < I.length; m += 1) w[m] = ce(ie(n, I, m));
    return {
        c() {
            e = h("div"), l = h("div"), l.innerHTML = t, r = E(), s = h("div"), a = h("div"), o = h("div"), c = h("button");
            for (let m = 0; m < w.length; m += 1) w[m].c();
            d = E(), f = h("div"), g = h("button"), g.innerHTML = k, this.h()
        },
        l(m) {
            e = v(m, "DIV", {
                class: !0,
                id: !0
            });
            var S = b(e);
            l = v(S, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), M(l) !== "svelte-oclxp2" && (l.innerHTML = t), r = C(S), s = v(S, "DIV", {
                class: !0
            });
            var x = b(s);
            a = v(x, "DIV", {
                class: !0
            });
            var $ = b(a);
            o = v($, "DIV", {
                class: !0
            });
            var U = b(o);
            c = v(U, "BUTTON", {
                class: !0,
                id: !0
            });
            var H = b(c);
            for (let _ = 0; _ < w.length; _ += 1) w[_].l(H);
            H.forEach(u), d = C(U), f = v(U, "DIV", {
                class: !0,
                id: !0
            });
            var F = b(f);
            g = v(F, "BUTTON", {
                title: !0,
                class: !0,
                "data-cursor-stick": !0,
                "data-svelte-h": !0
            }), M(g) !== "svelte-1rf4ad5" && (g.innerHTML = k), F.forEach(u), U.forEach(u), $.forEach(u), x.forEach(u), S.forEach(u), this.h()
        },
        h() {
            i(l, "class", "w-full"), i(c, "class", "w-full"), i(c, "id", "works-section-works"), i(g, "title", "View more"), i(g, "class", "btn-solid-black group"), i(g, "data-cursor-stick", ""), i(f, "class", "w-max mr-0"), i(f, "id", "gsap-works-button"), i(o, "class", "max-w-6xl mx-auto mr-0 flex gap-6 flex-col items-center w-full relative"), i(a, "class", "flex flex-col lg:flex-row items-top gap-10 md:gap-12 xl:gap-32 2xl:gap-40 w-full"), i(s, "class", "text-left flex-col gap-5 md:gap-16 mx-auto flex items-center justify-center h-full w-full mt-12 lg:mt-0"), i(e, "class", "max-w-[1700px] mx-auto flex flex-col items-center w-full about h-full"), i(e, "id", "works-section")
        },
        m(m, S) {
            V(m, e, S), p(e, l), p(e, r), p(e, s), p(s, a), p(a, o), p(o, c);
            for (let x = 0; x < w.length; x += 1) w[x] && w[x].m(c, null);
            p(o, d), p(o, f), p(f, g), D || (T = [R(window, "resize", n[7]), R(g, "click", n[9])], D = !0)
        },
        p(m, [S]) {
            if (S & 44) {
                I = Q(m[3].slice(0, m[2]));
                let x;
                for (x = 0; x < I.length; x += 1) {
                    const $ = ie(m, I, x);
                    w[x] ? w[x].p($, S) : (w[x] = ce($), w[x].c(), w[x].m(c, null))
                }
                for (; x < w.length; x += 1) w[x].d(1);
                w.length = I.length
            }
        },
        i: P,
        o: P,
        d(m) {
            m && u(e), ge(w, m), D = !1, ve(T)
        }
    }
}

function $e(n, e, l) {
    let {
        gsapHorizontal: t
    } = e, r = 0, s = 0, a = 5;
    const o = [{
        title: "Quantifly",
        tags: ["UX/UI Design", "Full-stack Development", "Corporate Identity"],
        image: "work-square/img_quantifly_square.webp",
        link: "quantifly"
    }, {
        title: "Briefd",
        tags: ["UX/UI Design", "Corporate Identity"],
        image: "work-square/img_briefd_square.webp",
        link: "briefd"
    }, {
        title: "AirPod",
        tags: ["UX/UI Design"],
        image: "work-square/img_airpod_square.webp",
        link: "airpod"
    }, {
        title: "Royal Golf Bled",
        tags: ["UX/UI Design"],
        image: "work-square/img_royal_golf_square.webp",
        link: "royal-golf-bled",
        new: !0
    }, {
        title: "Grgar Farm",
        tags: ["UX/UI Design", "Front-end Development"],
        image: "work-square/img_kmetija_grgar_square.webp",
        link: "grgar-farm"
    }];

    function c() {
        let T = document.querySelectorAll("#gsap-work-title"),
            I = new A.SplitText(T, {
                type: "lines",
                lineThreshold: 1
            });
        new A.SplitText(T, {
            type: "lines",
            linesClass: "overflow-hidden pb-2.5"
        }), z.from(I.lines, {
            duration: 1.6,
            yPercent: 120,
            ease: "power4",
            stagger: .1,
            scrollTrigger: {
                trigger: "#works-section",
                start: "left 85%",
                end: "left 10%",
                containerAnimation: t,
                toggleActions: "play none none reverse",
                markers: !1
            }
        });
        let w = z.utils.toArray("#gsap-works-new"),
            m = new A.SplitText(w, {
                type: "lines",
                lineThreshold: 1
            });
        new A.SplitText(w, {
            type: "lines",
            linesClass: "overflow-hidden py-1.5"
        }), z.from(m.lines, {
            duration: .7,
            scale: 0,
            opacity: 0,
            delay: 1,
            stagger: .13,
            scrollTrigger: {
                trigger: "#works-section-works",
                start: "left 70%",
                end: "left 10%",
                containerAnimation: t,
                toggleActions: "play none none reverse",
                markers: !1
            }
        });
        let S = document.querySelectorAll("#gsap-works-title"),
            x = new A.SplitText(S, {
                type: "words",
                lineThreshold: 1
            });
        new A.SplitText(S, {
            type: "lines",
            linesClass: "overflow-hidden pb-2 pt-2"
        }), z.from(x.words, {
            duration: 1.6,
            yPercent: 120,
            ease: "power4",
            stagger: .1,
            scrollTrigger: {
                trigger: "#works-section-works",
                start: "left 85%",
                end: "left 10%",
                containerAnimation: t,
                toggleActions: "play none none reverse",
                markers: !1
            }
        }), z.from("#gsap-works-line", {
            duration: 1.5,
            opacity: 0,
            yPercent: 50,
            ease: "power4",
            stagger: .3,
            scrollTrigger: {
                trigger: "#works-section-works",
                start: "left 85%",
                end: "left 10%",
                containerAnimation: t,
                toggleActions: "play none none reverse",
                markers: !1
            }
        }), z.from("#gsap-works-tags", {
            duration: 1.5,
            opacity: 0,
            yPercent: 50,
            ease: "power4",
            stagger: .2,
            scrollTrigger: {
                trigger: "#works-section-works",
                start: "left 85%",
                end: "left 10%",
                containerAnimation: t,
                toggleActions: "play none none reverse",
                markers: !1
            }
        }), z.from("#gsap-works-button", {
            duration: 1.6,
            delay: 1.2,
            opacity: 0,
            yPercent: 120,
            ease: "power4",
            scrollTrigger: {
                trigger: "#works-section-works",
                start: "left 60%",
                containerAnimation: t,
                toggleActions: "play none none reverse",
                markers: !1
            }
        })
    }

    function d() {
        K.set(!0), K.set(!0), le("/works", {
            invalidateAll: !0
        })
    }

    function f(T) {
        K.set(!0), me.set(!0), le(T, {
            invalidateAll: !0
        })
    }
    re(async () => {
        r > 1024 && (s < 1200 && s > 1024 ? l(2, a = 4) : s < 1024 ? l(2, a = 3) : l(2, a = 5)), await de(), z.registerPlugin(J.ScrollTrigger, A.SplitText), c(), setTimeout(() => {
            J.ScrollTrigger.refresh()
        }, 200)
    });

    function g() {
        l(0, r = window.innerWidth), l(1, s = window.innerHeight)
    }
    const k = T => {
            f(T.link)
        },
        D = () => {
            d()
        };
    return n.$$set = T => {
        "gsapHorizontal" in T && l(6, t = T.gsapHorizontal)
    }, [r, s, a, o, d, f, t, g, k, D]
}
class Ae extends Z {
    constructor(e) {
        super(), ee(this, e, $e, Se, Y, {
            gsapHorizontal: 6
        })
    }
}

function He(n) {
    let e, l, t, r = `<h2 class="serif-primary md:text-base" id="gsap-aboutme-pretitle">Something little about me</h2> <div class="text-xl lg:text-3xl 2xl:text-4xl leading-8 lg:leading-10 2xl:leading-[3rem] pl-4 md:pl-10 serif-secondary" id="gsap-aboutme-text">As a freelancer, I&#39;ve worked with a range of clients and had
                significant involvement in several startups, from creating basic
                mobile apps to designing intricate SaaS solutions. In addition
                to my work in <span class="serif-primary italic font-bold">UX</span> <span class="serif-primary italic font-bold">and</span> <span class="serif-primary italic font-bold">UI</span> <span class="serif-primary italic font-bold">design</span>, I&#39;ve
                also taken on
                <span class="serif-primary italic font-bold">front-end</span> <span class="serif-primary italic font-bold">development</span>
                role, demonstrating a broad range of skills in the digital product
                field.</div>`,
        s, a, o, c = "Want to know more about me?",
        d, f, g, k = `Read more
                    <img src="/img_arrow_black.svg" alt="Arrow" class="scale-[0.7] md:scale-90 transition-500 group-hover:ml-2 group-hover:-mr-2 group-hover:text-orange group-hover:rotate-45"/>`,
        D, T;
    return {
        c() {
            e = h("div"), l = h("div"), t = h("div"), t.innerHTML = r, s = E(), a = h("div"), o = h("p"), o.textContent = c, d = E(), f = h("div"), g = h("button"), g.innerHTML = k, this.h()
        },
        l(I) {
            e = v(I, "DIV", {
                class: !0
            });
            var w = b(e);
            l = v(w, "DIV", {
                class: !0,
                id: !0
            });
            var m = b(l);
            t = v(m, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), M(t) !== "svelte-uot6vx" && (t.innerHTML = r), s = C(m), a = v(m, "DIV", {
                class: !0
            });
            var S = b(a);
            o = v(S, "P", {
                class: !0,
                id: !0,
                "data-svelte-h": !0
            }), M(o) !== "svelte-1lfpdou" && (o.textContent = c), d = C(S), f = v(S, "DIV", {
                class: !0,
                id: !0
            });
            var x = b(f);
            g = v(x, "BUTTON", {
                title: !0,
                class: !0,
                "data-cursor-stick": !0,
                "data-svelte-h": !0
            }), M(g) !== "svelte-1scvw72" && (g.innerHTML = k), x.forEach(u), S.forEach(u), m.forEach(u), w.forEach(u), this.h()
        },
        h() {
            i(t, "class", "flex flex-col gap-4"), i(o, "class", "serif-primary md:text-base mr-10 md:mr-36"), i(o, "id", "gsap-aboutme-know-more"), i(g, "title", "Read more"), i(g, "class", "btn-solid-black group"), i(g, "data-cursor-stick", ""), i(f, "class", "w-max mr-0"), i(f, "id", "gsap-aboutme-button"), i(a, "class", "text-end flex flex-col items-end gap-2 md:gap-4"), i(l, "class", "max-w-5xl flex flex-col justify-center gap-6 md:gap-12"), i(l, "id", "about-section"), i(e, "class", "mx-auto flex justify-center w-full h-full")
        },
        m(I, w) {
            V(I, e, w), p(e, l), p(l, t), p(l, s), p(l, a), p(a, o), p(a, d), p(a, f), p(f, g), D || (T = R(g, "click", n[2]), D = !0)
        },
        p: P,
        i: P,
        o: P,
        d(I) {
            I && u(e), D = !1, T()
        }
    }
}

function Ie(n, e, l) {
    let {
        gsapHorizontal: t
    } = e;

    function r() {
        let o = document.querySelector("#gsap-aboutme-pretitle"),
            c = new A.SplitText(o, {
                type: "lines",
                lineThreshold: 1
            });
        new A.SplitText(o, {
            type: "lines",
            linesClass: "overflow-hidden"
        }), z.from(c.lines, {
            duration: 1.6,
            yPercent: -120,
            ease: "power4",
            stagger: .1,
            scrollTrigger: {
                trigger: "#about-section",
                start: "left 85%",
                containerAnimation: t,
                toggleActions: "play none none reverse",
                markers: !1
            }
        });
        let d = document.querySelector("#gsap-aboutme-text"),
            f = new A.SplitText(d, {
                type: "lines",
                lineThreshold: 1
            });
        new A.SplitText(d, {
            type: "lines",
            linesClass: "overflow-hidden"
        }), z.from(f.lines, {
            duration: 1.6,
            yPercent: 120,
            ease: "power4",
            stagger: .1,
            scrollTrigger: {
                trigger: "#about-section",
                start: "left 85%",
                containerAnimation: t,
                toggleActions: "play none none reverse",
                markers: !1
            }
        });
        let g = document.querySelector("#gsap-aboutme-know-more"),
            k = new A.SplitText(g, {
                type: "lines",
                lineThreshold: 1
            });
        new A.SplitText(g, {
            type: "lines",
            linesClass: "overflow-hidden"
        }), z.from(k.lines, {
            duration: 1.6,
            yPercent: 120,
            ease: "power4",
            stagger: .1,
            delay: 1,
            scrollTrigger: {
                trigger: "#about-section",
                start: "left 60%",
                containerAnimation: t,
                toggleActions: "play none none reverse",
                markers: !1
            }
        }), z.from("#gsap-aboutme-button", {
            duration: 1.6,
            delay: 1.2,
            opacity: 0,
            yPercent: 120,
            ease: "power4",
            scrollTrigger: {
                trigger: "#about-section",
                start: "left 60%",
                containerAnimation: t,
                toggleActions: "play none none reverse",
                markers: !1
            }
        })
    }

    function s() {
        K.set(!0), me.set(!0), le("/about-me", {
            invalidateAll: !0
        })
    }
    re(async () => {
        await de(), z.registerPlugin(A.SplitText, J.ScrollTrigger), r(), setTimeout(() => {
            J.ScrollTrigger.refresh()
        }, 200)
    });
    const a = () => {
        s()
    };
    return n.$$set = o => {
        "gsapHorizontal" in o && l(1, t = o.gsapHorizontal)
    }, [s, t, a]
}
class De extends Z {
    constructor(e) {
        super(), ee(this, e, Ie, He, Y, {
            gsapHorizontal: 1
        })
    }
}

function ze(n) {
    let e, l = '<div class="flex flex-col gap-16 lg:gap-20"><div class="serif-primary font-light text-center text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] 2xl:text-[2rem] leading-[1.3] md:leading-[1.5rem] lg:leading-[1.8rem] 2xl:leading-[2rem] lg:-mb-10" id="gsap-landing-hero-title">Creative since 2015</div> <h1 class="block serif-primary italic font-bold text-orange text-7xl md:text-[12vh] lg:text-[14vh] xl:text-[19vh] 2xl:text-[24vh] w-max mx-auto text-center" id="gsap-landing-hero-name">Nik <br/>Klemenc</h1> <div class="flex flex-col md:flex-row items-center gap-2 md:justify-between serif-primary font-light text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] 2xl:text-[2rem] leading-[1.3] md:leading-[1.5rem] lg:leading-[1.8rem] 2xl:leading-[2rem] lg:-mt-14"><div class="" id="gsap-landing-hero-experties">UX/UI Designer</div> <div class="" id="gsap-landing-hero-experties">Front-end Developer</div></div></div> <div class="absolute bottom-24 md:bottom-14 scale-75 md:scale-100"><div class="flex items-center font-light gap-3 serif-secondary gasp-landing-see-more text-revival" id="gsap-hero-scroll"><div class="scroll-down-container"><div class="scroller"></div></div> <div>Scroll to see more</div></div></div>';
    return {
        c() {
            e = h("div"), e.innerHTML = l, this.h()
        },
        l(t) {
            e = v(t, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), M(e) !== "svelte-g7b4xf" && (e.innerHTML = l), this.h()
        },
        h() {
            i(e, "class", "mx-auto flex items-center justify-center p-4 md:p-12 lg:p-20 mt-4 md:mt-0")
        },
        m(t, r) {
            V(t, e, r)
        },
        p: P,
        i: P,
        o: P,
        d(t) {
            t && u(e)
        }
    }
}

function Ee(n) {
    function e() {
        const l = z.timeline();
        let t = document.querySelector("#gsap-landing-hero-title"),
            r = new A.SplitText(t, {
                type: "lines",
                lineThreshold: 1
            });
        new A.SplitText(t, {
            type: "lines",
            linesClass: "overflow-hidden"
        });
        let s = document.querySelectorAll("#gsap-landing-hero-name"),
            a = new A.SplitText(s, {
                type: "words",
                lineThreshold: 1
            });
        new A.SplitText(s, {
            type: "lines",
            linesClass: "overflow-hidden px-2"
        });
        let o = document.querySelectorAll("#gsap-landing-hero-experties"),
            c = new A.SplitText(o, {
                type: "lines",
                lineThreshold: 1
            });
        new A.SplitText(o, {
            type: "lines",
            linesClass: "overflow-hidden pb-1"
        }), l.from(r.lines, {
            duration: 1.5,
            yPercent: 120,
            ease: "power4"
        }).from(a.words, {
            duration: 1.5,
            yPercent: 120,
            ease: "power4",
            stagger: .3
        }, "-=0.9").from(c.lines, {
            duration: 1.5,
            yPercent: 120,
            ease: "power4",
            stagger: .3
        }, "-=0.7").from("#gsap-hero-scroll", {
            duration: 1.5,
            opacity: 0,
            yPercent: 120,
            ease: "power4",
            stagger: .2
        }, "-=1.1")
    }
    return re(() => {
        z.registerPlugin(A.SplitText, Te.GSDevTools), e()
    }), []
}
class Ce extends Z {
    constructor(e) {
        super(), ee(this, e, Ee, ze, Y, {})
    }
}

function Ve(n) {
    let e, l, t;
    return l = new Ce({}), {
        c() {
            e = h("div"), j(l.$$.fragment), this.h()
        },
        l(r) {
            e = v(r, "DIV", {
                slot: !0,
                class: !0
            });
            var s = b(e);
            N(l.$$.fragment, s), s.forEach(u), this.h()
        },
        h() {
            i(e, "slot", "hero"), i(e, "class", "h-full w-full flex items-center")
        },
        m(r, s) {
            V(r, e, s), W(l, e, null), t = !0
        },
        p: P,
        i(r) {
            t || (O(l.$$.fragment, r), t = !0)
        },
        o(r) {
            X(l.$$.fragment, r), t = !1
        },
        d(r) {
            r && u(e), B(l)
        }
    }
}

function Ue(n) {
    let e, l, t, r, s, a, o, c;
    return r = new De({
        props: {
            gsapHorizontal: n[0]
        }
    }), o = new Ae({
        props: {
            gsapHorizontal: n[0]
        }
    }), {
        c() {
            e = h("div"), l = h("div"), t = h("div"), j(r.$$.fragment), s = E(), a = h("div"), j(o.$$.fragment), this.h()
        },
        l(d) {
            e = v(d, "DIV", {
                slot: !0,
                class: !0
            });
            var f = b(e);
            l = v(f, "DIV", {
                class: !0
            });
            var g = b(l);
            t = v(g, "DIV", {
                class: !0
            });
            var k = b(t);
            N(r.$$.fragment, k), k.forEach(u), s = C(g), a = v(g, "DIV", {
                class: !0
            });
            var D = b(a);
            N(o.$$.fragment, D), D.forEach(u), g.forEach(u), f.forEach(u), this.h()
        },
        h() {
            i(t, "class", "lg:shrink-0 lg:h-full lg:min-w-[1800px]"), i(a, "class", "lg:shrink-0 lg:h-full lg:min-w-[1800px]"), i(l, "class", "flex flex-col h-full lg:flex-row lg:items-center lg:justify-center gap-56 lg:gap-[16vw] w-full lg:w-auto"), i(e, "slot", "body"), i(e, "class", "h-full w-full flex flex-col lg:flex-row items-center")
        },
        m(d, f) {
            V(d, e, f), p(e, l), p(l, t), W(r, t, null), p(l, s), p(l, a), W(o, a, null), c = !0
        },
        p(d, f) {
            const g = {};
            f & 1 && (g.gsapHorizontal = d[0]), r.$set(g);
            const k = {};
            f & 1 && (k.gsapHorizontal = d[0]), o.$set(k)
        },
        i(d) {
            c || (O(r.$$.fragment, d), O(o.$$.fragment, d), c = !0)
        },
        o(d) {
            X(r.$$.fragment, d), X(o.$$.fragment, d), c = !1
        },
        d(d) {
            d && u(e), B(r), B(o)
        }
    }
}

function qe(n) {
    let e, l, t;
    return l = new be({
        props: {
            gsapHorizontal: n[0]
        }
    }), {
        c() {
            e = h("div"), j(l.$$.fragment), this.h()
        },
        l(r) {
            e = v(r, "DIV", {
                slot: !0,
                class: !0
            });
            var s = b(e);
            N(l.$$.fragment, s), s.forEach(u), this.h()
        },
        h() {
            i(e, "slot", "next-project"), i(e, "class", "h-full w-full flex items-center")
        },
        m(r, s) {
            V(r, e, s), W(l, e, null), t = !0
        },
        p(r, s) {
            const a = {};
            s & 1 && (a.gsapHorizontal = r[0]), l.$set(a)
        },
        i(r) {
            t || (O(l.$$.fragment, r), t = !0)
        },
        o(r) {
            X(l.$$.fragment, r), t = !1
        },
        d(r) {
            r && u(e), B(l)
        }
    }
}

function Pe(n) {
    let e, l, t, r, s;

    function a(c) {
        n[1](c)
    }
    let o = {
        $$slots: {
            "next-project": [qe],
            body: [Ue],
            hero: [Ve]
        },
        $$scope: {
            ctx: n
        }
    };
    return n[0] !== void 0 && (o.gsapHorizontal = n[0]), t = new ke({
        props: o
    }), we.push(() => _e(t, "gsapHorizontal", a)), {
        c() {
            e = h("meta"), l = E(), j(t.$$.fragment), this.h()
        },
        l(c) {
            const d = ye("svelte-1gcsx3y", document.head);
            e = v(d, "META", {
                name: !0,
                content: !0
            }), d.forEach(u), l = C(c), N(t.$$.fragment, c), this.h()
        },
        h() {
            document.title = "Online Portfolio // Nik Klemenc", i(e, "name", "description"), i(e, "content", "Nik Klemenc, UX/UI designer and Front-end developer from Slovenia. I have 8 years experiance in UX/UI and 4 years in Front-end development.")
        },
        m(c, d) {
            p(document.head, e), V(c, l, d), W(t, c, d), s = !0
        },
        p(c, [d]) {
            const f = {};
            d & 5 && (f.$$scope = {
                dirty: d,
                ctx: c
            }), !r && d & 1 && (r = !0, f.gsapHorizontal = c[0], xe(() => r = !1)), t.$set(f)
        },
        i(c) {
            s || (O(t.$$.fragment, c), s = !0)
        },
        o(c) {
            X(t.$$.fragment, c), s = !1
        },
        d(c) {
            c && u(l), u(e), B(t, c)
        }
    }
}

function Me(n, e, l) {
    let t;

    function r(s) {
        t = s, l(0, t)
    }
    return [t, r]
}
class Ge extends Z {
    constructor(e) {
        super(), ee(this, e, Me, Pe, Y, {})
    }
}
export {
    Ge as component
};