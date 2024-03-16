import PropTypes from "prop-types";
import TabButton from "./TabButton";

const tabs = [
  { id: "components", label: "Components" },
  { id: "jsx", label: "JSX" },
  { id: "props", label: "Props" },
  { id: "state", label: "State" },
];

TabMenu.propTypes = {
  selectedTopic: PropTypes.string,
  handleSelect: PropTypes.func.isRequired,
};

export default function TabMenu({ selectedTopic, handleSelect }) {
  return (
    <menu>
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          isSelected={selectedTopic === tab.id}
          onSelect={() => handleSelect(tab.id)}
        >
          {tab.label}
        </TabButton>
      ))}
    </menu>
  );
}
