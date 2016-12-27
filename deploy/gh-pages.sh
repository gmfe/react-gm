#! /bin/sh

rm -rf docs;
mkdir docs;
NODE_ENV=production webpack --config webpack.config.dev.js -p;
cp index.html docs;
cp -r build docs;
git commit --all;
git commit -m 'docs generate';
git push;
