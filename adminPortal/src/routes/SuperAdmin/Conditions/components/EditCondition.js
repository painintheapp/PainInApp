import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormModal from "components/Modal/EditFormModal";
import ConditionForm from './ConditionForm'

const EditCondition = ({ initialRecord }) => {
    // const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { EditCondition_Modal, initialValues,  Loader } = faqProps

    console.log('=============initialValues=========',initialValues)
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
                 modalTitle={<p className="gx-text-primary">{'Edit Symptom'} </p>}
                 basicButtonTitle="Reset Password"
                 submitButtonText={'Update'}
                 cancelButtonText={'Cancel'}
                editApiRequest="EditRecord"
                apiLoader="StartSpinner"
                editApiMethod="PUT"
                editApiName="editCondition"
                ModalName="EditCondition_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={EditCondition_Modal ? EditCondition_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                initialValues={initialValues}
                width={400}
                className="doctor-profile-modal"
            >
               <ConditionForm/>
            </FormModal>
        </div>

    )
}

export default EditCondition
