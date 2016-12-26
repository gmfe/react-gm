#! /bin/sh

#git branch -D gh-pages;
#git checkout -b gh-pages;
#NODE_ENV=production webpack --config webpack.config.dev.js -p;
#rm -rf .gitignore;
#rm -rf .idea;
#rm -rf .happypack;
#git add --all;
#git commit -m 'gh-pages';
#git push origin gh-pages:gh-pages -f;
#git checkout master;

rm -rf doc;
mkdir doc;
NODE_ENV=production webpack --config webpack.config.dev.js -p;
cp index.html doc;
cp -r build doc;
git commit -am 'doc generate';
git push;
