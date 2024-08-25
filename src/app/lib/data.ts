const API_URL_BASE = 'https://gateway.marvel.com'
const PUBLIC_API_KEY = '3a7dd5ed87f5857919f4bfa1f7e961db'
const HASH = '7207b41510aa825ca36b65f595e7816a'

async function fetchWithAuthorization (url: string) {
  const urlObj = new URL(url)
  urlObj.searchParams.append('ts', '1')
  urlObj.searchParams.append('apikey', PUBLIC_API_KEY)
  urlObj.searchParams.append('hash', HASH)
  urlObj.searchParams.append('limit', '3')
  const data = await fetch(urlObj)

  return data
}

export async function fetchCharacters () {
  try {
    const response = await fetchWithAuthorization(API_URL_BASE + '/v1/public/characters')
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error(error)
  }
}

export async function fetchCharacter (id: string) {
  try {
    const response = await fetchWithAuthorization(API_URL_BASE + '/v1/public/characters/' + id)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error(error)
  }
}
