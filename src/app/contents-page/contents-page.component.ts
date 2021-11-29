import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from "src/app/rest.service";

@Component({
  selector: 'app-contents-page',
  templateUrl: './contents-page.component.html',
  styleUrls: ['./contents-page.component.css']
})
export class ContentsPageComponent implements OnInit {


  issue: any;
  showCommen: any = [];
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private rest: RestService, private router: Router) {

  }
  ngOnInit() {
    this.getModalidades();
  }
  getModalidades() {
    this.showCommen = [];
    console.log("si pasa por el get");
    this.rest.getModalidad().subscribe((data: {}) => {
      this.showCommen = data;
    });
  }

}
