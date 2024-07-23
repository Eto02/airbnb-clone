import { NewCard } from "@/components/NewCard";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import React, { Suspense, useEffect } from "react";
import {
  Await,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { LoaderPostChatData, Post } from "../lib/loaders";
const SavedPost: React.FC = () => {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", newPage.toString());
    newSearchParams.set("limit", "5");
    nav(`?${newSearchParams.toString()}`);
  };

  const data = useLoaderData() as LoaderPostChatData;

  useEffect(() => {
    handlePageChange(1);
  }, []);
  return (
    <div className=" h-full ">
      <div className="flex-none h-max lg:h-screen " id="left">
        <div className="pr-12 flex flex-col gap-10 pb-12">
          <div className="mt-4">
            <h1 className="font-light text-right  ">
              <Badge className="rounded text-base">Saved List</Badge>
            </h1>
            <Separator className="my-4" />
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.savedResponse}
                errorElement={<p>Error loading package location!</p>}
              >
                {(savedResponse) => (
                  <div>
                    <div className="grid grid-cols-3 gap-4">
                      {savedResponse.data.data.map((post: Post) => (
                        <NewCard key={post.id} item={post} />
                      ))}
                    </div>

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
                          savedResponse.data.pagination.totalPages && (
                          <PaginationItem>
                            <PaginationLink
                              isActive={false}
                              onClick={() => handlePageChange(currentPage + 1)}
                            >
                              {currentPage + 1}
                            </PaginationLink>
                          </PaginationItem>
                        )}
                        {savedResponse.data.pagination.totalPages -
                          currentPage >
                          1 && (
                          <>
                            <PaginationItem>
                              <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationNext
                                onClick={() =>
                                  handlePageChange(currentPage + 1)
                                }
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
      </div>
    </div>
  );
};

export default SavedPost;
