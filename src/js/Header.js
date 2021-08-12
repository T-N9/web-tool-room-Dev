import React from 'react';
import $ from 'jquery';

const Header=props=>{
  const componentDidMount=()=> {
    $("#searchBar").on("keyup", function() {
        var divHeight=$('#dataSectionMenu').height();
        var value = $(this).val().toLowerCase();
        var notFound=$('#noFoundData');
        $(".card").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        $(".data-items").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        if(divHeight==0){
          notFound.removeClass('d-none');
        }
        else{
          notFound.addClass('d-none');
        }
      });
  }

    return(
        <header id="appHeader" className="my-primary-font">
            <div id="searchBars" className="container">
              <div className="row">
                  <div className="col-12 px-0">
                      <div className="d-flex justify-content-center flex-column align-items-center">
                        <input onKeyUp={componentDidMount}  className="form-control search-section" id="searchBar" type="text" placeholder="Search for something (keyword)..." />
                      </div>
                  </div>
              </div>
            </div>
        </header>
    )
}

export default Header;