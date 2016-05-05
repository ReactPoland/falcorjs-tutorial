import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import BookDescriptionReducer from './reducers/BookDescriptionReducer'
import BookDescriptionApp from './layouts/BookDescriptionApp'

let store = createStore(BookDescriptionReducer)

render(
    <Provider store={store}>
        <BookDescriptionApp />
    </Provider>,
    document.getElementById('tutorial-app-root')
);