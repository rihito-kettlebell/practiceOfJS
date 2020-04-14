/**
 * サンドイッチを例にpromiseと非同期処理の学習をする
 * トマトをスライスして準備
 * ハムを切って準備
 * レタスをちぎり準備
 *
 * =>これら具材をパンで挟む（処理終了）
 */

//NGパターン
// async () => {

//   const tomato = await axios.get("/tomato");
//   const hamu = await axios.get("/hamu");
//   const retasu = axios.get("/retasu");

//   const sandwitch = axios.post("/sandwitch", {
//     tomato,
//     hamu,
//     retasu
//   });

//   // いただきます！
//   return sandwitch;
// }

/**
 * 上記の例では、一つ一つの結果がかえって来るのを待ってしまうので処理速度が遅くなる
 */
// そこで以下の用に書き換える
async () => {
  const tomatoPromise = await axios.get("/tomato");
  const hamuPromise = await axios.get("/hamu");
  const retasuPromise = axios.get("/retasu");

  // 以下が追加した処理 変数で一度それぞれを受け取る
  const tomato = await tomatoPromise;
  const hamu = await hamuPromise;
  const retasu = await retasu;

  // 追加した変数を以下の処理へ加える 全ての処理が完了してから実行される。
  const sandwitch = axios.post("/sandwitch", {
    tomato,
    hamu,
    retasu,
  });

  // いただきます！
  return sandwitch;
};

// 上記は以下のようにPromise.allで書くこともできる
async () => {
  //配列で宣言し、map関数を使う
  const [tomato2, hamu2, retasu2] = Promise.all(
    ["/tomato2", "/hamu2", "/retasu2"].map(axios.get)
  );

  // 以降の処理は同じ
  const sandwitch2 = await axios.post("/sandwitch2", {
    tomato2,
    hamu2,
    retasu2,
  });
  return sandwitch2;
};
