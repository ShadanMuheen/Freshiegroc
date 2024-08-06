let cartCount = 0;

document.querySelectorAll('.addToCartButton').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        document.getElementById('cartCount').innerText = cartCount;
        alert('Item added to cart!');
    });
});