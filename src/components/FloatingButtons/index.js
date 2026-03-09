import "./FloatingButtons.css";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919930054078?text=Hello%20I%20would%20like%20to%20enquire%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="icon"
        >
          <path
            fill="white"
            d="M20.52 3.48A11.9 11.9 0 0012.01 0C5.38 0 .01 5.37.01 12
  c0 2.11.55 4.17 1.6 5.99L0 24l6.17-1.62A11.93 11.93 0 0012.01 24C18.64 24 24
  18.63 24 12c0-3.2-1.25-6.22-3.48-8.52zM12.01 21.82c-1.8 0-3.56-.48-5.1-1.39
  l-.36-.21-3.66.96.98-3.57-.23-.37a9.77 9.77 0 01-1.5-5.24
  c0-5.41 4.4-9.82 9.82-9.82 2.62 0 5.08 1.02 6.94 2.88a9.75
  9.75 0 012.88 6.94c0 5.42-4.4 9.82-9.81 9.82zm5.39-7.37
  c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15
  s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47
  -.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61
  .13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37
  -.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5
  -.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04
  2.46s1.07 2.86 1.22 3.06c.15.2 2.1 3.21 5.08 4.5
  .71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.11
  .57-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41
  -.07-.13-.27-.2-.57-.35z"
          />
        </svg>
      </a>

      {/* Call */}
      <a href="tel:+919930054078" className="float-btn call">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M6.62 10.79a15.466 15.466 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.24 1.01l-2.2 2.23z" />
        </svg>
      </a>

      <a
        className="float-btn enquiry"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default FloatingButtons;
