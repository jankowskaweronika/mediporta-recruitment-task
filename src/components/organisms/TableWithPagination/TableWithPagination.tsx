import Box from "../../atoms/Box"
import Pagination, { PaginationProps } from "../../atoms/Pagination"
import TableOfTags, { TableOfTagsProps } from "../../molecules/TableOfTags/TableOfTags"

type SortCol = 'popular' | 'activity' | 'name'
type SortOrder = 'asc' | 'desc'
type SortColInTable = string | 'name' | 'count'

type TableWithPaginationProps = (
  Pick<TableOfTagsProps, 'rows' | 'sortOrder'> &
  { 
    sortCol: SortCol,
    currentPage: PaginationProps['page'],
    totalPages: PaginationProps['count'],
    onPageChange: (newPage: number) => void,
    onSortOrderChange: (newSortOrder: SortOrder) => void,
    onSortColChange: (newSortCol: SortCol) => void,
   }
)

const mapSortColToSortColInTable = (sortCol: SortCol): SortColInTable => {
  if (sortCol === 'activity') {
    return 'count'
  }
  if (sortCol === 'name') {
    return 'name'
  }
  return sortCol
}

const TableWithPagination = (props: TableWithPaginationProps) => {
  const { 
    rows,
    sortCol,
    sortOrder,
    totalPages,
    currentPage,
    onPageChange,
    onSortOrderChange,
    onSortColChange,
  } = props
 
  return (
    <>
      <TableOfTags 
        rows={rows} 
        sortCol={mapSortColToSortColInTable(sortCol)} 
        sortOrder={sortOrder} 
        onSortOrderChange={onSortOrderChange}
        onSortColChange={(newSortCol) => {
          if(newSortCol === 'count') {
            onSortColChange('activity')
          } else if(newSortCol === 'name') {
            onSortColChange('name')
          }
        }}
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