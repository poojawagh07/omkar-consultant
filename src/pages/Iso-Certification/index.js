import './Iso-Certification.css'
import iso1 from '../../assets/Images/Iso_certification1.png'
import iso2 from '../../assets/Images/Iso-2.jpg'
import Footer from '../../components/Footer/index.js'
const IsoCertification = () => {
  return (
    <div>
      <section className='iso-hero-section'>
        <div className='iso-hero-container'>
          <div className='iso-hero-content'>
            <span className='iso-hero-badge'>Quality Management System</span>
            <h1 className='iso-hero-title'>ISO 9001:2015 <span className='iso-hero-highlight'>Certification</span></h1>
            <p className='iso-hero-description'>
              Achieve excellence in quality management with expert guidance for ISO 9001:2015 certification. Recognized globally across manufacturing and service industries.
            </p>
            <div className='iso-hero-buttons'>
              <button className='iso-hero-btn-primary'>
                Get Started
              </button>
              <button className='iso-hero-btn-outline'>
                Learn More
              </button>
            </div>
          </div>
          <div className='iso-hero-image-wrapper'>
            <img src={iso1} alt='ISO Certification' className='iso-hero-image' />
          </div>
        </div>
      </section>
      <section className='iso-about-main'>
        <div className='iso-about-wrapper'>
          <div className='iso-about-left'>
            <img src={iso2} alt='ISO Office' />
          </div>
          <div className='iso-about-right'>
            <span className='iso-about-tag'>About ISO 9001:2015</span>
            <h2 className='iso-about-title'>Why ISO 9001:2015 Matters</h2>
            <p className='iso-about-desc'>
              ISO 9001:2015 is one of the most widely recognized Quality Management System (QMS) standards in the world. It is a generic standard, which means it can be adopted
              by any organization— whether in manufacturing or the services sector.
              <br></br>
              The strength of ISO 9001 lies in its flexibility and acceptance across different industries. Over the years, this standard has matured through multiple revisions
              and continues to uphold strong management principles.
            </p>
            {/* FEATURES */}
            <h3 className='iso-about-subtitle'>Key Features of the ISO 9001:2015</h3>
            <div className='iso-feature-grid'>
              <div className='iso-feature-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='26'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Context of the Organization
              </div>
              <div className='iso-feature-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Understanding Needs and Expectations of Interested Parties
              </div>
              <div className='iso-feature-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Leadership & Commitment
              </div>
              <div className='iso-feature-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Planning and Change Management
              </div>
              <div className='iso-feature-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Risk-Based Thinking
              </div>
              <div className='iso-feature-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Organizational Knowledge
              </div>
              <div className='iso-feature-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Performance Evaluation
              </div>
              <div className='iso-feature-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Continual Improvement
              </div>
            </div>
            <div className='iso-why-card'>
              <h4>Why Choose Omkar Consultants?</h4>
              <div className='iso-why-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Expert guidance from certified ISO professionals
              </div>
              <div className='iso-why-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Tailored solutions for manufacturing and service industries
              </div>
              <div className='iso-why-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} End-to-end support for documentation, audits, and certifications
              </div>
              <div className='iso-why-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <g clip-path='url(#clip0_94_400)'>
                    <path
                      d='M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                    <path
                      d='M7.5 10L9.16667 11.6667L12.5 8.33334'
                      stroke='#0B82AD'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round' />
                  </g>
                  <defs>
                    <clipPath id='clip0_94_400'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                {" "} Strong presence in Mumbai and Pune
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='iso-process-section'>
        <div className='iso-process-container'>
          <div className='iso-process-header'>
            <h2 className='iso-process-title'>Our Certification Process</h2>
            <p className='iso-process-desc'>
              A streamlined approach to help you achieve ISO 9001:2015 certification efficiently
            </p>
          </div>
          <div className='iso-process-grid'>
            <div className='iso-process-card'>
              <div className='iso-process-number'>
                1
              </div>
              <div className='iso-process-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'>
                  <path
                    d='M18.666 2.66669V8.00002C18.666 8.70726 18.947 9.38554 19.4471 9.88564C19.9472 10.3857 20.6254 10.6667 21.3327 10.6667H26.666'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                  <path
                    d='M5.69132 28C5.92479 28.4044 6.26037 28.7404 6.66447 28.9744C7.06857 29.2084 7.52703 29.3322 7.99398 29.3334H24.0007C24.7079 29.3334 25.3862 29.0524 25.8863 28.5523C26.3864 28.0522 26.6673 27.3739 26.6673 26.6667V9.33335L20.0007 2.66669H8.00065C7.29341 2.66669 6.61513 2.94764 6.11503 3.44774C5.61494 3.94783 5.33398 4.62611 5.33398 5.33335V9.33335'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                  <path
                    d='M12 24L10 22'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                  <path
                    d='M6.66602 22.6667C8.87515 22.6667 10.666 20.8758 10.666 18.6667C10.666 16.4575 8.87515 14.6667 6.66602 14.6667C4.45688 14.6667 2.66602 16.4575 2.66602 18.6667C2.66602 20.8758 4.45688 22.6667 6.66602 22.6667Z'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                </svg>
              </div>
              <h3>Gap Analysis</h3>
              <p>
                We assess your current processes and identify areas for improvement to meet ISO standards
              </p>
            </div>
            <div className='iso-process-card'>
              <div className='iso-process-number'>
                2
              </div>
              <div className='iso-process-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'>
                  <path
                    d='M21.3327 28V25.3333C21.3327 23.9188 20.7708 22.5623 19.7706 21.5621C18.7704 20.5619 17.4138 20 15.9993 20H7.99935C6.58486 20 5.22831 20.5619 4.22811 21.5621C3.22792 22.5623 2.66602 23.9188 2.66602 25.3333V28'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                  <path
                    d='M11.9993 14.6667C14.9449 14.6667 17.3327 12.2789 17.3327 9.33333C17.3327 6.38781 14.9449 4 11.9993 4C9.05383 4 6.66602 6.38781 6.66602 9.33333C6.66602 12.2789 9.05383 14.6667 11.9993 14.6667Z'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                  <path
                    d='M29.334 28V25.3333C29.3331 24.1516 28.9398 23.0037 28.2158 22.0698C27.4918 21.1358 26.4782 20.4688 25.334 20.1733'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                  <path
                    d='M21.334 4.17334C22.4812 4.46707 23.498 5.13427 24.2242 6.06975C24.9503 7.00523 25.3444 8.15578 25.3444 9.34001C25.3444 10.5242 24.9503 11.6748 24.2242 12.6103C23.498 13.5457 22.4812 14.2129 21.334 14.5067'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                </svg>
              </div>
              <h3>Documentation & Training</h3>
              <p>
                Complete support in creating necessary documentation and training your team
              </p>
            </div>
            <div className='iso-process-card'>
              <div className='iso-process-number'>
                3
              </div>
              <div className='iso-process-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'>
                  <path
                    d='M28 14V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H23.3333'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                  <path
                    d='M12 14.6666L16 18.6666L29.3333 5.33331'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                </svg>
              </div>
              <h3>Implementation</h3>
              <p>
                Guided implementation of quality management system aligned with ISO 9001:2015
              </p>
            </div>
            <div className='iso-process-card'>
              <div className='iso-process-number'>
                4
              </div>
              <div className='iso-process-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'>
                  <path
                    d='M20.6357 17.1866L22.6557 28.5546C22.6783 28.6885 22.6595 28.8261 22.6018 28.949C22.5442 29.0719 22.4503 29.1742 22.3329 29.2424C22.2155 29.3105 22.0801 29.3412 21.9447 29.3303C21.8094 29.3193 21.6807 29.2674 21.5757 29.1813L16.8023 25.5986C16.5719 25.4265 16.292 25.3335 16.0043 25.3335C15.7167 25.3335 15.4368 25.4265 15.2063 25.5986L10.425 29.18C10.3201 29.2659 10.1915 29.3178 10.0563 29.3287C9.92117 29.3396 9.7859 29.3091 9.66855 29.2411C9.55121 29.1732 9.45737 29.0711 9.39956 28.9484C9.34175 28.8258 9.32272 28.6884 9.345 28.5546L11.3637 17.1866'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                  <path
                    d='M16 18.6667C20.4183 18.6667 24 15.085 24 10.6667C24 6.24841 20.4183 2.66669 16 2.66669C11.5817 2.66669 8 6.24841 8 10.6667C8 15.085 11.5817 18.6667 16 18.6667Z'
                    stroke='white'
                    stroke-width='2.66667'
                    stroke-linecap='round'
                    stroke-linejoin='round' />
                </svg>
              </div>
              <h3>Certification</h3>
              <p>
                Support through the audit process to achieve successful certification
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
export default IsoCertification
