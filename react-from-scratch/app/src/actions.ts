export interface IAction {
    type: string,
    payload: any
}

export const INCREMENT = "INCREMENT";

export function Increment(): IAction {
        console.log("hello");
        return {
            type: INCREMENT,
            payload: 1
        };
    }