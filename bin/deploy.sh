npm test &&
  flow check &&
  npm run build-hintable &&
  git add hintable &&
  git commit -m "build hintable for \"$(git --no-pager log -n 1 --pretty=oneline)\"" hintable/;
git push
