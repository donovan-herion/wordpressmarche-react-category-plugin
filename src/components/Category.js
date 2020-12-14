import axios from "./Axios";

const { useEffect } = wp.element;

function Category(props) {
  const getCategories = () => {
    axios
      .get(
        `${props.siteSlug}wp-json/wp/v2/categories?_fields=name,id,description&parent=${props.mainCategoryId}&per_page=100`
      )
      .then((res) => {
        if (res.data.length == 0) {
          props.setCategories([
            {
              name: "Pas de sous categories",
              id: 0,
              description: "",
              active: true,
            },
          ]);
        } else {
          checkMainCategoryContent(res);
        }
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    if (props.mainCategoryId !== 0) {
      getCategories();
    }
  }, [props.siteSlug, props.mainCategoryId, props.subTitle]);

  const checkMainCategoryContent = (temp_res) => {
    axios
      .get(`${props.siteSlug}wp-json/wp/v2/categories/${props.mainCategoryId}`)
      .then((res) => {
        if (res.data.count !== 0) {
          props.setCategories([
            { name: "Tout", id: 0, description: "", active: true },
            {
              name: "Information générale",
              id: props.mainCategoryId,
              active: false,
            },
            ...temp_res.data,
          ]);
        } else {
          props.setCategories([
            { name: "Tout", id: 0, description: "", active: true },
            ...temp_res.data,
          ]);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const groupCategoriesIds = () => {
    let list = [];
    props.categories.map((object) => list.push(object.id));
    props.setCategoriesIds(list);
  };

  useEffect(() => {
    if (props.categories.length !== 0) {
      groupCategoriesIds();
    }
  }, [props.categories]);

  function changeSelectedCategory(temp_e) {
    const eventDataAttribute = temp_e.target.getAttribute("data-category-id");
    const matchingCategoryObject = props.categories.find(
      (obj) => obj.id == eventDataAttribute
    );
    props.setSelectedCategory(matchingCategoryObject.id);
  }

  function changeActive(temp_e) {
    const eventDataAttribute = temp_e.target.getAttribute("data-category-id");
    props.setCategories((previousCategories) =>
      previousCategories.map((object) => {
        if (object.id == eventDataAttribute) {
          return Object.assign(object, { active: true });
        } else {
          return Object.assign(object, { active: false });
        }
      })
    );
  }

  if (props.categories.length == 1) {
    return null;
  } else {
    return (
      <>
        <div className="overflow-hidden w-100 pt-48px col-6 px-0">
          <ul className="object-tags">
            {props.categories.map((object, index) => {
              return (
                <li
                  key={index}
                  className={`${object.active ? "active" : ""} pr-24px`}
                >
                  <a
                    data-category-id={object.id}
                    onClick={(e) => {
                      changeSelectedCategory(e);
                      changeActive(e);
                    }}
                    href="#"
                  >
                    {object.name} | {object.id}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <p>
          {props.categories.map((object, index) => {
            if (object.description !== "") {
              return <p key={index}>{`${object.description} ${object.id}`}</p>;
            }
          })}
        </p> */}
      </>
    );
  }
}

export default Category;
