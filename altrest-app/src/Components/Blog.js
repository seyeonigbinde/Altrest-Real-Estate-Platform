import React from 'react';
import {Link} from 'react-router-dom';
import altrest from '../image/altrest.png'

const Blog = ()=> {

    
    return(
        <div>
            <div className="blogimg">
                <p className="blog_caption">Blog</p>
            </div>
            <Link className="blog_container">
            <div className="blog_content">
                <h1 className="blog_title">The Story Title</h1>
                <p className="blog_preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio nibh, molestie ut sem non, fermentum imperdiet nisl. Duis ut metus ipsum. Etiam ac placerat tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse auctor sollicitudin metus venenatis semper. Quisque elementum tortor ut metus sodales, vitae pellentesque enim accumsan. Praesent efficitur lorem et elementum varius.  </p>
                <p className="blog_footer">date</p>
            </div>
            <div>
                <img src={altrest} alt="" className="blog_image"/>
            </div>
            </Link>
            <Link className="blog_container">
            <div className="blog_content">
                <h1 className="blog_title">The Story Title</h1>
                <p className="blog_preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio nibh, molestie ut sem non, fermentum imperdiet nisl. Duis ut metus ipsum. Etiam ac placerat tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse auctor sollicitudin metus venenatis semper. Quisque elementum tortor ut metus sodales, vitae pellentesque enim accumsan. Praesent efficitur lorem et elementum varius.  </p>
                <p className="blog_footer">Date</p>
            </div>
            <div>
                <img src={altrest} alt="" className="blog_image"/>
            </div>
            </Link>
        </div>
    )
}

export default Blog;