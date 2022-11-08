import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-left: 16px;
  
  form {
    display: flex;
    align-items: center;
    width: 100%;
    
    .form-field {
      margin-bottom: 0;
      
      .ant-select {
        width: 100%;
      }
    }
    
    .form-error {
      display: none;
    }
    
    .ant-btn {
      margin-left: 8px;
      min-width: 32px;
    }
  }
`;
