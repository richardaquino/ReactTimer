var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUltils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should-exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
             var controls = TestUltils.renderIntoDocument(<Controls countdownStatus="started" />);
             var $el = $(ReactDOM.findDOMNode(controls));
             var $pauseButton = $el.find('button:contains(Pause)');

             expect($pauseButton.length).toBe(1);
        });

        it('should render start when paused', () => {
             var controls = TestUltils.renderIntoDocument(<Controls countdownStatus="paused" />);
             var $el = $(ReactDOM.findDOMNode(controls));
             var $startButton = $el.find('button:contains(Start)');

             expect($startButton.length).toBe(1);
        });
    })
});