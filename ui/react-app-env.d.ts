declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.json';
declare module '*.svg' {
  import React from 'react';
  const content: React.FC<SvgProps>;
  export default content;
}
