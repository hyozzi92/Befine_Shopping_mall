import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

import styled from 'styled-components';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { flexbox } from '@mui/system';

export default function CartButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingBtn
          style={{
            backgroundColor: 'grey',
            height: '50px',
            width: '120px',
            fontSize: '18px',
            marginTop: '20px',
            marginBottom: '20px',
            alignItems: 'center',
          }}
          size="medium"
          onClick={handleClick}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          color="secondary"
        >
          뒤로가기
        </LoadingBtn>

        <LoadingBtn
          style={{
            backgroundColor: 'grey',
            height: '50px',
            width: '120px',
            fontSize: '18px',
            marginTop: '20px',
            marginBottom: '20px',
            alignItems: 'center',
          }}
          size="medium"
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          variant="contained"
        >
          결제하기
        </LoadingBtn>
      </Box>
    </Box>
  );
}

const LoadingBtn = styled(LoadingButton)`
  && {
    margin-top: 100px;
  }
`;
