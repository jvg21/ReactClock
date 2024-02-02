import { useEffect, useState } from "react"

const useCountdownTimer = (deadLine: string) => {
    const zeroTime = {
        days:0,hours:0,minutes:0,seconds:0
    }
    const [remainingTime, setremainingTime] = useState(startTime());

    function startTime() {
        const time = Date.parse(deadLine) - Date.now();
        if(time <= 0)return zeroTime
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        return {days,hours,minutes,seconds};
    }

    function formatDigit(digit: number) {
        return digit >= 10 ? digit.toString() : '0'.concat(digit.toString());
    }

    function formatedTime() {
        return {
            days: formatDigit(remainingTime.days),
            hours: formatDigit(remainingTime.hours),
            minutes: formatDigit(remainingTime.minutes),
            seconds: formatDigit(remainingTime.seconds)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setremainingTime(startTime());
        }, 1000)

        return () => clearInterval(interval);
    }, [deadLine])

    return (formatedTime())
}

export default useCountdownTimer;