import React,{useState, useEffect} from "react";
import axios from 'axios';
import PaginationTabularDisplay from "./component/PaginationTabularDisplay";

const App = () => {

  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      try{
        const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        setData(response.data);
      }catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[data]);

  return (
    <React.Fragment>
      <PaginationTabularDisplay data={data}/>
    </React.Fragment>
  );
}

export default App;
