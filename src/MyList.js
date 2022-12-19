import React from 'react';

const MyList = ({ dataSource, renderItem }) => {
  return (
    <ul className="my-list-items">
      {dataSource.map((item, index) => {
        return renderItem(item, index);
      })}
    </ul>
  );
};

export default MyList;
