import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "../../../../components/Modal/FormModal";
import IntlMessages from '../../../../util/IntlMessages'
import BlogForm from './BlogForm'


const AddNewBlog = ( ) => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { AddBlog_Modal,  Loader } = faqProps
    return (
        <div>
            <Button
            className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "AddBlog_Modal"
                    })
                }}
            >
                <IntlMessages id="blog.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary"> <IntlMessages id="blog.addModal.addBlog" /> </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="blog.addModal.save" />}
                cancelButtonText={<IntlMessages id="blog.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addBlog"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="AddBlog_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={AddBlog_Modal ? AddBlog_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={600}
                className="doctor-profile-modal"
            >
                <BlogForm />
            </FormModal>
        </div>

    )
}

export default AddNewBlog
