const Inputs = document.getElementById("Inputs");
const AddBtn = document.getElementById("Add-Btn");
const TodoDivEl = document.getElementById("Todo-Container-bottom");

function CreateEl() {
  const ElDiv = document.createElement("div");
  const ElP = document.createElement("p");
  const DeleteBtn = document.createElement("button");

  ElDiv.classList.add("Todo-Container-bottom-list");

  ElP.innerText = Inputs.value;
  DeleteBtn.innerText = "Delete";

  ElDiv.appendChild(ElP);
  ElDiv.appendChild(DeleteBtn);

  TodoDivEl.appendChild(ElDiv);

  DeleteBtn.addEventListener("click", () => {
    TodoDivEl.removeChild(ElDiv);
  });
}

AddBtn.addEventListener("click", () => {
  CreateEl();

  Inputs.value = "";
});
