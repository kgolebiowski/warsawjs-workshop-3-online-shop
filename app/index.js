(function () {
    "use strict";

    angular.module('shop')
        .component('shopMainComponent', new ShopMainComponent())
        .component('productsList', new ProductsList())
        .component("productDisplayForm", new ProductDisplayForm())
        .component("shoppingBasket", new ShoppingBasket())
})();
