import React from 'react';

export default function ModalText() {
  return (
    <div className="mfp-content">
      <div
        id="modal-auto-open"
        className="modal modal-auto-open text-center cookie-notify modal-active"
        data-delay="3000"
        data-cookie-enabled="true"
        data-cookie-name="cookieName2020"
      >
        <h2 className="modal-title">Say hello to our team</h2>
        <p>
          Our creators love hearing from you and seeing how you’ve
          used our template. Show your appreciation by tweeting,
          sharing and following us! This is a simple Modal with text
          and it will be showed after the pre-defined delay once the
          pages is loaded.
        </p>
        <a className="btn btn-light modal-close" href="#">
          Dismiss
        </a>
        <button title="Close (Esc)" type="button" className="mfp-close">
          ×
        </button>
      </div>
    </div>
  );
}
