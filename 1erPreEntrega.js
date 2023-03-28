class ProductManager {

    constructor() {
        this.products = [];

    }

    getProducts() {
        return this.products;
    }


    addProduct({ title, description, price, thumbnail, code, stock }) {
        if (this.products.some((product) => product.code === code)) {
            throw new Error("El codigo del producto existe");
        }
    const id = this.generateUniqueId();
    const product = { id, title, description, price, thumbnail, code, stock };
    this.products.push(product);
        return product;
    }

    getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
        throw new Error("Producto no encontrado");
    }
        return product;
    }

    generateUniqueId() {
    let id;
    do {
        id = Math.random().toString(36).substr(2, 9);
    } while (this.products.some((product) => product.id === id));
        return id;
    }
    }

    const productManager = new ProductManager();

    console.log(productManager.getProducts());

    const newProduct = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
    };

    console.log(productManager.addProduct(newProduct));

    console.log(productManager.getProducts());

    try {
    productManager.addProduct(newProduct);

    } catch (error) {

    console.log(error.message); 
}

    console.log(productManager.getProductById("w0duv7o16"));

    try {
    productManager.getProductById("invalid-id");
    
    } catch (error) {

    console.log(error.message); 
    }