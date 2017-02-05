class ShoppingCart {
    constructor() {
        this.template = `<div class="gray-box">
                            <h1>Koszyk!</h1>
                            <ul>
                                <li ng-repeat="product in $ctrl.products.list">
                                    <button type="button" class="btn btn-danger btn-xs" ng-click="$ctrl.deleteProduct(product.id)">X</button>
                                    <span>{{ product.name }}</span>
                                </li>
                            </ul>
                       </div>`;
        this.controller = function (cartService) {
            this.products = cartService.get();
            this.deleteProduct = function (id) {
                cartService.removeProduct(id);
            }
        };
    }
}