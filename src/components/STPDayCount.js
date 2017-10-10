import {PropTypes} from 'react'

import '../stylesheets/ui.scss'

import Calendar from 'react-icons/lib/go/calendar'
import Tick from 'react-icons/lib/ti/tick'
import TickOutline from 'react-icons/lib/ti/tick-outline'
import BatteryHigh from 'react-icons/lib/ti/battery-high'

import {calcGoalProgress} from '../helpers/math'

export const STPDayCount = ({total = 7, complete = 5, efficient = 6, goal = 8}) => (
  <div className="stp-day-count">
    <div className="total-days">
      <span>{total}</span>
      <Calendar/>
      <span>days from {goal}</span>
    </div>
    <div className="complete-days">
      <span>{complete}</span>
      <Tick/>
      <span>complete days</span>
    </div>
    <div className="efficient-days">
      <span>{efficient}</span>
      <TickOutline/>
      <span>efficient days</span>
    </div>
    <div>
      <span>{
        calcGoalProgress(total, complete, efficient, goal)
      }</span>
      <BatteryHigh/>
      <span>progress</span>
    </div>
  </div>
)

STPDayCount.propTypes = {
    total: PropTypes.number,
    complete: PropTypes.number,
    efficient: PropTypes.number,
    goal: PropTypes.number
}
