// Utility functions for markdown parsing

export interface ProjectMetadata {
  slug: string
  title: string
  summary: string
  thumbnail?: string
  tech: string[]
  year?: string
  link?: string
  content: string
}

// Featured projects first, in this order; anything else falls in after, alphabetically.
const PROJECT_ORDER = [
  'business-planner',
  'class-manager',
  'secure-share',
  'party-share',
  'centipede-ai',
  'sudoku',
  'nextjs-showcase',
  'casa-barao-das-laranjeiras',
  'c-natural',
]

export interface WriteupMetadata {
  slug: string
  title: string
  description: string
  content: string
}

// Read a "Key: value" metadata line (case-insensitive key) from the raw markdown.
const readMetaLine = (lines: string[], key: string): string => {
  const prefix = `${key.toLowerCase()}:`
  for (const line of lines) {
    if (line.toLowerCase().startsWith(prefix)) {
      return line.substring(line.indexOf(':') + 1).trim()
    }
  }
  return ''
}

// Parse project markdown content
export const parseProjectMarkdown = (content: string, filename: string): Omit<ProjectMetadata, 'content'> => {
  const lines = content.split('\n')

  let summary = readMetaLine(lines, 'project summary')
  if (!summary) {
    summary = lines.find(line => line.trim().length > 0)?.trim() || 'No description available'
  }

  const tech = readMetaLine(lines, 'tech')
    .split(',')
    .map(t => t.trim())
    .filter(Boolean)
  const year = readMetaLine(lines, 'year') || undefined
  const link = readMetaLine(lines, 'link') || undefined

  const slug = filename.replace('.md', '')
  const title = formatTitle(slug)

  // Thumbnail lives in /public with the same basename as the project
  const thumbnail = `/${slug}.png`

  return {
    slug,
    title,
    summary,
    thumbnail,
    tech,
    year,
    link
  }
}

// Parse writeup markdown content
export const parseWriteupMarkdown = (content: string, filename: string): Omit<WriteupMetadata, 'content'> => {
  const lines = content.split('\n')
  let description = ''
  let heading = ''

  for (const line of lines) {
    const trimmed = line.trim()
    if (!heading && trimmed.startsWith('# ')) {
      heading = trimmed.replace(/^#\s+/, '')
      continue
    }
    if (
      !description &&
      trimmed.length > 0 &&
      !trimmed.startsWith('#') &&
      !trimmed.startsWith('```') &&
      !trimmed.startsWith('![')
    ) {
      description = trimmed
    }
  }

  if (!description) {
    description = 'No description available'
  }

  const slug = filename.replace('.md', '')
  const title = heading || formatTitle(slug)

  return {
    slug,
    title,
    description
  }
}

// Strip the leading H1 and the "Key: value" metadata lines so the detail page
// body doesn't duplicate the header (title/summary) or leak Tech/Year/Link.
export const stripProjectMeta = (content: string): string => {
  const metaKeys = ['project summary:', 'tech:', 'year:', 'link:']
  const lines = content.split('\n')
  const kept: string[] = []
  let removedH1 = false

  for (const line of lines) {
    const trimmed = line.trim()
    if (!removedH1 && trimmed.startsWith('# ')) {
      removedH1 = true
      continue
    }
    if (metaKeys.some(k => trimmed.toLowerCase().startsWith(k))) continue
    kept.push(line)
  }

  return kept.join('\n').replace(/^\n+/, '')
}

// Format filename to readable title
export const formatTitle = (slug: string): string => {
  return slug
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Get all project files
export const getProjectFiles = async (): Promise<ProjectMetadata[]> => {
  const modules = import.meta.glob<string>('/src/projects/*.md', { query: '?raw', import: 'default' })
  const projects: ProjectMetadata[] = []

  for (const path in modules) {
    const content = await modules[path]()
    const filename = path.split('/').pop() || ''
    const metadata = parseProjectMarkdown(content, filename)

    projects.push({
      ...metadata,
      content
    })
  }

  const rank = (slug: string) => {
    const i = PROJECT_ORDER.indexOf(slug)
    return i === -1 ? PROJECT_ORDER.length : i
  }

  return projects.sort((a, b) => {
    const diff = rank(a.slug) - rank(b.slug)
    return diff !== 0 ? diff : a.title.localeCompare(b.title)
  })
}

// Get all writeup files
export const getWriteupFiles = async (): Promise<WriteupMetadata[]> => {
  const modules = import.meta.glob<string>('/src/writeups/*.md', { query: '?raw', import: 'default' })
  const writeups: WriteupMetadata[] = []

  for (const path in modules) {
    const content = await modules[path]()
    const filename = path.split('/').pop() || ''
    const metadata = parseWriteupMarkdown(content, filename)

    writeups.push({
      ...metadata,
      content
    })
  }

  return writeups
}

// Get single project by slug
export const getProjectBySlug = async (slug: string): Promise<ProjectMetadata | null> => {
  try {
    const modules = import.meta.glob<string>('/src/projects/*.md', { query: '?raw', import: 'default', eager: false })
    const path = `/src/projects/${slug}.md`

    if (modules[path]) {
      const content = await modules[path]()
      const metadata = parseProjectMarkdown(content, `${slug}.md`)

      return {
        ...metadata,
        content
      }
    }
    return null
  } catch {
    return null
  }
}

// Get single writeup by slug
export const getWriteupBySlug = async (slug: string): Promise<WriteupMetadata | null> => {
  try {
    const modules = import.meta.glob<string>('/src/writeups/*.md', { query: '?raw', import: 'default', eager: false })
    const path = `/src/writeups/${slug}.md`

    if (modules[path]) {
      const content = await modules[path]()
      const metadata = parseWriteupMarkdown(content, `${slug}.md`)

      return {
        ...metadata,
        content
      }
    }
    return null
  } catch {
    return null
  }
}
