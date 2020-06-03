
const randomTime = ()=>{
  return 4000 + Math.random() * 1000 
  // return (Math.random() * 1000 % 4) * 1000
}

const test = function(_) {
  modHeaderPage = _.page.modHeaderPage();
  modHeaderPage.setHeader();
  return _
  // homePage = _.page.homePage();
  // console.log(homePage)
}


const init = function(_) {

  _
    .useXpath()
    .url('http://m.naver.com')
    .pause(randomTime())
    // .execute('window.localStorage.clear()')
    .execute('window.sessionStorage.clear()')
    .deleteCookies()
    .pause(randomTime())
}

const search = function(_) {
  const searchKeyword = Math.ceil(Math.random() * 10) % 2 ? "스터디카페 키오스크" : "tmxjelzkvp zldhtmzm"
  _
    .click('//input[@id="MM_SEARCH_FAKE"]')
    .pause(randomTime())
    .setValue('//input[@id="query"]', searchKeyword)
    .pause(randomTime())
    .click('//span[@class="ico_sch_submit"]')  // 검색 버튼 클릭
    .pause(randomTime())
}

const goToFirstPanel = function(_) {
  const firstActionEl = [
    // `//a[contains(href, "/naverapp/?cmd=onMenu&version=3&menuCode=NEWS")]`,
    // `//a[contains(href, "/naverapp/?cmd=onMenu&version=3&menuCode=DATA")]`,
    // `//a[contains(href, "/naverapp/?cmd=onMenu&version=3&menuCode=ENT")]`,
    // `//a[contains(href, "/naverapp/?cmd=onMenu&version=3&menuCode=SHOP_VOGUE")]`,
    `//div[@class="sv_t" and contains(text(), "검색차트판")]`,
    `//div[@class="sv_t" and contains(text(), "뉴스판")]`,
    `//div[@class="sv_t" and contains(text(), "연애판")]`,
    `//div[@class="sv_t" and contains(text(), "트렌드판")]`,

    // `//span[@class="crb_t" and contains(text(), "자동차판"))]`,
    // `//span[@class="crb_t" and contains(text(), "푸드판"))]`,
    // `//span[@class="crb_t" and contains(text(), "뿜판"))]`,
    // `//span[@class="crb_t" and contains(text(), "웹툰판"))]`,
  ]
  const getFristActionEl = function(){
    const len = firstActionEl.length 
    const idx = Math.ceil(Math.random() * 10000) % len
    return firstActionEl[idx] 
  }
  const first = getFristActionEl()
  console.log(first)
  _
    .moveTo(first)
    .doubleClick(first)

}

const gotoScrollFooter = function(_) {
  //  중간 임의 위치로 스크롤 후 맨 밑으로
  _
    .execute(`window.Math.floor( window.Math.random() * ( window.document.scrollingElement.scrollHeight - window.document.scrollingElement.clientHeight) )` +
            `window.Math.floor( window.Math.random() * ( window.document.scrollingElement.scrollWidth - window.document.scrollingElement.scrollWidth) )`)
    .pause(randomTime())
    .execute('window.scrollTo(0,document.body.scrollHeight);')
    .pause(randomTime())
}

const gotoTarget = function(_) {
  const targetUrl = "https://m.blog.naver.com/mongddang-company/221973236300"
  const postButtomEl = `//a[@class="total_dsc" and contains(@href, "${targetUrl}")]`

  _
    .waitForElementVisible(postButtomEl, 1000)
    .moveToElement(postButtomEl, 10, 10)
    .pause(randomTime())
    .click(postButtomEl) // 
    .pause(randomTime())
}


