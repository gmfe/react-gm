#! /bin/sh

msg=${*:-"c"}

git add --all;
git commit -m "$msg";
npm version patch;
git push origin master:master;
npm publish --registry='https://registry.npmjs.org';
cnpm sync react-gm;
npm version;
