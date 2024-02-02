import useCountdownTimer from "../Timer"

export default function Teste(){
    
    const remainingTime = useCountdownTimer('June 30, 2024 00:00:00')
    return(
        <p>{remainingTime.days}:{remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}</p>
    )
}