import Introjs from 'intro.js';
import 'intro.js/introjs.css';

const introJs = Introjs.introJs();

window.introJs = introJs;

introJs.setOptions({
    exitOnOverlayClick: false
});

introJs.onbeforechange((targetElement) => {
    const step = targetElement.dataset['step'];
    if (step) {
        if (step === '5') {
            targetElement.childNodes[0].click();
        }
    }
});

module.exports = {
    start: () => {
        introJs.start();
    }
};