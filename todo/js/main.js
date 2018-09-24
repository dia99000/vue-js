/* ビューインスタンスの作成 */
let app = new Vue({
	//options
  el: '#app',
  data: {
    newHours: null,
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event){
      if(this.newHours == null || this.newItem == '') return;

      let todo = {
        hours: this.newHours,
        item: this.newItem,
        isDone: false,
      };
      //配列todosに変数todoを追加
      this.todos.push(todo);
      //フォームを初期化
      this.newHours = '';
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