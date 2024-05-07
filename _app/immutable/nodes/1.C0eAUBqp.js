import {
    s as B,
    n as A,
    o as L
} from "../chunks/scheduler.C-_Ebuka.js";
import {
    S as $,
    i as q,
    s as y,
    e as c,
    h as F,
    d as x,
    c as w,
    a as p,
    b as T,
    g as C,
    f as e,
    j as M,
    k as l,
    l as K
} from "../chunks/index.CCjB7nlp.js";
import {
    g as R
} from "../chunks/entry.BMvXNqeb.js";
import {
    g as m
} from "../chunks/gsap.DUW31Sjl.js";
import {
    S as _
} from "../chunks/SplitText.BqdrKGYP.js";
import {
    a as U,
    s as z
} from "../chunks/stores.uRYd-c39.js";

function G(k) {
    let a, s, u, t, r, f = "404",
        v, n, D = "Oh No! I have lost this page",
        S, i, N = `The page you are looking for doesn't exist. However, you can
                explore my latest works.`,
        b, h, o, O = `Selected works
                    <img src="/img_arrow_black.svg" alt="Arrow" class="scale-[0.7] md:scale-90 transition-500 group-hover:ml-2 group-hover:-mr-2 group-hover:text-orange group-hover:rotate-45"/>`,
        E, V;
    return {
        c() {
            a = y(), s = c("section"), u = c("div"), t = c("div"), r = c("h1"), r.textContent = f, v = y(), n = c("div"), n.textContent = D, S = y(), i = c("div"), i.textContent = N, b = y(), h = c("div"), o = c("button"), o.innerHTML = O, this.h()
        },
        l(g) {
            F("svelte-1rcdd9p", document.head).forEach(x), a = w(g), s = p(g, "SECTION", {
                class: !0
            });
            var j = T(s);
            u = p(j, "DIV", {
                class: !0
            });
            var H = T(u);
            t = p(H, "DIV", {
                class: !0
            });
            var d = T(t);
            r = p(d, "H1", {
                class: !0,
                id: !0,
                "data-svelte-h": !0
            }), C(r) !== "svelte-ufc1of" && (r.textContent = f), v = w(d), n = p(d, "DIV", {
                class: !0,
                id: !0,
                "data-svelte-h": !0
            }), C(n) !== "svelte-1hamojm" && (n.textContent = D), S = w(d), i = p(d, "DIV", {
                class: !0,
                id: !0,
                "data-svelte-h": !0
            }), C(i) !== "svelte-ofaj5a" && (i.textContent = N), b = w(d), h = p(d, "DIV", {
                id: !0
            });
            var P = T(h);
            o = p(P, "BUTTON", {
                title: !0,
                class: !0,
                "data-svelte-h": !0
            }), C(o) !== "svelte-3o4nuy" && (o.innerHTML = O), P.forEach(x), d.forEach(x), H.forEach(x), j.forEach(x), this.h()
        },
        h() {
            document.title = "Not Found // Nik Klemenc", e(r, "class", "serif-primary text-orange font-extrabold block text-revival text-6xl md:text-[28vh] text-center"), e(r, "id", "gsap-error-title"), e(n, "class", "text-xl lg:text-3xl 2xl:text-4xl leading-8 lg:leading-10 2xl:leading-[3rem] pl-4 md:pl-10 serif-secondary"), e(n, "id", "gsap-error-text"), e(i, "class", "text-lg lg:text-xl 2xl:text-2xl pl-4 md:pl-10 serif-secondary font-light text-center max-w-2xl"), e(i, "id", "gsap-error-text"), e(o, "title", "Read more"), e(o, "class", "btn-solid-black group"), e(h, "id", "gsap-error-button"), e(t, "class", "flex flex-col h-full justify-center items-center gap-8 mx-auto w-full"), e(u, "class", "p-4 md:p-12 lg:p-20 h-full"), e(s, "class", "pt-20 min-h-screen grid lg:pt-0 lg:pl-[104px] overflow-hidden")
        },
        m(g, I) {
            M(g, a, I), M(g, s, I), l(s, u), l(u, t), l(t, r), l(t, v), l(t, n), l(t, S), l(t, i), l(t, b), l(t, h), l(h, o), E || (V = K(o, "click", k[1]), E = !0)
        },
        p: A,
        i: A,
        o: A,
        d(g) {
            g && (x(a), x(s)), E = !1, V()
        }
    }
}

function J(k) {
    function a() {
        let t = m.gsap.utils.toArray("#gsap-error-title"),
            r = new _.SplitText(t, {
                type: "chars",
                lineThreshold: 1
            });
        new _.SplitText(t, {
            type: "chars",
            linesClass: "overflow-hidden"
        }), m.gsap.from(r.chars, {
            duration: 1.6,
            yPercent: 120,
            ease: "power4",
            stagger: .1
        });
        let f = m.gsap.utils.toArray("#gsap-error-text"),
            v = new _.SplitText(f, {
                type: "lines",
                lineThreshold: 1
            });
        new _.SplitText(f, {
            type: "lines",
            linesClass: "overflow-hidden"
        }), m.gsap.from(v.lines, {
            duration: 1.6,
            yPercent: 120,
            ease: "power4",
            stagger: .1
        }), m.gsap.from("#gsap-error-button", {
            duration: 1.6,
            delay: .8,
            opacity: 0,
            yPercent: 120,
            ease: "power4"
        })
    }

    function s() {
        U.set(!0), z.set(!0), R("/works", {
            invalidateAll: !0
        })
    }
    return L(() => {
        m.gsap.registerPlugin(_.SplitText), a()
    }), [s, () => {
        s()
    }]
}
class et extends $ {
    constructor(a) {
        super(), q(this, a, J, G, B, {})
    }
}
export {
    et as component
};