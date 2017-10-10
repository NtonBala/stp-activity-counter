import {Component} from 'react'
import {STPDayList} from './STPDayList'
import {STPDayCount} from "./STPDayCount"
import {AddDayForm} from './AddDayForm'
import {Menu} from './Menu'
import {stpDays} from '../data/stpDays'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allSTPDays: stpDays
        }
    }
    countDays(filter) {
        const {allSTPDays} = this.state;

        return allSTPDays.filter(
            (day) => (filter) ? day[filter] : day
        ).length
    }
    render() {
        return (
            <div className="app">
                <Menu/>
                {(this.props.location.pathname === '/') ?
                    <STPDayCount
                        total={this.countDays()}
                        complete={this.countDays('complete')}
                        efficient={this.countDays('efficiency')}
                    /> :
                    (this.props.location.pathname === '/add-day') ?
                        <AddDayForm/> :
                        <STPDayList
                            days={this.state.allSTPDays}
                            filter={this.props.params.filter}
                        />
                }
            </div>
        )
    }
}
