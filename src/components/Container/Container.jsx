import style from './Container.module.css'
console.log(style)

export function Container(props) {
  const { className } = props

  return (
    <h1 className={`${style.container} ${className}`}>Container Component</h1>
  )
}