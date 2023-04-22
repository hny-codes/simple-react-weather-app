import './searchbar.css';

export const SearchBar = ({ handleSearch, handleSubmit }) => {
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
      <button type='submit' onClick={handleSubmit}>
        🔍
      </button>
    </form>
  );
};
