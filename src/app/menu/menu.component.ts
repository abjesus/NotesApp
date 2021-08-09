import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [{ nome: 'Notas' },{ nome: 'Tarefas' },{ nome: 'Lembretes' },];
  }

}
