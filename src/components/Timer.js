import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";
import { colors, mediaMobile } from "../styleConfig";
import { Wrapper } from "./Wrapper";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <TimeWrapper>
      <div>{time}</div>
      <div>{dimension}</div>
    </TimeWrapper>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export const Timer = () => {
  const stratTime = Date.now() / 1000;
  const endTime = new Date(2021, 6, 17, 16) / 1000;

  const remainingTime = endTime - stratTime;
  const days = 60;
  const daysDuration = days * daySeconds;

  return (
    <Wrapper>
      <TimerWrapper>
        <CountdownCircleTimer
          {...timerProps}
          colors={[[colors.khaki]]}
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ elapsedTime }) =>
            renderTime("days", getTimeDays(daysDuration - elapsedTime))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[[colors.lavender]]}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > hourSeconds,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("hours", getTimeHours(daySeconds - elapsedTime))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[[colors.coffee]]}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > minuteSeconds,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[[colors.blue]]}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > 0,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("seconds", getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
      </TimerWrapper>
    </Wrapper>
  );
};

const TimerWrapper = styled.div`
  height: 70vh;
  width: 50vw;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${mediaMobile} {
    height: 100vh;
    flex-direction: column;
  }
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
