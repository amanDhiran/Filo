"use client";
import React, { useState } from "react";
import ReactDropzone from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { LuFileSymlink } from "react-icons/lu";
import type { Action } from "@/types";
import { Badge } from "@/components/ui/badge";
import { BiError } from "react-icons/bi";
import { ImSpinner3 } from "react-icons/im";
import { MdDone } from "react-icons/md";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

const extensions = {
    image: [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "webp",
      "ico",
      "tif",
      "tiff",
      "svg",
      "raw",
      "tga",
    ],
}

export default function dropzone() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [actions, setActions] = useState<Action[]>([]);


  const accepted_files = {
    "image/*": [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".webp",
      ".ico",
      ".tif",
      ".tiff",
      ".raw",
      ".tga",
    ],
  };

  const handleHover = (): void => setIsHover(true);
  const handleExitHover = (): void => setIsHover(false);
  const handleUpload = (data: Array<any>): void => {
    handleExitHover();
    // setFiles(data);
    const tmp: Action[] = [];
    data.forEach((file: any) => {
    //   const formData = new FormData();
      tmp.push({
        file_name: file.name,
        file_size: file.size,
        from: file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2),
        to: null,
        file_type: file.type,
        file,
        is_converted: false,
        is_converting: false,
        is_error: false,
      });
    });
    setActions(tmp);
  };
  const updateAction =(file_name: String, to: String): void => {
    setActions(
        actions.map((action): Action => {
          if (action.file_name === file_name) {
            console.log("FOUND");
            return {
              ...action,
              to,
            };
          }
  
          return action;
        })
      );
  }



  return (
    <ReactDropzone
      onDrop={handleUpload}
      onDragEnter={handleHover}
      onDragLeave={handleExitHover}
      accept={accepted_files}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className=" bg-background h-72 lg:h-80 xl:h-96 rounded-3xl shadow-sm border-secondary border-2 border-dashed cursor-pointer flex items-center justify-center"
        >
          <input {...getInputProps()} />
          <div className="space-y-4 text-foreground">
            {isHover ? (
              <>
                <div className="justify-center flex text-6xl">
                  <LuFileSymlink />
                </div>
                <h3 className="text-center font-medium text-2xl">
                  Yes, right there
                </h3>
              </>
            ) : (
              <>
                <div className="justify-center flex text-6xl">
                  <FiUploadCloud />
                </div>
                <h3 className="text-center font-medium text-2xl">
                  Click, or drop your files here
                </h3>
              </>
            )}
          </div>
        </div>
      )}
    </ReactDropzone>
  );
}
