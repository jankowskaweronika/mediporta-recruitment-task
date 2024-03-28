import MUIPagination, { PaginationProps } from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagination = (props: PaginationProps) => {
  const {
    sx,
  } = props

  return (
    <Stack spacing={2}>
      <MUIPagination
        count={10}
        sx={{
          backgroundColor: 'white',
          ...sx
        }}

      />
    </Stack>
  );
}

export default Pagination