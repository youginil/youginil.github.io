import { Component, For } from "solid-js";

const github = "https://github.com/youginil";
const email = "youginil@outlook.com";
const products = [
    {
        name: "Dolphin",
        desc: "An efficient memorization app",
        icon: "dolphin.png",
        href: "https://i9ver4get.github.io/",
    },
    {
        name: "Dauphin",
        desc: "Memory card editor for Dolphin",
        icon: "dauphin.png",
        href: "https://i9ver4get.github.io/",
    },
    {
        name: "Beluga",
        desc: "Offline dictionary",
        icon: "beluga.png",
        href: "",
    },
];

const Home: Component = () => {
    return (
        <div class="font-serif">
            <div class="h-screen flex flex-col items-center justify-center">
                <div class="avatar">
                    <div class="w-40 mask mask-squircle">
                        <img src="https://avatars.githubusercontent.com/u/11213808?v=4" />
                    </div>
                </div>
                <h2 class="text-4xl mt-5">Youginil</h2>
                <ul class="mt-5">
                    <li>
                        <a href={github} target="_blank">
                            <i class="bi bi-github mr-2"></i>
                            {github}
                        </a>
                    </li>
                    <li>
                        <a href={"mailto:" + email}>
                            <i class="bi bi-envelope-at-fill mr-2"></i>
                            {email}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="grid sm:grid-cols-3 max-sm:grid-cols-2 gap-6 lg:max-w-[1000px] lg:mx-auto px-5 py-10">
                <For each={products}>
                    {(item) => (
                        <a
                            class="card w-full bg-base-200 shadow-lg transition-all hover:shadow-2xl"
                            href=""
                            target="_blank"
                        >
                            <figure class="px-10 pt-10">
                                <img src={"/" + item.icon} class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{item.name}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </a>
                    )}
                </For>
            </div>
        </div>
    );
};

export default Home;
