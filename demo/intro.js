import Introjs from 'intro.js';
import 'intro.js/introjs.css';

const introJs = Introjs.introJs();

window.introJs = introJs;

introJs.setOptions({
    exitOnOverlayClick: false
});

// const getCurrentTarget = () => {
//     return introJs._introItems[introJs._currentStep];
// };

introJs.onbeforechange((targetElement) => {
    const step = targetElement.dataset['step'];
    if (step) {
        if (step === '3') {
            targetElement.click();
        } else if (step === '4') {
            targetElement.click();
        }
    }
    console.log(targetElement, targetElement.dataset['step']);
});

module.exports = {
    start: () => {
        introJs.start();
    }
};