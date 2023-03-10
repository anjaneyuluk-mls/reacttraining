import React, { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import { axiosInstance } from './services/axios';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Release Date',
    dataIndex: 'release_date',
    key: 'release_date',
  },
  {
    title: 'Hit',
    dataIndex: 'hit',
    key: 'hit',
    render: (text, record, index) => {
      if (typeof text === 'boolean') {
        if (text === true) {
          return 'Yes';
        }
        return 'No';
      } else {
        if (text === 'on') {
          return 'Yes';
        }
        return 'No';
      }
    },
  },
];

const AntdTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance('movies').then((res) => {
      setData(res.data.items);
    });
  }, []);
  return <Table rowKey={(record) => record.id} columns={columns} dataSource={data} />;
};
export default AntdTable;
