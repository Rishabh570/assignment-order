import update from 'immutability-helper';
import {
    INITIATE_STATES,
    SHOW_MODAL_TRUE,

} from '../actions/types'

const initialStates = {
    items: [ 
      { "id": 9090, "quantity": 1, "name": "Item1", "price": 200, "discount": 10, "type": "fiction", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
      { "id": 9091, "quantity": 1, "name": "Item2", "price": 250, "discount": 15, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
      { "id": 9092, "quantity": 1, "name": "Item3", "price": 320, "discount": 5, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
      { "id": 9093, "quantity": 1, "name": "Item4", "price": 290, "discount": 0, "type": "thriller", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
      { "id": 9094, "quantity": 1, "name": "Item5", "price": 500, "discount": 25, "type": "thriller", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
      { "id": 9095, "quantity": 1, "name": "Item6", "price": 150, "discount": 5, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
      { "id": 9096, "quantity": 1, "name": "Item7", "price": 700, "discount": 22, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" },
      { "id": 9097, "quantity": 1, "name": "Item8", "price": 350, "discount": 18, "type": "fiction", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" } 
    ]
  };


const intiateSuccess = (state, action) => {
    console.log("Here We're returning the initial states\n")
    return state;
}

const modalOpen = (state, action) => {
    return update(state, {
        show: { $set: true },
    });
} 

export default (state = initialStates, action = {}) => {
  switch (action.type) {
    case INITIATE_STATES:
      return intiateSuccess(state, action);
    case SHOW_MODAL_TRUE:
      return modalOpen(state, action);
    
    default:
  }
  return state;
};
