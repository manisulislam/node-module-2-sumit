const EventEmmiter = require("events")
const emmitter= new EventEmmiter();


//register a listener for bell rings
emmitter.on('bellrings', (period)=>{
    console.log(`we need to run because ${period}`);
})
//raise an event
emmitter.emit("bellrings")

//2second after emmit run
setTimeout(()=>{
emmitter.emit("bellrings", "second period ended");
}, 2000)