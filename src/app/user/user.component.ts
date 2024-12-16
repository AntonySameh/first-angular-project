import {
  Component,
  signal,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

import { single } from 'rxjs';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // @Input({ required:true }) id!: string;
  // avatar = input.required<string>()
  // name = input.required<string>()

  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  // @Output() selectedUser = new EventEmitter();
  selectedUser = output<string>();

  get userImage() {
    return 'assets/users/' + this.user.avatar;
  }

  // get userImage() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
