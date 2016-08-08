import { Injectable } from '@angular/core';

import { QuestionDropdown, QuestionBase, QuestionTextbox } from '../models/index';


@Injectable()
export class QuestionServiceService {


  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new QuestionDropdown({
        key: 'hrabar', 
        label: 'Test Select',
        options: [
          {key: 'prvi', value: 'Prvi'},
          {key: 'drugi', value: 'Drugi'}
        ],
        order: 3
      }),

      new QuestionTextbox({
        key: 'firstName',
        label: 'Ime i prezime',
        value: '',
        required: true,
        order: 1
      }),

      new QuestionTextbox({
        key: 'emailAdress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }


}
