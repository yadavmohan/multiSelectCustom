import PropTypes from 'prop-types';

const SelectedValuesComponent=({selectedItems, removeSelectedItem})=>{
    const renderedItems = selectedItems.slice(0, 2);
    return(
        <>
            <ul className='seleced-list-top'>
                {renderedItems?.map((item) => (
                    <li
                        key={item.value}
                        style={{ cursor: "pointer" }}
                        title={item.label}
                    >
                        {item.label} <span className="delete-selected-values"  onClick={() => removeSelectedItem(item)}>x</span>
                    </li>
                    ))
                }
            </ul>
            {   selectedItems?.length > 2 && (
                <div className='count-length'>+{selectedItems.length - 2} more...</div>
            )}
        </>
    )
}

SelectedValuesComponent.propTypes = {
  selectedItems: PropTypes.array.isRequired,
  removeSelectedItem: PropTypes.func.isRequired,
};
export default SelectedValuesComponent;