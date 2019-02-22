import { User } from '../models/User';
import { State, Selector, StateContext, Action, Store } from '@ngxs/store';
import { AddUser, DeleteUser, GetUser, EditUser, GetUsers } from '../actions/user.actions';
import { UserService } from '../services/user.service';
import { tap, take } from 'rxjs/operators';



export class UserStateModel {
    users: User[];
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})

export class UserState {
    constructor(private userService: UserService, private store: Store){}
    @Selector()
    static getUsers(state: UserStateModel){
        return state.users;
    }


    @Action(GetUsers)
    getUsers({getState, patchState}: StateContext<UserStateModel>){
        const state = getState();
        return this.userService.getUsers().pipe(
          tap((data: User[])=>{
            patchState({
               users: data
            })
          })
         )

    }

    @Action(GetUser)
    getUser({getState, patchState}: StateContext<UserStateModel>, {payload}: GetUser){
        const state = getState();
       return this.userService.getUser(payload).pipe(
            tap((user: User[])=>{
                patchState({
                    users: user,
                })
            })
        )
    }

    @Action(AddUser)
    addUser({getState, patchState}: StateContext<UserStateModel>, {payload}: AddUser){
        const state = getState();
       return this.userService.postUser(payload).subscribe((data: User)=>{
            patchState({
                users: [...state.users, data]
            })
        })
     
    }

    @Action(DeleteUser)
    deleteUser({getState}: StateContext<UserStateModel>, {payload}: DeleteUser){
        const state = getState();
       return this.userService.deleteUser(payload).subscribe(()=>{
            this.store.dispatch(new GetUsers);
        })
     
    }

    @Action(EditUser)
    editUser({getState}: StateContext<UserStateModel>, {payload}: EditUser){
        const state = getState();
      return this.userService.editUser(payload).pipe(
            tap((user: User) =>{
             this.store.dispatch(new GetUsers);
            })
        )
    }

    
}