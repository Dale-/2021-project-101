import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.scss'
import { Button } from 'antd'
import ViewTest from '@views/ViewTest'
import SharedTest from '@shared/SharedTest'
import App from '@views/App'
import Provider from '@store/index'

const render = () => {
    ReactDOM.render(
        <Provider>
            <App />
        </Provider>,
        document.querySelector('#app')
    )
}

render()