import { PORT } from "./utils/env.js";
import expressConfig from "./express/express.config.js";
import establishDbConnection from "./clients/mongoDbClient.js";
import userRouter from "./routes/routes.user.js";
const app = expressConfig();
await establishDbConnection();
app.use(userRouter);
app.listen(PORT, () => console.log('Server running on port ' + PORT));
//# sourceMappingURL=index.js.map