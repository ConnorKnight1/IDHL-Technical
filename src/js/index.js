import '../styles/main.scss';

console.log('Webpack + Sass setup complete');

// TODO Abstract out into a loadModules.

const addToBagButton = document.querySelector('.product-button');
const navCartButton = document.querySelector('.navbar__cart-button');
const cartOverlay = document.getElementById('cartOverlay');
const cartPanel = document.getElementById('cartPanel');
const closeCartButton = document.getElementById('closeCart');

function openCart(withDelay = false) {
    if (withDelay) {
        addToBagButton.disabled = true;
        addToBagButton.innerHTML = '<span>Loading...</span>';

        setTimeout(() => {
            cartOverlay.classList.add('active');
            cartPanel.classList.add('open');
            addToBagButton.disabled = false;
            addToBagButton.innerHTML = '<span>Add to bag</span>';
        }, 1000);
    } else {
        cartOverlay.classList.add('active');
        cartPanel.classList.add('open');
    }
}

function closeCart() {
    cartPanel.classList.remove('open');
    setTimeout(() => cartOverlay.classList.remove('active'), 300);
}

addToBagButton.addEventListener('click', () => openCart(true));
navCartButton.addEventListener('click', () => openCart(false));
closeCartButton.addEventListener('click', closeCart);

cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
        closeCart();
    }
});
