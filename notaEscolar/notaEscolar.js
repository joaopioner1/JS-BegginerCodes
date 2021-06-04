let array = [60, 50, 100];

function mediaAluno(grades) {
    let avg = 0;
    for(let i = 0; i < array.length; i++) {
        avg += array[i];
    }
    return avg / grades;
  }

  console.log(mediaAluno(3));