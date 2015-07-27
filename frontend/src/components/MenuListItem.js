import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class MenuListItem {

  static propTypes = {
    isExternal: PropTypes.bool,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  static defaultProps = { isExternal: false }

  render () {
    return (
      <li className="pure-menu-item">
        {this.renderLink()}
      </li>
    )
  }

  renderLink () {
    if (this.props.isExternal)
      return (
        <a href={this.props.link} target="_blank" className="pure-menu-link">
          {this.props.text}
        </a>
      )
    else
      return (
        <Link to={this.props.link} className="pure-menu-link">
          {this.props.text}
        </Link>
      )
  }
}
