import { css } from 'styled-components';

export type FlexMixinProps = {
    $gap?: number | string;
    $direction?: 'row' | 'column';
    $align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    $justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
    $wrap?: 'nowrap' | 'wrap';
    $inline?: boolean;
};

export const flexMixin = css<FlexMixinProps>`
    display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
    gap: ${({ $gap }) => (typeof $gap === 'number' ? `${$gap}px` : $gap || '0')};
    flex-direction: ${({ $direction }) => $direction || 'row'};
    align-items: ${({ $align }) => $align || 'stretch'};
    justify-content: ${({ $justify }) => $justify || 'flex-start'};
    flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
`