import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

interface Props {
  icon?: string;
}

const HeadLine: FC<Props> = ({ icon }) => {
  return (
    <Stack alignItems={'center'} gap="5px">
      <Stack direction={'row'} gap="10px" alignItems={'center'}>
        <Typography
          fontWeight={'bold'}
          sx={{
            color: '#444E66',
            lineHeight: 1.2,
            display: 'flex',
          }}
          fontSize={{ xs: '60px', md: '90px' }}
          alignSelf={'center'}
        >
          OPA Hey
        </Typography>
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
      <Typography
        display={'flex'}
        alignSelf="center"
        fontSize={{ xs: '26px', md: '45px' }}
        fontWeight={300}
        letterSpacing={'1.5px'}
        color="#3E3E40"
      >
        Order Ahead, Pick Up Anytime
      </Typography>
    </Stack>
  );
};

export default HeadLine;
