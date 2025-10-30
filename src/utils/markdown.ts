// Utility functions for markdown parsing

export interface ProjectMetadata {
  slug: string
  title: string
  summary: string
  thumbnail?: string
  content: string
}

export interface WriteupMetadata {
  slug: string
  title: string
  description: string
  content: string
}

// Parse project markdown content
export const parseProjectMarkdown = (content: string, filename: string): Omit<ProjectMetadata, 'content'> => {
  const lines = content.split('\n')
  let summary = ''
  
  // Look for "Project Summary:" line
  for (const line of lines) {
    if (line.toLowerCase().startsWith('project summary:')) {
      summary = line.substring(line.indexOf(':') + 1).trim()
      break
    }
  }
  
  // If no summary found, use first non-empty line
  if (!summary) {
    summary = lines.find(line => line.trim().length > 0)?.trim() || 'No description available'
  }
  
  const slug = filename.replace('.md', '')
  const title = formatTitle(slug)
  
  // Check for thumbnail image
  const possibleExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp']
  let thumbnail: string | undefined
  
  for (const ext of possibleExtensions) {
    try {
      // This will be handled by Vite's static asset system
      thumbnail = `/${slug}.${ext}`
      break
    } catch {
      continue
    }
  }
  
  return {
    slug,
    title,
    summary,
    thumbnail
  }
}

// Parse writeup markdown content
export const parseWriteupMarkdown = (content: string, filename: string): Omit<WriteupMetadata, 'content'> => {
  const lines = content.split('\n')
  let description = ''
  
  // Get first meaningful line as description
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.length > 0 && !trimmed.startsWith('#') && !trimmed.startsWith('```')) {
      description = trimmed
      break
    }
  }
  
  if (!description) {
    description = 'No description available'
  }
  
  const slug = filename.replace('.md', '')
  const title = formatTitle(slug)
  
  return {
    slug,
    title,
    description
  }
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
  const modules = import.meta.glob('/src/projects/*.md', { as: 'raw' })
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
  
  return projects
}

// Get all writeup files
export const getWriteupFiles = async (): Promise<WriteupMetadata[]> => {
  const modules = import.meta.glob('/src/writeups/*.md', { as: 'raw' })
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
    const content = await import(`/src/projects/${slug}.md?raw`)
    const metadata = parseProjectMarkdown(content.default, `${slug}.md`)
    
    return {
      ...metadata,
      content: content.default
    }
  } catch {
    return null
  }
}

// Get single writeup by slug
export const getWriteupBySlug = async (slug: string): Promise<WriteupMetadata | null> => {
  try {
    const content = await import(`/src/writeups/${slug}.md?raw`)
    const metadata = parseWriteupMarkdown(content.default, `${slug}.md`)
    
    return {
      ...metadata,
      content: content.default
    }
  } catch {
    return null
  }
}
