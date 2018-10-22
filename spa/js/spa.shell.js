//シェル名前空間spa.shellを提供する。
//css/spa.shell.cssに対応

/*
*spa.shell.js
*SPAのシェルモジュール
*/

/*global $, spa */
spa.shell = (function(){
	//----------------モジュールスコープ変数開始----------------
	//spa.shell内で利用できるすべての変数を宣言する。
	var
	configMap = {
		main_html: String()
			+ '<div class="spa-shell-head">'
				+ '<div class="spa-shell-head-logo"></div>'
				+ '<div class="spa-shell-head-acct"></div>'
				+ '<div class="spa-shell-head-search"></div>'
			+ '</div>'
			+ '<div class="spa-shell-main spa-x-closed">'
				+ '<div class="spa-shell-main-nav"></div>'
				+ '<div class="spa-shell-main-content"></div>'
			+ '</div>'
			+ '<div class="spa-shell-foot"></div>'
			+ '<div class="spa-shell-chat"></div>'
			+ '<div class="spa-shell-modal"></div>',
		chat_extend_time: 1000,
		chat_retract_time: 300,
		chat_extend_height: 450,
		chat_retract_height: 15,
	},
	//モジュール全体で共有する動的情報をstateMapに配置
	stateMap = {$container : null},
	//jqueryMapにjQueryコレクションをキャッシュ
	jqueryMap = {},
	//このセクションですべてのモジュールスコープ変数を宣言。後で割り当てる
	setJqueryMap, toggleChat, initModule;
	//----------------モジュールスコープ変数終了----------------

	//----------------ユーティリティメソッド開始----------------
	//----------------ユーティリティメソッド終了----------------

	//----------------DOMメソッド開始----------------
	setJqueryMap = function(){
		var $container = stateMap.$container;
		jqueryMap = {
			$container: $container,
			$chat: $container.find( '.spa-shell-chat')
		};
	};
	//DOMメソッド/toggleChat/開始
	toggleChat = function(do_extend, callback){
		var
		px_chat_ht = jqueryMap.$chat.height(),
		is_open = px_chat_ht === configMap.chat_extend_height,
		is_closed = px_chat_ht === configMap.chat_retract_height,
		is_sliding = ! is_open && ! is_closed;
		//競合状態を避ける
		if(is_sliding){return false;}
		//チャットスライダーの拡大開始
		if(do_extend){
			jquery.map.$chat.animate(
				{height: configMap.chat_extend_height},
				configMap.chat_extend_time,
				function(){
					if(callback){callback(jqueryMap.$chat);}
				}
			);
			return true;
		}
		//チャットスライダーの拡大終了

		//チャットスライダーの格納開始
		jqueryMap.$chat.animate(
			{height: configMap,chat_retract_height},
			configMap.chat_retract_time,
			function(){
				if(callback){callback(jqueryMap.$chat);}
			}
			return true;
		);
		//チャットスライダーの格納終了
	}
	//DOMメソッド/toggleChat/終了
	//----------------DOMメソッド終了----------------

	//----------------イベントハンドラ開始----------------
	//----------------イベントハンドラ終了----------------

	//----------------パブリックメソッド開始----------------
	initModule = function($container){
		//HTMLをロードし、jQueryコレクションをマッピングする
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();

		//切り替えをテストする
		setTimeout(function(){toggleChat(true);},3000);
		setTimeout(function(){toggleChat(false);},3000);
	};
	return {initModule: initModule};
	//----------------パブリックメソッド終了----------------
}());