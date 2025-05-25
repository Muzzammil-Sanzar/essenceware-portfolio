"use client";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { GoChevronDown } from "react-icons/go";
import { appIndustriesData } from "@/app/data/appIndustries";

export default function AppIndustriesDrop({ text }) {
  return (
    <Menu as="div" className="relative  inline-block w-full text-left">
      <div>
        <Menu.Button
          className={`inline-flex w-full items-end scale rounded-md ${text} text-base lg:text-sm font-medium hover:text-blue-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <p className="cursor-pointer font-medium ">App Industries</p>
          <GoChevronDown className="w-4 h-4" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-50"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute  left-0 z-50 mt-3 min-w-64 lg:min-w-[450px]  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="grid grid-cols-2 text-start text-sm ">
            {appIndustriesData.map((industry, index) => (
              <div key={index} className="px-1 py-1 border-r">
                <Menu.Item>
                  {({ active }) => (
                    <Link href={`/${industry.id}`}>
                      <button
                        className={`${
                          active
                            ? "bg-blue-150 bg-opacity-10 text-gray-150"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 whitespace-nowrap gap-1.5`}
                      >
                        {industry.title === "IOT" || industry.title === "AI"
                          ? industry.title + " Apps"
                          : industry.title}{" "}
                        <span className="hidden lg:flex">
                          {!(
                            industry.title === "IOT" || industry.title === "AI"
                          ) && "Apps"}
                        </span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
            <div className="px-1 py-1 border-r">
              <Menu.Item>
                {({ active }) => (
                  <Link href={`/custom-app`}>
                    <button
                      className={`${
                        active
                          ? "bg-blue-150 bg-opacity-10 text-gray-150"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 whitespace-nowrap gap-1.5`}
                    >
                      Custom Apps
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
