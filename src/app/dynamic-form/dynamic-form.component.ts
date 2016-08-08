import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { QuestionBase } from '../models/index';
import { QuestionControlService } from '../shared/index';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/index';


@Component({
  moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  styleUrls: ['dynamic-form.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DynamicFormQuestionComponent],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];

  form: FormGroup;
  payLoad = '';

  constructor(private _qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this._qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
