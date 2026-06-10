import { useEffect, useState } from "react";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 43,
    hours: 18,
    minutes: 22,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="text-center fade-in-delayed px-4">
      <div className="uppercase text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 glow-text font-semibold tracking-widest">
        BETA ACCESS OPENS IN
      </div>
      <div className="countdown-number text-3xl sm:text-5xl md:text-6xl font-bold text-foreground glow-text tracking-wider">
        {format(countdown.days)} DAYS
      </div>
      <div className="countdown-number text-2xl sm:text-4xl md:text-5xl font-bold text-foreground glow-text tracking-wider mt-1 sm:mt-2">
        {format(countdown.hours)}:{format(countdown.minutes)}:{format(countdown.seconds)}
      </div>
    </div>
  );
}
