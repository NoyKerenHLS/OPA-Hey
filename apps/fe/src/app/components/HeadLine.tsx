import { Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

interface Props {
  HeadlineSize?: string;
  subHeadlineSize?: string;
}

const HeadLine: FC<Props> = ({
  HeadlineSize = '60px',
  subHeadlineSize = '26px',
}) => {
  return (
    <Stack alignItems={'center'} gap="5px">
      <Typography
        fontWeight={'bold'}
        sx={{
          color: '#444E66',
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
