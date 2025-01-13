import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatError,MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-modal-create-tasks',
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    MatDialogTitle,
    MatIconModule,
    MatDialogContent,
    MatError,
    MatFormField,
    MatLabel,
    MatDialogClose,
    MatDialogActions,
  ],
  templateUrl: './modal-create-tasks.component.html',
  styleUrl: './modal-create-tasks.component.css'
})
export class ModalCreateTasksComponent {
  onSaveCreateNewTask() {

  }

  onCancelCreateNewTask() {
    
  }
}
