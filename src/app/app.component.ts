import { Component, VERSION } from '@angular/core';


// Normal import
// import { ModelA, ModelB } from './shared/models'; // Barrel usage group imports
// import { AService } from './shared/services/a.service';
// import { BService } from './shared/services/b.service';

// Absolute path import
import { ModelA, ModelB } from '@models/index'; // Barrel usage group imports
import { AService } from '@services/a.service';
import { BService } from '@services/b.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>`
})
export class AppComponent {
  public title: string = `Angular ${VERSION.major} Absolute Path`;

  public modelA: ModelA;
  public modelB: ModelB;

  constructor(private aService: AService, private bService: BService) {
    console.log(this.aService.serviceName());
    console.log(this.bService.serviceName());

    this.modelA = new ModelA("Model A instance");
    this.modelB = new ModelB("Model B instance");
  }
}
