import React, { useState } from 'react'
import './BlogCard.css'
import Blog1 from '../../../assets/Images/Blog-img_1.png'
import Blog2 from '../../../assets/Images/Blog-img2.png'
import Blog3 from '../../../assets/Images/Blog-img-3.png'
import Blog4 from '../../../assets/Images/Blog-img-4.png'
import Blog5 from '../../../assets/Images/Blog-img-5.png'

const BlogCards = () => {
  const [expandedId, setExpandedId] = useState(null)

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const blogData = [
    {
      id: 1,
      image: Blog1,
      tag: 'Compliance',
      date: 'Jan 20, 2026',
      author: 'Environmental Expert',
      title: 'Environmental Compliance: A Complete Guide to ISO 14001',
      description: 'Learn about environmental regulations and how ISO 14001 helps ensure compliance while reducing environmental impact.'
    },
    {
      id: 2,
      image: Blog2,
      tag: 'Training',
      date: 'Jan 15, 2026',
      author: 'Safety Consultant',
      title: '5 Essential Workplace Safety Tips for 2026',
      description: 'Practical tips to improve workplace safety and reduce accidents in your organization using ISO 45001 principles.'
    },
    {
      id: 3,
      image: Blog3,
      tag: 'ISO',
      date: 'Jan 10, 2026',
      author: 'Certification Expert',
      title: 'Step-by-Step Guide to ISO Certification Process',
      description: 'A comprehensive guide to understanding the ISO certification journey from gap analysis to final audit.'
    },
    {
      id: 4,
      image: Blog4,
      tag: 'Training',
      date: 'Jan 5, 2026',
      author: 'Lead Auditor',
      title: 'Internal Audit Best Practices for ISO Standards',
      description: 'Master the art of conducting effective internal audits with these proven techniques and strategies.'
    },
    {
      id: 5,
      image: Blog5,
      tag: 'Updates',
      date: 'Jan 1, 2026',
      author: 'Quality Manager',
      title: 'Quality Management Trends in 2026',
      description: 'Explore the latest trends shaping quality management and how they impact ISO 9001 implementation.'
    }
  ]

  return (
    <section className='blog-section'>
      <div className='blog-grid'>
        {blogData.map((item) => {
                                   const isExpanded = expandedId === item.id
                         
                                   return (
                                     <div className="iso-card" key={item.id}>
                                       <div className="iso-card-image">
                                         <img src={item.image} alt={item.title} />
                                         <span className="iso-tag">{item.tag}</span>
                                       </div>
                         
                                       <div className="iso-card-body">
                                         <div className="iso-meta">
                                           <span>{item.date}</span>
                                           <span>{item.author}</span>
                                         </div>
                         
                                         <h3 className="iso-title">{item.title}</h3>
                         
                                         <p
                                           className={`iso-description ${isExpanded ? "expanded" : ""}`}
                                         >
                                           {item.description}
                                         </p>
                         
                                         <button
                                           className="iso-readmore"
                                           onClick={() => toggleDescription(item.id)}
                                         >
                                           {isExpanded ? "Show Less" : "Learn More "}
                                           <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="16"
                                             height="16"
                                             viewBox="0 0 16 16"
                                             fill="none"
                                           >
                                             <path
                                               d="M3.33301 8H12.6663"
                                               stroke="#0B82AD"
                                               stroke-width="1.33333"
                                               stroke-linecap="round"
                                               stroke-linejoin="round"
                                             />
                                             <path
                                               d="M8 3.33334L12.6667 8.00001L8 12.6667"
                                               stroke="#0B82AD"
                                               stroke-width="1.33333"
                                               stroke-linecap="round"
                                               stroke-linejoin="round"
                                             />
                                           </svg>
                                         </button>
                                       </div>
                                     </div>
                                   )
                                 })}
      </div>
    </section>
  )
}

export default BlogCards
