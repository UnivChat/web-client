import styled from "@emotion/styled";

export const MenuBox = styled.span`
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;  // 값을 입력받아 지정하는 방법을 모르겠음
    display: flex;
    align-items: center;
    justify-content: center;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 13px #00000029;
    border-radius: 16px;
    opacity: 1;
`;

export const MenuTime = styled.span`
    top: 0;
    left: 0;
    width: 0;
    height: 0;

    background: *color* 0% 0% no-repeat padding-box; // 색상 넣어줘야함
    border-radius: 16px 16px 0px 0px;
    opacity: 0.11;
`;

export const MenuList = styled.tr`
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    
    border-right:1px solid *color*; // 색상 넣어줘야함 & 맨 오른쪽은 없어야함... & 위에 3px 비어야함
    padding-right:12px;
`;
