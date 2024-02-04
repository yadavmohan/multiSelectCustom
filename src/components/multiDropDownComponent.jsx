import { useEffect, useState, useRef, useCallback } from "react";
import PropTypes from 'prop-types';
import SearchFilterComponent from "./searchFilterComponent";
import SelectedValuesComponent from "./selectedValuesComponent";
import { norecordText, searchHereText } from "../constant/employeConstant"

const MultiDropDownComponent = ({onChangeHandler, optionlist }) => {
  const [search, setSearch] = useState("");
  const [dropdownlist, setDropdownlist] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownListRef = useRef(null);

  useEffect(() => {
    setDropdownlist(optionlist);
  }, [optionlist]);

  useEffect(() => {
    onChangeHandler(selectedData)
  }, [onChangeHandler, optionlist, selectedData]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) 
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleMouseMove = () => {
      if (dropdownListRef.current) {
          setIsDropdownOpen(true);
      } else {
          setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // const toggleSelection = (item) => {
  //   const isSelected = selectedData.includes(item);
  //   setSelectedData((prevSelected) =>
  //     isSelected
  //       ? prevSelected.filter((selected) => selected !== item)
  //       : [...prevSelected, item]
  //   );
  //   onChangeHandler(selectedData)
  // };
  const toggleSelection =useCallback((item)=>{
    const isSelected = selectedData.includes(item);
    setSelectedData((prevSelected) =>
      isSelected
        ? prevSelected.filter((selected) => selected !== item)
        : [...prevSelected, item]
    );
    onChangeHandler(selectedData)
  },[onChangeHandler, selectedData])

  const removeSelectedItem = (item) => {
    setSelectedData((prevSelected) =>
      prevSelected.filter((selected) => selected !== item)
    );
  };

  const setSearchHandler = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const filteredResults = optionlist.filter(item =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDropdownlist(filteredResults);
  };

  const openDropDownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onSearchRemoveHandler=()=>{
    setSearch("");
    setDropdownlist(optionlist)
  }

  return (
    <div className="multi-main-filter" ref={dropdownRef}>
      <div className="multiSearch-fields" onClick={openDropDownHandler}>
        {selectedData.length === 0 && <div className="input-feilds">{searchHereText}</div>}
        {selectedData.length > 0 && (
          <div className="selectedInput">
            <SelectedValuesComponent
              selectedItems={selectedData}
              removeSelectedItem={removeSelectedItem}
            />
          </div>
        )}
        <div className="dropdown-arrow">{isDropdownOpen ? "▲" : "▼"}</div>
      </div>
      {isDropdownOpen && (
        <div className="multi-select-dropdown" ref={dropdownListRef}>
          <div className="">
            <SearchFilterComponent
              initialState={search}
              onChaneHandler={setSearchHandler}
              onSearchRemoveHandler={(e)=>onSearchRemoveHandler(e)}
            />
          </div>
          <div className="optionlist">
            {dropdownlist?.length > 0 ? <ul>
              {dropdownlist?.map((item) => (
                <li key={item.value}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedData.includes(item)}
                      onChange={() => toggleSelection(item)}
                    />
                    <span className="dropdown-label-text">{item.label}</span>
                  </label>
                </li>
              ))}
            </ul> : <span className="no-record-text">{norecordText}</span>}
          </div>
        </div>
      )}
    </div>
  );
};

MultiDropDownComponent.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  optionlist: PropTypes.array.isRequired
};

export default MultiDropDownComponent;
