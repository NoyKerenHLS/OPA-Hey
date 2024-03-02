import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').unique().notNull(),
  role: text('role').$type<'employee' | 'chef'>().default('employee'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  preference: text('preference')
    .$type<'meat' | 'vegetarian' | 'vegan'>()
    .notNull(),
  notes: text('notes').default('').notNull(),
  status: text('status')
    .$type<'submitted' | 'ready' | 'picked' | 'opa-returned'>()
    .default('submitted')
    .notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
});
