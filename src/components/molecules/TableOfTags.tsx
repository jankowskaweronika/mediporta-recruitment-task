import Box, { BoxProps } from "../atoms/Box/Box";
import Table from "../atoms/Table/Table";
import TableBody from "../atoms/TableBody/TableBody";
import TableCell from "../atoms/TableCell/TableCell";
import TableContainer from "../atoms/TableContainer/TableContainer";
import TableHead from "../atoms/TableHead/TableHead";
import TableRow from "../atoms/TableRow/TableRow";
import Typography from "../atoms/Typography/Typography";


// rows
type Data = {
  Id: number;
  Tags: string;
  Amount: number;
};

function createData(Id: number, Tags: string, Amount: number): Data {
  return {
    Id,
    Tags,
    Amount
  };
}

//headCell
type HeadCell = keyof Data

const headCells: HeadCell[] = ['Id', 'Tags', 'Amount']

//create fake data
const rows = [
  createData(1, 'Cupcake', 305),
  createData(2, 'Donut', 452),
  createData(3, 'Eclair', 262),
  createData(4, 'Frozen yoghurt', 159),
  createData(5, 'Gingerbread', 356),
  createData(6, 'Honeycomb', 408),
  createData(7, 'Ice cream sandwich', 237),
  createData(8, 'Jelly Bean', 375),
  createData(9, 'KitKat', 518),
  createData(10, 'Lollipop', 392),
  createData(11, 'Marshmallow', 318),
  createData(12, 'Nougat', 360),
  createData(13, 'Oreo', 437),
];

const TableOfTags = (props: BoxProps) => {
  const { sx, ...otherProps } = props;

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
                  <Typography variant="h6">{headCell}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Id}>
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
  );
};

export default TableOfTags;
