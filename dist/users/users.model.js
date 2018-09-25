"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { name: 'Zeca Pagodinho', email: 'zeca@pagodinho.com' },
    { name: 'Periclão da Turma do Pagode', email: 'periclao@tmdopagode.com' },
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
}
exports.User = User;
