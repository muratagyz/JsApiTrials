const profile = new Profile();
const searchProfile = document.querySelector("#searchProfile");
const ui = new UI();
searchProfile.addEventListener("keyup", (event) => {
  let text = event.target.value;
  if (text !== "") {
    profile
      .getProfile(text)
      .then((res) => {
        ui.clear();
        if (res.profile.length === 0) {
          ui.ShowAlert(text);
        } else {
          ui.showProfile(res.profile[0]);
          ui.showTodo(res.todo);
        }
      })
      .catch((err) => {
        ui.ShowAlert(text);
      });
  }
});
