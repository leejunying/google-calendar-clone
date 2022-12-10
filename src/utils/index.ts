const  getTimeZone=()=> {
    var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}

export const getCurrentDate=()=>{
 
    let dayofweek=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let months=[ `January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,` September`, `October`,`November` , `December`]

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour= newDate.getHours()
    let minute=newDate.getMinutes()
    let day=newDate.getDay()
     return {
        dayofweek:dayofweek[day],
        day:day,
        date:date,
        month:month,
        montheng:months[month-1],
        year:year,
        hour:hour,
        minute:minute,
        timezone:"GMT"+getTimeZone()


    }
     
    }

    export const  monthText=(month:number)=>{

        let months=[ `January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,` September`, `October`,`November` , `December`]

        return months[month]

    }

    export const getNumberOfDaysInMonth=(year:number,month:number)=>{
        return new Date(year,month+1,0).getDate()
    }

    export const getSortedDays =(year:number,month:number)=>{
        let dayofweek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

        const dayIndex= new Date(year,month,1).getDay()
        const firstHlaf=dayofweek.slice(dayIndex);
        return [...firstHlaf,...dayofweek.slice(0,dayIndex)]
    }

    export const range =(start:number ,end:number )=>{
        const length=Math.abs((end-start)/1)
        const  {result} = Array.from({length}).reduce(({result,current})=>({
             result:[...result,current],
             current:current+1
        }),
            {result:[],current:start}
        )

 
        return result
    }
