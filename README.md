compound components

完成： compound component 模式下，允许 tag 结构各种变化。例如

```html
<Toggle onToggle={on => console.log('toggle is', on)}>
  <Toggle.On>The button is on</Toggle.On>
  <p>
    <Toggle.Off>The button is off</Toggle.Off>
  </p>
  <div>
    <Toggle.Button />
  </div>
</Toggle>
```

解决方式： 使用 context
