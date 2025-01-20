
import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  person: {
    username: string,
    email: string,
  },
  dateAssigned: string,
  lastActived: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { 
    person: {
      username: 'marionorberto',
      email: 'marionorberto2018@gmail.com'
    } ,
    dateAssigned: '23 Mar, 2024',
    lastActived: '1d',
  },
  { 
    person: {
      username: 'marionorberto',
      email: 'marionorberto2018@gmail.com'
    } ,
    dateAssigned: '23 Mar, 2024',
    lastActived: '3m',
  },
];


@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
    displayedColumns: string[] = ['person', 'dateAssigned', 'lastActived', 'settings'];
    dataSource = [...ELEMENT_DATA];
  
    @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  
}
