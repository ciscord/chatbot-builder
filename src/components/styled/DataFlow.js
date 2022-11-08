import styled from 'styled-components';
import { THEME } from '../../constants/theme';

const { border } = THEME;

const layoutHeight = 'calc(100vh - 160px)';
const sectionHeight = 'calc(100vh - 160px - 16px * 2)';

export const PageLayout = styled.div`
  display: block;
  padding: 16px;
  width: 100%;
  min-height: ${layoutHeight};
  
  .page-row {
    height: 100%;
    min-height: ${sectionHeight};
    
    .actions {
      height: 100%;
      min-height: ${sectionHeight};
    }
    
    .preview {
      height: 100%;
      min-height: ${sectionHeight};
    }
  }
`;

export const ButtonsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: ${sectionHeight};
  
  .list {
    display: flex;
    flex-direction: column;
    padding: 0 0px 16px 0px;
    flex-grow: 100;
    
    .ant-btn,
    .ant-select {
      margin-bottom: 8px;
      text-align: left;
    }
  }
  
  .controls {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
    .ant-btn {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  min-height: ${sectionHeight};
  border: 1px solid ${border.input};
  border-radius: 4px;
  justify-content: space-around;
`;
