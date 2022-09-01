import styles from "../App.module.css";

export default function HexCard(props) {
  return (

  <div style={{background: props.color}} class={styles.hexCard}>
    HexCard {props.color}
  </div>
  )
}
