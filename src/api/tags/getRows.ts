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

type ResponseError = {
  error_id: number,
  error_message: string,
  error_name: string,
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
  const resultRows = (await responseRows.json()) as ResponseTags | ResponseError
  const resultTotal = (await responseTotal.json()) as ResponseTotal | ResponseError

  if(responseRows.status >= 400) {
    const errorMessage = (resultRows as ResponseError).error_message
    throw Error(`Request for tags ended with error code: ${responseRows.status} and message: "${errorMessage}"`)
  }
  if(responseTotal.status >= 400){
    const errorMessage = (resultRows as ResponseError).error_message
    throw Error(`Request for tags total number ended with error code: ${responseRows.status} and message: "${errorMessage}"`)
  }

  return {
    rows: (resultRows as ResponseTags).items,
    totalRows: (resultTotal as ResponseTotal).total
  }
}
