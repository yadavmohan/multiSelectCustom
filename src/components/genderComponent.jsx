import PropTypes from 'prop-types';

const GenderRadioButtons = ({initialState, handleGenderChange}) => {
  return (
    <>
      <label className='gender-button' htmlFor='male'>
        <input
          type="radio"
          name="gender"
          id='male'
          value={initialState}
          checked={initialState === 'male'}
          onChange={()=>handleGenderChange('male')}
        />
        Male
      </label>
      <label className='gender-button' htmlFor='female'>
        <input
          type="radio"
          id='female'
          name="gender"
          value={initialState}
          checked={initialState === 'female'}
          onChange={()=>handleGenderChange('female')}
        />
        Female
      </label>
    </>
  );
};

GenderRadioButtons.propTypes = {
  initialState: PropTypes.string,
  handleGenderChange: PropTypes.func.isRequired,
};

export default GenderRadioButtons;
