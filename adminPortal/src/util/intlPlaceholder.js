
import {  useIntl } from 'react-intl';

const ChildComponent = ( id ) => {
    return useIntl().formatMessage({ id })
}


const intlPlaceholder  =ChildComponent;

export {
    intlPlaceholder
} 