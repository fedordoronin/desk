/*** @jsx React.DOM */

const React = require('react');

const Copyright = React.createClass({
    render() {
        return (
            <div className="headheart">
                <a target="_blank" href="http://www.headheart.ru/">
                    <span className="slon" />
                </a>
                <span className="text"> — разработка сайта</span>
            </div>
        )
    }
});

module.exports = Copyright;
