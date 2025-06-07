import styled, {css} from 'styled-components'

export const StyledSelectOption = styled.li<{$isSelected?:boolean}>`
    list-style: none;
    margin: 0;
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
        background-color: var(--accent-color);
    }

    ${({ $isSelected }) => $isSelected && css`
        background-color: 'transparent';
    `}
`