// Product information
// names[0] and prices[0] are for the same product
let names = ["Dotted Notebook A5", "Spiral Notebook B5", "Gel Pen Set (10 pcs)",
             "Highlighter Set (7 pcs)", "Mechanical Pencil 0.9", "Sticky Notes Pack",
             "Washi Tape Set", "Canvas Pencil Case"];

let prices = [12.90, 9.50, 15.00, 18.90, 7.90, 6.50, 11.00, 19.90];


// Get and save the quantity
// save the quantity in localStorage as "item0", "item1" ...

function getQty(number) {
  let qty = localStorage.getItem("item" + number);

  if (qty == null) {
    return 0; // product is not in the cart
  } else {
    return parseInt(qty); // change the text into a number
  }
}

function setQty(number, qty) {
  localStorage.setItem("item" + number, qty);
}


// Show the number of items in the menu
function updateCartCount() {
  let count = 0;

  for (let i = 0; i < 8; i++) {
    count = count + getQty(i);
  }

  document.getElementById("cart-count").innerHTML = count;
}


// Add to cart
function addToCart(number) {
  let qty = getQty(number);
  qty = qty + 1;
  setQty(number, qty);

  updateCartCount();
  alert(names[number] + " has been added to your cart.");
}


// Show the cart (View)
function showCart() {
  let rows = "";
  let total = 0;

  // only show the products that are in the cart
  for (let i = 0; i < 8; i++) {
    let qty = getQty(i);

    if (qty > 0) {
      let subtotal = prices[i] * qty;
      total = total + subtotal;

      rows = rows + "<tr>";
      rows = rows + "<td>" + names[i] + "</td>";
      rows = rows + "<td>RM " + prices[i].toFixed(2) + "</td>";
      rows = rows + "<td><input type='number' value='" + qty + "' onchange='updateQty(" + i + ", this.value)'></td>";
      rows = rows + "<td>RM " + subtotal.toFixed(2) + "</td>";
      rows = rows + "<td><button onclick='removeItem(" + i + ")'>Remove</button></td>";
      rows = rows + "</tr>";
    }
  }

  if (total == 0) {
    rows = "<tr><td colspan='5'>Your cart is empty.</td></tr>";
  }

  document.getElementById("cart-rows").innerHTML = rows;
  document.getElementById("cart-total").innerHTML = total.toFixed(2); // 2 decimal places
  updateCartCount();
}


// Change the quantity (Update)
function updateQty(number, newQty) {
  if (newQty == "" || newQty < 1) {
    alert("Quantity must be at least 1.");
    newQty = 1;
  }

  setQty(number, newQty);
  showCart();
}


// Remove one product
function removeItem(number) {
  localStorage.removeItem("item" + number);
  showCart();
}


// Remove all products
function clearCart() {
  const answer = confirm("Do you want to remove all items from your cart?");

  if (answer) {
    for (let i = 0; i < 8; i++) {
      localStorage.removeItem("item" + i);
    }
    showCart();
  }
}


// Checkout
function checkout() {
  let total = document.getElementById("cart-total").innerHTML;

  if (total == "0.00") {
    alert("Your cart is empty.");
  } else {
    const answer = confirm("Your total is RM " + total + ". Do you want to place the order?");

    if (answer) {
      for (let i = 0; i < 8; i++) {
        localStorage.removeItem("item" + i);
      }
      showCart();
      alert("Thank you for your order!");
    }
  }
}


// Contact form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    alert("Please enter your name.");
    return false;
  }

  if (email == "") {
    alert("Please enter your email.");
    return false;
  }

  if (message == "") {
    alert("Please enter your message.");
    return false;
  }

  // show the message
  document.getElementById("form-result").innerHTML = "Thank you, " + name + ". Your message has been sent!";
  document.getElementById("form-result").style.color = "green";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return false; // stay on the page because there is no server
}
