const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const listEl = document.getElementById("list");

addTask = () => {
  if (inputEl.value === "") {
    // alert("Please write something to add!")
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputEl.value;
    listEl.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputEl.value = "";
  saveData();
};

listEl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

saveData = () => {
  localStorage.setItem("data", listEl.innerHTML);
};
getData = () => {
  listEl.innerHTML = localStorage.getItem("data");
};
getData();
btnEl.addEventListener("click", addTask);
