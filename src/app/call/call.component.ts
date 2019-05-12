import {Component, Input, OnInit} from '@angular/core';
import {Call} from './Call';
import {CallService} from '../services/call.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
// Il est possible de créer des propriétés personnalisées dans un component afin de pouvoir lui transmettre des données depuis l'extérieur.
  @Input() callName: string;
  @Input() callStatus: string;

  calls: Call[];
  selectedCall: Call;

  constructor(private callService: CallService, private router: Router) {
  }

  ngOnInit() {
    this.calls = this.callService.findAllCalls();
  }


  showDetails(idMember: string): void {
    this.router.navigate(['calls/' + idMember]);
  }
}
