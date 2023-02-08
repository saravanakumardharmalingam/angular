import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"student",component:StudentComponent,
     children:
     [
     { path:"",component:ListingComponent
     },
     {
      path:"create",component:AddnewComponent
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
