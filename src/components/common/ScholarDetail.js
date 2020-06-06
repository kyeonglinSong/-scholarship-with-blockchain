import React, {useState} from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';
import img from '../../images/examplepic01.png';
import { WiNightCloudyHigh } from "react-icons/wi"
import { Button,Modal, ModalHeader, ModalBody, ModalFooter,Container, Row } from 'reactstrap';

const ScholarDetail = ({ scholar, loading, user, onRemove, onEdit, onSubmit })=>{
  const [modal, setModal]=useState(false);
  const toggle=()=>setModal(!modal);
  const ScholarStyle={
      borderBottom: "1px solid #444444",
      paddingTop: '50px',
      paddingBottom:'60px',
      height: '50px',
  }
  const titleSubStyle={
      fontSize: '12px',
      weight: '750px',
      marginLeft: '20px',
      marginTop:'5px',
      textAlign: 'right'
  }
  const titleStyle={
    fontSize: '20px',
    fontWeight: 'bold',
    weight: '750px',
    marginLeft:'auto',
    marginBottom:'10px',
    marginTop:'5px',
    textAlign:'left'
}
  const bodyStyle = {
    margin:'10px',
    textAlign:'left'
  }
  const cardStyle = {
      width: '83%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom:'50px'
  }
  const ScholarTextStyle = {
      fontSize: '30px',
      paddingBottom:'30px'
  }

  const imgStyle = {
    margin:'20px',
    textAlign: 'center'
  }


if(loading || !scholar){
  return null;
}

const { scholarId, scholarName, foundation, createdDate, dueDate, sum, majorLimit, gradeLimit } = scholar;

const body = `자격요건 및 세부사항\n마감날짜: ${dueDate}\n금액: ${sum}\n학기제한:${gradeLimit}\n학과:${majorLimit}`;


const usertype = (user.type==="ADMIN");


return(
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Container style={cardStyle}>
      <Row style={ScholarStyle}>
        <div  style={{fontSize:'30px', textAlign: 'left'}}><WiNightCloudyHigh style={{marginBottom:'10px'}}/> 장학금 세부정보</div>
      </Row>
      <div style={titleStyle}>{scholarName}</div>
      <div style={titleSubStyle}>주최: {foundation}</div>
      <div style={titleSubStyle}>작성날짜 : {createdDate}</div>
      <hr size="3" noshade></hr>
      <Row style={bodyStyle}>
        {body}
        </Row>
        <div style={{textAlign: 'center'}}>
        <img src={img}  height='auto' width='80%' style={imgStyle}/></div>
      <hr size="5" noshade></hr>
      <div style={{textAlign: 'center'}}>
        {
          !usertype &&
          <Button color="primary" onClick={toggle}>신청하기</Button>
        }
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{scholarName}</ModalHeader>
<ModalBody>1. 목적 : 지원자 개인 식별, 지원의사 확인, 입사전형의 진행, 고지사항 전달, 입사 지원자와의 원활한 의사소통, 지원이력 확인 및 면접 불합격자 재지원 제한
<br/>
2. 항목 : 아이디(이메일주소), 비밀번호, 이름, 생년월일, 휴대폰번호<br/>
3. 위 개인정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 장학금 지원이 제한될 수 있습니다.<br/>
4. 장학금 신청 상태는 자격 미달, 산정 중, 완료(지급/지급 실패)로 나뉩니다. 신청 뒤 신청현황조회에서 확인하실 수 있습니다.
</ModalBody>
<ModalFooter>
 <Link to='/applies'><Button color="primary" onClick={onSubmit}>신청확인</Button></Link>
  <Button color="secondary" onClick={toggle}>취소</Button>
</ModalFooter>
      </Modal>
     &nbsp; &nbsp;
     {
       !usertype? 
       <Link to='/scholars'><Button color="secondary">목록으로</Button></Link>
       :<Link to='/scholarships'><Button color="secondary">목록으로</Button></Link>
     }
        
      </div>
      <div style={{textAlign: 'right'}}>
        {
          usertype &&
          <div>
          <Button outline color="primary" onClick={onEdit}>수정하기</Button>&nbsp;&nbsp;
          <Button outline color="danger" onClick={onRemove}>삭제하기</Button>
          </div>
        }
      </div>
    </Container>
  </div>
  );

}

export default ScholarDetail;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;