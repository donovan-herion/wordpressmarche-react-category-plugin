import Top from "./Top";
import Category from "./Category";
import Results from "./Results";

const { useState, useEffect } = wp.element;

function App() {
  const [siteSlug, setSiteSlug] = useState(""); //starting url request (HTML)
  const [mainCategoryId, setMainCategoryId] = useState(0); //narrow down request (HTML)

  useEffect(() => {
    const adaptSiteSlug = (temp_siteSlug) => {
      return temp_siteSlug == "/citoyen/" ? "" : temp_siteSlug;
    };
    setSiteSlug(
      adaptSiteSlug(
        document.querySelector("#app").getAttribute("data-site-url")
      )
    );
    setMainCategoryId(
      document.querySelector("#app").getAttribute("data-main-category-id")
    );
  }, []);

  const [categories, setCategories] = useState([]);
  const [categoriesIds, setCategoriesIds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  return (
    <>
      <div className="bg-white py-48px px-24px position-relative d-md-flex px-xl-48px mx-xl-n30px justify-content-md-center flex-column">
        <Top siteSlug={siteSlug} mainCategoryId={mainCategoryId} />

        <Category
          siteSlug={siteSlug}
          mainCategoryId={mainCategoryId}
          categories={categories}
          setCategories={setCategories}
          setCategoriesIds={setCategoriesIds}
          setSelectedCategory={setSelectedCategory}
        />

        <Results
          siteSlug={siteSlug}
          mainCategoryId={mainCategoryId}
          categoriesIds={categoriesIds}
          posts={posts}
          setPosts={setPosts}
          selectedCategory={selectedCategory}
          filteredPosts={filteredPosts}
          setFilteredPosts={setFilteredPosts}
        />
      </div>
    </>
  );
}

export default App;
