document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout");

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const itemText = "Item " + (index + 1);
            
            // Adicione um botão de remoção ao item do carrinho
            const item = document.createElement("li");
            item.textContent = itemText;
            
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
        const cartItems = Array.from(cartItemsList.children)
            .map(item => item.textContent.split("Remover")[0]) // Remove o texto do botão "Remover"
            .join("%0A"); // Adicione uma quebra de linha entre os itens
            
        if (cartItems !== "") {
            const whatsappMessage = "Meu pedido:%0A" + cartItems; // Adicione uma quebra de linha no início
            const whatsappLink = "https://wa.me/seunumerodetelefone/?text=" + encodeURIComponent(whatsappMessage);
            window.location.href = whatsappLink;
        } else {
            alert("Seu carrinho está vazio!");
        }
    });
});
