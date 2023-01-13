import Dropdown from "bootstrap/js/dist/dropdown";
import Modal from "bootstrap/js/dist/modal";

const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
[...dropdownElementList].map(
  (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
);

new Modal(document.querySelector("#exampleModal"), { backdrop: "static" });
