import React from 'react'
import Link from 'gatsby-link'

import copy from 'copy-to-clipboard';

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
      copied: false,
    }
  }

  handelClick = event => {
    const { debug, pos } = this.state
    if (debug) {
      event.preventDefault();
      copy(`[${pos.join(', ')}]`);
    }
  }
  
  handleKeys = event => {
    const [l, t, w, h] = this.state.pos;
    
    if (event.key === '<') {
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
    
    /* POSITION THE BOX */
    if (!meta && event.key === 'ArrowRight') {
      this.setState({ pos: [round(l + delta), t, w, h] })
    }
    if (!meta && event.key === 'ArrowLeft') {
      this.setState({ pos: [round(l - delta), t, w, h] })
    }
    if (!meta && event.key === 'ArrowUp') {
      this.setState({ pos: [l, round(t - delta), w, h] })
    }
    if (!meta && event.key === 'ArrowDown') {
      this.setState({ pos: [l, round(t + delta), w, h] })
    }
    
    /* SIZE THE BOX */
    if (meta && event.key === 'ArrowRight') {
      this.setState({ pos: [l, t, round(w + delta), h] })
    }
    if (meta && event.key === 'ArrowLeft') {
      this.setState({ pos: [l, t, round(w - delta), h] })
    }
    if (meta && event.key === 'ArrowUp') {
      this.setState({ pos: [l, t, w, round(h - delta)] })
    }
    if (meta && event.key === 'ArrowDown') {
      this.setState({ pos: [l, t, w, round(h + delta)] })
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeys)
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeys)
  }

  render() {
    const { debug, edit, copied, pos } = this.state;
    const { id, fix, url } = this.props;
    const [l, t, w, h] = pos;

    const style = {
      position: fix ? 'fixed' : 'absolute',
      left: `${l}vw`,
      top: `${t}vw`,
      width: `${w}vw`,
      height: `${h}vw`,
    }

    return (
      <Link
        className={[
          'hit-area',
          debug ? ' hit-area--debug' : '',
          debug && edit ? ' hit-area--edit' : ''
        ].join('')}
        style={{ ...style }}
        to={url}
        onClick={this.handelClick}
      >
        <button style={{fontSize: h * 5}}>{id}</button>
      </Link>
    )
  }
}
