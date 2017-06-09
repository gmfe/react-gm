const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
    plugins: [
        autoprefixer({browsers: ['iOS >= 8', 'Android >= 4.1']}),
        precss
    ]
};