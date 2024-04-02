import { useTags } from "../../hook/useTags"

import Button from "../atoms/Button"
import TableWithPagination from "../organisms/TableWithPagination/TableWithPagination"
import SortOptions from "../molecules/SortOptions/SortOptions"

export const MainPage = () => {
  const {
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
  } = useTags()

  return (
    <div>
      <Button onClick={loadTags}>LOAD</Button>
      <SortOptions 
        onPageSize={onPageSize}
        onPageSizeChange={onPageSizeChange}
        onSortColChange={onSortColChange}
        onSortOrderChange={onSortOrderChange}
      />
      {status === "rejected" ? (
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
      ) : null}
    </div>
  )
}

export default MainPage