module.exports = {
    'Searching Naver 01' : function (browser) {
      const fakeKeyword = "tmxjelzkvp zldhtmzm"
      const searchKeyword = "스터디카페 키오스크"

      const firstActionEl = [
        `//a[contains(href, "/naverapp/?cmd=onMenu&version=3&menuCode=NEWS")]`,
        `//a[contains(href, "/naverapp/?cmd=onMenu&version=3&menuCode=DATA")]`,
        `//a[contains(href, "/naverapp/?cmd=onMenu&version=3&menuCode=ENT")]`,
        `//a[contains(href, "/naverapp/?cmd=onMenu&version=3&menuCode=SHOP_VOGUE")]`,
        // `//div[@class="sv_t" and contains(text(), "검색차트판")]`,
        // `//div[@class="sv_t" and contains(text(), "뉴스판")]`,
        // `//div[@class="sv_t" and contains(text(), "연애판")]`,
        // `//div[@class="sv_t" and contains(text(), "트렌드판")]`,

        // `//span[@class="crb_t" and contains(text(), "자동차판"))]`,
        // `//span[@class="crb_t" and contains(text(), "푸드판"))]`,
        // `//span[@class="crb_t" and contains(text(), "뿜판"))]`,
        // `//span[@class="crb_t" and contains(text(), "웹툰판"))]`,
      ]

      const secondActionEl = [
        `//span[@class="blind" and contains(text(), "뭐하지")]`,
        `//span[@class="blind" and contains(text(), "엔터")]`,
        `//span[@class="blind" and contains(text(), "MY페이")]`,
        `//span[@class="blind" and contains(text(), "셀렉티브")]`,
        `//span[@class="blind" and contains(text(), "트렌드")]`,
        `//span[@class="blind" and contains(text(), "홈")]`,
        `//span[@class="blind" and contains(text(), "뉴스")]`,
        `//span[@class="blind" and contains(text(), "연예")]`,
        `//span[@class="blind" and contains(text(), "스포츠")]`,
        `//span[@class="blind" and contains(text(), "검색차트")]`,
        `//span[@class="blind" and contains(text(), "MY구독")]`,
        `//span[@class="blind" and contains(text(), "우리동네")]`,
      ]

      const targetUrl = "https://m.blog.naver.com/mongddang-company/221973236300"
      const viewMoreUpperEl = '//div[@class="link_inner"]'
      const viewMoreEl = '//a[@class="api_more" and contains(text(), "VIEW 더보기")]'
      const targetEl = `//a[@class="total_dsc" and contains(@href, "${targetUrl}")]`
      // const t = document.querySelectorAll('div.api_txt_lines.dsc_txt')
      // console.log(t)
      const postButtomEl = `//a[@class="total_dsc" and contains(@href, "${targetUrl}")]`
      
      const BREAK_ON = false
      const BREAKER = 'other'

      const getFristActionEl = function(){
        const len = firstActionEl.length 
        const idx = Math.ceil(Math.random() * 10000) % len
        return firstActionEl[idx] 
      }

      const getSecondActionEl = function(){
        const len = secondActionEl.length 
        const idx = Math.ceil(Math.random() * 10000) % len
        return secondActionEl[idx] 
      }

      // const randomTime = 6000
      browser =test(browser)

      init(browser)
      // goToFirstPanel(browser)
      search(browser)
      gotoScrollFooter(browser)
      browser.moveToElement(viewMoreUpperEl, 0, 0)
        .click(viewMoreEl) // view 더보기 클릭
        .pause(3000)
      // gotoScrollFooter(browser)
      gotoTarget(browser)
      gotoScrollFooter(browser)

      browser.end()
      // browser
      // .useXpath()
      // .url('http://m.naver.com')

      // .pause(randomTime())
      // .deleteCookies()
      // .pause(randomTime())
      // // .click(getSecondActionEl())
      // // .back()

      // // .waitForElementNotVisible('body', 5000)
      // // .waitForElementVisible(BREAKER, 5000, BREAK_ON)
      // .setValue('//input[@id="MM_SEARCH_FAKE"]', searchKeyword)
      // .pause(randomTime())
      // // .waitForElementVisible(BREAKER, 1000, BREAK_ON)
      // .setValue('//input[@id="query"]', searchKeyword)
      // // .setValue('input[id="query"]', searchKeyword)
      // // .waitForElementVisible(BREAKER, 1000, BREAK_ON)
      // .pause(randomTime())
      // .click('//span[@class="ico_sch_submit"]')  // 검색 버튼 클릭

      // // .waitForElementVisible(BREAKER, 1000, BREAK_ON)
      // .waitForElementVisible(viewMoreEl, 1000)
      // .pause(randomTime())
      // .moveToElement(viewMoreEl, 10, 10)
      // .pause(randomTime())

      // // .waitForElementVisible(BREAKER, 1000, BREAK_ON)
      // .click(viewMoreEl) // view 더보기

      // .waitForElementVisible(postButtomEl, 1000)
      // .moveToElement(postButtomEl, 10, 10)
      // .pause(randomTime())
      // .click(postButtomEl) // 
      // .pause(randomTime() * 7)
      // .pause(randomTime() * 5)
      // .assert.title('스터디카페 키오스크 없이도 운영가능한 스터디모아를 소개합니다 : 네이버 블로그')
      // .end();

    },
  };