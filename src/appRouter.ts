import express from "express";

//we need only one router over whole app, lets use singleton for it :)
export class AppRouter {
    private static instance: express.Router;

    static getInstance(): express.Router {
        if(!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }
        return AppRouter.instance;
    }
}
