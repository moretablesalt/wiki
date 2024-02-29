import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {PageListComponent} from "./page-list/page-list.component";
import {WikipediaService} from "./wikipedia.service";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchBarComponent, PageListComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  pages = [];
  constructor(private wikiService: WikipediaService) {}

  onTerm(term: string) {
    this.wikiService.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }
}
