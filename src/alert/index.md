---
title: Alert
  nav: Component
  path: /common
group:
  title: feedback
mobile: false
---

# Alert

提示、警告话术

#### 支持参数

1. 支持不同状态用不同背景颜色展示
2. icon 的展示
3. 支持关闭
4. 使用方可穿入 className 进行样式修改

### 不同类型

包括 info、success、warning、error4 种状态
<code src="./demo/demo1.tsx"></code>

### 展示标题

通过设置`title`可以添加标题，`message`会作为内容展示
<code src="./demo/demo2.tsx"></code>

### 关闭提示

通过设置`closeable`展示关闭按钮，点击后隐藏提示信息
<code src="./demo/demo3.tsx"></code>

### 可隐藏提示 icon

通过传入`showIcon=false` 可隐藏图标
<code src="./demo/demo4.tsx"></code>

### API

| 参数      | 说明              | 类型                            | 默认值  |
| --------- | ----------------- | ------------------------------- | ------- |
| style     | 自定义样式        | `CSSProperties`                 | `--`    |
| className | 自定义类名        | `string/string[]`               | `--`    |
| type      | 类型              | `info、success、warning、error` | `info`  |
| title     | 显示的标题        | `string`                        | `--`    |
| message   | 显示的内容        | `string`                        | `--`    |
| showIcon  | 是否显示提示 icon | `boolean`                       | `true`  |
| closeable | 是否可以关闭提示  | `boolean`                       | `false` |
| onClose   | 关闭回掉函数      | `Function`                      | `--`    |
