import { Injectable } from "@angular/core";
import { map, switchMap } from "rxjs";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QNAService } from "../qna.service.ts";
import { GetAll, GetAllSuccess } from "./qna.action";

@Injectable({ providedIn: 'root' })
export class QNAEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly qnaService: QNAService,
    ) { }

    getAllQNA$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetAll),
            switchMap(action => this.qnaService.getAllQNA()),
            map(data => GetAllSuccess(data)),
        );
    });
}