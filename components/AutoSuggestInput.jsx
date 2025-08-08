// components/AutoSuggest.js
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

const AutoSuggestInput = ({ fetchData, onSelectItem, mapItemToString }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = async ({ value }) => {
    const fetchedSuggestions = await fetchData(value);
    setSuggestions(fetchedSuggestions.data);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setValue(mapItemToString(suggestion)); // Use the mapping function to get the string value
    onSelectItem(suggestion); // Call the onSelectItem function with the selected suggestion
  };

  const inputProps = {
    placeholder: "Search...",
    value,
    onChange: (event) => setValue(event.target.value),
    className:
      "border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500",
  };

  const renderSuggestion = (suggestion) => (
    <div className="cursor-pointer p-2 hover:bg-gray-200">
      {mapItemToString(suggestion)}{" "}
      {/* Use the mapping function to display the suggestion */}
    </div>
  );

  return (
    <div className="relative">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => mapItemToString(suggestion)} // Use the mapping function
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      {suggestions.length > 0 && (
        <div
          className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-y-auto"
          style={{ bottom: "100%" }}
        >
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              onClick={() => onSuggestionSelected(null, { suggestion })}
            >
              {renderSuggestion(suggestion)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoSuggestInput;
