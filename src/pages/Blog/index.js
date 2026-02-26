import React from 'react'

import './Blog.css'
import BLogImg from '../../assets/Images/Blog_hero.png'
import BlogCard from './BlogCard'
import Blog1 from '../../assets/Images/Blog1.png'
import Footer from '../../components/Footer/index.js'
const Blog = ({ title = 'ISO Knowledge Hub', description = 'Expert insights, best practices, and latest updates on ISO certification and quality management'}) => {
  return (
    <div>
      <section className='blog-featured'>
        <div className='blog-image'>
          <img src={BLogImg} alt='Blog cover' />
          <div className='overlay'></div>
        </div>
        <div className='blog-content'>
          <h1 className='blog-title'>{title}</h1>
          <p className='blog-description'>
            {description}
          </p>
        </div>
      </section>
      <section className='featured-section'>
        <div className='section-label-wrapper'>
          <div className='section-label'>
            <span className='dot'></span>
            <span className='label-text'>Featured Article</span>
          </div>
        </div>
        <div className='featured-card'>
          <div className='featured-image'>
            <span className='badge'>ISO</span>
            <img src={Blog1} alt='ISO Article' />
          </div>
          <div className='featured-content'>
            <div className='card1'>
              <div className='meta'>
                <div className='meta-item'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 64 64'
                    fill='none'>
                    <rect
                      x='12'
                      y='18'
                      width='40'
                      height='34'
                      rx='6'
                      stroke='#0E7490'
                      strokeWidth='3' />
                    <line
                      x1='12'
                      y1='26'
                      x2='52'
                      y2='26'
                      stroke='#0E7490'
                      strokeWidth='3' />
                    <line
                      x1='22'
                      y1='12'
                      x2='22'
                      y2='22'
                      stroke='#0E7490'
                      strokeWidth='3'
                      strokeLinecap='round' />
                    <line
                      x1='42'
                      y1='12'
                      x2='42'
                      y2='22'
                      stroke='#0E7490'
                      strokeWidth='3'
                      strokeLinecap='round' />
                  </svg>
                  <span>January 25, 2026</span>
                </div>
                <div className='meta-item'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 64 64'
                    fill='none'>
                    <circle
                      cx='32'
                      cy='22'
                      r='8'
                      stroke='#0E7490'
                      strokeWidth='3' />
                    <path
                      d='M16 48C16 40 22 36 32 36C42 36 48 40 48 48'
                      stroke='#0E7490'
                      strokeWidth='3'
                      strokeLinecap='round' />
                  </svg>
                  <span>Omkar Consultancy Team</span>
                </div>
              </div>
              <h2 className='featured-title'>10 Key Benefits of ISO 9001:2015 Certification</h2>
              <p className='featured-description'>
                Discover how ISO 9001:2015 certification can transform your organization and boost customer satisfaction.
              </p>
              <a href='#' className='read-link'>Read Full Article →</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <BlogCard/>
      </section>
      <Footer/>
    </div>

  )
}

export default Blog
