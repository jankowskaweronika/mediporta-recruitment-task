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
      rowGap={'10px'}
    >
      <Grid
        container={true}
        spacing={'10px'}
      >
        <Grid
          item={true}
          xs={12}
          sm={6}
        >
          <FormControl
            fullWidth={true}
          >
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
          <FormControl
            fullWidth={true}
          >
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
        spacing={'10px'}
      >
        <Grid
          item={true}
          xs={12}
          sm={6}
        >

          <FormControl
            fullWidth={true}
          >
            <InputLabel id={"order-select-label"}>Sort order</InputLabel>
            <Select
              id={"order"}
              labelId={"order-select-label"}
              label={"Sort order"}
              value={sortOrder}
              onChange={(event) => onSortOrderChange(event.target.value as SortOrder)}
            >
              <MenuItem value={"desc"}>Descending</MenuItem>
              <MenuItem value={"asc"}>Ascending</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid
          item={true}
          xs={12}
          sm={6}
        >
          <FormControl
            fullWidth={true}
          >
            <InputLabel id={"sort-select-label"}>Sort by</InputLabel>
            <Select
              id={"sort"}
              labelId={"sort-select-label"}
              label={"Sort by"}
              value={sortCol}
              onChange={(event) => onSortColChange(event.target.value as SortCol)}
            >
              <MenuItem value={"popular"}>Popular</MenuItem>
              <MenuItem value={"activity"}>Activity</MenuItem>
              <MenuItem value={"name"}>Name</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SortOptions
