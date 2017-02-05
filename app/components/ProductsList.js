class ProductsList {
    constructor() {
        this.template = `
                <div class="container-fluid">
                        <product-display-form ng-repeat="product in $ctrl.products" product="product"></product-display-form>
                </div>
            `,
            this.controller = function () {
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
    }
}
