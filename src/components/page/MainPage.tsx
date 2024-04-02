import { useTags } from "../../hook/useTags"

import Button from "../atoms/Button"
import CircularProgress from '../atoms/CircularProgress'

import SortOptions from "../molecules/SortOptions/SortOptions"

import TableWithPagination from "../organisms/TableWithPagination/TableWithPagination"

import MainLayout from "../layouts/MainLayout"

export const MainPage = () => {
  const {
    tags,
    totalPages,
    currentPage,
    sortCol,
    sortOrder,
    status,
    pageSize,
    errorMessage,
    
    loadTags,
    onPageChange,
    onSortColChange,
    onSortOrderChange,
    onPageSizeChange
  } = useTags()

  return (
    <MainLayout
      contentSortOptions={
        <SortOptions 
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          onSortColChange={onSortColChange}
          onSortOrderChange={onSortOrderChange}
          pageSize={pageSize}
          page={currentPage}
          sortOrder={sortOrder}
          sortCol={sortCol}
        />
      }
      contentButton={
        <Button
          fullWidth={true}
          onClick={() => loadTags({
            page: currentPage,
            pageSize,
            sortCol,
            sortOrder,
          })}
          variant={"outlined"}
        >
          LOAD
        </Button>
      }
      contentTableLoader={
        status === "pending" ? (
          <CircularProgress />
        ) : null
      }
      contentTable={
        status === "rejected" ? (
          errorMessage
        ) : status === "idle" ? (
          "select options"
        ) : ((status === "resolved" || status === 'pending') && tags && totalPages) ? (
          <TableWithPagination
            rows={tags}
            totalPages={totalPages}
            currentPage={currentPage}
            sortCol={sortCol}
            sortOrder={sortOrder}
            onSortColAndOrderChange={(newSortCol, newSortOrder) => {
              onSortColChange(newSortCol)
              onSortOrderChange(newSortOrder)
              loadTags({
                page: currentPage,
                pageSize,
                sortCol: newSortCol,
                sortOrder: newSortOrder,
              })
            }}
            onPageChange={(newPage) => {
              onPageChange(newPage) 
              loadTags({
                page: newPage,
                pageSize,
                sortCol,
                sortOrder,
              })
            }}
          />
        ) : null
      }
    />
  )
}

export default MainPage
