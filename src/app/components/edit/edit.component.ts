import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetUser, EditUser } from 'src/app/actions/user.actions';
import { UserState } from 'src/app/state/user.state';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateComponent } from '../create/create.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Select(UserState.getUsers) users$: Observable<User[]>;
  constructor(private store: Store, private route: ActivatedRoute, private router: Router) { }
  @ViewChild('createApp') createApp: CreateComponent;
  ngOnInit() {
    this.getId();
  }

  
  
  getId(){
    let paramId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new GetUser(paramId)).subscribe((data)=>{
          this.createApp.patchFormValue(data.users.users[0])
    });
  }

  editUser(event){
      this.store.dispatch(new EditUser(event)).subscribe(()=>{
        this.router.navigate(['/']);
      });
  }


}
