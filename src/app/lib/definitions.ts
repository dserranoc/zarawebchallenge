export interface RootResponse<ResultType> {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: Data<ResultType>
}

export interface Data<ResultType> {
  offset: number
  limit: number
  total: number
  count: number
  results: ResultType[]
}

export interface Character {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Image
  resourceURI: string
  comics: ResourceList
  series: ResourceList
  stories: ResourceList
  events: ResourceList
  urls: URL[]
}

export interface Comic {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: any[]
  resourceURI: string
  urls: URL[]
  series: SeriesSummary
  variants: SeriesSummary[]
  collections: any[]
  collectedIssues: any[]
  dates: DateElement[]
  prices: Price[]
  thumbnail: Image
  images: any[]
  creators: ResourceList[]
  characters: ResourceList
  stories: ResourceList
  events: ResourceList
}

export interface Creator {
  id: number
  firstName: string
  middleName: string
  lastName: string
  suffix: string
  fullName: string
  modified: string
  thumbnail: Image
  resourceURI: string
  comics: ComicSummary[]
  series: SeriesSummary[]
  stories: StorySummary[]
  events: EventSummary[]
  urls: URL[]
}

export interface Event {
  id: number
  title: string
  description: string
  resourceURI: string
  urls: URL[]
  modified: string
  start: Date
  end: Date
  thumbnail: Image
  creators: ResourceList
  characters: ResourceList
  stories: ResourceList
  comics: ResourceList
  series: ResourceList
  next: EventSummary
  previous: EventSummary
}

export interface Series {
  id: number
  title: string
  description: string
  resourceURI: string
  urls: URL[]
  startYear: number
  endYear: number
  rating: string
  type: string
  modified: string
  thumbnail: Image
  creators: ResourceList
  characters: ResourceList
  stories: ResourceList
  comics: ResourceList
  events: ResourceList
  next: SeriesSummary
  previous: SeriesSummary
}

export interface Story {
  id: number
  title: string
  description: string
  resourceURI: string
  type: string
  modified: string
  thumbnail: Image
  creators: ResourceList
  characters: ResourceList
  series: ResourceList
  comics: ResourceList
  events: ResourceList
  originalIssue: ComicSummary
}

export interface Image {
  path: string
  extension: string
}

interface ResourceList {
  available: number
  collectionURI: string
  returned: number
  items: CharacterSummary[] | ComicSummary[] | SeriesSummary[] | EventSummary[] | StorySummary[] | CreatorSummary[]
}

export interface CharacterSummary {
  resourceURI: string
  name: string
  role?: string
  type?: string
}

export interface ComicSummary {
  resourceURI: string
  name: string
}

export interface SeriesSummary {
  resourceURI: string
  name: string
}

export interface EventSummary {
  resourceURI: string
  name: string
}

export interface StorySummary {
  resourceURI: string
  name: string
  type: string
}

export interface CreatorSummary {
  role: string
}

export interface Price {
  type: string
  price: number
}

export interface DateElement {
  type: string
  date: string
}
