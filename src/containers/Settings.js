import React from 'react'
import { Container, Content, List, Header, Icon, Button, Title } from 'native-base'
import { Actions } from 'react-native-router-flux'
import * as settingsActions from '../reducers/settings/settingsActions'
import * as todoActions from '../reducers/todo/todoActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoItem from '../components/TodoItem'

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...todoActions, ...settingsActions }, dispatch)
  }
}

let Settings = React.createClass({

  getInitialState () {
    return {
      settings: this.props.settings
    }
  },

  render () {
    return (
        <Container>
            <Header style={{ backgroundColor: 'black' }}>
                <Button transparent onPress={Actions.pop}>
                    <Icon name='ios-arrow-back'/>
                </Button>
                <Title>Settings</Title>
            </Header>
            <Content>
                <List dataArray={this.state.settings}
                    renderRow={(item) => <TodoItem todo={item} isSettings={true}></TodoItem>}>
                </List>
            </Content>
        </Container>
    )
  }
})

export default connect(null, mapDispatchToProps)(Settings)
