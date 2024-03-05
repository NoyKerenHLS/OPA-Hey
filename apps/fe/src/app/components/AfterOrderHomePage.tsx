import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { NAVBAR_HEIGHT } from '../../styles/navbar.style';
import takeAwayImage from '../../assets/takeAwayImage.png';
import {
  headerForMd,
  headerForXs,
  typographyStyle,
} from '../../styles/afterOrderHomePage.style';

interface IProps {}

const AfterOrderHomePage: FC<IProps> = (props) => {
  return (
    <Stack alignItems="center" mt={NAVBAR_HEIGHT} height="100%">
      <Stack gap="80px">
        <Typography display={{ xs: 'none', md: 'flex' }} sx={headerForMd}>
          We've Got Your Order!
        </Typography>
        <Stack display={{ xs: 'flex', md: 'none' }} alignItems="center">
          <Typography mt="60px" sx={headerForXs}>
            We've Got
          </Typography>
          <Typography sx={headerForXs}>Your Order!</Typography>
        </Stack>
        <Stack alignItems="center">
          <Typography sx={typographyStyle}>Ready at 12:30 PM,</Typography>
          <Typography sx={typographyStyle}>drop by whenever!</Typography>
        </Stack>
      </Stack>
      <Box
        display={{ xs: 'flex', md: 'none' }}
        alignSelf="flex-end"
        padding="10px"
        position="fixed"
        bottom={2}
      >
        <img src={takeAwayImage} alt="takeAwayImage" />
      </Box>
      <Box
        display={{ xs: 'none', md: 'flex' }}
        alignSelf="flex-end"
        padding="10px"
        mr="100px"
        position="fixed"
        bottom={2}
      >
        <img width="235px" src={takeAwayImage} alt="takeAwayImage" />
      </Box>
    </Stack>
  );
};

export default AfterOrderHomePage;
