import styles from './search-bar.module.css'
export default function SearchBar () {
  return (
    <div className={styles.searchBar}>
      <span className={styles.icon}><img src='/search-icon.svg' alt='Search icon' /></span>
      <input className={styles.input} type='text' placeholder='Search a character...' />
    </div>
  )
}
