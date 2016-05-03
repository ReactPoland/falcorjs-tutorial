/*import {
 ARTICLES_LIST_ADD
} from '../constants/formConstantsList';
*/
//response here, are mocked data from publishing app coomponent - an array

export default {
  descriptionsView: (response) => {
    return {
      type: 'RETURN_ALL_DESCRIPTIONS',
      payload: { response: response }
    }
  }
 
}
