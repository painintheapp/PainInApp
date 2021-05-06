import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "../../../../components/Modal/FormModal";
import IntlMessages from '../../../../util/IntlMessages'
import EducationForm from '../../Education/components/EducationForm'


const AddNewQuestion = ( ) => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { AddEducation_Modal,  Loader } = faqProps
    return (
        <div>
            <Button
            className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "AddEducation_Modal"
                    })
                }}
            >
                <IntlMessages id="dp.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary"> <IntlMessages id="education.addModal.updateQuestion" /> </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="education.addModal.save" />}
                cancelButtonText={<IntlMessages id="education.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addEducation"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="AddEducation_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={AddEducation_Modal ? AddEducation_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={600}
                className="doctor-profile-modal"
            >
                <EducationForm />
            </FormModal>
        </div>

    )
}

export default AddNewQuestion
