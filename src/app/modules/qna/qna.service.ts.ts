

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QNA } from '@models/qna';

@Injectable()
export class QNAService {
  constructor(private http: HttpClient) { }

  getAllQNA(): Promise<{ qnas: QNA[], qnasAllTemp: QNA[], qnasAll: QNA[], groups: string[], totalQNAs: number }> {
    return new Promise(async (resolve) => {
      this.http.get<any[]>('/assets/data/qna.json').subscribe((data) => {
        console.log("DATA QNA", data);
        let qnasAll = data;
        let groups: string[] = [];
        let qnasAllTemp = Object.assign([], qnasAll);
        qnasAll?.forEach((item) => {
          groups.push(item.topic);
        })
        groups = groups.filter((item, pos) => {
          return groups.indexOf(item) == pos;
        });

        let qnas = Object.assign([], qnasAll);
        const totalQNAs = 10;
        qnas.length = totalQNAs;

        const result = { qnas, qnasAllTemp, qnasAll, groups, totalQNAs };
        resolve(result)
        return result;
      });
    });
  }
}