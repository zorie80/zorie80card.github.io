document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout");

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const item = document.createElement("li");
            item.textContent = "Item " + (index + 1);
            
            // Adicione um botão de remoção ao item do carrinho
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remover";
            removeButton.addEventListener("click", function () {
                item.remove();
            });
            item.appendChild(removeButton);
            
            cartItemsList.appendChild(item);
        });
    });

    checkoutButton.addEventListener("click", function () {
        const cartItems = cartItemsList.textContent.trim();
        if (cartItems !== "") {
            const whatsappMessage = "Meu pedido:\n" + cartItems;
            const whatsappLink = "https://wa.me/5599984020352/?text=" + encodeURIComponent(whatsappMessage);
            window.location.href = whatsappLink;
        } else {
            alert("Seu carrinho está vazio!");
        }
    });
});
