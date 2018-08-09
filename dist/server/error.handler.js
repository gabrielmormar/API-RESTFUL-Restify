"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = (req, res, error, done) => {
    //console.log(error)
    error.toJSON = () => {
        return {
            message: error.message
        };
    };
    switch (error.name) {
        case 'MongoError':
            if (error.code === 11000) {
                error.statusCode = 400;
            }
            break;
        case 'ValidationError':
            error.statusCode = 400;
            const messages = [];
            for (let name in error.errors) {
                messages.push({ message: error.errors[name].message });
            }
            error.toJSON = () => {
                return {
                    errors: messages
                };
            };
            break;
    }
    done();
};
