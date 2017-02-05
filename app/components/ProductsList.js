class ProductsList {
    constructor() {
        this.template = `
                <div class="container-fluid">
                    <form>
                      <div class="form-group">
                        <input class="form-control" id="searchInput" placeholder="Search" ng-model="$ctrl.query" autocomplete="off">
                      </div>
                      <button type="submit" class="btn btn-default" ng-click="$ctrl.search()">Szukaj</button>
                    </form>
                
                    <product-display-form ng-repeat="product in $ctrl.products.list" product="product"></product-display-form>
                </div>
            `,
            this.controller = function (productsService) {
                this.query = "";
                this.products = productsService.get();
                this.search = () => {
                    productsService.search(this.query);
                }
            }
    }
}
