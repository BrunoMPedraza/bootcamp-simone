
class Movie {
    constructor(title, year, duration) {
      this.title = title;
      this.year = year;
      this.duration = duration;
      this.actors = [];
    }
  
    addCast(actorOrActors) {
      if (Array.isArray(actorOrActors)) {
        this.actors.push(...actorOrActors);
      } else {
        this.actors.push(actorOrActors);
      }
    }
  }
  class Actor {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }


  const terminator = new Movie('Terminator I', 1985, 60);
  const arnold = new Actor('Arnold Schwarzenegger', 50);
  const otherCast = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
  ];

  let movieOne = new Movie("Kong", 2018, 110);
  let movieTwo = new Movie("Joker", 2019, 120);
  let movieThree = new Movie("John Wick 3", 2020, 140);
  terminator.addCast(arnold);
  terminator.addCast(otherCast);



  class Social{
    constructor(movieName){
      this.movieName = movieName
    }

    share(friendName){
      return (`${friendName}`+ " shares " + `${this.movieName}`)
    }
    like(friendName){
      return (`${friendName}`+ " likes " + `${this.movieName}`)
    }
  }

  const myText = new Social(movieOne.title);
  const likeText = myText.like("banana")
  const shareText = myText.share("monke")
  console.log({movieOne,movieTwo,movieThree,terminator},{likeText,shareText})