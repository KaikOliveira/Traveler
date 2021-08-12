import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  max-width: 16rem;
  max-height: 16.625rem;
  border-radius: 16px;
  background:#FFFF;
  border: 1px solid #DCE2E6;
  box-sizing: border-box;

  margin: 2rem;

  header {
    width: 100%;
    max-height: 11.125rem;
    border-radius: 16px 16px 0 0;


    img{
      width:100%;
      height:100%;
      margin-bottom: 1.5rem;
    }

    footer{
      max-height: 6.625rem;
      width:100%;

    }
  }
`;
