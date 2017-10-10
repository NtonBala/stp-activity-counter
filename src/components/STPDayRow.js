import {PropTypes} from 'react'

import TickOutline from 'react-icons/lib/ti/tick-outline'
import Tick from 'react-icons/lib/ti/tick'

export const STPDayRow = ({step, date, complete, efficiency}) => (
    <tr>
        <td>
            {date.getDate()}/
            {date.getMonth() + 1}/
            {date.getFullYear()}
        </td>
        <td>
            {step}
        </td>
        <td>
            {(complete) ? <Tick/> : null}
        </td>
        <td>
            {(efficiency) ? <TickOutline/> : null}
        </td>
    </tr>
)

STPDayRow.defaultProps = {
    date: new Date(),
    step: 'Current Step',
    complete: true,
    efficiency: true
}

STPDayRow.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    step: PropTypes.string.isRequired,
    complete: PropTypes.bool,
    efficiency: PropTypes.bool
}
