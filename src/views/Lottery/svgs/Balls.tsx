import styled from 'styled-components'
import { Svg, SvgProps, Text, Flex } from '@pancakeswap/uikit'

export const PinkBall: React.FC<React.PropsWithChildren<SvgProps>> = (props) => { 
  return (
    <Svg className='casinochip'
    xmlns="http://www.w3.org/2000/svg"
    // width="64px"
    // height="64px"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    preserveAspectRatio="xMinYMin slice"
    // {...props}
  >
    <path
      fill="#f0efe6"
      d="M7.5 9.5a35.493 35.493 0 005.5 4c-.613 4.007-2.28 7.674-5 11a21.903 21.903 0 00-6.5-4c1.16-4.151 3.16-7.818 6-11z"
    />
    <path
      fill="#f0eee3"
      d="M55.5 9.5c3.285 2.9 5.285 6.567 6 11a21.904 21.904 0 00-6.5 4 64.717 64.717 0 00-6-9c-.688-.832-.521-1.498.5-2 2.313-1 4.313-2.334 6-4z"
    />
    <path
      fill="#f0efe5"
      d="M7.5 52.5c-3.228-2.569-5.228-5.902-6-10a21.903 21.903 0 006.5-4c3.066 3.125 4.733 6.792 5 11a24.283 24.283 0 01-5.5 3zM61.5 42.5c-1.16 4.151-3.16 7.818-6 11a35.258 35.258 0 01-6-5.5 27.087 27.087 0 015.5-9.5 38.632 38.632 0 006.5 4z"
    />
    <path
      fill="#edc935"
      d="M23.5-.5h2v8h12v-8h2c6.09 2.083 11.423 5.417 16 10-1.687 1.666-3.687 3-6 4-1.021.502-1.188 1.168-.5 2a64.717 64.717 0 016 9 21.904 21.904 0 016.5-4l2 3v16l-2 3a38.632 38.632 0 01-6.5-4 27.087 27.087 0 00-5.5 9.5 35.258 35.258 0 006 5.5c-4.577 4.583-9.91 7.917-16 10h-2v-9h-12v9h-2c-3.817-1.34-7.483-3.174-11-5.5-2.266-1.426-3.932-3.26-5-5.5a24.283 24.283 0 005.5-3c-.267-4.208-1.934-7.875-5-11a21.903 21.903 0 01-6.5 4l-2-3v-16l2-3c2.39.946 4.556 2.28 6.5 4 2.72-3.326 4.387-6.993 5-11a35.493 35.493 0 01-5.5-4c4.577-4.583 9.91-7.917 16-10z"
      opacity={0.979}
    />
    <path fill="#f0f1ed" d="M25.5-.5h12v8h-12v-8z" />
    <path
      fill="#fdf8e5"
      d="M26.5 9.5c13.316-1.262 22.15 4.405 26.5 17C53.833 45 45 53.833 26.5 53 10.497 46.492 5.997 35.325 13 19.5c3.58-4.77 8.08-8.103 13.5-10z"
    />
    <path
      fill="#edc932"
      d="M25.5 11.5c18.01-1.156 26.51 7.177 25.5 25C46.647 48.431 38.147 53.264 25.5 51 11.614 44.007 8.113 33.507 15 19.5c2.94-3.537 6.44-6.204 10.5-8z"
    />
    <path fill="#f0efe8" d="M37.5 63.5h-12v-9h12v9z" />
  </Svg>
    
  )
}

