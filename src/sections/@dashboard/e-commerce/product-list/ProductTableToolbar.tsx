// @mui
import { Tooltip, IconButton, Stack, InputAdornment, TextField } from '@mui/material';
// components
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

type Props = {
  filterName: string;
  onFilterName: (value: string) => void;
};

export default function ProductTableToolbar({ filterName, onFilterName }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2.5, px: 3 }}
    >
      <TextField
        value={filterName}
        onChange={(event) => onFilterName(event.target.value)}
        placeholder="Search product..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon={'eva:search-fill'}
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
        }}
      />

      <Tooltip title="Filter list">
        <IconButton>
          <Iconify icon={'ic:round-filter-list'} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
