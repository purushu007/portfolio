import Image from "next/image";
import ContainerBlock from "../components/ContainerBlock";
import myData from "../constants/data";

export default function Home() {
  return (
    <ContainerBlock>
      <div className="profile flex items-center justify-center sm:flex-row flex-col-reverse">
        <div className="profile-info w-1/2 pt-14 sm:pl-10 sm:pt-0">
          <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">{myData.about.title}</p>
          <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">{myData.about.description[0]}</p>
          <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">{myData.about.description[1]}</p>
        </div>
        <div className="profile-pic w-96 md:w-2/3 lg:w-5/12">
          <div className="relative">
            <Image className="relative z-10 m-auto w-64 md:w-2/3 lg:w-9/12 rounded-b-full" src={myData.profilePicUrl} width={500} height={500} alt="Purushothama Reddy M picture" />
            <svg
              id="sw-js-blob-svg"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="absolute inset-0	"
            >
              {" "}
              <defs>
                {" "}
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  {" "}
                  <stop
                    id="stop1"
                    stopColor="rgba(248, 117, 55, 1)"
                    offset="0%"
                  ></stop>{" "}
                  <stop
                    id="stop2"
                    stopColor="rgba(251, 168, 31, 1)"
                    offset="100%"
                  ></stop>{" "}
                </linearGradient>{" "}
              </defs>{" "}
              <path
                fill="url(#sw-gradient)"
                d="M13.9,-16.4C17.6,-13.4,20,-8.7,24.2,-1.8C28.4,5.1,34.3,14.2,33.1,21.8C31.9,29.5,23.6,35.9,14.4,39C5.2,42.1,-5.1,42,-13.2,38.2C-21.4,34.5,-27.6,27,-29.6,19.2C-31.5,11.4,-29.3,3.3,-26.5,-3.3C-23.6,-9.9,-20.2,-14.9,-15.7,-17.8C-11.2,-20.6,-5.6,-21.3,-0.3,-20.9C5.1,-20.6,10.1,-19.4,13.9,-16.4Z"
                width="100%"
                height="100%"
                transform="translate(40 20)"
                strokeWidth="0"
                style={{'transition': 'all 0.3s ease 0s'}}
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
}
