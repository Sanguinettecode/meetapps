import { Router } from 'express';
import multer from 'multer';
import authMiddleware from './middlewares/auth';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';

const routes = new Router();
const upload = multer(multerConfig);
routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/files/:type', upload.single('banner'), FileController.store);
routes.post('/meetup', MeetupController.store);
export default routes;
