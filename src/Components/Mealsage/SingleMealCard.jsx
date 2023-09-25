
import { Image } from 'antd';
import './SingleMealCard.module.scss';
import { Link } from 'react-router-dom';

function SingleMealCard({meal}) {
  return (
    <Link
    to={`/meals/${meal.idMeal}`}
    >
    <a className="item">
      <Image src={meal.strMealThumb} height="200" width="300" preview={false} />
      <p className="Title_title" 
      style={{textAlign:"center"}}
      >{meal.strMeal}</p>
    </a>
    </Link>
  );
}

export default SingleMealCard;