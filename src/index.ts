import express from 'express';
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import './controllers/LoginController';
import './controllers/RootController';
import {AppRouter} from "./appRouter";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({keys: ['faagehq']}));
app.use(AppRouter.getInstance());

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
