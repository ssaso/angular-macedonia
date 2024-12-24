import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-tree-selector',
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './tree-selector.component.html',
  styleUrl: './tree-selector.component.scss',
})
export class TreeSelectorComponent {
  selectedContry!: string;
  selectedYear = '';

  resetSelection() {
    console.log('resetSelection');
  }
}
