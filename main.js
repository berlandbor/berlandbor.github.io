// main.js

import IframeGenerator from './iframeGenerator.js';
import ModalGenerator from './modalGenerator.js';

const iframeGenerator = new IframeGenerator('https://berlandbor.github.io/SVG/IMG_20231124_083117%20(1).svg', 350, 600);
const modalGenerator = new ModalGenerator(iframeGenerator);

const openButton = document.getElementById('openButton'); // предполагается, что у вас есть кнопка с id="openButton"
openButton.addEventListener('click', () => modalGenerator.openModal());