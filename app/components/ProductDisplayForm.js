class ProductDisplayForm {
    constructor() {
        this.template = `<div class="product-item gray-box">
                            <h4>{{$ctrl.product.name}}</h4>
                            <img src="{{$ctrl.product.image}}" />
                            <p>{{$ctrl.product.description}}</p>
                            <button type="submit" class="btn btn-default add-to-cart-button">Dodaj do koszyka</button>
                       </div>`;
        this.bindings = {product: '<'}
    }
}