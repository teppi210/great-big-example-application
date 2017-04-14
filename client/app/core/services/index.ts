// app
import { AuthGuard } from './auth.guard';
import { FeathersService } from './feathers.service';
import { RESTService } from './rest.service';
import { RouterExtensions } from './router-extensions.service';
import { SocketService } from './socket.service';
import { UserService } from './user.service';

export const CORE_PROVIDERS: any[] = [
  AuthGuard,
  FeathersService,
  RESTService,
  RouterExtensions,
  SocketService,
  UserService
];

export * from './router-extensions.service';
