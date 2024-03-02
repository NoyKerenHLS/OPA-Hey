export interface IUser {
  id: number;
  fullName: string;
  email: string;
  role: 'employee' | 'chef';
  createdAt: Date;
}
