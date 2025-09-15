// cart.js

// Add item to cart
function addToCart(productName, price, img) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let item = cart.find(p => p.name === productName);
  if (item) {
    item.qty += 1; // increase quantity if already in cart
  } else {
    cart.push({ name: productName, price: price, img: img, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " added to cart!");
}

// Display cart on cart.html
function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContainer = document.getElementById("cartItems");
  let totalPrice = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartContainer.innerHTML = "";
  cart.forEach((item, index) => {
    totalPrice += item.price * item.qty;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price} x ${item.qty}</p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + totalPrice;
}

// Remove item from cart
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}
