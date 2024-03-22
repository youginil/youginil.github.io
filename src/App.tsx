import { ParentComponent, onMount } from "solid-js";
import { themeChange } from "theme-change";

const App: ParentComponent = (props) => {
    onMount(async () => {
        themeChange();
    });

    return (
        <>
            <input
                type="checkbox"
                class="toggle toggle-sm fixed top-4 right-4"
                data-toggle-theme="light,dark"
            />
            <div>{props.children}</div>
        </>
    );
};

export default App;
