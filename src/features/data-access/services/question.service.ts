import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionApiService } from '../infrastructure/question-api.service';
import { QuestionList } from '../models/question-list';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private readonly questionApiService: QuestionApiService) {}

  getQuestionList(): Observable<QuestionList> {
    return this.questionApiService.getQuestionList();
  }
}
