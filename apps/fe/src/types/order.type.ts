export interface IOrder {
  id: number;
  userId: number;
  preference: string;
  notes: string;
  status: 'submitted' | 'ready' | 'picked' | 'opa-returned';
  createdAt: Date;
}

export interface IKitchenOrder {
  id: number;
  userId: number;
  name: string;
  preference: string;
  notes: string;
}
