
import "./custom.css"
function Card(props){


return(

    <>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={props.src}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.temperature}</h2>
    <p>{props.city} , {props.country}</p>
    <p>{props.time}</p>
    <p>{props.date}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>



</>


)

}



export default Card