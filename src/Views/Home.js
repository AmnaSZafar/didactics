import React from 'react'




function Home() {
    return (
        <div>   
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
                    <div>
                        <h1>DIDACTICS<br /> International Digital School</h1>
                        <h2>Didactics is the first digital School in Pakistan, offering classes from Playgroup to 
                        Grade 12. We follow the International standards for our students. We focus on providing quality
                         education and paying attention to each individual student. Our programmes are designed to stimulate
                          each child’s development and learning and provide a platform for their future schooling. 
                          Our digital portal uses state of the art teachnologies. With our digital portal, a student can study remotely anywhere in Pakistan.
                          </h2>
                        
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
            <p>
            Didactics is well ahead of its competitors, in terms of education, entrepreneurship, 
            economic competitiveness and quality of life. At Didactics International School, we take 
            advantage of effective teaching practices developed around the world and teach our students 
            with the same quality, discipline, and ethics. Didactics International School is a place where 
            students can achieve their full potential. We provide a calm and safe study environment that 
            favors learning, with a focus on knowledge, skills and academic progress. Our teachers concentrate 
            on challenging and interacting with students, preparing them for a life in an increasingly globalized world.
            Didactics is passionate about enabling everybody to learn in the best way possible and is constantly 
            updating the features of the platform to ensure that the students are 
            receiving high quality education. See some of our main features below.</p>
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
              With Didactics, you would not need any notebooks, stationery or hard-copy. Our digital portal at Didactics has integrated everything that 
              you might need. Online books are provided instead of hard-copy books. Online notepads and drawing boards are provided thus eliminating the need for stationery
              and notebooks.
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
              Study from anywhere at any time that is suitable for you with your teacher. With our digital portal at Didactics, you
              would feel as if you in a physical class with the teacher. Our class timings are completely flexible for you and the teacher.
              Our staff is patient and extremely understanding. Apart from built-in video classes, you can also have a video conference with your teacher any time 
              if you are facing any issue. 

              </p>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/screenVideo.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5" data-aos="fade-up">
              <h3>Video and Audio Messaging.</h3>
              <p>Whenever you need anything, you can communicate with a teacher 24 hours a day, 7 days a week. Didactics digital portal system is unlike any 
              other. No other school offers 24/7 communication like Didactics. Instead of talking with your friend about an answer, ask the teacher directly.
              Our teachers are available 24/7 to help out the students as much as they can.
              </p>
              
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={`${process.env.PUBLIC_URL}/img/screenDigitalBookNew.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3>Digital Books.</h3>
              <p className="fst-italic">
              All Interactive learning material and content is placed under one roof.
              Didactics offers Online Books to all its students. The benefits of having all e-books in one place helps out the students
              to study effectively. This is not only environmently friendly but also extremely beneficial for all students. Students can 
              save bookmarks in all e-books. Students can share the book page with the teacher for if there is something that they don't understand.
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
              Didactics digital portal eliminates the need for all types of stationery. <br />
              Didactics provides digital notebooks.
              These online notebooks are all stored in our digital portal. Due to this the student may never have to go through the 
              crucial period of loosing their notes before their exams.
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
              Study with other students from all around the world.
              You can have video calls and meetings with your friends to help support each other’s learning.
              <br />
              You and your friends can use our in-built group self-study classes to have discussions regarding class homework or just make new friends.
              <br/>
              With our group classes, you can get familiarized with other students, discuss problems and find solutions together.
              This encourages team-work amongst the students.
              </p>
            
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/screenOnlineTest.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5" data-aos="fade-up">
              <h3>Online Testing.</h3>
              <p>Testing is very important at Didactics. We test our students completely online. We have time-bounded tests that allows us to include students from all areas
              students all over the world to participate in the same test.
              Our team at Didactics has implemented various measures to ensure that all tests are given ethically. We use artificial intelligence 
              to compare tests of all students, thus minimizing the chances for cheating. 

              </p>
             
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={`${process.env.PUBLIC_URL}/img/details-4.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3>Facial Recognition.</h3>
              <p className="fst-italic">
              We use state of the art facial recognition system to check attendance in class. 
              We also check if the student is attentive in the class or not. If the student is inactive, our software notices that and informs the teacher.
              This monitoring system allwos teachers to save up on time and invest more time on teaching and validate testing.
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
              Apart from that, Student's ethical bahavior in the class and with other students in group study classes will also be noted. 
              Students performance reports will be sent to the administration and to the parents.
              </p>
              
            </div>
          </div>
       </div>
      </section>{/* End Details Section */}
        </div>
    )
}

export default Home