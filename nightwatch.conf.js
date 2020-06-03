const chromedriver = require("chromedriver");
// const chromeModheader = require("chrome-modheader");

module.exports = {
  src_folders : ['tests'],
  output_folder: 'reports',
  page_objects_path: 'pages',
  test_settings: {
    default: {
    //   launch_url: "http://192.168.31.57:8087",
      launch_url: "http://localhost:8087",
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless', 'disable-gpu']
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        // browserName: 'chrome',
        // javascriptEnabled: true,
        // acceptSslCerts: true,
        // "webStorageEnabled" : true,
        "browserName": "chrome",
"webStorageEnabled" : true,
"databaseEnabled" : true,
"applicationCacheEnabled" : true,
"nativeEvents" : true,
"javascriptEnabled": true,
"acceptSslCerts": true,
        // chromeOptions: {
        //   args: ['disable-gpu', 'headless']
        // }
        chromeOptions: {
          // extenstions: [chromeModheader.getExtension()],
          "args": ["--load-extension=~/Library/Application\ Support/Google/Chrome/Default/Extensions/idgpnmonknjnojddfkpgkljpfnnfcklj/3.1.4_0/"],

          // args: ['disable-gpu'],
          // args: ['disable-gpu', 'headless'],
          mobileEmulation: {
          deviceMetrics: {width: 360, height: 640, pixelRatio: 3},
          userAgent:
          "Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1"
            // 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Mobile Safari/537.36 profi-autotest',
          }
        }
      }
    },
    firefox: {
        desiredCapabilities: {
            browserName: 'firefox',
            javascriptEnabled: true
        }
    },
  }
};