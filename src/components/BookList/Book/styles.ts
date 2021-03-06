import styled from 'styled-components';
import { rgba } from 'polished';

export const Book = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 6.25rem;

  transition: transform 200ms;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  img {
    object-fit: cover;
    width: 6.25rem;
    height: 9.375rem;
    filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
    border-radius: 0.3125rem;
  }

  strong,
  small {
    color: ${({ theme }) => rgba(theme.gray[800], 0.8)};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    font-weight: 700;
    font-size: 0.75rem;
    margin-top: 0.625rem;
  }

  small {
    font-size: 0.625rem;
    font-family: ${({ theme }) => theme.fonts.Roboto};
    font-weight: 900;
    margin-top: 0.3125rem;
  }
`;
