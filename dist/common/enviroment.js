"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviroment = {
    server: { port: process.env.SERVER_PORT || 3000 },
    db: { url: process.env.DB_URL || 'mongodb://localhost/meal-api' },
    security: { saltRounds: process.env.SALT_ROUNDS || 10 }
};
