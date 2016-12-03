import Introjs from 'intro.js';
import 'intro.js/introjs.css';

const introJs = Introjs.introJs();

introJs.setOptions({
    exitOnOverlayClick: false
});
introJs.onbeforechange((targetElement) => {
    console.log(targetElement);
    // return fa
    // introJs.goToStep(2);
});

module.exports = {
    start: () => {
        introJs.start();
    }
};