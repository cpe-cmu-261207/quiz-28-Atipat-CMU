const boxLoading = document.getElementById("div-loading-card");
const boxUser = document.getElementById("div-user-card");
const txtName = document.getElementById("p-name");
const txtAddress = document.getElementById("p-address");
const txtEmail = document.getElementById("p-email");
const imgProfile = document.getElementById("img-profile");

async function callApi() {
  showLoading(true);
  const resp = await axios.get("https://randomuser.me/api/");
  setUser(resp.data.results[0]);
  showLoading(false);
}

function showLoading(isLoading) {
  if (isLoading) {
    boxLoading.style.display = "";
    boxUser.style.display = "none";
  } else {
    boxLoading.style.display = "none";
    boxUser.style.display = "";
  }
}

function setUser(data) {
  txtName.innerText = `${data.name.first} ${data.name.last}`;
  txtEmail.innerText = `${data.email}`;
  const add = data.location;
  txtAddress.innerText = `${add.city} ${add.state} ${add.country} ${add.postcode}`;
  imgProfile.src = data.picture.large;
}

async function generateMore() {}

// Main start here
callApi();
