(function() {
    "use strict";

    function cartService($http) {
        let selectedProducts = {list: []};

        return {
            get() {
                return selectedProducts;
            },
            addProduct(product) {
                selectedProducts.list.push(product);
            },
            removeProduct(id) {
                var foundIndex = selectedProducts.list.findIndex(function(element) {
                    return element.id == id;
                });

                selectedProducts.list.splice(foundIndex, 1);
            }
        }
    }

    angular.module('shop')
        .factory('cartService', cartService)
})();