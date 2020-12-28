import React from 'react';
import { useInterval } from '../hooks/use-interval';

interface Props {
  defaultPromodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPromodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <h1>pomodoro timer {mainTime}</h1>;
}
