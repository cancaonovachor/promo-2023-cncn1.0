import PropTypes from 'prop-types'
import React from 'react'
import secoundSession from '../images/2nd-session.jpg'
import zentai from '../images/zentai-ticc.jpg'
import ichiji from '../images/ichiji.jpg'
import yuge from '../images/yuge.jpg'
import shachiko from '../images/shachiko.jpg'
import tiamo from '../images/tiamo.jpg'
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
          ルネサンスから近現代までの「受け継いできた合唱」をご堪能ください。
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
            <img src={secoundSession} alt="" />
          </span>
          <h3>2nd Session: Co-Creation</h3>
          <p>様々なゲストをお招きして「今ここにある合唱」を皆さんとともに考えます。地元の美味しいコーヒーとチョコレートを片手に、特別ゲストとの座談会、各地の合唱団の演奏、パネルディスカッションなどの企画をお楽しみください。
          </p>
          <p>料金：無料（入場には1stまたは3rd sessionの入場券が必要です。)
          <br></br>時間： 14:00〜</p>

          <h3>合唱協賛</h3>
          <b>しゃち子。</b>
          <span className="image-main main">
            <img src={shachiko} alt="" />
          </span>
          <p>名古屋の選りすぐりのメスゴリラを集めた女声アンサンブル。東山動物園のイケメンゴリラ、シャバーニを師と仰ぎ、迫力と美しさを兼ね備えたサウンド「ゴリリアント・ハーモニー」を目指しています。しゃち子。2度目のCNCN！メンバーも増え、さらにレベルアップした私たちをお楽しみに！</p>

          <b>Ti Amo</b>
          <span className="image-main main">
            <img src={tiamo} alt="" />
          </span>
          <p>アメリカ発祥のバーバーショップスタイルで演奏する、男声四人組の社会人アカペラグループ、関西を、拠点に活動中。</p>
          

          <h3>飲食協賛</h3>
          <b>ICHIJI</b>
          <span className="image-main main">
            <img src={ichiji} alt="" />
          </span>
          <p>
          <br></br>カカオ豆本来の味わいや香りをお届けしたい。
          <br></br>そんな思いからICHIJIは生まれました。
          <br></br>この思いをカタチにすると
          <br></br>チョコレートができるまでの全工程を自社工房で管理し製造する
          <br></br>”Bean to Bar Chocolate”になりました。
          <br></br>
          <br></br>豆の仕入れから選別、焙煎、摩砕、調合、成形まで
          <br></br>心をこめて手作業でやらせていただいています。
          <br></br>
          <br></br>きっと、チョコレートの概念が変わる
          <br></br>”Bean to Bar Chocolate”をお楽しみください。
          <br></br>
          <br></br>皆さんの生活に寄り添うように楽しめて、誰かと食べると会話が生まれる。そんな世界を目指しています。
          <br></br>
          <br></br>
          <b>ゆげ焙煎所</b>
          <span className="image-main main">
            <img src={yuge} alt="" />
          </span>
          <br></br>2013年、兵庫県西宮市の官公庁が多いエリアで創業。
          <br></br>自家焙煎のスペシャルティコーヒー専門店
          <br></br>
          <br></br>イタリア製の完全熱風式焙煎機を使用
          <br></br>毎朝、珈琲豆を丁寧に焙煎しています
          <br></br>
          <br></br>『心に響くコーヒー』
          <br></br>
          <br></br>を目指して、日々丁寧に
          <br></br>取り組んでいます。
          </p>

          <span className="image-main main">
            <img src={kiito_senzai} alt="" />
          </span>
          <h3>3rd Session: Chorus × NewMusic</h3>
          <p>デジタルアートという切り口で、我々が考える「ひとつ先の合唱」を提示します。
          ポピュラーミュージックとの深い融合、映像作品とのインタラクションなど、合唱のまだ見ぬ可能性を感じていただければと思います。</p>
          <p>入場料￥2500 前売り￥2000
          <br></br>時間： 15:30〜</p>
          <p> 演奏予定曲：
          <br></br>・男声合唱編曲ポップス曲集 (編曲:下薗大樹, 詳細曲目は当日乞うご期待！)
          <br></br>・Digital Polyphony (下薗大樹, 全曲初演)
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
