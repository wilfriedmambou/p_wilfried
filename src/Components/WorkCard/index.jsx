import styled from 'styled-components';
// import colors from '../../Styles/colors'
//import DefaultImage from '../../Assets/Images/logo_Webeloppeur2.png'

export default function WorkCard({
  id,
  title,
  github_url,
  homepage,
  description,
  key,
}) {

    let  screenshot ="";
  const newTitle = title.split('_')[1];
 console.log(title,"test-title");
  if( title.toLowerCase().includes('portfolio' ) && description !=null ){
      console.log(github_url);
    const startScreenshot = description.split(`![${newTitle}](`)[1];
     screenshot = startScreenshot.split(')')[0];
     
  
  }
  return (
    title.toLowerCase().includes('portfolio') && (
      <StyledDiv>
        <ImageContainer href={homepage} target="_blank" rel="noreferrer">
          <Image src={screenshot} alt="" />
        </ImageContainer>
        <TitleContainer>
         
          <GithubLink href={github_url} target="_blank" rel="noreferrer">
          <CardTitle>{newTitle}</CardTitle>
            <i className="fab fa-github" />
          </GithubLink>
        </TitleContainer>
      </StyledDiv>
    )
  );
}

const StyledDiv = styled.div`
box-shadow: 0px 15px 30px rgb(77 87 222 / 30%);
background: #fff;

    width: 350px;
    height: 280px;
    margin: 2%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size:30px

    box-shadow: 50px 50px 50px grey;
`;

const ImageContainer = styled.a`
  width: 100%;
  height: 80%;
  border-radius: 15px 15px 0 0;
`;

const Image = styled.img`
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 20%;
  border-radius: 0 0 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h1`
  width: 80%;
  font-size: 20px;
  font-weight: 700;

  text-align: center;
`;

const GithubLink = styled.a`
  font-size: 25px;

  margin: 5px;
`;
