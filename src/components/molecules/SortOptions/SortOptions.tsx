import Box from "../../atoms/Box/index"
import TextField from "../../atoms/TextField/index"
import Select from "../../atoms/Select/index"
import MenuItem from "../../atoms/MenuItem/index"

const SortOptions = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "white",
          border: "3px solid black",
        }}
      >
        <TextField id="page" label="Select"></TextField>

        <TextField id="pageSize"></TextField>

        <div>
          <Select id="order">
            <MenuItem value={"desc"}>desc</MenuItem>
            <MenuItem value={"asc"}>asc</MenuItem>
          </Select>

          <Select id="sort">
            <MenuItem value={"popular"}>popular</MenuItem>
            <MenuItem value={"activity"}>activity</MenuItem>
            <MenuItem value={"name"}>name</MenuItem>
          </Select>
        </div>
      </Box>
    </div>
  )
}

export default SortOptions
