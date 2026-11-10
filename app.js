const STORAGE_KEY = "todo.items";

const form = document.getElementById("new-form");
const input = document.getElementById("new-title");
const list = document.getElementById("list");
const empty = document.getElementById("empty");

const load = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
};

const save = (items) => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

let items = load();

const render = () => {
  list.textContent = "";
  for (const item of items) {
    const row = document.createElement("li");
    if (item.done) row.classList.add("done");

    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = item.done;
    box.addEventListener("change", () => {
      item.done = box.checked;
      save(items);
      render();
    });

    const title = document.createElement("span");
    title.className = "title";
    title.textContent = item.title;

    const remove = document.createElement("button");
    remove.className = "remove";
    remove.type = "button";
    remove.textContent = "删除";
    remove.addEventListener("click", () => {
      items = items.filter((other) => other.id !== item.id);
      save(items);
      render();
    });

    row.append(box, title, remove);
    list.append(row);
  }
  empty.hidden = items.length > 0;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) return;
  items.push({ id: Date.now().toString(36), title, done: false });
  save(items);
  input.value = "";
  input.focus();
  render();
});

render();
