import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string;
  categories = [
    {
      name: "Elektronika"
    },
    {
      name: "Texnika"
    },
    {
      name: "Go'zallik"
    },
    {
      name: "Qurilish"
    },
    {
      name: "Oshxona jihozi"
    }
  ];
  students = [
    {
      id: 3023,
      name: "John",
      surname: "Cena"
    },
    {
      id: 3556,
      name: "John",
      surname: "Travolta"
    },
    {
      id: 3934,
      name: "Kilian",
      surname: "Mbappe"
    },
    {
      id: 3123,
      name: "Jason",
      surname: "Stateham"
    },
    {
      id: 3026,
      name: "Steve",
      surname: "Jobs"
    }
  ]

  constructor () {
    this.name = "Eshmat";
  }

  ngOnInit() {
    console.log(this.name);
    setTimeout(() => {
      this.name = "Eshmatxo'jabekxon";
    }, 2000);
  }

  public submitName() {
    console.log(this.name);
    
  }

  public logData (student) {
    console.log(student.id);
    
  }

}
