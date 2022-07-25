#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build
# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'rcbb.cc' >CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:rcbb-cc/rcbb-blog.git
else
  msg='来自github action的自动部署'
  githubUrl=https://rcbb-cc:${GITHUB_TOKEN}@github.com/rcbb-cc/rcbb-blog.git
  git config --global user.name "rcbb.cc"
  git config --global user.email "www.rcbb.cc@gmail.com"
fi
git init
git add -A
git commit -m "${msg}"
echo "上传github开始"
# 推送到github
git push -f $githubUrl master:gh-pages
echo "上传github完成"

# 创建release目录
mkdir ../release
# 将dist中的内容压缩到release.tgz
tar -zcvf ../release/release.tgz *