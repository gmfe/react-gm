#! /bin/sh

npm version patch;
git commit -am "version patch";
git push origin master:master;
npm publish --registry='https://registry.npmjs.org';
cnpm sync react-gm;
npm version;
