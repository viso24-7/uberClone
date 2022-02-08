import {useState} from 'react'
import { Link } from 'react-router-dom';
import {Language,PersonOutline,Apps,ArrowDropDown} from '@mui/icons-material';
import './navbar.css'

const Navbar = () => {
    const [companyNav,setCompanyNav] = useState(false);

    return (
        <div className='navbar'>
            <div className="navbarLeft">
                <ul className='uberNavLogo'>
                    <li className='uberNavLogoIt'>
                       <a href="/" className='uberNavLinksItem'>Uber</a>
                    </li>
                </ul>
                <ul className='uberNavLinks'>
                    <li className='uberNavLinksItems comp'>
                       <a onClick={() => setCompanyNav(!companyNav)}>Company</a>
                       <ArrowDropDown style={{color:"#fff",fontSize:"15px",marginBottom:"-3px"}} onClick={() => setCompanyNav(!companyNav)}/>
                    </li>
                    <li className='uberNavLinksItems'>
                       <a href="/safety" className='uberNavLinksItem'>Safety</a>
                    </li>
                    <li className='uberNavLinksItems'>
                       <a href="/help" className='uberNavLinksItem'>Help</a>
                    </li>
                    <li className='uberNavLinksItems'>
                       <a>COVID-19 resources</a>
                    </li>
                </ul>

                {companyNav && <ul className="companyDiv">
                    <li className='companyLinksItems'>
                       <a href="/about" className='companyLinkItem'>About us</a>
                    </li>
                    <li className='companyLinksItems'>
                       <a href="/offering" className='companyLinkItem'>Our offerings</a>
                    </li>
                    <li className='companyLinksItems'>
                       <a href="/howworks" className='companyLinkItem'>How uber works</a>
                    </li>
                    <li className='companyLinksItems'>
                       <a href="/global" className='companyLinkItem'>Global Citizenship</a>
                    </li>
                    <li className='companyLinksItems'>
                       <a href="/newsroom" className='companyLinkItem'>Newsroom</a>
                    </li>
                    <li className='companyLinksItems'>
                       <a href="/blog" className='companyLinkItem'>Blog</a>
                    </li>
                    <li className='companyLinksItems'>
                       <a href="/careers" className='companyLinkItem'>Careers</a>
                    </li>
                </ul>}
            </div>
            <div className="navbarRight">
               <ul className='navbarRightLinks'>
                   <li className='navbarRightLinksItems'>
                       <button className='navbarRightLinksButt'>
                            <Language style={{color:"#fff",fontSize:"13px",padding:"2px"}}/>
                            <span className='navRButtText'>EN</span>
                       </button>
                   </li>
                   <li className='navbarRightLinksItems'>
                       <button className='navbarRightLinksButt'>
                            <Apps style={{color:"#fff",fontSize:"13px",padding:"2px"}}/>
                            <span className='navRButtText'>Prodcucts</span>
                       </button>
                   </li>
                   <li className='navbarRightLinksItems'>
                       <button className='navbarRightLinksButt'>
                            <PersonOutline style={{color:"#fff",fontSize:"13px",padding:"2px"}} />
                            <span className='navRButtText'>Log in</span>
                       </button>
                   </li>
                   <li className='navbarSignUpButt'>
                       <button className='signUpUber'>
                          <Link to="/sign-up" className='goSignUpInUber'>Sign Up</Link>
                        </button>
                   </li>
               </ul>
            </div>
        </div>
    )
}

export default Navbar
