import React, { useState } from "react";
import { Dropdown, Button, Form } from "react-bootstrap";

const DropDown = () => {
  const [value, setValue] = useState(null);
  const [genreList, setGenreList] = useState([]);
  function handleChange(evt) {
    setValue(evt.target.value);
  }
  function fetchGeneres() {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=542003918769df50083a13c415bbc602&language=en-US"
    )
      .then((data) => data.json())
      .then((genres) => {
        setGenreList(genres.genres);
        console.log(genreList);
      });
  }
  return (
    <React.Fragment>
      <Form.Control as="select" onChange={handleChange}>
        {genreList.map((genre) => {
          return (
            <option id={genre.id} key={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </Form.Control>
      <Button onClick={fetchGeneres}> change genere</Button>
    </React.Fragment>

    // <React.Fragment>
    //   <Dropdown className="mr-3">
    //     <Dropdown.Toggle variant="danger" id="dropdown-basic">
    //       Geners
    //     </Dropdown.Toggle>

    //     <Dropdown.Menu>
    //       {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
    //       {genreList.map(genre => {
    //         return (
    //           <Dropdown.Item id={genre.id} href="#/action-2" key={genre.id}>
    //             {genre.name}
    //           </Dropdown.Item>
    //         );
    //       })}
    //     </Dropdown.Menu>
    //   </Dropdown>
    //   <Button onClick={fetchGeneres}> change genere</Button>
    // </React.Fragment>
  );
};

export default DropDown;
