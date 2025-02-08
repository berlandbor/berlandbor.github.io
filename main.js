// main.js

import IframeGenerator from './iframeGenerator.js';
import ModalGenerator from './modalGenerator.js';

const iframeGenerator = new( 'https://berlandbor.github.io/BlogBerlandbor-/', 350, 600);
const modalGenerator = new ModalGenerator(iframeGenerator);

const openButton = document.getElementById('openButton'); // предполагается, что у вас есть кнопка с id="openButton"
openButton.addEventListener('click', () => modalGenerator.openModal());
