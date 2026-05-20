# 小狐狸历险记

《小狐狸历险记》是一个竖向滚动的治愈系漫画网页项目，风格参考儿童绘本与 webtoon。项目适合部署到 Vercel，也可以扩展为 GitHub Pages 静态站点。

## 技术栈

- React + Vite
- Tailwind CSS
- Framer Motion
- CSS 占位插画，后续可替换为正式图片

## 如何运行

安装依赖：

```bash
npm install
```

启动本地开发服务：

```bash
npm run dev
```

生产构建：

```bash
npm run build
```

构建产物会输出到 `dist/`。

如果 Windows PowerShell 拦截 `npm.ps1`，可以改用：

```bash
npm.cmd install
npm.cmd run dev
```

## 如何修改故事

故事数据在：

```text
src/data/storyData.js
```

主要字段说明：

- `cover.title`：封面标题
- `cover.subtitle`：封面副标题
- `storyPanels`：漫画格列表
- `chapter`：章节编号文字
- `title`：该漫画格标题
- `text`：该漫画格正文，建议控制在 1 到 3 句
- `visual`：当前 CSS 占位视觉类型
- `stage`：视觉阶段，可用 `forest`、`cave`、`home`、`suns`
- `image`：正式插画地址，留空时显示 CSS 占位视觉
- `palette`：占位视觉的 Tailwind 渐变色

新增章节时，复制一个 `storyPanels` 中的对象并修改字段即可。

## 如何替换插画

每个 panel 都预留了 `image` 字段。替换方式：

1. 将图片放入 `public/images/`，例如 `public/images/chapter-1.jpg`。
2. 在 `src/data/storyData.js` 中填写图片路径：

```js
{
  title: '森林启程',
  image: '/images/chapter-1.jpg',
}
```

当 `image` 有值时，`ComicPanel` 会优先显示正式图片；当 `image` 为空字符串时，会继续显示当前 CSS 占位视觉。

建议正式插画使用竖版比例，例如 `4:5`、`3:4` 或更适合 webtoon 的长图构图。

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 登录 Vercel，选择 `Add New Project`。
3. 导入该 GitHub 仓库。
4. Framework Preset 选择 `Vite`。
5. Build Command 使用：

```bash
npm run build
```

6. Output Directory 使用：

```text
dist
```

7. 点击 Deploy。

部署完成后，Vercel 会在每次推送代码时自动重新构建并发布。

## GitHub Pages 提示

如果要部署到 GitHub Pages，并且仓库不是用户主页仓库，需要在 `vite.config.js` 中设置 `base` 为仓库名：

```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
});
```

然后使用 GitHub Actions 构建并发布 `dist/`。
