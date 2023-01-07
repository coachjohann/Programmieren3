class Grass{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.neighborPos = [
            [this.x -1, this.y -1],
            [this.x, this.y -1],
            [this.x +1, this.y-1],
            [this.x-1, this.y],
            [this.x+1, this.y],
            [this.x-1, this.y+1],
            [this.x, this.y+1],
            [this.x+1, this.y+1]
        ];
        this.multiply = 0;
    }

    chooseFields(symbol){
        let found = [];
        for(let i = 0; i < this.neighborPos.length; i++){
            let posArr = this.neighborPos[i];
            let x = posArr[0];
            let y = posArr[1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == symbol){
                    found.push(posArr);
                }
            }
            
        }
        return found;
    }

    mul(){
        this.multiply++;
        // wenn 5 Runden vorbei 
        if(this.multiply >= 5){
            // dann vermehren
            // Schritt1:
            let emptyFields = this.chooseFields(0);
            if(emptyFields.length > 0){
                let newPos = random(emptyFields);
                let newX = newPos[0];
                let newY = newPos[1];
                // Schritt2:
                let grasObj = new Grass(newX, newY);
                grassArr.push(grasObj);
                matrix[newY][newX] = 1;
            }
            this.multiply = 0;
        }
    }
}

class Grazer {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.neighborPos = [
            [this.x -1, this.y -1],
            [this.x, this.y -1],
            [this.x +1, this.y-1],
            [this.x-1, this.y],
            [this.x+1, this.y],
            [this.x-1, this.y+1],
            [this.x, this.y+1],
            [this.x+1, this.y+1]
        ];
        this.eatCounter = 0;
        this.notEatCounter = 0;
    }

    updateNeighbors(){
        this.neighborPos = [
            [this.x -1, this.y -1],
            [this.x, this.y -1],
            [this.x +1, this.y-1],
            [this.x-1, this.y],
            [this.x+1, this.y],
            [this.x-1, this.y+1],
            [this.x, this.y+1],
            [this.x+1, this.y+1]
        ];
    }

    chooseFields(symbol){
        this.updateNeighbors();
        let found = [];
        for(let i = 0; i < this.neighborPos.length; i++){
            let posArr = this.neighborPos[i];
            let x = posArr[0];
            let y = posArr[1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == symbol){
                    found.push(posArr);
                }
            }
        }
        return found;
    }

    eat(){

        let grassFields = this.chooseFields(1);
        if(grassFields.length > 0){
            
            let grassPos = random(grassFields);
            let newX = grassPos[0];
            let newY = grassPos[1];
            matrix[newY][newX]= 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            // fressen
            for(let i=0; i< grassArr.length; i++){
                let grObj = grassArr[i];
                if(grObj.x == this.x && grObj.y == this.y){
                    // lösche das grasObj
                    grassArr.splice(i, 1); // index, wieviele Element löschen
                    break;
                }
            }
            this.eatCounter++;
            this.notEatCounter = 0;
        }else{
            this.eatCounter = 0;
            this.notEatCounter++;
            if(this.notEatCounter >= 5){
                this.die();
            }else{
                this.move();
            }
            
        }
    }

    die(){
        matrix[this.y][this.x] = 0;
        for(let i = 0; i < grazerArr.length; i++){
            let grasfresserObj = grazerArr[i];
            if(grasfresserObj.x == this.x && grasfresserObj.y == this.y){
                grazerArr.splice(i, 1);
                break;
            }
        }
    }

    move(){
        let emptyFields = this.chooseFields(0);
        if(emptyFields.length > 0){
            //
            let newPos = random(emptyFields);
            let newX = newPos[0];
            let newY = newPos[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }

    mul(){
        
        // wenn 5 Runden vorbei 
        if(this.eatCounter >= 5){
            // dann vermehren
            // Schritt1:
            let emptyFields = this.chooseFields(0);
            if(emptyFields.length > 0){
                let newPos = random(emptyFields);
                let newX = newPos[0];
                let newY = newPos[1];
                // Schritt2:
                grazerArr.push(new Grazer(newX, newY));
                matrix[newY][newX] = 2;
            }
            this.eatCounter = 0;
        }
    }
}

class Predator {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.neighborPos = [
            [this.x -1, this.y -1],
            [this.x, this.y -1],
            [this.x +1, this.y-1],
            [this.x-1, this.y],
            [this.x+1, this.y],
            [this.x-1, this.y+1],
            [this.x, this.y+1],
            [this.x+1, this.y+1]
        ];
        this.eatCounter = 0;
        this.notEatCounter = 0;
    }

    updateNeighbors(){
        this.neighborPos = [
            [this.x -1, this.y -1],
            [this.x, this.y -1],
            [this.x +1, this.y-1],
            [this.x-1, this.y],
            [this.x+1, this.y],
            [this.x-1, this.y+1],
            [this.x, this.y+1],
            [this.x+1, this.y+1]
        ];
    }

    chooseFields(symbol){
        this.updateNeighbors();
        let found = [];
        for(let i = 0; i < this.neighborPos.length; i++){
            let posArr = this.neighborPos[i];
            let x = posArr[0];
            let y = posArr[1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == symbol){
                    found.push(posArr);
                }
            }
        }
        return found;
    }

    eat(){

        let grassFields = this.chooseFields(1);
        if(grassFields.length > 0){
            
            let grassPos = random(grassFields);
            let newX = grassPos[0];
            let newY = grassPos[1];
            matrix[newY][newX]= 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            // fressen
            for(let i=0; i< grassArr.length; i++){
                let grObj = grassArr[i];
                if(grObj.x == this.x && grObj.y == this.y){
                    // lösche das grasObj
                    grassArr.splice(i, 1); // index, wieviele Element löschen
                    break;
                }
            }
            this.eatCounter++;
            this.notEatCounter = 0;
        }else{
            this.eatCounter = 0;
            this.notEatCounter++;
            if(this.notEatCounter >= 5){
                this.die();
            }else{
                this.move();
            }
            
        }
    }

    die(){
        matrix[this.y][this.x] = 0;
        for(let i = 0; i < grazerArr.length; i++){
            let grasfresserObj = grazerArr[i];
            if(grasfresserObj.x == this.x && grasfresserObj.y == this.y){
                grazerArr.splice(i, 1);
                break;
            }
        }
    }

    move(){
        let emptyFields = this.chooseFields(0);
        if(emptyFields.length > 0){
            //
            let newPos = random(emptyFields);
            let newX = newPos[0];
            let newY = newPos[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }

    mul(){
        
        // wenn 5 Runden vorbei 
        if(this.eatCounter >= 5){
            // dann vermehren
            // Schritt1:
            let emptyFields = this.chooseFields(0);
            if(emptyFields.length > 0){
                let newPos = random(emptyFields);
                let newX = newPos[0];
                let newY = newPos[1];
                // Schritt2:
                grazerArr.push(new Grazer(newX, newY));
                matrix[newY][newX] = 2;
            }
            this.eatCounter = 0;
        }
    }


}