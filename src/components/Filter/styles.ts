import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';


export type FilterStyleProps = {
    isActive?: boolean;
}

export const Title = styled.Text`
    font-size:${({ theme }) => theme.FONT_SIZE.MD};
    font-family:${({ theme }) => theme.FONT_FAMILY.BOLD};
    color:${({ theme }) => theme.COLORS.WHITE}; 
`;

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
    ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
    `}

    border-radius:4px;
    margin-right:12px;
    height: 38px;
    width:70px;
    margin-top:5px;
    align-items: center;
    justify-content: center;
`;



