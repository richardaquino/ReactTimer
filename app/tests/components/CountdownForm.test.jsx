var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUltils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should-exist', () => {
        expect(CountdownForm).toExist();
    }); 

   it('should call onSetCountdown if valid input entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUltils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        
        countdownForm.refs.seconds.value = '109'; 
        TestUltils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
   });

   it(' it should not call onSetCountdown if invalid input entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUltils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        
        countdownForm.refs.seconds.value = '1dddfa'; 
        TestUltils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});