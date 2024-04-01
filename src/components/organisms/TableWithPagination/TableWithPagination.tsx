import TableOfTags from "../../molecules/TableOfTags/TableOfTags"
import Pagination from "../../molecules/Pagination/Pagination"

const TableWithPagination = () => {
  return (
    <>
      <TableOfTags rows={[]} sortCol={""} sortOrder={"desc"} />
      <Pagination />
    </>
  )
}

export default TableWithPagination