import React, { Children } from 'react'
import { Provider as TestProvider } from './count'
export { useTestStore } from './count'

// 使用数据reducer进行Provider整合，避免直接出现如下情况
/**
 * <Provider1>
 *  <Provider2>
 *    <Provider3>
 *      <App/>
 *    </Provider3>
 *  </Provider2>
 * </Provider1>
 */

const providers = [TestProvider]

const Provider = (props: any) => 
    providers.reduceRight((children, Parent) => <Parent>{children}</Parent>, props.children) 
    
export default Provider