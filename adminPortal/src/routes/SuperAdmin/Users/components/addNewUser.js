import React from 'react'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import FormModal from "../../../../components/Modal/FormModal";
import IntlMessages from '../../../../util/IntlMessages'
import UserForm from './userForm'


const AddNewUser = ( ) => {
    const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { AddSpecialist_Modal,  Loader } = faqProps

console.log('=========lodaer=======',Loader)


    return (
        <div>
            <Button
            className='gx-pt-0'
                type="primary"
                onClick={() => {
                    dispatch({
                        type: 'Show_Modal',
                        payload: null,
                        ModalName: "AddSpecialist_Modal"
                    })
                }}
            >
                <IntlMessages id="dp.addNew" />
            </Button>
            <FormModal
                modalTitle={<p className="gx-text-primary"> <IntlMessages id="dp.addModal.updateQuestion" /> </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={<IntlMessages id="dp.addModal.save" />}
                cancelButtonText={<IntlMessages id="dp.addModal.cancel" />}
                apiMethod="POST"
                addApiName="addSpecialist"
                addApiRequest="AddRecord"
                apiLoader="StartSpinner"
                ModalName="AddSpecialist_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={AddSpecialist_Modal ? AddSpecialist_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                width={600}
                className="doctor-profile-modal"
            >
                <UserForm />
            </FormModal>
        </div>

    )
}

export default AddNewUser
