// main.js

import IframeGenerator from './iframeGenerator.js';
import ModalGenerator from './modalGenerator.js';

const iframeGenerator = new IframeGenerator('https://t.me/BerlandborBlog', 350, 600);
const modalGenerator = new ModalGenerator(iframeGenerator);

const openButton = document.getElementById('openButton'); // предполагается, что у вас есть кнопка с id="openButton"
openButton.addEventListener('click', () => modalGenerator.openModal());
