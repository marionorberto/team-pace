import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

export interface PeriodicElement {
  task:  string,
  assignedTo: string,
  project: string,
  priority: string,
  status: string,
  deadline: string,
  lastUpdated: string,
}

const ELEMENT_DATA: PeriodicElement[] = [
  { 
    task: 'Add homepage',
    assignedTo: 'Mário Norberto',
    project: 'Cybernorb',
    priority: 'High',
    status: 'In Progress',
    deadline: '23, Jan',
    lastUpdated: '10, Dez',
  },
  { 
    task: 'Deploy Application',
    assignedTo: 'Mário Norberto',
    project: 'Cybernorb',
    priority: 'High',
    status: 'In Progress',
    deadline: '25, Fev',
    lastUpdated: '2, Dez',
  },
  { 
    task: 'Design',
    assignedTo: 'Helder Francisco',
    project: 'aada',
    priority: 'Medium',
    status: 'Done',
    deadline: 'H',
    lastUpdated: '1, Mar',
  },
  { 
    task: 'da',
    assignedTo: 'Hydrogen',
    project: 'aada',
    priority: 'H',
    status: 'H',
    deadline: 'H',
    lastUpdated: 'H',
  },
  { 
    task: 'da',
    assignedTo: 'Hydrogen',
    project: 'aada',
    priority: 'H',
    status: 'H',
    deadline: 'H',
    lastUpdated: 'H',
  },
  { 
    task: 'da',
    assignedTo: 'Hydrogen',
    project: 'aada',
    priority: 'H',
    status: 'H',
    deadline: 'H',
    lastUpdated: 'H',
  },
  { 
    task: 'da',
    assignedTo: 'Hydrogen',
    project: 'aada',
    priority: 'H',
    status: 'H',
    deadline: 'H',
    lastUpdated: 'H',
  },
];

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {

  displayedColumns: string[] = ['task','assignedTo','project', 'priority', 'status', 'deadline', 'lastUpdated'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
