import {Button, Card, message, Space, Upload} from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { fakeSubmitForm } from './service';
import styles from './style.less';
import UploadImg from "@/pages/dashboard/basic-form/components/UploadImg";
import {UploadOutlined} from "@ant-design/icons";
import {useState} from "react";

const BasicForm = () => {
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
    },
  });
   const [file, setFile] = useState();
   const  uploading= false;

 // const handleUpload = () => {
 //    const { fileList } = this.state;
 //    const formData = new FormData();
 //    fileList.forEach(file => {
 //      formData.append('files[]', file);
 //    });
 //    this.setState({
 //      uploading: true,
 //    });
 //    // You can use any AJAX library you like
 //    fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
 //      method: 'POST',
 //      body: formData,
 //    })
 //      .then(res => res.json())
 //      .then(() => {
 //        this.setState({
 //          fileList: [],
 //        });
 //        message.success('upload successfully.');
 //      })
 //      .catch(() => {
 //        message.error('upload failed.');
 //      })
 //      .finally(() => {
 //        this.setState({
 //          uploading: false,
 //        });
 //      });
 //  };
  const props = {
    beforeUpload: file => {
      setFile(file);
      return false;
    },
  };
  const onFinish = async (values) => {
    let fromData = new FormData();
    fromData.append("img",file);
    fromData.append("pwid",values.pwid);
    fromData.append("name",values.name);
    console.log(fromData);
    console.log(values);
    run(fromData);
    values.clear();
  };

  return (
    <PageContainer content="添加人脸相关信息">
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{
            margin: 'auto',
            marginTop: 8,
            maxWidth: 600,
          }}
          name="basic"
          layout="vertical"
          initialValues={{
            public: '0',
          }}
          onFinish={onFinish}
        >
          <Upload {...props} style={{marginTop: 8, marginBottom:20}}>
            <Button icon={<UploadOutlined />}>Select File</Button>
          </Upload>
          {/*<Button*/}
          {/*  type="primary"*/}
          {/*  // onClick={handleUpload}*/}
          {/*  // disabled={fileList.length === 0}*/}
          {/*  // loading={uploading}*/}
          {/*  style={{ marginTop: 16 }}*/}
          {/*>*/}
          {/*  {uploading ? 'Uploading' : 'Start Upload'}*/}
          {/*</Button>*/}
          <ProFormText
            width="md"
            label="PWID"
            name="pwid"
            rules={[
              {
                required: true,
                message: '请输入您的ID',
              },
            ]}
            placeholder="请输入您的ID"
          />
          <ProFormText
            width="md"
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入您的姓名',
              },
            ]}
            placeholder="请输入您的姓名"
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
