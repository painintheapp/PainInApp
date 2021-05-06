import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormModal from "components/Modal/EditFormModal";
import IntlMessages from 'util/IntlMessages'
import ExerciseForm from './ExerciseForm'

const EditExercise = ({ initialRecord }) => {
    // const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { EditExercise_Modal, initialValues,  Loader } = faqProps

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
                editApiName="editExercise"
                ModalName="EditExercise_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={EditExercise_Modal ? EditExercise_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                initialValues={initialValues}
                width={400}
                className="doctor-profile-modal"
            >
               <ExerciseForm/>
            </FormModal>
        </div>

    )
}

export default EditExercise