export const LilacBall: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg className='casinochip casinochip1'
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path
      fill="#f0efe6"
      d="M7.5 9.5a35.493 35.493 0 005.5 4c-.613 4.007-2.28 7.674-5 11a21.903 21.903 0 00-6.5-4c1.16-4.151 3.16-7.818 6-11z"
    />
    <path
      fill="#f0eee3"
      d="M55.5 9.5c3.285 2.9 5.285 6.567 6 11a21.904 21.904 0 00-6.5 4 64.717 64.717 0 00-6-9c-.688-.832-.521-1.498.5-2 2.313-1 4.313-2.334 6-4z"
    />
    <path
      fill="#f0efe5"
      d="M7.5 52.5c-3.228-2.569-5.228-5.902-6-10a21.903 21.903 0 006.5-4c3.066 3.125 4.733 6.792 5 11a24.283 24.283 0 01-5.5 3zM61.5 42.5c-1.16 4.151-3.16 7.818-6 11a35.258 35.258 0 01-6-5.5 27.087 27.087 0 015.5-9.5 38.632 38.632 0 006.5 4z"
    />
    <path
      fill="#edc935"
      d="M23.5-.5h2v8h12v-8h2c6.09 2.083 11.423 5.417 16 10-1.687 1.666-3.687 3-6 4-1.021.502-1.188 1.168-.5 2a64.717 64.717 0 016 9 21.904 21.904 0 016.5-4l2 3v16l-2 3a38.632 38.632 0 01-6.5-4 27.087 27.087 0 00-5.5 9.5 35.258 35.258 0 006 5.5c-4.577 4.583-9.91 7.917-16 10h-2v-9h-12v9h-2c-3.817-1.34-7.483-3.174-11-5.5-2.266-1.426-3.932-3.26-5-5.5a24.283 24.283 0 005.5-3c-.267-4.208-1.934-7.875-5-11a21.903 21.903 0 01-6.5 4l-2-3v-16l2-3c2.39.946 4.556 2.28 6.5 4 2.72-3.326 4.387-6.993 5-11a35.493 35.493 0 01-5.5-4c4.577-4.583 9.91-7.917 16-10z"
      opacity={0.979}
    />
    <path fill="#f0f1ed" d="M25.5-.5h12v8h-12v-8z" />
    <path
      fill="#fdf8e5"
      d="M26.5 9.5c13.316-1.262 22.15 4.405 26.5 17C53.833 45 45 53.833 26.5 53 10.497 46.492 5.997 35.325 13 19.5c3.58-4.77 8.08-8.103 13.5-10z"
    />
    <path
      fill="#edc932"
      d="M25.5 11.5c18.01-1.156 26.51 7.177 25.5 25C46.647 48.431 38.147 53.264 25.5 51 11.614 44.007 8.113 33.507 15 19.5c2.94-3.537 6.44-6.204 10.5-8z"
    />
    <path fill="#f0efe8" d="M37.5 63.5h-12v-9h12v9z" />
  </Svg>
  )
}

export const TealBall: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg className='casinochip casinochip2'
    preserveAspectRatio="xMinYMin slice"
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path
      fill="#f0efe6"
      d="M7.5 9.5a35.493 35.493 0 005.5 4c-.613 4.007-2.28 7.674-5 11a21.903 21.903 0 00-6.5-4c1.16-4.151 3.16-7.818 6-11z"
    />
    <path
      fill="#f0eee3"
      d="M55.5 9.5c3.285 2.9 5.285 6.567 6 11a21.904 21.904 0 00-6.5 4 64.717 64.717 0 00-6-9c-.688-.832-.521-1.498.5-2 2.313-1 4.313-2.334 6-4z"
    />
    <path
      fill="#f0efe5"
      d="M7.5 52.5c-3.228-2.569-5.228-5.902-6-10a21.903 21.903 0 006.5-4c3.066 3.125 4.733 6.792 5 11a24.283 24.283 0 01-5.5 3zM61.5 42.5c-1.16 4.151-3.16 7.818-6 11a35.258 35.258 0 01-6-5.5 27.087 27.087 0 015.5-9.5 38.632 38.632 0 006.5 4z"
    />
    <path
      fill="#edc935"
      d="M23.5-.5h2v8h12v-8h2c6.09 2.083 11.423 5.417 16 10-1.687 1.666-3.687 3-6 4-1.021.502-1.188 1.168-.5 2a64.717 64.717 0 016 9 21.904 21.904 0 016.5-4l2 3v16l-2 3a38.632 38.632 0 01-6.5-4 27.087 27.087 0 00-5.5 9.5 35.258 35.258 0 006 5.5c-4.577 4.583-9.91 7.917-16 10h-2v-9h-12v9h-2c-3.817-1.34-7.483-3.174-11-5.5-2.266-1.426-3.932-3.26-5-5.5a24.283 24.283 0 005.5-3c-.267-4.208-1.934-7.875-5-11a21.903 21.903 0 01-6.5 4l-2-3v-16l2-3c2.39.946 4.556 2.28 6.5 4 2.72-3.326 4.387-6.993 5-11a35.493 35.493 0 01-5.5-4c4.577-4.583 9.91-7.917 16-10z"
      opacity={0.979}
    />
    <path fill="#f0f1ed" d="M25.5-.5h12v8h-12v-8z" />
    <path
      fill="#fdf8e5"
      d="M26.5 9.5c13.316-1.262 22.15 4.405 26.5 17C53.833 45 45 53.833 26.5 53 10.497 46.492 5.997 35.325 13 19.5c3.58-4.77 8.08-8.103 13.5-10z"
    />
    <path
      fill="#edc932"
      d="M25.5 11.5c18.01-1.156 26.51 7.177 25.5 25C46.647 48.431 38.147 53.264 25.5 51 11.614 44.007 8.113 33.507 15 19.5c2.94-3.537 6.44-6.204 10.5-8z"
    />
    <path fill="#f0efe8" d="M37.5 63.5h-12v-9h12v9z" />
  </svg>
  )
}

