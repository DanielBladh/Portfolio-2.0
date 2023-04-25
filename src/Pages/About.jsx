import loungepic from "../assets/loungepic.jpg";

function About() {
  return (
    <div className="container">
      <div className="about-content">
        <div className="img-side">
          <img className="loungepic" src={loungepic} alt="" />
        </div>
        <div className="text-side">
          <h4>About me</h4>
          <h3>
            A dedicated Front-end Developer
            <br />
            based in Stockholm, Sweden!
          </h3>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
