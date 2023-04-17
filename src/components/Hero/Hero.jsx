import styles from './Hero.module.css'

export function Hero(props) {
  const { background } = props

  return (
    <section className={styles.hero}>
      <img src={background} alt="" />
    </section>
  )
}