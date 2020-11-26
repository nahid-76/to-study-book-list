import styled from 'styled-components';
export const Form = styled.form`
padding:20px;
`;
export const H4 = styled.h4`
color:red;
margin: 0;
text-align: center;
`;
export const TextInput = styled.input.attrs({
  type: "text",
})` 
   width:100%;
   font-size:1em;
   font-family: 'Vazir', Arial, sans-serif;
   font-weight:normal;
   padding:20px;
   box-sizing:border-box;
   margin:6px 0;
   background-color:#3c1f3c;
   color:#fff;
   border:0;
   border-radius:10px;
   direction:rtl;
   :focus {
    outline:none;
  }
  `;
export const SubmitInput = styled.input.attrs({
  type: "submit",
})` 
   padding:10px 20px;
   display:block;
   margin:10px auto;
   background-color:#eee;
   color:#3c1f3c;
    font-size: 20px;
    font-family: 'Vazir', Arial, sans-serif;
    font-weight:normal;
   cursor: pointer;
   width: 100%;
   height: 52px;
   border-radius:10px;
   border:0;
   :focus {
    outline:none;
  }
  :hover{
      opacity:.9;
  }
  
  `;