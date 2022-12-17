import React from 'react'
import styled from 'styled-components'
// import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from "./Footer.module.css"
// import Contact from './Contact';

export default function footer() {
    return (
        <Cont id='footer'>
            <FooterCont>
                <IconsCont>
                    <a href="mailto:kishaninfo2.0@gmail.com" target="_blank" rel="noreferrer noopener"><EmailIcon className="icon" /></a>
                    {/* <a href=""><TwitterIcon className="icon" /></a> */}
                    <a href="https://www.linkedin.com/in/kishan-002/" target="_blank" rel="noreferrer noopener"><LinkedInIcon className="icon" /></a>
                    <a href="https://github.com/kishankumar2021" target="_blank" rel="noreferrer noopener"><GitHubIcon className="icon" /></a>
                   
                </IconsCont>
                <div className={styles.flex}>
                <a href="Mailto: kishaninfo2.0@gmail.com" className={styles.me}>kishaninfo2.0@gmail.com </a>
                <a href="" className={styles.mob}>9973742215</a>
                <a href="https://goo.gl/maps/vxs9mEiSHpVC9biv5" target="_blank" rel="noreferrer noopener" className={styles.me}>Bihar, India </a>
                </div>
                <HrLine/>
                <FooterLine>
                    <p>No © copyright issues | Designed & developed with <FavoriteIcon className="love"/> by Kishan. </p>                    
                </FooterLine>
            </FooterCont>
        </Cont>
    )
}

const p = styled.div`
.me{
        color:white;
        text-decoration: none;
    }
`

const Cont = styled.div`
    background-color: #080808;
    width: 100%;
`
const FooterCont = styled.div`
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 5rem;
    @media (max-width: 768px) {
        width: 85%;
        padding: 1rem 2rem;
    }
    @media (max-width: 480px) {
        width: 100%;
        padding: 1rem 1.2rem;
    };
`
const IconsCont = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;
    @media (max-width: 480px) {
        padding: 1rem 0;
    };
    .icon{
        color: #ffff;
        font-size: 2rem;
        cursor: pointer;
    }
`
const HrLine = styled.div`
    border-bottom: 1px solid #fcfcfc ;
    margin-top: 1rem;
`
const FooterLine = styled.div`
    text-align: center;
    color: #fcfcfc;
    margin: 1.5rem 0 0.4rem 0;
    .love{
        font-size: 1rem;
        color: red;
    }
`
