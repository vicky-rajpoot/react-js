import React, {useEffect, useState}  from "react";


var pagenum = 1;

const UseEffectAPI = () => {
    const [users, setUser] = useState([]);
    const [page, setpage] = useState([1]);
        useEffect(() => {
         getUsers();   
        },[pagenum]);
        const prevpage = () => {
            if (pagenum != 1 ) {
                pagenum--;
                setpage(pagenum);
                console.log(pagenum);
            }
        }
        const nextpage = () => {
            if (pagenum != 10 ) {
                pagenum++;
                setpage(pagenum);
                console.log(pagenum);
            }
        }
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/'+pagenum);
        
        setUser(await response.json());
        console.log(response.json());
    }



    return(
        <>
        <h1> List of All users</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">First</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {    
        <tr>
        <th scope="row">{users.id}</th>
        <td>{users.name}</td>
        <td>{users.username}</td>
        <td>{users.email}</td>
        </tr>
        
    }
    <div>
    <button onClick={prevpage}>prev record</button>
    <p>{page} page number</p>
    <button onClick={nextpage}>next record</button>
    </div>
  </tbody>
</table>
        </>
    );
}

export default UseEffectAPI