typeof ShopifyAPI == "undefined" && (ShopifyAPI = {});
function attributeToString(attribute) {
  return (
    typeof attribute != "string" &&
      ((attribute += ""), attribute === "undefined" && (attribute = "")),
    jQuery.trim(attribute)
  );
}
(ShopifyAPI.onCartUpdate = function (cart) {}),
  (ShopifyAPI.updateCartNote = function (note, callback) {
    var $body2 = $(document.body),
      params = {
        type: "POST",
        url: theme.routes.cartUrl + "/update.js",
        data: "note=" + attributeToString(note),
        dataType: "json",
        beforeSend: function () {
          $body2.trigger("beforeUpdateCartNote.ajaxCart", note);
        },
        success: function (cart) {
          typeof callback == "function"
            ? callback(cart)
            : ShopifyAPI.onCartUpdate(cart),
            $body2.trigger("afterUpdateCartNote.ajaxCart", [note, cart]);
        },
        error: function (XMLHttpRequest2, textStatus2) {
          $body2.trigger("errorUpdateCartNote.ajaxCart", [
            XMLHttpRequest2,
            textStatus2,
          ]),
            ShopifyAPI.onError(XMLHttpRequest2, textStatus2);
        },
        complete: function (jqxhr, text) {
          $body2.trigger("completeUpdateCartNote.ajaxCart", [
            this,
            jqxhr,
            text,
          ]);
        },
      };
    jQuery.ajax(params);
  }),
  (ShopifyAPI.onError = function (XMLHttpRequest, textStatus) {
    var data = eval("(" + XMLHttpRequest.responseText + ")");
    data.message &&
      alert(data.message + "(" + data.status + "): " + data.description);
  }),
  (ShopifyAPI.addItemFromForm = function (form2, callback, errorCallback) {
    var $body2 = $(document.body),
      params = {
        type: "POST",
        url: theme.routes.cartAddUrl + ".js",
        data: jQuery(form2).serialize(),
        dataType: "json",
        beforeSend: function (jqxhr, settings2) {
          $body2.trigger("beforeAddItem.ajaxCart", form2);
        },
        success: function (line_item) {
          typeof callback == "function"
            ? callback(line_item, form2)
            : ShopifyAPI.onItemAdded(line_item, form2),
            $body2.trigger("afterAddItem.ajaxCart", [line_item, form2]);
        },
        error: function (XMLHttpRequest2, textStatus2) {
          typeof errorCallback == "function"
            ? errorCallback(XMLHttpRequest2, textStatus2, form2)
            : ShopifyAPI.onError(XMLHttpRequest2, textStatus2),
            $body2.trigger("errorAddItem.ajaxCart", [
              XMLHttpRequest2,
              textStatus2,
            ]);
        },
        complete: function (jqxhr, text) {
          $body2.trigger("completeAddItem.ajaxCart", [this, jqxhr, text]);
        },
      };
    jQuery.ajax(params);
  }),
  (ShopifyAPI.getCart = function (callback) {
    $(document.body).trigger("beforeGetCart.ajaxCart"),
      jQuery.getJSON(
        theme.routes.cartUrl + ".js",
        function (cart, textStatus2) {
          typeof callback == "function"
            ? callback(cart)
            : ShopifyAPI.onCartUpdate(cart),
            $(document.body).trigger("afterGetCart.ajaxCart", cart);
        }
      );
  }),
  (ShopifyAPI.changeItem = function (line, quantity, callback) {
    var $body2 = $(document.body),
      params = {
        type: "POST",
        url: theme.routes.cartChangeUrl + ".js",
        data: "quantity=" + quantity + "&line=" + line,
        dataType: "json",
        beforeSend: function () {
          $body2.trigger("beforeChangeItem.ajaxCart", [line, quantity]);
        },
        success: function (cart) {
          typeof callback == "function"
            ? callback(cart)
            : ShopifyAPI.onCartUpdate(cart),
            $body2.trigger("afterChangeItem.ajaxCart", [line, quantity, cart]);
        },
        error: function (XMLHttpRequest2, textStatus2) {
          $body2.trigger("errorChangeItem.ajaxCart", [
            XMLHttpRequest2,
            textStatus2,
          ]),
            ShopifyAPI.onError(XMLHttpRequest2, textStatus2);
        },
        complete: function (jqxhr, text) {
          $body2.trigger("completeChangeItem.ajaxCart", [this, jqxhr, text]);
        },
      };
    jQuery.ajax(params);
  });
