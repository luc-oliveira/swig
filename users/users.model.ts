const users = [
	{name: 'Zeca Pagodinho', email:'zeca@pagodinho.com'},
	{name: 'Periclão da Turma do Pagode', email:'periclao@tmdopagode.com'},
]

export class User{
	static findAll(): Promise<any>{
		return Promise.resolve(users)
	}
}