import { App } from './app/app.js';
import { MessageRouter } from './modules/message/router.js';
import { UserRouter } from './modules/user/index.js';

const appRouters = [
  {
    url: "/auth",
    router: new UserRouter().router,
  },
  {
    url: "/message",
    router: new MessageRouter().router,
  },
];

// Start
const app = new App({ routers: appRouters });
app.start();