export const AquaBall: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg className='casinochip casinochip3'
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    // {...props}
  >
    <path
      fill="#f0efe6"
      d="M7.5 9.5a35.493 35.493 0 005.5 4c-.613 4.007-2.28 7.674-5 11a21.903 21.903 0 00-6.5-4c1.16-4.151 3.16-7.818 6-11z"
    />
    <path
      fill="#f0eee3"
      d="M55.5 9.5c3.285 2.9 5.285 6.567 6 11a21.904 21.904 0 00-6.5 4 64.717 64.717 0 00-6-9c-.688-.832-.521-1.498.5-2 2.313-1 4.313-2.334 6-4z"
    />
    <path
      fill="#f0efe5"
      d="M7.5 52.5c-3.228-2.569-5.228-5.902-6-10a21.903 21.903 0 006.5-4c3.066 3.125 4.733 6.792 5 11a24.283 24.283 0 01-5.5 3zM61.5 42.5c-1.16 4.151-3.16 7.818-6 11a35.258 35.258 0 01-6-5.5 27.087 27.087 0 015.5-9.5 38.632 38.632 0 006.5 4z"
    />
    <path
      fill="#edc935"
      d="M23.5-.5h2v8h12v-8h2c6.09 2.083 11.423 5.417 16 10-1.687 1.666-3.687 3-6 4-1.021.502-1.188 1.168-.5 2a64.717 64.717 0 016 9 21.904 21.904 0 016.5-4l2 3v16l-2 3a38.632 38.632 0 01-6.5-4 27.087 27.087 0 00-5.5 9.5 35.258 35.258 0 006 5.5c-4.577 4.583-9.91 7.917-16 10h-2v-9h-12v9h-2c-3.817-1.34-7.483-3.174-11-5.5-2.266-1.426-3.932-3.26-5-5.5a24.283 24.283 0 005.5-3c-.267-4.208-1.934-7.875-5-11a21.903 21.903 0 01-6.5 4l-2-3v-16l2-3c2.39.946 4.556 2.28 6.5 4 2.72-3.326 4.387-6.993 5-11a35.493 35.493 0 01-5.5-4c4.577-4.583 9.91-7.917 16-10z"
      opacity={0.979}
    />
    <path fill="#f0f1ed" d="M25.5-.5h12v8h-12v-8z" />
    <path
      fill="#fdf8e5"
      d="M26.5 9.5c13.316-1.262 22.15 4.405 26.5 17C53.833 45 45 53.833 26.5 53 10.497 46.492 5.997 35.325 13 19.5c3.58-4.77 8.08-8.103 13.5-10z"
    />
    <path
      fill="#edc932"
      d="M25.5 11.5c18.01-1.156 26.51 7.177 25.5 25C46.647 48.431 38.147 53.264 25.5 51 11.614 44.007 8.113 33.507 15 19.5c2.94-3.537 6.44-6.204 10.5-8z"
    />
    <path fill="#f0efe8" d="M37.5 63.5h-12v-9h12v9z" />
  </svg>
  )
}

