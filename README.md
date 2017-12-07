compound components

完成：toggle 组件底下显示 on/off 提示文字。

难点：不修改组件本身，补充组件 state 相关的附加内容。父利用子的 state。

解决 1： 通过 function props 将 toggle 组件的 state 传递给父组件的过渡 state，并用过渡
state 来控制父组件的 render\
解决 2： compound component 。 toggle 组件本身再分出好几个子组件，公用 toggle 的 state。

```html
<Toggle onToggle={on => console.log('toggle is', on)}>
  <Toggle.On>The button is on</Toggle.On>
  <Toggle.Off>The button is off</Toggle.Off>
  <Toggle.Button />
</Toggle>
```

这种模式，需要思考的是，所有的方法和 state 都在 Toggle 组件。如何让他的 children 收到这些
state 和方法？子组件写法： Toggle.On = ({ on }) => <... /> 然后用

```js
React.cloneElement(child, {
  on: this.state.on,
})
```

传递。
