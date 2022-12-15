import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const ListModal = ({children:MyList, buttonLable}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonLable}
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <MyList/>
      </Modal>
    </>
  );
};
export default ListModal;