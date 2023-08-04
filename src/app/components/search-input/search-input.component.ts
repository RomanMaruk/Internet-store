import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() emitName = new EventEmitter<string>();

  name = new FormControl('');

  ngOnInit(): void {
    this.name.valueChanges.subscribe((text) => {
      this.emitName.emit(text ?? '');
    });
  }
}
