import Box, { BoxProps } from '../atoms/Box/Box'
import Table from '../atoms/Table/Table'
import TableBody from '../atoms/TableBody/TableBody'
import TableCell from '../atoms/TableCell/TableCell'
import TableContainer from '../atoms/TableContainer/TableContainer'
import TableHead from '../atoms/TableHead/TableHead'
import TableRow from '../atoms/TableRow/TableRow'

const TableOfTags = (props: BoxProps) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        border: '3px solid white',
        ...sx,
      }}
      {...otherProps}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>

              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box >
  )
}

export default TableOfTags