import { Router } from 'express';
import eventsRouter from './events/routes';
import authRouter from './auth/routes';
import { handleHealthRequest } from './health';
import  mailRouter  from './mails/routes';

const router = Router();

router.get('/health', handleHealthRequest);
router.use('/events', eventsRouter);
router.use('/mail', mailRouter);
router.use('/', authRouter);

export default router;