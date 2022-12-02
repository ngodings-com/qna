import { ColorState } from "./color";

export interface Toast {
    title: string;
    desc: string;
    severity: ColorState;
}

