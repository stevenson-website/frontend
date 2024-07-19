import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionList } from '../models/question-list';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionApiService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  getQuestionList(): Observable<QuestionList> {
    return this.httpClient.get<QuestionList>(
      `${environment.questions.baseUrl}/random-questions`
    ); 
  }
}
