function Top(props) {
  return (
    <>
      <h2 className="text-ls-md-left pt-ls-md-8px text-md-left pt-md-8px">
        {props.siteSlug == "" ? "citoyen" : props.siteSlug}
      </h2>

      <span className="color-cat-cit ff-semibold pt-12px d-block fs-short-2">
        {props.mainCategoryName}
      </span>
    </>
  );
}

export default Top;
