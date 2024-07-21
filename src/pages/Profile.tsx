import React, { Suspense, useContext, useEffect } from "react";
import {
  Await,
  Link,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Chat from "../components/Chat";
import List from "../components/List";
import { AuthContext, AuthContextType } from "../context/authContext";
import myAxios from "../lib/axiosConfig";
import { LoaderPostChatData } from "../lib/loaders";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const Profile: React.FC = () => {
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

  const { currentUser, updateUser } = useContext(
    AuthContext
  ) as AuthContextType;
  const data = useLoaderData() as LoaderPostChatData;

  const handleLoogout = async (): Promise<void> => {
    try {
      await myAxios.post("/api/auth/logout");
      updateUser(null);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePageChange(1);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-y-scroll lg:overflow-y-visible">
      <div
        className="basis-3/5 overflow-y-visible lg:overflow-y-scroll flex-none h-max lg:h-screen "
        id="left"
      >
        <div className="pr-12 flex flex-col gap-10 pb-12">
          <div className="flex justify-between items-center">
            <h1 className="font-light">User Information</h1>
            <Link
              to="/profile/update"
              className="py-3 px-6 bg-[#84DCC6] cursor-pointer border-0"
            >
              Update Profile
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <span className=" flex items-center gap-5">
              Avatar:
              <img
                className="w-10 h-10 rounded-[50%] object-cover"
                src={currentUser?.avatar || "/noavatar.jpg"}
                alt="avatar"
              />
            </span>
            <span className=" flex items-center gap-5">
              Username: <b>{currentUser?.username}</b>
            </span>
            <span className=" flex items-center gap-5">
              Email: <b>{currentUser?.email}</b>
            </span>
            <button
              onClick={handleLoogout}
              className="w-[100px] bg-[teal] border-0 text-white px-5 py-2 cursor-pointer rounded-md"
            >
              Logout
            </button>
          </div>
          <div className="flex justify-between">
            <h1 className="font-light">My List</h1>
            <Link to="/create/post">
              <button className="py-3 px-6 bg-[#84DCC6] cursor-pointer border-0">
                Create New Post
              </button>
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading package location!</p>}
            >
              {(postResponse) => (
                <div>
                  {<List items={postResponse.data.data} />}
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

          <div>
            <h1 className="font-light">Saved List</h1>
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.savedResponse}
                errorElement={<p>Error loading package location!</p>}
              >
                {(savedResponse) => (
                  <div>
                    {<List items={savedResponse.data.data} />}
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
      <div className="basis-2/5 h-screen flex-none bg-[#84DCC6]" id="right">
        <div className="px-5 h-full">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Profile;
