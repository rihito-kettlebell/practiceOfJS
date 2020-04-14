function async(str) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(str);
    }, 2000);
  });
}

async("非同期処理 実行!").then(function (result) {
  console.log(result);
});

console.log("同期処理 実行!");
