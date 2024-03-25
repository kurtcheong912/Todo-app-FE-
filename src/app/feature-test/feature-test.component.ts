import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-feature-test',
  templateUrl: './feature-test.component.html',
  styleUrl: './feature-test.component.css'
})
export class FeatureTestComponent {
  @Output('sc') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  onAddServer() {
    console.log(environment.Local_host);

    this.serverCreated.emit({ serverName: "Servername1", serverContent: "this is my server content" });
  }
}
