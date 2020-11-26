import styled from 'styled-components'
export const Button = styled.button`
font-size:1em;
font-family: 'Vazir', Arial, sans-serif;
font-weight:normal;
padding:.5rem;
border:none;
background-color: #eee;
color: #3c1f3c;
cursor: pointer;
:focus {
    outline:none;
  }
  :hover{
      opacity:.9;
  }
`;
export const RightButton = styled(Button)`
border-bottom-right-radius:10px;
border-top-right-radius:10px;
`;
export const LeftButton = styled(Button)`
border-bottom-left-radius:10px;
border-top-left-radius:10px;
`;
export const BookListStyle = styled.div`
margin:20px;
`;
export const Btngroup = styled.div`
direction:rtl;
`;
export const Ul = styled.ul`
padding:0;
list-style:none;
`;