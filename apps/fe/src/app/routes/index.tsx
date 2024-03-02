import { type FC, useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import ProtectedRoute from './ProtectedRoute';
import Home from '../components/Home';
import Login from '../components/Login';
import { IUser } from '../../types/user.type';
import Order from '../components/Order';
import KitchenOrders from '../components/KitchenOrders';

const AppRoutes: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const getUser = async () => {
    try {
      const { data } = await axios.get<{ user: IUser }>('/user');

      setUser(data.user);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute user={user} role="employee" />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ProtectedRoute user={user} role="employee" />}>
          <Route path="/order" element={<Order />} />
        </Route>

        <Route element={<ProtectedRoute user={user} role="chef" />}>
          <Route path="/kitchen" element={<Home />} />
        </Route>

        <Route element={<ProtectedRoute user={user} role="chef" />}>
          <Route path="/kitchen/orders" element={<KitchenOrders />} />
        </Route>

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
