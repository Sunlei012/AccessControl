import {Card} from "antd";
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

  const {loading,data} = useRequest(fakeChartData);

  const {run:Cehcked} = useRequest((params)=>fakeChecked(params));
  const [intruders, setInturders] = useState([]);
  // console.log(data);
  useEffect( ()=>{
    // console.log(data?.list[0].age);
    data?.list.map((i)=>{
      setInturders([...intruders,{age:i.age,img:i.img,isShow:true}])
    })
    // setInturders([...intruders,{age:"data[0].age",img:"data[0].img",isShow:true}])
    //   console.log(intruders);
  }
  ,[data?.list]);

  const clickChecked =(intruder)=>{
    Cehcked(intruder);
    setInturders([...intruders,intruder.isShow=false]);
  }

  return (
    intruders.map((intruder)=>{
      return (
        intruder.isShow&&(<Card key={intruder}
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
