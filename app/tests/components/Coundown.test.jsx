var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUltils = require('react-addons-test-utils');

var Countdown = require('Countdown');

// describe('Countdown', () => {
//     it('should-exist', () => {
//         expect(Countdown).toExist();
//     });

//     describe('handleSetCountdown', () => {
//         it('should set state to be started and countdown', () => {
//             var countdown = TestUltils.renderIntoDocument(<Countdown />);
//             countdown.handleSetCountdown(10);

//             expect(countdown.state.count).toBe(10);
//             expect(countdown.state.countdownStatus).toBe('started');
//         });
//     });
// });