import { useTags } from "../../hook/useTags"

import Box from "../atoms/Box"
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
    status,
    pageSize,

    loadTags,
    onPageChange,
    onSortColChange,
    onSortOrderChange,
    onPageSizeChange
  } = useTags()

  return (
    <div>
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
      <Box
        sx={{
          padding: '10px',
        }}
      >
        <Button
          fullWidth={true}
          onClick={loadTags}
          variant={"outlined"}
        >
          LOAD
        </Button>
      </Box>
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
