import express, {Request, Response} from 'express';
import {router} from "./router/loginRouter";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({keys: ['faagehq']}));
app.use(router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
