# 个人学术主页

这是一个可以部署在GitHub Pages上的个人学术主页模板。

## 特点

- 响应式设计，适配各种屏幕尺寸
- 干净现代的UI设计
- 包含学术人员需要的各种部分：关于我、研究方向、发表论文、项目、教学经历和联系方式
- 轻量级代码，快速加载
- 论文筛选功能

## 如何部署到GitHub Pages

1. 在GitHub上创建一个新的仓库，命名为 `用户名.github.io`（例如：`johndoe.github.io`）
2. 克隆此仓库到本地：
   ```
   git clone https://github.com/用户名/用户名.github.io.git
   ```
3. 将此模板的所有文件复制到克隆的仓库目录中
4. 根据需要自定义内容：
   - 在`index.html`中更新您的个人信息
   - 替换`images/avatar.jpg`为您的照片
   - 更新研究方向、论文、项目和其他信息
5. 提交更改并推送到GitHub：
   ```
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
6. 在GitHub仓库设置中启用GitHub Pages：
   - 进入仓库设置
   - 找到"GitHub Pages"部分
   - 从"Source"下拉菜单中选择"main"分支
   - 点击"Save"

几分钟后，您的网站将可通过`https://用户名.github.io`访问。

## 自定义

### 更改颜色主题

要更改网站的主色调，编辑`css/style.css`文件，替换以下颜色代码：

- 主色调：`#2a7ae2`
- 次要色调：`#1756a9`

### 添加或移除部分

可以通过编辑`index.html`文件来添加、移除或重新排列各个部分。每个部分都包含在一个带有`section`类和特定ID的`<section>`标签中。

### 添加谷歌分析

要添加谷歌分析，请在`<head>`标签的末尾添加您的谷歌分析跟踪代码。

## 许可

请随意使用和修改此模板用于您的个人学术网站。