import cors from 'cors';
import express from 'express';
const expressConfig = () => {
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
    return app;
};
export default expressConfig;
//# sourceMappingURL=express.config.js.map