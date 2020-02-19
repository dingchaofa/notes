webpackJsonp([48], {
    146: function(e, t, n) {
        "use strict";
        var o = n(102)
          , i = n.n(o)
          , a = n(65)
          , r = null;
        r = a.a.getDeviceId() && document.cookie.indexOf("GCESS") < 0 ? i.a.create({
            headers: {
                "Content-Type": "application/json",
                Ticket: a.a.getTicket(),
                "Device-Id": a.a.getDeviceId()
            }
        }) : i.a.create({
            withCredentials: !0,
            headers: {
                "Content-Type": "application/json"
            }
        }),
        t.a = r
    },
    163: function(e, t, n) {
        "use strict";
        var o = n(39)
          , i = n(219)
          , a = n(569)
          , r = (n.n(a),
        n(280))
          , s = n(279)
          , c = n(278);
        o.a.use(i.b);
        var l = new i.b.Store({
            state: r.a,
            mutations: s.a,
            actions: c.a,
            plugins: [],
            strict: !1
        });
        t.a = l
    },
    164: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }),
        n.d(t, "c", function() {
            return i
        }),
        n.d(t, "b", function() {
            return a
        });
        var o = "SETLOGINUSER"
          , i = "LOGOUT"
          , a = "SET_GLOBAL_LAYERS"
    },
    216: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(225)
          , i = n.n(o)
          , a = n(43)
          , r = n.n(a)
          , s = n(39)
          , c = n(550)
          , l = n.n(c)
          , u = n(146)
          , A = n(65)
          , d = n(277)
          , p = n(542)
          , h = n.n(p)
          , m = n(275)
          , f = n(163)
          , g = n(281)
          , v = n(274)
          , y = n(273)
          , b = n(523);
        n.n(b);
        s.a.use(v.a),
        s.a.use(h.a, {
            separator: "|",
            complement: "极客时间"
        }),
        s.a.prototype.$ga = g.a,
        s.a.prototype.$http = u.a,
        s.a.prototype.$confirm = y.a,
        u.a.interceptors.response.use(function(e) {
            return e
        }, function(e) {
            if (452 === e.response.status) {
                f.a.dispatch("logout");
                (new Image).src = "//account.geekbang.org/account/ticket/delete",
                n.i(y.a)({
                    title: "下线通知",
                    content: "该账号已在其他同类设备登录，如非本人操作，则密码可能已经泄露，建议立即更换密码",
                    btnOk: "确定",
                    okCallback: function() {
                        A.a.login()
                    }
                })
            }
            return r.a.reject(e)
        }),
        s.a.directive("highlight", {
            inserted: function(e) {},
            update: function(e, t) {
                var n = e.querySelectorAll("pre");
                Array.prototype.forEach.call(n, Hljs.highlightBlock)
            }
        }),
        i()(m.a).forEach(function(e) {
            return s.a.filter(e, m.a[e])
        }),
        new s.a({
            el: "#app",
            router: d.a,
            store: f.a,
            template: "<App/>",
            components: {
                App: l.a
            }
        })
    },
    218: function(e, t, n) {
        "use strict";
        t.a = {
            defaultAvatar: n(226),
            timeServer: "//time.geekbang.org",
            androidDownloadUrl: "https://time.geekbang.org/download/android/latest",
            iosDownloadUrl: "https://itunes.apple.com/cn/app/id1280245865",
            appstoreUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=org.geekbang.geekTime&utm_source=website&utm_medium=geektime&utm_campaign=download&utm_content=app",
            errorCode: {
                "-10086": "请求出错，请检查网络",
                "-1002": "系统内部错误",
                "-1003": "未知错误",
                "-2021": "专栏已下架，不能订阅",
                "-2022": "该专栏不存在",
                "-2023": "您已订阅该专栏，不能重复订阅",
                "-2001": "余额账户异常",
                "-2102": "余额不足",
                "-2120": "订单创建失败",
                "-2121": "支付失败",
                "-2901": "无效的反馈内容",
                "-2902": "反馈内容请不要超过 500 字",
                "-3007": "验证码错误",
                "-3003": "请重新登录",
                "-3004": "验证码为空",
                "-3005": "请更新验证码",
                "-3006": "验证码错误",
                "-3101": "阅码格式错误",
                "-3102": "阅码无效",
                "-3103": "阅码信息获取失败",
                "-3105": "阅码与专栏不匹配",
                "-3351": "已获取过云栖优惠码",
                "-3352": "优惠码已被领完",
                "-3363": "金额大于1元才能提现",
                "-3364": "金额超出提现范围，请联系客服",
                "-3365": "现金余额不足，请联系客服",
                "-3366": "提现失败，请重试",
                "-3369": "单日提现次数仅限1次",
                "-3370": "提现频率过高，请稍后重试"
            },
            questions: [{
                id: 14,
                q: "如何联系在线客服？",
                a: "微信搜索“极客时间”，关注我们的微信服务号，在对话框输入您的问题即可召唤在线客服。",
                bold: !1
            }, {
                id: 6,
                q: "为什么收不到短信验证码？",
                a: "在手机信号稳定且无欠费的状态下，仍收不到短信验证码，常见的有两种情况：<br />1.手机号被短信服务商过滤<br />您可能曾将此类短信列为垃圾短信，因此短信服务商发送该类短信时会将您的手机号过滤保证您不再收到。<br />解决方法：您可以在我的-设置-帮助反馈中向我们反馈，并留下您的手机号。<br />2.您可能设置了短信拦截<br />您可能在手机短信中设置了比较严苛的拦截规则，导致无法接受某些号码发出的短信。<br />解决方法：可尝试暂时关闭拦截功能。"
            }, {
                id: 13,
                q: "为什么我的礼券无法使用？",
                a: "如果您获得的礼券为“不与其他优惠叠加使用”，则这张礼券不能在拼团优惠和限时优惠中使用，优惠期结束之后您可以使用这张礼券。<br />一个订单只能使用一张礼券，不可以叠加使用多张礼券。",
                bold: !1
            }, {
                id: 1,
                q: "订阅的专栏和视频课程有效期是多久？",
                a: "专栏和视频课程订阅之后可以永久阅读。"
            }, {
                id: 3,
                q: "如何开具发票？",
                a: "微信关注“极客时间”微信服务号，在微信中点击服务号底部的「更多服务」，进入「发票开具」可以在线申请开票。<br />发票为增值税普通电子发票，明细为：研发和技术服务+商品名称，不支持开具其他税收分类的发票。"
            }, {
                id: 5,
                q: "如何订阅专栏更新通知？",
                a: "进入App后，依次进入「我的」--「设置」--「推送设置」内进行设置。"
            }, {
                id: 7,
                q: "支付过程中遇到错误提示怎么办？",
                a: "当您多次支付不成功，可以通过以下方式解决：<br />1. 切换网络之后重新尝试支付；<br />2. 更换支付方式之后重新尝试支付；<br />3. 在浏览器中打开商品购买页面，重新尝试支付；<br />4. 如果以上方式无法解决您的问题，请通过右上角的「反馈问题」向我们反馈您的问题，或通过极客时间微信公众号联系人工客服。"
            }, {
                id: 10,
                q: "充值余额时支付成功但余额没有增加，如何处理？",
                a: "充值到账会有短暂延迟，如果您充值的余额长时间未到账，可以尝试清除应用后台并重新打开应用。如果您在充值后24小时内或收到苹果支付的账单后，充值金额仍未到账，请您及时联系微信公众号在线客服。"
            }, {
                id: 8,
                q: "订阅的专栏、视频课程、每日一课会员等能否退款或更换？",
                a: "专栏、视频课程以及每日一课会员等服务均属于虚拟产品，订阅之后均不支持退款和更换，请您理解。"
            }, {
                id: 16,
                q: "好友扫描我的分享海报购买，为什么没有获得返现？",
                a: "温馨提示：只有通过分享有赏的指定渠道并且规范方法购买，才可以得到返现。<br />分享：<br />1. 极客时间APP：<br />分享者操作方法：极客时间APP-我的-课程-分享有赏-六种方法任选-成功分享<br />被分享者操作方法：别人的分享-打开（扫描二维码、打开链接等）-订阅<br />2. 极客时间公众号：<br />分享者操作方法：微信-极客时间公众号-我的-获取专属海报-分享<br />被分享者操作方法：海报-扫描二维码-订阅"
            }, {
                id: 21,
                q: "如何修改绑定手机号、登录密码以及其他账号问题？",
                a: "您可以在极客时间App内，凭原登录密码或验证码修改绑定手机号和新的登录密码，更换绑定手机号要求新账号为未注册极客时间的账号，为了保证您的账号安全，暂时不支持账号注销、合并等操作，请您理解。<br />如果上述答案仍未解决您的问题，请您通过极客时间微信服务号联系在线客服，会有客服帮您解决问题。"
            }, {
                id: 29,
                q: "投诉侵权、盗版资源或其他上述未提到的问题",
                a: "您可以通过极客时间微信服务号联系在线客服，或通过邮件（service@geekbang.org)联系我们，我们在收到您的反馈之后会尽快进行处理，感谢您的理解。您可以通过极客时间微信服务号联系在线客服，或通过邮件（service@geekbang.org)联系我们，我们在收到您的反馈之后会尽快进行处理，感谢您的理解。"
            }]
        }
    },
    223: function(e, t, n) {
        "use strict";
        var o = n(43)
          , i = n.n(o)
          , a = n(146)
          , r = n(102)
          , s = n.n(r);
        t.a = {
            getLoginUser: function() {
                return new i.a(function(e, t) {
                    // a.a.get("//account.geekbang.org/serv/v1/user/auth", {}).then(function(n) {
                    //     200 === n.status && 0 === n.data.code ? e(n.data.data) : t(n)
                    // }).catch(function(e) {
                    //     t(e)
                    // })
                    e({"student":0,"uid":1384677,"avatar":"","usertype":1,"ctime":"1547642624","cellphone":"175****2175","nick":"Geek_07a3ec"})
                }
                )
            },
            getImgVerify: function() {
                return new i.a(function(e, t) {
                    s.a.post("//time.geekbang.org/serv/v1/geekcode/verify").then(function(n) {
                        200 === n.status && 0 === n.data.code ? e(n.data.data) : t(n.data)
                    }).catch(function(e) {
                        t(e)
                    })
                }
                )
            },
            checkCode: function(e, t) {
                return new i.a(function(n, o) {
                    a.a.post("//time.geekbang.org/serv/v1/geekcode", {
                        geekcode: e,
                        verifycode: t
                    }).then(function(e) {
                        200 === e.status && 0 === e.data.code ? n(e.data.data) : o(e.data)
                    }).catch(function(e) {
                        o(e)
                    })
                }
                )
            },
            subscribeByGeekcode: function(e, t) {
                return new i.a(function(n, o) {
                    a.a.post("//time.geekbang.org/serv/v1/column/subscribe", {
                        cid: e,
                        channel: "geekcode",
                        extra: {
                            code: t
                        }
                    }).then(function(e) {
                        200 === e.status && 0 === e.data.code ? n(e.data.data) : o(e.data)
                    }).catch(function(e) {
                        o(e)
                    })
                }
                )
            },
            subscribeDlVipByGeekcode: function(e) {
                return new i.a(function(t, n) {
                    a.a.post("//cashier.geekbang.org/serv/v1/order/store", e).then(function(e) {
                        200 === e.status && 0 === e.data.code ? t(e.data.data) : n(e.data)
                    }).catch(function(e) {
                        n(e)
                    })
                }
                )
            },
            getYunqiTicketStatus: function(e, t) {
                return new i.a(function(e, t) {
                    a.a.post("//time.geekbang.org/serv/v1/yunqi/code/show", {}).then(function(n) {
                        200 === n.status && 0 === n.data.code ? e(n.data.data) : t(n.data)
                    }).catch(function(e) {
                        t(e)
                    })
                }
                )
            },
            getYunqiTicketCode: function(e, t) {
                return new i.a(function(e, t) {
                    a.a.post("//time.geekbang.org/serv/v1/yunqi/code/get", {}).then(function(n) {
                        200 === n.status && 0 === n.data.code ? e(n.data.data) : t(n.data)
                    }).catch(function(e) {
                        t(e)
                    })
                }
                )
            },
            getUcode: function() {
                return new i.a(function(e, t) {
                    a.a.post("//account.geekbang.org/account/user/ucode").then(function(n) {
                        200 === n.status && 0 === n.data.code ? e(n.data.data) : t(n.data)
                    }).catch(function(e) {
                        t(e)
                    })
                }
                )
            },
            getUinfoByUcode: function(e) {
                return new i.a(function(t, n) {
                    a.a.post("//account.geekbang.org/account/ucode", {
                        ucode: e
                    }).then(function(e) {
                        200 === e.status && 0 === e.data.code ? t(e.data.data) : n(e.data)
                    }).catch(function(e) {
                        n(e)
                    })
                }
                )
            },
            getInvitedList: function() {
                return new i.a(function(e, t) {
                    a.a.post("//account.geekbang.org/account/user/invited").then(function(n) {
                        200 === n.status && 0 === n.data.code ? e(n.data.data) : t(n.data)
                    }).catch(function(e) {
                        t(e)
                    })
                }
                )
            },
            getUserData: function() {
                return new i.a(function(e, t) {
                    a.a.post("//time.geekbang.org/serv/v1/my/data").then(function(n) {
                        200 === n.status && 0 === n.data.code ? e(n.data.data) : t(n)
                    }).catch(function(e) {
                        t(e)
                    })
                }
                )
            },
            charge: function(e) {
                var t = {
                    code: e.code,
                    sku: e.sku,
                    is_ios: e.is_ios,
                    amount: e.amount
                };
                return new i.a(function(e, n) {
                    a.a.post("//time.geekbang.org/serv/v1/geekcode/charge", t).then(function(t) {
                        200 === t.status && 0 === t.data.code ? e(t.data.data) : n(t)
                    }).catch(function(e) {
                        n(e)
                    })
                }
                )
            },
            getLoginData: function() {
                return new i.a(function(e, t) {
                    s.a.post("//time.geekbang.org/serv/v2/login_member/data", {}).then(function(n) {
                        200 === n.status && 0 === n.data.code ? e(n.data.data) : t(n)
                    }).catch(function(e) {
                        t(e)
                    })
                }
                )
            }
        }
    },
    226: function(e, t) {
        e.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QN5aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWE3YmZhMDItMzBhMC00MDg3LTg3MmYtOGMwMjMxNjNhZWRjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI2MTlEODM3NTgzMTExRTk5NDY4Qjk3QUFCNDFBN0QzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI2MTlEODM2NTgzMTExRTk5NDY4Qjk3QUFCNDFBN0QzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTYyRTNCMDNBREI4MTFFOEFFNTJDODlGREQ1OTUzMDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTYyRTNCMDRBREI4MTFFOEFFNTJDODlGREQ1OTUzMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCADuAO4DAREAAhEBAxEB/8QAfAABAAICAwEBAAAAAAAAAAAAAAYHBAgBAwUCCgEBAAAAAAAAAAAAAAAAAAAAABAAAgIBAgIECwQJBQAAAAAAAAECAwQRBSEGMWESF0FRgVITk+MUVJTUIkJiB5EyhBVFhbXFNnFygqJTEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGHmbhg7fD0mbl4+LF69l32wrctPBCMmpTfUk2BG7ue+Wqm4rNsua6XTi5DWvVKyutPyaoDmnnrlq19l506W9NPTYuSk2/xQqnGPlaQElxM7Dzq/S4WVj5VfhlRbC1Rfil2G3GXU9GBlAAAAAAAAAAAAAAAAAAAAAAAAAAAA4bUU5SajGKblJtJJJattvgkkBVHMnP8AJSswtilHSLcLdxcVLV9DWHCWsdF/6ST1+6uiQFW35F+VbK/Jutvum9Z23WSssk/xTm3JgdIADvx8nIxLY34t9uPdD9W2myVc1412otPR6cV0MC1uWufvTTrwd8cITlpCrcYpQhKT4KOXBaQrbf346R8aXFgWmnrxXFPimvCAAAAAAAAAAAAAAAAAAAAAAAAAAFUfmBzHKLexYVjjrGMtxsg+LU12oYia6E4tSn400vOQFTAAAAAAAuDkDmSWRFbHm2OVtUHLb7ZvWU6oLWeK2+LdMV2ofgTX3UBaAAAAAAAAAAAAAAAAAAAAAAAABi52XDAwsvNs4wxce6+S10cvRQlNQX4ptaLrYGr+RfblX3ZN8nO7Itsutk/vWWSc5Pq4sDpAAAAAABlYWXbgZeNmUPS3Guruhx0TcJJ9mWnTGa4NeFMDaDGvrysejJqeteRTVfW/HC2EbI/9ZAdwAAAAAAAAAAAAAAAAAAAAAACJc8WurlncOzwdrxateqeVT2v0wTXlA18AAAAAAAAAbFcnXSu5a2mcnq402U/8cfJuoivJGtASYAAAAAAAAAAAAAAAAAAAAAABFOdqXdyzuSjxlWse7yVZVMp/or1YGvQAAAAAAAADY3lGiWPy3tNclo5Yzv8AF9nJusyYvyxtQEjAAAAAAAAAAAAAAAAAAAAAAAdGVj15eNkYty1qyaLaLF4exbCVctOvSXADWDNxLsDLycLIj2bsa6dM/E3B6KUfHCa0afhTAxQAAAAAAZ224Nu55+LgUp+kyboV6pa9iDetljXm1VpyfUgNnqaoUU1UVLs101wqrj4oVxUILyRQHYAAAAAAAAAAAAAAAAAAAAAAAAVrz5yzPNh++cGtzyaK1HNpgtZX0QX2bopcZW0R4NdLhp5ujCmQAAAAAAXbyLyzPbaXumdW4ZuVX2aKprSWNjS0bck+Mbr9FqumMeHS2gLDAAAAAAAAAAAAAAAAAAAAAAAAAACuOZOQ6c+dmbtDrxcubc7cWX2cbIm+LlW0n7vbLw8OxJ+bxbCpM7bM/bLXVn4l+NPVpekg1CenhrsWtdseuLaAwQAHo7ftO47raqsDEuyZapSlCOlVevhtul2aql/uaAt3lrkWjbJ15u5yry86Gk6qYrXFxpripfaSd90X0NpRi+hNpSAsIAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4sqrug67a4W1y/WhZCM4P/AFjJNMDw7eVuXrm5T2jCTfT6Kr0C49VLrQHNPK/L1ElKvaMJtcU7alfo/Gle7FqB7cK4VQVdcIVwitIwhFQhFeJRikkgPsAAAAAAAAAAAAAAAAAAAAAAAAAY2XmYuBRPKzL68aiv9ay2XZjq+iKXTKcvBFJt+BARGf5g8uRk4q3LsSeinDFkoy60pyhPR9aQHz3h8u+dm/K+0Ad4fLvnZvyvtAHeHy752b8r7QB3h8u+dm/K+0Ad4fLvnZvyvtAHeHy752b8r7QB3h8u+dm/K+0Ad4fLvnZvyvtAMjG575cybY1PKtxnJpRnk0Trq1fglZHtxrXXLRLxgTCMozjGUZKUZJSjKLTjKLWqlFrVNNPgwOQAAAAAAAAAAAAAAAAAAAAUZ+YW43ZG9ywHOSx9vqpUa9fsu7IphkTta8MnCyMepLrYECAAAAAAAAAAAF0/lxuN2Tt+Zg2zlOO320uhyerhTlK1qpPzYWUSa8Xa06NALHAAAAAAAAAAAAAAAAAAAABr3zx/lO6fsX9OxAImAAAAAAAAAAALY/K/+Ofyz+4AWwAAAAAAAAAAAAAAAAAAAADXvnj/ACndP2L+nYgETAAAAAAAAAAAFsflf/HP5Z/cALYAAAAAAAAAAAAAAAAAAAABVvMfJG7bxvOZuONkbdCjI937Eb7cmNq9DiUUS7Ua8S2C1nU2tJPgB4fdrvvxe0+vzPoAHdrvvxe0+vzPoAHdrvvxe0+vzPoAHdrvvxe0+vzPoAHdrvvxe0+vzPoAHdrvvxe0+vzPoAHdrvvxe0+vzPoAHdrvvxe0+vzPoAHdrvvxe0+vzPoAHdrvvxe0+vzPoAJvyby1ncvfvH323Et989z9F7rZdPs+7+9dvt+loo019OtNNfD0ATcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
    },
    262: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(98);
        t.default = {
            name: "gkui-button",
            components: {},
            props: {
                color: o.a.string.def(""),
                size: o.a.string.def(""),
                disabled: o.a.bool.def(!1),
                useLock: o.a.bool.def(!1),
                label: o.a.string.def(""),
                lockLabel: o.a.string.def(""),
                stop: o.a.bool.def(!0)
            },
            data: function() {
                return {
                    locked: !1
                }
            },
            computed: {
                _disabled: function() {
                    return this.disabled || this.locked
                }
            },
            created: function() {},
            methods: {
                handleClick: function(e) {
                    var t = this;
                    this.stop && e.stopPropagation(),
                    this._disabled || (this.useLock && (this.locked = !0),
                    this.$emit("click", {
                        clear: function() {
                            t.locked = !1
                        }
                    }))
                }
            }
        }
    },
    263: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(98)
          , i = n(106)
          , a = n(545)
          , r = n.n(a);
        t.default = {
            name: "gkui-confirm",
            components: {
                Dialog: r.a
            },
            props: {
                title: o.a.string,
                message: o.a.string,
                type: o.a.string.def("message"),
                value: o.a.bool.def(!1),
                center: o.a.bool.def(!1),
                verticalCenter: o.a.bool.def(!1),
                name: o.a.string,
                width: o.a.number.def(412),
                top: o.a.oneOfType([Number, String]).def(100),
                okText: o.a.string.def("确定"),
                cancelText: o.a.string.def("取消"),
                okBtnColor: o.a.string.def("blue"),
                cancelBtnColor: o.a.string.def("transparent"),
                loading: o.a.bool.def(!1)
            },
            methods: {
                handleOk: function(e) {
                    var t = e.clear
                      , n = e.close;
                    return "message" === this.type ? (n && n(),
                    !0) : (i.a.event.$emit("closeMessage", {
                        ok: !0,
                        clear: t,
                        close: n
                    }),
                    !0)
                },
                handleCancel: function(e) {
                    var t = e.close;
                    return i.a.event.$emit("closeMessage", {
                        ok: !1,
                        close: t
                    }),
                    !0
                }
            }
        }
    },
    264: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(43)
          , i = n.n(o)
          , a = n(287)
          , r = n.n(a)
          , s = n(284)
          , c = n.n(s)
          , l = n(44)
          , u = n.n(l)
          , A = n(98)
          , d = n(257)
          , p = n(161);
        t.default = {
            name: "gkui-dialog",
            components: {
                Button: d.a,
                Loading: p.a
            },
            props: {
                value: A.a.bool.def(!1),
                name: A.a.string,
                transitionName: A.a.string.def("modal-zoom-in"),
                title: A.a.string,
                dialogClass: A.a.string,
                mask: A.a.bool.def(!0),
                maskClickClose: A.a.bool.def(!0),
                center: A.a.bool.def(!1),
                hasClose: A.a.bool.def(!0),
                verticalCenter: A.a.bool.def(!1),
                width: A.a.number.def(520),
                top: A.a.oneOfType([Number, String]).def(100),
                hasCancel: A.a.bool.def(!0),
                handleOk: {
                    type: Function
                },
                handleCancel: {
                    type: Function
                },
                okText: A.a.string.def("确定"),
                cancelText: A.a.string.def("取消"),
                okBtnColor: A.a.string.def("blue"),
                cancelBtnColor: A.a.string.def("transparent"),
                loading: A.a.bool.def(!1)
            },
            data: function() {
                return {
                    showHead: !0,
                    visible: !1,
                    contentVisible: !1
                }
            },
            computed: {
                mainStyle: function() {
                    var e = {}
                      , t = parseInt(this.width)
                      , n = {
                        width: t <= 100 ? t + "%" : t + "px",
                        top: "string" == typeof this.top ? this.top : this.top + "px"
                    }
                      , o = this.styles ? this.styles : {};
                    return u()(e, n, o),
                    e
                },
                wrapClass: function() {
                    return ["gkui-dialog", {
                        "gkui-dialog-can-close": this.maskClickClose && this.mask,
                        "gkui-dialog-center": this.center,
                        "gkui-dialog-vertical-center": this.verticalCenter
                    }, this.dialogClass]
                }
            },
            watch: {
                value: function(e) {
                    var t = this;
                    this.mask && (e ? this.$modal.showLayer() : this.$modal.hideLayer()),
                    e ? (this.visible = e,
                    this.$nextTick(function() {
                        t.contentVisible = e
                    })) : (this.contentVisible = e,
                    setTimeout(function() {
                        t.visible = e
                    }, 300))
                }
            },
            created: function() {},
            mounted: function() {
                var e = this;
                this.visible = this.value,
                this.$nextTick(function() {
                    e.contentVisible = e.value
                });
                var t = !0;
                void 0 !== this.$slots.header || this.title || (t = !1),
                this.showHead = t
            },
            methods: {
                close: function() {
                    this.$emit("input", !1),
                    this.$emit("cancel")
                },
                ok: function(e) {
                    var t = this
                      , n = e.clear;
                    return c()(r.a.mark(function e() {
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.loading) {
                                        e.next = 6;
                                        break
                                    }
                                    if (!t.handleOk) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 4,
                                    t.handleOk({
                                        clear: n,
                                        close: t.destroy
                                    });
                                case 4:
                                    return t.$emit("ok", {
                                        clear: n
                                    }),
                                    e.abrupt("return");
                                case 6:
                                    if (!t.handleOk) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 9,
                                    t.handleOk({
                                        clear: n,
                                        close: t.destroy
                                    });
                                case 9:
                                    return e.abrupt("return");
                                case 10:
                                    t.$emit("input", !1),
                                    t.$emit("ok", {
                                        clear: n
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e, t)
                    }))()
                },
                cancel: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        return r.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.handleCancel) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 3,
                                    e.destroy();
                                case 3:
                                    return e.handleCancel({
                                        close: e.close
                                    }),
                                    t.abrupt("return");
                                case 5:
                                    e.close();
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                handleMask: function() {
                    this.mask && this.maskClickClose && this.close()
                },
                destroy: function() {
                    var e = this;
                    this.contentVisible = !1,
                    setTimeout(function() {
                        e.visible = !1,
                        e.hideLayer().then(function() {
                            return e.$modal.hide(e.name),
                            !0
                        })
                    }, 100)
                },
                hideLayer: function() {
                    var e = this;
                    return new i.a(function(t, n) {
                        e.$modal.hideLayer(),
                        t()
                    }
                    )
                }
            }
        }
    },
    265: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(258);
        t.default = {
            name: "gk-loading",
            components: {},
            props: {
                visible: {
                    type: Boolean,
                    default: !0
                },
                label: {
                    type: String,
                    default: ""
                },
                size: {
                    type: String,
                    default: "40px"
                },
                color: {
                    type: String,
                    default: "white"
                }
            },
            data: function() {
                return {}
            },
            computed: {
                colorClass: function() {
                    return o.a.getColor(this.color) || ""
                },
                styles: function() {
                    return {
                        width: this.size,
                        height: this.size
                    }
                }
            },
            created: function() {},
            methods: {}
        }
    },
    266: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(98)
          , i = n(161)
          , a = n(80);
        t.default = {
            name: "gku-message",
            components: {
                Loading: i.a
            },
            props: {
                type: o.a.string.def("info"),
                name: o.a.string,
                message: o.a.string,
                duration: o.a.number.def(1.5),
                onClose: o.a.func,
                closable: o.a.bool.def(!1),
                prefix: o.a.string,
                customClose: o.a.string,
                loadingColor: o.a.string.def("blue"),
                loadingSize: o.a.string.def("14px"),
                transitionName: o.a.string.def("fade-up")
            },
            data: function() {
                return {
                    timer: null
                }
            },
            computed: {
                customCloseBtn: function() {
                    return this.customClose || ""
                },
                typeCls: function() {
                    return a.a.getType(this.type) || ""
                }
            },
            mounted: function() {
                this.startTimer()
            },
            methods: {
                startTimer: function() {
                    var e = this;
                    this.duration > 0 && (this.timer = setTimeout(function() {
                        e.close()
                    }, 1e3 * this.duration))
                },
                clearTimer: function() {
                    clearTimeout(this.timer)
                },
                close: function() {
                    this.$emit("close", this.name),
                    this.onClose()
                }
            }
        }
    },
    267: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(99)
          , i = n.n(o)
          , a = n(547)
          , r = n.n(a)
          , s = n(80);
        t.default = {
            name: "gku-message-box",
            components: {
                MessageItem: r.a
            },
            props: {},
            computed: {},
            data: function() {
                return {
                    messageList: [],
                    styles: {
                        top: "24px"
                    },
                    transitionName: "fade-up"
                }
            },
            created: function() {
                s.a.register(this)
            },
            mounted: function() {},
            methods: {
                add: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.styles = i()({}, this.styles, n.styles),
                    this.transitionName = n.transitionName,
                    this.$nextTick(function() {
                        t.messageList.push(e)
                    })
                },
                close: function(e) {
                    this.messageList = this.messageList.filter(function(t) {
                        return t.name !== e
                    }),
                    s.a.remove(e)
                },
                clear: function() {
                    this.messageList = []
                },
                handleEnter: function(e) {
                    e.style.height = e.scrollHeight + "px"
                },
                handleLeave: function(e) {
                    1 !== document.getElementsByClassName("gkui-message-content-wrap").length && (e.style.height = 0)
                }
            }
        }
    },
    268: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(44)
          , i = n.n(o)
          , a = n(106)
          , r = n(107);
        t.default = {
            name: "gkui-modal-controller",
            components: {},
            props: {},
            data: function() {
                return {
                    isShowLayer: !1,
                    modals: [],
                    zIndex: 0
                }
            },
            created: function() {
                this.$modal._setModalContainer(this)
            },
            beforeMount: function() {
                var e = this;
                a.a.event.$on("toggle", function(t, n, o) {
                    n ? e._eventToggleOpen(t, o) : e._eventToggleClose(t)
                })
            },
            mounted: function() {},
            destroyed: function() {},
            methods: {
                showLayer: function() {
                    this.isShowLayer = !0,
                    document.body.classList.add("gkui--modal-block-scroll")
                },
                hideLayer: function() {
                    this.isShowLayer = !1,
                    document.body.classList.remove("gkui--modal-block-scroll")
                },
                add: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , o = arguments[2]
                      , a = r.a.guid();
                    n.zIndex = ++this.zIndex,
                    o.auto = void 0 === o.auto || o.auto,
                    o.layer = void 0 === o.layer || o.layer;
                    var s = this.modals.find(function(e) {
                        return o.name === e.name
                    });
                    s ? s.params = i()({}, n) : this.modals.push({
                        id: a,
                        name: o.name,
                        component: e,
                        params: n,
                        layer: o.layer
                    }),
                    this.$nextTick(function() {
                        o.auto && t.$modal.show(o.name, n)
                    })
                },
                _eventToggleOpen: function(e, t) {
                    var n = this.modals.find(function(t) {
                        return t.name === e
                    });
                    n.visible = !0,
                    n.params = i()({}, n.params, t),
                    n.layer && this.showLayer()
                },
                _eventToggleClose: function(e) {
                    var t = !1
                      , n = void 0
                      , o = void 0;
                    for (var i in this.modals)
                        this.modals[i].name === e ? (n = i,
                        o = this.modals[i]) : this.modals[i].visible && this.modals[i].layer && (t = !0);
                    void 0 !== n && this.modals.splice(n, 1),
                    !t && o.layer && this.hideLayer()
                }
            }
        }
    },
    269: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(65)
          , i = n(102)
          , a = n.n(i)
          , r = n(551)
          , s = n.n(r);
        t.default = {
            name: "app",
            components: {
                GlobalLayer: s.a
            },
            created: function() {
                window.location.hash && this.$router.push(window.location.hash.replace("#", "")),
                this.hack(),
                this.addAppEventListener(),
                this.entryUrl = window.location.href,
                // document.domain = "geekbang.org",
                this.timer = null,
                this.initWxConfig(),
                this.initEventDispatcher(),
                document.addEventListener("keydown", function(e) {
                    (e.ctrlKey || e.metaKey) && 65 === e.keyCode && (e.returnValue = !1,
                    e.preventDefault())
                })
            },
            methods: {
                getHtmlFirstNodeHTML: function(e) {
                    if (!e)
                        return "";
                    if (!e.match(/^<\w+.+<\/\w+>/))
                        return "<p>" + e + "</p>";
                    var t = document.createElement("div");
                    return t.innerHTML = e,
                    t.children[0].outerHTML
                },
                initWxConfig: function() {
                    if (o.a.isInWeixin()) {
                        var e = o.a.isIOS() ? this.entryUrl : window.location.href;
                        a.a.get("https://misc.geekbang.org/wxmisc/wxshare/sign?url=" + encodeURIComponent(e) + "&mpid=geekbang").then(function(e) {
                            var t = e.data;
                            if (0 === t.code && t.data)
                                try {
                                    window.wx.config({
                                        debug: !1,
                                        appId: t.data.appId,
                                        timestamp: String(t.data.timestamp),
                                        nonceStr: t.data.nonceStr,
                                        signature: t.data.signature,
                                        jsApiList: ["getLocation", "onMenuShareTimeline", "onMenuShareAppMessage", "chooseWXPay", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "showMenuItems", "hideMenuItems"]
                                    })
                                } catch (e) {
                                    console.log(e)
                                }
                        }, function(e) {})
                    }
                },
                initEventDispatcher: function() {
                    o.a.isInApp() && o.a.isInAndroidApp() && (window.geekTimeNotify = function(e) {
                        if ("string" == typeof e)
                            try {
                                e = JSON.parse(e);
                                var t = new CustomEvent("notify",{
                                    detail: e
                                });
                                document.dispatchEvent(t)
                            } catch (e) {}
                        else {
                            var n = new CustomEvent("notify",{
                                detail: e
                            });
                            document.dispatchEvent(n)
                        }
                    }
                    )
                },
                addAppEventListener: function() {
                    var e = this;
                    document.addEventListener("notify", function(t) {
                        try {
                            var n = t.detail.data;
                            switch (t.detail.type) {
                            case "gtInfoUpdate":
                                o.a.getTicket() !== n.ticket && window.location.reload();
                                break;
                            case "sub:paybox:show":
                                e.$ga.sendPv("/fake/column/paybox");
                                break;
                            case "sub:paybox:success":
                                e.$ga.sendEvent("订阅成功", "专栏或视频课订阅成功", n.column_title)
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    })
                },
                hack: function() {
                    if (o.a.isInApp()) {
                        var e = navigator.userAgent;
                        (o.a.isInAndroidApp() && e.match(/[\d.]+$/) && o.a.version(e.match(/[\d.]+$/)[0]) >= o.a.version("1.0.6") || !o.a.isInAndroidApp() && e.match(/[\d.]+$/) && o.a.version(e.match(/[\d.]+$/)[0]) >= o.a.version("1.1.1")) && localStorage.removeItem("gtInfo")
                    }
                }
            },
            watch: {
                $route: {
                    handler: function(e, t) {
                        var n = this;
                        clearTimeout(this.timer),
                        document.title = "极客时间",
                        this.timer = setTimeout(function() {
                            n.initWxConfig()
                        }, 300)
                    }
                }
            }
        }
    },
    270: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            computed: {
                data: function() {
                    return this.$store.state.globalLayers
                }
            }
        }
    },
    271: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            data: function() {
                return {
                    title: "",
                    content: "",
                    btnCancel: "",
                    btnOk: "",
                    closed: !1,
                    visible: !1,
                    cancelCallback: null,
                    okCallback: null
                }
            },
            methods: {
                destroyElement: function() {
                    this.$el.removeEventListener("transitionend", this.destroyElement),
                    this.$destroy(!0),
                    this.$el.parentNode.removeChild(this.$el)
                },
                okHandler: function() {
                    this.close(),
                    this.okCallback()
                },
                cancelHandler: function() {
                    this.close(),
                    this.cancelCallback()
                },
                close: function() {
                    this.closed = !0
                }
            },
            watch: {
                closed: function(e, t) {
                    e && (console.log("closed: ", e),
                    this.visible = !1,
                    this.$el.addEventListener("transitionend", this.destroyElement))
                }
            }
        }
    },
    272: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            data: function() {
                return {
                    size: "40px",
                    visible: !1,
                    message: "",
                    showLoading: !1
                }
            },
            computed: {
                styles: function() {
                    return {
                        width: this.size,
                        height: this.size
                    }
                }
            },
            mounted: function() {}
        }
    },
    273: function(e, t, n) {
        "use strict";
        var o = n(39)
          , i = n(552)
          , a = n.n(i)
          , r = o.a.extend(a.a)
          , s = void 0
          , c = []
          , l = 1
          , u = function(e) {
            e = e || {};
            var t = "message_" + l++;
            return s = new r({
                data: e
            }),
            c.length > 0 && (c[0].close(),
            c.splice(0, 1)),
            s.id = t,
            s.vm = s.$mount(),
            document.body.appendChild(s.vm.$el),
            s.vm.visible = !0,
            s.dom = s.vm.$el,
            s.dom.style.zIndex = 100,
            c.push(s),
            s.vm
        };
        t.a = u
    },
    274: function(e, t, n) {
        "use strict";
        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "加载中...";
            u.message = e,
            u.showLoading = !0,
            setTimeout(function() {
                u.visible = !0
            }, 0),
            document.body.appendChild(u.$el)
        }
        function i() {
            u.visible = !1,
            setTimeout(function() {
                u.showLoading = !1
            }, 200)
        }
        function a() {
            r.a.prototype.$loading = {
                open: o,
                close: i
            }
        }
        var r = n(39)
          , s = n(553)
          , c = n.n(s)
          , l = r.a.extend(c.a)
          , u = new l({
            el: document.createElement("div")
        });
        t.a = a
    },
    275: function(e, t, n) {
        "use strict";
        var o = n(65);
        t.a = {
            formatDate: function(e, t) {
                return t ? o.a.formatDate(e).replace(/\-/g, t) : o.a.formatDate(e)
            },
            formatTime: function(e) {
                return o.a.formateTime(e)
            },
            formatContent: function(e) {
                return o.a.formatContent(e)
            },
            formatCash: function(e) {
                return o.a.formatCash(e)
            },
            columnPrice: function(e) {
                return o.a.formatPrice(e)
            },
            formatSize: function(e) {
                return o.a.formatSize(e)
            },
            formatDuration: function(e) {
                return o.a.formatDuration(e)
            },
            filterTime: function(e) {
                return e > 86400 ? Math.floor(e / 86400) + "天" : e > 3600 ? Math.floor(e / 3600) + "小时" : e > 60 ? Math.floor(e / 60) + "分" : e + "秒"
            },
            filterColumnUnit: function(e) {
                var t = String(e);
                return t = /\d/.test(t) ? t.match(/\d+/)[0] : null
            },
            cutStr: function(e, t) {
                var n = o.a.subString(e, t);
                return n !== e ? n + "..." : n
            },
            resizeImg: function(e, t, n) {
                return isNaN(t) || isNaN(n) ? e : e && "string" == typeof e && e.match(/^https*:\/\/static.*\.geekbang\.org\//i) ? e + "?x-oss-process=image/resize,m_fill,h_" + n + ",w_" + t : e
            },
            trim: function(e) {
                return "string" == typeof e ? e.trim() : ""
            },
            escapeHtml: function(e) {
                var t = {
                    lt: "<",
                    gt: ">",
                    nbsp: " ",
                    amp: "&",
                    quot: '"'
                };
                return e.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(e, n) {
                    return t[n]
                })
            },
            formatDateReadable: function(e, t) {
                return o.a.formatDateReadable(e, t)
            }
        }
    },
    276: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var o = function(e) {
            return n.e(45).then(function() {
                var t = [n(574)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , i = function(e) {
            return n.e(46).then(function() {
                var t = [n(575)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , a = [{
            path: "/columninfo/:id(\\d+)",
            name: "ColumnInfo",
            component: o
        }, {
            path: "/agreement",
            name: "Agreement",
            component: o
        }, {
            path: "/legal",
            name: "Legal",
            component: o
        }, {
            path: "/permit",
            name: "Permit",
            component: o
        }, {
            path: "/questions",
            name: "Questions",
            component: o
        }, {
            path: "/question/:id",
            name: "Question",
            component: o
        }, {
            path: "/rules/coupon",
            name: "CouponRules",
            component: o
        }, {
            path: "/rules/share",
            name: "ShareRules",
            component: o
        }, {
            path: "/rules/groupon",
            name: "GrouponRules",
            component: o
        }, {
            path: "/rules/invite",
            name: "InviteRules",
            component: o
        }, {
            path: "/special/:id",
            name: "Special",
            component: o
        }, {
            path: "/list/special/:id",
            name: "ListSpecial",
            component: o
        }, {
            path: "/list/videos/:id",
            name: "ListVideos",
            component: o
        }, {
            path: "/list/videos/v2/:id",
            name: "ListVideosV2",
            component: o
        }, {
            path: "/guide/recharge",
            name: "RechargeGuide",
            component: o
        }, {
            path: "/agreement/partner",
            name: "PartnerAgreement",
            component: o
        }, {
            path: "/activity/newusergift",
            name: "PullNew",
            component: o
        }, {
            path: "/activity/get-newusergift",
            name: "PullNewSuccess",
            component: o
        }, {
            path: "/activity/invite",
            name: "Invite",
            component: o
        }, {
            path: "/activity/getinvite",
            name: "GetInvite",
            component: o
        }, {
            path: "/activity/inviterecord",
            name: "InviteRecord",
            component: o
        }, {
            path: "/activity/sale-poster",
            name: "SalePosterList",
            component: o
        }, {
            path: "/activity/sale-poster/:cid",
            name: "SalePosterDetail",
            component: o
        }, {
            path: "/activity/share-poster",
            name: "SharePosterList",
            component: o
        }, {
            path: "/activity/share-withdraw",
            name: "ShareWithdraw",
            component: o
        }, {
            path: "/activity/share-poster-new",
            name: "SharePosterListNew",
            component: o
        }, {
            path: "/activity/share-ranking-list",
            name: "ShareWithdrawNew",
            component: o
        }, {
            path: "/activity/column-ranking-list/:id",
            name: "ColumnRankingList",
            component: o
        }, {
            path: "/readhub/share-poster",
            name: "ReadhubPoster",
            component: o
        }, {
            path: "/readhub/hot/:id",
            name: "ReadhubHotDetail",
            component: o
        }, {
            path: "/readhub/dev/:id",
            name: "ReadhubDevDetail",
            component: o
        }, {
            path: "/poster/article",
            name: "ContentPoster",
            component: o
        }, {
            path: "/bought/all",
            name: "BoughtAll",
            component: o
        }, {
            path: "/app/course-module/:id(\\d+)",
            name: "AppCourseModule",
            component: o
        }, {
            path: "/gift/card",
            name: "RechargeCard",
            component: i
        }]
    },
    277: function(e, t, n) {
        "use strict";
        var o = n(99)
          , i = n.n(o)
          , a = n(220)
          , r = n.n(a)
          , s = n(39)
          , c = n(565)
          , l = n(163)
          , u = n(65)
          , A = n(276)
          , d = function(e) {
            return n.e(9).then(function() {
                var t = [n(577)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , p = function(e) {
            return n.e(12).then(function() {
                var t = [n(615)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , h = function(e) {
            return n.e(19).then(function() {
                var t = [n(616)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , m = function(e) {
            return n.e(10).then(function() {
                var t = [n(619)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , f = function(e) {
            return n.e(32).then(function() {
                var t = [n(597)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , g = function(e) {
            return n.e(2).then(function() {
                var t = [n(596)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , v = function(e) {
            return n.e(1).then(function() {
                var t = [n(598)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , y = function(e) {
            return n.e(8).then(function() {
                var t = [n(599)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , b = function(e) {
            return n.e(44).then(function() {
                var t = [n(580)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , w = function(e) {
            return n.e(18).then(function() {
                var t = [n(579)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , k = function(e) {
            return n.e(17).then(function() {
                var t = [n(587)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , C = function(e) {
            return n.e(14).then(function() {
                var t = [n(588)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , x = function(e) {
            return n.e(0).then(function() {
                var t = [n(608)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , I = function(e) {
            return n.e(4).then(function() {
                var t = [n(609)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , _ = function(e) {
            return n.e(35).then(function() {
                var t = [n(590)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , M = function(e) {
            return n.e(39).then(function() {
                var t = [n(591)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , L = function(e) {
            return n.e(41).then(function() {
                var t = [n(583)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , T = function(e) {
            return n.e(40).then(function() {
                var t = [n(585)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , S = function(e) {
            return n.e(26).then(function() {
                var t = [n(584)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , D = function(e) {
            return n.e(29).then(function() {
                var t = [n(618)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , E = function(e) {
            return n.e(15).then(function() {
                var t = [n(601)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , N = function(e) {
            return n.e(23).then(function() {
                var t = [n(602)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , P = function(e) {
            return n.e(20).then(function() {
                var t = [n(605)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , B = function(e) {
            return n.e(24).then(function() {
                var t = [n(603)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , O = function(e) {
            return n.e(37).then(function() {
                var t = [n(589)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , R = function(e) {
            return n.e(31).then(function() {
                var t = [n(614)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , j = function(e) {
            return n.e(36).then(function() {
                var t = [n(600)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , U = function(e) {
            return n.e(28).then(function() {
                var t = [n(604)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , Q = function(e) {
            return n.e(30).then(function() {
                var t = [n(586)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , V = function(e) {
            return n.e(34).then(function() {
                var t = [n(613)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , W = function(e) {
            return n.e(11).then(function() {
                var t = [n(611)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , J = function(e) {
            return n.e(7).then(function() {
                var t = [n(612)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , z = function(e) {
            return n.e(21).then(function() {
                var t = [n(607)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , H = function(e) {
            return n.e(25).then(function() {
                var t = [n(617)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , $ = function(e) {
            return n.e(43).then(function() {
                var t = [n(573)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , q = function(e) {
            return n.e(27).then(function() {
                var t = [n(578)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , F = function(e) {
            return n.e(33).then(function() {
                var t = [n(576)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , G = function(e) {
            return n.e(5).then(function() {
                var t = [n(581)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , Y = function(e) {
            return n.e(3).then(function() {
                var t = [n(582)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , X = function(e) {
            return n.e(38).then(function() {
                var t = [n(610)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , Z = function(e) {
            return n.e(13).then(function() {
                var t = [n(592)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , K = function(e) {
            return n.e(6).then(function() {
                var t = [n(593)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , ee = function(e) {
            return n.e(42).then(function() {
                var t = [n(594)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , te = function(e) {
            return n.e(16).then(function() {
                var t = [n(595)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        }
          , ne = function(e) {
            return n.e(22).then(function() {
                var t = [n(606)];
                e.apply(null, t)
            }
            .bind(this)).catch(n.oe)
        };
        s.a.use(c.a);
        var oe = new c.a({
            mode: "history",
            routes: [{
                path: "/",
                name: "Index",
                component: p,
                meta: {
                    notScrollTop: !0
                }
            }, {
                path: "/library",
                name: "Index",
                component: h
            }, {
                path: "/download",
                name: "Download",
                component: d
            }, {
                path: "/search",
                name: "Search",
                component: m
            }, {
                path: "/column/intro",
                name: "ColumnIntroForPreview",
                component: v,
                meta: {
                    appLink: "views/column/intro.js"
                }
            }, {
                path: "/column/:id(\\d+)",
                name: "ColumnArticleList",
                component: f,
                meta: {
                    appLink: "views/column/intro.js",
                    urlscheme: "time://columnIntro?id={{id}}"
                }
            }, {
                path: "/column/article",
                name: "ColumnArticle",
                component: g,
                meta: {
                    appLink: "views/column/article.js"
                }
            }, {
                path: "/column/article/:id(\\d+)",
                name: "ColumnArticleDetail",
                component: g,
                meta: {
                    appLink: "views/column/article.js",
                    notScrollTop: !0
                }
            }, {
                path: "/column/article/comment",
                name: "Comment",
                component: j
            }, {
                path: "/article",
                name: "ArticlePreview",
                component: g,
                meta: {
                    appLink: "views/column/article.js"
                }
            }, {
                path: "/article/:id(\\d+)",
                name: "Article",
                component: g,
                meta: {
                    appLink: "views/column/article.js",
                    urlscheme: "time://article?id={{id}}"
                }
            }, {
                path: "/column/article/:id(\\w+)/share",
                name: "Share",
                component: y
            }, {
                path: "/column/intro/:id(\\d+)",
                name: "ColumnIntroDetail",
                component: v,
                meta: {
                    appLink: "views/column/intro.js",
                    urlscheme: "time://columnIntro?id={{id}}"
                }
            }, {
                path: "/recharge/login",
                name: "RechargeLogin",
                component: b
            }, {
                path: "/recharge/confirm",
                name: "RechargeConfirm",
                component: w
            }, {
                path: "/activity/recharge-2019",
                name: "RechargeFor2019",
                component: k
            }, {
                path: "/activity/recharge/expand",
                name: "RechargeExpand",
                component: C
            }, {
                path: "/list/groupon/:id",
                name: "ListGroupon",
                component: O
            }, {
                path: "/activity/dl-generalize",
                name: "DailyLessonGeneralize",
                component: Q
            }, {
                path: "/course/intro/:id",
                name: "CourseIntro",
                component: x,
                meta: {
                    appLink: "views/courses/course_intro.js",
                    urlscheme: "time://courseIntro?id={{id}}"
                }
            }, {
                path: "/course/detail/:id-:vid",
                name: "CourseDetail",
                component: I,
                meta: {
                    appLink: "views/course/detail.js",
                    urlscheme: "time://courseDetail?id={{id}}&aid={{vid}}"
                }
            }, {
                path: "/dailylesson/readlist/:id",
                name: "DailyLessonReadList",
                component: V,
                meta: {
                    urlscheme: "time://dailyExplore"
                }
            }, {
                path: "/dailylesson/collection/:id",
                name: "DailyLessonCollection",
                component: W,
                meta: {
                    urlscheme: "time://dailyCollection?collectionId={{id}}"
                }
            }, {
                path: "/dailylesson/detail/:sku",
                name: "DailyLessonDetail",
                component: J,
                meta: {
                    urlscheme: "time://dailySingle?sku={{sku}}"
                }
            }, {
                path: "/cash/account",
                name: "CashAccount",
                component: _
            }, {
                path: "/cash/detail",
                name: "CashDetail",
                component: M
            }, {
                path: "/wxlite/groupbuy/:id(\\d+)",
                name: "WxliteGroupBuy",
                component: L
            }, {
                path: "/wxlite/paid/:code",
                name: "WxliteGroupBuyPaid",
                component: T
            }, {
                path: "/wxlite/course/aliyunvideo/:cid-:aid",
                name: "WxliteCourseAliyunVideo",
                component: X
            }, {
                path: "/note/all",
                name: "NoteAll",
                component: D
            }, {
                path: "/comment/all",
                name: "CommentAll",
                component: E
            }, {
                path: "/comment/detail/:id(\\d+)",
                name: "CommentDetail",
                component: N
            }, {
                path: "/comment/nice/:id(\\d+)",
                name: "NiceComment",
                component: P
            }, {
                path: "/comment/nice-module/:id(\\d+)",
                name: "NiceCommentModule",
                component: ne
            }, {
                path: "/discuss/detail/:id(\\d+)",
                name: "DiscussDetail",
                component: B
            }, {
                path: "/discuss/write",
                name: "DiscussWrite",
                component: U
            }, {
                path: "/activity/wxlite/groupbuylist",
                name: "WxliteGroupBuyList",
                component: S
            }, {
                path: "/reply",
                name: "Reply",
                component: z
            }, {
                path: "/mygroupbuy",
                name: "mygroupbuy",
                component: q
            }, {
                path: "/convert",
                name: "convert",
                component: F
            }, {
                path: "/training/:id",
                name: "college",
                component: G
            }, {
                path: "/college/algorithm/:id",
                name: "CollegeAlgorithm",
                component: Y
            }, {
                path: "/groupon/:code",
                name: "Groupon",
                component: R
            }, {
                path: "/learning/record",
                name: "LearningRecord",
                component: H
            }, {
                path: "/channel/home",
                name: "Channel",
                component: Z
            }, {
                path: "/channel/materialdetail/:id",
                name: "materialdetail",
                component: K
            }, {
                path: "/channel/rule",
                name: "channelRule",
                component: ee
            }, {
                path: "/channel/myearnings",
                name: "myearnings",
                component: te
            }, {
                path: "/billfeedback",
                name: "billfeedback",
                component: $
            }, {
                path: "*",
                redirect: "/"
            }].concat(r()(A.a)),
            scrollBehavior: function(e, t, n) {
                if (!e.meta.notScrollTop)
                    return n || {
                        x: 0,
                        y: 0
                    }
            }
        })
          , ie = !1
          , ae = new RegExp(/^gk_|^utm_|code/)
          , re = function(e, t, n) {
            var o = !0;
            for (var i in t.query)
                ae.test(i) && e.query[i] !== t.query[i] && (o = !1);
            if (!ie && document.referrer && document.referrer.search(/\?/) > 0 && u.a.checkGeekbangDomain(document.referrer)) {
                document.referrer.split("?")[1].split("&").forEach(function(n, o) {
                    var i = n.split("=");
                    ae.test(i[0]) && (t.query[i[0]] = e.query[i[0]] = decodeURIComponent(i[1]))
                }),
                n({
                    path: e.path,
                    query: e.query
                })
            } else if (o || !ie)
                n({});
            else {
                for (var a in t.query)
                    ae.test(a) && (e.query[a] = t.query[a]);
                n({
                    path: e.path,
                    query: e.query
                })
            }
        };
        oe.beforeEach(function(e, t, n) {
            window._MEIQIA && window._MEIQIA("hidePanel"),
            re(e, t, function(e) {
                ie ? n(i()({}, e, {
                    replace: !0
                })) : (ie = !0,
                l.a.dispatch("getLoginUser").then(function() {
                    n(i()({}, e, {
                        replace: !0
                    }))
                }).catch(function(t) {
                    n(i()({}, e, {
                        replace: !0
                    })),
                    console.log(t)
                }))
            })
        }),
        t.a = oe
    },
    278: function(e, t, n) {
        "use strict";
        var o = n(43)
          , i = n.n(o)
          , a = n(223)
          , r = n(164)
          , s = {
            getLoginUser: function(e) {
                var t = e.commit;
                return new i.a(function(e, n) {
                    a.a.getLoginUser().then(function(n) {
                        t(r.a, n),
                        e()
                    }).catch(function(e) {
                        n(),
                        console.log("get login error: ", e)
                    })
                }
                )
            },
            logout: function(e) {
                (0,
                e.commit)(r.a, null)
            },
            addGlobalLayer: function(e, t) {
                var n = e.commit
                  , o = e.state;
                n(r.b, [].concat(o.globalLayers, [t]))
            },
            removeGlobalLayer: function(e, t) {
                var n = e.commit
                  , o = e.state
                  , i = o.globalLayers.filter(function(e) {
                    return e.name !== t
                });
                n(r.b, i)
            },
            clearGlobalLayers: function(e) {
                (0,
                e.commit)(r.b, [])
            }
        };
        t.a = s
    },
    279: function(e, t, n) {
        "use strict";
        var o, i = n(224), a = n.n(i), r = n(99), s = n.n(r), c = n(164), l = (o = {},
        a()(o, c.a, function(e, t) {
            e.loginUser = s()({}, e.loginUser, t)
        }),
        a()(o, c.c, function(e) {
            e.loginUser = null
        }),
        a()(o, c.b, function(e, t) {
            e.globalLayers = t
        }),
        o);
        t.a = l
    },
    280: function(e, t, n) {
        "use strict";
        var o = {
            loginUser: null,
            globalLayers: []
        };
        t.a = o
    },
    281: function(e, t, n) {
        "use strict";
        t.a = {
            sendPv: function(e) {
                "time.geekbang.org" === window.location.host && (window.ga && window.ga("send", "pageview", e),
                window._hmt && window._hmt.push(["_trackPageview", e]))
            },
            sendEvent: function(e, t, n) {
                console.log(e, t, n),
                "time.geekbang.org" === window.location.host && (window.ga && window.ga("send", "event", e, t, n),
                window._hmt && window._hmt.push(["_trackEvent", e, t, n]))
            }
        }
    },
    523: function(e, t) {},
    524: function(e, t) {
        e.exports = {
            button: "_3onsJjul_0"
        }
    },
    525: function(e, t) {
        e.exports = {
            main: "_2sRsF5RP_0"
        }
    },
    526: function(e, t) {},
    527: function(e, t) {},
    528: function(e, t) {},
    529: function(e, t) {},
    530: function(e, t) {},
    543: function(e, t, n) {
        function o(e) {
            this.$style = n(524)
        }
        var i = n(22)(n(262), n(560), o, null, null);
        e.exports = i.exports
    },
    544: function(e, t, n) {
        var o = n(22)(n(263), n(556), null, null, null);
        e.exports = o.exports
    },
    545: function(e, t, n) {
        var o = n(22)(n(264), n(558), null, null, null);
        e.exports = o.exports
    },
    546: function(e, t, n) {
        var o = n(22)(n(265), n(554), null, null, null);
        e.exports = o.exports
    },
    547: function(e, t, n) {
        var o = n(22)(n(266), n(555), null, null, null);
        e.exports = o.exports
    },
    548: function(e, t, n) {
        function o(e) {
            n(529)
        }
        var i = n(22)(n(267), n(562), o, "data-v-99cd8b4a", null);
        e.exports = i.exports
    },
    549: function(e, t, n) {
        function o(e) {
            n(527)
        }
        var i = n(22)(n(268), n(559), o, null, null);
        e.exports = i.exports
    },
    550: function(e, t, n) {
        function o(e) {
            n(528)
        }
        var i = n(22)(n(269), n(561), o, null, null);
        e.exports = i.exports
    },
    551: function(e, t, n) {
        function o(e) {
            this.$style = n(525)
        }
        var i = n(22)(n(270), n(563), o, null, null);
        e.exports = i.exports
    },
    552: function(e, t, n) {
        function o(e) {
            n(526)
        }
        var i = n(22)(n(271), n(557), o, null, null);
        e.exports = i.exports
    },
    553: function(e, t, n) {
        function o(e) {
            n(530)
        }
        var i = n(22)(n(272), n(564), o, null, null);
        e.exports = i.exports
    },
    554: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [e.visible ? n("div", {
                    staticClass: "gk-loading"
                }, [n("svg", {
                    staticClass: "gk-loading-spinner",
                    style: e.styles,
                    attrs: {
                        viewBox: "0 0 66 66",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("circle", {
                    staticClass: "gk-loading-path",
                    class: [e.colorClass],
                    attrs: {
                        fill: "none",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        cx: "33",
                        cy: "33",
                        r: "30"
                    }
                })]), e._v(" "), e.label ? n("p", {
                    staticClass: "label"
                }, [e._v(e._s(e.label))]) : e._e()]) : e._e()])
            },
            staticRenderFns: []
        }
    },
    555: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return n("div", {
                    staticClass: "gkui-message-content-wrap"
                }, [n("div", {
                    class: ["gkui-message-content", e.typeCls]
                }, [e.prefix ? n("span", {
                    staticClass: "gkui-message-prefix",
                    domProps: {
                        innerHTML: e._s(e.prefix)
                    }
                }) : e._e(), e._v(" "), "loading" === e.type ? n("Loading", {
                    staticClass: "gkui-message-loading-prefix",
                    attrs: {
                        color: e.loadingColor,
                        size: e.loadingSize
                    }
                }) : e._e(), e._v(" "), n("span", {
                    staticClass: "gkui-message-text"
                }, [e._v(e._s(e.message))]), e._v(" "), e.closable ? n("span", {
                    staticClass: "gkui-message-close",
                    on: {
                        click: e.close
                    }
                }, [n("i", {
                    class: {
                        defaultClose: !e.customClose
                    },
                    domProps: {
                        innerHTML: e._s(e.customCloseBtn)
                    }
                })]) : e._e()], 1)])
            },
            staticRenderFns: []
        }
    },
    556: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return n("Dialog", {
                    attrs: {
                        name: e.name,
                        dialogClass: "gkui-dialog-confirm",
                        value: e.value,
                        hasClose: !1,
                        maskClickClose: !1,
                        hasCancel: "confirm" === e.type,
                        handleOk: e.handleOk,
                        handleCancel: e.handleCancel,
                        center: e.center,
                        verticalCenter: e.verticalCenter,
                        okText: e.okText,
                        cancelText: e.cancelText,
                        okBtnColor: e.okBtnColor,
                        cancelBtnColor: e.cancelBtnColor,
                        width: e.width,
                        top: e.top,
                        loading: e.loading
                    }
                }, [n("div", {
                    attrs: {
                        slot: "header"
                    },
                    domProps: {
                        innerHTML: e._s(e.title)
                    },
                    slot: "header"
                }), e._v(" "), n("div", {
                    staticClass: "gkui-confirm-content"
                }, [e._v("\n    " + e._s(e.message) + "\n  ")])])
            },
            staticRenderFns: []
        }
    },
    557: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.visible,
                        expression: "visible"
                    }],
                    staticClass: "confirm-box-wrapper"
                }, [n("div", {
                    staticClass: "mask"
                }), e._v(" "), n("div", {
                    staticClass: "confirm-box"
                }, [n("h2", {
                    staticClass: "head"
                }, [e._v(e._s(e.title))]), e._v(" "), n("div", {
                    staticClass: "body",
                    domProps: {
                        innerHTML: e._s(e.content)
                    }
                }), e._v(" "), n("div", {
                    staticClass: "foot"
                }, [e.btnCancel ? n("a", {
                    staticClass: "button button-cancel",
                    on: {
                        click: e.cancelHandler
                    }
                }, [e._v(e._s(e.btnCancel))]) : e._e(), e._v(" "), e.btnOk ? n("a", {
                    staticClass: "button button-primary",
                    on: {
                        click: e.okHandler
                    }
                }, [e._v(e._s(e.btnOk))]) : e._e()])])])])
            },
            staticRenderFns: []
        }
    },
    558: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return e.visible ? n("div", {
                    class: e.wrapClass
                }, [n("div", {
                    staticClass: "gkui-dialog-mask",
                    on: {
                        click: e.handleMask
                    }
                }), e._v(" "), n("transition", {
                    attrs: {
                        name: e.transitionName
                    }
                }, [e.contentVisible ? n("div", {
                    staticClass: "gkui-dialog-container",
                    style: e.mainStyle
                }, [e.hasClose ? n("span", {
                    staticClass: "gkui-dialog-close",
                    on: {
                        click: e.close
                    }
                }) : e._e(), e._v(" "), e.showHead ? n("div", {
                    staticClass: "gkui-dialog-header"
                }, [e._t("header", [e._v("\n          " + e._s(e.title) + "\n        ")])], 2) : e._e(), e._v(" "), n("div", {
                    staticClass: "gkui-dialog-body"
                }, [e._t("default")], 2), e._v(" "), n("div", {
                    staticClass: "gkui-dialog-footer"
                }, [e._t("footer", [e.hasCancel ? n("Button", {
                    attrs: {
                        size: "normal",
                        color: e.cancelBtnColor
                    },
                    on: {
                        click: e.cancel
                    }
                }, [e._v(e._s(e.cancelText))]) : e._e(), e._v(" "), n("Button", {
                    attrs: {
                        size: "normal",
                        color: e.okBtnColor,
                        useLock: !0
                    },
                    on: {
                        click: e.ok
                    },
                    scopedSlots: e._u([{
                        key: "status",
                        fn: function(t) {
                            var o = t.locked;
                            return [e.loading && o ? n("Loading", {
                                staticClass: "gkui-dialog-loading",
                                attrs: {
                                    color: "white",
                                    size: "14px"
                                }
                            }) : e._e()]
                        }
                    }], null, !1, 1531177023)
                }, [e._v("\n            " + e._s(e.okText) + "\n          ")])])], 2)]) : e._e()])], 1) : e._e()
            },
            staticRenderFns: []
        }
    },
    559: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "gkui-modal-controller"
                    }
                }, [n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [e.isShowLayer ? n("div", {
                    staticClass: "gkui-modal-layer"
                }) : e._e()]), e._v(" "), e._l(e.modals, function(t) {
                    return [n(t.component, e._b({
                        key: t.params.id,
                        tag: "component",
                        style: {
                            zIndex: 9e4 + t.params.zIndex
                        }
                    }, "component", t.params, !1))]
                })], 2)
            },
            staticRenderFns: []
        }
    },
    560: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement;
                return (e._self._c || t)("div", {
                    class: [e.$style.button],
                    attrs: {
                        "gk-button": "",
                        "gkbtn-color": e.color,
                        "gkbtn-size": e.size,
                        disabled: e._disabled
                    },
                    on: {
                        click: e.handleClick
                    }
                }, [e._t("status", null, {
                    disabled: e.disabled,
                    locked: e.locked
                }), e._v(" "), e._t("default", [e._v("\n    " + e._s(e.locked ? e.lockLabel || e.label : e.label) + "\n  ")]), e._v(" "), e._t("end", null, {
                    disabled: e.disabled,
                    locked: e.locked
                })], 2)
            },
            staticRenderFns: []
        }
    },
    561: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("router-view")], 1), e._v(" "), n("GlobalLayer")], 1)
            },
            staticRenderFns: []
        }
    },
    562: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return n("div", {
                    style: e.styles,
                    attrs: {
                        id: "gkui-message-list"
                    }
                }, [n("transition-group", {
                    attrs: {
                        name: e.transitionName
                    },
                    on: {
                        enter: e.handleEnter,
                        leave: e.handleLeave
                    }
                }, [e._l(e.messageList, function(t) {
                    return [n("MessageItem", {
                        key: t.name,
                        attrs: {
                            type: t.type,
                            duration: t.duration,
                            closable: t.closable,
                            name: t.name,
                            message: t.message,
                            onClose: t.onClose,
                            prefix: t.prefix,
                            customClose: t.customClose,
                            loadingColor: t.loadingColor,
                            loadingSize: t.loadingSize,
                            transitionName: e.transitionName
                        },
                        on: {
                            close: e.close
                        }
                    })]
                })], 2)], 1)
            },
            staticRenderFns: []
        }
    },
    563: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return n("div", {
                    class: e.$style.main
                }, e._l(e.data, function(e, t) {
                    return n(e, {
                        key: t,
                        tag: "component"
                    })
                }), 1)
            },
            staticRenderFns: []
        }
    },
    564: function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return e.showLoading ? n("div", {
                    staticClass: "_loading_wrap_"
                }, [n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.visible,
                        expression: "visible"
                    }],
                    staticClass: "_loading_div_class_"
                }, [n("svg", {
                    staticClass: "spinner spinner--circle",
                    style: e.styles,
                    attrs: {
                        viewBox: "0 0 66 66",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("circle", {
                    staticClass: "path",
                    attrs: {
                        fill: "none",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        cx: "33",
                        cy: "33",
                        r: "30"
                    }
                })]), e._v(" "), n("p", {
                    staticClass: "message"
                }, [e._v(e._s(e.message))])])])], 1) : e._e()
            },
            staticRenderFns: []
        }
    },
    570: function(e, t, n) {
        n(217),
        e.exports = n(216)
    },
    65: function(e, t, n) {
        "use strict";
        var o = n(147)
          , i = n.n(o)
          , a = n(221)
          , r = n.n(a)
          , s = n(282)
          , c = n.n(s)
          , l = n(218)
          , u = n(39)
          , A = n(106)
          , d = n(259)
          , p = n(227);
        u.a.use(A.a),
        u.a.use(d.a),
        t.a = {
            formatDate: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-"
                  , n = new Date(10 === String(e).length ? 1e3 * e : e)
                  , o = n.getMonth() + 1
                  , i = n.getDate();
                return [n.getFullYear(), (o > 9 ? "" : "0") + o, (i > 9 ? "" : "0") + i].join(t)
            },
            formateTime: function(e) {
                var t = new Date(10 === String(e).length ? 1e3 * e : e);
                return [(t.getHours() > 9 ? "" : "0") + t.getHours(), (t.getMinutes() > 9 ? "" : "0") + t.getMinutes(), (t.getSeconds() > 9 ? "" : "0") + t.getSeconds()].join(":")
            },
            formatPrice: function(e) {
                return e || (e = 0),
                e / 100
            },
            formatCash: function(e) {
                return e || (e = 0),
                (e / 100).toFixed(2)
            },
            formatSize: function(e) {
                var t = Number(e);
                return t < 1024 ? t : t < 1048576 ? (t / 1024).toFixed(2) + "K" : t < 1073741824 ? (t / 1024 / 1024).toFixed(2) + "M" : (t / 1024 / 1024 / 1024).toFixed(2) + "G"
            },
            version: function(e) {
                if (!e)
                    return 0;
                e = e.toString();
                for (var t = e.split("."), n = 0; n < t.length; n++) {
                    var o = t[n].length;
                    t[n] = ["0000", "0000", "000", "00", "0", ""][o] + t[n]
                }
                return t.join("")
            },
            getParents: function(e) {
                for (var t = []; e; )
                    t.unshift(e),
                    e = e.parentNode;
                return t
            },
            isIphoneX: function() {
                return /iphone/gi.test(navigator.userAgent) && 812 === screen.height && 375 === screen.width
            },
            isIphoneXSeries: function() {
                return /iphone/gi.test(navigator.userAgent) && screen.height >= 812 && screen.width >= 375
            },
            eqAndroidVersion: function(e) {
                var t = navigator.userAgent;
                return this.isInAndroidApp() && t.match(/[\d.]+$/) && this.version(t.match(/[\d.]+$/)[0]) === this.version(e)
            },
            ltAndroidVersion: function(e) {
                var t = navigator.userAgent;
                return this.isInAndroidApp() && t.match(/[\d.]+$/) && this.version(t.match(/[\d.]+$/)[0]) < this.version(e)
            },
            extraJump: function(e) {
                var t = {
                    1: "url",
                    2: "product",
                    3: "article",
                    4: "live",
                    5: "mall"
                };
                switch (String(e.redirect_type).match(/^[\d]+$/) ? t[e.redirect_type] : e.redirect_type) {
                case "product":
                    var n = e.extra;
                    3 === n.column_type ? this.jumpCourseIntro(n.column_id) : n.had_sub ? this.jumpCourseDetail(n.column_id) : this.jumpCourseIntro(n.column_id);
                    break;
                case "article":
                    this.jumpArticle(e.redirect_param);
                    break;
                case "live":
                    this.notifyApp({
                        type: "route",
                        name: "live"
                    });
                    break;
                case "mall":
                    this.notifyApp({
                        type: "route",
                        name: "mall",
                        data: {
                            url: e.redirect_param
                        }
                    });
                    break;
                case "url":
                    if (!e.redirect_param)
                        return;
                    this.notifyApp({
                        type: "jump",
                        path: "views/webview.js",
                        data: {
                            url: e.redirect_param
                        }
                    })
                }
            },
            gteqAndroidVersion: function(e) {
                var t = navigator.userAgent;
                return this.isInAndroidApp() && t.match(/[\d.]+$/) && this.version(t.match(/[\d.]+$/)[0]) >= this.version(e)
            },
            ltIOSVersion: function(e) {
                var t = navigator.userAgent;
                return this.isInApp() && !this.isInAndroidApp() && t.match(/[\d.]+$/) && this.version(t.match(/[\d.]+$/)[0]) < this.version(e)
            },
            eqIOSVersion: function(e) {
                var t = navigator.userAgent;
                return this.isInApp() && !this.isInAndroidApp() && t.match(/[\d.]+$/) && this.version(t.match(/[\d.]+$/)[0]) === this.version(e)
            },
            gteqIOSVersion: function(e) {
                var t = navigator.userAgent;
                return this.isInApp() && !this.isInAndroidApp() && t.match(/[\d.]+$/) && this.version(t.match(/[\d.]+$/)[0]) >= this.version(e)
            },
            formatDuration: function(e) {
                var t = Number(e);
                return t < 60 ? t + "秒" : t < 3600 ? Math.floor(t / 60) + "分" + (t % 60 == 0 ? "" : t % 60 + "秒") : Math.floor(t / 60 / 60) + "小时" + this.formatDuration(t % 3600)
            },
            getQueryString: function(e, t) {
                var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)","i")
                  , o = e.split("?").length > 1 ? e.split("?")[1] : ""
                  , i = o.match(n);
                return null !== i ? decodeURIComponent(i[2]) : ""
            },
            queryPack: function(e) {
                var t = "";
                for (var n in e)
                    t += n + "=" + encodeURIComponent(e[n]) + "&";
                return t.substr(0, t.length - 1)
            },
            parseAudio: function(e) {
                return e ? '\n        <audio class="audio-player" controls src="' + e + '">\n          您的浏览器不支持 audio 标签\n        </audio>\n      ' : ""
            },
            imgToBase64: function(e, t) {
                var n = document.createElement("img");
                n.src = e,
                n.crossOrigin = "Anonymous",
                document.body.appendChild(n),
                n.onload = function() {
                    var e = window.getComputedStyle(n, null)
                      , o = document.createElement("canvas");
                    o.width = e.getPropertyValue("width").split("px")[0],
                    o.height = e.getPropertyValue("height").split("px")[0],
                    o.getContext("2d").drawImage(n, 0, 0);
                    var i = o.toDataURL("image/png", 1);
                    document.body.removeChild(n),
                    t(i)
                }
                ,
                n.src = e,
                (n.complete || void 0 === n.complete) && (n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                n.src = e)
            },
            b64toBlob: function(e, t, n) {
                t = t || "",
                n = n || 512;
                for (var o = atob(e), i = [], a = 0; a < o.length; a += n) {
                    for (var r = o.slice(a, a + n), s = new Array(r.length), c = 0; c < r.length; c++)
                        s[c] = r.charCodeAt(c);
                    var l = new Uint8Array(s);
                    i.push(l)
                }
                return new Blob(i,{
                    type: t
                })
            },
            formatContent: function(e) {
                if ("string" != typeof e)
                    return "";
                var t = [];
                return e = e.replace(/<code>(.+?)<\/code>/g, function(e, n) {
                    return t.push(n),
                    "<code>$" + (t.length - 1) + "</code>"
                }),
                e = e.replace(/([\u4E00-\u9FA5])([a-z0-9@#&;=_\[\$\%\^\*\-\+\(\/])/gi, "$1 $2"),
                e = e.replace(/([a-z0-9#!~&;=_\]\,\.\:\?\$\%\^\*\-\+\)\/])([\u4E00-\u9FA5])/gi, "$1 $2"),
                e = e.replace(/<code>\$(\d+)<\/code>/g, function(e, n) {
                    var o = parseInt(n, 10);
                    return c()(o) ? "<code>" + t[o] + "</code>" : e
                })
            },
            utcToLocal: function(e) {
                var t = new Date;
                return (10 === String(e).length ? 1e3 * e : 1 * e) - 6e4 * t.getTimezoneOffset()
            },
            formatDateReadable: function(e, t) {
                var n = 10 === String(e).length ? 1e3 * e : 1 * e;
                t && (n = this.utcToLocal(n));
                var o = (new Date).valueOf()
                  , i = o - n;
                if (i < 6e4)
                    return Math.floor(i / 1e3) + " 秒前";
                if (i < 36e5)
                    return Math.floor(i / 6e4) + " 分钟前";
                if (i < 864e5)
                    return Math.floor(i / 36e5) + " 小时前";
                var a = new Date(n)
                  , r = a.getMonth() + 1
                  , s = a.getDate()
                  , c = (r > 9 ? "" : "0") + r + "月" + (s > 9 ? "" : "0") + s + "日";
                return a.getFullYear() !== (new Date).getFullYear() && (c = a.getFullYear() + "年" + c),
                c
            },
            canTimeUniversalJump: function() {
                return this.gteqAndroidVersion("1.1.3") || this.gteqIOSVersion("1.1.12")
            },
            jumpColumnIntro: function(e) {
                var t = "time://columnIntro?id=" + e;
                p.hasNativeMethod("common.routeJump") ? p.call("common.routeJump", t, function() {
                    return console.log("调起成功")
                }) : this.gteqAndroidVersion("2.4.0") || this.gteqIOSVersion("2.4.0") ? this.notifyApp({
                    type: "urlscheme",
                    url: t
                }) : this.isInApp() ? this.notifyApp({
                    type: "jump",
                    path: "views/column/intro.js",
                    data: {
                        id: e
                    }
                }) : location.href = "/column/intro/" + e
            },
            jumpColumnDetail: function(e) {
                var t = "time://columnDetail?id=" + e;
                p.hasNativeMethod("common.routeJump") ? p.call("common.routeJump", t, function() {
                    return console.log("调起成功")
                }) : this.gteqAndroidVersion("2.4.0") || this.gteqIOSVersion("2.4.0") ? this.notifyApp({
                    type: "urlscheme",
                    url: t
                }) : this.isInApp() ? this.notifyApp({
                    type: "jump",
                    path: "views/column_detail.js",
                    data: {
                        id: e
                    }
                }) : location.href = "/column/" + e
            },
            jumpCourseIntro: function(e) {
                var t = "time://courseIntro?id=" + e;
                p.hasNativeMethod("common.routeJump") ? p.call("common.routeJump", t, function() {
                    return console.log("调起成功")
                }) : this.gteqAndroidVersion("2.4.0") || this.gteqIOSVersion("2.4.0") ? this.notifyApp({
                    type: "urlscheme",
                    url: t
                }) : this.isInApp() ? this.notifyApp({
                    type: "jump",
                    path: "views/courses/course_intro.js",
                    data: {
                        id: e
                    }
                }) : location.href = "/course/intro/" + e
            },
            jumpCourseDetail: function(e, t) {
                var n = "time://courseDetail?id=" + e + "&aid=" + t;
                p.hasNativeMethod("common.routeJump") ? p.call("common.routeJump", n, function() {
                    return console.log("调起成功")
                }) : this.gteqAndroidVersion("2.4.0") || this.gteqIOSVersion("2.4.0") ? this.notifyApp({
                    type: "urlscheme",
                    url: n
                }) : this.isInApp() ? this.notifyApp({
                    type: "jump",
                    path: "views/courses/course_detail.js",
                    data: {
                        id: e,
                        aid: t
                    }
                }) : location.href = "/course/detail/" + e + "-" + t
            },
            jumpArticle: function(e) {
                var t = "time://article?id=" + e;
                p.hasNativeMethod("common.routeJump") ? p.call("common.routeJump", t, function() {
                    return console.log("调起成功")
                }) : this.gteqAndroidVersion("2.4.0") || this.gteqIOSVersion("2.4.0") ? this.notifyApp({
                    type: "urlscheme",
                    url: t
                }) : this.isInApp() ? this.notifyApp({
                    type: "jump",
                    path: "views/column/article.js",
                    data: {
                        id: e
                    }
                }) : location.href = "/column/article/" + e
            },
            parseTimeLink: function(e) {
                if (e.match(/^time:\/\//)) {
                    var t = e.match(/([\w]+)\?(.+)/);
                    if (t.length < 3)
                        return;
                    var n = {};
                    if (t[2].split("&").forEach(function(e) {
                        var t = e.match(/([\w]+)=(.+)/);
                        3 === t.length && (n[t[1]] = decodeURIComponent(t[2]))
                    }),
                    p.hasNativeMethod("common.routeJump"))
                        p.call("common.routeJump", e, function() {
                            return console.log("调起成功")
                        });
                    else if (this.canTimeUniversalJump())
                        this.notifyApp({
                            type: "route",
                            name: t[1],
                            data: n
                        });
                    else if (this.isInApp())
                        switch (t[1]) {
                        case "mall":
                            this.toast("请升级到极客时间最新版后，点击该链接购买");
                            break;
                        default:
                            this.toast("需要升级到极客时间最新版")
                        }
                    else
                        switch (t[1]) {
                        case "mall":
                            var o = e.match(/url=(.+)/i);
                            o.length > 1 ? setTimeout(function() {
                                window.location.href = decodeURIComponent(o[1])
                            }, 200) : this.error("链接出现错误");
                            break;
                        default:
                            this.toast("需要升级到极客时间最新版")
                        }
                } else
                    window.location.href = e
            },
            isPC: function() {
                for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], n = !0, o = 0; o < t.length; o++)
                    if (e.indexOf(t[o]) > 0) {
                        n = !1;
                        break
                    }
                return n
            },
            isIOS: function() {
                return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
            },
            isIPad: function() {
                return !!navigator.userAgent.match(/ipad/i)
            },
            isAndroid: function() {
                return !!navigator.userAgent.match(/android/i)
            },
            isInWeixin: function() {
                return !!window.navigator.userAgent.match(/MicroMessenger/i)
            },
            isInWXMiniProgram: function() {
                return window.__wxjs_environment && "miniprogram" === window.__wxjs_environment || window.navigator.userAgent.toLowerCase().indexOf("miniprogram") > -1
            },
            isInAliApp: function() {
                return !!window.navigator.userAgent.match(/AliApp/i)
            },
            isInQQ: function() {
                return !!navigator.userAgent.match(/QQBrowser/i)
            },
            isInWeibo: function() {
                return !!navigator.userAgent.match(/WeiBo/i)
            },
            isInApp: function() {
                return !!navigator.userAgent.match(/org\.geekbang\.GeekTime/i)
            },
            isInAndroidApp: function() {
                return !!navigator.userAgent.match(/android\.org\.geekbang\.GeekTime/i)
            },
            isMac: function() {
                return navigator.platform.indexOf("Mac") > -1
            },
            isWin: function() {
                return navigator.platform.indexOf("Win") > -1
            },
            isIpad: function() {
                return navigator.userAgent.toLowerCase().indexOf("ipad") > -1
            },
            addUrlParam: function(e, t, n) {
                var o = t + "=" + encodeURIComponent(n)
                  , i = "?" + o;
                return e && (i = e.replace(new RegExp("([?&])" + t + "[^&]*"), "$1" + o)) === e && e.indexOf(o) < 0 && (i += (e.indexOf("?") > 0 ? "&" : "?") + o),
                i
            },
            shareInWeixin: function(e) {
                if (this.isInWeixin()) {
                    var t = "https://static001.geekbang.org/static/icon/time/logo-180.png";
                    window.wx && window.wx.ready(function() {
                        window.wx.onMenuShareTimeline({
                            title: e.timelineTitle || "极客时间",
                            link: e.url || window.location.href,
                            imgUrl: e.img || t
                        }),
                        window.wx.onMenuShareAppMessage({
                            title: e.messageTitle || "极客时间",
                            link: e.url || window.location.href,
                            imgUrl: e.img || t,
                            desc: e.desc || ""
                        })
                    })
                }
            },
            subString: function(e, t) {
                var n = e.slice(0, t)
                  , o = n.replace(/[x00-xff]/g, "").length;
                switch (o) {
                case 0:
                    return n;
                case t:
                    return e.slice(0, t >> 1);
                default:
                    var i = t - o
                      , a = e.slice(i, t)
                      , r = a.replace(/[x00-xff]/g, "").length;
                    return r ? e.slice(0, i) + this.subString(a, r) : e.slice(0, i)
                }
            },
            getTicket: function() {
                var e = window.localStorage.getItem("gtInfo");
                return e && JSON.parse(e) ? JSON.parse(e).ticket : this.getQueryString(window.location.href, "ticket")
            },
            getDeviceId: function() {
                var e = window.localStorage.getItem("gtInfo");
                return e && JSON.parse(e) ? JSON.parse(e).deviceId : this.getQueryString(window.location.href, "deviceId")
            },
            toast: function(e) {
                p.hasNativeMethod("common.toast") ? p.call("common.toast", e) : this.isInApp() ? this.notifyApp({
                    type: "toast",
                    data: {
                        message: e
                    }
                }) : u.a.prototype.$Message.info({
                    message: e,
                    top: "100px"
                })
            },
            success: function(e) {
                p.hasNativeMethod("common.toast") ? p.call("common.toast", e) : this.isInApp() && this.canNotifyApp() ? this.notifyApp({
                    type: "toast",
                    data: {
                        message: e
                    }
                }) : u.a.prototype.$Message.success({
                    message: e
                })
            },
            error: function(e, t, n) {
                p.hasNativeMethod("common.toast") ? p.call("common.toast", e) : this.isInApp() && this.canNotifyApp() ? this.notifyApp({
                    type: "error",
                    data: {
                        message: e
                    }
                }) : u.a.prototype.$Message.error({
                    message: e,
                    top: t,
                    prefix: n
                })
            },
            parseError: function(e) {
                if (e.data && e.data.error)
                    if ("-2000" === String(e.data.error.code))
                        this.login();
                    else
                        try {
                            this.error(l.a.errorCode[e.data.error.code] || e.data.error.msg)
                        } catch (e) {
                            this.error(e)
                        }
            },
            canNotifyApp: function() {
                return window.webkit && window.webkit.messageHandlers || window.webviewJSInterface && window.webviewJSInterface
            },
            notifyApp: function(e) {
                if (this.canNotifyApp()) {
                    var t = this.getQueryString(window.location.href, "utm_term");
                    if ("jump" === e.type && e.data && t && (e.data.utm_term = t),
                    this.isInAndroidApp())
                        try {
                            window.webviewJSInterface && window.webviewJSInterface.notifyWeex(r()(e))
                        } catch (e) {
                            console.log(e)
                        }
                    else
                        try {
                            window.webkit.messageHandlers.notifyWeex.postMessage({
                                data: e
                            })
                        } catch (e) {
                            console.log(e)
                        }
                }
            },
            login: function() {
                p.hasNativeMethod("common.routeJump") ? p.call("common.routeJump", "time://login", function(e) {}) : this.isInApp() && this.canNotifyApp() ? this.notifyApp({
                    type: "login",
                    data: {}
                }) : this.isInWXMiniProgram() ? window.wx && window.wx.miniProgram.navigateTo({
                    url: "/pages/login/login?redirect=" + encodeURIComponent("/pages/gkwebview/gkwebview?url=" + window.location.href + "&auth=true")
                }) : window.location.href = "//account.geekbang.org/singin?redirect=" + encodeURIComponent(window.location.href)
            },
            previewImgInApp: function(e, t) {
                if (p.hasNativeMethod("common.viewLargeImage")) {
                    var n = {
                        images: e,
                        pos: t
                    };
                    p.call("common.viewLargeImage", n, function() {
                        return console.log("调起成功")
                    })
                } else
                    this.gteqAndroidVersion("1.0.8") ? this.notifyApp({
                        type: "img",
                        data: {
                            url: e[t]
                        }
                    }) : this.notifyApp({
                        type: "img",
                        data: {
                            imgs: e,
                            index: t
                        }
                    })
            },
            html2Text: function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e,
                t.innerText
            },
            checkGeekbangDomain: function(e) {
                return !!e && !!e.match(/^https*\:\/\/([\w]+?)\.geekbang\.org/i)
            },
            handleMathJax: function(e) {
                if (document.querySelector("script#MathJax"))
                    window.MathJax && window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, e]);
                else {
                    var t = document.createElement("script");
                    t.id = "MathJax",
                    t.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML",
                    document.getElementsByTagName("head")[0].appendChild(t),
                    t.onload = function(t) {
                        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, e])
                    }
                }
            },
            getSelectionText: function() {
                var e = "";
                if (void 0 !== window.getSelection) {
                    var t = window.getSelection();
                    if (t.rangeCount) {
                        for (var n = document.createElement("div"), o = 0, i = t.rangeCount; o < i; ++o)
                            n.appendChild(t.getRangeAt(o).cloneContents());
                        e = n.innerText
                    }
                } else
                    void 0 !== document.selection && "Text" === document.selection.type && (e = document.selection.createRange().text);
                return e
            },
            scrollToTop: function() {
                window.scrollTo(0, 0)
            },
            weiboShare: function(e) {
                var t = e.url
                  , n = e.title
                  , o = e.image
                  , i = ["url=" + encodeURIComponent(t), "title=" + n];
                o && i.push("pic=" + o),
                window.open("http://service.weibo.com/share/share.php?sharesource=weibo&appkey=577532191&" + i.join("&"))
            },
            isEnableCss: function(e, t) {
                var n = document.createElement("div");
                return e in n.style && (n.style[e] = t,
                n.style[e] === t)
            },
            offset: function(e) {
                for (var t = {
                    left: e.offsetLeft || 0,
                    top: e.offsetTop || 0
                }, n = e.offsetParent; n; )
                    t.left += n.offsetLeft,
                    t.top += n.offsetTop,
                    n = n.offsetParent;
                return t.right = t.left + e.clientWidth,
                t.bottom = t.top + e.clientHeight,
                t
            },
            deepKey: function(e, t) {
                var n = this;
                if (null === e || "object" !== (void 0 === e ? "undefined" : i()(e)))
                    return e;
                var o, a, r, s;
                if (e instanceof Array)
                    return e.map(function(e) {
                        return "object" === (void 0 === e ? "undefined" : i()(e)) && (e = n.deepKey(e)),
                        e
                    });
                o = {};
                for (a in e)
                    e.hasOwnProperty(a) && (r = t(a),
                    s = e[a],
                    (s instanceof Array || null !== s && s.constructor === Object) && (s = this.deepKey(s)),
                    o[r] = s);
                return o
            },
            underscoreToCamelCase: function(e) {
                return this.deepKey(e, function(e) {
                    return e.replace(/_([a-z])/g, function(e, t) {
                        return t.toUpperCase()
                    })
                })
            },
            camelCaseToUnderscore: function(e) {
                return this.deepKey(e, function(e) {
                    return e.replace(/[A-Z]/g, function(e) {
                        return "_" + e.toLowerCase()
                    })
                })
            },
            pathToAbsoluteURL: function(e) {
                return "//time.geekbang.org" + (0 === e.indexOf("/") ? "" : "/") + e
            },
            getPositionInSortNumberList: function(e, t, n, o) {
                if (n = n || 0,
                o = o || t,
                0 === o.length)
                    return 0;
                var i = t.length;
                if (1 === i) {
                    var a = t[0];
                    if (e >= a) {
                        var r = o[n + 1];
                        return r ? {
                            length: o.length,
                            index: n + 1,
                            rest: (e - a) / (r - a)
                        } : {
                            length: o.length,
                            index: n + 1,
                            rest: 0
                        }
                    }
                    var s = o[n - 1];
                    return s ? {
                        length: o.length,
                        index: n - 1,
                        rest: (e - s) / (a - s)
                    } : {
                        length: o.length,
                        index: n,
                        rest: 0
                    }
                }
                var c = Math.floor(i / 2 - 1);
                return e > t[c] ? this.getPositionInSortNumberList(e, t.slice(c + 1), n + c + 1, o) : this.getPositionInSortNumberList(e, t.slice(0, c + 1), n, o)
            },
            html2escape: function(e) {
                return e.replace(/[<>&"\/]/g, function(e) {
                    return {
                        "<": "&lt;",
                        ">": "&gt;",
                        "&": "&amp;",
                        '"': "&quot;",
                        "/": "&#47;"
                    }[e]
                })
            },
            shareToWeibo: function(e) {
                event.preventDefault();
                var t = "https://service.weibo.com/share/share.php?&appkey=3532615846";
                t = this.addUrlParam(t, "url", e.link || document.location.href),
                t = this.addUrlParam(t, "title", e.title || document.title),
                t = this.addUrlParam(t, "content", e.description || ""),
                t = this.addUrlParam(t, "sharesource", "weibo"),
                t = this.addUrlParam(t, "pic", e.img || ""),
                window.open(t, "_blank")
            },
            copy: function(e) {
                var t = e;
                if (void 0 !== window.clipboardData) {
                    window.clipboardData.setData("Text", t),
                    this.success("复制成功")
                } else
                    try {
                        var n = document.createElement("input");
                        document.body.appendChild(n),
                        n.setAttribute("value", t),
                        n.select(),
                        document.execCommand("copy") && (document.execCommand("copy"),
                        this.success("复制成功")),
                        document.body.removeChild(n)
                    } catch (e) {
                        this.error("你的浏览器不支持该操作，请手动复制")
                    }
            },
            isRealHeightMoreThanVisibleHeight: function(e, t) {
                var n = window.getComputedStyle(e, null)
                  , o = n.getPropertyValue("width")
                  , i = n.getPropertyValue("height")
                  , a = n.getPropertyValue("font-size")
                  , r = n.getPropertyValue("line-height")
                  , s = n.getPropertyValue("font-weight")
                  , c = document.createElement("div");
                c.style.width = o,
                c.style.fontSize = a,
                c.style.whiteSpace = "normal",
                c.style.fontWeight = s,
                c.style.lineHeight = r,
                c.style.wordBreak = "break-all",
                c.style.position = "absolute",
                c.innerHTML = t,
                document.body.appendChild(c);
                var l = c.offsetHeight;
                return document.body.removeChild(c),
                l > parseFloat(i)
            },
            fixedBody: function(e) {
                var t = 0
                  , n = 0;
                return {
                    open: function() {
                        t = document.scrollingElement.scrollTop || document.body.scrollTop,
                        document.body.style.top = -t + "px",
                        document.body.classList.add("fixed"),
                        n = document.body.style.top
                    },
                    close: function() {
                        document.body.classList.remove("fixed"),
                        document.scrollingElement.scrollTop = t,
                        document.body.scrollTop = t,
                        document.body.style.top = n
                    }
                }
            }()
        }
    }
}, [570]);