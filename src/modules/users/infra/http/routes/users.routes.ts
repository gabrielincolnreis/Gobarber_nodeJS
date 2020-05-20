import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '@modules/users/infra/http/controllers/UsersController';
import UsersAvatarController from '@modules/users/infra/http/controllers/UserAvatarController';

const userRouter = Router();
const userController = new UsersController();
const userAvatarController = new UsersAvatarController();

const upload = multer(uploadConfig);

// Rota: Recever a requisição, chamar outro arquivo e devolver uma resposta

userRouter.post('/', userController.create);

userRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default userRouter;
