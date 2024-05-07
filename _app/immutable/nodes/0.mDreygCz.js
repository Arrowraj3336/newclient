import {
    B as ut,
    l as dt,
    C as Ne,
    s as J,
    n as ce,
    b as ue,
    o as _e,
    f as ft,
    i as ke,
    h as mt,
    d as Ae,
    e as Me,
    c as ht,
    u as vt,
    g as pt,
    a as gt
} from "../chunks/scheduler.C-_Ebuka.js";
import {
    p as de
} from "../chunks/stores.DTfGbVZ-.js";
import {
    S as re,
    i as ae,
    e as p,
    s as N,
    a as g,
    b as D,
    d,
    c as C,
    f as c,
    j as V,
    k as f,
    l as W,
    g as oe,
    t as M,
    C as B,
    m as $,
    B as F,
    z as Ce,
    E as se,
    u as Ze,
    v as et,
    A as K,
    n as Oe,
    o as ee,
    p as te,
    q as ie,
    r as ne,
    y as ge,
    h as bt,
    F as wt
} from "../chunks/index.CCjB7nlp.js";
import {
    g as _t
} from "../chunks/globals.D0QH3NT1.js";
import {
    e as pe,
    l as be,
    g as fe,
    G as kt
} from "../chunks/lenis.DkdcNDYJ.js";
import {
    a as me,
    s as yt,
    b as St
} from "../chunks/stores.uRYd-c39.js";
import {
    g as tt,
    o as xt,
    a as Tt
} from "../chunks/entry.BMvXNqeb.js";
import {
    S as le
} from "../chunks/SplitText.BqdrKGYP.js";
var Et = "@vercel/analytics",
    Dt = "1.2.2",
    It = () => {
        window.va || (window.va = function(...t) {
            (window.vaq = window.vaq || []).push(t)
        })
    };

function it() {
    return typeof window < "u"
}

function nt() {
    try {
        const n = "production"
    } catch {}
    return "production"
}

function At(n = "auto") {
    if (n === "auto") {
        window.vam = nt();
        return
    }
    window.vam = n
}

function Mt() {
    return (it() ? window.vam : nt()) || "production"
}

function Ee() {
    return Mt() === "development"
}
var Ot = "https://va.vercel-scripts.com/v1/script.debug.js",
    Pt = "/_vercel/insights/script.js";

