import React from 'react'
import styles from './character-card.module.css'

interface CharacterCardProps {
  name: string
  thumbnail: string
}

export default function CharacterCard (props: CharacterCardProps) {
  return (
    <article className={styles.characterCard}>
      <div className={styles.characterThumbnail}>
        <img className={styles.thumbnailResource} src={props.thumbnail} alt={props.name + ' thumbnail'} />
      </div>
      <div className={styles.separator} />
      <div className={styles.characterInfo}>
        {props.name}
      </div>
    </article>
  )
}
