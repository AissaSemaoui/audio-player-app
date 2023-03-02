import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrack } from "../redux/activeTrack.slice";

const useUploadTrack = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (uploadedFiles.length > 0)
      uploadedFiles.forEach(async (file) => {
        let { coverImg, audioMeta } = await extractMetadata(file);
        console.log("we are about : ");
        let dataUrl = await getDataUrl(file);

        dispatch(
          addTrack({
            dataUrl: dataUrl,
            coverImg,
            metadata: {
              author: audioMeta.author,
              album: audioMeta.album,
              title: audioMeta.title,
            },
          })
        );
      });
  }, [uploadedFiles]);

  return { setUploadedFiles };
};

export default useUploadTrack;

interface metadataTypes {
  coverImg: string;
  audioMeta: {
    author: string;
    title: string;
    album: string;
    year: string;
  };
}

// Extract cover and title, author etc...
const extractMetadata = (audioFile: File): Promise<metadataTypes> => {
  let jsmediatags = window.jsmediatags;
  let coverImg: string = "";
  let audioMeta = {
    author: "",
    title: "",
    album: "",
    year: "",
  };
  return new Promise((resolve, reject) => {
    jsmediatags.read(audioFile, {
      onSuccess(data) {
        const tags = data.tags;
        const format = data.tags.picture?.format;
        const arrayBuffer: any = data.tags.picture?.data;

        const base64 = btoa(
          new Uint8Array(arrayBuffer)?.reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );

        audioMeta = {
          author: tags?.artist || "",
          title: tags?.title || "",
          album: tags?.album || "",
          year: tags?.track || "",
        };
        coverImg = `data:${format};base64,${base64}`;

        resolve({ coverImg, audioMeta });
      },

      onError(error) {
        console.error(error);
        reject("we wasnt able to extract image !");
      },
    });
  });
};

// Get Data url
const getDataUrl = (audioFile: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader: FileReader = new FileReader();
    reader.onloadend = (event: ProgressEvent<FileReader>) => {
      resolve(reader.result as string);
    };

    reader.onerror = (event: ProgressEvent<FileReader>) => {
      reject("no way");
      throw new Error("Can't get data url !!");
    };

    reader.readAsDataURL(audioFile);
  });
};
