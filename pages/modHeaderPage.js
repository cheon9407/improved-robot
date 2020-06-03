

const { getExtension, getAddHeaderUrl } = require('chrome-modheader');


module.exports = { 
    elements: {},
    commands: [{
      async setHeader() {
        
        // set the context on the extension so the localStorage can be accessed
        const url = 'https://bewisse.com/modheader/thankyou/'
        // const url = 'chrome-extension://idgpnmonknjnojddfkpgkljpfnnfcklj/3.1.4_0/settings.tmpl.html'; // modHeader extension
        this.navigate(url).waitForElementPresent('body', 20000);
        
        // setup ModHeader with header
        // https://bewisse.com/modheader/p/#NobwRAhgDlCmB2ATAsge0bMAuAZhANgM6wA0YARhAMYDWA5gE6oCuSAwqvqg9mAMQBmABwBOCACZyYMjgCW+AC6wGhbMAC6ZABawIGFWvBVUAWxMIFvaWAQRy+WImwKGzUmHgRzvABoBaADFuAHcIBgxEQO5rADcCN14ARmSAOmTEtNT0sABfTTAtWQwOMwtnV3cGWEIoAAldfVUsDTJCLW4FABVZBQck6yUADwUOLh4sfhwp6YGevomABSY5BwACROtmBnwAJVgofGpYc3gFJo08oA
        // this.api.execute(`
        //   window.localStorage.setItem('profiles', JSON.stringify(
        //     [
        //       {"appendMode":false,"backgroundColor":"#389a2b","filters":[],"headers":[{"comment":"","enabled":true,"name":"X-Forwarded-For","value":"221.148.61.23"}],"hideComment":true,"respHeaders":[],"shortTitle":"1","textColor":"#ffffff","title":"Profile 1","urlReplacements":[]}]
        //   ))`);
        console.log(getExtension())
          const inputInfo = {
            title: 'Profile11222 1',
            hideComment: true,
            headers: [],
            respHeaders: [],
            filters: [],
            urlReplacements: [],
            appendMode: false,
            backgroundColor: '#ffffff',
            textColor: '#000000',
            shortTitle: '1',
          }
          // (getAddHeaderUrl('HeaderName', 'HeaderValue'))

          // this.api.execute(`
          //   window.localStorage.setItem('profiles', ${JSON.stringify(inputInfo)})`
          // );
          
          // this.api.execute(function() {
          //   console.log(localStorage)
          // });



      },
    }],
  };