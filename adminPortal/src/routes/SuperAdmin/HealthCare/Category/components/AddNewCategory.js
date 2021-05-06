import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "components/Modal/FormModal";
import IntlMessages from 'util/IntlMessages'
import CategoryForm from './CategoryForm'


const AddNewCategory = () => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { AddCategory_Modal, Loader } = faqProps
    return (
        <div>
            <Button
                className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "AddCategory_Modal"
                    })
                }}
            >
                <IntlMessages id="dp.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary"> <IntlMessages id="catagory.addModal.catagory" /> </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="dp.addModal.save" />}
                cancelButtonText={<IntlMessages id="dp.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addHealthCategory"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="AddCategory_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={AddCategory_Modal ? AddCategory_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={550}
                className="doctor-profile-modal"
            >
                <CategoryForm />
            </FormModal>
        </div>

    )
}

export default AddNewCategory
