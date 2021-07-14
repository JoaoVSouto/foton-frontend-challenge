import { FiX } from 'react-icons/fi';

import * as S from './styles';

type SearchBookInputProps = {
  onFocus?: () => void;
  onClose?: () => void;
  shouldCloseButtonAppear?: boolean;
};

export default function SearchBookInput({
  onFocus = () => {},
  onClose = () => {},
  shouldCloseButtonAppear = false,
}: SearchBookInputProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <label htmlFor="search-book-input" aria-label="Search book">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.6667 6.66668C14.6667 9.6122 12.2789 12 9.33333 12C6.38781 12 4 9.6122 4 6.66668C4 3.72116 6.38781 1.33334 9.33333 1.33334C12.2789 1.33334 14.6667 3.72116 14.6667 6.66668ZM5.33333 6.66668C5.33333 8.87582 7.12419 10.6667 9.33333 10.6667C11.5425 10.6667 13.3333 8.87582 13.3333 6.66668C13.3333 4.45754 11.5425 2.66668 9.33333 2.66668C7.12419 2.66668 5.33333 4.45754 5.33333 6.66668Z"
              fill="#DCD8D8"
            />
            <path
              d="M3.86193 11.1953L1.5286 13.5286C1.26825 13.7889 1.26825 14.2111 1.5286 14.4714C1.78895 14.7318 2.21106 14.7318 2.4714 14.4714L4.80474 12.1381C5.06509 11.8777 5.06509 11.4556 4.80474 11.1953C4.54439 10.9349 4.12228 10.9349 3.86193 11.1953Z"
              fill="#F0F0F0"
            />
            <circle cx="9.33333" cy="6.66667" r="0.666667" fill="#F0F0F0" />
          </svg>
        </label>
        <S.Input
          id="search-book-input"
          type="text"
          placeholder="Search book"
          onFocus={onFocus}
        />
      </S.Wrapper>

      {shouldCloseButtonAppear && (
        <S.CloseButton type="button" title="Close search" onClick={onClose}>
          <FiX />
        </S.CloseButton>
      )}
    </S.Container>
  );
}
