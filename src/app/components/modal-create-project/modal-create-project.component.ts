import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogActions
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-create-project',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogTitle,
    MatIconModule,
    MatDialogContent,
    MatDialogClose,
    MatDialogActions,
  ],
  templateUrl: './modal-create-project.component.html',
  styleUrl: './modal-create-project.component.css'
})
export class ModalCreateProjectComponent {
  onSaveCreateNewProject() {

  }

  onCancelCreateNewProject() {
    
  }
}
