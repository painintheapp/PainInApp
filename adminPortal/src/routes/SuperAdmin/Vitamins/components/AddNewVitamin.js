import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "components/Modal/FormModal";
import IntlMessages from 'util/IntlMessages'
import VitaminForm from './VitaminForm'


const AddNewVitamin = () => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { Add_Vitamin_Modal, Loader } = faqProps
    return (
        <div>
            <Button
                className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "Add_Vitamin_Modal"
                    })
                }}
            >
                <IntlMessages id="dp.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary"> Add Symptom </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="dp.addModal.save" />}
                cancelButtonText={<IntlMessages id="dp.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addVitamin"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="Add_Vitamin_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={Add_Vitamin_Modal ? Add_Vitamin_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={550}
                className="doctor-profile-modal"
            >
                <VitaminForm />
            </FormModal>
        </div>

    )
}

export default AddNewVitamin
