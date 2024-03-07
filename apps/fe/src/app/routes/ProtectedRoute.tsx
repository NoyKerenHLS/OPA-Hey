import { type PropsWithChildren, type FC } from 'react';
import { IUser } from '../../types/user.type';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  user: IUser | null;
  role: IUser['role'];
};

const ProtectedRoute: FC<PropsWithChildren<Props>> = ({ user, role }) => {
  if (!user || user.role !== role) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
