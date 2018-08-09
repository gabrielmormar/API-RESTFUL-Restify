"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const users_model_1 = require("./users.model");
class UsersRouter extends router_1.Router {
    constructor() {
        super();
        this.on('beforeRender', document => {
            document.password = undefined;
        });
    }
    applyRoutes(application) {
        //GET
        application.get('/users', (req, res, next) => {
            users_model_1.User.find().then(this.render(res, next));
        });
        //GET
        application.get('/users/:id', (req, res, next) => {
            users_model_1.User.findById(req.params.id).then(this.render(res, next));
        });
        //POST
        application.post('/users', (req, res, next) => {
            let user = new users_model_1.User(req.body);
            user.save().then(this.render(res, next));
        });
        //PUT
        application.put('/users/:id/', (req, res, next) => {
            const options = { overwrite: true };
            users_model_1.User.update({ _id: req.params.id }, req.body, options).exec()
                .then(result => {
                if (result.n) {
                    return users_model_1.User.findById(req.body.id);
                }
                else {
                    res.send(404);
                }
            }).then(this.render(res, next));
        });
        //PATCH
        application.patch('/users/:id', (req, res, next) => {
            const options = { new: true };
            users_model_1.User.findByIdAndUpdate(req.params.id, req.body, options).then(this.render(res, next));
        });
        //DELETE
        application.del('/users/:id', (req, res, next) => {
            users_model_1.User.remove({ _id: req.params.id }).exec().then((cmdResult) => {
                if (cmdResult.result.n) {
                    res.send(204);
                    return next();
                }
                else {
                    res.send(404);
                }
                return next();
            });
        });
    }
}
exports.usersRouter = new UsersRouter();
