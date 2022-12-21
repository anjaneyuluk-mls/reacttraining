import { Col, Divider, List, Row, Spin } from "antd";
import "antd/dist/reset.css";
import { useEffect, useState } from "react";
import "./App.css";
import MyList from "./MyList";

const ListExample = () => {
  const stateInfo = useState([]); // initial value
  console.log(typeof stateInfo);
  const data = stateInfo[0];
  const setData = stateInfo[1];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3600/movies")
      .then((res) => res.json())
      .then((dataS) => {
        setData(dataS.items);
        console.log(data); // not the updated very very important
        setLoading(false);
      });
     return function() { // onDestroy

     } 
  //   setLoading(false);
  }, []);

  const renderItem = (item, index) => {
    return <List.Item className="my-list-item" key={index}>{item.name}</List.Item>;
  };

  return (
    <div className="App">
      {loading ? (
        <Spin spinning={true} /> 
      ) : (
        <Row>
          <Col span={11}>
            <List dataSource={data} renderItem={renderItem}></List>
          </Col>
          <Col span={2}>
            <Divider style={{color: 'red'}} type="vertical" ></Divider>
          </Col>
          <Col span={11}>
            <MyList dataSource={data} renderItem={renderItem}></MyList>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ListExample;
