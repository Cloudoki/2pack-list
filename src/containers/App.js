/**
 * # App.js
 *  Displays startup screen with the Todo List
 *
 *
 */
'use strict'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

/**
 * Project actions
 */
import * as todoActions from '../reducers/todo/todoActions'

/**
 * The components we need from ReactNative
 */
import React from 'react'
import
{
    StyleSheet,
    View
}
from 'react-native'
import {Button, Icon} from 'native-base'

import TodoList from '../components/TodoList'

/**
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    todos: state.todos,
    settings: state.settings
  }
}

/**
 * Bind all the actions from todoActions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...todoActions }, dispatch)
  }
}

let styles = StyleSheet.create({
  container: {
    padding: 10
  },
  button: {
    width: 50,
    marginTop: 10,
    marginRight: 10
  },
  wrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2
  }
})

/**
 * ## App class
 */
let reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'

let App = React.createClass({

  render () {
    const goToSettings = () => Actions.Settings({settings: this.props.settings})
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Button style={styles.button} transparent onPress={goToSettings}><Icon name="md-settings" /></Button>
        </View>
        <TodoList todos={this.props.todos} actions={this.props.actions}/>
      </View>
    )
  }
})
// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(App.prototype, TimerMixin)
/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)
