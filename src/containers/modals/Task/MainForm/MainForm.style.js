import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  
  .field {
    .label {
      margin-bottom: 8px;
    }
    
    .todo {
      display: flex;
      padding: 8px 0 0 0;
      
      .form-field {
        margin-bottom: 0;
        
        .form-error {
          display: none;
        }
      }
    }
  }
`;
