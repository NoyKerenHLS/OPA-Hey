import { Box, Stack, Typography, colors } from '@mui/material';
import React, { FC } from 'react';

interface Props {
  HeadlineSize?: string;
  subHeadlineSize?: string;
}

const Body: FC<Props> = ({
  HeadlineSize = '60px',
  subHeadlineSize = '20px',
}) => {
  return (
    <Stack alignItems={'center'}>
      <Stack>
        <Typography
          sx={{
            color: '#aa2a27',
            lineHeight: 1.2,
            display: 'flex',
          }}
          fontSize={HeadlineSize}
          alignSelf={'center'}
        >
          OPA Hey
        </Typography>
        <Typography
          display={'flex'}
          alignSelf="center"
          fontSize={subHeadlineSize}
        >
          Order Ahead, Eat Anytime
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Body;
