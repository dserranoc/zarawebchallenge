import { fetchCharacters } from '@/app/lib/data'
import { Character, RootResponse } from '@/app/lib/definitions'
import CharacterCard from '../CharacterCard/character-card'
import styles from './characters-list.module.css'

export default async function CharactersList () {
  const response: RootResponse<Character> = await fetchCharacters()

  return (
    <div className={styles.grid}>
      {response.data.results.map((character: Character) => (<CharacterCard name={character.name} thumbnail={character.thumbnail.path + '.' + character.thumbnail.extension} key={character.id} />))}
    </div>
  )
}
