var privacyBanner = (function (e) {
  "use strict";
  var n = function (e, t) {
    return (
      (n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, n) {
            e.__proto__ = n;
          }) ||
        function (e, n) {
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }),
      n(e, t)
    );
  };
  function t(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Class extends value " + String(t) + " is not a constructor or null"
      );
    function o() {
      this.constructor = e;
    }
    n(e, t),
      (e.prototype =
        null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
  }
  var o = function () {
    return (
      (o =
        Object.assign ||
        function (e) {
          for (var n, t = 1, o = arguments.length; t < o; t++)
            for (var r in (n = arguments[t]))
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          return e;
        }),
      o.apply(this, arguments)
    );
  };
  function r(e, n) {
    var t = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        n.indexOf(o) < 0 &&
        (t[o] = e[o]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        n.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (t[o[r]] = e[o[r]]);
    }
    return t;
  }
  function a(e, n, t, o) {
    var r,
      a = arguments.length,
      i =
        a < 3
          ? n
          : null === o
          ? (o = Object.getOwnPropertyDescriptor(n, t))
          : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      i = Reflect.decorate(e, n, t, o);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(n, t, i) : r(n, t)) || i);
    return a > 3 && i && Object.defineProperty(n, t, i), i;
  }
  function i(e, n) {
    return function (t, o) {
      n(t, o, e);
    };
  }
  function c(e, n) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
      return Reflect.metadata(e, n);
  }
  function s(e, n, t, o) {
    return new (t || (t = Promise))(function (r, a) {
      function i(e) {
        try {
          s(o.next(e));
        } catch (e) {
          a(e);
        }
      }
      function c(e) {
        try {
          s(o.throw(e));
        } catch (e) {
          a(e);
        }
      }
      function s(e) {
        var n;
        e.done
          ? r(e.value)
          : ((n = e.value),
            n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                })).then(i, c);
      }
      s((o = o.apply(e, n || [])).next());
    });
  }
  function l(e, n) {
    var t,
      o,
      r,
      a,
      i = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: c(0), throw: c(1), return: c(2) }),
      "function" == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function c(c) {
      return function (s) {
        return (function (c) {
          if (t) throw new TypeError("Generator is already executing.");
          for (; a && ((a = 0), c[0] && (i = 0)), i; )
            try {
              if (
                ((t = 1),
                o &&
                  (r =
                    2 & c[0]
                      ? o.return
                      : c[0]
                      ? o.throw || ((r = o.return) && r.call(o), 0)
                      : o.next) &&
                  !(r = r.call(o, c[1])).done)
              )
                return r;
              switch (((o = 0), r && (c = [2 & c[0], r.value]), c[0])) {
                case 0:
                case 1:
                  r = c;
                  break;
                case 4:
                  return i.label++, { value: c[1], done: !1 };
                case 5:
                  i.label++, (o = c[1]), (c = [0]);
                  continue;
                case 7:
                  (c = i.ops.pop()), i.trys.pop();
                  continue;
                default:
                  if (
                    !((r = i.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== c[0] && 2 !== c[0]))
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === c[0] && (!r || (c[1] > r[0] && c[1] < r[3]))) {
                    i.label = c[1];
                    break;
                  }
                  if (6 === c[0] && i.label < r[1]) {
                    (i.label = r[1]), (r = c);
                    break;
                  }
                  if (r && i.label < r[2]) {
                    (i.label = r[2]), i.ops.push(c);
                    break;
                  }
                  r[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              c = n.call(e, i);
            } catch (e) {
              (c = [6, e]), (o = 0);
            } finally {
              t = r = 0;
            }
          if (5 & c[0]) throw c[1];
          return { value: c[0] ? c[1] : void 0, done: !0 };
        })([c, s]);
      };
    }
  }
  var d = Object.create
    ? function (e, n, t, o) {
        void 0 === o && (o = t);
        var r = Object.getOwnPropertyDescriptor(n, t);
        (r && !("get" in r ? !n.__esModule : r.writable || r.configurable)) ||
          (r = {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          }),
          Object.defineProperty(e, o, r);
      }
    : function (e, n, t, o) {
        void 0 === o && (o = t), (e[o] = n[t]);
      };
  function u(e, n) {
    for (var t in e)
      "default" === t ||
        Object.prototype.hasOwnProperty.call(n, t) ||
        d(n, e, t);
  }
  function p(e) {
    var n = "function" == typeof Symbol && Symbol.iterator,
      t = n && e[n],
      o = 0;
    if (t) return t.call(e);
    if (e && "number" == typeof e.length)
      return {
        next: function () {
          return (
            e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e }
          );
        },
      };
    throw new TypeError(
      n ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function f(e, n) {
    var t = "function" == typeof Symbol && e[Symbol.iterator];
    if (!t) return e;
    var o,
      r,
      a = t.call(e),
      i = [];
    try {
      for (; (void 0 === n || n-- > 0) && !(o = a.next()).done; )
        i.push(o.value);
    } catch (e) {
      r = { error: e };
    } finally {
      try {
        o && !o.done && (t = a.return) && t.call(a);
      } finally {
        if (r) throw r.error;
      }
    }
    return i;
  }
  function h() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e = e.concat(f(arguments[n]));
    return e;
  }
  function y() {
    for (var e = 0, n = 0, t = arguments.length; n < t; n++)
      e += arguments[n].length;
    var o = Array(e),
      r = 0;
    for (n = 0; n < t; n++)
      for (var a = arguments[n], i = 0, c = a.length; i < c; i++, r++)
        o[r] = a[i];
    return o;
  }
  function m(e, n, t) {
    if (t || 2 === arguments.length)
      for (var o, r = 0, a = n.length; r < a; r++)
        (!o && r in n) ||
          (o || (o = Array.prototype.slice.call(n, 0, r)), (o[r] = n[r]));
    return e.concat(o || Array.prototype.slice.call(n));
  }
  function g(e) {
    return this instanceof g ? ((this.v = e), this) : new g(e);
  }
  function v(e, n, t) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var o,
      r = t.apply(e, n || []),
      a = [];
    return (
      (o = {}),
      i("next"),
      i("throw"),
      i("return"),
      (o[Symbol.asyncIterator] = function () {
        return this;
      }),
      o
    );
    function i(e) {
      r[e] &&
        (o[e] = function (n) {
          return new Promise(function (t, o) {
            a.push([e, n, t, o]) > 1 || c(e, n);
          });
        });
    }
    function c(e, n) {
      try {
        (t = r[e](n)).value instanceof g
          ? Promise.resolve(t.value.v).then(s, l)
          : d(a[0][2], t);
      } catch (e) {
        d(a[0][3], e);
      }
      var t;
    }
    function s(e) {
      c("next", e);
    }
    function l(e) {
      c("throw", e);
    }
    function d(e, n) {
      e(n), a.shift(), a.length && c(a[0][0], a[0][1]);
    }
  }
  function b(e) {
    var n, t;
    return (
      (n = {}),
      o("next"),
      o("throw", function (e) {
        throw e;
      }),
      o("return"),
      (n[Symbol.iterator] = function () {
        return this;
      }),
      n
    );
    function o(o, r) {
      n[o] = e[o]
        ? function (n) {
            return (t = !t) ? { value: g(e[o](n)), done: !1 } : r ? r(n) : n;
          }
        : r;
    }
  }
  function C(e) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var n,
      t = e[Symbol.asyncIterator];
    return t
      ? t.call(e)
      : ((e = p(e)),
        (n = {}),
        o("next"),
        o("throw"),
        o("return"),
        (n[Symbol.asyncIterator] = function () {
          return this;
        }),
        n);
    function o(t) {
      n[t] =
        e[t] &&
        function (n) {
          return new Promise(function (o, r) {
            (function (e, n, t, o) {
              Promise.resolve(o).then(function (n) {
                e({ value: n, done: t });
              }, n);
            })(o, r, (n = e[t](n)).done, n.value);
          });
        };
    }
  }
  function _(e, n) {
    return (
      Object.defineProperty
        ? Object.defineProperty(e, "raw", { value: n })
        : (e.raw = n),
      e
    );
  }
  var E = Object.create
    ? function (e, n) {
        Object.defineProperty(e, "default", { enumerable: !0, value: n });
      }
    : function (e, n) {
        e.default = n;
      };
  function w(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e)
      for (var t in e)
        "default" !== t &&
          Object.prototype.hasOwnProperty.call(e, t) &&
          d(n, e, t);
    return E(n, e), n;
  }
  function I(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function A(e, n, t, o) {
    if ("a" === t && !o)
      throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof n ? e !== n || !o : !n.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return "m" === t ? o : "a" === t ? o.call(e) : o ? o.value : n.get(e);
  }
  function x(e, n, t, o, r) {
    if ("m" === o) throw new TypeError("Private method is not writable");
    if ("a" === o && !r)
      throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof n ? e !== n || !r : !n.has(e))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it"
      );
    return "a" === o ? r.call(e, t) : r ? (r.value = t) : n.set(e, t), t;
  }
  function D(e, n) {
    if (null === n || ("object" != typeof n && "function" != typeof n))
      throw new TypeError("Cannot use 'in' operator on non-object");
    return "function" == typeof e ? n === e : e.has(n);
  }
  function O(e, n, t) {
    if (null != n) {
      if ("object" != typeof n && "function" != typeof n)
        throw new TypeError("Object expected.");
      var o;
      if (t) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        o = n[Symbol.asyncDispose];
      }
      if (void 0 === o) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        o = n[Symbol.dispose];
      }
      if ("function" != typeof o) throw new TypeError("Object not disposable.");
      e.stack.push({ value: n, dispose: o, async: t });
    } else t && e.stack.push({ async: !0 });
    return n;
  }
  var T =
    "function" == typeof SuppressedError
      ? SuppressedError
      : function (e, n, t) {
          var o = new Error(t);
          return (
            (o.name = "SuppressedError"), (o.error = e), (o.suppressed = n), o
          );
        };
  function k(e) {
    function n(n) {
      (e.error = e.hasError
        ? new T(n, e.error, "An error was suppressed during disposal.")
        : n),
        (e.hasError = !0);
    }
    return (function t() {
      for (; e.stack.length; ) {
        var o = e.stack.pop();
        try {
          var r = o.dispose && o.dispose.call(o.value);
          if (o.async)
            return Promise.resolve(r).then(t, function (e) {
              return n(e), t();
            });
        } catch (e) {
          n(e);
        }
      }
      if (e.hasError) throw e.error;
    })();
  }
  var P = {
      __extends: t,
      __assign: o,
      __rest: r,
      __decorate: a,
      __param: i,
      __metadata: c,
      __awaiter: s,
      __generator: l,
      __createBinding: d,
      __exportStar: u,
      __values: p,
      __read: f,
      __spread: h,
      __spreadArrays: y,
      __spreadArray: m,
      __await: g,
      __asyncGenerator: v,
      __asyncDelegator: b,
      __asyncValues: C,
      __makeTemplateObject: _,
      __importStar: w,
      __importDefault: I,
      __classPrivateFieldGet: A,
      __classPrivateFieldSet: x,
      __classPrivateFieldIn: D,
      __addDisposableResource: O,
      __disposeResources: k,
    },
    R = Object.freeze({
      __proto__: null,
      __addDisposableResource: O,
      get __assign() {
        return o;
      },
      __asyncDelegator: b,
      __asyncGenerator: v,
      __asyncValues: C,
      __await: g,
      __awaiter: s,
      __classPrivateFieldGet: A,
      __classPrivateFieldIn: D,
      __classPrivateFieldSet: x,
      __createBinding: d,
      __decorate: a,
      __disposeResources: k,
      __esDecorate: function (e, n, t, o, r, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e)
            throw new TypeError("Function expected");
          return e;
        }
        for (
          var c,
            s = o.kind,
            l = "getter" === s ? "get" : "setter" === s ? "set" : "value",
            d = !n && e ? (o.static ? e : e.prototype) : null,
            u = n || (d ? Object.getOwnPropertyDescriptor(d, o.name) : {}),
            p = !1,
            f = t.length - 1;
          f >= 0;
          f--
        ) {
          var h = {};
          for (var y in o) h[y] = "access" === y ? {} : o[y];
          for (var y in o.access) h.access[y] = o.access[y];
          h.addInitializer = function (e) {
            if (p)
              throw new TypeError(
                "Cannot add initializers after decoration has completed"
              );
            a.push(i(e || null));
          };
          var m = (0, t[f])(
            "accessor" === s ? { get: u.get, set: u.set } : u[l],
            h
          );
          if ("accessor" === s) {
            if (void 0 === m) continue;
            if (null === m || "object" != typeof m)
              throw new TypeError("Object expected");
            (c = i(m.get)) && (u.get = c),
              (c = i(m.set)) && (u.set = c),
              (c = i(m.init)) && r.unshift(c);
          } else (c = i(m)) && ("field" === s ? r.unshift(c) : (u[l] = c));
        }
        d && Object.defineProperty(d, o.name, u), (p = !0);
      },
      __exportStar: u,
      __extends: t,
      __generator: l,
      __importDefault: I,
      __importStar: w,
      __makeTemplateObject: _,
      __metadata: c,
      __param: i,
      __propKey: function (e) {
        return "symbol" == typeof e ? e : "".concat(e);
      },
      __read: f,
      __rest: r,
      __runInitializers: function (e, n, t) {
        for (var o = arguments.length > 2, r = 0; r < n.length; r++)
          t = o ? n[r].call(e, t) : n[r].call(e);
        return o ? t : void 0;
      },
      __setFunctionName: function (e, n, t) {
        return (
          "symbol" == typeof n &&
            (n = n.description ? "[".concat(n.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: t ? "".concat(t, " ", n) : n,
          })
        );
      },
      __spread: h,
      __spreadArray: m,
      __spreadArrays: y,
      __values: p,
      default: P,
    });
  const M = {
      TRACKING_ACCEPTED: "trackingConsentAccepted",
      TRACKING_DECLINED: "trackingConsentDeclined",
      MARKETING_ACCEPTED: "firstPartyMarketingConsentAccepted",
      SALE_OF_DATA_ACCEPTED: "thirdPartyMarketingConsentAccepted",
      ANALYTICS_ACCEPTED: "analyticsConsentAccepted",
      PREFERENCES_ACCEPTED: "preferencesConsentAccepted",
      MARKETING_DECLINED: "firstPartyMarketingConsentDeclined",
      SALE_OF_DATA_DECLINED: "thirdPartyMarketingConsentDeclined",
      ANALYTICS_DECLINED: "analyticsConsentDeclined",
      PREFERENCES_DECLINED: "preferencesConsentDeclined",
      CONSENT_COLLECTED: "visitorConsentCollected",
      CONSENT_TRACKING_API_LOADED: "consentTrackingApiLoaded",
    },
    N = "2.1",
    S = {
      ACCEPTED: "yes",
      DECLINED: "no",
      NO_INTERACTION: "no_interaction",
      NO_VALUE: "",
    },
    B = { NO_VALUE: "", ACCEPTED: "1", DECLINED: "0" },
    L = { PREFERENCES: "p", ANALYTICS: "a", MARKETING: "m", SALE_OF_DATA: "t" },
    j = { MARKETING: "m", ANALYTICS: "a", PREFERENCES: "p", SALE_OF_DATA: "s" },
    H = {
      MARKETING: "marketing",
      ANALYTICS: "analytics",
      PREFERENCES: "preferences",
      SALE_OF_DATA: "sale_of_data",
      EMAIL: "email",
    },
    U = {
      HEADLESS_STOREFRONT: "headlessStorefront",
      ROOT_DOMAIN: "rootDomain",
      CHECKOUT_ROOT_DOMAIN: "checkoutRootDomain",
      STOREFRONT_ROOT_DOMAIN: "storefrontRootDomain",
      STOREFRONT_ACCESS_TOKEN: "storefrontAccessToken",
      IS_EXTENSION_TOKEN: "isExtensionToken",
      METAFIELDS: "metafields",
    },
    F = ["v", "con"];
  function G(e, n) {
    if (null === e) return "null";
    if (Array.isArray(e)) {
      return `[${e.map((e) => G(e, !0)).join(",")}]`;
    }
    if ("object" == typeof e) {
      let t = [];
      for (const n in e)
        e.hasOwnProperty(n) && void 0 !== e[n] && t.push(`${n}:${G(e[n], !0)}`);
      const o = t.join(",");
      return n ? `{${o}}` : o;
    }
    return "string" == typeof e ? `"${e}"` : `${e}`;
  }
  function K(e) {
    return (function (e) {
      const n = document.cookie ? document.cookie.split("; ") : [];
      for (let t = 0; t < n.length; t++) {
        const [o, r] = n[t].split("=");
        if (e === decodeURIComponent(o))
          return JSON.parse(decodeURIComponent(r));
      }
    })(e);
  }
  function V(e) {
    return e === encodeURIComponent(decodeURIComponent(e));
  }
  function q(e, n, t, o) {
    if (!V(o))
      throw new TypeError("Cookie value is not correctly URI encoded.");
    if (!V(e)) throw new TypeError("Cookie name is not correctly URI encoded.");
    let r = `${e}=${o}`;
    (r += "; path=/"),
      n && (r += `; domain=${n}`),
      (r += `; expires=${new Date(new Date().getTime() + t).toUTCString()}`),
      (r += "; secure"),
      (document.cookie = r);
  }
  const W = "_tracking_consent",
    z = 31536e6;
  function Y() {
    const e = K(W);
    if (
      void 0 !== e &&
      !(function (e) {
        if (e.v !== N) return !0;
        return !(function (e, n) {
          const t = n.slice().sort();
          return (
            e.length === n.length &&
            e
              .slice()
              .sort()
              .every((e, n) => e === t[n])
          );
        })(
          Object.keys(e).filter(
            (e) => "region" !== e && "lim" !== e && "cus" !== e && "reg" !== e
          ),
          F
        );
      })(e)
    )
      return e;
  }
  function $() {
    try {
      let e = Y();
      if (!e) return;
      return e;
    } catch (e) {
      return;
    }
  }
  function J() {
    return {
      m: ne(j.MARKETING),
      a: ne(j.ANALYTICS),
      p: ne(j.PREFERENCES),
      s: ne(j.SALE_OF_DATA),
    };
  }
  function X() {
    return J()[j.SALE_OF_DATA];
  }
  function Z(e = null) {
    return null === e && (e = $()), void 0 === e;
  }
  function Q(e) {
    switch (e) {
      case B.ACCEPTED:
        return S.ACCEPTED;
      case B.DECLINED:
        return S.DECLINED;
      default:
        return S.NO_VALUE;
    }
  }
  function ee(e) {
    switch (e) {
      case j.ANALYTICS:
        return H.ANALYTICS;
      case j.MARKETING:
        return H.MARKETING;
      case j.PREFERENCES:
        return H.PREFERENCES;
      case j.SALE_OF_DATA:
        return H.SALE_OF_DATA;
    }
  }
  function ne(e) {
    const n = $();
    if (!n) return B.NO_VALUE;
    const t = n.con.CMP;
    return t ? t[e] : B.NO_VALUE;
  }
  function te() {
    const e = $();
    return Z(e) ? "" : e.region || "";
  }
  const oe = "_cmp_a";
  function re() {
    return K(oe);
  }
  function ae(e) {
    const n = re();
    if (!n) return !0;
    const t = n.purposes[e];
    return "boolean" != typeof t || t;
  }
  function ie() {
    return ae(L.PREFERENCES);
  }
  function ce() {
    return ae(L.ANALYTICS);
  }
  function se() {
    return ae(L.MARKETING);
  }
  function le() {
    return ae(L.SALE_OF_DATA);
  }
  function de() {
    const e = re();
    return !!e && "boolean" == typeof e.display_banner && e.display_banner;
  }
  function ue() {
    const e = re();
    return (e && e.sale_of_data_region) || !1;
  }
  function pe(e) {
    void 0 !== e.granular_consent &&
      (function (e) {
        const n = e[L.MARKETING],
          t = e[L.SALE_OF_DATA],
          o = e[L.ANALYTICS],
          r = e[L.PREFERENCES];
        !0 === n
          ? fe(M.MARKETING_ACCEPTED)
          : !1 === n && fe(M.MARKETING_DECLINED);
        !0 === t
          ? fe(M.SALE_OF_DATA_ACCEPTED)
          : !1 === t && fe(M.SALE_OF_DATA_DECLINED);
        !0 === o
          ? fe(M.ANALYTICS_ACCEPTED)
          : !1 === o && fe(M.ANALYTICS_DECLINED);
        !0 === r
          ? fe(M.PREFERENCES_ACCEPTED)
          : !1 === r && fe(M.PREFERENCES_DECLINED);
        const a = (function (e) {
          const n = {
            marketingAllowed: e[L.MARKETING],
            saleOfDataAllowed: e[L.SALE_OF_DATA],
            analyticsAllowed: e[L.ANALYTICS],
            preferencesAllowed: e[L.PREFERENCES],
            firstPartyMarketingAllowed: e[L.MARKETING],
            thirdPartyMarketingAllowed: e[L.SALE_OF_DATA],
          };
          return n;
        })(e);
        fe(M.CONSENT_COLLECTED, a);
        const i = [o, r, n, t];
        i.every((e) => !0 === e) && fe(M.TRACKING_ACCEPTED);
        i.every((e) => !1 === e) && fe(M.TRACKING_DECLINED);
      })({
        [L.PREFERENCES]: ie(),
        [L.ANALYTICS]: ce(),
        [L.MARKETING]: se(),
        [L.SALE_OF_DATA]: le(),
      });
  }
  function fe(e, n) {
    document.dispatchEvent(new CustomEvent(e, { detail: n || {} }));
  }
  const he = "_landing_page",
    ye = "_orig_referrer";
  function me(e) {
    const n = e.granular_consent;
    return {
      query: `query { consentManagement { cookies(${G({
        visitorConsent: Object.assign(
          {
            marketing: n.marketing,
            analytics: n.analytics,
            preferences: n.preferences,
            saleOfData: n.sale_of_data,
          },
          n.metafields && { metafields: n.metafields }
        ),
        origReferrer: e.referrer,
        landingPage: e.landing_page,
      })}) { answersCookie trackingConsentCookie cookieDomain landingPageCookie origReferrerCookie } } }`,
      variables: {},
    };
  }
  function ge(e, n) {
    const t = e.granular_consent,
      o =
        t.storefrontAccessToken ||
        (function () {
          const e = document.documentElement.querySelector("#shopify-features"),
            n = "Could not find liquid access token";
          if (!e) return void console.warn(n);
          const t = JSON.parse(e.textContent || "").accessToken;
          if (!t) return void console.warn(n);
          return t;
        })(),
      r = t.checkoutRootDomain || window.location.host,
      a = {
        headers: {
          "content-type": "application/json",
          [t.isExtensionToken
            ? "Shopify-Storefront-Extension-Token"
            : "x-shopify-storefront-access-token"]: o,
        },
        body: JSON.stringify(me(e)),
        method: "POST",
      };
    return fetch(`https://${r}/api/unstable/graphql.json`, a)
      .then((e) => {
        if (e.ok) return e.json();
        throw new Error("Server error");
      })
      .then((o) => {
        const r = 31536e6,
          a = 12096e5,
          i = o.data.consentManagement.cookies.cookieDomain,
          c = "." + (t.checkoutRootDomain || i || window.location.hostname),
          s = "." + (t.storefrontRootDomain || i || window.location.hostname),
          l = o.data.consentManagement.cookies.trackingConsentCookie,
          d = o.data.consentManagement.cookies.answersCookie,
          u = o.data.consentManagement.cookies.landingPageCookie,
          p = o.data.consentManagement.cookies.origReferrerCookie;
        return (
          q(W, c, r, l),
          q(oe, c, r, d),
          u && p && (q(he, c, a, u), q(ye, c, a, p)),
          s !== c &&
            (q(W, s, r, l),
            q(oe, s, r, d),
            u && p && (q(he, s, a, u), q(ye, s, a, p))),
          pe(e),
          void 0 !== n && n(null, o),
          o
        );
      })
      .catch((e) => {
        const t = "Error while setting storefront API consent: " + e.message;
        if (void 0 === n) throw { error: t };
        n({ error: t });
      });
  }
  function ve(e, n) {
    if (
      ((function (e) {
        if ("boolean" != typeof e && "object" != typeof e)
          throw TypeError(
            "setTrackingConsent must be called with a boolean or object consent value"
          );
        if ("object" == typeof e) {
          const n = Object.keys(e);
          if (0 === n.length)
            throw TypeError("The submitted consent object is empty.");
          const t = [
            H.MARKETING,
            H.ANALYTICS,
            H.PREFERENCES,
            H.SALE_OF_DATA,
            H.EMAIL,
            U.ROOT_DOMAIN,
            U.CHECKOUT_ROOT_DOMAIN,
            U.STOREFRONT_ROOT_DOMAIN,
            U.STOREFRONT_ACCESS_TOKEN,
            U.HEADLESS_STOREFRONT,
            U.IS_EXTENSION_TOKEN,
            U.METAFIELDS,
          ];
          for (const e of n)
            if (!t.includes(e))
              throw TypeError(
                `The submitted consent object should only contain the following keys: ${t.join(
                  ", "
                )}. Extraneous key: ${e}.`
              );
        }
      })(e),
      void 0 !== n && "function" != typeof n)
    )
      throw TypeError(
        "setTrackingConsent must be called with a callback function if the callback argument is provided"
      );
    let t;
    if (!0 === e || !1 === e) {
      console.warn(
        "Binary consent is deprecated. Please update to granular consent (shopify.dev/docs/api/consent-tracking)"
      );
      t = { analytics: e, preferences: e, marketing: e };
    } else t = e;
    const o = (function (e) {
        if (!e) return null;
        return Ie() ? document.referrer : "";
      })(t.analytics),
      r = (function (e) {
        if (!e) return null;
        return Ie() ? window.location.pathname + window.location.search : "/";
      })(t.analytics);
    return ge(
      Object.assign(
        Object.assign({ granular_consent: t }, null !== o && { referrer: o }),
        null !== r && { landing_page: r }
      ),
      n
    );
  }
  function be(e, n) {
    if (
      (console.warn(
        "This method is deprecated. Please read shopify.dev/docs/api/customer-privacy for the latest information."
      ),
      "boolean" != typeof e)
    )
      throw TypeError(
        "setCCPAConsent must be called with a boolean consent value"
      );
    if ("function" != typeof n)
      throw TypeError("setCCPAConsent must be called with a callback function");
    return ge({ granular_consent: { sale_of_data: e } }, n);
  }
  function Ce() {
    if (Z()) return S.NO_VALUE;
    const e = J();
    return e[j.MARKETING] === B.ACCEPTED && e[j.ANALYTICS] === B.ACCEPTED
      ? S.ACCEPTED
      : e[j.MARKETING] === B.DECLINED || e[j.ANALYTICS] === B.DECLINED
      ? S.DECLINED
      : S.NO_INTERACTION;
  }
  function _e() {
    console.warn("getRegulation is deprecated and will be removed.");
    const e = te();
    return "" === e
      ? ""
      : [
          "AT",
          "BE",
          "BG",
          "HR",
          "CY",
          "CZ",
          "DK",
          "EE",
          "FI",
          "FR",
          "DE",
          "GR",
          "HU",
          "IS",
          "IE",
          "IT",
          "LV",
          "LI",
          "LT",
          "LU",
          "MT",
          "NL",
          "NO",
          "PL",
          "PT",
          "RO",
          "SI",
          "SK",
          "ES",
          "SE",
          "GB",
        ].includes(e.slice(0, 2))
      ? "GDPR"
      : "US" === e.slice(0, 2) && ["CA", "VA"].includes(e.slice(2, 4))
      ? "CCPA"
      : "";
  }
  function Ee() {
    return (
      console.warn("getShopPrefs is deprecated and will be removed."),
      { limit: [] }
    );
  }
  function we() {
    return te();
  }
  function Ie() {
    if ("" === document.referrer) return !0;
    const e = document.createElement("a");
    return (e.href = document.referrer), window.location.hostname != e.hostname;
  }
  function Ae() {
    return (
      console.warn("isRegulationEnforced is deprecated and will be removed."),
      !0
    );
  }
  function xe() {
    return !!Z() || (se() && ce());
  }
  function De() {
    return ue()
      ? "string" == typeof navigator.globalPrivacyControl
        ? "1" !== navigator.globalPrivacyControl
        : "boolean" == typeof navigator.globalPrivacyControl
        ? !navigator.globalPrivacyControl
        : null
      : null;
  }
  function Oe() {
    return (
      console.warn(
        "userDataCanBeSold is deprecated and will be replaced with saleOfDataAllowed."
      ),
      le()
    );
  }
  function Te() {
    return de() && Ce() === S.NO_INTERACTION;
  }
  function ke() {
    return !1 === De()
      ? S.DECLINED
      : ((e = X()),
        Z() ? S.NO_VALUE : e === B.NO_VALUE ? S.NO_INTERACTION : Q(e));
    var e;
  }
  function Pe() {
    return (
      console.warn("shouldShowCCPABanner is deprecated and will be removed."),
      ue() && ke() === S.NO_INTERACTION
    );
  }
  function Re() {
    return !0;
  }
  function Me(e) {
    return (function (e) {
      const n = $();
      if (Z(n) || !n.cus) return;
      const t = n.cus[encodeURIComponent(e)];
      return t ? decodeURIComponent(t) : t;
    })(e);
  }
  const Ne = "95ba910bcec4542ef2a0b64cd7ca666c";
  function Se(e, n, t) {
    try {
      var o;
      !(function (e) {
        const n = new XMLHttpRequest();
        n.open("POST", "https://notify.bugsnag.com/", !0),
          n.setRequestHeader("Content-Type", "application/json"),
          n.setRequestHeader("Bugsnag-Api-Key", Ne),
          n.setRequestHeader("Bugsnag-Payload-Version", "5");
        const t = (function (e) {
          const n = (function (e) {
              return e.stackTrace || e.stack || e.description || e.name;
            })(e.error),
            [t, o] = (n || "unknown error").split("\n")[0].split(":");
          return JSON.stringify({
            payloadVersion: 5,
            notifier: {
              name: "ConsentTrackingAPI",
              version: "latest",
              url: "-",
            },
            events: [
              {
                exceptions: [
                  {
                    errorClass: (t || "").trim(),
                    message: (o || "").trim(),
                    stacktrace: [
                      {
                        file: "consent-tracking-api.js",
                        lineNumber: "1",
                        method: n,
                      },
                    ],
                    type: "browserjs",
                  },
                ],
                context: "general",
                app: { id: "ConsentTrackingAPI", version: "latest" },
                metaData: {
                  request: { shopId: e.shopId, shopUrl: window.location.href },
                  device: { userAgent: window.navigator.userAgent },
                  "Additional Notes": e.notes,
                },
                unhandled: !1,
              },
            ],
          });
        })(e);
        n.send(t);
      })({
        error: e,
        context: n,
        shopId:
          Le() ||
          (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
        notes: t,
      });
    } catch (e) {}
  }
  function Be(e) {
    return (...n) => {
      try {
        return e(...n);
      } catch (e) {
        throw (Se(e), e);
      }
    };
  }
  function Le() {
    try {
      const e = document.getElementById("shopify-features").textContent;
      return JSON.parse(e).shopId;
    } catch (e) {
      return null;
    }
  }
  function je() {
    return se();
  }
  function He() {
    return ce();
  }
  function Ue() {
    return ie();
  }
  function Fe() {
    return le();
  }
  function Ge() {
    const e = {},
      n = J();
    for (const t of Object.keys(n)) e[ee(t)] = Q(n[t]);
    return e;
  }
  function Ke(e, n) {
    return "object" == typeof e &&
      e.headlessStorefront &&
      !e.storefrontAccessToken
      ? (console.warn(
          "Headless consent has been updated. Please read shopify.dev/docs/api/customer-privacy to integrate."
        ),
        (function (e, n) {
          function t(e, n = B.NO_VALUE) {
            return !0 === e ? B.ACCEPTED : !1 === e ? B.DECLINED : n;
          }
          const o = {
              [j.ANALYTICS]: t(e[H.ANALYTICS], B.DECLINED),
              [j.MARKETING]: t(e[H.MARKETING], B.DECLINED),
              [j.PREFERENCES]: t(e[H.PREFERENCES], B.DECLINED),
              [j.SALE_OF_DATA]: t(e[H.SALE_OF_DATA]),
            },
            r = { v: N, reg: "", con: { CMP: o } },
            a = encodeURIComponent(JSON.stringify(r));
          return q(W, e.rootDomain, z, a), n(null), new Promise((e, n) => {});
        })(e, n || (() => {})))
      : ve(e, n);
  }
  const Ve = ({ useBugsnagReporting: e }) => {
    X() != B.DECLINED && !1 === De() && be(!1, () => !1);
    const n = {
      getTrackingConsent: Ce,
      setTrackingConsent: Ke,
      userCanBeTracked: xe,
      getRegulation: _e,
      isRegulationEnforced: Ae,
      getShopPrefs: Ee,
      shouldShowGDPRBanner: Te,
      userDataCanBeSold: Oe,
      setCCPAConsent: be,
      getCCPAConsent: ke,
      shouldShowCCPABanner: Pe,
      doesMerchantSupportGranularConsent: Re,
      analyticsProcessingAllowed: ce,
      preferencesProcessingAllowed: ie,
      marketingAllowed: je,
      firstPartyMarketingAllowed: je,
      saleOfDataAllowed: Fe,
      thirdPartyMarketingAllowed: Fe,
      currentVisitorConsent: Ge,
      shouldShowBanner: de,
      saleOfDataRegion: ue,
      getRegion: we,
      getTrackingConsentMetafield: Me,
      unstable: {
        analyticsProcessingAllowed: ce,
        preferencesProcessingAllowed: ie,
        marketingAllowed: je,
        saleOfDataAllowed: Fe,
        currentVisitorConsent: Ge,
        shouldShowBanner: de,
        saleOfDataRegion: ue,
      },
    };
    if (!e) return n;
    const t = ["unstable"];
    for (const e in n)
      n.hasOwnProperty(e) && (n[e] = t.includes(e) ? n[e] : Be(n[e]));
    return n;
  };
  function qe(e = { useBugsnagReporting: !1 }) {
    return Ve(e);
  }
  var We, ze, Ye, $e, Je, Xe;
  !(function (e) {
    (e.BottomCenter = "bottom_center"),
      (e.BottomFullWidth = "bottom_full_width"),
      (e.BottomLeft = "bottom_left"),
      (e.BottomRight = "bottom_right"),
      (e.Center = "center");
  })(We || (We = {})),
    (function (e) {
      (e.Custom = "custom"), (e.Dark = "dark"), (e.Light = "light");
    })(ze || (ze = {})),
    (function (e) {
      (e[(e.Yes = 1)] = "Yes"), (e[(e.No = 0)] = "No");
    })(Ye || (Ye = {})),
    (function (e) {
      (e.StylesContainerId = "shopify-pc__banner__styles"),
        (e.DialogId = "shopify-pc__banner"),
        (e.DialogClass = "shopify-pc__banner__dialog"),
        (e.WrapperClass = "shopify-pc__banner__wrapper"),
        (e.BodyClass = "shopify-pc__banner__body"),
        (e.BodyTitleId = "shopify-pc__banner__body-title"),
        (e.BodyCopyPolicyLinkId = "shopify-pc__banner__body-policy-link"),
        (e.ButtonsClass = "shopify-pc__banner__btns"),
        (e.ButtonsGranularClass = "shopify-pc__banner__btns-granular"),
        (e.ButtonAcceptId = "shopify-pc__banner__btn-accept"),
        (e.ButtonAcceptClass = "shopify-pc__banner__btn-accept"),
        (e.ButtonDeclineId = "shopify-pc__banner__btn-decline"),
        (e.ButtonDeclineClass = "shopify-pc__banner__btn-decline"),
        (e.ButtonManagePrefsId = "shopify-pc__banner__btn-manage-prefs"),
        (e.ButtonManagePrefsClass = "shopify-pc__banner__btn-manage-prefs");
    })($e || ($e = {})),
    (function (e) {
      (e.StylesContainerId = "shopify-pc__prefs__styles"),
        (e.OverlayId = "shopify-pc__prefs__overlay"),
        (e.OverlayClass = "shopify-pc__prefs__overlay"),
        (e.WrapperId = "shopify-pc__prefs"),
        (e.WrapperClass = "shopify-pc__prefs"),
        (e.DialogId = "shopify-pc__prefs__dialog"),
        (e.DialogClass = "shopify-pc__prefs__dialog"),
        (e.DialogScrollableClass = "shopify-pc__prefs__scrollable"),
        (e.HeaderTitleId = "shopify-pc__prefs__header-title"),
        (e.HeaderActionsClass = "shopify-pc__prefs__header-actions"),
        (e.HeaderSaveId = "shopify-pc__prefs__header-save"),
        (e.HeaderAcceptId = "shopify-pc__prefs__header-accept"),
        (e.HeaderDeclineId = "shopify-pc__prefs__header-decline"),
        (e.HeaderCloseId = "shopify-pc__prefs__header-close"),
        (e.HeaderCloseClass = "shopify-pc__prefs__header-close"),
        (e.IntroClass = "shopify-pc__prefs__intro"),
        (e.IntroMainClass = "shopify-pc__prefs__intro-main"),
        (e.IntroExplainWrapperClass = "shopify-pc__prefs__intro-explain"),
        (e.IntroExplainAcceptClass = "shopify-pc__prefs__intro-explain-accept"),
        (e.IntroExplainDeclineClass =
          "shopify-pc__prefs__intro-explain-decline"),
        (e.OptionWrapperClass = "shopify-pc__prefs__options"),
        (e.OptionClass = "shopify-pc__prefs__option"),
        (e.OptionEssentialId = "shopify-pc__prefs__essential"),
        (e.OptionEssentialInputId = "shopify-pc__prefs__essential-input"),
        (e.OptionMarketingId = "shopify-pc__prefs__marketing"),
        (e.OptionMarketingInputId = "shopify-pc__prefs__marketing-input"),
        (e.OptionAnalyticsId = "shopify-pc__prefs__analytics"),
        (e.OptionAnalyticsInputId = "shopify-pc__prefs__analytics-input"),
        (e.OptionPreferencesId = "shopify-pc__prefs__preferences"),
        (e.OptionPreferencesInputId = "shopify-pc__prefs__preferences-input");
    })(Je || (Je = {})),
    (function (e) {
      (e.Black = "#333"),
        (e.White = "#fff"),
        (e.Gray = "#ccc"),
        (e.Green = "#3AA83A"),
        (e.LightGray = "#F7F8F9"),
        (e.DarkGray = "#36454F"),
        (e.VeryDarkGray = "#666"),
        (e.VeryLightGray = "#e5e5e5");
    })(Xe || (Xe = {}));
  var Ze = function (e) {
      return "\n    border: none;\n    color: ".concat(
        e.fontColor,
        ";\n    background: transparent;\n  "
      );
    },
    Qe = function (e) {
      return "\n    border: 1px solid "
        .concat(e.button.borderColor, ";\n    color: ")
        .concat(e.button.fontColor, ";\n    background: ")
        .concat(e.button.backgroundColor, ";\n  ");
    };
  function en(e, n, t, o) {
    void 0 === n && (n = "0,0,100,100"),
      void 0 === t && (t = "0,0,0,100"),
      void 0 === o && (o = "0,0,100,100");
    var r = e.split(","),
      a = r[0],
      i = r[1],
      c = r[2],
      s = r[3],
      l = n.split(","),
      d = l[0],
      u = l[1],
      p = l[2],
      f = l[3],
      h = t.split(","),
      y = h[0],
      m = h[1],
      g = h[2],
      v = h[3],
      b = o.split(","),
      C = b[0],
      _ = b[1],
      E = b[2],
      w = b[3],
      I = {
        hue: Number(a),
        saturation: Number(i),
        lightness: Number(c),
        alpha: Number(s),
      },
      A = {
        hue: Number(d),
        saturation: Number(u),
        lightness: Number(p),
        alpha: Number(f),
      },
      x = {
        hue: Number(y),
        saturation: Number(m),
        lightness: Number(g),
        alpha: Number(v),
      },
      D = {
        hue: Number(C),
        saturation: Number(_),
        lightness: Number(E),
        alpha: Number(w),
      },
      O = {
        hue: I.hue,
        saturation: I.saturation,
        lightness: I.lightness,
        alpha: I.alpha - 10,
      },
      T = {
        hue: A.hue,
        saturation: A.saturation,
        lightness: A.lightness < 50 ? A.lightness + 14 : A.lightness - 12,
        alpha: A.alpha,
      },
      k = {
        hue: 201,
        saturation: A.lightness < 50 ? 60 : 90,
        lightness: A.lightness < 50 ? 60 : 80,
        alpha: A.lightness < 50 ? 80 : 100,
      };
    return {
      font: nn(I),
      fontSubdued: nn(O),
      buttonFont: nn(x),
      buttonBackground: nn(D),
      background: nn(A),
      divider: nn(T),
      focused: nn(k),
    };
  }
  function nn(e) {
    return "hsl("
      .concat(e.hue, "deg, ")
      .concat(e.saturation, "%, ")
      .concat(e.lightness, "%, ")
      .concat(e.alpha, "%)");
  }
  function tn(e, n, t, o, r) {
    var a = "0,0,0,100",
      i = "0,0,100,100",
      c = en("0,0,12,100", "0,0,100,100", "0,0,12,100", "0,0,100,100"),
      s = en("0,0,100,87", "0,0,12,100", "0,0,100,87", "0,0,12,100"),
      l = en(
        null != n ? n : a,
        null != t ? t : i,
        null != o ? o : a,
        null != r ? r : i
      ),
      d = (function () {
        switch (e) {
          case ze.Light:
            return c;
          case ze.Dark:
            return s;
          case ze.Custom:
            return l;
          default:
            return c;
        }
      })();
    return {
      backgroundColor: d.background,
      fontColor: d.font,
      fontSubduedColor: d.fontSubdued,
      sectionDivider: d.divider,
      iconColor: d.font,
      focused: d.focused,
      button: {
        borderColor: d.buttonFont,
        backgroundColor: d.buttonBackground,
        fontColor: d.buttonFont,
      },
      primaryButton: {
        borderColor: d.buttonBackground,
        backgroundColor: d.buttonFont,
        fontColor: d.buttonBackground,
      },
    };
  }
  function on(e) {
    var n = e.bannerData,
      t = e.selectorPrefix,
      o = t ? "".concat(t, " ") : "",
      r = tn(
        n.theme.theme,
        n.theme.fontColor,
        n.theme.backgroundColor,
        n.theme.buttonFontColor,
        n.theme.buttonBackgroundColor
      ),
      a = (function (e, n, t) {
        var o = "1280px",
          r = "\n    "
            .concat(t, ".")
            .concat(
              $e.WrapperClass,
              " {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      flex-direction: column;\n    }\n  "
            ),
          a =
            "\n    position: fixed;\n    z-index: 2000000;\n    box-shadow: 0px 4px 10px rgb(63 63 68 / 40%);\n    max-height: 90%;\n    box-sizing: border-box;\n    opacity: 1;\n    padding: 32px;\n    background-color: ".concat(
              n.backgroundColor,
              ";\n    overflow: auto;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    border: none;\n    text-align: left;\n  "
            ),
          i = function () {
            var e = "\n      "
              .concat(t, ".")
              .concat(
                $e.ButtonsClass,
                " {\n        flex-direction: column;\n      }\n      "
              )
              .concat(t, ".")
              .concat(
                $e.ButtonsGranularClass,
                " :nth-child(1) {\n        order: 3;\n      }\n      "
              )
              .concat(t, ".")
              .concat(
                $e.ButtonsGranularClass,
                " :nth-child(2) {\n        order: 1;\n      }\n      "
              )
              .concat(t, ".")
              .concat(
                $e.ButtonsGranularClass,
                " :nth-child(3) {\n        order: 2;\n      }\n    "
              );
            return "\n      @media only screen and (max-width: 480px) {\n        ".concat(
              e,
              "\n      }\n    "
            );
          },
          c = "\n    "
            .concat(t, ".")
            .concat($e.DialogClass, " {\n      ")
            .concat(a, "\n      bottom: 0%;\n      width: 100%;\n    }\n    ")
            .concat(t, ".")
            .concat(
              $e.DialogClass,
              " button {\n      margin: 0 10px 0 0;\n    }\n    @media only screen and (max-width: "
            )
            .concat(o, ") {\n      ")
            .concat(t, ".")
            .concat(
              $e.DialogClass,
              " button {\n        margin: 15px 10px 0 0;\n      }\n    }\n    "
            )
            .concat(r, "\n    ")
            .concat(t, ".")
            .concat(
              $e.WrapperClass,
              " {\n      flex-direction: row;\n    }\n    @media only screen and (max-width: "
            )
            .concat(o, ") {\n      ")
            .concat(t, ".")
            .concat(
              $e.WrapperClass,
              " {\n        flex-direction: column;\n      }\n    }\n    "
            )
            .concat(t, ".")
            .concat(
              $e.BodyClass,
              " {\n      margin-right: 5%;\n      margin-bottom: 0;\n    }\n    @media only screen and (max-width: "
            )
            .concat(o, ") {\n      ")
            .concat(t, ".")
            .concat(
              $e.BodyClass,
              " {\n        margin-right: 0;\n        margin-bottom: 10px;\n        width: 100%;\n      }\n    }\n    "
            )
            .concat(t, ".")
            .concat(
              $e.ButtonsClass,
              " {\n      display: flex;\n      min-width: 580px;\n      flex-direction: row;\n    }\n    @media only screen and (max-width: "
            )
            .concat(o, ") {\n      ")
            .concat(t, ".")
            .concat(
              $e.ButtonsClass,
              " {\n        min-width: auto;\n        width: 100%;\n        justify-content: flex-end;\n      }\n    }\n    "
            )
            .concat(i(), "\n  "),
          s = "\n    "
            .concat(t, ".")
            .concat($e.DialogClass, " {\n      ")
            .concat(
              a,
              "\n      top: 50%;\n      left: 25%;\n      width: 50%;\n      transform: translate(0, -50%);\n      min-width: 280px;\n      border-radius: 3px;\n    }\n    "
            )
            .concat(
              r,
              "\n    @media only screen and (max-width: 1300px) {\n      "
            )
            .concat(t, ".")
            .concat(
              $e.DialogClass,
              " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      "
            )
            .concat(t, ".")
            .concat(
              $e.DialogClass,
              " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    "
            )
            .concat(t, ".")
            .concat(
              $e.BodyClass,
              " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    "
            )
            .concat(t, ".")
            .concat(
              $e.ButtonsClass,
              " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      flex-direction: row;\n    }\n    "
            )
            .concat(i(), "\n  "),
          l = "\n    "
            .concat(t, ".")
            .concat($e.DialogClass, " {\n      ")
            .concat(
              a,
              "\n      bottom: 0;\n      left: 0;\n      max-width: 650px;\n      border-top-right-radius: 3px;\n    }\n    "
            )
            .concat(r, "\n    ")
            .concat(t, ".")
            .concat(
              $e.BodyClass,
              " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    "
            )
            .concat(t, ".")
            .concat(
              $e.ButtonsClass,
              " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      flex-direction: row;\n    }\n    "
            )
            .concat(i(), "\n  "),
          d = "\n    "
            .concat(t, ".")
            .concat($e.DialogClass, " {\n      ")
            .concat(
              a,
              "\n      bottom: 0;\n      right: 0;\n      max-width: 650px;\n      border-top-left-radius: 3px;\n    }\n    "
            )
            .concat(r, "\n    ")
            .concat(t, ".")
            .concat(
              $e.BodyClass,
              " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    "
            )
            .concat(t, ".")
            .concat(
              $e.ButtonsClass,
              " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      flex-direction: row;\n    }\n    "
            )
            .concat(i(), "\n  "),
          u = "\n    "
            .concat(t, ".")
            .concat($e.DialogClass, " {\n      ")
            .concat(
              a,
              "\n      bottom: 0;\n      left: 25%;\n      width: 50%;\n      min-width: 280px;\n      border-top-right-radius: 3px;\n      border-top-left-radius: 3px;\n    }\n    "
            )
            .concat(
              r,
              "\n    @media only screen and (max-width: 1300px) {\n      "
            )
            .concat(t, ".")
            .concat(
              $e.DialogClass,
              " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      "
            )
            .concat(t, ".")
            .concat(
              $e.DialogClass,
              " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    "
            )
            .concat(t, ".")
            .concat(
              $e.BodyClass,
              " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    "
            )
            .concat(t, ".")
            .concat(
              $e.ButtonsClass,
              " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      flex-direction: row;\n    }\n    "
            )
            .concat(i(), "\n  ");
        switch (e) {
          case We.BottomFullWidth:
            return c;
          case We.Center:
            return s;
          case We.BottomLeft:
            return l;
          case We.BottomRight:
            return d;
          case We.BottomCenter:
            return u;
          default:
            return c;
        }
      })(n.position, r, o),
      i = (function (e, n) {
        if (e === ze.Custom)
          return { accept: Qe(n), decline: Qe(n), manage: Ze(n) };
        var t = e === ze.Dark,
          o = "\n    background: "
            .concat(t ? Xe.Black : Xe.White, ";\n    color: ")
            .concat(t ? Xe.White : Xe.Black, ";\n  ");
        return {
          accept: o,
          decline: o,
          manage:
            "\n    background: transparent;\n    border: none;\n    color: ".concat(
              t ? Xe.White : Xe.Black,
              ";\n  "
            ),
        };
      })(n.theme.theme, r);
    return "\n    "
      .concat(o, ".")
      .concat($e.DialogClass, " h2 {\n      color: ")
      .concat(
        r.fontColor,
        ";\n      font-family: inherit;\n      font-size: 120%;\n      margin: 0 0 .5em 0;\n      padding: 0;\n      font-weight: bold;\n    }\n    "
      )
      .concat(o, ".")
      .concat($e.DialogClass, " p {\n      color: ")
      .concat(
        r.fontColor,
        ";\n      font-family: inherit;\n      line-height: 1.3;\n      margin: 0;\n      padding: 0;\n    }\n    "
      )
      .concat(o, ".")
      .concat($e.DialogClass, " a {\n      color: ")
      .concat(r.fontColor, ";\n      text-decoration: underline;\n    }\n    ")
      .concat(o, ".")
      .concat(
        $e.DialogClass,
        " button {\n      border: none;\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px;\n      margin: 15px 20px 0 0;\n      font-size: 100%;\n      flex-basis: 50%;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n      text-align: center;\n    }\n    "
      )
      .concat(o, ".")
      .concat(
        $e.DialogClass,
        " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px "
      )
      .concat(r.focused, ";\n    }\n    ")
      .concat(o, ".")
      .concat(
        $e.DialogClass,
        " button:hover {\n      cursor: pointer;\n    }\n    "
      )
      .concat(o, ".")
      .concat($e.DialogClass, " button.")
      .concat($e.ButtonAcceptClass, " {\n      border: 1px solid ")
      .concat(r.button.borderColor, ";\n      ")
      .concat(i.accept, "\n    }\n    ")
      .concat(o, ".")
      .concat($e.DialogClass, " button.")
      .concat(
        $e.ButtonManagePrefsClass,
        " {\n      text-decoration: underline;\n      "
      )
      .concat(i.manage, "\n    }\n    ")
      .concat(o, ".")
      .concat($e.DialogClass, " button.")
      .concat(
        $e.ButtonManagePrefsClass,
        ":focus {\n      box-shadow: none;\n    }\n    "
      )
      .concat(o, ".")
      .concat($e.DialogClass, " button.")
      .concat(
        $e.ButtonManagePrefsClass,
        ":focus span {\n      outline: 2px solid "
      )
      .concat(r.focused, ";\n    }\n    ")
      .concat(o, ".")
      .concat($e.DialogClass, " button.")
      .concat($e.ButtonDeclineClass, " {\n      border: 1px solid ")
      .concat(r.button.borderColor, ";\n      ")
      .concat(i.decline, "\n    }\n    ")
      .concat(o, ".")
      .concat($e.BodyClass, " p a:focus {\n      outline: 2px solid ")
      .concat(r.focused, ";\n      box-shadow: none;\n    }\n    ")
      .concat(a, "\n  ");
  }
  var rn = "8e9cb600c40a8849ba2b6151bb05805c";
  function an(e, n, t) {
    var o;
    try {
      !(function (e) {
        var n = new XMLHttpRequest();
        n.open("POST", "https://notify.bugsnag.com/", !0),
          n.setRequestHeader("Content-Type", "application/json"),
          n.setRequestHeader("Bugsnag-Api-Key", rn),
          n.setRequestHeader("Bugsnag-Payload-Version", "5");
        var t = (function (e) {
          var n = (function (e) {
              return e.stackTrace || e.stack || e.description || e.name;
            })(e.error),
            t = (n || "unknown error").split("\n")[0].split(":"),
            o = t[0],
            r = t[1];
          return JSON.stringify({
            payloadVersion: 5,
            notifier: { name: "privacyBanner", version: "latest", url: "-" },
            events: [
              {
                exceptions: [
                  {
                    errorClass: (o || "").trim(),
                    message: (r || "").trim(),
                    stacktrace: [
                      {
                        file: "storefront-banner.js",
                        lineNumber: "1",
                        method: n,
                      },
                    ],
                    type: "browserjs",
                  },
                ],
                context: e.context || "general",
                app: { id: "privacyBanner", version: "latest" },
                metaData: {
                  request: { shopId: e.shopId, shopUrl: window.location.href },
                  device: { userAgent: window.navigator.userAgent },
                  "Additional Notes": e.notes,
                },
                unhandled: !1,
              },
            ],
          });
        })(e);
        n.send(t);
      })({
        error: e,
        context: n,
        shopId:
          cn() ||
          (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
        notes: t,
      });
    } catch (e) {}
  }
  function cn() {
    var e;
    try {
      var n =
        null ===
          (e =
            null === document || void 0 === document
              ? void 0
              : document.getElementById("shopify-features")) || void 0 === e
          ? void 0
          : e.textContent;
      return n ? JSON.parse(n).shopId : null;
    } catch (e) {
      return null;
    }
  }
  function sn(e) {
    for (
      var n = 0, t = decodeURIComponent(document.cookie).split(";");
      n < t.length;
      n++
    ) {
      var o = t[n].split("="),
        r = o[0],
        a = o[1];
      if (r.trim() === e) return a;
    }
    return "";
  }
  function ln(e) {
    var n = {
      marketing: e.marketing,
      analytics: e.analytics,
      preferences: e.preferences,
      sale_of_data: e.sale_of_data,
    };
    e.storefrontAccessToken &&
      ((n.headlessStorefront = !0),
      (n.checkoutRootDomain = e.checkoutRootDomain),
      (n.storefrontRootDomain = e.storefrontRootDomain),
      (n.storefrontAccessToken = e.storefrontAccessToken)),
      Ke(n, e.callback);
  }
  var dn = function () {
      var e = Ge();
      return (
        e.marketing === S.NO_VALUE &&
        e.analytics === S.NO_VALUE &&
        e.preferences === S.NO_VALUE
      );
    },
    un = function () {
      var e = de() && dn();
      return (
        !window.location.pathname.match(
          /^(\/[a-zA-Z]{2}(-[a-zA-Z]{2})?)?\/(cart|policies\/privacy-policy|password)$/
        ) && e
      );
    },
    pn = function () {
      return (
        "1" ===
        (function (e) {
          var n = window.location.search.substring(1);
          if (0 === n.length) return null;
          var t = n
            .split("&")
            .map(function (e) {
              return e.split("=");
            })
            .filter(function (n) {
              return n[0] === e;
            })[0];
          return (t ? t[1] : null) || null;
        })("preview_privacy_banner")
      );
    },
    fn = function () {
      return "1" === sn("_ab") && dn();
    },
    hn = function () {
      return pn() || fn();
    },
    yn = (function () {
      function e() {}
      return (
        (e.getServerData = function (e, n) {
          return s(this, void 0, void 0, function () {
            var t;
            return l(this, function (o) {
              return (
                (this.domain = e),
                (this.accessToken = n || this.liquidAccessToken()),
                (t = this.getEmbeddedData()) && !hn()
                  ? [2, t]
                  : [2, this.getDataFromStorefrontApi()]
              );
            });
          });
        }),
        (e.getEmbeddedData = function () {
          var e = document.getElementById("scb4127");
          if (e) return JSON.parse(e.textContent || "");
        }),
        (e.fetchParams = function (e) {
          var n = e.accessToken,
            t = e.unlocalized,
            o = this.currentLanguage(),
            r = this.currentCountry(),
            a =
              !o || !r || t
                ? ""
                : "@inContext(language: "
                    .concat(o, ", country: ")
                    .concat(r, ")");
          return {
            headers: {
              "content-type": "application/json",
              "x-shopify-storefront-access-token": n,
            },
            body: JSON.stringify({
              query:
                "\n        query bannerQuery ($isPreviewMode: Boolean = false) ".concat(
                  a,
                  " {\n          consentManagement {\n            banner {\n              enabled\n              position\n              policyLinkText\n              policyLinkUrl\n              title\n              text\n              buttonPrefsOpenText\n              buttonAcceptText\n              buttonDeclineText\n              regionVisibility @include(if: $isPreviewMode)\n              theme {\n                theme\n                fontColor\n                backgroundColor\n                buttonFontColor\n                buttonBackgroundColor\n              }\n              preferences {\n                title\n                introTitle\n                introText\n                buttonAcceptText\n                buttonDeclineText\n                buttonSaveText\n                bulletPoints {\n                  enabled\n                  title\n                  firstText\n                  secondText\n                  thirdText\n                }\n                purposes {\n                  essentialName\n                  essentialDesc\n                  performanceName\n                  performanceDesc\n                  preferencesName\n                  preferencesDesc\n                  marketingName\n                  marketingDesc\n                }\n              }\n            }\n          }\n        }"
                ),
              variables: { isPreviewMode: hn() },
            }),
            method: "POST",
          };
        }),
        (e.getDataFromStorefrontApi = function (e) {
          return s(this, void 0, void 0, function () {
            var n, t, r, a, i;
            return l(this, function (c) {
              switch (c.label) {
                case 0:
                  if (!this.accessToken)
                    throw new Error("Missing access token");
                  return (
                    (n = this.domain ? "https://".concat(this.domain) : ""),
                    (t = "".concat(n, "/api/unstable/graphql.json")),
                    [
                      4,
                      fetch(
                        t,
                        this.fetchParams({
                          accessToken: this.accessToken,
                          unlocalized: e,
                        })
                      ),
                    ]
                  );
                case 1:
                  return 200 !== (r = c.sent()).status ? [3, 3] : [4, r.json()];
                case 2:
                  if ((a = c.sent()).errors) {
                    if (
                      (i = a.errors.find(function (e) {
                        return (
                          "argumentLiteralsIncompatible" === e.extensions.code
                        );
                      })) &&
                      !e
                    )
                      return (
                        window.Weglot ||
                          an(new Error(i.message), "DataFetching"),
                        [2, this.getDataFromStorefrontApi(!0)]
                      );
                    throw new Error(a.errors[0].message);
                  }
                  return [2, o({}, a.data.consentManagement.banner)];
                case 3:
                  throw new Error("Could not reach the server");
              }
            });
          });
        }),
        (e.liquidAccessToken = function () {
          var e = document.documentElement.querySelector("#shopify-features");
          if (e) {
            var n = JSON.parse(e.textContent || "").accessToken;
            if (n) return n;
            console.warn("Could not find liquid access token");
          } else console.warn("Could not find liquid access token");
        }),
        (e.currentLanguage = function () {
          var e,
            n =
              null ===
                (e =
                  null === window || void 0 === window
                    ? void 0
                    : window.Shopify) || void 0 === e
                ? void 0
                : e.locale;
          if (n) {
            n = n.replace("-", "_").toUpperCase();
            return (
              ["PT_BR", "PT_PT", "ZH_CN", "ZH_TW"].includes(n) ||
                (n = n.split("_")[0]),
              n
            );
          }
        }),
        (e.currentCountry = function () {
          var e, n;
          return null ===
            (n =
              null ===
                (e =
                  null === window || void 0 === window
                    ? void 0
                    : window.Shopify) || void 0 === e
                ? void 0
                : e.country) || void 0 === n
            ? void 0
            : n.toUpperCase();
        }),
        e
      );
    })();
  function mn(e) {
    if (e.__esModule) return e;
    var n = e.default;
    if ("function" == typeof n) {
      var t = function e() {
        return this instanceof e
          ? Reflect.construct(n, arguments, this.constructor)
          : n.apply(this, arguments);
      };
      t.prototype = n.prototype;
    } else t = {};
    return (
      Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (n) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          t,
          n,
          o.get
            ? o
            : {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }
        );
      }),
      t
    );
  }
  var gn = {},
    vn = {},
    bn = mn(R),
    Cn = {};
  Object.defineProperty(Cn, "__esModule", { value: !0 }),
    (Cn.extractDomain =
      Cn.PRODUCTION_CANADA_ENDPOINT =
      Cn.PRODUCE_ENDPOINT =
      Cn.PRODUCE_BATCH_ENDPOINT =
      Cn.PRODUCTION_DOMAIN =
      Cn.DEVELOPMENT_DOMAIN =
        void 0),
    (Cn.DEVELOPMENT_DOMAIN = "http://localhost:8082"),
    (Cn.PRODUCTION_DOMAIN = "https://monorail-edge.shopifysvc.com"),
    (Cn.PRODUCE_BATCH_ENDPOINT = "/unstable/produce_batch"),
    (Cn.PRODUCE_ENDPOINT = "/v1/produce"),
    (Cn.PRODUCTION_CANADA_ENDPOINT =
      "https://monorail-edge-ca.shopifycloud.com/v1/produce"),
    (Cn.extractDomain = function (e) {
      return "https://".concat(new URL(e).hostname);
    });
  var _n = {},
    En = {};
  Object.defineProperty(En, "__esModule", { value: !0 }),
    (En.isCompositeMonorailEvent = void 0),
    (En.isCompositeMonorailEvent = function (e) {
      return void 0 !== e.schemaId;
    }),
    Object.defineProperty(_n, "__esModule", { value: !0 }),
    (_n.ProducerMiddleware = void 0);
  var wn = En,
    In = (function () {
      function e(e) {
        this.producer = e;
      }
      return (
        (e.prototype.do = function (e, n) {
          return (0, wn.isCompositeMonorailEvent)(e)
            ? this.producer.produce(e)
            : this.producer.produceBatch(e);
        }),
        e
      );
    })();
  _n.ProducerMiddleware = In;
  var An,
    xn = {},
    Dn = {},
    On = {},
    Tn = {};
  function kn() {
    if (An) return Tn;
    let e;
    (An = 1),
      Object.defineProperty(Tn, "__esModule", { value: !0 }),
      (Tn.default = function () {
        if (
          !e &&
          ((e =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !e)
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return e(n);
      });
    const n = new Uint8Array(16);
    return Tn;
  }
  var Pn,
    Rn,
    Mn,
    Nn,
    Sn = {},
    Bn = {},
    Ln = {};
  function jn() {
    if (Rn) return Bn;
    (Rn = 1),
      Object.defineProperty(Bn, "__esModule", { value: !0 }),
      (Bn.default = void 0);
    var e,
      n =
        (Pn ||
          ((Pn = 1),
          Object.defineProperty(Ln, "__esModule", { value: !0 }),
          (Ln.default = void 0),
          (Ln.default =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i)),
        (e = Ln) && e.__esModule ? e : { default: e });
    var t = function (e) {
      return "string" == typeof e && n.default.test(e);
    };
    return (Bn.default = t), Bn;
  }
  function Hn() {
    if (Mn) return Sn;
    (Mn = 1),
      Object.defineProperty(Sn, "__esModule", { value: !0 }),
      (Sn.default = void 0),
      (Sn.unsafeStringify = o);
    var e,
      n = (e = jn()) && e.__esModule ? e : { default: e };
    const t = [];
    for (let e = 0; e < 256; ++e) t.push((e + 256).toString(16).slice(1));
    function o(e, n = 0) {
      return (
        t[e[n + 0]] +
        t[e[n + 1]] +
        t[e[n + 2]] +
        t[e[n + 3]] +
        "-" +
        t[e[n + 4]] +
        t[e[n + 5]] +
        "-" +
        t[e[n + 6]] +
        t[e[n + 7]] +
        "-" +
        t[e[n + 8]] +
        t[e[n + 9]] +
        "-" +
        t[e[n + 10]] +
        t[e[n + 11]] +
        t[e[n + 12]] +
        t[e[n + 13]] +
        t[e[n + 14]] +
        t[e[n + 15]]
      ).toLowerCase();
    }
    var r = function (e, t = 0) {
      const r = o(e, t);
      if (!(0, n.default)(r)) throw TypeError("Stringified UUID is invalid");
      return r;
    };
    return (Sn.default = r), Sn;
  }
  var Un,
    Fn,
    Gn = {},
    Kn = {},
    Vn = {};
  function qn() {
    if (Un) return Vn;
    (Un = 1),
      Object.defineProperty(Vn, "__esModule", { value: !0 }),
      (Vn.default = void 0);
    var e,
      n = (e = jn()) && e.__esModule ? e : { default: e };
    var t = function (e) {
      if (!(0, n.default)(e)) throw TypeError("Invalid UUID");
      let t;
      const o = new Uint8Array(16);
      return (
        (o[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
        (o[1] = (t >>> 16) & 255),
        (o[2] = (t >>> 8) & 255),
        (o[3] = 255 & t),
        (o[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
        (o[5] = 255 & t),
        (o[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
        (o[7] = 255 & t),
        (o[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
        (o[9] = 255 & t),
        (o[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
        (o[11] = (t / 4294967296) & 255),
        (o[12] = (t >>> 24) & 255),
        (o[13] = (t >>> 16) & 255),
        (o[14] = (t >>> 8) & 255),
        (o[15] = 255 & t),
        o
      );
    };
    return (Vn.default = t), Vn;
  }
  function Wn() {
    if (Fn) return Kn;
    (Fn = 1),
      Object.defineProperty(Kn, "__esModule", { value: !0 }),
      (Kn.URL = Kn.DNS = void 0),
      (Kn.default = function (e, a, i) {
        function c(e, o, r, c) {
          var s;
          if (
            ("string" == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e));
                const n = [];
                for (let t = 0; t < e.length; ++t) n.push(e.charCodeAt(t));
                return n;
              })(e)),
            "string" == typeof o && (o = (0, t.default)(o)),
            16 !== (null === (s = o) || void 0 === s ? void 0 : s.length))
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)"
            );
          let l = new Uint8Array(16 + e.length);
          if (
            (l.set(o),
            l.set(e, o.length),
            (l = i(l)),
            (l[6] = (15 & l[6]) | a),
            (l[8] = (63 & l[8]) | 128),
            r)
          ) {
            c = c || 0;
            for (let e = 0; e < 16; ++e) r[c + e] = l[e];
            return r;
          }
          return (0, n.unsafeStringify)(l);
        }
        try {
          c.name = e;
        } catch (e) {}
        return (c.DNS = o), (c.URL = r), c;
      });
    var e,
      n = Hn(),
      t = (e = qn()) && e.__esModule ? e : { default: e };
    const o = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    Kn.DNS = o;
    const r = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    return (Kn.URL = r), Kn;
  }
  var zn,
    Yn,
    $n = {};
  function Jn() {
    if (zn) return $n;
    function e(e) {
      return 14 + (((e + 64) >>> 9) << 4) + 1;
    }
    function n(e, n) {
      const t = (65535 & e) + (65535 & n);
      return (((e >> 16) + (n >> 16) + (t >> 16)) << 16) | (65535 & t);
    }
    function t(e, t, o, r, a, i) {
      return n(((c = n(n(t, e), n(r, i))) << (s = a)) | (c >>> (32 - s)), o);
      var c, s;
    }
    function o(e, n, o, r, a, i, c) {
      return t((n & o) | (~n & r), e, n, a, i, c);
    }
    function r(e, n, o, r, a, i, c) {
      return t((n & r) | (o & ~r), e, n, a, i, c);
    }
    function a(e, n, o, r, a, i, c) {
      return t(n ^ o ^ r, e, n, a, i, c);
    }
    function i(e, n, o, r, a, i, c) {
      return t(o ^ (n | ~r), e, n, a, i, c);
    }
    (zn = 1),
      Object.defineProperty($n, "__esModule", { value: !0 }),
      ($n.default = void 0);
    var c = function (t) {
      if ("string" == typeof t) {
        const e = unescape(encodeURIComponent(t));
        t = new Uint8Array(e.length);
        for (let n = 0; n < e.length; ++n) t[n] = e.charCodeAt(n);
      }
      return (function (e) {
        const n = [],
          t = 32 * e.length,
          o = "0123456789abcdef";
        for (let r = 0; r < t; r += 8) {
          const t = (e[r >> 5] >>> r % 32) & 255,
            a = parseInt(o.charAt((t >>> 4) & 15) + o.charAt(15 & t), 16);
          n.push(a);
        }
        return n;
      })(
        (function (t, c) {
          (t[c >> 5] |= 128 << c % 32), (t[e(c) - 1] = c);
          let s = 1732584193,
            l = -271733879,
            d = -1732584194,
            u = 271733878;
          for (let e = 0; e < t.length; e += 16) {
            const c = s,
              p = l,
              f = d,
              h = u;
            (s = o(s, l, d, u, t[e], 7, -680876936)),
              (u = o(u, s, l, d, t[e + 1], 12, -389564586)),
              (d = o(d, u, s, l, t[e + 2], 17, 606105819)),
              (l = o(l, d, u, s, t[e + 3], 22, -1044525330)),
              (s = o(s, l, d, u, t[e + 4], 7, -176418897)),
              (u = o(u, s, l, d, t[e + 5], 12, 1200080426)),
              (d = o(d, u, s, l, t[e + 6], 17, -1473231341)),
              (l = o(l, d, u, s, t[e + 7], 22, -45705983)),
              (s = o(s, l, d, u, t[e + 8], 7, 1770035416)),
              (u = o(u, s, l, d, t[e + 9], 12, -1958414417)),
              (d = o(d, u, s, l, t[e + 10], 17, -42063)),
              (l = o(l, d, u, s, t[e + 11], 22, -1990404162)),
              (s = o(s, l, d, u, t[e + 12], 7, 1804603682)),
              (u = o(u, s, l, d, t[e + 13], 12, -40341101)),
              (d = o(d, u, s, l, t[e + 14], 17, -1502002290)),
              (l = o(l, d, u, s, t[e + 15], 22, 1236535329)),
              (s = r(s, l, d, u, t[e + 1], 5, -165796510)),
              (u = r(u, s, l, d, t[e + 6], 9, -1069501632)),
              (d = r(d, u, s, l, t[e + 11], 14, 643717713)),
              (l = r(l, d, u, s, t[e], 20, -373897302)),
              (s = r(s, l, d, u, t[e + 5], 5, -701558691)),
              (u = r(u, s, l, d, t[e + 10], 9, 38016083)),
              (d = r(d, u, s, l, t[e + 15], 14, -660478335)),
              (l = r(l, d, u, s, t[e + 4], 20, -405537848)),
              (s = r(s, l, d, u, t[e + 9], 5, 568446438)),
              (u = r(u, s, l, d, t[e + 14], 9, -1019803690)),
              (d = r(d, u, s, l, t[e + 3], 14, -187363961)),
              (l = r(l, d, u, s, t[e + 8], 20, 1163531501)),
              (s = r(s, l, d, u, t[e + 13], 5, -1444681467)),
              (u = r(u, s, l, d, t[e + 2], 9, -51403784)),
              (d = r(d, u, s, l, t[e + 7], 14, 1735328473)),
              (l = r(l, d, u, s, t[e + 12], 20, -1926607734)),
              (s = a(s, l, d, u, t[e + 5], 4, -378558)),
              (u = a(u, s, l, d, t[e + 8], 11, -2022574463)),
              (d = a(d, u, s, l, t[e + 11], 16, 1839030562)),
              (l = a(l, d, u, s, t[e + 14], 23, -35309556)),
              (s = a(s, l, d, u, t[e + 1], 4, -1530992060)),
              (u = a(u, s, l, d, t[e + 4], 11, 1272893353)),
              (d = a(d, u, s, l, t[e + 7], 16, -155497632)),
              (l = a(l, d, u, s, t[e + 10], 23, -1094730640)),
              (s = a(s, l, d, u, t[e + 13], 4, 681279174)),
              (u = a(u, s, l, d, t[e], 11, -358537222)),
              (d = a(d, u, s, l, t[e + 3], 16, -722521979)),
              (l = a(l, d, u, s, t[e + 6], 23, 76029189)),
              (s = a(s, l, d, u, t[e + 9], 4, -640364487)),
              (u = a(u, s, l, d, t[e + 12], 11, -421815835)),
              (d = a(d, u, s, l, t[e + 15], 16, 530742520)),
              (l = a(l, d, u, s, t[e + 2], 23, -995338651)),
              (s = i(s, l, d, u, t[e], 6, -198630844)),
              (u = i(u, s, l, d, t[e + 7], 10, 1126891415)),
              (d = i(d, u, s, l, t[e + 14], 15, -1416354905)),
              (l = i(l, d, u, s, t[e + 5], 21, -57434055)),
              (s = i(s, l, d, u, t[e + 12], 6, 1700485571)),
              (u = i(u, s, l, d, t[e + 3], 10, -1894986606)),
              (d = i(d, u, s, l, t[e + 10], 15, -1051523)),
              (l = i(l, d, u, s, t[e + 1], 21, -2054922799)),
              (s = i(s, l, d, u, t[e + 8], 6, 1873313359)),
              (u = i(u, s, l, d, t[e + 15], 10, -30611744)),
              (d = i(d, u, s, l, t[e + 6], 15, -1560198380)),
              (l = i(l, d, u, s, t[e + 13], 21, 1309151649)),
              (s = i(s, l, d, u, t[e + 4], 6, -145523070)),
              (u = i(u, s, l, d, t[e + 11], 10, -1120210379)),
              (d = i(d, u, s, l, t[e + 2], 15, 718787259)),
              (l = i(l, d, u, s, t[e + 9], 21, -343485551)),
              (s = n(s, c)),
              (l = n(l, p)),
              (d = n(d, f)),
              (u = n(u, h));
          }
          return [s, l, d, u];
        })(
          (function (n) {
            if (0 === n.length) return [];
            const t = 8 * n.length,
              o = new Uint32Array(e(t));
            for (let e = 0; e < t; e += 8)
              o[e >> 5] |= (255 & n[e / 8]) << e % 32;
            return o;
          })(t),
          8 * t.length
        )
      );
    };
    return ($n.default = c), $n;
  }
  var Xn,
    Zn,
    Qn = {},
    et = {};
  function nt() {
    if (Zn) return Qn;
    (Zn = 1),
      Object.defineProperty(Qn, "__esModule", { value: !0 }),
      (Qn.default = void 0);
    var e = o(
        (function () {
          if (Xn) return et;
          (Xn = 1),
            Object.defineProperty(et, "__esModule", { value: !0 }),
            (et.default = void 0);
          var e = {
            randomUUID:
              "undefined" != typeof crypto &&
              crypto.randomUUID &&
              crypto.randomUUID.bind(crypto),
          };
          return (et.default = e), et;
        })()
      ),
      n = o(kn()),
      t = Hn();
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = function (o, r, a) {
      if (e.default.randomUUID && !r && !o) return e.default.randomUUID();
      const i = (o = o || {}).random || (o.rng || n.default)();
      if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), r)) {
        a = a || 0;
        for (let e = 0; e < 16; ++e) r[a + e] = i[e];
        return r;
      }
      return (0, t.unsafeStringify)(i);
    };
    return (Qn.default = r), Qn;
  }
  var tt,
    ot,
    rt = {},
    at = {};
  function it() {
    if (ot) return rt;
    (ot = 1),
      Object.defineProperty(rt, "__esModule", { value: !0 }),
      (rt.default = void 0);
    var e = t(Wn()),
      n = t(
        (function () {
          if (tt) return at;
          function e(e, n, t, o) {
            switch (e) {
              case 0:
                return (n & t) ^ (~n & o);
              case 1:
              case 3:
                return n ^ t ^ o;
              case 2:
                return (n & t) ^ (n & o) ^ (t & o);
            }
          }
          function n(e, n) {
            return (e << n) | (e >>> (32 - n));
          }
          (tt = 1),
            Object.defineProperty(at, "__esModule", { value: !0 }),
            (at.default = void 0);
          var t = function (t) {
            const o = [1518500249, 1859775393, 2400959708, 3395469782],
              r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof t) {
              const e = unescape(encodeURIComponent(t));
              t = [];
              for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
            } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
            t.push(128);
            const a = t.length / 4 + 2,
              i = Math.ceil(a / 16),
              c = new Array(i);
            for (let e = 0; e < i; ++e) {
              const n = new Uint32Array(16);
              for (let o = 0; o < 16; ++o)
                n[o] =
                  (t[64 * e + 4 * o] << 24) |
                  (t[64 * e + 4 * o + 1] << 16) |
                  (t[64 * e + 4 * o + 2] << 8) |
                  t[64 * e + 4 * o + 3];
              c[e] = n;
            }
            (c[i - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
              (c[i - 1][14] = Math.floor(c[i - 1][14])),
              (c[i - 1][15] = (8 * (t.length - 1)) & 4294967295);
            for (let t = 0; t < i; ++t) {
              const a = new Uint32Array(80);
              for (let e = 0; e < 16; ++e) a[e] = c[t][e];
              for (let e = 16; e < 80; ++e)
                a[e] = n(a[e - 3] ^ a[e - 8] ^ a[e - 14] ^ a[e - 16], 1);
              let i = r[0],
                s = r[1],
                l = r[2],
                d = r[3],
                u = r[4];
              for (let t = 0; t < 80; ++t) {
                const r = Math.floor(t / 20),
                  c = (n(i, 5) + e(r, s, l, d) + u + o[r] + a[t]) >>> 0;
                (u = d), (d = l), (l = n(s, 30) >>> 0), (s = i), (i = c);
              }
              (r[0] = (r[0] + i) >>> 0),
                (r[1] = (r[1] + s) >>> 0),
                (r[2] = (r[2] + l) >>> 0),
                (r[3] = (r[3] + d) >>> 0),
                (r[4] = (r[4] + u) >>> 0);
            }
            return [
              (r[0] >> 24) & 255,
              (r[0] >> 16) & 255,
              (r[0] >> 8) & 255,
              255 & r[0],
              (r[1] >> 24) & 255,
              (r[1] >> 16) & 255,
              (r[1] >> 8) & 255,
              255 & r[1],
              (r[2] >> 24) & 255,
              (r[2] >> 16) & 255,
              (r[2] >> 8) & 255,
              255 & r[2],
              (r[3] >> 24) & 255,
              (r[3] >> 16) & 255,
              (r[3] >> 8) & 255,
              255 & r[3],
              (r[4] >> 24) & 255,
              (r[4] >> 16) & 255,
              (r[4] >> 8) & 255,
              255 & r[4],
            ];
          };
          return (at.default = t), at;
        })()
      );
    function t(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = (0, e.default)("v5", 80, n.default);
    return (rt.default = o), rt;
  }
  var ct,
    st = {};
  var lt,
    dt,
    ut = {};
  function pt() {
    return (
      dt ||
        ((dt = 1),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "NIL", {
              enumerable: !0,
              get: function () {
                return a.default;
              },
            }),
            Object.defineProperty(e, "parse", {
              enumerable: !0,
              get: function () {
                return l.default;
              },
            }),
            Object.defineProperty(e, "stringify", {
              enumerable: !0,
              get: function () {
                return s.default;
              },
            }),
            Object.defineProperty(e, "v1", {
              enumerable: !0,
              get: function () {
                return n.default;
              },
            }),
            Object.defineProperty(e, "v3", {
              enumerable: !0,
              get: function () {
                return t.default;
              },
            }),
            Object.defineProperty(e, "v4", {
              enumerable: !0,
              get: function () {
                return o.default;
              },
            }),
            Object.defineProperty(e, "v5", {
              enumerable: !0,
              get: function () {
                return r.default;
              },
            }),
            Object.defineProperty(e, "validate", {
              enumerable: !0,
              get: function () {
                return c.default;
              },
            }),
            Object.defineProperty(e, "version", {
              enumerable: !0,
              get: function () {
                return i.default;
              },
            });
          var n = d(
              (function () {
                if (Nn) return On;
                (Nn = 1),
                  Object.defineProperty(On, "__esModule", { value: !0 }),
                  (On.default = void 0);
                var e,
                  n = (e = kn()) && e.__esModule ? e : { default: e },
                  t = Hn();
                let o,
                  r,
                  a = 0,
                  i = 0;
                var c = function (e, c, s) {
                  let l = (c && s) || 0;
                  const d = c || new Array(16);
                  let u = (e = e || {}).node || o,
                    p = void 0 !== e.clockseq ? e.clockseq : r;
                  if (null == u || null == p) {
                    const t = e.random || (e.rng || n.default)();
                    null == u &&
                      (u = o = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
                      null == p && (p = r = 16383 & ((t[6] << 8) | t[7]));
                  }
                  let f = void 0 !== e.msecs ? e.msecs : Date.now(),
                    h = void 0 !== e.nsecs ? e.nsecs : i + 1;
                  const y = f - a + (h - i) / 1e4;
                  if (
                    (y < 0 && void 0 === e.clockseq && (p = (p + 1) & 16383),
                    (y < 0 || f > a) && void 0 === e.nsecs && (h = 0),
                    h >= 1e4)
                  )
                    throw new Error(
                      "uuid.v1(): Can't create more than 10M uuids/sec"
                    );
                  (a = f), (i = h), (r = p), (f += 122192928e5);
                  const m = (1e4 * (268435455 & f) + h) % 4294967296;
                  (d[l++] = (m >>> 24) & 255),
                    (d[l++] = (m >>> 16) & 255),
                    (d[l++] = (m >>> 8) & 255),
                    (d[l++] = 255 & m);
                  const g = ((f / 4294967296) * 1e4) & 268435455;
                  (d[l++] = (g >>> 8) & 255),
                    (d[l++] = 255 & g),
                    (d[l++] = ((g >>> 24) & 15) | 16),
                    (d[l++] = (g >>> 16) & 255),
                    (d[l++] = (p >>> 8) | 128),
                    (d[l++] = 255 & p);
                  for (let e = 0; e < 6; ++e) d[l + e] = u[e];
                  return c || (0, t.unsafeStringify)(d);
                };
                return (On.default = c), On;
              })()
            ),
            t = d(
              (function () {
                if (Yn) return Gn;
                (Yn = 1),
                  Object.defineProperty(Gn, "__esModule", { value: !0 }),
                  (Gn.default = void 0);
                var e = t(Wn()),
                  n = t(Jn());
                function t(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                var o = (0, e.default)("v3", 48, n.default);
                return (Gn.default = o), Gn;
              })()
            ),
            o = d(nt()),
            r = d(it()),
            a = d(
              (ct ||
                ((ct = 1),
                Object.defineProperty(st, "__esModule", { value: !0 }),
                (st.default = void 0),
                (st.default = "00000000-0000-0000-0000-000000000000")),
              st)
            ),
            i = d(
              (function () {
                if (lt) return ut;
                (lt = 1),
                  Object.defineProperty(ut, "__esModule", { value: !0 }),
                  (ut.default = void 0);
                var e,
                  n = (e = jn()) && e.__esModule ? e : { default: e },
                  t = function (e) {
                    if (!(0, n.default)(e)) throw TypeError("Invalid UUID");
                    return parseInt(e.slice(14, 15), 16);
                  };
                return (ut.default = t), ut;
              })()
            ),
            c = d(jn()),
            s = d(Hn()),
            l = d(qn());
          function d(e) {
            return e && e.__esModule ? e : { default: e };
          }
        })(Dn)),
      Dn
    );
  }
  Object.defineProperty(xn, "__esModule", { value: !0 }),
    (xn.v4 = void 0),
    (xn.v4 = function () {
      return "object" == typeof crypto && "function" == typeof crypto.randomUUID
        ? crypto.randomUUID()
        : pt().v4();
    });
  var ft = {},
    ht = {};
  Object.defineProperty(ht, "__esModule", { value: !0 }),
    (ht.toUnderscoreCase =
      ht.convertAllEventsToUnderscoreCase =
      ht.convertStringToUnderscoreCase =
        void 0);
  var yt = bn;
  function mt(e, n) {
    return (
      void 0 === n && (n = !0),
      e && Object.keys(e).length && n
        ? Object.keys(e)
            .map(function (n) {
              var t;
              return ((t = {})[gt(n)] = e[n]), t;
            })
            .reduce(function (e, n) {
              return yt.__assign(yt.__assign({}, e), n);
            })
        : e
    );
  }
  function gt(e) {
    return e
      .split(/(?=[A-Z])/)
      .join("_")
      .toLowerCase();
  }
  (ht.toUnderscoreCase = mt),
    (ht.convertStringToUnderscoreCase = gt),
    (ht.convertAllEventsToUnderscoreCase = function (e) {
      return e.events.map(function (e) {
        var n = !0,
          t = !0;
        return (
          e &&
            e.options &&
            Object.prototype.hasOwnProperty.call(
              e.options,
              "convertEventCase"
            ) &&
            (n = Boolean(e.options.convertEventCase)),
          e &&
            e.options &&
            Object.prototype.hasOwnProperty.call(
              e.options,
              "convertMetaDataCase"
            ) &&
            (t = Boolean(e.options.convertMetaDataCase)),
          {
            schema_id: e.schemaId,
            payload: mt(e.payload, n),
            metadata: mt(e.metadata, t),
          }
        );
      });
    });
  var vt = {};
  Object.defineProperty(vt, "__esModule", { value: !0 }),
    (vt.MonorailRetriesExceededError =
      vt.MonorailRequestError =
      vt.MonorailBatchProduceError =
      vt.MonorailUnableToProduceError =
        void 0);
  var bt = bn,
    Ct = (function (e) {
      function n(t) {
        var o =
          e.call(
            this,
            "Error producing to the Monorail Edge. Response received: ".concat(
              JSON.stringify(t)
            )
          ) || this;
        return (o.response = t), Object.setPrototypeOf(o, n.prototype), o;
      }
      return bt.__extends(n, e), n;
    })(Error);
  vt.MonorailUnableToProduceError = Ct;
  var _t = (function (e) {
    function n(t) {
      var o =
        e.call(
          this,
          "Error producing to the Monorail Edge. Response received: ".concat(
            JSON.stringify(t)
          )
        ) || this;
      return Object.setPrototypeOf(o, n.prototype), (o.response = t), o;
    }
    return bt.__extends(n, e), n;
  })(Error);
  vt.MonorailBatchProduceError = _t;
  var Et = (function (e) {
    function n(t) {
      var o =
        e.call(
          this,
          "Error completing request. A network failure may have prevented the request from completing. Error: ".concat(
            t
          )
        ) || this;
      return Object.setPrototypeOf(o, n.prototype), o;
    }
    return bt.__extends(n, e), n;
  })(Error);
  vt.MonorailRequestError = Et;
  var wt = (function (e) {
    function n(t) {
      var o = e.call(this, "".concat(t)) || this;
      return Object.setPrototypeOf(o, n.prototype), o;
    }
    return bt.__extends(n, e), n;
  })(Error);
  (vt.MonorailRetriesExceededError = wt),
    Object.defineProperty(ft, "__esModule", { value: !0 }),
    (ft.HttpProducer = void 0);
  var It = bn,
    At = Cn,
    xt = ht,
    Dt = xn,
    Ot = vt,
    Tt = (function () {
      function e(e, n) {
        void 0 === e && (e = At.DEVELOPMENT_DOMAIN),
          void 0 === n && (n = !1),
          (this.edgeDomain = e),
          (this.keepalive = n);
      }
      return (
        (e.withEndpoint = function (n) {
          return new e(At.extractDomain(n));
        }),
        (e.getHeadersFromMetadata = function (e) {
          var n = {
            "Content-Type": "application/json; charset=utf-8",
            "X-Monorail-Edge-Event-Created-At-Ms": (
              (e && e.eventCreatedAtMs) ||
              Date.now()
            ).toString(),
            "X-Monorail-Edge-Event-Sent-At-Ms": Date.now().toString(),
            "X-Monorail-Edge-Client-Message-Id": (
              (e && e.clientMessageId) ||
              (0, Dt.v4)()
            ).toString(),
          };
          return (
            e && e.userAgent && (n["User-Agent"] = e.userAgent),
            e && e.remoteIp && (n["X-Forwarded-For"] = e.remoteIp),
            n
          );
        }),
        (e.prototype.produceBatch = function (n) {
          return It.__awaiter(this, void 0, void 0, function () {
            var t, o, r, a, i, c;
            return It.__generator(this, function (s) {
              switch (s.label) {
                case 0:
                  (t = {
                    events: (0, xt.convertAllEventsToUnderscoreCase)(n),
                    metadata: (0, xt.toUnderscoreCase)(n.metadata),
                  }),
                    (s.label = 1);
                case 1:
                  return (
                    s.trys.push([1, 3, , 4]),
                    [
                      4,
                      fetch(this.produceBatchEndpoint(), {
                        method: "post",
                        headers: e.getHeadersFromMetadata(n.metadata),
                        body: JSON.stringify(t),
                        keepalive: this.keepalive,
                      }),
                    ]
                  );
                case 2:
                  return (o = s.sent()), [3, 4];
                case 3:
                  throw ((r = s.sent()), new Ot.MonorailRequestError(r));
                case 4:
                  return 207 !== o.status ? [3, 6] : [4, o.json()];
                case 5:
                  throw ((a = s.sent()), new Ot.MonorailBatchProduceError(a));
                case 6:
                  return o.ok
                    ? [3, 8]
                    : ((i = Ot.MonorailUnableToProduceError.bind),
                      (c = { status: o.status }),
                      [4, o.text()]);
                case 7:
                  throw new (i.apply(Ot.MonorailUnableToProduceError, [
                    void 0,
                    ((c.message = s.sent()), c),
                  ]))();
                case 8:
                  return [2, { status: o.status }];
              }
            });
          });
        }),
        (e.prototype.produce = function (n) {
          return It.__awaiter(this, void 0, void 0, function () {
            var t, o, r, a, i, c;
            return It.__generator(this, function (s) {
              switch (s.label) {
                case 0:
                  (t = !0),
                    n &&
                      n.options &&
                      Object.prototype.hasOwnProperty.call(
                        n.options,
                        "convertEventCase"
                      ) &&
                      (t = Boolean(n.options.convertEventCase)),
                    (o = {
                      schema_id: n.schemaId,
                      payload: (0, xt.toUnderscoreCase)(n.payload, t),
                    }),
                    (s.label = 1);
                case 1:
                  return (
                    s.trys.push([1, 3, , 4]),
                    [
                      4,
                      fetch(this.produceEndpoint(), {
                        method: "post",
                        headers: e.getHeadersFromMetadata(n.metadata),
                        body: JSON.stringify(o),
                        keepalive: this.keepalive,
                      }),
                    ]
                  );
                case 2:
                  return (r = s.sent()), [3, 4];
                case 3:
                  throw ((a = s.sent()), new Ot.MonorailRequestError(a));
                case 4:
                  if (!r)
                    throw new Ot.MonorailUnableToProduceError({
                      message: "No response from edge",
                    });
                  return r.ok
                    ? [3, 6]
                    : ((i = Ot.MonorailUnableToProduceError.bind),
                      (c = { status: r.status }),
                      [4, r.text()]);
                case 5:
                  throw new (i.apply(Ot.MonorailUnableToProduceError, [
                    void 0,
                    ((c.message = s.sent()), c),
                  ]))();
                case 6:
                  return [2, { status: r.status }];
              }
            });
          });
        }),
        (e.prototype.produceBatchEndpoint = function () {
          return this.edgeDomain + At.PRODUCE_BATCH_ENDPOINT;
        }),
        (e.prototype.produceEndpoint = function () {
          return this.edgeDomain + At.PRODUCE_ENDPOINT;
        }),
        e
      );
    })();
  ft.HttpProducer = Tt;
  var kt = {};
  Object.defineProperty(kt, "__esModule", { value: !0 }),
    (kt.LogProducer = void 0);
  var Pt = (function () {
    function e(n) {
      (this.sendToConsole = n), n && e.printWelcomeMessage(n);
    }
    return (
      (e.printWelcomeMessage = function (e) {
        console.log(
          "%c👋 from Monorail%c\n\n" +
            "We've noticed that you're".concat(e ? "" : " not", " ") +
            "running in debug mode. " +
            "As such, we will ".concat(e ? "produce" : "not produce", " ") +
            "Monorail events to the console. " +
            "\n\nIf you want Monorail events to ".concat(
              e ? "stop" : "start",
              " "
            ) +
            "appearing here, %cset debugMode=".concat((!e).toString(), "%c, ") +
            "for the Monorail Log Producer in your code.",
          "font-size: large;",
          "font-size: normal;",
          "font-weight: bold;",
          "font-weight: normal;"
        );
      }),
      (e.prototype.produce = function (e) {
        return (
          this.sendToConsole && console.log("Monorail event produced", e),
          new Promise(function (n) {
            n(e);
          })
        );
      }),
      (e.prototype.produceBatch = function (e) {
        return (
          this.sendToConsole && console.log("Monorail Batch event produced", e),
          new Promise(function (n) {
            n(e);
          })
        );
      }),
      e
    );
  })();
  (kt.LogProducer = Pt),
    Object.defineProperty(vn, "__esModule", { value: !0 }),
    (vn.Monorail = void 0);
  var Rt = bn,
    Mt = Cn,
    Nt = _n,
    St = xn,
    Bt = ft,
    Lt = kt,
    jt = (function () {
      function e(n, t) {
        (this.producer = n),
          (this.middleware = t),
          (this.executeChain = e.buildMiddlewareChain(
            this.middleware.concat(new Nt.ProducerMiddleware(n))
          ));
      }
      return (
        (e.createLogProducer = function (n) {
          return new e(new Lt.LogProducer(n.debugMode), n.middleware || []);
        }),
        (e.createHttpProducerWithEndpoint = function (n, t) {
          return (
            void 0 === t && (t = []), new e(Bt.HttpProducer.withEndpoint(n), t)
          );
        }),
        (e.createHttpProducer = function (n) {
          var t = n.options && n.options.keepalive;
          return new e(
            n.production
              ? new Bt.HttpProducer(Mt.PRODUCTION_DOMAIN, t)
              : new Bt.HttpProducer(Mt.DEVELOPMENT_DOMAIN, t),
            n.middleware || []
          );
        }),
        (e.buildMiddlewareChain = function (e, n) {
          var t = this;
          return (
            void 0 === n && (n = 0),
            n === e.length
              ? this.identityFn
              : function (o) {
                  return e[n].do(o, t.buildMiddlewareChain(e, n + 1));
                }
          );
        }),
        (e.prototype.produce = function (e) {
          return (
            (e.metadata = Rt.__assign(
              { eventCreatedAtMs: Date.now(), clientMessageId: (0, St.v4)() },
              e.metadata
            )),
            this.executeChain(e)
          );
        }),
        (e.prototype.produceBatch = function (e) {
          return this.executeChain(e);
        }),
        e
      );
    })();
  vn.Monorail = jt;
  var Ht = {};
  Object.defineProperty(Ht, "__esModule", { value: !0 }),
    (Ht.RetryMiddleware = void 0);
  var Ut = bn,
    Ft = vt,
    Gt = (function () {
      function e(e, n) {
        void 0 === e && (e = 3),
          void 0 === n && (n = 150),
          (this.maxRetries = e),
          (this.delayMs = n);
      }
      return (
        (e.prototype.do = function (e, n) {
          return Ut.__awaiter(this, void 0, void 0, function () {
            var t, o, r, a, i;
            return Ut.__generator(this, function (c) {
              switch (c.label) {
                case 0:
                  (t = 0), (c.label = 1);
                case 1:
                  if (!(t < this.maxRetries)) return [3, 7];
                  (r = void 0), (c.label = 2);
                case 2:
                  return c.trys.push([2, 4, , 6]), [4, n(e)];
                case 3:
                  return (r = c.sent()), [3, 6];
                case 4:
                  if (
                    ((a = c.sent()),
                    (o = o || new Error()),
                    (o = new Error(
                      ""
                        .concat(o.message, " Retry count:")
                        .concat(t + 1, " Error msg:")
                        .concat(a.message, "\n")
                    )),
                    a instanceof Ft.MonorailUnableToProduceError &&
                      (i = a.response.status) &&
                      i >= 400 &&
                      i < 500)
                  )
                    throw a;
                  return [4, this.delay(this.delayMs * Math.pow(2, t))];
                case 5:
                  return c.sent(), t++, [3, 1];
                case 6:
                  return [2, r];
                case 7:
                  throw (
                    (o
                      ? (o.message = "Retry count of "
                          .concat(
                            this.maxRetries,
                            " exceeded. Failed with error: \n"
                          )
                          .concat(o.message, " Aborting request for ")
                          .concat(JSON.stringify(e)))
                      : (o = new Error()),
                    new Ft.MonorailRetriesExceededError(o))
                  );
              }
            });
          });
        }),
        (e.prototype.delay = function (e) {
          return new Promise(function (n) {
            return setTimeout(n, e);
          });
        }),
        e
      );
    })();
  (Ht.RetryMiddleware = Gt),
    (function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RetryMiddleware =
          e.MonorailRetriesExceededError =
          e.MonorailUnableToProduceError =
          e.MonorailRequestError =
          e.Monorail =
            void 0);
      var n = vn;
      Object.defineProperty(e, "Monorail", {
        enumerable: !0,
        get: function () {
          return n.Monorail;
        },
      });
      var t = vt;
      Object.defineProperty(e, "MonorailRequestError", {
        enumerable: !0,
        get: function () {
          return t.MonorailRequestError;
        },
      }),
        Object.defineProperty(e, "MonorailUnableToProduceError", {
          enumerable: !0,
          get: function () {
            return t.MonorailUnableToProduceError;
          },
        }),
        Object.defineProperty(e, "MonorailRetriesExceededError", {
          enumerable: !0,
          get: function () {
            return t.MonorailRetriesExceededError;
          },
        });
      var o = Ht;
      Object.defineProperty(e, "RetryMiddleware", {
        enumerable: !0,
        get: function () {
          return o.RetryMiddleware;
        },
      });
    })(gn);
  var Kt,
    Vt,
    qt,
    Wt = (function () {
      function e(e) {
        var n = void 0 === e ? {} : e,
          t = n.shopDomain,
          o = n.isHeadless;
        (this.VISIT_TOKEN = "_shopify_s"),
          (this.shopDomain = t),
          (this.isHeadless = o),
          (this.monorail = gn.Monorail.createHttpProducer({ production: !0 }));
      }
      return (
        (e.prototype.shouldEmit = function () {
          return !(this.isHeadless && !0);
        }),
        (e.prototype.emitInteraction = function (e, n) {
          if ((void 0 === n && (n = ""), this.shouldEmit())) {
            var t = this.getCommonPayload();
            this.monorail.produce({
              schemaId: "privacy_banner_interact/1.1",
              payload: o(o(o({}, t), n && { interactionMetadata: n }), {
                interactionType: e,
              }),
            });
          }
        }),
        (e.prototype.emitRender = function () {
          if (this.shouldEmit()) {
            var e = this.getCommonPayload();
            this.monorail.produce({
              schemaId: "privacy_banner_render/1.0",
              payload: o({}, e),
            });
          }
        }),
        (e.prototype.visitorRegion = function () {
          var e = document.cookie.split(";").find(function (e) {
            return e.includes("_tracking_consent=");
          });
          if (!e) return null;
          var n = {};
          try {
            n = JSON.parse(unescape(e.split("=")[1]));
          } catch (e) {
            return null;
          }
          return n.region || null;
        }),
        (e.prototype.getCommonPayload = function () {
          var e,
            n =
              this.shopDomain ||
              (null === (e = window.Shopify) || void 0 === e ? void 0 : e.shop),
            t = sn(this.VISIT_TOKEN) || "0",
            r = window.location.pathname,
            a = this.visitorRegion();
          return o(
            {
              shopPermanentDomain: n,
              sessionToken: t,
              regulation: "CMP",
              path: r,
            },
            a && { region: a }
          );
        }),
        e
      );
    })();
  function zt(e, n) {
    return (
      (null == n ? void 0 : n.id) && e.setAttribute("id", n.id),
      (null == n ? void 0 : n.class) && e.setAttribute("class", n.class),
      (null == n ? void 0 : n.onClick) &&
        e.addEventListener("click", n.onClick),
      (null == n ? void 0 : n.appendTo) && n.appendTo.appendChild(e),
      (null == n ? void 0 : n.role) && e.setAttribute("role", n.role),
      (null == n ? void 0 : n.autofocus) && e.setAttribute("autofocus", ""),
      (null == n ? void 0 : n.ariaHidden) &&
        e.setAttribute(
          "aria-hidden",
          "".concat(null == n ? void 0 : n.ariaHidden)
        ),
      e
    );
  }
  function Yt(e) {
    var n = zt(document.createElement("div"), e);
    return (
      (null == e ? void 0 : e.text) && (n.textContent = e.text),
      (null == e ? void 0 : e.ariaModal) &&
        n.setAttribute("aria-modal", e.ariaModal),
      (null == e ? void 0 : e.ariaLabelledby) &&
        n.setAttribute("aria-labelledby", e.ariaLabelledby),
      n
    );
  }
  function $t(e) {
    var n = zt(document.createElement("span"), e);
    return (null == e ? void 0 : e.text) && (n.textContent = e.text), n;
  }
  function Jt(e) {
    var n,
      t = zt(document.createElement("button"), e);
    return (
      (t.textContent =
        null !== (n = null == e ? void 0 : e.text) && void 0 !== n ? n : null),
      e.disabled && t.setAttribute("disabled", ""),
      e.ariaHaspopup && t.setAttribute("aria-haspopup", e.ariaHaspopup),
      e.type && t.setAttribute("type", e.type),
      e.ariaLabel && t.setAttribute("aria-label", e.ariaLabel),
      t
    );
  }
  function Xt(e) {
    var n = zt(document.createElement("p"), e);
    return (n.textContent = e.text), n;
  }
  function Zt(e, n) {
    var t = zt(document.createElement(e), n);
    return (t.textContent = n.text), t;
  }
  function Qt(e) {
    return Zt(qt.H2, e);
  }
  function eo(e) {
    return Zt(qt.H3, e);
  }
  function no(e) {
    var n = zt(document.createElement("style"), e);
    return (n.textContent = e.content), n;
  }
  function to(e) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.setAttributeNS(null, "width", e.width),
      n.setAttributeNS(null, "height", e.height),
      n.setAttributeNS(
        null,
        "viewBox",
        "0 0 ".concat(e.width, " ").concat(e.height)
      ),
      (null == e ? void 0 : e.fillRule) &&
        n.setAttributeNS(null, "fill-rule", e.fillRule),
      (null == e ? void 0 : e.clipRule) &&
        n.setAttributeNS(null, "clip-rule", e.clipRule);
    var t = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (
      t.setAttributeNS(null, "fill", (null == e ? void 0 : e.colour) || "#000"),
      t.setAttributeNS(null, "d", e.path),
      n.appendChild(t),
      (null == e ? void 0 : e.id) && n.setAttribute("id", e.id),
      (null == e ? void 0 : e.class) && n.setAttribute("class", e.class),
      (null == e ? void 0 : e.dataIconType) &&
        n.setAttribute("data-icon-type", e.dataIconType),
      (null == e ? void 0 : e.ariaHidden) &&
        n.setAttribute(
          "aria-hidden",
          "".concat(null == e ? void 0 : e.ariaHidden)
        ),
      (null == e ? void 0 : e.focusable) &&
        n.setAttribute(
          "focusable",
          "".concat(null == e ? void 0 : e.focusable)
        ),
      (null == e ? void 0 : e.appendTo) && e.appendTo.appendChild(n),
      n
    );
  }
  function oo(e) {
    var n = zt(document.createElement("section"), e);
    return (
      (null == e ? void 0 : e.text) && (n.textContent = e.text),
      (null == e ? void 0 : e.ariaModal) &&
        n.setAttribute("aria-modal", e.ariaModal),
      (null == e ? void 0 : e.ariaLabelledby) &&
        n.setAttribute("aria-labelledby", e.ariaLabelledby),
      n
    );
  }
  function ro(e) {
    var n = e.bannerData,
      t = oo({
        id: $e.DialogId,
        class: $e.DialogClass,
        role: "alertdialog",
        ariaModal: "false",
        ariaLabelledby: $e.BodyTitleId,
      }),
      o = Yt({ class: $e.WrapperClass });
    t.appendChild(o);
    var r = Yt({ class: $e.BodyClass });
    o.appendChild(r);
    var a = Yt({ class: $e.ButtonsClass });
    return (
      o.appendChild(a),
      (function (e, n) {
        if (e.title) {
          var t = Qt({ id: $e.BodyTitleId, text: e.title });
          n.appendChild(t);
        }
      })(n, r),
      (function (e, n) {
        var t = Xt({ text: "".concat(e.text, " ") }),
          o = (function (e) {
            var n = zt(document.createElement("a"), e);
            return (
              n.setAttribute("href", e.href),
              (n.textContent = e.text),
              n.setAttribute(
                "target",
                void 0 === e.target ? "_blank" : e.target
              ),
              (e.target && "_blank" !== e.target) ||
                n.setAttribute("rel", "noopener noreferrer"),
              n
            );
          })({
            id: $e.BodyCopyPolicyLinkId,
            href: e.policyLinkUrl,
            target: "_blank",
            text: e.policyLinkText ? e.policyLinkText : "Privacy Policy",
          });
        t.appendChild(o), n.appendChild(t);
      })(n, r),
      (function (e, n) {
        var t = $t({ text: e.buttonPrefsOpenText }),
          o = Jt({
            id: $e.ButtonManagePrefsId,
            class: $e.ButtonManagePrefsClass,
            ariaHaspopup: "dialog",
            type: "button",
          });
        o.appendChild(t), n.appendChild(o);
      })(n, a),
      a.classList.add($e.ButtonsGranularClass),
      (function (e, n) {
        n.appendChild(
          Jt({
            id: $e.ButtonAcceptId,
            class: $e.ButtonAcceptClass,
            type: "button",
            text: e.buttonAcceptText,
          })
        );
      })(n, a),
      (function (e, n) {
        n.appendChild(
          Jt({
            id: $e.ButtonDeclineId,
            class: $e.ButtonDeclineClass,
            type: "button",
            text: e.buttonDeclineText,
          })
        );
      })(n, a),
      t
    );
  }
  function ao(e, n) {
    var t,
      o,
      r,
      a,
      i = ((t = { appendTo: e }), zt(document.createElement("header"), t));
    (o = i),
      (r = "Close dialog"),
      to({
        appendTo: (a = Jt({
          id: Je.HeaderCloseId,
          class: Je.HeaderCloseClass,
          ariaLabel: r,
          type: "button",
          text: "",
        })),
        ariaHidden: !0,
        width: "12",
        height: "12",
        path: "M7.41401 6.00012L11.707 1.70721C12.098 1.31622 12.098 0.684236 11.707 0.293244C11.316 -0.097748 10.684 -0.097748 10.293 0.293244L6.00001 4.58615L1.70701 0.293244C1.31601 -0.097748 0.684006 -0.097748 0.293006 0.293244C-0.0979941 0.684236 -0.0979941 1.31622 0.293006 1.70721L4.58601 6.00012L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.4141L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00012Z",
      }),
      o.appendChild(a),
      Qt({ id: Je.HeaderTitleId, text: n.preferences.title, appendTo: i });
    var c = Yt({ class: Je.HeaderActionsClass, appendTo: i });
    return (
      (function (e, n) {
        e.appendChild(Jt({ id: Je.HeaderAcceptId, type: "button", text: n }));
      })(c, n.preferences.buttonAcceptText),
      (function (e, n) {
        e.appendChild(Jt({ id: Je.HeaderDeclineId, type: "button", text: n }));
      })(c, n.preferences.buttonDeclineText),
      (function (e, n) {
        e.appendChild(Jt({ id: Je.HeaderSaveId, type: "button", text: n }));
      })(c, n.preferences.buttonSaveText),
      i
    );
  }
  function io(e, n) {
    var t = Yt({ class: Je.IntroClass, appendTo: e });
    return (
      (function (e, n) {
        var t = Yt({ class: Je.IntroMainClass, appendTo: e });
        eo({ text: n.preferences.introTitle, appendTo: t }),
          Xt({ text: n.preferences.introText, appendTo: t });
      })(t, n),
      n.preferences.bulletPoints.enabled &&
        (function (e, n) {
          var t = Yt({ class: Je.IntroExplainWrapperClass, appendTo: e }),
            o = Yt({ class: Je.IntroExplainAcceptClass, appendTo: t });
          eo({ text: n.preferences.bulletPoints.title || "", appendTo: o });
          var r = [];
          n.preferences.bulletPoints.firstText &&
            r.push(n.preferences.bulletPoints.firstText);
          n.preferences.bulletPoints.secondText &&
            r.push(n.preferences.bulletPoints.secondText);
          n.preferences.bulletPoints.thirdText &&
            r.push(n.preferences.bulletPoints.thirdText);
          (function (e) {
            var n = zt(document.createElement("ul"), e);
            e.lis &&
              e.lis.forEach(function (e) {
                var t = document.createElement("li");
                (t.textContent = e), n.appendChild(t);
              });
          })({ lis: r, appendTo: o });
        })(t, n),
      t
    );
  }
  function co(e) {
    var n = e.themeColours,
      t = e.purpose,
      o = e.ids,
      r = e.parent,
      a = o.input === Je.OptionEssentialInputId,
      i = to({
        dataIconType: "unchecked",
        width: "24",
        height: "24",
        path: "M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z",
        colour: n.iconColor,
        focusable: !0,
      }),
      c = (function (e) {
        return to({
          dataIconType: "checked",
          width: "24",
          height: "24",
          path: "M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z",
          colour: e,
          focusable: !0,
        });
      })(n.iconColor),
      s = Yt({ class: Je.OptionClass, id: o.section }),
      l = (function (e) {
        var n = zt(document.createElement("label"), e);
        return (
          n.setAttribute("for", e.for),
          (null == e ? void 0 : e.text) && (n.textContent = e.text),
          n
        );
      })({ appendTo: s, for: o.input, text: t.description });
    !(function (e) {
      var n = zt(document.createElement("input"), e);
      n.setAttribute("type", e.type),
        e.checked && n.setAttribute("checked", "true"),
        e.disabled && n.setAttribute("disabled", "".concat(e.disabled)),
        (null == e ? void 0 : e.onChange) &&
          n.addEventListener("change", e.onChange),
        e.tabindex && n.setAttribute("tabindex", "".concat(e.tabindex)),
        !0 === e.ariaReadonly &&
          n.setAttribute("aria-readonly", "".concat(e.ariaReadonly));
    })({
      appendTo: l,
      id: o.input,
      type: "checkbox",
      checked: a,
      ariaReadonly: a,
      tabindex: "0",
    });
    var d = $t({ appendTo: l, ariaHidden: !0 });
    d.appendChild(c),
      d.appendChild(i),
      Xt({ appendTo: s, text: t.longDescription }),
      a
        ? ((c.style.display = "block"), (i.style.display = "none"))
        : ((c.style.display = "none"), (i.style.display = "block")),
      r.appendChild(s);
  }
  function so(e) {
    var n = e.bannerData,
      t = Yt({ id: Je.WrapperId, class: Je.WrapperClass }),
      o = Yt({ id: Je.OverlayId, class: Je.OverlayClass, text: " " });
    t.appendChild(o);
    var r = oo({
      id: Je.DialogId,
      class: Je.DialogClass,
      role: "dialog",
      ariaModal: "true",
      ariaLabelledby: Je.HeaderTitleId,
    });
    t.appendChild(r), ao(r, n);
    var a = Yt({ class: Je.DialogScrollableClass });
    return (
      r.appendChild(a),
      io(a, n),
      (function (e, n) {
        var t = tn(
            n.theme.theme,
            n.theme.fontColor,
            n.theme.backgroundColor,
            n.theme.buttonFontColor,
            n.theme.buttonBackgroundColor
          ),
          o = Yt({ class: Je.OptionWrapperClass });
        e.appendChild(o),
          co({
            themeColours: t,
            ids: {
              section: Je.OptionEssentialId,
              input: Je.OptionEssentialInputId,
            },
            purpose: {
              description: n.preferences.purposes.essentialName,
              longDescription: n.preferences.purposes.essentialDesc,
            },
            parent: o,
          }),
          co({
            themeColours: t,
            ids: {
              section: Je.OptionPreferencesId,
              input: Je.OptionPreferencesInputId,
            },
            purpose: {
              description: n.preferences.purposes.preferencesName,
              longDescription: n.preferences.purposes.preferencesDesc,
            },
            parent: o,
          }),
          co({
            themeColours: t,
            ids: {
              section: Je.OptionMarketingId,
              input: Je.OptionMarketingInputId,
            },
            purpose: {
              description: n.preferences.purposes.marketingName,
              longDescription: n.preferences.purposes.marketingDesc,
            },
            parent: o,
          }),
          co({
            themeColours: t,
            ids: {
              section: Je.OptionAnalyticsId,
              input: Je.OptionAnalyticsInputId,
            },
            purpose: {
              description: n.preferences.purposes.performanceName,
              longDescription: n.preferences.purposes.performanceDesc,
            },
            parent: o,
          });
      })(a, n),
      t
    );
  }
  !(function (e) {
    (e.Accepted = "accept"),
      (e.Declined = "decline"),
      (e.AcceptedAll = "accept_all"),
      (e.DeclinedAll = "decline_all"),
      (e.ManagePreferences = "manage_preferences"),
      (e.Save = "save"),
      (e.LeavePreferences = "leave_preferences"),
      (e.PrivacyPolicyView = "privacy_policy_view");
  })(Kt || (Kt = {})),
    (function (e) {
      (e.BottomFullWidth = "bottom-full-width"),
        (e.BottomLeft = "bottom-left"),
        (e.Center = "center"),
        (e.BottomRight = "bottom-right"),
        (e.BottomCenter = "bottom-center");
    })(Vt || (Vt = {})),
    (function (e) {
      (e.H1 = "h1"), (e.H2 = "h2"), (e.H3 = "h3");
    })(qt || (qt = {}));
  var lo,
    uo = (function () {
      function e(e) {
        var n = e.bannerData,
          t = e.storefrontAccessToken,
          o = e.checkoutRootDomain,
          r = e.storefrontRootDomain;
        (this.bannerData = n),
          t
            ? ((this.storefrontAccessToken = t),
              (this.checkoutRootDomain = o),
              (this.storefrontRootDomain = r),
              (this.logger = new Wt({ shopDomain: o, isHeadless: !0 })))
            : (this.logger = new Wt());
      }
      return (
        (e.show = function () {
          var e = document.getElementById(Je.WrapperId);
          null !== e &&
            ((e.style.display = "block"),
            document.body.style.setProperty("overflow", "hidden"));
        }),
        (e.hide = function () {
          var e = document.getElementById(Je.WrapperId);
          null !== e &&
            ((e.style.display = "none"),
            document.body.style.removeProperty("overflow"));
        }),
        (e.hideModalAndBanner = function () {
          e.hide();
          var n = document.getElementById($e.DialogId);
          null !== n && (n.style.display = "none");
        }),
        (e.selectedConsent = function () {
          var e = document.getElementById(Je.OptionMarketingInputId),
            n = document.getElementById(Je.OptionAnalyticsInputId),
            t = document.getElementById(Je.OptionPreferencesInputId),
            o = e.checked ? "1" : "0",
            r = n.checked ? "1" : "0",
            a = t.checked ? "1" : "0";
          return "".concat(o).concat(r).concat(a);
        }),
        (e.prototype.init = function () {
          return s(this, void 0, void 0, function () {
            return l(this, function (e) {
              return this.render(), [2];
            });
          });
        }),
        (e.prototype.setCheckboxesToCurrentConsent = function () {
          var e = document.getElementById(Je.OptionAnalyticsInputId),
            n = document.getElementById(Je.OptionPreferencesInputId),
            t = document.getElementById(Je.OptionMarketingInputId);
          this.handleOptionChange({
            target: e,
            isReadOnly: !1,
            sectionId: Je.OptionAnalyticsId,
            checked: He(),
          }),
            this.handleOptionChange({
              target: n,
              isReadOnly: !1,
              sectionId: Je.OptionPreferencesId,
              checked: Ue(),
            }),
            this.handleOptionChange({
              target: t,
              isReadOnly: !1,
              sectionId: Je.OptionMarketingId,
              checked: je(),
            });
        }),
        (e.prototype.render = function () {
          this.addCSS(this.bannerData),
            this.addHTML(this.bannerData),
            e.show(),
            this.setupCheckboxEventHandlers(),
            this.setupButtonEventHandlers(),
            this.setupKeyboardEventHandlers(),
            this.logger.emitInteraction(Kt.ManagePreferences);
        }),
        (e.prototype.addCSS = function (e) {
          var n = (function (e) {
              var n = e.bannerData,
                t = e.selectorPrefix,
                o = t ? "".concat(t, " ") : "",
                r = tn(
                  n.theme.theme,
                  n.theme.fontColor,
                  n.theme.backgroundColor,
                  n.theme.buttonFontColor,
                  n.theme.buttonBackgroundColor
                );
              return "\n    "
                .concat(o, ".")
                .concat(
                  Je.WrapperClass,
                  " {\n      position: relative;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.WrapperClass,
                  ':after {\n      content: "";\n      display: block;\n      clear: both;\n    }\n\n    '
                )
                .concat(o, ".")
                .concat(
                  Je.DialogClass,
                  " {\n      box-shadow: 0 5px 10px rgb(63 63 68 / 50%);\n      position: fixed;\n      z-index: 2000002;\n      opacity: 1;\n      background-color: "
                )
                .concat(
                  r.backgroundColor,
                  ";\n      max-height: 80%;\n      overflow-y: auto;\n      top: 50%;\n      transform: translate(0, -50%);\n      min-width: 280px;\n      border-radius: 3px;\n      display: flex;\n      flex-direction: column;\n      left: 25%;\n      width: 50%;\n      text-align: left;\n    }\n    @media only screen and (max-width: 1900px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.DialogClass,
                  " {\n        left: 20%;\n        width: 60%;\n      }\n    }\n    @media only screen and (max-width: 1600px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.DialogClass,
                  " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 1350px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.DialogClass,
                  " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.OverlayClass,
                  " {\n      z-index: 2000001;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.6);\n    }\n\n    /* Header */\n\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.DialogClass,
                  " header {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      padding: 32px 32px 20px 32px;\n      border-bottom: 1px solid "
                )
                .concat(
                  r.sectionDivider,
                  ";\n      position: relative;\n      background: transparent;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.DialogClass,
                  " header {\n        flex-direction: column;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.DialogClass,
                  " header {\n        padding: 15px 20px 10px 20px;\n      }\n    }\n    "
                )
                .concat(o, ".")
                .concat(Je.DialogClass, " header h2 {\n      color: ")
                .concat(
                  r.fontColor,
                  ";\n      font-family: inherit;\n      margin: 0;\n      padding: 0 20px 0 0 !important;\n      font-weight: 600;\n      font-size: 130%;\n      line-height: 1.2;\n      width: 100%;\n      text-align: left;\n      word-break: normal;\n    }\n    @media only screen and (max-width: 1200px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.DialogClass,
                  " header h2 {\n        margin: 0 0 .8em 0;\n        padding: 0 !important;\n        text-align: center;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.DialogClass,
                  " header h2 {\n        text-align: left;\n        padding: 0 25px 0 0 !important;\n      }\n    }\n\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderCloseClass,
                  " {\n      position: absolute;\n      top: 40px;\n      right: 35px;\n      width: 24px;\n      height: 24px;\n      padding: 0;\n      margin: 0;\n      background: transparent;\n      border: none;\n      outline: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n      border-radius: 50%;\n      min-width: 24px;\n    }\n\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderCloseClass,
                  " svg {\n      height: 12px;\n      width: 12px;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderCloseClass,
                  " {\n        top: 20px;\n        right: 20px;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderCloseClass,
                  " {\n        top: 30px;\n        right: 30px;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderCloseClass,
                  " {\n        top: 15px;\n        right: 15px;\n      }\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderCloseClass,
                  ":hover {\n      cursor: pointer;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderCloseClass,
                  ":focus {\n      outline: none;\n      box-shadow: 0 0 0 3px "
                )
                .concat(r.focused, ";\n    }\n    ")
                .concat(o, ".")
                .concat(Je.HeaderCloseClass, " svg path {\n      fill: ")
                .concat(r.fontColor, ";\n    }\n    ")
                .concat(o, ".")
                .concat(
                  Je.HeaderCloseClass,
                  ":disabled svg path {\n      fill: "
                )
                .concat(r.sectionDivider, ";\n    }\n\n    ")
                .concat(o, ".")
                .concat(
                  Je.HeaderActionsClass,
                  " {\n      margin: 0;\n      display: flex;\n      justify-content: space-around;\n      flex-direction: row;\n      padding: 0 50px 0 0;\n      width: auto;\n    }\n\n    @media only screen and (max-width: 750px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderActionsClass,
                  " {\n        flex-direction: column;\n        width: 100%;\n      }\n    }\n    @media only screen and (max-width: 1200px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderActionsClass,
                  " {\n        padding: 0;\n      }\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderActionsClass,
                  " button {\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px 10px 25px;\n      margin: 0 20px 0 0;\n      font-size: 110%;\n      background: "
                )
                .concat(r.button.backgroundColor, ";\n      color: ")
                .concat(r.button.fontColor, ";\n      border: 1px solid ")
                .concat(
                  r.button.borderColor,
                  ";\n      white-space: nowrap;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n    }\n    @media only screen and (max-width: 750px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderActionsClass,
                  " button {\n        width: 100%;\n        margin-bottom: 15px;\n      }\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderActionsClass,
                  " button.primary {\n      background: "
                )
                .concat(r.primaryButton.backgroundColor, ";\n      color: ")
                .concat(
                  r.primaryButton.fontColor,
                  ";\n      border: 1px solid "
                )
                .concat(r.primaryButton.borderColor, ";\n    }\n    ")
                .concat(o, ".")
                .concat(
                  Je.HeaderActionsClass,
                  " button:last-child {\n      margin-right: 0;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderActionsClass,
                  " button:hover {\n      cursor: pointer;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.HeaderActionsClass,
                  " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px "
                )
                .concat(r.focused, ";\n    }\n\n    ")
                .concat(o, ".")
                .concat(
                  Je.DialogScrollableClass,
                  " {\n      overflow-y: scroll;\n      position: relative;\n    }\n\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.DialogScrollableClass,
                  "::-webkit-scrollbar {\n      width: 0px;\n      background: transparent;\n    }\n\n    /* Intro */\n\n    "
                )
                .concat(o, ".")
                .concat(Je.IntroClass, " h3 {\n      color: ")
                .concat(
                  r.fontColor,
                  ";\n      font-family: inherit;\n      margin: 0 0 15px 0;\n      padding: 0 !important;\n      font-weight: 600;\n      line-height: 1.2;\n      text-align: left;\n    }\n    "
                )
                .concat(o, ".")
                .concat(Je.IntroClass, " p {\n      color: ")
                .concat(
                  r.fontSubduedColor,
                  ";\n      font-family: inherit;\n      margin: 0;\n      padding: 0;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroClass,
                  " ul {\n      margin: 0;\n      padding: 0;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroClass,
                  " ul li {\n      margin: 0 0 0.5em 1.7em;\n      padding: 0;\n      line-height: 1.2;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroMainClass,
                  " {\n      padding: 20px 32px 0 32px;\n      line-height: 1.5;\n    }\n    @media only screen and (max-width: 400px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroMainClass,
                  " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroMainClass,
                  " p {\n      padding-bottom: 20px;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroMainClass,
                  " h3 {\n      font-size: 110%;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroMainClass,
                  " p {\n      font-size: 105%;\n      margin: 0;\n      padding: 0;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroExplainWrapperClass,
                  " {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      margin: 0;\n      padding: 20px 32px 0 32px;\n      color: "
                )
                .concat(
                  r.fontSubduedColor,
                  ";\n    }\n    @media only screen and (max-width: 700px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroExplainWrapperClass,
                  " {\n        flex-direction: column;\n        padding-bottom: 0;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroExplainWrapperClass,
                  " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroExplainAcceptClass,
                  " {\n      width: 100%;\n      padding: 0 40px 0 0;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroExplainAcceptClass,
                  " li {\n      list-style-type: disc;\n    }\n    @media only screen and (max-width: 700px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroExplainAcceptClass,
                  " {\n        width: 100%;\n        padding-right: 0;\n      }\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.IntroExplainAcceptClass,
                  " h3 {\n      font-size: 110%;\n    }\n\n    /* Options */\n\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.OptionWrapperClass,
                  " {\n      padding: 0 32px 32px 32px;\n      color: "
                )
                .concat(
                  r.fontColor,
                  ";\n    }\n    @media only screen and (max-width: 400px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.OptionWrapperClass,
                  " {\n        padding: 0 20px 15px 20px;\n      }\n    }\n\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  " {\n      margin: 0;\n      font-size: 100%;\n      line-height: 1.1;\n      padding: 20px 0 0 0;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  ":first-child {\n      padding: 25px 0 0 0;\n      margin: 20px 0 0 0;\n      border-top: 1px solid "
                )
                .concat(r.sectionDivider, ";\n    }\n    ")
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  " label {\n      display: flex;\n      gap: 20px;\n      color: "
                )
                .concat(
                  r.fontColor,
                  ";\n      cursor: pointer;\n      font-family: inherit;\n      margin: 0 0 5px 0;\n      padding: 0;\n      font-weight: 600;\n      font-size: 110%;\n      line-height: 1.2;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  " label input {\n      position: absolute;\n      clip: rect(1px, 1px, 1px, 1px);\n      padding: 0;\n      border: 0;\n      height: 1px;\n      width: 1px;\n      overflow: hidden;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  " label span {\n      order: -1;\n      display: inline-block;\n      background-color: "
                )
                .concat(
                  r.backgroundColor,
                  ";\n      width: 24px;\n      height: 24px;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  " label span svg {\n      background-color: "
                )
                .concat(
                  r.backgroundColor,
                  ";\n      border-radius: 3px;\n    }\n    "
                )
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  ' label input[aria-readonly="true"] ~ span svg {\n      opacity: 0.2;\n      cursor: not-allowed;\n    }\n    '
                )
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  " label input:focus ~ span {\n      background-color: "
                )
                .concat(r.focused, ";\n    }\n    ")
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  " label input:focus ~ span svg {\n      outline: none;\n      border-radius: 5px;\n      box-shadow: 0 0 0 4px "
                )
                .concat(r.focused, ";\n    }\n    ")
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  " p {\n      line-height: 1.3;\n      font-size: 100%;\n      color: "
                )
                .concat(
                  r.fontSubduedColor,
                  ";\n      margin: 0;\n      padding: 0 0 0 45px;\n    }\n    @media only screen and (max-width: 700px) {\n      "
                )
                .concat(o, ".")
                .concat(
                  Je.OptionClass,
                  " p {\n        width: 100%;\n        line-height: 1.4;\n      }\n    }\n  "
                );
            })({ bannerData: e }),
            t = no({ id: Je.StylesContainerId, content: n });
          document.head.appendChild(t);
        }),
        (e.prototype.addHTML = function (n) {
          var t,
            o,
            r,
            a = so({ bannerData: n }),
            i = document.getElementById($e.DialogId);
          (o = a),
            null === (r = null == (t = i) ? void 0 : t.parentNode) ||
              void 0 === r ||
              r.insertBefore(o, t.nextSibling);
          var c = document.getElementById(Je.DialogId);
          c &&
            (this.setCheckboxesToCurrentConsent(),
            (c.dataset.consent = e.selectedConsent())),
            e.hide();
        }),
        (e.prototype.handleOptionChange = function (n) {
          var t = n.target,
            o = n.isReadOnly,
            r = n.sectionId,
            a = n.checked;
          ((void 0 !== a && a) || o) && (t.checked = !0);
          var i,
            c,
            s,
            l = t.checked,
            d = document.getElementById(r),
            u = d.querySelector('svg[data-icon-type="checked"]'),
            p = d.querySelector('svg[data-icon-type="unchecked"]');
          l
            ? ((u.style.display = "block"), (p.style.display = "none"))
            : ((u.style.display = "none"), (p.style.display = "block")),
            (i = e.selectedConsent()),
            (c = document.getElementById(Je.DialogId)),
            (s = document.getElementById(Je.HeaderSaveId)),
            (null == c ? void 0 : c.dataset.consent) &&
            (null == c ? void 0 : c.dataset.consent) !== i
              ? (s.className = "primary")
              : (s.className = "");
        }),
        (e.prototype.setupCheckboxEventHandlers = function () {
          var e = this,
            n = document.getElementById(Je.OptionEssentialInputId);
          null == n ||
            n.addEventListener("change", function (n) {
              e.handleOptionChange({
                target: n.target,
                isReadOnly: !0,
                sectionId: Je.OptionEssentialId,
              });
            });
          var t = document.getElementById(Je.OptionAnalyticsInputId);
          null == t ||
            t.addEventListener("change", function (n) {
              e.handleOptionChange({
                target: n.target,
                isReadOnly: !1,
                sectionId: Je.OptionAnalyticsId,
              });
            });
          var o = document.getElementById(Je.OptionPreferencesInputId);
          null == o ||
            o.addEventListener("change", function (n) {
              e.handleOptionChange({
                target: n.target,
                isReadOnly: !1,
                sectionId: Je.OptionPreferencesId,
              });
            });
          var r = document.getElementById(Je.OptionMarketingInputId);
          null == r ||
            r.addEventListener("change", function (n) {
              e.handleOptionChange({
                target: n.target,
                isReadOnly: !1,
                sectionId: Je.OptionMarketingId,
              });
            });
        }),
        (e.prototype.setupButtonEventHandlers = function () {
          var n = this,
            t = document.getElementById(Je.HeaderCloseId);
          null == t ||
            t.addEventListener("click", function () {
              e.hide(), n.logger.emitInteraction(Kt.LeavePreferences);
            });
          var o = document.getElementById(Je.HeaderSaveId);
          null == o ||
            o.addEventListener("click", function () {
              if (pn()) e.hideModalAndBanner();
              else {
                var t = document.getElementById(Je.OptionMarketingInputId),
                  o = document.getElementById(Je.OptionAnalyticsInputId),
                  r = document.getElementById(Je.OptionPreferencesInputId),
                  a = t.checked,
                  i = o.checked,
                  c = r.checked;
                ln({
                  marketing: a,
                  analytics: i,
                  preferences: c,
                  checkoutRootDomain: n.checkoutRootDomain,
                  storefrontRootDomain: n.storefrontRootDomain,
                  storefrontAccessToken: n.storefrontAccessToken,
                  callback: e.hideModalAndBanner,
                }),
                  n.logger.emitInteraction(
                    Kt.Save,
                    ""
                      .concat(a ? "m" : "")
                      .concat(i ? "a" : "")
                      .concat(c ? "p" : "")
                  ),
                  e.hideModalAndBanner();
              }
            });
          var r = document.getElementById(Je.HeaderAcceptId);
          null == r ||
            r.addEventListener("click", function () {
              pn()
                ? e.hideModalAndBanner()
                : (ln({
                    marketing: !0,
                    analytics: !0,
                    preferences: !0,
                    checkoutRootDomain: n.checkoutRootDomain,
                    storefrontRootDomain: n.storefrontRootDomain,
                    storefrontAccessToken: n.storefrontAccessToken,
                    callback: e.hideModalAndBanner,
                  }),
                  n.logger.emitInteraction(Kt.AcceptedAll));
            });
          var a = document.getElementById(Je.HeaderDeclineId);
          null == a ||
            a.addEventListener("click", function () {
              pn()
                ? e.hideModalAndBanner()
                : (ln({
                    marketing: !1,
                    analytics: !1,
                    preferences: !1,
                    checkoutRootDomain: n.checkoutRootDomain,
                    storefrontRootDomain: n.storefrontRootDomain,
                    storefrontAccessToken: n.storefrontAccessToken,
                    callback: e.hideModalAndBanner,
                  }),
                  n.logger.emitInteraction(Kt.DeclinedAll));
            });
        }),
        (e.prototype.setupKeyboardEventHandlers = function () {
          var n = this,
            t = document.getElementById(Je.WrapperId);
          if (
            (null == t ||
              t.addEventListener("keydown", function (t) {
                if ("Escape" === t.code) {
                  e.hide(), n.logger.emitInteraction(Kt.LeavePreferences);
                  var o = document.getElementById($e.ButtonManagePrefsId);
                  null == o || o.focus();
                }
              }),
            t)
          ) {
            var o = function (e) {
              if ("Tab" === e.code) {
                e.preventDefault();
                var n = document.getElementById(Je.HeaderCloseId);
                null == n || n.focus();
              }
              window.removeEventListener("keydown", o);
            };
            window.addEventListener("keydown", o);
          }
        }),
        e
      );
    })(),
    po = (function () {
      function e(e) {
        var n = void 0 === e ? {} : e,
          t = n.storefrontAccessToken,
          o = n.checkoutRootDomain,
          r = n.storefrontRootDomain;
        this.storefrontAccessToken = t;
        var a = t;
        a && ((this.checkoutRootDomain = o), (this.storefrontRootDomain = r)),
          (this.logger = new Wt({ shopDomain: o, isHeadless: Boolean(a) })),
          (this.preferencesModal = void 0);
      }
      return (
        (e.show = function () {
          var e = document.getElementById($e.DialogId);
          if (null !== e) {
            e.style.display = "block";
            var n = function (e) {
              if ("Tab" === e.code) {
                e.preventDefault();
                var t = document.getElementById($e.ButtonManagePrefsId);
                null == t || t.focus();
              }
              window.removeEventListener("keydown", n);
            };
            window.addEventListener("keydown", n);
          }
        }),
        (e.hide = function () {
          var e = document.getElementById($e.DialogId);
          null !== e && (e.style.display = "none");
        }),
        (e.prototype.init = function () {
          return s(this, arguments, void 0, function (n) {
            var t;
            return (
              void 0 === n && (n = !1),
              l(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      this.removeExistingElements(),
                      [
                        4,
                        yn.getServerData(
                          this.checkoutRootDomain,
                          this.storefrontAccessToken
                        ),
                      ]
                    );
                  case 1:
                    if (((t = o.sent()), this.render(t), n)) {
                      if (!t || !Object.keys(t).length)
                        return (
                          console.warn(
                            "banner not rendered due to lack of saved data"
                          ),
                          [2]
                        );
                      (this.preferencesModal = new uo({
                        bannerData: t,
                        storefrontAccessToken: this.storefrontAccessToken,
                        checkoutRootDomain: this.checkoutRootDomain,
                        storefrontRootDomain: this.storefrontRootDomain,
                      })),
                        this.preferencesModal.init(),
                        e.hide();
                    }
                    return [2];
                }
              })
            );
          });
        }),
        (e.prototype.render = function (n) {
          if (n && Object.keys(n).length) {
            var t = n.enabled,
              o = window.Shopify.country,
              r = fn() && this.isCountryInRegionVisibility(o, n);
            (t || pn() || r) &&
              (this.addCSS(n),
              this.addBannerHTML(n),
              e.show(),
              fn() || this.logger.emitRender());
          }
        }),
        (e.prototype.isCountryInRegionVisibility = function (e, n) {
          var t;
          return null === (t = n.regionVisibility) || void 0 === t
            ? void 0
            : t.includes(e);
        }),
        (e.prototype.addCSS = function (e) {
          var n = no({
            id: $e.StylesContainerId,
            content: on({ bannerData: e }),
          });
          document.head.appendChild(n);
        }),
        (e.prototype.addBannerHTML = function (e) {
          var n = ro({ bannerData: e }),
            t = document.getElementsByTagName("body")[0];
          t.insertBefore(n, t.firstChild), this.addEventListeners(e);
        }),
        (e.prototype.removeExistingElements = function () {
          var e,
            n,
            t,
            o,
            r = document.getElementById($e.DialogId),
            a = document.getElementById($e.StylesContainerId),
            i = document.getElementById(Je.WrapperId),
            c = document.getElementById(Je.StylesContainerId);
          null === (e = null == r ? void 0 : r.parentNode) ||
            void 0 === e ||
            e.removeChild(r),
            null === (n = null == a ? void 0 : a.parentNode) ||
              void 0 === n ||
              n.removeChild(a),
            null === (t = null == i ? void 0 : i.parentNode) ||
              void 0 === t ||
              t.removeChild(i),
            null === (o = null == c ? void 0 : c.parentNode) ||
              void 0 === o ||
              o.removeChild(c);
        }),
        (e.prototype.addEventListeners = function (e) {
          var n = this;
          this.addEssentialEventListeners(),
            pn() || this.addMetricsEventListeners();
          var t = document.getElementById($e.ButtonManagePrefsId);
          null == t ||
            t.addEventListener("click", function () {
              (n.preferencesModal = new uo({
                bannerData: e,
                storefrontAccessToken: n.storefrontAccessToken,
                checkoutRootDomain: n.checkoutRootDomain,
                storefrontRootDomain: n.storefrontRootDomain,
              })),
                n.preferencesModal.init();
            });
        }),
        (e.prototype.addEssentialEventListeners = function () {
          var n = this,
            t = document.getElementById($e.ButtonAcceptId);
          null == t ||
            t.addEventListener("click", function () {
              pn()
                ? e.hide()
                : ln({
                    marketing: !0,
                    analytics: !0,
                    preferences: !0,
                    checkoutRootDomain: n.checkoutRootDomain,
                    storefrontRootDomain: n.storefrontRootDomain,
                    storefrontAccessToken: n.storefrontAccessToken,
                    callback: e.hide,
                  });
            });
          var o = document.getElementById($e.ButtonDeclineId);
          null == o ||
            o.addEventListener("click", function () {
              pn()
                ? e.hide()
                : ln({
                    marketing: !1,
                    analytics: !1,
                    preferences: !1,
                    checkoutRootDomain: n.checkoutRootDomain,
                    storefrontRootDomain: n.storefrontRootDomain,
                    storefrontAccessToken: n.storefrontAccessToken,
                    callback: e.hide,
                  });
            });
        }),
        (e.prototype.addMetricsEventListeners = function () {
          var e = this,
            n = document.getElementById($e.BodyCopyPolicyLinkId);
          null == n ||
            n.addEventListener("click", function () {
              e.logger.emitInteraction(Kt.PrivacyPolicyView);
            });
          var t = document.getElementById($e.ButtonAcceptId);
          null == t ||
            t.addEventListener("click", function () {
              e.logger.emitInteraction(Kt.Accepted);
            });
          var o = document.getElementById($e.ButtonDeclineId);
          null == o ||
            o.addEventListener("click", function () {
              e.logger.emitInteraction(Kt.Declined);
            });
        }),
        e
      );
    })();
  function fo() {
    return s(this, arguments, void 0, function (e) {
      var n,
        t,
        o,
        r = void 0 === e ? {} : e,
        a = r.storefrontAccessToken,
        i = r.checkoutRootDomain,
        c = r.storefrontRootDomain,
        s = r.showPreferences,
        d = void 0 !== s && s;
      return l(this, function (e) {
        return (
          i || (i = window.location.hostname),
          c || (c = window.location.hostname),
          (n = function () {
            (hn() || un() || d) &&
              new po({
                storefrontAccessToken: a,
                checkoutRootDomain: i,
                storefrontRootDomain: c,
              }).init(d);
          }),
          a
            ? ((t = Ge()),
              ln({
                marketing: (o = { yes: !0, no: !1 })[t.marketing],
                analytics: o[t.analytics],
                preferences: o[t.preferences],
                sale_of_data: o[t.sale_of_data],
                storefrontAccessToken: a,
                checkoutRootDomain: i,
                storefrontRootDomain: c,
                callback: n,
              }))
            : n(),
          [2]
        );
      });
    });
  }
  function ho() {
    (window.Shopify = window.Shopify || {}),
      (window.Shopify.customerPrivacy && window.Shopify.trackingConsent) ||
        ((window.Shopify.customerPrivacy = qe()),
        (window.Shopify.trackingConsent = qe()));
  }
  return (
    (lo = Boolean(window.Shopify)),
    ho(),
    lo && fo(),
    (e.loadBanner = fo),
    (e.showPreferences = function () {
      ho(), fo({ showPreferences: !0 });
    }),
    e
  );
})({});
