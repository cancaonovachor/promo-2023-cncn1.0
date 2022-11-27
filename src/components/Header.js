import React from 'react'
import PropTypes from 'prop-types'
import pic02 from '../images/shirotokamojinashi.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <a href="https://cancaonovachor.com/">
        <img src={pic02} alt="" />
      </a>
    </div>
    <div className="content toppage">
      <div className="inner">
        <h1>Cancaonova Chorus Next 1.0</h1>
        <h2>2023.3.12(sun) 13:00- (open 12:00)</h2>
        <p>1st Session 13:00-14:00</p>
        <p>2nd Session 14:00-15:30</p>
        <p>3rd Session 15:30-16:30</p>
        <h2>design creative center KOBE KIITO</h2>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('concept')
            }}
          >
            CONCEPT
          </a>
        </li>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('stage')
            }}
          >
            Stage
          </a>
        </li>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('access')
            }}
          >
            Access
          </a>
        </li>
        <li>
          <a
            className="use-border"
            href="https://t.livepocket.jp/e/7anr0"
            target="_blank"
          >
            Ticket <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
