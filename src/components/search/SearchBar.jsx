import { TempToggle } from '../tempToggle/tempToggle';
import './searchbar.css';

export const SearchBar = ({ handleSearch, handleSubmit, handleToggle }) => {
  return (
    <form className='search-bar'>
      <label htmlFor='search'></label>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search..'
        onInput={handleSearch}
      />
      <button className='btn-click' type='submit' onClick={handleSubmit}>
        🔍
      </button>
      <TempToggle handleToggle={handleToggle} />
    </form>
  );
};
