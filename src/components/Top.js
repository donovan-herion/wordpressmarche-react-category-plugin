import axios from "./Axios";

const { useState, useEffect } = wp.element;

function Top(props) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const getTitle = () => {
    axios
      .get(`${props.siteSlug}wp-json`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.name);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    if (props.mainCategoryId !== 0) {
      getTitle();
    }
  }, [props.siteSlug, props.mainCategoryId]);

  const getSubTitle = () => {
    axios
      .get(`${props.siteSlug}wp-json/wp/v2/categories/${props.mainCategoryId}`)
      .then((res) => {
        setSubTitle(res.data.name);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    if (props.mainCategoryId !== 0) {
      getSubTitle();
    }
  }, [props.siteSlug, props.mainCategoryId]);
  return (
    <>
      <a
        href="https://new.marche.be/"
        className="button lvl3 align-self-ls-md-start align-self-md-start position-relative right-0 right-hover-12px fs-short-2"
      >
        <i className="fas fa-angle-left pr-8px d-ls-md-inline pr-md-12px fs-short-2 d-md-inline"></i>
        Retour à l'accueil
      </a>
      <h2 className="text-ls-md-left pt-ls-md-8px text-md-left pt-md-8px">
        {title}
      </h2>

      <span className="color-cat-cit ff-semibold pt-12px d-block fs-short-2">
        {subTitle}
      </span>
    </>
  );
}

export default Top;
