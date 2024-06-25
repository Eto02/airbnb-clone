import { createContext } from "react";

interface CloudinaryScriptContextType {
  loaded: boolean;
}

const CloudinaryScriptContext = createContext<
  CloudinaryScriptContextType | undefined
>(undefined);

function UploadWidget() {}

export default UploadWidget;
export { CloudinaryScriptContext };
