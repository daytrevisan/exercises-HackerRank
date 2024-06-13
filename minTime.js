// Através das informações de: 1. tempo de processamento de arquivo, 2. número de núcleos disponíveis para processamento e 3. número máximo de núcleos que podem ser usados simultaneamente
// Calcule o tempo mínimo necessário para processar todos os arquivos, considerando as restrições de núcleos e limite

function minTime(files, numCores, limit) {
    let tempoProcessamento = 0;
    let numNucleosEmUso = 1;
    let arqVariosNucleos = [];

    for(let i=0; i<files.length; i++) {
        if(files[i] % numCores !== 0) {
            tempoProcessamento += files[i];
        } else {
            arqVariosNucleos.push(files[i]);
        }
    }

    console.log(tempoProcessamento);

    arqVariosNucleos.sort((a,b) => b-a);

    for(let i=0; i< arqVariosNucleos.length; i++) {
        if(numNucleosEmUso <= limit) {
            tempoProcessamento += Math.floor(arqVariosNucleos[i] / numCores);
            numNucleosEmUso++;
        } else {
            tempoProcessamento += arqVariosNucleos[i];
        }
    }

    return tempoProcessamento;
}

console.log(minTime())