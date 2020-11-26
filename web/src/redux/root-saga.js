import { all, call } from "redux-saga/effects";

import { ordersSagas } from "./orders/orders.sagas";

export default function* rootSaga() {
    yield all(
        [
            call(ordersSagas),
        ]
    );
}
