function newImage(characterModel, coordinate){
    //Printing new image into webpage
    //Returns the DOM element for further functionality
    let newModel = document.createElement('img');
    newModel.src = './assets/' + String(characterModel);
    newModel.style.position = 'fixed';
    newModel.style.left = coordinate[0]+'px';
    newModel.style.bottom = coordinate[1]+'px';
    document.body.append(newModel);

    return newModel;
}

//Interative items created in DOM 
//Returns the DOM element for further functionality
function newItem(characterModel, coordinate){
    let item = newImage(characterModel, coordinate);

    item.addEventListener('dblclick', function(){
        item.remove();
    });

    return item;
}

//Creates background with respect to window size. 
function setBackground(characterModel){
    for(let i = 0; i < Math.ceil(window.innerWidth/100); i++){
        for(let j = 0; j < Math.ceil(window.innerHeight/100); j++){

            //Toggle to decide where ground-sky barrier exists
            let indexBackground = 0;
            let groundSkyBarrier = 500;
            if(j*100 < groundSkyBarrier){
                indexBackground = 0; //
            }
            else{
                indexBackground = 1;
            }
            newImage(characterModel[indexBackground],[i*100,j*100]);
        }
    }

}

//Create background 
setBackground(['grass.png','sky.png']);

//Creating all images by function calls
newImage('green-character.gif',[100,100]);
newImage('pine-tree.png', [450, 200]);
newImage('tree.png', [200,300]);
newImage('pillar.png', [350, 100]);
newImage('crate.png', [150, 200]);
newImage('well.png',[500,425]);

//Creates all interactive images by function calls
newItem('sword.png',[500, 405])
newItem('shield.png',[165, 185]);
newItem('staff.png',[600, 100]);