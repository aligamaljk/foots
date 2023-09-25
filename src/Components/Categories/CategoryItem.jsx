import "./CategoryItem.scss"
const CategoryItem = ({ category, selectedCategory, onClickHandler }) => {
  
  const isSelected = category.strCategory === selectedCategory;
    return (
    <div className="category">
        <button className={` ${isSelected ? " item item_selected" : "item" }`}
        onClick={onClickHandler}
        >
            {category.strCategory}
        </button>
    </div>
  )
}

export default CategoryItem