(function () {
  if (typeof window.CustomEvent == "function") return !1;
  function CustomEvent2(event, params) {
    params = params || { bubbles: !1, cancelable: !1, detail: void 0 };
    var evt = document.createEvent("CustomEvent");
    return (
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      ),
      evt
    );
  }
  (CustomEvent2.prototype = window.Event.prototype),
    (window.CustomEvent = CustomEvent2);
})(),
  typeof theme > "u" && (theme = {});
var html = $("html"),
  body = $("body"),
  winWidth = $(window).width(),
  winHeight = $(window).height();
(theme.mobileBrkp = 768), (theme.tabletBrkp = 981);
function generateFireOnViewObserver(callback, threshold) {
  return (
    typeof threshold === void 0 && (threshold = [0.1]),
    window.IntersectionObserver
      ? new IntersectionObserver(
          function (elements, observer) {
            elements.forEach(function (element) {
              element.isIntersecting &&
                (callback(element.target), observer.unobserve(element.target));
            });
          },
          { threshold }
        )
      : null
  );
}
(theme.LibraryLoader = (function () {
  var types = { link: "link", script: "script" },
    status = { requested: "requested", loaded: "loaded" },
    cloudCdn = "https://cdn.shopify.com/shopifycloud/",
    libraries = {
      youtubeSdk: {
        tagId: "youtube-sdk",
        src: "https://www.youtube.com/iframe_api",
        type: types.script,
      },
      plyr: { tagId: "plyr", src: theme.assets.plyr, type: types.script },
      plyrShopify: {
        tagId: "plyr-shopify",
        src: cloudCdn + "shopify-plyr/v1.0/shopify-plyr-legacy.en.js",
        type: types.script,
      },
      plyrShopifyStyles: {
        tagId: "plyr-shopify-styles",
        src: cloudCdn + "shopify-plyr/v1.0/shopify-plyr.css",
        type: types.link,
      },
      shopifyXr: {
        tagId: "shopify-model-viewer-xr",
        src: cloudCdn + "shopify-xr-js/assets/v1.0/shopify-xr.en.js",
        type: types.script,
      },
      modelViewerUi: {
        tagId: "shopify-model-viewer-ui",
        src: cloudCdn + "model-viewer-ui/assets/v1.0/model-viewer-ui.en.js",
        type: types.script,
      },
      modelViewerUiStyles: {
        tagId: "shopify-model-viewer-ui-styles",
        src: cloudCdn + "model-viewer-ui/assets/v1.0/model-viewer-ui.css",
        type: types.link,
      },
      masonry: {
        tagId: "masonry",
        src: theme.assets.masonry,
        type: types.script,
      },
      photoswipe: {
        tagId: "photoswipe",
        src: theme.assets.photoswipe,
        type: types.script,
      },
      fecha: { tagId: "fecha", src: theme.assets.fecha, type: types.script },
      gmaps: {
        tagId: "gmaps",
        src:
          "https://maps.googleapis.com/maps/api/js?key=" + theme.map.key || "",
        type: types.script,
      },
      gmapsSettings: {
        tagId: "gmapsSettings",
        src: theme.map_settings_url,
        type: types.script,
      },
    };
  function load(libraryName, callback, key) {
    var library = libraries[libraryName];
    if (library && library.status !== status.requested) {
      if (
        ((callback = callback || function () {}),
        library.status === status.loaded)
      ) {
        callback();
        return;
      }
      library.status = status.requested;
      var tag;
      switch (library.type) {
        case types.script:
          tag = createScriptTag(library, callback);
          break;
        case types.link:
          tag = createLinkTag(library, callback);
          break;
      }
      (tag.id = library.tagId), (library.element = tag);
      var firstScriptTag = document.getElementsByTagName(library.type)[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
  function createScriptTag(library, callback) {
    var tag = document.createElement("script");
    return (
      (tag.src = library.src),
      tag.addEventListener("load", function () {
        (library.status = status.loaded), callback();
      }),
      tag
    );
  }
  function createLinkTag(library, callback) {
    var tag = document.createElement("link");
    return (
      (tag.href = library.src),
      (tag.rel = "stylesheet"),
      (tag.type = "text/css"),
      tag.addEventListener("load", function () {
        (library.status = status.loaded), callback();
      }),
      tag
    );
  }
  return { load };
})()),
  (theme.StoreAvailability = function () {
    var selectors = {
      storeAvailabilityContainer: "[data-store-availability-container]",
      storeAvailabilityModalProductTitle:
        "[data-store-availability-modal-product-title]",
      storeAvailabilityModalVariantTitle:
        "[data-store-availability-modal-variant-title]",
    };
    StoreAvailabilityInit = (function () {
      function StoreAvailability(container) {
        this.container = container;
      }
      return (
        (StoreAvailability.prototype = Object.assign(
          {},
          StoreAvailability.prototype,
          {
            updateContent: function (variantId, productTitle) {
              var variantSectionUrl =
                theme.routes.rootUrlSlash +
                "variants/" +
                variantId +
                "/?section_id=store-availability";
              this.container.innerHTML = "";
              var self = this;
              fetch(variantSectionUrl)
                .then(function (response) {
                  return response.text();
                })
                .then(function (storeAvailabilityHTML) {
                  storeAvailabilityHTML.trim() !== "" &&
                    ($(".product-single__store-availability-container").html(
                      storeAvailabilityHTML
                    ),
                    $(".product-single__store-availability-container").html(
                      $(".product-single__store-availability-container")
                        .children()
                        .html()
                    ),
                    self._updateProductTitle(productTitle));
                });
            },
            _updateProductTitle: function (productTitle) {
              var storeAvailabilityModalProductTitle = $(this.container).find(
                selectors.storeAvailabilityModalProductTitle
              );
              storeAvailabilityModalProductTitle.text(productTitle);
            },
          }
        )),
        StoreAvailability
      );
    })();
    var storeAvailability;
    $(".js-product-single-actions").find(selectors.storeAvailabilityContainer)
      .length &&
      (storeAvailability = new StoreAvailabilityInit(
        selectors.storeAvailabilityContainer
      )),
      storeAvailability &&
        document.addEventListener("venue:variant:update", function (event) {
          event.detail.variant !== null
            ? ($(selectors.storeAvailabilityContainer).show(),
              storeAvailability.updateContent(
                event.detail.variant.id,
                event.detail.product.title
              ))
            : $(selectors.storeAvailabilityContainer).hide();
        });
  }),
  (theme.runMap = function (mapElementId) {
    var thisMap = $("#" + mapElementId),
      thisMapId = thisMap.data("map-id"),
      thisMapSection = thisMap.data("map-section"),
      thisMapAddress = thisMap.data("map-address"),
      thisMapStyle = thisMap.data("map-style"),
      thisMapPin = thisMap.data("map-pin");
    function mapInit(mapId, mapSection, mapAddress, mapStyle, mapPin) {
      var geocoder, map;
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(1, 1),
        myOptions = {
          zoom: 14,
          zoomControl: !0,
          center: latlng,
          disableDefaultUI: !0,
          scrollwheel: !1,
          keyboardShortcuts: !1,
          styles: window.mapStyles[mapStyle],
        };
      (map = new google.maps.Map(document.getElementById(mapId), myOptions)),
        geocoder &&
          geocoder.geocode({ address: mapAddress }, function (results, status) {
            if (
              status == google.maps.GeocoderStatus.OK &&
              status != google.maps.GeocoderStatus.ZERO_RESULTS
            ) {
              map.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map,
                icon: window[mapPin],
              });
            }
          });
    }
    mapInit(
      thisMapId,
      thisMapSection,
      thisMapAddress,
      thisMapStyle,
      thisMapPin
    );
  }),
  (theme.homeMapsInitiate = function (mapContainerElement) {
    $(mapContainerElement).find(".js-map-info").hide(),
      $(mapContainerElement)
        .find(".js-map-info")
        .first()
        .addClass("js-active")
        .show(),
      $(mapContainerElement)
        .find(".js-map-trigger")
        .first()
        .addClass("js-active");
    function eachMapInit(mapContainer) {
      $(mapContainer).find(".js-map-replace").appendAround(),
        $(mapContainer)
          .find(".js-map-ids")
          .each(function () {
            var thisMapId = $(this).data("map-id");
            theme.runMap(thisMapId);
          });
    }
    function triggerMapsInitiate(mapsContainer) {
      theme.map.key
        ? theme.LibraryLoader.load("gmaps", function () {
            theme.LibraryLoader.load("gmapsSettings", function () {
              eachMapInit(mapsContainer);
            });
          })
        : eachMapInit(mapsContainer);
    }
    triggerMapsInitiate(mapContainerElement);
  }),
  (theme.homeMaps = function () {
    function mapTrigger() {
      $(document).on("click", ".js-map-trigger", function () {
        var thisItemId = $(this).attr("href"),
          $thisItem = $(thisItemId),
          $theseItems = $thisItem.parents(".js-map").find(".js-map-info"),
          trigger = $(".js-map-trigger"),
          activeClass = "js-active";
        if (
          ($thisItem.hasClass(activeClass) ||
            ($theseItems.removeClass(activeClass).slideUp(),
            $thisItem.addClass(activeClass).slideDown()),
          $(this)
            .parents(".js-map")
            .find(".js-map-media")
            .removeClass(activeClass),
          $('.js-map-media[data-map-id="' + thisItemId + '"]').addClass(
            activeClass
          ),
          $thisItem.find(".home-map__media-canvas").length)
        ) {
          var thisMapId = $thisItem.find(".home-map__media-canvas").attr("id");
          typeof thisMapId < "u" && theme.runMap(thisMapId);
        }
        return (
          $(this).hasClass(activeClass) ||
            (trigger.removeClass(activeClass), $(this).addClass(activeClass)),
          !1
        );
      });
    }
    mapTrigger();
    var homeMapsObserver = generateFireOnViewObserver(theme.homeMapsInitiate),
      $mapsContainers = $(".js-map");
    $mapsContainers.length > 0 &&
      (homeMapsObserver
        ? $mapsContainers.each(function () {
            homeMapsObserver.observe(this);
          })
        : theme.LibraryLoader.load("gmaps", function () {
            theme.LibraryLoader.load("gmapsSettings", function () {
              $mapsContainers.each(function () {
                theme.homeMapsInitiate(this);
              });
            });
          }));
  }),
  (theme.layoutSliderUpdate = function (sliderElement) {
    var thisSlider = $(sliderElement);
    function addClassToSlide() {
      thisSlider.find(".slick-current").addClass("js-slide-seen");
    }
    (winWidth = $(window).width()),
      winWidth < theme.mobileBrkp
        ? (thisSlider.removeClass("layout-slider--loading"),
          thisSlider
            .not(".slick-initialized")
            .slick({
              slidesToShow: 1,
              infinite: !1,
              dots: !0,
              arrows: !1,
              centerMode: !0,
              centerPadding: "30px",
            }),
          thisSlider.on("afterChange", addClassToSlide))
        : thisSlider.hasClass("slick-initialized") &&
          (thisSlider.slick("unslick"),
          thisSlider.off("afterChange", addClassToSlide));
  }),
  (theme.layoutSliderInit = function (sliderElement) {
    function updateOnResize() {
      theme.layoutSliderUpdate(sliderElement);
    }
    theme.layoutSliderUpdate(sliderElement),
      $(window).on("resize", updateOnResize);
  }),
  (theme.layoutSlider = function (sliderClass) {
    if (sliderClass) {
      var $sliderElements = $(sliderClass),
        layoutSliderObserver = generateFireOnViewObserver(
          theme.layoutSliderInit
        );
      $sliderElements.each(function () {
        layoutSliderObserver && !Shopify.designMode
          ? layoutSliderObserver.observe(this)
          : theme.layoutSliderInit(this);
      });
    }
  }),
  (theme.productCollSwatch = function () {
    function createSrcsetString(
      srcSetWidths,
      url,
      originalWidth,
      originalHeight
    ) {
      if (!srcSetWidths || !url || !originalWidth || !originalHeight) return;
      const aspectRatio =
        parseInt(originalHeight, 10) / parseInt(originalWidth, 10);
      return srcSetWidths.reduce(function (srcSetString, srcSetWidth) {
        var sizeHeight = Math.floor(srcSetWidth * aspectRatio);
        return (
          (srcSetString =
            srcSetString +
            url.replace("{width}", srcSetWidth) +
            " " +
            srcSetWidth +
            "w " +
            sizeHeight +
            "h,"),
          srcSetString
        );
      }, "");
    }
    $(".product-card__swatch__item").on("click", function () {
      var currentProduct = $(this).parents(".js-product"),
        currentProductImage = currentProduct.find(".product-card__img"),
        variantProductImage = $(this).data("variant-image"),
        variantProductImageWidth = $(this).data("variant-image-width"),
        variantProductImageHeight = $(this).data("variant-image-height"),
        variantUrl = $(this).data("variant-url"),
        newSrc = variantProductImage.replace("{width}", "300"),
        newSrcset = createSrcsetString(
          [180, 360, 540, 720, 900, 1080, 1296, 1512],
          variantProductImage,
          variantProductImageWidth,
          variantProductImageHeight
        );
      return (
        currentProductImage.attr("src", newSrc),
        currentProductImage.attr("width", "300"),
        currentProductImage.attr(
          "height",
          Math.floor(
            300 *
              (parseInt(variantProductImageHeight, 10) /
                parseInt(variantProductImageWidth, 10))
          )
        ),
        currentProductImage.attr("srcset", newSrcset),
        currentProduct.find(".js-product-link").attr("href", variantUrl),
        currentProduct.find(".js-product-swatch-item").removeClass("js-active"),
        $(this).addClass("js-active"),
        !1
      );
    });
  });
function onYouTubeIframeAPIReady() {
  theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
}
(theme.ProductVideo = (function () {
  var productCarousel = $(".js-product-slider"),
    videos = {},
    hosts = { html5: "html5", youtube: "youtube" },
    selectors = { productMediaWrapper: "[data-product-media-wrapper]" },
    attributes = {
      enableVideoLooping: "enable-video-looping",
      videoId: "video-id",
    };
  function init(videoContainer, sectionId) {
    if (videoContainer.length) {
      var videoElement = videoContainer.find("iframe, video")[0],
        mediaId = videoContainer.data("mediaId");
      if (videoElement) {
        videos[mediaId] = {
          mediaId,
          sectionId,
          host: hostFromVideoElement(videoElement),
          container: videoContainer,
          element: videoElement,
          ready: function () {
            createPlayer(this);
          },
        };
        var video = videos[mediaId];
        switch (video.host) {
          case hosts.html5:
            theme.LibraryLoader.load(
              "plyrShopify",
              loadVideos.bind(this, hosts.html5)
            ),
              theme.LibraryLoader.load("plyrShopifyStyles");
            break;
          case hosts.youtube:
            theme.LibraryLoader.load("youtubeSdk");
            break;
        }
      }
    }
  }
  function createPlayer(video) {
    if (!video.player) {
      var productMediaWrapper = video.container.closest(
          selectors.productMediaWrapper
        ),
        enableLooping = productMediaWrapper.data(attributes.enableVideoLooping);
      switch (video.host) {
        case hosts.html5:
          video.player = new Shopify.Plyr(video.element, {
            controls: [
              "play",
              "progress",
              "mute",
              "volume",
              "play-large",
              "fullscreen",
            ],
            youtube: { noCookie: !0 },
            loop: { active: enableLooping },
            hideControlsOnPause: !0,
            iconUrl:
              "//cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.svg",
            tooltips: { controls: !1, seek: !0 },
          });
          break;
        case hosts.youtube:
          var videoId = productMediaWrapper.data(attributes.videoId);
          video.player = new YT.Player(video.element, {
            videoId,
            events: {
              onStateChange: function (event) {
                event.data === 0 && enableLooping && event.target.seekTo(0);
              },
            },
          });
          break;
      }
      productCarousel.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          var thisSectionId = $(this).parents(".section").data("section-id");
          thisSectionId == video.sectionId &&
            video.container.data("slide-id") == nextSlide &&
            document.documentElement.classList.contains("no-touchevents") &&
            nextSlide !== currentSlide &&
            setTimeout(function () {
              video.host === hosts.html5 && video.player.play(),
                video.host === hosts.youtube &&
                  video.player.playVideo &&
                  video.player.playVideo();
            }, 300);
        }
      ),
        productCarousel.on(
          "afterChange",
          function (event, slick, currentSlide) {
            var thisSectionId = $(this).parents(".section").data("section-id");
            thisSectionId == video.sectionId &&
              video.container.data("slide-id") != currentSlide &&
              (video.host === hosts.html5 && video.player.pause(),
              video.host === hosts.youtube &&
                video.player.pauseVideo &&
                video.player.pauseVideo());
          }
        ),
        $(document).on("shopify_xr_launch", function () {
          video.host === hosts.html5 && video.player.pause(),
            video.host === hosts.youtube &&
              video.player.pauseVideo &&
              video.player.pauseVideo();
        });
    }
  }
  function hostFromVideoElement(video) {
    return video.tagName === "VIDEO"
      ? hosts.html5
      : video.tagName === "IFRAME" &&
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
          video.src
        )
      ? hosts.youtube
      : null;
  }
  function loadVideos(host) {
    for (var key in videos)
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        video.host === host && video.ready();
      }
  }
  function removeSectionVideos(sectionId) {
    for (var key in videos)
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        video.sectionId === sectionId &&
          (video.player && video.player.destroy(), delete videos[key]);
      }
  }
  return { init, hosts, loadVideos, removeSectionVideos };
})()),
  (theme.ProductModel = (function () {
    var modelJsonSections = {},
      models = {},
      xrButtons = {},
      productCarousel = $(".js-product-slider"),
      selectors = {
        mediaGroup: "[data-product-media-group]",
        xrButton: "[data-shopify-xr]",
      };
    function init(modelViewerContainers, sectionId) {
      (modelJsonSections[sectionId] = { loaded: !1 }),
        modelViewerContainers.each(function (index) {
          var $modelViewerContainer = $(this),
            mediaId = $modelViewerContainer.data("media-id"),
            $modelViewerElement = $(
              $modelViewerContainer.find("model-viewer")[0]
            ),
            modelId = $modelViewerElement.data("model-id");
          if (index === 0) {
            var $xrButton = $modelViewerContainer
              .closest(selectors.mediaGroup)
              .find(selectors.xrButton);
            xrButtons[sectionId] = { $element: $xrButton, defaultId: modelId };
          }
          models[mediaId] = {
            modelId,
            sectionId,
            $container: $modelViewerContainer,
            $element: $modelViewerElement,
          };
        }),
        window.Shopify.loadFeatures([
          { name: "shopify-xr", version: "1.0", onLoad: setupShopifyXr },
          {
            name: "model-viewer-ui",
            version: "1.0",
            onLoad: setupModelViewerUi,
          },
        ]),
        theme.LibraryLoader.load("modelViewerUiStyles");
    }
    function setupShopifyXr(errors) {
      if (!errors) {
        if (!window.ShopifyXR) {
          document.addEventListener("shopify_xr_initialized", function () {
            setupShopifyXr();
          });
          return;
        }
        for (var sectionId in modelJsonSections)
          if (modelJsonSections.hasOwnProperty(sectionId)) {
            var modelSection = modelJsonSections[sectionId];
            if (modelSection.loaded) continue;
            var $modelJson = $("#ModelJson-" + sectionId);
            window.ShopifyXR.addModels(JSON.parse($modelJson.html())),
              (modelSection.loaded = !0);
          }
        window.ShopifyXR.setupXRElements();
      }
    }
    function setupModelViewerUi(errors) {
      if (!errors) {
        for (var key in models)
          if (models.hasOwnProperty(key)) {
            var model = models[key];
            model.modelViewerUi ||
              (model.modelViewerUi = new Shopify.ModelViewerUI(model.$element)),
              setupModelViewerListeners(model);
          }
      }
    }
    function setupModelViewerListeners(model) {
      var xrButton = xrButtons[model.sectionId];
      productCarousel.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          var thisSectionId = $(this).parents(".section").data("section-id");
          thisSectionId == model.sectionId &&
            model.$container.data("slide-id") == nextSlide &&
            (document.documentElement.classList.contains("no-touchevents") &&
              nextSlide !== currentSlide &&
              (xrButton.$element.attr("data-shopify-model3d-id", model.modelId),
              setTimeout(function () {
                model.modelViewerUi.play();
              }, 300)),
            $(this).slick("slickSetOption", "swipe", !1));
        }
      ),
        productCarousel.on(
          "beforeChange",
          function (event, slick, currentSlide, nextSlide) {
            var thisSectionId = $(this).parents(".section").data("section-id");
            thisSectionId == model.sectionId &&
              model.$container.data("slide-id") == currentSlide &&
              model.$container.data("slide-id") != nextSlide &&
              (xrButton.$element.attr(
                "data-shopify-model3d-id",
                xrButton.defaultId
              ),
              model.modelViewerUi.pause(),
              $(this).slick("slickSetOption", "swipe", !0));
          }
        ),
        $(document).on("shopify_xr_launch", function () {
          model.modelViewerUi.pause();
        });
    }
    function removeSectionModels(sectionId) {
      for (var key in models)
        if (models.hasOwnProperty(key)) {
          var model = models[key];
          model.sectionId === sectionId && delete models[key];
        }
      delete modelJsonSections[sectionId];
    }
    return { init, removeSectionModels };
  })()),
  (theme.productMediaInit = function () {
    $(".product-single__photo__item--video").each(function (index) {
      theme.ProductVideo.init(
        $(this),
        $(".section--product-single").data("section-id")
      );
    }),
      $(".product-single__photo__item--model").length > 0 &&
        theme.ProductModel.init(
          $(".product-single__photo__item--model"),
          $(".section--product-single").data("section-id")
        );
  }),
  (theme.homeProductMediaInit = function ($element) {
    $element.find("[data-src]").each(function () {
      var $this = $(this),
        src = $this.data("src");
      $this.attr("src", src);
    }),
      $element
        .find(".product-featured__photo__item--video")
        .each(function (index) {
          theme.ProductVideo.init(
            $(this),
            $(this).parents(".section").data("section-id")
          );
        }),
      $element.find(".js-section__home-product").each(function (index) {
        $(this).has(".product-featured__photo__item--model").length &&
          theme.ProductModel.init(
            $(this).find(".product-featured__photo__item--model"),
            $(this).children(".section").data("section-id")
          );
      });
  }),
  (theme.productVariantAvailability = function (
    product,
    form,
    thisVariant,
    cssClass
  ) {
    var productData = product,
      productOptions = productData.options,
      productForm = form,
      variant = thisVariant,
      selectorClass = cssClass;
    if (variant != null) {
      for (
        var reducedLength = productOptions.length - 2,
          availableVariants = productData.variants.filter(
            (thisVariant2) =>
              thisVariant2.available &&
              thisVariant2.options.filter((thisOption) =>
                variant.options.includes(thisOption)
              ).length > reducedLength
          ),
          availableOptions = new Array(productOptions.length),
          k = 0;
        k < availableOptions.length;
        k++
      )
        availableOptions[k] = [];
      for (var i = productOptions.length - 1; i >= 0; i--)
        for (var i2 = availableVariants.length - 1; i2 >= 0; i2--)
          for (
            var i3 = availableVariants[i2].options.length - 1;
            i3 >= 0;
            i3--
          ) {
            var option = availableVariants[i2].options[i3];
            availableOptions[i3].includes(option) === !1 &&
              availableOptions[i3].push(option);
          }
      $(form)
        .find(".product-form__swatch__item")
        .addClass("product-form__swatch__item--disabled");
      for (var j = availableOptions.length - 1; j >= 0; j--)
        if (availableOptions[j].length > 0)
          for (var j2 = availableOptions[j].length - 1; j2 >= 0; j2--) {
            var elemCount = j + 1,
              parentElem = $(form).find(
                ".js-product-form-swatch[data-option-index='" + elemCount + "']"
              ),
              buttonElem = $(parentElem).find(
                ".product-form__swatch__item[data-value='" +
                  availableOptions[j][j2] +
                  "']"
              );
            $(buttonElem).removeClass("product-form__swatch__item--disabled");
          }
    }
  }),
  (theme.productSelect = function (
    productId,
    sectionId,
    cssClass,
    historyState
  ) {
    var productObj = document.getElementById(
      "ProductJson-" + productId
    ).innerHTML;
    productObj = JSON.parse(productObj || "{}");
    var sectionClass = ".section--" + sectionId,
      productSelector = sectionClass + " .js-product-" + productId,
      selectCallback = function (variant, selector) {
        var productId2 = productObj.id,
          thisSection = document.querySelector(sectionClass),
          productForm = thisSection.querySelector(
            "#js-product-form--" + productId2
          );
        document.dispatchEvent(
          new CustomEvent("venue:variant:update", {
            bubbles: !0,
            detail: { product: productObj, variant, sectionClass },
          })
        ),
          theme.productVariantAvailability(
            productObj,
            productForm,
            variant,
            cssClass
          );
        var thisSlider = $(productSelector + " .js-product-slider");
        function checkSlick(slideToGo) {
          var interval = setInterval(function () {
            thisSlider.hasClass("slick-initialized") &&
              (thisSlider.slick("slickGoTo", slideToGo),
              clearInterval(interval));
          }, 100);
        }
        if (variant) {
          if (variant.unit_price_measurement) {
            var unitPrice = $(productSelector + " .js-price-unit-price"),
              unitMeasure = $(productSelector + " .js-price-unit-measure"),
              unitCurrentPrice = Shopify.formatMoney(
                variant.unit_price,
                theme.money_format
              ),
              unitCurrentMeasure =
                variant.unit_price_measurement.reference_value === 1
                  ? variant.unit_price_measurement.reference_unit
                  : variant.unit_price_measurement.reference_value +
                    variant.unit_price_measurement.reference_unit;
            unitPrice.html(
              '<span class="money">' + unitCurrentPrice + "</span>"
            ),
              unitMeasure.text(unitCurrentMeasure),
              $(productSelector + " .js-price-unit-note").css(
                "display",
                "inline-block"
              );
          } else $(productSelector + " .js-price-unit-note").hide();
          if (variant.available) {
            if (variant.inventory_management) {
              var qtyLimit = $(productSelector + " .js-price-stock-note").data(
                  "qty-limit"
                ),
                variantQty = $(
                  productSelector +
                    " .js-product-variant-select option[value=" +
                    variant.id +
                    "]"
                ).data("qty");
              variantQty <= qtyLimit
                ? ($(productSelector + " .js-price-stock-note").show(),
                  $(productSelector + " .js-price-stock-note span").text(
                    variantQty
                  ))
                : $(productSelector + " .js-price-stock-note").hide();
            } else $(productSelector + " .js-price-stock-note").hide();
            $(productSelector + " .js-product-add")
              .removeClass("disabled")
              .prop("disabled", !1)
              .find(".js-product-add-text")
              .text(theme.t.add_to_cart),
              $(productSelector + " .js-product-buttons").removeClass(
                "product-form__add--sold"
              ),
              variant.compare_at_price > variant.price
                ? ($(productSelector + " .js-product-price-number").html(
                    '<span class="product-' +
                      cssClass +
                      "__price-number product-" +
                      cssClass +
                      '__price-number--sale"><span class="money">' +
                      Shopify.formatMoney(variant.price, theme.money_format) +
                      "</span></span>"
                  ),
                  $(productSelector + " .js-product-price-compare").html(
                    '<s class="product-' +
                      cssClass +
                      '__price-compare"><span class="money">' +
                      Shopify.formatMoney(
                        variant.compare_at_price,
                        theme.money_format
                      ) +
                      "</span></s>"
                  ))
                : ($(productSelector + " .js-product-price-number").html(
                    '<span class="product-' +
                      cssClass +
                      '__price-number"><span class="money">' +
                      Shopify.formatMoney(variant.price, theme.money_format) +
                      "</span></span>"
                  ),
                  $(productSelector + " .js-product-price-compare").empty());
          } else
            $(productSelector + " .js-price-stock-note").hide(),
              $(productSelector + " .js-product-add")
                .addClass("disabled")
                .prop("disabled", !0)
                .find(".js-product-add-text")
                .text(theme.t.sold_out),
              $(productSelector + " .js-product-buttons").addClass(
                "product-form__add--sold"
              ),
              variant.compare_at_price > variant.price
                ? ($(productSelector + " .js-product-price-number").html(
                    '<span class="product-' +
                      cssClass +
                      "__price-number product-" +
                      cssClass +
                      '__price-number--sale"><span class="money">' +
                      Shopify.formatMoney(variant.price, theme.money_format) +
                      "</span></span>"
                  ),
                  $(productSelector + " .js-product-price-compare").html(
                    '<s class="product-' +
                      cssClass +
                      '__price-compare"><span class="money">' +
                      Shopify.formatMoney(
                        variant.compare_at_price,
                        theme.money_format
                      ) +
                      "</span></s>"
                  ))
                : ($(productSelector + " .js-product-price-number").html(
                    '<span class="product-' +
                      cssClass +
                      '__price-number"><span class="money">' +
                      Shopify.formatMoney(variant.price, theme.money_format) +
                      "</span></span>"
                  ),
                  $(productSelector + " .js-product-price-compare").empty());
          if (variant.featured_image !== null)
            if (variant.featured_image.variant_ids.length > 0) {
              var mediaId = variant.featured_media.id,
                slide = $(
                  productSelector +
                    " .product-" +
                    cssClass +
                    "__photo__item[data-media-id*=" +
                    variant.featured_media.id +
                    "]"
                ),
                slideId = slide.attr("data-slide-id");
              checkSlick(slideId);
            } else checkSlick(0);
        } else
          $(productSelector + " .js-price-unit-note").hide(),
            $(productSelector + " .js-price-stock-note").hide(),
            $(productSelector + " .js-product-price-number").html("&nbsp;"),
            $(productSelector + " .js-product-price-compare").empty(),
            $(productSelector + " .js-product-add")
              .addClass("disabled")
              .prop("disabled", !0)
              .find(".js-product-add-text")
              .text(theme.t.unavailable);
        document.dispatchEvent(
          new CustomEvent("venue:variant:updated", {
            bubbles: !0,
            detail: { product: productObj, variant, sectionClass },
          })
        );
      };
    $(".js-product-form-swatch :radio").on("change", function () {
      var optionIndex = $(this)
          .closest(".js-product-form-swatch")
          .attr("data-option-index"),
        optionValue = $(this).val();
      $(this)
        .closest("form")
        .find(".single-option-selector")
        .eq(optionIndex - 1)
        .val(optionValue)
        .trigger("change");
      var value = $(this).val(),
        sub_title = $(this)
          .parents(".js-product-form-swatch")
          .find(".js-swatch-variant-title");
      sub_title.text(value);
    }),
      $(".js-swatch-variant-title").text(
        $(".js-swatch-color-item :radio:checked").val()
      ),
      productObj.onboarding !== !0 &&
        (new Shopify.OptionSelectors(
          "productSelect-" + sectionId + "-" + productId,
          {
            product: productObj,
            onVariantSelected: selectCallback,
            enableHistoryState: historyState,
          }
        ),
        productObj.options.length == 1 &&
          productObj.options[0] != "Title" &&
          $(productSelector + " .selector-wrapper:eq(0)").prepend(
            '<label for="productSelect-option-0">' +
              productObj.options[0] +
              "</label>"
          ),
        productObj.variants.length == 1 &&
          productObj.variants[0].title.indexOf("Default") > -1 &&
          ($(productSelector + " .selector-wrapper").hide(),
          $(productSelector + " .swatch").hide()));
  }),
  (theme.eventFeed = function (apiKey, templateId, anchorId, sectionId) {
    var orgUrl =
      "https://www.eventbriteapi.com//v3/users/me/organizations/?token=" +
      apiKey;
    $.getJSON(orgUrl, function (data) {}).done(function (data) {
      var orgId = data.organizations[0].id,
        eventsUrl =
          "https://www.eventbriteapi.com//v3/organizations/" +
          orgId +
          "/events/?token=" +
          apiKey +
          "&expand=venue&status=live";
      $.getJSON(eventsUrl, function (data2) {
        var template = $(templateId).html(),
          compile = Handlebars.compile(template)(data2);
        $(anchorId).append(compile),
          theme.layoutSlider(".js-layout-slider-" + sectionId),
          $("body").data("anim-load") &&
            (sr.reveal(".section--" + sectionId + " .section__link", {
              distance: 0,
            }),
            sr.reveal(".section--" + sectionId + " .home-event__item", {
              interval: theme.intervalValue,
            }));
      }),
        theme.LibraryLoader.load("fecha", fechaHelper);
      function fechaHelper() {
        Handlebars.registerHelper("formatDate", function (date) {
          return fecha.format(new Date(date), "ddd, DD MMM, HH:mm");
        });
      }
      Handlebars.registerHelper("each_upto", function (ary, max, options) {
        if (!ary || ary.length === 0) return options.inverse(this);
        for (var result = [], i = 0; i < max && i < ary.length; ++i)
          result.push(options.fn(ary[i]));
        return result.join("");
      });
    });
  }),
  (theme.homeMainCarouselInit = function (carousel) {
    var $carousel = $(carousel),
      currWinWidth = $(window).width(),
      mobileCond = currWinWidth >= 1;
    function loadVideos(thisCarousel) {
      var players = $(thisCarousel).find(".js-home-carousel-video-data");
      function onReadyVideo(event) {
        event.target.mute(),
          theme.videoSize(event.target.h),
          $(event.target.h).parents(".slick-slide").hasClass("slick-active") &&
            (event.target.playVideo(),
            setTimeout(function () {
              $(event.target.h).parent().addClass("js-loaded");
            }, 800));
      }
      function onChangeVideo(event) {
        event.data === YT.PlayerState.ENDED && event.target.playVideo();
      }
      for (var i = 0; i < players.length; i++)
        window[players[i].getAttribute("data-player-id")] = new YT.Player(
          players[i],
          {
            videoId: players[i].getAttribute("data-video-id"),
            host: "https://www.youtube-nocookie.com",
            playerVars: {
              iv_load_policy: 3,
              modestbranding: 1,
              playsinline: 1,
              cc_load_policy: 0,
              fs: 0,
              autoplay: 1,
              mute: 1,
              controls: 0,
              showinfo: 0,
              wmode: "opaque",
              quality: "hd720",
              branding: 0,
              autohide: 0,
              rel: 0,
            },
            events: { onReady: onReadyVideo, onStateChange: onChangeVideo },
          }
        );
    }
    $carousel.on("init", function (event, slick) {
      if (
        ($carousel
          .closest(".home-carousel-wrapper")
          .removeClass(function (index, className) {
            var newClasses = (
              className.match(/\bhome-carousel-wrapper--loading\S*/g) || []
            ).join(" ");
            return newClasses;
          }),
        $carousel.removeClass("home-carousel--loading"),
        $carousel.removeClass("home-carousel--image--loading"),
        $carousel.find(".js-home-carousel-video--yt").length &&
          mobileCond &&
          (typeof YT > "u"
            ? $.getScript("https://www.youtube.com/iframe_api").done(
                function () {
                  var interval = setInterval(function () {
                    typeof YT.Player == "function" &&
                      (loadVideos($carousel), clearInterval(interval));
                  }, 100);
                }
              )
            : loadVideos($carousel)),
        $carousel.find(".js-home-carousel-video--self").length &&
          $carousel
            .find("[data-slide-id='0']")
            .find(".js-home-carousel-video--self").length)
      ) {
        var $selfVideo = $carousel
          .find("[data-slide-id='0']")
          .find(".js-home-carousel-video--self");
        setTimeout(function () {
          $selfVideo.addClass("js-loaded");
        }, 300);
      }
      $(this).find(".slick-active").addClass("js-slide-active");
    }),
      $carousel.on("afterChange", function (event, slick, currentSlide) {
        if (mobileCond) {
          var $currentSlideElement = $carousel.find(
            "[data-slide-id='" + currentSlide + "']"
          );
          if ($currentSlideElement.find(".js-home-carousel-video--yt").length) {
            var dataPlayerId = $(this)
              .find(".slick-active .js-home-carousel-video-data")
              .attr("data-player-id");
            window[dataPlayerId].B
              ? window[dataPlayerId].playVideo()
              : setTimeout(function () {
                  window[dataPlayerId].playVideo();
                }, 1e3);
            var thisYTVideo = $(this).find(
              ".slick-active .js-home-carousel-video"
            );
            setTimeout(function () {
              thisYTVideo.addClass("js-loaded");
            }, 800);
          }
          if (
            $currentSlideElement.find(".js-home-carousel-video--self").length
          ) {
            var $selfVideo = $carousel.find(
              ".slick-active .js-home-carousel-video"
            );
            setTimeout(function () {
              $selfVideo.addClass("js-loaded");
            }, 300);
          }
        }
        $carousel.find(".slick-slide").removeClass("js-slide-active"),
          $carousel.find(".slick-active").addClass("js-slide-active");
      }),
      $carousel.on("setPosition", function () {
        window.sr && window.sr.delegate();
      }),
      $carousel
        .not(".slick-initialized")
        .slick({
          accessibility: !0,
          ariaPolite: !1,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          dots: !0,
          fade: !0,
          cssEase: "linear",
          adaptiveHeight: !0,
          prevArrow:
            '<div class="home-carousel__nav home-carousel__nav--prev"><i class="icon icon--left-t"></i></div>',
          nextArrow:
            '<div class="home-carousel__nav home-carousel__nav--next"><i class="icon icon--right-t"></i></div>',
        });
  }),
  (theme.homeMainCarousel = function () {
    var $carousels = $(".js-home-carousel"),
      homeMainCarouselObserver = generateFireOnViewObserver(
        theme.homeMainCarouselInit
      );
    homeMainCarouselObserver && !Shopify.designMode
      ? $carousels.each(function () {
          homeMainCarouselObserver.observe(this);
        })
      : $carousels.each(function () {
          theme.homeMainCarouselInit(this);
        });
    var videoResizeTimer;
    $(window).on("resize", function () {
      (winWidth = $(window).width()),
        clearTimeout(videoResizeTimer),
        (videoResizeTimer = setTimeout(function () {
          theme.videoSize($(".js-home-carousel-video-data"));
        }, 500));
    });
  }),
  (theme.videoSize = function (video) {
    var iframe = $(video),
      origHeight = iframe.attr("height"),
      origWidth = iframe.attr("width"),
      parentHeight = iframe.parent().height(),
      parentWidth = iframe.parent().width(),
      newHeight = (parentWidth / origWidth) * origHeight,
      newWidth = (parentHeight / origHeight) * origWidth;
    parentHeight < newHeight
      ? iframe.css({
          width: parentWidth + "px",
          height: newHeight + 120 + "px",
          top: (parentHeight - newHeight) / 2 - 60 + "px",
          left: 0,
        })
      : iframe.css({
          width: newWidth + "px",
          height: parentHeight + 120 + "px",
          left: (parentWidth - newWidth) / 2 + "px",
          top: "-60px",
        });
  }),
  (theme.homeVideoGalleryPlayers = []),
  (theme.homeVideoGalleryInit = function (videoStageElement) {
    var $videoStage = $(videoStageElement);
    function vimeoThumbs() {
      var i = 0,
        $vimeoThumbs = $videoStage.parent().find(".js-vimeo-thumb"),
        $vimeoPlaceholder = $videoStage.find(".js-vimeo-placeholder");
      function next() {
        if (i < $vimeoThumbs.length) {
          thisThumb = $vimeoThumbs[i];
          var vimeoID2 = $(thisThumb).attr("data-video-id");
          $.ajax({
            url:
              "https://vimeo.com/api/oembed.json?url=https://vimeo.com/" +
              vimeoID2,
            dataType: "json",
            complete: function (data) {
              $(thisThumb).attr("src", data.responseJSON.thumbnail_url),
                $(thisThumb).css("opacity", "1"),
                i++,
                next();
            },
          });
        }
      }
      if ((next(), $vimeoPlaceholder.length > 0)) {
        var vimeoID = $vimeoPlaceholder.attr("data-video-id");
        $.ajax({
          url:
            "https://vimeo.com/api/oembed.json?url=https://vimeo.com/" +
            vimeoID,
          dataType: "json",
          success: function (data) {
            var img = data.thumbnail_url.split("_")[0] + "_1280.jpg";
            $vimeoPlaceholder.attr("src", img),
              $vimeoPlaceholder.css("opacity", "1");
          },
        });
      }
    }
    vimeoThumbs(),
      $videoStage.find(".js-lazy-iframe").each(function () {
        $(this).attr("src", $(this).data("src")).removeAttr("data-src");
      }),
      theme.LibraryLoader.load("plyr", function () {
        theme.LibraryLoader.load("plyrShopifyStyles", function () {
          $videoStage.find(".js-home-video-player").each(function () {
            var video = this,
              videoId = $(video).attr("id");
            (window[videoId] = new Plyr(video, {
              controls: ["play", "progress", "mute", "volume", "fullscreen"],
              youtube: { noCookie: !0 },
              loop: { active: !1 },
              hideControlsOnPause: !0,
              iconUrl:
                "//cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.svg",
              tooltips: { controls: !1, seek: !0 },
            })),
              theme.homeVideoGalleryPlayers.push(window[videoId]);
          });
        });
      });
  }),
  (theme.homeVideoGallery = function () {
    var $videos = $(".js-home-video-stage"),
      homeVideoGalleryObserver = generateFireOnViewObserver(
        theme.homeVideoGalleryInit
      );
    $videos.length > 0 &&
      (homeVideoGalleryObserver && !Shopify.designMode
        ? $videos.each(function () {
            homeVideoGalleryObserver.observe(this);
          })
        : $videos.each(function () {
            theme.homeVideoGalleryInit(this);
          })),
      $(document).on(
        "click",
        ".js-home-video-placeholder-trigger",
        function (e) {
          e.preventDefault();
          var triggerTarget = $(this).attr("href"),
            triggerId = $(this).attr("href").replace(/#/, "");
          $(this).parent(".js-home-video-placeholder").addClass("js-hidden"),
            theme.homeVideoGalleryPlayers.forEach(function (instance) {
              instance.pause();
            }),
            window["home_player_" + triggerId].play(),
            $(".home-video__stage-video .plyr__controls").css(
              "display",
              "flex"
            );
        }
      ),
      $(document).on("click", ".js-home-video-trigger", function (e) {
        e.preventDefault();
        var triggerId = $(this).attr("href").replace(/#/, ""),
          triggerTarget = "#js-home-video-" + triggerId,
          sectionPlaceholder = $(this)
            .parents(".home-video")
            .find(".js-home-video-placeholder");
        sectionPlaceholder.addClass("js-hidden"),
          $(this)
            .parents(".home-video")
            .find(".js-home-video")
            .removeClass("js-active"),
          $(triggerTarget).addClass("js-active"),
          theme.homeVideoGalleryPlayers.forEach(function (instance) {
            instance.pause();
          }),
          $(this).parent().hasClass("js-paused")
            ? (window["home_player_" + triggerId].play(),
              $(this).parent().removeClass("js-paused"))
            : $(this).parent().hasClass("js-active")
            ? $(this).parent().addClass("js-paused")
            : window["home_player_" + triggerId].play(),
          $(".js-home-video-trigger").parent().removeClass("js-active"),
          $(".js-home-video-trigger").parent().removeClass("js-init"),
          $(this).parent().addClass("js-active");
      });
  }),
  (theme.masonryLayout = function () {
    document.querySelector(".o-layout--masonry") !== null &&
      theme.LibraryLoader.load("masonry", masonryInit);
    function masonryInit() {
      $(".o-layout--masonry")
        .imagesLoaded()
        .always(function (instance) {
          $(".o-layout--masonry").masonry({
            itemSelector: ".o-layout__item",
            transitionDuration: 0,
          }),
            window.sr && window.sr.delegate();
        })
        .progress(function (instance, image) {
          $(".o-layout--masonry").masonry({
            itemSelector: ".o-layout__item",
            transitionDuration: 0,
          }),
            window.sr && window.sr.delegate();
        });
    }
  }),
  (theme.animFade = function () {
    $("body").data("anim-fade") &&
      ($(
        'a[href^="#"], a[target="_blank"], a[href^="mailto:"], a[href^="tel:"], a[href*="youtube.com/watch"], a[href*="youtu.be/"]'
      ).each(function () {
        $(this).addClass("js-no-transition");
      }),
      (navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ||
        navigator.userAgent.match(/Firefox\/([0-9]+)\./)) &&
        $("a").on("click", function () {
          window.setTimeout(function () {
            $("body").removeClass("js-theme-unloading");
          }, 1200);
        }),
      $(
        "a:not(.js-no-transition, .js-header-sub-link-a, .js-header-sub-t-a)"
      ).on("click", function (e) {
        if (e.metaKey) return !0;
        e.preventDefault(),
          $.magnificPopup.close(),
          $("body").addClass("js-theme-unloading");
        var src = $(this).attr("href");
        window.setTimeout(function () {
          location.href = src;
        }, 50);
      }));
  }),
  (theme.animScroll = function () {
    if ($("body").data("anim-load")) {
      (theme.intervalStyle = {}),
        $("body").data("anim-interval-style") == "fade_down"
          ? (theme.intervalStyle = "-20px")
          : $("body").data("anim-interval-style") == "fade_up"
          ? (theme.intervalStyle = "20px")
          : (theme.intervalStyle = "0"),
        (theme.intervalValue = {}),
        $("body").data("anim-interval")
          ? (theme.intervalValue = 100)
          : (theme.intervalValue = 0);
      var config = {
        viewFactor: 0.1,
        duration: 600,
        distance: theme.intervalStyle,
        scale: 1,
        delay: 0,
        mobile: !0,
        useDelay: "once",
        beforeReveal: function (el) {
          $(el).addClass("js-sr-loaded");
        },
      };
      (window.sr = new ScrollReveal(config)),
        sr.reveal(".section__title", { distance: "5px" }),
        sr.reveal(".section__title-desc", { distance: 0, delay: 100 }),
        sr.reveal(".newsletter, .section__link, .account", { distance: 0 }),
        sr.reveal(".product-card-top, .collection-list__item", {
          interval: theme.intervalValue,
        }),
        sr.reveal(".cart .section__title", { distance: "20px" }),
        sr.reveal(".cart__content", { distance: 0, delay: 100 }),
        sr.reveal(".search-page .section__title", { distance: "20px" }),
        sr.reveal(".search-page__form, .search-page-pagination", {
          distance: 0,
          delay: 100,
        }),
        sr.reveal(".search-page .product-card-top, .search-page__other-item", {
          interval: theme.intervalValue,
          delay: 0,
        }),
        sr.reveal(".blog", { delay: 100, interval: theme.intervalValue }),
        sr.reveal(".blog-page__tags, .blog-pagination", {
          distance: 0,
          delay: 100,
        }),
        sr.reveal(".blog-page .section__title", { distance: "20px" }),
        sr.reveal(".article .section__title", { distance: "20px" }),
        sr.reveal(".article__date", { distance: "-10px", delay: 200 }),
        sr.reveal(".article__featured-media, .article__content", {
          distance: 0,
          delay: 100,
        }),
        sr.reveal(".article__meta, .article-paginate", { distance: 0 }),
        sr.reveal(".collection__header-info__title", { distance: "20px" }),
        sr.reveal(".collection .product-card-top", {
          interval: theme.intervalValue,
        }),
        sr.reveal(
          ".collection__header-media, .collection__header-info__text, .collection-empty, .collection-pagination, .collection__filters-active",
          { distance: 0, delay: 100 }
        ),
        sr.reveal(".list-collections .section__title", { distance: "20px" }),
        sr.reveal(".list-collections .collection-list__item", {
          interval: theme.intervalValue,
          delay: 100,
        }),
        sr.reveal(".product-single__title-text", { distance: "20px" }),
        sr.reveal(
          ".product-single__title-desc, .breadcrumb, .product-single__photos, .product-single__content, .product-single--minimal .product-single__content-text",
          { distance: 0, delay: 100, useDelay: "onload" }
        ),
        sr.reveal(".page .section__title", { distance: "20px" }),
        sr.reveal(".faq__cta", { distance: 0, delay: 100 }),
        sr.reveal(".faq__accordion", { distance: 0, delay: 200 }),
        sr.reveal(".faq__category__title", { distance: 0 }),
        sr.reveal(".page__contact-form", { distance: 0, delay: 100 }),
        sr.reveal(".home-carousel .section__title", { distance: 0 }),
        sr.reveal(".home-image-grid__item", { interval: theme.intervalValue }),
        sr.reveal(".home-promo__box"),
        sr.reveal(".home-intro", { distance: 0 }),
        sr.reveal(
          ".home-intro__media, .home-intro__text, .home-intro__video, .home-intro__link-wrap"
        ),
        sr.reveal(".home-logo-list__items", { distance: 0 }),
        sr.reveal(".home-testimonials", { distance: 0 }),
        sr.reveal(".product-featured__photo-wrapper", {
          distance: 0,
          delay: 100,
        }),
        sr.reveal(".home-event__item", { interval: theme.intervalValue }),
        sr.reveal(".home-delivery", { distance: 0 }),
        sr.reveal(".home-delivery__content", { distance: theme.intervalStyle }),
        sr.reveal(".home-map__items"),
        sr.reveal(".home-rich-text__content", { distance: 0, delay: 100 }),
        sr.reveal(".home-inline__item", { interval: theme.intervalValue }),
        sr.reveal(".home-video__stage, .home-video__items", { distance: 0 }),
        sr.reveal(".home-custom__item", { interval: theme.intervalValue });
    }
  }),
  (theme.thumbsCarousel = function () {
    function resizeProductBg($sliderElement, newPhotoHeight) {
      if ($(".product-single").hasClass("product-single--classic")) {
        var $productBg = $(".js-product-bg");
        $productBg.hasClass("js-product-bg--full")
          ? (heightFraction = 1)
          : (heightFraction = 0.55);
        var photoHeight =
            newPhotoHeight || $sliderElement.find(".slick-list").height(),
          thumbsHeight = 0,
          $sliderDots = $(".js-product-slider-nav .slick-dots");
        $sliderDots.length && (thumbsHeight = $sliderDots.outerHeight(!0));
        var breadcrumbHeight = 0,
          $breadcrumbs = $(".js-breadcrumb");
        $breadcrumbs.length &&
          (breadcrumbHeight = $breadcrumbs.outerHeight(!0));
        var viewInSpaceBtnHeight = 0,
          $viewInSpaceBtn = $(".js-product-view-in-space-btn");
        $viewInSpaceBtn.length > 0 &&
          !$viewInSpaceBtn.is("[data-shopify-xr-hidden]") &&
          (viewInSpaceBtnHeight = $viewInSpaceBtn.outerHeight(!0));
        var newPhotoBgScale =
          (photoHeight * heightFraction +
            thumbsHeight +
            breadcrumbHeight +
            viewInSpaceBtnHeight +
            60) /
          $productBg.height();
        $productBg.css("transform", "scaleY(" + newPhotoBgScale + ")");
      }
    }
    function initiateSlick($sliderElement) {
      $sliderElement.on("init", function () {
        var $sliderWrapper = $sliderElement.parent();
        $sliderWrapper.removeClass("product-single__photos--loading"),
          $sliderWrapper
            .find(".product-single__photo__nav")
            .removeClass("product-single__photo__nav--loading"),
          $sliderElement.removeClass("product-single__photo--loading"),
          resizeProductBg($sliderElement);
      }),
        $sliderElement
          .slick({
            focusOnSelect: !0,
            accessibility: !0,
            ariaPolite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !1,
            arrows: !0,
            dots: !0,
            swipe: !0,
            fade: !0,
            adaptiveHeight: !0,
            speed: 300,
            cssEase: "ease",
            lazyLoad: "progressive",
            prevArrow:
              '<div class="product-single__photo__nav__item product-single__photo__nav__item--prev"><i class="icon icon--left-l"></i></div>',
            nextArrow:
              '<div class="product-single__photo__nav__item product-single__photo__nav__item--next"><i class="icon icon--right-l"></i></div>',
            customPaging: function (slider, i) {
              return (
                '<button><div class="product-single__photo-thumbs__item">' +
                $(
                  ".js-product-single-thumbs div:nth-child(" + (i + 1) + ")"
                ).html() +
                "</div></button>"
              );
            },
            appendDots: $sliderElement
              .parent()
              .find(".js-product-slider-nav-dots"),
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  appendArrows: $sliderElement
                    .parent()
                    .find(".js-product-slider-nav"),
                },
              },
            ],
          })
          .on(
            "beforeChange",
            function (event, slick, currentSlide, nextSlideIndex) {
              resizeProductBg(
                $sliderElement,
                $($sliderElement.find(".slick-slide")[nextSlideIndex]).height()
              );
            }
          );
    }
    $(".js-section__product-single .js-product-slider")
      .not(".slick-initialized")
      .each(function () {
        var $sliderElement = $(this),
          $firstSliderImage = $sliderElement
            .find(".product-single__photo__wrapper")
            .first()
            .find("img")
            .first();
        $firstSliderImage.length > 0
          ? $firstSliderImage
              .one("load", function () {
                initiateSlick($sliderElement);
              })
              .each(function () {
                this.complete && $(this).trigger("load");
              })
          : $(function () {
              initiateSlick($sliderElement);
            });
      });
  }),
  (theme.logoCarouselUpdate = function (element) {
    var $carousel = $(element),
      winWidth2 = $(window).width(),
      slideCount = $carousel.data("carouselCount"),
      desktop2 = $carousel.data("carouselDesktop"),
      mobile2 = $carousel.data("carouselMobile");
    function logoCarouselInitFull($carousel2, slideCount2) {
      $carousel2
        .not(".slick-initialized")
        .slick({
          slidesToShow: slideCount2,
          slidesToScroll: slideCount2,
          arrows: !0,
          dots: !0,
          fade: !1,
          adaptiveHeight: !1,
          speed: 300,
          cssEase: "ease",
          lazyLoad: "progressive",
          prevArrow:
            '<div class="home-logo-list-carousel__nav home-logo-list-carousel__nav--prev"><i class="icon icon--left-l"></i></div>',
          nextArrow:
            '<div class="home-logo-list-carousel__nav home-logo-list-carousel__nav--next"><i class="icon icon--right-l"></i></div>',
          responsive: [
            {
              breakpoint: theme.mobileBrkp,
              settings: {
                swipeToSlide: !0,
                variableWidth: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
    }
    function logoCarouselInitDesk($carousel2, slideCount2) {
      $carousel2
        .not(".slick-initialized")
        .slick({
          slidesToShow: slideCount2,
          slidesToScroll: slideCount2,
          arrows: !0,
          dots: !0,
          fade: !1,
          adaptiveHeight: !1,
          speed: 300,
          cssEase: "ease",
          lazyLoad: "progressive",
          prevArrow:
            '<div class="home-logo-list-carousel__nav home-logo-list-carousel__nav--prev"><i class="icon icon--left-l"></i></div>',
          nextArrow:
            '<div class="home-logo-list-carousel__nav home-logo-list-carousel__nav--next"><i class="icon icon--right-l"></i></div>',
        });
    }
    function logoCarouselInitMobile($carousel2) {
      $carousel2
        .not(".slick-initialized")
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: !0,
          variableWidth: !0,
          arrows: !1,
          dots: !0,
          fade: !1,
          adaptiveHeight: !1,
          speed: 300,
          cssEase: "ease",
          lazyLoad: "progressive",
        });
    }
    $carousel.removeClass("home-logo-list-carousel--loading"),
      desktop2 && mobile2
        ? logoCarouselInitFull($carousel, slideCount)
        : desktop2
        ? winWidth2 >= theme.mobileBrkp
          ? logoCarouselInitDesk($carousel, slideCount)
          : $carousel.hasClass("slick-initialized") &&
            $carousel.slick("unslick")
        : mobile2 &&
          (winWidth2 < theme.mobileBrkp
            ? logoCarouselInitMobile($carousel)
            : $carousel.hasClass("slick-initialized") &&
              $carousel.slick("unslick"));
  }),
  (theme.logoCarouselInit = function (element) {
    theme.logoCarouselUpdate(element),
      $(window).on("resize", function () {
        theme.logoCarouselUpdate(element);
      });
  }),
  (theme.logoCarousel = function () {
    var $carousels = $(".js-home-logo-list-carousel"),
      logoCarouselObserver = generateFireOnViewObserver(theme.logoCarouselInit);
    $carousels.length > 0 &&
      $carousels.each(function () {
        var carousel = this;
        logoCarouselObserver && !Shopify.designMode
          ? logoCarouselObserver.observe(carousel)
          : theme.logoCarouselInit(carousel);
      });
  }),
  (theme.testimonialsCarouselUpdate = function (carouselElement) {
    winWidth = $(window).width();
    var $carousel = $(carouselElement);
    (desktop = $carousel.data("carouselDesktop")),
      (mobile = $carousel.data("carouselMobile")),
      $carousel.removeClass("home-testimonials-carousel--loading");
    function initCarousel($carouselElement) {
      $carouselElement
        .not(".slick-initialized")
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !0,
          dots: !0,
          fade: !1,
          adaptiveHeight: !1,
          speed: 300,
          cssEase: "ease",
          lazyLoad: "progressive",
          prevArrow:
            '<div class="home-testimonials-carousel__nav home-testimonials-carousel__nav--prev"><i class="icon icon--left-l"></i></div>',
          nextArrow:
            '<div class="home-testimonials-carousel__nav home-testimonials-carousel__nav--next"><i class="icon icon--right-l"></i></div>',
        });
    }
    desktop && mobile
      ? initCarousel($carousel)
      : desktop
      ? winWidth >= theme.mobileBrkp
        ? initCarousel($carousel)
        : $carousel.hasClass("slick-initialized") && $carousel.slick("unslick")
      : mobile &&
        (winWidth < theme.mobileBrkp
          ? initCarousel($carousel)
          : $carousel.hasClass("slick-initialized") &&
            $carousel.slick("unslick"));
  }),
  (theme.testimonialsCarouselInit = function (carouselElement) {
    theme.testimonialsCarouselUpdate(carouselElement),
      $(window).on("resize", function () {
        theme.testimonialsCarouselUpdate(carouselElement);
      });
  }),
  (theme.testimonialsCarousel = function () {
    var carousels = $(".js-home-testimonials-carousel"),
      testimonialsCarouselObserver = generateFireOnViewObserver(
        theme.testimonialsCarouselInit
      );
    carousels.each(function () {
      var carousel = this;
      testimonialsCarouselObserver && !Shopify.designMode
        ? testimonialsCarouselObserver.observe(carousel)
        : theme.testimonialsCarouselInit(carousel);
    });
  }),
  (theme.headerScrollUp = function () {
    function hasScrolled() {
      var st = $(this).scrollTop();
      Math.abs(lastScrollTop - st) <= delta ||
        (st > lastScrollTop && st > navbarHeight
          ? $(body).removeClass("header-down").addClass("header-up")
          : $(body).removeClass("header-up").addClass("header-down"),
        (lastScrollTop = st));
    }
    if ($(".js-header").hasClass("js-header-scroll")) {
      var didScroll,
        lastScrollTop = 0,
        delta = 5,
        navbarHeight = $(".js-header").outerHeight() + 50;
      $(window).on("scroll", function (event) {
        didScroll = !0;
      }),
        setInterval(function () {
          $(".js-header").hasClass("js-header-scroll") &&
            didScroll &&
            (hasScrolled(), (didScroll = !1));
        }, 250);
    }
  }),
  (theme.accordion = function () {
    for (
      var item = $(".js-accordion-info"),
        trigger = $(".js-accordion-trigger"),
        items = item.hide(),
        activeClass = "js-active",
        defaultOpenClass = "js-accordion-trigger-default-open",
        i = trigger.length - 1;
      i >= 0;
      i--
    )
      if ($(trigger[i]).hasClass(defaultOpenClass)) {
        var thisItem = $(trigger[i]).attr("href");
        $(thisItem).addClass(activeClass).stop().slideDown(),
          $(trigger[i]).addClass(activeClass).attr("aria-expanded", "true");
      }
    trigger.on("click", function () {
      var thisItem2 = $(this).attr("href");
      if (
        (setTimeout(function () {
          $(".js-product-single-box").trigger("resize");
        }, 400),
        $(this).hasClass("js-accordion-scroll"))
      ) {
        var outsideAccordion = $(".js-accordion").find(
          "[href='" + $(this).attr("href") + "']"
        );
        return (
          $(".js-header").hasClass("js-header-sticky")
            ? (scrollOffset = $(".js-header").outerHeight() + 18)
            : (scrollOffset = 18),
          $("html,body").animate(
            { scrollTop: outsideAccordion.offset().top - scrollOffset },
            800
          ),
          $(thisItem2).addClass(activeClass).stop().slideDown(),
          outsideAccordion.addClass(activeClass),
          !1
        );
      }
      return (
        $(thisItem2).hasClass(activeClass)
          ? ($(this).removeClass(activeClass).attr("aria-expanded", "false"),
            $(thisItem2).removeClass(activeClass).stop().slideUp())
          : ($(thisItem2).addClass(activeClass).stop().slideDown(),
            $(this).addClass(activeClass).attr("aria-expanded", "true")),
        !1
      );
    });
  }),
  (theme.scrollToDiv = function () {
    $(".js-scroll-id").on("click", function (e) {
      var thisId = $(this).attr("href");
      return (
        $(".js-header").hasClass("js-header-sticky")
          ? (scrollOffset = $(".js-header").outerHeight() + 18)
          : (scrollOffset = 18),
        $("html,body").animate(
          { scrollTop: $(thisId).offset().top - scrollOffset },
          800
        ),
        !1
      );
    });
  }),
  (theme.localizeToggle = function () {
    var box = $(".js-localize-box"),
      trigger = $(".js-localize-trigger"),
      item = $(".js-localize-item"),
      activeClass = "js-active";
    item.on("click", function () {
      var value = $(this).data("value");
      return (
        $(this)
          .parents(".js-localize-wrapper")
          .find("[data-disclosure-input]")
          .val(value),
        $(this).parents("form").trigger("submit"),
        !1
      );
    }),
      trigger.on("click", function () {
        var thisTarget = $(this).parents(".js-localize-wrapper").find(box);
        return (
          $(this).hasClass(activeClass)
            ? ($(this).removeClass(activeClass).attr("aria-expanded", "false"),
              $(thisTarget).removeClass(activeClass))
            : (box.removeClass(activeClass),
              trigger.removeClass(activeClass).attr("aria-expanded", "false"),
              $(thisTarget).addClass(activeClass),
              $(this).addClass(activeClass).attr("aria-expanded", "true")),
          !1
        );
      }),
      box
        .on("focusin", function () {
          $(this).addClass(activeClass),
            $(this)
              .parents(".js-localize-wrapper")
              .find(trigger)
              .addClass(activeClass)
              .attr("aria-expanded", "true");
        })
        .on("focusout", function () {
          $(this).removeClass(activeClass),
            $(this)
              .parents(".js-localize-wrapper")
              .find(trigger)
              .removeClass(activeClass)
              .attr("aria-expanded", "false");
        }),
      $(document).on("click", function (e) {
        !box.is(e.target) &&
          box.has(e.target).length === 0 &&
          (box.removeClass(activeClass),
          trigger.removeClass(activeClass).attr("aria-expanded", "false"));
      });
  }),
  (theme.headerNav = function () {
    var link = $(".js-header-sub-link"),
      tLink = $(".js-header-sub-t-link"),
      linkA = $(".js-header-sub-link-a"),
      tLinkA = $(".js-header-sub-t-a"),
      activeClass = "js-active",
      headerNavs = $(".js-heaver-navs"),
      mobileDraw = $(".js-mobile-draw-icon"),
      searchDraw = $(".js-search-draw-icon"),
      cartDraw = $(".js-cart-draw-icon"),
      primaryNav = $(".js-primary-nav"),
      secondaryNav = $(".js-secondary-nav"),
      logoImg = $(".js-main-logo");
    function updateHeaderNav() {
      winWidth = $(window).width();
      var navsWidth = headerNavs.width(),
        primaryWidth = primaryNav.width(),
        secondaryWidth = secondaryNav.width(),
        navSpace = navsWidth / 2 - logoImg.width() / 2;
      winWidth >= theme.mobileBrkp
        ? $(".js-header").hasClass("header--center")
          ? ($(".js-header").removeClass("header--inline-icons"),
            mobileDraw.hide(),
            searchDraw.hide(),
            cartDraw.hide())
          : navSpace < primaryWidth || navSpace < secondaryWidth
          ? ($(".js-header").removeClass("header--inline-icons"),
            mobileDraw.show(),
            searchDraw.show(),
            cartDraw.show(),
            primaryNav.hide(),
            secondaryNav.hide())
          : (mobileDraw.hide(),
            searchDraw.hide(),
            cartDraw.hide(),
            primaryNav.show(),
            secondaryNav.show())
        : (mobileDraw.show(), searchDraw.show(), cartDraw.show());
    }
    updateHeaderNav(),
      link
        .on("focusin", function () {
          $(this).addClass(activeClass),
            $(this).find(linkA).attr("aria-expanded", "true");
        })
        .on("focusout", function () {
          link.removeClass(activeClass),
            $(this).find(linkA).attr("aria-expanded", "false");
        }),
      tLink.on("focusin", function () {
        tLink.removeClass(activeClass),
          tLinkA.attr("aria-expanded", "false"),
          $(this).addClass(activeClass),
          $(this).find(tLinkA).attr("aria-expanded", "true");
      }),
      link.on("mouseout", function () {
        $(this).removeClass(activeClass);
      }),
      tLink.on("mouseout", function () {
        $(this).removeClass(activeClass);
      }),
      $(
        ".header--parent-disabled .js-header-sub-link-a, .header--parent-disabled .js-header-sub-t-a"
      ).on("click", function (e) {
        e.preventDefault();
      }),
      $(window).on("resize", updateHeaderNav),
      tLink.on("mouseover focusin", function () {
        var subNavT = $(this).find(".js-nav-sub-t"),
          ofsNo = winWidth - (subNavT.offset().left + subNavT.width());
        ofsNo < 1 &&
          (subNavT.css("right", "179px"), subNavT.css("left", "auto"));
      });
  }),
  (theme.homeFeaturedProductInit = function (productElement) {
    var $element = $(productElement);
    $element.on("init", function () {
      $element.removeClass("product-featured__photo--loading");
    }),
      $element.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: !0,
        ariaPolite: !1,
        arrows: !0,
        dots: !0,
        fade: !0,
        adaptiveHeight: !0,
        infinite: !1,
        swipe: !0,
        speed: 300,
        cssEase: "ease",
        prevArrow:
          '<div class="product-featured__photo__nav__item product-featured__photo__nav__item--prev"><i class="icon icon--left"></i></div>',
        nextArrow:
          '<div class="product-featured__photo__nav__item product-featured__photo__nav__item--next"><i class="icon icon--right"></i></div>',
        appendDots: $element.parent().find(".js-product-slider-nav-dots"),
        appendArrows: $element.parent().find(".js-product-slider-nav"),
      }),
      theme.homeProductMediaInit($element);
  }),
  (theme.homeFeaturedProduct = function () {
    var $homeFeatureProducts = $(
        ".js-section__home-product .js-product-slider"
      ).not(".slick-initialized"),
      homeFeaturedProductObserver = generateFireOnViewObserver(
        theme.homeFeaturedProductInit
      );
    $homeFeatureProducts.each(function () {
      var product = this;
      homeFeaturedProductObserver && !Shopify.designMode
        ? homeFeaturedProductObserver.observe(product)
        : theme.homeFeaturedProductInit(product);
    });
  }),
  (theme.triggerActive = function () {
    var trigger = $(".js-toggle-trigger"),
      activeClass = "js-active";
    trigger.on("click", function (e) {
      var thisTarget = $(this).attr("href");
      $(this).hasClass(activeClass)
        ? ($(this).removeClass(activeClass),
          $(thisTarget).removeClass(activeClass),
          $(this).parent().attr("aria-expanded", "false"))
        : ($(this).addClass(activeClass),
          $(thisTarget).addClass(activeClass),
          $(this).parent().attr("aria-expanded", "true")),
        e.preventDefault();
    });
  }),
  (theme.homeSectionMargin = function () {
    $(".main .shopify-section").each(function () {
      var thisSection = $(this).find(".section");
      thisSection.removeAttr("style"),
        thisSection.hasClass("section--has-bg") &&
          $(this)
            .next()
            .find(".section")
            .is(".section--full-bg.section--has-bg") &&
          thisSection.css("margin-bottom", "0");
    });
  }),
  (theme.ageCheckerCookie = function () {
    var ageCookie = "age-checked";
    $(".js-age-draw").data("age-check-enabled") &&
      typeof Cookies < "u" &&
      Cookies(ageCookie) !== "1" &&
      theme.mfpOpen("age"),
      $(".js-age-close").on("click", function (e) {
        Cookies(ageCookie, "1", { expires: 14, path: "/" }),
          $.magnificPopup.close(),
          e.preventDefault();
      });
  }),
  (theme.promoPopCookie = function () {
    var promoCookie = "promo-showed",
      promoDelay = $(".js-promo-pop").data("promo-delay"),
      promoExpiry = $(".js-promo-pop").data("promo-expiry");
    $(".js-promo-pop").data("promo-enabled") &&
      typeof Cookies < "u" &&
      Cookies(promoCookie) !== "1" &&
      setTimeout(function () {
        theme.promoPop("open");
      }, promoDelay),
      $(".js-promo-pop-close").on("click", function (e) {
        Cookies(promoCookie, "1", { expires: promoExpiry, path: "/" }),
          theme.promoPop("close"),
          e.preventDefault();
      });
  }),
  (theme.footerTweet = function () {
    var twtEnable = $(".js-footer-tweet").data("footer-tweet-enable");
    if (twtEnable) {
      var twtUsername = $(".js-footer-tweet")
        .data("footer-tweet-user")
        .substring(1);
      (window.twttr = (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        return (
          d.getElementById(id) ||
            ((js = d.createElement(s)),
            (js.id = id),
            (js.src = "https://platform.twitter.com/widgets.js"),
            fjs.parentNode.insertBefore(js, fjs),
            (t._e = []),
            (t.ready = function (f) {
              t._e.push(f);
            })),
          t
        );
      })(document, "script", "twitter-wjs")),
        twttr.ready(function () {
          twttr.widgets
            .createTimeline(
              { sourceType: "profile", screenName: twtUsername },
              document.getElementById("footer-tweet"),
              { tweetLimit: 1 }
            )
            .then(function (data) {
              var tweetText = $(data)
                .contents()
                .find(".timeline-Tweet-text")
                .html();
              $(".js-footer-tweet-text").html(tweetText);
            });
        });
    }
  }),
  (theme.mfpOpen = function (popup) {
    var closeBtn =
      '<button title="Close (Esc)" type="button" class="mfp-close mfp-close--custom js-close-mfp" aria-label="close"><i class="icon icon--close"></i></button>';
    switch (popup) {
      case "cart":
        theme.cart_ajax &&
          (theme.cart_type == "modal"
            ? $.magnificPopup.open({
                items: { src: ".js-cart-draw" },
                type: "inline",
                mainClass: "mfp-medium",
                fixedContentPos: !0,
                midClick: !0,
                closeMarkup: closeBtn,
                removalDelay: 200,
              })
            : $.magnificPopup.open({
                items: { src: ".js-cart-draw" },
                type: "inline",
                alignTop: !0,
                mainClass: "mfp-notification",
                fixedContentPos: !1,
                midClick: !0,
                closeMarkup: closeBtn,
                removalDelay: 200,
                closeOnBgClick: !1,
                callbacks: {
                  open: function (item) {
                    var thisPopup = $.magnificPopup.instance;
                    setTimeout(function () {
                      thisPopup.isOpen && thisPopup.close();
                    }, 4e3);
                  },
                },
              }));
        break;
      case "search":
        $.magnificPopup.open({
          items: { src: ".js-search-draw" },
          type: "inline",
          mainClass: "mfp-medium",
          fixedContentPos: !0,
          focus: ".js-search-input",
          closeMarkup: closeBtn,
          removalDelay: 200,
        });
        break;
      case "age":
        $.magnificPopup.open({
          items: { src: ".js-age-draw" },
          type: "inline",
          mainClass: "mfp-dark",
          fixedContentPos: !0,
          modal: !0,
          showCloseBtn: !1,
          removalDelay: 200,
        });
        break;
      case "menu-draw":
        $.magnificPopup.open({
          items: { src: ".js-menu-draw" },
          type: "inline",
          mainClass: "mfp-draw",
          fixedContentPos: !0,
          closeMarkup: closeBtn,
          removalDelay: 200,
        });
        break;
      case "store-availability-draw":
        $.magnificPopup.open({
          items: { src: ".js-store-availability-draw" },
          type: "inline",
          mainClass: "mfp-draw mfp-draw--right",
          fixedContentPos: !0,
          closeMarkup: closeBtn,
          removalDelay: 200,
        });
        break;
      case "collection-draw":
        $.magnificPopup.open({
          items: { src: ".js-collection-draw" },
          callbacks: {
            resize: function () {
              winWidth >= theme.tabletBrkp && $.magnificPopup.close();
            },
          },
          type: "inline",
          mainClass: "mfp-draw",
          fixedContentPos: !0,
          closeMarkup: closeBtn,
          removalDelay: 200,
        });
        break;
    }
  }),
  (theme.collectionFormSubmit = function () {
    var formElement = document.querySelector(
        ".collection-sidebar__filter-form"
      ),
      sortElement = document.querySelector(".js-collection-sort");
    formElement !== null
      ? formElement.addEventListener("change", (e) => {
          e.target.form.classList.add("js-loading"), e.target.form.submit();
        })
      : sortElement !== null &&
        sortElement.addEventListener("change", (e) => {
          e.target.form.classList.add("js-loading"), e.target.form.submit();
        });
  }),
  (theme.priceRangeSlider = function () {
    const parent = document.querySelector(".price-range");
    if (!parent) return;
    const rangeS = parent.querySelectorAll(".price-range__input"),
      numberS = parent.querySelectorAll(".price-range__number");
    rangeS.forEach((el) => {
      el.oninput = () => {
        let slide1 = parseFloat(rangeS[0].value),
          slide2 = parseFloat(rangeS[1].value);
        slide1 > slide2 && ([slide1, slide2] = [slide2, slide1]),
          (numberS[0].value = slide1),
          (numberS[1].value = slide2);
      };
    }),
      numberS.forEach((el) => {
        el.oninput = () => {
          let number1 = parseFloat(numberS[0].value),
            number2 = parseFloat(numberS[1].value);
          if (number1 > number2) {
            let tmp = number1;
            (numberS[0].value = number2), (numberS[1].value = tmp);
          }
          (rangeS[0].value = number1), (rangeS[1].value = number2);
        };
      });
  }),
  (theme.magnificVideo = function () {
    $(".js-pop-video").magnificPopup({
      type: "iframe",
      mainClass: "mfp-medium mfp-close-corner",
      removalDelay: 200,
      closeMarkup:
        '<button title="Close (Esc)" type="button" class="mfp-close mfp-close--custom js-close-mfp"><i class="icon icon--close"></i></button>',
    });
  }),
  (theme.productZoom = function () {
    document.querySelector(".js-pswp-zoom") !== null &&
      theme.LibraryLoader.load("photoswipe", photoswipeInit);
    function photoswipeInit() {
      var openPhotoSwipe = function (thisBtn, thisImageCount) {
        var pswpElement = document.querySelectorAll(".pswp")[0],
          productGallery = $(".js-product-slider"),
          galleryItems = [];
        $(".js-pswp-img").each(function () {
          var smallSrc = $(this).prop("currentSrc") || $(this).prop("src"),
            item = {
              msrc: smallSrc,
              src: $(this).data("pswp-src"),
              w: $(this).data("pswp-width"),
              h: $(this).data("pswp-height"),
              mediaId: $(this).data("media-id"),
              el: $(this)[0],
            };
          galleryItems.push(item);
        });
        var options = {
            history: !1,
            index: thisImageCount,
            closeOnScroll: !1,
            getThumbBoundsFn: function () {
              var pageYScroll =
                  window.pageYOffset || document.documentElement.scrollTop,
                thumbnail = galleryItems[thisImageCount].el,
                rect = thumbnail.getBoundingClientRect();
              return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
          },
          pswpGallery = new PhotoSwipe(
            pswpElement,
            PhotoSwipeUI_Default,
            galleryItems,
            options
          );
        pswpGallery.init(),
          pswpGallery.listen("close", function () {
            var thisSlideItem = $(
              ".product-single__photo__item[data-media-id=" +
                this.currItem.mediaId +
                "]"
            );
            productGallery.slick("slickGoTo", thisSlideItem[0].dataset.slideId);
          });
      };
      $(document).on("click", ".js-pswp-zoom", function () {
        var thisBtn = $(this),
          thisImageCount = $(this).data("image-count");
        openPhotoSwipe(thisBtn, thisImageCount);
      });
    }
  }),
  (theme.promoPop = function (action) {
    var popup = $(".js-promo-pop"),
      activeClass = "js-active";
    action == "open"
      ? popup.addClass(activeClass)
      : action == "close" && popup.removeClass(activeClass);
  }),
  (theme.cartCheckbox = function () {
    $(document).on("click", ".js-cart-checkout-validate", function () {
      if ($(".js-cart-terms-input").is(":checked")) $(this).trigger("submit");
      else {
        var errorBox = $(this).parents("form").find(".js-cart-terms-error");
        return errorBox.addClass("js-active"), !1;
      }
    }),
      $(document).on("change", ".js-cart-terms-input", function () {
        $(".js-cart-terms-error").removeClass("js-active");
      });
  }),
  (theme.runAjaxCart = function () {
    Handlebars.registerHelper("ifnoteq", function (a, b, options) {
      return a != b ? options.fn(this) : options.inverse(this);
    }),
      Handlebars.registerHelper("iffirstnoteq", function (a, b, options) {
        return a[0] != b ? options.fn(this) : options.inverse(this);
      }),
      theme.ajaxCartInit(),
      ajaxCart.load();
  }),
  (theme.productRecommendations = function () {
    var productRecommendationsSection = document.querySelector(
      ".js-product-recommendations"
    );
    if (productRecommendationsSection !== null) {
      var productId = productRecommendationsSection.dataset.productId,
        limit = productRecommendationsSection.dataset.limit,
        requestUrl = productRecommendationsSection.dataset.url,
        request = new XMLHttpRequest();
      request.open("GET", requestUrl),
        (request.onload = function () {
          if (request.status >= 200 && request.status < 300) {
            var container = document.createElement("div");
            (container.innerHTML = request.response),
              (productRecommendationsSection.parentElement.innerHTML =
                container.querySelector(
                  ".js-product-recommendations"
                ).innerHTML),
              theme.runAjaxCart(),
              theme.productCollSwatch(),
              $(".js-related-products").each(function (i) {
                var thisSectionId = $(this).data("section-id");
                theme.layoutSlider(".js-layout-slider-" + thisSectionId);
              }),
              window.SPR && (window.SPR.initDomEls(), window.SPR.loadBadges()),
              $("body").data("anim-load") &&
                typeof sr < "u" &&
                (sr.reveal(".section--related-products .product-card-top", {
                  interval: theme.intervalValue,
                }),
                sr.reveal(".section--related-products .section__title", {
                  distance: "5px",
                }));
          }
        }),
        request.send();
    }
  }),
  (theme.homeEventFeeds = function () {
    var feeds = document.querySelectorAll(".js-events");
    function initEventFeed(element) {
      var thisSectionId = $(element).data("section-id"),
        thisApiKey = $(element).data("api-key");
      theme.eventFeed(
        thisApiKey,
        "#eventTemplate" + thisSectionId,
        "#eventContainer" + thisSectionId,
        thisSectionId
      );
    }
    var homeEventFeedObserver = generateFireOnViewObserver(initEventFeed);
    feeds.length > 0 &&
      feeds.forEach(function (element) {
        homeEventFeedObserver && !Shopify.designMode
          ? homeEventFeedObserver.observe(element)
          : initEventFeed(element);
      });
  }),
  $("body").on("afterAddItem.ajaxCart", function () {
    setTimeout(function () {
      theme.mfpOpen("cart");
    }, 100);
  });
function tabClick(e) {
  e.keyCode === 9 &&
    (body.addClass("js-using-tab"),
    window.removeEventListener("keydown", tabClick));
}
window.addEventListener("keydown", tabClick),
  document
    .querySelectorAll(".js-section__home-collection .js-home-products")
    .forEach(function (element, index) {
      var thisSectionId = $(element).data("section-id");
      theme.layoutSlider(".js-layout-slider-" + thisSectionId);
    }),
  document
    .querySelectorAll(".js-page-products")
    .forEach(function (element, index) {
      var thisSectionId = $(element).data("section-id");
      theme.layoutSlider(".js-layout-slider-" + thisSectionId);
    }),
  document
    .querySelectorAll(".js-home-testimonials")
    .forEach(function (element, index) {
      var thisSectionId = $(element).data("section-id");
      theme.layoutSlider(".js-layout-slider-" + thisSectionId);
    }),
  document
    .querySelectorAll(".js-home-collection-list")
    .forEach(function (element, index) {
      var thisSectionId = $(element).data("section-id");
      theme.layoutSlider(".js-layout-slider-" + thisSectionId);
    }),
  document
    .querySelectorAll(".js-events-onboarding")
    .forEach(function (element, index) {
      var thisSectionId = $(element).data("section-id");
      theme.layoutSlider(".js-layout-slider-" + thisSectionId);
    }),
  $(".video-wrapper").fitVids(),
  $('.rte iframe[src*="youtube"]').parent().fitVids(),
  $('.rte iframe[src*="vimeo"]').parent().fitVids(),
  $(".rte table").wrap(
    "<div style='overflow:auto;-webkit-overflow-scrolling:touch'></div>"
  ),
  $(".js-product-cart-replace").appendAround(),
  $(".js-product-gallery-replace").appendAround(),
  $(document).on("click", ".js-search-trigger", function (e) {
    theme.mfpOpen("search"), e.preventDefault();
  }),
  theme.cart_ajax &&
    $(document).on("click", ".js-cart-trigger", function (e) {
      theme.mfpOpen("cart"), e.preventDefault();
    }),
  $(document).on("click", ".js-mobile-draw-trigger", function (e) {
    theme.mfpOpen("menu-draw"), e.preventDefault();
  }),
  $(document).on("click", ".js-store-availability-draw-trigger", function (e) {
    theme.mfpOpen("store-availability-draw"), e.preventDefault();
  }),
  $(document).on("click", ".js-collection-draw-trigger", function (e) {
    theme.mfpOpen("collection-draw"), e.preventDefault();
  }),
  $(document).on("click", ".js-close-mfp", function (e) {
    $.magnificPopup.close(), e.preventDefault();
  }),
  $(".o-layout--masonry")
    .imagesLoaded()
    .always(function () {
      theme.masonryLayout();
    }),
  document.querySelector(".js-product-recommendations") === null &&
    theme.runAjaxCart(),
  theme.headerScrollUp(),
  theme.productRecommendations(),
  theme.masonryLayout(),
  theme.triggerActive(),
  theme.headerNav(),
  theme.localizeToggle(),
  theme.magnificVideo(),
  theme.ageCheckerCookie(),
  theme.promoPopCookie(),
  theme.footerTweet(),
  theme.scrollToDiv(),
  theme.animFade(),
  theme.animScroll(),
  theme.productCollSwatch(),
  theme.cartCheckbox(),
  theme.homeEventFeeds(),
  theme.homeMaps(),
  theme.homeVideoGallery(),
  theme.homeMainCarousel(),
  theme.homeFeaturedProduct(),
  theme.homeSectionMargin(),
  theme.testimonialsCarousel(),
  theme.logoCarousel(),
  theme.collectionFormSubmit(),
  theme.priceRangeSlider(),
  theme.productMediaInit(),
  theme.thumbsCarousel(),
  theme.accordion(),
  theme.productZoom(),
  theme.StoreAvailability(),
  typeof Shopify > "u" && (Shopify = {}),
  Shopify.formatMoney ||
    (Shopify.formatMoney = function (cents, format) {
      var value = "",
        placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
        formatString = format || this.money_format;
      typeof cents == "string" && (cents = cents.replace(".", ""));
      function defaultOption(opt, def) {
        return typeof opt > "u" ? def : opt;
      }
      function formatWithDelimiters(number, precision, thousands, decimal) {
        if (
          ((precision = defaultOption(precision, 2)),
          (thousands = defaultOption(thousands, ",")),
          (decimal = defaultOption(decimal, ".")),
          isNaN(number) || number === null)
        )
          return 0;
        number = (number / 100).toFixed(precision);
        var parts = number.split("."),
          dollars = parts[0].replace(
            /(\d)(?=(\d\d\d)+(?!\d))/g,
            "$1" + thousands
          ),
          cents2 = parts[1] ? decimal + parts[1] : "";
        return dollars + cents2;
      }
      switch (formatString.match(placeholderRegex)[1]) {
        case "amount":
          value = formatWithDelimiters(cents, 2);
          break;
        case "amount_no_decimals":
          value = formatWithDelimiters(cents, 0);
          break;
        case "amount_with_comma_separator":
          value = formatWithDelimiters(cents, 2, ".", ",");
          break;
        case "amount_no_decimals_with_comma_separator":
          value = formatWithDelimiters(cents, 0, ".", ",");
          break;
      }
      return formatString.replace(placeholderRegex, value);
    });
//# sourceMappingURL=/cdn/shop/t/33/assets/theme.js.map?v=99743197341286312271637309594
