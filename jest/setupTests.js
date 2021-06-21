import '@testing-library/jest-dom/extend-expect';
import Modal from 'react-modal';

const appendElToDocument = (id) => {
  const el = document.createElement('div');
  el.setAttribute('id', id);
  document.body.appendChild(el);
};

appendElToDocument('root');

Modal.setAppElement('#root');
