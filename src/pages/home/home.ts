import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {GithubService} from '../../providers/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GithubService]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(public navCtrl: NavController, public github: GithubService) {
  }

  getRepositories(username) {
    this.github.getRepos(this.username).subscribe(
      data => {
        console.log('returned data', data.json());
        this.foundRepos = data.json();
      }
      ,err => {
        console.log(err)
      ,() => console.log('getRepos complete.')
      }
    )
  }

}
