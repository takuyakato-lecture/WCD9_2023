// // ⑮オブジェクト
// var user_data = {  // user_dataオブジェクトの宣言
// 	name: 'Hirai',  // nameプロパティに値を格納
// 	score: 80  // scoreプロパティに値を格納
// };
// user_data.Shusseki = [1,1,1,1,0,1,0,1,1,0,1,1,1,0];  // 新たなプロパティの追加
// console.log(user_data);  // user_dataの確認
// console.log(user_data.name);  // nameプロパティの中身のみを確認

// // ⑮メソッド
// var user = {  // userオブジェクトの宣言
// 	name: 'Hirai',  // nameプロパティに値を格納
// 	greet: function(to){  // greetメソッド（toが入力引数）
// 		console.log('Hello ' + to + ', from ' + this.name);
// 	}
// };
// user.greet('Tanaka');  // userオブジェクトのgreetメソッドを呼び出し

// // 組み込みオブジェクトの使用：Stringオブジェクト
// var s = new String( 'Hirai' );  // 文字列オブジェクトの利用
// console.log( s.length );  // 文字列の長さを取得するメソッド
// console.log( s.replace('H', 'h') );  // 特定の文字を置き換えるメソッド
// console.log( s.substr(1, 3) );  // 2文字目(1)から3文字分を取得

// // 組み込みオブジェクトの使用：Dateオブジェクト
// var d = new Date(); // Dateオブジェクトの利用（何も指定しない場合は現在時刻）
// console.log( d ); // 現在の日時を表示
// var hour = d.getHours();  // 今の時刻の「時間」部分を取得するメソッド
// var min = d.getMinutes(); // 今の時刻の「分」部分を取得するメソッド
// console.log('ただいま' + hour + '時' + min + '分です．');
// var d2 = new Date(2020,6,9,10,30,00);  // 2020年7月9日10:30のDateオブジェクト
// console.log('受講締切まであと' + (d2-d) + 'ミリ秒');  // ミリ秒単位で差分を計算

// 演習①初級
var d = new Date(); // Dateオブジェクトの利用（現在時刻）
var d2 = new Date(2020,6,9,10,30,00);  // 2020年7月9日10:30のDateオブジェクト
if(d.getMonth()===5){  // もしも６月に実行した場合
	// 6月末日（30日）までの日数を足して出力
	console.log('受講締切まであと' + (d2.getDate()+(30-d.getDate())) + '日です．');
} else {
	console.log('受講締切まであと' + (d2.getDate()-d.getDate()) + '日です．');
}

// 演習①上級
var d = new Date(); // Dateオブジェクトの利用（現在時刻）
var d2 = new Date(2020,6,9,10,30,00);  // 2020年7月9日10:30のDateオブジェクト
var dDay = d2.getDate() - d.getDate();  // 日の差分を計算
if(d.getMonth()!==d2.getMonth()){  // 月が異なる場合
	dDay = 30 + dDay; // 日の差分に30日を加算
}
var dHour = d2.getHours() - d.getHours(); // 時の差分を計算
var dMin = d2.getMinutes() - d.getMinutes(); // 分の差分を計算
if(dMin<0){ // 分の差分がマイナスの場合
		dHour = dHour - 1; // 時の差分を1引く
		dMin = 60 + dMin; // 分の差分に60分を加算
}
if(dHour<0){ // 時の差分がマイナスの場合
		dDay = dDay - 1; // 日の差分を1引く
		dHour = 24 + dHour // 時の差分に24時間を加算
}
console.log('受講締切まであと' + dDay + '日と'+ dHour + '時間' + dMin + '分です．');

// 演習②
// オブジェクトを作成
var Yamada = {
    name: '山田', // 名前
    score: [70,27,56,87,73], // 点数
		calcAverage:function(){ // calcAverageメソッド
			var sum = this.score[0] + this.score[1]  // 各科目の点数を加算
								+ this.score[2] + this.score[3] + this.score[4];
			var average = sum / this.score.length; // 科目の数で除算して平均を算出
			console.log(this.name + 'の平均点：' + average);
		}
};
var Tanaka = {
    name: '田中', // 名前
    score: [64,35,40,95,64], // 点数
		calcAverage:function(){ // calcAverageメソッド
			var sum = this.score[0] + this.score[1]  // 各科目の点数を加算
								+ this.score[2] + this.score[3] + this.score[4];
			var average = sum / this.score.length; // 科目の数で除算して平均を算出
			console.log(this.name + 'の平均点：' + average);
		}
};
var Nakamura = {
    name: '中村', // 名前
    score: [43,85,78,41,64], // 点数
		calcAverage:function(){ // calcAverageメソッド
			var sum = this.score[0] + this.score[1]  // 各科目の点数を加算
								+ this.score[2] + this.score[3] + this.score[4];
			var average = sum / this.score.length; // 科目の数で除算して平均を算出
			console.log(this.name + 'の平均点：' + average);
		}
};
var Murata = {
    name: '村田', // 名前
    score: [58,50,47,62,56], // 点数
		calcAverage:function(){ // calcAverageメソッド
			var sum = this.score[0] + this.score[1]  // 各科目の点数を加算
								+ this.score[2] + this.score[3] + this.score[4];
			var average = sum / this.score.length; // 科目の数で除算して平均を算出
			console.log(this.name + 'の平均点：' + average);
		}
};
var Densan = {
    name: '田山', // 名前
    score: [39,35,57,52,98], // 点数
		calcAverage:function(){ // calcAverageメソッド
			var sum = this.score[0] + this.score[1]  // 各科目の点数を加算
								+ this.score[2] + this.score[3] + this.score[4];
			var average = sum / this.score.length; // 科目の数で除算して平均を算出
			console.log(this.name + 'の平均点：' + average);
		}
};
Yamada.calcAverage(); // calcAverageメソッドの実行
Tanaka.calcAverage();
Nakamura.calcAverage();
Murata.calcAverage();
Densan.calcAverage();
