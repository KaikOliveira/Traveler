import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 72px;
  height: 72px;
  position: relative;

  &+& input{
    border-top: 0;
  }

  &:not(:first-of-type):not(:last-of-type) input{
    border-radius: 0;
  }

  &:first-of-type input {
    border-radius: 10px 10px 0 0 !important;
  }

  &:last-of-type input{
    border-radius: 0 0 10px 10px !important;
  }

  span {
    position: absolute;
    top: 24px;
    left: 24px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    color: #A0ACB2;
    transition: all .3s ease-in-out;
  }

  &:focus-within {
    span {
      top: 10px;
      font-size: 12px;
      line-height: 12px;
    }
  }  

  input:not([value=""]) ~ span {
    top: 14px;
    font-size: 12px;
    line-height: 12px;
  }

  input {
    height: 100%;
    width: 100%;
    border: 1px solid #DCE2E5;
    border-radius: 10px;
    background: #fff;
    padding: 24px;  
  }
`;
