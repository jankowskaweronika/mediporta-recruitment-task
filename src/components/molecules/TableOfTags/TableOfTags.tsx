import Box, { BoxProps } from "../../atoms/Box"
import Table from "../../atoms/Table"
import TableBody from "../../atoms/TableBody"
import TableCell from "../../atoms/TableCell"
import TableContainer from "../../atoms/TableContainer"
import TableHead from "../../atoms/TableHead"
import TableRow from "../../atoms/TableRow"
import Typography from "../../atoms/Typography"

import TableSortLabel from '@mui/material/TableSortLabel'

type RowData = {
  name: string,
  count: number,
}
type HeadCell = keyof RowData
const headCells: HeadCell[] = ['name', 'count']
type SortOrder = 'asc' | 'desc'

export type TableOfTagsProps = BoxProps & {
  rows: RowData[],
  sortCol: string | 'name' | 'count',
  sortOrder: SortOrder,
  onSortColAndOrderChange: (newSortCol: 'name' | 'count', newSortOrder: SortOrder) => void,

}

const TableOfTags = (props: TableOfTagsProps) => {
  const {
    rows,
    sortCol,
    sortOrder,
    onSortColAndOrderChange,
    ...otherProps
  } = props

  return (
    <Box
      {...otherProps}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell 
                  key={headCell}
                  sx={{
                    width: '50%'
                  }}
                >
                  <TableSortLabel
                    active={headCell === sortCol}
                    direction={sortOrder}
                    onClick={() => {
                      const isActive = headCell === sortCol
                      const defaultSortOrder =  'desc'
                      const oppositeSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'
                      const newSortCol = headCell
                      const newSortOrder = isActive ? oppositeSortOrder : defaultSortOrder
                      onSortColAndOrderChange(newSortCol, newSortOrder)
                    }}
                  >
                    <Typography 
                      variant={"h6"}
                      sx={{
                        textTransform: 'uppercase'
                      }}
                    >
                      {headCell}
                    </Typography>
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell}
                    sx={{
                      width: '50%'
                    }}
                  >
                    <Typography 
                      variant={"body1"}
                    >
                      {row[headCell]}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TableOfTags
