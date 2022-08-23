/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  //console.log(rawStory)
  let input = rawStory.split(/\s|]/)
  //console.log(input)
  const verbRex = /[v]$/
  const nounRex = /[n]$/
  const adjRex = /[a]$/
  const output = []
  for(i =0; i<input.length; i++){
    let obj ={}
    if(verbRex.test(input[i])){
      obj['word'] = input[i]
      obj['pos'] ='verb'
      output.push(obj)
    }
    else if(nounRex.test(input[i])){
      obj['word'] = input[i]
      obj['pos'] ='noun'
      output.push(obj)
    }
    else if(adjRex.test(input[i])){
      obj['word'] = input[i]
      obj['pos'] ='adjective'
      output.push(obj)
    }
    else{
      obj['word'] = input[i]
      output.push(obj)
    }
  }
  return output;
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
function editStory(obj){
  const editText = document.querySelector('div.madLibsEdit')
  for(i=0; i<obj.length; i++){
    if(obj[i].pos == 'verb'){
      editText.innerHTML= editText.innerHTML+'<input type="text"></input>'+'[v]'
    }
    else if(obj[i].pos == 'noun'){
      editText.innerHTML= editText.innerHTML+'<input type="text"></input>'+'[n]'
    }
    else if(obj[i].pos == 'adjective'){
      editText.innerHTML= editText.innerHTML+'<input type="text"></input>'+'[a]'
    }
    else{
      editText.innerHTML = editText.innerHTML+obj['word']
    }
  }
}
 
 //const preview = document.querySelector('div.madLibsPreview')
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });