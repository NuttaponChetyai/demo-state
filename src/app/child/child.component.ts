import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <input type="text" #data />
    <button (click)="addNewMessage(data.value); data.value = ''">Update</button>
  `,
  styleUrl: './child.component.css',
})
export class ChildComponent {
  constructor(private dataService: DataService) {}

  addNewMessage(newMessage: string) {
    this.dataService.addNewMessage(newMessage);
  }
}
