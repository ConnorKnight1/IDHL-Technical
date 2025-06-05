const selector = "[data-module-cart]";

const start = (element) => {
    const addToBagButton = document.querySelector('.product-button');
    const navCartButton = document.querySelector('.navbar__cart-button');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartPanel = document.getElementById('cartPanel');
    const closeCartButton = document.getElementById('closeCart');
    const continueShoppingButton = document.querySelector('.cart-checkout__continue');

    function openCart(withDelay) {
        if (withDelay) {
            addToBagButton.disabled = true;
            addToBagButton.innerHTML = '<span>Loading...</span>';

            setTimeout(() => {
                cartOverlay.classList.add('active');
                cartPanel.classList.add('open');
                document.body.style.overflow = 'hidden';  // lock scroll
                addToBagButton.disabled = false;
                addToBagButton.innerHTML = '<span>Add to bag</span>';
            }, 1000);
        } else {
            cartOverlay.classList.add('active');
            cartPanel.classList.add('open');
            document.body.style.overflow = 'hidden';  // lock scroll
        }
    }

    function closeCart() {
        cartPanel.classList.remove('open');
        setTimeout(() => {
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';  // restore scroll
        }, 300);
    }

    addToBagButton.addEventListener('click', () => openCart(true));
    navCartButton.addEventListener('click', () => openCart(false));
    closeCartButton.addEventListener('click', closeCart);
    continueShoppingButton.addEventListener('click', closeCart);

    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            closeCart();
        }
    });
};

export default {
    selector,
    start,
};
