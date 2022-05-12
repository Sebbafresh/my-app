import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'my-app';
  public showTemplate: boolean = false;
  public randomNumber: number = 0;
  public tekstStreng: string = "";
  public maxTall: number = 600000;
  public naavaerendeTall: number;
  public personer: {navn: string, tall: number}[] = [{navn: "Eirik", tall: 69}, {navn: "Tor", tall: 420}];
  public extraTall: string = "5";




  public onClick(){
    this.personer.push({navn: "Sebastian", tall: 123});

    this.personer.forEach((person) => {
      console.log("Personen vi ser på nå: ", person.navn, person.tall);
    });


    // for(let startTall: number = 0; startTall <= this.maxTall; startTall++){
    //   this.naavaerendeTall = startTall;
    // }
    
    // this.randomNumber = Math.random();
    // if(this.randomNumber < 0.5){
    //   this.tekstStreng = "Tallet er mindre enn 0,5";
    // } else {
    //   this.tekstStreng = "Tallet er mer enn 0,5";
    // }


  }


}
