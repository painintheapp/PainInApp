import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormModal from "components/Modal/EditFormModal";
import IntlMessages from 'util/IntlMessages'
import PollsForm from './PollsForm'

const AddNewQuestion = ({ initialRecord }) => {
    // const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { EditPolls_Modal, initialValues,  Loader } = faqProps


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
                modalTitle={<p className="gx-text-primary">{!initialValues ? <IntlMessages id="polls.addModal.editpolls" /> : <IntlMessages id="polls.addModal.polls" />} </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={initialValues === null ? <IntlMessages id="polls.addModal.save" /> : <IntlMessages id="polls.addModal.update" />}
                cancelButtonText={<IntlMessages id="polls.addModal.cancel" />}
                editApiRequest="EditRecord"
                apiLoader="StartSpinner"
                editApiMethod="PUT"
                editApiName="editPolls"
                ModalName="EditPolls_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={EditPolls_Modal ? EditPolls_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                initialValues={initialValues}
                width={600}
                className="doctor-profile-modal"
            >
               <PollsForm/>
            </FormModal>
        </div>

    )
}

export default AddNewQuestion
