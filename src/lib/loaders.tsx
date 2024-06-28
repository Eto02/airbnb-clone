/* eslint-disable @typescript-eslint/no-explicit-any */
import myAxios from "./axiosConfig";
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

export interface Post {
  id: string;
  title: string;
  content: string;
}

export const detailsPageLoader: TodoLoaderFunction = async ({
  params,
}: {
  params: Params;
}): Promise<Post> => {
  const res = await myAxios("/api/post/" + params.id);
  return res.data;
};
