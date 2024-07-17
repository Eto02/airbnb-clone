import React, { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Map from "../components/Map";
import { LoaderPostData, Post } from "../lib/loaders";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const data = useLoaderData() as LoaderPostData;
  return (
    <div className="flex">
      <div className="basis-3/5 ">
        <div className="pr-[50px] flex flex-col gap-[50px] overflow-y-scroll h-full pb-12">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading data</p>}
            >
              {(postResponse) => (
                <div>
                  {postResponse.data.data.map((post: Post) => (
                    <Card key={post.id} item={post} />
                  ))}

                  <Pagination className="pt-10">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={() => handlePageChange(currentPage - 1)}
                        />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          isActive
                          href="#"
                          onClick={() => handlePageChange(1)}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={() => handlePageChange(currentPage + 1)}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
              {/* </> */}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="basis-2/5 bg-[#84DCC6]  z-0">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading map!</p>}
          >
            {(postResponse) => <Map items={postResponse.data.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
