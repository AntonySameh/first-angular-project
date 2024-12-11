import { Component, signal, Input, input, computed, Output, EventEmitter, output} from '@angular/core';

import { single } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string; 

  // @Input({ required:true }) id!: string;
  // avatar = input.required<string>()
  // name = input.required<string>()

  @Input () user!: {id: string, name: string, avatar: string};

  // @Output() selectedUser = new EventEmitter();
  selectedUser = output<string>();

  get userImage() {
    return 'assets/users/' + this.user.avatar;
  }

  // get userImage() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser(){
    this.selectedUser.emit(this.user.id)
  }
}
