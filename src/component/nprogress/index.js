import React from 'react'
import LayoutRoot from '../layout_root'

const NProgress = () => <div className={'gm-nprogress gm-nprogress-loading'} />

let timer = null
let reqLength = 0

const NProgressStatics = {
  start: function() {
    reqLength = reqLength + 1
    if (reqLength === 1) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      LayoutRoot.setComponent(LayoutRoot.TYPE.NPROGRESS, <NProgress />)
    }
  },
  done: function() {
    reqLength = reqLength - 1
    const nProgress = document.querySelector('.gm-nprogress')
    if (!reqLength && !timer) {
      nProgress && (nProgress.className = 'gm-nprogress gm-nprogress-completed')
      timer = setTimeout(function() {
        LayoutRoot.removeComponent(LayoutRoot.TYPE.NPROGRESS)
        timer = null
      }, 250)
    }
  }
}

Object.assign(NProgress, NProgressStatics)
export default NProgress
