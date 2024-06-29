import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Card from "../component/Card";
import Filter from "../component/Filter";
import { LoaderData, Post } from "../lib/loaders";
import Map from "../component/Map";

const ListPage: React.FC = () => {
  const data = useLoaderData() as LoaderData;
  return (
    <div className="flex h-full">
      <div className="basis-3/5 ">
        <div className="pr-[50px] flex flex-col gap-[50px] overflow-y-scroll h-full pb-12">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading package location!</p>}
            >
              {(postResponse) =>
                postResponse.data.data.map((post: Post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="basis-2/5 bg-[#84DCC6]">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading package location!</p>}
          >
            {(postResponse) => <Map items={postResponse.data.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
