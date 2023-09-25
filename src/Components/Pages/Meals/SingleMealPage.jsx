// import { useRouter } from "next/router"
import "./Index.scss"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Image } from "antd";
import { useParams } from "react-router";
import { useState } from "react";
import {HeartOutlined, StopOutlined} from "@ant-design/icons"
// import SavedMeals from "../../SavedMeals/SavedMeals";
import toast from "react-hot-toast";
const getSingleMeal = async ({queryKey})=>{
  const {data} = await axios.get(`/lookup.php?i=${queryKey[1]}`)
  return data?.meals?.[0]
}
const SingleMealPage = () => {
  const [isSave, setIsSave] = useState(false);
  // console.log(isSave);
  // const [isData, setIsData] = useState([]);
// console.log(isData);
  const {Id} = useParams()
  // console.log("param",Id);
  // const router = useRouter();
  // const {id} = router.query;
  // console.log("id",id);
  const {data, isLoading, isError, error} = useQuery({
    queryKey:["singleMeal", Id],
    queryFn: getSingleMeal
  })
  // console.log(data);
  if(isError) return <h1> {error.message} </h1>
  if(isLoading) return <h1> Loading... </h1>
  const ingredients = Object.keys(data).filter((key)=> key.startsWith("strIngredient")).filter(key => data[key] !== "" && data[key] !== null)
  // console.log("ingredients",ingredients);
  const ingredientsWithMeasures = ingredients.map((key, index)=>{
    return ({
      index: index + 1,
      ingredient: data[key],
      measure: data[`strMeasure${index + 1}`]
    })
  })
if(localStorage.getItem("savedMeals")){
  const saveMeals = JSON.parse(localStorage.getItem("savedMeals"));
  if(saveMeals.includes(Id)){
    setIsSave(true);
  }else{
    setIsSave(false);
  }
}
  const handleSaveButtonClick = () => {
    if(localStorage.getItem("savedMeals") === null){
      localStorage.getItem("savedMeals", JSON.stringify([data.idMeal]))
      toast.success('Meal Saved Successfully');
    }else{
      const saveMeals = JSON.parse( localStorage.getItem("savedMeals"))
      if(!isSave){
        saveMeals.puch(data.idMeal)
        localStorage.setItem("savedMeals", JSON.stringify(saveMeals))
        toast.success('Meal Saved ');
        setIsSave(true)
      }else{
        saveMeals.splice("savedMeals".indexOf(data.idMeal),1);
        localStorage.setItem('saveMeals',JSON.stringify(saveMeals));
        setIsSave(false)
        toast.error('Meal Remove Successfully')
      }
    }
  }
  return (
    <>
    <div className="pageWrapper">
      <div className="meals_topContainer">
        <div className="img">
          <Image
          src={data.strMealThumb}
          height={300}
          width={300}
          ></Image>
        </div>
        <div className="meals_info">
          <h2 className="Title_title">{data.strMeal}</h2>
          <div className="PointText_pointText">
            <span className="PointText_circle"></span>
            <p className="Text_text_p">Category: {data.strCategory}</p>
          </div>
          <div className="PointText_pointText">
            <span className="PointText_circle"></span>
            <p className="Text_text_p">Area: {data.strArea} </p>
          </div>
          <div className="PointText_pointText">
            <span className="PointText_circle"></span>
            <p className="Text_text_p">tags: {data.strTags} </p>
          </div>
          
          {/* {isSave ? (
            <>
              <p className="Text_text_green">You already saved the meal.</p>
             <button className="Button_button"
            onClick={()=>{
              setIsSave(false)
              setIsData([])
            }}
          >
           <StopOutlined /> Remove
          </button>
            </>
          ) : (
            <>
            <button className="Button_button"
            onClick={()=>{
              setIsSave(true)
              setIsData(data)
            }}
            >
             <HeartOutlined /> Save
            </button>
            </>
          )} */}
         {isSave?<p className="Text_text_green">You already saved the meal.</p>: null}
            { <button className="Button_button"
            onClick={handleSaveButtonClick}
            >
          {isSave ? (
            <>
           <StopOutlined /> Remove
            </>
          ) : (
            <>
             <HeartOutlined /> Save
            
            </>
          )}
            </button> }
            
        </div>
      </div>
    </div>
    <div className="meals_ingredientsTable">
    <h2 className='Title_title'>Ingredients</h2>
    <table>
      <tbody>
      {ingredientsWithMeasures.map((ingr)=>(
        <tr key={ingr.index}>
          <td>
            <p className="Text_text_p">
              {ingr.ingredient}
            </p>
          </td>
          <td>
            <p className="Text_text_p">
              {ingr.measure}
            </p>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
    </div>
    <div className="instructions">
    <h2 className='Title_title'>Instructions</h2>
    {data.strInstructions.split("-").filter(sentence=> sentence !== "").map(sentence=>(
      <div className="PointText_pointText" key={sentence} >
        <span className="PointText_circle"></span>
        <p className="Text_text_p">
        {sentence}
        </p>
        </div>
    ))}
    </div>
    {/* <div style={{display:"none"}}>
    <SavedMeals data={isData}/>
    </div> */}
    </>
  )
}

export default SingleMealPage