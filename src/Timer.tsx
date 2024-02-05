import { useEffect, useState } from "react"

const useCountdownTimer = (deadLine: string) => {
    const zeroTime = {
        years:0,days:0,hours:0,minutes:0,seconds:0
    }

    const [remainingTime, setRemainingTime] = useState(startTime());

    function startTime() {
        const time = Date.parse(deadLine) - Date.now();
        if(time <= 0) return zeroTime
        
        const years = Math.floor(time / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((time / (1000 * 60 * 60 * 24)) % 365);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        return {years,days,hours,minutes,seconds};
    }

    function formatDigit(digit: number) {
        return digit >= 10 ? digit.toString() : '0'.concat(digit.toString());
    }

    function formatedTime() {
        return {
            years:formatDigit(remainingTime.years),
            days: formatDigit(remainingTime.days),
            hours: formatDigit(remainingTime.hours),
            minutes: formatDigit(remainingTime.minutes),
            seconds: formatDigit(remainingTime.seconds)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(startTime());
        }, 1000)

        return () => clearInterval(interval);
    }, [deadLine])

    return (formatedTime())
}

export default useCountdownTimer;