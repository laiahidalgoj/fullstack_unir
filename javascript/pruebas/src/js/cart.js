export class Cart {

    constructor(sku, title, price, units) {
        this.sku = sku;
        this.title = title;
        this.price = parseFloat(price);
        this.units = parseInt(units);
        this.products = [];
    }

    // Add a method to get the products
    getProducts() {
        return this.products;
    }

    // Add a method to add a product
    addProduct(sku, title, price, units = 1) {
        if (units <= 0) {
            throw new Error("Units must be greater than 0.");
        }
        if (price < 0) {
            throw new Error("Price cannot be negative.");
        }

        const existProduct = this.products.find(product => product.title === title);

        if (existProduct) {
            existProduct.units += units;
        } else {
            this.products.push({id: sku, title, price, units});
        }
    }

    addTitle(sku, title) {

    }

    getUnits(title) {
        const product = this.products.find(product => product.title === title);

        if (product) {
            return product.units;
        }
    }

    // Add method to calculate the total price of the products
    calculateTotal(price, units) {
        let total = 0;
        this.products.forEach(product => {
            total += Number(product.price);
        });

        return total;
    }

    // Calculate total product
    calculateTotalProduct(price, units) {
        return price * units;
    }

    updateTotalProduct(sku, totalUnit) {
        const total = this.calculateTotalProduct(sku);
        totalUnit.textContent = `${totalUnit}€`
    }

    // Add a method to update a product
    updateProduct(sku, title, price) {
        const product = this.products.find(product => product.id === sku);

        if (!product) {
            throw new Error(`Product with SKU ${sku} not found.`);
        }

        if (title) product.title = title;
        if (price) product.price = price;
    }


    updateUnits(value) {
        this.units = this.units || 0;
        this.units = Math.max(0, this.units + value);

        const unitCountElement = document.getElementById('unitCount').innerText = units;
        if (unitCountElement) {
            unitCountElement.innerText = this.units;
        } else {
            throw new Error('Element with id unitCount not found.');
        }
    }


    // Add a method to delete a product
    deleteProduct(sku) {
        const existProduct = this.products.findIndex(product => product.id === sku);

        if (existProduct !== -1) {
            this.products.splice(existProduct, 1)
        } else {
            throw new Error(`Product with SKU ${sku} not found.`);
        }
    }

    postDetail = (post) => {
        const postTitle = document.querySelector(".title-box");
        postTitle.textContent = '';

        // creo title
        const title = document.createElement('p')
        title.textContent = `Title: ${post.title}`
        postTitle.appendChild(title);

        // creo price
        const price = document.createElement('p')
        price.textContent = `Price: ${post.price}`
        postTitle.appendChild(price);
    }

}


