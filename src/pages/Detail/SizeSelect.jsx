import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SelectSmall({ inputValues, handleInput }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120, height: 40 }} size="small">
      <InputLabel id="demo-select-small">Size</InputLabel>
      <Select
        labelId="demo-select-small"
        name="size"
        id="demo-select-small"
        label="Size"
        onChange={handleInput}
        value={inputValues.size}
      >
        <MenuItem value="">
          <em>사이즈를 선택해 주세요</em>
        </MenuItem>
        <MenuItem value="S">S</MenuItem>
        <MenuItem value="M">M</MenuItem>
        <MenuItem value="L">L</MenuItem>
        <MenuItem value="XL">XL</MenuItem>
      </Select>
    </FormControl>
  );
}
