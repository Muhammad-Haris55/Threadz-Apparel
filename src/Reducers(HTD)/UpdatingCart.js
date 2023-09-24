import { mencart } from "../Mens";
import {Cart} from "../Cart"
let initialstate = 0;
// Yeh function aik reducer kehlata hai (is m yh 2 parameters mendatory hain)
const Addingtocart = (state = initialstate, action) => {
    // action.type=Batay ga user na kha click kia
    switch (action.type) {
        // Case 1 add kry reducer 1,AIk actionp aik h reducer chlta hai
        case "Add to cart": return state + 1;
        default: return state;
    }
}
export default Addingtocart;

