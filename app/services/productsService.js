(function() {
    "use strict";

    function productsService($http) {
        // Przekazanie przez referencję!! Zamiast przez wartość!
        let products = {list: []};


        $http.get('http://localhost:2095/products').then(function (response) {
            products.list = response.data;
        });

        return {
            get() {
                return products;
            }
        }
    }

    angular.module('shop')
        .factory('productsService', productsService)
})();