import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() submitted = new EventEmitter<string>();
  term = '';

  onInput($event: Event) {
    let inputElement = $event.target as HTMLInputElement;
    this.term = inputElement.value;
  }

  onFormSubmit($event: Event) {
    $event.preventDefault();
    this.submitted.emit(this.term);
  }
}
