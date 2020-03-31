function count() {
  // 月、数値　後で-1する
  let bMonth = prompt("誕生日の月を1～12で入力してください。", "");
  // 日、数値
  let bDay = prompt("誕生日の日を1~31で入力してください。", "");

  // 現在
  let now = new Date();
  // 誕生日
  let birthday = new Date();
  // 値をセット
  birthday.setMonth(bMonth-1);
  birthday.setDate(bDay);
  // 差を求める
  let ms = birthday.getTime() - now.getTime();
  console.log(birthday.getFullYear());
  // 誕生日を過ぎていた場合、（ms<0）年を増やして再計算
  if(ms<=0){
    birthday.setFullYear(birthday.getFullYear() + 1);
    console.log(birthday.getFullYear());
    ms = birthday.getTime() - now.getTime();
  }
  let days = ms / (24 * 60 * 60 * 1000);
  days = Math.ceil(days);

  alert("次の誕生日まで、あと" + days + "日です");
}

/**
 * 上記メソッドにエラー処理を追加する場合は以下の項目をチェックし条件分岐させる。
 * １、bMonth,bDayは整数
 * ２、bMonthの値は１～１２
 * ３、bDayの値は誕生付きbMonthによって異なる(28~31日)
 * 1,3,5,7,8,10,12月の場合　１～３１
 * 4,6,9,11月の場合　１～３０
 * ２月の場合、　１～２９
 * 複雑になるため、実装の際はカレンダー入力しか受け付けないなどするほうがいいかもしれない。
 */
