import React, { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import ComponentContent from "../../myComponents/ComponentContent";
import { CopyBlock, railscast } from "react-code-blocks";
import Button from "../../components/Button/Button";
import ButtonPrimary from "../../components/Button/ButtonPrimary";

const codeBlockList = {
  defaultButton: `import Button from "../../components/Button/Button";

function App() {
  return (
    <div className="flex space-x-4">
      <Button
        title="Button"
        type="button"
        onClick={() => alert("This is Button Component")}
      />
      <Button
        className="border border-slate-300 !bg-white font-medium !text-slate-500 hover:!bg-slate-50 focus:ring-slate-600"
        title="Button"
        type="button"
        onClick={() =>
          alert("This is Button Component with addition classes")
        }
      />
    </div>
  )`,
  buttonPrimary: `import ButtonPrimary from "../../components/Button/ButtonPrimary";

function App() {
  return (
    <div>
      <ButtonPrimary
        title="Primary"
        type="button"
        onClick={() => alert("This is Button Component")}
      />
    </div>
  )`,
  buttonWithIcon: `import Button from "../../components/Button/Button";

function App() {
  return (
    <div className="flex space-x-4">
      <Button
        title={
          <div className="flex items-center py-1 px-1.5">
            <svg
              aria-hidden="true"
              className="mr-2 -ml-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Buy now
          </div>
        }
        type="button"
        onClick={() => alert("This is Button Component")}
      />
      <Button
        title={
          <div className="flex items-center py-1 px-1.5">
            Choose plan
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        }
        type="button"
        onClick={() => alert("This is Button Component")}
      />
    </div>
  )`,
  buttonLoading: `import Button from "../../components/Button/Button";

function App() {
  return (
    <div>
      <Button
        title={
          <div className="flex items-center py-1 px-1.5">
            {isLoading ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-r-white"></span>
                Loading...
              </>
            ) : (
              "Click Me!"
            )}
          </div>
        }
        type="button"
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 5000);
        }}
      />
    </div>
  )`,
  buttonSizing: `import Button from "../../components/Button/Button";

function App() {
  return (
    <div className="flex space-x-4">
      <Button
        className="py-1.5 px-2 text-xs"
        title="Button"
        type="button"
        onClick={() => alert("This is extra small button")}
      />
      <Button
        className="py-1.5 px-2 text-sm"
        title="Button"
        type="button"
        onClick={() => alert("This is extra small button")}
      />

      <Button
        title="Button"
        type="button"
        onClick={() => alert("This is base button")}
      />
      <Button
        className="py-2 px-3 text-lg"
        title="Button"
        type="button"
        onClick={() => alert("This is large button")}
      />
      <Button
        className="py-2.5 px-4 text-xl"
        title="Button"
        type="button"
        onClick={() => alert("This is extra large button")}
      />
    </div>
  )`,
  moreExamples: `import Button from "../../components/Button/Button";

function App() {
  return (
    <div className="flex space-x-4">
      <Button
        className="bg-[#4a6aae] hover:bg-[#3b5998]/90 focus:ring-[#3b5998]/90"
        title={
          <div className="flex items-center py-1 px-1.5">
            <svg
              className="mr-2 -ml-1 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
            Sign in with Facebook
          </div>
        }
        type="button"
        onClick={() => alert("This is more example button usage")}
      />
      <Button
        className="bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-[#1da1f2]/90"
        title={
          <div className="flex items-center py-1 px-1.5">
            <svg
              class="mr-2 -ml-1 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
              ></path>
            </svg>
            Sign in with Twitter
          </div>
        }
        type="button"
        onClick={() => alert("This is more example button usage")}
      />
    </div>
  )`,
};

function ButtonPage() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <ComponentContent title={"Default button"}>
        {(isPreview) =>
          isPreview ? (
            <div className="flex h-32 w-full items-center justify-center space-x-6 rounded-md border px-4 text-sm">
              <Button
                title="Button"
                type="button"
                onClick={() => alert("This is Button Component")}
              />
              <Button
                className="border border-slate-300 !bg-white font-medium !text-slate-500 hover:!bg-slate-50 focus:ring-slate-600"
                title="Button"
                type="button"
                onClick={() =>
                  alert("This is Button Component with addition classes")
                }
              />
            </div>
          ) : (
            <div className="code h-auto w-full rounded-md border text-sm">
              <CopyBlock
                language="jsx"
                text={codeBlockList.defaultButton}
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
      <p className="my-20">
        The Button component above can be customized by adding some classes from
        tailwind css. I recommend you to use the ButtonPrimary component as
        below and customize directly on this component to make your style
        consistent.
      </p>
      <ComponentContent title={"Button Primary"}>
        {(isPreview) =>
          isPreview ? (
            <div className="flex h-32 w-full items-center justify-center space-x-6 rounded-md border px-4 text-sm">
              <ButtonPrimary
                title="Primary"
                type="button"
                onClick={() => alert("This is ButtonPrimary Component")}
              />
            </div>
          ) : (
            <div className="code h-auto w-full rounded-md border text-sm">
              <CopyBlock
                language="jsx"
                text={codeBlockList.buttonPrimary}
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
      <ComponentContent title={"Button with icon"}>
        {(isPreview) =>
          isPreview ? (
            <div className="flex h-32 w-full items-center justify-center space-x-6 rounded-md border px-4 text-sm">
              <Button
                title={
                  <div className="flex items-center py-1 px-1.5">
                    <svg
                      aria-hidden="true"
                      className="mr-2 -ml-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                    Buy now
                  </div>
                }
                type="button"
                onClick={() => alert("This is Button Component")}
              />
              <Button
                title={
                  <div className="flex items-center py-1 px-1.5">
                    Choose plan
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                }
                type="button"
                onClick={() => alert("This is Button Component")}
              />
            </div>
          ) : (
            <div className="code h-auto w-full rounded-md border text-sm">
              <CopyBlock
                language="jsx"
                text={codeBlockList.buttonWithIcon}
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
      <ComponentContent title={"Loading onClick"}>
        {(isPreview) =>
          isPreview ? (
            <div className="flex h-32 w-full items-center justify-center space-x-6 rounded-md border px-4 text-sm">
              <Button
                title={
                  <div className="flex items-center py-1 px-1.5">
                    {isLoading ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-r-white"></span>
                        Loading...
                      </>
                    ) : (
                      "Click Me!"
                    )}
                  </div>
                }
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => setIsLoading(false), 5000);
                }}
              />
            </div>
          ) : (
            <div className="code h-auto w-full rounded-md border text-sm">
              <CopyBlock
                language="jsx"
                text={codeBlockList.buttonLoading}
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
      <ComponentContent title={"Buttom sizing"}>
        {(isPreview) =>
          isPreview ? (
            <div className="flex h-64 w-full items-center rounded-md border px-4">
              <div className="flex w-full flex-wrap items-center justify-around">
                <Button
                  className="py-1.5 px-2 text-xs"
                  title="Button"
                  type="button"
                  onClick={() => alert("This is extra small button")}
                />
                <Button
                  className="py-1.5 px-2 text-sm"
                  title="Button"
                  type="button"
                  onClick={() => alert("This is extra small button")}
                />

                <Button
                  title="Button"
                  type="button"
                  onClick={() => alert("This is base button")}
                />
                <Button
                  className="py-2 px-3 text-lg"
                  title="Button"
                  type="button"
                  onClick={() => alert("This is large button")}
                />
                <Button
                  className="py-2.5 px-4 text-xl"
                  title="Button"
                  type="button"
                  onClick={() => alert("This is extra large button")}
                />
              </div>
            </div>
          ) : (
            <div className="code h-auto w-full rounded-md border text-sm">
              <CopyBlock
                language="jsx"
                text={codeBlockList.buttonSizing}
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
      <ComponentContent title={"More examples"}>
        {(isPreview) =>
          isPreview ? (
            <div className="flex h-32 w-full items-center justify-center space-x-6 rounded-md border px-4 text-sm">
              <Button
                className="bg-[#4a6aae] hover:bg-[#3b5998]/90 focus:ring-[#3b5998]/90"
                title={
                  <div className="flex items-center py-1 px-1.5">
                    <svg
                      className="mr-2 -ml-1 h-4 w-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                      ></path>
                    </svg>
                    Sign in with Facebook
                  </div>
                }
                type="button"
                onClick={() => alert("This is more example button usage")}
              />
              <Button
                className="bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-[#1da1f2]/90"
                title={
                  <div className="flex items-center py-1 px-1.5">
                    <svg
                      class="mr-2 -ml-1 h-4 w-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                      ></path>
                    </svg>
                    Sign in with Twitter
                  </div>
                }
                type="button"
                onClick={() => alert("This is more example button usage")}
              />
            </div>
          ) : (
            <div className="code h-auto w-full rounded-md border text-sm">
              <CopyBlock
                language="jsx"
                text={codeBlockList.moreExamples}
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

export default ButtonPage;
