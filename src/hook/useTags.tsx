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
  const [status, setStatus] = useState<'idle' | 'pending' | 'resolved' | 'rejected'>('idle')

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortCol, setSortCol] = useState<SortCol>('popular')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
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

  const loadTags = async () => {
    setStatus('pending')
    try {
      const {
        rows,
        totalRows
      } = await getRows({
        page: currentPage,
        pageSize,
        sortCol,
        sortOrder,
      })
      setTags(rows)
      setTotalPages(totalRows)
      setStatus('resolved')
    } catch (error){
      setStatus('rejected')
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

    loadTags,
    onPageChange,
    onSortColChange,
    onSortOrderChange,
    onPageSizeChange
  }
}