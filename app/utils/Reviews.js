"use server";
import { MdStar } from "react-icons/md";
import Link from "next/link";
import ReviewsList from "@/app/components/Client/ReviewsList";

export default async function Reviews() {
  return (
    <>
      <div className="w-full space-y-4">
        {/* Reviews Header */}
        <div className="space-y-2">
          <div>
            <Link
              href={"https://www.fiverr.com/agencies/duseca"}
              target="__blank"
            >
              <span className="px-2 py-1 bg-[#122349] rounded whitespace-nowrap text-white cursor-pointer w-fit uppercase font-semibold text-sm">
                fiverr <span className="text-[#1DBF73]">verified</span>
              </span>
            </Link>
          </div>
          <div className="">
            <p className="font- text-gray-150 text-base ml-2">458 Reviews</p>
          </div>
        </div>
        {/*  */}
        <div className="text-gray-150 flex flex-wrap md:flex-nowrap gap-8">
          {/* Reviews Stars */}
          <div className="space-y-4 text-base max-w-sm w-full ps-2">
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <p className="font-semibold ">5 Stars</p>
              <div className="h-2 max-w-56 w-full md:w-80 rounded-full bg-blue-150"></div>
              <div>
                <p>(447)</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <p className="font-semibold">4 Stars</p>
              <div className="h-2 max-w-56 w-full md:w-80 rounded-full bg-gray-250">
                <div className="h-full w-2.5 bg-blue-150 rounded"></div>
              </div>
              <div>
                <p>(11)</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <p className="font-semibold">3 Stars</p>
              <div className="h-2 max-w-56 w-full md:w-80 rounded-full bg-gray-250">
                <div className="h-full w-0 bg-blue-150"></div>
              </div>
              <div>
                <p>(0)</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <p className="font-semibold">2 Stars</p>
              <div className="h-2 max-w-56 w-full md:w-80 rounded-full bg-gray-250">
                <div className="h-full w-0 bg-blue-150"></div>
              </div>
              <div>
                <p>(0)</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <p className="font-semibold">1 Stars</p>
              <div className="h-2 max-w-56 w-full md:w-80 rounded-full bg-gray-250">
                <div className="h-full w-0 bg-blue-150 "></div>
              </div>
              <div>
                <p>(0)</p>
              </div>
            </div>
          </div>

          {/* Reviews Breakdown */}
          <div className="max-w-[435px] w-full space-y-4 text-base">
            <div>
              <h1 className="font-semibold">Rating Breakdown</h1>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between ">
                <p className="text-gray-350">Seller communication level</p>
                <div className="flex items-center gap-1">
                  <MdStar className="text-blue-150" />
                  <span className="text-sm font-semibold">5</span>
                </div>
              </div>
              <div className="flex justify-between ">
                <p className="text-gray-350">Recommend to a friend</p>
                <div className="flex items-center gap-1">
                  <MdStar className="text-blue-150" />
                  <span className="text-sm font-semibold">5</span>
                </div>
              </div>
              <div className="flex justify-between ">
                <p className="text-gray-350">Service as described</p>
                <div className="flex items-center gap-1">
                  <MdStar className="text-blue-150" />
                  <span className="text-sm font-semibold">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Line divider */}

      {/* Reviews */}
      <ReviewsList />
    </>
  );
}
