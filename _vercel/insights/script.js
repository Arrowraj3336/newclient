"use strict";
(() => {
    function e(e) {
        let t = location.href;
        if (e) {
            let n = new URL(t);
            if (n.pathname !== e) return n.pathname = e, n.search = "", n.href
        }
        return t
    }
    var t, n, a, i, o = (a = () => {}, () => (a && (i = a(a = 0)), i));
    (t = () => {
        o(),
            function() {
                let t = {},
                    n = e => e,
                    a = document.currentScript,
                    i = (null == a ? void 0 : a.dataset.endpoint) || (null != a && a.src.includes("/va/") ? "/va" : "/_vercel/insights"),
                    o = null == a ? void 0 : a.dataset.disableAutoTrack,
                    r = null,
                    l = null,
                    s = !0;
                async function u({
                    type: o,
                    data: s,
                    options: u
                }) {
                    var d, c, p;
                    let f = e(l),
                        h = document.referrer,
                        v = n({
                            type: o,
                            url: f
                        });
                    if (!1 === v || null === v) return;
                    v && (f = v.url);
                    let w = h.includes(location.host),
                        y = {
                            o: f,
                            sv: "0.1.2",
                            sdkn: null != (d = null == a ? void 0 : a.dataset.sdkn) ? d : void 0,
                            sdkv: null != (c = null == a ? void 0 : a.dataset.sdkv) ? c : void 0,
                            ts: Date.now(),
                            ...r && {
                                dp: r
                            },
                            ...null != u && u.withReferrer && !w ? {
                                r: h
                            } : {},
                            ..."event" === o && s && {
                                en: s.name,
                                ed: s.data
                            },
                            f: null == (p = null == t ? void 0 : t.$getFlags) ? void 0 : p.call(t, {
                                type: o,
                                data: s,
                                options: u
                            })
                        };
                    try {
                        await fetch(`${i}/${"pageview"===o?"view":"event"}`, {
                            method: "POST",
                            keepalive: !0,
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(y)
                        })
                    } catch (g) {}
                }
                async function d(e = {}) {
                    return u({
                        type: "pageview",
                        options: {
                            withReferrer: e.withReferrer
                        }
                    })
                }
                async function c(e, t, n) {
                    return u({
                        type: "event",
                        data: {
                            name: e,
                            data: t
                        },
                        options: {
                            withReferrer: !0,
                            flagKeys: null == n ? void 0 : n.flagKeys
                        }
                    })
                }
                async function p() {
                    await fetch(`${i}/session`, {
                        method: "GET",
                        keepalive: !0
                    }).catch(() => {})
                }

                function f(e) {
                    return e.pathname === new URL(v).pathname
                }

                function h(e) {
                    let t = e ? "string" == typeof e ? new URL(e, location.origin) : new URL(e.href) : null;
                    !t || f(t) || Boolean(t.hash) && f(t) || d()
                }
                let v = e(),
                    w = () => {
                        var e;
                        window.va = function(e, a) {
                            "beforeSend" === e ? n = a : "setProps" === e ? Object.assign(t, a) : "event" === e ? a && c(a.name, a.data, a.options) : "pageview" === e && a && (a.route && (r = a.route), a.path && (l = a.path), d({
                                withReferrer: s
                            }), s = !1), "enableCookie" === e && p()
                        }, null == (e = window.vaq) || e.forEach(([e, t]) => {
                            window.va(e, t)
                        })
                    };
                (() => {
                    if (window.vai || (window.vai = !0, w(), o)) return;
                    d({
                        withReferrer: !0
                    });
                    let t = history.pushState.bind(history);
                    history.pushState = function(...n) {
                        t(...n);
                        try {
                            h(n[2]), v = e()
                        } catch (a) {}
                    }, window.addEventListener("popstate", function() {
                        h(e()), v = e()
                    })
                })()
            }()
    }, () => (n || t((n = {
        exports: {}
    }).exports, n), n.exports))()
})();