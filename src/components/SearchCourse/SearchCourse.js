import React from "react";
import { useLocation } from "react-router-dom";
import SearchResult from "./SearchResults/SearchResult";
import courses from "../../data/coursesData";
import "./SearchCourse.css";
// import sampleImg from "../../../../images/studentsViewing/courses/course1.png";

function SearchCourse(props) {
  // will search given course name from already present courses that will be stored in some file or
  // array
  const location = useLocation();
  const { state } = location;
  const keyword = state ? state : "";
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <div className="search-result-container">
     
      {filteredCourses.map((course) => (
        <SearchResult key={course.id} result ={course} handleAddToCart={props.handleAddToCart} />
       
      ))}
    </div>
  );
}

export default SearchCourse;
