import Time from './components/Time/Time';
import Controls from './components/Controls/Controls';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import { useEffect, useState } from 'react';

function App() {

  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let interval;
    if(started) {
      interval = setInterval(() => {
        setTime((oldTime) => oldTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [started])

  return (
    <Container>
      <Time time={time}/>
      <Controls>
        <Button onClick={() => setStarted(true)}>Start</Button>
        <Button onClick={() => setStarted(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>
      </Controls>
    </Container>
  );
}

export default App;
