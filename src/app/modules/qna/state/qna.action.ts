import { QNA } from "@models/qna";
import {
    createAction,
    props
} from "@ngrx/store";

export enum QNAAction {
    GetAll = '[QNA] Get All',
    GetAllSuccess = '[QNA] Get All Success',
    LoadMore = '[QNA] Load More',
    Filter = '[QNA] Filter',
}

export const GetAll = createAction(QNAAction.GetAll);
export const GetAllSuccess = createAction(
    '[QNA] Get All Success',
    props<{ qnas: QNA[], qnasAllTemp: QNA[], qnasAll: QNA[], groups: string[], totalQNAs: number }>(),
);
export const LoadMore = createAction(QNAAction.LoadMore, props<
    { qnas: QNA[], totalQNAs: number }
>());
export const Filter = createAction(QNAAction.Filter, props<
    { qnas: QNA[], qnasAllTemp: QNA[], totalQNAs: number }>());