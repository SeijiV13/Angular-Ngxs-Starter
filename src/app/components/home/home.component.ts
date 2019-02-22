import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { User } from 'src/app/models/User';
import { AddUser, DeleteUser, GetUsers } from 'src/app/actions/user.actions';
import { UserState } from 'src/app/state/user.state';
import { Observable } from 'rxjs';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Select(UserState.getUsers) users$: Observable<User[]>;
  constructor(private store: Store) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers(){
    this.store.dispatch(new GetUsers());
  }

  deleteUser(id: string){
    this.store.dispatch(new DeleteUser(id));
  }

  addUser(user: User){
    this.store.dispatch(new AddUser(user));
  }

}
