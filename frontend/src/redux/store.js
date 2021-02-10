import { createStore, applyMiddleware } from "redux"
import rootReducer from "./rootReducer"
import { composeWithDevtools } from "redux-devtools-extension"
import logger from "redux-logger"

const store = createStore(
    rootReducer,
    composeWithDevtools(applyMiddleware(logger))
)

export default store