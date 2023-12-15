import React, {useState, useEffect} from "react";

const UserProfile = () => {
  const[data, setData]=useState({
    Username: "",
    Email:"",
    Points:null,
    AchievementName: "",
    AchieveDesc:""
  });


  const getData= async()=>{
    try{
    const resp= await fetch('');
    const data = await resp.json();
  //Update state
  setData({
  Username: data.username,
  email: data.email,
  Points: data.Points,
  AchievementName: data.AchievementName,
  AchieveDesc:data.AchieveDesc,
});
}catch(error){
  console.error("Error occured: ",error)
}
};

useEffect(()=>{
  getData();
},[]);

  return (
    <div>
    <h1>User Profile Screen</h1>
    <div className="profile-info-box">
      <div className="info-row">
        <div className="info-item">
          <p>Name:</p>
          <p>{data.Username}</p>
        </div>
      </div>
      <div className="info-row">
        <div className="info-item">
          <p>Email:</p>
          <p>{data.email}</p>
        </div>
      </div>
      <div className="info-row">
        <div className="info-item">
          <p>Points:</p>
          <p>{data.Points}</p>
        </div>
      </div>
      <div className="info-row">
        <div className="info-item">
          <p>Achievement:</p>
          <p>{data.AchievementName}</p>
        </div>
      </div>
      <div className="info-row">
        <div className="info-item">
          <p>Achievement Description:</p>
          <p>{data.AchieveDesc}</p>
        </div>
      </div>
    </div>
  </div>
    );
};

export default UserProfile;
