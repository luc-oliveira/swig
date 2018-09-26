const users = [
	{id: '1', name: 'Zeca Pagodinho', email:'zeca@pagodinho.com'},
	{id: '2', name: 'Periclão da Turma do Pagode', email:'periclao@tmdopagode.com'}
]

export class User{
	static findAll(): Promise<any>{
		return Promise.resolve(users)
	}

	static findById(id: string): Promise<any>{
		return new Promise(resolve => {
			const filtered = users.filter(user => user.id === id)
			resolve(filtered.length > 0 ? filtered : undefined)
		})
	}
}