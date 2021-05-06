import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormModal from "components/Modal/EditFormModal";
import IntlMessages from 'util/IntlMessages'
import OccupationForm from './OccupationForm'

const EditOccupation = ({ initialRecord }) => {
    // const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { EditOccupation_Modal, initialValues,  Loader } = faqProps

    console.log('==========initialValues==========',initialValues)

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
                modalTitle={<p className="gx-text-primary">{'Edit Exercise'} </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={'Update'}
                cancelButtonText={'Cancel'}
                editApiRequest="EditRecord"
                apiLoader="StartSpinner"
                editApiMethod="PUT"
                editApiName="editOccupation"
                ModalName="EditOccupation_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={EditOccupation_Modal ? EditOccupation_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                initialValues={initialValues}
                width={400}
                className="doctor-profile-modal"
            >
               <OccupationForm/>
            </FormModal>
        </div>

    )
}

export default EditOccupation
