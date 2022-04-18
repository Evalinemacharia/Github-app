import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs-compat/operator/find';
import { GithubRequestService } from '../github-http/github-request.service';
import { Repository } from '../repository';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubRequestService],
})
export class SearchComponent implements OnInit {
  username!:string
  user:any = []
  repo:any = []

  constructor(private my_service:GithubRequestService) { 
    this.my_service.getUser().subscribe(user=>{
      this.user = user
    })
    this.my_service.findRepo().subscribe(repo =>{
      this.repo = repo
    })
  }

  ngOnInit(): void {}
    findUser(){
    this.my_service.update(this.username)
    this.my_service.getUser().subscribe(user=>{
      this.user =this. user
    })
    this.my_service.findRepo().subscribe(repo =>{
      this.repo = this.repo
    })

    }
  

}
