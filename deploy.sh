rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@github.com:AeahKa/V3-UI-Website.git &&
git push -f -u origin master &&
cd -
echo https://aeahka.github.io/V3-UI-Website/index.html