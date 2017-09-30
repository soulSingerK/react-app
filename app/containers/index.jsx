import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Storage from './../util/localStore'
import * as keys from './../config/storageKeys'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionsType from './../actions/userinfo'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                
                {
                    this.state.initDone ? this.props.children : <div>加载中。。。</div>
                }
            </div>
        )
    }
    componentDidMount() {
        let cityName = Storage.getItem(keys.CITY_NAME)
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.usersActions.login({
            cityName: cityName
        })
        this.setState({
            initDone: true
        })

    }
}
function mapStateToProps(state){
    return {}
}

function mapActionsToProps(dispatch) {
    return {
        usersActions: bindActionCreators(actionsType, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(App)
