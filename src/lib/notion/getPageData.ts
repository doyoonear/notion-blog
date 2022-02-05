import rpc, { values } from './rpc'

export default async function getPageData(pageId: string) {
  // a reasonable size limit for the largest blog post (1MB),
  // as one chunk is about 10KB
  const maximumChunckNumer = 100

  try {
    var chunkNumber = 0
    var data = await loadPageChunk({ pageId, chunkNumber })
    var blocks = data.recordMap.block
    while (data.cursor.stack.length !== 0 && chunkNumber < maximumChunckNumer) {
      chunkNumber = chunkNumber + 1
      data = await loadPageChunk({ pageId, chunkNumber, cursor: data.cursor })
      blocks = Object.assign(blocks, data.recordMap.block)
    }

    const blockArray = values(blocks)

    let pageData
    if (blockArray[0] && blockArray[0].value.content) {
      pageData = blockArray[0]
      blockArray.splice(0, 3)
    }
    return { blocks: blockArray, pageData }
  } catch (err) {
    console.error(`Failed to load pageData for ${pageId}`, err)
    return { blocks: [] }
  }
}

export function loadPageChunk({
  pageId,
  limit = 30,
  cursor = { stack: [] },
  chunkNumber = 0,
  verticalColumns = false,
}: any) {
  return rpc('loadPageChunk', {
    pageId,
    limit,
    cursor,
    chunkNumber,
    verticalColumns,
  })
}
