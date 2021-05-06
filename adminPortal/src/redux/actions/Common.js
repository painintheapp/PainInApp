
export const SimpleModalAction = (type, state) => {
  return {
    type: `Simple_Modal_State_${type}`,
    payload: state
  };
};


export const SideBarCollapse = (state) => {
  return {
    type: `Side_Bar_Collapse`,
  };
};

export const AddToCart = (product, restaurantName,restaurantId, action) => {
  return {
    type: `Add_To_Cart`,
    payload: { product, restaurantName,restaurantId, action }
  };
};

export const ClearCart = () => {
  return {
    type: `Clear_Cart`,
  };
};


export const DataEntryModalAction = (type, selectedItem) => {
  return {
    type: `${type}`,
    payload: selectedItem,

  };
};

export const DeleteAction = (apiPath, selectedItem) => {
  return {
    type: `${apiPath}_SUCCESS`,
    payload: selectedItem,

  };
};

export const DeletedRecord = (type, recordId) => {

  return {
    type: `${type}_SUCCESS`,
    payload: recordId,

  };
};
export const logoutFn = () => {
  return {
    type: "logout_success",
  };
};

export const DonationSpinner = () => {
  return {
    type: `Donation_Start`,
  };
};

export const ImageUpdateOnProfile = (type, data) => {
  return {
    type: `Image_update_${type}`,
    payload:data
  };
};

export const selectedCategoryItem = (type, data) => {
  return {
    type: `${type}_SUCCESS`,
    payload:data
  };
};
