import { useTags } from "../../hook/useTags"

import Box from "../atoms/Box"
import Button from "../atoms/Button"

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
          onClick={loadTags}
          variant={"outlined"}
        >
          LOAD
        </Button>
      }
      contentTable={
        status === "rejected" ? (
          "error"
        ) : status === "pending" ? (
          "loading data"
        ) : status === "idle" ? (
          "select options"
        ) : status === "resolved" && tags && totalPages ? (
          <TableWithPagination
            rows={tags}
            totalPages={totalPages}
            currentPage={currentPage}
            sortCol={sortCol}
            sortOrder={sortOrder}
            onPageChange={onPageChange}
          />
        ) : null
      }
    />
  )
}

export default MainPage
