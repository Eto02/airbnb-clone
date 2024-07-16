/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface CloudinaryScriptContextType {
  loaded: boolean;
}

const CloudinaryScriptContext = createContext<
  CloudinaryScriptContextType | undefined
>(undefined);

interface UploadWidgetProps {
  uwConfig: object;
  setState: Dispatch<SetStateAction<string[]>>;
}

function UploadWidget({ uwConfig, setState }: UploadWidgetProps) {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!loaded) {
      const uwScript = document.getElementById(
        "uw"
      ) as HTMLScriptElement | null;
      if (!uwScript) {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    // if (loaded && window.cloudinary) {
    //   const myWidget = window.cloudinary.createUploadWidget(
    //     uwConfig,
    //     (error: any, result: any) => {
    //       if (!error && result && result.event === "success") {
    //         setState((prev) => [...prev, result.info.secure_url]);
    //       }
    //     }
    //   );
    //   document.getElementById("upload_widget")?.addEventListener(
    //     "click",
    //     function () {
    //       myWidget.open();
    //     },
    //     false
    //   );
    // }
    setState(["url"]);

    return uwConfig;
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
