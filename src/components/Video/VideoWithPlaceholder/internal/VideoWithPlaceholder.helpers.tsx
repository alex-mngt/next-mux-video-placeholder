export const getPlaceholderSVG = (
  placeholder: string
) => `<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <image width="100%" height="100%" href="${placeholder}"/>
</svg>`;
// <svg
//   style={{
//     height: "100%",
//     width: "100%",
//   }}
//   xmlns="http://www.w3.org/2000/svg"
//   xmlnsXlink="http://www.w3.org/1999/xlink"
// >
//   <filter
//     colorInterpolationFilters="sRGB"
//     filterUnits="userSpaceOnUse"
//     id="blur"
//   >
//     <feGaussianBlur edgeMode="duplicate" stdDeviation="20 20" />
//     <feComponentTransfer>
//       <feFuncA tableValues="1 1" type="discrete" />
//     </feComponentTransfer>
//   </filter>
//   <image
//     filter="url(#blur)"
//     height="100%"
//     preserveAspectRatio="xMidYMid slice"
//     width="100%"
//     x={0}
//     xlinkHref={placeholder}
//     y={0}
//   />
// </svg>
