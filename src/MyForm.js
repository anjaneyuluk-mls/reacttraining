import { Button, Checkbox, DatePicker, Form, Input } from 'antd';
import React from 'react';

const FormItem = Form.Item;
const MyForm = () => {
  function addMovie(values) {
    console.log(values);
    fetch('http://localhost:3600/movie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => console.log(res));
  }

  const myOnFinish = addMovie;
  myOnFinish({name:'anji'})
  return (
    <Form onFinish={addMovie}>
      <FormItem label="Movie Name" name="name">
        <Input />
      </FormItem>
      <FormItem label="Release Date" name="release_date">
        <DatePicker />
      </FormItem>
      <FormItem valuePropName="checked" label="Is it a hit?" name="hit">
        <Checkbox />
      </FormItem>
      <FormItem>
        <Button  type="primary" htmlType="submit">
          Add my favourite movie
        </Button>
      </FormItem>
    </Form>
  );
};


export default MyForm;
