import React from "react";
import "../css/home.css";
class Dropdown extends React.Component {

    render() {
        const showMenu = this.props.isShowMenu ? (<div className="dropdown-selection">
            <ul>
                <li data-txt="name"
                    onClick={this.props.sortByName}>name</li>
                <li data-txt="availability"
                    onClick={this.props.sortByName}>Availability</li>

            </ul>
        </div>) : "";

        return (
            <div onClick={this.props.onClick}>
                <div className="sort-by-title">
                    <h2>Sort by</h2>
                </div>
                <div className="dropdown">

                    <div className="dropdown-container">
                        <span>name</span><span>+</span>
                    </div>
                    {showMenu}
                </div>

            </div>
        );
    }
}
export default Dropdown;
