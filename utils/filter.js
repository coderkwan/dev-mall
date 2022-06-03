export function categoriesHandler(
  event,
  orm,
  server,
  database,
  framework,
  library,
  tool,
  categories,
  setCategories,
  serverSelected,
  setServerSelected,
  databaseSelected,
  setDatabaseSelected,
  frameworkSelected,
  setFrameworkSelected,
  toolSelected,
  setToolSelected,
  librarySelected,
  setLibrarySelected,
  ORMSelected,
  setORMSelected
) {
  switch (event.target.innerText) {
    case "Server":
      if (!serverSelected) {
        setServerSelected(true);
        setCategories([...categories, "Server"]);
        server.current.style.backgroundColor = "dodgerblue";
      } else {
        setServerSelected(false);
        setCategories(
          categories.filter((item) => {
            if (item != "Server") {
              return item;
            }
          })
        );
        server.current.style.backgroundColor = "transparent";
      }
      return;
    case "ORM":
      if (!ORMSelected) {
        setORMSelected(true);
        setCategories([...categories, "Object Realational Database"]);
        orm.current.style.backgroundColor = "dodgerblue";
      } else {
        setORMSelected(false);
        setCategories(
          categories.filter((item) => {
            if (item != "Object Realational Database") {
              return item;
            }
          })
        );
        orm.current.style.backgroundColor = "transparent";
      }
      return;
    case "Library":
      if (!librarySelected) {
        setLibrarySelected(true);
        setCategories([...categories, "Library"]);

        library.current.style.backgroundColor = "dodgerblue";
      } else {
        setLibrarySelected(false);
        setCategories(
          categories.filter((item) => {
            if (item != "Library") {
              return item;
            }
          })
        );
        library.current.style.backgroundColor = "transparent";
      }
      return;
    case "Database":
      if (!databaseSelected) {
        setDatabaseSelected(true);
        setCategories([...categories, "Database"]);

        database.current.style.backgroundColor = "dodgerblue";
      } else {
        setDatabaseSelected(false);
        setCategories(
          categories.filter((item) => {
            if (item != "Database") {
              return item;
            }
          })
        );
        database.current.style.backgroundColor = "transparent";
      }
      return;
    case "Tool":
      if (!toolSelected) {
        setToolSelected(true);
        setCategories([...categories, "Tool"]);

        tool.current.style.backgroundColor = "dodgerblue";
      } else {
        setToolSelected(false);
        setCategories(
          categories.filter((item) => {
            if (item != "Tool") {
              return item;
            }
          })
        );
        tool.current.style.backgroundColor = "transparent";
      }
      return;
    case "Framework":
      if (!frameworkSelected) {
        setFrameworkSelected(true);
        setCategories([...categories, "Framework"]);

        framework.current.style.backgroundColor = "dodgerblue";
      } else {
        setFrameworkSelected(false);
        setCategories(
          categories.filter((item) => {
            if (item != "Framework") {
              return item;
            }
          })
        );
        framework.current.style.backgroundColor = "transparent";
      }
      return;
    default:
      return;
  }
}
