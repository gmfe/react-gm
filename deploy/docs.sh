#! /bin/sh

rm -rf docs;
mkdir docs;
NODE_ENV=production webpack -p;
cp index.html docs;
cp -r build docs;
git add --all;
git commit -m 'docs generate';
git push origin master:master;