export const GreenBall: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg className='casinochip casinochip4'
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    // {...props}
  >
    <path
      fill="#f0efe6"
      d="M7.5 9.5a35.493 35.493 0 005.5 4c-.613 4.007-2.28 7.674-5 11a21.903 21.903 0 00-6.5-4c1.16-4.151 3.16-7.818 6-11z"
    />
    <path
      fill="#f0eee3"
      d="M55.5 9.5c3.285 2.9 5.285 6.567 6 11a21.904 21.904 0 00-6.5 4 64.717 64.717 0 00-6-9c-.688-.832-.521-1.498.5-2 2.313-1 4.313-2.334 6-4z"
    />
    <path
      fill="#f0efe5"
      d="M7.5 52.5c-3.228-2.569-5.228-5.902-6-10a21.903 21.903 0 006.5-4c3.066 3.125 4.733 6.792 5 11a24.283 24.283 0 01-5.5 3zM61.5 42.5c-1.16 4.151-3.16 7.818-6 11a35.258 35.258 0 01-6-5.5 27.087 27.087 0 015.5-9.5 38.632 38.632 0 006.5 4z"
    />
    <path
      fill="#edc935"
      d="M23.5-.5h2v8h12v-8h2c6.09 2.083 11.423 5.417 16 10-1.687 1.666-3.687 3-6 4-1.021.502-1.188 1.168-.5 2a64.717 64.717 0 016 9 21.904 21.904 0 016.5-4l2 3v16l-2 3a38.632 38.632 0 01-6.5-4 27.087 27.087 0 00-5.5 9.5 35.258 35.258 0 006 5.5c-4.577 4.583-9.91 7.917-16 10h-2v-9h-12v9h-2c-3.817-1.34-7.483-3.174-11-5.5-2.266-1.426-3.932-3.26-5-5.5a24.283 24.283 0 005.5-3c-.267-4.208-1.934-7.875-5-11a21.903 21.903 0 01-6.5 4l-2-3v-16l2-3c2.39.946 4.556 2.28 6.5 4 2.72-3.326 4.387-6.993 5-11a35.493 35.493 0 01-5.5-4c4.577-4.583 9.91-7.917 16-10z"
      opacity={0.979}
    />
    <path fill="#f0f1ed" d="M25.5-.5h12v8h-12v-8z" />
    <path
      fill="#fdf8e5"
      d="M26.5 9.5c13.316-1.262 22.15 4.405 26.5 17C53.833 45 45 53.833 26.5 53 10.497 46.492 5.997 35.325 13 19.5c3.58-4.77 8.08-8.103 13.5-10z"
    />
    <path
      fill="#edc932"
      d="M25.5 11.5c18.01-1.156 26.51 7.177 25.5 25C46.647 48.431 38.147 53.264 25.5 51 11.614 44.007 8.113 33.507 15 19.5c2.94-3.537 6.44-6.204 10.5-8z"
    />
    <path fill="#f0efe8" d="M37.5 63.5h-12v-9h12v9z" />
  </svg>
  )
}

