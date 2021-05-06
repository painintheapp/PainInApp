import React from 'react';
import { Button, Modal, Form } from 'antd';
import { useDispatch } from 'react-redux'
import { DataRequestAction } from '../../redux/actions/CommonHttp'
import {printConsole} from '../../utils/commonUseFunction'



const CollectionCreateForm = ({
  visible,
  onCreate,
  onCancel,
  confirmLoading,
  modalTitle,
  submitButtonText,
  cancelButtonText,
  children,
  width,

  className,
  showFooter
}) => {

  const [form] = Form.useForm();

  if(!visible){
    form.resetFields()
  }

  return (

    <Modal
      visible={visible}
      title={modalTitle}
      width={width}
      form={form}
      bodyStyle={{
        paddingLeft: 0,
        paddingRight: 0
      }}
      okText={submitButtonText}
      cancelText={cancelButtonText}
      className={className}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      okButtonProps={{ disabled: showFooter }}
      confirmLoading={confirmLoading}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            onCreate(values);
          })
          .catch(info => {
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        {children}
      </Form>
    </Modal>
  );
};

const CollectionsPage = ({ children, modalTitle,
  basicButtonTitle,
  submitButtonText,
  cancelButtonText,
  confirmLoading,
  apiMethod,
  addApiName,
  addApiRequest,
  visible,
  ModalType,
  width,
  className,
  apiLoader,
  buttonStyleClass,
  isShowButton = true,
  extraFieldName,
  extraFieldValue,
  showFooter,
  ModalName
}) => {

  const dispatch = useDispatch();
  const onCreate = values => {
    


    if (extraFieldName) {
      values[extraFieldName] = extraFieldValue
    }
    printConsole('successs',values)
    dispatch(DataRequestAction(apiMethod, addApiName, addApiRequest, values, apiLoader, ModalName))
  }

  return (
    <div>
      {isShowButton && <Button
        type="primary"
        className={`gx-pt-0 ${buttonStyleClass}`}
        onClick={() => {
          dispatch({
            type: ModalType,
            payload: null
          })
        }}
      >
        {basicButtonTitle}
      </Button>}
      <CollectionCreateForm
        modalTitle={modalTitle}
        submitButtonText={submitButtonText}
        cancelButtonText={cancelButtonText}
        apiMethod={apiMethod}
        ModalType={ModalType}
        confirmLoading={confirmLoading}
        apiLoaderName={apiLoader}
        visible={visible}
        width={width}
        className={className}
        showFooter={showFooter}
        onCreate={onCreate}
        onCancel={() => {
          dispatch({

            type: ModalType,
            payload: null,
            ModalName: ModalName,
            clear: true
          })
        }}
      >
        {children}
      </CollectionCreateForm>
    </div>
  );
};

export default CollectionsPage;