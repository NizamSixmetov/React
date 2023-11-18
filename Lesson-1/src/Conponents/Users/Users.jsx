// const data = [
//     {
//         id: "1",
//         username: "Nizam",
//         title: "Mokoko"
//     },
//     {
//         id: "2",
//         username: "Idris",
//         title: "Lorem ipsum dsad frfs"
//     },
//     {
//         id: "3",
//         username: "Nurlan",
//         title: "sadasd sfadsf sdfsd"
//     },
//     {
//         id: "4",
//         username: "Samil",
//         title: "Csdfsdfsdf w fdsfsdf "
//     },
//     {
//         id: "5",
//         username: "Neman",
//         title: "sdasuhdkasbdkas asdas"
//     },
//     {
//         id: "6",
//         username: "Adil",
//         title: "asdasdpi dednas"
//     },
//     {
//         id: "7",
//         username: "Anar",
//         title: "asdkjh iiahsd"
//     },
//     {
//         id: "8",
//         username: "Punhan",
//         title: "Hebulu hebilu nubulu"
//     }
// ]

// import { Fragment, useState } from "react";

// function HelloMyFriend() {
//     return (
//         <>
//             data.map((data))
//         </>
//     )
// }
// // export default HelloMyFriend;

// const Users = () => {
//     const data = [
//         {
//             id: "1",
//             username: "Nizam",
//             title: "Mokoko"
//         },
//         {
//             id: "2",
//             username: "Idris",
//             title: "Lorem ipsum dsad frfs"
//         },
//         {
//             id: "3",
//             username: "Nurlan",
//             title: "sadasd sfadsf sdfsd"
//         },
//         {
//             id: "4",
//             username: "Samil",
//             title: "Csdfsdfsdf w fdsfsdf "
//         },
//         {
//             id: "5",
//             username: "Neman",
//             title: "sdasuhdkasbdkas asdas"
//         },
//         {
//             id: "6",
//             username: "Adil",
//             title: "asdasdpi dednas"
//         },
//         {
//             id: "7",
//             username: "Anar",
//             title: "asdkjh iiahsd"
//         },
//         {
//             id: "8",
//             username: "Punhan",
//             title: "Hebulu hebilu nubulu"
//         }
//     ];
//     return (
//         <>

//         </>
//     )
// }
// // export default Users;

// const Mode= ()=>{
//     const [showTheme, setShowTheme] = useState(false);
//     const changeTheme = ()=>{
//         setShowTheme(!showTheme)
//     }
//     return(
//         <>
//         <div className={showTheme == false ? "darkMode" : "lightMode"}>
//         <button className="btn" onClick={()=> changeTheme()}>
//             {`${showTheme  ? "Dark" : "Light"} theme`}
//         </button>
//         </div>
//         </>
//     )
// }
// // export default Mode;

// const Mode1 = () => {
//     const [showInput, setShowInput] = useState("")
//     return (
//         <>
//             <div>
//                 <input type="text" onChange = {e => setShowInput(e.target.value)} />
//                 <p>{showInput}</p>
//             </div>
//         </>
//     )
// }
// // export default Mode;
// import Users from './Css/Users.css'