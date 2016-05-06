export default {
  descriptionsList: (response) => {
    return {
      type: 'ADD_LIST_DESCRIPTION',
      payload: { response: response }
    }
  }
}