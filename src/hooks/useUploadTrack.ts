import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { playTrack } from "../redux/activeTrack.slice";
import { addNewTrack } from "../redux/trackList.slice";
import { addToPlaylist } from "../redux/playlist.slice";

interface uploadStatusTypes {
  name: string;
  status: boolean;
}

const useUploadTrack = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<uploadStatusTypes[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      // Play tracks
      uploadedFiles.forEach(async (file: File, index) => {
        try {
          console.log(file);
          let { coverImg, audioMeta } = await extractMetadata(file);
          let dataUrl = await getDataUrl(file);
          console.log("failed", audioMeta, dataUrl);
          const trackData = {
            dataUrl: dataUrl,
            format: getTrackFormat(file),
            coverImg,
            isFavorite: false,
            id: index,
            metadata: {
              author: audioMeta?.author,
              album: audioMeta?.album,
              title: audioMeta?.title || file.name,
            },
          };

          if (dataUrl) {
            dispatch(addNewTrack(trackData));
            dispatch(
              addToPlaylist({
                title: trackData?.metadata?.title || "",
                coverImg: trackData?.coverImg || "",
              })
            );
            dispatch(playTrack(trackData));
            setUploadStatus((prev) => [
              { name: file.name, status: true },
              ...prev,
            ]);
          }
        } catch (error) {
          setUploadStatus((prev) => [
            { name: file.name, status: false },
            ...prev,
          ]);
          throw error;
        }
      });
    }
  }, [uploadedFiles]);

  return { setUploadedFiles, uploadStatus };
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
        coverImg = base64 ? `data:${format};base64,${base64}` : "";

        resolve({ coverImg, audioMeta });
      },

      onError(error) {
        console.error(error);
        reject(false);
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
      reject(false);
      console.log("error", event);
      throw new Error("Can't get data url !!");
    };

    reader.readAsDataURL(audioFile);
  });
};

const getTrackFormat = (file: File): string => {
  let ext = file.name.match(/\.([a-zA-Z1-9]*)$/);

  if (ext !== null) {
    return ext[1];
  } else {
    return "";
  }
};
