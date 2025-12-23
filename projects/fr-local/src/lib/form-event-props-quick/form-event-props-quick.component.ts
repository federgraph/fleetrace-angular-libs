import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { EventProps, ScoringSystemStrings, NameFieldSchemaStrings } from '../shared/data-model';
import { TBOManager } from 'fleetrace';
import { TScoringSystem } from 'fleetrace';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { MatFormField } from '@angular/material/form-field';
import { MatOption } from '@angular/material/select';

@Component({
  selector: 'fr-form-event-props-quick',
  templateUrl: './form-event-props-quick.component.html',
  styleUrls: ['./form-event-props-quick.component.scss'],
  imports: [MatCheckbox, ReactiveFormsModule, FormsModule, MatRadioButton, MatFormField, MatOption],
})
export class FormEventPropsQuickComponent implements OnInit {
  RadioBarVisible = true;
  SelectsVisible = false;

  systems = ScoringSystemStrings;
  schemas = NameFieldSchemaStrings;

  @Output() propsChanged = new EventEmitter<EventProps>();

  system = 0;
  schema = 0;

  eventName = 'Event Name';
  scoringSystem: TScoringSystem = TScoringSystem.LowPoint;
  schemaCode: number;
  isTimed: boolean;

  public BOManager = inject(TBOManager);

  constructor() {}

  ngOnInit() {
    this.patch();
  }

  reset() {
    const formData = new EventProps();
    this.eventName = formData.eventName;
    this.scoringSystem = formData.scoringSystem;
    this.schemaCode = formData.schemaCode;
    this.isTimed = formData.isTimed;
  }

  patch() {
    const ep = this.BOManager.BO.EventProps;
    this.eventName = ep.EventName;
    this.scoringSystem = ep.ScoringSystem;
    this.schemaCode = ep.SchemaCode;
    this.isTimed = ep.IsTimed;

    this.system = this.scoringSystem;
    this.schema = this.schemaCode;
  }

  submit() {
    const ep = new EventProps();
    ep.eventName = this.eventName;
    ep.scoringSystem = this.scoringSystem;
    ep.schemaCode = this.schemaCode;
    ep.isTimed = this.isTimed;
    this.propsChanged.emit(ep);
  }
}
