import myAxios from "@/lib/axiosConfig";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

interface FileData {
  filename: string;
  id: string;
  path: string;
}
interface FileUploadProps {
  setImage: Dispatch<SetStateAction<string[]>>;
  setFilesSuccess: Dispatch<SetStateAction<FileData[]>>;
}

const FileUpload: React.FC<FileUploadProps> = ({
  setImage,
  setFilesSuccess,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      setImage([URL.createObjectURL(selectedFiles[0])]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      setMessage("Please select files to upload");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await myAxios.post<{ data: FileData[] }>(
        "/api/file/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("Files uploaded successfully");
      setFilesSuccess(response.data.data);
    } catch (error) {
      setMessage("Failed to upload files");
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input
            id="pictures"
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </div>
        {files.length > 0 && (
          <Button variant="outline" type="submit">
            Upload
          </Button>
        )}
      </form>
      {message && <p className="text-center text-red-500">{message}</p>}
    </>
  );
};

export default FileUpload;
