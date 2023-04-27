import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './main/category/category.component';
import { TopComponent } from './main/top/top.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'main', component: MainComponent,
      children: [
        { path: '', component: TopComponent },
        { path: 'category/:id', component: CategoryComponent },
        { path: "product/:id", component: ProductComponent }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
