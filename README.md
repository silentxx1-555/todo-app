# todo-app

一个纯前端的待办清单：`index.html` + `styles.css` + `app.js`，数据存在 localStorage，没有构建步骤，双击 `index.html` 就能跑。

## 跑起来

```sh
# 直接打开
start index.html          # Windows
# 或者起个静态服务
python -m http.server 8080
```

## 现在有什么

- 添加任务、勾选完成、删除任务
- 刷新页面数据还在（localStorage，键名 `todo.items`）

## 已知的待做项

见 [IDEAS.md](IDEAS.md)。这个仓库就是给 Super-agent 练手用的：把 IDEAS 里的一条，作为工单交给它。
