import join from 'lodash/join';
import comp from './component';
import Vue from 'vue';
import newComponent from './NewComponent.vue';
import '../assets/styles.scss';

function component(id) {
	let element = document.createElement('div');
  
	element.innerHTML = join(['Hello', 'webpack'], ' ');
	element.classList.add('test');
	element.id = id;

	console.log('component input');
	comp.test();
  
	return element;
  }
  
  document.body.appendChild(component('elemId'));
  document.body.appendChild(component('vue'));

  new Vue({
	el: '#vue',
	template: '<dummy/>',
	components: { newComponent },
	render: h => h(newComponent)
  })