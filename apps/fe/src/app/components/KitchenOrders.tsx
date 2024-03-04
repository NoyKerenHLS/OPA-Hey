import {
  Box,
  Button,
  Checkbox,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { IKitchenOrder } from '../../types/order.type';
import axios from 'axios';
import { NAVBAR_HEIGHT } from '../../styles/navbar.style';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ReturnButton from './ReturnButton';

interface Props {}

const KitchenOrders: FC<Props> = () => {
  const [orders, setOrders] = useState<IKitchenOrder[]>([
    { id: 0, userId: 0, name: '', preference: '', notes: '' },
  ]);
  const [checked, setChecked] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    event.target.checked
      ? setCounter((prevCount) => prevCount + 1)
      : setCounter((prevCount) => prevCount - 1);
  };

  const getOrders = async () => {
    try {
      const { data } = await axios.get('order/kitchen');
      setOrders(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Stack
      mt={NAVBAR_HEIGHT}
      gap="20px"
      padding={'20px'}
      alignItems={'center'}
      height={'100%'}
    >
      <Typography fontSize="26px" fontWeight={700} color="#3E3E40">
        Manage The Orders
      </Typography>
      <Typography
        fontSize="24px"
        color="#3E3E40"
      >{`You did ${counter}/${orders.length}`}</Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead sx={{ fontWeight: 500 }}>
            <TableRow>
              <TableCell
                sx={{ fontWeight: 550, fontSize: { sx: '14px', md: '20px' } }}
                align="left"
              >
                Name
              </TableCell>
              <TableCell
                sx={{ fontWeight: 550, fontSize: { sx: '14px', md: '20px' } }}
                align="left"
              >
                Perfernece
              </TableCell>
              <TableCell
                sx={{ fontWeight: 550, fontSize: { sx: '14px', md: '20px' } }}
                align="left"
              >
                Comments
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="left"
                  padding="none"
                  sx={{ fontSize: { xs: '14px', md: '18px' } }}
                >
                  <Checkbox
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    onChange={handleChange}
                    checked={checked}
                    sx={{
                      '&.Mui-checked': { color: '#aa2a27' },
                    }}
                  />
                  {order.name}
                </TableCell>
                <TableCell
                  sx={{ fontSize: { xs: '14px', md: '18px' } }}
                  align="left"
                >
                  {order.preference}
                </TableCell>
                <TableCell
                  sx={{ fontSize: { xs: '14px', md: '18px' } }}
                  align="right"
                >
                  {order.notes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ReturnButton />
    </Stack>
  );
};

export default KitchenOrders;
