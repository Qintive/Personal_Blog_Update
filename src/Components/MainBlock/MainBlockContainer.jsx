import { connect } from "react-redux"
import { compose } from "redux"
import MainBlock from "./MainBlock";


let mapStateToProps = (state) => {
    return{
        cards: state.mainBlockPage.cards,
    }
}



export default compose (
    connect( mapStateToProps, {} )
)
(MainBlock);
