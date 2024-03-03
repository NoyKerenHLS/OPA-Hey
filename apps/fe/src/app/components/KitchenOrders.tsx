import {
  Box,
  Checkbox,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import Body from './HeadLine';
import { IKitchenOrder, IOrder } from '../../types/order.type';
import axios from 'axios';
import ReturnButton from './ReturnButton';
import { NAVBAR_HEIGHT } from '../../styles/navbar.style';

interface Props {}

const KitchenOrders: FC<Props> = () => {
  const [orders, setOrders] = useState<IKitchenOrder[]>([
    { id: 0, userId: 0, name: '', preference: '', notes: '' },
  ]);

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
    <Stack mt={NAVBAR_HEIGHT} gap="20px" padding={'20px'}>
      <Body HeadlineSize="30px" subHeadlineSize="14px" />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ fontWeight: 500 }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 550 }} align="left">
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: 550 }} align="left">
                Perfernece
              </TableCell>
              <TableCell sx={{ fontWeight: 550 }} align="left">
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
                >
                  <Checkbox
                    sx={{
                      color: '#aa2a27',
                      '&.Mui-checked': { color: '#aa2a27' },
                    }}
                  />
                  {order.name}
                </TableCell>
                <TableCell align="left">{order.preference}</TableCell>
                <TableCell align="right">{order.notes}</TableCell>
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
