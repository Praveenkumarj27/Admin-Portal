import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Userview() {
  let { userId } = useParams();
  const [searchParams, setSearchparams] = useSearchParams();
  let [viewdata, setViewdata] = useState([]);

  async function getData() {
    try {
      let data = await fetch(
        `https://628f2b780e69410599d693ab.mockapi.io/users/${userId}`
      );
      let user = await data.json();
      console.log(user);
      setViewdata(user);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
       <h3>Name : {viewdata.name}</h3>
      <h3>Position : {viewdata.position}</h3>
      <h3>Office: {viewdata.office}</h3>
      <h3>Age : {viewdata.age}</h3>
      <h3>Start date : {viewdata.startDate}</h3>
      <h3>Salary : {viewdata.salary}</h3>
    </div>
  )
}

export default Userview