// import { Link } from "react-router-dom"
import "./SavedMeals.scss"
// import { useEffect, useState } from "react";
const SavedMeals = () => {
    // const [saveMeals, setSaveMeals]= useState([]);
    // useEffect(()=>{
    //     if(localStorage.getItem("savedMeals")){
    //         setSaveMeals(JSON.parse(localStorage.getItem("savedMeals")))
    //     }
    // },[])
    // const query = saveMeals.map((id)=>{
    //     queryKey: ["singleMeal", id]
    //     queryFn:
    // })
  return (
    <div className="savedMeals_pageWrapper">
        <h2 className="Title_title">My Saved Meal List</h2>
        <div className="savedMeals_list_container">
             
             {/* {isData?.data.map((data)=>(
            <Link to={`/meals/${data.idMeal}`} key={data.idMeal} className="savedMeals_singleMeal">
                <h2 className="Title_title">
                {data.strMeal}
                </h2>
                <div className="PointText_pointText">
                    <div className="PointText_circle"></div>
                    <p className="Text_text">
                    Category : {data.strCategory}
                    </p>
                </div>
                <div className="PointText_pointText">
                    <div className="PointText_circle"></div>
                    <p className="Text_text">
                    Area : {data.strArea}
                    </p>
                </div>
            </Link>
             ))}  */}
        </div>
    </div>
  )
}

export default SavedMeals