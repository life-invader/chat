import { App } from './app/app.js';
import { AuthModule } from './modules/auth/user.js';

const appRouters = [{
  url: "/auth",
  router: new AuthModule().router
}];

// Start
const app = new App({ routers: appRouters });
app.start();
