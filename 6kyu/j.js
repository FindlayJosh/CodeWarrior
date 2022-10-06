games = ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']

function points(games) {
    let sum =0
  for (let i=0;i<=10; i++){
    games[i].split('')
    console.log(games[i].split(''))
    if(games[i].split('')[0] > games[i].split('')[2]){
      sum += 3 
    }if(games[i].split('')[0] < games[i].split('')[2]){
         sum += 0
         }
    if (games[i].split('')[0] = games[i].split('')[2]){
      sum += 1
    }
    }  
    console.log(sum)
  }