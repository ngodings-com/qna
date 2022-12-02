import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColorStandard, ColorState } from '@models/color';
import { SizeStandard } from '@models/size';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';
import { HttpClient } from '@angular/common/http';
import { QNA } from '@models/qna';
import { Tab } from '@models/tab';
import { Store } from '@ngrx/store';
import { State } from './state/qna.state';

import * as fromActions from './state/qna.action';
import * as fromSelector from './state/qna.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pages-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QNAComponent implements OnInit, AfterViewInit {

  size = SizeStandard;
  color = ColorStandard;

  activeIndex = 0;
  tabActive = 0;

  tabs: Tab[] = [
    {
      name: 'FAQ',
      index: 0,
    },
    {
      name: 'Ask ',
      index: 1,
    },
  ];

  topic: string | null = null;
  search = '';

  qna: QNA = {
    id: 0,
    question: '',
    answer: '',
    topic: '',
    created_at: new Date(),
  }

  groups$!: Observable<string[]>;
  qnas$!: Observable<QNA[]>;
  qnasAll$!: Observable<QNA[]>;
  qnasAllTemp$!: Observable<QNA[]>;
  totalQNAs$!: Observable<number>;

  constructor(public appHelper: AppHelper, public appData: AppData, private http: HttpClient,
    private store: Store<State>) {
  }

  async ngOnInit() {
    const page = 'QnA';
    this.appData.title = "Ngodings | " + page;
    this.appData.onTitleChanges.next(true);

    this.appData.meta = {
      type: 'keywords',
      name: page,
    }
    this.appData.onMetaChanges.next(true);

    this.store.dispatch(fromActions.GetAll());
    this.qnas$ = this.store.select(fromSelector.qnas);
    this.qnasAll$ = this.store.select(fromSelector.qnasAll);
    this.qnasAllTemp$ = this.store.select(fromSelector.qnasAllTemp);
    this.totalQNAs$ = this.store.select(fromSelector.totalQNAs);
    this.groups$ = this.store.select(fromSelector.groups);
  }

  get QNAAllData(): Promise<QNA[]> {
    return new Promise(async (resolve) => {
      await this.qnasAll$.subscribe((item) => {
        resolve(item);
        return item;
      })
    });
  }

  get QNAAllTempData(): Promise<QNA[]> {
    return new Promise(async (resolve) => {
      await this.qnasAllTemp$.subscribe((item) => {
        resolve(item);
        return item;
      })
    });
  }

  get QNATotal(): Promise<number> {
    return new Promise(async (resolve) => {
      await this.totalQNAs$.subscribe((item) => {
        resolve(item);
        return item;
      })
    });
  }

  async onFilter() {
    const data = await this.QNAAllData;
    this.store.dispatch(fromActions.Filter(await this.filter(data, this.topic!, this.search!)));
  }

  async onLoadMore() {
    const data = await this.QNAAllTempData;
    const total = await this.QNATotal;
    this.store.dispatch(fromActions.LoadMore(await this.loadMore(data, total)));
  }

  loadMore(qnasAllTemp: QNA[], totalQNAs: number): Promise<{ qnas: QNA[], totalQNAs: number }> {
    return new Promise(async (resolve) => {
      const qnas = Object.assign([], qnasAllTemp);
      const totalQNAsFinal = totalQNAs + 10;
      qnas.length = totalQNAsFinal;

      const result = { qnas, totalQNAs: totalQNAsFinal };
      console.log("result", result);
      resolve(result)
      return result;
    });
  }

  filter(qnasAll: QNA[], topic: string, search: string): Promise<{ qnas: QNA[], qnasAllTemp: QNA[], totalQNAs: number }> {
    return new Promise(async (resolve) => {
      let datas = qnasAll;
      if (topic) {
        datas = datas.filter(s => s.topic == topic);
      }
      if (search) {
        datas = datas.filter(s => s.question.toLowerCase().includes(search.toLowerCase()));
      }
      const qnas = Object.assign([], datas);
      const qnasAllTemp = Object.assign([], datas);
      const totalQNAs = qnas.length > 10 ? 10 : qnas.length;
      qnas.length = totalQNAs;

      const result = { qnas, qnasAllTemp, totalQNAs };
      console.log("result", result);
      resolve(result)
      return result;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.appData.isFullPageValue = false;
    }, 250);
  }

  submit() {
    this.appData.toast = { title: 'Info', desc: 'Thankyou we will respond your question ASAP!', severity: ColorState.success, };
    this.appData.onToastChanges.next(true);
    this.qna.topic = '';
    this.qna.question = '';
  }
}
