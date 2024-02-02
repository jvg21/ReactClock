import useCountdownTimer from "./Timer"

function App() {
  const remainingTime = useCountdownTimer('June 30, 2024 00:00:00')

  return (
    <>
      <p>{remainingTime.days}:{remainingTime.hours}:{remainingTime.minutes}</p>
      <p>:{remainingTime.seconds}</p>
    </>
  )
}

export default App
