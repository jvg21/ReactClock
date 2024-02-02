import { useEffect, useState } from "react"

const useCountdownTimer = (deadLine: string) => {
    const [RemainingTime, setRemainingTime] = useState(StartTime());

    const [Days, setDays] = useState(0);
    const [Hours, setHours] = useState(0);
    const [Minutes, setMinutes] = useState(0);
    const [Seconds, setSeconds] = useState(0);

    function StartTime() {
        const time = Date.parse(deadLine) - Date.now();
        const Days = Math.floor(time / (1000 * 60 * 60 * 24));
        const Hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const Minutes = Math.floor((time / 1000 / 60) % 60);
        const Seconds = Math.floor((time % (1000 * 60)) / 1000);

        return {Days,Hours,Minutes,Seconds};
    }

    function formatDigit(digit: number) {
        return digit >= 10 ? digit.toString() : '0'.concat(digit.toString());
    }

    function FormatedTime() {
        return {
            days: formatDigit(RemainingTime.Days),
            hours: formatDigit(RemainingTime.Hours),
            minutes: formatDigit(RemainingTime.Minutes),
            seconds: formatDigit(RemainingTime.Seconds)
        }
    }

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(StartTime());
        }, 1000)
    }, [deadLine])

    return (FormatedTime())
}

export default useCountdownTimer;