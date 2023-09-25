
import "./Categories.scss"
import CategoryItem from "./CategoryItem";
const Categories = ({
    setSelectedCategory,
    selectedCategory,
    categoriesIsLoading,
    categoriesIsError,
    categoriesError,
    categories,
    setQuery,
  }) => {
    if (categoriesIsLoading) {
        return <div>Loading...</div>;
      }
      if (categoriesIsError) {
        return (
          <div>
            Error:
            {categoriesError.message}
          </div>
        );
      }
    
  return (
    <div className="categories_container">
   {categories.map((item) => (
        <CategoryItem
          key={item.idCategory}
          category={item}
          onClickHandler={() => {
              setSelectedCategory(item.strCategory);
              setQuery('');
            }}
            selectedCategory={selectedCategory}
            />
            
      ))}
    </div>
  )
}

export default Categories