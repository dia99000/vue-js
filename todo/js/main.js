/* ビューインスタンスの作成 */
var app = new Vue({
	//options
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event){
      //  alert();
      if(this.newItem == '') return;
      var todo = {
        item: this.newItem,
        isDone: false,
      };
      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function(index){
      //  alert(index);
      this.todos.splice(index, 1);
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