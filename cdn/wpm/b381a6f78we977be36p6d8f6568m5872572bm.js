(() => {
  var e = {
      482: function (e, t, n) {
        var o, i, r;
        !(function (s, a) {
          "use strict";
          (i = [n(550)]),
            void 0 ===
              (r =
                "function" ==
                typeof (o = function (e) {
                  var t = /(^|@)\S+:\d+/,
                    n = /^\s*at .*(\S+:\d+|\(native\))/m,
                    o = /^(eval@)?(\[native code])?$/;
                  return {
                    parse: function (e) {
                      if (
                        void 0 !== e.stacktrace ||
                        void 0 !== e["opera#sourceloc"]
                      )
                        return this.parseOpera(e);
                      if (e.stack && e.stack.match(n))
                        return this.parseV8OrIE(e);
                      if (e.stack) return this.parseFFOrSafari(e);
                      throw new Error("Cannot parse given Error object");
                    },
                    extractLocation: function (e) {
                      if (-1 === e.indexOf(":")) return [e];
                      var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(
                        e.replace(/[()]/g, "")
                      );
                      return [t[1], t[2] || void 0, t[3] || void 0];
                    },
                    parseV8OrIE: function (t) {
                      return t.stack
                        .split("\n")
                        .filter(function (e) {
                          return !!e.match(n);
                        }, this)
                        .map(function (t) {
                          t.indexOf("(eval ") > -1 &&
                            (t = t
                              .replace(/eval code/g, "eval")
                              .replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                          var n = t
                              .replace(/^\s+/, "")
                              .replace(/\(eval code/g, "(")
                              .replace(/^.*?\s+/, ""),
                            o = n.match(/ (\(.+\)$)/);
                          n = o ? n.replace(o[0], "") : n;
                          var i = this.extractLocation(o ? o[1] : n),
                            r = (o && n) || void 0,
                            s =
                              ["eval", "<anonymous>"].indexOf(i[0]) > -1
                                ? void 0
                                : i[0];
                          return new e({
                            functionName: r,
                            fileName: s,
                            lineNumber: i[1],
                            columnNumber: i[2],
                            source: t,
                          });
                        }, this);
                    },
                    parseFFOrSafari: function (t) {
                      return t.stack
                        .split("\n")
                        .filter(function (e) {
                          return !e.match(o);
                        }, this)
                        .map(function (t) {
                          if (
                            (t.indexOf(" > eval") > -1 &&
                              (t = t.replace(
                                / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                                ":$1"
                              )),
                            -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                          )
                            return new e({ functionName: t });
                          var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            o = t.match(n),
                            i = o && o[1] ? o[1] : void 0,
                            r = this.extractLocation(t.replace(n, ""));
                          return new e({
                            functionName: i,
                            fileName: r[0],
                            lineNumber: r[1],
                            columnNumber: r[2],
                            source: t,
                          });
                        }, this);
                    },
                    parseOpera: function (e) {
                      return !e.stacktrace ||
                        (e.message.indexOf("\n") > -1 &&
                          e.message.split("\n").length >
                            e.stacktrace.split("\n").length)
                        ? this.parseOpera9(e)
                        : e.stack
                        ? this.parseOpera11(e)
                        : this.parseOpera10(e);
                    },
                    parseOpera9: function (t) {
                      for (
                        var n = /Line (\d+).*script (?:in )?(\S+)/i,
                          o = t.message.split("\n"),
                          i = [],
                          r = 2,
                          s = o.length;
                        r < s;
                        r += 2
                      ) {
                        var a = n.exec(o[r]);
                        a &&
                          i.push(
                            new e({
                              fileName: a[2],
                              lineNumber: a[1],
                              source: o[r],
                            })
                          );
                      }
                      return i;
                    },
                    parseOpera10: function (t) {
                      for (
                        var n =
                            /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                          o = t.stacktrace.split("\n"),
                          i = [],
                          r = 0,
                          s = o.length;
                        r < s;
                        r += 2
                      ) {
                        var a = n.exec(o[r]);
                        a &&
                          i.push(
                            new e({
                              functionName: a[3] || void 0,
                              fileName: a[2],
                              lineNumber: a[1],
                              source: o[r],
                            })
                          );
                      }
                      return i;
                    },
                    parseOpera11: function (n) {
                      return n.stack
                        .split("\n")
                        .filter(function (e) {
                          return !!e.match(t) && !e.match(/^Error created at/);
                        }, this)
                        .map(function (t) {
                          var n,
                            o = t.split("@"),
                            i = this.extractLocation(o.pop()),
                            r = o.shift() || "",
                            s =
                              r
                                .replace(/<anonymous function(: (\w+))?>/, "$2")
                                .replace(/\([^)]*\)/g, "") || void 0;
                          r.match(/\(([^)]*)\)/) &&
                            (n = r.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                          var a =
                            void 0 === n || "[arguments not available]" === n
                              ? void 0
                              : n.split(",");
                          return new e({
                            functionName: s,
                            args: a,
                            fileName: i[0],
                            lineNumber: i[1],
                            columnNumber: i[2],
                            source: t,
                          });
                        }, this);
                    },
                  };
                })
                  ? o.apply(t, i)
                  : o) || (e.exports = r);
        })();
      },
      550: function (e, t) {
        var n, o, i;
        !(function (r, s) {
          "use strict";
          (o = []),
            void 0 ===
              (i =
                "function" ==
                typeof (n = function () {
                  function e(e) {
                    return e.charAt(0).toUpperCase() + e.substring(1);
                  }
                  function t(e) {
                    return function () {
                      return this[e];
                    };
                  }
                  var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                    o = ["columnNumber", "lineNumber"],
                    i = ["fileName", "functionName", "source"],
                    r = n.concat(o, i, ["args"], ["evalOrigin"]);
                  function s(t) {
                    if (t)
                      for (var n = 0; n < r.length; n++)
                        void 0 !== t[r[n]] && this["set" + e(r[n])](t[r[n]]);
                  }
                  (s.prototype = {
                    getArgs: function () {
                      return this.args;
                    },
                    setArgs: function (e) {
                      if (
                        "[object Array]" !== Object.prototype.toString.call(e)
                      )
                        throw new TypeError("Args must be an Array");
                      this.args = e;
                    },
                    getEvalOrigin: function () {
                      return this.evalOrigin;
                    },
                    setEvalOrigin: function (e) {
                      if (e instanceof s) this.evalOrigin = e;
                      else {
                        if (!(e instanceof Object))
                          throw new TypeError(
                            "Eval Origin must be an Object or StackFrame"
                          );
                        this.evalOrigin = new s(e);
                      }
                    },
                    toString: function () {
                      var e = this.getFileName() || "",
                        t = this.getLineNumber() || "",
                        n = this.getColumnNumber() || "",
                        o = this.getFunctionName() || "";
                      return this.getIsEval()
                        ? e
                          ? "[eval] (" + e + ":" + t + ":" + n + ")"
                          : "[eval]:" + t + ":" + n
                        : o
                        ? o + " (" + e + ":" + t + ":" + n + ")"
                        : e + ":" + t + ":" + n;
                    },
                  }),
                    (s.fromString = function (e) {
                      var t = e.indexOf("("),
                        n = e.lastIndexOf(")"),
                        o = e.substring(0, t),
                        i = e.substring(t + 1, n).split(","),
                        r = e.substring(n + 1);
                      if (0 === r.indexOf("@"))
                        var a = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(r, ""),
                          c = a[1],
                          l = a[2],
                          u = a[3];
                      return new s({
                        functionName: o,
                        args: i || void 0,
                        fileName: c,
                        lineNumber: l || void 0,
                        columnNumber: u || void 0,
                      });
                    });
                  for (var a = 0; a < n.length; a++)
                    (s.prototype["get" + e(n[a])] = t(n[a])),
                      (s.prototype["set" + e(n[a])] = (function (e) {
                        return function (t) {
                          this[e] = Boolean(t);
                        };
                      })(n[a]));
                  for (var c = 0; c < o.length; c++)
                    (s.prototype["get" + e(o[c])] = t(o[c])),
                      (s.prototype["set" + e(o[c])] = (function (e) {
                        return function (t) {
                          if (((n = t), isNaN(parseFloat(n)) || !isFinite(n)))
                            throw new TypeError(e + " must be a Number");
                          var n;
                          this[e] = Number(t);
                        };
                      })(o[c]));
                  for (var l = 0; l < i.length; l++)
                    (s.prototype["get" + e(i[l])] = t(i[l])),
                      (s.prototype["set" + e(i[l])] = (function (e) {
                        return function (t) {
                          this[e] = String(t);
                        };
                      })(i[l]));
                  return s;
                })
                  ? n.apply(t, o)
                  : n) || (e.exports = i);
        })();
      },
      47: function (e, t, n) {
        var o;
        !(function (i, r) {
          "use strict";
          var s = "function",
            a = "undefined",
            c = "object",
            l = "string",
            u = "major",
            d = "model",
            p = "name",
            f = "type",
            m = "vendor",
            h = "version",
            b = "architecture",
            w = "console",
            v = "mobile",
            g = "tablet",
            y = "smarttv",
            x = "wearable",
            E = "embedded",
            _ = "Amazon",
            k = "Apple",
            C = "ASUS",
            S = "BlackBerry",
            A = "Browser",
            T = "Chrome",
            I = "Firefox",
            N = "Google",
            O = "Huawei",
            P = "LG",
            D = "Microsoft",
            R = "Motorola",
            L = "Opera",
            $ = "Samsung",
            M = "Sharp",
            U = "Sony",
            j = "Xiaomi",
            F = "Zebra",
            B = "Facebook",
            z = "Chromium OS",
            V = "Mac OS",
            q = function (e) {
              for (var t = {}, n = 0; n < e.length; n++)
                t[e[n].toUpperCase()] = e[n];
              return t;
            },
            H = function (e, t) {
              return typeof e === l && -1 !== K(t).indexOf(K(e));
            },
            K = function (e) {
              return e.toLowerCase();
            },
            X = function (e, t) {
              if (typeof e === l)
                return (
                  (e = e.replace(/^\s\s*/, "")),
                  typeof t === a ? e : e.substring(0, 500)
                );
            },
            W = function (e, t) {
              for (var n, o, i, a, l, u, d = 0; d < t.length && !l; ) {
                var p = t[d],
                  f = t[d + 1];
                for (n = o = 0; n < p.length && !l && p[n]; )
                  if ((l = p[n++].exec(e)))
                    for (i = 0; i < f.length; i++)
                      (u = l[++o]),
                        typeof (a = f[i]) === c && a.length > 0
                          ? 2 === a.length
                            ? typeof a[1] == s
                              ? (this[a[0]] = a[1].call(this, u))
                              : (this[a[0]] = a[1])
                            : 3 === a.length
                            ? typeof a[1] !== s || (a[1].exec && a[1].test)
                              ? (this[a[0]] = u ? u.replace(a[1], a[2]) : r)
                              : (this[a[0]] = u ? a[1].call(this, u, a[2]) : r)
                            : 4 === a.length &&
                              (this[a[0]] = u
                                ? a[3].call(this, u.replace(a[1], a[2]))
                                : r)
                          : (this[a] = u || r);
                d += 2;
              }
            },
            G = function (e, t) {
              for (var n in t)
                if (typeof t[n] === c && t[n].length > 0) {
                  for (var o = 0; o < t[n].length; o++)
                    if (H(t[n][o], e)) return "?" === n ? r : n;
                } else if (H(t[n], e)) return "?" === n ? r : n;
              return e;
            },
            Y = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM",
            },
            J = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [h, [p, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [h, [p, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                ],
                [p, h],
                [/opios[\/ ]+([\w\.]+)/i],
                [h, [p, L + " Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [h, [p, L]],
                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                [h, [p, "Baidu"]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                  /(heytap|ovi)browser\/([\d\.]+)/i,
                  /(weibo)__([\d\.]+)/i,
                ],
                [p, h],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [h, [p, "UC" + A]],
                [
                  /microm.+\bqbcore\/([\w\.]+)/i,
                  /\bqbcore\/([\w\.]+).+microm/i,
                  /micromessenger\/([\w\.]+)/i,
                ],
                [h, [p, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [h, [p, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [h, [p, "IE"]],
                [/ya(?:search)?browser\/([\w\.]+)/i],
                [h, [p, "Yandex"]],
                [/slbrowser\/([\w\.]+)/i],
                [h, [p, "Smart Lenovo " + A]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[p, /(.+)/, "$1 Secure " + A], h],
                [/\bfocus\/([\w\.]+)/i],
                [h, [p, I + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [h, [p, L + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [h, [p, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [h, [p, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [h, [p, L + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [h, [p, "MIUI " + A]],
                [/fxios\/([-\w\.]+)/i],
                [h, [p, I]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[p, "360 " + A]],
                [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                [[p, /(.+)/, "$1 " + A], h],
                [/samsungbrowser\/([\w\.]+)/i],
                [h, [p, $ + " Internet"]],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[p, /_/g, " "], h],
                [/metasr[\/ ]?([\d\.]+)/i],
                [h, [p, "Sogou Explorer"]],
                [/(sogou)mo\w+\/([\d\.]+)/i],
                [[p, "Sogou Mobile"], h],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
                ],
                [p, h],
                [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                [p],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[p, B], h],
                [
                  /(Klarna)\/([\w\.]+)/i,
                  /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                  /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(alipay)client\/([\w\.]+)/i,
                  /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
                ],
                [p, h],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [h, [p, "GSA"]],
                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                [h, [p, "TikTok"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [h, [p, T + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[p, T + " WebView"], h],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [h, [p, "Android " + A]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [p, h],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [h, [p, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [h, p],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  p,
                  [
                    h,
                    G,
                    {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/",
                    },
                  ],
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [p, h],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[p, "Netscape"], h],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [h, [p, I + " Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i,
                  /panasonic;(viera)/i,
                ],
                [p, h],
                [/(cobalt)\/([\w\.]+)/i],
                [p, [h, /master.|lts./, ""]],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[b, "amd64"]],
                [/(ia32(?=;))/i],
                [[b, K]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[b, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[b, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[b, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[b, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[b, /ower/, "", K]],
                [/(sun4\w)[;\)]/i],
                [[b, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                ],
                [[b, K]],
              ],
              device: [
                [
                  /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                ],
                [d, [m, $], [f, g]],
                [
                  /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                  /samsung[- ]([-\w]+)/i,
                  /sec-(sgh\w+)/i,
                ],
                [d, [m, $], [f, v]],
                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                [d, [m, k], [f, v]],
                [
                  /\((ipad);[-\w\),; ]+apple/i,
                  /applecoremedia\/[\w\.]+ \((ipad)/i,
                  /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                ],
                [d, [m, k], [f, g]],
                [/(macintosh);/i],
                [d, [m, k]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [d, [m, M], [f, v]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [d, [m, O], [f, g]],
                [
                  /(?:huawei|honor)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                ],
                [d, [m, O], [f, v]],
                [
                  /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                ],
                [
                  [d, /_/g, " "],
                  [m, j],
                  [f, v],
                ],
                [
                  /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                  /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
                ],
                [
                  [d, /_/g, " "],
                  [m, j],
                  [f, g],
                ],
                [
                  /; (\w+) bui.+ oppo/i,
                  /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                ],
                [d, [m, "OPPO"], [f, v]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [d, [m, "Vivo"], [f, v]],
                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                [d, [m, "Realme"], [f, v]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                ],
                [d, [m, R], [f, v]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [d, [m, R], [f, g]],
                [
                  /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                ],
                [d, [m, P], [f, g]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i,
                ],
                [d, [m, P], [f, v]],
                [
                  /(ideatab[-\w ]+)/i,
                  /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                ],
                [d, [m, "Lenovo"], [f, g]],
                [
                  /(?:maemo|nokia).*(n900|lumia \d+)/i,
                  /nokia[-_ ]?([-\w\.]*)/i,
                ],
                [
                  [d, /_/g, " "],
                  [m, "Nokia"],
                  [f, v],
                ],
                [/(pixel c)\b/i],
                [d, [m, N], [f, g]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [d, [m, N], [f, v]],
                [
                  /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                ],
                [d, [m, U], [f, v]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [d, "Xperia Tablet"],
                  [m, U],
                  [f, g],
                ],
                [
                  / (kb2005|in20[12]5|be20[12][59])\b/i,
                  /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                ],
                [d, [m, "OnePlus"], [f, v]],
                [
                  /(alexa)webm/i,
                  /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                  /(kf[a-z]+)( bui|\)).+silk\//i,
                ],
                [d, [m, _], [f, g]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [d, /(.+)/g, "Fire Phone $1"],
                  [m, _],
                  [f, v],
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [d, m, [f, g]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [d, [m, S], [f, v]],
                [
                  /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                ],
                [d, [m, C], [f, g]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [d, [m, C], [f, v]],
                [/(nexus 9)/i],
                [d, [m, "HTC"], [f, g]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
                ],
                [m, [d, /_/g, " "], [f, v]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [d, [m, "Acer"], [f, g]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [d, [m, "Meizu"], [f, v]],
                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                [d, [m, "Ulefone"], [f, v]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i,
                ],
                [m, d, [f, v]],
                [
                  /(kobo)\s(ereader|touch)/i,
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i,
                ],
                [m, d, [f, g]],
                [/(surface duo)/i],
                [d, [m, D], [f, g]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [d, [m, "Fairphone"], [f, v]],
                [/(u304aa)/i],
                [d, [m, "AT&T"], [f, v]],
                [/\bsie-(\w*)/i],
                [d, [m, "Siemens"], [f, v]],
                [/\b(rct\w+) b/i],
                [d, [m, "RCA"], [f, g]],
                [/\b(venue[\d ]{2,7}) b/i],
                [d, [m, "Dell"], [f, g]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [d, [m, "Verizon"], [f, g]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [d, [m, "Barnes & Noble"], [f, g]],
                [/\b(tm\d{3}\w+) b/i],
                [d, [m, "NuVision"], [f, g]],
                [/\b(k88) b/i],
                [d, [m, "ZTE"], [f, g]],
                [/\b(nx\d{3}j) b/i],
                [d, [m, "ZTE"], [f, v]],
                [/\b(gen\d{3}) b.+49h/i],
                [d, [m, "Swiss"], [f, v]],
                [/\b(zur\d{3}) b/i],
                [d, [m, "Swiss"], [f, g]],
                [/\b((zeki)?tb.*\b) b/i],
                [d, [m, "Zeki"], [f, g]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[m, "Dragon Touch"], d, [f, g]],
                [/\b(ns-?\w{0,9}) b/i],
                [d, [m, "Insignia"], [f, g]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [d, [m, "NextBook"], [f, g]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[m, "Voice"], d, [f, v]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[m, "LvTel"], d, [f, v]],
                [/\b(ph-1) /i],
                [d, [m, "Essential"], [f, v]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [d, [m, "Envizen"], [f, g]],
                [/\b(trio[-\w\. ]+) b/i],
                [d, [m, "MachSpeed"], [f, g]],
                [/\btu_(1491) b/i],
                [d, [m, "Rotor"], [f, g]],
                [/(shield[\w ]+) b/i],
                [d, [m, "Nvidia"], [f, g]],
                [/(sprint) (\w+)/i],
                [m, d, [f, v]],
                [/(kin\.[onetw]{3})/i],
                [
                  [d, /\./g, " "],
                  [m, D],
                  [f, v],
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [d, [m, F], [f, g]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [d, [m, F], [f, v]],
                [/smart-tv.+(samsung)/i],
                [m, [f, y]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [d, /^/, "SmartTV"],
                  [m, $],
                  [f, y],
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [m, P],
                  [f, y],
                ],
                [/(apple) ?tv/i],
                [m, [d, k + " TV"], [f, y]],
                [/crkey/i],
                [
                  [d, T + "cast"],
                  [m, N],
                  [f, y],
                ],
                [/droid.+aft(\w+)( bui|\))/i],
                [d, [m, _], [f, y]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [d, [m, M], [f, y]],
                [/(bravia[\w ]+)( bui|\))/i],
                [d, [m, U], [f, y]],
                [/(mitv-\w{5}) bui/i],
                [d, [m, j], [f, y]],
                [/Hbbtv.*(technisat) (.*);/i],
                [m, d, [f, y]],
                [
                  /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                  /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
                ],
                [
                  [m, X],
                  [d, X],
                  [f, y],
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[f, y]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [m, d, [f, w]],
                [/droid.+; (shield) bui/i],
                [d, [m, "Nvidia"], [f, w]],
                [/(playstation [345portablevi]+)/i],
                [d, [m, U], [f, w]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [d, [m, D], [f, w]],
                [/((pebble))app/i],
                [m, d, [f, x]],
                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                [d, [m, k], [f, x]],
                [/droid.+; (glass) \d/i],
                [d, [m, N], [f, x]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [d, [m, F], [f, x]],
                [/(quest( 2| pro)?)/i],
                [d, [m, B], [f, x]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [m, [f, E]],
                [/(aeobc)\b/i],
                [d, [m, _], [f, E]],
                [
                  /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
                ],
                [d, [f, v]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [d, [f, g]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[f, g]],
                [
                  /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                ],
                [[f, v]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [d, [m, "Generic"]],
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [h, [p, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [h, [p, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                  /\b(libweb)/i,
                ],
                [p, h],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [h, p],
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [p, h],
                [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                [p, [h, G, Y]],
                [
                  /windows nt 6\.2; (arm)/i,
                  /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                  /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
                ],
                [
                  [h, G, Y],
                  [p, "Windows"],
                ],
                [
                  /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                  /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                  /cfnetwork\/.+darwin/i,
                ],
                [
                  [h, /_/g, "."],
                  [p, "iOS"],
                ],
                [
                  /(mac os x) ?([\w\. ]*)/i,
                  /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                ],
                [
                  [p, V],
                  [h, /_/g, "."],
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [h, p],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i,
                ],
                [p, h],
                [/\(bb(10);/i],
                [h, [p, S]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [h, [p, "Symbian"]],
                [
                  /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                ],
                [h, [p, I + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [h, [p, "webOS"]],
                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                [h, [p, "watchOS"]],
                [/crkey\/([\d\.]+)/i],
                [h, [p, T + "cast"]],
                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                [[p, z], h],
                [
                  /panasonic;(viera)/i,
                  /(netrange)mmh/i,
                  /(nettv)\/(\d+\.[\w\.]+)/i,
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i,
                ],
                [p, h],
                [/(sunos) ?([\w\.\d]*)/i],
                [[p, "Solaris"], h],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                  /(unix) ?([\w\.]*)/i,
                ],
                [p, h],
              ],
            },
            Q = function (e, t) {
              if ((typeof e === c && ((t = e), (e = r)), !(this instanceof Q)))
                return new Q(e, t).getResult();
              var n = typeof i !== a && i.navigator ? i.navigator : r,
                o = e || (n && n.userAgent ? n.userAgent : ""),
                w = n && n.userAgentData ? n.userAgentData : r,
                y = t
                  ? (function (e, t) {
                      var n = {};
                      for (var o in e)
                        t[o] && t[o].length % 2 == 0
                          ? (n[o] = t[o].concat(e[o]))
                          : (n[o] = e[o]);
                      return n;
                    })(J, t)
                  : J,
                x = n && n.userAgent == o;
              return (
                (this.getBrowser = function () {
                  var e,
                    t = {};
                  return (
                    (t[p] = r),
                    (t[h] = r),
                    W.call(t, o, y.browser),
                    (t[u] =
                      typeof (e = t[h]) === l
                        ? e.replace(/[^\d\.]/g, "").split(".")[0]
                        : r),
                    x &&
                      n &&
                      n.brave &&
                      typeof n.brave.isBrave == s &&
                      (t[p] = "Brave"),
                    t
                  );
                }),
                (this.getCPU = function () {
                  var e = {};
                  return (e[b] = r), W.call(e, o, y.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = {};
                  return (
                    (e[m] = r),
                    (e[d] = r),
                    (e[f] = r),
                    W.call(e, o, y.device),
                    x && !e[f] && w && w.mobile && (e[f] = v),
                    x &&
                      "Macintosh" == e[d] &&
                      n &&
                      typeof n.standalone !== a &&
                      n.maxTouchPoints &&
                      n.maxTouchPoints > 2 &&
                      ((e[d] = "iPad"), (e[f] = g)),
                    e
                  );
                }),
                (this.getEngine = function () {
                  var e = {};
                  return (e[p] = r), (e[h] = r), W.call(e, o, y.engine), e;
                }),
                (this.getOS = function () {
                  var e = {};
                  return (
                    (e[p] = r),
                    (e[h] = r),
                    W.call(e, o, y.os),
                    x &&
                      !e[p] &&
                      w &&
                      "Unknown" != w.platform &&
                      (e[p] = w.platform
                        .replace(/chrome os/i, z)
                        .replace(/macos/i, V)),
                    e
                  );
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU(),
                  };
                }),
                (this.getUA = function () {
                  return o;
                }),
                (this.setUA = function (e) {
                  return (
                    (o = typeof e === l && e.length > 500 ? X(e, 500) : e), this
                  );
                }),
                this.setUA(o),
                this
              );
            };
          (Q.VERSION = "1.0.37"),
            (Q.BROWSER = q([p, h, u])),
            (Q.CPU = q([b])),
            (Q.DEVICE = q([d, m, f, w, v, y, g, x, E])),
            (Q.ENGINE = Q.OS = q([p, h])),
            typeof t !== a
              ? (e.exports && (t = e.exports = Q), (t.UAParser = Q))
              : n.amdO
              ? (o = function () {
                  return Q;
                }.call(t, n, t, e)) === r || (e.exports = o)
              : typeof i !== a && (i.UAParser = Q);
          var Z = typeof i !== a && (i.jQuery || i.Zepto);
          if (Z && !Z.ua) {
            var ee = new Q();
            (Z.ua = ee.getResult()),
              (Z.ua.get = function () {
                return ee.getUA();
              }),
              (Z.ua.set = function (e) {
                ee.setUA(e);
                var t = ee.getResult();
                for (var n in t) Z.ua[n] = t[n];
              });
          }
        })("object" == typeof window ? window : this);
      },
    },
    t = {};
  function n(o) {
    var i = t[o];
    if (void 0 !== i) return i.exports;
    var r = (t[o] = { exports: {} });
    return e[o].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.amdO = {}),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = "webPixelsManager",
        t = "production",
        o = "0.0.475",
        i = "modern",
        r = "381a6f78we977be36p6d8f6568m5872572b",
        s = "b381a6f78we977be36p6d8f6568m5872572bm.js",
        a = "loggedConversion2",
        c = "WebPixel::Render",
        l = "product_added_to_cart",
        u = "Added Product Next",
        d = "product_removed_from_cart",
        p = "payment_info_submitted";
      function f() {
        return window;
      }
      let m = "OFF";
      function h(e, t, n) {
        const { jQuery: o } = f();
        o && o(e).bind
          ? o(e).bind(t, n)
          : e.addEventListener && e.addEventListener(t, n);
      }
      function b(e, t) {
        "ON" === m &&
          console &&
          console.warn &&
          console.warn(
            `[pixel_shop_events_listener] Error in ${e}:  ${t.message}`
          );
      }
      function w(e) {
        h(window, "load", () => {
          for (const t of document.forms) e(t);
        });
      }
      function v() {
        return (
          (null == (e = null == (t = f()) ? void 0 : t.ShopifyAnalytics)
            ? void 0
            : e.meta) || {}
        ).currency;
        var e, t;
      }
      function g(e) {
        const t = {};
        for (const o of e.split(/ *; */)) {
          const [e, i] = o.split("=");
          if (void 0 !== e)
            try {
              t[decodeURIComponent(e)] = decodeURIComponent(i || "");
            } catch (n) {
              continue;
            }
        }
        return t;
      }
      function y(e, t, n) {
        if (t.length !== n.length)
          throw Error(
            "Payload body and response have different number of items"
          );
        const o = [];
        t.forEach((t, i) => {
          let r = 1;
          try {
            r = parseInt(n[i].quantity, 10) || 1;
          } catch (s) {
            b("handleBulkItemCartAddResponse", s);
          }
          E(e, t, r), o.push({ ...t, quantity: r });
        }),
          _(o);
      }
      function x(e, t, n, o, i) {
        const r = v(),
          s = {
            id: String("add" === i ? t.id : t.variant_id),
            image: { src: t.image },
            price: { amount: t.presentment_price, currencyCode: r },
            product: {
              id: String(t.product_id),
              title: t.product_title,
              vendor: t.vendor,
              type: t.product_type,
              untranslatedTitle: t.untranslated_product_title,
              url: t.url,
            },
            sku: t.sku,
            title: t.variant_title,
            untranslatedTitle: t.untranslated_variant_title,
          };
        e(o, {
          cartLine: {
            cost: {
              totalAmount: { amount: s.price.amount * n, currencyCode: r },
            },
            merchandise: s,
            quantity: n,
          },
        });
      }
      function E(e, t, n, o = "add") {
        x(e, t, n, l, o);
      }
      function _(e = [], t = "add") {
        !(function (e) {
          const t = e.map((e) =>
            (function (e) {
              var t, n, o, i, r, s, a, c, l, u, d, p, f, m, h, b, w, v, y;
              return e
                ? {
                    productId:
                      null == (t = e.merchandise) || null == (n = t.product)
                        ? void 0
                        : n.id,
                    variantId: null == (o = e.merchandise) ? void 0 : o.id,
                    name:
                      null != (i = e.merchandise) &&
                      null != (r = i.product) &&
                      r.title &&
                      null != (s = e.merchandise) &&
                      s.title
                        ? `${
                            null == (a = e.merchandise) ||
                            null == (c = a.product)
                              ? void 0
                              : c.title
                          } - ${null == (l = e.merchandise) ? void 0 : l.title}`
                        : void 0,
                    sku: null == (u = e.merchandise) ? void 0 : u.sku,
                    category:
                      null == (d = e.merchandise) || null == (p = d.product)
                        ? void 0
                        : p.type,
                    brand:
                      null == (f = e.merchandise) || null == (m = f.product)
                        ? void 0
                        : m.vendor,
                    variant: null == (h = e.merchandise) ? void 0 : h.title,
                    price:
                      null == (b = e.merchandise) || null == (w = b.price)
                        ? void 0
                        : w.amount,
                    quantity: e.quantity,
                    currency:
                      null == (v = e.merchandise) || null == (y = v.price)
                        ? void 0
                        : y.currencyCode,
                    cartToken: g(document.cookie).cart || void 0,
                  }
                : {};
            })(e)
          );
          window.ShopifyAnalytics &&
            window.ShopifyAnalytics.lib &&
            "function" == typeof window.ShopifyAnalytics.lib.track &&
            window.ShopifyAnalytics.lib.track(u, { cartLines: t });
        })(
          e.map((e) => {
            const n = v(),
              o = {
                id: String("add" === t ? e.id : e.variant_id),
                image: { src: e.image },
                price: { amount: e.presentment_price, currencyCode: n },
                product: {
                  id: String(e.product_id),
                  title: e.product_title,
                  vendor: e.vendor,
                  type: e.product_type,
                  untranslatedTitle: e.untranslated_product_title,
                  url: e.url,
                },
                sku: e.sku,
                title: e.variant_title,
                untranslatedTitle: e.untranslated_variant_title,
              };
            return {
              cost: {
                totalAmount: {
                  amount: o.price.amount * e.quantity,
                  currencyCode: n,
                },
              },
              merchandise: o,
              quantity: e.quantity,
            };
          })
        );
      }
      function k(e, t) {
        const n = t.items_added,
          o = t.items_removed;
        n.forEach((t) => {
          E(e, t, null == t ? void 0 : t.quantity, "change");
        }),
          o.forEach((t) => {
            !(function (e, t, n, o) {
              x(e, t, n, d, "change");
            })(e, t, null == t ? void 0 : t.quantity);
          });
      }
      function C(e) {
        if (!e) return 1;
        try {
          return JSON.parse(e).quantity || 1;
        } catch (t) {
          if (e instanceof FormData) {
            if (e.has("quantity")) return Number(e.get("quantity"));
          } else {
            const t = e.split("&");
            for (const e of t) {
              const t = e.split("=");
              if ("quantity" === t[0]) return Number(t[1]);
            }
          }
        }
        return 1;
      }
      class S {
        static handleXhrOpen() {}
        static handleXhrDone(e) {
          try {
            const t = document.createElement("a");
            t.href = e.url;
            const n = t.pathname ? t.pathname : e.url;
            S.ADD_TO_CART_REGEX.test(n)
              ? S.parsePayloadResponse(e, (t) => {
                  const n = Object.keys(t);
                  if (1 === n.length && "items" === n[0]) {
                    const n = t.items;
                    let i;
                    try {
                      i = JSON.parse(e.body).items;
                    } catch (o) {
                      i = (function (e, t) {
                        const n = new Array(t);
                        for (let o = 0; o < t; o++) n[o] = {};
                        for (const o of decodeURI(e).split("&")) {
                          const [e = "", t] = o.split("="),
                            i = e.match(/items\[(\d+)\]\[(\w+)\].*/);
                          if (i) {
                            const e = Number(i[1]),
                              o = i[2];
                            "quantity" === o
                              ? (n[e].quantity = t)
                              : "id" === o && (n[e].id = t);
                          }
                        }
                        return n;
                      })(e.body, n.length);
                    }
                    y(e.publish, n, i);
                  } else
                    E(e.publish, t, C(e.body)),
                      _([{ ...t, quantity: C(e.body) }]);
                })
              : S.CHANGE_TO_CART_REGEX.test(n) &&
                S.parsePayloadResponse(e, (t) => {
                  k(e.publish, t);
                });
          } catch (t) {
            b("handleXhrDone", t);
          }
        }
        static parseBlobToJson(e, t) {
          const n = new FileReader();
          n.addEventListener("loadend", () => {
            t(JSON.parse(String.fromCharCode(...new Uint8Array(n.result))));
          }),
            n.readAsArrayBuffer(e);
        }
        static parsePayloadResponse(e, t) {
          e.xhr.response instanceof Blob
            ? S.parseBlobToJson(e.xhr.response, t)
            : e.xhr.responseText && t(JSON.parse(e.xhr.responseText));
        }
        constructor(e, t, n, o, i) {
          (this.oldOnReadyStateChange = void 0),
            (this.xhr = void 0),
            (this.url = void 0),
            (this.method = void 0),
            (this.body = void 0),
            (this.publish = void 0),
            (this.xhr = e),
            (this.url = t),
            (this.method = n),
            (this.body = o),
            (this.publish = i);
        }
        onReadyStateChange() {
          this.xhr.readyState === XMLHttpRequest.DONE &&
            S.handleXhrDone({
              method: this.method,
              url: this.url,
              body: this.body,
              xhr: this.xhr,
              publish: this.publish,
            }),
            this.oldOnReadyStateChange &&
              this.oldOnReadyStateChange.call(
                this.xhr,
                new Event("oldOnReadyStateChange")
              );
        }
      }
      function A(e, t) {
        const n = e.fetch;
        function o(e) {
          b("handleFetchRequest", e);
        }
        "function" == typeof n &&
          (e.fetch = function (...e) {
            return n.apply(this, Array.prototype.slice.call(e)).then((e) => {
              if (!e.ok) return e;
              const n = document.createElement("a");
              n.href = e.url;
              const i = n.pathname ? n.pathname : e.url;
              try {
                if (S.ADD_TO_CART_REGEX.test(i)) {
                  try {
                    const n =
                      arguments[1].body instanceof FormData
                        ? (function (e) {
                            const t = {};
                            return (
                              e.forEach((e, n) => {
                                T(n, e, t);
                              }),
                              t
                            );
                          })(arguments[1].body)
                        : JSON.parse(arguments[1].body);
                    if (Object.keys(n).includes("items"))
                      return (
                        (function (e, n) {
                          e.clone()
                            .json()
                            .then((e) => {
                              const o = n.items,
                                i = e.items;
                              return y(t, i, o), e;
                            })
                            .catch(o);
                        })(e, n),
                        e
                      );
                  } catch (r) {
                    o(r);
                  }
                  !(function (e, n) {
                    const i = C(n);
                    e.clone()
                      .json()
                      .then((e) => (_([{ ...e, quantity: i }]), E(t, e, i)))
                      .catch(o);
                  })(e, arguments[1].body);
                } else
                  S.CHANGE_TO_CART_REGEX.test(i) &&
                    (function (e) {
                      e.clone()
                        .json()
                        .then((e) => {
                          k(t, e);
                        })
                        .catch(o);
                    })(e);
              } catch (r) {
                o(r);
              }
              return e;
            });
          });
      }
      function T(e, t, n) {
        const [o, ...i] = e.split(".").filter((e) => e);
        if (o && i.length > 0)
          return (n[o] = n[o] || {}), void T(i.join("."), t, n[o]);
        const r = /(\w+)?\[(\d+)?\](.+)?/.exec(e);
        if (r) {
          const [e, o, i, s = ""] = r;
          if (o) return (n[o] = n[o] || []), void T(e.replace(o, ""), t, n[o]);
          if (i) {
            const e = s && "[" === s[0] ? [] : {};
            return (n[i] = n[i] || e), void T(s, t, n[i]);
          }
          n.push(t);
        } else n[e] = t;
      }
      function I(e, t) {
        !(function (e, t) {
          const n = e.prototype.open,
            o = e.prototype.send;
          (e.prototype.open = function (e, t) {
            (this._url = t),
              (this._method = e),
              S.handleXhrOpen(),
              n.apply(this, arguments);
          }),
            (e.prototype.send = function (e) {
              if (!(e instanceof Document)) {
                const n = new S(this, this._url, this._method, e || "", t);
                this.addEventListener
                  ? this.addEventListener(
                      "readystatechange",
                      n.onReadyStateChange.bind(n),
                      !1
                    )
                  : ((n.oldOnReadyStateChange = this.onreadystatechange),
                    (this.onreadystatechange = n.onReadyStateChange));
              }
              o.call(this, e);
            });
        })(XMLHttpRequest, e),
          A(f(), e),
          w((n) => {
            const o = n.getAttribute("action");
            o &&
              o.indexOf("/cart/add") >= 0 &&
              h(n, "submit", (n) => {
                !(function (e, t, n) {
                  const o = t || window.event;
                  if (
                    o.defaultPrevented ||
                    (o.isDefaultPrevented && o.isDefaultPrevented())
                  )
                    return;
                  const i = o.currentTarget || o.srcElement;
                  if (
                    i &&
                    i instanceof Element &&
                    (i.getAttribute("action") || i.getAttribute("href"))
                  )
                    try {
                      const t = (function (e) {
                        let t;
                        const n = e.querySelector('[name="id"]');
                        return (
                          n instanceof HTMLSelectElement && n.options
                            ? (t = n.options[n.selectedIndex])
                            : (n instanceof HTMLOptionElement ||
                                n instanceof HTMLInputElement) &&
                              (t = n),
                          t
                        );
                      })(i);
                      if (!t) return;
                      const o = t.value,
                        r = (function (e) {
                          const t = e.querySelector('[name="quantity"]');
                          return t instanceof HTMLInputElement
                            ? Number(t.value)
                            : 1;
                        })(i),
                        s = (function (e, t) {
                          var n;
                          const [o] =
                            (null == (n = t.productVariants)
                              ? void 0
                              : n.filter((t) => t.id === e)) || [];
                          if (!o) throw new Error("Product variant not found");
                          return o;
                        })(o, n),
                        a = {
                          cost: {
                            totalAmount: {
                              amount: s.price.amount * r,
                              currencyCode: s.price.currencyCode,
                            },
                          },
                          merchandise: s,
                          quantity: r,
                        };
                      e(l, { cartLine: a });
                    } catch (r) {
                      b("handleSubmitCartAdd", r);
                    }
                })(e, n, t);
              });
          });
      }
      function N(e, t, n) {
        var o;
        null != n && n.logLevel && ((o = n.logLevel), (m = o)),
          I(e, t),
          (function (e, t) {
            w((n) => {
              const o = n.querySelector('[name="previous_step"]');
              o &&
                o instanceof HTMLInputElement &&
                "payment_method" === o.value &&
                h(document.body, "submit", (n) => {
                  !(function (e, t, n) {
                    const o = t || window.event,
                      i = o.target || o.srcElement;
                    if (
                      i &&
                      i instanceof HTMLFormElement &&
                      i.getAttribute("action") &&
                      null !== i.getAttribute("data-payment-form")
                    )
                      try {
                        const t = n.checkout;
                        if (!t) throw new Error("Checkout data not found");
                        e(p, { checkout: t });
                      } catch (r) {
                        b("handleSubmitToPaymentAdd", r);
                      }
                  })(e, n, t);
                });
            });
          })(e, t);
      }
      (S.ADD_TO_CART_REGEX =
        /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/cart\/add(?:\.js|\.json)?$/),
        (S.CHANGE_TO_CART_REGEX =
          /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/cart\/change(?:\.js|\.json)?$/);
      const O = {
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
        P = "2.1",
        D = { NO_VALUE: "", ACCEPTED: "1", DECLINED: "0" },
        R = {
          PREFERENCES: "p",
          ANALYTICS: "a",
          MARKETING: "m",
          SALE_OF_DATA: "t",
        },
        L = {
          MARKETING: "m",
          ANALYTICS: "a",
          PREFERENCES: "p",
          SALE_OF_DATA: "s",
        },
        $ = {
          MARKETING: "marketing",
          ANALYTICS: "analytics",
          PREFERENCES: "preferences",
          SALE_OF_DATA: "sale_of_data",
          EMAIL: "email",
        },
        M = {
          HEADLESS_STOREFRONT: "headlessStorefront",
          ROOT_DOMAIN: "rootDomain",
          CHECKOUT_ROOT_DOMAIN: "checkoutRootDomain",
          STOREFRONT_ROOT_DOMAIN: "storefrontRootDomain",
          STOREFRONT_ACCESS_TOKEN: "storefrontAccessToken",
          IS_EXTENSION_TOKEN: "isExtensionToken",
          METAFIELDS: "metafields",
        },
        U = ["v", "con"];
      function j(e, t) {
        if (null === e) return "null";
        if (Array.isArray(e)) return `[${e.map((e) => j(e, !0)).join(",")}]`;
        if ("object" == typeof e) {
          let n = [];
          for (const t in e)
            e.hasOwnProperty(t) &&
              void 0 !== e[t] &&
              n.push(`${t}:${j(e[t], !0)}`);
          const o = n.join(",");
          return t ? `{${o}}` : o;
        }
        return "string" == typeof e ? `"${e}"` : `${e}`;
      }
      function F(e) {
        return (function (e) {
          const t = document.cookie ? document.cookie.split("; ") : [];
          for (let n = 0; n < t.length; n++) {
            const [o, i] = t[n].split("=");
            if (e === decodeURIComponent(o))
              return JSON.parse(decodeURIComponent(i));
          }
        })(e);
      }
      function B(e) {
        return e === encodeURIComponent(decodeURIComponent(e));
      }
      function z(e, t, n, o) {
        if (!B(o))
          throw new TypeError("Cookie value is not correctly URI encoded.");
        if (!B(e))
          throw new TypeError("Cookie name is not correctly URI encoded.");
        let i = `${e}=${o}`;
        (i += "; path=/"),
          t && (i += `; domain=${t}`),
          (i += `; expires=${new Date(
            new Date().getTime() + n
          ).toUTCString()}`),
          (i += "; secure"),
          (document.cookie = i);
      }
      const V = "_tracking_consent",
        q = 31536e6;
      function H() {
        try {
          let e = (function () {
            const e = F(V);
            if (
              void 0 !== e &&
              (t = e).v === P &&
              (function (e, t) {
                const n = t.slice().sort();
                return (
                  e.length === t.length &&
                  e
                    .slice()
                    .sort()
                    .every((e, t) => e === n[t])
                );
              })(
                Object.keys(t).filter(
                  (e) =>
                    "region" !== e && "lim" !== e && "cus" !== e && "reg" !== e
                ),
                U
              )
            )
              return e;
            var t;
          })();
          if (!e) return;
          return e;
        } catch {
          return;
        }
      }
      const K = "_cmp_a";
      function X(e) {
        const t = F(K);
        if (!t) return !0;
        const n = t.purposes[e];
        return "boolean" != typeof n || n;
      }
      function W() {
        return X(R.PREFERENCES);
      }
      function G() {
        return X(R.ANALYTICS);
      }
      function Y() {
        return X(R.MARKETING);
      }
      function J() {
        return X(R.SALE_OF_DATA);
      }
      function Q(e, t) {
        document.dispatchEvent(new CustomEvent(e, { detail: t || {} }));
      }
      const Z = "_landing_page",
        ee = "_orig_referrer";
      function te(e) {
        const t = e.granular_consent;
        return {
          query: `query { consentManagement { cookies(${j({
            visitorConsent: {
              marketing: t.marketing,
              analytics: t.analytics,
              preferences: t.preferences,
              saleOfData: t.sale_of_data,
              ...(t.metafields && { metafields: t.metafields }),
            },
            origReferrer: e.referrer,
            landingPage: e.landing_page,
          })}) { answersCookie trackingConsentCookie cookieDomain landingPageCookie origReferrerCookie } } }`,
          variables: {},
        };
      }
      function ne(e, t) {
        const n = e.granular_consent,
          o =
            n.storefrontAccessToken ||
            (function () {
              const e =
                  document.documentElement.querySelector("#shopify-features"),
                t = "Could not find liquid access token";
              if (!e) return void console.warn(t);
              const n = JSON.parse(e.textContent || "").accessToken;
              if (n) return n;
              console.warn(t);
            })(),
          i = n.checkoutRootDomain || window.location.host,
          r = n.isExtensionToken
            ? "Shopify-Storefront-Extension-Token"
            : "x-shopify-storefront-access-token",
          s = {
            headers: { "content-type": "application/json", [r]: o },
            body: JSON.stringify(te(e)),
            method: "POST",
          };
        return fetch(`https://${i}/api/unstable/graphql.json`, s)
          .then((e) => {
            if (e.ok) return e.json();
            throw new Error("Server error");
          })
          .then((o) => {
            const i = 31536e6,
              r = 12096e5,
              s = o.data.consentManagement.cookies.cookieDomain,
              a = "." + (n.checkoutRootDomain || s || window.location.hostname),
              c =
                "." + (n.storefrontRootDomain || s || window.location.hostname),
              l = o.data.consentManagement.cookies.trackingConsentCookie,
              u = o.data.consentManagement.cookies.answersCookie,
              d = o.data.consentManagement.cookies.landingPageCookie,
              p = o.data.consentManagement.cookies.origReferrerCookie;
            return (
              z(V, a, i, l),
              z(K, a, i, u),
              d && p && (z(Z, a, r, d), z(ee, a, r, p)),
              c !== a &&
                (z(V, c, i, l),
                z(K, c, i, u),
                d && p && (z(Z, c, r, d), z(ee, c, r, p))),
              void 0 !== e.granular_consent &&
                (function (e) {
                  const t = e[R.MARKETING],
                    n = e[R.SALE_OF_DATA],
                    o = e[R.ANALYTICS],
                    i = e[R.PREFERENCES];
                  !0 === t
                    ? Q(O.MARKETING_ACCEPTED)
                    : !1 === t && Q(O.MARKETING_DECLINED),
                    !0 === n
                      ? Q(O.SALE_OF_DATA_ACCEPTED)
                      : !1 === n && Q(O.SALE_OF_DATA_DECLINED),
                    !0 === o
                      ? Q(O.ANALYTICS_ACCEPTED)
                      : !1 === o && Q(O.ANALYTICS_DECLINED),
                    !0 === i
                      ? Q(O.PREFERENCES_ACCEPTED)
                      : !1 === i && Q(O.PREFERENCES_DECLINED);
                  const r = (function (e) {
                    return {
                      marketingAllowed: e[R.MARKETING],
                      saleOfDataAllowed: e[R.SALE_OF_DATA],
                      analyticsAllowed: e[R.ANALYTICS],
                      preferencesAllowed: e[R.PREFERENCES],
                      firstPartyMarketingAllowed: e[R.MARKETING],
                      thirdPartyMarketingAllowed: e[R.SALE_OF_DATA],
                    };
                  })(e);
                  Q(O.CONSENT_COLLECTED, r);
                  const s = [o, i, t, n];
                  s.every((e) => !0 === e) && Q(O.TRACKING_ACCEPTED),
                    s.every((e) => !1 === e) && Q(O.TRACKING_DECLINED);
                })({
                  [R.PREFERENCES]: W(),
                  [R.ANALYTICS]: G(),
                  [R.MARKETING]: Y(),
                  [R.SALE_OF_DATA]: J(),
                }),
              void 0 !== t && t(null, o),
              o
            );
          })
          .catch((e) => {
            const n =
              "Error while setting storefront API consent: " + e.message;
            if (void 0 === t) throw { error: n };
            t({ error: n });
          });
      }
      function oe() {
        if ("" === document.referrer) return !0;
        const e = document.createElement("a");
        return (
          (e.href = document.referrer), window.location.hostname != e.hostname
        );
      }
      function ie() {
        return (
          !!(function (e = null) {
            return null === e && (e = H()), void 0 === e;
          })() ||
          (Y() && G())
        );
      }
      function re() {
        return Y();
      }
      function se() {
        return G();
      }
      function ae() {
        return W();
      }
      function ce() {
        return J();
      }
      function le(e, t) {
        return "object" == typeof e &&
          e.headlessStorefront &&
          !e.storefrontAccessToken
          ? (console.warn(
              "Headless consent has been updated. Please read shopify.dev/docs/api/customer-privacy to integrate."
            ),
            (function (e, t) {
              function n(e, t = D.NO_VALUE) {
                return !0 === e ? D.ACCEPTED : !1 === e ? D.DECLINED : t;
              }
              const o = {
                  [L.ANALYTICS]: n(e[$.ANALYTICS], D.DECLINED),
                  [L.MARKETING]: n(e[$.MARKETING], D.DECLINED),
                  [L.PREFERENCES]: n(e[$.PREFERENCES], D.DECLINED),
                  [L.SALE_OF_DATA]: n(e[$.SALE_OF_DATA]),
                },
                i = { v: P, reg: "", con: { CMP: o } },
                r = encodeURIComponent(JSON.stringify(i));
              return (
                z(V, e.rootDomain, q, r), t(null), new Promise((e, t) => {})
              );
            })(e, t || (() => {})))
          : (function (e, t) {
              if (
                ((function (e) {
                  if ("boolean" != typeof e && "object" != typeof e)
                    throw TypeError(
                      "setTrackingConsent must be called with a boolean or object consent value"
                    );
                  if ("object" == typeof e) {
                    const t = Object.keys(e);
                    if (0 === t.length)
                      throw TypeError("The submitted consent object is empty.");
                    const n = [
                      $.MARKETING,
                      $.ANALYTICS,
                      $.PREFERENCES,
                      $.SALE_OF_DATA,
                      $.EMAIL,
                      M.ROOT_DOMAIN,
                      M.CHECKOUT_ROOT_DOMAIN,
                      M.STOREFRONT_ROOT_DOMAIN,
                      M.STOREFRONT_ACCESS_TOKEN,
                      M.HEADLESS_STOREFRONT,
                      M.IS_EXTENSION_TOKEN,
                      M.METAFIELDS,
                    ];
                    for (const e of t)
                      if (!n.includes(e))
                        throw TypeError(
                          `The submitted consent object should only contain the following keys: ${n.join(
                            ", "
                          )}. Extraneous key: ${e}.`
                        );
                  }
                })(e),
                void 0 !== t && "function" != typeof t)
              )
                throw TypeError(
                  "setTrackingConsent must be called with a callback function if the callback argument is provided"
                );
              let n;
              !0 === e || !1 === e
                ? (console.warn(
                    "Binary consent is deprecated. Please update to granular consent (shopify.dev/docs/api/consent-tracking)"
                  ),
                  (n = { analytics: e, preferences: e, marketing: e }))
                : (n = e);
              const o = (function (e) {
                  return e ? (oe() ? document.referrer : "") : null;
                })(n.analytics),
                i = (function (e) {
                  return e
                    ? oe()
                      ? window.location.pathname + window.location.search
                      : "/"
                    : null;
                })(n.analytics);
              return ne(
                {
                  granular_consent: n,
                  ...(null !== o && { referrer: o }),
                  ...(null !== i && { landing_page: i }),
                },
                t
              );
            })(e, t);
      }
      const ue = "sh",
        de = "shu",
        pe = [
          "page_viewed",
          "collection_viewed",
          "product_viewed",
          "product_variant_viewed",
          "search_submitted",
          "product_added_to_cart",
          "checkout_started",
          "checkout_completed",
          "payment_info_submitted",
          "checkout_contact_step_started",
          "checkout_contact_info_submitted",
          "checkout_address_info_submitted",
          "checkout_shipping_step_started",
          "checkout_shipping_info_submitted",
          "checkout_payment_step_started",
          "session_started",
        ],
        fe = "wpm",
        me = "trekkie";
      let he, be;
      function we(e) {
        return `${e || ue}-${(function () {
          const e = "xxxx-4xxx-xxxx-xxxxxxxxxxxx";
          let t = "";
          try {
            const n = window.crypto,
              o = new Uint16Array(31);
            n.getRandomValues(o);
            let i = 0;
            t = e
              .replace(/[x]/g, (e) => {
                const t = o[i];
                if ("number" != typeof t)
                  throw new Error(
                    `Event ID service: Invalid random number at index "${i}".`
                  );
                const n = t % 16;
                return i++, ("x" === e ? n : (3 & n) | 8).toString(16);
              })
              .toUpperCase();
          } catch (n) {
            t = e
              .replace(/[x]/g, (e) => {
                const t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              })
              .toUpperCase();
          }
          return `${(function () {
            let e = 0,
              t = 0;
            e = new Date().getTime() >>> 0;
            try {
              t = performance.now() >>> 0;
            } catch (n) {
              t = 0;
            }
            return Math.abs(e + t)
              .toString(16)
              .toLowerCase()
              .padStart(8, "0");
          })()}-${t}`;
        })()}`;
      }
      function ve() {
        (window.Shopify = window.Shopify || {}),
          window.Shopify.evids ||
            ((he = {}),
            (be = { [fe]: {}, [me]: {} }),
            (window.Shopify.evids = (...e) =>
              (function (e, t) {
                if (
                  !(function (e) {
                    return pe.includes(e);
                  })(e) ||
                  ((null == t ? void 0 : t.analyticsFramework) !== me &&
                    (null == t ? void 0 : t.analyticsFramework) !== fe)
                )
                  return we(de);
                const n =
                  "string" == typeof (o = t.cacheKey) && o ? o : "default";
                var o;
                const i = (function (e, t, n) {
                  var o;
                  const i = be[t],
                    r = null != (o = i[e]) ? o : (i[e] = {}),
                    s = r[n];
                  return (r[n] = "number" == typeof s ? s + 1 : 0);
                })(e, t.analyticsFramework, n);
                return (function (e, t, n) {
                  var o, i;
                  const r = null != (o = he[e]) ? o : (he[e] = {}),
                    s = null != (i = r[n]) ? i : [];
                  let a = s[t];
                  return a || ((a = we()), s.push(a)), (r[n] = s), a;
                })(e, i, n);
              })(...e)));
      }
      const ge = new Set();
      function ye(e) {
        return ge.has(e);
      }
      const xe = "6a396365";
      class Ee extends Set {
        constructor(e, t) {
          if (
            (super(),
            (this.maxSize = void 0),
            (this.keep = void 0),
            (Number.isFinite(e) && !Number.isInteger(e)) || e <= 0)
          )
            throw new Error("Invalid maxSize specified");
          (this.maxSize = e), (this.keep = t);
        }
        push(e) {
          if ("oldest" === this.keep) this.size < this.maxSize && this.add(e);
          else if (
            "newest" === this.keep &&
            (this.add(e), this.size > this.maxSize)
          )
            for (const t of this)
              if ((this.delete(t), this.size <= this.maxSize)) break;
          return this;
        }
      }
      const _e = (e, t, n) => !0;
      class ke {
        constructor({
          bufferSize: e = 50,
          replayKeep: t = "oldest",
          subscribeAllKey: n,
          eligibility: o,
        } = {}) {
          (this.channelSubscribers = new Map()),
            (this.replayQueue = void 0),
            (this.bufferSize = void 0),
            (this.replayKeep = void 0),
            (this.subscribeAllKey = void 0),
            (this.eligibility = void 0),
            (this.bufferSize = e),
            (this.replayKeep = t),
            (this.subscribeAllKey = n),
            (this.replayQueue = new Ee(e, t)),
            (this.eligibility = null != o ? o : _e);
        }
        publish(e, t, n = {}) {
          var o;
          if (this.subscribeAllKey && e === this.subscribeAllKey)
            throw new Error(`Cannot publish to ${String(e)}`);
          this.replayQueue.push({ name: e, payload: t, options: n });
          const i = (o, i) => {
            this.eligibility(n, o, e) && i.call({}, { ...t });
          };
          var r;
          return (
            null == (o = this.channelSubscribers.get(e)) || o.forEach(i),
            this.subscribeAllKey &&
              (null ==
                (r = this.channelSubscribers.get(this.subscribeAllKey)) ||
                r.forEach(i)),
            !0
          );
        }
        subscribe(e, t, n = {}) {
          const o = this.channelSubscribers.get(e) || new Map();
          return (
            this.channelSubscribers.set(e, o.set(t, n)),
            this.replayQueue.forEach(({ name: o, payload: i, options: r }) => {
              (e === o ||
                (this.subscribeAllKey && e === this.subscribeAllKey)) &&
                this.eligibility(r, n, o) &&
                t.call({}, { ...i });
            }),
            () => o.delete(t)
          );
        }
      }
      const Ce = {
        randomUUID:
          "undefined" != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let Se;
      const Ae = new Uint8Array(16);
      function Te() {
        if (
          !Se &&
          ((Se =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !Se)
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return Se(Ae);
      }
      const Ie = [];
      for (let n = 0; n < 256; ++n) Ie.push((n + 256).toString(16).slice(1));
      const Ne = function (e, t, n) {
        if (Ce.randomUUID && !t && !e) return Ce.randomUUID();
        const o = (e = e || {}).random || (e.rng || Te)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = o[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            Ie[e[t + 0]] +
            Ie[e[t + 1]] +
            Ie[e[t + 2]] +
            Ie[e[t + 3]] +
            "-" +
            Ie[e[t + 4]] +
            Ie[e[t + 5]] +
            "-" +
            Ie[e[t + 6]] +
            Ie[e[t + 7]] +
            "-" +
            Ie[e[t + 8]] +
            Ie[e[t + 9]] +
            "-" +
            Ie[e[t + 10]] +
            Ie[e[t + 11]] +
            Ie[e[t + 12]] +
            Ie[e[t + 13]] +
            Ie[e[t + 14]] +
            Ie[e[t + 15]]
          );
        })(o);
      };
      let Oe = (function (e) {
          return (e.App = "APP"), (e.Custom = "CUSTOM"), e;
        })({}),
        Pe = (function (e) {
          return (e.Strict = "STRICT"), (e.Lax = "LAX"), (e.Open = "OPEN"), e;
        })({});
      function De(e) {
        return "shopify-custom-pixel" === e.id
          ? "shopify-pixel"
          : e.type === Oe.Custom
          ? "-1"
          : e.apiClientId
          ? `${e.apiClientId}`
          : void 0;
      }
      let Re = (function (e) {
          return (
            (e.Shopify = "shopify"),
            (e.StorefrontRenderer = "storefront-renderer"),
            (e.CheckoutOne = "checkout-one"),
            (e.CheckoutOneSdk = "checkout-one-sdk"),
            (e.Unknown = "unknown"),
            e
          );
        })({}),
        Le = (function (e) {
          return (
            (e.Storefront = "storefront"),
            (e.Checkout = "checkout"),
            (e.Unknown = "unknown"),
            e
          );
        })({}),
        $e = (function (e) {
          return (
            (e.WebPixelExtension = "web-pixel-extension"),
            (e.CheckoutOneSdk = "checkout-one-sdk"),
            (e.Unknown = "unknown"),
            e
          );
        })({});
      const Me = (e, t, n) => {
        const { pixelRuntimeConfig: o } = t || {},
          { apiClientId: i, restrictions: r } = o || {},
          { allowedEvents: s, disallowedEvents: a } = r || {},
          { sendTo: c } = e || {},
          l = c && String(c) === String(i),
          u = c && !l,
          d = !s || s.includes(n),
          p = a && a.includes(n);
        return Boolean((d && !p && !u) || l);
      };
      function Ue(e) {
        if (e <= 0 || e > 100) throw new Error("Invalid sampling percent");
        return 100 * Math.random() <= e;
      }
      var je = n(482),
        Fe = n.n(je);
      class Be extends Error {
        constructor(...e) {
          super(...e),
            (this.message =
              "Excessive Stacktrace: May indicate infinite loop forming");
        }
      }
      var ze = n(47);
      class Ve extends Error {
        constructor(...e) {
          super(...e),
            Error.captureStackTrace && Error.captureStackTrace(this, Ve);
        }
      }
      const qe = {
          production: "https://notify.bugsnag.com",
          test: "https://localhost",
        },
        He = {
          severity: "error",
          context: "",
          unhandled: !0,
          library: "browser",
        },
        Ke = {
          notify: (e, n) => {
            try {
              var a;
              if (
                null != n &&
                null != (a = n.options) &&
                a.sampleRate &&
                !Ue(n.options.sampleRate)
              )
                return;
              const d = { ...He, ...n };
              let p = {
                errorClass: null == e ? void 0 : e.name,
                message: null == e ? void 0 : e.message,
                stacktrace: [],
                type: "browserjs",
              };
              try {
                p = (function (e) {
                  if (
                    "string" !=
                      typeof (
                        (null == (t = e) ? void 0 : t.stack) ||
                        (null == t ? void 0 : t.stacktrace) ||
                        (null == t ? void 0 : t["opera#sourceloc"])
                      ) ||
                    t.stack === `${t.name}: ${t.message}`
                  )
                    throw new Error(
                      "Error incompatible with error-stack-parser"
                    );
                  var t;
                  const n = Fe()
                    .parse(e)
                    .reduce((e, t) => {
                      const n = (function ({
                        functionName: e,
                        lineNumber: t,
                        columnNumber: n,
                      }) {
                        const o = /^global code$/i.test((i = e) || "")
                          ? "global code"
                          : i;
                        var i;
                        return {
                          file: `https://cdn.shopify.com/cdn/wpm/${s}`,
                          method: o,
                          lineNumber: t,
                          columnNumber: n,
                        };
                      })(t);
                      try {
                        return "{}" === JSON.stringify(n) ? e : e.concat(n);
                      } catch (o) {
                        return e;
                      }
                    }, []);
                  return {
                    errorClass: null == e ? void 0 : e.name,
                    message: null == e ? void 0 : e.message,
                    stacktrace: n,
                    type: "browserjs",
                  };
                })(e);
              } catch (l) {
                try {
                  p = (function (e, t) {
                    let n = "";
                    const o = {
                      lineNumber: "1",
                      columnNumber: "1",
                      method: t.context,
                      file: `https://cdn.shopify.com/cdn/wpm/${s}`,
                    };
                    if (e.stackTrace || e.stack || e.description) {
                      n = e.stack.split("\n")[0];
                      const t = e.stack.match(/([0-9]+):([0-9]+)/);
                      if (
                        t &&
                        t.length > 2 &&
                        ((o.lineNumber = t[1]),
                        (o.columnNumber = t[2]),
                        parseInt(o.lineNumber, 10) > 1e5)
                      )
                        throw new Be();
                    }
                    return {
                      errorClass: (null == e ? void 0 : e.name) || n,
                      message: (null == e ? void 0 : e.message) || n,
                      stacktrace: [o],
                      type: "browserjs",
                    };
                  })(e, d);
                } catch (u) {
                  if (u instanceof Be) return;
                }
              }
              const f = (function (
                  n,
                  {
                    userAgent: s,
                    context: a,
                    severity: c,
                    unhandled: l,
                    library: u,
                    hashVersionSandbox: d,
                    sandboxUrl: p,
                    pixelId: f,
                    pixelType: m,
                    runtimeContext: h,
                    shopId: b,
                    initConfig: w,
                    notes: v,
                  }
                ) {
                  var g, y;
                  const {
                    device: x,
                    os: E,
                    browser: _,
                    engine: k,
                  } = (function (t) {
                    try {
                      return new ze.UAParser(t).getResult();
                    } catch (e) {
                      return {
                        ua: "",
                        browser: { name: "", version: "", major: "" },
                        engine: { name: "", version: "" },
                        os: { name: "", version: "" },
                        device: { model: "", type: "", vendor: "" },
                        cpu: { architecture: "" },
                      };
                    }
                  })(
                    s || (null == (g = self.navigator) ? void 0 : g.userAgent)
                  );
                  return {
                    payloadVersion: 5,
                    notifier: {
                      name: "web-pixel-manager",
                      version: o,
                      url: "-",
                    },
                    events: [
                      {
                        exceptions: [n],
                        context: a,
                        severity: c,
                        unhandled: l,
                        app: { version: o },
                        device: {
                          manufacturer: x.vendor,
                          model: x.model,
                          osName: E.name,
                          osVersion: E.version,
                          browserName: _.name,
                          browserVersion: _.version,
                        },
                        metaData: {
                          app: {
                            library: u,
                            browserTarget: i,
                            env: t,
                            hashVersion: r,
                            hashVersionSandbox: d || "N/A",
                            sandboxUrl: p || "N/A",
                          },
                          device: {
                            userAgent:
                              s ||
                              (null == (y = self.navigator)
                                ? void 0
                                : y.userAgent),
                            renderingEngineName: k.name,
                            renderingEngineVersion: k.version,
                          },
                          request: {
                            shopId: b,
                            shopUrl: self.location.href,
                            pixelId: f,
                            pixelType: m,
                            runtimeContext: h,
                          },
                          "Additional Notes": {
                            initConfig: JSON.stringify(w),
                            notes: v,
                          },
                        },
                      },
                    ],
                  };
                })(p, d),
                m = qe[t];
              var c;
              if (!m)
                return void (
                  null == (c = console) || c.log(`[${t}]`, "Bugsnag notify:", f)
                );
              fetch(m, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Bugsnag-Api-Key": "bcbc9f6762da195561967577c2d74ff8",
                  "Bugsnag-Payload-Version": "5",
                },
                body: JSON.stringify(f),
              }).catch(() => {});
            } catch (d) {}
          },
        };
      function Xe(e) {
        const t = {};
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            const o = n.replace(/[A-Z]/g, (e) => `_${e}`).toLowerCase(),
              i = e[n];
            t[o] = null !== i && "object" == typeof i ? Xe(i) : i;
          }
        return t;
      }
      function We(e) {
        return e.replace(/\/$/, "");
      }
      const Ge = {},
        Ye = {
          "pixel:register": {
            start: {
              name: "pixel:register:started",
              params: { pixelId: "", source: "" },
            },
            end: {
              name: "pixel:register:completed",
              params: { pixelId: "", source: "" },
            },
          },
          "page:session": {
            start: { name: "start", params: Ge },
            end: { name: "page:unload", params: Ge },
          },
          completed: {
            start: { name: "start", params: Ge },
            end: { name: "pixels:resolved", params: Ge },
          },
        };
      function Je(e, t = Ge) {
        const n = Qe(e, "end", t),
          o = (function (e, t) {
            try {
              const n = Ze(e, "start", t),
                o = Ze(e, "end", t),
                i = (function (e, t) {
                  return et(e, t);
                })(e, t),
                r = self.performance.measure(i, n, o);
              return {
                ...r,
                duration: Math.round(r.duration),
                startTime: Math.round(r.startTime),
              };
            } catch (n) {
              return null;
            }
          })(e, t);
        return { mark: n, measurement: o };
      }
      function Qe(e, t, n) {
        try {
          const o = Ze(e, t, n);
          return self.performance.mark(o), { name: o, params: n };
        } catch (o) {
          return { name: null, params: n };
        }
      }
      function Ze(e, t, n) {
        return et(Ye[e][t].name, n);
      }
      function et(e, t = {}) {
        const n = ["wpm", e];
        return (
          Object.keys(t).forEach((e) => {
            const o = t[e];
            o && n.push(o);
          }),
          n.join(":")
        );
      }
      const tt = {
        test: "edge_test_click/1.0",
        load: "web_pixels_manager_load/3.1",
        init: "web_pixels_manager_init/3.2",
        register: "web_pixels_manager_pixel_register/3.6",
        subscriberEventEmit: "web_pixels_manager_subscriber_event_emit/4.0",
        eventPublish: "web_pixels_manager_event_publish/1.6",
        consentAccepted: "web_pixels_manager_consent_accepted/1.2",
        unload: "web_pixels_manager_unload/1.2",
        visitor: "web_pixels_manager_visitor/1.0",
        subscriberEventEmitDom:
          "web_pixels_manager_subscriber_event_emit_dom/2.0",
        subscriberEventEmitPrivacy:
          "web_pixels_manager_subscriber_event_emit_privacy/1.0",
        helperLoad: "web_pixels_helper_load/1.0",
        helperWindowButtonClick: "web_pixels_helper_window_button_click/1.0",
      };
      function nt(e, t) {
        return { schemaId: tt[e], payload: t };
      }
      let ot = "";
      function it(e = "") {
        ot = We(e);
      }
      const rt = "/unstable/produce_batch",
        st = 500;
      let at = "wellKnown";
      const ct = new Array();
      let lt;
      function ut(e, t = !1) {
        const n = {
          schema_id: e.schemaId,
          payload: Xe(e.payload),
          metadata: { event_created_at_ms: ft() },
        };
        ct.push(n), t ? pt() : void 0 === lt && (lt = setTimeout(pt, st));
      }
      function dt(e, t, n = !1) {
        ut(nt(e, t), n);
      }
      function pt({ skipXhr: e } = { skipXhr: !1 }) {
        if (((lt = void 0), 0 === ct.length)) return;
        const t = [...ct];
        (ct.length = 0),
          (function (e, t) {
            if (0 === e.length) return !1;
            const n = { metadata: { event_sent_at_ms: ft() }, events: e };
            !(function (e, t) {
              const n = `${
                {
                  global: "https://monorail-edge.shopifysvc.com",
                  wellKnown: `${ot}/.well-known/shopify/monorail`,
                  staging: "https://monorail-edge-staging.shopifycloud.com",
                  test: "https://localhost",
                }[at]
              }${rt}`;
              try {
                if (self.navigator.sendBeacon.bind(self.navigator)(n, e))
                  return !0;
              } catch (o) {}
              if (!t) {
                const t = new XMLHttpRequest();
                try {
                  t.open("POST", n, !0),
                    t.setRequestHeader("Content-Type", "text/plain"),
                    t.send(e);
                } catch (i) {
                  Ke.notify(i, {
                    context: "v0/utilities/monorail/sendRequest",
                    unhandled: !1,
                  });
                }
              }
            })(JSON.stringify(n), t);
          })(t, e);
      }
      function ft() {
        return new Date().getTime();
      }
      class mt {
        constructor(e) {
          (this.maxSize = e), (this.cache = new Map());
        }
        get(e) {
          if (!this.cache.has(e)) return;
          const t = this.cache.get(e);
          return this.cache.delete(e), this.cache.set(e, t), t;
        }
        has(e) {
          return this.cache.has(e);
        }
        set(e, t) {
          if (this.cache.size >= this.maxSize) {
            const e = this.cache.keys().next().value;
            this.cache.delete(e);
          }
          return this.cache.set(e, t), this;
        }
        delete(e) {
          return this.cache.delete(e);
        }
        clear() {
          this.cache.clear();
        }
      }
      const ht = (e) => ("number" == typeof e ? new mt(e) : new Map()),
        bt = (...e) => JSON.stringify(e);
      function wt(e, { cache: t, cacheKey: n = bt } = {}) {
        function o(...t) {
          const i = o.cache,
            r = n.apply(this, t);
          if (i.has(r)) return i.get(r);
          {
            const n = e(...t);
            return i.set(r, n), n;
          }
        }
        return (o.cache = null != t ? t : ht()), o;
      }
      const vt = wt(
          (e = "") => {
            const t = e.indexOf("=");
            return -1 === t
              ? [e.trim(), void 0]
              : [e.slice(0, t).trim(), e.slice(t + 1).trim()];
          },
          { cache: ht(100), cacheKey: (e = "") => e }
        ),
        gt = wt(
          (e = "") =>
            e.split(";").reduce((e, t) => {
              const [n, o] = vt(t);
              if (n)
                try {
                  e[decodeURIComponent(n)] = decodeURIComponent(
                    null != o ? o : ""
                  );
                } catch {
                  e[n] = null != o ? o : "";
                }
              return e;
            }, Object.create(null)),
          { cache: ht(50), cacheKey: (e = "") => e }
        );
      let yt = !1;
      const xt = [],
        Et = (e) => {
          xt.push(e);
        };
      function _t(e) {
        const t = e;
        xt.forEach((e) => {
          e(t);
        });
      }
      let kt = !1;
      const Ct = ["analytics", "preferences", "marketing", "sale_of_data"];
      function St(e, t) {
        return e ? !t || Object.keys(e).every((n) => !e[n] || t[n]) : ie();
      }
      function At(e) {
        return new Promise((t, n) => {
          const o = {
            analytics: se(),
            marketing: re(),
            preferences: ae(),
            sale_of_data: ce(),
          };
          St(e, o)
            ? t(!0)
            : Et((n) => {
                (function (e, t) {
                  const n = e.detail;
                  return St(t, {
                    analytics: !0 === (null == n ? void 0 : n.analyticsAllowed),
                    marketing: !0 === (null == n ? void 0 : n.marketingAllowed),
                    preferences:
                      !0 === (null == n ? void 0 : n.preferencesAllowed),
                    sale_of_data:
                      !0 === (null == n ? void 0 : n.saleOfDataAllowed),
                  });
                })(n, e) && t(!0);
              });
        });
      }
      const Tt = new Set();
      class It extends Error {
        constructor(e) {
          super(e), (this.name = "VisitorError");
        }
      }
      let Nt;
      function Ot() {
        return (
          Nt ||
            (Nt = (function () {
              let e;
              try {
                var t, n;
                e =
                  null != (t = window.Shopify) && t.evids
                    ? null == (n = window.Shopify)
                      ? void 0
                      : n.evids("session_started", {
                          analyticsFramework: "wpm",
                        })
                    : Ne();
              } catch (o) {
                e = Ne();
              }
              return e;
            })()),
          Nt
        );
      }
      function Pt(e, t, n, o, i = {}) {
        try {
          const r = (function (e, { sampleRate: t, throttleDelay: n } = {}) {
            const o = (n) => {
              try {
                e(n);
              } catch (o) {
                Ke.notify(o, {
                  context:
                    "v0/createDomEventsListener/createEventListener/handler",
                  unhandled: !1,
                  options: { sampleRate: null != t ? t : 50 },
                });
              }
            };
            return "number" == typeof n
              ? (function (e, t, { leading: n = !0, trailing: o = !0 } = {}) {
                  if (t <= 0)
                    throw new Error(
                      "The throttle function requires a positive wait time above zero."
                    );
                  if (!n && !o)
                    throw new Error(
                      "The throttle function requires at least one of leading or trailing to be true, otherwise, its callback will never be called."
                    );
                  let i,
                    r,
                    s,
                    a = null,
                    c = 0;
                  function l() {
                    (c = !1 === n ? 0 : new Date().valueOf()),
                      (a = null),
                      i && (r = e.apply(s, i)),
                      (s = null),
                      (i = null);
                  }
                  return function (...u) {
                    const d = new Date().valueOf();
                    c || !1 !== n || (c = d);
                    const p = t - (d - c);
                    return (
                      (s = this),
                      (i = u),
                      p <= 0 || p > t
                        ? (a && (clearTimeout(a), (a = null)),
                          (c = d),
                          i && (r = e.apply(s, i)),
                          (s = null),
                          (i = null))
                        : a || !1 === o || (a = setTimeout(l, p)),
                      r
                    );
                  };
                })(o, n)
              : o;
          })(n, i);
          return (
            e.addEventListener(t, r, o),
            () => {
              e.removeEventListener(t, r, o);
            }
          );
        } catch (r) {
          Ke.notify(r, {
            context: "v0/createDomEventsListener/createEventListener",
            unhandled: !1,
          });
        }
        return () => {};
      }
      const Dt = new RegExp(
          [
            "password",
            "pass",
            "pw",
            "ssn",
            "sin",
            "social",
            "security",
            "cc",
            "card",
            "creditcard",
            "cvv",
            "cvc",
            "cvn",
            "billing",
            "license",
            "health",
            "secret",
            "unique",
          ]
            .map((e) => `^(.*[^a-z])?${e}([^a-z].*)?$`)
            .join("|"),
          "i"
        ),
        Rt = (e, t) => (
          "value" in t &&
            "string" == typeof t.value &&
            (e.hasAttribute("data-shopify-redact") ||
              ["id", "type", "name"].some((e) => {
                if (!(e in t)) return !1;
                const n = t[e];
                return "string" == typeof n && n.match(Dt);
              })) &&
            (t.value = "REDACTED"),
          t
        );
      function Lt(e, t, n) {
        const o = t.reduce(
          (t, o) => (
            (t[o] = (function (e, t, n) {
              var o, i;
              if (t in e) {
                const n = e[t];
                if (["number", "string", "boolean"].includes(typeof n))
                  return n;
              }
              return null != (o = null != (i = e.getAttribute(t)) ? i : n)
                ? o
                : null;
            })(e, o, null == n ? void 0 : n[o])),
            t
          ),
          {}
        );
        return Rt(e, o), o;
      }
      const $t = [
          HTMLInputElement,
          HTMLSelectElement,
          HTMLTextAreaElement,
          HTMLButtonElement,
        ],
        Mt = ["id", "name", "tagName", "type", "value"];
      function Ut(e) {
        return Lt(e, Mt);
      }
      function jt(e, t) {
        return t.reduce((t, n) => (n in e && (t[n] = e[n]), t), {});
      }
      const Ft = ["id", "href", "name", "tagName", "type", "value"];
      function Bt(e) {
        return Lt(e, Ft);
      }
      const zt = [
          "screenX",
          "screenY",
          "pageX",
          "pageY",
          "offsetX",
          "offsetY",
          "movementX",
          "movementY",
        ],
        Vt = zt.reduce((e, t) => ((e[t] = 0), e), {});
      const qt = { capture: !0, passive: !0 };
      function Ht() {
        let e = !1;
        try {
          const t = {
              get passive() {
                return (e = !0), !1;
              },
            },
            n = () => {};
          self.addEventListener("test", n, t),
            self.removeEventListener("test", n, t);
        } catch (t) {
          e = !1;
        }
        return !e || qt;
      }
      const Kt = ["action", "id"];
      function Xt(e) {
        const t = Ht();
        !(function (e, t) {
          Pt(
            window,
            "blur",
            (t) => {
              const n = null == t ? void 0 : t.target;
              if (
                !(
                  n instanceof HTMLInputElement ||
                  n instanceof HTMLSelectElement ||
                  n instanceof HTMLTextAreaElement
                )
              )
                return;
              const o = Ut(n);
              e.publishDomEvent("input_blurred", { element: o });
            },
            t
          );
        })(e, t),
          (function (e, t) {
            Pt(
              window,
              "change",
              (t) => {
                const n = null == t ? void 0 : t.target;
                if (
                  !(
                    n instanceof HTMLInputElement ||
                    n instanceof HTMLSelectElement ||
                    n instanceof HTMLTextAreaElement
                  )
                )
                  return;
                const o = { element: Ut(n) };
                e.publishDomEvent("input_changed", o);
              },
              t
            );
          })(e, t),
          (function (e, t) {
            Pt(
              self.window,
              "click",
              (t) => {
                const n = null == t ? void 0 : t.target;
                n instanceof Element &&
                  e.publishDomEvent(
                    "clicked",
                    (function (e, t) {
                      return { element: Bt(t), ...Vt, ...jt(e, zt) };
                    })(t, n)
                  );
              },
              t,
              { throttleDelay: 50 }
            );
          })(e, t),
          (function (e, t) {
            Pt(
              window,
              "focus",
              (t) => {
                const n = null == t ? void 0 : t.target;
                if (
                  !(
                    n instanceof HTMLInputElement ||
                    n instanceof HTMLSelectElement ||
                    n instanceof HTMLTextAreaElement
                  )
                )
                  return;
                const o = Ut(n);
                e.publishDomEvent("input_focused", { element: o });
              },
              t
            );
          })(e, t),
          (function (e, t) {
            Pt(
              window,
              "submit",
              (t) => {
                const n = null == t ? void 0 : t.target;
                n instanceof HTMLFormElement &&
                  e.publishDomEvent("form_submitted", {
                    element: {
                      ...Lt(n, Kt),
                      elements: Array.from(n.elements)
                        .filter((e) => $t.some((t) => e instanceof t))
                        .map((e) => Ut(e)),
                    },
                  });
              },
              t
            );
          })(e, t);
      }
      let Wt = (function (e) {
          return (
            (e.Custom = "custom"), (e.Dom = "dom"), (e.Standard = "standard"), e
          );
        })({}),
        Gt = (function (e) {
          return (e.ExtendedDom = "extended-dom"), (e.Meta = "meta"), e;
        })({});
      function Yt() {
        return /checkouts\/(.+)\/(thank_you|thank-you|post_purchase)$/.test(
          self.location.pathname
        );
      }
      const Jt = {
          string: "[object String]",
          number: "[object Number]",
          boolean: "[object Boolean]",
          undefined: "[object Undefined]",
          null: "[object Null]",
          object: "[object Object]",
        },
        Qt = [Jt.string, Jt.number, Jt.boolean, Jt.undefined, Jt.null],
        Zt = (e) =>
          null === e
            ? Jt.null
            : void 0 === e
            ? Jt.undefined
            : Object.prototype.toString.call(e);
      function en(e) {
        let t = null,
          n = null;
        function o(e) {
          return Zt(e) === Jt.object;
        }
        return void 0 === e || o(e)
          ? {
              isValid: (function e(i, r = "root") {
                if (Array.isArray(i))
                  return i.every((t, n) => e(t, `${r}[${n}]`));
                if (o(i))
                  return Object.keys(i).every((t) => e(i[t], `${r}.${t}`));
                const s = Zt(i),
                  a = Qt.includes(s);
                return (
                  a ||
                    ((n = r),
                    (t = `Value of type "${s}" at "${n}" must be one of the following types: ${Qt.join(
                      ", "
                    )}.`)),
                  a
                );
              })(e, "root"),
              error: t,
              errorKey: n,
            }
          : ((n = "root"),
            (t = `Value of type "${Zt(e)}" at "${n}" must be an object.`),
            { isValid: !1, error: t, errorKey: n });
      }
      let tn, nn;
      function on() {
        if (void 0 !== tn) return tn;
        try {
          return (
            window.localStorage.setItem("local-storage-test", "test"),
            window.localStorage.removeItem("local-storage-test"),
            (tn = !0),
            !0
          );
        } catch (e) {
          return (tn = !1), !1;
        }
      }
      function rn() {
        if (void 0 !== nn) return nn;
        try {
          return (
            window.sessionStorage.setItem("session-storage-test", "test"),
            window.sessionStorage.removeItem("session-storage-test"),
            (nn = !0),
            !0
          );
        } catch (e) {
          return (nn = !1), !1;
        }
      }
      const sn = 240,
        an = 300,
        cn = 300,
        ln = 200,
        un = "remote-ui::ready";
      function dn(e, { terminate: t = !0, targetOrigin: n = "*" } = {}) {
        var o;
        if ("undefined" == typeof window)
          throw new Error(
            "You can only run fromIframe() in a browser context, but no window was found."
          );
        const i = new WeakMap();
        let r;
        function s(t) {
          t.source === e.contentWindow &&
            t.data === un &&
            (window.removeEventListener("message", s), r());
        }
        null === (o = e.contentWindow) || void 0 === o || o.postMessage(un, n);
        const a = new Promise((e) => {
          (r = e), window.addEventListener("message", s);
        });
        return {
          async postMessage(t, o) {
            var i;
            await a,
              null === (i = e.contentWindow) ||
                void 0 === i ||
                i.postMessage(t, n, o);
          },
          addEventListener(t, n) {
            const o = (t) => {
              t.source === e.contentWindow && n(t);
            };
            i.set(n, o), self.addEventListener(t, o);
          },
          removeEventListener(e, t) {
            const n = i.get(t);
            null != n && (i.delete(t), self.removeEventListener(e, n));
          },
          terminate() {
            window.removeEventListener("message", s), t && e.remove();
          },
        };
      }
      const pn = Symbol.for("RemoteUi::Retain"),
        fn = Symbol.for("RemoteUi::Release"),
        mn = Symbol.for("RemoteUi::RetainedBy");
      class hn {
        constructor() {
          this.memoryManaged = new Set();
        }
        add(e) {
          this.memoryManaged.add(e), e[mn].add(this), e[pn]();
        }
        release() {
          for (const e of this.memoryManaged) e[mn].delete(this), e[fn]();
          this.memoryManaged.clear();
        }
      }
      function bn(e) {
        return Boolean(e && e[pn] && e[fn]);
      }
      function wn(e, { deep: t = !0 } = {}) {
        return vn(e, t, new Map());
      }
      function vn(e, t, n) {
        const o = n.get(e);
        if (null != o) return o;
        const i = bn(e);
        if ((i && e[pn](), n.set(e, i), t)) {
          if (Array.isArray(e)) {
            const o = e.reduce((e, o) => vn(o, t, n) || e, i);
            return n.set(e, o), o;
          }
          if (gn(e)) {
            const o = Object.keys(e).reduce((o, i) => vn(e[i], t, n) || o, i);
            return n.set(e, o), o;
          }
        }
        return n.set(e, i), i;
      }
      function gn(e) {
        if (null == e || "object" != typeof e) return !1;
        const t = Object.getPrototypeOf(e);
        return null == t || t === Object.prototype;
      }
      const yn = "_@f";
      function xn(e) {
        const t = new Map(),
          n = new Map(),
          o = new Map();
        return {
          encode: function o(i, r = new Map()) {
            if (null == i) return [i];
            const s = r.get(i);
            if (s) return s;
            if ("object" == typeof i) {
              if (Array.isArray(i)) {
                r.set(i, [void 0]);
                const e = [],
                  t = [
                    i.map((t) => {
                      const [n, i = []] = o(t, r);
                      return e.push(...i), n;
                    }),
                    e,
                  ];
                return r.set(i, t), t;
              }
              if (gn(i)) {
                r.set(i, [void 0]);
                const e = [],
                  t = [
                    Object.keys(i).reduce((t, n) => {
                      const [s, a = []] = o(i[n], r);
                      return e.push(...a), { ...t, [n]: s };
                    }, {}),
                    e,
                  ];
                return r.set(i, t), t;
              }
            }
            if ("function" == typeof i) {
              if (t.has(i)) {
                const e = t.get(i),
                  n = [{ [yn]: e }];
                return r.set(i, n), n;
              }
              const o = e.uuid();
              t.set(i, o), n.set(o, i);
              const s = [{ [yn]: o }];
              return r.set(i, s), s;
            }
            const a = [i];
            return r.set(i, a), a;
          },
          decode: i,
          async call(e, t) {
            const o = new hn(),
              r = n.get(e);
            if (null == r)
              throw new Error(
                "You attempted to call a function that was already released."
              );
            try {
              const e = bn(r) ? [o, ...r[mn]] : [o];
              return await r(...i(t, e));
            } finally {
              o.release();
            }
          },
          release(e) {
            const o = n.get(e);
            o && (n.delete(e), t.delete(o));
          },
          terminate() {
            t.clear(), n.clear(), o.clear();
          },
        };
        function i(t, n) {
          if ("object" == typeof t) {
            if (null == t) return t;
            if (Array.isArray(t)) return t.map((e) => i(e, n));
            if (yn in t) {
              const i = t[yn];
              if (o.has(i)) return o.get(i);
              let r = 0,
                s = !1;
              const a = () => {
                  (r -= 1), 0 === r && ((s = !0), o.delete(i), e.release(i));
                },
                c = () => {
                  r += 1;
                },
                l = new Set(n),
                u = (...t) => {
                  if (s)
                    throw new Error(
                      "You attempted to call a function that was already released."
                    );
                  if (!o.has(i))
                    throw new Error(
                      "You attempted to call a function that was already revoked."
                    );
                  return e.call(i, t);
                };
              Object.defineProperties(u, {
                [fn]: { value: a, writable: !1 },
                [pn]: { value: c, writable: !1 },
                [mn]: { value: l, writable: !1 },
              });
              for (const e of l) e.add(u);
              return o.set(i, u), u;
            }
            if (gn(t))
              return Object.keys(t).reduce(
                (e, o) => ({ ...e, [o]: i(t[o], n) }),
                {}
              );
          }
          return t;
        }
      }
      const En = 0,
        _n = 1,
        kn = 2,
        Cn = 3,
        Sn = 5,
        An = 6;
      function Tn(
        e,
        { uuid: t = In, createEncoder: n = xn, callable: o } = {}
      ) {
        let i = !1,
          r = e;
        const s = new Map(),
          a = new Map(),
          c = (function (e, t) {
            let n;
            if (null == t) {
              if ("function" != typeof Proxy)
                throw new Error(
                  "You must pass an array of callable methods in environments without Proxies."
                );
              const t = new Map();
              n = new Proxy(
                {},
                {
                  get(n, o) {
                    if (t.has(o)) return t.get(o);
                    const i = e(o);
                    return t.set(o, i), i;
                  },
                }
              );
            } else {
              n = {};
              for (const o of t)
                Object.defineProperty(n, o, {
                  value: e(o),
                  writable: !1,
                  configurable: !0,
                  enumerable: !0,
                });
            }
            return n;
          })(p, o),
          l = n({
            uuid: t,
            release(e) {
              u(Cn, [e]);
            },
            call(e, n, o) {
              const i = t(),
                r = f(i, o),
                [s, a] = l.encode(n);
              return u(Sn, [i, e, s], a), r;
            },
          });
        return (
          r.addEventListener("message", d),
          {
            call: c,
            replace(e) {
              const t = r;
              (r = e),
                t.removeEventListener("message", d),
                e.addEventListener("message", d);
            },
            expose(e) {
              for (const t of Object.keys(e)) {
                const n = e[t];
                "function" == typeof n ? s.set(t, n) : s.delete(t);
              }
            },
            callable(...e) {
              if (null != o)
                for (const t of e)
                  Object.defineProperty(c, t, {
                    value: p(t),
                    writable: !1,
                    configurable: !0,
                    enumerable: !0,
                  });
            },
            terminate() {
              u(kn, void 0), m(), r.terminate && r.terminate();
            },
          }
        );
        function u(e, t, n) {
          i || r.postMessage(t ? [e, t] : [e], n);
        }
        async function d(e) {
          const { data: t } = e;
          if (null != t && Array.isArray(t))
            switch (t[0]) {
              case kn:
                m();
                break;
              case En: {
                const e = new hn(),
                  [o, i, r] = t[1],
                  a = s.get(i);
                try {
                  if (null == a)
                    throw new Error(
                      `No '${i}' method is exposed on this endpoint`
                    );
                  const [t, n] = l.encode(await a(...l.decode(r, [e])));
                  u(_n, [o, void 0, t], n);
                } catch (n) {
                  const { name: e, message: t, stack: i } = n;
                  throw (u(_n, [o, { name: e, message: t, stack: i }]), n);
                } finally {
                  e.release();
                }
                break;
              }
              case _n: {
                const [e] = t[1];
                a.get(e)(...t[1]), a.delete(e);
                break;
              }
              case Cn: {
                const [e] = t[1];
                l.release(e);
                break;
              }
              case An: {
                const [e] = t[1];
                a.get(e)(...t[1]), a.delete(e);
                break;
              }
              case Sn: {
                const [e, o, i] = t[1];
                try {
                  const t = await l.call(o, i),
                    [n, r] = l.encode(t);
                  u(An, [e, void 0, n], r);
                } catch (n) {
                  const { name: t, message: o, stack: i } = n;
                  throw (u(An, [e, { name: t, message: o, stack: i }]), n);
                }
                break;
              }
            }
        }
        function p(e) {
          return (...n) => {
            if (i)
              return Promise.reject(
                new Error(
                  "You attempted to call a function on a terminated web worker."
                )
              );
            if ("string" != typeof e && "number" != typeof e)
              return Promise.reject(
                new Error(
                  `Can’t call a symbol method on a remote endpoint: ${e.toString()}`
                )
              );
            const o = t(),
              r = f(o),
              [s, a] = l.encode(n);
            return u(En, [o, e, s], a), r;
          };
        }
        function f(e, t) {
          return new Promise((n, o) => {
            a.set(e, (e, i, r) => {
              if (null == i) n(r && l.decode(r, t));
              else {
                const e = new Error();
                Object.assign(e, i), o(e);
              }
            });
          });
        }
        function m() {
          var e;
          (i = !0),
            s.clear(),
            a.clear(),
            null === (e = l.terminate) || void 0 === e || e.call(l),
            r.removeEventListener("message", d);
        }
      }
      function In() {
        return `${Nn()}-${Nn()}-${Nn()}-${Nn()}`;
      }
      function Nn() {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
      }
      const On = (e, t, { important: n = !1 } = {}) =>
          Object.keys(t).forEach((o) => {
            const i = t[o],
              [r = "", s = n ? "important" : void 0] = Array.isArray(i)
                ? i
                : [i];
            e.style.setProperty(o, r, s);
          }),
        Pn = "web-pixels-helper-sandbox-handle",
        Dn = { height: "26px", width: "21px", top: "12px", left: "12px" },
        Rn = { height: "100%", width: "100%", top: "0px", left: "0px" };
      const Ln = (e, t) => {
        const n = document.createElement(e);
        return (
          Object.keys(t).forEach((e) => {
            const o = t[e];
            void 0 !== o && n.setAttribute(e, o);
          }),
          n
        );
      };
      function $n({ id: e, tagName: t, attributes: n, styles: o }) {
        const i = document.querySelector(`${t}#${e}`);
        if (i) return [i, !1];
        const r = Ln(t, { ...n, id: e });
        return On(r, o.props, o.options), [r, !0];
      }
      async function Mn({ containerSpec: e, iframeSpec: t }) {
        await new Promise((e) => {
          if (document.body) e();
          else {
            const t = () => {
              "loading" !== document.readyState &&
                (e(), document.removeEventListener("readystatechange", t));
            };
            document.addEventListener("readystatechange", t);
          }
        });
        const n = e.attributes || {},
          [o, i] = $n({
            id: e.id,
            tagName: e.tagName,
            styles: { props: e.styles, options: { important: !0 } },
            attributes: { tabIndex: "-1", ...n },
          });
        i && document.body.appendChild(o);
        const r = t.attributes || {},
          [s, a] = $n({
            id: t.id,
            tagName: "iframe",
            styles: { props: t.styles, options: { important: !0 } },
            attributes: { tabIndex: "-1", ...r, name: t.id, src: t.src },
          });
        if (a) {
          if (t.privileges) {
            if (
              !(function (e) {
                return "sandbox" in e;
              })(s)
            )
              throw new Ve(
                "browser does not support the sandbox attribute on IFrames"
              );
            s.setAttribute("sandbox", t.privileges.join(" "));
          }
          o.appendChild(s);
        }
        return { container: o, iframe: s };
      }
      const Un = new Set();
      function jn(e) {
        if (!e) return null;
        try {
          return JSON.parse(atob(e));
        } catch (t) {
          return (
            Ke.notify(t, {
              context: "v0/createWebPixelsHelper/state/deserializeState",
              unhandled: !1,
              severity: "warning",
            }),
            null
          );
        }
      }
      const Fn = "webPixelDebug";
      class Bn extends Error {
        constructor(...e) {
          super(...e),
            (this.name = "HelperStateNotValidError"),
            (this.message = "Helper state is not valid.");
        }
      }
      function zn() {
        const e = (function (e) {
          return { height: sn, ...(e || {}) };
        })(
          (function () {
            const e = jn(new URLSearchParams(self.location.search).get(Fn));
            return e || (rn() ? jn(sessionStorage.getItem(Fn)) : null);
          })()
        );
        if (
          !(function (e) {
            return (
              !(!e || !e.pixel) &&
              "string" == typeof e.pixel.type &&
              "string" == typeof e.pixel.id &&
              "number" == typeof e.height
            );
          })(e)
        )
          throw new Bn();
        return e;
      }
      async function Vn({ extensionsBaseUrl: e, onHelperReady: t }) {
        const n = await (async function ({ extensionsBaseUrl: e }) {
            const t = `${e}/web-pixels-helper/h${r}m.html`,
              { height: n } = zn();
            return Mn({
              containerSpec: {
                id: "web-pixels-helper-sandbox-container",
                tagName: "dialog",
                attributes: { popover: "manual" },
                styles: {
                  top: "max(0px, calc(100% - 770px))",
                  bottom: "auto",
                  right: "30px",
                  left: "auto",
                  width: "393px",
                  height: `${n}px`,
                  position: "fixed",
                  border: "0",
                  opacity: "0",
                  margin: "0",
                  padding: "0",
                  background: "transparent",
                  overflow: "hidden",
                  visibility: "hidden",
                  transform: "translate(0px, 0px)",
                  "border-radius": "16px",
                  "box-shadow":
                    "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px",
                  transition: `opacity ${ln}ms ease-in-out, height ${cn}ms ease-in-out, top ${cn}ms ease-in-out, box-shadow ${an}ms`,
                },
              },
              iframeSpec: {
                id: "web-pixels-helper-sandbox-iframe",
                src: t,
                styles: {
                  border: "none",
                  background: "#fff",
                  clip: "initial",
                  display: "inline",
                  margin: "0",
                  opacity: "1",
                  padding: "0",
                  visibility: "visible",
                  width: "100%",
                  height: "100%",
                  "border-radius": "16px",
                },
              },
            });
          })({ extensionsBaseUrl: e }),
          o = Tn(dn(n.iframe), {
            callable: [
              "initializeHelper",
              "logConsentGranted",
              "logPixelRegister",
              "logSubscribe",
              "logEvent",
            ],
          });
        return (
          o.expose({ ...qn(n, t) }),
          (function (e) {
            if (e.querySelector(`#${Pn}`)) return;
            const t = document.createElement("div");
            var n;
            t.setAttribute("id", Pn),
              On(
                t,
                {
                  display: "block",
                  position: "absolute",
                  cursor: "grab",
                  background: "transparent",
                  ...Dn,
                },
                { important: !0 }
              ),
              e.appendChild(t),
              (n = { container: e, handle: t }).handle.addEventListener(
                "mousedown",
                (function ({ container: e, handle: t }, n) {
                  function o(t) {
                    t.preventDefault(),
                      (n[1] = n[3] - t.clientX),
                      (n[2] = n[4] - t.clientY),
                      (n[3] = t.clientX),
                      (n[4] = t.clientY);
                    const o = new DOMMatrix(getComputedStyle(e).transform),
                      i = o.e,
                      r = o.f,
                      s = i - n[1],
                      a = r - n[2];
                    On(
                      e,
                      { transform: `translate(${s}px, ${a}px)` },
                      { important: !0 }
                    );
                  }
                  function i(e) {
                    On(t, Dn, { important: !0 }),
                      self.removeEventListener("mouseup", i),
                      self.removeEventListener("mousemove", o);
                  }
                  return (e) => {
                    (n[3] = e.clientX),
                      (n[4] = e.clientY),
                      self.addEventListener("mouseup", i),
                      self.addEventListener("mousemove", o),
                      On(t, Rn, { important: !0 });
                  };
                })(n, { 1: 0, 2: 0, 3: 0, 4: 0 })
              );
          })(n.container),
          o
        );
      }
      function qn(e, t) {
        return {
          async setHelperReady() {
            e.container.showPopover(),
              On(
                e.container,
                { visibility: "visible", opacity: "1" },
                { important: !0 }
              ),
              t();
          },
          setHeight: ({ height: t }) =>
            new Promise((n, o) => {
              try {
                On(e.container, { height: `${t}px` }, { important: !0 }), n(!0);
              } catch (i) {
                n(!1);
              }
            }),
          async proceedWithoutConsent() {
            try {
              const { success: e } = await le(
                Ct.reduce((e, t) => ((e[t] = !0), e), {})
              );
              return Boolean(e);
            } catch (e) {
              return !1;
            }
          },
          async setClipboard({ text: e }) {
            try {
              return self.navigator.clipboard.writeText(e), !0;
            } catch (t) {
              return !1;
            }
          },
          async sendMonorailEvent({ schemaKey: e, payload: t }) {
            dt(e, t);
          },
        };
      }
      let Hn = (function (e) {
        return (e.Standard = "standard"), (e.Advanced = "advanced"), e;
      })({});
      const Kn = {
          extensionsBaseUrl: "",
          endpoint: null,
          replayQueue: [],
          message(e, t) {
            try {
              this.endpoint
                ? this.endpoint.call[e](t)
                : this.replayQueue.push(() => {
                    this.endpoint.call[e](t);
                  });
            } catch (n) {
              Ke.notify(n, {
                context: "v0/createWebPixelsHelper/message",
                unhandled: !1,
                severity: "warning",
              });
            }
          },
          init(e) {
            try {
              this.extensionsBaseUrl = e.extensionsBaseUrl;
              const n = zn(),
                r = e.webPixelsConfigList.find(
                  (e) => e.type === n.pixel.type && e.id === n.pixel.id
                );
              if (
                (function (e, t) {
                  return (
                    (e.pixel.type === Oe.Custom || e.pixel.type === Oe.App) &&
                    !e.pixel.id.match(/shopify/i) &&
                    void 0 !== t &&
                    e.pixel.id === t.id &&
                    e.pixel.type === t.type
                  );
                })(n, r)
              )
                try {
                  !(function (e) {
                    !(function (e) {
                      if (!rn())
                        return (
                          (t =
                            "Session storage is not available. The Pixel Helper experience may be degraded."),
                          void (
                            Un.has(t) ||
                            (Un.add(t), "console" in self && console.warn(t))
                          )
                        );
                      var t;
                      const n = (function (e) {
                        try {
                          return btoa(JSON.stringify(e));
                        } catch (t) {
                          return (
                            Ke.notify(t, {
                              context:
                                "v0/createWebPixelsHelper/state/serializeState",
                              unhandled: !1,
                              severity: "warning",
                            }),
                            null
                          );
                        }
                      })(e);
                      n && sessionStorage.setItem(Fn, n);
                    })(e);
                  })(n);
                  let t = !1;
                  const { shopId: s, surface: a = Re.Unknown } = e,
                    c = nt("helperLoad", {
                      version: o,
                      pageUrl: self.location.href,
                      surface: a,
                      status: "loaded",
                      bundleTarget: i,
                      shopId: s,
                    });
                  Vn({
                    extensionsBaseUrl: this.extensionsBaseUrl,
                    onHelperReady: () => {
                      t || (ut(c), (t = !0));
                    },
                  })
                    .then((t) => {
                      t &&
                        ((this.endpoint = t),
                        this.message("initializeHelper", {
                          pixelUid: { id: r.id, type: r.type },
                          pixelName: r.name || "",
                          config: e,
                          collapsed: n.height < sn,
                          loggerLevel:
                            on() &&
                            "true" ===
                              self.localStorage.getItem("pixel-helper-advanced")
                              ? Hn.Advanced
                              : Hn.Standard,
                        }),
                        this.replayQueue.forEach((e) => e()),
                        (this.replayQueue = []));
                    })
                    .catch((t) => {
                      Ke.notify(t, {
                        context:
                          "v0/createWebPixelsHelper/init/createHelperSandbox",
                        unhandled: !1,
                        severity: "warning",
                      });
                      const { shopId: n, surface: r = Re.Unknown } = e;
                      dt("helperLoad", {
                        version: o,
                        pageUrl: self.location.href,
                        surface: r,
                        status: "helper-create-error",
                        bundleTarget: i,
                        shopId: n,
                      });
                    });
                } catch (t) {
                  Ke.notify(t, {
                    context: "v0/createWebPixelsHelper/init/selectedPixelValid",
                    unhandled: !1,
                    severity: "warning",
                  });
                  const { shopId: n, surface: r = Re.Unknown } = e;
                  dt("helperLoad", {
                    version: o,
                    pageUrl: self.location.href,
                    surface: r,
                    status: "failed",
                    bundleTarget: i,
                    shopId: n,
                  });
                }
            } catch (t) {
              if (!(t instanceof Bn)) {
                Ke.notify(t, {
                  context: "v0/createWebPixelsHelper/init",
                  unhandled: !1,
                  severity: "warning",
                });
                const { shopId: n, surface: r = Re.Unknown } = e;
                dt("helperLoad", {
                  version: o,
                  pageUrl: self.location.href,
                  surface: r,
                  status: "helper-read-error",
                  bundleTarget: i,
                  shopId: n,
                });
              }
            }
          },
        },
        Xn = {
          all_events: Gt.Meta,
          all_standard_events: Gt.Meta,
          all_custom_events: Gt.Meta,
          all_dom_events: Gt.Meta,
          checkout_address_info_submitted: Wt.Standard,
          checkout_completed: Wt.Standard,
          checkout_started: Wt.Standard,
          payment_info_submitted: Wt.Standard,
          collection_viewed: Wt.Standard,
          checkout_contact_info_submitted: Wt.Standard,
          page_viewed: Wt.Standard,
          product_added_to_cart: Wt.Standard,
          product_removed_from_cart: Wt.Standard,
          product_viewed: Wt.Standard,
          product_variant_viewed: Wt.Standard,
          search_submitted: Wt.Standard,
          cart_viewed: Wt.Standard,
          checkout_shipping_info_submitted: Wt.Standard,
          form_error: Wt.Standard,
          extension_error: Wt.Standard,
          input_changed: Wt.Dom,
          input_blurred: Wt.Dom,
          input_focused: Wt.Dom,
          form_submitted: Wt.Dom,
          clicked: Wt.Dom,
          dom_mouse_moved: Gt.ExtendedDom,
          dom_window_resized: Gt.ExtendedDom,
          dom_scroll: Gt.ExtendedDom,
          dom_clipboard: Gt.ExtendedDom,
          dom_selection_changed: Gt.ExtendedDom,
        };
      function Wn(e) {
        return (function (e) {
          return e in Xn;
        })(e)
          ? Xn[e]
          : Wt.Custom;
      }
      function Gn(e) {
        return Wn(e) === Wt.Standard;
      }
      function Yn(e) {
        return Wn(e) === Wt.Dom;
      }
      function Jn(e) {
        return Wn(e) === Gt.ExtendedDom;
      }
      function Qn() {
        return {
          document: {
            location: {
              href: window.location.href,
              hash: window.location.hash,
              host: window.location.host,
              hostname: window.location.hostname,
              origin: window.location.origin,
              pathname: window.location.pathname,
              port: window.location.port,
              protocol: window.location.protocol,
              search: window.location.search,
            },
            referrer: document.referrer,
            characterSet: document.characterSet,
            title: document.title,
          },
          navigator: {
            language: navigator.language,
            cookieEnabled: navigator.cookieEnabled,
            languages: navigator.languages,
            userAgent: navigator.userAgent,
          },
          window: {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth,
            pageXOffset: window.pageXOffset,
            pageYOffset: window.pageYOffset,
            location: {
              href: window.location.href,
              hash: window.location.hash,
              host: window.location.host,
              hostname: window.location.hostname,
              origin: window.location.origin,
              pathname: window.location.pathname,
              port: window.location.port,
              protocol: window.location.protocol,
              search: window.location.search,
            },
            origin: window.origin,
            screen: {
              height: window.screen.height,
              width: window.screen.width,
            },
            screenX: window.screenX,
            screenY: window.screenY,
            scrollX: window.scrollX,
            scrollY: window.scrollY,
          },
        };
      }
      const Zn = (e) => {
        var t;
        return {
          ...e,
          clientId: null != (t = gt(document.cookie)._shopify_y) ? t : "",
          timestamp: new Date().toISOString(),
          context: Qn(),
          id: "string" == typeof e.id && e.id.length > 0 ? e.id : Ne(),
        };
      };
      const eo = "all_standard_events",
        to = "all_custom_events",
        no = "all_dom_events",
        oo = ["form_error", "extension_error"];
      class io extends Error {
        constructor(e) {
          super(e), (this.name = "PublishDomEventError");
        }
      }
      function ro(e) {
        const t = new ke({
            bufferSize: Number.POSITIVE_INFINITY,
            subscribeAllKey: eo,
            eligibility: Me,
          }),
          n = new ke({ bufferSize: 1e3, subscribeAllKey: to, eligibility: Me }),
          r = new ke({
            bufferSize: 1e3,
            replayKeep: "newest",
            subscribeAllKey: no,
            eligibility: Me,
          }),
          s = new ke({
            bufferSize: 1e3,
            replayKeep: "newest",
            eligibility: Me,
          });
        e.initData;
        let c = !1;
        return {
          publish(n, r, s) {
            var l, u, d, p, f;
            if ("string" != typeof n)
              throw new Error(
                "Expected event name to be a string, but got " + typeof n
              );
            if (!Gn(n)) return !1;
            if (oo.includes(n) && !ye("a545847e")) return !1;
            if (
              "checkout_completed" === n &&
              Yt() &&
              "1" === gt(document.cookie)[a]
            )
              return !1;
            const m = en(r);
            if (!m.isValid) return console.error(m.error), !1;
            const h = (function (e, t, n) {
                let o;
                const i = { analyticsFramework: "wpm" };
                try {
                  var r, s;
                  "product_added_to_cart" === e &&
                    "cartLine" in n &&
                    (i.cacheKey = (function (
                      { cartLine: e } = { cartLine: null }
                    ) {
                      const t = null == e ? void 0 : e.merchandise.product.id,
                        n = null == e ? void 0 : e.merchandise.id;
                      if (t && n) return `${t}-${n}`;
                    })(n)),
                    (o =
                      null == (r = window.Shopify) || null == (s = r.evids)
                        ? void 0
                        : s.call(r, e, i));
                } catch {}
                return Zn({ id: o, name: e, data: n, type: Wt.Standard });
              })(n, 0, r),
              b =
                null == (l = h.data) || null == (u = l.checkout)
                  ? void 0
                  : u.token;
            return (
              dt("eventPublish", {
                version: o,
                bundleTarget: i,
                pageUrl: self.location.href,
                shopId: e.shopId,
                surface: e.surface || Re.Unknown,
                eventName: h.name,
                eventType: "standard",
                extensionId:
                  null == s || null == (d = s.extension)
                    ? void 0
                    : d.extensionId,
                extensionAppId:
                  null == s || null == (p = s.extension) ? void 0 : p.appId,
                extensionType:
                  null == s || null == (f = s.extension) ? void 0 : f.type,
                userCanBeTracked: ie().toString(),
                shopPrefs: "unknown",
                eventId: h.id,
                checkoutToken: b,
                serverEventId: null == s ? void 0 : s.eventId,
              }),
              (function (e) {
                "checkout_completed" === e &&
                  (function () {
                    if (Yt()) {
                      const e = self.location.pathname
                          .split("/")
                          .slice(0, -1)
                          .join("/"),
                        t = new Date();
                      t.setMonth(t.getMonth() + 2),
                        (document.cookie = `${a}=1; expires=${t}; path=${e}`);
                    }
                  })();
              })(n),
              c ||
                ((c = !0),
                (w = e.shopId),
                (v = e.surface || Re.Unknown),
                Tt.add(() =>
                  (function (e, t) {
                    yt ||
                      ((yt = !0),
                      dt("consentAccepted", {
                        version: o,
                        bundleTarget: i,
                        shopId: e,
                        surface: t,
                        shopPrefs: "unknown",
                      }));
                  })(w, v)
                )),
              t.publish(n, h)
            );
            var w, v;
          },
          publishCustomEvent(t, r, s) {
            var a, c, l;
            if ("string" != typeof t)
              throw new Error(
                "Expected event name to be a string, but got " + typeof t
              );
            if (
              !(function (e) {
                return Wn(e) === Wt.Custom;
              })(t)
            )
              return !1;
            const u = en(r);
            if (!u.isValid) return console.error(u.error), !1;
            const d = (function (e, t, n = null) {
              return Zn({ name: e, customData: n, type: Wt.Custom });
            })(t, 0, r);
            return (
              dt("eventPublish", {
                version: o,
                bundleTarget: i,
                pageUrl: self.location.href,
                shopId: e.shopId,
                surface: e.surface || Re.Unknown,
                eventName: d.name,
                eventType: "custom",
                extensionId:
                  null == s || null == (a = s.extension)
                    ? void 0
                    : a.extensionId,
                extensionAppId:
                  null == s || null == (c = s.extension) ? void 0 : c.appId,
                extensionType:
                  null == s || null == (l = s.extension) ? void 0 : l.type,
                eventId: d.id,
              }),
              n.publish(t, d, s)
            );
          },
          publishDomEvent(e, t, n) {
            if ("string" != typeof e) {
              const t = JSON.stringify(e);
              throw new io(
                `Expected event name "${t}" to be a string, but got ${typeof e}`
              );
            }
            if (!Yn(e) && !Jn(e))
              throw new io(`Event name "${e}" is not a supported DOM Event`);
            if (Jn(e) && !ye(xe)) return !1;
            const o = en(t);
            if (!o.isValid)
              throw new io(
                `Input Validation Error for event ${e}: ${
                  o.error
                }\nPayload: ${JSON.stringify(t)}`
              );
            const i = (function (e, t) {
              return Zn({ name: e, data: t, type: Wt.Dom });
            })(e, t);
            return Jn(e) ? s.publish(e, i) : r.publish(e, i);
          },
          subscribe(a, c, l = {}) {
            const u = Ne(),
              d = async (t) => {
                var n, r, s, d, p, f, m, h;
                if (
                  e.surface === Re.CheckoutOneSdk &&
                  l.scope !== $e.CheckoutOneSdk
                )
                  return;
                const b = {
                    configuration:
                      null == (n = l.pixelRuntimeConfig)
                        ? void 0
                        : n.configuration,
                    eventPayloadVersion:
                      l.schemaVersion ||
                      (null == (r = l.pixelRuntimeConfig)
                        ? void 0
                        : r.eventPayloadVersion) ||
                      "unknown",
                    id:
                      (null == (s = l.pixelRuntimeConfig) ? void 0 : s.id) ||
                      "unknown",
                    type:
                      (null == (d = l.pixelRuntimeConfig) ? void 0 : d.type) ||
                      "unknown",
                    runtimeContext:
                      (null == (p = l.pixelRuntimeConfig)
                        ? void 0
                        : p.runtimeContext) || "unknown",
                    restrictions:
                      null == (f = l.pixelRuntimeConfig)
                        ? void 0
                        : f.restrictions,
                    scriptVersion:
                      (null == (m = l.pixelRuntimeConfig)
                        ? void 0
                        : m.scriptVersion) || "unknown",
                    apiClientId:
                      null == (h = l.pixelRuntimeConfig)
                        ? void 0
                        : h.apiClientId,
                  },
                  w = {
                    pixelUid: { id: b.id, type: b.type },
                    event: t,
                    eventNameAsSubscribed: a,
                    subscriptionId: u,
                    status: "FAIL",
                  };
                let v;
                try {
                  await c.call(t, t), (w.status = "SUCCESS");
                } catch (C) {
                  v = C;
                }
                Kn.message("logEvent", w);
                const g = Wn(t.name),
                  y = {
                    version: o,
                    bundleTarget: i,
                    pageUrl: self.location.href,
                    shopId: l.shopId,
                    surface: l.surface,
                    pixelId: b.id,
                    pixelAppId: De(b),
                    pixelSource: b.type,
                    pixelRuntimeContext: b.runtimeContext,
                    pixelScriptVersion: b.scriptVersion,
                    pixelConfiguration: b.configuration,
                    pixelEventSchemaVersion: b.eventPayloadVersion,
                    eventName: t.name,
                    eventId: t.id,
                  },
                  x = v ? "FAILURE" : "SUCCESS",
                  E = v ? String(v) : void 0;
                if (g !== Wt.Dom) {
                  let e;
                  var _, k;
                  Gn(t.name) &&
                    (e =
                      null == t ||
                      null == (_ = t.data) ||
                      null == (k = _.checkout)
                        ? void 0
                        : k.token),
                    dt("subscriberEventEmit", {
                      ...y,
                      eventType: g,
                      checkoutToken: e,
                      status: x,
                      errorMessage: E,
                    });
                } else
                  Ue(1) &&
                    dt("subscriberEventEmitDom", {
                      ...y,
                      status: x,
                      errorMessage: E,
                    });
              };
            if (Jn(a)) return s.subscribe(a, d, l);
            if ("all_events" === a) {
              const e = t.subscribe(eo, d, l),
                o = n.subscribe(to, d, l),
                i = r.subscribe(no, d, l);
              return () => {
                const t = e(),
                  n = o(),
                  r = i();
                return t && n && r;
              };
            }
            return a === to
              ? n.subscribe(to, d, l)
              : a === eo || Gn(a)
              ? t.subscribe(a, d, l)
              : a === no || Yn(a)
              ? r.subscribe(a, d, l)
              : n.subscribe(a, d, l);
          },
        };
      }
      const so = ["31014027265", "28638674945", "44186959873"];
      const ao = "wpm-test-cookie",
        co = new Map();
      function lo() {
        var e, t;
        const n =
            (null == (e = self) || null == (t = e.location)
              ? void 0
              : t.hostname) || "",
          o = co.get(n);
        if (o) return o;
        const i = n.split("."),
          r = [];
        return (
          i.reverse().reduce((e, t) => {
            const n = "" === e ? t : `${t}.${e}`;
            return (
              (function (e) {
                document.cookie = `${ao}=1; path=/; domain=${e}`;
              })(n),
              document.cookie.split(";").find((e) => e.includes(ao)) ||
                r.push(n),
              (function (e) {
                document.cookie = `${ao}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${e}`;
              })(n),
              n
            );
          }, ""),
          co.set(n, r),
          r
        );
      }
      function uo({
        eventBus: e,
        customerPrivacyEventBus: t,
        webPixelConfig: n,
        shopId: o,
        surface: i,
        initData: r,
        forRPC: s = !1,
      }) {
        let a = {};
        try {
          a = n.configuration ? JSON.parse(n.configuration) : {};
        } catch (b) {}
        const c = (function (e) {
          return e === Re.Shopify ||
            e === Re.CheckoutOne ||
            e === Re.CheckoutOneSdk
            ? Le.Checkout
            : e === Re.StorefrontRenderer
            ? Le.Storefront
            : Le.Unknown;
        })(i);
        var l, u, d, p, f, m, h;
        return {
          analytics: {
            subscribe: (t, r, a) => (
              s && wn(r),
              e.subscribe(t, r, {
                ...a,
                pixelRuntimeConfig: n,
                shopId: o,
                surface: i,
                scope: $e.WebPixelExtension,
              })
            ),
          },
          browser: {
            cookie: {
              get: async (e) => {
                var t;
                return e
                  ? null != (t = gt(document.cookie)[e])
                    ? t
                    : ""
                  : document.cookie;
              },
              set: async (e, t) => {
                if (t) {
                  const n = `${e}=${t}`;
                  document.cookie = n;
                } else document.cookie = e;
                return document.cookie;
              },
            },
            sendBeacon: async (e, t = "") => {
              if (
                e.includes(self.location.origin) &&
                !e.match(
                  /\/\.well-known\/shopify\/monorail\/unstable\/produce_batch/
                )
              )
                return !1;
              const n = new window.Blob([t], { type: "text/plain" });
              return window.navigator.sendBeacon(e, n);
            },
            localStorage: {
              setItem: async (e, t) =>
                on() ? window.localStorage.setItem(e, t) : Promise.resolve(),
              getItem: async (e) =>
                on() ? window.localStorage.getItem(e) : Promise.resolve(null),
              key: async (e) =>
                on() ? window.localStorage.key(e) : Promise.resolve(null),
              removeItem: async (e) =>
                on() ? window.localStorage.removeItem(e) : Promise.resolve(),
              clear: async () =>
                on() ? window.localStorage.clear() : Promise.resolve(),
              length: async () =>
                on() ? window.localStorage.length : Promise.resolve(0),
            },
            sessionStorage: {
              setItem: async (e, t) =>
                rn() ? window.sessionStorage.setItem(e, t) : Promise.resolve(),
              getItem: async (e) =>
                rn() ? window.sessionStorage.getItem(e) : Promise.resolve(null),
              key: async (e) =>
                rn() ? window.sessionStorage.key(e) : Promise.resolve(null),
              removeItem: async (e) =>
                rn() ? window.sessionStorage.removeItem(e) : Promise.resolve(),
              clear: async () =>
                rn() ? window.sessionStorage.clear() : Promise.resolve(),
              length: async () =>
                rn() ? window.sessionStorage.length : Promise.resolve(0),
            },
          },
          settings: a,
          init:
            ((l = r),
            {
              context: Qn(),
              data: {
                customer:
                  ((h = l.customer),
                  h
                    ? {
                        email: h.email,
                        firstName: h.firstName,
                        id: h.id,
                        lastName: h.lastName,
                        phone: h.phone,
                        ordersCount: h.ordersCount,
                      }
                    : null),
                cart:
                  ((u = l.cart),
                  u
                    ? {
                        id: null == u ? void 0 : u.id,
                        cost: {
                          totalAmount: {
                            amount:
                              null == u ||
                              null == (d = u.cost) ||
                              null == (p = d.totalAmount)
                                ? void 0
                                : p.amount,
                            currencyCode:
                              null == u ||
                              null == (f = u.cost) ||
                              null == (m = f.totalAmount)
                                ? void 0
                                : m.currencyCode,
                          },
                        },
                        lines: null == u ? void 0 : u.lines,
                        totalQuantity: null == u ? void 0 : u.totalQuantity,
                      }
                    : null),
                shop: l.shop,
              },
              customerPrivacy: {
                analyticsProcessingAllowed: se(),
                marketingAllowed: re(),
                preferencesProcessingAllowed: ae(),
                saleOfDataAllowed: ce(),
              },
            }),
          _pixelInfo: { ...n, surface: i, surfaceNext: c },
          customerPrivacy: {
            subscribe: (e, r, a) => (
              s && wn(r),
              t.subscribe(e, r, {
                ...a,
                pixelRuntimeConfig: n,
                shopId: o,
                surface: i,
                scope: $e.WebPixelExtension,
              })
            ),
          },
        };
      }
      let po;
      const fo = () => (
        po ||
          (po = {
            localStorageItems: { ...self.localStorage },
            sessionStorageItems: { ...self.sessionStorage },
          }),
        po
      );
      class mo extends Error {
        constructor(...e) {
          super(...e),
            (this.name = "SandboxAlreadyCreatedError"),
            (this.message = "Sandbox already created.");
        }
      }
      const ho = () => {
        let e, t;
        return {
          promise: new Promise((...n) => {
            [e, t] = n;
          }),
          resolve: e,
          reject: t,
        };
      };
      class bo extends Error {
        constructor(...e) {
          super(...e),
            (this.name = "InvalidExtensionPointError"),
            (this.message = "Invalid Extension Point");
        }
      }
      class wo extends Error {
        constructor(...e) {
          super(...e), (this.name = "PixelError");
        }
      }
      const vo = new Map();
      async function go(t) {
        var n;
        let s = !1;
        const { webPixelConfig: a, eventBus: l, shopId: u, surface: d } = t,
          p = a.id,
          f = a.type.toLowerCase();
        if (a.runtimeContext === Pe.Open && !ye("5de24938")) return !1;
        var m, h;
        switch (
          (a.restrictions ||
            (a.restrictions = (function (e, t) {
              if (!e) return {};
              const n = (function (e) {
                  return so.includes(String(e));
                })(e),
                o = t !== Re.StorefrontRenderer;
              return n && o
                ? {
                    allowedEvents: [],
                    preventLoadingBeforeEvent: `shopify:app:pixels:load:${e}`,
                  }
                : n
                ? { allowedEvents: [] }
                : {};
            })(String(a.apiClientId), d)),
          await Promise.all([
            (async () => {
              await At(
                (function (e) {
                  if (e)
                    return Ct.reduce(
                      (t, n) => ((t[n] = e.includes(n.toUpperCase())), t),
                      {}
                    );
                })(a.privacyPurposes)
              ),
                Kn.message("logConsentGranted", {
                  pixelUid: { id: p, type: a.type },
                });
            })(),
            ((m = (e, t) =>
              l.subscribe(e, t, {
                pixelRuntimeConfig: { apiClientId: "PIXEL-LOADER" },
              })),
            (h =
              null == (n = a.restrictions)
                ? void 0
                : n.preventLoadingBeforeEvent),
            new Promise((e, t) => {
              void 0 === h
                ? e(!0)
                : m(h, () => {
                    e(!0);
                  });
            })),
          ]),
          Qe("pixel:register", "start", { pixelId: p, source: f }),
          a.runtimeContext)
        ) {
          case Pe.Lax:
          case Pe.Strict:
            s = await (async function ({
              webPixelConfig: e,
              eventBus: t,
              customerPrivacyEventBus: n,
              shopId: o,
              storefrontBaseUrl: s,
              surface: a,
              initData: c,
            }) {
              const l = `web-pixel-sandbox-${e.type}-${e.id}-${e.runtimeContext}-${r}`;
              if (e.runtimeContext === Pe.Lax && document.getElementById(l)) {
                const t = new mo();
                return (
                  Ke.notify(t, {
                    pixelId: e.id,
                    pixelType: e.type,
                    runtimeContext: e.runtimeContext,
                    shopId: o,
                    context: "v0/createWebPixelSandbox/alreadyCreatedError",
                    userAgent: self.navigator.userAgent,
                    hashVersionSandbox: r,
                    sandboxUrl: self.location.href || "unknown",
                    options: { sampleRate: 15 },
                  }),
                  !1
                );
              }
              let u, d;
              switch (e.runtimeContext) {
                case Pe.Strict:
                  [u, d] = await (async function ({
                    sandboxId: e,
                    webPixelConfig: t,
                    storefrontBaseUrl: n,
                  }) {
                    const o = t.id,
                      s = [
                        We(n),
                        "/wpm",
                        `@${r}`,
                        `/web-pixel-${o}`,
                        `@${t.scriptVersion}`,
                        "/sandbox",
                        `/worker.${i}.js`,
                      ];
                    n.match(/spin\.dev\/?/) &&
                      s.push("?fast_storefront_renderer=1");
                    const a = s.join(""),
                      c = new Worker(a, {
                        name: e,
                        type: "classic",
                        credentials: "omit",
                      }),
                      l = new Promise((e, t) => {
                        const n = () => {
                          c.removeEventListener("error", n),
                            t(
                              new Error(
                                `Failed to load web worker for pixel ${o} with url ${a}}`
                              )
                            );
                        };
                        c.addEventListener("error", n);
                      });
                    return [c, l];
                  })({ sandboxId: l, webPixelConfig: e, storefrontBaseUrl: s });
                  break;
                case Pe.Lax:
                  u = await (async function ({
                    sandboxId: e,
                    webPixelConfig: t,
                    storefrontBaseUrl: n,
                  }) {
                    const { search: o } = self.location,
                      s = t.id,
                      a = t.type.toLowerCase(),
                      c = [
                        We(n),
                        "/wpm",
                        `@${r}`,
                        `/${a}`,
                        `/web-pixel-${s}`,
                        `@${t.scriptVersion}`,
                        "/sandbox",
                        `/${i}`,
                        /\.(js|json|xml)$/.test(self.location.pathname)
                          ? ""
                          : self.location.pathname,
                        o,
                      ];
                    if (n.match(/spin\.dev\/?/)) {
                      const e = o.length ? "&" : "?";
                      c.push(`${o}${e}fast_storefront_renderer=1`);
                    }
                    const { iframe: l } = await Mn({
                      containerSpec: {
                        id: "web-pixels-manager-sandbox-container",
                        tagName: "div",
                        styles: {
                          height: "0",
                          width: "0",
                          position: "fixed",
                          visibility: "hidden",
                          overflow: "hidden",
                          "z-index": "-100",
                          margin: "0",
                          padding: "0",
                          border: "0",
                        },
                        attributes: { "aria-hidden": "true" },
                      },
                      iframeSpec: {
                        id: e,
                        src: c.join(""),
                        privileges: ["allow-scripts", "allow-forms"],
                        styles: {
                          height: "0",
                          width: "0",
                          visibility: "hidden",
                        },
                        attributes: { "aria-hidden": "true" },
                      },
                    });
                    return dn(l);
                  })({ sandboxId: l, webPixelConfig: e, storefrontBaseUrl: s });
                  break;
                default:
                  throw new Error(
                    `Unsupported runtime context: ${e.runtimeContext}`
                  );
              }
              const p = Tn(u, { callable: ["initialize"] }),
                f = uo({
                  eventBus: t,
                  customerPrivacyEventBus: n,
                  webPixelConfig: e,
                  shopId: o,
                  surface: a,
                  initData: c,
                  forRPC: !0,
                }),
                m = {
                  self: { origin: { get: async () => self.origin } },
                  document: {
                    referrer: { get: async () => document.referrer },
                  },
                },
                h = Qn();
              let b = {
                status: "unknown",
                hashVersion: "unknown",
                sandboxUrl: "unknown",
              };
              const w =
                e.runtimeContext === Pe.Lax
                  ? fo()
                  : { localStorageItems: {}, sessionStorageItems: {} };
              try {
                const t = [
                  p.call
                    .initialize({
                      pageTitle: self.document.title,
                      webPixelConfig: e,
                      shopId: o,
                      webPixelApi: f,
                      internalApi: m,
                      cookie: self.document.cookie,
                      cookieRestrictedDomains: lo(),
                      origin: self.origin,
                      referrer: self.document.referrer,
                      ...w,
                    })
                    .then((e) => {
                      b = e;
                    }),
                ];
                d && t.push(d), await Promise.race(t);
              } catch (v) {
                return !1;
              }
              if (r !== b.hashVersion) {
                const t = new Error(
                  `The main bundle hash (${r}) does not match the sandbox hash (${b.hashVersion})`
                );
                Ke.notify(t, {
                  severity: "warning",
                  pixelId: e.id,
                  pixelType: e.type,
                  runtimeContext: e.runtimeContext,
                  context: "v0/createSandbox/hashMismatch",
                  shopId: o,
                  userAgent: h.navigator.userAgent || self.navigator.userAgent,
                  hashVersionSandbox: b.hashVersion,
                  sandboxUrl: b.sandboxUrl,
                });
              }
              return !0;
            })(t);
            break;
          case Pe.Open:
            try {
              s = await (async function ({
                webPixelConfig: t,
                eventBus: n,
                customerPrivacyEventBus: o,
                shopId: s,
                storefrontBaseUrl: a,
                surface: l,
                initData: u,
              }) {
                var d;
                const { promise: p, resolve: f, reject: m } = ho(),
                  { id: h, type: b } = t,
                  w = `${h}-${b}`.toLowerCase();
                vo.set(w, () => ({
                  webPixelApi: uo({
                    eventBus: n,
                    customerPrivacyEventBus: o,
                    webPixelConfig: t,
                    shopId: s,
                    surface: l,
                    initData: u,
                    forRPC: !0,
                  }),
                  resolve: f,
                  reject: m,
                }));
                const v = a.match(/spin\.dev\/?/),
                  g = [
                    We(a),
                    `/wpm@${r}`,
                    `/${t.type.toLocaleLowerCase()}`,
                    `/web-pixel-${h}@${t.scriptVersion}`,
                    `/pixel.${i}.js`,
                    v ? "?fast_storefront_renderer=1" : "",
                  ].join("");
                if (
                  !("createShopifyExtend" in (null != (d = self[e]) ? d : {}))
                ) {
                  const t = (e, t) => {
                    const n = vo.get(`${e}-${t}`.toLowerCase());
                    if (!n)
                      return (
                        m(new Error(`No openPixelFn found for ${e}-${t}.`)),
                        null
                      );
                    const { resolve: o, reject: i, webPixelApi: r } = n();
                    return (
                      r || i(new Error(`No api found for pixel ${e}-${t}.`)),
                      Object.freeze({
                        extend: (e, t) => {
                          e !== c && i(new bo());
                          try {
                            t.call(r, r), o(!0);
                          } catch (n) {
                            i(new wo(n));
                          }
                        },
                      })
                    );
                  };
                  Object.defineProperty(self, e, {
                    value: {},
                    enumerable: !0,
                    writable: !1,
                    configurable: !1,
                  }),
                    Object.defineProperty(self[e], "createShopifyExtend", {
                      value: t,
                      enumerable: !0,
                      writable: !1,
                      configurable: !1,
                    });
                }
                var y;
                return (
                  await ((y = g),
                  new Promise((e, t) => {
                    try {
                      const n = document.createElement("script");
                      (n.src = y),
                        (n.async = !0),
                        (n.onload = () => {
                          e();
                        }),
                        (n.onerror = () => {
                          o(), t(new Error(`Failed to load script: ${y}`));
                        });
                      const o = () => {
                        (n.onload = null), (n.onerror = null), n.remove();
                      };
                      document.head.appendChild(n);
                    } catch (n) {
                      t(n);
                    }
                  })),
                  p
                );
              })(t);
            } catch (v) {
              s = !1;
            }
            break;
          default:
            throw (
              (Kn.message("logPixelRegister", {
                pixelUid: { id: p, type: a.type },
                status: "FAIL",
              }),
              new Error(`Invalid runtimeContext: ${a.runtimeContext}`))
            );
        }
        const b = De(a),
          { measurement: w } = Je("pixel:register", { pixelId: p, source: f });
        return (
          Kn.message("logPixelRegister", {
            pixelUid: { id: p, type: a.type },
            status: s ? "SUCCESS" : "FAIL",
          }),
          dt("register", {
            version: o,
            pageUrl: self.location.href,
            shopId: u,
            surface: d,
            pixelId: p,
            pixelAppId: b,
            pixelSource: a.type,
            pixelRuntimeContext: a.runtimeContext,
            pixelScriptVersion: a.scriptVersion,
            pixelConfiguration: null == a ? void 0 : a.configuration,
            pixelEventSchemaVersion: a.eventPayloadVersion,
            status: "registered",
            userCanBeTracked: ie().toString(),
            shopPrefs: "unknown",
            bundleTarget: i,
            errorMsg: "N/A",
            duration: null == w ? void 0 : w.duration,
            startTime: null == w ? void 0 : w.startTime,
            sessionId: Ot(),
          }),
          s
        );
      }
      const yo = {
          id: null,
          name: null,
          tagName: null,
          type: null,
          value: null,
          href: null,
          clientHeight: 0,
          clientLeft: 0,
          clientTop: 0,
          clientWidth: 0,
          nodeType: 1,
          scrollHeight: 0,
          scrollLeft: 0,
          scrollTop: 0,
          scrollWidth: 0,
        },
        xo = Object.keys(yo);
      function Eo(e) {
        return Lt(e, xo, yo);
      }
      function _o(e, t, n) {
        return Pt(
          document,
          e,
          (n) => {
            var o;
            if (!(n instanceof Event && n.type === e)) return;
            const i = n.target;
            if (!(i instanceof Element)) return;
            const r = Eo(i);
            t.publishDomEvent("dom_clipboard", {
              element: r,
              action: null != (o = n.type) ? o : "copy",
            });
          },
          n,
          { throttleDelay: 100 }
        );
      }
      function ko(e) {
        const t = Ht();
        (function (e, t) {
          let n = null;
          Pt(
            self.window,
            "mousemove",
            (t) => {
              if (!(t instanceof MouseEvent)) return;
              const o = null == t ? void 0 : t.target;
              if (!(o instanceof Element)) return;
              const i = (function (e, t) {
                return { element: Eo(t), ...Vt, ...jt(e, zt) };
              })(t, o);
              (i.movementX = n ? t.screenX - n.screenX : 0),
                (i.movementY = n ? t.screenY - n.screenY : 0),
                e.publishDomEvent("dom_mouse_moved", i),
                (n = t);
            },
            t,
            { throttleDelay: 50 }
          );
        })(e, t),
          (function (e, t) {
            Pt(
              self.window,
              "resize",
              () => {
                e.publishDomEvent("dom_window_resized", {
                  innerHeight: self.window.innerHeight,
                  innerWidth: self.window.innerWidth,
                });
              },
              t,
              { throttleDelay: 100 }
            );
          })(e, t),
          (function (e, t) {
            Pt(
              self.window,
              "scroll",
              (t) => {
                if (!(t instanceof Event)) return;
                const n = null == t ? void 0 : t.target;
                let o;
                if (n instanceof Document) {
                  var i;
                  o =
                    null != (i = n.scrollingElement)
                      ? i
                      : document.documentElement;
                } else {
                  if (!(n instanceof Element)) return;
                  o = n;
                }
                e.publishDomEvent("dom_scroll", { scrollingElement: Eo(o) });
              },
              t,
              { throttleDelay: 100 }
            );
          })(e, t),
          (function (e, t) {
            _o("cut", e, t), _o("paste", e, t), _o("copy", e, t);
          })(e, t),
          (function (e, t) {
            Pt(
              self.document,
              "selectionchange",
              (t) => {
                const n = document.activeElement;
                if (!(n instanceof Element)) return;
                let o = null;
                var i;
                (o =
                  n instanceof HTMLInputElement ||
                  n instanceof HTMLTextAreaElement
                    ? n.value.substring(
                        n.selectionStart || 0,
                        n.selectionEnd || 0
                      )
                    : (null == (i = window.getSelection())
                        ? void 0
                        : i.toString()) || null),
                  e.publishDomEvent("dom_selection_changed", {
                    value: o,
                    element: Eo(n),
                  });
              },
              t,
              { throttleDelay: 250 }
            );
          })(e, t);
      }
      const Co = (function () {
        const e =
          null != (t = self.Shopify) && t.Checkout
            ? Re.Shopify
            : null != (n = self.Shopify) &&
              null != (r = n.analytics) &&
              r.replayQueue
            ? Re.StorefrontRenderer
            : Re.CheckoutOne;
        var t, n, r;
        const s = self.location.href,
          a = nt("load", {
            version: o,
            bundleTarget: i,
            pageUrl: s,
            status: "loading",
            surface: e,
          }),
          c = {
            publish: () => !1,
            publishCustomEvent: () => !1,
            publishDomEvent: () => !1,
            visitor: () => !1,
            subscribe: () => () => !1,
          };
        try {
          const e = Ot();
          return (
            (a.payload.status = "loaded"),
            ut(a),
            {
              init(t) {
                if (null !== self.location.href.match(/\/wpm@(.+)\/sandbox/))
                  return c;
                const {
                  shopId: n,
                  surface: r = Re.Unknown,
                  initData: a,
                  enabledBetaFlags: l,
                } = t;
                let { webPixelsConfigList: u } = t || {};
                ve();
                const d = self.location.origin;
                it(d),
                  (function (e = []) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => ge.add(e));
                  })(l),
                  ye("4735909c") && Kn.init(t);
                const p = ie().toString(),
                  f = nt("unload", {
                    version: o,
                    bundleTarget: i,
                    pageUrl: s,
                    shopId: n,
                    surface: r,
                    isCompleted: "false",
                    runtimeErrorCaught: "false",
                    userCanBeTracked: p,
                    sessionId: e,
                  });
                var m;
                (m = f),
                  window.addEventListener("pagehide", () => {
                    var e, t;
                    (m.payload.pageDuration =
                      null == (e = Je("page:session")) ||
                      null == (t = e.measurement)
                        ? void 0
                        : t.duration),
                      ut(m),
                      pt({ skipXhr: !0 });
                  });
                const h = ro(t),
                  b = (function (e) {
                    const t = new ke({
                      bufferSize: 1e3,
                      subscribeAllKey: "all_customer_privacy_events",
                      eligibility: Me,
                    });
                    return {
                      publish(e, n, o) {
                        if ("string" != typeof e)
                          throw new Error(
                            "Expected event name to be a string, but got " +
                              typeof e
                          );
                        if (e !== O.CONSENT_COLLECTED)
                          throw new Error(
                            `Expected event name to be a ${O.CONSENT_COLLECTED}, but got "${e}".`
                          );
                        return t.publish(e, n, o);
                      },
                      subscribe(n, r, s = {}) {
                        if (n !== O.CONSENT_COLLECTED)
                          throw new Error(
                            `Event name "${n}" is not supported in the CustomerPrivacyEventBus.`
                          );
                        return t.subscribe(
                          n,
                          (t) => {
                            var n, a, c, l, u, d, p, f;
                            if (
                              e === Re.CheckoutOneSdk &&
                              s.scope !== $e.CheckoutOneSdk
                            )
                              return;
                            const m = {
                              configuration:
                                null == (n = s.pixelRuntimeConfig)
                                  ? void 0
                                  : n.configuration,
                              eventPayloadVersion:
                                s.schemaVersion ||
                                (null == (a = s.pixelRuntimeConfig)
                                  ? void 0
                                  : a.eventPayloadVersion) ||
                                "unknown",
                              id:
                                (null == (c = s.pixelRuntimeConfig)
                                  ? void 0
                                  : c.id) || "unknown",
                              type:
                                (null == (l = s.pixelRuntimeConfig)
                                  ? void 0
                                  : l.type) || "unknown",
                              runtimeContext:
                                (null == (u = s.pixelRuntimeConfig)
                                  ? void 0
                                  : u.runtimeContext) || "unknown",
                              restrictions:
                                null == (d = s.pixelRuntimeConfig)
                                  ? void 0
                                  : d.restrictions,
                              scriptVersion:
                                (null == (p = s.pixelRuntimeConfig)
                                  ? void 0
                                  : p.scriptVersion) || "unknown",
                              apiClientId:
                                null == (f = s.pixelRuntimeConfig)
                                  ? void 0
                                  : f.apiClientId,
                            };
                            r.call(t, t),
                              dt("subscriberEventEmitPrivacy", {
                                version: o,
                                bundleTarget: i,
                                pageUrl: self.location.href,
                                shopId: s.shopId,
                                surface: s.surface,
                                pixelId: m.id,
                                pixelAppId: De(m),
                                pixelSource: m.type,
                                pixelRuntimeContext: m.runtimeContext,
                                pixelScriptVersion: m.scriptVersion,
                                pixelConfiguration: m.configuration,
                                pixelEventSchemaVersion: m.eventPayloadVersion,
                                eventName: O.CONSENT_COLLECTED,
                                eventId: Ne(),
                              });
                          },
                          s
                        );
                      },
                    };
                  })(r),
                  w = {
                    severity: "warning",
                    context: "v0/createWebPixelsManager/init",
                    unhandled: !1,
                    shopId: n,
                    initConfig: t,
                  },
                  v = nt("init", {
                    version: o,
                    bundleTarget: i,
                    pageUrl: s,
                    shopId: n,
                    surface: r,
                    status: "initializing",
                    userCanBeTracked: p,
                  });
                try {
                  var g, y;
                  if (self.Shopify && !0 === self.Shopify.designMode)
                    return (
                      self.console &&
                        console.log(
                          "[WebPixelsManager] Prevented from executing in the Theme Editor"
                        ),
                      c
                    );
                  if (/^web-pixel-sandbox/.test(self.name)) {
                    const e = new Ve(
                      "WebPixelsManager: browser library is being run in a sandbox"
                    );
                    throw ((w.library = "browser"), Ke.notify(e, w), e);
                  }
                  if (!n) {
                    const e = new Ve("WebPixelsManager: shopId is required");
                    throw (Ke.notify(e, w), e);
                  }
                  if (!d) {
                    const e = new Ve(
                      "WebPixelsManager: storefrontBaseUrl is required"
                    );
                    throw (Ke.notify(e, w), e);
                  }
                  if (
                    !(function (e) {
                      try {
                        return new URL(e), !0;
                      } catch (t) {
                        return (function (e) {
                          const t = new RegExp(
                            "^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)*[a-z]{1,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
                            "i"
                          );
                          return Boolean(t.test(e));
                        })(e);
                      }
                    })(d)
                  ) {
                    const e = new Ve(
                      `WebPixelsManager: storefrontBaseUrl is not a valid absolute URL: ${d}`
                    );
                    throw (Ke.notify(e, w), e);
                  }
                  r === Re.CheckoutOneSdk && (u = []);
                  const e = u.reduce(
                    (e, t) => {
                      var o, i;
                      (t.type = t.type.toUpperCase()),
                        (t.runtimeContext =
                          null == (o = t.runtimeContext)
                            ? void 0
                            : o.toUpperCase());
                      const s = go({
                        webPixelConfig: t,
                        eventBus: h,
                        customerPrivacyEventBus: b,
                        shopId: n,
                        storefrontBaseUrl: d,
                        surface: r,
                        initData: a,
                      });
                      return (
                        null != (i = t.restrictions) &&
                        i.preventLoadingBeforeEvent
                          ? e.waiting.push(s)
                          : e.ready.push(s),
                        e
                      );
                    },
                    { ready: [], waiting: [] }
                  );
                  Promise.all(e.ready)
                    .then(() =>
                      (function (e) {
                        const { measurement: t } = Je("completed");
                        (e.payload.isCompleted = "true"),
                          (e.payload.runTimeDuration =
                            null == t ? void 0 : t.duration),
                          (e.payload.startTime =
                            null == t ? void 0 : t.startTime);
                      })(f)
                    )
                    .catch((e) => {
                      self.console && console.error("[Web Pixels]", e);
                    }),
                    Promise.all(e.waiting).catch(() => {}),
                    r !== Re.CheckoutOne &&
                      r !== Re.CheckoutOneSdk &&
                      (N(h.publish, a),
                      ye("d04dc9f4") && (Xt(h), ye(xe) && ko(h)),
                      (function () {
                        if (!kt)
                          try {
                            document.addEventListener(O.CONSENT_COLLECTED, _t),
                              (kt = !0);
                          } catch (e) {
                            Ke.notify(e, {
                              context:
                                "v0/onConsentCollected/createOnConsentCollectedListener",
                              unhandled: !1,
                            });
                          }
                      })(),
                      Et((e) => {
                        b.publish(O.CONSENT_COLLECTED, {
                          customerPrivacy: {
                            analyticsProcessingAllowed:
                              e.detail.analyticsAllowed,
                            marketingAllowed: e.detail.marketingAllowed,
                            preferencesProcessingAllowed:
                              e.detail.preferencesAllowed,
                            saleOfDataAllowed: e.detail.saleOfDataAllowed,
                          },
                        });
                      })),
                    (v.payload.status = "initialized"),
                    ut(v);
                  const t =
                    ((x = {
                      shopId: n,
                      surface: r,
                      pageUrl: s,
                      clientId:
                        null != (g = gt(document.cookie)._shopify_y) ? g : "",
                      version: o,
                      customerId:
                        null == a || null == (y = a.customer) ? void 0 : y.id,
                    }),
                    {
                      visitor: (e, t) =>
                        (function (e, t, n) {
                          const o = (function (e, t) {
                            return e && (e.email || e.phone)
                              ? null != e &&
                                e.email &&
                                "string" != typeof e.email
                                ? {
                                    valid: !1,
                                    error: "Email must be of type string",
                                  }
                                : null != e &&
                                  e.phone &&
                                  "string" != typeof e.phone
                                ? {
                                    valid: !1,
                                    error: "Phone must be of type string",
                                  }
                                : null != t &&
                                  t.appId &&
                                  "string" != typeof t.appId
                                ? {
                                    valid: !1,
                                    error: "appId must be of type string",
                                  }
                                : null != t &&
                                  t.apiClientId &&
                                  "string" != typeof t.apiClientId
                                ? {
                                    valid: !1,
                                    error: "apiClientId must be of type string",
                                  }
                                : { valid: !0 }
                              : {
                                  valid: !1,
                                  error:
                                    "Visitor must have one of phone or email",
                                };
                          })(t, n);
                          if (!o.valid)
                            throw new It(
                              o.error || "Invalid input payload to visitorApi"
                            );
                          const i = {
                            ...e,
                            ...t,
                            apiClientId:
                              (null == n ? void 0 : n.appId) ||
                              (null == n ? void 0 : n.apiClientId),
                          };
                          return (
                            At({
                              analytics: !0,
                              marketing: !0,
                              preferences: !1,
                              sale_of_data: !1,
                            })
                              .then(() => dt("visitor", i))
                              .catch(() =>
                                Ke.notify("visitor error", {
                                  severity: "error",
                                  context: `v0/visitor-${e.surface}`,
                                  unhandled: !1,
                                  shopId: e.shopId,
                                })
                              ),
                            !0
                          );
                        })(x, e, t),
                    });
                  return {
                    publish: (e, t, n = {}) => h.publish(e, t, n),
                    publishCustomEvent: (e, t, n = {}) =>
                      h.publishCustomEvent(e, t, n),
                    publishDomEvent: (e, t, n = {}) =>
                      h.publishDomEvent(e, t, n),
                    subscribe: (e, t, o) =>
                      h.subscribe(e, t, {
                        ...o,
                        shopId: n,
                        surface: r,
                        scope:
                          r === Re.CheckoutOneSdk ? $e.CheckoutOneSdk : void 0,
                      }),
                    visitor: (e, n) => t.visitor(e, n),
                  };
                } catch (E) {
                  return (
                    E instanceof Ve ||
                      Ke.notify(E, {
                        context: "v0/init",
                        shopId: n,
                        initConfig: t,
                      }),
                    self.console && console.error(E),
                    (v.payload.status = "failed"),
                    (v.payload.errorMsg = null == E ? void 0 : E.message),
                    ut(v),
                    (f.payload.runtimeErrorCaught = "true"),
                    c
                  );
                }
                var x;
              },
            }
          );
        } catch (l) {
          return (
            l instanceof Ve ||
              Ke.notify(l, { context: "v0/createWebPixelsManager" }),
            self.console && console.error(l),
            (a.payload.status = "manager-create-error"),
            (a.payload.errorMsg = null == l ? void 0 : l.message),
            ut(a, !0),
            { init: () => c }
          );
        }
      })();
      self[e] = Co;
    })();
})();
