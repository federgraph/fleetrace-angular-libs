import { Component, OnInit, Input, inject } from '@angular/core';
import { IconData } from '../icon-legend/icon-data';
import { TBOManager } from 'fleetrace';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'fr-icon-bar-legend',
  templateUrl: './icon-bar-legend.component.html',
  styleUrls: ['./icon-bar-legend.component.scss'],
  imports: [MatIcon],
})
export class IconBarLegendComponent implements OnInit {
  @Input() caption = '';
  @Input() bar: IconData[] = [];

  public BOManager = inject(TBOManager);

  constructor() {}

  ngOnInit() {}
}
