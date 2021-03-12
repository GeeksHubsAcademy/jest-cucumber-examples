const EMPTY = "";
export class stringCalculator{

    public stringCalculator(){}
     public add(str:string ) { 
     if (str === EMPTY)
        return 0;
        
        let n = str.split(",");
        let total = n.reduce((acc, pos)=>acc + parseInt(pos), 0);

        return total
    }
   
}