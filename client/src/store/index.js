import Vue from 'vue'
import VueX from 'vuex'
import router from '../router.js'
import {$fetch} from '../plugins/fetch.js'

Vue.use(VueX)

var comparedate = function (obj1, obj2) {
	let currentdate = new Date();
 	// 我这里使用utc时间进行计算，请不要使用任何的utc转换计算方式，因为js会自动转为当前时间
	let nowdate=currentdate.getTime()+currentdate.getTimezoneOffset()*60000;

    var val1 = new Date(obj1.updateTime);  
    var val2 = new Date(obj2.updateTime);
    var dc1 = Math.abs((parseInt(nowdate - val1)/1000));
    var dc2 = Math.abs((parseInt(nowdate - val2)/1000));
    if (dc1 < dc2) {
        return -1;
    } else if (dc1 > dc2) {
        return 1;
    } else {
        return 0;
    }
}

const store = new VueX.Store({
	state() {
		return {
			displayOverLay : true,
			currentChoose: '首页',
			user: null,
			articles: null,
			showArticles: null,
			Tags: [],
			Post: {
				body: '',
			},
			EditCount: {},
			asideShow: true,
		}
	},
	getters: {
		articles: state => state.articles,
		user: state => state.user,
		Tags: state => state.Tags,
		showArticles: state => state.showArticles,
		asideShow: state => state.asideShow,
		Post: state =>state.Post
	},
	mutations: {
		changeOverLay (state, data) {
			state.displayOverLay = data;
		},
		getArticles (state, data) {
			state.articles = data
		},
		getTags (state, data) {
			state.Tags = data
		},
		getShowArticles (state, data) {
			state.showArticles = data
		},
		changeAsideShow (state, data) {
			state.asideShow = data
		},
		getPost (state, data) {
			state.Post = data
		}
	},
	actions: {
		async logout () {
	      const result = await this.$fetch('logout')
	      if (result.status === 'ok') {
	        this.$store.state.user = null
	        // Return to home if page is private
	        if (this.$route.matched.some(m => m.meta.private)) {
	          this.$router.push({ name: 'home' })
	        }
	      }
    	},
	    getArticles () {
	    	const result = $fetch('/articleList', {
	    		method:"POST",
	    	})
	    	result.then((res) => {
	    		var tagTmp=[]
	    		res.sort(comparedate)
	    		res.forEach(article => {
	    			article.tag = article.tag.split(';')
	    			tagTmp = Array.prototype.concat(tagTmp, article.tag)
	    			tagTmp = Array.from(new Set(tagTmp))
	    		})
	    		store.commit('getArticles', res)
	    		store.commit('getShowArticles', res)
	    		store.commit('getTags', tagTmp)
	    	})	    	
	    },
	    getTagArticles ({commit}, tagdata) {
			var objtmp = store.state.articles.filter(article => {
					if(article.tag.indexOf(tagdata) != -1)
						return true
					else return false
			})
			store.commit('getShowArticles', objtmp)
	    },
	    showAll ({commit}) {
	    	store.commit('getShowArticles', store.state.articles)
	    },
	    getSelectedPost ({commit}, selectedId) {
	    	let post = store.state.articles.filter(article => {
	    		return article.id == selectedId
	    	})
	    	store.commit('getPost', post[0]) 
	    }
	}
})

export default store