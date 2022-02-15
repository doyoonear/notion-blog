export interface PostType {
  id: string
  Authors: string[]
  Progress: string | null
  Priority: string | null
  Published: string
  Page: string
  Date: number
  Slug: string
  Tags: string
  preview?: string[]
}
