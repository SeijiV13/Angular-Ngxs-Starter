import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/state/user.state';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { DeleteUser, GetUser } from 'src/app/actions/user.actions';
import { single } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() deleteUserEvent = new EventEmitter();
  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
  }

  selectUser(id){
    this.router.navigate([`/select/${id}`])
  }


  deleteUser(id: string){
     this.deleteUserEvent.emit(id);
  }

}
