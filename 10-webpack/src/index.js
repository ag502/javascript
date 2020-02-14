import hello from './hello.js';
import world from "./world.js";
import css from './style.css';
import _ from "lodash";

document.querySelector('#root').innerHTML = hello + world;

console.log(css);