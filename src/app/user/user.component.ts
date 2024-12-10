import { Component, signal, Input, input, computed, Output, EventEmitter} from '@angular/core';

import { single } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required:true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string; 
  avatar = input.required<string>()
  name = input.required<string>()

  @Output() selectedUser = new EventEmitter();

  userImage = computed(() => 'assets/users/' + this.avatar())

  // get userImage() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser(){}
}
