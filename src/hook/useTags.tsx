import { useState } from 'react'
import { getRows } from '../api/tags/getRows'

type Tag = {
  name: string,
  count: number,
}

type SortCol = 'popular' | 'activity' | 'name'

type SortOrder = 'asc' | 'desc'

export const useTags = () => {
  const [tags, setTags] = useState<Tag[] | null>(null)
  const [totalPages, setTotalPages] = useState<number | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'pending' | 'resolved' | 'rejected'>('idle')

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortCol, setSortCol] = useState<SortCol>('popular')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [pageSize, setPageSize] = useState<number>(10)

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const onSortColChange = (newSortCol: SortCol) => {
    setSortCol(newSortCol)
  }

  const onSortOrderChange = (newOrderCol: SortOrder) => {
    setSortOrder(newOrderCol)
  }
  
  const onPageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
  }

  const loadTags = async ({
    page,
    pageSize,
    sortCol,
    sortOrder,
  }: {
    page: number,
    pageSize: number,
    sortCol: SortCol,
    sortOrder: SortOrder,
  }) => {
    setStatus('pending')
    setErrorMessage(null)
    try {
      const {
        rows,
        totalRows
      } = await getRows({
        page,
        pageSize,
        sortCol,
        sortOrder,
      })
      setTags(rows)
      setTotalPages(Math.ceil(totalRows / pageSize))
      setStatus('resolved')
    } catch (error){
      setStatus('rejected')
      setErrorMessage((error as Error).message)
    }
  }

  return {
    tags,
    totalPages,
    currentPage,
    sortCol,
    sortOrder,
    pageSize,
    status,
    errorMessage,

    loadTags,
    onPageChange,
    onSortColChange,
    onSortOrderChange,
    onPageSizeChange
  }
}