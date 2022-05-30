export function categoriesHandler(
  event,
  orm,
  server,
  database,
  framework,
  library,
  tool
) {
  switch (event.target.innerText) {
    case "Server":
      if (server.current.style.backgroundColor != "dodgerblue") {
        server.current.style.backgroundColor = "dodgerblue";
      } else {
        server.current.style.backgroundColor = "transparent";
      }
      return;
    case "ORM":
      if (orm.current.style.backgroundColor != "dodgerblue") {
        orm.current.style.backgroundColor = "dodgerblue";
      } else {
        orm.current.style.backgroundColor = "transparent";
      }
      return;
    case "Library":
      if (library.current.style.backgroundColor != "dodgerblue") {
        library.current.style.backgroundColor = "dodgerblue";
      } else {
        library.current.style.backgroundColor = "transparent";
      }
      return;
    case "Database":
      if (database.current.style.backgroundColor != "dodgerblue") {
        database.current.style.backgroundColor = "dodgerblue";
      } else {
        database.current.style.backgroundColor = "transparent";
      }
      return;
    case "Tool":
      if (tool.current.style.backgroundColor != "dodgerblue") {
        tool.current.style.backgroundColor = "dodgerblue";
      } else {
        tool.current.style.backgroundColor = "transparent";
      }
      return;
    case "Framework":
      if (framework.current.style.backgroundColor != "dodgerblue") {
        framework.current.style.backgroundColor = "dodgerblue";
      } else {
        framework.current.style.backgroundColor = "transparent";
      }
      return;
    default:
      return;
  }
}

export function ratingsHandler(event, ascending, descending, setRating) {
  switch (event.target.innerText) {
    case "Ascending":
      if (ascending.current.style.backgroundColor != "dodgerblue") {
        ascending.current.style.backgroundColor = "dodgerblue";
        descending.current.style.backgroundColor = "transparent";
      } else {
        ascending.current.style.backgroundColor = "transparent";
      }
      setRating("Ascending");
      return;
    case "Descending":
      if (descending.current.style.backgroundColor != "dodgerblue") {
        descending.current.style.backgroundColor = "dodgerblue";
        ascending.current.style.backgroundColor = "transparent";
      } else {
        descending.current.style.backgroundColor = "transparent";
      }
      setRating("Descending");
      return;
    default:
      return;
  }
}

export function selectTagHandler(e, tags, setTags) {
  e.preventDefault();
  if (e.target.tag.value.length > 2) {
    if (!tags.includes(e.target.tag.value)) {
      setTags([...tags, e.target.tag.value]);
      e.target.tag.value = "";
    } else {
      e.target.tag.value = "";
    }
  } else {
    e.target.tag.value = "";
  }
}

export function deleteTagHandler(e, tags, setTags) {
  setTags(
    tags.filter((item) => {
      if (item != e.target.innerText) {
        return item;
      } else {
        return;
      }
    })
  );
}
