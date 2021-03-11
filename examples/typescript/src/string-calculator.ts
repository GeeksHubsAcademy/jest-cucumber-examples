export class stringCalculator{
    
    public stringCalculator(){}
     public add(str:string ) { 
     if (str === "")
        return 0;
        
        let n = str.split(",");
        let total = parseInt(n[0]) + parseInt(n[1]);

        return total
    }
   
}