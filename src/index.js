import join from 'lodash/join';
import comp from './component';

function component() {
	let element = document.createElement('div');
  
	element.innerHTML = join(['Hello', 'webpack'], ' ');
	console.log('component input');
	comp.test();
  
	return element;
  }
  
  document.body.appendChild(component());