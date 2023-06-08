"use client";
import react, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
export default function Home() {
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);
  const [format, setFormat] = useState("AM");

  const handleHour = (e: any) => {
    // console.log(e.target.value);
    const newHour = parseInt(e.target.value, 10);
    setHour(newHour % 12);
  };
  const handleMinutes = (e: any) => {
    // console.log(e.target.value);
    const newMinutes = parseInt(e.target.value);
    setMinute(newMinutes % 60);
  };

  const IncrementHour = () => {
    setHour((prevHour) => (prevHour! + 1) % 12);
  };

  const DecrementHour = () => {
    if (hour !== undefined && hour !== 0) {
      setHour((prevHour) => (prevHour! - 1) % 12);
    }
  };

  const IncrementMinute = () => {
    setMinute((prevMinute) => (prevMinute! + 1) % 60);
  };

  const DecrementMinute = () => {
    if (minute !== undefined && minute !== 0) {
      setMinute((prevMinute) => (prevMinute! - 1) % 60);
    }
  };
  const toggleFormat = () => {
    setFormat(format === "AM" ? "PM" : "AM");
  };

  console.log("hour>>>", hour);
  console.log("inute>>>", minute);
  console.log("formate>>>", format);
  const timeStyle = "font-[Raleway] text-[18px] leading-5 text-center my-5";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-20 time-wrapper justify-center">
        <div className="flex flex-col justify-between">
          <RiArrowDropUpLine
            onClick={() => IncrementHour()}
            className="text-3xl"
          />
          <input
            className="bg-transparent outline-none  border-0 text-white text-center w-[2rem] text-[18px] leading-5"
            type="number"
            placeholder="09"
            value={hour !== null ? hour.toString() : ""}
            min="00"
            max="12"
            onChange={handleHour}
          />
          <RiArrowDropDownLine
            onClick={() => DecrementHour()}
            className="text-3xl"
          />
        </div>
        <div className="flex flex-col justify-between">
          <RiArrowDropUpLine
            onClick={() => IncrementMinute()}
            className="text-3xl"
          />
          <input
            className="bg-transparent outline-none  border-0 text-white text-center w-[2rem] text-[18px] leading-5"
            type="number"
            placeholder="00"
            value={minute !== null ? minute.toString() : ""}
            min="00"
            max="60"
            onChange={handleMinutes}
          />
          <RiArrowDropDownLine
            onClick={() => DecrementMinute()}
            className="text-3xl"
          />
        </div>
        <div className="flex flex-col justify-between">
          <RiArrowDropUpLine className="text-3xl" onClick={toggleFormat} />
          <p className={timeStyle}>{format}</p>
          <RiArrowDropDownLine className="text-3xl" onClick={toggleFormat} />
        </div>
      </div>
    </main>
  );
}
