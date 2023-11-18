// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Post from '../Post';
// import AddPost from '../AddPost';
// import { v4 } from 'uuid';

// const _url = 'http://localhost:3000/posts/';

// const PostDashBoard = () => {
//     const [posts, setPosts] = useState([]);

//     const getAllData = () => {
//         axios.get(_url).then(({ data }) => {
//             setPosts(data);
//         });
//     };

//     useEffect(() => {
//         getAllData()
//     }, []);

//     const addPost = (e, username, title, description, imagesource) => {
//         e.preventDefault();
//         let newPost = {
//             id: v4(),
//             username,
//             title,
//             description,
//             imagesource
//         };
//         axios.post(_url, newPost).then(({ statusText }) => {
//             if (statusText === "Created") {
//                 alert("Post successfully added");
//                 getAllData();
//             }
//         });
//     };

//     const deletePost = (id) => {
//         let isAgree = confirm("Do you want to delete this post?");
//         if (isAgree) {
//             axios.delete(_url + id).then(({ statusText }) => {
//                 if (statusText === "OK") {
//                     alert("The deletion was successful");
//                     getAllData();
//                 }
//             });
//         } else {
//             alert("Cancelled");
//         }
//     };

//     const editPost = ({ id, username, title, description, imageSource }) => {
//         const {
//             id: _id,
//             username: _username,
//             title: _title,
//             description: _description,
//             imageSource: _imagesource,
//         } = posts.find(({ id: _id }) => _id == id);

//         const newUsername = prompt("New user name", _username);
//         const newTitle = prompt("Add new title", _title);
//         const newDescription = prompt("Add new description", _description);
//         const newImageSource = prompt("Add new image source", _imagesource);

//         const editedPost ={
//             username: newUsername,
//             title: newTitle,
//             description: newDescription,
//             imagesource: newImageSource
//         };
//         axios.put(_url + _id, editedPost).then(({ statusText }) => {
//             if (statusText === "OK") {
//                 alert("Changed successfully");
//                 getAllData();
//             }
//         });
//     };

//     return (
//         <>
//             <AddPost
//                 addPost={addPost} />
//             <hr />
//             <div className='posts'>
//                 {
//                     posts.map((post) => {
//                         return (
//                             <Post
//                                 key={post.id}
//                                 post={post}
//                                 deletePost={deletePost}
//                                 editPost={editPost}
//                             />
//                         );
//                     })
//                 }
//             </div>
//         </>
//     );
// };

// export default PostDashBoard;