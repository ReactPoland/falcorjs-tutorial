const descriptionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RETURN_ALL_DESCRIPTIONS':
      return Object.assign({}, state);
    case 'ADD_LIST_DESCRIPTION':
      console.info("ADD_LIST_DESCRIPTION", action.payload.response);
      return Object.assign({}, action.payload.response);
    default:
      return state;
  }
}

export default descriptionReducer