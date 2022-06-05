import { Dropdown, DropdownButton } from "react-bootstrap";


const Filtering = ({ selectedItem: selectedValue, handleSelectedItemChange, inputValue, setInputValue }) => {
   
   
   const items = ['', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  
   
   
   
   
    return (
      <>
        <input
          placeholder="Search for a country..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          {
            items.map((item, index) => (
              <Dropdown.Item
                isHighlighted={highlightedIndex === index}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item || "Filter by Region"}
              </Dropdown.Item>
            ))}
        </DropdownButton>
      </>
    );
}
 
export default Filtering;