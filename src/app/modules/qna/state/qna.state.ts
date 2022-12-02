import { QNA } from "@models/qna";

export interface State {
  groups: string[];
  qnas: QNA[];
  qnasAll: QNA[];
  qnasAllTemp: QNA[];
  totalQNAs: number;
}

export const initialState: State = {
  groups: [],
  qnas: [],
  qnasAll: [],
  qnasAllTemp: [],
  totalQNAs: 0,
};