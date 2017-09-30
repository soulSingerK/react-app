import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getData} from 'fetch/home/home.js'
import HomeAd from 'components/homeAd'

class Ad extends React.Component{
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            adList: []
        }
    }

    render() {
        return (
            <div>
               {this.state.adList.length ?  <HomeAd data={this.state.adList}/> : <div>加载中。。。</div>}
            </div>
        )
    }
    componentDidMount() {
        let data = getData()
        data.then( (res)=> {
            return res.json()
        }).then( (json)=> {
            if(json.length) {
                this.setState({
                    adList: json
                })
            }
        })
    }
}

export default Ad