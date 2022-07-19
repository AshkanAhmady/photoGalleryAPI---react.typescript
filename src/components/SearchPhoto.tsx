import React, { useState } from "react";
import { SearchPhotoComponentProps } from "../Interfaces";

const SearchPhoto: React.FC<SearchPhotoComponentProps> = (props) => {
  const [term, setTerm] = useState<string>("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    props.setTerm(term);
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={(e) => submitForm(e)} className={`col-10 col-sm-5`}>
          <div className="form-group">
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="form-control"
              type="text"
              placeholder="search..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPhoto;
