import PropTypes from 'prop-types'
import React from 'react'
import ichiji from '../images/ichiji_edit.jpg'
import zentai from '../images/zentai-ticc.jpg'
import kiito_senzai from '../images/kiito_senzai_edit.jpg'
import access from '../images/access.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="concept"
          className={`${this.props.article === 'concept' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CONCEPT</h2>
            <div class="youtube">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/TMVrcz3AG7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </div>
          <p><a className="use-border" href="https://cancaonovachor.com/">カンサォン・ノーヴァ</a>創団以来初となるコンサート。</p>
          <p>テクノロジーの力で、次世代の合唱の形を提案する演奏会を開催します。</p>
          <p>Live配信やデジタルアートと合唱の融合など、新しい演奏会のスタイルで挑戦します。</p>
          <p>ステージ情報は <a className="use-border" href="javascript:;" onClick={async () => {
            await this.props.onCloseArticle();
            this.props.onOpenArticle('stage');
            }}>こちら</a> から
          </p>
          {close}
        </article>

        <article
          id="stage"
          className={`${this.props.article === 'stage' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Stage</h2>
          <span className="image-main main">
            <img src={zentai} alt="" />
          </span>
          <h3>1st Session: Contest Selection</h3>
          <p>支部制を活かしながら様々なコンクールに出場している我々が、
          今年1年コンクールのために練り上げた様々な曲を、詳細な解説とあわせてお届けします。
          ルネサンスから近現代までの「これまでの合唱」をご堪能ください。
          </p>
          <p>入場料￥2500 前売り￥2000
          <br></br>時間：13:00〜</p>
          <p>演奏予定曲：
          <br></br>・Vecchie Letrose(Adrian Willaert)
          <br></br>・Surrexit pastor bonus(Giovanni Pierluigi da Palestrina)
          <br></br>・Viel werden kommen von Morgen und von Abend(Heinrich Schütz)
          <br></br>・Sammelt zuvor das Unkraut(Heinrich Schütz)
          <br></br>・Ave Maria(Josquin des prez)
          <br></br>・Quatre petites prières de saint François d’Assise(Francis Poulenc)
          <br></br>・Chanson à boire(Francis Poulenc)
          <br></br>・Beati Mortui(Felix Mendelssohn Bartholdy)
          <br></br>・Thou my love, art fair(Bob Chilcott)
          <br></br>・Ave Maria(Lin Ming-Chieh)
          </p>
          
          <span className="image-main main">
            <img src={ichiji} alt="" />
          </span>
          <h3>2nd Session: Co-Creation</h3>
          <p>様々なゲストをお招きして「今ここにある合唱」を皆さんとともに考えます。地元の美味しいコーヒーとチョコレートを片手に、特別ゲストとの座談会、各地の合唱団の演奏、パネルディスカッションなどの企画をお楽しみください。
          </p>
          <p>料金：無料（入場には1stまたは3rd sessionの入場券が必要です。)
          <br></br>時間： 14:00〜</p>
          <p>協賛 (敬称略)：
          <br></br>・ICHIJI
          <br></br>・ゆげ焙煎所
          <br></br>・しゃち子。
          <br></br>ほか、各地合唱団</p>
          <span className="image-main main">
            <img src={kiito_senzai} alt="" />
          </span>
          <h3>3rd Session: Chorus × NewMusic</h3>
          <p>デジタルアートという切り口で、我々が考える「新しい合唱」を提示します。
          ポピュラーミュージックとの深い融合、映像作品とのインタラクションなど、合唱のまだ見ぬ可能性を感じていただければと思います。</p>
          <p>入場料￥2500 前売り￥2000
          <br></br>時間： 15:30〜</p>
          <p> 演奏予定曲：
          <br></br>・男声合唱編曲ポップス曲集 (編曲:下薗大樹, 詳細曲目は当日乞うご期待！)
          <br></br>・Digital Poliphony (下薗大樹, 全曲初演)
          <br></br>・The Alphabet (György Ligeti)
          <br></br>・Kalkadunga Yurdu (William Barton)
          <br></br>・第２ヴォカリーズ (武満徹)
          <br></br>・NyonNyon (Jake Runestad)
          </p>
          {close}
        </article>

        <article
          id="access"
          className={`${this.props.article === 'access' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Access</h2>
          <span className="image-main main">
            <img src={access} alt="" />
          </span>
          {close}
        </article>

        <article
          id="ticket"
          className={`${this.props.article === 'ticket' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Buy Ticket</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
