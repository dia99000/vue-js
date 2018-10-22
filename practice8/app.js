// 属性値の展開
var items = [
	{
		name: 'A',
		price: 2000,
		qty: 3
	},
	{
		name: 'B',
		price: 6000,
		qty: 1
	},
	{
		name: 'C',
		price: 3000,
		qty: 2
	},
]

var vm = new Vue({
	el: '#app',
	data: {
		items: items
	},
	filters: {
		numberWithDelimiter: function(value){
			if(!value){
				return '0'
			}
			return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
		}
	},
	computed: {
		totalPrice: function(){
			return this.items.reduce(function(sum,item){
				return sum + (item.price * item.qty)
			},0)
		},
		totalPriceWithTax: function(){
			return Math.floor(this.totalPrice * 1.08)
		}
	}
})

window.vm = vm