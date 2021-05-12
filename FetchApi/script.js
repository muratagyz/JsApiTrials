// text

function getText() {
  fetch("text.txt")
    .then((Response) => {
      return Response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((erorr) => {
      console.log(erorr);
    });
}

getText();
// json

function getJson() {
  fetch("products.json")
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((erorr) => {
      console.log(erorr);
    });
}
getJson();

//external api

function getExternalApi() {
  fetch("https://randomuser.me/api/?results=5")
    .then((data) => {
      return data.json();
    })
    .then((users) => {
      var html = "";
      users.results.forEach((user) => {
        html += `
          <div>
          
          <img src="${user.picture.medium}">
          <div>
          ${user.name.first}
          </div>
          </div>
          
          `;
      });
      document.querySelector("#users").innerHTML = html;
    })
    .catch((erorr) => {
      console.log(erorr);
    });
}

getExternalApi();

function postExternalApi() {
  const url = "https://jsonplaceholder.typicode.com/todos/";
  var data = {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: "sample title",
      body: "samole body",
    }),
    header: new Headers({
      "content-type": "application/json",
    }),
  };
  fetch(url, data).then((res) => {
    console.log(res);
  });
}
postExternalApi();
