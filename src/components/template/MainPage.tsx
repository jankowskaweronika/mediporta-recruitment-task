import { useTags } from "../../hook/useTags"

import Box from "../atoms/Box"
import Button from "../atoms/Button"
import CircularProgress from '../atoms/CircularProgress'
import Alert from '../atoms/Alert'

import SortOptions from "../organisms/SortOptions/SortOptions"

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
          disabled={status === 'pending'}
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
          <Box
            sx={{ 
              width: '100%', 
              height:'60vh', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Alert 
              variant= {"outlined"}
              severity= {"error"}
            >
              {errorMessage}
            </Alert>  
          </Box>
        ) : status === "idle" ? (
          <Box
            sx={{ 
              width: '100%', 
              height:'60vh', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Alert 
              variant= {"outlined"}
              severity= {"info"}
            >
              Please select options above and click load to see the results
            </Alert>
          </Box>
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
