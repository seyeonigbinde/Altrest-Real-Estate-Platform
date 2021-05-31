import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import axios from 'axios';
import * as yup from 'yup';

import aboutus_image_1 from '../image/aboutus_image_1.jpeg';
import blogSchema from '../Utils/blogSchema';
import { axiosWithAuth} from '../Utils/axiosWithAuth'

const initialBlogValues = {
    title: '',
    preview: '',
    image: '',
    story: '',
  }
  
  const initialBlogErrors = {
    title: '',
    preview: '',
    image: '',
    story: '',
  }

const AddBlog = ()=> {

    const { push } = useHistory();
	const { id } = useParams();

	const [blog, setBlog] = useState(initialBlogValues);
    const [blogErrors, setBlogErrors] = useState(initialBlogErrors);
    const [seeProfile, setSeeProfile] = useState(false);
	
	useEffect(()=>{
        axios.post(`http://localhost:5000/api/movies/${id}`)
            .then(res=>{
                setBlog(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    }, [id]);

	const handleChange = (e) => {
        yup.reach(blogSchema, e.target.name)
        .validate(e.target.value)
        .then( () => {
          setBlogErrors({ ...blogErrors, [e.target.name]: '' })
        })
        .catch( err => {
          setBlogErrors({ ...blogErrors, [e.target.name]: err.errors[0] })
        })
        
      setBlog({
        ...blog,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = (e) => {
		e.preventDefault();
    	axios.post(`http://localhost:5000/api/movies`, blog)
      .then(res=>{
       setBlog(res.data);
       console.log(res.data)
        push(`/movies`);
      })
      .catch(err=>{
        console.log(err);
      })
	}

    const toggleProfile = e => {
		e.preventDefault();
		setSeeProfile(!seeProfile);
	  };
    const signOut = () => {
        axiosWithAuth().post('/logout')
        .then(res=> {
          localStorage.removeItem("token");
          window.location.href = "/";
        })
        .catch(err=> {
          console.log(err);
        })
      };
    return(
       
        <div className="container-sm">
            <div>
            </div>
            <div class="row">
                <div class="col-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group form-label mt-3">
                            <label > Title</label>
                            <input type="text" className="form-control" onChange={handleChange} value={blog.title} name="title" placeholder="Title"/>
                        </div>
                        <p className='errors'>{blogErrors.title}</p>
                        <div className="mb-3">
                            <label className="form-label">Story Preview</label>
                            <textarea className="form-control"  onChange={handleChange} value={blog.preview} name="preview" rows="3" placeholder="Story Preview"></textarea>
                        </div>
                        <p className='errors'>{blogErrors.preview}</p>
                        <div class="mb-3">
                            <label for="formFile" className="form-label">Add Story Image</label>
                            <input className="form-control" type="file" onChange={handleChange} value={blog.image} name="image"  id="formFile"/>
                        </div> 
                        <p className='errors'>{blogErrors.image}</p>
                        <div className="mb-3">
                            <label className="form-label">Add your story</label>
                            <textarea className="form-control" onChange={handleChange} value={blog.story} name="story"  rows="15"></textarea>
                        </div>
                        <p className='errors'>{blogErrors.story}</p>
                        <div className="form-group form-label mt-3">
                            <label > Tags</label>
                            <input type="text" className="form-control" placeholder="Add Tags"/>
                        </div>
                        <button type="button" className="btn btn-primary">Publish</button>
                        <Link to={`/home/`}><button type="button" className="btn btn-secondary ms-3">Cancel</button></Link>
                    </form>
                </div>
                <div class="col-4">
                    <p>
                    <button class="btn btn-primary" type="button"  onClick={toggleProfile}>View Profile </button>
                    </p>
                    { seeProfile && 
                  <div class="list-group list-group-flush ">
                  <a href="#" class="list-group-item-sm list-group-item-action-sm p-3">My Profile</a>
                  <a href="#" class="list-group-item-sm list-group-item-action-sm p-3">My Stories</a>
                  <a href="#" class="list-group-item-sm list-group-item-action-sm p-3">Link</a>
                  <a href="#" class="list-group-item-sm list-group-item-action-sm p-3">Link</a>
                  <a href="#" class="list-group-item-sm list-group-item-action-sm p-3">Sign Out</a>
                </div>
                    }
                </div>
            </div>
           </div>

    
    )
}

export default AddBlog;