import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SelectLanguage from "./SelectLanguage";
import SelectRegion from "./SelectRegion";

const EditProfileBox = styled.div`
  max-width: 1280px;
  background: var(--color-sub-3);
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
    text-align: center;
    @media (max-width: 300px) {
      padding: 10px 12px;
      font-size: 14px;
    }
  }
`;
const ButtonCancel = styled.button`
  border: 2px solid var(--color-sub-2);
  color: var(--color-sub-2);
`;
const ButtonComplete = styled.button`
  background: var(--color-main-4);
`;

const BasicInput = styled.input`
  max-width: 400px;

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const LargeInput = styled.textarea`
  all: unset;
  resize: none;
  height: 230px;
  border: 2px solid var(--color-sub-2);
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

  & input[type="text"] {
    color: var(--color-sub-2);
    font-weight: 500;
    font-size: 20px;
    background: var(--color-sub-2);
    border-radius: 10px;
    padding: 18px 16px;
    width: 100%;
    box-sizing: border-box;
  }

  & input[type="text"]::placeholder {
    color: #222222b2;
  }
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

const MultiInputBox = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
`;

const ShortInput = styled.input`
  max-width: 200px;
`;

const NumberInput = styled.input`
  all: unset;
  width: 64px;
`;

const MiddleLongInput = styled.input`
  max-width: 220px;
`;

const NewRangeBox = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-left: 22px;
`;

const NewRange = styled.div`
  display: flex;
  width: 100%;
  height: 13px;
  background: var(--color-sub-2);
  border-radius: 10px;
`;

const BorderInput = styled.input`
  border-left: 2px solid var(--color-sub-2);
  padding-left: 17px;
  width: 100%;
`;

const WarnInput = styled.span`
  font-size: 14px;
  margin-left: 10px;
`;

const CountInput = styled.span`
  font-size: 14px;
  float: right;
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
  const [languages, setLanguages] = useState([
    {
      name: { value: "Bash", label: "Bash" },
      range: "50",
      index: 0,
    },
  ]);
  const [tools, setTools] = useState([""]);
  const [region, setRegion] = useState("");
  const [education, setEducation] = useState({ college: "", major: "" });
  const [career, setCareer] = useState({ start: "", end: "" });
  const toolRef = useRef<null[] | HTMLInputElement[]>([]);
  const regex = /^http[s]?:\/\/([\S]{3,})/i;
  const maxInput = 500;
  useEffect(() => {
    toolRef.current[toolRef.current.length - 1]?.focus();
  }, [tools.length]);
  console.log(region);
  return (
    <EditProfileBox>
      <EditProfileInputs>
        <InputsList>
          <InputItem>
            <label htmlFor="email">이메일</label>
            <BasicInput
              type="text"
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
                  <label htmlFor={site}>
                    {site}
                    {!regex.test(input) && (
                      <WarnInput>올바른 주소를 입력해주세요</WarnInput>
                    )}
                  </label>
                  <BasicInput
                    type="text"
                    placeholder="URL을 입력해주세요"
                    id={site}
                    value={input}
                    onChange={(event) => {
                      setPlatformInputs(
                        platformInputs.map((el) => ({
                          site: el.site,
                          input:
                            site === el.site ? event.target.value : el.input,
                        }))
                      );
                    }}
                  />
                </InputDetailItem>
              ))}
            </InputsDetialList>
          </InputItem>
          <InputItem>
            <label htmlFor="introduce">
              소개글
              <CountInput>
                {/* introInput.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length */}
                {introInput.length} / {maxInput} 자
              </CountInput>
            </label>
            <LargeInput
              id="introduce"
              value={introInput}
              onChange={(event) =>
                setIntroInput(
                  introInput.length > maxInput - 1
                    ? event.target.value.substring(0, maxInput)
                    : event.target.value
                )
              }
            />
          </InputItem>
        </InputsList>
        <InputsList>
          <InputItem>
            <label htmlFor="language">프로그래밍 언어</label>
            {languages.map(
              ({ index }) =>
                languages.length < 6 && (
                  <SelectLanguage
                    key={index}
                    locate={index}
                    languages={languages}
                    setLanguages={setLanguages}
                  />
                )
            )}
            {languages.length < 5 && (
              <NewRangeBox
                onClick={() =>
                  setLanguages([
                    ...languages,
                    {
                      name: { value: "", label: "" },
                      range: "50",
                      index: languages.length,
                    },
                  ])
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 11V20H11V11H20V9H11V0H9V9H0V11H9Z"
                    fill="var(--color-sub-3)"
                  />
                </svg>
                <NewRange />
              </NewRangeBox>
            )}
          </InputItem>
          <InputItem>
            <label htmlFor="career">소프트웨어 툴</label>
            <MultiInputBox>
              {tools.map((tool, index) => (
                <BorderInput
                  key={`tools${index}`}
                  ref={(el) => (toolRef.current[index] = el)}
                  placeholder="github"
                  value={tool}
                  onChange={(event) =>
                    setTools(
                      tools.map((el, idx) => {
                        console.log(el);
                        return index === idx ? event.target.value : el;
                      })
                    )
                  }
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      if (toolRef.current[index + 1]) {
                        toolRef.current[index + 1]?.focus();
                      } else {
                        setTools([...tools, ""]);
                      }
                    }
                  }}
                />
              ))}
            </MultiInputBox>
          </InputItem>
          <InputItem>
            <label htmlFor="region">지역</label>
            <SelectRegion
              region={region}
              setRegion={setRegion}
              placeholder="지역을 선택해주세요"
            />
          </InputItem>
          <InputItem>
            <label htmlFor="education">교육</label>
            <MultiInputBox>
              <ShortInput
                type="text"
                placeholder="학교"
                id="education"
                value={education.college}
                onChange={(event) =>
                  setEducation({ ...education, college: event.target.value })
                }
              />
              <ShortInput
                type="text"
                placeholder="전공"
                id="education"
                value={education.major}
                onChange={(event) =>
                  setEducation({ ...education, major: event.target.value })
                }
              />
            </MultiInputBox>
          </InputItem>
          <InputItem>
            <label htmlFor="career">경력</label>
            <MultiInputBox>
              <NumberInput
                placeholder="YYYY"
                value={career.start}
                onChange={(event) =>
                  setCareer({
                    ...career,
                    start: event.target.value.replace(/[^0-9]/g, ""),
                  })
                }
              />
              ~
              <NumberInput
                placeholder="YYYY"
                value={career.end}
                onChange={(event) =>
                  setCareer({
                    ...career,
                    end: event.target.value.replace(/[^0-9]/g, ""),
                  })
                }
              />
              <MiddleLongInput
                type="text"
                id="career"
                placeholder="회사"
                // value={region}
                // onChange={(event) => setRegion(event.target.value)}
              />
            </MultiInputBox>
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
