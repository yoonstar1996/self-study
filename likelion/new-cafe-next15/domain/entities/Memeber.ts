export class Member {
	constructor(
		public username: string,
		public password: string,
		public email: string,
		public id?: string,
		public image?: string,
		public createdAt?: Date,
		public updatedAt?: Date,
		public deletedAt?: Date
	) {}
}
