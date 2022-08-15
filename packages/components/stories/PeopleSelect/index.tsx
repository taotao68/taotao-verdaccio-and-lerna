import React, { useState } from "react";
import Select, { DataType } from "../Select";

// 先将数据写死，后面是要从接口获取的
const people: DataType[] = [
  { name: "Wade Cooper", value: 1 },
  { name: "Arlene Mccoy", value: 2 },
  { name: "Devon Webb", value: 3 },
  { name: "Tom Cook", value: 4 },
  { name: "Tanya Fox", value: 5 },
  { name: "Hellen Schmidt", value: 6 },
];
// 业务组件
const PeopleSelect = () => {
    const [selected,setSelected]=useState(people[0])
  return (
    <Select
      data={people}
      selected={selected}
      onChange={(e) => setSelected(e)}
    />
  );
};


export default PeopleSelect;