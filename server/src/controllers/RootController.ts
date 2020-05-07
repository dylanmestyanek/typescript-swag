import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403);
    res.send("go away");
  }
}

@controller("")
class RootController {
  @get("/")
  getRoute(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
                  <div>
                      <div>You are logged in</div>
                      <a href="/auth/logout">Logout</a>
                  </div>
              `);
    } else {
      res.send(`
                  <div>
                      <div>You are not logged in idiot</div>
                      <a href="/auth/login">Log In</a>
                  </div>
              `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Wuddup homie dawg");
  }
}
