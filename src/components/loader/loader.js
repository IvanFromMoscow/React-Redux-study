import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

export const Spinner = props => {
    const spinner = useSelector(state => state.loaderReducer.loading);
    return (
        <div className="loader-styles">
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
                visible={spinner}
            />
        </div>
    )
}