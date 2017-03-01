let state = {
  wordCount: {},
  uniqueCount: 0,
  avgWordLength: 0
};


function wordCount(text) {
  state.wordCount = text.length;
}

function uniqueWordCount(text) {
  let obj = {};
  text.map(function (item) {
    if (item in obj) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  })
  state.wordCount = obj;
  state.uniqueCount = Object.keys(obj).length;
}

function wordAvgLength (text) {
let total = 0;
for (var i = 0; i < text.length; i++){
    total += text[i].length;
  }
  let avg = total / text.length;
  state.avgWordLength = avg;
}

function main() {
  $('button').on('click', function (e) {
    e.preventDefault();
    let text = $('textarea').val().split(" ");
    $('.hidden').removeClass('hidden');
    wordCount(text);
    $('#js-word-count').text(state.wordCount);
    uniqueWordCount(text);
    $('#js-unique').text(state.uniqueCount);
    wordAvgLength(text);
    $('#js-word-length').text(state.avgWordLength);
  })
}

$(main);

// function wordAvgLength (text) {
// let count = state.wordCount;
// let keys = Object.keys(count);
// let sum = [];
// keys.map((item)=>sum.push(item.length));
// let avg = sum.reduce((a,b)=>(a + b)/sum.length);
// state.avgWordLength = avg;
// }