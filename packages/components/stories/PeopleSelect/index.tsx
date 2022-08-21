import React, { useState } from "react";
import axios from "axios";
import { useQuery,useQueryClient } from "@tanstack/react-query";
import Select, { DataType } from "../Select";

// interface PeopleSelectProps {
//   onChange:(e:DataType)=>void;
// }
// 业务组件
const PeopleSelect = () => {
  const queryClient=useQueryClient()
  // onChange是从外部引入使用的
  // 现在还不能选择状态，因为自己还没有保存默认的或者选中的状态
  // people-key就是一个key,第二个参数是请求的方法，第三个方法是配置  例如select过滤数据，直接返回到需要的数据的地方
  // 还可以配置轮询  在第三个参数里面配置efetchInterval:2000  每2秒轮询请求一次
  const query = useQuery(["people-key"], () => axios.get("/people"),{select:(data)=>data.data.people});
  const initState=query.status==='success'?query.data[0]:'请选择aaa'
  console.log('1111',initState)
  const [selected,setSelected]=useState(initState)
  // 接下来我们先判断下
  if (query.status === "loading") return <>loading</>
  if (query.status === "success"){
    console.log(query.data);
    return (
      <Select
        data={query.data}
        selected={selected}
        onChange={(e) => setSelected(e)}
      />
    );
  }
  return <>error</>
};

export default PeopleSelect;
