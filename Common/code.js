class Movie {
    constructor(title,year,duration){
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play(){

    }
    pause(){

    }
    resume(){

    }
}
class Actor{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
}
class EventEmitter{
    constructor()
    {
        this.events= {};
    }
    
    on(eventName,callback){
        if(this.events[eventName]){
            this.events[eventName].push(callback);
        }else{//in case no event was ever registered
            this.events[eventName] = [callback];
        }
    }

    emit(eventName,...rest){
        if(this.event[eventName]) {
            this.event[eventName]
            .forEach(callback =>
                callback.apply(null,rest)
            );
        }
    }
    
    off(eventName,callback){
        if(this.events[eventName]){
            this.events[eventName].pop(callback);
        }else{
            console.log("The Emitter is empty");
        }
    }
}

let movieOne = new Movie("Kong","2018","2h30m");
let movieTwo = new Movie("Joker","2019","2h03m");
let movieThree = new Movie("John Wick 3", "2019", "1h49m");

console.log({movieOne,movieTwo,movieThree}); 