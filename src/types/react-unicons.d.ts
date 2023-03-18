declare module "@iconscout/react-unicons" {
  import { SVGProps } from "react";

  export type IconProps = {
    color?: string;
    size?: string | number;
  } & SVGProps<SVGElement>;

  export type Icon = (props: IconProps) => JSX.Element;

  export const UilSearch: Icon;
  export const UilEstate: Icon;
  export const UilSlidersVAlt: Icon;
  export const UilRecordAudio: Icon;
  export const UilPlay: Icon;
  export const UilStepBackward: Icon;
  export const UilSkipForward: Icon;
  export const UilRepeat: Icon;
  export const UilVolume: Icon;
  export const UilHeartAlt: Icon;
  export const UilCloudDownload: Icon;
  export const UilBullseye: Icon;
  export const UilExclamationCircle: Icon;
  export const UilCheckCircle: Icon;
  export const UilPause: Icon;
  export const UilMountains : Icon;
}
