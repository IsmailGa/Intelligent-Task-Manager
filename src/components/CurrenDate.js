import { useEffect, useState } from "react";

export default function GetCurrentDateTime(){

    
    const [currentDate, setCurrentDate] = useState(new Date());
    let date = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let hours = currentDate.getHours().toString().padStart(2, '0');
    const time = hours + ":" + minutes;

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
      }, []);


    if(date< 10){
        date = "0" + date;
    }
    else{
        return date;
    }
  
    

    return (
        <div className="currentdate">
                {`Bugun: ${date}.${month}.${year}, ${time}`}
        </div>
       )
    }
