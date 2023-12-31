import styled from "styled-components";

export const ChatWindowContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 5px 0 25px;
  position: relative;
  padding-bottom: 20px;
`;

export const ChatHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundOffSet};
  border-bottom: ${({ theme }) => theme.borders.headerBtmBorder};
  padding: 10px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ChatContentContainer = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  padding-right: 10px;
  padding-top: 60px;

  /* Custom scroll styles */
  ::-webkit-scrollbar {
    width: 4px; /* Width of the scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Track color */
  }

  ::-webkit-scrollbar-thumb {
    background: #888; /* Thumb color */
    border-radius: 4px; /* Rounded corners */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Hover state color */
  }
`;

export const ChatInputContainer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: -5%;
  left: 0%;
  background: transparent;
`;
export const ChatBubbleContainer = styled.div`
  position: relative;
`;

export const ChatBubbleReceived = styled.div`
  width: max-content;
  height: 50px;
  background: white;
  border: 1px solid #e1dcdc;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 12px;
  margin-right: auto;
  font-size: 12px;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ChatBubbleSent = styled.div`
  width: max-content;
  height: 50px;
  background: #2a85ff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 12px;
  margin-left: auto;
  font-size: 12px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const ChatTimeText = styled.span`
  width: fit-content;
  font-size: 10px;
`;

export const DateDivider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #8b8b8b;
`;

export const DateText = styled.span`
  padding: 0 10px;
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #e3dbdb;
`;

export const ContextMenu = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.backgroundOffSet};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 4px;
  z-index: 999;
`;

export const ContextMenuItem = styled.div`
border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundalt};
  }
`;
