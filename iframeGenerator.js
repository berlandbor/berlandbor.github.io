// iframeGenerator.js

class IframeGenerator {
  constructor(url, width, height) {
    this.url = url;
    this.width = width;
    this.height = height;
  }

  generateIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = this.url;
    iframe.width = this.width;
    iframe.height = this.height;
    return iframe;
  }
}

export default IframeGenerator;