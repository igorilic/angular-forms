import { Component } from '@angular/core';
// import { DynamicFormComponent } from './dynamic-form/index';
import { QuestionServiceService} from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [QuestionServiceService]
  // directives: [DynamicFormComponent]
})
export class AppComponent {
  
  questions: any[];
  constructor(private _qs: QuestionServiceService) {
    this.questions = _qs.getQuestions();
    
  }
}
