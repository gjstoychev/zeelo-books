import { createStore, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import thunk from 'redux-thunk'
import axios from 'axios'

import rootReducer from '../reducers'

const client = axios.create({
  baseURL:'/api/v1',
  responseType: 'json'
})

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, axiosMiddleware(client))
  )
}

export default configureStore
