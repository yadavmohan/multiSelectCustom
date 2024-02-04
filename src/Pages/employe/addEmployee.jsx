import PropTypes from 'prop-types';
import { useEffect, useState, useMemo, useCallback } from "react";
import GenderRadioButtons from "../../components/genderComponent";
import MultiDropDownComponent from "../../components/multiDropDownComponent";
import { stateList } from "../../data/dummyData";
import { errorMessageText, addEmpText, nameText, ageText, genderText, stateText, fruitText } from "../../constant/employeConstant"
import { isFormValid, numberOptions } from "../../utils/employe";

const AddEmployee=({addRemoveModalHandler, addEmployee})=>{
    const [selectGender, setSelectGender] = useState(""); 
    const [apiResponse,setApiResponse] = useState([]);
    const [frutielist,setFrutielist] = useState([]);
    const [user,setUser] = useState("")
    const [statelist,setStatelist] = useState([]);
    const [userAge,setUserAge] = useState("");
    const [errorMessage, setErrorMessage]= useState("");

    const isEmptyCheck=useMemo(()=>isFormValid(user,userAge,statelist,selectGender,frutielist),[user, userAge, statelist, selectGender, frutielist])

    useEffect(()=>{
      const fetchData = async () => {
      try {
        const response = await fetch("https://mocki.io/v1/5b6c99c6-3a0b-476a-bc15-596a5ffdb397");
         const responseapi = await response.json();
        setApiResponse(responseapi);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };
    fetchData();
    },[])

    const onChangeCityHandler = useCallback((data) => {
        setStatelist(data);
    }, []);

    const onChangeFruitesHandler = useCallback((data) => {
        setFrutielist(data);
    }, []);

    const handleGenderChange = (data) => {
        setSelectGender(data);
    };

    //submit button handler
    const addEmpHandler=(e)=>{
        e.preventDefault();
       const data = {
           id : Math.random(),
           name : user,
           age : userAge,
           state :statelist,
           fruits : frutielist,
           sex : selectGender
       }
       if(!isEmptyCheck){
        setErrorMessage("")
        addEmployee(data)
        addRemoveModalHandler()
        }else{
            setErrorMessage(errorMessageText)
        }
    }

    return(
        <div className="add-employee-form">
            <div className="employee-form-body">
                <div className='add-employee-heading'>{addEmpText}</div>
                <span className="close-modal" onClick={addRemoveModalHandler}>X</span>
            <form  onSubmit={(e)=>addEmpHandler(e)}>
                {isEmptyCheck ? <span className='top-header-errorMessage'>{errorMessage}</span> : '' }
                <div className="form-row">
                    <div className="row-label">{nameText}<span className='askrik-mark'>*</span></div>
                    <div className="row-filds">
                        <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Enter your name here...' className='input-style'/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="row-label">{ageText}<span className='askrik-mark'>*</span></div>
                    <div className="row-filds">
                        <select  className='input-style' onChange={(e) => setUserAge(parseInt(e.target.value))}>
                           <option value="" selected>Select a age</option>
                               {numberOptions.map((number) => (
                                   <option key={number} value={number}>
                                        {number}
                                   </option>
                            ))}
                        </select>
                    </div>
                </div>
                 <div className="form-row">
                    <div className="row-label">{genderText}<span className='askrik-mark'>*</span></div>
                    <div className="row-filds">
                        <GenderRadioButtons initialState = {selectGender}  handleGenderChange ={handleGenderChange}/> 
                    </div>
                </div>
                <div className="form-row">
                    <div className="row-label">{stateText} <span className='askrik-mark'>*</span></div>
                    <div className="row-filds">
                      <MultiDropDownComponent 
                        onChangeHandler = {onChangeCityHandler}
                        optionlist = {stateList}
                      />
                </div>
                </div>
                 <div className="form-row">
                    <div className="row-label">{fruitText} <span className='askrik-mark'>*</span></div>
                    <div className="row-filds">
                      <MultiDropDownComponent 
                        onChangeHandler = {onChangeFruitesHandler}
                        optionlist = {apiResponse}
                      />
                </div>
                </div>
                <div className='form-submit-button'><button className={`submit-button ${isEmptyCheck ? 'disabledClass' : ''}`}>Submit</button></div>
            </form>
            </div>
        </div>
    )
}
AddEmployee.propTypes = {
  addRemoveModalHandler: PropTypes.func.isRequired,
  addEmployee : PropTypes.func.isRequired,
};

export default AddEmployee;