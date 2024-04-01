import Box, { BoxProps } from "../../atoms/Box/Box"
import Table from "../../atoms/Table/Table"
import TableBody from "../../atoms/TableBody/TableBody"
import TableCell from "../../atoms/TableCell/TableCell"
import TableContainer from "../../atoms/TableContainer/TableContainer"
import TableHead from "../../atoms/TableHead/TableHead"
import TableRow from "../../atoms/TableRow/TableRow"
import Typography from "../../atoms/Typography/Typography"

import TableSortLabel from '@mui/material/TableSortLabel'

type RowData = {
  name: string,
  count: number,
}
type HeadCell = keyof RowData

const headCells: HeadCell[] = ['name', 'count']

type TableOfTagsProps = BoxProps & {
  rows: RowData[],
  sortCol: string | 'name' | 'count',
  sortOrder: 'asc' | 'desc',
}

const TableOfTags = (props: TableOfTagsProps) => {
  const {
    sx,
    rows,
    sortCol,
    sortOrder,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: "3px solid white",
        ...sx,
      }}
      {...otherProps}
    >
      <TableContainer>
        <Table>
          <TableHead
            sx={{
              backgroundColor: "#b8c1cf",
            }}
          >
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell}>
                  <TableSortLabel
                    active={headCell === sortCol}
                    direction={sortOrder}
                  >
                    <Typography variant="h6">{headCell}</Typography>
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                {headCells.map((headCell) => (
                  <TableCell key={headCell}>
                    <Typography variant="body1">{row[headCell]}</Typography>
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
