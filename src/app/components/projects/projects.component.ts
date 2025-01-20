import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardProjectComponent } from "../card-project/card-project.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIcon,
    CardProjectComponent
],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projectNavegationLink: string[] = ['backlog','roadmap','active-springs','releases','reports','tasks'];
  projectNavegationLinkActived: string = '';

  ngOnInit(): void {
    this.projectNavegationLinkActived = 'backlog';
  }

  onSwitchProjectNavegationLink(link: string): void {
      this.projectNavegationLinkActived = link;
  }
}
