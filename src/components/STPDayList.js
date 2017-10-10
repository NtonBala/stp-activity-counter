import {STPDayRow} from './STPDayRow'
import {Link} from 'react-router'

export const STPDayList = ({days, filter}) => {
    const filteredDays = (!filter || !filter.match(/complete||efficient/)) ?
        days : days.filter(day => day[filter])

    return (
        <div className='stp-day-list'>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Step</th>
                        <th>Complete</th>
                        <th>Efficiency</th>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Link to='/list-days'>
                                All Days
                            </Link>
                            <Link to='/list-days/complete'>
                                Complete Days
                            </Link>
                            <Link to='/list-days/efficiency'>
                                Efficient Days
                            </Link>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {filteredDays.map((day, index) => (
                        <STPDayRow
                            key={index}
                            {...day}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

STPDayList.defaultProps = {
    days: [
        STPDayRow.defaultProps
    ]
}

STPDayList.propTypes = {
    days: (props) => {
        if(!Array.isArray(props.days)) {
            return new Error('STPDayList should be an array')
        } else if(!props.days.length) {
            return new Error('STPDayList must have at least one record')
        } else {
            return null
        }
    }
}
