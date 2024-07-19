import { useState } from "react";
import { createPost } from "../services/api";
import {useNavigate} from 'react-router-dom';

const CreatePost = ({ onPostCreated }) => {
    const [userId, setUserId] = useState();
    const [title, setTitle] = useState("");
    const [body, setBody]  = useState("");
    const navigate = useNavigate();

    const handleOnchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === 'userId'){
            setUserId(value);
        }
        else if(name === 'title'){
            setTitle(value);
        }
        else {
            setBody(value);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({ title, body }).then(post => {
          onPostCreated(post);
            navigate('/');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <lable for="userId">User Id : </lable>
            <input type="number" id="userId" name="userId" value={userId} onChange={handleOnchange}/><br />
            <label for="title">Title : </label>
            <input type="text" id="title" name="title" value={title} onChange={handleOnchange} /><br />
            <label for="body">Body : </label>
            <textarea type="text" id="body" name="body" value={body} onChange={handleOnchange} /><br />
            <button type="submit">Create Post</button>
        
        </form>
    )
}

export default CreatePost;