import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import article from './reducers/article'
import PublishingApp from './layouts/PublishingApp'
import TempApp from './layouts/TempApp'

let store = createStore(article);


render(
    <TempApp />,
    document.getElementById('publishingAppRoot')
);