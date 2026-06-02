import github from "../assets/app-logo/github.png";
import vscode from "../assets/app-logo/vscode.png";
import nuxt from "../assets/app-logo/nuxt.png";
import figma from "../assets/app-logo/figma.png";
import reactLogo from "../assets/app-logo/react.png";
import vue from "../assets/app-logo/vue.png";
import go from "../assets/app-logo/go.png";
import docker from "../assets/app-logo/docker.png";

export const srcMap: Record<string, string> = {
    github,
    vscode,
    nuxt,
    figma,
    reactLogo,
    vue,
    go,
    docker,
};

export const TechIcons = [
    {
        key: "github",
        alt: "Github",
        src: "github",
        style: { top: "14%", left: "10%" },
        anim: { y: [0, -10, 0], rotate: [0, 4, -4, 0] },
        dur: 4.0,
        delay: 0.0,
        cls: "w-16 h-16 md:w-20 md:h-20",
    },
    {
        key: "vue",
        alt: "Vue.js",
        src: "vue",
        style: { top: "14%", right: "10%" },
        anim: { y: [0, -12, 0], rotate: [0, -5, 5, 0] },
        dur: 5.0,
        delay: 0.5,
        cls: "h-16 md:h-20",
    },
    {
        key: "react",
        alt: "React",
        src: "reactLogo",
        style: { top: "6%", left: "32%" },
        anim: { y: [0, -8, 0], rotate: [0, 6, -6, 0] },
        dur: 4.5,
        delay: 1.0,
        cls: "w-16 h-16 md:w-20 md:h-20",
    },
    {
        key: "figma",
        alt: "Figma",
        src: "figma",
        style: { top: "6%", right: "32%" },
        anim: { y: [0, -9, 0], rotate: [0, -4, 4, 0] },
        dur: 5.2,
        delay: 1.5,
        cls: "w-16 h-16 md:w-20 md:h-20",
    },
    {
        key: "docker",
        alt: "Docker",
        src: "docker",
        style: { top: "45%", left: "4%" },
        anim: { y: [0, -11, 0], rotate: [0, 3, -3, 0] },
        dur: 4.8,
        delay: 0.8,
        cls: "h-16 md:h-20",
    },
    {
        key: "vscode",
        alt: "VS Code",
        src: "vscode",
        style: { top: "45%", right: "4%" },
        anim: { y: [0, -7, 0], rotate: [0, -6, 6, 0] },
        dur: 3.8,
        delay: 0.3,
        cls: "w-16 h-16 md:w-20 md:h-20",
    },
    {
        key: "nuxt",
        alt: "Nuxt.js",
        src: "nuxt",
        style: { bottom: "14%", left: "10%" },
        anim: { y: [0, -13, 0], rotate: [0, 5, -5, 0] },
        dur: 5.5,
        delay: 0.6,
        cls: "w-16 h-16 md:w-20 md:h-20",
    },
    {
        key: "go",
        alt: "Golang",
        src: "go",
        style: { bottom: "14%", right: "10%" },
        anim: { y: [0, -9, 0], rotate: [0, -3, 3, 0] },
        dur: 4.2,
        delay: 1.2,
        cls: "h-16 md:h-20",
    },
];