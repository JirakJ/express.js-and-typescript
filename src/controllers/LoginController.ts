import {Request, Response} from "express";
import {get, controller, bodyValidator, post} from "./decorators";

@controller('/auth')
class LoginController {

    @get('/login')
    getLogin(req: Request,res: Response): void {
        res.send(`<form method="POST">
            <div>
            <label>Email</label>
            <input name="email"/>
            </div>
            <div>
            <label>Password</label>
            <input name="password"/>
            </div>
            <button>Submit</button>
            </form>`);
        };

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response){
        const {email, password} = req.body;

        //just hardcoded credentials
        if(email && password && email === 'test@jakubjirak.com' && password === 'strongPassword'){
            //mark person as logged in
            req.session = { loggedIn: true };
            //redirect to root route
            res.redirect('/');
        } else {
            res.send('Invalid email or password');
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.redirect('/');
    }
}