### Render props

prop getter

解决问题：如果在 togglerProps 里存在的 prop（例如 onClick），被重写，会被覆盖。

方法：

```html
<div>
  <p>toggle is {on ? 'on' : 'off'}</p>
  <Switch on={on} {...getTogglerProps()} />
  <hr />
  <button {...getTogglerProps({ onClick: () => alert('it is' + on) })}>
    {on ? 'on' : 'off'}
  </button>
</div>
```

本节演示如何让这段代码成立。
