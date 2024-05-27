
    function render(document: number): number {
        console.log(document);
        return 0;
    }

    console.log("hello World 1");

    let age: number = 20;
    console.log(age);
    render(age);

    let numbers: number[] = [1, 2, 3]; // arrays
    let user: [number, string] = [1, 'shaharyar']; // tuples

    const enum Size {
        Small = 1,
        Medium,
        Large,
    }

    let mySize: Size = Size.Large;
    console.log(mySize);
    
    type Employee = {
        id: number,
        name?: string
        retire: (date:Date) => void
    }

    let employee : Employee = {
        id: 2,name: 'shaharyar', retire: (date: Date) =>{
        console.log(date)
    }}

    function kgToLbs (weight: number  |string) : number{
        if(typeof weight === 'number'){
            return weight*2.2;
        }
        else{
            return parseInt(weight)*2.2
        }
    }
    kgToLbs(10);
    kgToLbs('10kg')

    type Draggable = {
        drag: () => void
    };
    type Resizeable = {
        resize: () => void
    };

    type UIWidget = Draggable & Resizeable
    let textBox: UIWidget = {
        drag: () => {},
        resize: () => {}
    }

    type Quantity = 50 | 100
    let quantity : Quantity = 100;

    let student : {id: number, name?: string} = {id:12}
    let student1 : {readonly id: number, name?: string} = {id:12}
    //student1.id =13


