const names = ["John", "Alice", "David", "Sarah", "Michael", "Emily"];

const ListNames = () => {
  return (
    <div>
      <div className="mt-4">
        {names.map((name, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-md px-3 py-2"
          >
            <div className="flex items-center">
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_7_24)">
                  <circle cx="27.5" cy="27.5" r="22.5" fill="#FF6B40" />
                </g>
                <g clip-path="url(#clip0_7_24)">
                  <path
                    d="M33.6458 19.3505C33.4058 22.6905 30.9336 25.2635 28.2378 25.2635C25.542 25.2635 23.0658 22.6913 22.8298 19.3505C22.584 15.8758 24.9905 13.4375 28.2378 13.4375C31.4851 13.4375 33.8917 15.939 33.6458 19.3505Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.9687 30.0561C22.6441 30.0561 17.5238 32.6635 16.241 37.7416C16.0711 38.4134 16.4984 39.0779 17.1986 39.0779H38.7397C39.4399 39.0779 39.8648 38.4134 39.6973 37.7416C38.4145 32.5822 33.2942 30.0561 27.9687 30.0561Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_7_24"
                    x="0"
                    y="0"
                    width="55"
                    height="55"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.419608 0 0 0 0 0.25098 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_7_24"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_7_24"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_7_24">
                    <rect
                      width="27.1875"
                      height="27.1875"
                      fill="white"
                      transform="translate(14.375 12.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="font-semibold mb-2">{name}</p>
              <hr className="my-2 border-t border-gray" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListNames;
