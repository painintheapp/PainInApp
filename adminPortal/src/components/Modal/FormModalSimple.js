import React from 'react'
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux'


const FormModal = ({ children, modalTitle,
  basicButtonTitle,
  submitButtonText,
  cancelButtonText,
  confirmLoading,
  apiMethod,
  apiName,
  visible,
  ModalType,
  editApiMethod,
  editApiName,
  initialRecord,
  initialValues,
  apiLoaderName, buttonStyleClass, isShowButton = true }) => {

    const dispatch = useDispatch();

  return (
    <div>
      {isShowButton && <Button
        type="primary"
        className={`gx-pt-0 ${buttonStyleClass}`}
        onClick={() => {
          console.log("========== calling ========");
          dispatch({
            type: ModalType,
            payload: null
          })
        }}
      >
        {basicButtonTitle}
      </Button>}
      <Modal
        visible={false}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        onCancel={() => console.log("=============== ")}
        onOk={() => console.log("========== button ======")}
      >


      </Modal>
    </div>

  )
}

export default FormModal
