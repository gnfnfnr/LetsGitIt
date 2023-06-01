import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  color: var(--color-sub-1);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  svg {
    width: 15px;
    height: 15px;
    fill: var(--color-sub-1);
  }
`;

const GoBack = () => {
  return (
    <Wrapper>
      <BiArrowBack />
      목록
    </Wrapper>
  );
};

export default GoBack;
