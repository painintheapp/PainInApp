import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormModal from "components/Modal/EditFormModal";
import IntlMessages from 'util/IntlMessages'
import CommunityForm from './CommunityForm'

const EditCommunity = ({ initialRecord }) => {
    // const dispatch = useDispatch()
    const faqProps = useSelector(state => state.CurdR)
    const { EditCommunity_Modal, initialValues, Loader } = faqProps
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
                modalTitle={<p className="gx-text-primary">{!initialValues ? <IntlMessages id="community.addModal.community" /> : <IntlMessages id="community.addModal.community" />} </p>}
                basicButtonTitle="Reset Password"
                submitButtonText={initialValues === null ? <IntlMessages id="community.addModal.save" /> : <IntlMessages id="community.addModal.update" />}
                cancelButtonText={<IntlMessages id="dp.addModal.cancel" />}
                editApiRequest="EditRecord"
                apiLoader="StartSpinner"
                editApiMethod="PUT"
                editApiName="editCommunity"
                ModalName="EditCommunity_Modal"
                confirmLoading={Loader}
                ModalType="Hide_Modal"
                visible={EditCommunity_Modal ? EditCommunity_Modal : false}
                buttonStyleClass="gx-buttonStyleClass"
                isShowButton={false}
                initialValues={initialValues}
                width={400}
                className="doctor-profile-modal"
            >
                <CommunityForm />
            </FormModal>
        </div>

    )
}

export default EditCommunity
