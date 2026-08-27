let total = 0;


let cart = {};

function addItem(name, price) {
    if (cart[name]) {
        cart[name].qty++;
    } else {
        cart[name] = { price: price, qty: 1 };
    }
    total += price;
    updateBill();
}

function removeItem(name, price) {
    if (cart[name] && cart[name].qty > 0) {
        cart[name].qty--;
        total -= price;

        if (cart[name].qty === 0) {
            delete cart[name];
        }
    }
    updateBill();
}

function updateBill() {
    let billHTML = "";

    for (let item in cart) {
        billHTML += item + " x " + cart[item].qty +
                    " = ₹" + (cart[item].qty * cart[item].price) + "<br>";
    }

    document.getElementById("billItems").innerHTML = billHTML;
    document.getElementById("total").innerText = total;
}

function resetBill() {
    cart = {};
    total = 0;
    updateBill();
}
function showSuccess() {
let total = document.getElementById("total").innerText;

if (total === "Total: ₹ 0") {
    alert("⚠️ Please select items first!");
} else {
    alert("✅ Order Placed Successfully!");
}
}