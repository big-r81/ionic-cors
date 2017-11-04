import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import $RefParser from 'json-schema-ref-parser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public schema: Object;

  constructor(public navCtrl: NavController) {}

  public getFlatSchema(uri: string): Promise<Object> {
    let parser = new $RefParser();
    return parser.dereference(uri);
  }

  ngOnInit() {
    this.getFlatSchema("https://v22017084844652188.powersrv.de/schemas/test.json")
      .then((value) => {
        console.log("Schema fetched...");
        this.schema = value;
      })
      .catch(error => {
        console.log("Schema not fetched...");
        console.log(error);
      });
  }

}
