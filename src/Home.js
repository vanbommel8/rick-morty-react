import { useState } from "react";
import { useDebounce } from "react-use";
import Characters from "./Characters";
import Navigation from "./Navigation";
import Search from "./Search"

export default function Home({ page, setPage }) {
    const [maxPage, setMaxPage] = useState(0);
    const [name, setName] = useState();
    const [status, setStatus] = useState();
    const [debouncedValue, setDebouncedValue] = useState();


    const [, cancel] = useDebounce(
        () => {
            setDebouncedValue(name);
        },
        1000,
        [name]
    );

    function handleChange(e) {
        const { value, name } = e.target;
        if (name === "name") {
            setName(value);
        } else {
            setStatus(value);
        }
    }

    return (
        <>
            <Navigation page={page} setPage={setPage} maxPage={maxPage} />
            <Search handleChange={handleChange} />
            <Characters
                page={page}
                setMaxPage={setMaxPage}
                debouncedValue={debouncedValue}
                status={status}
            />
        </>
    );
}