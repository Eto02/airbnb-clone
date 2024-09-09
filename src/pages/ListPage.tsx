import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { Suspense, useEffect } from "react";
import {
  Await,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Map from "../components/Map";
import { LoaderPostData, Post } from "../lib/loaders";
import { Skeleton } from "@/components/ui/skeleton";

const ListPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", newPage.toString());
    newSearchParams.set("limit", "8");
    navigate(`?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    handlePageChange(1);
  }, []);

  const data = useLoaderData() as LoaderPostData;

  return (
    <div className="flex h-full">
      <div className="basis-3/5 ">
        <div className="pr-[50px] flex flex-col gap-[50px] overflow-y-scroll h-full pb-12">
          <Filter />
          <Suspense
            fallback={
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            }
          >
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
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() => handlePageChange(currentPage - 1)}
                          />
                        </PaginationItem>
                      )}
                      {currentPage >= 2 && (
                        <PaginationItem>
                          <PaginationLink
                            isActive={false}
                            onClick={() => handlePageChange(currentPage - 1)}
                          >
                            {currentPage - 1}
                          </PaginationLink>
                        </PaginationItem>
                      )}
                      <PaginationItem>
                        <PaginationLink
                          isActive
                          onClick={() => handlePageChange(currentPage)}
                        >
                          {currentPage}
                        </PaginationLink>
                      </PaginationItem>
                      {currentPage <
                        postResponse.data.pagination.totalPages && (
                        <PaginationItem>
                          <PaginationLink
                            isActive={false}
                            onClick={() => handlePageChange(currentPage + 1)}
                          >
                            {currentPage + 1}
                          </PaginationLink>
                        </PaginationItem>
                      )}
                      {postResponse.data.pagination.totalPages - currentPage >
                        1 && (
                        <>
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationNext
                              onClick={() => handlePageChange(currentPage + 1)}
                            />
                          </PaginationItem>
                        </>
                      )}
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="basis-2/5 bg-[#84DCC6]  z-0 ">
        <Suspense
          fallback={
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          }
        >
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
