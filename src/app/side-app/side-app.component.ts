import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-app',
  templateUrl: './side-app.component.html',
  styleUrls: ['./side-app.component.css']
})
export class SideAppComponent implements OnInit {

  public sideNavn: string = "Sidenavn";
  public info;
  public ip;
  public componentName: string = "Side app";


  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  

  


}
