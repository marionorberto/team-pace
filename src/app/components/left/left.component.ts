import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';


@Component({
  selector: 'app-left',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule
  ],
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent implements OnInit {
  recentProject: string[] = ['tasker', 'cybernorb', 'tablecoin'];
  displayMode: string = 'dark';
  menuColapsed: { status: boolean, width: string } = { status: false, width: '15%' };

  private _snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.menuColapsed.width = '15%'
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      panelClass: 'success-snackbar',
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onChangeDisplayMode(mode: string) {
    this.displayMode = mode;
    this.openSnackBar();
  }

  onColapseMenu() {
    this.menuColapsed.status = !this.menuColapsed.status;
    this.menuColapsed.width = this.menuColapsed.status ? '6vw' : '15vw';
  }
}
