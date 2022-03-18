import './AboutMe.scss'

const AboutMe = () => {
  return (
    <>
    <div className="aboutme" id="aboutme">
      <section className='information'>
        <div className='info-1'>
          <h3>About me...</h3>
          <p>i'm a <span>Frontend Developer</span> from Argentina. With Tech skills like Clean code and Responsive design,  And Soft skills like Team Working and Empathy with the people.</p>
        </div>
        <img src='/assets/svg/undraw_feeling_proud.svg' alt='' />
        <div className='info-2'>
          <h3>...When i'm not coding</h3>
          <p>I consider myself as a <span>self taught</span> person that never stop learning new things every day. This is my quality that brought me here.</p>
        </div>
        <button><a href='/assets/MartinMeza.pdf'>My CV</a></button>
      </section>
    </div>
    </>
  )
}

export default AboutMe
