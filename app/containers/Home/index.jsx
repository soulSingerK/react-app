import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PageHeader from './../../components/pageHeader'
import Swipe from './../../components/swipe'
import Ad from './subpage/ad'
import List from './subpage/list'

import { connect } from 'react-redux'



class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <PageHeader cityName={this.props.userinfo.cityName}/>
                <Swipe />
                <div style={{height: '15px'}}></div>
                <Ad />

                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapActionsToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Home)
