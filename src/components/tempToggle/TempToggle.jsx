import './tempToggle.css';

export const TempToggle = ({ handleToggle }) => {
  return (
    <button className='toggle-btn' onClick={handleToggle}>
      °C / °F
    </button>
  );
};
