// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  
    if (document.body.classList.contains("dark-mode")) {
      document.getElementById("darkModeToggle").textContent = "☀️ Light Mode";
    } else {
      document.getElementById("darkModeToggle").textContent = "🌙 Dark Mode";
    }
  });
  
  // Cart System
  const cart = [];
  
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
      const product = e.target.dataset.product;
      const price = parseFloat(e.target.dataset.price);
  
      cart.push({ product, price });
      updateCart();
    });
  });
  
  function updateCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = "";
  
    cart.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
      cartItemsContainer.appendChild(listItem);
    });
  
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const totalPriceElement = document.createElement("li");
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    cartItemsContainer.appendChild(totalPriceElement);
  }
  
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some items before checking out.");
    } else {
      alert("Checkout functionality coming soon!");
    }
  });
  