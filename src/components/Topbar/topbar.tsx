import styles from './topbar.module.css'
export default function Topbar () {
  return (
    <nav className={styles.nav}>
      <div>
        <img className={styles.logo} src='/marvel-logo.svg' alt='Marvel logo' />
      </div>

      <div className={styles.favorites}>
        <img className={styles.favoritesIcon} src='/heart-icon.svg' alt='Favorites' />
        <span className={styles.favoritesCounter}>3</span>
      </div>
    </nav>
  )
}
