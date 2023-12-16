// modalGenerator.js

class ModalGenerator {
  constructor(iframeGenerator) {
    this.iframeGenerator = iframeGenerator;
  }

  generateModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close ❌';
    closeButton.addEventListener('click', () => this.closeModal());

    modal.appendChild(closeButton);
    return modal;
  }

  openModal() {
    const modal = this.generateModal();
    const iframe = this.iframeGenerator.generateIframe();
    modal.appendChild(iframe);

    document.body.appendChild(modal);
  }

  closeModal() {
    const modal = document.querySelector('.modal');
    document.body.removeChild(modal);
  }
}

export default ModalGenerator;