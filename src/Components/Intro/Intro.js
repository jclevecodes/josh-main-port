import "./IntroElements";
import { Wrapper } from './IntroElements';

function Intro() {

    const skills = ['Python', 'C++', 'HTML/CSS', 'Javascript', 'React', 'Git', 'Figma']

  return (
    <Wrapper>
        <h2 className="intro-heading">About Me</h2>
        <div className="intro">
            <div className='intro-text'>
                <div>
                    <p>Until recently, the prevailing 
                    view assumed lorem ipsum was born as a nonsense text. 
                    “It's not Latin, though it looks like it, and it actually 
                    says nothing,” Before & After magazine answered a curious 
                    reader, “Its words loosely approximate the frequency with
                    which letters occur in English, which is why at a glance 
                    it looks pretty real.” Here are a few technologies Ive been 
                    working with recently:</p>
                </div>
                <ul className="skills-list">
                    {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
            </div>
            
            <div className="styled-pic">
                <div className="wrapper">
                    <img src="./Images/JoshPortPhoto.jpg" className="image"></img>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Intro