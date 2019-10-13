import { Router } from 'express';
import multer from 'multer';
import authMiddleware from './middlewares/auth';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import RegistrationController from './app/controllers/RegistrationController';
import HomeController from './app/controllers/HomeController';

const routes = new Router();
const upload = multer(multerConfig);
routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.get('/meetups', HomeController.index);
routes.put('/users', UserController.update);
routes.post('/files/:type', upload.single('banner'), FileController.store);

routes.get('/meetup/:meetupId?', MeetupController.index);
routes.post('/meetup', MeetupController.store);
routes.put('/meetup/:meetupId', MeetupController.update);
routes.delete('/meetup/:meetupId', MeetupController.delete);

routes.post('/registration', RegistrationController.store);

routes.get('/registration', RegistrationController.index);
export default routes;