var ajaxCart = (function (module, $) {
  "use strict";
  var init,
    loadCart,
    settings,
    isUpdating,
    $body,
    $formContainer,
    $addToCart,
    $cartCountSelector,
    $cartCostSelector,
    $cartContainer,
    $drawerContainer,
    $emptySelector,
    $triggerSelector,
    updateCountPrice,
    formOverride,
    itemAddedCallback,
    itemErrorCallback,
    cartUpdateCallback,
    buildCart,
    cartCallback,
    adjustCart,
    adjustCartCallback,
    createQtySelectors,
    qtySelectors,
    validateQty;
  (init = function (options) {
    (settings = {
      sourceId: "#CartTemplate",
      formSelector: 'form[action^="/cart/add"]',
      cartContainer: "#CartContainer",
      addToCartSelector: 'input[type="submit"]',
      cartCountSelector: null,
      cartCostSelector: null,
      triggerSelector: null,
      emptySelector: null,
      moneyFormat: "$",
      disableAjaxCart: !1,
      enableQtySelectors: !0,
    }),
      $.extend(settings, options),
      ($formContainer = $(settings.formSelector)),
      ($cartContainer = $(settings.cartContainer)),
      ($addToCart = $formContainer.find(settings.addToCartSelector)),
      ($cartCountSelector = $(settings.cartCountSelector)),
      ($cartCostSelector = $(settings.cartCostSelector)),
      ($emptySelector = $(settings.emptySelector)),
      ($triggerSelector = $(settings.triggerSelector)),
      ($body = $(document.body)),
      (isUpdating = !1),
      settings.enableQtySelectors && qtySelectors(),
      !settings.disableAjaxCart && $addToCart.length && formOverride(),
      adjustCart();
  }),
    (loadCart = function () {
      $body.addClass("drawer--is-loading"),
        ShopifyAPI.getCart(cartUpdateCallback);
    }),
    (updateCountPrice = function (cart) {
      $cartCountSelector &&
        ($cartCountSelector.html(cart.item_count).removeClass("hidden-count"),
        cart.item_count === 0 && $cartCountSelector.addClass("hidden-count")),
        $cartCostSelector &&
          $cartCostSelector.html(
            Shopify.formatMoney(cart.total_price, settings.moneyFormat)
          );
    }),
    (formOverride = function () {
      $formContainer.on("submit", function (evt) {
        evt.preventDefault();
        var thisAddToCart = $(this).find(settings.addToCartSelector);
        thisAddToCart.removeClass("is-added").addClass("is-adding"),
          $(".qty-error").remove(),
          ShopifyAPI.addItemFromForm(
            evt.target,
            itemAddedCallback,
            itemErrorCallback
          );
      });
    });
  var thisProduct = {};
  return (
    (itemAddedCallback = function (product, form2) {
      var thisAddToCart = $(form2).find(settings.addToCartSelector);
      thisAddToCart.removeClass("is-adding").addClass("is-added"),
        (thisProduct = product),
        ShopifyAPI.getCart(cartUpdateCallback);
    }),
    (itemErrorCallback = function (XMLHttpRequest, textStatus, form) {
      var data = eval("(" + XMLHttpRequest.responseText + ")");
      $addToCart.removeClass("is-adding is-added"),
        data.message &&
          data.status == 422 &&
          $(form).after(
            '<div class="errors qty-error">' + data.description + "</div>"
          );
    }),
    (cartUpdateCallback = function (cart) {
      updateCountPrice(cart), buildCart(cart);
    }),
    (buildCart = function (cart) {
      if (($cartContainer.empty(), cart.item_count === 0)) {
        $(settings.emptySelector).show(),
          $(settings.triggerSelector).removeClass("js-cart-full"),
          cartCallback(cart);
        return;
      } else
        $(settings.emptySelector).hide(),
          $(settings.triggerSelector).addClass("js-cart-full");
      var items = [],
        item = {},
        thisItem = thisProduct,
        data2 = {},
        source = $(settings.sourceId).html(),
        template = Handlebars.compile(source);
      if (
        ($.each(cart.items, function (index, cartItem) {
          if (cartItem.image != null)
            var prodImg = cartItem.image
              .replace(/(\.[^.]*)$/, "_240x240_crop_center$1")
              .replace("http:", "");
          else var prodImg = null;
          var selling_plan_name2 = cartItem.selling_plan_allocation
            ? cartItem.selling_plan_allocation.selling_plan.name
            : null;
          selling_plan_name2
            ? (selling_plan_name2 = selling_plan_name2)
            : (selling_plan_name2 = null);
          var unitPriceExists2;
          if (typeof cartItem.unit_price != "undefined") {
            unitPriceExists2 = !0;
            var unitPrice2 = cartItem.unit_price,
              unitReferenceValue2 =
                cartItem.unit_price_measurement.reference_value,
              unitReferenceUnit2 =
                cartItem.unit_price_measurement.reference_unit;
          } else unitPriceExists2 = !1;
          (item = {
            key: cartItem.key,
            line: index + 1,
            url: cartItem.url,
            img: prodImg,
            name: cartItem.product_title,
            variation: cartItem.variant_title,
            properties: cartItem.properties,
            sellingPlan: selling_plan_name2,
            itemAdd: cartItem.quantity + 1,
            itemMinus: cartItem.quantity - 1,
            itemQty: cartItem.quantity,
            price: Shopify.formatMoney(cartItem.price, settings.moneyFormat),
            originalPrice: Shopify.formatMoney(
              cartItem.original_price,
              settings.moneyFormat
            ),
            vendor: cartItem.vendor,
            linePrice: Shopify.formatMoney(
              cartItem.final_line_price,
              settings.moneyFormat
            ),
            originalLinePrice: Shopify.formatMoney(
              cartItem.original_line_price,
              settings.moneyFormat
            ),
            unitPriceExists: unitPriceExists2,
            unitPrice: Shopify.formatMoney(unitPrice2, settings.moneyFormat),
            unitReferenceValue: unitReferenceValue2,
            unitReferenceUnit: unitReferenceUnit2,
            lineDiscount: cartItem.line_level_discount_allocations.length,
            lineDiscounts: cartItem.line_level_discount_allocations.map(
              function (obj) {
                return Object.keys(obj).reduce(function (acc, key) {
                  return (
                    key === "amount"
                      ? (acc[key] = Shopify.formatMoney(
                          obj[key],
                          settings.moneyFormat
                        ))
                      : (acc[key] = obj[key]),
                    acc
                  );
                }, {});
              }
            ),
            lineDiscountedPrice: Shopify.formatMoney(
              cartItem.final_line_price,
              settings.moneyFormat
            ),
            discounts: cartItem.discounts,
            discountPrice: Shopify.formatMoney(
              cartItem.original_price - cartItem.discounted_price,
              settings.moneyFormat
            ),
            discountsApplied:
              cartItem.line_price !== cartItem.original_line_price,
            discountedPrice: Shopify.formatMoney(
              cartItem.discounted_price,
              settings.moneyFormat
            ),
          }),
            items.push(item);
        }),
        typeof thisItem.product_title != "undefined")
      ) {
        var thisImg;
        thisItem.image != null
          ? (thisImg = thisItem.image
              .replace(/(\.[^.]*)$/, "_240x240_crop_center$1")
              .replace("http:", ""))
          : (thisImg = null);
        var selling_plan_name = thisItem.selling_plan_allocation
          ? thisItem.selling_plan_allocation.selling_plan.name
          : null;
        selling_plan_name
          ? (selling_plan_name = selling_plan_name)
          : (selling_plan_name = null);
        var unitPriceExists;
        if (typeof thisItem.unit_price != "undefined") {
          unitPriceExists = !0;
          var unitPrice = thisItem.unit_price,
            unitReferenceValue =
              thisItem.unit_price_measurement.reference_value,
            unitReferenceUnit = thisItem.unit_price_measurement.reference_unit;
        } else unitPriceExists = !1;
        thisItem = {
          img: thisImg,
          name: thisItem.product_title,
          qty: thisItem.quantity,
          url: thisItem.url,
          variation: thisItem.variant_title,
          sellingPlan: selling_plan_name,
          vendor: thisItem.vendor,
          price: Shopify.formatMoney(thisItem.price, settings.moneyFormat),
          originalPrice: Shopify.formatMoney(
            thisItem.original_price,
            settings.moneyFormat
          ),
          unitPriceExists: unitPriceExists,
          unitPrice: Shopify.formatMoney(unitPrice, settings.moneyFormat),
          unitReferenceValue: unitReferenceValue,
          unitReferenceUnit: unitReferenceUnit,
        };
      }
      (data2 = {
        items: items,
        thisItem: thisItem,
        note: cart.note,
        totalPrice: Shopify.formatMoney(cart.total_price, settings.moneyFormat),
        cartDiscount: cart.cart_level_discount_applications.length,
        cartDiscounts: cart.cart_level_discount_applications.map(function (
          obj
        ) {
          return Object.keys(obj).reduce(function (acc, key) {
            return (
              key === "total_allocated_amount"
                ? (acc[key] = Shopify.formatMoney(
                    obj[key],
                    settings.moneyFormat
                  ))
                : (acc[key] = obj[key]),
              acc
            );
          }, {});
        }),
        totalCartDiscount:
          cart.total_discount === 0
            ? 0
            : "You're saving [savings]".replace(
                "[savings]",
                Shopify.formatMoney(cart.total_discount, settings.moneyFormat)
              ),
        totalCartDiscountApplied: cart.total_discount !== 0,
      }),
        $cartContainer.append(template(data2)),
        cartCallback(cart);
    }),
    (cartCallback = function (cart) {
      $body.removeClass("drawer--is-loading"),
        $body.trigger("afterCartLoad.ajaxCart", cart),
        window.Shopify &&
          Shopify.StorefrontExpressButtons &&
          Shopify.StorefrontExpressButtons.initialize();
    }),
    (adjustCart = function () {
      $body.on("click", ".ajaxcart__qty-adjust", function () {
        if (!isUpdating) {
          var $el = $(this),
            line = $el.data("line"),
            $qtySelector = $el.siblings(".ajaxcart__qty-num"),
            qty = parseInt($qtySelector.val().replace(/\D/g, "")),
            qty = validateQty(qty);
          $el.hasClass("ajaxcart__qty--plus")
            ? (qty += 1)
            : ((qty -= 1), qty <= 0 && (qty = 0)),
            line ? updateQuantity(line, qty) : $qtySelector.val(qty);
        }
      }),
        $body.on("change", ".ajaxcart__qty-num", function () {
          if (!isUpdating) {
            var $el = $(this),
              line = $el.data("line"),
              qty = parseInt($el.val().replace(/\D/g, "")),
              qty = validateQty(qty);
            line && updateQuantity(line, qty);
          }
        }),
        $body.on("submit", "form.ajaxcart", function (evt) {
          isUpdating && evt.preventDefault();
        }),
        $body.on("focus", ".ajaxcart__qty-adjust", function () {
          var $el = $(this);
          setTimeout(function () {
            $el.select();
          }, 50);
        });
      function updateQuantity(line, qty) {
        isUpdating = !0;
        var $row = $('.ajaxcart__row[data-line="' + line + '"]').addClass(
          "is-loading"
        );
        qty === 0 && $row.parent().addClass("is-removed"),
          setTimeout(function () {
            ShopifyAPI.changeItem(line, qty, adjustCartCallback);
          }, 250);
      }
      $body.on("change", 'textarea[name="note"]', function () {
        var newNote = $(this).val();
        ShopifyAPI.updateCartNote(newNote, function (cart) {});
      });
    }),
    (adjustCartCallback = function (cart) {
      updateCountPrice(cart),
        setTimeout(function () {
          (isUpdating = !1), ShopifyAPI.getCart(buildCart);
        }, 150);
    }),
    (createQtySelectors = function () {
      $('input[type="number"].js-qty-input', $cartContainer).length &&
        $('input[type="number"].js-qty-input', $cartContainer).each(
          function () {
            var $el = $(this),
              currentQty = $el.val(),
              itemAdd = currentQty + 1,
              itemMinus = currentQty - 1,
              itemQty = currentQty,
              source = $("#AjaxQty").html(),
              template = Handlebars.compile(source),
              data2 = {
                key: $el.data("id"),
                itemQty: itemQty,
                itemAdd: itemAdd,
                itemMinus: itemMinus,
              };
            $el.after(template(data2)).remove();
          }
        );
    }),
    (qtySelectors = function () {
      var numInputs = $('input[type="number"].js-qty-input');
      numInputs.length &&
        (numInputs.each(function () {
          var $el = $(this),
            currentQty = $el.val(),
            inputName = $el.attr("name"),
            inputId = $el.attr("id"),
            itemAdd = currentQty + 1,
            itemMinus = currentQty - 1,
            itemQty = currentQty,
            source = $("#JsQty").html(),
            template = Handlebars.compile(source),
            data2 = {
              key: $el.data("id"),
              itemQty: itemQty,
              itemAdd: itemAdd,
              itemMinus: itemMinus,
              inputName: inputName,
              inputId: inputId,
            };
          $el.after(template(data2)).remove();
        }),
        $(".js-qty__adjust").on("click", function () {
          var $el = $(this),
            id = $el.data("id"),
            $qtySelector = $el.siblings(".js-qty__num"),
            qty = parseInt($qtySelector.val().replace(/\D/g, "")),
            qty = validateQty(qty);
          $el.hasClass("js-qty__adjust--plus")
            ? (qty += 1)
            : ((qty -= 1), qty <= 1 && (qty = 1)),
            $qtySelector.val(qty);
        }));
    }),
    (validateQty = function (qty) {
      return (
        (parseFloat(qty) == parseInt(qty) && !isNaN(qty)) || (qty = 1), qty
      );
    }),
    (module = { init: init, load: loadCart }),
    module
  );
})(ajaxCart || {}, jQuery);
//# sourceMappingURL=/cdn/shop/t/33/assets/ajax-cart.js.map?v=51580153416589594931637309604
