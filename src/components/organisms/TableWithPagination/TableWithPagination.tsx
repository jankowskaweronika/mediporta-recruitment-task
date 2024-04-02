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
    onSortColAndOrderChange: (newSortCol: SortCol, newSortOrder: SortOrder) => void,
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

const mapSortColtInTableToSortCol = (sortColInTable: SortColInTable): SortCol => {
  if(sortColInTable === 'count') {
    return 'activity'
  }
  return 'name'
}

const TableWithPagination = (props: TableWithPaginationProps) => {
  const { 
    rows,
    sortCol,
    sortOrder,
    totalPages,
    currentPage,
    onPageChange,
    onSortColAndOrderChange,
  } = props
 
  return (
    <>
      <TableOfTags 
        rows={rows} 
        sortCol={mapSortColToSortColInTable(sortCol)} 
        sortOrder={sortOrder} 
        onSortColAndOrderChange={(newSortColInTable, newSortOrder) => {
          const sortCol = mapSortColtInTableToSortCol(newSortColInTable)
          onSortColAndOrderChange(sortCol, newSortOrder)
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