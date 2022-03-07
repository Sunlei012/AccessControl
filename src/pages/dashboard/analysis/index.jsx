import {Button, Card} from "antd";
import {
  CheckCircleOutlined,
  CheckOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  StopOutlined
} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {useRequest} from "@/.umi/plugin-request/request";
import {fakeChartData, fakeChecked} from "@/pages/dashboard/analysis/service";

const Analysis = () => {

  const {loading,data,run:get} = useRequest(fakeChartData,{manual:false,pollingInterval: 5000});

  const {run:Cehcked} = useRequest((params)=>fakeChecked(params));
  // const [data,setData]= useState();
  const [intruders, setInturders] = useState();
  // console.log(data);
  useEffect( ()=>{
    // console.log(data?.list[0].age);
    //   const interval = setInterval(Get,10000)
    // console.log(data)
    //   setInturders([]);
    // console.log(intruders)
    //   setInturders()
    // data?.list.map((i)=>{
    // console.log(i)
      // intruders.push(i);
      // i.isShow=true;
      // setInturders([...intruders,{age:12,img:"",isShow:true}])
      // console.log(intruders);
    // })
    // setInturders(data.list)


    // setInturders([...intruders,{age:"data[0].age",img:"data[0].img",isShow:true}])
    //   console.log(intruders);

    // return ()=> clearInterval(interval)
  }
  ,[data?.list]);
  const updateInturders=()=>{
    // setData(Get())
  }
  const clickChecked =(intruder)=>{
    Cehcked(intruder);
    get();
  }

  // const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  // const addItems = () => {
  //   setInturders([
  //     ...intruders,
  //     {
  //       text: "Learn Hooks1"
  //     }
  //   ]);
  // };
  // return (
  //   <div>
  //     <ul>
  //       {intruders.map((item, index) => {
  //         return (
  //           <li key={index}>
  //             {item.text}-{index}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //     <button onClick={addItems}>Add Item</button>
  //   </div>
  // );
  return (
    !loading&&
    data?.list?.map((intruder,index)=>{
      return (
        (<Card key={index}
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={intruder.img}
            />
          }
          actions={[
            <CheckCircleOutlined onClick={()=>{
              clickChecked(intruder);
            }
            }/>,
            <StopOutlined onClick={()=>{
              clickChecked(intruder);
            }
            }/>
          ]}
        >age:{intruder.age}</Card>)
      );
    })
  )



};

export default Analysis;
