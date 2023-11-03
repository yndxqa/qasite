(()=>{
    "use strict";
    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        e(t)
    }
    function t(t, n) {
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(t, (void 0,
            i = function(t, n) {
                if ("object" !== e(t) || null === t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var o = r.call(t, "string");
                    if ("object" !== e(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(o.key),
            "symbol" === e(i) ? i : String(i)), o)
        }
        var i
    }
    var n = function() {
        function e(t, n, r) {
            var o = this
              , i = t.name
              , u = t.link
              , a = t.likes
              , c = t.owner
              , l = t.id
              , s = t.removeButtonClick
              , f = t.handleLikeIcon
              , p = t.handleClickLike
              , y = t.userId;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this._isLiked = !1,
            a.forEach((function(e) {
                e._id === y && (o._isLiked = !0)
            }
            )),
            this._name = i,
            this._link = u,
            this._owner = c,
            this._id = l,
            this._templateSelector = n,
            this._handleCardClick = r,
            this._removeButtonClick = s,
            this._handleClickLike = p,
            this._handleLikeIcon = f,
            this._likes = a.length
        }
        var n, r;
        return n = e,
        (r = [{
            key: "changeStatus",
            value: function() {
                this._isLiked = !this._isLiked
            }
        }, {
            key: "_handleImageClick",
            value: function() {
                this._handleCardClick(this._link, this._name, this._likes)
            }
        }, {
            key: "_getTemplate",
            value: function() {
                return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)
            }
        }, {
            key: "_setData",
            value: function() {
                this._cardName = this._element.querySelector(".element__name"),
                this._cardName.textContent = this._name,
                this._cardImage = this._element.querySelector(".element__image"),
                this._cardImage.src = this._link,
                this._cardImage.alt = this._name,
                this._cardDeleteButton = this._element.querySelector(".element__delete"),
                this._cardLike = this._element.querySelector(".element__like"),
                this._usersLikesElement = this._element.querySelector(".element__likes-counter"),
                this._usersLikesElement.textContent = this._likes
            }
        }, {
            key: "setLikes",
            value: function(e) {
                this._likes = e,
                this._usersLikesElement.textContent = this._likes
            }
        }, {
            key: "getView",
            value: function(e, t) {
                return this._element = this._getTemplate(),
                this._setData(),
                this._owner !== e && this._cardDeleteButton.remove(),
                this._likes = t,
                this._isLiked && this._cardLike.classList.add("element__like_active"),
                this._setEventListeners(),
                this._element
            }
        }, {
            key: "_setEventListeners",
            value: function() {
                var e = this;
                this._cardLike.addEventListener("click", (function() {
                    e._likeCard()
                }
                )),
                this._cardImage.addEventListener("click", (function() {
                    e._handleImageClick()
                }
                )),
                this._cardDeleteButton.addEventListener("click", (function() {
                    e._removeButtonClick(e),
                    e._deleteCard()
                }
                ))
            }
        }, {
            key: "_deleteCard",
            value: function() {
                this._element.remove(),
                this._element = null
            }
        }, {
            key: "_likeCard",
            value: function() {
                this._cardLike.classList.toggle("element__like_active"),
                this._handleClickLike()
            }
        }]) && t(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        e
    }();
    function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        r(e)
    }
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(e, (void 0,
            i = function(e, t) {
                if ("object" !== r(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" !== r(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(o.key),
            "symbol" === r(i) ? i : String(i)), o)
        }
        var i
    }
    var i = function() {
        function e(t, n) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this._validationConfig = t,
            this._formElement = n,
            this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector)),
            this._inputErrorClass = this._validationConfig.inputErrorClass,
            this._errorClass = this._validationConfig.errorClass,
            this._submitButton = n.querySelector(this._validationConfig.submitButtonSelector)
        }
        var t, n;
        return t = e,
        (n = [{
            key: "enableValidation",
            value: function() {
                this._formElement.addEventListener("submit", (function(e) {
                    return e.preventDefault()
                }
                )),
                this._setEventListeners(),
                this._resetValidation()
            }
        }, {
            key: "_showInputError",
            value: function(e, t) {
                e.classList.add(this._validationConfig.inputErrorClass);
                var n = document.querySelector(".".concat(e.id, "-error"));
                n.textContent = e.validationMessage,
                n.classList.add(t)
            }
        }, {
            key: "_hideInputError",
            value: function(e, t, n) {
                var r = document.querySelector(".".concat(e.id, "-error"));
                e.classList.remove(this._validationConfig.inputErrorClass),
                r.classList.remove(t),
                r.textContent = ""
            }
        }, {
            key: "_checkInputValidity",
            value: function(e, t, n) {
                e.validity.valid ? this._hideInputError(e, t, n) : this._showInputError(e, t)
            }
        }, {
            key: "_hasInvalidInput",
            value: function() {
                return this._inputList.some((function(e) {
                    return !e.validity.valid
                }
                ))
            }
        }, {
            key: "_setEventListeners",
            value: function() {
                var e = this;
                this._inputList.forEach((function(t) {
                    t.addEventListener("input", (function() {
                        e._checkInputValidity(t, e._errorClass, e._inputErrorClass),
                        e._toggleButtonState()
                    }
                    ))
                }
                ))
            }
        }, {
            key: "_toggleButtonState",
            value: function() {
                this._hasInvalidInput() ? this.disableSubmitButton() : (this._submitButton.classList.remove(this._validationConfig.inactiveButtonClass),
                this._submitButton.removeAttribute("disabled"))
            }
        }, {
            key: "_resetValidation",
            value: function() {
                var e = this;
                this.disableSubmitButton(),
                this._inputList.forEach((function(t) {
                    e._hideInputError(t, e._errorClass, e._inputErrorClass)
                }
                )),
                this._toggleButtonState()
            }
        }, {
            key: "disableSubmitButton",
            value: function() {
                this._submitButton.setAttribute("disabled", "true"),
                this._submitButton.classList.add(this._validationConfig.inactiveButtonClass)
            }
        }]) && o(t.prototype, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e
    }()
      , u = {
        formSelector: ".popup__form",
        inputSelector: ".popup__input",
        submitButtonSelector: ".popup__button",
        inactiveButtonClass: "popup__button_disabled",
        inputErrorClass: "popup__input_type_error",
        errorClass: "popup__error_visible"
    }
      , a = document.querySelector(".profile__open-popup")
      , c = document.querySelector(".profile__add")
      , l = document.querySelector(".profile__avatar")
      , s = document.querySelector("#close-edit-form")
      , f = document.querySelector("#close-avatar-form")
      , p = document.querySelector("#close-image-form")
      , y = document.querySelector("#edit-popup")
      , d = document.querySelector("#newcard-popup")
      , h = document.querySelector("#avatar-popup")
      , v = document.querySelector('input[name="name"]')
      , m = document.querySelector('input[name="description"]')
      , _ = (document.querySelector('input[name="inputAvatar"]'),
    document.querySelector(".profile__avatar"));
    function b(e) {
        return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        b(e)
    }
    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, (void 0,
            o = function(e, t) {
                if ("object" !== b(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" !== b(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(r.key),
            "symbol" === b(o) ? o : String(o)), r)
        }
        var o
    }
    var S = function() {
        function e(t, n) {
            var r = t.items
              , o = t.renderer;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this._items = r,
            this._renderer = o,
            this._container = document.querySelector(n)
        }
        var t, n;
        return t = e,
        (n = [{
            key: "renderItems",
            value: function() {
                var e = this;
                this._items.forEach((function(t) {
                    e._renderer(t)
                }
                ))
            }
        }, {
            key: "addItem",
            value: function(e) {
                this._container.prepend(e)
            }
        }]) && g(t.prototype, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e
    }();
    function k(e) {
        return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        k(e)
    }
    function w(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, (void 0,
            o = function(e, t) {
                if ("object" !== k(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" !== k(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(r.key),
            "symbol" === k(o) ? o : String(o)), r)
        }
        var o
    }
    var E = function() {
        function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this._popup = document.querySelector(t),
            this._closeButton = this._popup.querySelector(".popup__close-button"),
            this._handleEscClose = this._handleEscClose.bind(this)
        }
        var t, n;
        return t = e,
        (n = [{
            key: "open",
            value: function() {
                this._popup.classList.add("popup_opened"),
                document.addEventListener("keydown", this._handleEscClose),
                document.addEventListener("mousedown", this._closePopupOverlay)
            }
        }, {
            key: "close",
            value: function() {
                this._popup.classList.remove("popup_opened"),
                document.removeEventListener("keydown", this._handleEscClose),
                document.removeEventListener("mousedown", this._closePopupOverlay)
            }
        }, {
            key: "_handleEscClose",
            value: function(e) {
                "Escape" === e.key && this.close()
            }
        }, {
            key: "_closePopupOverlay",
            value: function(e) {
                e.currentTarget === e.target && this.close()
            }
        }, {
            key: "setEventListeners",
            value: function() {
                var e = this;
                this._popup.addEventListener("mousedown", (function(t) {
                    (t.target.classList.contains("popup_opened") || t.target.classList.contains("popup__close-button")) && e.close()
                }
                ))
            }
        }]) && w(t.prototype, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e
    }();
    function L(e) {
        return L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        L(e)
    }
    function C(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, (void 0,
            o = function(e, t) {
                if ("object" !== L(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" !== L(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(r.key),
            "symbol" === L(o) ? o : String(o)), r)
        }
        var o
    }
    function O() {
        return O = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = P(e)); )
                    ;
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value
            }
        }
        ,
        O.apply(this, arguments)
    }
    function j(e, t) {
        return j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        j(e, t)
    }
    function P(e) {
        return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        P(e)
    }
    var I = function(e) {
        !function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && j(e, t)
        }(u, e);
        var t, n, r, o, i = (r = u,
        o = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }(),
        function() {
            var e, t = P(r);
            if (o) {
                var n = P(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else
                e = t.apply(this, arguments);
            return function(e, t) {
                if (t && ("object" === L(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, e)
        }
        );
        function u(e) {
            var t;
            return function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, u),
            (t = i.call(this, e))._cardName = t._popup.querySelector("#popup-name"),
            t._cardImage = t._popup.querySelector("#pupup__image"),
            t
        }
        return t = u,
        (n = [{
            key: "open",
            value: function(e, t) {
                this._cardImage.src = e,
                this._cardImage.alt = t,
                this._cardName.textContent = t,
                O(P(u.prototype), "open", this).call(this)
            }
        }]) && C(t.prototype, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        u
    }(E);
    function q(e) {
        return q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        q(e)
    }
    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, (void 0,
            o = function(e, t) {
                if ("object" !== q(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" !== q(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(r.key),
            "symbol" === q(o) ? o : String(o)), r)
        }
        var o
    }
    function B() {
        return B = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = A(e)); )
                    ;
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value
            }
        }
        ,
        B.apply(this, arguments)
    }
    function R(e, t) {
        return R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        R(e, t)
    }
    function A(e) {
        return A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        A(e)
    }
    var x = function(e) {
        !function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && R(e, t)
        }(u, e);
        var t, n, r, o, i = (r = u,
        o = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }(),
        function() {
            var e, t = A(r);
            if (o) {
                var n = A(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else
                e = t.apply(this, arguments);
            return function(e, t) {
                if (t && ("object" === q(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, e)
        }
        );
        function u(e, t) {
            var n;
            return function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, u),
            (n = i.call(this, e))._submitCallback = t,
            n._form = n._popup.querySelector(".popup__form"),
            n._inputList = Array.from(n._form.querySelectorAll(".popup__input")),
            n._buttonPopup = n._form.querySelector(".popup__button"),
            n
        }
        return t = u,
        (n = [{
            key: "_getInputValues",
            value: function() {
                var e = {};
                return this._inputList.forEach((function(t) {
                    e[t.name] = t.value
                }
                )),
                e
            }
        }, {
            key: "setEventListeners",
            value: function() {
                var e = this;
                B(A(u.prototype), "setEventListeners", this).call(this),
                this._form.addEventListener("submit", (function(t) {
                    t.preventDefault();
                    var n = e._getInputValues();
                    e._submitCallback(n)
                }
                ))
            }
        }, {
            key: "close",
            value: function() {
                this._form.reset(),
                B(A(u.prototype), "close", this).call(this)
            }
        }, {
            key: "renderLoading",
            value: function(e) {
                this._buttonPopup.innerText = e ? "Сохранение..." : "Сохранить"
            }
        }]) && T(t.prototype, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        u
    }(E);
    function D(e) {
        return D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        D(e)
    }
    function U(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, (void 0,
            o = function(e, t) {
                if ("object" !== D(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" !== D(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(r.key),
            "symbol" === D(o) ? o : String(o)), r)
        }
        var o
    }
    var V = function() {
        function e(t) {
            var n = t.nameSelector
              , r = t.infoSelector
              , o = t.profileAvatar;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this._nameSelector = document.querySelector(n),
            this._infoSelector = document.querySelector(r),
            this._profileAvatar = document.querySelector(o),
            this._profileId = "",
            this.avatar = avatar
        }
        var t, n;
        return t = e,
        (n = [{
            key: "getUserInfo",
            value: function() {
                return {
                    name: this._nameSelector.textContent,
                    info: this._infoSelector.textContent,
                    id: this._profileId,
                    avatar: this._profileAvatar.src
                }
            }
        }, {
            key: "setUserInfo",
            value: function(e, t, n) {
                this._nameSelector.textContent = e,
                this._infoSelector.textContent = t,
                this._profileId = n
            }
        }, {
            key: "setUserAvatar",
            value: function(e) {
                void 0 !== e && (this._profileAvatar.style.backgroundImage = "url('".concat(e, "')"))
            }
        }]) && U(t.prototype, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e
    }();
    function N(e) {
        return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        N(e)
    }
    function J(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, (void 0,
            o = function(e, t) {
                if ("object" !== N(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" !== N(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(r.key),
            "symbol" === N(o) ? o : String(o)), r)
        }
        var o
    }
    var G = function() {
        function e(t) {
            var n = t.url
              , r = t.headers;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this._url = n,
            this._headers = r
        }
        var t, n;
        return t = e,
        (n = [{
            key: "_sendRequest",
            value: function(e, t) {
                return fetch(e, t).then((function(e) {
                    if (e.ok)
                        return e.json();
                    throw new Error("Что-то пошло не так...")
                }
                )).catch((function(e) {
                    console.log(e)
                }
                ))
            }
        }, {
            key: "getAllCards",
            value: function() {
                return this._sendRequest("".concat(this._url, "/cards"), {
                    method: "GET",
                    headers: this._headers
                })
            }
        }, {
            key: "getInfoUser",
            value: function() {
                return this._sendRequest("".concat(this._url, "/users/me"), {
                    method: "GET",
                    headers: this._headers
                })
            }
        }, {
            key: "editProfile",
            value: function(e, t) {
                return this._sendRequest("".concat(this._url, "/users/me"), {
                    method: "PATCH",
                    headers: this._headers,
                    body: JSON.stringify({
                        name: e,
                        about: t
                    })
                })
            }
        }, {
            key: "newAvatar",
            value: function(e) {
                return this._sendRequest("".concat(this._url, "/users/me/avatar"), {
                    method: "PATCH",
                    headers: this._headers,
                    body: JSON.stringify({
                        avatar: e
                    })
                })
            }
        }, {
            key: "apiAddNewCard",
            value: function(e, t) {
                return this._sendRequest("".concat(this._url, "/cards"), {
                    method: "POST",
                    headers: this._headers,
                    body: JSON.stringify({
                        name: e,
                        link: t
                    })
                })
            }
        }, {
            key: "deleteCard",
            value: function(e) {
                return this._sendRequest("".concat(this._url, "/cards/").concat(e), {
                    method: "DELETE",
                    headers: this._headers
                })
            }
        }, {
            key: "likeCard",
            value: function(e) {
                return this._sendRequest("".concat(this._url, "/cards/").concat(e, "/likes"), {
                    method: "PUT",
                    headers: this._headers
                })
            }
        }, {
            key: "likeDelete",
            value: function(e) {
                return this._sendRequest("".concat(this._url, "/cards/").concat(e, "/likes"), {
                    method: "DELETE",
                    headers: this._headers
                })
            }
        }]) && J(t.prototype, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e
    }();
    function H(e) {
        return H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        H(e)
    }
    function M(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, (void 0,
            o = function(e, t) {
                if ("object" !== H(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" !== H(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(r.key),
            "symbol" === H(o) ? o : String(o)), r)
        }
        var o
    }
    function z() {
        return z = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = F(e)); )
                    ;
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value
            }
        }
        ,
        z.apply(this, arguments)
    }
    function $(e, t) {
        return $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        $(e, t)
    }
    function F(e) {
        return F = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        F(e)
    }
    var K = function(e) {
        !function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && $(e, t)
        }(u, e);
        var t, n, r, o, i = (r = u,
        o = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }(),
        function() {
            var e, t = F(r);
            if (o) {
                var n = F(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else
                e = t.apply(this, arguments);
            return function(e, t) {
                if (t && ("object" === H(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, e)
        }
        );
        function u(e, t) {
            var n;
            return function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, u),
            (n = i.call(this, e))._submitButton = n._popup.querySelector(".popup__submit-button"),
            n._handleButtonClick = t,
            n
        }
        return t = u,
        (n = [{
            key: "open",
            value: function(e) {
                this._card = e,
                z(F(u.prototype), "open", this).call(this)
            }
        }, {
            key: "setEventListeners",
            value: function() {
                var e = this;
                z(F(u.prototype), "setEventListeners", this).call(this),
                this._submitButton.addEventListener("click", (function(t) {
                    e._handleButtonClick(t, e._card)
                }
                ))
            }
        }]) && M(t.prototype, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        u
    }(E);
    function Q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    new i(u,y).enableValidation();
    var W = new i(u,d);
    W.enableValidation();
    var X = new i(u,h);
    X.enableValidation();
    var Y = new x("#newcard-popup",(function(e) {
        var t = e.name
          , n = e.link;
        Y.renderLoading(!0),
        ie.apiAddNewCard(t, n).then((function(e) {
            var t = Z(e.name, e.link, e.likes, e.owner._id, e._id);
            oe.addItem(t),
            Y.close()
        }
        )).catch((function(e) {
            console.log(e)
        }
        )).finally((function() {
            Y.renderLoading(!1)
        }
        ))
    }
    ));
    c.addEventListener("click", (function() {
        W.disableSubmitButton(),
        Y.open()
    }
    ));
    var Z = function(e, t, r, o, i) {
        var u = re.getUserInfo().id
          , a = new n({
            name: e,
            link: t,
            likes: r,
            owner: o,
            id: i,
            removeButtonClick: function(e) {
                ae.open(e)
            },
            userId: u,
            handleLikeIcon: function() {
                ae.open(e, t, r)
            },
            handleClickLike: function() {
                a._isLiked ? ie.likeDelete(a._id).then((function(e) {
                    a.setLikes(e.likes.length),
                    a.changeStatus()
                }
                )).catch((function(e) {
                    console.log(e)
                }
                )) : ie.likeCard(a._id).then((function(e) {
                    a.setLikes(e.likes.length),
                    a.changeStatus()
                }
                )).catch((function(e) {
                    console.log(e)
                }
                ))
            }
        },"#template-element",te);
        return a.getView(u, r)
    };
    Y.setEventListeners();
    var ee = new I("#image-popup");
    function te(e, t) {
        ee.open(e, t)
    }
    p.addEventListener("click", (function() {
        ee.close()
    }
    )),
    ee.setEventListeners();
    var ne = new x("#edit-popup",(function(e) {
        var t = e.name
          , n = e.description;
        ne.renderLoading(!0),
        ie.editProfile(t, n).then((function() {
            re.setUserInfo(t, n),
            ne.close()
        }
        )).catch((function(e) {
            console.log(e)
        }
        )).finally((function() {
            ne.renderLoading(!1)
        }
        ))
    }
    ));
    s.addEventListener("click", (function() {
        ne.close()
    }
    )),
    a.addEventListener("click", (function() {
        var e = re.getUserInfo();
        v.value = e.name,
        m.value = e.info,
        ne.open()
    }
    ));
    var re = new V({
        nameSelector: ".profile__name",
        infoSelector: ".profile__profession",
        profileAvatar: ".profile__avatar"
    });
    ne.setEventListeners();
    var oe = new S({
        items: [],
        renderer: Z
    },".elements")
      , ie = new G({
        url: "https://mesto.nomoreparties.co/v1/cohort-75",
        headers: {
            authorization: "9e1ba490-d05f-4831-95ed-e11f8659a9e1",
            "Content-Type": "application/json"
        }
    });
    Promise.all([ie.getInfoUser(), ie.getAllCards()]).then((function(e) {
        var t, n, r = (n = 2,
        function(e) {
            if (Array.isArray(e))
                return e
        }(t = e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i, u, a = [], c = !0, l = !1;
                try {
                    if (i = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        c = !1
                    } else
                        for (; !(c = (r = i.call(n)).done) && (a.push(r.value),
                        a.length !== t); c = !0)
                            ;
                } catch (e) {
                    l = !0,
                    o = e
                } finally {
                    try {
                        if (!c && null != n.return && (u = n.return(),
                        Object(u) !== u))
                            return
                    } finally {
                        if (l)
                            throw o
                    }
                }
                return a
            }
        }(t, n) || function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return Q(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Q(e, t) : void 0
            }
        }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()), o = r[0], i = r[1];
        re.setUserInfo(o.name, o.about, o._id),
        re.setUserAvatar(o.avatar),
        i.reverse().forEach((function(e) {
            var t = Z(e.name, e.link, e.likes, e.owner._id, e._id, o._id);
            oe.addItem(t)
        }
        )),
        oe.renderItems()
    }
    )).catch((function(e) {
        console.log(e)
    }
    )),
    l.addEventListener("click", (function() {
        X.disableSubmitButton(),
        re.getUserInfo(),
        ue.open()
    }
    ));
    var ue = new x("#avatar-popup",(function(e) {
        var t = e["link-avatar"];
        ue.renderLoading(!0),
        ie.newAvatar(t).then((function(e) {
            re.setUserAvatar(e.avatar),
            ue.close()
        }
        )).catch((function(e) {
            console.log(e)
        }
        )).finally((function() {
            ue.renderLoading(!1)
        }
        ))
    }
    ));
    f.addEventListener("click", (function() {
        ue.close()
    }
    )),
    ue.setEventListeners();
    var ae = new K("#deletecard-popup",(function(e, t) {
        e.preventDefault(),
        ie.deleteCard(t._id).then((function() {
            ae.close()
        }
        )).catch((function(e) {
            console.log(e)
        }
        ))
    }
    ));
    ae.setEventListeners(),
    _.addEventListener("click", (function() {
        ue.open()
    }
    ))
}
)();
