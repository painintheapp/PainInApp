import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "components/Modal/FormModal";
import IntlMessages from 'util/IntlMessages'
import ConditionForm from './ConditionForm'


const AddNewCondition = () => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { Add_Condition_Modal, Loader } = faqProps
    return (
        <div>
            <Button
                className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "Add_Condition_Modal"
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
                addApiName="addCondition"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="Add_Condition_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={Add_Condition_Modal ? Add_Condition_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={550}
                className="doctor-profile-modal"
            >
                <ConditionForm />
            </FormModal>
        </div>

    )
}

export default AddNewCondition
