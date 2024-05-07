import {
    s as E,
    n as S,
    o as L,
    t as M,
    h as V
} from "./scheduler.C-_Ebuka.js";
import {
    S as z,
    i as P,
    e as h,
    s as T,
    a as v,
    b as y,
    g as b,
    c as A,
    d as w,
    f as s,
    j as D,
    k as f,
    z as j,
    u as q,
    v as W
} from "./index.CCjB7nlp.js";
import {
    e as C,
    g as x
} from "./lenis.DkdcNDYJ.js";
import {
    S as k
} from "./SplitText.BqdrKGYP.js";

function I(m, e, n) {
    const i = m.slice();
    return i[3] = e[n], i
}

function H(m) {
    let e, n, i, u = m[3].title + "",
        a, d, c, g, p;
    return {
        c() {
            e = h("div"), n = h("a"), i = h("div"), a = q(u), d = T(), c = h("img"), p = T(), this.h()
        },
        l(t) {
            e = v(t, "DIV", {});
            var l = y(e);
            n = v(l, "A", {
                href: !0,
                title: !0,
                target: !0,
                class: !0,
                id: !0,
                "data-cursor-stick": !0
            });
            var o = y(n);
            i = v(o, "DIV", {
                class: !0
            });
            var r = y(i);
            a = W(r, u), d = A(r), c = v(r, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), r.forEach(w), o.forEach(w), p = A(l), l.forEach(w), this.h()
        },
        h() {
            V(c.src, g = "/img_arrow_black.svg") || s(c, "src", g), s(c, "alt", "Arrow Black"), s(c, "class", "group-hover:rotate-45 transition-500 group-hover:text-orange"), s(i, "class", "flex items-center gap-3 transition-700"), s(n, "href", m[3].link), s(n, "title", m[3].title), s(n, "target", "_blank"), s(n, "class", "serif-primary text-black font-medium block text-2xl lg:text-4xl group hover-link px-2 mx-auto w-max"), s(n, "id", "gsap-connect-socials"), s(n, "data-cursor-stick", "")
        },
        m(t, l) {
            D(t, e, l), f(e, n), f(n, i), f(i, a), f(i, d), f(i, c), f(e, p)
        },
        p: S,
        d(t) {
            t && w(e)
        }
    }
}

function B(m) {
    let e, n, i = '<div class="serif-secondary text-center lg:text-left text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light" id="gsap-connect-pretitle">Want to Start a Project?</div> <a href="contact" class="group cursor-pointer"><h2 class="serif-primary font-bold italic text-[4rem] md:text-[6rem] lg:text-[8rem] 2xl:text-[12rem] leading-[4rem] md:leading-[6rem] lg:leading-[8rem] 2xl:leading-[12rem] inline-flex gap-8 mt-5 lg:mt-8 text-center lg:text-left transition-700 group-hover:tracking-[0.20rem] group-hover:-mx-[1.30rem] group-hover:text-orange cursor-pointer" id="gsap-connect-title" data-cursor-stick="">Let&#39;s <span class="text-orange">Connect</span></h2></a>',
        u, a, d = '<div class="flex items-center w-full gap-4"><hr class="w-full"/> <p class="serif-primary italic text-xl md:text-2xl lg:text-3xl 2xl:text-5xl">or</p> <hr class="w-full"/></div>',
        c, g, p = C(m[0]),
        t = [];
    for (let l = 0; l < p.length; l += 1) t[l] = H(I(m, p, l));
    return {
        c() {
            e = h("div"), n = h("div"), n.innerHTML = i, u = T(), a = h("div"), a.innerHTML = d, c = T(), g = h("div");
            for (let l = 0; l < t.length; l += 1) t[l].c();
            this.h()
        },
        l(l) {
            e = v(l, "DIV", {
                class: !0,
                id: !0
            });
            var o = y(e);
            n = v(o, "DIV", {
                "data-svelte-h": !0
            }), b(n) !== "svelte-8y51yw" && (n.innerHTML = i), u = A(o), a = v(o, "DIV", {
                class: !0,
                id: !0,
                "data-svelte-h": !0
            }), b(a) !== "svelte-1o2hgg0" && (a.innerHTML = d), c = A(o), g = v(o, "DIV", {
                class: !0
            });
            var r = y(g);
            for (let _ = 0; _ < t.length; _ += 1) t[_].l(r);
            r.forEach(w), o.forEach(w), this.h()
        },
        h() {
            s(a, "class", "max-w-2xl mx-auto w-full"), s(a, "id", "gsap-connect-or"), s(g, "class", "grid grid-cols-1 gap-4 md:grid-cols-3 justify-center items-center contact w-full cursor-pointer max-w-7xl"), s(e, "class", "mx-auto flex flex-col gap-20 w-full justify-center items-center p-4 md:p-12 lg:p-20"), s(e, "id", "connect-section")
        },
        m(l, o) {
            D(l, e, o), f(e, n), f(e, u), f(e, a), f(e, c), f(e, g);
            for (let r = 0; r < t.length; r += 1) t[r] && t[r].m(g, null)
        },
        p(l, [o]) {
            if (o & 1) {
                p = C(l[0]);
                let r;
                for (r = 0; r < p.length; r += 1) {
                    const _ = I(l, p, r);
                    t[r] ? t[r].p(_, o) : (t[r] = H(_), t[r].c(), t[r].m(g, null))
                }
                for (; r < t.length; r += 1) t[r].d(1);
                t.length = p.length
            }
        },
        i: S,
        o: S,
        d(l) {
            l && w(e), j(t, l)
        }
    }
}

