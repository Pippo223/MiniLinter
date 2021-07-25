let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ')
console.log(storyWords.length)

let betterWords = []
betterWords = storyWords.filter(word => {
   if (!unnecessaryWords.includes(word))
 { 
    return word
    }
})
console.log(betterWords.length+ ' words')

function overUsed(arr) {
  count = 0
  for(i=0; i<arr.length;i++)
  {
    if(arr[i]==='really'||arr[i]==='very'||arr[i]==='basically'){
      count++;
      arr[i] = '(overused word)';
    }
  }
  return count
}
console.log(+overUsed(betterWords)+' overused words')

function largestNum(arr) {
  let temp = 0
  for (let num of arr) {
    if(num > temp) {
      temp = num;
    }
  }
  return temp;
}

function mostUsedWord(arr) {
  let countArr = [];
    for(i=0; i<arr.length;i++)
  {
    let count = 0
    let temp = arr[i];
    for (let j=0; j<arr.length;j++) {
      if(arr[j] === temp) {
        count++
      }
    }
    countArr.push(count);
  }
//console.log(countArr.join(','))
let largestNumOfOccurrence = largestNum(countArr)
//console.log(largestNumOfOccurrence);
let idxOfLargest = countArr.indexOf(largestNumOfOccurrence)
//console.log(idxOfLargest)
console.log(`The most occuring word is '${arr[idxOfLargest]}', occuring ${largestNumOfOccurrence} times`)
}

function sentenceCount(arr) {
  let count = 0
  for(let word of arr) {
    if (word.includes('.')||word.includes('!'))
    {
      count++
    }
  }
return count
}
console.log(+sentenceCount(betterWords)+' sentences')
mostUsedWord(betterWords);

console.log(betterWords.join(' '))