import React from 'react'
import { Button } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import CountOperation from '@components/CountOperation'
import ShowCount from '@components/ShowCount'

const PageA = ({ history }: RouteComponentProps) => {
    return (
        <div>
            <ShowCount />
            <CountOperation />
            <Button onClick={() => history.push('/page-b')}>跳转B</Button>
        </div>
    )
}

export default withRouter(PageA)