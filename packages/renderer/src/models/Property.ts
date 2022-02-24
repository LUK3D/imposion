/** `Property` Types that defines what component will be used to set this propertie values */
enum PropertyTypes{
    Number,
    String,
    Color,
    Range,
    Gradient
}
/**Creates a new css Propertie object with all required values */
export default class Property{
    name:string;
    type: PropertyTypes;
    tip?:string;

    
    constructor(args:{
        /** Property name */
        name:string, 
        /**Propertie value type */
        type:PropertyTypes,
        /**Tooltip text to help users */
        tip?:string,
    }){
        this.name = args.name;
        this.type = args.type;
        this.tip = args.tip;
    }
}

export{
    Property,
    PropertyTypes,
};