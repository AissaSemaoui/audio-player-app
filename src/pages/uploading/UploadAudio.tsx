import React, { useEffect } from "react";
import { Dropzone } from "@mantine/dropzone";
import { Text, Title } from "@mantine/core";
import {
  UilBullseye,
  UilCheckCircle,
  UilExclamationCircle,
  UilRecordAudio,
} from "@iconscout/react-unicons";
import useUploadTrack from "../../hooks/useUploadTrack";

function UploadAudio() {
  const { setUploadedFiles, uploadStatus } = useUploadTrack();

  const handleUpload = (files: File[]) => {
    setUploadedFiles(files);
  };

  return (
    <div className="flex flex-col w-full px-10 py-12 bg-blue-900 overflow-y-auto">
      <Title order={1} className="text-neutral-50 mb-4">
        Upload your Audio
      </Title>
      <div className="flex flex-col lg:flex-row gap-8 w-full h-full">
        <Dropzone
          className="grid place-items-center w-2/3 h-full bg-purple-800 hover:bg-purple-700 border-purple-500 hover:border-purple-400 data-[accept=true]:bg-green-100 data-[accept=true]:border-green-600 data-[reject=true]:bg-red-100 data-[reject=true]:border-red-600 "
          color="purple"
          // accept={{
          //   "audio/": [],
          // }}
          onDrop={handleUpload}
        >
          <Dropzone.Idle>
            <div className="h-full flex flex-col lg:flex-row justify-center items-center gap-4">
              <UilRecordAudio className="text-purple-500" size={56} />
              <div>
                <Title order={2} className="text-purple-300">
                  Drag your audio here or click to select files
                </Title>
                <Text className="text-purple-300">
                  Attach as many as you want audio files, each shouldn't exceed
                  10mb
                </Text>
              </div>
            </div>
          </Dropzone.Idle>
          <Dropzone.Accept>
            <div className="h-full flex flex-col justify-center items-center gap-4">
              <UilBullseye className="text-green-600" size={64} />
              <div>
                <Title order={2} className="text-green-600">
                  Nice leave your favorite audio now&nbsp;!
                </Title>
              </div>
            </div>
          </Dropzone.Accept>
          <Dropzone.Reject>
            <div className="h-full flex flex-col justify-center items-center gap-4">
              <UilExclamationCircle className="text-red-600" size={64} />
              <div>
                <Title order={2} className="text-red-600">
                  This audio type isn't supported yet&nbsp;!
                </Title>
                <Text className="text-neutral-800">
                  Please choose another audio with supported extension
                </Text>
              </div>
            </div>
          </Dropzone.Reject>
        </Dropzone>
        <div className="flex flex-col w-1/3 p-4 shadow-md shadow-gray-900 overflow-y-hidden bg-blue-700 border border-solid rounded-md border-blue-600">
          <Title order={3} className="mb-4">
            Uploading logs
          </Title>
          <div className="flex-1 overflow-y-scroll">
            {uploadStatus.map((file, index) =>
              file.status ? (
                <div className="flex justify-between gap-2 w-full py-2 px-4 mb-2 rounded-md bg-blue-800">
                  <span>
                    file : <b>{file.name}</b> uploaded successfully
                  </span>
                  <UilCheckCircle className="text-green-600" />
                </div>
              ) : (
                <div className="flex justify-between gap-2 w-full py-2 px-4 mb-2 rounded-md bg-blue-800">
                  <span>
                    file : <b>{file.name}</b> fail upload
                  </span>
                  <UilExclamationCircle className="text-red-600" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadAudio;
