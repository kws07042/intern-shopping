class Cart {
    constructor(cart = {}) {
        this.products = cart.products || {};
        this.totalProducts = cart.totalProducts || 0;
        this.totalPrice = cart.totalPrice || 0;
    }

    addProduct(product, id) {
        let cartItem = this.products[id];
        if (!cartItem) {
            cartItem = this.products[id] = {
                product: product,
                quantity: 0,
                price: 0
            };
        }

        cartItem.quantity++;
        cartItem.price = cartItem.product.price * cartItem.quantity;

        this.totalProducts++;
        this.totalPrice += cartItem.product.price;
    }

    removeProduct(id) {
        if (this.products[id]) {
            this.totalProducts -= this.products[id].quantity;
            this.totalPrice -= this.products[id].price;
            delete this.products[id];
        }
    }

    // getter
    getProducts() {
        return Object.this.values(this.products);
    }
}

export default Cart;