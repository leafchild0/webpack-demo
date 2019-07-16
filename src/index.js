import join from 'lodash/join';
import comp from './component';
import '../assets/styles.scss';

function component() {
	let element = document.createElement('div');
  
	element.innerHTML = join(['Hello', 'webpack'], ' ');
	element.classList.add('test');

	console.log('component input');
	comp.test();
  
	return element;
  }
  
  document.body.appendChild(component());