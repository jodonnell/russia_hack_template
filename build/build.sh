./build/create_tag.sh || exit 1
git push origin master
git push origin --tags
