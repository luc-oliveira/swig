"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { id: '1', name: 'Zeca Pagodinho', email: 'zeca@pagodinho.com' },
    { id: '2', name: 'Periclão da Turma do Pagode', email: 'periclao@tmdopagode.com' }
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
    static findById(id) {
        return new Promise(resolve => {
            const filtered = users.filter(user => user.id === id);
            resolve(filtered.length > 0 ? filtered : undefined);
        });
    }
}
exports.User = User;
