import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [size, setSize] = React.useState('');

  const handleChange = event => {
    setSize(event.target.value);
  };
  console.log(size);
  return (
    <FormControl sx={{ m: 1, minWidth: 120, height: 40 }} size="small">
      <InputLabel id="demo-select-small">Size</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={size}
        label="Size"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>사이즈를 선택해 주세요</em>
        </MenuItem>
        <MenuItem value={'S'}>S</MenuItem>
        <MenuItem value={'M'}>M</MenuItem>
        <MenuItem value={'L'}>L</MenuItem>
        <MenuItem value={'XL'}>XL</MenuItem>
      </Select>
    </FormControl>
  );
}
