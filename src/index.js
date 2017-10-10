import React from 'react'
import {render} from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import {App} from './components/App'
import {Router, Route, hashHistory} from 'react-router'
import {Whoops404} from './components/Whoops404'

window.React = React

const app = document.getElementById('react-container')

render(
  <Router history={hashHistory}>
      <Route path='/' component={App}/>
      <Route path='list-days' components={App}>
          <Route path=':filter' components={App}/>
      </Route>
      <Route path='add-day' components={App}/>
      <Route path='*' component={Whoops404}/>
  </Router>,
  app
)