function F(m, e, n) {
    let {
        gsapHorizontal: i
    } = e;
    const u = [{
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/nik-klemenc-7825a9107"
    }, {
        title: "Instagram",
        link: "https://www.instagram.com/nikklemenc"
    }, {
        title: "Facebook",
        link: "https://www.facebook.com/nik.klemenc"
    }];

    function a() {
        let d = x.utils.toArray("#gsap-connect-pretitle"),
            c = new k.SplitText(d, {
                type: "lines",
                lineThreshold: 1
            });
        new k.SplitText(d, {
            type: "lines",
            linesClass: "overflow-hidden"
        });
        let g = x.utils.toArray("#gsap-connect-title"),
            p = new k.SplitText(g, {
                type: "words",
                lineThreshold: 1
            });
        new k.SplitText(g, {
            type: "lines",
            linesClass: "overflow-hidden px-1"
        });
        let t = x.utils.toArray("#gsap-connect-socials"),
            l = new k.SplitText(t, {
                type: "lines",
                lineThreshold: 1
            });
        new k.SplitText(t, {
            type: "lines",
            linesClass: "overflow-hidden pb-1 px-1"
        }), x.timeline(), x.from(c.lines, {
            duration: 1.5,
            yPercent: 200,
            ease: "power4",
            stagger: .2,
            scrollTrigger: {
                trigger: "#connect-section",
                start: "left 60%",
                end: "left 10%",
                containerAnimation: i,
                toggleActions: "play none none reverse",
                markers: !1
            }
        }), x.from(p.words, {
            duration: 1.5,
            yPercent: 200,
            ease: "power4",
            stagger: .2,
            delay: .2,
            scrollTrigger: {
                trigger: "#connect-section",
                start: "left 60%",
                end: "left 10%",
                containerAnimation: i,
                toggleActions: "play none none reverse",
                markers: !1
            }
        }), x.from("#gsap-connect-or", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: .7,
            scrollTrigger: {
                trigger: "#connect-section",
                start: "left 60%",
                end: "left 10%",
                containerAnimation: i,
                toggleActions: "play none none reverse",
                markers: !1
            }
        }), x.from(l.lines, {
            opacity: 0,
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: .2,
            delay: 1,
            scrollTrigger: {
                trigger: "#connect-section",
                start: "left 60%",
                end: "left 10%",
                containerAnimation: i,
                toggleActions: "play none none reverse",
                markers: !1
            }
        })
    }
    return L(async () => {
        await M(), a()
    }), m.$$set = d => {
        "gsapHorizontal" in d && n(1, i = d.gsapHorizontal)
    }, [u, i]
}
class O extends z {
    constructor(e) {
        super(), P(this, e, F, B, E, {
            gsapHorizontal: 1
        })
    }
}
export {
    O as C
};