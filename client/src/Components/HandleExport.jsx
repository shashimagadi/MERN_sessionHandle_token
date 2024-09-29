// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import CreateUser from "./CreateUser";

// const Users = () => {
//   const [users, setUsers] = useState([
//     {
//       Name: "karthi",
//       Email: "karthi@gmail.com",
//       Age: "20",
//       Action: "",
//     },
//   ]);

//   const handleAddClick = () => {
//     if (childDownloadFunction) {
//       childDownloadFunction(); // Invoking the child function
//     }
//   };

//   // State to store the reference to the child download function
//   const [childDownloadFunction, setChildDownloadFunction] = useState();

//   return (
//     <>
//       <div className="table-container">
//         <table className="styled-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.Name}</td>
//                 <td>{item.Email}</td>
//                 <td>{item.Age}</td>
//                 <td>
//                   <Link to="/update" className="btn btn-success">
//                     Update
//                   </Link>
//                   <button className="action-btn">Delete </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//           <button className="btn btn-primary" onClick={handleAddClick}>
//             Add
//           </button>
//         </table>
//       </div>

//       <CreateUser setDownloadFunction={setChildDownloadFunction} />
//     </>
//   );
// };

// export default Users;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// const CreateUser = ({ setDownloadFunction }) => {
//   const [createUsers, setCreateUsers] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   const onchangeFunc = (e) => {
//     const { name, value } = e.target;
//     setCreateUsers((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("unsersss", createUsers);
//     axios
//       .post("http://localhost:3001/createUser ", createUsers)
//       .then((response) => {
//         alert("post successfully");
//       })
//       .catch((e) => {
//         alert("err in post");
//       });
//   };

//   const downloadFunction = () => {
//     alert("Download triggered");
//   };

//   // Set the download function in the parent component when CreateUser mounts
//   useEffect(() => {
//     if (setDownloadFunction) {
//       setDownloadFunction(() => downloadFunction); // Ensure it's a function
//     }
//   }, [setDownloadFunction]);
//   console.log("unsersss out side", createUsers);
//   return (
//     <div>
//       <form className="custom-form" onSubmit={handleSubmit}>
//         Create User
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={createUsers.name}
//             onChange={(e) => onchangeFunc(e)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email </label>
//           <input
//             type="email"
//             className="form-control"
//             name="email"
//             value={createUsers.email}
//             onChange={(e) => onchangeFunc(e)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Age</label>
//           <input
//             type="text"
//             className="form-control"
//             name="age"
//             value={createUsers.age}
//             onChange={(e) => onchangeFunc(e)}
//           />
//         </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//           />
//           <label className="form-check-label" htmlFor="exampleCheck1">
//             Check me out
//           </label>
//         </div>
//         <button type="submit" className="btn btn-primary custom-btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

//  export default CreateUser;
