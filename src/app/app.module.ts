import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { DynamicFormComponent } from './dynamic-form/index';
import { DynamicFormQuestionComponent } from './dynamic-form-question/index';
import { QuestionControlService, QuestionServiceService } from './shared/index';


@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        QuestionControlService,
        QuestionServiceService
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}