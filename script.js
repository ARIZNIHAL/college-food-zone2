let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;

    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart");
    let totalDisplay = document.getElementById("total");

    cartList.innerHTML = "";

    cart.forEach(c => {
        let li = document.createElement("li");
        li.textContent = `${c.item} - ₹${c.price}`;
        cartList.appendChild(li);
    });

    totalDisplay.textContent = "Total: ₹" + total;
}

function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}
