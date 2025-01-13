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
  selector: 'app-modal-mark-meet',
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
  templateUrl: './modal-mark-meet.component.html',
  styleUrl: './modal-mark-meet.component.css'
})
export class ModalMarkMeetComponent {
  participantCollection: string[] = [];
  participant: string = '';
  errors: string = '';

  onSaveCreateNewMeet() {

  }

  onCancelCreateNewMeet() {
    
  }

  onAddParticipants(e: EventTarget | null) {
    if (!this.participant) {
      this.errors = 'email required!';
    }
    if (this.participantCollection.length >= 4) {
      this.errors = 'only 8 parcipants at most allowed';
      return;
    }

    this.participantCollection.push(this.participant);
  }
  
  onDeleteParticipant(participant: string) {
    this.participantCollection.filter(item => item !== participant  );
  }
}
