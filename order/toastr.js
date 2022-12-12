! function(a) {
    a(["jquery"], function(a) {
        return function() {
            function b(a, b, c) { return m({ type: t.error, iconClass: o().iconClasses.error, message: a, optionsOverride: c, title: b }) }

            function c(a, b, c) { return m({ type: t.info, iconClass: o().iconClasses.info, message: a, optionsOverride: c, title: b }) }

            function d(a) { r = a }

            function e(a, b, c) { return m({ type: t.success, iconClass: o().iconClasses.success, message: a, optionsOverride: c, title: b }) }

            function f(a, b, c) { return m({ type: t.warning, iconClass: o().iconClasses.warning, message: a, optionsOverride: c, title: b }) }

            function g(a) {
                var b = o();
                q || n(b), j(a, b) || i(b)
            }

            function h(b) { var c = o(); return q || n(c), b && 0 === a(":focus", b).length ? void p(b) : void(q.children().length && q.remove()) }

            function i(b) { for (var c = q.children(), d = c.length - 1; d >= 0; d--) j(a(c[d]), b) }

            function j(b, c) { return b && 0 === a(":focus", b).length ? (b[c.hideMethod]({ duration: c.hideDuration, easing: c.hideEasing, complete: function() { p(b) } }), !0) : !1 }

            function k() { return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", target: "body", closeHtml: "<button>&times;</button>", newestOnTop: !0 } }

            function l(a) { r && r(a) }

            function m(b) {
                function c(b) { return !a(":focus", i).length || b ? i[f.hideMethod]({ duration: f.hideDuration, easing: f.hideEasing, complete: function() { p(i), f.onHidden && "hidden" !== r.state && f.onHidden(), r.state = "hidden", r.endTime = new Date, l(r) } }) : void 0 }

                function d() {
                    (f.timeOut > 0 || f.extendedTimeOut > 0) && (h = setTimeout(c, f.extendedTimeOut))
                }

                function e() { clearTimeout(h), i.stop(!0, !0)[f.showMethod]({ duration: f.showDuration, easing: f.showEasing }) }
                var f = o(),
                    g = b.iconClass || f.iconClass;
                "undefined" != typeof b.optionsOverride && (f = a.extend(f, b.optionsOverride), g = b.optionsOverride.iconClass || g), s++, q = n(f);
                var h = null,
                    i = a("<div/>"),
                    j = a("<div/>"),
                    k = a("<div/>"),
                    m = a(f.closeHtml),
                    r = { toastId: s, state: "visible", startTime: new Date, options: f, map: b };
                return b.iconClass && i.addClass(f.toastClass).addClass(g), b.title && (j.append(b.title).addClass(f.titleClass), i.append(j)), b.message && (k.append(b.message).addClass(f.messageClass), i.append(k)), f.closeButton && (m.addClass("toast-close-button").attr("role", "button"), i.prepend(m)), i.hide(), f.newestOnTop ? q.prepend(i) : q.append(i), i[f.showMethod]({ duration: f.showDuration, easing: f.showEasing, complete: f.onShown }), f.timeOut > 0 && (h = setTimeout(c, f.timeOut)), i.hover(e, d), !f.onclick && f.tapToDismiss && i.click(c), f.closeButton && m && m.click(function(a) { a.stopPropagation ? a.stopPropagation() : void 0 !== a.cancelBubble && a.cancelBubble !== !0 && (a.cancelBubble = !0), c(!0) }), f.onclick && i.click(function() { f.onclick(), c() }), l(r), f.debug && console && console.log(r), i
            }

            function n(b) { return b || (b = o()), q = a("#" + b.containerId), q.length ? q : (q = a("<div/>").attr("id", b.containerId).addClass(b.positionClass).attr("aria-live", "polite").attr("role", "alert"), q.appendTo(a(b.target)), q) }

            function o() { return a.extend({}, k(), u.options) }

            function p(a) { q || (q = n()), a.is(":visible") || (a.remove(), a = null, 0 === q.children().length && q.remove()) }
            var q, r, s = 0,
                t = { error: "error", info: "info", success: "success", warning: "warning" },
                u = { clear: g, remove: h, error: b, getContainer: n, info: c, options: {}, subscribe: d, success: e, version: "2.0.2", warning: f };
            return u
        }()
    })
}("function" == typeof define && define.amd ? define : function(a, b) { "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : window.toastr = b(window.jQuery) });
//# sourceMappingURL=toastr.min.js.map