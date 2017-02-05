class ProductsList {
    constructor() {
        this.template = `
                <div class="container-fluid">
                        <product-display-form ng-repeat="product in $ctrl.products.list" product="product"></product-display-form>
                </div>
            `,
            this.controller = function (productsService) {
                this.products = productsService.get();
            }
    }
}
