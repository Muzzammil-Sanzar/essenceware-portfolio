"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { Fragment, useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import RequestPricingModal from "../requestPricing/RequestPricingModal";

export default function ProjectModal({
  isOpen,
  setIsOpen,
  Casestudy,
  index,
  setIndex,
}) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  function closeModal() {
    if (isDesktop) {
      return setIsOpen(false);
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 px-4 b" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-650/40" />
        </Transition.Child>

        <div className="fixed px-4 py-2 inset-0 overflow-y-auto">
          <div
            onClick={() => setIsOpen(false)}
            onTouchStart={() => setIsOpen(false)}
            className="w-full flex justify-end z-50 absolute outline-none top-6 2xl:top-10 right-5 lg:right-24 1xl:right-72"
          >
            <button
              className="outline-none bg-white p-4 rounded-full"
              onTouchStart={() => setIsOpen(false)}
              onClick={() => setIsOpen(false)}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.3327 28.3334L1.66602 1.66669M28.3327 1.66669L1.66602 28.3334"
                  stroke="black"
                  strokeWidth="3.33333"
                  strokeLinecap="round"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          <div className="flex h-[98vh] items-center justify-center text-center flex-col">
            <div className="absolute rounded-full z-50 top-[50%] w-full">
              <div className="max-w-4xl mx-auto lg:px-16 flex justify-between items-center px-2">
                <div
                  onClick={(e) =>
                    setIndex((pre) => {
                      if (pre === 0) {
                        return Casestudy?.length - 1;
                      }
                      return pre - 1;
                    })
                  }
                  className="w-11 h-11 cursor-pointer rounded-full flex items-center justify-center bg-blue-150/80"
                >
                  <button>
                    <SlArrowLeft className="w-4 h-4 text-white" />
                  </button>
                </div>

                <div
                  onClick={(e) =>
                    setIndex((pre) => {
                      if (pre === Casestudy?.length - 1) {
                        return 0;
                      }
                      return pre + 1;
                    })
                  }
                  className="w-11 h-11 cursor-pointer  rounded-full flex items-center justify-center bg-blue-150/80"
                >
                  <button>
                    <SlArrowRight className="w-4 h-4  text-white" />
                  </button>
                </div>
              </div>
            </div>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" w-full max-w-3xl transform overflow-auto bg-white rounded-md pb-5 mt-20 text-left align-middle shadow-xl transition-all">
                <div className="sticky bg-white top-0 flex gap-4 items-center justify-between py-5 border-b px-5">
                  <div className="">
                    <Image
                      priority={true}
                      src={logo}
                      alt="logo"
                      width={250}
                      height={100}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="" onClick={(e) => setIsChatOpen(true)}>
                    <button className="bg-blue-150 rounded-lg text-white py-1.5 xl:py-2 px-3 xl:px-4 gap-2 items-center font-semibold">
                      Request pricing
                    </button>
                  </div>
                </div>

                <div className="px-5 h-full text-blue-140">
                  <div className="w-full py-5">
                    <div className=" space-y-5">
                      <div className="space-y-2.5">
                        <h1 className="font-semibold text-xl">
                          {Casestudy[index]?.title}
                        </h1>
                        <p className="text-gray-450 text-sm">
                          {Casestudy[index]?.intro}
                        </p>
                      </div>
                      <div className="">
                        <div className="min-h-screen flex items-center justify-center font-sans">
                          <div className="max-w-4xl mx-auto rounded-lg">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-blue-800 mb-6 sm:mb-8">
                              Modern Frontend Development with React, HTML, CSS
                              & Tailwind CSS
                            </h1>
                            <p className="text-gray-700 text-base sm:text-lg mb-6">
                              This comprehensive course, "Modern Frontend
                              Development with React, HTML, CSS & Tailwind CSS,"
                              is designed to take you from a foundational
                              understanding of web development to building
                              sophisticated, responsive, and visually appealing
                              user interfaces. You'll gain practical, hands-on
                              experience by creating real-world projects,
                              ensuring you not only grasp the theoretical
                              concepts but also master their application.
                            </p>

                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b-2 border-blue-200 pb-2 mt-8 mb-4">
                              What is offered in this course:
                            </h2>

                            <section>
                              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mt-6 mb-3">
                                1. HTML Fundamentals (Structuring Web Content):
                              </h3>
                              <ul className="list-disc pl-5 text-gray-700">
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Core HTML5 Elements:
                                  </strong>{" "}
                                  Learn to structure web pages using semantic
                                  HTML5 tags (e.g., <code>header</code>,{" "}
                                  <code>nav</code>, <code>main</code>,{" "}
                                  <code>footer</code>, <code>section</code>,{" "}
                                  <code>article</code>, <code>aside</code>).
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Text Formatting and Semantics:
                                  </strong>{" "}
                                  Understand how to properly use headings,
                                  paragraphs, lists (ordered, unordered,
                                  description), strong, emphasis, etc., for
                                  clear and accessible content.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Links and Images:
                                  </strong>{" "}
                                  Master the creation of effective hyperlinks
                                  and the inclusion of various image formats
                                  with accessibility best practices.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Forms and Input Handling:
                                  </strong>{" "}
                                  Learn to build interactive forms, handle
                                  different input types (text, numbers, dates,
                                  checkboxes, radio buttons), and understand
                                  form validation.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Tables:
                                  </strong>{" "}
                                  Create structured data tables for presenting
                                  information clearly.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Multimedia Integration:
                                  </strong>{" "}
                                  Embed audio and video into your web pages.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Accessibility (A11y) Basics:
                                  </strong>{" "}
                                  Understand the importance of semantic HTML and
                                  ARIA attributes for creating inclusive web
                                  experiences.
                                </li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mt-6 mb-3">
                                2. CSS Essentials (Styling Web Pages):
                              </h3>
                              <ul className="list-disc pl-5 text-gray-700">
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    CSS Selectors and Specificity:
                                  </strong>{" "}
                                  Learn to target HTML elements effectively
                                  using various selectors (tag, class, ID,
                                  attribute, pseudo-classes, pseudo-elements)
                                  and understand how CSS rules are applied.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    The Box Model:
                                  </strong>{" "}
                                  Master the fundamental concept of margin,
                                  border, padding, and content to control
                                  element spacing and layout.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Typography:
                                  </strong>{" "}
                                  Style text with properties like{" "}
                                  <code>font-family</code>,{" "}
                                  <code>font-size</code>,{" "}
                                  <code>font-weight</code>,{" "}
                                  <code>line-height</code>,{" "}
                                  <code>text-align</code>, and more.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Colors and Backgrounds:
                                  </strong>{" "}
                                  Apply colors to text, backgrounds, and borders
                                  using various color formats (hex, RGB, HSL).
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Flexbox for Layout:
                                  </strong>{" "}
                                  Gain proficiency in creating one-dimensional
                                  layouts with Flexbox, aligning and
                                  distributing items efficiently.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    CSS Grid for Layout:
                                  </strong>{" "}
                                  Master two-dimensional layouts with CSS Grid,
                                  building complex page structures with ease.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Responsive Design with Media Queries:
                                  </strong>{" "}
                                  Learn to adapt your designs for different
                                  screen sizes (desktops, tablets, mobile) using
                                  media queries.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Transitions and Animations:
                                  </strong>{" "}
                                  Add smooth visual effects and interactivity to
                                  your web elements.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Basic CSS Transforms:
                                  </strong>{" "}
                                  Apply 2D and 3D transformations like{" "}
                                  <code>translate</code>, <code>rotate</code>,{" "}
                                  <code>scale</code>, and <code>skew</code>.
                                </li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mt-6 mb-3">
                                3. Tailwind CSS (Utility-First Styling):
                              </h3>
                              <ul className="list-disc pl-5 text-gray-700">
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Introduction to Tailwind CSS:
                                  </strong>{" "}
                                  Understand the utility-first philosophy and
                                  how it streamlines styling.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Setup and Configuration:
                                  </strong>{" "}
                                  Learn to integrate Tailwind CSS into your
                                  project and customize its default
                                  configuration.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Core Utility Classes:
                                  </strong>{" "}
                                  Master a vast array of utility classes for
                                  styling (e.g., <code>flex</code>,{" "}
                                  <code>grid</code>, <code>p-4</code>,{" "}
                                  <code>text-lg</code>, <code>bg-blue-500</code>
                                  , <code>shadow-md</code>,{" "}
                                  <code>rounded-lg</code>).
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Responsive Design with Tailwind:
                                  </strong>{" "}
                                  Utilize Tailwind's responsive prefixes (e.g.,{" "}
                                  <code>sm:</code>, <code>md:</code>,{" "}
                                  <code>lg:</code>) to easily build adaptive
                                  layouts.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Hover, Focus, and Other States:
                                  </strong>{" "}
                                  Apply styles based on element states.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Customizing Tailwind:
                                  </strong>{" "}
                                  Learn how to extend Tailwind's default theme
                                  with your own colors, fonts, spacing, and
                                  more.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Extracting Components with{" "}
                                    <code>@apply</code>:
                                  </strong>{" "}
                                  Understand how to combine multiple utility
                                  classes into reusable custom components.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Optimizing Production Builds:
                                  </strong>{" "}
                                  Learn about PurgeCSS (or its modern equivalent
                                  in Tailwind v3+) to remove unused CSS for
                                  smaller file sizes.
                                </li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mt-6 mb-3">
                                4. React.js (Building Dynamic User Interfaces):
                              </h3>
                              <ul className="list-disc pl-5 text-gray-700">
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Introduction to React:
                                  </strong>{" "}
                                  Understand the core concepts of React,
                                  including components, JSX, and the virtual
                                  DOM.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Setting up a React Project:
                                  </strong>{" "}
                                  Learn to initialize a React application using
                                  Create React App or Vite.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Components (Functional & Class):
                                  </strong>{" "}
                                  Master the creation of reusable UI components
                                  and understand the differences between
                                  functional and class components.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Props:
                                  </strong>{" "}
                                  Learn how to pass data between components
                                  using props.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    State and the <code>useState</code> Hook:
                                  </strong>{" "}
                                  Understand component-level state management
                                  and how to use the <code>useState</code> hook
                                  for dynamic UI updates.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Lifecycle of a Component &{" "}
                                    <code>useEffect</code> Hook:
                                  </strong>{" "}
                                  Explore how components mount, update, and
                                  unmount, and use the <code>useEffect</code>{" "}
                                  hook for side effects.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Event Handling:
                                  </strong>{" "}
                                  Learn to handle user interactions like clicks,
                                  form submissions, and input changes.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Conditional Rendering:
                                  </strong>{" "}
                                  Display different UI elements based on
                                  specific conditions.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    List Rendering:
                                  </strong>{" "}
                                  Efficiently render lists of data using the{" "}
                                  <code>map</code> method and unique keys.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    React Router:
                                  </strong>{" "}
                                  Implement client-side routing to create
                                  multi-page React applications (Single Page
                                  Applications - SPAs).
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Forms in React:
                                  </strong>{" "}
                                  Handle form inputs, manage form state, and
                                  implement form validation within React.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Context API:
                                  </strong>{" "}
                                  Learn a built-in way to manage global state
                                  across your application without prop drilling.
                                </li>
                                <li className="mb-2">
                                  <strong className="text-blue-600">
                                    Introduction to Hooks:
                                  </strong>{" "}
                                  Explore advanced React Hooks beyond{" "}
                                  <code>useState</code> and{" "}
                                  <code>useEffect</code>.
                                </li>
                                <li>
                                  <strong className="text-blue-600">
                                    Integrating React with Tailwind CSS:
                                  </strong>{" "}
                                  Learn best practices for combining React
                                  components with Tailwind's utility-first
                                  styling.
                                </li>
                              </ul>
                            </section>

                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b-2 border-blue-200 pb-2 mt-8 mb-4">
                              Throughout the course, you will also learn:
                            </h2>
                            <ul className="list-disc pl-5 text-gray-700">
                              <li className="mb-2">
                                <strong className="text-blue-600">
                                  Development Environment Setup:
                                </strong>{" "}
                                Set up your code editor (e.g., VS Code) with
                                essential extensions for HTML, CSS, JavaScript,
                                React, and Tailwind.
                              </li>
                              <li className="mb-2">
                                <strong className="text-blue-600">
                                  Version Control with Git & GitHub:
                                </strong>{" "}
                                Understand fundamental Git commands for tracking
                                changes, collaborating with others, and hosting
                                your projects on GitHub.
                              </li>
                              <li className="mb-2">
                                <strong className="text-blue-600">
                                  Debugging Techniques:
                                </strong>{" "}
                                Learn how to identify and fix common issues in
                                your frontend code.
                              </li>
                              <li className="mb-2">
                                <strong className="text-blue-600">
                                  Project-Based Learning:
                                </strong>{" "}
                                Build multiple real-world projects that
                                integrate all the learned technologies, giving
                                you a strong portfolio.
                              </li>
                              <li>
                                <strong className="text-blue-600">
                                  Best Practices:
                                </strong>{" "}
                                Adopt industry-standard coding practices for
                                clean, maintainable, and scalable frontend
                                applications.
                              </li>
                            </ul>

                            <p className="text-gray-700 text-base sm:text-lg mt-6">
                              By the end of this course, you will have the
                              skills and confidence to build modern, responsive,
                              and interactive web applications from scratch,
                              making you a proficient frontend developer ready
                              for real-world projects.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <RequestPricingModal
                  isOpen={isChatOpen}
                  setIsOpen={setIsChatOpen}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
