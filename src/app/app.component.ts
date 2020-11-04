import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showHeader1: boolean;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.showHeader1 = false;
  }

  toggleHeader1(): void {
    this.showHeader1 = !this.showHeader1;
  }

  login(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      height: '550px'
    });

  }
}
