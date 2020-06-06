import React from "react";
import { Button } from 'reactstrap';
import { GiNewspaper } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { GoQuestion } from 'react-icons/go';
import { AiOutlineBank } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./content2.css"


const SchoolMain = ()=>{
  const iconStyle={
    margin:'10px',
    width:'50px',
    height:'50px',
  }

  return(
    <div className="img">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div style={{textalign: 'left', position: 'relative', marginLeft: '3rem', top: '100px' }}>
      <hr style={{ textalign: 'left', width: '130px',border: '3px solid black', marginLeft: '0px'}}></hr>
      <h2><strong>교직원용 장학금통합관리시스템</strong></h2>
      <h7>온라인 장학금통합관리시스템에 오신 것을 환영합니다.<br/>장학금 관리가 더욱 쉬워집니다!
      </h7>
      </div>
      <br/><br/><br/>
      <div className="contentnew">
        <div className="row"></div>
        <Link to="/scholarships"><Button className="RegisterMainButton" size="lg" style={{backgroundColor:'#d7c399', border: 'none', color: 'black', boxShadow:'5px 5px 5px #999999', marginRight:'30px'}}><a style={{fontWeight:'bold'}}>장학금 등록</a><br/><GiNewspaper style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/selections"><Button className="RegisterMainButton" size="lg" style={{backgroundColor: '#8cb09d', border: 'none', color: 'black', boxShadow:'5px 5px 5px #999999', marginRight:'30px'}}><a style={{fontWeight:'bold'}}>장학생 선발</a><br/><FaSearch style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/student"><Button className="RegisterMainButton" size="lg" style={{backgroundColor: '#d7c369', border: 'none', color: 'black', boxShadow:'5px 5px 5px #999999', marginRight:'30px'}}><a style={{fontWeight:'bold'}}>사이트 이용안내</a><br/><GoQuestion style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/student"><Button className="RegisterMainButton" size="lg" style={{backgroundColor: '#9fa947', border: 'none', color: 'black', boxShadow:'5px 5px 5px #999999'}}><a style={{fontWeight:'bold'}}>재단용 페이지 이동</a><br/><AiOutlineBank style={iconStyle}/></Button></Link>
      </div>
    </div>
  );
}

export default SchoolMain;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;