import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    console.log("helooo this is from feature test");
  }
}
