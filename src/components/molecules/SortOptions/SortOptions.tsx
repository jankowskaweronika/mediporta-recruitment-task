import FormControl from "../../atoms/FormControl"
import TextField from "../../atoms/TextField/index"
import Select from "../../atoms/Select/index"
import MenuItem from "../../atoms/MenuItem/index"
import Box from "../../atoms/Box"

const SortOptions = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: "3px solid black",
      }}
    >
      <FormControl>
        <TextField 
          id="page" 
          label="Page"
          placeholder="select a number"
        >
        </TextField>

        <TextField 
          id="pageSize"
          label="PageSize"
          placeholder="Select a pagesize"
        >
        </TextField>
      </FormControl>

      <FormControl>
        <Select 
          id="order"
        >
          <MenuItem value={"desc"}>desc</MenuItem>
          <MenuItem value={"asc"}>asc</MenuItem>
        </Select>

        <Select id="sort">
          <MenuItem value={"popular"}>popular</MenuItem>
          <MenuItem value={"activity"}>activity</MenuItem>
          <MenuItem value={"name"}>name</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SortOptions
