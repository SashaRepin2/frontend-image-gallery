interface IAction<TPayload> {
    payload: TPayload;
    type: string;
}

export default IAction;
