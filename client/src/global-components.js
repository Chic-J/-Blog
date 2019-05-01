import Vue from 'vue'
Vue.prototype.markdown = function (value) {
	return marked(value)
}