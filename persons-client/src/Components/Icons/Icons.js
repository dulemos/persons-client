const icons = {
  add: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 9H15V11H11V15H9V11H5V9H9V5H11V9ZM10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18Z"
        fill="black"
      />
    </svg>
  ),

  arrow: (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M15.7764 10.4211L6.22466 1.20153C6.08815 1.06965 5.90932 1 5.72776 1C5.63204 1 5.53563 1.01919 5.44434 1.05894C5.17951 1.17388 5.00751 1.43746 5.00734 1.72938L5 15.0938C5 15.389 5.17524 15.655 5.44451 15.7681C5.53358 15.8058 5.62726 15.8237 5.72026 15.8237C5.90779 15.8237 6.0919 15.7496 6.22978 15.6103L9.03726 12.7674L11.4287 17.7027C11.5536 17.9605 11.8092 18.1111 12.0758 18.1111C12.1754 18.1111 12.2766 18.09 12.373 18.0458L13.109 17.7075C13.4677 17.5426 13.6291 17.1167 13.4716 16.751L11.3272 11.7743L15.2967 11.6789C15.588 11.6718 15.8467 11.4877 15.9516 11.2126C16.0566 10.9369 15.9874 10.6249 15.7764 10.4211ZM15.3914 10.9932C15.374 11.0392 15.331 11.0696 15.2822 11.0707L11.3129 11.1664C11.1129 11.1711 10.9284 11.2765 10.8209 11.4473C10.7134 11.6182 10.6967 11.832 10.7769 12.0176L12.9213 16.9944C12.9474 17.0549 12.9203 17.1266 12.8609 17.1537L12.1249 17.492C12.1091 17.4994 12.0925 17.5029 12.0756 17.5029C12.0394 17.5029 11.9918 17.4849 11.9673 17.4346L9.5763 12.4995C9.49098 12.3232 9.32683 12.1998 9.13571 12.1675C9.10295 12.1621 9.07002 12.1592 9.03726 12.1592C8.87942 12.1592 8.72636 12.2223 8.61288 12.3374L5.8054 15.1801C5.77469 15.2114 5.73886 15.2157 5.72026 15.2157C5.70456 15.2157 5.68937 15.2126 5.67453 15.2063C5.62948 15.1875 5.6003 15.1436 5.6003 15.0943L5.60747 1.72955C5.60747 1.68081 5.63613 1.63709 5.68067 1.6179C5.69534 1.61133 5.71121 1.60805 5.72759 1.60805C5.74534 1.60805 5.78015 1.61254 5.81052 1.64158L15.3622 10.8613C15.3976 10.8956 15.4092 10.9474 15.3914 10.9932Z"
          fill="black"
        />
        <path
          d="M15.2822 11.0708C15.331 11.0697 15.374 11.0393 15.3915 10.9933C15.4092 10.9475 15.3976 10.8957 15.3623 10.8614L5.81057 1.64169C5.78019 1.61265 5.74538 1.60815 5.72764 1.60815C5.71126 1.60815 5.69539 1.61144 5.68071 1.61801C5.63618 1.63719 5.60751 1.68092 5.60751 1.72966L5.60034 15.0945C5.60034 15.1437 5.62952 15.1876 5.67457 15.2065C5.68941 15.2127 5.7046 15.2158 5.7203 15.2158C5.7389 15.2158 5.77473 15.2115 5.80545 15.1802L8.61293 12.3375C8.7264 12.2224 8.87946 12.1593 9.0373 12.1593C9.07006 12.1593 9.10299 12.1622 9.13576 12.1676C9.32687 12.1999 9.49102 12.3233 9.57634 12.4996L11.9673 17.4347C11.9919 17.485 12.0395 17.503 12.0756 17.503C12.0925 17.503 12.1091 17.4995 12.125 17.4921L12.8609 17.1538C12.9203 17.1267 12.9474 17.055 12.9213 16.9945L10.7769 12.0177C10.6967 11.8321 10.7135 11.6183 10.821 11.4474C10.9285 11.2766 11.1129 11.1712 11.3129 11.1665L15.2822 11.0708Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-1"
          y="0"
          width="22"
          height="22"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),

  cancel: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.05288 17.1929C2.09778 16.2704 1.33596 15.167 0.811868 13.9469C0.287778 12.7269 0.0119157 11.4147 0.000377568 10.0869C-0.0111606 8.7591 0.241856 7.44231 0.744665 6.21334C1.24747 4.98438 1.99001 3.86786 2.92893 2.92893C3.86786 1.99001 4.98438 1.24747 6.21334 0.744665C7.44231 0.241856 8.7591 -0.0111606 10.0869 0.000377568C11.4147 0.0119157 12.7269 0.287778 13.9469 0.811868C15.167 1.33596 16.2704 2.09778 17.1929 3.05288C19.0145 4.9389 20.0224 7.46493 19.9996 10.0869C19.9768 12.7089 18.9251 15.217 17.0711 17.0711C15.217 18.9251 12.7089 19.9768 10.0869 19.9996C7.46493 20.0224 4.9389 19.0145 3.05288 17.1929ZM4.46288 15.7829C5.96401 17.284 7.99997 18.1273 10.1229 18.1273C12.2458 18.1273 14.2818 17.284 15.7829 15.7829C17.284 14.2818 18.1273 12.2458 18.1273 10.1229C18.1273 7.99997 17.284 5.96401 15.7829 4.46288C14.2818 2.96176 12.2458 2.11843 10.1229 2.11843C7.99997 2.11843 5.96401 2.96176 4.46288 4.46288C2.96176 5.96401 2.11843 7.99997 2.11843 10.1229C2.11843 12.2458 2.96176 14.2818 4.46288 15.7829ZM14.3629 7.29288L11.5329 10.1229L14.3629 12.9529L12.9529 14.3629L10.1229 11.5329L7.29288 14.3629L5.88288 12.9529L8.71288 10.1229L5.88288 7.29288L7.29288 5.88288L10.1229 8.71288L12.9529 5.88288L14.3629 7.29288Z"
        fill="black"
      />
    </svg>
  ),

  delete: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1872 1.47368H12.9091V1.43158C12.9091 0.631579 12.2674 0 11.4545 0H8.54545C7.73262 0 7.09091 0.631579 7.09091 1.43158V1.47368H2.81283C2.36364 1.47368 2 1.83158 2 2.27368V3.07368C2 3.51579 2.36364 3.87368 2.81283 3.87368H17.1872C17.6364 3.87368 18 3.51579 18 3.07368V2.27368C18 1.83158 17.6364 1.47368 17.1872 1.47368Z"
        fill="black"
      />
      <path
        d="M16.1176 4.96841H3.88232C3.64702 4.96841 3.4759 5.15789 3.49729 5.38947L4.09622 17.5789C4.16039 18.9263 5.29408 20 6.66306 20H13.3155C14.6845 20 15.8181 18.9474 15.8823 17.5789L16.4812 5.38947C16.524 5.17894 16.3315 4.96841 16.1176 4.96841ZM8.67376 16.7368C8.67376 17.1158 8.37429 17.4105 7.98927 17.4105C7.60424 17.4105 7.30478 17.1158 7.30478 16.7368V8.25262C7.30478 7.87368 7.60424 7.57894 7.98927 7.57894C8.37429 7.57894 8.67376 7.87368 8.67376 8.25262V16.7368ZM12.6951 16.7368C12.6951 17.1158 12.3957 17.4105 12.0107 17.4105C11.6256 17.4105 11.3262 17.1158 11.3262 16.7368V8.25262C11.3262 7.87368 11.6256 7.57894 12.0107 7.57894C12.3957 7.57894 12.6951 7.87368 12.6951 8.25262V16.7368Z"
        fill="black"
      />
    </svg>
  ),

  edit: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6342 0.605251C17.8283 -0.20175 16.5149 -0.20175 15.709 0.605251L15.2852 1.02211L19.0162 4.75249L19.3668 4.39976C19.775 3.99359 20 3.4538 20 2.87127C20 2.28873 19.775 1.74895 19.372 1.34278L18.6342 0.605251Z"
        fill="black"
      />
      <path
        d="M13.4119 2.88729L17.1429 6.61765L18.268 5.50068L14.5369 1.77032L13.4119 2.88729Z"
        fill="black"
      />
      <path
        d="M1.76871 14.49L0 20L5.5102 18.2043L16.3946 7.3659L12.6635 3.63553L1.76871 14.49Z"
        fill="black"
      />
    </svg>
  ),

  filter: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 18.5C14 17.6716 13.3284 17 12.5 17H7.5C6.67157 17 6 17.6716 6 18.5C6 19.3284 6.67157 20 7.5 20H12.5C13.3284 20 14 19.3284 14 18.5Z"
        fill="black"
      />
      <path
        d="M17 11C17 9.89543 16.1046 9 15 9H5C3.89543 9 3 9.89543 3 11C3 12.1046 3.89543 13 5 13H15C16.1046 13 17 12.1046 17 11Z"
        fill="black"
      />
      <path
        d="M0 2.5C0 3.88071 1.11929 5 2.5 5H17.5C18.8807 5 20 3.88071 20 2.5C20 1.11929 18.8807 0 17.5 0H2.5C1.11929 0 0 1.11929 0 2.5Z"
        fill="black"
      />
    </svg>
  ),

  more: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1951 10.1429C12.1951 11.3333 11.2195 12.2857 10 12.2857C8.78049 12.2857 7.80488 11.3333 7.80488 10.1429C7.80488 8.95238 8.78049 8 10 8C11.2195 8 12.1951 8.95238 12.1951 10.1429ZM17.8049 8C16.5854 8 15.6098 8.95238 15.6098 10.1429C15.6098 11.3333 16.5854 12.2857 17.8049 12.2857C19.0244 12.2857 20 11.3333 20 10.1429C20 8.95238 19.0244 8 17.8049 8ZM2.19512 8C0.97561 8 0 8.95238 0 10.1429C0 11.3333 0.97561 12.2857 2.19512 12.2857C3.41463 12.2857 4.39024 11.3333 4.39024 10.1429C4.39024 8.95238 3.41463 8 2.19512 8Z"
        fill="black"
      />
    </svg>
  ),

  placeholder: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 6C0 2.68629 2.68629 0 6 0H16C18.2091 0 20 1.79086 20 4V12C20 16.4183 16.4183 20 12 20H4C1.79086 20 0 18.2091 0 16V6Z"
        fill="black"
      />
    </svg>
  ),

  sort: (
    <svg
      width="8"
      height="11"
      viewBox="0 0 8 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 11L0 6H8L4 11Z" fill="#7D90B2" />
      <path d="M4 0L0 5H8L4 0Z" fill="#7D90B2" />
    </svg>
  ),

  search: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.4097 14.8822C11.7399 16.1799 9.63851 16.7922 7.53338 16.5942C5.42824 16.3963 3.47766 15.403 2.07881 13.8166C0.679961 12.2303 -0.0619809 10.1701 0.00405863 8.05565C0.0700982 5.94118 0.939153 3.9314 2.43427 2.43552C3.92939 0.939633 5.93814 0.0701341 8.05152 0.00406071C10.1649 -0.0620127 12.224 0.680308 13.8096 2.07987C15.3951 3.47944 16.3879 5.43102 16.5857 7.53723C16.7836 9.64345 16.1717 11.7459 14.8745 13.4166L19.6936 18.2201C20.1016 18.6267 20.1022 19.2872 19.695 19.6946C19.2878 20.1021 18.6273 20.1017 18.2204 19.6939L13.4201 14.8822H13.4097ZM8.31916 14.5495C9.13773 14.5495 9.94829 14.3882 10.7045 14.0748C11.4608 13.7614 12.148 13.302 12.7268 12.7229C13.3056 12.1438 13.7647 11.4563 14.078 10.6996C14.3913 9.94298 14.5525 9.13201 14.5525 8.31302C14.5525 7.49403 14.3913 6.68306 14.078 5.92641C13.7647 5.16976 13.3056 4.48225 12.7268 3.90314C12.148 3.32402 11.4608 2.86465 10.7045 2.55123C9.94829 2.23782 9.13773 2.07651 8.31916 2.07651C6.66598 2.07651 5.08051 2.73356 3.91153 3.90314C2.74256 5.07271 2.08583 6.659 2.08583 8.31302C2.08583 9.96705 2.74256 11.5533 3.91153 12.7229C5.08051 13.8925 6.66598 14.5495 8.31916 14.5495Z" fill="#7D90B2"/>
    </svg>
    
  )
};

export default icons;
