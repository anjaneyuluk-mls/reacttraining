import React, { useState, useEffect } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, List, Row, Space, Spin } from 'antd';
import { axiosInstance } from '../services/axios';
import { useNavigate } from 'react-router-dom';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Movies = () => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  useEffect(() => {
    axiosInstance.get('http://localhost:3600/movies').then((res) => {
      setdata(res.data.items);
      setLoading(false);
    });
    return function () {
      // onDestroy
    };
    //   setLoading(false);
  }, []);
  return loading ? (
    <Spin spinning={loading}></Spin>
  ) : (
    <>
      <Row justify="end">
        <Col>
            <Button onClick={()=>navigate('/newmovie')}>Create</Button>
        </Col>
      </Row>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={<img width={272} height={200} alt="logo" src={`http://localhost:3600/${item.image}`} />}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.name}</a>}
              description={item.description}
            />
            {`This movie is a 2022 Indian Telugu-language mystery action-adventure film[4][5] written and directed by Chandoo Mondeti. 
          The film serves as a sequel to the 2014 film Karthikeya and stars Nikhil Siddhartha, Anupama Parameswaran, and Anupam Kher. 
          It is produced by Abhishek Agarwal Arts and People Media Factory. The plot follows Dr. Karthikeya who is on a quest to find the lost anklet of Lord Krishna.`}
          </List.Item>
        )}
      />
    </>
  );
};

export default Movies;