function Lt(n = {
    debug: !0
}) {
    var t;
    if (!it()) return;
    At(n.mode), It(), n.beforeSend && ((t = window.va) == null || t.call(window, "beforeSend", n.beforeSend));
    const i = n.scriptSrc || (Ee() ? Ot : Pt);
    if (document.head.querySelector(`script[src*="${i}"]`)) return;
    const e = document.createElement("script");
    e.src = i, e.defer = !0, e.dataset.sdkn = Et + (n.framework ? `/${n.framework}` : ""), e.dataset.sdkv = Dt, n.disableAutoTrack && (e.dataset.disableAutoTrack = "1"), n.endpoint && (e.dataset.endpoint = n.endpoint), n.dsn && (e.dataset.dsn = n.dsn), e.onerror = () => {
        const o = Ee() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${i}. ${o}`)
    }, Ee() && n.debug === !1 && (e.dataset.debug = "false"), document.head.appendChild(e)
}
var $t = "@vercel/speed-insights",
    Nt = "1.0.10",
    Ct = () => {
        window.si || (window.si = function(...t) {
            (window.siq = window.siq || []).push(t)
        })
    };

function Vt() {
    return typeof window < "u"
}

function Rt() {
    try {
        const n = "production"
    } catch {}
    return "production"
}

function Ve() {
    return Rt() === "development"
}
var ot = "https://va.vercel-scripts.com/v1/speed-insights",
    Ht = `${ot}/script.js`,
    Ut = `${ot}/script.debug.js`,
    jt = "/_vercel/speed-insights/script.js";

function zt(n = {}) {
    var t;
    if (!Vt() || n.route === null) return null;
    Ct();
    const e = !!n.dsn ? Ht : jt,
        o = n.scriptSrc || (Ve() ? Ut : e);
    if (document.head.querySelector(`script[src*="${o}"]`)) return null;
    n.beforeSend && ((t = window.si) == null || t.call(window, "beforeSend", n.beforeSend));
    const s = document.createElement("script");
    return s.src = o, s.defer = !0, s.dataset.sdkn = $t + (n.framework ? `/${n.framework}` : ""), s.dataset.sdkv = Nt, n.sampleRate && (s.dataset.sampleRate = n.sampleRate.toString()), n.route && (s.dataset.route = n.route), n.endpoint && (s.dataset.endpoint = n.endpoint), n.dsn && (s.dataset.dsn = n.dsn), Ve() && n.debug === !1 && (s.dataset.debug = "false"), s.onerror = () => {
        console.log(`[Vercel Speed Insights] Failed to load script from ${o}. Please check if any content blockers are enabled and try again.`)
    }, document.head.appendChild(s), {
        setRoute: r => {
            s.dataset.route = r ? ? void 0
        }
    }
}

function qt(n = {}) {
    var t; {
        const i = zt({
            route: (t = ut(de).route) == null ? void 0 : t.id,
            ...n,
            framework: "sveltekit"
        });
        i && de.subscribe(e => {
            var o;
            (o = e.route) != null && o.id && i.setRoute(e.route.id)
        })
    }
}
qt();
Lt({
    mode: "production"
});
const Di = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}));
var O = {};

function Ie() {
    return typeof navigator.userAgentData == "object" && "mobile" in navigator.userAgentData ? navigator.userAgentData.mobile : function(n) {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.slice(0, 4))
    }(navigator.userAgent || navigator.vendor || window.opera)
}

function Re() {
    if (Ie()) {
        var n = window.innerWidth,
            t = window.innerHeight,
            i = Math.min(n, t),
            e = Math.max(n, t);
        return i <= 480 && e <= 896
    } else return !1
}

function Pe() {
    return O.AppRunsOnLegacyTouchDevice == null && (O.AppRunsOnLegacyTouchDevice = !Y("(pointer:fine)") && !Y("(pointer:coarse)") && !Y("-moz-touch-enabled") && ("ontouchstart" in Window || (navigator.maxTouchPoints || 0) > 0 || /touch|android|iphone|ipod|ipad/i.test(navigator.userAgent))), O.AppRunsOnLegacyTouchDevice
}

function Bt() {
    return O.DevicePointingAccuracy == null && (he(), !ye() && !O.waitingForLoaded && (O.waitingForLoaded = !0, window.addEventListener("DOMContentLoaded", he))), O.DeviceCanHover
}

function we() {
    return O.DevicePointingAccuracy == null && (he(), !ye() && !O.waitingForLoaded && (O.waitingForLoaded = !0, window.addEventListener("DOMContentLoaded", he))), O.DevicePointingAccuracy
}

function he() {
    O.DeviceCanHover = Y("(hover:hover)");
    var n = "fine";
    switch (!0) {
        case Y("(pointer:none)"):
            n = "none";
            break;
        case Y("(pointer:coarse)"):
        case Y("-moz-touch-enabled"):
        case Pe():
            n = "coarse";
            break
    }
    if (O.DevicePointingAccuracy = n, ye()) {
        var t = document.body.classList;
        if (n === "none" !== t.contains("noPointer") || n === "fine" !== t.contains("finePointer") || n === "coarse" !== t.contains("coarsePointer")) switch (document.body.classList.remove("noPointer", "finePointer", "coarsePointer"), n) {
            case "none":
                document.body.classList.add("noPointer");
                break;
            case "fine":
                document.body.classList.add("finePointer");
                break;
            case "coarse":
                document.body.classList.add("coarsePointer");
                break
        }
    }
}

function Ft(n) {
    rt(n, !1)
}

function Kt(n) {
    rt(n, !0)
}

function Wt(n) {
    at(n)
}

function ye() {
    return document.readyState === "interactive" || document.readyState === "complete"
}

function Y(n) {
    var t = window.matchMedia || window.webkitMatchmedia || window.mozMatchmedia || window.oMatchmedia;
    return t != null && t(n).matches
}

function Xt(n, t) {
    return typeof n.item == "function" ? n.item(t) : n[t]
}

function Gt(n, t) {
    for (var i = 0, e = n.length; i < e; i++)
        if (t.test(Xt(n, i))) return !0;
    return !1
}

function st() {
    if (!O.MediaQueriesHaveBeenRewritten && Pe())
        if (ye()) {
            for (var n = document.styleSheets, t = 0, i = n.length; t < i; t++)
                for (var e = n[t].cssRules || n[t].rules, o = 0, s = e.length; o < s; o++) {
                    var r = e[o];
                    if (r.type === CSSRule.MEDIA_RULE && Gt(r.media, /handheld/i)) {
                        var a = r.media;
                        a.mediaText = a.mediaText.replace("handheld", "screen")
                    }
                }
            for (var l = document.getElementsByTagName("link"), t = 0, i = l.length; t < i; t++) {
                var u = l[t];
                /handheld/i.test(u.media) && (u.media = u.media.replace("handheld", "screen"))
            }
            O.MediaQueriesHaveBeenRewritten = !0
        } else window.addEventListener("DOMContentLoaded", st)
}

function rt(n, t) {
    if (typeof n != "function") throw new Error("handler function expected");
    O.EventHandlerRegistry == null && (O.EventHandlerRegistry = []);
    for (var i = O.EventHandlerRegistry, e = 0, o = i.length; e < o; e++)
        if (i[e].Handler === n) {
            i[e].onceOnly = t;
            return
        }
    i.push({
        Handler: n,
        onceOnly: t
    }), i.length === 1 && Qt()
}

function at(n) {
    O.EventHandlerRegistry == null && (O.EventHandlerRegistry = []);
    for (var t = O.EventHandlerRegistry, i = 0, e = t.length; i < e; i++)
        if (t[i].Handler === n) {
            t.splice(i, 1);
            break
        }
    t.length === 0 && Yt()
}

function Qt() {
    O.AccuracyPoller = setInterval(function() {
        var n = we();
        he(), we() !== n && Jt()
    }, 500)
}

function Yt() {
    clearInterval(O.AccuracyPoller), O.AccuracyPoller = void 0
}

function Jt() {
    O.EventHandlerRegistry == null && (O.EventHandlerRegistry = []);
    for (var n = O.EventHandlerRegistry, t = 0, i = n.length; t < i; t++) {
        var e = n[t],
            o = e.Handler,
            s = e.onceOnly;
        try {
            o(we())
        } catch (r) {
            console.warn("PointingAccuracy observation function failed with", r)
        }
        s && at(o)
    }
}
var De = {
    get isMobile() {
        return Ie()
    },
    get isPhone() {
        return Re()
    },
    get isTablet() {
        return Ie() && !Re()
    },
    get isLegacyTouchDevice() {
        return Pe()
    },
    rewriteMediaQueriesOnLegacyTouchDevices: st,
    get PointingAccuracy() {
        return we()
    },
    get canHover() {
        return Bt()
    },
    onPointingAccuracyChanged: Ft,
    oncePointingAccuracyChanged: Kt,
    offPointingAccuracyChanged: Wt,
    get observesPointingAccuracy() {
        return O.AccuracyPoller != null
    }
};

function Zt(n) {
    const t = n - 1;
    return t * t * t + 1
}

function ve(n, {
    delay: t = 0,
    duration: i = 400,
    easing: e = dt
} = {}) {
    const o = +getComputedStyle(n).opacity;
    return {
        delay: t,
        duration: i,
        easing: e,
        css: s => `opacity: ${s*o}`
    }
}

function He(n, {
    delay: t = 0,
    duration: i = 400,
    easing: e = Zt,
    x: o = 0,
    y: s = 0,
    opacity: r = 0
} = {}) {
    const a = getComputedStyle(n),
        l = +a.opacity,
        u = a.transform === "none" ? "" : a.transform,
        b = l * (1 - r),
        [k, m] = Ne(o),
        [v, _] = Ne(s);
    return {
        delay: t,
        duration: i,
        easing: e,
        css: (I, x) => `
			transform: ${u} translate(${(1-I)*k}${m}, ${(1-I)*v}${_});
			opacity: ${l-b*x}`
    }
}

function ei(n) {
    let t, i, e, o, s, r, a, l, u, b, k;
    return {
        c() {
            t = p("button"), i = p("div"), e = p("span"), o = N(), s = p("span"), a = N(), l = p("span"), this.h()
        },
        l(m) {
            t = g(m, "BUTTON", {
                class: !0,
                "aria-label": !0,
                id: !0
            });
            var v = D(t);
            i = g(v, "DIV", {
                class: !0,
                id: !0
            });
            var _ = D(i);
            e = g(_, "SPAN", {
                class: !0
            }), D(e).forEach(d), o = C(_), s = g(_, "SPAN", {
                class: !0
            }), D(s).forEach(d), a = C(_), l = g(_, "SPAN", {
                class: !0
            }), D(l).forEach(d), _.forEach(d), v.forEach(d), this.h()
        },
        h() {
            c(e, "class", "line !ml-0 group-hover:!w-6"), c(s, "class", r = "line transition-700 " + (n[0] ? "!bg-transparent" : "")), c(l, "class", "line2 !ml-0"), c(i, "class", u = "hamburger transition-700 text-left group " + (n[0] ? "is-active" : "")), c(i, "id", "hamburger-12"), c(t, "class", "menu relative z-50"), c(t, "aria-label", "Main Menu"), c(t, "id", "menuIcon")
        },
        m(m, v) {
            V(m, t, v), f(t, i), f(i, e), f(i, o), f(i, s), f(i, a), f(i, l), b || (k = W(t, "click", n[1]), b = !0)
        },
        p(m, [v]) {
            v & 1 && r !== (r = "line transition-700 " + (m[0] ? "!bg-transparent" : "")) && c(s, "class", r), v & 1 && u !== (u = "hamburger transition-700 text-left group " + (m[0] ? "is-active" : "")) && c(i, "class", u)
        },
        i: ce,
        o: ce,
        d(m) {
            m && d(t), b = !1, k()
        }
    }
}

function ti(n, t, i) {
    let {
        menuOpen: e = !1
    } = t;
    const o = () => {
        i(0, e = !e)
    };
    return n.$$set = s => {
        "menuOpen" in s && i(0, e = s.menuOpen)
    }, [e, o]
}
class lt extends re {
    constructor(t) {
        super(), ae(this, t, ti, ei, J, {
            menuOpen: 0
        })
    }
}

function Ue(n, t, i) {
    const e = n.slice();
    return e[10] = t[i], e
}

function je(n, t, i) {
    const e = n.slice();
    return e[13] = t[i], e
}

function ze(n) {
    let t, i, e;
    return {
        c() {
            t = p("button"), this.h()
        },
        l(o) {
            t = g(o, "BUTTON", {
                class: !0
            }), D(t).forEach(d), this.h()
        },
        h() {
            c(t, "class", "item-2")
        },
        m(o, s) {
            V(o, t, s), e = !0
        },
        i(o) {
            e || (o && ke(() => {
                e && (i || (i = se(t, ve, {}, !0)), i.run(1))
            }), e = !0)
        },
        o(o) {
            o && (i || (i = se(t, ve, {}, !1)), i.run(0)), e = !1
        },
        d(o) {
            o && d(t), o && i && i.end()
        }
    }
}

function qe(n) {
    let t, i, e, o = n[13].title + "",
        s, r, a, l;

    function u() {
        return n[7](n[13])
    }
    return {
        c() {
            t = p("div"), i = p("button"), e = p("span"), s = Ze(o), r = N(), this.h()
        },
        l(b) {
            t = g(b, "DIV", {});
            var k = D(t);
            i = g(k, "BUTTON", {
                class: !0,
                "data-cursor-stick": !0
            });
            var m = D(i);
            e = g(m, "SPAN", {});
            var v = D(e);
            s = et(v, o), v.forEach(d), m.forEach(d), r = C(k), k.forEach(d), this.h()
        },
        h() {
            c(i, "class", "link serif-primary text-light-beige font-extrabold block text-revival gasp-menu text-6xl leading-[80px] md:text-[16vh] md:leading-[16vh]"), c(i, "data-cursor-stick", "")
        },
        m(b, k) {
            V(b, t, k), f(t, i), f(i, e), f(e, s), f(t, r), a || (l = W(i, "click", u), a = !0)
        },
        p(b, k) {
            n = b
        },
        d(b) {
            b && d(t), a = !1, l()
        }
    }
}

function Be(n) {
    let t, i, e, o = n[10].title + "",
        s, r, a, l, u;
    return {
        c() {
            t = p("div"), i = p("a"), e = p("div"), s = Ze(o), r = N(), a = p("img"), u = N(), this.h()
        },
        l(b) {
            t = g(b, "DIV", {});
            var k = D(t);
            i = g(k, "A", {
                href: !0,
                target: !0,
                class: !0,
                "data-cursor-stick": !0
            });
            var m = D(i);
            e = g(m, "DIV", {
                class: !0
            });
            var v = D(e);
            s = et(v, o), r = C(v), a = g(v, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), v.forEach(d), m.forEach(d), u = C(k), k.forEach(d), this.h()
        },
        h() {
            mt(a.src, l = "icn_arrow.svg") || c(a, "src", l), c(a, "alt", n[10].title), c(a, "class", "group-hover:rotate-45 transition-500 group-hover:text-orange scale-50 md:scale-100"), c(e, "class", "flex items-center gap-1 md:gap-3 transition-700"), c(i, "href", n[10].link), c(i, "target", "_blank"), c(i, "class", "serif-primary text-light-beige font-bold block text-revival gasp-menu text-md md:text-[2vh] group hover-link px-1"), c(i, "data-cursor-stick", "")
        },
        m(b, k) {
            V(b, t, k), f(t, i), f(i, e), f(e, s), f(e, r), f(e, a), f(t, u)
        },
        p: ce,
        d(b) {
            b && d(t)
        }
    }
}

function ii(n) {
    let t, i, e, o, s, r, a = '<div class="serif-primary italic text-revival gasp-menu">Online Portfolio</div> <div class="serif-secondary text-revival gasp-menu">Nik Klemenc</div>',
        l, u, b, k, m, v, _ = n[0] && ze(),
        I = pe(n[3]),
        x = [];
    for (let w = 0; w < I.length; w += 1) x[w] = qe(je(n, I, w));
    let T = pe(n[4]),
        y = [];
    for (let w = 0; w < T.length; w += 1) y[w] = Be(Ue(n, T, w));
    return {
        c() {
            t = p("menu"), i = p("button"), e = p("div"), _ && _.c(), o = N(), s = p("div"), r = p("div"), r.innerHTML = a, l = N(), u = p("div");
            for (let w = 0; w < x.length; w += 1) x[w].c();
            b = N(), k = p("div");
            for (let w = 0; w < y.length; w += 1) y[w].c();
            this.h()
        },
        l(w) {
            t = g(w, "MENU", {
                class: !0,
                id: !0
            });
            var A = D(t);
            i = g(A, "BUTTON", {
                class: !0,
                "data-cursor-stick": !0
            });
            var h = D(i);
            e = g(h, "DIV", {
                class: !0
            });
            var P = D(e);
            _ && _.l(P), P.forEach(d), h.forEach(d), o = C(A), s = g(A, "DIV", {
                class: !0
            });
            var L = D(s);
            r = g(L, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), oe(r) !== "svelte-hm6go3" && (r.innerHTML = a), l = C(L), u = g(L, "DIV", {
                class: !0
            });
            var j = D(u);
            for (let R = 0; R < x.length; R += 1) x[R].l(j);
            j.forEach(d), b = C(L), k = g(L, "DIV", {
                class: !0
            });
            var X = D(k);
            for (let R = 0; R < y.length; R += 1) y[R].l(X);
            X.forEach(d), L.forEach(d), A.forEach(d), this.h()
        },
        h() {
            c(e, "class", "text-revival gasp-menu-hamburger"), c(i, "class", "absolute top-3 right-3 md:right-auto md:top-8 md:left-10 bg-dark-gray z-20"), c(i, "data-cursor-stick", ""), c(r, "class", "text-light-beige text-sm md:text-[1.7vh] leading-6 md:leading-[2.7vh]"), c(u, "class", "block menu-links"), c(k, "class", "flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center"), c(s, "class", "text-center flex flex-col gap-4 justify-between h-full"), c(t, "class", "fixed top-0 left-0 right-0 bottom-0 bg-dark-gray z-50"), c(t, "id", "menuList")
        },
        m(w, A) {
            V(w, t, A), f(t, i), f(i, e), _ && _.m(e, null), f(t, o), f(t, s), f(s, r), f(s, l), f(s, u);
            for (let h = 0; h < x.length; h += 1) x[h] && x[h].m(u, null);
            f(s, b), f(s, k);
            for (let h = 0; h < y.length; h += 1) y[h] && y[h].m(k, null);
            m || (v = W(i, "click", n[6]), m = !0)
        },
        p(w, [A]) {
            if (w[0] ? _ ? A & 1 && M(_, 1) : (_ = ze(), _.c(), M(_, 1), _.m(e, null)) : _ && (B(), $(_, 1, 1, () => {
                    _ = null
                }), F()), A & 14) {
                I = pe(w[3]);
                let h;
                for (h = 0; h < I.length; h += 1) {
                    const P = je(w, I, h);
                    x[h] ? x[h].p(P, A) : (x[h] = qe(P), x[h].c(), x[h].m(u, null))
                }
                for (; h < x.length; h += 1) x[h].d(1);
                x.length = I.length
            }
            if (A & 16) {
                T = pe(w[4]);
                let h;
                for (h = 0; h < T.length; h += 1) {
                    const P = Ue(w, T, h);
                    y[h] ? y[h].p(P, A) : (y[h] = Be(P), y[h].c(), y[h].m(k, null))
                }
                for (; h < y.length; h += 1) y[h].d(1);
                y.length = T.length
            }
        },
        i(w) {
            M(_)
        },
        o(w) {
            $(_)
        },
        d(w) {
            w && d(t), _ && _.d(), Ce(x, w), Ce(y, w), m = !1, v()
        }
    }
}

function ni(n, t, i) {
    let e;
    ue(n, de, v => i(8, e = v));
    let {
        menuOpen: o
    } = t, s = !1, r;

    function a() {
        const v = new le.SplitText(".gasp-menu", {
                type: "lines"
            }),
            _ = fe.timeline({
                onComplete: () => {
                    _.kill()
                },
                onStart: () => {}
            });
        _.from("#menuList", {
            opacity: 1,
            x: "-102%",
            duration: 1,
            delay: .3,
            ease: "power3.out"
        }).from(".gasp-menu-hamburger", {
            opacity: 0,
            x: -20,
            duration: 1
        }).from(v.lines, {
            duration: 1.5,
            yPercent: 102,
            ease: "power4",
            stagger: .1
        }, "-=1.5")
    }

    function l(v = !0) {
        const _ = new le.SplitText(".gasp-menu", {
            type: "lines"
        });
        fe.timeline({
            onComplete: () => {
                i(5, o = !1)
            },
            onStart: () => {
                i(0, s = !1), e.url.pathname === r || v === !1 || (me.set(!0), setTimeout(() => {
                    v && tt(r, {
                        invalidateAll: !0
                    })
                }, 700))
            }
        }).to(_.lines, {
            duration: 1,
            yPercent: 102,
            ease: "power4",
            stagger: .1
        }).to("#menuList", {
            opacity: 1,
            x: "-102%",
            duration: 1,
            ease: "power3.in"
        }, "-=1.5")
    }
    _e(() => {
        be.stop(), i(0, s = !0), a()
    }), ft(() => {
        be.start()
    });
    const u = [{
            title: "Home",
            link: "/"
        }, {
            title: "Works",
            link: "/works"
        }, {
            title: "About",
            link: "/about-me"
        }, {
            title: "Contact",
            link: "/contact"
        }],
        b = [{
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/nik-klemenc-7825a9107"
        }, {
            title: "Instagram",
            link: "https://www.instagram.com/nikklemenc"
        }, {
            title: "Facebook",
            link: "https://www.facebook.com/nik.klemenc"
        }],
        k = () => {
            l(!1)
        },
        m = v => {
            l(), i(1, r = v.link)
        };
    return n.$$set = v => {
        "menuOpen" in v && i(5, o = v.menuOpen)
    }, [s, r, l, u, b, o, k, m]
}
class oi extends re {
    constructor(t) {
        super(), ae(this, t, ni, ii, J, {
            menuOpen: 5
        })
    }
}
const {
    window: ct
} = _t;

function Fe(n) {
    let t, i, e, o;
    const s = [ri, si],
        r = [];

    function a(l, u) {
        return l[1] > 1024 ? 0 : 1
    }
    return t = a(n), i = r[t] = s[t](n), {
        c() {
            i.c(), e = K()
        },
        l(l) {
            i.l(l), e = K()
        },
        m(l, u) {
            r[t].m(l, u), V(l, e, u), o = !0
        },
        p(l, u) {
            let b = t;
            t = a(l), t === b ? r[t].p(l, u) : (B(), $(r[b], 1, 1, () => {
                r[b] = null
            }), F(), i = r[t], i ? i.p(l, u) : (i = r[t] = s[t](l), i.c()), M(i, 1), i.m(e.parentNode, e))
        },
        i(l) {
            o || (M(i), o = !0)
        },
        o(l) {
            $(i), o = !1
        },
        d(l) {
            l && d(e), r[t].d(l)
        }
    }
}

function si(n) {
    let t, i, e, o = '<div class="text-xl text-left"><div class="serif-primary italic gsap-navbar text-nowrap text-revival text-sm"><span>Online Portfolio</span></div> <div class="serif-secondary gsap-navbar text-nowrap text-revival text-sm"><span>Nik Klemenc</span></div></div>',
        s, r, a, l, u, b, k, m, v, _, I;

    function x(y) {
        n[8](y)
    }
    let T = {};
    return n[0] !== void 0 && (T.menuOpen = n[0]), a = new lt({
        props: T
    }), Ae.push(() => Oe(a, "menuOpen", x)), {
        c() {
            t = p("nav"), i = p("div"), e = p("button"), e.innerHTML = o, s = N(), r = p("div"), ee(a.$$.fragment), u = N(), b = p("div"), k = N(), m = p("div"), this.h()
        },
        l(y) {
            t = g(y, "NAV", {
                class: !0,
                id: !0
            });
            var w = D(t);
            i = g(w, "DIV", {
                class: !0
            });
            var A = D(i);
            e = g(A, "BUTTON", {
                "data-svelte-h": !0
            }), oe(e) !== "svelte-17eas86" && (e.innerHTML = o), s = C(A), r = g(A, "DIV", {
                class: !0
            });
            var h = D(r);
            te(a.$$.fragment, h), h.forEach(d), A.forEach(d), u = C(w), b = g(w, "DIV", {
                class: !0
            }), D(b).forEach(d), k = C(w), m = g(w, "DIV", {
                class: !0,
                style: !0
            }), D(m).forEach(d), w.forEach(d), this.h()
        },
        h() {
            c(r, "class", "z-50 relative text-revival gsap-navbar"), c(i, "class", "flex flex-row w-full justify-between p-3 items-center"), c(b, "class", "border-b border-b-gray/50 w-full"), c(m, "class", "h-[1px] bg-black -mt-[1px]"), ge(m, "width", n[3] + "%"), c(t, "class", "w-full flex flex-col fixed z-40 bg-light-orange/80 backdrop-blur-sm"), c(t, "id", "menu")
        },
        m(y, w) {
            V(y, t, w), f(t, i), f(i, e), f(i, s), f(i, r), ie(a, r, null), f(t, u), f(t, b), f(t, k), f(t, m), v = !0, _ || (I = W(e, "click", n[4]), _ = !0)
        },
        p(y, w) {
            const A = {};
            !l && w & 1 && (l = !0, A.menuOpen = y[0], Me(() => l = !1)), a.$set(A), (!v || w & 8) && ge(m, "width", y[3] + "%")
        },
        i(y) {
            v || (M(a.$$.fragment, y), v = !0)
        },
        o(y) {
            $(a.$$.fragment, y), v = !1
        },
        d(y) {
            y && d(t), ne(a), _ = !1, I()
        }
    }
}

function ri(n) {
    let t, i, e, o, s, r, a, l = '<div class="text-xl text-center text-vertical"><div class="serif-primary italic gsap-navbar text-nowrap text-revival group-hover:tracking-[0.04rem] transition-700"><span>Online Portfolio</span></div> <div class="serif-secondary gsap-navbar text-nowrap text-revival"><span>Nik Klemenc</span></div></div>',
        u, b, k = "<div>© 2024</div>",
        m, v, _, I, x, T, y;

    function w(h) {
        n[7](h)
    }
    let A = {};
    return n[0] !== void 0 && (A.menuOpen = n[0]), o = new lt({
        props: A
    }), Ae.push(() => Oe(o, "menuOpen", w)), {
        c() {
            t = p("nav"), i = p("div"), e = p("div"), ee(o.$$.fragment), r = N(), a = p("button"), a.innerHTML = l, u = N(), b = p("div"), b.innerHTML = k, m = N(), v = p("div"), _ = N(), I = p("div"), this.h()
        },
        l(h) {
            t = g(h, "NAV", {
                class: !0,
                id: !0
            });
            var P = D(t);
            i = g(P, "DIV", {
                class: !0
            });
            var L = D(i);
            e = g(L, "DIV", {
                class: !0,
                "data-cursor-stick": !0
            });
            var j = D(e);
            te(o.$$.fragment, j), j.forEach(d), r = C(L), a = g(L, "BUTTON", {
                "data-cursor-stick": !0,
                class: !0,
                "data-svelte-h": !0
            }), oe(a) !== "svelte-1knnt63" && (a.innerHTML = l), u = C(L), b = g(L, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), oe(b) !== "svelte-ttny6d" && (b.innerHTML = k), L.forEach(d), m = C(P), v = g(P, "DIV", {
                class: !0
            }), D(v).forEach(d), _ = C(P), I = g(P, "DIV", {
                class: !0,
                style: !0
            }), D(I).forEach(d), P.forEach(d), this.h()
        },
        h() {
            c(e, "class", "z-10 relative text-revival gsap-navbar"), c(e, "data-cursor-stick", ""), c(a, "data-cursor-stick", ""), c(a, "class", "cursor-pointer transition-500 text-xl text-center text-vertical inline-flex rotate-180 group"), c(b, "class", "text-vertical text-revival gsap-navbar serif-secondary rotate-180 cursor-default"), c(i, "class", "flex flex-col h-full justify-between p-6 items-center"), c(v, "class", "border-r border-r-gray/50"), c(I, "class", "w-[1px] bg-black -ml-[1px]"), ge(I, "height", n[3] + "%"), c(t, "class", "h-dvh flex fixed z-10 bg-light-orange"), c(t, "id", "menu")
        },
        m(h, P) {
            V(h, t, P), f(t, i), f(i, e), ie(o, e, null), f(i, r), f(i, a), f(i, u), f(i, b), f(t, m), f(t, v), f(t, _), f(t, I), x = !0, T || (y = W(a, "click", n[4]), T = !0)
        },
        p(h, P) {
            const L = {};
            !s && P & 1 && (s = !0, L.menuOpen = h[0], Me(() => s = !1)), o.$set(L), (!x || P & 8) && ge(I, "height", h[3] + "%")
        },
        i(h) {
            x || (M(o.$$.fragment, h), x = !0)
        },
        o(h) {
            $(o.$$.fragment, h), x = !1
        },
        d(h) {
            h && d(t), ne(o), T = !1, y()
        }
    }
}

function Ke(n) {
    let t, i, e;

    function o(r) {
        n[9](r)
    }
    let s = {};
    return n[0] !== void 0 && (s.menuOpen = n[0]), t = new oi({
        props: s
    }), Ae.push(() => Oe(t, "menuOpen", o)), {
        c() {
            ee(t.$$.fragment)
        },
        l(r) {
            te(t.$$.fragment, r)
        },
        m(r, a) {
            ie(t, r, a), e = !0
        },
        p(r, a) {
            const l = {};
            !i && a & 1 && (i = !0, l.menuOpen = r[0], Me(() => i = !1)), t.$set(l)
        },
        i(r) {
            e || (M(t.$$.fragment, r), e = !0)
        },
        o(r) {
            $(t.$$.fragment, r), e = !1
        },
        d(r) {
            ne(t, r)
        }
    }
}

function ai(n) {
    let t, i, e, o, s;
    ke(n[6]);
    let r = n[1] !== void 0 && n[2] && Fe(n),
        a = n[0] && Ke(n);
    return {
        c() {
            r && r.c(), t = N(), a && a.c(), i = K()
        },
        l(l) {
            r && r.l(l), t = C(l), a && a.l(l), i = K()
        },
        m(l, u) {
            r && r.m(l, u), V(l, t, u), a && a.m(l, u), V(l, i, u), e = !0, o || (s = W(ct, "resize", n[6]), o = !0)
        },
        p(l, [u]) {
            l[1] !== void 0 && l[2] ? r ? (r.p(l, u), u & 6 && M(r, 1)) : (r = Fe(l), r.c(), M(r, 1), r.m(t.parentNode, t)) : r && (B(), $(r, 1, 1, () => {
                r = null
            }), F()), l[0] ? a ? (a.p(l, u), u & 1 && M(a, 1)) : (a = Ke(l), a.c(), M(a, 1), a.m(i.parentNode, i)) : a && (B(), $(a, 1, 1, () => {
                a = null
            }), F())
        },
        i(l) {
            e || (M(r), M(a), e = !0)
        },
        o(l) {
            $(r), $(a), e = !1
        },
        d(l) {
            l && (d(t), d(i)), r && r.d(l), a && a.d(l), o = !1, s()
        }
    }
}

function li(n, t, i) {
    let e;
    ue(n, de, T => i(5, e = T));
    const o = fe.timeline();
    let s = !1,
        r, a = !1,
        l = 0;

    function u() {
        let T = document.body.scrollTop || document.documentElement.scrollTop,
            y = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        i(3, l = T / y * 100)
    }

    function b() {
        o.from("#menu", {
            opacity: 1,
            x: "-100",
            duration: 1
        });
        const T = new le.SplitText(".gsap-navbar", {
            type: "lines"
        });
        o.from(T.lines, {
            duration: 1.5,
            xPercent: -100,
            ease: "power4",
            stagger: .5
        })
    }

    function k() {
        o.from("#menu", {
            opacity: 1,
            y: "-100",
            duration: 1
        });
        const T = new le.SplitText(".gsap-navbar", {
            type: "lines"
        });
        o.from(T.lines, {
            duration: 1.5,
            xPercent: -100,
            ease: "power4",
            stagger: .5
        })
    }

    function m() {
        e.url.pathname !== "/" && (yt.set(!0), me.set(!0), window.scrollTo({
            top: 0,
            behavior: "smooth"
        }), tt("/", {
            invalidateAll: !0
        }))
    }
    _e(async () => {
        fe.registerPlugin(le.SplitText, kt.GSDevTools), await setTimeout(() => {
            r > 1024 ? b() : k()
        }, 1), i(2, a = !0), window.addEventListener("scroll", u)
    });

    function v() {
        i(1, r = ct.innerWidth)
    }

    function _(T) {
        s = T, i(0, s)
    }

    function I(T) {
        s = T, i(0, s)
    }

    function x(T) {
        s = T, i(0, s)
    }
    return n.$$.update = () => {
        n.$$.dirty & 32 && e.url.href && i(3, l = 0)
    }, [s, r, a, l, m, e, v, _, I, x]
}
class ci extends re {
    constructor(t) {
        super(), ae(this, t, li, ai, J, {})
    }
}

function ui(n, t, i) {
    let e;
    ue(n, St, s => i(0, e = s));
    async function o() {
        be.stop(), await new Promise(s => {
            me.set(!0), e === !1 ? setTimeout(() => {
                s()
            }, 700) : s()
        })
    }
    return xt(async s => {
        await o()
    }), Tt(async () => {}), []
}
class di extends re {
    constructor(t) {
        super(), ae(this, t, ui, null, J, {})
    }
}

function We(n) {
    let t, i, e = `This website uses cookies to ensure you get the best experience on
            my website.`,
        o, s, r, a = "OK",
        l, u, b, k;
    return {
        c() {
            t = p("div"), i = p("div"), i.textContent = e, o = N(), s = p("div"), r = p("button"), r.textContent = a, this.h()
        },
        l(m) {
            t = g(m, "DIV", {
                class: !0
            });
            var v = D(t);
            i = g(v, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), oe(i) !== "svelte-qwaif0" && (i.textContent = e), o = C(v), s = g(v, "DIV", {});
            var _ = D(s);
            r = g(_, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), oe(r) !== "svelte-asw01z" && (r.textContent = a), _.forEach(d), v.forEach(d), this.h()
        },
        h() {
            c(i, "class", "serif-secondary font-light text-sm max-w-72"), c(r, "class", "btn-solid-black-small"), c(t, "class", "fixed bottom-3 right-3 bg-light-orange p-4 rounded-2xl z-20 flex items-center gap-4 border border-gray ml-3")
        },
        m(m, v) {
            V(m, t, v), f(t, i), f(t, o), f(t, s), f(s, r), u = !0, b || (k = W(r, "click", n[2]), b = !0)
        },
        p: ce,
        i(m) {
            u || (m && ke(() => {
                u && (l || (l = se(t, He, {
                    duration: 1e3,
                    y: 100
                }, !0)), l.run(1))
            }), u = !0)
        },
        o(m) {
            m && (l || (l = se(t, He, {
                duration: 1e3,
                y: 100
            }, !1)), l.run(0)), u = !1
        },
        d(m) {
            m && d(t), m && l && l.end(), b = !1, k()
        }
    }
}

function fi(n) {
    let t, i = n[0] && n[1] && We(n);
    return {
        c() {
            i && i.c(), t = K()
        },
        l(e) {
            i && i.l(e), t = K()
        },
        m(e, o) {
            i && i.m(e, o), V(e, t, o)
        },
        p(e, [o]) {
            e[0] && e[1] ? i ? (i.p(e, o), o & 3 && M(i, 1)) : (i = We(e), i.c(), M(i, 1), i.m(t.parentNode, t)) : i && (B(), $(i, 1, 1, () => {
                i = null
            }), F())
        },
        i(e) {
            M(i)
        },
        o(e) {
            $(i)
        },
        d(e) {
            e && d(t), i && i.d(e)
        }
    }
}

function mi(n, t, i) {
    let e = "";
    if (i) {
        const o = new Date;
        o.setTime(o.getTime() + i * 24 * 60 * 60 * 1e3), e = "; expires=" + o.toUTCString()
    }
    document.cookie = n + "=" + (t || "") + e + "; path=/"
}

function hi(n) {
    const t = n + "=",
        i = document.cookie.split(";");
    for (let e = 0; e < i.length; e++) {
        let o = i[e];
        for (; o.charAt(0) === " ";) o = o.substring(1, o.length);
        if (o.indexOf(t) === 0) return !0
    }
    return !1
}

function vi(n, t, i) {
    let e = !0,
        o = !1;
    _e(() => {
        i(1, o = !0), hi("userAcceptedCoockie") && i(0, e = !1)
    });

    function s() {
        mi("userAcceptedCoockie", "true", 7), i(0, e = !1)
    }
    return [e, o, s]
}
class pi extends re {
    constructor(t) {
        super(), ae(this, t, vi, fi, J, {})
    }
}
/*!
 * Cuberto Mouse Follower
 * https://cuberto.com/
 *
 * @version 1.1.2
 * @author Cuberto, Artem Dordzhiev (Draft)
 */
var Xe = function() {
    n.registerGSAP = function(e) {
        n.gsap = e
    };

    function n(i) {
        i === void 0 && (i = {}), this.options = Object.assign({}, {
            el: null,
            container: document.body,
            className: "mf-cursor",
            innerClassName: "mf-cursor-inner",
            textClassName: "mf-cursor-text",
            mediaClassName: "mf-cursor-media",
            mediaBoxClassName: "mf-cursor-media-box",
            iconSvgClassName: "mf-svgsprite",
            iconSvgNamePrefix: "-",
            iconSvgSrc: "",
            dataAttr: "cursor",
            hiddenState: "-hidden",
            textState: "-text",
            iconState: "-icon",
            activeState: "-active",
            mediaState: "-media",
            stateDetection: {
                "-pointer": "a,button"
            },
            visible: !0,
            visibleOnState: !1,
            speed: .55,
            ease: "expo.out",
            overwrite: !0,
            skewing: 0,
            skewingText: 2,
            skewingIcon: 2,
            skewingMedia: 2,
            skewingDelta: .001,
            skewingDeltaMax: .15,
            stickDelta: .15,
            showTimeout: 0,
            hideOnLeave: !0,
            hideTimeout: 300,
            hideMediaTimeout: 300,
            initialPos: [-window.innerWidth, -window.innerHeight]
        }, i), this.options.visible && i.stateDetection == null && (this.options.stateDetection["-hidden"] = "iframe"), this.gsap = n.gsap || window.gsap, this.el = typeof this.options.el == "string" ? document.querySelector(this.options.el) : this.options.el, this.container = typeof this.options.container == "string" ? document.querySelector(this.options.container) : this.options.container, this.skewing = this.options.skewing, this.pos = {
            x: this.options.initialPos[0],
            y: this.options.initialPos[1]
        }, this.vel = {
            x: 0,
            y: 0
        }, this.event = {}, this.events = [], this.init()
    }
    var t = n.prototype;
    return t.init = function() {
        this.el || this.create(), this.createSetter(), this.bind(), this.render(!0), this.ticker = this.render.bind(this, !1), this.gsap.ticker.add(this.ticker)
    }, t.create = function() {
        this.el = document.createElement("div"), this.el.className = this.options.className, this.el.classList.add(this.options.hiddenState), this.inner = document.createElement("div"), this.inner.className = this.options.innerClassName, this.text = document.createElement("div"), this.text.className = this.options.textClassName, this.media = document.createElement("div"), this.media.className = this.options.mediaClassName, this.mediaBox = document.createElement("div"), this.mediaBox.className = this.options.mediaBoxClassName, this.media.appendChild(this.mediaBox), this.inner.appendChild(this.media), this.inner.appendChild(this.text), this.el.appendChild(this.inner), this.container.appendChild(this.el)
    }, t.createSetter = function() {
        this.setter = {
            x: this.gsap.quickSetter(this.el, "x", "px"),
            y: this.gsap.quickSetter(this.el, "y", "px"),
            rotation: this.gsap.quickSetter(this.el, "rotation", "deg"),
            scaleX: this.gsap.quickSetter(this.el, "scaleX"),
            scaleY: this.gsap.quickSetter(this.el, "scaleY"),
            wc: this.gsap.quickSetter(this.el, "willChange"),
            inner: {
                rotation: this.gsap.quickSetter(this.inner, "rotation", "deg")
            }
        }
    }, t.bind = function() {
        var e = this;
        this.event.mouseleave = function() {
            return e.hide()
        }, this.event.mouseenter = function() {
            return e.show()
        }, this.event.mousedown = function() {
            return e.addState(e.options.activeState)
        }, this.event.mouseup = function() {
            return e.removeState(e.options.activeState)
        }, this.event.mousemoveOnce = function() {
            return e.show()
        }, this.event.mousemove = function(o) {
            e.gsap.to(e.pos, {
                x: e.stick ? e.stick.x - (e.stick.x - o.clientX) * e.options.stickDelta : o.clientX,
                y: e.stick ? e.stick.y - (e.stick.y - o.clientY) * e.options.stickDelta : o.clientY,
                overwrite: e.options.overwrite,
                ease: e.options.ease,
                duration: e.visible ? e.options.speed : 0,
                onUpdate: function() {
                    return e.vel = {
                        x: o.clientX - e.pos.x,
                        y: o.clientY - e.pos.y
                    }
                }
            })
        }, this.event.mouseover = function(o) {
            for (var s = o.target; s && s !== e.container && !(o.relatedTarget && s.contains(o.relatedTarget)); s = s.parentNode) {
                for (var r in e.options.stateDetection) s.matches(e.options.stateDetection[r]) && e.addState(r);
                if (e.options.dataAttr) {
                    var a = e.getFromDataset(s);
                    a.state && e.addState(a.state), a.text && e.setText(a.text), a.icon && e.setIcon(a.icon), a.img && e.setImg(a.img), a.video && e.setVideo(a.video), typeof a.show < "u" && e.show(), typeof a.stick < "u" && e.setStick(a.stick || s)
                }
            }
        }, this.event.mouseout = function(o) {
            for (var s = o.target; s && s !== e.container && !(o.relatedTarget && s.contains(o.relatedTarget)); s = s.parentNode) {
                for (var r in e.options.stateDetection) s.matches(e.options.stateDetection[r]) && e.removeState(r);
                if (e.options.dataAttr) {
                    var a = e.getFromDataset(s);
                    a.state && e.removeState(a.state), a.text && e.removeText(), a.icon && e.removeIcon(), a.img && e.removeImg(), a.video && e.removeVideo(), typeof a.show < "u" && e.hide(), typeof a.stick < "u" && e.removeStick()
                }
            }
        }, this.options.hideOnLeave && this.container.addEventListener("mouseleave", this.event.mouseleave, {
            passive: !0
        }), this.options.visible && this.container.addEventListener("mouseenter", this.event.mouseenter, {
            passive: !0
        }), this.options.activeState && (this.container.addEventListener("mousedown", this.event.mousedown, {
            passive: !0
        }), this.container.addEventListener("mouseup", this.event.mouseup, {
            passive: !0
        })), this.container.addEventListener("mousemove", this.event.mousemove, {
            passive: !0
        }), this.options.visible && this.container.addEventListener("mousemove", this.event.mousemoveOnce, {
            passive: !0,
            once: !0
        }), (this.options.stateDetection || this.options.dataAttr) && (this.container.addEventListener("mouseover", this.event.mouseover, {
            passive: !0
        }), this.container.addEventListener("mouseout", this.event.mouseout, {
            passive: !0
        }))
    }, t.render = function(e) {
        if (e !== !0 && (this.vel.y === 0 || this.vel.x === 0)) {
            this.setter.wc("auto");
            return
        }
        if (this.trigger("render"), this.setter.wc("transform"), this.setter.x(this.pos.x), this.setter.y(this.pos.y), this.skewing) {
            var o = Math.sqrt(Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2)),
                s = Math.min(o * this.options.skewingDelta, this.options.skewingDeltaMax) * this.skewing,
                r = Math.atan2(this.vel.y, this.vel.x) * 180 / Math.PI;
            this.setter.rotation(r), this.setter.scaleX(1 + s), this.setter.scaleY(1 - s), this.setter.inner.rotation(-r)
        }
    }, t.show = function() {
        var e = this;
        this.trigger("show"), clearInterval(this.visibleInt), this.visibleInt = setTimeout(function() {
            e.el.classList.remove(e.options.hiddenState), e.visible = !0, e.render(!0)
        }, this.options.showTimeout)
    }, t.hide = function() {
        var e = this;
        this.trigger("hide"), clearInterval(this.visibleInt), this.el.classList.add(this.options.hiddenState), this.visibleInt = setTimeout(function() {
            return e.visible = !1
        }, this.options.hideTimeout)
    }, t.toggle = function(e) {
        e === !0 || e !== !1 && !this.visible ? this.show() : this.hide()
    }, t.addState = function(e) {
        var o;
        if (this.trigger("addState", e), e === this.options.hiddenState) return this.hide();
        (o = this.el.classList).add.apply(o, e.split(" ")), this.options.visibleOnState && this.show()
    }, t.removeState = function(e) {
        var o;
        if (this.trigger("removeState", e), e === this.options.hiddenState) return this.show();
        (o = this.el.classList).remove.apply(o, e.split(" ")), this.options.visibleOnState && this.el.className === this.options.className && this.hide()
    }, t.toggleState = function(e, o) {
        o === !0 || o !== !1 && !this.el.classList.contains(e) ? this.addState(e) : this.removeState(e)
    }, t.setSkewing = function(e) {
        this.gsap.to(this, {
            skewing: e
        })
    }, t.removeSkewing = function() {
        this.gsap.to(this, {
            skewing: this.options.skewing
        })
    }, t.setStick = function(e) {
        var o = typeof e == "string" ? document.querySelector(e) : e,
            s = o.getBoundingClientRect();
        this.stick = {
            y: s.top + s.height / 2,
            x: s.left + s.width / 2
        }
    }, t.removeStick = function() {
        this.stick = !1
    }, t.setText = function(e) {
        this.text.innerHTML = e, this.addState(this.options.textState), this.setSkewing(this.options.skewingText)
    }, t.removeText = function() {
        this.removeState(this.options.textState), this.removeSkewing()
    }, t.setIcon = function(e, o) {
        o === void 0 && (o = ""), this.text.innerHTML = "<svg class='" + this.options.iconSvgClassName + " " + this.options.iconSvgNamePrefix + e + "'" + (" style='" + o + "'><use xlink:href='" + this.options.iconSvgSrc + "#" + e + "'></use></svg>"), this.addState(this.options.iconState), this.setSkewing(this.options.skewingIcon)
    }, t.removeIcon = function() {
        this.removeState(this.options.iconState), this.removeSkewing()
    }, t.setMedia = function(e) {
        var o = this;
        clearTimeout(this.mediaInt), e && (this.mediaBox.innerHTML = "", this.mediaBox.appendChild(e)), this.mediaInt = setTimeout(function() {
            return o.addState(o.options.mediaState)
        }, 20), this.setSkewing(this.options.skewingMedia)
    }, t.removeMedia = function() {
        var e = this;
        clearTimeout(this.mediaInt), this.removeState(this.options.mediaState), this.mediaInt = setTimeout(function() {
            return e.mediaBox.innerHTML = ""
        }, this.options.hideMediaTimeout), this.removeSkewing()
    }, t.setImg = function(e) {
        this.mediaImg || (this.mediaImg = new Image), this.mediaImg.src !== e && (this.mediaImg.src = e), this.setMedia(this.mediaImg)
    }, t.removeImg = function() {
        this.removeMedia()
    }, t.setVideo = function(e) {
        this.mediaVideo || (this.mediaVideo = document.createElement("video"), this.mediaVideo.muted = !0, this.mediaVideo.loop = !0, this.mediaVideo.autoplay = !0), this.mediaVideo.src !== e && (this.mediaVideo.src = e, this.mediaVideo.load()), this.mediaVideo.play(), this.setMedia(this.mediaVideo)
    }, t.removeVideo = function() {
        this.mediaVideo && this.mediaVideo.readyState > 2 && this.mediaVideo.pause(), this.removeMedia()
    }, t.on = function(e, o) {
        this.events[e] instanceof Array || this.off(e), this.events[e].push(o)
    }, t.off = function(e, o) {
        o ? this.events[e] = this.events[e].filter(function(s) {
            return s !== o
        }) : this.events[e] = []
    }, t.trigger = function(e) {
        var o = arguments,
            s = this;
        this.events[e] && this.events[e].forEach(function(r) {
            return r.call.apply(r, [s, s].concat([].slice.call(o, 1)))
        })
    }, t.getFromDataset = function(e) {
        var o = e.dataset;
        return {
            state: o[this.options.dataAttr],
            show: o[this.options.dataAttr + "Show"],
            text: o[this.options.dataAttr + "Text"],
            icon: o[this.options.dataAttr + "Icon"],
            img: o[this.options.dataAttr + "Img"],
            video: o[this.options.dataAttr + "Video"],
            stick: o[this.options.dataAttr + "Stick"]
        }
    }, t.destroy = function() {
        this.trigger("destroy"), this.gsap.ticker.remove(this.ticker), this.container.removeEventListener("mouseleave", this.event.mouseleave), this.container.removeEventListener("mouseenter", this.event.mouseenter), this.container.removeEventListener("mousedown", this.event.mousedown), this.container.removeEventListener("mouseup", this.event.mouseup), this.container.removeEventListener("mousemove", this.event.mousemove), this.container.removeEventListener("mousemove", this.event.mousemoveOnce), this.container.removeEventListener("mouseover", this.event.mouseover), this.container.removeEventListener("mouseout", this.event.mouseout), this.el && (this.container.removeChild(this.el), this.el = null, this.mediaImg = null, this.mediaVideo = null)
    }, n
}();

function Ge(n) {
    let t;
    return {
        c() {
            t = p("div"), this.h()
        },
        l(i) {
            t = g(i, "DIV", {
                class: !0
            }), D(t).forEach(d), this.h()
        },
        h() {
            c(t, "class", "bg-image")
        },
        m(i, e) {
            V(i, t, e)
        },
        d(i) {
            i && d(t)
        }
    }
}

function Qe(n) {
    let t, i, e;
    return {
        c() {
            t = p("div"), this.h()
        },
        l(o) {
            t = g(o, "DIV", {
                class: !0
            }), D(t).forEach(d), this.h()
        },
        h() {
            c(t, "class", "absolute left-0 top-0 bottom-0 right-0 bg-light-orange z-50")
        },
        m(o, s) {
            V(o, t, s), e = !0
        },
        i(o) {
            e || (o && ke(() => {
                e && (i || (i = se(t, ve, {
                    duration: 600
                }, !0)), i.run(1))
            }), e = !0)
        },
        o(o) {
            o && (i || (i = se(t, ve, {
                duration: 600
            }, !1)), i.run(0)), e = !1
        },
        d(o) {
            o && d(t), o && i && i.end()
        }
    }
}

function Ye(n) {
    let t, i, e;
    const o = n[7].default,
        s = ht(o, n, n[6], null);
    return {
        c() {
            t = p("div"), s && s.c()
        },
        l(r) {
            t = g(r, "DIV", {});
            var a = D(t);
            s && s.l(a), a.forEach(d)
        },
        m(r, a) {
            V(r, t, a), s && s.m(t, null), e = !0
        },
        p(r, a) {
            s && s.p && (!e || a & 64) && vt(s, o, r, r[6], e ? gt(o, r[6], a, null) : pt(r[6]), null)
        },
        i(r) {
            e || (M(s, r), i && i.end(1), e = !0)
        },
        o(r) {
            $(s, r), r && (i = wt(t, ve, {
                duration: 600
            })), e = !1
        },
        d(r) {
            r && d(t), s && s.d(r), r && i && i.end()
        }
    }
}

function Je(n) {
    let t, i, e = !n[3] && Ye(n);
    return {
        c() {
            e && e.c(), t = K()
        },
        l(o) {
            e && e.l(o), t = K()
        },
        m(o, s) {
            e && e.m(o, s), V(o, t, s), i = !0
        },
        p(o, s) {
            o[3] ? e && (B(), $(e, 1, 1, () => {
                e = null
            }), F()) : e ? (e.p(o, s), s & 8 && M(e, 1)) : (e = Ye(o), e.c(), M(e, 1), e.m(t.parentNode, t))
        },
        i(o) {
            i || (M(e), i = !0)
        },
        o(o) {
            $(e), i = !1
        },
        d(o) {
            o && d(t), e && e.d(o)
        }
    }
}

function gi(n) {
    let t, i, e, o, s, r, a, l, u, b, k, m, v, _, I, x, T, y, w, A, h, P, L, j, X, R, G, Se, Q, xe, Le = n[0].url.href,
        q, Te, $e, U = !n[2] && Ge(),
        H = !n[1] && Qe();
    j = new pi({}), G = new di({}), Q = new ci({});
    let z = Je(n);
    return {
        c() {
            t = p("link"), e = p("meta"), o = p("meta"), s = p("meta"), a = p("meta"), u = p("meta"), k = p("meta"), m = p("meta"), v = p("meta"), _ = p("meta"), I = p("meta"), x = p("meta"), T = p("meta"), y = p("meta"), w = p("meta"), A = p("meta"), h = N(), U && U.c(), P = N(), H && H.c(), L = N(), ee(j.$$.fragment), X = N(), R = p("div"), ee(G.$$.fragment), Se = N(), ee(Q.$$.fragment), xe = N(), z.c(), this.h()
        },
        l(S) {
            const E = bt("svelte-1lxa3ov", document.head);
            t = g(E, "LINK", {
                rel: !0,
                hreflang: !0,
                href: !0
            }), e = g(E, "META", {
                name: !0,
                content: !0
            }), o = g(E, "META", {
                name: !0,
                content: !0
            }), s = g(E, "META", {
                property: !0,
                content: !0
            }), a = g(E, "META", {
                name: !0,
                content: !0
            }), u = g(E, "META", {
                property: !0,
                content: !0
            }), k = g(E, "META", {
                property: !0,
                content: !0
            }), m = g(E, "META", {
                property: !0,
                content: !0
            }), v = g(E, "META", {
                property: !0,
                content: !0
            }), _ = g(E, "META", {
                property: !0,
                content: !0
            }), I = g(E, "META", {
                property: !0,
                content: !0
            }), x = g(E, "META", {
                name: !0,
                content: !0
            }), T = g(E, "META", {
                name: !0,
                content: !0
            }), y = g(E, "META", {
                name: !0,
                content: !0
            }), w = g(E, "META", {
                name: !0,
                content: !0
            }), A = g(E, "META", {
                name: !0,
                content: !0
            }), E.forEach(d), h = C(S), U && U.l(S), P = C(S), H && H.l(S), L = C(S), te(j.$$.fragment, S), X = C(S), R = g(S, "DIV", {
                class: !0
            });
            var Z = D(R);
            te(G.$$.fragment, Z), Se = C(Z), te(Q.$$.fragment, Z), xe = C(Z), z.l(Z), Z.forEach(d), this.h()
        },
        h() {
            c(t, "rel", "alternate"), c(t, "hreflang", "en"), c(t, "href", i = n[0].url.origin), c(e, "name", "keywords"), c(e, "content", "Nik Klemenc, Portfolio, UX/UI Design, UX, UI, Design, Front-end, Full stack, Product Design, Web Design, Web Development, Development, Web, Web Developer, Developer, Freelance, Freelancer, Slovenia, Slovenija, Ljubljana, Dizajn, Klemenc, Spletno oblikovanje,Grafični design"), c(o, "name", "author"), c(o, "content", "Nik Klemenc"), c(s, "property", "og:url"), c(s, "content", r = n[0].url.origin), c(a, "name", "twitter:image"), c(a, "content", l = n[0].url.origin + "/img_fb.jpg"), c(u, "property", "og:image"), c(u, "content", b = n[0].url.origin + "/img_fb.jpg"), c(k, "property", "og:site_name"), c(k, "content", "Nik Klemenc // Online portfolio"), c(m, "property", "og:type"), c(m, "content", "website"), c(v, "property", "og:title"), c(v, "content", "Nik Klemenc // Online portfolio"), c(_, "property", "og:description"), c(_, "content", "Nik Klemenc, UX/UI designer and Front-end developer from Slovenia. I have 8 years experiance in UX/UI and 4 years in Front-end development."), c(I, "property", "og:image:alt"), c(I, "content", "Nik Klemenc // Online portfolio"), c(x, "name", "twitter:card"), c(x, "content", "Nik Klemenc // Online portfolio"), c(T, "name", "twitter:title"), c(T, "content", "Nik Klemenc // Online portfolio"), c(y, "name", "twitter:description"), c(y, "content", "Nik Klemenc, UX/UI designer and Front-end developer from Slovenia. I have 8 years experiance in UX/UI and 4 years in Front-end development."), c(w, "name", "twitter:site"), c(w, "content", "Nik Klemenc // Online portfolio"), c(A, "name", "robots"), c(A, "content", "index, Nik Klemenc // Online portfolio"), c(R, "class", "lg:pt-0 relative cursor-default")
        },
        m(S, E) {
            f(document.head, t), f(document.head, e), f(document.head, o), f(document.head, s), f(document.head, a), f(document.head, u), f(document.head, k), f(document.head, m), f(document.head, v), f(document.head, _), f(document.head, I), f(document.head, x), f(document.head, T), f(document.head, y), f(document.head, w), f(document.head, A), V(S, h, E), U && U.m(S, E), V(S, P, E), H && H.m(S, E), V(S, L, E), ie(j, S, E), V(S, X, E), V(S, R, E), ie(G, R, null), f(R, Se), ie(Q, R, null), f(R, xe), z.m(R, null), q = !0, Te || ($e = W(window, "keydown", n[4]), Te = !0)
        },
        p(S, [E]) {
            (!q || E & 1 && i !== (i = S[0].url.origin)) && c(t, "href", i), (!q || E & 1 && r !== (r = S[0].url.origin)) && c(s, "content", r), (!q || E & 1 && l !== (l = S[0].url.origin + "/img_fb.jpg")) && c(a, "content", l), (!q || E & 1 && b !== (b = S[0].url.origin + "/img_fb.jpg")) && c(u, "content", b), S[2] ? U && (U.d(1), U = null) : U || (U = Ge(), U.c(), U.m(P.parentNode, P)), S[1] ? H && (B(), $(H, 1, 1, () => {
                H = null
            }), F()) : H ? E & 2 && M(H, 1) : (H = Qe(), H.c(), M(H, 1), H.m(L.parentNode, L)), E & 1 && J(Le, Le = S[0].url.href) ? (B(), $(z, 1, 1, ce), F(), z = Je(S), z.c(), M(z, 1), z.m(R, null)) : z.p(S, E)
        },
        i(S) {
            q || (M(H), M(j.$$.fragment, S), M(G.$$.fragment, S), M(Q.$$.fragment, S), M(z), q = !0)
        },
        o(S) {
            $(H), $(j.$$.fragment, S), $(G.$$.fragment, S), $(Q.$$.fragment, S), $(z), q = !1
        },
        d(S) {
            S && (d(h), d(P), d(L), d(X), d(R)), d(t), d(e), d(o), d(s), d(a), d(u), d(k), d(m), d(v), d(_), d(I), d(x), d(T), d(y), d(w), d(A), U && U.d(S), H && H.d(S), ne(j, S), ne(G), ne(Q), z.d(S), Te = !1, $e()
        }
    }
}

function bi(n, t, i) {
    let e, o;
    ue(n, de, m => i(0, e = m)), ue(n, me, m => i(3, o = m));
    let {
        $$slots: s = {},
        $$scope: r
    } = t, a = !1, l, u;

    function b() {
        Xe.registerGSAP(fe), i(5, u = new Xe({
            stateDetection: {
                "-pointer": "a,button",
                "-hidden": "iframe"
            },
            speed: 1,
            skewingMedia: 0,
            skewingText: .5
        }))
    }
    _e(() => {
        !De.isMobile && !De.isTablet && !De.isPhone && b(), i(2, l = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), be.stop(), i(1, a = !0)
    });

    function k(m) {
        m.key === "Tab" && e.url.pathname !== "/contact" && m.preventDefault()
    }
    return n.$$set = m => {
        "$$scope" in m && i(6, r = m.$$scope)
    }, n.$$.update = () => {
        n.$$.dirty & 1 && e.url.href && me.set(!1), n.$$.dirty & 33 && e.url.href && u !== void 0 && u.render()
    }, [e, a, l, o, k, u, r, s]
}
class Ii extends re {
    constructor(t) {
        super(), ae(this, t, bi, gi, J, {})
    }
}
export {
    Ii as component, Di as universal
};