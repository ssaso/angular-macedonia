import { CommonModule } from '@angular/common';
import { Component, Input, Output, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import {
  months,
  MonthSelectorComponent,
} from './month-selector/month-selector.component';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { ReplaySubject, Observable } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// #region table component
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface TransactionModel {
  // Ime, datum,
  // In Use - boolean
  statement: StatementEnum;
}

export enum StatementEnum {
  VS = 'Visa',
  MS = 'Mastercard',
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

// #endregion

@Component({
  selector: 'app-tree-selector',
  imports: [
    CommonModule,
    MatToolbarModule,
    CountrySelectorComponent,
    MonthSelectorComponent,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './tree-selector.component.html',
  styleUrl: './tree-selector.component.scss',
})
export class TreeSelectorComponent {
  selectedContry!: string;
  selectedMonth!: string;

  transactionForm = new FormGroup({
    name: new FormControl(''),
    weight: new FormControl(''),
    symbol: new FormControl(''),
  });

  get f() {
    return this.transactionForm.controls;
  }

  resetSelection() {
    this.selectedContry = '';
    this.selectedMonth = '';
  }

  onCountrySelected(country: string) {
    console.log('onCountrySelected', country);
    this.selectedContry = country;
    this.selectedTransaction = undefined;
  }

  onMonthSelected(month: string) {
    console.log('onMonthSelected', month);

    // this.resetSelection();

    this.selectedMonth = month;
  }

  // #transaction table component
  selectedTransaction: PeriodicElement | undefined;

  // transactionModel = typeof TransactionModel;

  nameClick(transactionInterface: StatementEnum) {}

  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
  ];
  dataToDisplay = [...ELEMENT_DATA];

  // dataSource = new ExampleDataSource(this.dataToDisplay);
  dataSource = new MatTableDataSource<PeriodicElement>(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [
      ...this.dataToDisplay,
      ELEMENT_DATA[randomElementIndex],
    ];
    this.dataSource.data = [...ELEMENT_DATA];
  }

  removeData() {
    console.log(this.selection.selected[0]);

    let index = this.dataSource.data.indexOf(this.selection.selected[0]);
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = [...this.dataSource.data];

    this.selection.clear();

    // this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    // this.dataSource.setData(this.dataToDisplay);
  }

  // Selection
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  nashaFunkcija(row: PeriodicElement) {
    console.log('Nasha funkcija: ', row);
    this.selectedTransaction = row;

    this.nameClick(StatementEnum.MS);

    // this.selection.toggle(row);
  }
  // end selection
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
  // #endregion
}
