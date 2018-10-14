/* グローバルフィルタ */
Vue.filter('numberFormat2', function(value){
  return value.toFixed(2)
})
Vue.filter('toUSD', function(jpy){
  return jpy / 100
})
Vue.filter('readMore', function(text, length, suffix){
  return text.substring(0, length) + suffix
})
/* ビューインスタンスの作成 */
var app = new Vue({
	//options
  el: '#app',
  data: {
    message: 'Hello, Vue.js!',
    message2: 'Hello, <i>Vue</i>.js!',
    number: 100,
    ok: true,
    price: 2000000,
    jpyPrice: 244444,
    text: 'Pushed the fader, gifted animator One for the now, and eleven for the later Never made it up to Minnesota',
  },
  methods: {
    clickHandler: function(event){
      // 文字列を反転させる
      this.message = this.message.split('').reverse().join('')
    },
  },
  //カンマ区切りのフィルタを作成
  filters: {
    numberFormat: function(value){
      return value.toLocaleString()
    }
  }
})