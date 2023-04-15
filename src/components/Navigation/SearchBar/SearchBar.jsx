import { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const keyword = useRef();
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  const handleSearch = () => {
    alert("search clicked " + keyword.current.value);
    navigate ("./SearchResult", { state: keyword.current.value });

  };
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 50,
        backgroundColor: "#F7F9FA",
        marginLeft: 0,
        border: "1px solid #1c1d1f",
        width: "90%",
        height: 48,
        color: "#8A8B8D",
      }}
    >
      <div
        style={{
          padding: "0 16px",
          height: "100%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchIcon
          sx={{ fontSize: 24 }}
          id="search-icon"
          onClick={handleSearch}
        />
      </div>
      <input
        type="text"
        placeholder="Search for anything"
        aria-label="search"
        ref={keyword}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{
          border: "none",
          backgroundColor: "transparent",
          width: "100%",
          height: "100%",
          padding: "8px 16px 8px 48px",
          fontSize: 14,
          color: "#1c1d1f",
          outline: "none",
        }}
      />
    </div>
  );
};

export default SearchBar;
