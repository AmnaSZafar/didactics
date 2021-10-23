import React from 'react'




function Home() {
    return (
        <div>   
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
                    <div>
                        <h1>State-of-the-art Digital School</h1>
                        <h2>Didactics is an online, digital school, using all of the latest technology to allow everybody access to education.</h2>
                        
                    </div>
                    </div>
                    <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AdALJZMAW68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                </div>
                
            </section>{/* End Hero */}
            <section id="features" className="features mt-5">
            
        <div className="container">
          <div className="section-title">
          
            <h2>App Features</h2>
            <p>Didactics uses state-of-the-art technology to allow everybody access to education. The team at Didactics are passionate about enabling everybody to learn in the best way possible and are constantly updating the features of the platform to ensure that the students are receiving high quality education. See some of our main features below.</p>
          </div>
  
        </div>
      </section>{/* End App Features Section */}
      <section id="details" className="details mt-5">
        <div className="container">
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/details-1.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-4" data-aos="fade-up">
              <h3>Tablet Based.</h3>
              <p className="fst-italic">
              Study using a tablet and write in any language. Practise and improve your handwriting whilst studying from any location.
              </p>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={`${process.env.PUBLIC_URL}/img/screenLiveCall.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3>Built-in Video Classes.</h3>
              <p className="fst-italic">
              Study from anywhere at a time suitable for you with your teacher, just as if you are in the classroom with them.
              </p>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/screenVideo.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5" data-aos="fade-up">
              <h3>Video and Audio Messaging.</h3>
              <p>Whenever you need anything, you can communicate with a teacher 24 hours a day, 7 days a week.</p>
              
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={`${process.env.PUBLIC_URL}/img/screenDigitalBookNew.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3>Digital Books.</h3>
              <p className="fst-italic">
              Interactive learning material and content in order to stimulate students while teaching new concepts.
              </p>
            </div>
          </div>
        </div>
      </section>{/* End Details Section */}
      <section id="details" className="details mt-5">
        <div className="container">
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/screenNoteBook.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-4" data-aos="fade-up">
              <h3>Digital Notebook.</h3>
              <p className="fst-italic">
              Keep all your notes in one online place and never lose that crucial piece of paper before the exam.
              </p>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={`${process.env.PUBLIC_URL}/img/screenConferenceCall.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3>Group Self-Study Classes.</h3>
              <p className="fst-italic">
              Study with other students from all around the world at a convenient time for you to help support each other’s learning.
              </p>
            
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/screenOnlineTest.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5" data-aos="fade-up">
              <h3>Online Testing.</h3>
              <p>Testing is very important in all learning. Online, time-bounded testing allows you to take the test from anywhere in the world.</p>
             
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={`${process.env.PUBLIC_URL}/img/details-4.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3>Facial Recognition.</h3>
              <p className="fst-italic">
              State-of-the-art facial recognition system to check attendance in class, time spent studying and to validate testing.
             </p>
            </div>
          </div>
        </div>
      </section>{/* End Details Section */}
      <section id="details" className="details mt-5">
        <div className="container">
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/screenCharts.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-4" data-aos="fade-up">
              <h3>Performance Reports.</h3>
              <p className="fst-italic">
              Regular performance reports will be sent based on artificial intelligence and various analytics, including how active students are in lessons.
              </p>
              
            </div>
          </div>
       </div>
      </section>{/* End Details Section */}
        </div>
    )
}

export default Home
