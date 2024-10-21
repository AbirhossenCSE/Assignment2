const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
    
}

// display the product
const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}


// Add local storage
const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    
    const cartStringified = JSON.stringify(cart);
    
    localStorage.setItem('cart', cartStringified);
    
    
}

// show from localStorage
const displayProductFromLocalStorage = () =>{
    const saveCart = getStoredShoppingCart();
    console.log(saveCart);
    for(const product in saveCart){
        const quantity = saveCart[product]
        console.log(product, quantity);
        displayProduct(product, quantity)
        
    }
    
}

displayProductFromLocalStorage();