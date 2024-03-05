import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { subTitleStyle, titleStyle } from '../../styles/headLine.style';

interface Props {
  icon?: string;
}

const HeadLine: FC<Props> = ({ icon }) => {
  return (
    <Stack alignItems="center" gap="5px">
      <Stack direction="row" gap="10px" alignItems="center">
        <Typography sx={titleStyle}>OPA Hey</Typography>
        {icon ? (
          <Stack>
            <Box display={{ xs: 'flex', md: 'none' }}>
              <img height="44px" src={icon} />
            </Box>
            <Box display={{ xs: 'none', md: 'flex' }}>
              <img height="75px" src={icon} />
            </Box>
          </Stack>
        ) : (
          ''
        )}
      </Stack>
      <Typography sx={subTitleStyle}>Order Ahead, Pick Up Anytime</Typography>
    </Stack>
  );
};

export default HeadLine;
