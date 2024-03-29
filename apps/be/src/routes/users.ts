import { Router as expressRouter } from 'express';

const router = expressRouter();

router.get('/', (req, res) => {
  return res.send({ user: req.user });
});

export default router;
