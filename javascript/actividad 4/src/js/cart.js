export class Cart {
    #products;

    constructor() {
        this.#products = [];
    }

    // GET PRODUCTS
    getProducts() {
        return this.#products.map(product => ({
            sku: product.sku,
            title: product.title,
            price: product.price,
            units: product.units,
        }));
    }

    // ADD PRODUCT
    addProduct(sku, title, price, units = 1) {
        if (units <= 0) {
            throw new Error("Units must be greater than 0.");
        }
        if (price < 0) {
            throw new Error("Price cannot be negative.");
        }

        const existProduct = this.#products.find(product => product.sku === sku);

        if (existProduct) {
            existProduct.units += units;
        } else {
            this.#products.push({
                sku,
                title,
                price: parseFloat(price),
                units: parseInt(units),
            });
        }
    }

    // GET UNITS
    getUnits(sku) {
        const product = this.#products.find(product => product.sku === sku);
        return product ? product.units : 0;
    }

    // CALCULATE TOTAL
    calculateTotal() {
        return this.#products
            .reduce((total, product) => total + product.price * product.units, 0)
            .toFixed(2);
    }

    // UPDATE UNITS
    updateUnits(sku, increment) {
        const product = this.#products.find(product => product.sku === sku);

        if (!product) {
            throw new Error(`Product with SKU ${sku} not found.`);
        }

        product.units = Math.max(0, product.units + increment);

        if (product.units === 0) {
            this.deleteProduct(sku);
        }
    }

    // DELETE PRODUCT
    deleteProduct(sku) {
        const productIndex = this.#products.findIndex(product => product.sku === sku);

        if (productIndex === -1) {
            throw new Error(`Product with SKU ${sku} not found.`);
        }

        this.#products.splice(productIndex, 1);

    }
}
