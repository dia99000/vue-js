/* ビューインスタンスの作成 */
var app = new Vue({
	//options
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
  },
  //インスタンスがmountされた時に呼ばれる
  mounted: function(){
  	axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  	.then(function(response){
  		console.log(response.data.bpi)
  		console.log(response.data.bpi.USD.rate_float)
  		this.bpi = response.data.bpi
  	}.bind(this))
  	.catch(function(error){
  		this.hasError = true;
  	}.bind(this))
  	.finally(function(){
  		this.loading = false
  	}.bind(this))
  },
  filters: {
  	currencyDecimal(value){
  		return value.toFixed(2)
  	}
  }
})

//データを格納するプロパティの作成
//HTTPクライアントaxiosの導入