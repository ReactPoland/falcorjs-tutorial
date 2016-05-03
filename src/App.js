import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import description from './reducers/description';
import DescriptionApp from './layouts/DescriptionApp';

let store = createStore(description);

render(
    <Provider store={store}>
        <DescriptionApp />
    </Provider>,
    document.getElementById('descriptionApp')
);