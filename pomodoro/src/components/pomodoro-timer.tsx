import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>you are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste" onClick={() => console.log(1)}></Button>
    </div>
  );
}
