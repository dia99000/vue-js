/* ビューインスタンスの作成 */
var app = new Vue({
	//options
  el: '#app',
  data: {
    message: 'Hello, Vue.js!',
    message2: 'Hello, <i>Vue</i>.js!',
    number: 100,
    ok: true,
    price: 29800,
  },
  methods: {
    clickHandler: function(event){
      // 文字列を反転させる
      this.message = this.message.split('').reverse().join('')
    }
  }
  //カンマ区切りのフィルタを作成
  filters: {
    numberFormat: function(value){
      return value.toLocaleString()
    }
  }
})