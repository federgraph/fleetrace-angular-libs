import { Component, OnInit, Input, inject } from '@angular/core';
import { TBOManager } from 'fleetrace';
import { JsonInfo, RaceDataJson } from 'fr-local';
import { JsonPipe } from '@angular/common';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'fr-result-upload',
  templateUrl: './result-upload.component.html',
  styleUrls: ['./result-upload.component.scss'],
  imports: [JsonPipe],
})
export class ResultUploadComponent implements OnInit {
  @Input() race = 1;

  Info = 'info';
  TestOutput: any = '';

  jsonInfo: JsonInfo;

  public BOManager = inject(TBOManager);
  private apiService = inject(ApiService);

  constructor() {
    this.jsonInfo = new JsonInfo(this.BOManager);
  }

  ngOnInit() {
    this.clear();
  }

  show() {
    this.Info = `show() called for race ${this.race}`;
    this.TestOutput = this.jsonInfo.getRaceDataJson(this.race);
  }

  post() {
    this.Info = `post() called for race ${this.race}`;
    const t: RaceDataJson = this.jsonInfo.getRaceDataJson(this.race);
    this.apiService.push3(t).subscribe((data) => (this.TestOutput = data.retvalue));
    this.TestOutput = '';
  }

  clear() {
    this.Info = 'info';
    this.TestOutput = 'Json Preview to be shown here.';
  }
}
