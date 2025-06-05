import Cart from "../modules/cart";

/**
 * List of modules to load
 */
const modules = [
    Cart
];

/**
 * Find module elements on the page and start them
 */
const start = () => {
    modules.forEach((singleModule) => {
        const moduleElements = document.querySelectorAll(singleModule.selector);
        moduleElements.forEach((moduleElement) => {
            const element = moduleElement; // No type casting needed in JS
            singleModule.start(element);
        });
    });
};

export default {
    start,
};
