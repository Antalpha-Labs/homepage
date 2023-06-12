import * as React from "react"
import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"

function HeroAnimationBackground(props: React.SVGProps<SVGSVGElement>) {
  const widgetMotion = {
    initial: {
      rotate: isMobile ? 40 : 0,
    },
    hover: {
      rotate: 40,
    },
  }

  const widgetTextMotion = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    },
  }

  return (
    <svg
      width={1920}
      height={832}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Circle */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40 }}
      >
        <line
          x1="1925.95"
          y1="-1260.99"
          x2="1128.37"
          y2="1845.41"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2117.45"
          y1="-1198.71"
          x2="936.817"
          y2="1783.24"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2299.64"
          y1="-1112.91"
          x2="754.582"
          y2="1697.55"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2469.64"
          y1="-1004.95"
          x2="584.518"
          y2="1589.7"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2624.76"
          y1="-876.535"
          x2="429.31"
          y2="1461.38"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2762.57"
          y1="-729.693"
          x2="291.41"
          y2="1314.63"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2880.89"
          y1="-566.737"
          x2="172.994"
          y2="1151.74"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2977.85"
          y1="-390.237"
          x2="75.9218"
          y2="975.304"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="3051.93"
          y1="-202.976"
          x2="1.73702"
          y2="788.09"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="3101.95"
          y1="-7.90827"
          x2="-48.4057"
          y2="593.053"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="3127.12"
          y1="191.891"
          x2="-73.7086"
          y2="393.269"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="3127.06"
          y1="393.27"
          x2="-73.7714"
          y2="191.89"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="3101.76"
          y1="593.054"
          x2="-48.5929"
          y2="-7.90839"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="3051.62"
          y1="788.09"
          x2="1.42819"
          y2="-202.977"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2977.42"
          y1="975.305"
          x2="75.4964"
          y2="-390.237"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2880.35"
          y1="1151.74"
          x2="172.458"
          y2="-566.737"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2761.93"
          y1="1314.63"
          x2="290.774"
          y2="-729.693"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2624.03"
          y1="1461.38"
          x2="428.581"
          y2="-876.535"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2468.83"
          y1="1589.7"
          x2="583.71"
          y2="-1004.95"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2298.76"
          y1="1697.55"
          x2="753.705"
          y2="-1112.91"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="2116.52"
          y1="1783.24"
          x2="935.888"
          y2="-1198.7"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1924.98"
          y1="1845.4"
          x2="1127.39"
          y2="-1260.99"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1727.16"
          y1="1883.08"
          x2="1325.2"
          y2="-1298.79"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1526.18"
          y1="1895.66"
          x2="1526.18"
          y2="-1311.5"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1325.2"
          y1="1882.95"
          x2="1727.16"
          y2="-1298.92"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1127.39"
          y1="1845.16"
          x2="1924.98"
          y2="-1261.24"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="935.889"
          y1="1782.87"
          x2="2116.52"
          y2="-1199.07"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="753.704"
          y1="1697.07"
          x2="2298.77"
          y2="-1113.39"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="583.711"
          y1="1589.11"
          x2="2468.83"
          y2="-1005.54"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="428.581"
          y1="1460.7"
          x2="2624.03"
          y2="-877.221"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="290.771"
          y1="1313.86"
          x2="2761.93"
          y2="-730.464"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="172.459"
          y1="1150.9"
          x2="2880.35"
          y2="-567.582"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="75.498"
          y1="974.399"
          x2="2977.42"
          y2="-391.142"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1.42166"
          y1="787.138"
          x2="3051.61"
          y2="-203.928"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="-48.5976"
          y1="592.07"
          x2="3101.75"
          y2="-8.89089"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="-73.7736"
          y1="392.271"
          x2="3127.06"
          y2="190.892"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="-73.7108"
          y1="190.892"
          x2="3127.12"
          y2="392.271"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="-48.4102"
          y1="-8.89153"
          x2="3101.94"
          y2="592.07"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1.73068"
          y1="-203.928"
          x2="3051.92"
          y2="787.139"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="75.9238"
          y1="-391.143"
          x2="2977.85"
          y2="974.399"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="172.994"
          y1="-567.583"
          x2="2880.89"
          y2="1150.9"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="291.409"
          y1="-730.465"
          x2="2762.57"
          y2="1313.85"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="429.31"
          y1="-877.221"
          x2="2624.76"
          y2="1460.7"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="584.52"
          y1="-1005.54"
          x2="2469.64"
          y2="1589.11"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="754.581"
          y1="-1113.39"
          x2="2299.64"
          y2="1697.07"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="936.818"
          y1="-1199.07"
          x2="2117.45"
          y2="1782.87"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1128.36"
          y1="-1261.24"
          x2="1925.95"
          y2="1845.16"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1326.19"
          y1="-1298.92"
          x2="1728.15"
          y2="1882.95"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1527.18"
          y1="-1311.5"
          x2="1527.18"
          y2="1895.66"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <line
          x1="1728.15"
          y1="-1298.79"
          x2="1326.19"
          y2="1883.08"
          stroke="#FFFEFB"
          stroke-opacity="0.8"
        />
        <circle
          cx="1526.67"
          cy="292.081"
          r="150.24"
          fill="#A3F7F7"
          stroke="#FFFEFB"
          stroke-width="2"
        />
      </motion.g>
      {/* --- Circle --- */}
      {/* Lights */}
      <path
        d="M855.488 162.083l1.48 11.835a31.997 31.997 0 0026.55 27.603l3.396.559-3.396.56a31.996 31.996 0 00-26.55 27.603l-1.48 11.834-1.479-11.834a31.996 31.996 0 00-26.55-27.603l-3.397-.56 3.397-.559a31.997 31.997 0 0026.55-27.603l1.479-11.835zM1185.77 219.591l2.88 23.052c3.43 27.399 24.47 49.279 51.72 53.767l6.62 1.09-6.62 1.09c-27.25 4.487-48.29 26.367-51.72 53.767l-2.88 23.051-2.88-23.051c-3.42-27.4-24.47-49.28-51.71-53.767l-6.62-1.09 6.62-1.09c27.24-4.488 48.29-26.368 51.71-53.767l2.88-23.052z"
        fill="#F0DCF8"
      />
      {/* Purple cloud */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1322.3 453.686c1.76 10.809-5.64 21.007-16.52 22.778-1.77.288-3.52.335-5.23.166a33.36 33.36 0 017.64 16.432c.12.751.22 1.501.29 2.247 17.86 2.246 32.84 15.896 35.86 34.455a41.095 41.095 0 01-1.14 18.294c28.66 9.305 51.37 33.362 57.5 64.571 4.48-.544 9.06-.776 13.71-.674 42.55.938 77.98 29.639 89.35 68.42 31.98 4.278 58.89 24.115 73.07 51.512 9.36-7.218 20.62-12.284 33.12-14.32 29.4-4.783 57.54 8.513 72.94 31.679 7.1-3.165 15-4.849 23.29-4.666 13.16.29 25.12 5.228 34.34 13.205 10.4-23.843 34.5-40.274 62.21-39.664 10.32.228 20.03 2.791 28.64 7.172 18.42-30.99 52.65-51.443 91.39-50.589 57.14 1.259 102.45 48.418 101.2 105.331-.12 5.481-.67 10.853-1.62 16.085 50.41 8.594 88.25 52.868 87.09 105.313-1.27 57.703-49.27 103.447-107.21 102.167-40.14-.88-74.52-24.107-91.43-57.483L41.654 904.929l.835-37.907c-17.915 5.598-37.029 8.425-56.829 7.988-97.998-2.159-175.689-83.435-173.527-181.534 2.161-98.098 83.357-175.873 181.355-173.713 88.956 1.96 161.179 69.11 172.133 154.857 14.759-8.256 32.932-12.934 52.492-12.503 24.249.534 46.022 8.819 61.589 21.771 14.965-12.788 32.831-20.015 51.902-19.523 23.858.616 45.378 13.205 61.402 33.372 36.789-6.548 70.496 10.761 85.042 41.043 16.006-17.348 39.64-28.074 65.778-27.498 28.324.625 53.126 14.377 68.155 35.023 4.513-6.938 10.393-12.781 17.565-17.061 24.793-14.794 57.327-6.309 79.953 18.449 7.587-6.57 16.931-11.924 27.522-15.329 26.299-8.454 52.475-2.377 66.19 13.482a97.427 97.427 0 0119.151-19.179c32.402-24.47 74.619-24.783 106.331-4.12 9.708-53.116 56.802-92.826 112.507-91.598 12.38.272 24.25 2.546 35.3 6.506 16.25-41.883 56.38-71.07 102.65-70.051 23.1.509 44.34 8.471 61.61 21.611a86.03 86.03 0 0127.17-30.143 41.121 41.121 0 01-6.02-15.696c-.74-4.569-.7-9.087.02-13.417-10.59-4.267-18.75-13.763-20.71-25.801-2.99-18.365 9.58-35.693 28.07-38.702 5.46-.888 10.82-.43 15.75 1.129a19.516 19.516 0 01-2.15-6.286c-1.76-10.809 5.63-21.006 16.52-22.777 10.88-1.771 21.13 5.556 22.89 16.364zm486.96 395.847a66.011 66.011 0 0028.21-10.234c3.62 4.838 7.66 9.352 12.06 13.486l-40.16-2.531c-.04-.241-.07-.481-.11-.721zm-403.94-27.329l.1-.277a106.54 106.54 0 001.66 2.981l-2.69-.17.6-1.623c.05-.127.09-.253.14-.38.06-.177.13-.354.19-.531zm-262.67-37.861a111.981 111.981 0 01-12.59 23.11l29.88 1.883c-.38-6.793-.31-13.697.24-20.66a104.591 104.591 0 01-17.53-4.333z"
        fill="#9290F2"
      />
      {/* --- Purple cloud --- */}
      {/* White cloud */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M154.424 802.681a167.6 167.6 0 01-1.286 4.735l5.795.665a63.857 63.857 0 01-4.509-5.4zm-.243-83.815C134.058 642.048 60.468 585.09-27.234 585.09c-103.199 0-186.858 78.865-186.858 176.151 0 97.286 83.659 176.151 186.858 176.151 19.964 0 39.197-2.951 57.234-8.417v21.739h1232.07c14.38 17.52 32.78 31.881 54.64 41.501 61.78 27.185 132.8 8.415 178.25-41.501h309.52c16.75 31.317 49.86 52.636 87.97 52.636 55 0 99.59-44.409 99.59-99.191 0-54.782-44.59-99.191-99.59-99.191-38.73 0-72.3 22.018-88.77 54.171-6.67-28.736-32.52-50.159-63.4-50.159-14.9 0-28.63 4.988-39.6 13.379.02-.637.04-1.277.04-1.919 0-28.29-23.03-51.224-51.44-51.224-18.02 0-33.87 9.228-43.06 23.199-11.96-14.093-29.49-22.985-49.02-22.985-9.6 0-18.72 2.151-26.94 6.015-.74-1.996-1.52-3.975-2.33-5.936a69.517 69.517 0 00.94-29.766c-7.05-38.032-43.81-63.107-82.1-56.006-2.25.416-4.45.933-6.6 1.546-1.54-.551-3.09-1.075-4.64-1.571-18.01-33.035-53.04-55.451-93.31-55.451-38.9 0-72.91 20.915-91.4 52.112-30.52-8.506-63.34-2.273-91.49 15.357-21.02-26.861-53.2-44.041-89.27-44.041-53.57 0-98.555 37.892-111.143 89.109-7.952-3.126-16.611-4.842-25.671-4.842-32.676 0-60.137 22.323-67.965 52.551-31.302-29.19-79.452-31.966-114.449-4.305-27.026 21.36-39.203 55.336-34.618 87.641h-1.511l-26.213-3.007a83.888 83.888 0 00-1.175-14.474c-6.952-41.14-42.777-68.348-80.019-60.771-17.434 3.547-32.088 14.088-42.03 28.519-9.168-17.926-26.489-30.014-46.346-30.014-11.63 0-22.389 4.146-31.15 11.182a82.26 82.26 0 00-.851-6.697c-8.075-47.791-56.565-77.998-108.305-67.471a105.676 105.676 0 00-10.899 2.828c-15.216-10.111-32.926-15.905-51.828-15.905-22.871 0-43.997 8.483-61.071 22.831-8.015-25.582-29.773-43.925-55.357-43.925-18.232 0-34.521 9.315-45.278 23.927zm740.102 145.697a96.695 96.695 0 01-.879 7.28h15.015a69.987 69.987 0 01-14.136-7.28zm63.789 7.28h53.748a115.87 115.87 0 01-24.892-20.445c-7.65 9.069-17.558 16.173-28.856 20.445z"
        fill="#fff"
      />
      {/* --- White Cloud --- */}
      {/* Hashkey widget */}
      <a href="https://hashkey.capital/" target="_blank">
        <motion.g
          initial="initial"
          whileHover="hover"
          variants={widgetMotion}
          transition={{ duration: 0.5 }}
        >
          <rect
            x={1217.7}
            y={124.017}
            width={188.955}
            height={188.955}
            rx={94.478}
            transform="rotate(-40 1217 124.017)"
            fill="#fff"
          />
          <motion.g
            clipPath="url(#prefix__clip0_3601_2444)"
            fill="#000"
            variants={widgetTextMotion}
            // scale={20}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <path d="M1309.47 153.485l4.3 4.958-5.37 4.657-4.3-4.959-2.91 2.525 10.87 12.53 2.91-2.524-4.36-5.031 5.36-4.656 4.37 5.031 2.91-2.524-10.87-12.53-2.91 2.523zM1348.31 119.789l4.31 4.958-5.37 4.656-4.3-4.958-2.91 2.524 10.87 12.531 2.91-2.524-4.37-5.031 5.37-4.656 4.36 5.031 2.91-2.525-10.87-12.531-2.91 2.525zM1323.43 147.021l5.28 2.539-3.52 3.052-1.76-5.591zm-4.18-2.18l5.28 17.537 2.97-2.574-1.23-3.856 5.6-4.853 3.64 1.761 3.04-2.639-16.61-7.703-2.69 2.327zM1337.16 148.225l.03-3.444c1.99-.102 3.76-.593 5.27-1.904 1.19-1.034 1.52-2.103.88-2.84l-.03-.034c-.61-.697-1.37-.662-4.05.719-3.22 1.666-5.55 2.46-7.7-.029l-.04-.035c-1.97-2.274-1.35-5.446 1.36-7.792 1.93-1.672 4.07-2.526 6.3-2.669l.28 3.386c-1.84.247-3.39.78-4.51 1.748-1.11.967-1.28 1.958-.75 2.568l.03.034c.71.824 1.51.601 4.28-.827 3.26-1.666 5.56-2.063 7.46.12l.03.036c2.16 2.488 1.37 5.621-1.49 8.097a11.504 11.504 0 01-7.35 2.864M1361.29 108.527l10.87 12.531 10.08-8.738-2.13-2.453-7.18 6.23-2.29-2.632 6.24-5.411-2.12-2.451-6.24 5.411-2.21-2.542 7.09-6.148-2.13-2.453-9.98 8.656zM1381.61 90.904l1.15 7.817-7.52-2.293-3.4 2.951 11.67 3.181 4.28 4.941 2.92-2.525-4.34-4.995-1.45-11.946-3.31 2.87zM1363.62 121.726l-3.7-.159-.36 3.683 4.06-3.524zM1359.56 125.25l3.7.163.36-3.687-4.06 3.524z" />
            <path d="M1367.32 121.889l-3.7-.163-.36 3.686 4.06-3.523zM1363.26 125.412l3.7.161.36-3.684-4.06 3.523z" />
            <path d="M1366.96 125.573l4.06-3.522-3.7-.163-.36 3.685zM1356.09 113.044l-.37 3.733-.36 3.731 3.74.166.37-3.734.73-7.463-4.11 3.567zM1355.44 144.724l6.02.244-.57 6.032-5.45-6.276zM1369.63 144.22a5.2 5.2 0 01-1.72 1.009c-.59.208-1.21.301-1.83.273a4.533 4.533 0 01-3.22-1.588l-.02-.02a4.605 4.605 0 01-1.12-3.421c.06-.624.24-1.236.53-1.799.32-.611.76-1.158 1.29-1.606.31-.271.64-.514.99-.724.3-.179.62-.328.95-.444.3-.104.61-.176.92-.215.3-.036.61-.049.91-.036l-.05 1.99c-.46-.001-.91.06-1.36.181-.43.126-.83.349-1.17.651-.29.249-.53.557-.7.901-.16.327-.25.681-.27 1.039a2.912 2.912 0 00.72 2.02l.02.021c.25.287.54.524.88.699.31.168.66.275 1.02.315.36.037.72 0 1.07-.11a2.73 2.73 0 001-.572c.38-.304.67-.691.87-1.127.17-.428.28-.875.34-1.328l1.87.088c-.02.34-.07.679-.14 1.014a4.68 4.68 0 01-.32.957c-.15.328-.35.637-.57.922-.26.331-.56.636-.88.911M1374.92 139.603c-.25.218-.53.4-.83.538-.28.128-.58.202-.88.217-.29.012-.58-.04-.84-.152-.3-.124-.55-.314-.76-.557l-.01-.02c-.23-.251-.4-.556-.48-.888-.07-.3-.07-.615.01-.919.09-.329.23-.641.44-.92.23-.328.5-.626.81-.888.25-.218.51-.413.79-.584.24-.141.5-.267.75-.377l-.07-.088c-.27-.313-.58-.466-.92-.455-.35.011-.71.186-1.11.527-.27.231-.51.489-.73.769-.2.269-.39.552-.55.845l-1.38-.796c.2-.394.43-.771.69-1.13.32-.427.69-.817 1.1-1.16.37-.335.79-.61 1.24-.813.36-.158.75-.234 1.14-.223.39.019.76.13 1.08.325.37.222.7.503.98.831l2.64 3.049-1.52 1.318-.49-.569c-.02.374-.11.743-.27 1.086-.2.398-.48.752-.83 1.036m-.42-1.443c.38-.323.6-.667.68-1.032a.987.987 0 00-.01-.512c-.04-.167-.12-.32-.23-.446l-.23-.264a3.235 3.235 0 00-1.17.672c-.34.293-.56.587-.64.878a.864.864 0 00-.02.422c.03.139.1.265.2.367l.02.021c.07.095.17.169.28.215.11.046.24.063.36.048.28-.041.55-.172.76-.372v.003zM1374.45 130.624l1.58-1.368.65.755c-.02-.41.04-.825.17-1.22.13-.397.41-.775.82-1.133a3.36 3.36 0 011.09-.637c.41-.146.84-.205 1.27-.175.45.034.9.158 1.3.363.47.242.88.574 1.22.978l.02.019c.35.39.62.847.79 1.346.15.427.21.881.18 1.338-.02.423-.14.84-.34 1.22-.21.379-.48.72-.8 1.002-.42.365-.84.588-1.25.668-.38.079-.78.095-1.16.048l1.95 2.255-1.57 1.365-5.92-6.824zm6.45 1.574c.18-.154.32-.342.43-.553.1-.211.16-.439.17-.671.02-.243-.02-.484-.1-.711a2.065 2.065 0 00-.41-.692l-.01-.019a2.172 2.172 0 00-.63-.499 1.773 1.773 0 00-1.38-.129c-.22.076-.43.195-.61.351-.18.156-.33.345-.43.556-.11.209-.16.436-.17.665-.01.244.03.485.11.712.09.254.23.487.41.687l.01.019c.17.204.39.373.62.498.22.113.45.184.69.21.23.025.46 0 .69-.072.22-.075.43-.195.61-.352zM1379.37 123.027l1.65-1.437 1.15 1.324-1.65 1.437-1.15-1.324zm1.69 1.866l1.57-1.365 4.56 5.257-1.57 1.365-4.56-5.257zM1390.18 126.346c-.22.194-.46.361-.72.495a1.59 1.59 0 01-.73.181 1.593 1.593 0 01-.75-.199c-.3-.169-.57-.391-.78-.655l-2.16-2.49-.67.577-1.1-1.272.66-.574-1.17-1.347 1.58-1.364 1.17 1.346 1.3-1.132 1.11 1.275-1.31 1.13 1.96 2.253c.29.34.61.364.95.07.27-.235.48-.534.61-.868l1.03 1.191c-.09.245-.21.48-.36.698-.17.255-.38.486-.62.685M1393.76 123.257c-.25.219-.53.401-.83.539a2.36 2.36 0 01-.87.216c-.29.012-.58-.039-.85-.151a2.009 2.009 0 01-.75-.561l-.02-.02a2.131 2.131 0 01-.48-.888c-.07-.3-.06-.616.02-.919.08-.329.23-.64.43-.919.24-.328.51-.627.82-.889.24-.218.51-.413.79-.583.24-.141.49-.267.75-.377l-.08-.087c-.27-.314-.58-.466-.92-.456-.34.01-.71.186-1.1.527-.27.231-.52.49-.74.771-.2.269-.38.551-.54.844l-1.38-.796c.19-.393.43-.771.68-1.129.32-.428.69-.818 1.1-1.162.37-.334.79-.609 1.25-.812.36-.158.75-.234 1.14-.223.38.019.75.13 1.08.325.37.223.69.503.97.83l2.65 3.049-1.53 1.32-.49-.568c-.02.373-.11.742-.27 1.086-.2.397-.48.75-.83 1.033zm-.42-1.443c.38-.324.6-.667.68-1.032a.987.987 0 00-.01-.512c-.04-.167-.12-.32-.23-.446l-.23-.264c-.21.067-.4.153-.59.258a3.44 3.44 0 00-.59.418c-.34.293-.55.586-.63.878a.763.763 0 00-.02.423c.03.138.1.265.19.367l.02.021a.73.73 0 00.65.264c.28-.041.55-.173.76-.375zM1393.26 110.978l-1.58 1.365 6.21 7.157 1.57-1.365-6.2-7.157z" />
          </motion.g>
          <motion.path
            d="M1270.76 132.117c-.02 1.049.34 1.886 1.11 2.514.77.627 1.79.952 3.06.972 1.27.021 2.28-.27 3.07-.872s1.2-1.427 1.22-2.476c.02-1.157-.55-2.034-1.89-2.924l.77-.946c1.6 1.021 2.32 2.244 2.29 3.89-.02 1.356-.54 2.468-1.59 3.319-1.03.869-2.32 1.282-3.89 1.257-1.57-.026-2.85-.481-3.87-1.384-.99-.884-1.48-2.013-1.46-3.369.03-1.645.77-2.827 2.4-3.813l.76.971c-1.37.828-1.97 1.704-1.98 2.861zM1270.67 120.128c.22-1.319.9-2.304 2.04-2.971 1.14-.65 2.49-.84 4.05-.576 1.55.265 2.76.894 3.62 1.884.85 1.008 1.17 2.163.94 3.482-.22 1.319-.9 2.303-2.04 2.953-1.14.667-2.49.858-4.05.593-1.55-.264-2.76-.893-3.61-1.901-.86-.991-1.18-2.145-.95-3.464zm9.53 1.627c.17-.98-.09-1.831-.76-2.55-.66-.719-1.63-1.178-2.89-1.394-1.27-.216-2.33-.104-3.2.353-.87.458-1.39 1.175-1.56 2.155-.17.981.09 1.832.76 2.551.68.722 1.65 1.18 2.89 1.393 1.25.213 2.32.102 3.18-.356.89-.454 1.41-1.172 1.58-2.152zM1279.04 107.425l1.27.424-1.4 4.184-1.27-.424 1.4-4.184zM1284.54 97.222l-2.19 4.246.18.56 3.9 2-.55 1.062-9.17-4.712.55-1.061 3.54 1.818.56-.18 2.18-4.245-.18-.56-3.54-1.819.56-1.077 9.16 4.712-.55 1.077-3.89-2-.56.18zM1284.79 86.031c.79-1.081 1.84-1.66 3.16-1.75 1.31-.077 2.6.354 3.87 1.28 1.28.926 2.08 2.03 2.41 3.298.32 1.283.09 2.458-.7 3.54-.79 1.08-1.83 1.66-3.14 1.736-1.32.09-2.62-.34-3.89-1.267-1.27-.926-2.08-2.029-2.4-3.312-.32-1.268-.1-2.443.69-3.525zm7.82 5.697c.59-.804.73-1.681.46-2.622-.28-.94-.94-1.78-1.98-2.536s-2.04-1.13-3.02-1.105c-.98.024-1.77.433-2.36 1.237-.58.804-.73 1.681-.45 2.621.29.951.95 1.792 1.98 2.537 1.02.745 2.02 1.118 3 1.094 1-.014 1.79-.423 2.37-1.226zM1299.77 83.224c1.21-1.217 1.49-2.548.65-3.377-.6-.6-1.35-.61-2.27-.02l-2.27 1.386c-1.78 1.066-2.89 1.082-3.85.125-.6-.6-.85-1.328-.72-2.197.12-.87.57-1.702 1.35-2.484a6.263 6.263 0 014.15-1.864l.13 1.227c-1.42.016-2.6.505-3.55 1.466-1.06 1.064-1.28 2.228-.55 2.955.56.548 1.19.496 2.37-.198l2.31-1.399c1.48-.898 2.73-.876 3.71.093.65.65.91 1.443.78 2.39-.11.959-.59 1.855-1.43 2.7-1.28 1.282-2.95 2.092-4.46 2.198l-.25-1.24a6.118 6.118 0 003.9-1.76zM1306.66 65.333l.66.906-2.9 2.12-.09.58 5.16 7.088-.98.713-5.16-7.087-.58-.092-2.91 2.12-.66-.907 7.46-5.441zM1318.65 65.008l-4.84 2.497 1.5 2.892.56.179 5.33-2.754.51.996-6.76 3.492-4.73-9.159 6.61-3.408.51.996-5.17 2.67-.18.56 1.31 2.54 4.83-2.497.52.996zM1330.64 60.109c.49 1.492.43 2.83-.23 4.02-.64 1.206-1.78 2.081-3.41 2.624l-2.57.858-3.26-9.777 2.57-.858c1.63-.543 3.07-.526 4.3.034 1.24.577 2.1 1.606 2.6 3.099zm-6.56-2.104l-1.03.343-.26.526 2.31 6.93.53.263 1.03-.343c2.54-.846 3.59-2.836 2.79-5.22-.79-2.385-2.83-3.345-5.37-2.499zM1345.91 55.12c.1.882-.3 1.633-1.07 2.08l.04.324c1.1.227 1.88 1.07 1.99 2.148.21 1.924-1.06 3.08-3.74 3.37l-3.7.4-1.11-10.248 3.5-.378c2.47-.266 3.9.525 4.09 2.305zm-4.03-1.256l-1.85.2-.37.459.32 2.966 2.27-.245c1.8-.194 2.62-.846 2.49-1.997-.12-1.133-1.06-1.577-2.86-1.383zm.69 4.364l-2.48.267.36 3.362.46.37 2.07-.224c1.94-.21 2.86-.964 2.73-2.204-.14-1.24-1.2-1.781-3.14-1.571zM1357.56 52.52l1.44.066-4.4 5.736-.2 4.372-1.19-.054.19-4.372-3.88-6.113 1.46.066 2.82 4.455.56.025 3.2-4.18zM1428.64 134.355c.05-1.047-.29-1.896-1.04-2.546-.75-.65-1.76-1.004-3.03-1.063-1.26-.058-2.29.203-3.09.781-.81.578-1.24 1.391-1.29 2.438-.05 1.156.49 2.05 1.8 2.979l-.8.923c-1.56-1.068-2.25-2.312-2.17-3.956.06-1.355.62-2.451 1.69-3.271 1.05-.838 2.35-1.212 3.92-1.14 1.57.073 2.84.565 3.83 1.498.97.914 1.42 2.057 1.36 3.412-.08 1.643-.86 2.802-2.51 3.739l-.73-.993c1.39-.786 2.01-1.645 2.06-2.801zM1428.38 146.343c-.27 1.311-.98 2.275-2.14 2.908-1.15.615-2.51.766-4.06.455-1.54-.31-2.73-.975-3.56-1.991-.82-1.033-1.11-2.196-.84-3.508.26-1.312.97-2.275 2.13-2.891 1.16-.633 2.52-.783 4.06-.473 1.54.311 2.74.976 3.56 2.009.83 1.015 1.11 2.179.85 3.491zm-9.49-1.911c-.19.975.04 1.833.68 2.572.65.738 1.6 1.226 2.86 1.479 1.26.254 2.33.174 3.21-.258.88-.431 1.42-1.133 1.62-2.107.2-.975-.04-1.834-.68-2.572-.66-.742-1.62-1.23-2.86-1.48-1.24-.25-2.3-.169-3.18.262-.9.428-1.45 1.129-1.65 2.104zM1419.63 158.79l-1.26-.462 1.53-4.14 1.25.461-1.52 4.141zM1413.83 168.825l2.31-4.179-.16-.565-3.83-2.116.57-1.044 9.02 4.982-.57 1.045-3.48-1.923-.57.163-2.31 4.179.17.565 3.48 1.923-.59 1.06-9.02-4.982.59-1.061 3.83 2.116.56-.163zM1413.24 180.003c-.82 1.057-1.88 1.605-3.2 1.656-1.31.037-2.6-.432-3.84-1.396-1.24-.963-2.02-2.09-2.31-3.367-.28-1.293-.01-2.46.81-3.518.82-1.057 1.88-1.605 3.19-1.642 1.32-.051 2.61.418 3.85 1.382 1.24.963 2.02 2.09 2.3 3.382.29 1.278.02 2.445-.8 3.503zm-7.64-5.927c-.61.786-.79 1.659-.54 2.607.25.948.89 1.808 1.9 2.594 1.02.787 2.01 1.19 2.99 1.194.98.005 1.78-.38 2.39-1.166.61-.786.78-1.659.54-2.607-.27-.959-.9-1.819-1.91-2.594-1-.776-1.99-1.178-2.97-1.183-.99-.016-1.79.369-2.4 1.155zM1398.19 182.363c-1.25 1.181-1.56 2.503-.76 3.356.59.618 1.34.651 2.28.088l2.31-1.318c1.81-1.012 2.92-.995 3.85-.01.59.617.81 1.353.66 2.218-.15.866-.62 1.684-1.43 2.443a6.254 6.254 0 01-4.2 1.739l-.09-1.23c1.41.026 2.6-.428 3.59-1.36 1.09-1.032 1.34-2.189.63-2.937-.54-.565-1.18-.531-2.37.127l-2.35 1.329c-1.51.855-2.76.795-3.71-.203-.63-.67-.86-1.469-.71-2.411.14-.956.65-1.837 1.52-2.658 1.31-1.243 3.01-2.002 4.52-2.063l.21 1.246c-1.45.05-2.89.637-3.95 1.644zM1390.76 200.041l-.63-.925 2.97-2.032.11-.578-4.95-7.238 1-.684 4.95 7.238.58.109 2.97-2.032.63.925-7.63 5.217zM1378.78 200.01l4.9-2.351-1.4-2.936-.56-.195-5.41 2.593-.48-1.011 6.86-3.289 4.45 9.296-6.7 3.21-.48-1.011 5.25-2.515.19-.555-1.23-2.576-4.91 2.351-.48-1.011zM1366.65 204.551c-.45-1.507-.35-2.842.34-4.012.68-1.187 1.85-2.027 3.49-2.522l2.6-.781 2.97 9.87-2.6.781c-1.65.495-3.08.435-4.3-.162-1.22-.614-2.05-1.668-2.5-3.174zm6.49 2.297l1.03-.312.28-.518-2.1-6.996-.52-.278-1.04.312c-2.56.771-3.67 2.728-2.95 5.135.73 2.407 2.73 3.428 5.3 2.657zM1351.23 209.081c-.07-.883.35-1.623 1.13-2.046l-.02-.325c-1.09-.26-1.85-1.126-1.94-2.207-.15-1.929 1.16-3.047 3.85-3.256l3.71-.29.8 10.276-3.51.274c-2.47.192-3.88-.641-4.02-2.426zm3.99 1.376l1.86-.145.38-.447-.23-2.974-2.27.177c-1.81.14-2.64.768-2.55 1.922.08 1.136 1.01 1.608 2.81 1.467zm-.56-4.382l2.49-.194-.26-3.371-.45-.382-2.07.162c-1.95.151-2.89.878-2.79 2.121.09 1.244 1.14 1.816 3.08 1.664zM1339.51 211.334l-1.44-.109 4.58-5.603.33-4.363 1.19.089-.33 4.364 3.7 6.226-1.46-.11-2.69-4.536-.56-.042-3.32 4.084z"
            fill="#222"
          />
        </motion.g>
      </a>
      {/* --- Hashkey widget --- */}
      <path
        d="M1628.47 219.01c-53.68-79.704-150.25-115.688-191.83-123.717l-58.83 127.046c36.69 9.663 120.41 43.835 161.85 103.216l88.81-106.545z"
        fill="url(#prefix__paint0_linear_3601_2444)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1539.66 325.555l-11.64 13.956c-16.65 15.018-67.32 2.74-90.57-5.277l-87.18-52.421 27.54-59.474c36.69 9.663 120.41 43.835 161.85 103.216z"
        fill="url(#prefix__paint1_linear_3601_2444)"
      />
      <path
        d="M1437.45 334.234l63.26 38.043 27.31-32.766c-16.65 15.018-67.32 2.74-90.57-5.277z"
        fill="#C48BDB"
      />
      <path
        d="M1436.64 95.293c41.58 8.03 138.15 44.014 191.83 123.718l-61.98 74.351c.42-55.35-86.39-155.108-129.85-198.069z"
        fill="url(#prefix__paint2_linear_3601_2444)"
      />
      <path
        d="M1537.83 428.613c-11.89 18.521-78.53-8.115-149.8-53.878-71.27-45.764-120.19-93.325-108.29-111.846 11.89-18.52 79.31 3.565 150.58 49.328 71.27 45.763 119.4 97.876 107.51 116.396z"
        fill="url(#prefix__paint3_linear_3601_2444)"
      />
      <path
        d="M1479.83 391.492c-4.13 6.434-38.51-12.603-76.76-37.162-38.24-24.559-65.88-45.34-61.75-51.774 4.13-6.433 38.49 8.26 76.73 32.819 38.25 24.56 65.91 49.684 61.78 56.117z"
        fill="#282C29"
      />
      <circle
        cx={1353.59}
        cy={387.424}
        r={11.628}
        transform="rotate(4.647 1353.59 387.424)"
        fill="#fff"
      />
      <circle
        cx={1404.3}
        cy={356.311}
        r={9.299}
        transform="rotate(4.647 1404.3 356.311)"
        fill="#fff"
      />
      <circle
        cx={1385.66}
        cy={344.202}
        r={17.297}
        transform="rotate(4.647 1385.66 344.202)"
        fill="#fff"
      />
      <path
        d="M1111.96 648.512c77.36-68.101 194.11-160.3 229.62-237.446-23.92 89.119-13.12 220.03 34.02 283.886-68.56 38.677-217.26 83.536-263.64-46.44z"
        fill="#fff"
        stroke="#fff"
      />
      <path
        d="M1591.97 167.61l2.42 16.772c2.89 19.935 20.6 35.854 43.54 39.119l5.57.793-5.57.793c-22.94 3.265-40.65 19.184-43.54 39.119l-2.42 16.771-2.43-16.771c-2.88-19.935-20.59-35.854-43.53-39.119l-5.57-.793 5.57-.793c22.94-3.265 40.65-19.184 43.53-39.119l2.43-16.772zM1565.1 76.994l1.66 8.826c1.98 10.49 14.11 18.868 29.81 20.586l3.81.417-3.81.417c-15.7 1.719-27.83 10.096-29.81 20.586l-1.66 8.826-1.66-8.826c-1.97-10.49-14.1-18.867-29.81-20.586l-3.81-.417 3.81-.417c15.71-1.718 27.84-10.096 29.81-20.586l1.66-8.826zM1694.99 147.789l1.2 6.418c1.44 7.627 10.26 13.719 21.68 14.968l2.77.303-2.77.304c-11.42 1.249-20.24 7.34-21.68 14.968l-1.2 6.418-1.21-6.418c-1.44-7.628-10.26-13.719-21.68-14.968l-2.77-.304 2.77-.303c11.42-1.249 20.24-7.341 21.68-14.968l1.21-6.418z"
        fill="#F0DCF8"
      />
      <ellipse cx={1409.62} cy={396.931} rx={12} ry={11.5} fill="#fff" />
      <ellipse cx={1389.13} cy={503.454} rx={12} ry={11.5} fill="#fff" />
      <ellipse cx={1392.3} cy={367.642} rx={12} ry={11.5} fill="#fff" />
      <ellipse cx={1337.5} cy={506} rx={35.5} ry={35} fill="#fff" />
      <ellipse
        cx={1216.27}
        cy={596.996}
        rx={76}
        ry={75}
        transform="rotate(100.322 1216.27 596.996)"
        fill="#fff"
      />
      <ellipse cx={1891.5} cy={828} rx={63.5} ry={63} fill="#fff" />
      <ellipse
        cx={923.266}
        cy={803.717}
        rx={76}
        ry={75}
        transform="rotate(51.068 923.266 803.717)"
        fill="#fff"
      />
      <ellipse
        cx={1380.3}
        cy={665.727}
        rx={76}
        ry={75}
        transform="rotate(-47.392 1380.3 665.727)"
        fill="#fff"
      />
      <ellipse cx={1560.68} cy={798} rx={46} ry={45} fill="#fff" />
      <circle cx={1446.76} cy={385.431} r={9.5} fill="#fff" />
      <ellipse
        cx={1302.44}
        cy={406.965}
        rx={7}
        ry={7.5}
        transform="rotate(55.033 1302.44 406.965)"
        fill="#fff"
      />
      <circle cx={1346.8} cy={349} r={10} fill="#fff" />
      <ellipse cx={1380.3} cy={347.332} rx={18} ry={19} fill="#fff" />
      <ellipse
        cx={1280.19}
        cy={504.151}
        rx={37.928}
        ry={41.579}
        transform="rotate(35.113 1280.19 504.151)"
        fill="#fff"
      />
      <ellipse
        cx={1336.8}
        cy={581.777}
        rx={42.5}
        ry={44.5}
        transform="rotate(68.28 1336.8 581.777)"
        fill="#fff"
      />
      <ellipse
        cx={1033.5}
        cy={721}
        rx={73.5}
        ry={77}
        transform="rotate(66.569 1033.5 721)"
        fill="#fff"
      />
      <ellipse cx={1124.56} cy={644.777} rx={60} ry={63} fill="#fff" />
      <ellipse
        cx={1744}
        cy={831.94}
        rx={60}
        ry={63}
        transform="rotate(60.563 1744 831.94)"
        fill="#fff"
      />
      <ellipse
        cx={1649}
        cy={805}
        rx={50}
        ry={52}
        transform="rotate(75.81 1649 805)"
        fill="#fff"
      />
      <ellipse cx={1345.13} cy={391.823} rx={10} ry={10.5} fill="#fff" />
      <ellipse
        cx={1328.3}
        cy={449.305}
        rx={34}
        ry={35.5}
        transform="rotate(52.824 1328.3 449.305)"
        fill="#fff"
      />
      <ellipse
        cx={612.1}
        cy={856.25}
        rx={76}
        ry={75}
        transform="rotate(51.068 612.1 856.25)"
        fill="#fff"
      />
      <ellipse
        cx={1345.64}
        cy={413.648}
        rx={16.252}
        ry={16.038}
        transform="rotate(51.068 1345.64 413.648)"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_3601_2444"
          x1={1395.22}
          y1={217.569}
          x2={1620.83}
          y2={237.438}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0C7FF" />
          <stop offset={1} stopColor="#D790F3" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_3601_2444"
          x1={1453.2}
          y1={257.081}
          x2={1398.73}
          y2={311.963}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4FFFF" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear_3601_2444"
          x1={1613.11}
          y1={220.543}
          x2={1531.97}
          y2={251.265}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C979E9" />
          <stop offset={1} stopColor="#E3AAF9" />
        </linearGradient>
        <linearGradient
          id="prefix__paint3_linear_3601_2444"
          x1={1430.32}
          y1={312.217}
          x2={1376.78}
          y2={399.281}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5B1F9" />
          <stop offset={1} stopColor="#AAA8F4" />
        </linearGradient>
        <clipPath id="prefix__clip0_3601_2444">
          <path
            fill="#fff"
            transform="rotate(-40.94 865.484 -1662.432)"
            d="M0 0h110.842v34.583H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default HeroAnimationBackground
