// Selector string to identify the cart module element on the page
const selector = "[data-module-cart]";

const start = (element) => {

    const addToBagButton = document.querySelector('.product-button');
    const navCartButton = document.querySelector('.navbar__cart-button');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartPanel = document.getElementById('cartPanel');
    const closeCartButton = document.getElementById('closeCart');
    const continueShoppingButton = document.querySelector('.cart-checkout__continue');

    /**
     * Function to open the cart overlay and panel
     * @param {boolean} withDelay - if true, shows a loading state before opening the cart
    */
    function openCart(withDelay) {
        if (withDelay) {

            addToBagButton.disabled = true; // Disable button to prevent multiple clicks.
            addToBagButton.innerHTML = '<span>Loading...</span>'; // Show loading text.

            // Timeout to simulate loading delay
            setTimeout(() => {
                // Show Cart by adding active/open classes
                cartOverlay.classList.add('active');
                cartPanel.classList.add('open');
                // Prevent page scroll while cart is opened
                document.body.style.overflow = 'hidden';
                // Re-enable button and restore default text.
                addToBagButton.disabled = false;
                addToBagButton.innerHTML = '<span>Add to bag</span>';
            }, 1000);
        } else {
            // Show cart without any delay
            cartOverlay.classList.add('active');
            cartPanel.classList.add('open');
            document.body.style.overflow = 'hidden';  // lock scroll
        }
    }

    function closeCart() {
        // Start closing animation by remove open class
        cartPanel.classList.remove('open');
        // After timeout hide overlay and restore scrolling
        setTimeout(() => {
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }, 300);
    }

    // Event listeners to open cart when click utilises withDelay param.
    addToBagButton.addEventListener('click', () => openCart(true));
    navCartButton.addEventListener('click', () => openCart(false));
    // Close cart when clicked.
    closeCartButton.addEventListener('click', closeCart);
    continueShoppingButton.addEventListener('click', closeCart);

    // Close cart if the user clicks on overlay outside cart panel.
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
