import { watcherRequestData } from "./paintings";

export default function* rootSaga() {
    yield watcherRequestData();
}
