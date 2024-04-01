import { useTags } from "../../hook/useTags"

import TableWithPagination from "../organisms/TableWithPagination/TableWithPagination"

export const MainPage = () => {
  const {
    loadTags, 
    tags, 
    totalPages, 
    currentPage, 
    sortCol, 
    sortOrder, 
    pageSize, 
    onPageChange, 
    onSortColChange, 
    onSortOrderChange, 
    onPageSizeChange 
  } = useTags()

  return (
    <div>
      <TableWithPagination 
         tags={tags} 
         totalPages={totalPages}
         currentPage={currentPage}
         sortCol={sortCol}
         sortOrder={sortOrder}
         pageSize={pageSize}
         onPageChange={onPageChange}
         onSortColChange={onSortColChange}
         onSortOrderChange={onSortOrderChange}
         onPageSizeChange={onPageSizeChange}{}
         loadTags={loadTags}
      />
    </div>
  )
}

export default MainPage
