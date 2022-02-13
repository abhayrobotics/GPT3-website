import React from 'react';
import './blog.css'

import latest_blog from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';


const Blog = () => {
  return (
    <div>
      <div className="gpt3__blog" id="blog">

        <div className="blog__heading gradient__text--small">
          <h2>A lot is happening, <br />
            We are blogging about it.</h2>
        </div>

        <div className="blog__grid">


          <div className="blog__card blog01">

            <img src={latest_blog} alt="" />
            <div className="blog__text">
              <div className="blog__date">Sep 26, 2021</div>
              <div className="heading">GPT-3 and Open  AI is the future. Let us exlore how it is?</div>
            </div>
            <div className="read-more">Read the Article</div>
          </div>

          <div className="blog__card blog02">

            <img src={blog02} alt="" />
            <div className="blog__text">
              <div className="blog__date">Sep 26, 2021</div>
              <div className="heading">GPT-3 and Open  AI is the future. Let us exlore how it is?</div>
            </div>
            <div className="read-more">Read the Article</div>
          </div>

          <div className="blog__card blog03">

            <img src={blog03} alt="" />
            <div className="blog__text">
              <div className="blog__date">Sep 26, 2021</div>
              <div className="heading">GPT-3 and Open  AI is the future. Let us exlore how it is?</div>
            </div>
            <div className="read-more">Read the Article</div>
          </div>

          <div className="blog__card blog04">

            <img src={blog04} alt="" />
            <div className="blog__text">
              <div className="blog__date">Sep 26, 2021</div>
              <div className="heading">GPT-3 and Open  AI is the future. Let us exlore how it is?</div>
            </div>
            <div className="read-more">Read the Article</div>
          </div>

          <div className="blog__card blog05">

            <img src={blog05} alt="" />
            <div className="blog__text">
              <div className="blog__date">Sep 26, 2021</div>
              <div className="heading">GPT-3 and Open  AI is the future. Let us exlore how it is?</div>
            </div>
            <div className="read-more">Read the Article</div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Blog;
