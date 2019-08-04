window.__require = function e(t, n, i) {
    function r(c, s) {
        if (!n[c]) {
            if (!t[c]) {
                var a = c.split("/");
                if (a = a[a.length - 1], !t[a]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
            }
            var u = n[c] = {
                exports: {}
            };
            t[c][0].call(u.exports,
            function(e) {
                return r(t[c][1][e] || e)
            },
            u, u.exports, e, t, n, i)
        }
        return n[c].exports
    }
    for (var o = "function" == typeof __require && __require,
    c = 0; c < i.length; c++) r(i[c]);
    return r
} ({
    AudioMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ea7f0ti6flFe5vp1aznvyI4", "AudioMgr"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        } ();
        var r = function() {
            function e() { (function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e)
            }
            return i(e, null, [{
                key: "playAudio",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e.hasAudio && cc.loader.loadRes(t, cc.AudioClip,
                    function(t, i) {
                        if (null == t) {
                            var r = cc.audioEngine.play(i, !1, 1);
                            n && (cc.log("hey hey", r), e.effects.push(r))
                        } else cc.error(t)
                    })
                }
            },
            {
                key: "playMusic",
                value: function(t) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    e.hasAudio && cc.loader.loadRes(t, cc.AudioClip,
                    function(e, t) {
                        null == e ? cc.audioEngine.playMusic(t, n) : cc.error(e)
                    })
                }
            },
            {
                key: "stopMusic",
                value: function() {
                    cc.audioEngine.stopMusic()
                }
            },
            {
                key: "stopAudio",
                value: function() {
                    for (var t = 0; t < e.effects.length; t++) cc.audioEngine.stopEffect(e.effects[t])
                }
            },
            {
                key: "stopAll",
                value: function() {
                    cc.audioEngine.stopAll()
                }
            }]),
            e
        } ();
        r.hasAudio = !1,
        r.effects = [],
        n.
    default = r,
        t.exports = n.
    default,
        cc._RF.pop()
    },
    {}],
    Config: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "48aefKrFKhAYId2POF2fj53", "Config"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.
    default = {
            HOST: "https://cmb-game-api.fulugame.cn"
        },
        t.exports = n.
    default,
        cc._RF.pop()
    },
    {}],
    CryptoJS: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "48d256koi1HJ5W+udIcT42l", "CryptoJS");
        var i = i ||
        function(e, t) {
            var n = {},
            i = n.lib = {},
            r = function() {},
            o = i.Base = {
                extend: function(e) {
                    r.prototype = this;
                    var t = new r;
                    return e && t.mixIn(e),
                    t.hasOwnProperty("init") || (t.init = function() {
                        t.$super.init.apply(this, arguments)
                    }),
                    t.init.prototype = t,
                    t.$super = this,
                    t
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments),
                    e
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            c = i.WordArray = o.extend({
                init: function(e, t) {
                    e = this.words = e || [],
                    this.sigBytes = void 0 != t ? t: 4 * e.length
                },
                toString: function(e) {
                    return (e || a).stringify(this)
                },
                concat: function(e) {
                    var t = this.words,
                    n = e.words,
                    i = this.sigBytes;
                    if (e = e.sigBytes, this.clamp(), i % 4) for (var r = 0; r < e; r++) t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % 4 * 8;
                    else if (65535 < n.length) for (r = 0; r < e; r += 4) t[i + r >>> 2] = n[r >>> 2];
                    else t.push.apply(t, n);
                    return this.sigBytes += e,
                    this
                },
                clamp: function() {
                    var t = this.words,
                    n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                    t.length = e.ceil(n / 4)
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e.words = this.words.slice(0),
                    e
                },
                random: function(t) {
                    for (var n = [], i = 0; i < t; i += 4) n.push(4294967296 * e.random() | 0);
                    return new c.init(n, t)
                }
            }),
            s = n.enc = {},
            a = s.Hex = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var n = [], i = 0; i < e; i++) {
                        var r = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        n.push((r >>> 4).toString(16)),
                        n.push((15 & r).toString(16))
                    }
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length,
                    n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                    return new c.init(n, t / 2)
                }
            },
            l = s.Latin1 = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var n = [], i = 0; i < e; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - i % 4 * 8 & 255));
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length,
                    n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                    return new c.init(n, t)
                }
            },
            u = s.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(l.stringify(e)))
                    } catch(e) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return l.parse(unescape(encodeURIComponent(e)))
                }
            },
            d = i.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new c.init,
                    this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = u.parse(e)),
                    this._data.concat(e),
                    this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var n = this._data,
                    i = n.words,
                    r = n.sigBytes,
                    o = this.blockSize,
                    s = r / (4 * o);
                    if (t = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o, r = e.min(4 * t, r), t) {
                        for (var a = 0; a < t; a += o) this._doProcessBlock(i, a);
                        a = i.splice(0, t),
                        n.sigBytes -= r
                    }
                    return new c.init(a, r)
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e._data = this._data.clone(),
                    e
                },
                _minBufferSize: 0
            });
            i.Hasher = d.extend({
                cfg: o.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e),
                    this.reset()
                },
                reset: function() {
                    d.reset.call(this),
                    this._doReset()
                },
                update: function(e) {
                    return this._append(e),
                    this._process(),
                    this
                },
                finalize: function(e) {
                    return e && this._append(e),
                    this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, n) {
                        return new e.init(n).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, n) {
                        return new f.HMAC.init(e, n).finalize(t)
                    }
                }
            });
            var f = n.algo = {};
            return n
        } (Math); (function() {
            var e = i,
            t = e.lib.WordArray;
            e.enc.Base64 = {
                stringify: function(e) {
                    var t = e.words,
                    n = e.sigBytes,
                    i = this._map;
                    e.clamp(),
                    e = [];
                    for (var r = 0; r < n; r += 3) for (var o = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, c = 0; 4 > c && r + .75 * c < n; c++) e.push(i.charAt(o >>> 6 * (3 - c) & 63));
                    if (t = i.charAt(64)) for (; e.length % 4;) e.push(t);
                    return e.join("")
                },
                parse: function(e) {
                    var n = e.length,
                    i = this._map; (r = i.charAt(64)) && ( - 1 != (r = e.indexOf(r)) && (n = r));
                    for (var r = [], o = 0, c = 0; c < n; c++) if (c % 4) {
                        var s = i.indexOf(e.charAt(c - 1)) << c % 4 * 2,
                        a = i.indexOf(e.charAt(c)) >>> 6 - c % 4 * 2;
                        r[o >>> 2] |= (s | a) << 24 - o % 4 * 8,
                        o++
                    }
                    return t.create(r, o)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        })(),
        function(e) {
            function t(e, t, n, i, r, o, c) {
                return ((e = e + (t & n | ~t & i) + r + c) << o | e >>> 32 - o) + t
            }
            function n(e, t, n, i, r, o, c) {
                return ((e = e + (t & i | n & ~i) + r + c) << o | e >>> 32 - o) + t
            }
            function r(e, t, n, i, r, o, c) {
                return ((e = e + (t ^ n ^ i) + r + c) << o | e >>> 32 - o) + t
            }
            function o(e, t, n, i, r, o, c) {
                return ((e = e + (n ^ (t | ~i)) + r + c) << o | e >>> 32 - o) + t
            }
            for (var c = i,
            s = (l = c.lib).WordArray, a = l.Hasher, l = c.algo, u = [], d = 0; 64 > d; d++) u[d] = 4294967296 * e.abs(e.sin(d + 1)) | 0;
            l = l.MD5 = a.extend({
                _doReset: function() {
                    this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(e, i) {
                    for (var c = 0; 16 > c; c++) {
                        var s = e[d = i + c];
                        e[d] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                    }
                    c = this._hash.words;
                    var a, l, d = e[i + 0],
                    f = (s = e[i + 1], e[i + 2]),
                    h = e[i + 3],
                    p = e[i + 4],
                    g = e[i + 5],
                    m = e[i + 6],
                    v = e[i + 7],
                    y = e[i + 8],
                    _ = e[i + 9],
                    C = e[i + 10],
                    L = e[i + 11],
                    S = e[i + 12],
                    b = e[i + 13],
                    T = e[i + 14],
                    k = e[i + 15],
                    x = c[0],
                    M = o(M = o(M = o(M = o(M = r(M = r(M = r(M = r(M = n(M = n(M = n(M = n(M = t(M = t(M = t(M = t(M = c[1], l = t(l = c[2], a = t(a = c[3], x = t(x, M, l, a, d, 7, u[0]), M, l, s, 12, u[1]), x, M, f, 17, u[2]), a, x, h, 22, u[3]), l = t(l, a = t(a, x = t(x, M, l, a, p, 7, u[4]), M, l, g, 12, u[5]), x, M, m, 17, u[6]), a, x, v, 22, u[7]), l = t(l, a = t(a, x = t(x, M, l, a, y, 7, u[8]), M, l, _, 12, u[9]), x, M, C, 17, u[10]), a, x, L, 22, u[11]), l = t(l, a = t(a, x = t(x, M, l, a, S, 7, u[12]), M, l, b, 12, u[13]), x, M, T, 17, u[14]), a, x, k, 22, u[15]), l = n(l, a = n(a, x = n(x, M, l, a, s, 5, u[16]), M, l, m, 9, u[17]), x, M, L, 14, u[18]), a, x, d, 20, u[19]), l = n(l, a = n(a, x = n(x, M, l, a, g, 5, u[20]), M, l, C, 9, u[21]), x, M, k, 14, u[22]), a, x, p, 20, u[23]), l = n(l, a = n(a, x = n(x, M, l, a, _, 5, u[24]), M, l, T, 9, u[25]), x, M, h, 14, u[26]), a, x, y, 20, u[27]), l = n(l, a = n(a, x = n(x, M, l, a, b, 5, u[28]), M, l, f, 9, u[29]), x, M, v, 14, u[30]), a, x, S, 20, u[31]), l = r(l, a = r(a, x = r(x, M, l, a, g, 4, u[32]), M, l, y, 11, u[33]), x, M, L, 16, u[34]), a, x, T, 23, u[35]), l = r(l, a = r(a, x = r(x, M, l, a, s, 4, u[36]), M, l, p, 11, u[37]), x, M, v, 16, u[38]), a, x, C, 23, u[39]), l = r(l, a = r(a, x = r(x, M, l, a, b, 4, u[40]), M, l, d, 11, u[41]), x, M, h, 16, u[42]), a, x, m, 23, u[43]), l = r(l, a = r(a, x = r(x, M, l, a, _, 4, u[44]), M, l, S, 11, u[45]), x, M, k, 16, u[46]), a, x, f, 23, u[47]), l = o(l, a = o(a, x = o(x, M, l, a, d, 6, u[48]), M, l, v, 10, u[49]), x, M, T, 15, u[50]), a, x, g, 21, u[51]), l = o(l, a = o(a, x = o(x, M, l, a, S, 6, u[52]), M, l, h, 10, u[53]), x, M, C, 15, u[54]), a, x, s, 21, u[55]), l = o(l, a = o(a, x = o(x, M, l, a, y, 6, u[56]), M, l, k, 10, u[57]), x, M, m, 15, u[58]), a, x, b, 21, u[59]), l = o(l, a = o(a, x = o(x, M, l, a, p, 6, u[60]), M, l, L, 10, u[61]), x, M, f, 15, u[62]), a, x, _, 21, u[63]);
                    c[0] = c[0] + x | 0,
                    c[1] = c[1] + M | 0,
                    c[2] = c[2] + l | 0,
                    c[3] = c[3] + a | 0
                },
                _doFinalize: function() {
                    var t = this._data,
                    n = t.words,
                    i = 8 * this._nDataBytes,
                    r = 8 * t.sigBytes;
                    n[r >>> 5] |= 128 << 24 - r % 32;
                    var o = e.floor(i / 4294967296);
                    for (n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process(), n = (t = this._hash).words, i = 0; 4 > i; i++) r = n[i],
                    n[i] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                    return t
                },
                clone: function() {
                    var e = a.clone.call(this);
                    return e._hash = this._hash.clone(),
                    e
                }
            }),
            c.MD5 = a._createHelper(l),
            c.HmacMD5 = a._createHmacHelper(l)
        } (Math),
        function() {
            var e, t = i,
            n = (e = t.lib).Base,
            r = e.WordArray,
            o = (e = t.algo).EvpKDF = n.extend({
                cfg: n.extend({
                    keySize: 4,
                    hasher: e.MD5,
                    iterations: 1
                }),
                init: function(e) {
                    this.cfg = this.cfg.extend(e)
                },
                compute: function(e, t) {
                    for (var n = (s = this.cfg).hasher.create(), i = r.create(), o = i.words, c = s.keySize, s = s.iterations; o.length < c;) {
                        a && n.update(a);
                        var a = n.update(e).finalize(t);
                        n.reset();
                        for (var l = 1; l < s; l++) a = n.finalize(a),
                        n.reset();
                        i.concat(a)
                    }
                    return i.sigBytes = 4 * c,
                    i
                }
            });
            t.EvpKDF = function(e, t, n) {
                return o.create(n).compute(e, t)
            }
        } (),
        i.lib.Cipher ||
        function(e) {
            var t = (p = i).lib,
            n = t.Base,
            r = t.WordArray,
            o = t.BufferedBlockAlgorithm,
            c = p.enc.Base64,
            s = p.algo.EvpKDF,
            a = t.Cipher = o.extend({
                cfg: n.extend(),
                createEncryptor: function(e, t) {
                    return this.create(this._ENC_XFORM_MODE, e, t)
                },
                createDecryptor: function(e, t) {
                    return this.create(this._DEC_XFORM_MODE, e, t)
                },
                init: function(e, t, n) {
                    this.cfg = this.cfg.extend(n),
                    this._xformMode = e,
                    this._key = t,
                    this.reset()
                },
                reset: function() {
                    o.reset.call(this),
                    this._doReset()
                },
                process: function(e) {
                    return this._append(e),
                    this._process()
                },
                finalize: function(e) {
                    return e && this._append(e),
                    this._doFinalize()
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function(e) {
                    return {
                        encrypt: function(t, n, i) {
                            return ("string" == typeof n ? g: h).encrypt(e, t, n, i)
                        },
                        decrypt: function(t, n, i) {
                            return ("string" == typeof n ? g: h).decrypt(e, t, n, i)
                        }
                    }
                }
            });
            t.StreamCipher = a.extend({
                _doFinalize: function() {
                    return this._process(!0)
                },
                blockSize: 1
            });
            var l = p.mode = {},
            u = function(e, t, n) {
                var i = this._iv;
                i ? this._iv = void 0 : i = this._prevBlock;
                for (var r = 0; r < n; r++) e[t + r] ^= i[r]
            },
            d = (t.BlockCipherMode = n.extend({
                createEncryptor: function(e, t) {
                    return this.Encryptor.create(e, t)
                },
                createDecryptor: function(e, t) {
                    return this.Decryptor.create(e, t)
                },
                init: function(e, t) {
                    this._cipher = e,
                    this._iv = t
                }
            })).extend();
            d.Encryptor = d.extend({
                processBlock: function(e, t) {
                    var n = this._cipher,
                    i = n.blockSize;
                    u.call(this, e, t, i),
                    n.encryptBlock(e, t),
                    this._prevBlock = e.slice(t, t + i)
                }
            }),
            d.Decryptor = d.extend({
                processBlock: function(e, t) {
                    var n = this._cipher,
                    i = n.blockSize,
                    r = e.slice(t, t + i);
                    n.decryptBlock(e, t),
                    u.call(this, e, t, i),
                    this._prevBlock = r
                }
            }),
            l = l.CBC = d,
            d = (p.pad = {}).Pkcs7 = {
                pad: function(e, t) {
                    for (var n, i = (n = (n = 4 * t) - e.sigBytes % n) << 24 | n << 16 | n << 8 | n, o = [], c = 0; c < n; c += 4) o.push(i);
                    n = r.create(o, n),
                    e.concat(n)
                },
                unpad: function(e) {
                    e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
                }
            },
            t.BlockCipher = a.extend({
                cfg: a.cfg.extend({
                    mode: l,
                    padding: d
                }),
                reset: function() {
                    a.reset.call(this);
                    var e = (t = this.cfg).iv,
                    t = t.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE) var n = t.createEncryptor;
                    else n = t.createDecryptor,
                    this._minBufferSize = 1;
                    this._mode = n.call(t, this, e && e.words)
                },
                _doProcessBlock: function(e, t) {
                    this._mode.processBlock(e, t)
                },
                _doFinalize: function() {
                    var e = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        e.pad(this._data, this.blockSize);
                        var t = this._process(!0)
                    } else t = this._process(!0),
                    e.unpad(t);
                    return t
                },
                blockSize: 4
            });
            var f = t.CipherParams = n.extend({
                init: function(e) {
                    this.mixIn(e)
                },
                toString: function(e) {
                    return (e || this.formatter).stringify(this)
                }
            }),
            h = (l = (p.format = {}).OpenSSL = {
                stringify: function(e) {
                    var t = e.ciphertext;
                    return ((e = e.salt) ? r.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(c)
                },
                parse: function(e) {
                    var t = (e = c.parse(e)).words;
                    if (1398893684 == t[0] && 1701076831 == t[1]) {
                        var n = r.create(t.slice(2, 4));
                        t.splice(0, 4),
                        e.sigBytes -= 16
                    }
                    return f.create({
                        ciphertext: e,
                        salt: n
                    })
                }
            },
            t.SerializableCipher = n.extend({
                cfg: n.extend({
                    format: l
                }),
                encrypt: function(e, t, n, i) {
                    i = this.cfg.extend(i);
                    var r = e.createEncryptor(n, i);
                    return t = r.finalize(t),
                    r = r.cfg,
                    f.create({
                        ciphertext: t,
                        key: n,
                        iv: r.iv,
                        algorithm: e,
                        mode: r.mode,
                        padding: r.padding,
                        blockSize: e.blockSize,
                        formatter: i.format
                    })
                },
                decrypt: function(e, t, n, i) {
                    return i = this.cfg.extend(i),
                    t = this._parse(t, i.format),
                    e.createDecryptor(n, i).finalize(t.ciphertext)
                },
                _parse: function(e, t) {
                    return "string" == typeof e ? t.parse(e, this) : e
                }
            })),
            p = (p.kdf = {}).OpenSSL = {
                execute: function(e, t, n, i) {
                    return i || (i = r.random(8)),
                    e = s.create({
                        keySize: t + n
                    }).compute(e, i),
                    n = r.create(e.words.slice(t), 4 * n),
                    e.sigBytes = 4 * t,
                    f.create({
                        key: e,
                        iv: n,
                        salt: i
                    })
                }
            },
            g = t.PasswordBasedCipher = h.extend({
                cfg: h.cfg.extend({
                    kdf: p
                }),
                encrypt: function(e, t, n, i) {
                    return n = (i = this.cfg.extend(i)).kdf.execute(n, e.keySize, e.ivSize),
                    i.iv = n.iv,
                    (e = h.encrypt.call(this, e, t, n.key, i)).mixIn(n),
                    e
                },
                decrypt: function(e, t, n, i) {
                    return i = this.cfg.extend(i),
                    t = this._parse(t, i.format),
                    n = i.kdf.execute(n, e.keySize, e.ivSize, t.salt),
                    i.iv = n.iv,
                    h.decrypt.call(this, e, t, n.key, i)
                }
            })
        } (),
        function() {
            for (var e = i,
            t = e.lib.BlockCipher,
            n = e.algo,
            r = [], o = [], c = [], s = [], a = [], l = [], u = [], d = [], f = [], h = [], p = [], g = 0; 256 > g; g++) p[g] = 128 > g ? g << 1 : g << 1 ^ 283;
            var m = 0,
            v = 0;
            for (g = 0; 256 > g; g++) {
                var y = (y = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4) >>> 8 ^ 255 & y ^ 99;
                r[m] = y,
                o[y] = m;
                var _ = p[m],
                C = p[_],
                L = p[C],
                S = 257 * p[y] ^ 16843008 * y;
                c[m] = S << 24 | S >>> 8,
                s[m] = S << 16 | S >>> 16,
                a[m] = S << 8 | S >>> 24,
                l[m] = S,
                S = 16843009 * L ^ 65537 * C ^ 257 * _ ^ 16843008 * m,
                u[y] = S << 24 | S >>> 8,
                d[y] = S << 16 | S >>> 16,
                f[y] = S << 8 | S >>> 24,
                h[y] = S,
                m ? (m = _ ^ p[p[p[L ^ _]]], v ^= p[p[v]]) : m = v = 1
            }
            var b = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            n = n.AES = t.extend({
                _doReset: function() {
                    for (var e = (n = this._key).words, t = n.sigBytes / 4, n = 4 * ((this._nRounds = t + 6) + 1), i = this._keySchedule = [], o = 0; o < n; o++) if (o < t) i[o] = e[o];
                    else {
                        var c = i[o - 1];
                        o % t ? 6 < t && 4 == o % t && (c = r[c >>> 24] << 24 | r[c >>> 16 & 255] << 16 | r[c >>> 8 & 255] << 8 | r[255 & c]) : (c = r[(c = c << 8 | c >>> 24) >>> 24] << 24 | r[c >>> 16 & 255] << 16 | r[c >>> 8 & 255] << 8 | r[255 & c], c ^= b[o / t | 0] << 24),
                        i[o] = i[o - t] ^ c
                    }
                    for (e = this._invKeySchedule = [], t = 0; t < n; t++) o = n - t,
                    c = t % 4 ? i[o] : i[o - 4],
                    e[t] = 4 > t || 4 >= o ? c: u[r[c >>> 24]] ^ d[r[c >>> 16 & 255]] ^ f[r[c >>> 8 & 255]] ^ h[r[255 & c]]
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, c, s, a, l, r)
                },
                decryptBlock: function(e, t) {
                    var n = e[t + 1];
                    e[t + 1] = e[t + 3],
                    e[t + 3] = n,
                    this._doCryptBlock(e, t, this._invKeySchedule, u, d, f, h, o),
                    n = e[t + 1],
                    e[t + 1] = e[t + 3],
                    e[t + 3] = n
                },
                _doCryptBlock: function(e, t, n, i, r, o, c, s) {
                    for (var a = this._nRounds,
                    l = e[t] ^ n[0], u = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], h = 4, p = 1; p < a; p++) {
                        var g = i[l >>> 24] ^ r[u >>> 16 & 255] ^ o[d >>> 8 & 255] ^ c[255 & f] ^ n[h++],
                        m = i[u >>> 24] ^ r[d >>> 16 & 255] ^ o[f >>> 8 & 255] ^ c[255 & l] ^ n[h++],
                        v = i[d >>> 24] ^ r[f >>> 16 & 255] ^ o[l >>> 8 & 255] ^ c[255 & u] ^ n[h++];
                        f = i[f >>> 24] ^ r[l >>> 16 & 255] ^ o[u >>> 8 & 255] ^ c[255 & d] ^ n[h++],
                        l = g,
                        u = m,
                        d = v
                    }
                    g = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ n[h++],
                    m = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[h++],
                    v = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & u]) ^ n[h++],
                    f = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & d]) ^ n[h++],
                    e[t] = g,
                    e[t + 1] = m,
                    e[t + 2] = v,
                    e[t + 3] = f
                },
                keySize: 8
            });
            e.AES = t._createHelper(n)
        } (),
        i.pad.ZeroPadding = {
            pad: function(e, t) {
                var n = 4 * t;
                e.clamp(),
                e.sigBytes += n - (e.sigBytes % n || n)
            },
            unpad: function(e) {
                for (var t = e.words,
                n = e.sigBytes - 1; ! (t[n >>> 2] >>> 24 - n % 4 * 8 & 255);) n--;
                e.sigBytes = n + 1
            }
        },
        t.exports = i,
        cc._RF.pop()
    },
    {}],
    DataMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8b2af/B/WRKOrPyQp5sKqzj", "DataMgr"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.
    default = {
            reset: function() {
                this.currentLevel = 1,
                this.leftLipstick = 0,
                this.hitLipstick = 0,
                this.oneLevelHitCount = 0,
                this.oneLevelGameStartTime = 0,
                this.oneLevelGameEndTime = 0,
                this.secondLevelHitCount = 0,
                this.secondLevelGameStartTime = 0,
                this.secondLevelGameEndTime = 0,
                this.thirdLevelHitCount = 0,
                this.thirdLevelGameStartTime = 0,
                this.thirdLevelGameEndTime = 0,
                this.thrid = 0
            },
            token: "rouge",
            gameId: 11,
            currentLevel: 1,
            leftLipstick: 0,
            hitLipstick: 0,
            selectedPrize: null,
            lastCount: 0,
            gameInfo: null,
            areaId: 0,
            areaName: "",
            areaType: 0,
            consumeIntergral: 0,
            gameStartTime: 0,
            oneLevelHitCount: 0,
            oneLevelGameStartTime: 0,
            oneLevelGameEndTime: 0,
            secondLevelHitCount: 0,
            secondLevelGameStartTime: 0,
            secondLevelGameEndTime: 0,
            thirdLevelHitCount: 0,
            thirdLevelGameStartTime: 0,
            thirdLevelGameEndTime: 0,
            thrid: 0
        },
        t.exports = n.
    default,
        cc._RF.pop()
    },
    {}],
    Game: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "53deazEL+VKHY4Cw0/+hZuV", "Game");
        var i = e("DataMgr"),
        r = e("LayerMgr"),
        o = e("HttpMgr"),
        c = e("Utils"),
        s = e("AudioMgr");
        cc.Class({
            extends: cc.Component,
            properties: {
                nodePlate: cc.Node,
                nodeTouch: cc.Node,
                nodeLipstick: cc.Node,
                prefabLipstick: cc.Prefab,
                nodeLipstickContainer: cc.Node,
                txtTime: cc.Label,
                nodeProgress: cc.Node,
                progressBar: cc.ProgressBar,
                nodeLevel1: cc.Node,
                nodeLevel2: cc.Node,
                nodeLevel3: cc.Node
            },
            onLoad: function() {
                cc.director.getCollisionManager().enabled = !0,
                this._levelInfo = i.selectedPrize.censorship,
                this._isFlying = !1,
                this._isOver = !1,
                this._isPlaying = !1
            },
            getLevelInfo: function(e) {
                if (null == this._levelInfo) return null;
                var t = {
                    level: e
                };
                switch (e) {
                case 1:
                    t.second = this._levelInfo.oneLevelSecond,
                    t.rougeCount = this._levelInfo.oneLevelRougeCount,
                    t.difficultyList = this._levelInfo.oneLevelDifficultyList;
                    break;
                case 2:
                    t.second = this._levelInfo.secondLevelSecond,
                    t.rougeCount = this._levelInfo.secondLevelRougeCount,
                    t.difficultyList = this._levelInfo.secondLevelDifficultyList;
                    break;
                case 3:
                    t.second = this._levelInfo.thirdLevelSecond,
                    t.rougeCount = this._levelInfo.thirdLevelRougeCount,
                    t.difficultyList = this._levelInfo.thirdLevelDifficultyList
                }
                return t
            },
            getdifficulty: function(e) {
                if (null == e || e.length <= 0) return null;
                for (var t = [], n = 0; n < e.length; n++) for (var i = e[n].probability, r = 0; r < i;) t.push(n),
                r++;
                return e[t[c.getRandomNum(0, t.length - 1)]]
            },
            getControl: function() {
                var e = this.nodePlate.getComponent("Plate").getTargetNode();
                if (null == e.target) return cc.error(this.nodePlate),
                null;
                var t = e.offset;
                return - 1 == e.direct && (t -= 360),
                {
                    stayTime: .5,
                    degrees: t,
                    rotateTime: .25,
                    delayTime: 0
                }
            },
            start: function() {
                var e = this;
                this.nodeTouch.getComponent("Touch").setCallback(function() {
                    e.onTouchCallback()
                }),
                s.playMusic("remote/audio/bg"),
                this.nodePlate.zIndex = 10,
                this.initProgress(),
                this.reloadUI(),
                this.startRun()
            },
            startRun: function() {
                var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.nodePlate.stopAllActions(), this.nodePlate.rotation > 360 && (this.nodePlate.rotation = this.nodePlate.rotation % 360), t) {
                    var n = this.getControl(),
                    r = cc.sequence(cc.delayTime(n.delayTime), cc.rotateBy(n.rotateTime, n.degrees), cc.delayTime(n.stayTime), cc.callFunc(function() {
                        e.startRun()
                    }));
                    this.nodePlate.getComponent("Plate").setDirect(n.degrees > 0 ? 1 : -1),
                    this.nodePlate.runAction(r)
                } else {
                    var o = this.getdifficulty(this.getLevelInfo(i.currentLevel).difficultyList),
                    c = o.stayTime || 0,
                    s = o.acceleratedSpeed || 1.5,
                    a = o.turnAngle || 360,
                    l = cc.sequence(cc.rotateBy(Math.abs(a / 90), a).easing(cc.easeInOut(s)), cc.delayTime(c), cc.callFunc(function() {
                        e.startRun()
                    }));
                    this.nodePlate.getComponent("Plate").setDirect(a > 0 ? 1 : -1),
                    this.nodePlate.runAction(l)
                }
            },
            onTouchCallback: function() {
                var e = this;
                if (! (i.leftLipstick <= 0 || this._isFlying || this._isOver) && this._isPlaying) {
                    if (this.txtTime.node.active) {
                        var t = this.txtTime.string;
                        if (null == t || "0" == t) return
                    }
                    if (this.nodeLipstick.active) {
                        this._isFlying = !0;
                        var n = function(t) {
                            var n = cc.instantiate(e.prefabLipstick);
                            n.x = e.nodeLipstick.x,
                            n.y = e.nodeLipstick.y,
                            n.parent = e.nodeLipstick.parent,
                            n.getComponent("Lipstick").setCallback({
                                success: function() {
                                    e.onSuccessCallback(),
                                    e._isFlying = !1
                                },
                                fail: function() {
                                    e.onFailCallback(),
                                    e._isFlying = !1
                                }
                            },
                            t),
                            n.runAction(cc.moveTo(.3, 0, e.nodePlate.y)),
                            i.leftLipstick--,
                            e.nodeLipstickContainer.getComponent("LipstickContainer").reload(i.leftLipstick, e.getLevelInfo(i.currentLevel).rougeCount),
                            i.leftLipstick <= 0 ? e.nodeLipstick.active = !1 : e.nodeLipstick.runAction(cc.sequence(cc.hide(), cc.delayTime(.2), cc.show()))
                        };
                        i.thrid = Math.random() > 0.3 ? 1 : 0;
                        3 == i.currentLevel && 2 == i.leftLipstick ? (this.startRun(0 == i.thrid), n(0 != i.thrid)) : n(!0)
                    }
                }
            },
            reloadUI: function() {
                var e = this;
                o.getCurrentSMT(function(t) {
                    var n = e.getLevelInfo(i.currentLevel);
                    e.nodeLipstickContainer.getComponent("LipstickContainer").reload(n.rougeCount, n.rougeCount),
                    i.leftLipstick = n.rougeCount,
                    i.hitLipstick = 0,
                    e.setTime(n.second),
                    e.nodePlate.getComponent("Plate").removeAllLipstick(),
                    e.nodeLipstick.active = n.rougeCount > 0,
                    n.second > 0 && e.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                        e.startTimer()
                    }))),
                    e.onRoundStart(n.level, t),
                    r.showLevelStart(n.level,
                    function() {
                        e._isFlying = !1,
                        e._isOver = !1,
                        e._isPlaying = !0
                    })
                })
            },
            initProgress: function() {
                var e = this._levelInfo,
                t = e.oneLevelRougeCount + e.secondLevelRougeCount + e.thirdLevelRougeCount;
                this.nodeLevel1.y = this.getLevelInfo(1).rougeCount / t * this.nodeProgress.height,
                this.nodeLevel2.y = this.nodeLevel1.y + this.getLevelInfo(2).rougeCount / t * this.nodeProgress.height
            },
            reloadProgress: function() {
                for (var e = 0,
                t = 0,
                n = 1; n <= 3; n++) {
                    var r = this.getLevelInfo(n);
                    r.level < i.currentLevel && (e += r.rougeCount),
                    t += r.rougeCount
                }
                e += i.hitLipstick,
                this.progressBar.progress = e / t,
                this.nodeLevel1.getChildByName("done").active = i.currentLevel > 1 || 1 == i.currentLevel && i.hitLipstick >= this.getLevelInfo(1).rougeCount,
                this.nodeLevel2.getChildByName("done").active = i.currentLevel > 2 || 2 == i.currentLevel && i.hitLipstick >= this.getLevelInfo(2).rougeCount,
                this.nodeLevel3.getChildByName("done").active = 3 == i.currentLevel && i.hitLipstick >= this.getLevelInfo(3).rougeCount
            },
            setTime: function(e) {
                e > 0 ? (this.txtTime.node.active = !0, this.txtTime.string = e) : this.txtTime.node.active = !1
            },
            startTimer: function() {
                this.schedule(this.timerCallback, 1)
            },
            stopTimer: function() {
                this.unschedule(this.timerCallback)
            },
            timerCallback: function() {
                var e = parseInt(this.txtTime.string);
                e <= 0 ? this.onTimerEnd() : e--,
                this.txtTime.string = e
            },
            onTimerEnd: function() {
                var e = this;
                o.getCurrentSMT(function(t) {
                    e.onRoundEnd(i.currentLevel, t, 1e3),
                    e.gameCompleteLogic(!1)
                })
            },
            onSuccessCallback: function() {
                var e = this;
                i.hitLipstick++,
                this.reloadProgress(),
                i.hitLipstick == this.getLevelInfo(i.currentLevel).rougeCount && (i.currentLevel == this.getLevelInfo(3).level ? o.getCurrentSMT(function(t) {
                    e.onRoundEnd(i.currentLevel, t),
                    e.gameCompleteLogic(!0)
                }) : o.getCurrentSMT(function(t) {
                    0 != t && (e.onRoundEnd(i.currentLevel, t), i.currentLevel++, e.node.runAction(cc.sequence(cc.callFunc(function() {
                        e._isPlaying = !1,
                        r.showLevelEnd(!0, e.getLevelInfo(i.currentLevel - 1).level)
                    }), cc.delayTime(1), cc.callFunc(function() {
                        // 3 == i.currentLevel ? o.extraInfo(i.gameStartTime, {
                        //     success: function(t) {
                        //         null != t && null != t.result && t.result && null != typeof t.data.thrid && (i.thrid = t.data.thrid),
                        //         e.reloadUI()
                        //     },
                        //     timeout: function(t) {
                        //         e.reloadUI()
                        //     },
                        //     error: function(t) {
                        //         e.reloadUI()
                        //     }
                        // }) : e.reloadUI()
                        e.reloadUI()
                    }))))
                }))
            },
            onRoundStart: function(e, t) {
                switch (e) {
                case 1:
                    i.oneLevelGameStartTime = t;
                    break;
                case 2:
                    i.secondLevelGameStartTime = t;
                    break;
                case 3:
                    i.thirdLevelGameStartTime = t
                }
            },
            onRoundEnd: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (this.stopTimer(), 0 == t) return ! 1;
                switch (e) {
                case 1:
                    i.oneLevelHitCount = i.hitLipstick,
                    i.oneLevelGameEndTime = t + n;
                    break;
                case 2:
                    i.secondLevelHitCount = i.hitLipstick,
                    i.secondLevelGameEndTime = t + n;
                    break;
                case 3:
                    i.thirdLevelHitCount = i.hitLipstick,
                    i.thirdLevelGameEndTime = t + n
                }
                return ! 0
            },
            onFailCallback: function() {
                var e = this;
                this._isOver = !0,
                o.getCurrentSMT(function(t) {
                    e.onRoundEnd(i.currentLevel, t),
                    e.gameCompleteLogic(!1)
                })
            },
            gameCompleteLogic: function(e) {
                var t = this,
                n = function(e) {
                    r.showMsgBox(e, !0, {
                        txt: "\u786e\u5b9a",
                        callback: function() {
                            cc.director.loadScene("home")
                        }
                    },
                    null)
                };
                r.showMsgBox(e ? "过关" : "失败", !0, {
                        txt: "\u786e\u5b9a",
                        callback: function() {
                            cc.director.loadScene("home")
                        }
                    },
                null)
                
            }
        }),
        cc._RF.pop()
    },
    {
        AudioMgr: "AudioMgr",
        DataMgr: "DataMgr",
        HttpMgr: "HttpMgr",
        LayerMgr: "LayerMgr",
        Utils: "Utils"
    }],
    Home: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9d19345gP5HNbbiGaMDWls7", "Home");
        var i = e("LayerMgr"),
        r = e("DataMgr"),
        o = e("HttpMgr"),
        c = e("AudioMgr");
        cc.Class({
            extends: cc.Component,
            properties: {
                spAudio: cc.Sprite,
                spfAudio: [cc.SpriteFrame],
                txtLefttime: cc.Label,
                txtTitle: cc.Label,
                togContainer: cc.ToggleContainer,
                prefabPrizeUnit: cc.Prefab,
                btnStartGame: cc.Button,
                scrollList: cc.ScrollView,
                nodeTouchMask: cc.Node
            },
            start: function() {
                this.txtLefttime.string = "\u4eca\u65e5\u5269\u4f59\uff1a" + r.lastCount,
                this.txtTitle.string = r.gameInfo.areaList[0].areaName,
                c.playMusic("remote/audio/bg"),
                this.addToggle(),
                this.reloadAudio()
            },
            onClick: function(e, t) {
                switch (t) {
                case "record":
                    i.showRecord();
                    break;
                case "rule":
                    i.showRule();
                    break;
                case "start":
                    this.startGameLogic();
                    break;
                case "audio":
                    c.hasAudio ? (c.hasAudio = !1, c.stopMusic()) : (c.hasAudio = !0, c.playMusic("remote/audio/bg")),
                    this.reloadAudio()
                }
            },
            reloadAudio: function() {
                this.spAudio.spriteFrame = c.hasAudio ? this.spfAudio[1] : this.spfAudio[0]
            },
            startGameLogic: function() {
                var e = this,
                t = function(e) {
                    i.showMsgBox(e, !0, {
                        txt: "\u786e\u5b9a",
                        callback: function() {}
                    },
                    null)
                };
                e.btnStartGame.interactable = !1,
                e.nodeTouchMask.active = !0,
                o.getCurrentSMT(function(n) {
                    r.gameStartTime = n,
                    (r.reset(), cc.director.loadScene("game"))
                })
            },
            onToggle: function(e, t) {
                for (var n = e.node.parent.children,
                i = 0; i < n.length; i++) {
                    var o = n[i].getComponent("PrizeUnit");
                    o.reloadUI(e.node == n[i]),
                    e.node == n[i] && (r.selectedPrize = o.getData())
                }
            },
            addToggle: function() {
                this.togContainer.node.removeAllChildren(),
                r.areaId = r.gameInfo.areaList[0].areaId,
                r.areaName = r.gameInfo.areaList[0].areaName,
                r.areaType = r.gameInfo.areaList[0].areaType,
                r.consumeIntergral = r.gameInfo.areaList[0].consumeIntergral;
                for (var e = r.gameInfo.areaList[0].prizeList, t = 0; t < e.length; t++) {
                    var n = cc.instantiate(this.prefabPrizeUnit),
                    i = n.getComponent("PrizeUnit");
                    i.reload(e[t]),
                    i.reloadUI(!1),
                    n.parent = this.togContainer.node
                }
                this.togContainer.node.getComponent(cc.Layout).updateLayout(),
                this.togContainer.node.width < this.scrollList.node.width ? this.scrollList.node.width = this.togContainer.node.width: (this.scrollList.node.width = cc.winSize.width, this.scrollList.scrollToLeft())
            }
        }),
        cc._RF.pop()
    },
    {
        AudioMgr: "AudioMgr",
        DataMgr: "DataMgr",
        HttpMgr: "HttpMgr",
        LayerMgr: "LayerMgr"
    }],
    HttpMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "75d60YCXNZBy5Tp/ZSpRjbs", "HttpMgr"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        r = e("Http"),
        o = e("Config"),
        c = e("DataMgr"),
        s = e("Utils"),
        a = e("LayerMgr"),
        l = e("CryptoJS"),
        u = {
            signData: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
                return e = JSON.stringify(e),
                e += t,
                s.MD5(e).toLowerCase()
            },
            getHeader: function(e, t) {
                var n = this.signData(e, "ccfd5d9080b73c549a1ae2f80055af75"),
                i = t;
                return {
                    "x-auth-id": c.gameId,
                    "x-auth-sign": n,
                    "x-auth-time": i,
                    Authorization: "Basic " + c.token,
                    "Content-Type": "application/json"
                }
            },
            getCurrentSMT: function(e) {
                e(t)
            },
            decrypt: function(e) {
                var t = l.enc.Utf8.parse("ccfd5d9080b73c549a1ae2f80055af75"),
                n = l.enc.Utf8.parse("Gfgmf4,Ir)b$=pkf");
                return l.AES.decrypt(e, t, {
                    iv: n,
                    mode: l.mode.CBC,
                    padding: l.pad.ZeroPadding
                }).toString(l.enc.Utf8)
            },
            encrypt: function(e) {
                var t = l.enc.Utf8.parse("ccfd5d9080b73c549a1ae2f80055af75"),
                n = l.enc.Utf8.parse("Gfgmf4,Ir)b$=pkf");
                return l.AES.encrypt(e, t, {
                    iv: n,
                    mode: l.mode.CBC,
                    padding: l.pad.ZeroPadding
                }).toString()
            },
            initMgr: function(e) {
                var t = s.getQuery();
                if (cc.log("=========>params", t), null == t || "" == t) e();
                else {
                    var n = s.queryToObject(t);
                    c.token = n.tokenId,
                    c.gameId = n.gameId,
                    e()
                }
                window.addEventListener("online",
                function() {
                    console.log("\u7f51\u7edc\u8fde\u901a\u4e86")
                }),
                window.addEventListener("offline",
                function() {
                    console.log("\u7f51\u7edc\u65ad\u5f00\u4e86")
                })
            },
            onResp: function(e, t) {
                if (null != e && null != e.result && e.result) t(e);
                else {
                    var n = "";
                    "object" == (void 0 === e ? "undefined": i(e)) && null != e.error && null != e.error.message && (n = e.error.message),
                    a.showMessageBox(n, {
                        callback: function() {
                            a.removeMessageBox()
                        },
                        msg: "\u786e\u5b9a"
                    },
                    null, !1)
                }
            },
            onTimeoutResp: function() {
                a.showMsgBox("\u7f51\u7edc\u5b58\u5728\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f", !0, {
                    callback: function() {
                        a.removeMessageBox()
                    },
                    txt: "\u786e\u5b9a"
                },
                null)
            },
            onErrorResp: function() {
                a.showMsgBox("\u4f11\u606f\u4e00\u4e0b\uff0c\u7a0d\u540e\u518d\u6765\u8bd5\u8bd5\u54e6~", !0, {
                    callback: function() {
                        a.removeMessageBox()
                    },
                    txt: "\u786e\u5b9a"
                },
                null)
            },
            init: function(e) {
                var t = this,
                n = {};
                var json = '{"result":true,"error":{"code":1040,"message":"今日游戏次数已用完,休息一下,明天再来吧!","isShowButton":0},"data":{"result":true,"gameInfo":{"areaList":[{"prizeList":[{"prizeId":9,"name":"奖励19积分","url":"https://cmb-img.fulugame.cn/images/2019/07/15/e2cd049897f9428c9f2e50728d89bae8.png","awardIntergral":19,"count":0,"noticeCountDay":0,"lastCount":0,"censorship":{"censorshipId":6,"name":"通关领19积分","oneLevelSecond":30,"oneLevelRougeCount":3,"oneLevelDifficultyList":[{"id":64,"createdBy":null,"createdAt":"2019-07-18 18:29:15","updatedBy":null,"updatedAt":"2019-07-18 18:29:15","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":16,"stayTime":0.10,"turnAngle":-450,"acceleratedSpeed":3,"probability":100.00}],"secondLevelSecond":30,"secondLevelRougeCount":6,"secondLevelDifficultyList":[{"id":29,"createdBy":null,"createdAt":"2019-07-15 17:35:37","updatedBy":null,"updatedAt":"2019-07-15 17:35:37","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":17,"stayTime":0.10,"turnAngle":450,"acceleratedSpeed":3,"probability":50.00},{"id":30,"createdBy":null,"createdAt":"2019-07-15 17:35:37","updatedBy":null,"updatedAt":"2019-07-15 17:35:37","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":17,"stayTime":0.10,"turnAngle":-450,"acceleratedSpeed":3,"probability":50.00}],"thirdLevelSecond":30,"thirdLevelRougeCount":8,"thirdLevelDifficultyList":[{"id":34,"createdBy":null,"createdAt":"2019-07-15 17:39:48","updatedBy":null,"updatedAt":"2019-07-15 17:39:48","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":19,"stayTime":0.10,"turnAngle":360,"acceleratedSpeed":4,"probability":30.00},{"id":35,"createdBy":null,"createdAt":"2019-07-15 17:39:48","updatedBy":null,"updatedAt":"2019-07-15 17:39:48","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":19,"stayTime":0.10,"turnAngle":-360,"acceleratedSpeed":3,"probability":30.00},{"id":36,"createdBy":null,"createdAt":"2019-07-15 17:39:48","updatedBy":null,"updatedAt":"2019-07-15 17:39:48","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":19,"stayTime":0.10,"turnAngle":270,"acceleratedSpeed":4,"probability":40.00}]},"useInstruction":null},{"prizeId":10,"name":"奖励99积分","url":"https://cmb-img.fulugame.cn/images/2019/07/15/9cddff4109394029a265d6d9a3d1275a.png","awardIntergral":99,"count":0,"noticeCountDay":0,"lastCount":0,"censorship":{"censorshipId":7,"name":"奖励99积分","oneLevelSecond":30,"oneLevelRougeCount":4,"oneLevelDifficultyList":[{"id":31,"createdBy":null,"createdAt":"2019-07-15 17:36:24","updatedBy":null,"updatedAt":"2019-07-15 17:36:24","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":18,"stayTime":0.10,"turnAngle":450,"acceleratedSpeed":3,"probability":30.00},{"id":32,"createdBy":null,"createdAt":"2019-07-15 17:36:24","updatedBy":null,"updatedAt":"2019-07-15 17:36:24","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":18,"stayTime":0.10,"turnAngle":-360,"acceleratedSpeed":3,"probability":40.00},{"id":33,"createdBy":null,"createdAt":"2019-07-15 17:36:24","updatedBy":null,"updatedAt":"2019-07-15 17:36:24","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":18,"stayTime":0.10,"turnAngle":450,"acceleratedSpeed":3,"probability":30.00}],"secondLevelSecond":30,"secondLevelRougeCount":8,"secondLevelDifficultyList":[{"id":37,"createdBy":null,"createdAt":"2019-07-15 18:10:03","updatedBy":null,"updatedAt":"2019-07-15 18:10:03","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":20,"stayTime":0.10,"turnAngle":360,"acceleratedSpeed":4,"probability":30.00},{"id":38,"createdBy":null,"createdAt":"2019-07-15 18:10:03","updatedBy":null,"updatedAt":"2019-07-15 18:10:03","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":20,"stayTime":0.10,"turnAngle":-270,"acceleratedSpeed":4,"probability":30.00},{"id":39,"createdBy":null,"createdAt":"2019-07-15 18:10:03","updatedBy":null,"updatedAt":"2019-07-15 18:10:03","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":20,"stayTime":0.10,"turnAngle":270,"acceleratedSpeed":3,"probability":30.00},{"id":40,"createdBy":null,"createdAt":"2019-07-15 18:10:03","updatedBy":null,"updatedAt":"2019-07-15 18:10:03","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":20,"stayTime":0.10,"turnAngle":-450,"acceleratedSpeed":3,"probability":10.00}],"thirdLevelSecond":30,"thirdLevelRougeCount":9,"thirdLevelDifficultyList":[{"id":45,"createdBy":null,"createdAt":"2019-07-15 18:11:57","updatedBy":null,"updatedAt":"2019-07-15 18:11:57","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":22,"stayTime":0.30,"turnAngle":360,"acceleratedSpeed":4,"probability":10.00},{"id":46,"createdBy":null,"createdAt":"2019-07-15 18:11:57","updatedBy":null,"updatedAt":"2019-07-15 18:11:57","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":22,"stayTime":0.00,"turnAngle":-270,"acceleratedSpeed":4,"probability":20.00},{"id":47,"createdBy":null,"createdAt":"2019-07-15 18:11:57","updatedBy":null,"updatedAt":"2019-07-15 18:11:57","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":22,"stayTime":0.00,"turnAngle":-180,"acceleratedSpeed":4,"probability":20.00},{"id":65,"createdBy":null,"createdAt":"2019-07-19 09:02:14","updatedBy":null,"updatedAt":"2019-07-19 09:02:14","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":22,"stayTime":0.00,"turnAngle":90,"acceleratedSpeed":3,"probability":30.00},{"id":66,"createdBy":null,"createdAt":"2019-07-19 09:08:45","updatedBy":null,"updatedAt":"2019-07-19 09:08:45","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":22,"stayTime":0.00,"turnAngle":60,"acceleratedSpeed":2,"probability":20.00}]},"useInstruction":null}],"areaName":"积分区","areaType":0,"consumeIntergral":9,"areaId":13},{"prizeList":[{"prizeId":11,"name":"  ","url":"https://cmb-img.fulugame.cn/images/2019/08/01/6d70726aaf46486fa9be66335152d505.jpg","awardIntergral":5,"count":8,"noticeCountDay":10,"lastCount":8,"censorship":{"censorshipId":8,"name":"游戏券","oneLevelSecond":30,"oneLevelRougeCount":3,"oneLevelDifficultyList":[{"id":64,"createdBy":null,"createdAt":"2019-07-18 18:29:15","updatedBy":null,"updatedAt":"2019-07-18 18:29:15","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":16,"stayTime":0.10,"turnAngle":-450,"acceleratedSpeed":3,"probability":100.00}],"secondLevelSecond":30,"secondLevelRougeCount":5,"secondLevelDifficultyList":[{"id":29,"createdBy":null,"createdAt":"2019-07-15 17:35:37","updatedBy":null,"updatedAt":"2019-07-15 17:35:37","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":17,"stayTime":0.10,"turnAngle":450,"acceleratedSpeed":3,"probability":50.00},{"id":30,"createdBy":null,"createdAt":"2019-07-15 17:35:37","updatedBy":null,"updatedAt":"2019-07-15 17:35:37","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":17,"stayTime":0.10,"turnAngle":-450,"acceleratedSpeed":3,"probability":50.00}],"thirdLevelSecond":30,"thirdLevelRougeCount":7,"thirdLevelDifficultyList":[{"id":31,"createdBy":null,"createdAt":"2019-07-15 17:36:24","updatedBy":null,"updatedAt":"2019-07-15 17:36:24","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":18,"stayTime":0.10,"turnAngle":450,"acceleratedSpeed":3,"probability":30.00},{"id":32,"createdBy":null,"createdAt":"2019-07-15 17:36:24","updatedBy":null,"updatedAt":"2019-07-15 17:36:24","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":18,"stayTime":0.10,"turnAngle":-360,"acceleratedSpeed":3,"probability":40.00},{"id":33,"createdBy":null,"createdAt":"2019-07-15 17:36:24","updatedBy":null,"updatedAt":"2019-07-15 17:36:24","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":18,"stayTime":0.10,"turnAngle":450,"acceleratedSpeed":3,"probability":30.00}]},"useInstruction":"使用说明"},{"prizeId":12,"name":"奖励阿玛尼唇","url":"https://cmb-img.fulugame.cn/images/2019/08/01/2681d9e92c824d3ba9da8d7072c6a034.jpg","awardIntergral":50,"count":20,"noticeCountDay":1,"lastCount":20,"censorship":{"censorshipId":8,"name":"游戏券","oneLevelSecond":30,"oneLevelRougeCount":3,"oneLevelDifficultyList":[{"id":64,"createdBy":null,"createdAt":"2019-07-18 18:29:15","updatedBy":null,"updatedAt":"2019-07-18 18:29:15","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":16,"stayTime":0.10,"turnAngle":-450,"acceleratedSpeed":3,"probability":100.00}],"secondLevelSecond":30,"secondLevelRougeCount":5,"secondLevelDifficultyList":[{"id":29,"createdBy":null,"createdAt":"2019-07-15 17:35:37","updatedBy":null,"updatedAt":"2019-07-15 17:35:37","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":17,"stayTime":0.10,"turnAngle":450,"acceleratedSpeed":3,"probability":50.00},{"id":30,"createdBy":null,"createdAt":"2019-07-15 17:35:37","updatedBy":null,"updatedAt":"2019-07-15 17:35:37","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":17,"stayTime":0.10,"turnAngle":-450,"acceleratedSpeed":3,"probability":50.00}],"thirdLevelSecond":30,"thirdLevelRougeCount":7,"thirdLevelDifficultyList":[{"id":31,"createdBy":null,"createdAt":"2019-07-15 17:36:24","updatedBy":null,"updatedAt":"2019-07-15 17:36:24","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":18,"stayTime":0.10,"turnAngle":450,"acceleratedSpeed":3,"probability":30.00},{"id":32,"createdBy":null,"createdAt":"2019-07-15 17:36:24","updatedBy":null,"updatedAt":"2019-07-15 17:36:24","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":18,"stayTime":0.10,"turnAngle":-360,"acceleratedSpeed":3,"probability":40.00},{"id":33,"createdBy":null,"createdAt":"2019-07-15 17:36:24","updatedBy":null,"updatedAt":"2019-07-15 17:36:24","deleted":false,"deletedBy":null,"deletedAt":null,"difficultyId":18,"stayTime":0.10,"turnAngle":450,"acceleratedSpeed":3,"probability":30.00}]},"useInstruction":"使用说明"}],"areaName":"商品区","areaType":1,"consumeIntergral":1,"areaId":14}]},"lastCount":0,"error":{"code":1040,"message":"今日游戏次数已用完,休息一下,明天再来吧!","isShowButton":0}},"page":null}'
                e(JSON.parse(json))
            },
            bill: function(e, t, n) {
                var i = this,
                c = {};
                this.getCurrentSMT(function(s) {
                    r.post({
                        url: o.HOST + "/v1/client/bill/" + e + "/" + t,
                        header: i.getHeader(c, s),
                        body: JSON.stringify(c),
                        onResp: function(e) {
                            null != n && null != n.success && n.success(JSON.parse(e))
                        },
                        onTimeout: function() {
                            null != n && null != n.timeout && n.timeout("\u7f51\u7edc\u5b58\u5728\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f")
                        },
                        onError: function() {
                            null != n && null != n.error && n.error("\u7f51\u7edc\u5b58\u5728\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f")
                        }
                    })
                })
            },
            consume: function(e, t, n, i, s) {
                var a = this,
                l = {
                    gameStartTime: e,
                    areaId: t,
                    censorshipId: n,
                    prizeId: i
                };
                this.getCurrentSMT(function(e) {
                    r.post({
                        url: o.HOST + "/v1/client/consume",
                        header: a.getHeader(l, e),
                        body: JSON.stringify(l),
                        onResp: function(e) {
                            var t = JSON.parse(e);
                            null != t && null != t.result && t.result && c.lastCount--,
                            null != s && null != s.success && s.success(t)
                        },
                        onTimeout: function() {
                            null != s && null != s.timeout && s.timeout("\u8bf7\u6c42\u8d85\u65f6\uff0c\u65e0\u6cd5\u5f00\u59cb\u6e38\u620f\uff0c\u672a\u6263\u51cf\u60a8\u7684\u79ef\u5206\u54e6~")
                        },
                        onError: function() {
                            null != s && null != s.error && s.error("\u8bf7\u6c42\u8d85\u65f6\uff0c\u65e0\u6cd5\u5f00\u59cb\u6e38\u620f\uff0c\u672a\u6263\u51cf\u60a8\u7684\u79ef\u5206\u54e6~")
                        }
                    })
                })
            },
            rule: function(e) {
                var t = this,
                n = {};
                this.getCurrentSMT(function(i) {
                    r.post({
                        url: o.HOST + "/v1/client/rule",
                        header: t.getHeader(n, i),
                        body: JSON.stringify(n),
                        onResp: function(t) {
                            null != e && null != e.success && e.success(JSON.parse(t))
                        },
                        onTimeout: function() {
                            null != e && null != e.timeout && e.timeout("\u7f51\u7edc\u5b58\u5728\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f")
                        },
                        onError: function() {
                            null != e && null != e.error && e.error("\u7f51\u7edc\u5b58\u5728\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f")
                        }
                    })
                })
            },
            increase: function(e, t) {
                var n = this,
                i = e;
                this.getCurrentSMT(function(e) {
                    r.post({
                        url: o.HOST + "/v1/client/increase",
                        header: n.getHeader(i, e),
                        body: JSON.stringify(i),
                        onResp: function(e) {
                            null != t && null != t.success && t.success(JSON.parse(e))
                        },
                        onTimeout: function() {
                            null != t && null != t.timeout && t.timeout("\u7f51\u7edc\u5b58\u5728\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f")
                        },
                        onError: function() {
                            null != t && null != t.error && t.error("\u7f51\u7edc\u5b58\u5728\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f")
                        }
                    })
                })
            },
            extraInfo: function(e, t) {
                var n = this,
                i = {
                    gameStartTime: e
                };
                this.getCurrentSMT(function(e) {
                    r.post({
                        url: o.HOST + "/v1/client/extraInfo",
                        header: n.getHeader(i, e),
                        body: JSON.stringify(i),
                        onResp: function(e) {
                            if (null != t && null != t.success) {
                                var i = JSON.parse(e);
                                null != i && null != i.result && i.result ? (i.data.thrid = n.decrypt(i.data.thrid), cc.log("thrid:" + i.data.thrid), t.success(i)) : t.success(i)
                            }
                        },
                        onTimeout: function() {
                            null != t && null != t.timeout && t.timeout("\u7f51\u7edc\u5b58\u5728\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f")
                        },
                        onError: function() {
                            null != t && null != t.error && t.error("\u7f51\u7edc\u5b58\u5728\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f")
                        }
                    })
                })
            }
        };
        n.
    default = u,
        t.exports = n.
    default,
        cc._RF.pop()
    },
    {
        Config: "Config",
        CryptoJS: "CryptoJS",
        DataMgr: "DataMgr",
        Http: "Http",
        LayerMgr: "LayerMgr",
        Utils: "Utils"
    }],
    Http: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d02650t0T9LybVq48gMuTSG", "Http"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        r = {
            post: function(e) {
                return this._doRequest("POST", e)
            },
            get: function(e) {
                return this._doRequest("GET", e)
            },
            getCurrentSMT: function(e, t) {
                var n = 0;
                this._doRequest("GET", {
                    url: e,
                    onResp: function(e) {
                        var i = JSON.parse(e);
                        null != i.result && i.result && null != i.data && "number" == typeof i.data && (n = i.data),
                        t(n)
                    },
                    onTimeout: function() {
                        t(n)
                    },
                    onError: function() {
                        t(n)
                    }
                })
            },
            _doRequest: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "GET",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = cc.loader.getXMLHttpRequest();
                if (n.timeout = null != t.timeout ? t.timeout: 1e4, n.onreadystatechange = function() {
                    4 == n.readyState && n.status >= 200 && n.status < 400 && "function" == typeof t.onResp && t.onResp(n.responseText)
                },
                n.ontimeout = function() {
                    cc.log("http timeout!"),
                    "function" == typeof t.onTimeout && t.onTimeout()
                },
                n.onerror = function() {
                    cc.log("http error!"),
                    "function" == typeof t.onError && t.onError()
                },
                n.open(e, t.url, !0), "object" == i(t.header)) for (var r in t.header) n.setRequestHeader(r, t.header[r]);
                return "POST" == e && "string" == typeof t.body ? n.send(t.body) : n.send(),
                n
            }
        };
        n.
    default = r,
        t.exports = n.
    default,
        cc._RF.pop()
    },
    {}],
    ImageUrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5d741cWZGhBRJHP61V5fePv", "ImageUrl"),
        cc.Class({
            extends: cc.Component,
            properties: {
                spriteImage: cc.Sprite
            },
            onLoad: function() {
                this._defaultSpriteFrame = this.spriteImage.spriteFrame
            },
            start: function() {},
            loadUrl: function(e) {
                var t = this;
                if (null == e || "" == e) return cc.error("invalid url", e),
                void(this.spriteImage.spriteFrame = this._defaultSpriteFrame);
                cc.loader.load({
                    url: e,
                    type: "png"
                },
                function(n, i) {
                    if (null == n) {
                        if (null == t.spriteImage && (cc.error(t, e), cc.error(t.parent)), null != t.spriteImage) {
                            var r = t.spriteImage.node.width,
                            o = t.spriteImage.node.height;
                            t.spriteImage.spriteFrame = new cc.SpriteFrame(i),
                            t.spriteImage.node.width = r,
                            t.spriteImage.node.height = o
                        }
                    } else cc.error(e, n)
                })
            }
        }),
        cc._RF.pop()
    },
    {}],
    LayerMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "29ad3ouyepAab2eTVSWTNUX", "LayerMgr"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = {
            showLevelStart: function(e, t) {
                null == cc.director.getScene().getChildByName("level_start") && cc.loader.loadRes("remote/prefab/levelStart",
                function(n, i) {
                    if (n) cc.error("remote/prefab/levelStart", n);
                    else {
                        var r = cc.instantiate(i);
                        r.parent = cc.director.getScene(),
                        r.name = "level_start",
                        r.getComponent("LevelStart").startShow(e,
                        function() {
                            null != t && t()
                        })
                    }
                })
            },
            showLevelEnd: function(e, t, n) {
                null == cc.director.getScene().getChildByName("level_end") && cc.loader.loadRes("remote/prefab/levelEnd",
                function(i, r) {
                    if (i) cc.error("remote/prefab/levelEnd", i);
                    else {
                        var o = cc.instantiate(r);
                        o.parent = cc.director.getScene(),
                        o.name = "level_end",
                        o.getComponent("LevelEnd").startShow(e, t, n)
                    }
                })
            },
            showReward: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                null == cc.director.getScene().getChildByName("reward") && cc.loader.loadRes("remote/prefab/reward",
                function(t, n) {
                    if (t) cc.error("remote/prefab/reward", t);
                    else {
                        var i = cc.instantiate(n);
                        i.parent = cc.director.getScene(),
                        i.name = "reward",
                        i.getComponent("Reward").startShow(e)
                    }
                })
            },
            showRule: function() {
                null == cc.director.getScene().getChildByName("rule") && cc.loader.loadRes("remote/prefab/rule",
                function(e, t) {
                    if (e) cc.error("remote/prefab/rule", e);
                    else {
                        var n = cc.instantiate(t);
                        n.parent = cc.director.getScene(),
                        n.name = "rule"
                    }
                })
            },
            showRecord: function() {
                null == cc.director.getScene().getChildByName("record") && cc.loader.loadRes("remote/prefab/record",
                function(e, t) {
                    if (e) cc.error("remote/prefab/record", e);
                    else {
                        var n = cc.instantiate(t);
                        n.parent = cc.director.getScene(),
                        n.name = "record"
                    }
                })
            },
            showMsgBox: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
                null == cc.director.getScene().getChildByName("msgbox") && cc.loader.loadRes("remote/prefab/msgBox",
                function(o, c) {
                    if (o) cc.error("remote/prefab/msgBox", o);
                    else if (null == cc.director.getScene().getChildByName("msgbox")) {
                        var s = cc.instantiate(c);
                        s.parent = cc.director.getScene(),
                        s.name = "msgbox",
                        s.getComponent("MsgBox").showMsg(e, t, n, i, r)
                    }
                })
            }
        };
        n.
    default = i,
        t.exports = n.
    default,
        cc._RF.pop()
    },
    {}],
    LevelEnd: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2a8d4CDgDlNFIfcaZuS6YSU", "LevelEnd");
        var i = e("LayerMgr"),
        r = e("DataMgr"),
        o = e("HttpMgr");
        cc.Class({
            extends: cc.Component,
            properties: {
                spfLevel: [cc.SpriteFrame],
                spLevel: cc.Sprite,
                nodeSuccess: cc.Node,
                nodeFail: cc.Node,
                btnAgain: cc.Button
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(e) {
                    e.stopPropagation()
                })
            },
            startShow: function(e, t, n) {
                e ? (this.nodeSuccess.active = !0, this.nodeFail.active = !1, t >= 1 && t <= 3 && (this.spLevel.spriteFrame = this.spfLevel[t - 1]), this.node.runAction(cc.sequence(cc.delayTime(1.1), cc.removeSelf()))) : (this.nodeSuccess.active = !1, this.nodeFail.active = !0, this._againCallback = n)
            },
            onClick: function(e, t) {
                switch (t) {
                case "home":
                    cc.director.loadScene("home");
                    break;
                case "again":
                    this.startAgain()
                }
            },
            startAgain: function() {
                var e = this,
                t = function(e) {
                    i.showMsgBox(e, !0, {
                        txt: "\u786e\u5b9a",
                        callback: function() {}
                    },
                    null)
                };
                o.getCurrentSMT(function(n) {
                    r.gameStartTime = n,
                    e.btnAgain.interactable = !1,
                    o.consume(r.gameStartTime, r.areaId, r.selectedPrize.censorship.censorshipId, r.selectedPrize.prizeId, {
                        success: function(n) {
                            e.btnAgain.interactable = !0,
                            null != n && null != n.result && n.result ? (r.reset(), null != e._againCallback && (e.node.removeFromParent(), e._againCallback())) : t(n.error.message)
                        },
                        timeout: function(n) {
                            e.btnAgain.interactable = !0,
                            t(n)
                        },
                        error: function(n) {
                            e.btnAgain.interactable = !0,
                            t(n)
                        }
                    })
                })
            }
        }),
        cc._RF.pop()
    },
    {
        DataMgr: "DataMgr",
        HttpMgr: "HttpMgr",
        LayerMgr: "LayerMgr"
    }],
    LevelStart: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "480baAU3JVNWoFrrkkGou6r", "LevelStart"),
        cc.Class({
            extends: cc.Component,
            properties: {
                spfLevel: [cc.SpriteFrame],
                spLevel: cc.Sprite
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(e) {
                    e.stopPropagation()
                })
            },
            startShow: function(e, t) {
                e >= 1 && e <= 3 && (this.spLevel.spriteFrame = this.spfLevel[e - 1]),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    null != t && t()
                }), cc.removeSelf()))
            }
        }),
        cc._RF.pop()
    },
    {}],
    LipstickContainer: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f56ech3RGxDTpCoPXeW5laU", "LipstickContainer"),
        cc.Class({
            extends: cc.Component,
            properties: {
                spfLipstickIn: cc.SpriteFrame,
                spfLipstickOut: cc.SpriteFrame
            },
            onLoad: function() {
                this._leftCount = 0,
                this._totalCount = 0
            },
            start: function() {},
            reload: function(e, t) {
                if (! (e < 0 || t <= 0 || e > t)) {
                    this._leftCount = e,
                    this._totalCount = t,
                    this.node.removeAllChildren();
                    for (var n = 0; n < e;) {
                        var i = this.getSpriteBySpriteFrame(this.spfLipstickIn);
                        this.node.addChild(i),
                        n++
                    }
                    for (; n < t;) {
                        var r = this.getSpriteBySpriteFrame(this.spfLipstickOut);
                        this.node.addChild(r),
                        n++
                    }
                }
            },
            getSpriteBySpriteFrame: function(e) {
                var t = new cc.Node,
                n = t.addComponent(cc.Sprite);
                return n.spriteFrame = e,
                n.sizeMode = cc.Sprite.SizeMode.RAW,
                n.type = cc.Sprite.Type.SIMPLE,
                n.trim = !1,
                t
            },
            getLeftCount: function() {
                return this._leftCount
            },
            getTotalCount: function() {
                return this._totalCount
            }
        }),
        cc._RF.pop()
    },
    {}],
    Lipstick: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5ca342pLNtO56yH5046tYna", "Lipstick"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this._SuccessCallback = null,
                this._FailCallback = null,
                this._isCollision = !1,
                this._canHit = !0
            },
            start: function() {},
            onCollisionEnter: function(e, t) {
                var n = this;
                if (!this._isCollision) {
                    if ("hold" == e.node.group) {
                        this.node.stopAllActions();
                        var i = cc.sequence(cc.repeat(cc.spawn(cc.rotateBy(.1, 90), cc.moveBy(.1, 100, -100)), 10), cc.removeSelf(), cc.callFunc(function() {
                            null != n._FailCallback && n._FailCallback()
                        }));
                        this.node.runAction(i)
                    } else if ("plate" == e.node.group) {
                        if (!this._canHit) return;
                        var r = cc.sequence(cc.delayTime(.02), cc.callFunc(function() {
                            null != n._SuccessCallback && n._SuccessCallback()
                        }));
                        this.node.runAction(r)
                    }
                    this._isCollision = !0
                }
            },
            onCollisionStay: function(e, t) {},
            onCollisionExit: function(e, t) {},
            setCallback: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this._canHit = t,
                this._SuccessCallback = e.success,
                this._FailCallback = e.fail
            },
            isCanHit: function() {
                return this._canHit
            }
        }),
        cc._RF.pop()
    },
    {}],
    LoadLogic: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6431349dfJKkqvG4ePYuUUh", "LoadLogic");
        var i = e("HttpMgr"),
        r = e("DataMgr"),
        o = e("LayerMgr");
        cc.Class({
            extends: cc.Component,
            properties: {
                progressBar: {
                default:
                    null,
                    type: cc.ProgressBar,
                    tooltip: "\u52a0\u8f7d\u8fdb\u5ea6"
                },
                labelProgress: {
                default:
                    null,
                    type: cc.Label,
                    tooltip: "\u52a0\u8f7d\u8fdb\u5ea6"
                },
                _progress: {
                default:
                    0,
                    visible: !1,
                    tooltip: "\u8fdb\u5ea6"
                },
                _isLoading: {
                default:
                    !1,
                    tooltip: "\u662f\u5426\u6b63\u5728\u52a0\u8f7d"
                }
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(e) {
                    e.stopPropagation()
                })
            },
            start: function() {
                this.startPreload()
            },
            update: function(e) {
                this._isLoading && this.setProgress()
            },
            setProgress: function() {
                this.labelProgress.string = Math.floor(100 * this._progress) + "%",
                this.progressBar.progress = this._progress
            },
            startPreload: function() {
                var e = this;
                this._isLoading = !0,
                cc.loader.loadResDir("remote",
                function(t, n, i) {
                    e._isLoading && (e._progress = 1 * t / n)
                },
                function(t, n) {
                    e._progress = 1,
                    e.onLoadComplete()
                })
            },
            onLoadComplete: function() {
                this.setProgress(),
                this._isLoading = !1,
                i.initMgr(function() {
                    i.init(function(e) {
                        null != e && null != e.result && e.result ? (r.lastCount = e.data.lastCount, r.gameInfo = e.data.gameInfo, cc.director.loadScene("home")) : o.showMsgBox(e.error.message, !0, {
                            txt: "\u786e\u5b9a",
                            callback: function() {}
                        },
                        null)
                    })
                })
            },
            onDisable: function() {}
        }),
        cc._RF.pop()
    },
    {
        DataMgr: "DataMgr",
        HttpMgr: "HttpMgr",
        LayerMgr: "LayerMgr"
    }],
    LongText: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "522a3pDdjlECZXTMjM0cuWz", "LongText"),
        cc.Class({
            extends: cc.Component,
            properties: {
                maxLength: 0
            },
            onLoad: function() {},
            start: function() {},
            setString: function(e) {
                if (null != e) {
                    var t = this.node.getComponent(cc.Label);
                    if (null != t) if (this.maxLength <= 3) t.string = e;
                    else {
                        for (var n = 0,
                        i = "",
                        r = 0; r < e.length; r++) {
                            var o = e.charCodeAt(r);
                            if (o >= 19968 && o <= 40869 ? n += 2 : n++, "" == i && n + 3 >= this.maxLength && (i = e.substring(0, r + 1) + "..."), n > this.maxLength) break
                        }
                        n > this.maxLength ? t.string = i: t.string = e
                    }
                }
            }
        }),
        cc._RF.pop()
    },
    {}],
    MsgBox: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e6f54v1GQ9JsraVWTxpLF2z", "MsgBox"),
        cc.Class({
            extends: cc.Component,
            properties: {
                txtMsg: cc.Label,
                btnClose: cc.Button,
                btn1: cc.Button,
                sp1: cc.Sprite,
                btn21: cc.Button,
                sp21: cc.Sprite,
                btn22: cc.Button,
                sp22: cc.Sprite,
                spfSure: cc.SpriteFrame,
                spfReauthorization: cc.SpriteFrame,
                spfCancel: cc.SpriteFrame,
                spfStartGame: cc.SpriteFrame
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(e) {
                    e.stopPropagation()
                })
            },
            start: function() {},
            startShow: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.txtMsg.string = "\u672c\u6b21\u6e38\u620f\u9700\u8981\u6263\u9664" + e + "\u79ef\u5206\u54e6~"
            },
            showMsg: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (this.txtMsg.string = e, this.btnClose.node.active = t, this.btn1.node.active = null != n, null != n) {
                    switch (n.txt) {
                    case "\u786e\u5b9a":
                        this.sp1.spriteFrame = this.spfSure;
                        break;
                    case "\u91cd\u65b0\u6388\u6743":
                        this.sp1.spriteFrame = this.spfReauthorization;
                        break;
                    default:
                        this.sp1.spriteFrame = this.spfSure
                    }
                    this._callback11 = n.callback
                }
                if (this.btn21.node.active = null != i, this.btn22.node.active = null != i, null != i) {
                    switch (i.txt1) {
                    case "\u53d6\u6d88":
                        break;
                    default:
                        this.sp21.spriteFrame = this.spfCancel
                    }
                    switch (i.txt2) {
                    case "\u91cd\u65b0\u6388\u6743":
                        break;
                    default:
                        this.sp22.spriteFrame = this.spfStartGame
                    }
                    this._callback21 = i.callback1,
                    this._callback22 = i.callback2
                }
            },
            onClick: function(e, t) {
                switch (t) {
                case "close":
                    this.node.removeFromParent();
                    break;
                case "btn11":
                    null != this._callback11 && this._callback11(),
                    this.node.removeFromParent();
                    break;
                case "btn21":
                    null != this._callback21 && this._callback21(),
                    this.node.removeFromParent();
                    break;
                case "btn22":
                    null != this._callback22 && this._callback22(),
                    this.node.removeFromParent()
                }
            }
        }),
        cc._RF.pop()
    },
    {}],
    Plate: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "73c72eDE/JF15e6V82Wm7sS", "Plate");
        e("Utils");
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeLipStick: cc.Node
            },
            onLoad: function() {
                this.RADIUS = this.node.getComponent(cc.CircleCollider).radius,
                this._lipstick = [],
                this._direct = 0
            },
            start: function() {},
            onCollisionEnter: function(e, t) {
                if ("fire" == e.node.group) if (e.node.getComponent("Lipstick").isCanHit()) {
                    e.node.runAction(cc.hide()),
                    this.addLipstickByDegrees(180 - this.node.rotation);
                    var n = cc.sequence(cc.moveBy(.05, 0, 15), cc.moveBy(.05, 0, -15));
                    this.node.runAction(n)
                } else cc.log("plate can't!")
            },
            onCollisionStay: function(e, t) {},
            onCollisionExit: function(e, t) {},
            addLipstickByDegrees: function(e) {
                var t = cc.misc.degreesToRadians(e),
                n = cc.instantiate(this.nodeLipStick);
                n.x = this.RADIUS * Math.sin(t),
                n.y = this.RADIUS * Math.cos(t),
                n.rotation = e,
                n.active = !0,
                n.parent = this.node,
                this._lipstick.push(n)
            },
            removeAllLipstick: function() {
                null != this._lipstick && (this._lipstick.forEach(function(e) {
                    e.removeFromParent()
                }), this._lipstick = [])
            },
            getTargetNode: function() {
                if (this._lipstick.length <= 0) return null;
                for (var e = (this.node.rotation % 360 + 360) % 360, t = null, n = null, i = null, r = null, o = 0; o < this._lipstick.length; o++) {
                    var c = ((180 - (this._lipstick[o].rotation % 360 + 360) % 360 - e) % 360 + 360) % 360; (null == t || c < i) && (t = this._lipstick[o], i = c),
                    (null == n || c > r) && (n = this._lipstick[o], r = c)
                }
                var s = {
                    target: null,
                    direct: 0,
                    offset: 0
                };
                return Math.abs(i % 180) < Math.abs((r - 360) % 180) ? (s.target = t, s.direct = 1, s.offset = i) : (s.target = n, s.direct = -1, s.offset = r),
                s
            },
            setDirect: function(e) {
                this._direct = e
            }
        }),
        cc._RF.pop()
    },
    {
        Utils: "Utils"
    }],
    PrizeUnit: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c6c27thukNF9bTkq9MclSVC", "PrizeUnit");
        e("Utils");
        cc.Class({
            extends: cc.Component,
            properties: {
                txtCost: cc.Label,
                nodeSelected: cc.Node
            },
            onLoad: function() {
                null == this._data && (this._data = null)
            },
            start: function() {},
            getData: function() {
                return this._data
            },
            reload: function(e) {
                var t = JSON.stringify(e);
                this._data = JSON.parse(t)
            },
            reloadUI: function(e) {
                this.nodeSelected.active = e,
                this.txtCost.string = this._data.name
            }
        }),
        cc._RF.pop()
    },
    {
        Utils: "Utils"
    }],
    RecordUnit: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "97902GfbQ1MPpHlv62npzFE", "RecordUnit"),
        cc.Class({
            extends: cc.Component,
            properties: {
                txtName: cc.Label,
                txtTime: cc.Label,
                txtGet: cc.Label
            },
            start: function() {},
            reloadUI: function(e) {
                var t = e.name || "",
                n = e.time || "0000-00-00 00:00:00",
                i = e.score || 0;
                this.txtName.string = t;
                var r = n.substring(n.indexOf("-") + 1);
                r = r.substring(0, r.lastIndexOf(":")),
                this.txtTime.string = r,
                this.txtGet.string = i > 0 ? "+" + i: i
            }
        }),
        cc._RF.pop()
    },
    {}],
    Record: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "703d3tqpXZK6pv/VaL7sStK", "Record");
        var i = e("HttpMgr"),
        r = e("LayerMgr");
        cc.Class({
            extends: cc.Component,
            properties: {
                prefabUnit: cc.Prefab,
                nodeContainer: cc.Node,
                listRecord: cc.ScrollView,
                nodeEmpty: cc.Node
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(e) {
                    e.stopPropagation()
                }),
                this.listRecord.node.active = !1,
                this.nodeEmpty.active = !1,
                this._currentPage = 0,
                this._pageSize = 50,
                this._datas = [],
                this._cells = [],
                this._idx = 0,
                this._lastCount = 0
            },
            start: function() {
                this.refreshList()
            },
            onClick: function(e, t) {
                switch (t) {
                case "close":
                    this.node.removeFromParent()
                }
            },
            refreshList: function() {
                this._currentPage = 0,
                this._lastCount = 0,
                this._datas = [],
                this._idx = 0,
                this.requestData()
            },
            requestData: function() {
                var e = this,
                t = function(e) {
                    r.showMsgBox(e, !0, {
                        txt: "\u786e\u5b9a",
                        callback: function() {}
                    },
                    null)
                };
                this.listRecord.stopAutoScroll(),
                i.bill(this._currentPage + 1, this._pageSize, {
                    success: function(n) {
                        if (null != n && null != n.result && n.result) if (n.data.pageInfo.total <= 0) e.nodeEmpty.active = !0,
                        e.listRecord.node.active = !1;
                        else {
                            e.nodeEmpty.active = !1,
                            e.listRecord.node.active = !0,
                            e._lastCount = n.data.pageInfo.records.length,
                            e._lastCount > 0 && e._currentPage++;
                            for (var i = 0; i < n.data.pageInfo.records.length; i++) {
                                var r = n.data.pageInfo.records[i];
                                r.addIntegral > 0 && e._datas.push({
                                    name: r.areaName,
                                    time: r.endTime,
                                    score: r.addIntegral
                                }),
                                e._datas.push({
                                    name: r.areaName,
                                    time: r.startTime,
                                    score: -r.consumeIntegral
                                })
                            }
                            1 == e._currentPage && (e.scrollViewInit(), e.scrollViewAddPrefab()),
                            e.reload()
                        } else t(n.error.message)
                    },
                    timeout: function(e) {
                        t(e)
                    },
                    error: function(e) {
                        t(e)
                    }
                })
            },
            scrollViewInit: function() {
                this._unitHeight = this.prefabUnit.data.height,
                this._maxCount = Math.floor(this.listRecord.node.height / this._unitHeight) + 2,
                this._datas.length > this._maxCount ? this.listRecord.content.height = this._maxCount * this._unitHeight: this.listRecord.content.height = this._datas.length * this._unitHeight,
                this.listRecord.node.on("scrolling", this.onScrolling, this),
                this.listRecord.node.on("bounce-bottom", this.onBounceBottom, this),
                this.listRecord.scrollToTop(0)
            },
            scrollViewAddPrefab: function() {
                this._cells = [],
                this.listRecord.content.removeAllChildren();
                for (var e = 0; e < this._maxCount; e++) {
                    var t = cc.instantiate(this.prefabUnit);
                    this.listRecord.content.addChild(t),
                    t.x = t.width * (t.anchorX - .5),
                    t.y = -t.height * (1 - t.anchorY) - t.height * e,
                    this._cells.push(t)
                }
            },
            onScrolling: function(e) {
                var t = e.getScrollOffset();
                t.y <= 0 && this._idx > 0 ? (t.y += this._unitHeight, e.scrollToOffset(t), this._idx--, this.reload()) : t.y >= e.getMaxScrollOffset().y && this._idx < this._datas.length - this._maxCount && (t.y -= this._unitHeight, e.scrollToOffset(t), this._idx++, this.reload(), this._idx == this._datas.length - this._maxCount - 1 && this.onBounceBottom(null))
            },
            onBounceBottom: function(e) {
                this._lastCount > 0 && this._lastCount >= this._pageSize && this.requestData()
            },
            reload: function() {
                for (var e = 0; e < this._cells.length; e++) this._cells[e].active = e < this._datas.length,
                this.reloadCell(this._idx + e, this._cells[e])
            },
            reloadCell: function(e, t) {
                e < 0 || e >= this._datas.length || t.getComponent("RecordUnit").reloadUI(this._datas[e])
            }
        }),
        cc._RF.pop()
    },
    {
        HttpMgr: "HttpMgr",
        LayerMgr: "LayerMgr"
    }],
    Reward: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "75730IZwuRONJNqFxJlc7Nw", "Reward"),
        cc.Class({
            extends: cc.Component,
            properties: {
                txtReward: cc.Label
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(e) {
                    e.stopPropagation()
                })
            },
            startShow: function(e) {
                this.txtReward.string = e
            },
            onClick: function(e, t) {
                switch (t) {
                case "sure":
                    cc.director.loadScene("home")
                }
            }
        }),
        cc._RF.pop()
    },
    {}],
    Rule: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "801cb31ViRLgoStdXPWPp9N", "Rule");
        var i = e("HttpMgr"),
        r = e("LayerMgr");
        cc.Class({
            extends: cc.Component,
            properties: {
                txtRule: cc.Label
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(e) {
                    e.stopPropagation()
                })
            },
            start: function() {
                var e = this,
                t = function(e) {
                    r.showMsgBox(e, !0, {
                        txt: "\u786e\u5b9a",
                        callback: function() {}
                    },
                    null)
                };
                i.rule({
                    success: function(n) {
                        null != n && null != n.result && n.result ? e.txtRule.string = n.data.rules[0].text: t(n.error.message)
                    },
                    timeout: function(e) {
                        t(e)
                    },
                    error: function(e) {
                        t(e)
                    }
                })
            },
            onClick: function(e, t) {
                switch (t) {
                case "close":
                    this.node.removeFromParent()
                }
            }
        }),
        cc._RF.pop()
    },
    {
        HttpMgr: "HttpMgr",
        LayerMgr: "LayerMgr"
    }],
    TouchLayer: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "edfd4YTpEhG243WjiW/7iem", "TouchLayer"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(t) {
                    t.stopPropagation(),
                    e.node.active = !1
                })
            }
        }),
        cc._RF.pop()
    },
    {}],
    TouchMask: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d6bfbrYp/dOBYdDtLQ9dKYF", "TouchMask"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(e) {
                    e.stopPropagation()
                })
            },
            start: function() {}
        }),
        cc._RF.pop()
    },
    {}],
    Touch: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ac61eUxw3NOHqg5jXVqUkz+", "Touch"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this._onTouchCallback = null
            },
            start: function() {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(t) {
                    null != e._onTouchCallback && e._onTouchCallback()
                })
            },
            setCallback: function(e) {
                this._onTouchCallback = e
            }
        }),
        cc._RF.pop()
    },
    {}],
    Utils: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ae9eeLIPCZCfZ25q5xQXSn1", "Utils"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (e("CryptoJS"));
        var r = {
            MD5: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return i.
            default.MD5(e).toString()
            },
            AESEncrypt: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments[1],
                n = arguments[2],
                r = i.
            default.enc.Utf8.parse(t),
                o = i.
            default.enc.Utf8.parse(n);
                return i.
            default.AES.encrypt(e, r, {
                    iv: o,
                    mode: i.
                default.mode.CBC,
                    padding: i.
                default.pad.ZeroPadding
                }).toString()
            },
            AESDecrypt: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments[1],
                n = arguments[2],
                r = i.
            default.enc.Utf8.parse(t),
                o = i.
            default.enc.Utf8.parse(n);
                return i.
            default.AES.decrypt(e, r, {
                    iv: o,
                    mode: i.
                default.mode.CBC,
                    padding: i.
                default.pad.ZeroPadding
                }).toString(i.
            default.enc.Utf8)
            },
            getRandomNum: function(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e)
            },
            PrefixInteger: function(e, t) {
                return (Array(t).join("0") + e).slice( - t)
            },
            timestamp2YMD: function(e) {
                var t = new Date(e);
                return this.PrefixInteger(t.getFullYear(), 4) + "/" + this.PrefixInteger(t.getMonth() + 1, 2) + "/" + this.PrefixInteger(t.getDate(), 2)
            },
            getCurrentTime: function() {
                return parseInt((new Date).getTime() / 1e3)
            },
            getCurrentMT: function() {
                return (new Date).getTime()
            },
            timestamp2YMDHMS: function(e) {
                var t = new Date(e);
                return this.PrefixInteger(t.getFullYear(), 4) + "-" + this.PrefixInteger(t.getMonth() + 1, 2) + "-" + this.PrefixInteger(t.getDate(), 2) + " " + this.PrefixInteger(t.getHours(), 2) + ":" + this.PrefixInteger(t.getMinutes(), 2) + ":" + this.PrefixInteger(t.getSeconds(), 2)
            },
            second2HMS: function(e) {
                var t = this.PrefixInteger(Math.floor(e / 86400), 2);
                e %= 86400;
                var n = this.PrefixInteger(Math.floor(e / 3600), 2);
                e %= 3600;
                var i = this.PrefixInteger(Math.floor(e / 60), 2);
                return e %= 60,
                t + "\u5929 " + n + "\u65f6 " + i + "\u5206 " + this.PrefixInteger(e, 2) + "\u79d2"
            },
            object2SortQuery: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = Object.keys(e).sort(), n = "", i = 0; i < t.length; i++) n = n + t[i] + "=" + e[t[i]],
                i != t.length - 1 && (n += "&");
                return n
            },
            queryToObject: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = {};
                if ("" == e) return t;
                for (var n = e.split("&"), i = 0; i < n.length; i++) {
                    var r = n[i].split("=");
                    t[r[0]] = r[1]
                }
                return t
            },
            getQuery: function() {
                var e = window.location.search.substring(1);
                return null != e ? e: ""
            },
            addPrefab: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                i = arguments[3];
                return "" != e && ("" != t && (null != cc.director.getScene().getChildByName(e) ? (cc.error(e + " exist!"), !1) : void cc.loader.loadRes(t,
                function(t, r) {
                    var o = cc.instantiate(r);
                    null != o ? (o.x = cc.winSize.width / 2, o.y = cc.winSize.height / 2, cc.director.getScene().addChild(o, n, e), null != i && "function" == typeof i && i(o)) : cc.error(t)
                })))
            },
            removeChildByName: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = cc.director.getScene().getChildByName(e);
                return null != t && (t.removeFromParent(), !0)
            },
            getStr: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if ("string" != typeof e) return "";
                if (t <= 0) return e;
                for (var n = 0,
                i = 0; i < e.length; i++) if (e.charCodeAt(i) > 127 || 94 == e.charCodeAt(i) ? n += 2 : n++, n >= t) return e.substring(0, i + 1);
                return e
            }
        };
        n.
    default = r,
        t.exports = n.
    default,
        cc._RF.pop()
    },
    {
        CryptoJS: "CryptoJS"
    }]
},
{},
["AudioMgr", "Config", "CryptoJS", "DataMgr", "Http", "HttpMgr", "ImageUrl", "LayerMgr", "LongText", "Touch", "TouchLayer", "TouchMask", "Utils", "Game", "Home", "LevelEnd", "LevelStart", "Lipstick", "LipstickContainer", "LoadLogic", "MsgBox", "Plate", "Record", "Reward", "Rule", "PrizeUnit", "RecordUnit"]);