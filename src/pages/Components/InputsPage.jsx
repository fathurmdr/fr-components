import React, { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import ComponentContainer from "../../myComponents/ComponentContent/ComponentContainer";
import ComponentContent from "../../myComponents/ComponentContent";
import Inputs from "../../components/Inputs/Inputs";
import { CopyBlock, railscast } from "react-code-blocks";

const codeBlockList = {
  basicInput: `import { useState } from "react";
import Inputs from "../../components/Inputs/Inputs";

function BasicInputs() {
  const [basicInput, setBasicInput] = useState("");

  return (
    <div>
      <Inputs
        title="Inputs"
        id="input"
        type="text"
        value={basicInput}
        onChange={(e) => setBasicInput(e.target.value)}
        placeholder="placeholder"
      />
    </div>
  )`,
  inputsPrefix: `import { useState } from "react";
import Inputs from "../../components/Inputs/Inputs";

function BasicInputs() {
  const [inputPrefix, setInputPrefix] = useState("");

  return (
    <div>
      <Inputs
        title="Inputs with prefix"
        type="text"
        id="input-with-prefix"
        value={inputPrefix}
        onChange={(e) => setInputPrefix(e.target.value)}
        placeholder="placeholder"
        prefix="prefix"
      />
    </div>
  )`,
  customInputs: `import { useState } from "react";
import Inputs from "../../components/Inputs/Inputs";

function BasicInputs() {
  const [customInput, setCustomInput] = useState("");

  return (
    <div>
      <Inputs
        title="Inputs with custom style"
        type="text"
        id="custom-input"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder="placeholder"
        prefix="prefix"
        prefixClass="text-red-900 !bg-red-200"
        inputClass="text-red-600 placeholder:text-red-200"
        containerClass="border-red-100 !border-2 focus-within:border-red-400 focus-within:ring-red-400"
      />
    </div>
  )`,
  moreExample: `import { useState } from "react";
import Inputs from "../../components/Inputs/Inputs";

function BasicInputs() {
  const [exampleInput, setExampleInput] = useState({
    url: "",
    search: "",
    email: "",
    name: "",
    price: "",
  });

  const { url, search, email, name, price } = exampleInput;

  const onChange = (event) => {
    setExampleInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <div className="my-4">
        <Inputs
          title="Website URL"
          type="text"
          id="url"
          value={url}
          onChange={onChange}
          placeholder="www.example.com"
          prefix="https://"
        />
      </div>
      <div className="my-4">
        <Inputs
          type="text"
          id="search"
          value={search}
          onChange={onChange}
          placeholder="Search"
          prefix={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          }
          prefixClass="!bg-transparent border-r-0"
          inputClass="!bg-transparent pl-0"
          containerClass="bg-slate-100 focus-within:bg-white"
        />
      </div>
      <div className="my-4">
        <Inputs
          title="Your Email"
          type="email"
          id="email"
          value={email}
          onChange={onChange}
          placeholder="youremail@example.com"
          prefix={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          }
          prefixClass="bg-white text-slate-400 border-r-0"
          inputClass="pl-0"
        />
      </div>
      <div className="my-4">
        <Inputs
          title="Full Name"
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="John Wick"
        />
      </div>
      <div className="my-4">
        <Inputs
          title="Price"
          type="number"
          id="price"
          value={price}
          onChange={onChange}
          placeholder="1000"
          prefix="$"
        />
      </div>
    </div>
  )`,
};

function InputsPage() {
  const [basicInput, setBasicInput] = useState("");
  const [inputPrefix, setInputPrefix] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [exampleInput, setExampleInput] = useState({
    url: "",
    search: "",
    email: "",
    name: "",
    price: "",
  });

  const { url, search, email, name, price } = exampleInput;

  const onChange = (event) => {
    setExampleInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <ComponentContent title={"Basic Input"}>
        {(isPreview) =>
          isPreview ? (
            <ComponentContainer>
              <Inputs
                title="Inputs"
                id="input"
                type="text"
                value={basicInput}
                onChange={(e) => setBasicInput(e.target.value)}
                placeholder="placeholder"
              />
            </ComponentContainer>
          ) : (
            <div className="code h-auto w-full rounded-md border text-sm">
              <CopyBlock
                language="jsx"
                text={codeBlockList.basicInput}
                showLineNumbers={true}
                theme={railscast}
                wrapLines={true}
                codeBlock
              />
            </div>
          )
        }
      </ComponentContent>
      <div className="divider my-20"></div>
      <ComponentContent title={"Input with prefix"}>
        {(isPreview) =>
          isPreview ? (
            <ComponentContainer>
              <Inputs
                title="Inputs with prefix"
                type="text"
                id="input-with-prefix"
                value={inputPrefix}
                onChange={(e) => setInputPrefix(e.target.value)}
                placeholder="placeholder"
                prefix="prefix"
              />
            </ComponentContainer>
          ) : (
            <div className="code h-auto w-full rounded-md border text-sm">
              <CopyBlock
                language="jsx"
                text={codeBlockList.inputsPrefix}
                showLineNumbers={true}
                theme={railscast}
                wrapLines={true}
                codeBlock
              />
            </div>
          )
        }
      </ComponentContent>
      <div className="divider my-20"></div>
      <ComponentContent title={"Input with custom style"}>
        {(isPreview) =>
          isPreview ? (
            <ComponentContainer>
              <Inputs
                title="Inputs with custom style"
                type="text"
                id="custom-input"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="placeholder"
                prefix="prefix"
                prefixClass="text-red-900 !bg-red-200"
                inputClass="text-red-600 placeholder:text-red-200"
                containerClass="border-red-100 !border-2 focus-within:border-red-400 focus-within:ring-red-400"
              />
            </ComponentContainer>
          ) : (
            <div className="code h-auto w-full rounded-md border text-sm">
              <CopyBlock
                language="jsx"
                text={codeBlockList.customInputs}
                showLineNumbers={true}
                theme={railscast}
                wrapLines={true}
                codeBlock
              />
            </div>
          )
        }
      </ComponentContent>
      <div className="divider my-20"></div>
      <ComponentContent title={"More example"}>
        {(isPreview) =>
          isPreview ? (
            <ComponentContainer>
              <div className="my-4">
                <Inputs
                  title="Website URL"
                  type="text"
                  id="url"
                  value={url}
                  onChange={onChange}
                  placeholder="www.example.com"
                  prefix="https://"
                />
              </div>
              <div className="my-4">
                <Inputs
                  type="text"
                  id="search"
                  value={search}
                  onChange={onChange}
                  placeholder="Search"
                  prefix={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  }
                  prefixClass="!bg-transparent border-r-0"
                  inputClass="!bg-transparent pl-0"
                  containerClass="bg-slate-100 focus-within:bg-white"
                />
              </div>
              <div className="my-4">
                <Inputs
                  title="Your Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  placeholder="youremail@example.com"
                  prefix={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  }
                  prefixClass="bg-white text-slate-400 border-r-0"
                  inputClass="pl-0"
                />
              </div>
              <div className="my-4">
                <Inputs
                  title="Full Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={onChange}
                  placeholder="John Wick"
                />
              </div>
              <div className="my-4">
                <Inputs
                  title="Price"
                  type="number"
                  id="price"
                  value={price}
                  onChange={onChange}
                  placeholder="1000"
                  prefix="$"
                />
              </div>
            </ComponentContainer>
          ) : (
            <div className="code h-auto w-full rounded-md border text-sm">
              <CopyBlock
                language="jsx"
                text={codeBlockList.moreExample}
                showLineNumbers={true}
                theme={railscast}
                wrapLines={true}
                codeBlock
              />
            </div>
          )
        }
      </ComponentContent>
      <div className="divider my-20"></div>
      <ScrollRestoration />
    </div>
  );
}

export default InputsPage;
