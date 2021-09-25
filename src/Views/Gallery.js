import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
function Gallery() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
    return (
      
        <div>
          <br /><br /><br /><br /><br />
          <div className="container" style={{ padding: `0 ${chevronWidth}px` }}>
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={6}
        gutter={20}
        leftChevron={<button className="btn btn-outline-secondary" >{'<'}</button>}
        rightChevron={<button className="btn btn-outline-secondary">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-1.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-1.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-2.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-2.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-3.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-3.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-4.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-4.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-5.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-5.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-6.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-6.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-7.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-7.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-8.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-8.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-9.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-9.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-10.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-10.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-11.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-11.png`} alt="" /></a></div>
        <div className="m-1"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-12.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img height="350px" width="170px" src={`${process.env.PUBLIC_URL}/img/gallery/gallery-12.png`} alt="" /></a></div>
      </ItemsCarousel>
    </div>
      {/* ======= Gallery Section ======= */}
      {/* <section id="gallery" className="gallery mt-5">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
        </div>
        <div className="container mt-3" data-aos="fade-up">
          <div className="gallery-slider swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-1.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-1.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-2.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-2.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-3.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-3.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-4.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-4.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-5.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-5.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-6.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-6.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-7.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-7.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-8.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-8.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-9.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-9.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-10.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-10.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-11.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-11.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-12.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-12.png`} className="img-fluid" alt="" /></a></div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>

      </section> */}
      {/* End Gallery Section */}
      <br /><br /><br /><br /><br />
        </div>
    )
}

export default Gallery
// export default () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;
//   return (
//     <div style={{ padding: `0 ${chevronWidth}px` }}>
//       <ItemsCarousel
//         requestToChangeActive={setActiveItemIndex}
//         activeItemIndex={activeItemIndex}
//         numberOfCards={2}
//         gutter={20}
//         leftChevron={<button>{'<'}</button>}
//         rightChevron={<button>{'>'}</button>}
//         outsideChevron
//         chevronWidth={chevronWidth}
//       >
//         <div style={{ height: 200, background: '#EEE' }}>First card</div>
//         <div style={{ height: 200, background: '#EEE' }}>Second card</div>
//         <div style={{ height: 200, background: '#EEE' }}>Third card</div>
//         <div style={{ height: 200, background: '#EEE' }}>Fourth card</div>
//       </ItemsCarousel>
//     </div>
//   );
// };