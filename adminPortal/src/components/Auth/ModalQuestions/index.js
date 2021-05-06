import React from 'react'
import SimpleModal from 'components/Modal/SimpleModal'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox } from 'antd'
import handshake from 'assets/images/handshake.png'
// import MultiStepModal from './MultiStepModal'
const ModalQuestions = () => {

    const dispatch = useDispatch()
    const signupProps = useSelector(state => state.signUp)
    const { questionnaireModelVisible } = signupProps
    const styles = {
        greybg: {
            backgroundColor: '#f9f9f9'
        }
    }

    const closethisAndOpenQuestions = () => {
        dispatch({
            type: 'questionnaire_modal'
        })
        dispatch({
            type: 'question-multistep-modal'
        })
    }
    return (
        <>
        <SimpleModal

            modalFor="questionnaire_modal"
            visible={true}
            width={600}
            closable={false}
            className="questionnaire-modal"
            style ={{top : 20}}
        >
            <img src={handshake} alt="" />
            <div className="gx-p-3" style={styles.greybg}>
                <h5 className="gx-blue-font gx-mb-2">Thank you for choosing Collab-Care.</h5>
                <p>
                    Please answer a few short questions about the care recipient. Answer all questions from the care recipient’s perspective. Once completed, you will have access to the portal and your personalised care plan!
            </p>
            </div>
            <div className="gx-p-3 gx-d-flex gx-justify-content-between">
                <Checkbox >I Accept the Collab-Care term of services</Checkbox>
                <Button className="gx-mb-0 gx-pt-0" type="primary" onClick={() => closethisAndOpenQuestions()}>Start</Button>
            </div>

        </SimpleModal>

         {/* <MultiStepModal />  */}
        </>
    )
}

export default ModalQuestions
