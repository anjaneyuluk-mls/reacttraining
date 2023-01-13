import { Checkbox, DatePicker, Form, Input, Button, Spin, Upload } from 'antd';
import React, { useState } from 'react';
import { axiosInstance } from '../services/axios';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const NewMovie = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const props = {
    onRemove: (file) => {
      setFile(null);
    },
    beforeUpload: (file) => {
      setFile(file);
      return false;
    },
    fileList: file ? [file] : [],
  };
  const onFinish = (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('image', file);
    axios({
      url: 'http://localhost:3600/movie',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    }).then((res) => {
      setLoading(false);
    });
  };
  return loading ? (
    <Spin spinning={true}></Spin>
  ) : (
    <Form style={{ width: 300 }} onFinish={onFinish} name="movie">
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="image" label="Image">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewMovie;
