import { createReducer, on } from "@ngrx/store";
import { Filter, GetAll, GetAllSuccess, LoadMore } from "./qna.action";
import { initialState, State } from "./qna.state";

export const qnaKey = 'qna';

export const reducer = createReducer(
    initialState,
    on(
        GetAll,
        (state): State => ({
            ...state,
        }),
    ),
    on(
        GetAllSuccess,
        (state, result): State => ({
            ...state,
            qnas: result.qnas,
            qnasAll: result.qnasAll,
            qnasAllTemp: result.qnasAllTemp,
            groups: result.groups,
            totalQNAs: result.totalQNAs,
        }),
    ),
    on(
        Filter,
        (state, result): State => ({
            ...state,
            qnas: result.qnas,
            qnasAllTemp: result.qnasAllTemp,
            totalQNAs: result.totalQNAs,
        }),
    ),
    on(
        LoadMore,
        (state, result): State => ({
            ...state,
            qnas: result.qnas,
            totalQNAs: result.totalQNAs,
        }),
    ),
);

export const qnas = (state: State) => state.qnas;
export const qnasAll = (state: State) => state.qnasAll;
export const qnasAllTemp = (state: State) => state.qnasAll;
export const totalQNAs = (state: State) => state.totalQNAs;
export const groups = (state: State) => state.groups;