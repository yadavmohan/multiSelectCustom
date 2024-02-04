import { useState, useEffect } from "react";
import "../../styles/employe.scss";
import { employeeList } from "../../data/dummyData";
import { pageHeading } from "../../constant/employeConstant";
import  EmployeListComponent  from "./employeList";
import AddEmployee from "./addEmployee";
import { addEmpText } from "../../constant/employeConstant"

const EmployeComponent=()=>{
    const[employeData,setEmployeData]= useState([]);
    const[addModal,setAddModal] = useState(false);

    useEffect(()=>{
        setEmployeData(employeeList)
    },[])

    const addNewEmpHandler=(newUserlist)=>{
        setEmployeData([...employeData, newUserlist])
    }

    const addModalhandler =()=>{
        setAddModal(!addModal)
    }
    return(
        <div className="employe-main-component">
            <div className="top-header">
                <svg width="160" height="48" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>TAPPP</title>
                    <path d="M13.6479 47.971H6.50215V33.721H0.339996V27.7787H19.839V33.721H13.6479V47.971Z" fill="white"></path>
                    <path d="M39.5694 47.9711H32.1633L40.9292 27.6634H47.5253L56.2911 47.9711H48.885L48.1039 45.75H40.3506L39.5694 47.9711ZM42.4046 40.2403H46.0788L44.2561 35.0769L42.4046 40.2403Z" fill="white"></path>
                    <path d="M81.1134 27.5769C84.2379 27.5769 86.6391 28.2692 88.2881 29.6538C89.9371 31.0385 90.7761 33.0865 90.7761 35.8269C90.7761 38.4231 89.9371 40.4135 88.2881 41.7692C86.6391 43.1539 84.2379 43.8462 81.1134 43.8462H79.2908V48H72.174V27.8077C73.0997 27.7789 73.9387 27.75 74.6909 27.7212C75.4431 27.6923 76.1953 27.6635 76.8896 27.6346C77.6128 27.6058 78.3072 27.6058 79.0015 27.5769C79.6669 27.5769 80.3612 27.5769 81.1134 27.5769ZM81.0845 38.0769C81.8656 38.0769 82.4442 37.875 82.8782 37.5C83.3121 37.125 83.5146 36.5481 83.5146 35.8269C83.5146 34.9327 83.3121 34.2981 82.8782 33.8942C82.4442 33.4904 81.8656 33.2885 81.0845 33.2885H79.2908V38.1058H81.0845V38.0769Z" fill="white"></path>
                    <path d="M115.569 27.5769C118.694 27.5769 121.095 28.2692 122.744 29.6538C124.393 31.0385 125.232 33.0865 125.232 35.8269C125.232 38.4231 124.393 40.4135 122.744 41.7692C121.095 43.1539 118.694 43.8462 115.569 43.8462H113.747V48H106.63V27.8077C107.556 27.7789 108.395 27.75 109.147 27.7212C109.899 27.6923 110.651 27.6635 111.346 27.6346C112.069 27.6058 112.763 27.6058 113.457 27.5769C114.123 27.5769 114.817 27.5769 115.569 27.5769ZM115.512 38.0769C116.293 38.0769 116.871 37.875 117.305 37.5C117.739 37.125 117.942 36.5481 117.942 35.8269C117.942 34.9327 117.739 34.2981 117.305 33.8942C116.871 33.4904 116.293 33.2885 115.512 33.2885H113.718V38.1058H115.512V38.0769Z" fill="white"></path>
                    <path d="M149.996 27.5769C153.121 27.5769 155.522 28.2692 157.171 29.6538C158.82 31.0385 159.659 33.0865 159.659 35.8269C159.659 38.4231 158.82 40.4135 157.171 41.7692C155.522 43.1539 153.121 43.8462 149.996 43.8462H148.174V48H141.057V27.8077C141.983 27.7789 142.822 27.75 143.574 27.7212C144.326 27.6923 145.078 27.6635 145.773 27.6346C146.496 27.6058 147.19 27.6058 147.884 27.5769C148.55 27.5769 149.273 27.5769 149.996 27.5769ZM149.967 38.0769C150.749 38.0769 151.327 37.875 151.761 37.5C152.195 37.125 152.398 36.5481 152.398 35.8269C152.398 34.9327 152.195 34.2981 151.761 33.8942C151.327 33.4904 150.749 33.2885 149.967 33.2885H148.174V38.1058H149.967V38.0769Z" fill="white"></path>
                    <path d="M81.1712 16.471C76.5424 16.471 72.7815 12.8076 72.7815 8.30758C72.7815 3.80758 76.5424 0.144119 81.1712 0.144119C85.8001 0.144119 89.561 3.80758 89.561 8.30758C89.561 12.8076 85.8001 16.471 81.1712 16.471ZM81.1712 1.3845C77.2657 1.3845 74.0544 4.49989 74.0544 8.30758C74.0544 12.1153 77.2367 15.2307 81.1712 15.2307C85.1058 15.2307 88.2881 12.1153 88.2881 8.30758C88.2881 4.49989 85.1058 1.3845 81.1712 1.3845Z" fill="white"></path>
                    <path d="M115.859 4.00962C118.289 4.00962 120.256 5.94231 120.256 8.30769C120.256 10.6731 118.289 12.6058 115.859 12.6058C113.429 12.6058 111.461 10.6731 111.461 8.30769C111.461 5.94231 113.429 4.00962 115.859 4.00962ZM115.859 0C111.143 0 107.324 3.72116 107.324 8.30769C107.324 12.8942 111.143 16.6154 115.859 16.6154C120.574 16.6154 124.364 12.8942 124.364 8.30769C124.364 3.72116 120.545 0 115.859 0Z" fill="white"></path>
                    <path d="M149.967 0C145.28 0 141.433 3.72116 141.433 8.30769C141.433 12.8942 145.252 16.6154 149.967 16.6154C154.683 16.6154 158.502 12.8942 158.502 8.30769C158.502 3.72116 154.683 0 149.967 0Z" fill="white"></path>
                </svg>
            </div>
            <div className="employe-body">
                <div className="page-heading">
                    {pageHeading}
                    <button className="add-employee-button" onClick={addModalhandler}>{addEmpText}</button>
                </div>
                <EmployeListComponent emplist = {employeData}/>
            </div>
            {
               addModal && <AddEmployee addRemoveModalHandler ={addModalhandler}  addEmployee={addNewEmpHandler}/>
            }
        </div>
    )
}
export default EmployeComponent;