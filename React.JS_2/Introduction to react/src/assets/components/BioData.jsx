
const BioData = (obj) =>{
 return(
    <div>
      <div className="Abu Rayhan">
    <h6>Name : {obj.name}</h6>
    <h6>Profession : {obj.profession}</h6>
    <h6>Address:{obj.address}</h6>
    <h6>Age : {obj.age}</h6>
  </div>

<div className="skills">
<h6>My Skills : </h6>
<ul>
    {obj?.skills?.map((skill)=>(
        <li key={skill}>{skill}</li>
    ))}
</ul>
</div>
    </div>
 );
};

export default BioData;