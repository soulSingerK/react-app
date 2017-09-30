import React from 'react'
import ReactPureMixin from 'react-addons-pure-render-mixin'
import ListComponent from 'components/list'

import { getListData } from 'fetch/home/home'
import './style.less'
import LoadMore from 'components/loadMore'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = ReactPureMixin.shouldComponentUpdate
        this.loadMore = this.loadMore.bind(this)
        this.state = {
            hasMore: false,
            data: [],
            isLoadMore: false,
            page: 1
        }
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {this.state.data.length ? <ListComponent data={this.state.data}/> : <div>加载中。。。</div>}

                {this.state.hasMore ? <LoadMore isLoadMore={this.state.isLoadMore} loadMoreFn={this.loadMore}/> : ''}
            </div>
        )
    }
    componentDidMount() {
        let cityName = this.props.cityName
        let result = getListData(cityName, 0)
        this.handleData(result)
    }

    loadMore() {
        this.setState({
            isLoadMore: true
        })

        const cityName = this.props.cityName
        const page = this.state.page
        let result = getListData(cityName, page)
        this.handleData(result)
        this.setState({
            page: page + 1,
            isLoadMore: false
        })
    }

    handleData(result) {
        result.then(res=>{
            return res.json()
        }).then(json=>{

            this.setState({
                hasMore: json.hasMore,
                data: this.state.data.concat(json.data)
            })
        })        
    }
}

export default List