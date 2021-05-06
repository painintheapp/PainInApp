import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormModal from "components/Modal/EditFormModal";
import SupplementForm from './SupplementForm'

const EditSupplement = ({ initialRecord }) => {
    // const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { EditSupplement_Modal, initialValues,  Loader } = faqProps

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
                 modalTitle={<p className="gx-text-primary">{'Edit Supplement'} </p>}
                 basicButtonTitle="Reset Password"
                 submitButtonText={'Update'}
                 cancelButtonText={'Cancel'}
                editApiRequest="EditRecord"
                apiLoader="StartSpinner"
                editApiMethod="PUT"
                editApiName="editSupplement"
                ModalName="EditSupplement_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={EditSupplement_Modal ? EditSupplement_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                initialValues={initialValues}
                width={400}
                className="doctor-profile-modal"
            >
               <SupplementForm/>
            </FormModal>
        </div>

    )
}

export default EditSupplement
