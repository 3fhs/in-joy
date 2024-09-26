import React from 'react';
import "./modal.css";

function ModalVideo({film, togglev, status}) {
  
  // دالة لاستخراج معرف الفيديو من رابط YouTube
  const getYouTubeId = (url) => {
    const urlParts = url.split("v="); // تقسيم الرابط باستخدام v=
    return urlParts[1]?.split("&")[0]; // الحصول على الجزء الأول بعد v= وتجاهل الباقي
  };

  const videoId = getYouTubeId(film.trailer); // استخراج معرف الفيديو

  return (
    <div className={`modal ${status ? "active" : ""}`}>
        <a href='#' className='closeModal' onClick={togglev}>
            <ion-icon name="close-outline"></ion-icon>
        </a>
        <iframe
          width="80%"
          height="80%"
          src={`https://www.youtube.com/embed/${videoId}`} // استخدام معرف الفيديو فقط
          title={`${film.title} | Official Trailer`}
          frameBorder="0"
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        >
        </iframe>
    </div>
  )
}

export default ModalVideo;
