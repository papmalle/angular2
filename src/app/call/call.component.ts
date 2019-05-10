import {Component, Input, OnInit} from '@angular/core';
import {Call} from './Call';
import {CallService} from '../services/call.service';

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

  constructor(private callService: CallService) {
  }

  ngOnInit() {
    this.callService.getListAppareils().subscribe((value: Call[]) => {
        this.calls = value;
      }, (error: any) => {
        console.log('il ya eu une erreur');
      },
      () => {
        console.log('Complete');
      });
  }


  showDetails(call: Call): void {
    this.selectedCall = call;
  }
}
