
import { useEffect, useState } from "react";
import { getDataWithFilter } from "src/utils/appUtils";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "./reducers/carsReducer";
import Page from "./components/Page";

function App() {
    const [totalCount, setTotalCount] = useState(0);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        getDataWithFilter(filter).then((data) => {
            dispatch(setCars(data.stocks));
            setTotalCount(data.totalCount);
        });
    }, [filter]);

    return (
        <Page totalCount={totalCount}/>  
    );
}

export default App;
