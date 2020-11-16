import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.default.initializeApp({
      apiKey: 'AIzaSyBditQG7HdNlG3pphfu246yY8fPtP7EnAI',
      authDomain: 'fir-basic-bae64.firebaseapp.com'
    });
  }
}
