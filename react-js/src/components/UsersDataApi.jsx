import React, {useEffect, useState, useRef}  from "react";


var pagenum = 1;

const UseEffectAPI = () => {
    const inputref = useRef(null);
    const [users, setUser] = useState([]);
    const [page, setpage] = useState([1]);
    const [limit, setlimit] = useState([1]);
        useEffect(() => {
         getUsers();   
        },[pagenum]);
        useEffect(() => {
            handleLimit()
        },[limit]);
        const handleLimit = () => {
            console.log(limit);
            console.log('inputref.current.value',inputref.current.value);
            setlimit(inputref.current.value);
            console.log(limit);
        }
        const prevpage = () => {
            if (pagenum != 1 ) {
                pagenum--;
                setpage(pagenum);
                console.log(pagenum);
            }
        }
        const nextpage = () => {
            if (pagenum != 5 ) {
                pagenum++;
                setpage(pagenum);
                console.log(pagenum);
            }
        }
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/?_limit='+limit+'&_page='+pagenum);
        
        setUser(await response.json());
        // console.log(response.json());
    }



    return(
        <>
        <h1> List of All users</h1>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">First</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>{
    users.map((item, i) => {
        // console.log(item);
        return(
        <tr>
        <th scope="row">{item.id}</th>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>a</td>
        </tr>
        );
    }
    )
    }

  </tbody>
</table>
    <button onClick={prevpage} id="prev">prev record</button>
    <p>{page} page number</p>
    <input type="text" id="limit" onChange={handleLimit} name="limit" ref={inputref} />
    <button onClick={handleLimit}  id="limitbutton" >click me!</button>
    <button onClick={nextpage} id="next">next record</button>
        </>
    );
}

export default UseEffectAPI