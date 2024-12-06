const cart = [];

// Funkcja dodawania produktu do koszyka
function addToCart(product) {
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
}

// Funkcja wyświetlania zawartości koszyka
function updateCartDisplay() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";

    cart.forEach(item => {
        const productElement = document.createElement("div");
        productElement.textContent = ${item.name} - Ilość: ${item.quantity};
        cartElement.appendChild(productElement);
    });
}

// Przykładowe produkty
const sampleProduct = { name: "Tropical Delight", price: 28 };

// Przykladowe użycie
document.getElementById("add-to-cart").addEventListener("click", () => addToCart(sampleProduct));