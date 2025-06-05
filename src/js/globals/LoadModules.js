import Cart from "../modules/cart";

/**
 * List of modules to load
 * Contains all modules which need to be initialised on the page.
 */
const modules = [
    Cart
];

/**
 * Find module elements on the page and start them
 * Iterated over each module defined in modules array.
 * For each module it queries the DOM for all elements matching the modules selector.
 * It then initialises each matched element by calling the methods start method passing
 * the DOM element as an argument.
 */
const start = () => {
    modules.forEach((singleModule) => {
        const moduleElements = document.querySelectorAll(singleModule.selector);
        moduleElements.forEach((moduleElement) => {
            const element = moduleElement;
            singleModule.start(element);
        });
    });
};

export default {
    start,
};
