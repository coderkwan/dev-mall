import { allTechFetcher, supabase } from "../../utils/supabase";
import TechCard from "../../components/TechCard";
import styles from "../../styles/techs.module.scss";
import { useQuery } from "react-query";
import slider from "../../public/icons/slider.png";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  categoriesHandler,
  deleteTagHandler,
  ratingsHandler,
  selectTagHandler,
} from "../../utils/filter";

export default function Index() {
  const ascending = useRef();
  const descending = useRef();

  const database = useRef();
  const orm = useRef();
  const server = useRef();
  const library = useRef();
  const framework = useRef();
  const tool = useRef();

  const filterForm = useRef();

  const [rating, setRating] = useState(false);
  const [filterFormOpen, setFilterFormOpen] = useState();
  const [tags, setTags] = useState([]);

  function openFilterForm() {
    setFilterFormOpen(!filterFormOpen);
  }

  function selectRating(e) {
    ratingsHandler(e, ascending, descending, setRating);
  }

  function selectCategory(e) {
    categoriesHandler(e, orm, server, database, framework, library, tool);
  }

  function selectTag(e) {
    selectTagHandler(e, tags, setTags);
  }

  function deleteTag(e) {
    deleteTagHandler(e, tags, setTags);
  }

  const { isLoading, data, isError } = useQuery("techs", allTechFetcher);

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
              <div className={styles.rating}>
                <h4>Rating</h4>
                <div onClick={selectRating} className={styles.rating__each}>
                  <div ref={ascending} className={styles.radioButton}></div>
                  <p>Ascending</p>
                </div>
                <div onClick={selectRating} className={styles.rating__each}>
                  <div ref={descending} className={styles.radioButton}></div>
                  <p>Descending</p>
                </div>
              </div>
              <div className={styles.category}>
                <h4>Category</h4>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div ref={server} className={styles.checkBox}></div>
                  <p>Server</p>
                </div>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div ref={orm} className={styles.checkBox}></div>
                  <p>ORM</p>
                </div>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div ref={database} className={styles.checkBox}></div>
                  <p>Database</p>
                </div>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div ref={library} className={styles.checkBox}></div>
                  <p>Library</p>
                </div>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div ref={framework} className={styles.checkBox}></div>
                  <p>Framework</p>
                </div>
                <div onClick={selectCategory} className={styles.category__each}>
                  <div ref={tool} className={styles.checkBox}></div>
                  <p>Tool</p>
                </div>
              </div>
              <div className={styles.tags}>
                <h4>Tag</h4>
                <form onSubmit={selectTag} className={styles.tags__form}>
                  <input name="tag" type="text" />
                  <button type="submit">Add</button>
                </form>
                <div className={styles.tags__list}>
                  {tags.length > 0 &&
                    tags.map((item, index) => {
                      return (
                        <p onClick={deleteTag} key={index}>
                          {item}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className={styles.filter__bottom}>
              <button onClick={openFilterForm} className={styles.clear}>
                Clear Filters
              </button>
              <div className={styles.right}>
                <button onClick={openFilterForm} className={styles.cancel}>
                  Cancel
                </button>
                <button>Save</button>
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
              {data.length > 0 &&
                data.map((item, index) => {
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
