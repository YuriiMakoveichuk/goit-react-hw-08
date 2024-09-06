import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/contactsSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const value = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    const value = e.target.value;
    const action = changeFilter(value);
    dispatch(action);
  };

  return (
    <>
      <label className={css.label}>
        Fine contacts by name
        <input
          className={css.input}
          type="text"
          name="search"
          value={value}
          onChange={handleSearch}
        />
      </label>
    </>
  );
};

export default SearchBox;
