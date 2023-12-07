import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
const HeroSection: React.FC = () => {
  const Wrapper = styled.div`
  
    padding:6rem 0;
    

    .section-hero-data{

      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .btn{

       max-width: 16rem;
    }

    .hero-top-data{

      text-transform: uppercase;
      font-weight: 500;
      font-weight: 1.5rem;
      color:${({theme})=>theme.colors.helper};
    }

    .hero-heading{

      text-transform: uppercase;
      font-weight: 500;
      font-size:6.4rem;
    }

    .hero-para{

       margin-top: 1.5rem;
       margin-bottom: 3.4rem;
       max-width: 80rem;
    }

    .section-hero-image{

      display: flex;
      justify-content: center;
      text-align: center;

      .image-style{

        height: 400px;
        width: 500px;
      }
     
    }


  `;

  const Image=styled.div`

   place-items: center;
  
  `;

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
        <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">Uptechsys Pvt.Ltd</h1>
          <p className="hero-para">
            I'm is a versatile professional with expertise in Front End
            Development and Java. With a passion for creating engaging user
            experiences, he excels in crafting visually appealing and functional
            interfaces. Shyam brings a strong background in both front-end
            technologies and Java development, ensuring well-rounded skills for
            web application development. His commitment to delivering
            high-quality solutions is reflected in his dedication to staying
            updated with the latest industry trends. Shyam is poised to
            contribute innovative solutions and enhance user experiences in the
            ever-evolving world of technology.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/">Hire Me</NavLink>
        </Button>

        </div>
        

        <div className="section-hero-image">
          <Image>
            <img className="image-style" src="./images/developer.jpeg" alt="developer"/>
          </Image>
        </div>
      </div>
    </Wrapper>
  );
};
export default HeroSection;
