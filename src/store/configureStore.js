/**
 * # configureStore.js
 *
 * A Redux boilerplate setup
 *
 */
'use strict'

/**
 * ## Imports
 *
 * redux functions
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'

/**
* ## Reducer
* The reducer contains the 2 reducers from
* todo, settings
*/
import reducer from '../reducers'

/**
 * ## creatStoreWithMiddleware
 * Like the name...
 */

const createStoreWithMiddleware = compose(applyMiddleware(thunk), devTools())(createStore)

/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * todo, settings
 *
 */
export default function configureStore (initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
