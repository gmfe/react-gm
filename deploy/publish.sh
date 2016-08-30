#! /bin/sh

msg=${*:-"c"}

npm run deploy;
git add --all;
git commit -m "$msg";
git pull;
npm version patch;
git push origin master:master;
npm publish --registry='https://registry.npmjs.org';
cnpm sync react-gm;
npm version;
