import { useEffect, useState } from "react"

/*----------------suggested date formats-------------------------
ISO 8601 format:

Data: "2024-02-05"
Date and Time: "2024-02-05T12:30:00Z"

Standard JavaScript format: (recommended)

"February 5, 2024 12:30:00"
"Tuesday, February 5, 2024, 12:30:00 GMT+0000 (UTC)"*/

const zeroTime = { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }

const formatDigit = (digit: number) =>  digit >= 10 ? digit.toString() : digit.toString().padStart(2,'0');

const useCountdownTimer = (deadline: string) => {
    const targetDate = Date.parse(deadline);
    const [remainingTime, setRemainingTime] = useState(calculateTime());

    function calculateTime() {
        try {
            if (!targetDate || isNaN(targetDate)) throw new Error('Invalid Input Date' + deadline)

            const time = targetDate - Date.now();
            if (time <= 0) return zeroTime

            const years = Math.floor(time / (1000 * 60 * 60 * 24 * 365));
            const days = Math.floor((time / (1000 * 60 * 60 * 24)) % 365);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const seconds = Math.floor((time % (1000 * 60)) / 1000);

            return { years, days, hours, minutes, seconds };
        }
        catch (e) {
            console.log(e);
            return zeroTime;
        }
    }

    function formatTime() {
        return {
            years: formatDigit(remainingTime.years),
            days: formatDigit(remainingTime.days),
            hours: formatDigit(remainingTime.hours),
            minutes: formatDigit(remainingTime.minutes),
            seconds: formatDigit(remainingTime.seconds)
        }
    }

    useEffect(() => {
        if (!targetDate) return

        const interval = setInterval(() => {
            setRemainingTime(calculateTime());
        }, 1000)

        return () => clearInterval(interval);
    }, [targetDate])

    return (formatTime())
}

export default useCountdownTimer;