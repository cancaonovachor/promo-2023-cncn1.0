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
    <div className="content">
      <div className="inner">
        <h1>CancaoNova Chorus Next 1.0</h1>
        <h2>
          <a
            target='_blank'
            className="use-border"
            href='https://docs.google.com/forms/d/e/1FAIpQLSc06sj-4uyOPnM_-bfl0K6bg2dPrcg496mHolNdXvet_C-4-A/viewform'
          >
            音源 / 動画予約受付中
          </a>
        </h2>
        <h2>2023.3.12(sun) 13:00- (open 12:30)</h2>
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
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('ticket')
            }}
            // href="https://passmarket.yahoo.co.jp/event/show/detail/023pm8ynq6r21.html"
            // target="_blank"
          >
            Ticket
            {/* Ticket <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
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
