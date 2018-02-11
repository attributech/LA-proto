import React from 'react'
import Link from 'gatsby-link'

import copy from 'copy-to-clipboard'

import './index.scss'

const round = (num) => {
  return Number(Math.round(num + 'e2') + 'e-2');
}

export default class HitArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      debug: false,
      edit: false,
      pos: this.props.pos,
      settingPosition: true,
    }
  }

  handelClick = event => {
    const { debug, pos } = this.state
    if (debug) {
      event.preventDefault();
      copy(`[${pos.join(', ')}]`);
    }
  }

  handleKeyUp = event => {
    if (event.key === 'Meta') {
      this.setState({ settingPosition: true })
      console.log('0HAI', event.key)
    }
  }
  
  handleKeyDown = event => {
    const [l, t, w, h] = this.state.pos;
    
    if (event.key === 'd') {
      this.setState({ debug: !this.state.debug })
    }
    
    if (!this.state.debug) return
    
    const delta = event.shiftKey ? 1 : 0.1
    const meta = event.metaKey
    
    /* EDIT MODE */
    if (parseInt(event.key) === this.props.id) {
      this.setState({ edit: !this.state.edit })
    }
    
    if (!this.state.edit) return
    event.preventDefault();

    if (event.key === 'Meta') {
      this.setState({ settingPosition: false })
      console.log('0HAI', event.key)
    }
    
    if (meta && event.key === 'r') {
      location.reload()
    }

    /* POSITION THE BOX */
    if (!meta && event.key === 'ArrowRight') {
      this.setState({
        pos: [round(l + delta), t, w, h],
        settingPosition: true
      })
    }
    if (!meta && event.key === 'ArrowLeft') {
      this.setState({
        pos: [round(l - delta), t, w, h],
        settingPosition: true
      })
    }
    if (!meta && event.key === 'ArrowUp') {
      this.setState({
        pos: [l, round(t - delta), w, h],
        settingPosition: true
      })
    }
    if (!meta && event.key === 'ArrowDown') {
      this.setState({
        pos: [l, round(t + delta), w, h],
        settingPosition: true
      })
    }
    
    /* SIZE THE BOX */
    if (meta && event.key === 'ArrowRight') {
      this.setState({
        pos: [l, t, round(w + delta), h],
        settingPosition: false
      })
    }
    if (meta && event.key === 'ArrowLeft') {
      this.setState({
        pos: [l, t, round(w - delta), h],
        settingPosition: false
      })
    }
    if (meta && event.key === 'ArrowUp') {
      this.setState({
        pos: [l, t, w, round(h - delta)],
        settingPosition: false
      })
    }
    if (meta && event.key === 'ArrowDown') {
      this.setState({
        pos: [l, t, w, round(h + delta)],
        settingPosition: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    window.addEventListener('keyup', this.handleKeyUp)
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    window.addEventListener('keyup', this.handleKeyUp)
  }

  render() {
    const { debug, edit, copied, pos, settingPosition } = this.state;
    const { id, fix, bottom, url } = this.props;
    const [l, t, w, h] = pos;

    const style = {
      position: fix ? 'fixed' : 'absolute',
      left: `${l}vw`,
      top: `${t}vw`,
      width: `${w}vw`,
      height: `${h}vw`,
    }

    if (bottom) {
      style.top = 'auto'
      style.bottom = `${t}vw`;
    }

    return (
      <Link
        className={[
          'hit-area',
          debug ? ' hit-area--debug' : '',
          debug && edit ? ' hit-area--edit' : '',
          debug && edit && settingPosition ? ' hit-area--setting-position' : ''
        ].join('')}
        style={{ ...style }}
        to={url}
        onClick={this.handelClick}
      >
        <span>{id}</span>
        <button>copy</button>
      </Link>
    )
  }
}
