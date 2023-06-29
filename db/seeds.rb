User.create!(username: 'samity', password: 'password1')
User.create!(username: 'alpha', password: 'password1')
User.create!(username: 'zeta', password: 'password1')

Videogame.create!(
    name: 'The Legend of Zelda: Tears of the Kingdom',
    developer: 'Nintendo',
    release_date: Date.parse('2023-05-12', '%m-%d-%Y'),
    image_url: 'https://static.metacritic.com/images/products/games/0/7529054a2e91ed554500f775fb15370b-98.jpg',
    platform: 'Nintendo Switch',
    genre: 'Action-adventure')
Videogame.create!(
    name: 'The Legend of Zelda: Breath of the Wild',
    developer: 'Nintendo',
    release_date: Date.parse('2017-03-17', '%m-%d-%Y'),
    image_url: 'https://static.metacritic.com/images/products/games/9/6d163aaa6b6cc28519ffea9195649929-98.jpg',
    platform: 'Nintendo Switch',
    genre: 'Action-adventure')
Videogame.create!(
    name: 'Final Fantasy VII',
    developer: 'Squaresoft',
    release_date: Date.parse('1997-01-31', '%m-%d-%Y'),
    image_url: 'https://static.metacritic.com/images/products/games/0/2284e7dc83a75d99f0c6f874a29cbcd2-98.jpg',
    platform: 'Playstation',
    genre: 'Role-playing'
)
Videogame.create!(
    name: 'Powerwash Simulator',
    developer: 'FuturLab',
    release_date: Date.parse('2021-05-19', '%m-%d-%Y'),
    image_url: 'https://static.metacritic.com/images/products/games/3/fc7f50b1b4d72338b250298e0694c8e0-98.jpg',
    platform: 'Steam',
    genre: 'Simulation'
)
Videogame.create!(
    name: 'Super Smash Brothers: Ultimate',
    developer: 'Nintendo',
    release_date: Date.parse('2018-12-07', '%m-%d-%Y'),
    image_url: 'https://static.metacritic.com/images/products/games/6/cb1c4fbf6a314df9c7354aea84c4198a-98.jpg',
    platform: 'Nintendo Switch',
    genre: 'Platform-fighting'
)

Review.create!(
    title: "A Well-Baked Masterpiece.",
    user_id: 1,
    videogame_id: 1,
    rating: 10,
    body: "In the modern day of games being rushed out to meet self-inflicted deadlines, Nintendo has proven that taking the time to let their game bake and be refined should be the direction the industry takes.  Tears of the Kingdom is like Breath of the Wild on crack. It's gameplay allows for endless creativity and almost endless exploration.  The player has the autonomy to have whatever adventure they want to, with endless distractions along the way.  This game distracted me from school too much and I almost failed out as a result.  Play this game.  Just do it."
)
Review.create!(
    title: "A Game That Changed the Industry.",
    user_id: 1,
    videogame_id: 2,
    rating: 8,
    body: "Nintendo was floundering when they released the Nintendo Switch and Breath of the Wild.  The Wii-U was a commercial failure and there was talk of Nintendo leaving the gaming console market.  Nintendo looked to their favorite child, The Legend of Zelda.  They created a game with amazing mechanics and as a result near infinite replayability.  Six years after content creators and players alike still find new and interesting ways to play this sandbox game.  A sandbox game, for six years.  'Nuff said."
)
Review.create!(
    title: "My Introduction to JRPGs.", 
    user_id: 1,
    videogame_id: 3,
    rating: 9,
    body: "This game means more to mean than I can necessarily put to words.  A compelling fantasy plot with too many parallels to the real world.  Your adventure begins with a mercenary joining and ecoterrorist group in an effort to stop a power hungry corporation from destroying the planet of Gaia.  The characters you meet along the way are of many varities, each with their own compelling stories and personal growth.  While the game's mechanics and graphics may not have aged well in the year 2023, what this game was at the time of release and the amount of people it reached and changed forever cannot be ignored"
)
Review.create!(
    title: "The Only Review You Need To Read.",
    user_id: 1,
    videogame_id: 4,
    rating: 10,
    body: "Do you enjoy the rush you get from knowing you've accomplished a task? Do you like anything resembling coloring, drawing, or painting? Do you like minimal brain effort and maximum enjoyment?  You should play this game. It's enjoyable, not only because it checks the box of giving you an activity to do, but it has the added benefit of being simple enough of a concept that if your main goal in playing a game is to beat it, you'll be successful in that endeavor as well!"
)
Review.create!(
    title: "My Favorite Videogame.",
    user_id: 1,
    videogame_id: 5,
    rating: 10,
    body: "Sakurai's masterwork.  The man has made habit of topping himself with every new release.  The fan service of this game is rivaled by none.  Forty-one different videogame franchises are represented by the eighty-nine character roster.  Fourteen of them are non-Nintendo.  There is a character for every videogame lover out there.  The gameplay is simple, yet incredibly nuanced; allowing for players of all skill levels to be able to enjoy the game.  If you are open to the idea of playing a fighting game" 
)

puts "Seeding complete"