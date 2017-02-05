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
            },
            search(query) {
                if(query == "") {
                    $http.get('http://localhost:2095/products').then(function (response) {
                        products.list = response.data;
                    });
                } else {
                    products.list = products.list.filter(function (value) {
                        return value.name.startsWith(query);
                    });
                }
            }
        }
    }

    angular.module('shop')
        .factory('productsService', productsService)
})();