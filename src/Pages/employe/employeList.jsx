import PropTypes from 'prop-types';
import { noDataText, nameText, ageText, genderText, stateText, fruitText } from "../../constant/employeConstant";

const EmployeListComponent = ({emplist}) => {
  return (
    <div className="employeList-section">
      <div className="emp-table">
        <div className="emp-header">
          <div className="name-header">{nameText}</div>
          <div className="age-header">{ageText}</div>
          <div className="sex-header">{genderText}</div>
          <div className="state-header">{stateText}</div>
          <div className="fruites-header">{fruitText}</div>
        </div>
        <div className="emp-data-body">
          {emplist?.length > 0 ? (
            <ul>
              {emplist?.map((item) => (
                <li key={item.id}>
                  <div className="data-name">{item?.name}</div>
                  <div className="data-age">{item?.age}</div>
                  <div className="data-sex">{item?.sex}</div>
                  <div className="data-state">
                    <div className='datalist'>
                    {item?.state.map((item,index)=>{
                      return <span key={index} title={item.label}>{item?.label},</span>
                    })}
                    </div>
                  </div>
                  <div className="data-fruties">
                    <div className='datalist'>
                    {item?.fruits.map((item,index)=>{
                      return <span key={index} title={item.label}>{item?.label},</span>
                    })}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <span>{noDataText}</span>
          )}
        </div>
      </div>
    </div>
  );
};

EmployeListComponent.propTypes = {
  emplist: PropTypes.array.isRequired,
};

export default EmployeListComponent;
