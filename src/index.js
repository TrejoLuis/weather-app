import './style.css'
import {init} from './domGen.js'
import {weatherFetch} from './apiFns.js'
import {listenersInit} from './listeners.js'

'use strict'

console.log('HELLO WORLD')

window.weatherFetch = weatherFetch

firstLoad()

function firstLoad(){

  //gen HTML
  init()

  //Setting up listeners
  listenersInit()

}
