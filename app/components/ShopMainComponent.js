class ShopMainComponent {
    constructor() {
        this.template = `
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
    }
}