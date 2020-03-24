let divTag = document.getElementById("table");
let a = createTable()
divTag.append(a);


function createTable() {
  for(i = 1; i<=9; i++){
    document.write("<tr><th>" + i +"</th>");
    for(j=1; j<=9; j++){
      document.write("<td>" + i*j +"</td>");
    }
    document.write("</tr>");
  }
}
