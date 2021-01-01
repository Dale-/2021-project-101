import React from 'react'
import { Button } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import CountOperation from '@components/CountOperation'
import ShowCount from '@components/ShowCount'

import { getArticleList } from '@services/api'

const PageA = ({ history }: RouteComponentProps) => {

    const getList = async () => {
        try {
            const res = await getArticleList()
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <ShowCount />
            <CountOperation />
            <Button onClick={getList}>Get Article List</Button>
            <Button onClick={() => history.push('/page-b')}>跳转B</Button>
        </div>
    )
}

export default withRouter(PageA)