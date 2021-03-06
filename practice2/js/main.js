/* ビューインスタンスの作成 */
var app = new Vue({
	//options
  el: '#app',
  data: {
		message: 'Hello Vue.js!',
    url: 'https://jp.vuejs.org/',
    toggle: true,
    languages: [
      'Javascript',
      'Ruby',
      'Python',
      'C#',
      'Scala',
      'Go',
    ]
  },
  methods: {
    clickHandler1: function(){
      if(this.toggle === true){
        this.toggle = false;
      }else{
        this.toggle = true;
      }
    },
  },
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