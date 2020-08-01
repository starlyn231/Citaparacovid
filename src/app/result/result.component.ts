import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"],
})
export class ResultComponent implements OnInit {
  // objeto para extraer los datos
  dataExtractor: any;

  // ActivatedRoute permite detectar todo lo que envie el Router
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Extraer datos de la url

    this.activatedRoute.queryParams.subscribe((result) => {
      console.log(result);
      this.dataExtractor = result;
    });
  }
}
