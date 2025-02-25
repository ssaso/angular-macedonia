import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  hidePassword = true;
  countries: string[] = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Australia',
  ];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          nameValidator(),
          idValidator,
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', Validators.required],
      newsletter: [false],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('User Registration Data:', this.registerForm.value);
    }
  }
}

export const reservedWords = [
  'abstract',
  'arguments',
  'await',
  'boolean',
  'break',
  'byte',
  'case',
  'catch',
  'char',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'double',
  'else',
  'enum',
  'eval',
  'export',
  'extends',
  'false',
  'final',
  'finally',
  'float',
  'for',
  'function',
  'goto',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'int',
  'interface',
  'let',
  'long',
  'native',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'short',
  'static',
  'super',
  'switch',
  'synchronized',
  'this',
  'throw',
  'throws',
  'transient',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'volatile',
  'while',
  'with',
  'yield',
];

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    // Check if there is at least 1 character (in case the user enters numbers only)
    if (!/[A-Za-z]+/.test(value)) {
      return { message: 'Enter at least 1 character' };
    }

    // Check if the value is a word from the expressionFields array
    const expressionIndex = reservedWords.findIndex((item) => {
      if (value.trim().toLowerCase() === item.toLowerCase()) {
        return true;
      }
      return false;
    });

    return expressionIndex != -1 ? { message: 'Reserved Word' } : null;
  };
}

export function idValidator(control: AbstractControl): ValidationErrors | null {
  const validRuleCodePattern = /^[a-zA-Z0-9_-]+$/;

  if (!control.value) {
    return null; // If the field is empty, let the required validator handle it
  }

  // Check for allowed characters
  if (!validRuleCodePattern.test(control.value)) {
    return {
      // invalid: true,
      message: 'Use only letters, numbers, _ or -.',
    };
  }

  // Check if '0' is entered
  if (control.value === '0') {
    return {
      message: '0 is not a valid input.',
    };
  }

  return null; // If no errors, return null
}
