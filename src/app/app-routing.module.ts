import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GithubComponent } from './github/github.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'github', component: GithubComponent },
  { path: 'bitcoin', component: BitcoinComponent },
  { path: 'repos/:index', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
