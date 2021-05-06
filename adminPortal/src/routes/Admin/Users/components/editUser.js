import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormModal from "components/Modal/EditFormModal";
import IntlMessages from 'util/IntlMessages'
import UserForm from './userForm'

const AddNewQuestion = ({ initialRecord }) => {
    // const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { EditSpecialist_Modal, initialValues,  Loader } = faqProps


    let initialState = {
        loading: false,
        imageUrl: '',
    }
    const [photoList, setPhotoState] = useState(initialState)
    console.log("photoList",photoList)
    const fetchTeamUsers = () => {
        setPhotoState({
            loading: false,
            imageUrl: initialValues && initialValues.profileImageUrl,
        })
    }
    useEffect(fetchTeamUsers, [initialValues])


    return (
        <div>
            <FormModal
                modalTitle={<p className="gx-text-primary">{!initialValues ? <IntlMessages id="dp.addModal.newQuestion" /> : <IntlMessages id="dp.addModal.updateQuestion" />} </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={initialValues === null ? <IntlMessages id="dp.addModal.save" /> : <IntlMessages id="specialist.addModal.update" />}
                cancelButtonText={<IntlMessages id="dp.addModal.cancel" />}
                editApiRequest="EditRecord"
                apiLoader="StartSpinner"
                editApiMethod="PUT"
                editApiName="editSpecialist"
                ModalName="EditSpecialist_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={EditSpecialist_Modal ? EditSpecialist_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                initialValues={initialValues}
                width={400}
                className="doctor-profile-modal"
            >
               <UserForm/>
            </FormModal>
        </div>

    )
}

export default AddNewQuestion
