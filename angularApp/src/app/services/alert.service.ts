import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private configSuccess: MatSnackBarConfig = {
    duration: 5000,
    panelClass: ['bg-success'],
    verticalPosition: 'top',
  };

  private configError: MatSnackBarConfig = {
    duration: 5000,
    panelClass: ['bg-danger'],
    verticalPosition: 'top',
  };

  constructor(private snackBar: MatSnackBar) { }

  success(message: string): void {
    this.snackBar.open(message, 'X', this.configSuccess);
  }

  error(message: string): void {
    this.snackBar.open(message, 'X', this.configError);
  }
}
