// All exports of actions here
import { 
    INITIATE_STATES,
    SHOW_MODAL_TRUE,
    OPERATION

} from './types'

// TRIGGERS AT INITIALIZATION
const initiateSuccess = () => {
    type: INITIATE_STATES
}
export const initiateStates = (dispatch) => {
    console.log("States are initiated\n")
    dispatch(initiateSuccess);
}

// TRIGGER MODAL TRUE
const showModalTrue = (id) => ({
    type: SHOW_MODAL_TRUE,
    payload: id,
})
export const showModal = (e, id) => (dispatch) => {
    console.log("show modal action\n", "e.target.value =", e.target.value, "id: ", id, '\n' )
    dispatch(showModalTrue(id));
    setInterval(()=>{removeItem(id)},2000);
    
  }



export const removeItem = (id) => {
    let len = this.state.items.length
    let copyState = [...this.state.items]
    let newState = []
    for(let i=0;i<len;i++){
      if(copyState[i]["id"]!==id){
        newState.push(this.state.items[i])
      }
    }
    this.setState({
      items: newState
    })
  }

const copyStateSuccess = (copyState) => ({
    type: OPERATION,
    payload: copyState
})
export const addSubtractQuantity = (copyState) => (dispatch) => {
    console.log("inside addSubtractQuantity, copystate is: ", copyState , '\n');
    dispatch(copyStateSuccess(copyState));
  }