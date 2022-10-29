import IAction from "@interfaces/IAction";

const createAction =
    <TPayload>(type: string): ((payload: TPayload) => IAction<TPayload>) =>
    (payload: TPayload): IAction<TPayload> => ({
        payload,
        type,
    });

export default createAction;
