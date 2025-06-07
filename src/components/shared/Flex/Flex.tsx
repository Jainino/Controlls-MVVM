// shared/components/Flex.tsx
import styled, {css} from 'styled-components';
import { HTMLAttributes } from 'react';
import { flexMixin, FlexMixinProps } from '../../../styles/mixins';

type FlexBaseProps = {
  $fullWidth?: boolean;
  $padding?: string;
  $margin?: string;
  $background?: string;
};

export type FlexProps = FlexBaseProps & FlexMixinProps & HTMLAttributes<HTMLDivElement>;

export const Flex = styled.div<FlexProps>`
  ${flexMixin};

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $padding }) =>
    $padding &&
    css`
      padding: ${$padding};
    `};

  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `};

  ${({ $background }) =>
    $background &&
    css`
      background: ${$background};
    `};
`;