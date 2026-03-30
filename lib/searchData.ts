export type SearchCategory = 'Character' | 'Clan' | 'Law' | 'Lore'

export interface SearchEntry {
  id: string
  title: string
  subtitle: string
  category: SearchCategory
  href: string
  keywords: string[]
}

export const searchData: SearchEntry[] = [
  // Characters
  {
    id: 'deva',
    title: 'Deva',
    subtitle: 'The Salaar — Warrior of Shouryaanga',
    category: 'Character',
    href: '/situation#deva',
    keywords: ['deva', 'salaar', 'warrior', 'prabhas', 'protagonist', 'shouryaanga'],
  },
  {
    id: 'vardha',
    title: 'Vardha',
    subtitle: 'Prince of Khansaar — Deva\'s sworn brother',
    category: 'Character',
    href: '/situation#vardha',
    keywords: ['vardha', 'prince', 'khansaar', 'brother', 'friend', 'mannar'],
  },
  {
    id: 'bhaarava',
    title: 'Bhaarava',
    subtitle: 'The Exile — Vengeful heir of Shouryaanga',
    category: 'Character',
    href: '/situation#bhaarava',
    keywords: ['bhaarava', 'exile', 'villain', 'shouryaanga', 'revenge', 'antagonist'],
  },
  {
    id: 'raja-mannar',
    title: 'Raja Mannar',
    subtitle: 'The Karta — Ruler of Khansaar',
    category: 'Character',
    href: '/situation#raja-mannar',
    keywords: ['raja mannar', 'karta', 'king', 'ruler', 'mannar', 'tyrant'],
  },
  {
    id: 'radha-rama',
    title: 'Radha Rama Raikar',
    subtitle: 'Guardian of the Nibandhana',
    category: 'Character',
    href: '/situation#radha-rama',
    keywords: ['radha rama', 'raikar', 'guardian', 'nibandhana', 'constitution'],
  },
  {
    id: 'aadhya',
    title: 'Aadhya',
    subtitle: 'Deva\'s love — outsider to Khansaar',
    category: 'Character',
    href: '/situation#aadhya',
    keywords: ['aadhya', 'love', 'romance', 'outsider', 'civilian'],
  },

  // Clans
  {
    id: 'clan-mannar',
    title: 'Mannar Clan',
    subtitle: 'The Bull Clan — Currently Ruling',
    category: 'Clan',
    href: '/world#mannar',
    keywords: ['mannar', 'bull', 'ruling', 'strength', 'authority', 'gold', 'karta'],
  },
  {
    id: 'clan-shouryaanga',
    title: 'Shouryaanga Clan',
    subtitle: 'The Wolf Clan — Secretly Surviving',
    category: 'Clan',
    href: '/world#shouryaanga',
    keywords: ['shouryaanga', 'wolf', 'exiled', 'genocide', 'surviving', 'deva', 'silver'],
  },
  {
    id: 'clan-ghaniyaar',
    title: 'Ghaniyaar Clan',
    subtitle: 'The Eagle Clan — Allied with Mannar',
    category: 'Clan',
    href: '/world#ghaniyaar',
    keywords: ['ghaniyaar', 'eagle', 'allied', 'cunning', 'vision', 'red', 'watchers'],
  },

  // Constitution / Laws
  {
    id: 'nibandhana',
    title: 'Nibandhana',
    subtitle: 'The Sacred Constitution of Khansaar',
    category: 'Law',
    href: '/nibandhana',
    keywords: ['nibandhana', 'constitution', 'law', 'sacred', 'articles', 'governance'],
  },
  {
    id: 'article-1',
    title: 'Article I — The Karta',
    subtitle: 'Supreme ruler rotates among the three clans',
    category: 'Law',
    href: '/nibandhana#article-1',
    keywords: ['article 1', 'karta', 'rotation', 'ruler', 'supreme'],
  },
  {
    id: 'article-2',
    title: 'Article II — The Salaar',
    subtitle: 'Every Karta must have a sworn Salaar protector',
    category: 'Law',
    href: '/nibandhana#article-2',
    keywords: ['article 2', 'salaar', 'protector', 'sworn', 'bodyguard'],
  },
  {
    id: 'article-3',
    title: 'Article III — The Dhaara',
    subtitle: 'The sacred bloodline that cannot be broken',
    category: 'Law',
    href: '/nibandhana#article-3',
    keywords: ['article 3', 'dhaara', 'bloodline', 'lineage', 'sacred'],
  },
  {
    id: 'article-4',
    title: 'Article IV — Ceasefire Protocol',
    subtitle: 'Inter-clan war is forbidden under the Nibandhana',
    category: 'Law',
    href: '/nibandhana#article-4',
    keywords: ['article 4', 'ceasefire', 'war', 'forbidden', 'peace', 'protocol'],
  },
  {
    id: 'dhaara-raisaar',
    title: 'Dhaara Raisaar',
    subtitle: 'The sacred bloodline guardians — the highest law',
    category: 'Law',
    href: '/nibandhana#dhaara-raisaar',
    keywords: ['dhaara raisaar', 'bloodline', 'guardian', 'sacred', 'highest law'],
  },

  // Lore
  {
    id: 'khansaar',
    title: 'Khansaar',
    subtitle: 'The autonomous warlord nation founded in 1127',
    category: 'Lore',
    href: '/world',
    keywords: ['khansaar', 'nation', 'founded', '1127', 'warlord', 'state'],
  },
  {
    id: 'genocide-1985',
    title: 'The 1985 Genocide',
    subtitle: 'Raja Mannar orders the slaughter of Shouryaanga',
    category: 'Lore',
    href: '/world#history',
    keywords: ['1985', 'genocide', 'massacre', 'shouryaanga', 'mannar', 'history'],
  },
  {
    id: 'ceasefire',
    title: 'Ceasefire',
    subtitle: 'The fragile peace brokered by Deva between Vardha and Khansaar',
    category: 'Lore',
    href: '/situation',
    keywords: ['ceasefire', 'peace', 'brokered', 'deva', 'vardha', 'truce'],
  },
  {
    id: 'shouryaanga-parvam',
    title: 'Shouryaanga Parvam',
    subtitle: 'The Wolf Chapter — subtitle of Part 2',
    category: 'Lore',
    href: '/part2',
    keywords: ['shouryaanga parvam', 'wolf chapter', 'part 2', 'sequel', 'parvam'],
  },
  {
    id: 'prashanth-neel',
    title: 'Prashanth Neel',
    subtitle: 'Director of Salaar — Architect of Khansaar',
    category: 'Lore',
    href: '/world',
    keywords: ['prashanth neel', 'director', 'writer', 'creator', 'filmmaker'],
  },
  {
    id: 'prabhas',
    title: 'Prabhas',
    subtitle: 'Actor — Plays Deva / the Salaar',
    category: 'Lore',
    href: '/situation#deva',
    keywords: ['prabhas', 'actor', 'deva', 'salaar', 'lead', 'star'],
  },
]

export function searchEntries(query: string): SearchEntry[] {
  const q = query.toLowerCase().trim()
  if (!q) return []

  return searchData.filter((entry) => {
    const haystack = [
      entry.title,
      entry.subtitle,
      ...entry.keywords,
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
}
