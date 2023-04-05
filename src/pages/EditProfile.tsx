import React, { useState } from "react";
import styled from "styled-components";

const EditProfileBox = styled.div`
  max-width: 1280px;
  background: var(--color-sub-2);
  margin: 65px auto 0;
  padding: 85px 110px 92px;
  box-sizing: border-box;
  @media (max-width: 800px) {
    padding: 95px 24px 92px;
  }
`;
const EditProfileInputs = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-sub-1);
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const EditProfileButton = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
    padding: 18px 35px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 20px;
  }
`;
const ButtonCancel = styled.button`
  border: 2px solid var(--color-sub-3);
  color: var(--color-sub-3);
`;
const ButtonComplete = styled.button`
  background: var(--color-main-4);
`;

const BasicInput = styled.input`
  all: unset;
  background: var(--color-sub-3);
  border-radius: 10px;
  padding: 18px 16px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const LargeInput = styled.textarea`
  all: unset;
  resize: none;
  height: 230px;
  border: 2px solid #b2b2b2;
  border-radius: 10px;
  padding: 18px 16px;
  box-sizing: border-box;
`;

const InputsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 40%;

  & > li > label {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const InputItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 70px;
  width: 100%;
`;

const InputsDetialList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & > li > label {
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
  }
`;

const InputDetailItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;

const MiddleInput = styled.input`
  all: unset;
  padding: 18px 16px;
  box-sizing: border-box;
  background: var(--color-sub-3);
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
`;

const ShortInputBox = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  & > input[type="text"] {
    all: unset;
    padding: 18px 16px;
    box-sizing: border-box;
    background: var(--color-sub-3);
    border-radius: 10px;
    max-width: 200px;
    width: 100%;
  }
`;
export default function EditProfile() {
  const [emailInput, setEmailInput] = useState("");
  const [platformInputs, setPlatformInputs] = useState([
    { site: "github", input: "" },
    { site: "LinkedIn", input: "" },
    { site: "Notion", input: "" },
    { site: "Velog", input: "" },
  ]);
  const [introInput, setIntroInput] = useState("");
  const [languages, setLanguages] = useState([]);
  const [tools, setTools] = useState([]);
  const [region, setRegion] = useState("");
  const [education, setEducation] = useState({ college: "", major: "" });
  const [career, setCareer] = useState([{ start: "", end: "" }]);
  const today = new Date();

  return (
    <EditProfileBox>
      <EditProfileInputs>
        <InputsList>
          <InputItem>
            <label htmlFor="email">이메일</label>
            <BasicInput
              placeholder="example@gmail.com"
              id="email"
              value={emailInput}
              onChange={(event) => setEmailInput(event.target.value)}
            />
          </InputItem>
          <InputItem>
            <label>플랫폼</label>
            <InputsDetialList>
              {platformInputs.map(({ site, input }) => (
                <InputDetailItem key={site}>
                  <label htmlFor={site}>{site}</label>
                  <BasicInput
                    placeholder="URL을 입력해주세요"
                    id={site}
                    value={input}
                    onChange={(event) =>
                      setPlatformInputs(
                        platformInputs.map((el) => ({
                          site: el.site,
                          input:
                            site === el.site ? event.target.value : el.input,
                        }))
                      )
                    }
                  />
                </InputDetailItem>
              ))}
            </InputsDetialList>
          </InputItem>
          <InputItem>
            <label htmlFor="introduce">소개글</label>
            <LargeInput
              id="introduce"
              value={introInput}
              onChange={(event) => setIntroInput(event.target.value)}
            />
          </InputItem>
        </InputsList>
        <InputsList>
          <InputItem>
            <label htmlFor="introduce">프로그래밍 언어</label>
            <input
              placeholder="언어를 추가하세요"
              id="introduce"
              value={introInput}
              onChange={(event) => setIntroInput(event.target.value)}
            />
          </InputItem>
          <InputItem>
            <label htmlFor="career">소프트웨어 툴</label>
            <div>
              <input
                type="text"
                id="career"
                placeholder=""
                // value={region}
                // onChange={(event) => setRegion(event.target.value)}
              />
            </div>
          </InputItem>
          <InputItem>
            <label htmlFor="region">지역</label>
            <MiddleInput
              placeholder="언어를 추가하세요"
              id="region"
              value={region}
              onChange={(event) => setRegion(event.target.value)}
            />
          </InputItem>
          <InputItem>
            <label htmlFor="education">교육</label>
            <ShortInputBox>
              <input
                type="text"
                placeholder="학교"
                id="education"
                value={education.college}
                onChange={(event) =>
                  setEducation({ ...education, college: event.target.value })
                }
              />
              <input
                type="text"
                placeholder="전공"
                id="education"
                value={education.major}
                onChange={(event) =>
                  setEducation({ ...education, major: event.target.value })
                }
              />
            </ShortInputBox>
          </InputItem>
          <InputItem>
            <label htmlFor="career">경력</label>
            <div>
              <input type="number" placeholder="YYYY" />
              ~
              <input type="number" placeholder="YYYY" />
              <input
                type="text"
                id="career"
                placeholder="회사"
                // value={region}
                // onChange={(event) => setRegion(event.target.value)}
              />
            </div>
          </InputItem>
        </InputsList>
      </EditProfileInputs>

      <EditProfileButton>
        <ButtonCancel>취소하기</ButtonCancel>
        <ButtonComplete>수정하기</ButtonComplete>
      </EditProfileButton>
    </EditProfileBox>
  );
}
