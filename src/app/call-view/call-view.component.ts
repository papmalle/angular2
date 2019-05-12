import {Component, Input, OnInit} from '@angular/core';
import {Call} from "../call/Call";
import {ActivatedRoute, Router} from "@angular/router";
import {CallService} from "../services/call.service";

@Component({
  selector: 'app-call-view',
  templateUrl: './call-view.component.html',
  styleUrls: ['./call-view.component.scss']
})
export class CallViewComponent implements OnInit {

  call: Call;

  constructor(private callService: CallService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id']; // id même nom que dans la declaration route dans app.module
    this.call = this.callService.findById(id)
  }

}
