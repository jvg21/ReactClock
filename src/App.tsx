import useCountdownTimer from "./Timer";

function App() {

  const remainingTime = useCountdownTimer('June 28, 2024 08:00:00')


  return (
      <p>{remainingTime.years}:{remainingTime.days}:{remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}</p>
    
  )
}

export default App
