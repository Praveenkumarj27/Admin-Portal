import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function User() {
  const[users,setUsers]=useState([])
  //On Mount
  useEffect(() => {
    fetchData()
  }, []);

  let fetchData = async () => {
    let userData=await axios.get("https://628f2b780e69410599d693ab.mockapi.io/users");
    console.log(userData);
    setUsers(userData.data)
  }

  let handleDelete=async(id)=>{
    let ask=window.confirm("Do you want to delete")
    if(ask){
      await axios.delete(`https://628f2b780e69410599d693ab.mockapi.io/users/${id}`)
      fetchData()
    }
  }

  // // On Destroy
  // useEffect(()=>{
  //   return()=>{
  //   console.log("On Destroy");
  //   }
  // },[])

  // // On Update

  // const [val,setval]=useState(0);
  //  useEffect(()=>{
  //   // this will execute only when val is changed
  //   console.log("this will execute only when val is changed");
  //  },[val])
   
  return (
    <>
    {/* <button onClick={()=>setval(val+1)}>Click</button>
    {val} */}
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Tables</h1>
        <p class="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <Link
            to="/users/create"
            class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i class="fas fa-download fa-sm text-white-50"></i> Create user
          </Link>
        </div>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.office}</td>
                        <td>{user.age}</td>
                        <td>{user.startDate}</td>
                        <td>{user.salary}</td>
                        <td>
                          <Link to={`/users/view/${user.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                          <Link to={`/users/edit/${user.id}`} className="btn btn-sm btn-info mr-2">Edit</Link>
                          <button onClick={()=>handleDelete(user.id)} className="btn btn-sm btn-danger mr-2">Delete</button>
                        </td>
                      </tr>

                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
