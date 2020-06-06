import React from 'react';
import styled from 'styled-components';
import './Footer.css';
function Footer() {
    
    return (
        <FooterContainer className="main-footer" id="footerNone">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="footer-middle">
         <div className="container" style={{textAlign:'left'}}>
            <a href="/"><strong>정보처리방침</strong></a>
            &ensp;&ensp;<a href="/" ><strong>이용약관</strong></a>
            <hr/>
            <p className="text-xl-left"><strong>한국장학재단</strong><br/>(41200) 대구광역시 동구 신암로 125(신암동 819-1) 한국장학재단 콜센터 1599-2000</p>
            
             {/*Footer Botton*/}
             <div className="footer-bottom">
                 <p className="text-xs-left">
                     &copy;{new Date().getFullYear()} 장학금통합관리시스템 madebyTeamEllie - All Rights Reserved
                 </p>
             </div>
          </div>   
          </div>    
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer=styled.footer`
.footer-middle {
    background:var(--mainDark);
    padding-top: 1.5rem;
    color: var(--mainWhite);
    text-align:left;
}
.footer-bottom{
    padding-top: 1rem;
    padding-bottom:1rem;
    text-align:left;
}
a{
    color: var(--mainWhite);
}
a: hover{
color:var(--mainLightGrey);
}
hr{
    background-color: white;
}
`;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;