function newImage(characterModel, coordinate){
    //Printing new image into webpage
    let newModel = document.createElement('img');
    newModel.src = './assets/' + String(characterModel);
    newModel.style.position = 'fixed';
    newModel.style.left = coordinate[0]+'px';
    newModel.style.bottom = coordinate[1]+'px';
    document.body.append(newModel);

    return newModel
}

function newItem(characterModel, coordinate){
    let item = newImage(characterModel, coordinate);

    item.addEventListener('dblclick', function(){
        item.remove();
    });
}


newImage('green-character.gif',[100,100]);
newImage('pine-tree.png', [450, 200]);
newImage('tree.png', [200,300]);
newImage('pillar.png', [350, 100]);
newImage('crate.png', [150, 200]);
newImage('well.png',[500,425]);

newItem('sword.png',[500, 405])
newItem('shield.png',[165, 185]);
newItem('staff.png',[600, 100]);