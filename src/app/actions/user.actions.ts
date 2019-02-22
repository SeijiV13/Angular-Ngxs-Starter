import { User } from '../models/User';



export class GetUsers {
    static readonly type = '[User] Get';
}

export class GetUser {
    static readonly type = '[User] Get Individial';
    constructor(public payload: string){}
}

export class AddUser {
    static readonly type = '[User] Add';
    constructor(public payload: User){}
}

export class DeleteUser {
    static  readonly type = '[User] Delete';
    constructor(public payload: string){}
}

export class EditUser {
    static readonly type = '[User] Edit';
    constructor(public payload: User){}
}