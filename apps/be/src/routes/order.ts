import { Router as expressRouter } from 'express';
import { db } from '../db';
import { eq, sql } from 'drizzle-orm';
import { orders, users } from '../db/schema';

const router = expressRouter();

router.get('/employee', async (req, res) => {
  const todayStart = new Date(new Date().setHours(0, 0, 0, 0));
  const todayEnd = new Date(new Date().setHours(23, 59, 59));

  const [todayOrder] = await db
    .select()
    .from(orders)
    .where(
      sql`${orders.userId} = ${req.user.id} and ${orders.createdAt} >= ${todayStart} and ${orders.createdAt} <= ${todayEnd}`
    );

  return res.send({ order: todayOrder });
});

router.get('/kitchen', async (req, res) => {
  const todayStart = new Date(new Date().setHours(0, 0, 0, 0));
  const todayEnd = new Date(new Date().setHours(23, 59, 59));

  const todayOrders = await db
    .select({
      id: orders.id,
      userId: users.id,
      name: users.fullName,
      preference: orders.preference,
      notes: orders.notes,
    })
    .from(orders)
    .innerJoin(users, eq(orders.userId, users.id))
    .where(
      sql` ${orders.createdAt} >= ${todayStart} and ${orders.createdAt} <= ${todayEnd}`
    );

  return res.send({ orders: todayOrders });
});

router.post('/', async (req, res) => {
  const newOrder = req.body;

  const insertOrder = await db.insert(orders).values({
    userId: req.user.id,
    preference: newOrder.preference,
    notes: newOrder.notes,
  });

  return res.send({ sentOrder: insertOrder });
});

router.patch('/', async (req, res) => {
  const orderInfo = req.body;

  const [order] = await db
    .update(orders)
    .set({ status: orderInfo.status })
    .where(eq(orders.id, orderInfo.id))
    .returning();

  return res.send({ status: order.status });
});

export default router;
