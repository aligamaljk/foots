import "./SearchBar.scss"
import PropTypes from 'prop-types';

function SearchBar({searchText,setSearchText}) {
    return (
        <>
        <div className="search">
      <input
        className="input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Meals"
        />
      <p style={{display:"flex",gap:"5px"}} >
        <span className="PointText_circle" ></span>
        search meals or select categories from below.</p>
        </div>
      </>
    );
  }
export default SearchBar

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};