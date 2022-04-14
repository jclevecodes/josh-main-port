import './HeaderElements';
import { Wrapper } from './HeaderElements';

function Header() {
  return (
    <Wrapper>
        <header className="header-main">
            <a href="/" className="header-logo">
                JC
                {/* <img src=""></img> */}
            </a>
            <div className="header-navbar">
                <a href="/work" className="nav-link">Work</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact</a>
            </div>
        </header>
    </Wrapper>  
    
  );
}

export default Header;
