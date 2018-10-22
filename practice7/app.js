// 属性値の展開
// v-bindディレクティブ
var items = [
	{
		price:3000,
		quantity:5,
	},
	{
		price:8000,
		quantity:1,
	},
	{
		price:240000,
		quantity:10,
	}
]
new Vue({
	el: "#app",
	data:{
		items: items
	},
	computed: {
		totalPrice: function(){
			return this.items.reduce(function (sum,item){
				return sum + (item.price * item.quantity)
			}, 0)
		},
		totalPriceWithTax: function(){
			return Math.floor(this.totalPrice * 1.08)
		}
	}
})