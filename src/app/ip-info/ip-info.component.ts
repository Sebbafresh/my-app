import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-info',
  templateUrl: './ip-info.component.html',
  styleUrls: ['./ip-info.component.css']
})
export class IpInfoComponent implements OnInit {

  constructor(public http: HttpClient) { }
  
  @Input() parent: string;

  
  public ip: string = "";
  public country: string = "";
  public show: boolean = false;
  

  ngOnInit(): void {
  }

  public onClick(){
    console.log("1");
    this.get();
  }

  public get(){
    this.show = !this.show;
    this.http.get<any>("https://api.ipify.org?format=json").subscribe((api) => {
      // this.info = api.country;
      this.ip = api.ip;
      console.log(api);

      this.http.get<any>("http://ip-api.com/json/" + this.ip).subscribe((api)=> {
        this.country = api.country;
        console.log(api);
      });

    });
  }

}
