import Box from "../../atoms/Box"
import Pagination, { PaginationProps } from "../../atoms/Pagination"
import TableOfTags, { TableOfTagsProps } from "../../molecules/TableOfTags/TableOfTags"

type TableWithPaginationProps = (
  Pick<TableOfTagsProps, 'rows' | 'sortCol' | 'sortOrder'> &
  { 
    currentPage: PaginationProps['page'],
    totalPages: PaginationProps['count'],
    onPageChange: (newPage: number) => void,
   }
)

const TableWithPagination = (props: TableWithPaginationProps) => {
  const { 
    rows,
    sortCol,
    sortOrder,
    totalPages,
    currentPage,
    onPageChange,
  } = props
 
  return (
    <>
      <TableOfTags 
        rows={rows} 
        sortCol={sortCol} 
        sortOrder={sortOrder} 
      />
      <Box
        sx={{
          paddingTop: '15px',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Pagination
          page={currentPage}
          count={totalPages}
          onChange={(_, newPage) => onPageChange(newPage)}
        />
      </Box>
    </>
  )
}

export default TableWithPagination