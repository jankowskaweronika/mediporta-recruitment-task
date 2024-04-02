type GetRowsParams = {
  sortCol: SortCol,
  sortOrder: SortOrder,
  page: number,
  pageSize: number,
}

type SortCol = 'popular' | 'activity' | 'name'

type SortOrder = 'asc' | 'desc'

type ResponseTags = {
  items: ResponseTagsItem[],
  has_more: boolean,
  quota_max: number,
  quota_remaining: number,
}

type ResponseTagsItem = {
  has_synonyms: boolean,
  is_moderator_only: boolean,
  is_required: boolean,
  count: number,
  name: string,
}

type ResponseTotal = {
  total: number,
}

export const getRows = async (params: GetRowsParams) => {
  const {
    sortCol,
    sortOrder,
    page,
    pageSize,
  } = params

  const urlRows = `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${sortOrder}&sort=${sortCol}&site=stackoverflow`
  const urlTotal = `${urlRows}&filter=total` 

  const responseRows = await fetch(urlRows)
  const responseTotal = await fetch(urlTotal)
  const resultRows = (await responseRows.json()) as ResponseTags
  const resultTotal = (await responseTotal.json()) as ResponseTotal

  if(responseRows.status >= 400) {
    throw Error('GET request for tags ended with error code:' + responseRows.status)
  }
  if(responseTotal.status >= 400){
    throw Error('GET request for tags total number ended with error code:' + responseRows.status)
  }

  return {
    rows: resultRows.items,
    totalRows: resultTotal.total
  }
}
