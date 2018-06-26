// All exports of actions here
import { INITIATE_STATES } from './types'

const initiateSuccess = () => {
    type: INITIATE_STATES
}
export const initiateStates = (dispatch) => {
    console.log("States are initiated\n")
    dispatch(initiateSuccess);
}


const showModalTrue = (id) => ({
    type: SHOW_MODAL_TRUE,
    payload: id,
})
export const showModal = (e, id) => (dispatch) => {
    console.log("show modal action\n", "e.target.value =", e.target.value, "id: ", id, '\n' )
    dispatch(showModalTrue(id));
    setInterval(()=>{this.props.removeItem(id)},2000);
    
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

export const addSubtractQuantity = (id, operation) =>{
    let len = this.state.items.length
    let copyState = [...this.state.items]
    for(let i=0;i<len;i++){
      if(copyState[i]["id"]===id){
        if(operation==="add"){
          copyState[i]["quantity"] += 1
        }else{
          copyState[i]["quantity"] -= 1
        }
      }
    }
    this.setState({
      items: copyState
    })
  }