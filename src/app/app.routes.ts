import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/settings/profile/profile.component';
import { AccountComponent } from './components/settings/account/account.component';
import { MessageComponent } from './components/settings/message/message.component';
import { NotificationComponent } from './components/settings/notification/notification.component';
import { PreferenceComponent } from './components/settings/preference/preference.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MembersComponent } from './components/members/members.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { RegisterComponent } from './components/register/register.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/teampace/login',
    pathMatch: 'full'
  },
  {
    path: 'teampace/login',
    component: LoginComponent,
  },
  {
    path: 'teampace/register',
    component: RegisterComponent,
  },
  {
    path: 'teampace/dashboard',
    component: MainComponent,
    children: [
      {
        path: 'overview',
        component: DashboardComponent,
        pathMatch: 'prefix'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        pathMatch: 'prefix'
      },
      {
        path: 'my-notifications',
        component: NotificationsComponent,
        pathMatch: 'prefix'
      }, 
      {
        path: 'team-members',
        component: MembersComponent,
        pathMatch: 'prefix'
      },
      {
        path: 'my-projects',
        component: MyProjectsComponent,
        pathMatch: 'prefix'
      },   
      {
        path: 'activities',
        component: ActivitiesComponent,
        pathMatch: 'prefix'
      },       
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: 'profile',
            component: ProfileComponent,
            pathMatch: 'prefix',        
          },
          {
            path: 'messages',
            component: MessageComponent,
            pathMatch: 'prefix',        
          },
          {
            path: 'notifications',
            component: NotificationComponent,
            pathMatch: 'prefix',        
          },
          {
            path: 'preferences',
            component: PreferenceComponent,
            pathMatch: 'prefix',        
          },
          {
            path: 'account',
            component: AccountComponent,
            pathMatch: 'prefix',        
          }
        ]
      },
    ]
  },  
  {
    path: '**',
    component: NotFoundComponent
  }
];
