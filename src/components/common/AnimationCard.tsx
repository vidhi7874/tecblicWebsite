import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function AnimationCard(props) {
  const {
    className,
    glareColor,
    tiltMaxAngleX,
    tiltMaxAngleY,
    perspective,
    scale,
    transitionSpeed,
    gyroscope,
    glareEnable,
    glareMaxOpacity,
    glarePosition,
    trackOnWindow,
  } = props;
  return (
    <>
      <Tilt
        className={className ? className : ''}
        glareColor={glareColor ? glareColor : ''}
        tiltMaxAngleX={tiltMaxAngleX ? tiltMaxAngleX : 10}
        tiltMaxAngleY={tiltMaxAngleY ? tiltMaxAngleY : 10}
        perspective={perspective ? perspective : 700}
        scale={scale ? scale : 1}
        transitionSpeed={transitionSpeed ? transitionSpeed : 100}
        gyroscope={gyroscope ? gyroscope : false}
        glareEnable={glareEnable ? glareEnable : false}
        glareMaxOpacity={glareMaxOpacity ? glareMaxOpacity : 0}
        glarePosition={glarePosition ? glarePosition : ''}
        trackOnWindow={trackOnWindow ? trackOnWindow : false}
      >
        {props.children}
      </Tilt>
    </>
  );
}
