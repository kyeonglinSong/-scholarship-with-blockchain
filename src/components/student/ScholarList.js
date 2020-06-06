import React from "react";
import styled from 'styled-components';

import "./content2.css"
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import SearchContainer from "../../containers/common/SearchContainer";


const ScholarList = ({ scholars, tempPage, lastPage, loading, error, nextPage, prevPage, total, searchWord, possible })=>{

  if(loading || !scholars){
    return null;
  }

  if(possible==="possible"){
    scholars=scholars.filter((scholars)=>{
      return scholars.state===possible;
    })
  }

  if(searchWord){
    scholars=scholars.filter((scholars)=>{
    return scholars.scholarName.indexOf(searchWord)>-1;
    })
  }

  var startIndex = (tempPage - 1) * 10 ;
  var endIndex = Math.min(startIndex + 10, total - 1);

  
    const scholarList = scholars.slice(startIndex, endIndex).map((scholars, index)=>(
      <tr key={scholars.scholarId}>
        <th style={{width:'50px'}} scope="row">{scholars.scholarId}</th>
        <td style={{width:'1000px', textAlign:'left'}} ><Link to={`/scholars/${scholars.scholarId}`}><a style={{color:'black'}}>{scholars.scholarName}</a></Link></td>
      </tr>
    ));

    const pageStyle = {
      margin:'10px'
    }
  

  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <span>
      <div className="container">
      <SearchContainer type="student"/>
      <Table striped>
        <thead>
          <tr>
            <th></th>
            <th>이름</th>
          </tr>
        </thead>
        <tbody>
          {scholarList}
        </tbody>
      </Table>
      <Button disabled={tempPage<=1} onClick={prevPage}>이전</Button>
      <span style={pageStyle}>{tempPage}</span>
      <Button disabled={tempPage>=lastPage} onClick={nextPage}>다음</Button>
      </div>     
      <div>
        <br/> 
      </div>
      </span>
    </div>
  );
}

export default ScholarList;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;
