import { allTechFetcher, supabase } from "../../utils/supabase";
import TechCard from "../../components/TechCard";
import styles from "../../styles/techs.module.scss";
import { useQuery } from "react-query";
import slider from "../../public/icons/slider.png";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { categoriesHandler } from "../../utils/filter";

export default function Index() {
  const database = useRef();
  const orm = useRef();
  const server = useRef();
  const library = useRef();
  const framework = useRef();
  const tool = useRef();
  const filterForm = useRef();

  const [filtering, setFiltering] = useState(false);

  const [serverSelected, setServerSelected] = useState(false);
  const [databaseSelected, setDatabaseSelected] = useState(false);
  const [frameworkSelected, setFrameworkSelected] = useState(false);
  const [toolSelected, setToolSelected] = useState(false);
  const [librarySelected, setLibrarySelected] = useState(false);
  const [ORMSelected, setORMSelected] = useState(false);

  const { isLoading, data, isError } = useQuery("techs", allTechFetcher);
  const [filterFormOpen, setFilterFormOpen] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [categories, setCategories] = useState([]);

  function openFilterForm() {
    setFilterFormOpen(!filterFormOpen);
  }

  function selectCategory(event) {
    categoriesHandler(
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
    );
  }

  function filterData() {
    setFiltering(true);
  }

  function clearFilters() {
    setFiltering(false);

    setDatabaseSelected(false);
    setORMSelected(false);
    setServerSelected(false);
    setFrameworkSelected(false);
    setToolSelected(false);
    setLibrarySelected(false);

    setCategories([]);
    setFilterFormOpen(false);
  }

  useEffect(() => {
    console.log(categories);

    if (categories.length > 0) {
      setFilteredData(
        data.filter((item) => {
          if (categories.includes(item.category)) {
            return item;
          }
        })
      );
    }
  }, [categories]);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div onClick={openFilterForm} className={styles.filter__button}>
          <p>Filter</p>
          <Image src={slider} alt="filter" width={25} height={25} />
        </div>
        {filterFormOpen && (
          <div ref={filterForm} className={styles.filter__form}>
            <div className={styles.filter__top}>
              <div className={styles.category}>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div
                    ref={server}
                    style={
                      serverSelected
                        ? { backgroundColor: "dodgerblue" }
                        : { backgroundColor: "transparent" }
                    }
                    className={styles.checkBox}
                  ></div>
                  <p>Server</p>
                </div>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div
                    ref={orm}
                    style={
                      ORMSelected
                        ? { backgroundColor: "dodgerblue" }
                        : { backgroundColor: "transparent" }
                    }
                    className={styles.checkBox}
                  ></div>
                  <p>ORM</p>
                </div>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div
                    ref={database}
                    style={
                      databaseSelected
                        ? { backgroundColor: "dodgerblue" }
                        : { backgroundColor: "transparent" }
                    }
                    className={styles.checkBox}
                  ></div>
                  <p>Database</p>
                </div>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div
                    ref={library}
                    style={
                      librarySelected
                        ? { backgroundColor: "dodgerblue" }
                        : { backgroundColor: "transparent" }
                    }
                    className={styles.checkBox}
                  ></div>
                  <p>Library</p>
                </div>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div
                    ref={framework}
                    style={
                      frameworkSelected
                        ? { backgroundColor: "dodgerblue" }
                        : { backgroundColor: "transparent" }
                    }
                    className={styles.checkBox}
                  ></div>
                  <p>Framework</p>
                </div>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div
                    ref={tool}
                    style={
                      toolSelected
                        ? { backgroundColor: "dodgerblue" }
                        : { backgroundColor: "transparent" }
                    }
                    className={styles.checkBox}
                  ></div>
                  <p>Tool</p>
                </div>
              </div>
            </div>
            <div className={styles.filter__bottom}>
              <button onClick={openFilterForm} className={styles.cancel}>
                Close
              </button>
              <div className={styles.right}>
                <button onClick={clearFilters} className={styles.clear}>
                  Clear Filters
                </button>
                <button onClick={filterData}>Filter</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.cardContainer}>
        {data ? (
          data && (
            <div
              style={{
                display: "flex",
                gap: 30,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {!filtering
                ? data.length > 0 &&
                  data.map((item, index) => {
                    return <TechCard data={item} key={index} />;
                  })
                : data.length > 0 &&
                  filteredData.map((item, index) => {
                    return <TechCard data={item} key={index} />;
                  })}
            </div>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
