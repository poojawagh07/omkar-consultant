import './ContactUs.css'
import supportImg from '../../assets/Images/Contact_us-isoCerticicate.jpg'
import Footer from '..//../components/Footer/index.js'
const ContactUs = () => {
  return (
    <div>
      <section className='contact-banner'>
        <div className='contact-inner'>
          <h2>Contact Us</h2>
          <p>
            Get in touch with our ISO certification experts
          </p>
        </div>
      </section>
      <section className='iso-journey'>
        <div className='container iso-flex'>
          <div className='iso-content'>
            <h2>Let's Start Your ISO Certification Journey</h2>
            <p className='iso-text'>
              Whether you're looking for ISO certification, training programs, or consulting services, our team of experts is ready to help you achieve your quality management
              goals.
            </p>
            <p className='iso-text'>
              Reach out to us today for a free consultation and discover how we can support your organization's path to excellence.
            </p>
            <div className='business-hours'>
              <span className='clock-icon'><svg
                                             xmlns='http://www.w3.org/2000/svg'
                                             width='20'
                                             height='20'
                                             viewBox='0 0 20 20'
                                             fill='none'> <path
                                                                                                                                             d='M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z'
                                                                                                                                             stroke='#0B82AD'
                                                                                                                                             stroke-width='1.66667'
                                                                                                                                             stroke-linecap='round'
                                                                                                                                             stroke-linejoin='round'/> <path
                                                                                                                                                                                                                                                                                                                                                                                                                                                        d='M10 5V10L13.3333 11.6667'
                                                                                                                                                                                                                                                                                                                                                                                                                                                        stroke='#0B82AD'
                                                                                                                                                                                                                                                                                                                                                                                                                                                        stroke-width='1.66667'
                                                                                                                                                                                                                                                                                                                                                                                                                                                        stroke-linecap='round'
                                                                                                                                                                                                                                                                                                                                                                                                                                                        stroke-linejoin='round'/> </svg></span>
              <span className='hours-title'>Business Hours:</span>
              <span className='hours-time'>Monday - Friday, 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className='iso-image'>
            <img src={supportImg} alt='Support team' />
          </div>
        </div>
      </section>
      <section className='contact-cards-section'>
        <div className='contact-cards-container'>
          <div className='contact-card'>
            <div className='icon-circle'>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'>
                <path
                  d='M26.6663 13.3334C26.6663 19.9907 19.281 26.924 16.801 29.0654C16.57 29.2391 16.2887 29.333 15.9997 29.333C15.7106 29.333 15.4294 29.2391 15.1983 29.0654C12.7183 26.924 5.33301 19.9907 5.33301 13.3334C5.33301 10.5044 6.45681 7.79127 8.4572 5.79088C10.4576 3.79049 13.1707 2.66669 15.9997 2.66669C18.8287 2.66669 21.5418 3.79049 23.5421 5.79088C25.5425 7.79127 26.6663 10.5044 26.6663 13.3334Z'
                  stroke='#0B82AD'
                  strokeWidth='2.6'
                  strokeLinecap='round'
                  strokeLinejoin='round' />
                <path
                  d='M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33331 16 9.33331C13.7909 9.33331 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z'
                  stroke='#0B82AD'
                  strokeWidth='2.6'
                  strokeLinecap='round'
                  strokeLinejoin='round' />
              </svg>
            </div>
            <h3>Office Address</h3>
            <p>
              123 Business Center
            </p>
            <p>
              Commercial Road
            </p>
            <p>
              Mumbai - 400001, India
            </p>
          </div>
          <div className='contact-card'>
            <div className='icon-circle'>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'>
                <path
                  d='M29.3329 22.56V26.56C29.3344 26.9313 29.2584 27.2989 29.1096 27.6391C28.9608 27.9793 28.7427 28.2848 28.469 28.5358C28.1954 28.7868 27.8724 28.9779 27.5206 29.0969C27.1688 29.2159 26.7961 29.2601 26.4263 29.2266C22.3234 28.7808 18.3823 27.3788 14.9196 25.1333C11.698 23.0862 8.9667 20.3549 6.91959 17.1333C4.66622 13.6549 3.26391 9.69463 2.82625 5.5733C2.79293 5.20459 2.83675 4.83298 2.95492 4.48213C3.07309 4.13128 3.26301 3.80889 3.51261 3.53546C3.7622 3.26204 4.06599 3.04358 4.40464 2.894C4.74329 2.74441 5.10937 2.66698 5.47959 2.66663H9.47959C10.1267 2.66026 10.754 2.8894 11.2446 3.31134C11.7352 3.73328 12.0557 4.31923 12.1463 4.95997C12.3151 6.24006 12.6282 7.49694 13.0796 8.70663C13.259 9.18387 13.2978 9.70252 13.1915 10.2011C13.0851 10.6998 12.8381 11.1574 12.4796 11.52L10.7863 13.2133C12.6843 16.5514 15.4482 19.3152 18.7863 21.2133L20.4796 19.52C20.8421 19.1615 21.2998 18.9144 21.7984 18.8081C22.297 18.7018 22.8157 18.7406 23.2929 18.92C24.5026 19.3714 25.7595 19.6845 27.0396 19.8533C27.6873 19.9447 28.2788 20.2709 28.7016 20.77C29.1245 21.269 29.3491 21.9061 29.3329 22.56Z'
                  stroke='#0B82AD'
                  strokeWidth='2.6'
                  strokeLinecap='round'
                  strokeLinejoin='round' />
              </svg>
            </div>
            <h3>Phone</h3>
            <p>
              +91 98765 43210
            </p>
          </div>
          <div className='contact-card'>
            <div className='icon-circle'>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'>
                <path
                  d='M26.667 5.33331H5.33366C3.8609 5.33331 2.66699 6.52722 2.66699 7.99998V24C2.66699 25.4727 3.8609 26.6666 5.33366 26.6666H26.667C28.1397 26.6666 29.3337 25.4727 29.3337 24V7.99998C29.3337 6.52722 28.1397 5.33331 26.667 5.33331Z'
                  stroke='#0B82AD'
                  strokeWidth='2.6'
                  strokeLinecap='round'
                  strokeLinejoin='round' />
                <path
                  d='M29.3337 9.33331L17.3737 16.9333C16.962 17.1912 16.4861 17.328 16.0003 17.328C15.5146 17.328 15.0386 17.1912 14.627 16.9333L2.66699 9.33331'
                  stroke='#0B82AD'
                  strokeWidth='2.6'
                  strokeLinecap='round'
                  strokeLinejoin='round' />
              </svg>
            </div>
            <h3>Email</h3>
            <p>
              info@omkarconsultancy.com
            </p>
          </div>
        </div>
      </section>
      <section className='contact-section'>
        <div className='contact-wrapper'>
          <div className='contact-form-card'>
            <h2 className='contact-title'>Send Us a Message</h2>
            <form className='contact-form'>
              <label>
                Name *
              </label>
              <input type='text' />
              <label>
                Email *
              </label>
              <input type='email' />
              <label>
                Phone *
              </label>
              <input type='text' />
              <label>
                Subject *
              </label>
              <input type='text' />
              <label>
                Message *
              </label>
              <textarea rows='4'></textarea>
              <button type='submit' className='send-btn'>
                Send Message
              </button>
            </form>
          </div>
          <div className='contact-right'>
            <div className='hours-card'>
              <div className='hours-heading'>
                <span className='hours-icon'><svg
                                               xmlns='http://www.w3.org/2000/svg'
                                               width='24'
                                               height='24'
                                               viewBox='0 0 24 24'
                                               fill='none'> <path
                                                                                                                                               d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                                                                                                                                               stroke='#0B82AD'
                                                                                                                                               stroke-width='2'
                                                                                                                                               stroke-linecap='round'
                                                                                                                                               stroke-linejoin='round'/> <path
                                                                                                                                                                                                                                                                                                                                                              d='M12 6V12L16 14'
                                                                                                                                                                                                                                                                                                                                                              stroke='#0B82AD'
                                                                                                                                                                                                                                                                                                                                                              stroke-width='2'
                                                                                                                                                                                                                                                                                                                                                              stroke-linecap='round'
                                                                                                                                                                                                                                                                                                                                                              stroke-linejoin='round'/> </svg></span>
                <h3>Business Hours</h3>
              </div>
              <div className='hours-row'>
                <span>Monday - Friday:</span>
                <span>9:00 AM – 6:00 PM</span>
              </div>
              <div className='hours-row'>
                <span>Saturday:</span>
                <span>9:00 AM – 1:00 PM</span>
              </div>
              <div className='hours-row'>
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            <div className='map-card'></div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
export default ContactUs
