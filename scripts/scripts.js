let key1 = localStorage.getItem("key1");
let key2 = localStorage.getItem("key2");
let key3 = localStorage.getItem("key3");
let key4 = localStorage.getItem("key4");
let key5 = localStorage.getItem("key5");
let key6 = localStorage.getItem("key6");

function useAlert(header, desc) {
  let alert = document.createElement("div");
  alert.className = "alert-dialog";

  let title = document.createElement("p");
  title.className = "alert-dialog-title";
  title.innerText = header;

  let description = document.createElement("p");
  description.className = "alert-dialog-description";
  description.innerText = desc;

  document.body.appendChild(alert);
  alert.appendChild(title);
  alert.appendChild(description);
}

export { key1, key2, key3, key4, key5, key6, useAlert };
