// import React, { useState } from 'react'

// const AddPost = ({addPost}) => {
//     const [username, setUsername] = useState('');
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [imagesource, setImagesource] = useState('');

//     return (
//         <form onSubmit={e => {
//             addPost(e, username, title, description, imagesource);
//             setUsername("");
//             setTitle("");
//             setDescription("");
//             setImagesource("");
//         }}>
//             <input
//                 type="text"
//                 placeholder='username'
//                 value={username}
//                 onChange={({ target: { value } }) => setUsername(value)} />
//             <input
//                 type="text"
//                 placeholder='title'
//                 value={title}
//                 onChange={({ target: { value } }) => setTitle(value)} />
//             <input
//                 type="text"
//                 placeholder='description'
//                 value={description}
//                 onChange={({ target: { value } }) => setDescription(value)} />
//             <input
//                 type="text"
//                 placeholder='imagesource'
//                 value={imagesource}
//                 onChange={({ target: { value } }) => setImagesource(value)} />
//             <input  type="submit" value="Add Post" />
//         </form>
//     )
// }

// export default AddPost