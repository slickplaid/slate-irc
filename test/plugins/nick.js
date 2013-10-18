
var irc = require('../..');
var Stream = require('stream').PassThrough;

describe('nick()', function(){
  describe('on RPL_WELCOME', function(){
    it('should set client.me to the users nick', function(){
      var stream = new Stream;
      var client = irc(stream);
      stream.write(':cameron.freenode.net 001 tobi :Welcome to the freenode Internet Relay Chat Network tobi\r\n');
      client.me.should.equal('tobi');
    })
  })
})