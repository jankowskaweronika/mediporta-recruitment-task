import FormControl from "../../atoms/FormControl"
import TextField from "../../atoms/TextField"
import Select from "../../atoms/Select"
import MenuItem from "../../atoms/MenuItem"
import InputLabel from "../../atoms/InputLabel"
import Grid from "../../atoms/Grid"

type SortCol = 'popular' | 'activity' | 'name'
type SortOrder = 'asc' | 'desc'

export type SortOptionsProps = {
  pageSize: number,
  page: number,
  sortOrder: SortOrder,
  sortCol: SortCol,
  onPageChange: (newPage: number) => void,
  onPageSizeChange: (newPageSize: number) => void,
  onSortOrderChange: (newSortOrder: SortOrder) => void,
  onSortColChange: (newSortCol: SortCol) => void,
}

const SortOptions = (props: SortOptionsProps) => {
  const {
    page,
    pageSize,
    sortOrder,
    sortCol,

    onPageChange,
    onPageSizeChange,
    onSortOrderChange,
    onSortColChange,
  } = props

  return (
    <Grid
      container={true}
      sx={{
        backgroundColor: "white",
        border: "3px solid black",
      }}
    >
      <Grid
        container={true}
        item={true}
      >
        <Grid
          item={true}
          xs={12}
          sm={6}
        >
          <FormControl>
            <TextField 
              id={"page"} 
              label={"Page"}
              type={"number"}
              value={page}
              onChange={(event) => onPageChange(Number(event.target.value))}
            />
          </FormControl>
        </Grid>

        <Grid
          item={true}
          xs={12}
          sm={6}
        >
          <FormControl>
            <TextField 
              id={"pageSize"}
              label={"Page size"}
              type={"number"}
              value={pageSize}
              onChange={(event) => onPageSizeChange(Number(event.target.value))}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid
        container={true}
        item={true}
      >
        <Grid
          item={true}
          xs={12}
          sm={6}
        >

          <FormControl>
            <InputLabel id={"order-select-label"}>Sort order</InputLabel>
            <Select
              id={"order"}
              labelId={"order-select-label"}
              label={"Sort order"}
              value={sortOrder}
              onChange={(event) => onSortOrderChange(event.target.value as SortOrder)}
            >
              <MenuItem value={"desc"}>desc</MenuItem>
              <MenuItem value={"asc"}>asc</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid
          item={true}
          xs={12}
          sm={6}
        >
          <FormControl>
            <InputLabel id={"sort-select-label"}>Sort by</InputLabel>
            <Select
              id={"sort"}
              labelId={"sort-select-label"}
              label={"Sort by"}
              value={sortCol}
              onChange={(event) => onSortColChange(event.target.value as SortCol)}
            >
              <MenuItem value={"popular"}>popular</MenuItem>
              <MenuItem value={"activity"}>activity</MenuItem>
              <MenuItem value={"name"}>name</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SortOptions
