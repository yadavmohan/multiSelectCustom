import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const SearchFilterComponent = ({ initialState, onChaneHandler, onSearchRemoveHandler }) => {
   const refInput = useRef();
   useEffect(()=>{
     refInput.current.focus();
   },[])
    return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search..."
        value={initialState}
        className='input-style innersearch-input'
        ref={refInput}
        onChange={onChaneHandler}
      />
      {(initialState !=="" && initialState.trim !=="")  && <span onClick={onSearchRemoveHandler}>X</span>}
    </div>
  );
};

SearchFilterComponent.propTypes = {
  initialState: PropTypes.string.isRequired,
  onChaneHandler: PropTypes.func.isRequired,
  onSearchRemoveHandler : PropTypes.func.isRequired,
};

export default SearchFilterComponent;
