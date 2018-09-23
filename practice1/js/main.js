/* ビューインスタンスの作成 */
var app = new Vue({
	//options
  el: '#app',
  data: {
		message: 'Hello Vue.js!',
    toggle: false,
    toggle2: false,
    colors: ['Red', 'Green', 'Blue'],
    user: {
    	firstName: 'Taro',
      lastName: 'Yamada',
      age: 28
    },
    now: ''
	},
  methods: {
  	onclick: function() {
      this.now = new Date().toLocaleString();
    }
  }
})

//ビューインスタンスの作成
//データバインディングの作成
//ルートのテンプレート作成
//テキストのデータbinding
/*
1.インプットのvalueを変える
2.プロパティmessageの値を変える
3.表示される文字が変わる
*/