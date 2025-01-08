export class Cart {


    constructor(sku, title, price, id) {
        this.sku = sku;
        this.title = title;
        this.price = price;
        this.id = id;
        this.products = [];
    }

    addProduct(sku, title, price, id) {
        this.products.push(sku, title, price, id);
    }

    calculateTotal() {
        let total = 0;
        this.products.forEach(sku => {
            total += sku.price;
        });
        return total;
    }

    updateUnits(sku, units) {
        sku.units = units;
    }

    getProducts() {
        return this.products;
    }


}