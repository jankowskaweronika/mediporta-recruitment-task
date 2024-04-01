import { useTags } from "../../hook/useTags"

import Button from "../atoms/Button/Button"
import TableWithPagination from "../organisms/TableWithPagination/TableWithPagination"

export const MainPage = () => {
  const {
    tags, 
    totalPages, 
    currentPage, 
    sortCol, 
    sortOrder, 
    // pageSize, 
    status,

    loadTags, 
    onPageChange, 
    // onSortColChange, 
    // onSortOrderChange, 
    // onPageSizeChange 
  } = useTags()

  return (
    <div>
      <Button
        onClick={loadTags}
      >
        LOAD
      </Button>
      {
        // form with options to select – molecule
      }
      {
        status === 'rejected' ?
        'error'
        :
          status === 'pending' ?
          'loading data'
          :
          status === 'idle' ?
          'Select options'
          : 
          status === 'resolved' && tags && totalPages ?
      <TableWithPagination 
         rows={tags} 
         totalPages={totalPages}
         currentPage={currentPage}
         sortCol={sortCol}
         sortOrder={sortOrder}
         
         onPageChange={onPageChange}

         //  pageSize={pageSize}
        //  onSortColChange={onSortColChange}
        //  onSortOrderChange={onSortOrderChange}
        //  onPageSizeChange={onPageSizeChange}

      />
      :
      null
      }
    </div>
  )
}

export default MainPage
