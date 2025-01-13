import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateProjectComponent } from '../modal-create-project/modal-create-project.component';
import { ModalCreateTasksComponent } from '../modal-create-tasks/modal-create-tasks.component';
import { ModalMarkMeetComponent } from '../modal-mark-meet/modal-mark-meet.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ProgressSpinnerMode,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import Chart from 'chart.js/auto';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dialog = inject(MatDialog);
  isInputSearchFocused: boolean = false;
  displayMode: string = 'dark';
  chartIncomeTrends: any;
  mode: ProgressSpinnerMode = 'determinate';
  value: number = 80;
  color: string = 'orange';

  ngOnInit(){
    this.createChart();
  }

  createChart(){
    this.chartIncomeTrends = new Chart('chart-income-by-source', {
      type: 'bar',
      data: {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'set', 'out', 'nov', 'dez'],
        datasets: [
          {
            label: 'percentage',
            data: ['9', '10', '80', '40', '35', '50', '15', '75', '80', '40', '55', '60'],
            backgroundColor: ['#3b82f6', '#3b82f6', '#e6b400', '#3b82f6', '#3b82f6', '#e6b400', '#3b82f6', '#e6b400', '#e6b400', '#3b82f6', '#e6b400', '#e6b400'],
            borderColor: '#000',
            borderRadius: 0,
            barPercentage: 0.15
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          x: {
            grid: {
              display: false,
            }
          },  
          y: {
            grid: {
              display: true,
              circular: false,
              color: '#242424',
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  };

  onChangeDisplayMode(mode: string) {
    this.displayMode = mode;
    alert(`${mode} mode actived!`);
  }
  
  openCreateProjectDialog() {
    this.dialog.open(ModalCreateProjectComponent, {
      data: { title: 'sds'},
    });
  }

  openCreateTaskDialog() {
    this.dialog.open(ModalCreateTasksComponent, {
      data: { title: 'sds'},
    });
  }
  
  openMarkMeetingDialog() {
    this.dialog.open(ModalMarkMeetComponent, {
      data: { title: 'sds'},
    });
  }  
}
