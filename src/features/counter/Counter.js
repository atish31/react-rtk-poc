import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <section>
            { count }
            <div>
                <button onClick={() => dispatch(increment())}>
                    +
                </button>
                <button onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>
        </section>
    )
}
export default Counter;