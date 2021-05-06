import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "components/Modal/FormModal";
import IntlMessages from 'util/IntlMessages'
import SupplementForm from './SupplementForm'


const AddNewSupplement = () => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { Add_Supplement_Modal, Loader } = faqProps
    return (
        <div>
            <Button
                className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "Add_Supplement_Modal"
                    })
                }}
            >
                <IntlMessages id="dp.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary"> Add Supplement </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="dp.addModal.save" />}
                cancelButtonText={<IntlMessages id="dp.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addSupplement"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="Add_Supplement_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={Add_Supplement_Modal ? Add_Supplement_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={550}
                className="doctor-profile-modal"
            >
                <SupplementForm />
            </FormModal>
        </div>

    )
}

export default AddNewSupplement