export const YellowBall: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg className='casinochip casinochip5'
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path
      fill="#f0efe6"
      d="M7.5 9.5a35.493 35.493 0 005.5 4c-.613 4.007-2.28 7.674-5 11a21.903 21.903 0 00-6.5-4c1.16-4.151 3.16-7.818 6-11z"
    />
    <path
      fill="#f0eee3"
      d="M55.5 9.5c3.285 2.9 5.285 6.567 6 11a21.904 21.904 0 00-6.5 4 64.717 64.717 0 00-6-9c-.688-.832-.521-1.498.5-2 2.313-1 4.313-2.334 6-4z"
    />
    <path
      fill="#f0efe5"
      d="M7.5 52.5c-3.228-2.569-5.228-5.902-6-10a21.903 21.903 0 006.5-4c3.066 3.125 4.733 6.792 5 11a24.283 24.283 0 01-5.5 3zM61.5 42.5c-1.16 4.151-3.16 7.818-6 11a35.258 35.258 0 01-6-5.5 27.087 27.087 0 015.5-9.5 38.632 38.632 0 006.5 4z"
    />
    <path
      fill="#edc935"
      d="M23.5-.5h2v8h12v-8h2c6.09 2.083 11.423 5.417 16 10-1.687 1.666-3.687 3-6 4-1.021.502-1.188 1.168-.5 2a64.717 64.717 0 016 9 21.904 21.904 0 016.5-4l2 3v16l-2 3a38.632 38.632 0 01-6.5-4 27.087 27.087 0 00-5.5 9.5 35.258 35.258 0 006 5.5c-4.577 4.583-9.91 7.917-16 10h-2v-9h-12v9h-2c-3.817-1.34-7.483-3.174-11-5.5-2.266-1.426-3.932-3.26-5-5.5a24.283 24.283 0 005.5-3c-.267-4.208-1.934-7.875-5-11a21.903 21.903 0 01-6.5 4l-2-3v-16l2-3c2.39.946 4.556 2.28 6.5 4 2.72-3.326 4.387-6.993 5-11a35.493 35.493 0 01-5.5-4c4.577-4.583 9.91-7.917 16-10z"
      opacity={0.979}
    />
    <path fill="#f0f1ed" d="M25.5-.5h12v8h-12v-8z" />
    <path
      fill="#fdf8e5"
      d="M26.5 9.5c13.316-1.262 22.15 4.405 26.5 17C53.833 45 45 53.833 26.5 53 10.497 46.492 5.997 35.325 13 19.5c3.58-4.77 8.08-8.103 13.5-10z"
    />
    <path
      fill="#edc932"
      d="M25.5 11.5c18.01-1.156 26.51 7.177 25.5 25C46.647 48.431 38.147 53.264 25.5 51 11.614 44.007 8.113 33.507 15 19.5c2.94-3.537 6.44-6.204 10.5-8z"
    />
    <path fill="#f0efe8" d="M37.5 63.5h-12v-9h12v9z" />
  </svg>
  )
}

export const BallTextWrapper = styled.div`
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 16px;
`

export const BallText = styled(Text)<{ rotationTransform?: number }>`
  color: #000000;
  text-shadow: -0.75px -0.75px 0 #06ff00, 0.75px -0.75px 0 #06ff00, -0.75px 0.75px 0 #06ff00, 0.75px 0.75px 0 #06ff00;
  // transform: rotate(${({ rotationTransform }) => rotationTransform || 0}deg);
`

export type BallColor = 'pink' | 'lilac' | 'teal' | 'aqua' | 'green' | 'yellow'

interface BallWithNumberProps {
  color: BallColor
  number: string
  size?: string
  fontSize?: string
  rotationTransform?: number
}

const ballsMap = {
  pink: PinkBall,
  lilac: LilacBall,
  teal: TealBall,
  aqua: AquaBall,
  green: GreenBall,
  yellow: YellowBall,
}

export const BallWithNumber: React.FC<React.PropsWithChildren<BallWithNumberProps>> = ({
  color,
  number,
  size,
  fontSize,
  rotationTransform,
}) => {
  const BallComponent = ballsMap[color]
  return (
    <Flex alignItems="center" justifyContent="center" position="relative" mx="2px" className='ballwrap'>
      <BallComponent width={size ?? '32px'} height={size ?? '32px'} />
      <BallTextWrapper >
        <BallText className='balls'>
          {number}
        </BallText>
      </BallTextWrapper>
    </Flex>
  )
}
