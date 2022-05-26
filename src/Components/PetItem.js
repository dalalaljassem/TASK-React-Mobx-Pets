import  {useState} from "react";

function PetItem({ data , handle }) {

  const [photo, setPhoto] = useState(data.image);


  return (
    
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={data.name} src={photo}/>
        <div className="content">
          <h3>{data.name}</h3>
          <button type="button" onClick={() => setPhoto(data.image2)} className="btn btn-info">
            Pet
          </button>
          <button type="button" onClick={() => handle(data.id)} class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
