(function () {
    "use strict"

    angular.module('shop', [])
        .component('shopMainComponent', {
            template: `
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>To jest sklep!</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-9">
                            <products-list></products-list>
                        </div>
                        <div class="col-md-3">
                            <shopping-basket></shopping-basket>
                        </div>
                    </div>
                </div>
            `
        })
        .component('productsList', {
            template: `
                <div class="container-fluid">
                        <product-display-form ng-repeat="product in $ctrl.products" product="product"></product-display-form>
                </div>
            `,
            controller: function () {
                this.products = [
                    {
                        "id": "26462736-8ea7-5284-8629-257d21c76dbe",
                        "name": "Chips",
                        "description": "Bulobsi ure puzu aja gu zoseba zug hochen cibucev ragjozbug nuhosgef pah mul vavcem bucdodol dilef anwoj.",
                        "image": "http://api.adorable.io/avatars/100/pojko.png"
                    },
                    {
                        "id": "0bc272a4-08a9-58f9-b921-5574f247cea3",
                        "name": "Tuna",
                        "description": "Tih cefutji cogtem wikihi zum sijuco jiwji hekmasi wahgid uwsitu nabuec barujgad neguci bofuhmop tar ibi.",
                        "image": "http://api.adorable.io/avatars/100/pojko.jpg"
                    },
                    {
                        "id": "26462736-8ea7-5284-8629-257d21c76dbe",
                        "name": "Chips",
                        "description": "Bulobsi ure puzu aja gu zoseba zug hochen cibucev ragjozbug nuhosgef pah mul vavcem bucdodol dilef anwoj.",
                        "image": "http://api.adorable.io/avatars/100/pojko.png"
                    }
                ]
            }
        })
        .component("productDisplayForm", {
            template: `<div class="product-item gray-box">
                            <h4>{{$ctrl.product.name}}</h4>
                            <img src="{{$ctrl.product.image}}" />
                            <p>{{$ctrl.product.description}}</p>
                            <button type="submit" class="btn btn-default add-to-cart-button">Dodaj do koszyka</button>
                       </div>`,
            bindings: {product: '<'}
        })
        .component("shoppingBasket", {
            template: `<div class="gray-box">
                            <h1>Koszyk!</h1>
                       </div>`
        })
})();
