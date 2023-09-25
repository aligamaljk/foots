
import { useQuery } from '@tanstack/react-query'
import SearchBar from '../../Mealsage/SearchBar'
import "./Index.scss"
import axios from 'axios'
import Categories from '../../Categories/Categories'
import { useEffect, useState } from 'react'
import { Button } from 'antd'
import SingleMealCard from '../../Mealsage/SingleMealCard'
const getCategories = async ()=>{
const {data} = await axios.get("/categories.php")
return data.categories
}

const getMeals = async ({queryKey})=>{
  // console.log(queryKey);
const {data} = await axios.get(`/filter.php?c=${queryKey[1]}`)
return data?.meals || []
}
const getQueryMeals = async ({queryKey})=>{
const {data} = await axios.get(`/search.php?s=${queryKey[1]}`)
return data?.meals || []
}
const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("")
  const {data:categories,isLoading:categoriesIsLoading,isError:categoriesIsError, error:categoriesError} = useQuery({
    queryKey:"categories",
    queryFn: getCategories
  })
  // console.log(categories);
  const {data,isLoading,isError} = useQuery({
    queryKey:["mealsByCategory",selectedCategory ],
    queryFn: getMeals
  })
  const {data:queryData,isLoading:queryIsLoading } = useQuery({
    queryKey:["mealsByQuery", query],
    queryFn: getQueryMeals
  })
  // console.log(data);
  // console.log(categories[0].strCategory);
  useEffect(()=>{
    if(categories){
      setSelectedCategory(categories[0].strCategory)
    }
  },[categories])
  useEffect(()=>{
    const timout = setTimeout(() => {
      if(searchText){
        setQuery(searchText)
        setSelectedCategory("")
      }else{
        setQuery("");
        if(categories){
          setSelectedCategory(categories[0].strCategory)
        }
      }
    }, 300); 
    return (()=>{
      setQuery("");
      clearTimeout(timout)
    })
  },[searchText,categories])
  return (
    <div className="meals__page">
        <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        />
        <Categories
        categories={categories}
        categoriesIsLoading={categoriesIsLoading}
        categoriesIsError={categoriesIsError}
        categoriesError={categoriesError}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setQuery={setQuery}
        />
        <div className="meals_container">
        {isLoading || categoriesIsLoading ? (
          <div className="a">
            <Button type="primary" size="small" loading
            style={{margin:"0px auto",display:"inline-block"}}
            >
          Loading
        </Button>
          </div>
        ): null }
        {!isLoading && !isError && data && data.map((meal)=>(
          <SingleMealCard meal={meal} key={meal.idMeal} />
          ))}
          {!queryIsLoading  && queryData && queryData.map((meal)=>(
          <SingleMealCard meal={meal} key={meal.idMeal} />
          ))}
        </div>
       
    </div>
  )
}

export default Index