import React, { Children, ReactElement } from 'react'
import Loading from '../Loading'
import {UseQueryResult} from '@tanstack/react-query'
export interface HandleBoundaryProps<T,E>{
 /**
  * useQuery返回值，react-query  中返回值的类型
  */
  query:UseQueryResult<T,E>;  
/**
 * data为请求相应的结果
 */
  children:(data:T)=>ReactElement;
/**
 * Loading组件
 */
  loadingComponent?:ReactElement
}

const HandleBoundary=<T extends unknown,E=unknown>({query,children,loadingComponent=<Loading/>}:HandleBoundaryProps<T,E>)=>{
    if(query.isLoading) return loadingComponent;
    if(query.isSuccess) return children(query.data)
    return (
        <div>
            <p className="my-4 text-primary">请求发送错误</p>
            <button onClick={()=>query.refetch()}>点击重试</button>
        </div>
    )
}

export default HandleBoundary;