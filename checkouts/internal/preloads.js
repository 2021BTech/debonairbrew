(function () {
  var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
  var scripts = [
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.b61bac088f1e6bfa2cc6.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/2276.latest.en.4ce24876729015b4b969.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/6386.latest.en.a195dc32f3dbe34d6aa5.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.en.d3bc65d7a91c6d71a13d.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.372be379de367c0ee2a6.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.en.e8b98a9ed829efc0c730.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/9317.latest.en.ea1b54561e1cad3bf9e1.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.en.8ff27283522475e94436.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.en.5117e670600bcaf49bb5.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/8933.latest.en.0ed90c0f3ce1494d7c44.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.latest.en.979b33e6d295832a38de.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/5137.latest.en.4cf74cdc91d53d11c8f6.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.latest.en.80dc15d80fb3eb83ddf0.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.latest.en.31d0070267df02c0e9c5.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.6ad5ff327729c9037699.js",
  ];
  var styles = [
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/2276.latest.en.57ef3369c9cd93bde4db.css",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.19558d19ece777c39c33.css",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.8039276cabb7faecfb04.css",
  ];
  var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
  var fontPrefetchUrls = [
    "https://fonts.shopifycdn.com/lato/lato_n4.c86cddcf8b15d564761aaa71b6201ea326f3648b.woff2?h1=ZGVib25haXJ0ZWEuY28udWs&hmac=b5f12a82bf422fa61f72d862174f9410496016c703ca19ece36d08ca70aa90e4",
    "https://fonts.shopifycdn.com/lato/lato_n7.f0037142450bd729bdf6ba826f5fdcd80f2787ba.woff2?h1=ZGVib25haXJ0ZWEuY28udWs&hmac=717d274108c226729372e801137afe5dfee44e944e36f2da52d26d9d74806a79",
  ];
  var imgPrefetchUrls = [
    "https://cdn.shopify.com/s/files/1/0777/2865/files/Artboard_1_97ff98f6-f943-4ef9-98d0-de5ecdd4333b_x320.png?v=1630548234",
  ];

  function preconnect(url, callback) {
    var link = document.createElement("link");
    link.rel = "dns-prefetch preconnect";
    link.href = url;
    link.crossOrigin = "";
    link.onload = link.onerror = callback;
    document.head.appendChild(link);
  }

  function preconnectAssets() {
    var resources = [baseURL].concat(fontPreconnectUrls);
    var index = 0;
    (function next() {
      var res = resources[index++];
      if (res) preconnect(res, next);
    })();
  }

  function prefetch(url, as, callback) {
    var link = document.createElement("link");
    if (link.relList.supports("prefetch")) {
      link.rel = "prefetch";
      link.fetchPriority = "low";
      link.as = as;
      if (as === "font") link.type = "font/woff2";
      link.href = url;
      link.crossOrigin = "";
      link.onload = link.onerror = callback;
      document.head.appendChild(link);
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onloadend = callback;
      xhr.send();
    }
  }

  function prefetchAssets() {
    var resources = [].concat(
      scripts.map(function (url) {
        return [url, "script"];
      }),
      styles.map(function (url) {
        return [url, "style"];
      }),
      fontPrefetchUrls.map(function (url) {
        return [url, "font"];
      }),
      imgPrefetchUrls.map(function (url) {
        return [url, "image"];
      })
    );
    var index = 0;
    (function next() {
      var res = resources[index++];
      if (res) prefetch(res[0], res[1], next);
    })();
  }

  function onLoaded() {
    preconnectAssets();
    prefetchAssets();
  }

  if (document.readyState === "complete") {
    onLoaded();
  } else {
    addEventListener("load", onLoaded);
  }
})();
