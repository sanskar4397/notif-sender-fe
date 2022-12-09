import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path : 'register', component: SignUpComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
