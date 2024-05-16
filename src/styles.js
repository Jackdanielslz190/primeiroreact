import styled from 'styled-components';
import Background from './assets/background1.svg'
import { hover } from '@testing-library/user-event/dist/hover';

export const MeuContainer = styled.div`
background: url("${Background}");
background-size: cover;
display:flex;
align-items:center;
flex-direction:column;
gap:40px;
height:100vh;


`;

export const H1 = styled.h1`
color: blue;
font-size:20px;


`;

export const IMG = styled.img`

margin-top:30px;

`;

export const Containeritens = styled.div`

border-radius: 61px 61px 60px 60px;
opacity: 0px;
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
display:flex;
flex-direction: column;
padding-top: 50px ;
padding-right: 36px;
padding-bottom: 30px;
padding-left: 50px;
height:70vh;
`;

export const MeuH1 = styled.h1`

font-family: Roboto;
font-size: 34px;
font-weight: 700;
line-height: 39.84px;
text-align: center;
color: #FFFFFF;
margin-bottom: 80px ;

`;

export const InputLabel = styled.p`

font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
color: #FFFFFF;
margin-left: 25px;
margin-bottom: 5px;

`;

export const Input = styled.input`

box-shadow: 0px 4px 4px 0px #00000040;
border-radius: 14px;
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border:none;
width: 342px;
height: 58px;
top: 193px;
left: 36px;
padding: 15px 20px 15px 25px;
opacity: 0px;
outline: none;

font-family: Roboto;
font-size: 24px;
font-weight: 400;
line-height: 28.13px;
text-align: left;
color: #FFFFFF; 

`;

export const Button = styled.button`
width:342px;
height:74px;
border-radius:;
border:none;
background: #000000CC;
font-family: Roboto;
font-size: 17px;
font-weight: 700;
line-height: 28px;
text-align: left;
color: #FFFFFF;
padding-left:118px;
margin-top:132px;
display:flex;
justify-content;
align-items:center;
gap: 20px;px;


&:hover {
    opacity: 0.8;
    }


 &:active{
    opacity: 0.6;

 }   
`;


