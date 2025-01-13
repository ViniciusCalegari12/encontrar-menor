const encontrarMenor = (vetor) => {
    if (vetor.length === 1) {
        return vetor[0];
    }

   
    const MenorRest = encontrarMenor(vetor.slice(0, vetor.length - 1));


    return vetor[vetor.length - 1] < MenorRest ? vetor[vetor.length - 1] : MenorRest;
};

const vetor = [5, 3, 8, 1, 7];
console.log(encontrarMenor(vetor)); 
