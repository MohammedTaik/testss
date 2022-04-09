import React , { useState } from "react";


function Categorie({ Categories ,onChange , onClick}) {
  const [isopen, setopen] = useState(false);
  return (
    <>
      <form>
        <select aria-label="State" className="combo" id="comboCategorie">
          <option value="Select">Select....</option>
          {Categories.map((Categorie) => {
            return <option>{Categorie.categorie}</option>;
          })}
        </select>
        <img src="../image/plus.png" alt="" className="plus" onClick={() => setopen(true)}/>
      </form>
    </>
  );
}
export default Categorie;