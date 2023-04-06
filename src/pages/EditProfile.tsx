import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import regionData from "../resource/regionData.json";
import SelectLanguage from "../components/SelectLanguage";

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
    text-align: center;
    @media (max-width: 300px) {
      padding: 10px 12px;
      font-size: 14px;
    }
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
  max-width: 400px;

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

  & input[type="text"] {
    color: #222222;
    font-weight: 500;
    font-size: 20px;
    background: var(--color-sub-3);
    border-radius: 10px;
    padding: 18px 16px;
    width: 100%;
    box-sizing: border-box;
  }

  & input[type="text"]::placeholder {
    color: rgba(34, 34, 34, 0.7);
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

const MiddleInput = styled.input`
  max-width: 300px;
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

const RegionSelect = styled(Select)`
  & .select__control {
    color: #222222;
    padding: 10px 16px;
    background: var(--color-sub-3);
    border: none;
    max-width: 300px;
    width: 100%;
    border-radius: 10px;
  }

  & .select__indicator-separator {
    display: none;
  }

  & .select__menu {
    color: #222222;
    max-width: 240px;
    width: 100%;
    background: var(--color-sub-1);
    z-index: 10;
  }

  & .select__option {
    border-radius: 5px;
  }
  & .select__menu::-webkit-scrollbar {
    display: none;
  }
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
  background: var(--color-sub-3);
  border-radius: 10px;
`;

const BorderInput = styled.input`
  border-left: 1px solid;
  padding-left: 17px;
  /* max-width: 50px; */
  width: min-content;
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
      name: { value: "", label: "" },
      range: "50",
      index: 0,
    },
  ]);
  const [tools, setTools] = useState("");
  const [region, setRegion] = useState("");
  const [education, setEducation] = useState({ college: "", major: "" });
  const [career, setCareer] = useState([{ start: "", end: "" }]);
  const [isClearable, setIsClearable] = useState(true);
  console.log(languages, region);
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
                  <label htmlFor={site}>{site}</label>
                  <BasicInput
                    type="text"
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
                    fill="#EAEAEA"
                  />
                </svg>
                <NewRange />
              </NewRangeBox>
            )}
          </InputItem>
          <InputItem>
            <label htmlFor="career">소프트웨어 툴</label>
            <div>
              <BorderInput
                placeholder="elicpse github"
                value={tools}
                onChange={(event) => setTools(event.target.value)}
              />
            </div>
          </InputItem>
          <InputItem>
            <label htmlFor="region">지역</label>
            <RegionSelect
              theme={(theme: any) => ({
                ...theme,
                borderRadius: 10,
                colors: {
                  ...theme.colors,
                  neutral90: "#222222",
                  primary50: "#b2b2b2",
                  primary25: "#b2b2b2",
                  primary: "#b2b2b2",
                },
              })}
              className="basic-single"
              classNamePrefix="select"
              isClearable={isClearable}
              name="color"
              options={regionData}
              placeholder="지역을 선택해주세요"
              defaultValue={region ? region : null}
              onChange={(op: any) => setRegion(op)}
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
              <NumberInput type="number" placeholder="YYYY" />
              ~
              <NumberInput type="number" placeholder="YYYY" />
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
