/* eslint-disable @typescript-eslint/no-explicit-any */
import { defer } from "react-router-dom";
import myAxios from "./axiosConfig";
import { DeferredData } from "@remix-run/router/dist/utils";
export declare type Params<Key extends string = string> = {
  readonly [key in Key]: string | undefined;
};
interface DataFunctionArgs {
  request: Request;
  params: Params;
  context?: any;
}

export interface LoaderFunction {
  (args: LoaderFunctionArgs): Promise<Response> | Response | Promise<any> | any;
}

export interface LoaderFunctionArgs extends DataFunctionArgs {}

interface TodoLoaderFunctionArgs extends Omit<LoaderFunctionArgs, "params"> {
  params: {
    todoId: string;
  };
}
interface TodoLoaderFunction extends Omit<LoaderFunction, "args"> {
  (args: TodoLoaderFunctionArgs):
    | Promise<Response>
    | Response
    | Promise<any>
    | any;
}

type PostDetail = {
  id: string;
  desc: string;
  utilities: string;
  pet: string;
  income: string;
  size: number;
  school: number;
  bus: number;
  restaurant: number;
  postId: string;
};

type User = {
  username: string;
  avatar: string;
};

export type Post = {
  id: string;
  title: string;
  price: number;
  images: string[];
  address: string;
  city: string;
  bedroom: number;
  bathroom: number;
  latitude: string;
  longitude: string;
  type: string;
  property: string;
  createdAt: string;
  userId: string;
  postDetail: PostDetail;
  user: User;
};
export type LoaderData = {
  postResponse: Promise<Post[]>;
};

export const detailsPageLoader: TodoLoaderFunction = async ({
  params,
}: {
  params: Params;
}): Promise<Post> => {
  const res = await myAxios.get("/api/post/" + params.id);
  return res.data.data;
};

export const listPageLoader: TodoLoaderFunction = async ({
  request,
}: {
  request: Request;
}): Promise<DeferredData> => {
  const query = request.url.split("?")[1];
  const postPromise = myAxios.get("/api/post?" + query);
  return defer({
    postResponse: postPromise,
  });
};
