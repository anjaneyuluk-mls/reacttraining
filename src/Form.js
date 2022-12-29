import { Checkbox, DatePicker, Form, Input, Button, Spin } from 'antd';
import React, { useState } from 'react';

const MoviesForm = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    fetch('http://localhost:3600/movie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
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
      <Form.Item name="release_date" label="Release Date">
        <DatePicker format={'YY-MM-DD'} />
      </Form.Item>
      <Form.Item name="hit" label="hit">
        <Checkbox />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MoviesForm;
