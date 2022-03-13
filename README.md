# test
学习github使用

上传本地项目
git init //变成可管理(打开隐藏项目,观察是否有git文件
git add ./不但可以跟单一文件，还可以跟通配符，更可以跟目录。一个点就把当前目录下所有未追踪的文件全部add了 
git commit -m "提交的注释" //把文件提交到仓库
git remote add origin git@github.com:XX/XX.git //关联远程仓库
git push -u origin master/分支 //把本地库的所有内容推送到远程库上
报错信息：error: remote origin already exists.
订正:git remote rm origin
